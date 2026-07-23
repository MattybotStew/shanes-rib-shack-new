"use client";

import Link from "next/link";
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

const outlineBtn =
  "inline-flex items-center justify-center rounded-[5px] border-2 border-brand-black px-[26px] py-5 text-base font-bold uppercase leading-4 text-brand-black transition-colors hover:bg-brand-black hover:text-white";
const primaryBtn =
  "inline-flex items-center justify-center rounded-[5px] bg-brand-red px-[26px] py-5 text-base font-bold uppercase leading-4 text-white transition-colors hover:bg-[#a01b25]";
const secondaryBtn =
  "inline-flex items-center justify-center rounded-[5px] bg-brand-black px-[26px] py-5 text-base font-bold uppercase leading-4 text-white transition-colors hover:bg-[#1c2730]";

const pathHelper =
  "Instant checkout for standard packages · Custom events get a specialist reply during business hours";

type HeroProps = {
  headline: string;
  body: string;
};

export function HeroPathActions({ compact }: { compact?: boolean }) {
  const orderOnlineHref = ezCaterUrl();
  const width = compact ? "w-full text-center" : "";

  return (
    <>
      <div
        className={`flex ${compact ? "w-full flex-col" : "flex-wrap"} items-center gap-3`}
      >
        <a
          href={orderOnlineHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`${secondaryBtn} ${width}`}
          onClick={() => trackPath("online")}
        >
          Order Online (Standard Packages)
        </a>
        <Link
          href="#catering-inquiry"
          className={`${primaryBtn} ${width}`}
          onClick={() => trackPath("quote")}
        >
          Request a Custom Quote
        </Link>
      </div>
      <p
        className={`w-full text-sm font-semibold leading-[1.5] text-brand-black/70 ${compact ? "text-center" : ""}`}
      >
        {pathHelper}
      </p>
    </>
  );
}

export { outlineBtn, primaryBtn, secondaryBtn, pathHelper };
export type { HeroProps };
