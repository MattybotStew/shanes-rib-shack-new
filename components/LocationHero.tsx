"use client";

import Link from "next/link";
import { useState } from "react";
import { asset } from "@/lib/asset";
import { orderUrl, type LocationDetail } from "@/lib/locationData";

function BriefcaseIcon() {
  return (
    <svg
      className="size-3.5 shrink-0"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <rect x="2.25" y="5.25" width="11.5" height="8.5" rx="1.25" />
      <path d="M5.75 5.25V4A1.25 1.25 0 0 1 7 2.75h2A1.25 1.25 0 0 1 10.25 4v1.25" />
      <path d="M2.25 8.5h11.5" />
    </svg>
  );
}

function HeartIcon({ filled }: { filled?: boolean }) {
  return (
    <svg
      className="size-3.5 shrink-0"
      viewBox="0 0 16 16"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M8 13.6S2.2 10.1 2.2 5.9A2.9 2.9 0 0 1 5.2 3c1 0 1.9.5 2.8 1.5C8.9 3.5 9.8 3 10.8 3a2.9 2.9 0 0 1 3 2.9c0 4.2-5.8 7.7-5.8 7.7Z" />
    </svg>
  );
}

const ctaBase =
  "inline-flex items-center justify-center rounded-[6px] px-[15px] py-[11px] text-xs font-bold uppercase leading-4 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold";

/** Location detail hero — matches live Edgewood card chrome + CTAs. */
export default function LocationHero({ location }: { location: LocationDetail }) {
  const [isMyShack, setIsMyShack] = useState(true);

  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[25px] px-4 py-10 lg:flex-row lg:items-stretch lg:px-[15px] lg:py-14">
        {/* Details card — live `.location_details` */}
        <div className="flex min-w-0 flex-1 flex-col rounded-[12px] border border-black/[0.1] p-5">
          <ul className="mb-[15px] flex list-none flex-wrap items-center p-0 text-base font-semibold leading-[130%] text-brand-black">
            <li className="relative mr-5 inline-flex items-center pr-0 after:absolute after:-right-3 after:top-1/2 after:-translate-y-1/2 after:text-brand-black after:content-['|']">
              <button
                type="button"
                aria-pressed={isMyShack}
                onClick={() => setIsMyShack((v) => !v)}
                className={`inline-flex items-center gap-2 transition-colors ${
                  isMyShack
                    ? "text-brand-black"
                    : "text-brand-red hover:text-brand-red"
                }`}
              >
                {!isMyShack ? <HeartIcon /> : null}
                {isMyShack ? "Current Shack" : "Make My Shack"}
              </button>
            </li>
            <li className="inline-flex items-center">
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 text-brand-red transition-colors hover:underline"
              >
                <BriefcaseIcon />
                Careers
              </Link>
            </li>
          </ul>

          <h1 className="text-[32px] font-extrabold uppercase leading-none text-brand-red lg:text-[48px]">
            {location.shortName}
          </h1>

          <div className="mt-5 border-y border-black/[0.1] py-5">
            <a
              href={location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-base font-semibold leading-snug text-brand-red transition-colors hover:underline"
            >
              {location.address}
            </a>
            <a
              href={location.phoneHref}
              className="mt-1 block text-base font-semibold leading-snug text-brand-red transition-colors hover:underline"
            >
              {location.phone}
            </a>

            <div className="mt-2.5 flex flex-wrap items-end gap-x-[5px] gap-y-1">
              <p className="text-base font-semibold leading-[22px] text-brand-black">
                {location.hours}
              </p>
              <div className="relative pl-2 before:absolute before:left-0 before:top-1/2 before:h-4 before:w-0.5 before:-translate-y-1/2 before:rounded-full before:bg-brand-black">
                <Link
                  href="/catering/#catering-menu"
                  className="text-base font-semibold leading-[22px] text-brand-red transition-colors hover:underline"
                >
                  See Our Catering Menu
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-[22px] flex flex-wrap items-center gap-3">
            <a
              href={orderUrl("PICKUP", location.locationId)}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ctaBase} border-2 border-brand-black bg-transparent text-brand-black hover:border-[#d94a2b] hover:bg-[#d94a2b] hover:text-white`}
            >
              Order Pickup
            </a>
            <a
              href={orderUrl("DELIVERY", location.locationId)}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ctaBase} border border-brand-red bg-brand-red text-white hover:shadow-[0px_6px_16px_0px_rgba(217,74,43,0.4)]`}
            >
              Order Delivery
            </a>
            <a
              href={location.ezCaterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ctaBase} border border-brand-black bg-brand-black text-white hover:border-[#d94a2b] hover:bg-[#d94a2b]`}
            >
              Order catering
            </a>
          </div>
        </div>

        {/* Storefront / map — live `.post_thumbnail` */}
        <div className="relative min-h-[300px] w-full shrink-0 overflow-hidden rounded-[12px] sm:min-h-[380px] lg:min-h-0 lg:w-1/2 lg:flex-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(location.storefrontImage)}
            alt={`${location.shortName} Shane's Rib Shack storefront`}
            className="absolute inset-0 size-full object-cover"
          />
          <a
            href={location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-5 right-5 inline-flex items-center justify-center rounded-[6px] border border-white bg-white px-3 py-2 text-xs font-normal uppercase leading-none text-brand-black transition-all duration-300 hover:border-[#d94a2b] hover:bg-[#d94a2b] hover:text-white"
          >
            Map &amp; directions
          </a>
        </div>
      </div>
    </section>
  );
}
