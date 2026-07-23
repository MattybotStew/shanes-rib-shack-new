# Catering Page Optimization — Implementation Plan

**Status:** Research archive (Phase 2+ / Phase B options) — **Phase A is SHIPPED**  
**UX strategies (one per LLM):** [`docs/UX_CONVERSION_STRATEGY.md`](./docs/UX_CONVERSION_STRATEGY.md) (index)  
**P0 ship merge:** [`CONSENSUS_PLAN.md`](./CONSENSUS_PLAN.md) (checklist marked done)  
**Agent entry:** [`AGENTS.md`](./AGENTS.md)  
**Priority:** P0 was Phase A (live); this file is Phase B+ research  
**Last Updated:** 2026-07-23  
**Version:** 1.6

> **Live:** https://mattybotstew.github.io/shanes-rib-shack-new/catering/  
> For multi-LLM collaboration: each model keeps its own strategy under  
> `docs/strategies/{name}-ux-conversion-strategy.md`. **No overwrites.**  
> This file is background research and Phase 2+ ideas—not the UX opinion of record.  
> Sections below that say “`/catering` does not exist” are **historical**; the route is live.

---

## Overview

**What:** Catering form inputs dropped ~50% after the new site launch.  
**Where (production):** https://www.shanesribshack.com/catering/  
**Where (this repo):** Homepage + dedicated `/catering/` route (Phase A shipped).

### Core problem (revised)

The reported 50% drop should **not** be attributed only to missing UX polish. The new experience fragments conversions between:

1. **ezCater** — “Order Catering Online” (instant checkout)
2. **Direct inquiry form** — “Submit Catering Inquiry”

Direct form submissions may be down while **total catering conversions** are flat or up. Primary KPI must be **total qualified catering conversions**, not form submits alone.

### Primary goal

Increase **total qualified catering conversions** (form submissions + trackable ezCater clicks/orders) by:

- Clarifying which path fits which customer
- Reducing form friction
- Adding pricing/lead-time/response transparency
- Measuring both paths with analytics

---

## Local codebase audit (this repo)

Audited against local homepage (`app/page.tsx` + components).

### ✅ Working

| Item | Status |
| :--- | :--- |
| Page loads | Yes |
| Images | 27, 0 missing alt |
| Sections with `aria-label` | 5 |
| Viewport meta | Present |
| Header / main / footer | Present |
| Catering form UI | Present (`components/CateringForm.tsx`) |
| Package cards | Present (`components/CateringMenu.tsx`) |

### ❌ Issues

| # | Issue | Impact | Priority |
| :--- | :--- | :--- | :--- |
| 1 | Form no-op — `onSubmit` only calls `e.preventDefault()` | Users get no submission / no confirmation | 🔴 P0 |
| 2 | Date/time are plain text inputs | Mobile friction, validation errors | 🔴 P0 |
| 3 | Missing `/catering` route | Nav links 404; production URL not mirrored | 🔴 P0 |
| 4 | Missing `/menu`, `/locations`, etc. | Broken header/footer nav | 🔴 P0 |
| 5 | Placeholder banners | Unprofessional (“Unauthenticated Alert…”, “client promotional banner…”) | 🔴 P0 |
| 6 | Two competing CTAs without guidance | Users unsure: ezCater vs form | 🔴 P0 |
| 7 | High form friction | Org required; package/time/delivery forced early | 🔴 P0 |
| 8 | Weak pricing / process transparency | No $/person, lead time, or response promise | 🔴 P0 |
| 9 | Duplicate mobile “Order Catering Online” CTAs | Clutter / confusion | 🟡 P1 |
| 10 | 2× H1 (desktop + mobile hero both in DOM) | SEO / a11y | 🟡 P1 |
| 11 | No focus indicators | Keyboard navigation weak | 🟡 P1 |
| 12 | No skip-to-content link | A11y gap | 🟡 P1 |
| 13 | Copyright year “2025” | Looks stale | 🟡 P1 |
| 14 | Social icons `-scale-y-100` | Visual bug | 🟢 P2 |
| 15 | No dedicated 404 page content | Default Next 404 only | 🟢 P2 |

### Critical architecture note (static export)

This project uses **`output: "export"`** (GitHub Pages). That means:

- **Next.js Server Actions will not run in production** on static hosting.
- Form submission must use one of:
  - Third-party form endpoint (Formspree, Basin, Getform, etc.)
  - External CRM webhook
  - Separate API (not this static export)
  - `mailto:` only as last resort (poor UX)

Do **not** plan `actions/submitCateringForm.ts` as the production submission path unless the hosting model changes.

### Brand tokens (use these — not generic orange)

| Token | Value | Tailwind |
| :--- | :--- | :--- |
| Black | `#101820` | `brand-black` |
| Red | `#bb202b` | `brand-red` |
| Gold | `#ffc72c` | `brand-gold` |
| Tan | `#f8f5ec` | `brand-tan` |

Focus outline should use `brand-red` or `brand-gold`, not `#FF6B00`.

---

## UX strategy

### Two-path decision point

