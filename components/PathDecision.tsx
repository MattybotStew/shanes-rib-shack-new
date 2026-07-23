"use client";

import Link from "next/link";
import { asset } from "@/lib/asset";
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

/** Step 1 — pick Order Online or Get a Quote. */
export default function PathDecision() {
  const orderOnlineHref = ezCaterUrl();

  return (
    <section
      id="choose-path"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden px-5 py-8 sm:py-10 lg:px-0 lg:py-14"
      aria-label="Step 1 — choose how to order"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/images/big-cta-bg.jpg")}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative flex w-full max-w-[960px] flex-col items-center gap-6 lg:gap-8">
        <header className="flex w-full max-w-[640px] flex-col items-center gap-2 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-gold">
            Step 1 — Pick your path
          </p>
          <h1 className="text-[28px] font-extrabold uppercase leading-none text-white sm:text-[36px] lg:text-[44px]">
            How would you like to order?
          </h1>
        </header>

        <div className="grid w-full gap-3 sm:gap-4 md:grid-cols-2 md:gap-5">
          <article className="flex flex-col rounded-[12px] border-2 border-white/25 bg-white p-5 sm:p-6 lg:p-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-brand-black/55">
              Offices &amp; small events
            </p>
            <h2 className="mb-2 text-xl font-extrabold uppercase leading-none text-brand-black sm:text-2xl">
              Order Online
            </h2>
            <p className="mb-5 flex-1 text-sm font-semibold leading-[1.45] text-brand-black/75 sm:text-base">
              Instant pricing &amp; checkout for set packages.
            </p>
            <a
              href={orderOnlineHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackPath("online")}
              className="inline-flex w-full items-center justify-center rounded-[5px] bg-brand-black px-5 py-4 text-sm font-bold uppercase leading-4 text-white transition-colors hover:bg-[#1c2730] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold sm:py-5 sm:text-base"
            >
              Order Online
            </a>
          </article>

          <article className="flex flex-col rounded-[12px] border-2 border-brand-red bg-white p-5 sm:p-6 lg:p-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-brand-red">
              Large or custom events
            </p>
            <h2 className="mb-2 text-xl font-extrabold uppercase leading-none text-brand-black sm:text-2xl">
              Get a Quote
            </h2>
            <p className="mb-5 flex-1 text-sm font-semibold leading-[1.45] text-brand-black/75 sm:text-base">
              Short form — a specialist replies during business hours.
            </p>
            <Link
              href="#catering-inquiry"
              onClick={() => trackPath("quote")}
              className="inline-flex w-full items-center justify-center rounded-[5px] bg-brand-red px-5 py-4 text-sm font-bold uppercase leading-4 text-white transition-colors hover:bg-[#a01b25] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold sm:py-5 sm:text-base"
            >
              Get a Quote
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
