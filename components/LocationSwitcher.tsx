"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * First-visit mobile location switcher (client-chosen recommendation #3).
 *
 * On a first visit it suggests the closest shack — "We think you're near
 * Edgewood" — with a primary **View Location** button (opens that shack's
 * page) and a **Change** button (opens the nearby-shack picker). It can be
 * dismissed with ×, and once a shack is chosen or dismissed it stays away
 * (localStorage, mirroring the live site's `myShanes` cookie).
 *
 * Preview / review: the switcher only appears with `?shack-switcher=1` on
 * the homepage URL — the default homepage experience is unchanged. Choosing
 * or dismissing still persists (localStorage), mirroring live behavior.
 */

type Shack = { slug: string; name: string; title: string };

const NEARBY_SHACKS: Shack[] = [
  { slug: "edgewood-atlanta-ga", name: "Edgewood", title: "Edgewood - Atlanta, GA" },
  { slug: "norcross-ga", name: "Norcross", title: "Norcross, GA" },
  { slug: "carrollton-ga", name: "Carrollton", title: "Carrollton, GA" },
  { slug: "douglasville-ga", name: "Douglasville", title: "Douglasville, GA" },
];

const SUGGESTED = NEARBY_SHACKS[0];

const STORAGE_CHOSEN = "myShanes";
const STORAGE_DISMISSED = "shackSwitcherDismissed";

function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer?.push({ event, ...params });
}

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

export default function LocationSwitcher() {
  const [phase, setPhase] = useState<"hidden" | "suggest" | "picker">("hidden");
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const forced = new URLSearchParams(window.location.search).get("shack-switcher") === "1";
      if (forced) {
        setPhase("suggest");
        track("shack_switcher_shown", { suggested: SUGGESTED.name });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 3500);
    return () => window.clearTimeout(t);
  }, [toast]);

  function dismiss() {
    window.localStorage.setItem(STORAGE_DISMISSED, "1");
    track("shack_switcher_dismissed");
    setPhase("hidden");
  }

  function viewLocation() {
    window.localStorage.setItem(STORAGE_CHOSEN, SUGGESTED.slug);
    track("location_selected", { shack: SUGGESTED.name, source: "switcher", method: "nearest" });
  }

  function chooseShack(shack: Shack) {
    window.localStorage.setItem(STORAGE_CHOSEN, shack.slug);
    track("location_selected", { shack: shack.name, source: "switcher", method: "picker" });
    setPhase("hidden");
    setToast(`${shack.name} is now your shack.`);
  }

  if (phase === "hidden" && !toast) return null;

  return (
    <>
      {/* scrim */}
      {phase !== "hidden" && (
        <div
          className="fixed inset-0 z-50 bg-brand-black/45"
          aria-hidden="true"
          onClick={phase === "picker" ? () => setPhase("suggest") : dismiss}
        />
      )}

      {phase === "suggest" && (
        <div
          role="dialog"
          aria-label="Your nearby Shane's"
          className="fixed inset-x-0 bottom-0 z-[60] mx-auto w-full max-w-[520px] rounded-t-[16px] bg-white px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4 shadow-[0_-8px_22px_rgba(16,24,32,0.22)]"
        >
          <button
            type="button"
            aria-label="Dismiss"
            onClick={dismiss}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-brand-tan text-base font-extrabold leading-none text-brand-black hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold"
          >
            ×
          </button>
          <div className="mx-auto mb-3 h-1 w-9 rounded-full bg-black/15" aria-hidden="true" />
          <p className="flex items-center gap-2 pr-10 text-lg font-extrabold leading-snug text-brand-black">
            <PinIcon className="h-[18px] w-[18px] shrink-0 text-brand-red" />
            We think you&rsquo;re near {SUGGESTED.name}
          </p>
          <p className="mt-1 text-sm text-[#5a6067]">The closest Shane&rsquo;s to your phone.</p>
          <div className="mt-4 flex gap-3">
            <Link
              href={`/locations/${SUGGESTED.slug}/`}
              onClick={viewLocation}
              className="flex-[1.45] rounded-[5px] bg-brand-red px-4 py-3.5 text-center text-sm font-bold uppercase leading-4 text-white hover:bg-[#a01b25] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            >
              View Location
            </Link>
            <button
              type="button"
              onClick={() => {
                track("picker_open", { source: "switcher" });
                setPhase("picker");
              }}
              className="flex-1 rounded-[5px] border-2 border-brand-black px-4 py-3 text-center text-sm font-bold uppercase leading-4 text-brand-black hover:bg-brand-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            >
              Change
            </button>
          </div>
          <Link
            href="/locations/"
            className="mt-3 block text-center text-xs font-bold text-brand-red underline underline-offset-2 hover:text-[#a01b25]"
          >
            See all locations
          </Link>
        </div>
      )}

      {phase === "picker" && (
        <div
          role="dialog"
          aria-label="Nearby Shane's"
          className="fixed inset-x-0 bottom-0 z-[60] mx-auto w-full max-w-[520px] rounded-t-[16px] bg-white px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4 shadow-[0_-8px_22px_rgba(16,24,32,0.22)]"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setPhase("suggest")}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-brand-tan text-base font-extrabold leading-none text-brand-black hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold"
          >
            ×
          </button>
          <div className="mx-auto mb-3 h-1 w-9 rounded-full bg-black/15" aria-hidden="true" />
          <p className="text-lg font-extrabold leading-snug text-brand-black">Nearby Shane&rsquo;s</p>
          <p className="mb-3 mt-1 text-sm text-[#5a6067]">Pick your shack — we&rsquo;ll remember it.</p>
          <ul className="space-y-2">
            {NEARBY_SHACKS.map((shack) => (
              <li
                key={shack.slug}
                className="flex items-center gap-3 rounded-[10px] border-[1.5px] border-[#e3ded1] px-3 py-2.5"
              >
                <span className="min-w-0">
                  <span className="block truncate text-[15px] font-extrabold text-brand-black">
                    {shack.title}
                  </span>
                </span>
                <button
                  type="button"
                  onClick={() => chooseShack(shack)}
                  className="ml-auto shrink-0 rounded-[6px] bg-brand-black px-4 py-2 text-xs font-bold uppercase leading-4 text-white hover:bg-[#1c2730] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
                >
                  Use
                </button>
              </li>
            ))}
          </ul>
          <Link
            href="/locations/"
            className="mt-3 block text-center text-xs font-bold text-brand-red underline underline-offset-2 hover:text-[#a01b25]"
          >
            See all locations
          </Link>
        </div>
      )}

      {toast && (
        <div
          role="status"
          className="fixed inset-x-4 bottom-4 z-[70] mx-auto flex w-auto max-w-[480px] items-center gap-2 rounded-[8px] bg-brand-black px-4 py-3 text-xs font-bold text-white shadow-[0_8px_20px_rgba(16,24,32,0.3)]"
        >
          <PinIcon className="h-4 w-4 shrink-0 text-brand-gold" />
          {toast}
        </div>
      )}
    </>
  );
}
