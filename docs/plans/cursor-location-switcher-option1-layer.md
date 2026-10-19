# Shack switcher: Option 1 + Option 3 (prototype + WP handoff)

**Status:** Prototype on GitHub Pages · **Review URL:** https://mattybotstew.github.io/shanes-rib-shack-new/?shack-switcher=1  
**Mock (client):** https://mattybotstew.github.io/shanes-rib-shack-new/find-a-shack/switcher.html

## Product pairing

| When | UX |
|------|-----|
| First mobile visit | Bottom sheet: “We think you're near …” → **View Location** or **Change** (Option 3) |
| Every return visit | Black top bar: tap **underlined shack name** → **Nearby Shane's** picker → **Use** (Option 1) |

## Prototype (this repo)

- `?shack-switcher=1` on homepage only; `/` without the flag is unchanged.
- `lib/shackSwitcherEvents.ts` — `shack-picker-open` / `shack-chosen` events, `myShanes` storage helpers.
- `components/LocationSwitcher.tsx` — suggest + picker sheets.
- `components/Header.tsx` — mobile live-style black top bar (pin, underline, chevron, phone) in preview.

**Haley review note:** After you dismiss or confirm the first-visit card, tap the **underlined shack name** in the black bar to switch — 2 taps, no search. Use **Replay first visit** on the mock page to reset the demo.

## Live WordPress (cm-shanes — out of repo)

Reference: `docs/live-wp-find-location-flow.md`

1. First-visit card (Option 3) — product/analytics decision; prototype proves flow.
2. Wire top-bar `#location` / shack slot **click** → existing **`#location-modal`** (same as desktop “Change Your Shack”).
3. Style: underline + chevron on the shack label (Option 1 spec unchanged).
4. Persistence: continue `myShanes` cookie behavior after pick.

## Acceptance (prototype)

- [ ] Mobile 390px: first-visit sheet → dismiss → top bar tap → picker → Use → toast + bar label updates
- [ ] `/` without query: Norcross alert + **Change your location** unchanged
- [ ] Lint, build, Playwright smoke (including shack switcher preview test)
