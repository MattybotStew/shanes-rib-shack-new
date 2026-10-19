"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  chosenSlugFromStorage,
  dispatchShackChosen,
  isShackSwitcherPreview,
  isShackSwitcherReplay,
  PREVIEW_NEARBY_SLUGS,
  SHACK_PICKER_OPEN,
  STORAGE_CHOSEN,
  STORAGE_DISMISSED,
  type ShackPickerSource,
} from "@/lib/shackSwitcherEvents";
import { LOCATIONS_BY_SLUG } from "@/lib/locationData";

/**
 * Option #3 first-visit sheet (Order here / Change) + Option #1 everyday top-bar picker.
 * Preview: `?shack-switcher=1` on the site. Default `/` without the flag is unchanged.
 */

type Shack = { slug: string; name: string; title: string };

const NEARBY_SHACKS: Shack[] = PREVIEW_NEARBY_SLUGS.map((slug) => {
  const loc = LOCATIONS_BY_SLUG[slug];
  return { slug, name: loc.shortName, title: loc.name };
});

const SUGGESTED = NEARBY_SHACKS[0];

function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer?.push({ event, ...params });
}

export default function LocationSwitcher() {
  const router = useRouter();
  const [phase, setPhase] = useState<"hidden" | "suggest" | "picker">("hidden");
  const [pickerEntry, setPickerEntry] = useState<ShackPickerSource | "change">("change");
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (!isShackSwitcherPreview()) return;

      const replay = isShackSwitcherReplay();
      const dismissed = window.localStorage.getItem(STORAGE_DISMISSED) === "1";
      const chosenSlug = chosenSlugFromStorage();
      if (!replay && (dismissed || chosenSlug)) {
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
      setPhase("picker");
      track("picker_open", { source });
    }

    window.addEventListener(SHACK_PICKER_OPEN, onOpenPicker);
    return () => window.removeEventListener(SHACK_PICKER_OPEN, onOpenPicker);
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

  function orderHereSuggested() {
    window.localStorage.setItem(STORAGE_CHOSEN, SUGGESTED.slug);
    dispatchShackChosen(SUGGESTED.slug);
    track("location_selected", { shack: SUGGESTED.name, source: "switcher", method: "order_here" });
    setPhase("hidden");
    router.push("/order/");
  }

  function closePicker() {
    if (pickerEntry === "change") {
      window.localStorage.setItem(STORAGE_DISMISSED, "1");
      track("shack_switcher_dismissed", { via: "picker" });
    }
    setPhase("hidden");
  }

  function chooseShack(shack: Shack) {
    window.localStorage.setItem(STORAGE_CHOSEN, shack.slug);
    dispatchShackChosen(shack.slug);
    track("location_selected", { shack: shack.name, source: "switcher", method: "picker" });
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
          onClick={phase === "picker" ? closePicker : dismiss}
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
          <p className="pr-10 text-lg font-extrabold leading-snug text-brand-black">
            We think you&rsquo;re near {SUGGESTED.name}
          </p>
          <p className="mt-1 text-sm text-[#5a6067]">Closest shack to your phone.</p>
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
              onClick={() => {
                setPickerEntry("change");
                track("picker_open", { source: "change" });
                setPhase("picker");
              }}
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
          aria-label="Nearby Shane's"
          className="fixed inset-x-0 bottom-0 z-[60] mx-auto w-full max-w-[520px] rounded-t-[16px] bg-white px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4 shadow-[0_-8px_22px_rgba(16,24,32,0.22)]"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={closePicker}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-brand-tan text-base font-extrabold leading-none text-brand-black hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold"
          >
            ×
          </button>
          <div className="mx-auto mb-3 h-1 w-9 rounded-full bg-black/15" aria-hidden="true" />
          <p className="text-lg font-extrabold leading-snug text-brand-black">Nearby Shane&rsquo;s</p>
          <p className="mb-3 mt-1 text-sm text-[#5a6067]">Pick your shack &mdash; we&rsquo;ll remember it.</p>
          <ul className="space-y-2">
            {NEARBY_SHACKS.map((shack) => (
              <li
                key={shack.slug}
                className="flex items-center gap-3 rounded-[10px] border-[1.5px] border-[#e3ded1] px-3 py-2.5"
              >
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[15px] font-extrabold text-brand-black">
                    {shack.title}
                  </span>
                </span>
                <button
                  type="button"
                  onClick={() => chooseShack(shack)}
                  className="shrink-0 rounded-[6px] bg-brand-red px-3 py-2 text-xs font-bold leading-4 text-white hover:bg-[#a01b25] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
                >
                  Order here
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
          {toast}
        </div>
      )}
    </>
  );
}
