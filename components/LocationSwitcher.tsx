"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  chosenSlugFromStorage,
  dispatchShackChosen,
  isShackSwitcherPreview,
  PREVIEW_NEARBY_SLUGS,
  SHACK_CHOSEN,
  SHACK_PICKER_OPEN,
  STORAGE_CHOSEN,
  STORAGE_DISMISSED,
  type ShackPickerSource,
} from "@/lib/shackSwitcherEvents";
import { EDGEWOOD, LOCATIONS_BY_SLUG } from "@/lib/locationData";

/**
 * First-visit mobile location switcher (Option #3) + everyday top-bar picker (Option #1).
 *
 * Preview: `?shack-switcher=1` on the homepage. Default homepage is unchanged.
 *
 * Review round 2 (client feedback): search in the picker, distance miles from the
 * phone's location (sorted nearest first), "Current" badge, whole-row Select,
 * plain "Select a location" copy, picker × counts as the one-time dismissal,
 * no-location fallback (no "Nearby" claim / miles), close-button aria-label,
 * and a viewport-height cap so short screens never trap the page CTA.
 */

type Shack = { slug: string; name: string; title: string; address: string; haystack: string };

const NEARBY_SHACKS: Shack[] = PREVIEW_NEARBY_SLUGS.map((slug) => {
  const loc = LOCATIONS_BY_SLUG[slug];
  return {
    slug,
    name: loc.shortName,
    title: loc.name,
    address: loc.address,
    haystack: `${loc.name} ${loc.shortName} ${loc.address}`.toLowerCase(),
  };
});

const SUGGESTED = NEARBY_SHACKS[0];

/** Approximate store coordinates for nearest-first sorting + mileage. */
const SHACK_COORDS: Record<string, { lat: number; lng: number }> = {
  "edgewood-atlanta-ga": { lat: 33.7574, lng: -84.3748 },
  "norcross-ga": { lat: 33.9507, lng: -84.2884 },
  "carrollton-ga": { lat: 33.5745, lng: -85.09 },
  "douglasville-ga": { lat: 33.7434, lng: -84.7487 },
};

