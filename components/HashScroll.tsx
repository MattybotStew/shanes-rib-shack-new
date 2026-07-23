"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

function normalizePath(path: string) {
  if (!path || path === "/") return "/";
  return path.endsWith("/") ? path.slice(0, -1) : path;
}

/** Strip Next.js basePath so href paths match usePathname(). */
function stripBasePath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (base && (path === base || path.startsWith(`${base}/`))) {
    const stripped = path.slice(base.length) || "/";
    return stripped;
  }
  return path;
}

function hashId(raw: string) {
  const hash = raw.includes("#")
    ? raw.slice(raw.indexOf("#") + 1)
    : raw.replace(/^#/, "");
  return hash.split("?")[0]?.trim() ?? "";
}

/** Notify listeners that pushState updated search/hash (pushState does not fire popstate). */
function notifyUrlChange() {
  window.dispatchEvent(new Event("catering:urlchange"));
}

/** Smooth-scroll to in-page anchors (#catering-menu, #catering-inquiry, etc.). */
export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollHash = () => {
      const id = hashId(window.location.hash);
      if (!id) return;
      // Wait for layout after route/paint
      window.requestAnimationFrame(() => {
        window.setTimeout(() => scrollToId(id), 80);
      });
    };

    scrollHash();
    window.addEventListener("hashchange", scrollHash);
    return () => window.removeEventListener("hashchange", scrollHash);
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.includes("#")) return;

      // External absolute URLs to other hosts — leave alone
      if (/^https?:\/\//i.test(href)) {
        try {
          const url = new URL(href);
          if (url.origin !== window.location.origin) return;
        } catch {
          return;
        }
      }

      const id = hashId(href);
      if (!id) return;

      const pathPart = href.split("#")[0]?.split("?")[0] ?? "";
      const appPath = stripBasePath(window.location.pathname);
      const samePage =
        pathPart === "" ||
        normalizePath(pathPart) === normalizePath(pathname) ||
        normalizePath(pathPart) === normalizePath(appPath);

      if (!samePage && pathPart.startsWith("/")) {
        // Cross-route: let Next navigate; effect above scrolls on mount
        return;
      }

      if (!document.getElementById(id)) return;

      event.preventDefault();
      const qs = href.includes("?")
        ? href.slice(href.indexOf("?"), href.indexOf("#"))
        : "";
      // Preserve real browser pathname (includes basePath on GitHub Pages)
      const next = `${window.location.pathname}${qs}#${id}`;
      window.history.pushState(null, "", next);
      notifyUrlChange();
      scrollToId(id);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  return null;
}
