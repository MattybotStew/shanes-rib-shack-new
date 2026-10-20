"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  chosenSlugFromStorage,
  clearShackSwitcherStorage,
  dispatchShackChosen,
  isShackSwitcherReplay,
  SWITCHER_ALL_LOCATIONS_COUNT,
  SWITCHER_NEARBY_SLUGS,
  SWITCHER_SHACK_COORDS,
  SHACK_CHOSEN,
  SHACK_PICKER_OPEN,
  STORAGE_CHOSEN,
  STORAGE_DISMISSED,
  type ShackPickerSource,
} from "@/lib/shackSwitcherEvents";
import { LOCATIONS_BY_SLUG } from "@/lib/locationData";

/**
 * Option #3 first-visit sheet (Order here / Change) + Option #1 everyday top-bar picker.
 * Live site-wide on mobile; `?replay=1` re-runs the first-visit sheet for local review.
 */

type Shack = {
  slug: string;
  name: string;
  cityLine: string;
  zip: string;
};

const NEARBY_SHACKS: Shack[] = SWITCHER_NEARBY_SLUGS.map((slug) => {
  const loc = LOCATIONS_BY_SLUG[slug];
  const { cityLine, zip } = cityAndZipFromAddressLine(loc.content.addressLine);
  return { slug, name: loc.shortName, cityLine, zip };
});

const SUGGESTED = NEARBY_SHACKS[0];

function cityAndZipFromAddressLine(line: string): { cityLine: string; zip: string } {
  const match = line.match(/,\s*([^,]+,\s*[A-Z]{2})\s+(\d{5}(?:-\d{4})?)/);
  if (match) {
    return { cityLine: match[1].trim(), zip: match[2].slice(0, 5) };
  }
  const zipOnly = line.match(/\b(\d{5})\b/);
  return { cityLine: line.replace(/\d{5}.*$/, "").replace(/^[^,]+,\s*/, "").trim(), zip: zipOnly?.[1] ?? "" };
}

function haversineMiles(a: { lat: number; lng: number }, b: { lat: number; lng: number }): number {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const R = 3958.8;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.asin(Math.sqrt(h));
}

function formatMiles(mi: number): string {
  if (mi >= 10) return `${Math.round(mi)} mi`;
  return `${mi.toFixed(1)} mi`;
}

function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer?.push({ event, ...params });
}

type PickerEntry = "change_first" | ShackPickerSource;

