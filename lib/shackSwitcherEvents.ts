import { EDGEWOOD, LOCATIONS_BY_SLUG, type LocationDetail } from "@/lib/locationData";

export const SHACK_PICKER_OPEN = "shack-picker-open";
export const SHACK_CHOSEN = "shack-chosen";

export const STORAGE_CHOSEN = "myShanes";
export const STORAGE_DISMISSED = "shackSwitcherDismissed";

export type ShackPickerSource = "topbar" | "alert" | "change";

export const SWITCHER_NEARBY_SLUGS = [
  "edgewood-atlanta-ga",
  "norcross-ga",
  "carrollton-ga",
  "douglasville-ga",
] as const;

/** Approx store coords for preview distance sort (haversine). */
export const SWITCHER_SHACK_COORDS: Record<
  (typeof SWITCHER_NEARBY_SLUGS)[number],
  { lat: number; lng: number }
> = {
  "edgewood-atlanta-ga": { lat: 33.7582893, lng: -84.348474 },
  "norcross-ga": { lat: 33.9415, lng: -84.2136 },
  "carrollton-ga": { lat: 33.5804, lng: -85.0766 },
  "douglasville-ga": { lat: 33.751, lng: -84.7477 },
};

/** Live-ish count for “See all N locations” in the picker footer. */
export const SWITCHER_ALL_LOCATIONS_COUNT = 28;

/** Switcher is live site-wide on mobile — no query flag required. */
export const SHACK_SWITCHER_ENABLED = true;

/** Force the first-visit sheet again (ignores dismiss / chosen) for local review. */
export function isShackSwitcherReplay(): boolean {
  if (typeof window === "undefined") return false;
  return new URLSearchParams(window.location.search).get("replay") === "1";
}

/** Reset preview persistence (first-visit sheet can show again). */
export function clearShackSwitcherStorage(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_DISMISSED);
  window.localStorage.removeItem(STORAGE_CHOSEN);
}

export function chosenSlugFromStorage(): string | null {
  if (typeof window === "undefined") return null;
  const slug = window.localStorage.getItem(STORAGE_CHOSEN);
  return slug && LOCATIONS_BY_SLUG[slug] ? slug : null;
}

export function selectedShackFromStorage(): LocationDetail {
  const slug = chosenSlugFromStorage();
  return slug ? LOCATIONS_BY_SLUG[slug] : EDGEWOOD;
}

export function shackTopBarLabel(loc: LocationDetail): string {
  return `${loc.shortName} Location`;
}

/** `+1 404-525-7427` → `(404) 525-7427` for the compact mobile top bar. */
export function shackTopBarPhone(loc: LocationDetail): string {
  const match = loc.phone.replace(/^\+1\s*/, "").match(/^(\d{3})-(\d{3})-(\d{4})$/);
  return match ? `(${match[1]}) ${match[2]}-${match[3]}` : loc.phone;
}

export function dispatchOpenShackPicker(source: ShackPickerSource): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent(SHACK_PICKER_OPEN, { detail: { source } }),
  );
}

export function dispatchShackChosen(slug: string): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(SHACK_CHOSEN, { detail: { slug } }));
}
