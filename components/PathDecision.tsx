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

const checkIcon = (
  <svg
    className="mt-0.5 size-4 shrink-0 text-brand-gold"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden
  >
    <path
      fillRule="evenodd"
      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
      clipRule="evenodd"
    />
  </svg>
);

/**
 * Two-path decision: standard online order (ezCater) vs custom quote form.
 * Replaces the single “Request a Custom Quote” promo with explicit routing.
 */
export default function PathDecision() {
  const orderOnlineHref = ezCaterUrl();

  return (
    <section
      id="choose-path"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden px-5 py-10 lg:px-0 lg:py-[60px]"
      aria-label="Choose how to order catering"
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

      <div className="relative flex w-full max-w-[1200px] flex-col items-center gap-8 lg:gap-10">
        <header className="flex w-full max-w-[720px] flex-col items-center gap-3 text-center">
          <h1 className="text-[32px] font-extrabold uppercase leading-none text-white sm:text-[40px] lg:text-[48px]">
            How would you like to order?
          </h1>
          <p className="text-base font-semibold leading-[1.5] text-white/85 sm:text-lg">
            Two clear paths — pick the one that matches your event. No wrong
            choice; we&apos;ll take it from there.
          </p>
        </header>

        <div className="grid w-full gap-5 md:grid-cols-2 md:gap-6">
          {/* Path A — Standard / ezCater */}
          <article className="flex flex-col rounded-[12px] border-2 border-white/25 bg-white p-6 shadow-lg sm:p-8 lg:p-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-brand-black/60">
              Best for offices &amp; small events
            </p>
            <h3 className="mb-2 text-[22px] font-extrabold uppercase leading-none text-brand-black sm:text-[26px]">
              Order Standard Catering
            </h3>
            <p className="mb-5 flex-1 text-base font-semibold leading-[1.5] text-brand-black/75">
              Instant pricing &amp; checkout for set packages. Ready when you
              are.
            </p>
            <ul className="mb-6 flex flex-col gap-2.5 text-sm font-semibold text-brand-black/80">
              <li className="flex items-start gap-2">
                {checkIcon}
                Standard packages with known portions
              </li>
              <li className="flex items-start gap-2">
                {checkIcon}
                Instant pricing online
              </li>
              <li className="flex items-start gap-2">
                {checkIcon}
                Checkout when you&apos;re ready
              </li>
            </ul>
            <a
              href={orderOnlineHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackPath("online")}
              className="inline-flex w-full items-center justify-center rounded-[5px] bg-brand-black px-[26px] py-5 text-base font-bold uppercase leading-4 text-white transition-colors hover:bg-[#1c2730] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            >
              Order Online
            </a>
            <p className="mt-3 text-center text-xs font-semibold text-brand-black/55">
              Opens ezCater in a new tab
            </p>
          </article>

          {/* Path B — Custom quote */}
          <article className="flex flex-col rounded-[12px] border-2 border-brand-red bg-white p-6 shadow-lg ring-2 ring-brand-red/20 sm:p-8 lg:p-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-brand-red">
              Best for large or custom events
            </p>
            <h3 className="mb-2 text-[22px] font-extrabold uppercase leading-none text-brand-black sm:text-[26px]">
              Request a Custom Quote
            </h3>
            <p className="mb-5 flex-1 text-base font-semibold leading-[1.5] text-brand-black/75">
              Large events, weddings, or special requests — a specialist will
              reach out during business hours.
            </p>
            <ul className="mb-6 flex flex-col gap-2.5 text-sm font-semibold text-brand-black/80">
              <li className="flex items-start gap-2">
                {checkIcon}
                Short form — about 1 minute
              </li>
              <li className="flex items-start gap-2">
                {checkIcon}
                ~48-hour notice for most events
              </li>
              <li className="flex items-start gap-2">
                {checkIcon}
                Human follow-up during business hours
              </li>
            </ul>
            <Link
              href="#catering-inquiry"
              onClick={() => trackPath("quote")}
              className="inline-flex w-full items-center justify-center rounded-[5px] bg-brand-red px-[26px] py-5 text-base font-bold uppercase leading-4 text-white transition-colors hover:bg-[#a01b25] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            >
              Get a Quote
            </Link>
            <p className="mt-3 text-center text-xs font-semibold text-brand-black/55">
              No commitment — just the details we need to start
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
