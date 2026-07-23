"use client";

import Link from "next/link";
import { useState } from "react";
import { asset } from "@/lib/asset";

const navItems = [
  { label: "Menu", href: "/menu", hasDropdown: true },
  { label: "Catering", href: "/catering" },
  { label: "Locations", href: "/locations" },
  { label: "Our Story", href: "/our-story" },
  { label: "News & Events", href: "/news-events" },
  { label: "Careers", href: "/careers" },
  { label: "FAQs", href: "/faqs" },
] as const;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="flex w-full flex-col items-center">
      {/* Alert banner — soft catering trust line (no placeholder CMS copy) */}
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
              Find your shack
            </Link>
          </div>

          <nav className="flex items-center" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-center gap-0.5 rounded-[5px] bg-white px-3.5 py-3 text-xs font-bold uppercase leading-none text-brand-black transition-colors hover:text-brand-red"
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
            ))}
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
            Find your shack
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
