"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ezCaterUrl } from "@/lib/ezcater";

function trackPath(path: "online" | "quote") {
  if (typeof window === "undefined") return;
  const w = window as Window & {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  };
  w.dataLayer?.push({ event: "catering_path_selected", path });
  w.gtag?.("event", "catering_path_selected", { path });
  if (path === "online") {
    w.dataLayer?.push({ event: "outbound_click", destination: "ezcater" });
    w.gtag?.("event", "outbound_click", { destination: "ezcater" });
  }
}

/** Mobile sticky dual CTA — appears after Step 1 leaves the viewport. */
export default function StickyPathBar() {
  const [visible, setVisible] = useState(false);
  const [onInquiry, setOnInquiry] = useState(false);

  useEffect(() => {
    const pathTarget = document.getElementById("choose-path");
    const inquiryTarget = document.getElementById("catering-inquiry");
    if (!pathTarget) return;

    const pathObserver = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px 0px -40% 0px" },
    );
    pathObserver.observe(pathTarget);

    let inquiryObserver: IntersectionObserver | null = null;
    if (inquiryTarget) {
      inquiryObserver = new IntersectionObserver(
        ([entry]) => {
          setOnInquiry(entry.isIntersecting);
        },
        { threshold: 0.25 },
      );
      inquiryObserver.observe(inquiryTarget);
    }

    return () => {
      pathObserver.disconnect();
      inquiryObserver?.disconnect();
    };
  }, []);

  const showBar = visible;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-brand-black/10 bg-white/95 px-3 pt-3 backdrop-blur-sm transition-transform duration-200 lg:hidden ${
        showBar ? "translate-y-0" : "translate-y-full"
      }`}
      style={{
        paddingBottom: "max(0.75rem, env(safe-area-inset-bottom, 0px))",
      }}
      aria-hidden={!showBar}
    >
      <div className="mx-auto flex max-w-[480px] gap-2">
        <a
          href={ezCaterUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackPath("online")}
          tabIndex={showBar ? 0 : -1}
          className="inline-flex flex-1 items-center justify-center rounded-[5px] bg-brand-black px-3 py-3.5 text-center text-xs font-bold uppercase leading-4 text-white"
        >
          Order Online
        </a>
        {!onInquiry ? (
          <Link
            href="#catering-inquiry"
            onClick={() => trackPath("quote")}
            tabIndex={showBar ? 0 : -1}
            className="inline-flex flex-1 items-center justify-center rounded-[5px] bg-brand-red px-3 py-3.5 text-center text-xs font-bold uppercase leading-4 text-white"
          >
            Get a Quote
          </Link>
        ) : null}
      </div>
    </div>
  );
}