| Path | Audience | Action |
| :--- | :--- | :--- |
| **Order Standard Catering** | Small events, offices, known packages | ezCater (instant pricing/checkout) + UTM |
| **Request Custom Quote** | Weddings, large events, special requests | Scroll/open simplified form |

Explain the difference in plain language on the cards (e.g. “Instant pricing & checkout” vs “Personalized quote — we’ll reply within 1 business day”).

### Form friction reduction

**Current pain (homepage form):**

- Many required decisions at once
- Organization often treated as required for personal events
- Package, start time, delivery method asked before users know answers
- Plain-text date/time fields

**Target required fields only:**

- Location
- First name + last name (or single Name)
- Email **and/or** phone (at least one contact method)
- Event date
- Guest count

**Optional:**

- Organization
- Package interest
- Start time
- Delivery method (`pickup` | `delivery` | `not-sure`)
- Comments

**UX details:**

- Native `<input type="date">` / `<input type="time">`
- Large tappable fields on mobile
- Inline validation; focus first error
- Success state: confirmation message + response promise
- Trust line above form: pricing floor (pending Ops copy), lead time, response SLA

### Trust & clarity (P0 copy — pending Marketing/Ops)

- “Packages start at $X/person” *(X from Operations)*
- “Most events need ~48-hour notice”
- “We’ll respond within 1 business day”

### P1 enhancements

- Searchable location selector (or ZIP / geolocation) if location list grows large
- Two-step form: (1) event basics (2) optional preferences
- Testimonials / client logos near form
- Short FAQ accordion near form
- Package card CTAs: “Quote this package” → form with package preselected; “Order online” → ezCater

### P2 / deprioritized for first ship

- Full package visual redesign (current cards are acceptable short-term)
- Sticky mobile “Get free quote” bar
- Testimonial carousel polish

---

## Recommended page structure (`/catering`)

```
app/catering/
├── page.tsx                      # Server Component page composition
└── (optional colocation later)

components/catering/              # or reuse root components/
├── CateringHero.tsx              # Two-path decision cards
├── CateringPackages.tsx          # Reuse CateringMenu card design
├── CateringTrustBanner.tsx       # Pricing / lead time / response promise
├── CateringForm.tsx              # Simplified client form
└── CateringFAQ.tsx               # P2

lib/
├── catering.ts                   # Types + validation helpers
└── formEndpoint.ts               # Static-friendly submit helper

types/catering.ts                 # Shared types (if preferred over lib/)
```

Homepage can continue embedding packages/form, or link into `/catering` as the canonical conversion page.

---

## Component specs

### 1. `CateringHero` — two-path selector

- `md:grid-cols-2`, stacked on mobile
- Card A (secondary/outline): Order Standard → ezCater + UTMs
- Card B (primary `brand-red`): Request Custom Quote → `#catering-form`
- Single page H1 on catering page (not duplicated desktop/mobile DOM H1s)
- Track `catering_path_selected` with `path: 'ezcater' | 'custom'`

### 2. `CateringPackages`

- Four packages: One Meat, Ribs & One Meat / Two Meat, Three Meat, Boxed Lunches
- Reuse existing card visual language from `CateringMenu.tsx`
- Optional per-card CTAs linking to form (with package query/hash) or ezCater

### 3. `CateringForm` (client)

```ts
export interface CateringFormData {
  location: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventDate: string; // YYYY-MM-DD
  guestCount: number;
  organization?: string;
  package?: string;
  startTime?: string;
  deliveryMethod?: "pickup" | "delivery" | "not-sure";
  comments?: string;
}
```

- Client-side validation (zod or hand-rolled)
- POST to configured form endpoint (env: `NEXT_PUBLIC_CATERING_FORM_ENDPOINT`)
- Loading / success / error states
- No `e.preventDefault()`-only handlers

### 4. `CateringTrustBanner`

- Three short claims (pricing / notice / response)
- Place above form or under path selector

### 5. Accessibility (global)

- Skip link → `#main-content`
- `:focus-visible` outline using brand red/gold
- Labels on every control; `aria-live` for form errors
- One H1 per page

---

## Analytics (required before claiming success)

### Events

| Event | When |
| :--- | :--- |
| `page_view` (`page_type: catering`) | Catering page load |
| `catering_path_selected` | User chooses ezCater vs custom |
| `catering_form_started` | First focus/interaction on form |
| `catering_field_completed` | Field blur with value (optional, sample) |
| `catering_validation_error` | Client validation fail |
| `catering_form_submitted` | Submit attempt |
| `catering_form_success` | Endpoint success |
| `outbound_click` (`destination: ezcater`) | ezCater CTA click |

### ezCater UTMs (example)

```
?utm_source=shanessite&utm_medium=catering&utm_campaign=online_order
```

### Success metrics

| KPI | Definition |
| :--- | :--- |
| **Primary** | Total catering conversions = form successes + trackable ezCater orders (or clicks if orders unavailable) |
| Secondary | Form completion rate, abandonment field, path split (ezCater vs custom), mobile vs desktop |

### Measurement plan

1. Instrument both paths **before** redesign ships (baseline).
2. Compare like-for-like windows (same season / traffic quality).
3. Do not treat form-only volume as sole success metric.