function milesBetween(a: { lat: number; lng: number }, b: { lat: number; lng: number }): number {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const R = 3958.8; // Earth radius in miles
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

function formatMiles(mi: number): string {
  return `${mi < 10 ? mi.toFixed(1) : Math.round(mi)} mi`;
}

function cityFromAddress(address: string): string {
  return address.split(",")[1]?.trim() ?? "";
}

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
  const [pickerEntry, setPickerEntry] = useState<ShackPickerSource | "change">("change");
  const [toast, setToast] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [currentSlug, setCurrentSlug] = useState<string | null>(null);
  const [geo, setGeo] = useState<{ status: "idle" | "nearby" | "unavailable"; distances: Record<string, number> }>({
    status: "idle",
    distances: {},
  });

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (!isShackSwitcherPreview()) return;

      const dismissed = window.localStorage.getItem(STORAGE_DISMISSED) === "1";
      const chosen = window.localStorage.getItem(STORAGE_CHOSEN);
      setCurrentSlug(chosenSlugFromStorage() ?? EDGEWOOD.slug);
      if (dismissed || chosen) {
        setPhase("hidden");
        return;
      }

      setPhase("suggest");
      track("shack_switcher_shown", { suggested: SUGGESTED.name });
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    function onOpenPicker(e: Event) {
      if (!isShackSwitcherPreview()) return;
      const source = (e as CustomEvent<{ source: ShackPickerSource }>).detail?.source ?? "topbar";
      setPickerEntry(source);
      setQuery("");
      setPhase("picker");
      track("picker_open", { source });
    }

    function onChosen() {
      setCurrentSlug(chosenSlugFromStorage() ?? EDGEWOOD.slug);
    }

    window.addEventListener(SHACK_PICKER_OPEN, onOpenPicker);
    window.addEventListener(SHACK_CHOSEN, onChosen);
    return () => {
      window.removeEventListener(SHACK_PICKER_OPEN, onOpenPicker);
      window.removeEventListener(SHACK_CHOSEN, onChosen);
    };
  }, []);

  // Ask for the phone's location the first time the picker opens —
  // nearest-first sorting + mileage. Failure/denial → no "Nearby" claim (item 8).
  useEffect(() => {
    if (phase !== "picker" || geo.status !== "idle") return;
    const frame = requestAnimationFrame(() => {
      if (typeof navigator === "undefined" || !navigator.geolocation) {
        setGeo({ status: "unavailable", distances: {} });
        return;
      }
      try {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const here = { lat: pos.coords.latitude, lng: pos.coords.longitude };
            const distances: Record<string, number> = {};
            for (const shack of NEARBY_SHACKS) {
              const coords = SHACK_COORDS[shack.slug];
              if (coords) distances[shack.slug] = milesBetween(here, coords);
            }
            setGeo({ status: "nearby", distances });
          },
          () => setGeo({ status: "unavailable", distances: {} }),
          { enableHighAccuracy: false, timeout: 6000, maximumAge: 300000 },
        );
      } catch {
        setGeo({ status: "unavailable", distances: {} });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [phase, geo.status]);

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
    dispatchShackChosen(SUGGESTED.slug);
    track("location_selected", { shack: SUGGESTED.name, source: "switcher", method: "nearest" });
  }

  function closePicker() {
    // First-visit flow: closing the picker (× or scrim) counts as the one-time
    // dismissal — the suggestion card never comes back (item 7).
    if (pickerEntry === "change") {
      window.localStorage.setItem(STORAGE_DISMISSED, "1");
      track("shack_switcher_dismissed", { via: "picker" });
    }
    setQuery("");
    setPhase("hidden");
  }

  function chooseShack(shack: Shack) {
    window.localStorage.setItem(STORAGE_CHOSEN, shack.slug);
    dispatchShackChosen(shack.slug);
    setCurrentSlug(shack.slug);
    track("location_selected", { shack: shack.name, source: "switcher", method: "picker" });
    setPhase("hidden");
    setToast(`${shack.name} is now your shack.`);
  }

  if (phase === "hidden" && !toast) return null;

  const nearbyClaim = geo.status !== "unavailable";
  const visibleShacks = (() => {
    const q = query.trim().toLowerCase();
    const list = q ? NEARBY_SHACKS.filter((s) => s.haystack.includes(q)) : [...NEARBY_SHACKS];
    if (geo.status === "nearby") {
      list.sort((a, b) => (geo.distances[a.slug] ?? Infinity) - (geo.distances[b.slug] ?? Infinity));
    }
    return list;
  })();

  return (
    <>
      {phase !== "hidden" && (
        <div
          className="fixed inset-0 z-50 bg-brand-black/45"
          aria-hidden="true"
          onClick={phase === "picker" ? closePicker : dismiss}
        />
      )}

      {phase === "suggest" && (
        <div
          role="dialog"
          aria-label="Your nearby Shane's"
          className="fixed inset-x-0 bottom-0 z-[60] mx-auto max-h-[85vh] w-full max-w-[520px] overflow-y-auto rounded-t-[16px] bg-white px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4 shadow-[0_-8px_22px_rgba(16,24,32,0.22)]"
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
                setPickerEntry("change");
                track("picker_open", { source: "change" });
                setQuery("");
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
          aria-label={nearbyClaim ? "Nearby Shane's" : "Location picker"}
          className="fixed inset-x-0 bottom-0 z-[60] mx-auto max-h-[85vh] w-full max-w-[520px] overflow-y-auto rounded-t-[16px] bg-white px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4 shadow-[0_-8px_22px_rgba(16,24,32,0.22)]"
        >
          <button
            type="button"
            aria-label="Close location picker"
            onClick={closePicker}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-brand-tan text-base font-extrabold leading-none text-brand-black hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold"
          >
            ×
          </button>
          <div className="mx-auto mb-3 h-1 w-9 rounded-full bg-black/15" aria-hidden="true" />
          <p className="text-lg font-extrabold leading-snug text-brand-black">
            {nearbyClaim ? <>Nearby Shane&rsquo;s</> : <>Shane&rsquo;s locations</>}
          </p>
          <p className="mb-3 mt-1 text-sm text-[#5a6067]">
            {nearbyClaim ? (
              <>Select a location &mdash; we&rsquo;ll remember it.</>
            ) : (
              <>Search or select a location &mdash; we&rsquo;ll remember it.</>
            )}
          </p>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by city or ZIP"
            aria-label="Search locations"
            className="mb-3 w-full rounded-[8px] border-[1.5px] border-[#e3ded1] bg-brand-tan px-3.5 py-2.5 text-[15px] font-semibold text-brand-black placeholder:font-normal placeholder:text-[#8a9097] focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red"
          />
          {visibleShacks.length === 0 ? (
            <p className="rounded-[10px] border-[1.5px] border-dashed border-[#e3ded1] px-3 py-4 text-center text-sm text-[#5a6067]">
              No shack matches &ldquo;{query.trim()}&rdquo; &mdash; try the full locations list.
            </p>
          ) : (
            <ul className="space-y-2">
              {visibleShacks.map((shack) => {
                const isCurrent = shack.slug === currentSlug;
                const miles = geo.status === "nearby" ? geo.distances[shack.slug] : undefined;
                return (
                  <li key={shack.slug}>
                    <button
                      type="button"
                      onClick={() => chooseShack(shack)}
                      aria-label={
                        isCurrent ? `Select ${shack.title} (current shack)` : `Select ${shack.title}`
                      }
                      className="group flex w-full items-center gap-3 rounded-[10px] border-[1.5px] border-[#e3ded1] px-3 py-2.5 text-left hover:border-brand-black hover:bg-brand-tan/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold"
                    >
                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                          <span className="truncate text-[15px] font-extrabold text-brand-black">
                            {shack.title}
                          </span>
                          {isCurrent && (
                            <span className="shrink-0 rounded-full bg-[#e7f2ea] px-2 py-0.5 text-[10px] font-extrabold uppercase leading-4 tracking-wide text-[#1f7a3d]">
                              Current
                            </span>
                          )}
                        </span>
                        <span className="mt-0.5 flex items-center gap-1.5 text-[12.5px] text-[#5a6067]">
                          <span className="truncate">{cityFromAddress(shack.address)}, GA</span>
                          {miles !== undefined && (
                            <>
                              <span aria-hidden="true">·</span>
                              <span className="font-bold text-brand-black">{formatMiles(miles)}</span>
                            </>
                          )}
                        </span>
                      </span>
                      <span className="shrink-0 rounded-[6px] bg-brand-red px-4 py-2 text-xs font-bold uppercase leading-4 text-white transition-colors group-hover:bg-[#a01b25]">
                        Select
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
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
