import { EDGEWOOD, LOCATIONS_BY_SLUG, type LocationDetail } from "@/lib/locationData";

export const SHACK_PICKER_OPEN = "shack-picker-open";
export const SHACK_CHOSEN = "shack-chosen";

export const STORAGE_CHOSEN = "myShanes";
export const STORAGE_DISMISSED = "shackSwitcherDismissed";

export type ShackPickerSource = "topbar" | "alert" | "change";

export const PREVIEW_NEARBY_SLUGS = [
  "edgewood-atlanta-ga",
  "norcross-ga",
  "carrollton-ga",
  "douglasville-ga",
] as const;

export function isShackSwitcherPreview(): boolean {
  if (typeof window === "undefined") return false;
  return new URLSearchParams(window.location.search).get("shack-switcher") === "1";
}

export function chosenSlugFromStorage(): string | null {
  if (typeof window === "undefined") return null;
  const slug = window.localStorage.getItem(STORAGE_CHOSEN);
  return slug && LOCATIONS_BY_SLUG[slug] ? slug : null;
}

export function previewShackFromStorage(): LocationDetail {
  const slug = chosenSlugFromStorage();
  return slug ? LOCATIONS_BY_SLUG[slug] : EDGEWOOD;
}

export function shackTopBarLabel(loc: LocationDetail): string {
  return `${loc.shortName} Location`;
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