---

## Estimates

### Design (mockups)

| Scope | Hours |
| :--- | :--- |
| P0 only (two-path + short form + trust banner + mobile) | **8–12 hrs** (recommended first Basecamp scope) |
| Full (cards redesign + social proof + FAQ + prototype) | **15–22 hrs** |

### Development (this static Next export)

| Task | Hours | Priority |
| :--- | :--- | :--- |
| Create `/catering` route + composition | 4–6 | P0 |
| Two-path decision component | 4–6 | P0 |
| Packages section (reuse + CTAs) | 3–5 | P0 |
| Form simplify + native date/time + validation UI | 6–8 | P0 |
| Form endpoint integration (static-safe) | 4–8 | P0 |
| Trust banner + copy hooks | 2–3 | P0 |
| Mobile CTA dedupe / hero cleanup | 1–2 | P0 |
| Analytics events + UTMs | 4–6 | P1 |
| Focus indicators + skip link | 2–3 | P1 |
| Placeholder content replacement | 2–3 | P1 |
| Stub/fix missing routes (`/menu`, `/locations`) | 4–6 | P1 |
| QA + cross-browser/mobile | 6–8 | P1 |
| 404 page + social icon fix | 2–4 | P2 |
| **P0-focused total** | **~26–40 hrs** | |
| **Full P0+P1 total** | **~44–68 hrs** | |

Add ~20% buffer for unknown CRM/form provider setup.

---

## Dependencies (blockers)

| Dependency | Owner | Status |
| :--- | :--- | :--- |
| Confirm form destination (email / CRM / Formspree / etc.) | Dev Lead + Client | ⏳ Pending |
| Pricing floor + lead-time copy | Operations | ⏳ Pending |
| Package / trust / FAQ final copy | Marketing | ⏳ Pending |
| ezCater destination URL + UTM plan | Marketing | ⏳ Pending |
| Analytics (GTM/GA4) access | Marketing / Analytics | ⏳ Pending |
| P0 design mockups (optional if building from existing Figma language) | Designer | ⏳ Pending |
| Validate 50% drop vs ezCater channel shift | Analytics | ⏳ Pending |

---

## Basecamp opportunity (PM packaging)

**Title:** Catering Page — P0 Conversion Clarity & Optimization  

**Pitch:**  
We are not only “fixing a form.” We are clarifying the full catering journey so standard orders go to ezCater and custom needs use a short inquiry form—and we measure **both**, so client success isn’t judged on form volume alone.

**Include in Opportunity:**

1. Data-validity note (ezCater may explain form drop)
2. P0 UX scope (two-path + short form + native pickers + trust line)
3. Design estimate: 8–12 hrs (P0) or 15–22 hrs (full)
4. Dev estimate: ~26–40 hrs (P0) / ~44–68 hrs (P0+P1)
5. Mandatory analytics baseline
6. Dependencies table above

---

## Implementation phases

### Phase 0 — Validate & instrument (before build if possible)

- Confirm pre/post metrics and ezCater volume
- Define GTM events and UTM scheme
- Choose form endpoint provider

### Phase 1 — P0 ship

- `/catering` page with two-path hero
- Working simplified form (static-safe submit)
- Native date/time
- Trust banner
- Remove duplicate mobile CTA
- Replace worst placeholder content on shared chrome if in scope

### Phase 2 — P1

- Searchable locations
- A11y (focus + skip)
- Analytics hardening
- FAQ / light social proof
- Fix broken nav targets

### Phase 3 — P2 polish

- Package redesign, sticky CTA, 404, social icon flip, copyright dynamic year

---

## Notes for LLM agents

1. Read `AGENTS.md`, then **`docs/UX_CONVERSION_STRATEGY.md` (Cursor UX)** before planning or coding.
2. Read Next.js docs under `node_modules/next/dist/docs/` — this is Next 16; APIs may differ from training data.
3. **Static export:** no server actions / no Node API routes on GitHub Pages.
4. Always use `asset()` from `lib/asset.ts` for public image paths.
5. Prefer existing brand tokens and component patterns (`CateringForm`, `CateringMenu`, `Hero`).
6. Forms must actually submit; never ship `preventDefault()`-only handlers.
7. Accessibility is required for P0/P1, not optional polish.
8. Track **both** ezCater and form paths; never report form-only as recovery.
9. Scope Phase A / P0 first; do not block on package redesign or FAQ.
10. Homepage hosts catering content; `/catering` should become the canonical conversion URL if product agrees.
11. If your recommendation conflicts with Cursor’s UX strategy, call the conflict out for the human.

---

## Suggested next actions

1. Analytics: validate form drop vs total catering conversions  
2. Ops/Marketing: pricing + response-time copy  
3. Dev Lead: pick form endpoint  
4. Design: 8–12 hr P0 mockups (or build directly from brand system)  
5. Implement Phase 1  
6. QA + deploy + monitor primary KPI  

---

## How to use this file

- Link from `AGENTS.md` (done when this file is referenced there)
- Paste sections into Basecamp Opportunity
- Share design/dev estimates with PM for client approval
