"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { asset } from "@/lib/asset";
import { locationFromPathname } from "@/lib/locationData";

const navItems = [
  { label: "Menu", href: "/menu", hasDropdown: true },
  { label: "Catering", href: "/catering" },
  { label: "Locations", href: "/locations" },
  { label: "Our Story", href: "/our-story" },
  { label: "News & Events", href: "/news-events" },
  { label: "Careers", href: "/careers" },
  { label: "FAQs", href: "/faqs" },
] as const;

function isActiveNav(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function ShackIcon() {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="shrink-0"
    >
      <path
        d="M18.8192 3.71875C19.8505 5.40625 18.913 7.71875 16.9755 7.96875C16.8192 8 16.6942 8 16.538 8C15.6005 8 14.788 7.59375 14.2255 6.96875C13.663 7.59375 12.8505 8 11.913 8C11.0067 8 10.163 7.59375 9.60049 6.96875C9.03799 7.59375 8.22549 8 7.31924 8C6.38174 8 5.56924 7.59375 5.00674 6.96875C4.44424 7.59375 3.63174 8 2.69424 8C2.53799 8 2.41299 8 2.25674 7.96875C0.319243 7.71875 -0.618257 5.40625 0.444243 3.71875L2.44424 0.46875C2.63174 0.1875 2.97549 0 3.31924 0H15.9442C16.288 0 16.6005 0.1875 16.788 0.46875L18.8192 3.71875ZM16.538 9C16.7255 9 16.913 9 17.1005 8.96875C17.288 8.96875 17.4442 8.90625 17.6317 8.875V15C17.6317 15.5625 17.163 16 16.6317 16H2.63174C2.06924 16 1.63174 15.5625 1.63174 15V8.875C1.78799 8.90625 1.94424 8.9375 2.13174 8.96875C2.31924 9 2.50674 9 2.69424 9C3.00674 9 3.31924 8.96875 3.63174 8.90625V12H15.6317V8.90625C15.913 8.96875 16.2255 9 16.538 9Z"
        fill="#D7334F"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="shrink-0"
    >
      <path
        d="M10.5921 0.5324C10.8283 0.596882 11 0.790328 11 1.02676C11 6.55073 6.53501 11 1.03965 11C0.78205 11 0.588853 10.8495 0.524454 10.6131L0.0092634 8.37773C-0.0336692 8.14129 0.0736623 7.88336 0.309791 7.77589L2.71402 6.74418C2.92868 6.6582 3.16481 6.72268 3.31507 6.89464L4.38839 8.20577C6.06276 7.41049 7.41513 6.03488 8.18792 4.40133L6.87847 3.32663C6.70674 3.17617 6.64234 2.93973 6.72821 2.72479L7.75859 0.317459C7.86592 0.0810246 8.12352 -0.0479397 8.35965 0.0165425L10.5921 0.5324Z"
        fill="#D7334F"
      />
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const onLocations = isActiveNav(pathname, "/locations");
  const activeLocation = locationFromPathname(pathname);
  const shackCtaLabel = onLocations ? "Change Your Shack" : "Find your shack";

  return (
    <header className="flex w-full flex-col items-center">
      {/* Alert banner — location pages use live top-header pattern */}
      {activeLocation ? (
        <div className="flex w-full items-center justify-center overflow-hidden bg-[#1A1A1A] px-5 py-3.5 lg:px-[30px]">
          <div className="flex w-full max-w-[1320px] flex-col items-center justify-between gap-3 sm:flex-row sm:gap-5">
            <div className="flex flex-wrap items-center justify-center gap-x-2.5 text-[13px] leading-4 text-white sm:justify-start">
              <Link
                href={`/locations/${activeLocation.slug}/`}
                className="inline-flex items-center gap-2.5 text-white hover:underline"
              >
                <ShackIcon />
                {activeLocation.shortName} Location
              </Link>
              <span className="text-white/80" aria-hidden>
                |
              </span>
              <a
                href={activeLocation.phoneHref}
                className="inline-flex items-center gap-2.5 text-white hover:underline"
              >
                <PhoneIcon />
                {activeLocation.phoneAlert}
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2.5 text-[13px] leading-4 text-white">
              <span className="rounded-xl bg-brand-red px-2.5 py-0.5 text-[12px] font-bold uppercase text-white">
                New!
              </span>
              <p className="text-center sm:text-left">
                Shaniacs, we have a new app! Download today in your App Store{" "}
                <Link
                  href="/rewards"
                  className="ml-2.5 font-bold text-brand-red hover:underline"
                >
                  Learn More
                  <span aria-hidden>→</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-full items-center justify-center overflow-hidden bg-brand-black px-5 py-3">
          <div className="flex w-full max-w-[1320px] items-center justify-center sm:justify-start">
            <p className="flex-1 text-center text-[13px] leading-[1.5] text-white sm:text-left">
              Catering for offices, parties &amp; events ·{" "}
              <a
                href="tel:7704166606"
                className="text-brand-gold underline-offset-2 hover:underline"
              >
                (770) 416-6606
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Desktop header — lg+ */}
      <div className="hidden w-full items-center justify-center bg-white px-5 py-2.5 lg:flex">
        <div className="flex w-full max-w-[1400px] items-center justify-between gap-4">
          <div className="flex shrink-0 items-center gap-5">
            <Link
              href="/"
              className="relative block h-[47px] w-[140px] shrink-0 overflow-hidden"
              aria-label="Shane's Rib Shack home"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/images/logo-desktop.svg")}
                alt="Shane's Rib Shack"
                className="block size-full object-contain object-left"
              />
            </Link>
            <Link
              href="/locations"
              className="flex items-center justify-center rounded-[5px] bg-brand-red px-3.5 py-3 text-xs font-bold uppercase leading-none text-white transition-colors hover:bg-[#a01b25]"
            >
              {shackCtaLabel}
            </Link>
          </div>

          <nav className="flex items-center" aria-label="Primary">
            {navItems.map((item) => {
              const active = isActiveNav(pathname, item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center justify-center gap-0.5 rounded-[5px] px-3.5 py-3 text-xs font-bold uppercase leading-none transition-colors ${
                    active
                      ? "bg-brand-red text-white"
                      : "bg-white text-brand-black hover:text-brand-red"
                  }`}
                >
                  {item.label}
                  {"hasDropdown" in item && item.hasDropdown ? (
                    <span className="relative ml-0.5 inline-block h-[5.5px] w-[9.5px] shrink-0 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={asset("/images/chevron-down.svg")}
                        alt=""
                        width={10}
                        height={6}
                        className="block size-full"
                        aria-hidden
                      />
                    </span>
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <Link
              href="/rewards"
              className="flex items-center justify-center rounded-[5px] border border-brand-black px-3.5 py-3 text-xs font-bold uppercase leading-none text-brand-black transition-colors hover:bg-brand-black hover:text-white"
            >
              Rewards
            </Link>
            <Link
              href="/order"
              className="flex items-center justify-center rounded-[5px] bg-brand-black px-3.5 py-3 text-xs font-bold uppercase leading-none text-white transition-colors hover:bg-[#1c2730]"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile header — node 5437:293 */}
      <div className="flex h-[70px] w-full items-center bg-white px-2.5 lg:hidden">
        <div className="flex h-full w-full items-center justify-between">
          <button
            type="button"
            className="relative block h-[17px] w-[22px] shrink-0 cursor-pointer"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/images/menu-icon.svg")}
              alt=""
              className="absolute inset-0 block size-full"
              aria-hidden
            />
          </button>

          <Link
            href="/"
            className="relative flex h-[58px] w-[58px] shrink-0 items-center justify-center"
            aria-label="Shane's Rib Shack home"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/images/logo-mobile.svg")}
              alt="Shane's Rib Shack"
              className="block size-full object-contain"
            />
          </Link>

          <Link
            href="/order"
            className="flex shrink-0 items-center justify-center rounded-[5px] text-center text-[10.44px] font-bold uppercase leading-[10.444px] text-brand-black"
          >
            <span>
              Order
              <br />
              Now
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile nav panel (hamburger open) — not in closed Figma frame; needed for usability */}
      {mobileOpen ? (
        <nav
          className="flex w-full flex-col border-t border-brand-black/10 bg-white px-4 py-2 lg:hidden"
          aria-label="Mobile"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="border-b border-brand-black/5 py-3 text-xs font-bold uppercase text-brand-black"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/locations"
            className="mt-3 flex items-center justify-center rounded-[5px] bg-brand-red px-3.5 py-3 text-xs font-bold uppercase text-white"
            onClick={() => setMobileOpen(false)}
          >
            {shackCtaLabel}
          </Link>
          <Link
            href="/rewards"
            className="mt-2 mb-2 flex items-center justify-center rounded-[5px] border border-brand-black px-3.5 py-3 text-xs font-bold uppercase text-brand-black"
            onClick={() => setMobileOpen(false)}
          >
            Rewards
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
