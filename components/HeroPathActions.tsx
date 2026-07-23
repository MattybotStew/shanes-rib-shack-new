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
  "inline-flex flex-1 items-center justify-center rounded-[5px] bg-brand-red px-3 py-4 text-center text-sm font-bold uppercase leading-4 text-white transition-colors hover:bg-[#a01b25] sm:px-[26px] sm:py-5 sm:text-base";
const secondaryBtn =
  "inline-flex flex-1 items-center justify-center rounded-[5px] bg-brand-black px-3 py-4 text-center text-sm font-bold uppercase leading-4 text-white transition-colors hover:bg-[#1c2730] sm:px-[26px] sm:py-5 sm:text-base";

type HeroProps = {
  headline: string;
  body: string;
};

export function HeroPathActions() {
  const orderOnlineHref = ezCaterUrl();

  return (
    <div className="flex w-full flex-row flex-wrap items-stretch gap-3">
      <a
        href={orderOnlineHref}
        target="_blank"
        rel="noopener noreferrer"
        className={secondaryBtn}
        onClick={() => trackPath("online")}
      >
        Order Online
      </a>
      <Link
        href="#catering-inquiry"
        className={primaryBtn}
        onClick={() => trackPath("quote")}
      >
        Custom Quote
      </Link>
    </div>
  );
}

export { outlineBtn, primaryBtn, secondaryBtn };
export type { HeroProps };
