# Shack switcher: Option 3 + live bar (prototype + WP handoff)

**Status:** Shipped on GitHub Pages (every page, no preview flag)  
**Prototype:** https://mattybotstew.github.io/shanes-rib-shack-new/ (mobile; `?replay=1` re-runs first-visit sheet)  
**Mock (client):** https://mattybotstew.github.io/shanes-rib-shack-new/find-a-shack/switcher.html

## Product pairing (as built — Oct 2026)

| When | UX |
|------|-----|
| First mobile visit | Bottom sheet: nearest / “Shane’s locations” → **Order here** or **Change** (Option 3). × or picker close after **Change** = one-time dismissal (`shackSwitcherDismissed`). |
| Unset shack (no `myShanes`) | Black bar: **The Original Location** + default phone; name links to `/locations/`. **NEW!** app promo row below (live-style). |
| After shack saved | Bar shows `{shortName} Location` + that shack’s phone; name links to `/locations/[slug]/`. |
| Open picker | **Desktop:** **Find your shack** / **Change Your Shack** (header). **Mobile (general pages):** first-visit sheet only; everyday change stays **Menu → Locations → View Details** (matches live WP). **Mobile on a location detail page:** underlined control can still open the picker (prototype). |
| Picker | Search, miles when geo allowed, **Current** badge, whole-row **Select**, “Select a location”, `max-h-[85vh]`, no-geo fallback without “Nearby” claim. |

Option 1 (tap top-bar name → picker) was **not** shipped on mobile general pages; the bar name is a **location link**, aligned with the live site.

## Prototype (this repo)

- `lib/shackSwitcherEvents.ts` — `shack-picker-open` / `shack-chosen`, `myShanes`, unset bar constants (`The Original Location`, `/locations/`).
- `components/LocationSwitcher.tsx` — suggest + picker sheets; mobile-only first visit.
- `components/Header.tsx` — live two-row black bar + desktop location row with app promo; `AppPromo` one line left-aligned on mobile.

**Review note:** Use **Replay first visit** on the switcher mock, or clear `myShanes` / `shackSwitcherDismissed` / add `?replay=1` on the prototype.

## Live WordPress (cm-shanes — out of repo)

Reference: `docs/live-wp-find-location-flow.md`

1. First-visit sheet (Option 3) — prototype proves copy, dismissal, and picker reuse.
2. Keep top-bar shack name as **link to location page** (live behavior); do **not** require Option 1 underline→modal on mobile unless product reopens that decision.
3. Desktop: continue **Change Your Shack** → `#location-modal` (Option 5 picker).
4. Persistence: `myShanes` cookie / storage after pick.

## Acceptance (prototype)

- [x] Mobile 390px: first-visit sheet → **Order here** / **Change** → picker → **Select** → bar updates
- [x] Dismiss suggest or close picker after **Change** → sheet does not return (until `?replay=1` or storage clear)
- [x] Unset bar: **The Original Location** → `/locations/`; desktop **Find your shack** opens picker
- [x] Lint, build, Playwright smoke (location bar link, first-visit flow, picker search / dismissal)

**Review round 2 (2026-10-19):** picker search · geolocation miles · **Current** badge · **Select** · dismissal · no-geo fallback · aria-label · 85vh cap.  
**Bar alignment (2026-10-20):** live two-row bar + app promo; location as link; switcher demo mirrored to `public/find-a-shack/switcher.html`.
