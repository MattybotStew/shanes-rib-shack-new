# Mobile location-switch — measurement plan (live WordPress)

**Scope:** the **live WordPress production site** (`www.shanesribshack.com`), not the Next.js
prototype in this repo. Companion to the client brief
(`docs/client-briefs/mobile-find-a-shack.html`) and the flow map
(`docs/live-wp-find-location-flow.md`).

**Why this exists:** the six options are ranked on UX principles + measured facts, not on live data.
This is how we turn that prioritised hypothesis into a decision.

---

## 1. Current baseline (verified 2026-10-05, 390px)

| Fact | Value |
| :--- | :--- |
| "Change Your Shack" button on mobile | `display:none` (hidden) |
| Site-wide picker (`#location-modal`) | Exists, geo-resolves 4 nearest, **unreachable on mobile** |
| Top-bar shack name | Links to the **current** shack's detail page — not a switcher |
| Taps to switch today | 3–4 (Menu → Locations → search → shack → View Details) + typing |
| Store persistence | `myShanes` cookie (365d) once set by a detail-page visit / Order Now |

These are the numbers to beat. Everything below is about capturing them reliably.

---

## 2. Hypotheses to test

1. **H1 — cheaper entry wins.** Adding a way to open the existing picker (Option 1) cuts taps-to-switch
   from 3–4 to 2 and raises the location-set rate.
2. **H2 — status beats hunting.** A persistent "Ordering from" bar (Option 2) reduces wrong-shack
   orders and picker abandonment.
3. **H3 — first-visit guidance helps.** Auto-suggest + confirm (Option 3) lifts first-session
   location-set rate without nagging returning users.

Each hypothesis maps to one or more metrics in §4.

---

## 3. Events to instrument (GA4 via GTM)

Add these to the theme's JS layer (alongside the existing `catering_path_selected` /
`outbound_click` hooks):

| Event | Fires when | Key params |
| :--- | :--- | :--- |
| `picker_open` | The location picker is opened | `source` (`topbar` / `sticky` / `order_gate` / `menu`), `page` |
| `location_selected` | A shack is chosen | `store_id`, `store_name`, `source`, `method` (`nearest` / `search` / `geo`) |
| `findersearch` | Finder search is submitted | `query_type` (`text` / `geo`), `radius` |
| `finder_view_details` | View Details tapped on a card | `store_id`, `distance_band` |
| `order_modal_open` | `#order-modal` opens | `fulfillment` |
| `order_start` | Order platform is launched | `fulfillment`, `store_id` |

> Reuse the existing `applyStore` / modal handlers rather than adding parallel listeners.

---

## 4. KPIs and targets

| KPI | Definition | Source | Baseline | Target |
| :--- | :--- | :--- | :--- | :--- |
| Location-set rate | Sessions with `userSet` cookie ÷ sessions | GA4 + cookie | measure first | +10 pts |
| Taps to switch | `picker_open` → `location_selected` interaction count | GA4 | 3–4 (manual) | ≤2 |
| Picker abandonment | 1 − (`location_selected` ÷ `picker_open`) | GA4 funnel | measure first | <30% |
| Finder search → View Details | `finder_view_details` ÷ `findersearch` | GA4 funnel | measure first | monitor |
| Wrong-location tickets | Count per week | Support system | measure first | ↓ |
| Order completion | Orders ÷ `order_start` | Order platform | measure first | no regression |

Baselines marked "measure first" require 2 weeks of data before the change ships, so we have a
before/after.

---

## 5. Qualitative signal

- **Session recordings / heatmaps** (Microsoft Clarity is free) on `/locations/` and a detail page,
  mobile only — watch for rage-taps on the top-bar name and dead-ends in the finder.
- **5-user mobile test** (quick, high-signal): ask each person to "change your Shane's" on a phone.
  Record taps, confusion, and whether they find the menu.

---

## 6. Test / rollout plan

1. **Instrument first** — ship the events in §3, collect a 2-week baseline.
2. **Ship Option 1** (lowest effort, addresses the client's three ideas in one change).
3. **Read the metrics** against §4; confirm H1.
4. **Phase in Option 2 or 3** based on where the funnel leaks (status vs. first-visit).
5. **A/B** only if traffic supports it; otherwise use before/after with a stable baseline window.

---

## 7. Constraints / owners (humans)

- GA4 / GTM access and the WordPress theme deploy are **outside this repo** — needs the site dev.
- Baseline collection window and target thresholds are an Ops/marketing decision.
- "Wrong-location" ticket counting needs a support-system tag.

> This is a plan, not an implementation. Do not build theme changes from this repo.
