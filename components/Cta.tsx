"use client";

import Link from "next/link";
import type { ReactNode } from "react";

export type CtaVariant = "red" | "black" | "white" | "outline";

const base =
  "inline-flex items-center justify-center rounded-[5px] px-5 py-4 text-center text-sm font-bold uppercase leading-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold sm:px-[26px] sm:py-5 sm:text-base";

const variants: Record<CtaVariant, string> = {
  red: "bg-brand-red text-white hover:bg-[#a01b25]",
  black: "bg-brand-black text-white hover:bg-[#1c2730]",
  white: "bg-white text-brand-black hover:bg-brand-tan",
  outline:
    "border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white",
};

function isExternal(href: string) {
  return /^(https?:|tel:|mailto:)/.test(href);
}

/** Reports outbound clicks to GTM/GA the same way the catering CTAs do. */
function trackOutbound(href: string) {
  if (typeof window === "undefined") return;
  const w = window as Window & {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  };
  let destination = href;
  try {
    destination = new URL(href).hostname.replace(/^www\./, "");
  } catch {
    /* keep raw href for tel:/mailto: */
  }
  w.dataLayer?.push({ event: "outbound_click", destination });
  w.gtag?.("event", "outbound_click", { destination });
}

type CtaProps = {
  href: string;
  children: ReactNode;
  variant?: CtaVariant;
  className?: string;
};

export default function Cta({
  href,
  children,
  variant = "red",
  className = "",
}: CtaProps) {
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if (isExternal(href)) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={classes}
        onClick={() => trackOutbound(href)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