export default function LocationSwitcher() {
  const router = useRouter();
  const [phase, setPhase] = useState<"hidden" | "suggest" | "picker">("hidden");
  const [pickerEntry, setPickerEntry] = useState<PickerEntry>("change_first");
  const [toast, setToast] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [userGeo, setUserGeo] = useState<{ lat: number; lng: number } | null>(null);
  const [geoResolved, setGeoResolved] = useState(false);
  const [pickerSession, setPickerSession] = useState(0);
  const [chosenSlug, setChosenSlug] = useState<string | null>(null);
  const [suggested, setSuggested] = useState<Shack>(SUGGESTED);
  const [claimNear, setClaimNear] = useState(false);

  function openPicker(entry: PickerEntry, source?: string) {
    setPickerEntry(entry);
    setSearchQuery("");
    setUserGeo(null);
    setGeoResolved(false);
    setPickerSession((n) => n + 1);
    setChosenSlug(chosenSlugFromStorage());
    setPhase("picker");
    if (source) track("picker_open", { source });
  }

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const replay = isShackSwitcherReplay();
      if (replay) {
        clearShackSwitcherStorage();
      }

      // The first-visit suggestion is a phone pattern; desktop keeps Change Your Shack.
      const isPhone = window.matchMedia("(max-width: 1023px)").matches;

      setChosenSlug(replay ? null : chosenSlugFromStorage());

      const dismissed = window.localStorage.getItem(STORAGE_DISMISSED) === "1";
      const stored = replay ? null : chosenSlugFromStorage();
      if (!isPhone || dismissed || stored) {
        setPhase("hidden");
        return;
      }

      setSuggested(SUGGESTED);
      setClaimNear(false);
      setPhase("suggest");
      track("shack_switcher_shown", { suggested: SUGGESTED.name });
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    function onOpenFromHeader(e: Event) {
      const source = (e as CustomEvent<{ source: ShackPickerSource }>).detail?.source ?? "topbar";
      openPicker(source, source);
    }

    window.addEventListener(SHACK_PICKER_OPEN, onOpenFromHeader);
    return () => window.removeEventListener(SHACK_PICKER_OPEN, onOpenFromHeader);
  }, []);

  useEffect(() => {
    function onChosen(e: Event) {
      const slug = (e as CustomEvent<{ slug: string }>).detail?.slug;
      if (slug) setChosenSlug(slug);
    }
    window.addEventListener(SHACK_CHOSEN, onChosen);
    return () => window.removeEventListener(SHACK_CHOSEN, onChosen);
  }, []);

  useEffect(() => {
    if (phase !== "suggest") return;

    let cancelled = false;

    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        if (cancelled) return;
        const origin = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        let best = SUGGESTED;
        let bestMiles = Infinity;
        for (const shack of NEARBY_SHACKS) {
          const coords = SWITCHER_SHACK_COORDS[shack.slug as (typeof SWITCHER_NEARBY_SLUGS)[number]];
          if (!coords) continue;
          const miles = haversineMiles(origin, coords);
          if (miles < bestMiles) {
            bestMiles = miles;
            best = shack;
          }
        }
        setSuggested(best);
        setClaimNear(true);
      },
      () => {
        if (cancelled) return;
        setSuggested(SUGGESTED);
        setClaimNear(false);
      },
      { timeout: 8000, maximumAge: 600_000 },
    );

    return () => {
      cancelled = true;
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "picker") return;

    let cancelled = false;

    if (!navigator.geolocation) {
      const id = window.requestAnimationFrame(() => {
        if (!cancelled) setGeoResolved(true);
      });
      return () => {
        cancelled = true;
        window.cancelAnimationFrame(id);
      };
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        if (cancelled) return;
        setUserGeo({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setGeoResolved(true);
      },
      () => {
        if (cancelled) return;
        setUserGeo(null);
        setGeoResolved(true);
      },
      { timeout: 8000, maximumAge: 600_000 },
    );

    return () => {
      cancelled = true;
    };
  }, [phase, pickerSession]);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 3500);
    return () => window.clearTimeout(t);
  }, [toast]);

  const currentSlug = chosenSlug ?? SUGGESTED.slug;

  const pickerRows = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const withDistance = NEARBY_SHACKS.map((shack) => {
      const coords = SWITCHER_SHACK_COORDS[shack.slug as (typeof SWITCHER_NEARBY_SLUGS)[number]];
      const miles =
        userGeo && coords ? haversineMiles(userGeo, coords) : null;
      return { ...shack, miles };
    });

    let rows = withDistance;
    if (q) {
      rows = rows.filter(
        (shack) =>
          shack.name.toLowerCase().includes(q) ||
          shack.cityLine.toLowerCase().includes(q) ||
          shack.zip.includes(q),
      );
    }

    if (userGeo) {
      rows = [...rows].sort((a, b) => (a.miles ?? Infinity) - (b.miles ?? Infinity));
    }

    return rows;
  }, [searchQuery, userGeo]);

  const showNearby = geoResolved && userGeo !== null;

  function dismiss() {
    window.localStorage.setItem(STORAGE_DISMISSED, "1");
    track("shack_switcher_dismissed");
    setPhase("hidden");
  }

  function orderHereSuggested() {
    window.localStorage.setItem(STORAGE_CHOSEN, suggested.slug);
    dispatchShackChosen(suggested.slug);
    setChosenSlug(suggested.slug);
    track("location_selected", { shack: suggested.name, source: "switcher", method: "order_here" });
    setPhase("hidden");
    router.push("/order/");
  }

  function closePicker() {
    if (pickerEntry === "change_first") {
      window.localStorage.setItem(STORAGE_DISMISSED, "1");
      track("shack_switcher_dismissed", { via: "picker" });
    }
    setSearchQuery("");
    setPhase("hidden");
  }

  function chooseShack(shack: Shack) {
    window.localStorage.setItem(STORAGE_CHOSEN, shack.slug);
    dispatchShackChosen(shack.slug);
    setChosenSlug(shack.slug);
    track("location_selected", { shack: shack.name, source: "switcher", method: "picker" });
    setSearchQuery("");
    setPhase("hidden");
    setToast(`${shack.name} is now your shack.`);
    router.push("/order/");
  }

  if (phase === "hidden" && !toast) return null;

  return (
    <>
      {phase !== "hidden" && (
        <div
          className="fixed inset-0 z-50 bg-brand-black/45"
          aria-hidden="true"
          onClick={phase === "picker" ? closePicker : () => dismiss()}
        />
      )}

      {phase === "suggest" && (
        <div
          role="dialog"
          aria-label={claimNear ? "Your nearby Shane's" : "Choose your Shane's"}
          className="fixed inset-x-0 bottom-0 z-[60] mx-auto w-full max-w-[520px] max-h-[85vh] rounded-t-[16px] bg-white px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4 shadow-[0_-8px_22px_rgba(16,24,32,0.22)]"
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
          <p className="pr-10 text-lg font-extrabold leading-snug text-brand-black">
            {claimNear ? `We think you\u2019re near ${suggested.name}` : "Shane\u2019s locations"}
          </p>
          <p className="mt-1 text-sm text-[#5a6067]">
            {claimNear ? "Closest shack to your phone." : "Select a location \u2014 we\u2019ll remember it."}
          </p>
          <div className="mt-4 flex gap-3">
            <button
              type="button"
              onClick={orderHereSuggested}
              className="flex-1 rounded-[5px] bg-brand-red px-4 py-3.5 text-center text-sm font-bold uppercase leading-4 text-white hover:bg-[#a01b25] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            >
              Order here
            </button>
            <button
              type="button"
              onClick={() => openPicker("change_first", "change")}
              className="flex-1 rounded-[5px] border-2 border-brand-black px-4 py-3 text-center text-sm font-bold uppercase leading-4 text-brand-black hover:bg-brand-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            >
              Change
            </button>
          </div>
        </div>
      )}

      {phase === "picker" && (
        <div
          role="dialog"
          aria-label={showNearby ? "Nearby Shane's" : "Shane's locations"}
          className="fixed inset-x-0 bottom-0 z-[60] mx-auto flex w-full max-w-[520px] max-h-[85vh] flex-col rounded-t-[16px] bg-white px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4 shadow-[0_-8px_22px_rgba(16,24,32,0.22)]"
        >
          <button
            type="button"
            aria-label="Close location picker"
            onClick={closePicker}
            className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-brand-tan text-base font-extrabold leading-none text-brand-black hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold"
          >
            ×
          </button>
          <div className="mx-auto mb-3 h-1 w-9 shrink-0 rounded-full bg-black/15" aria-hidden="true" />
          <p className="shrink-0 pr-10 text-lg font-extrabold leading-snug text-brand-black">
            {showNearby ? "Nearby Shane\u2019s" : "Shane\u2019s locations"}
          </p>
          <p className="mb-3 mt-1 shrink-0 text-sm text-[#5a6067]">
            Select a location &mdash; we&rsquo;ll remember it.
          </p>
          <label className="sr-only" htmlFor="shack-picker-search">
            Search locations
          </label>
          <input
            id="shack-picker-search"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by city or ZIP"
            className="mb-3 w-full shrink-0 rounded-lg border-[1.5px] border-[#e3ded1] bg-brand-tan px-3 py-2.5 text-[13.5px] font-semibold text-brand-black placeholder:font-normal placeholder:text-[#8a9097] focus:outline focus:outline-2 focus:outline-brand-red focus:outline-offset-1"
          />
          <ul className="min-h-0 flex-1 space-y-2 overflow-y-auto overscroll-contain">
            {pickerRows.length === 0 && (
              <li className="rounded-[10px] border border-dashed border-[#e3ded1] px-3 py-3.5 text-center text-[12.5px] text-[#5a6067]">
                No shack matches &mdash; try the full locations list.
              </li>
            )}
            {pickerRows.map((shack) => {
              const isCurrent = shack.slug === currentSlug;
              return (
                <li
                  key={shack.slug}
                  className={`flex items-center gap-2.5 rounded-[10px] px-3 py-2.5 ${
                    isCurrent
                      ? "border-2 border-brand-red bg-[#fdf7f6]"
                      : "border-[1.5px] border-[#e3ded1] bg-white"
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-[13.5px] font-extrabold leading-snug text-brand-black">
                      <span>{shack.name}</span>
                      {isCurrent && (
                        <span className="ml-1.5 inline-block rounded-full bg-[#e7f2ea] px-1.5 py-0.5 align-middle text-[9.5px] font-extrabold uppercase tracking-wide text-[#1f7a3d]">
                          Current
                        </span>
                      )}
                      {showNearby && shack.miles != null && (
                        <span className="whitespace-nowrap font-extrabold">
                          {" "}
                          &middot; {formatMiles(shack.miles)}
                        </span>
                      )}
                    </p>
                    <p className="mt-0.5 text-[11px] text-[#5a6067]">
                      {shack.cityLine}
                      <span className="sr-only">{shack.zip}</span>
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => chooseShack(shack)}
                    className="shrink-0 rounded-[6px] bg-brand-red px-3 py-2 text-[11px] font-extrabold leading-4 text-white hover:bg-[#a01b25] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
                  >
                    Order here
                  </button>
                </li>
              );
            })}
          </ul>
          <Link
            href="/locations/"
            className="mt-3 shrink-0 text-center text-xs font-bold text-brand-red underline underline-offset-2 hover:text-[#a01b25]"
          >
            See all {SWITCHER_ALL_LOCATIONS_COUNT} locations
          </Link>
        </div>
      )}

      {toast && (
        <div
          role="status"
          className="fixed inset-x-4 bottom-4 z-[70] mx-auto flex w-auto max-w-[480px] items-center gap-2 rounded-[8px] bg-brand-black px-4 py-3 text-xs font-bold text-white shadow-[0_8px_20px_rgba(16,24,32,0.3)]"
        >
          {toast}
        </div>
      )}
    </>
  );
}
