"use client";

import { asset } from "@/lib/asset";

type ShareButtonsProps = {
  /** Absolute or site-relative path used for share URLs. */
  path: string;
  title: string;
};

/** Build a shareable absolute URL, respecting GitHub Pages basePath. */
function absoluteUrl(path: string) {
  if (typeof window === "undefined") return path;
  try {
    if (/^https?:\/\//i.test(path)) return path;
    const normalized = path.startsWith("/") ? path : `/${path}`;
    // Prefer the live page URL when already on this route (includes basePath).
    const current = new URL(window.location.href);
    const currentPath = current.pathname.replace(/\/$/, "") || "/";
    const targetPath = normalized.replace(/\/$/, "") || "/";
    if (
      currentPath === targetPath ||
      currentPath.endsWith(targetPath)
    ) {
      return current.toString().split("#")[0].split("?")[0];
    }
    // Prefix basePath for site-relative paths (Pages mounts under /shanes-rib-shack-new).
    const withBase = asset(normalized);
    return new URL(withBase, window.location.origin).toString();
  } catch {
    return path;
  }
}

/**
 * Red circular share icons from Figma menu item PDP (`7517:9226`).
 * Copy / LinkedIn / X / Facebook.
 */
export default function ShareButtons({ path, title }: ShareButtonsProps) {
  const btn =
    "inline-flex size-8 items-center justify-center overflow-hidden rounded-full bg-brand-red p-1 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold";

  const onCopy = async () => {
    const url = absoluteUrl(path);
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      /* ignore */
    }
  };

  const shareLinkedIn = () => {
    const url = encodeURIComponent(absoluteUrl(path));
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const shareTwitter = () => {
    const url = encodeURIComponent(absoluteUrl(path));
    const text = encodeURIComponent(title);
    window.open(
      `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const shareFacebook = () => {
    const url = encodeURIComponent(absoluteUrl(path));
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="flex items-start gap-2" aria-label="Share this page">
      <button type="button" className={btn} aria-label="Copy link" onClick={onCopy}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/images/share/link.svg")}
          alt=""
          className="size-6"
          aria-hidden
        />
      </button>
      <button
        type="button"
        className={btn}
        aria-label="Share on LinkedIn"
        onClick={shareLinkedIn}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/images/share/linkedin.svg")}
          alt=""
          className="size-6"
          aria-hidden
        />
      </button>
      <button
        type="button"
        className={btn}
        aria-label="Share on X"
        onClick={shareTwitter}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/images/share/twitter.svg")}
          alt=""
          className="size-6"
          aria-hidden
        />
      </button>
      <button
        type="button"
        className={btn}
        aria-label="Share on Facebook"
        onClick={shareFacebook}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/images/share/facebook.svg")}
          alt=""
          className="size-6"
          aria-hidden
        />
      </button>
    </div>
  );
}
