# Cursor Plan

> **Cursor UX strategy (owned file — do not overwrite):**  
> [`../strategies/cursor-ux-conversion-strategy.md`](../strategies/cursor-ux-conversion-strategy.md)  
> Sibling strategies: Grok · Cline under `docs/strategies/`. Index: [`../UX_CONVERSION_STRATEGY.md`](../UX_CONVERSION_STRATEGY.md).  
> This file is Cursor’s ship vote (KPIs + P0 + estimates).

> **SHIP STATUS (2026-07-23):** Phase A **implemented and live** on GitHub Pages.  
> https://mattybotstew.github.io/shanes-rib-shack-new/catering/  
> **Local since Phase A:** 2-step path-first funnel (ContactBanner → PathDecision → compact form → menu); StickyPathBar; HashScroll; accordion CateringMenu; desktop sticky package rail (`lib/menuData.ts`); form compressed (Name · Email or phone · date min +2 · guest ranges · collapsed optionals); CTAs **Order Online** / **Get a Quote**; RewardsApp out of catering flow.  
> P0 checklist in [`../../CONSENSUS_PLAN.md`](../../CONSENSUS_PLAN.md) is marked done. Historical diagnosis below is **pre-ship** — treat as context, not current code. Do not re-implement Phase A or the local funnel.

## Diagnosis (historical — pre Phase A)

**The “50% form drop” is not a proven conversion crisis.** New site pushes two channels (ezCater + inquiry form). Form volume can tank while total catering demand is flat. We do not know path mix, mobile completion, or whether users ever hit a working submit.

**What the code actually did wrong before Phase A:**

| Finding | Evidence | Funnel impact |
| :--- | :--- | :--- |
| Form is a no-op | `CateringForm` `onSubmit` → `preventDefault()` only | 100% abandonment of “custom” path |
| Date/time are plain text | `type` omitted; placeholders only | High mobile drop before submit |
| Over-required form | Org, package, startTime, eventType, email **and** phone all `required` | Friction on personal / unsure buyers |
| Path confusion | Hero: View Menu + Order Online (both dead routes); Menu footer: Inquiry + Order Online | Competing CTAs, no “who goes where” |
| `/catering` missing | Nav + Hero link to `/catering`; content lives on homepage | Production URL not mirrored; trust leak |
| No dual-path analytics | Zero events | Cannot defend success or diagnose drop |

**Do not over-attribute drop to polish** (H1 dupe, focus rings, promo placeholder). Fix the broken submit + measurement first; path clarity and friction next.

---

## What success looks like (KPIs)

| Priority | KPI | Notes |
| :--- | :--- | :--- |
| **Primary** | Total qualified catering conversions = form success + trackable ezCater (orders preferred; clicks if orders unavailable) | Never report form-only as “recovery” |
| Guardrail | Form completion rate (start → success) | Mobile vs desktop split required |
| Guardrail | Path mix (`ezcater` vs `custom`) | Validates channel-shift hypothesis |
| Leading | `catering_form_started`, validation errors by field | Spot remaining friction |
| Baseline | 2 weeks pre-ship dual-path events (if possible) | Or ship instrumentation day 0 of redesign |

Ship is “done” only when both paths are measurable and the form actually delivers leads.

---

## Recommended scope (P0 only)

Ship a **canonical `/catering` conversion page** + fix the form. Reuse brand components; no redesign theater.

1. **`app/catering/page.tsx`** — compose hero (two-path), packages (reuse `CateringMenu` visuals), trust line, short form. One H1.
2. **Two-path decision (above the fold)**  
   - **Order standard** → ezCater + UTMs (`utm_source=shanessite&utm_medium=catering&utm_campaign=online_order`)  
   - **Request custom quote** → `#catering-form`  
   Plain subcopy: “Instant pricing & checkout” vs “We’ll reply within 1 business day.”
3. **Working form (static-safe)** — `POST` to `NEXT_PUBLIC_CATERING_FORM_ENDPOINT` (Formspree/Basin/CRM webhook). Loading / success / error. No Server Actions (static export).
4. **Required fields only:** location, name, email **or** phone (≥1), event date, guest count.  
   Optional: org, package, start time, delivery method, comments, event type.
5. **Native** `type="date"` / `type="time"` (time optional); large mobile targets.
6. **Trust banner** (copy placeholders OK until Ops signs off): pricing floor · ~48h lead time · 1-business-day reply.
7. **Analytics (in P0, not “later”):**  
   `catering_path_selected`, `catering_form_started`, `catering_form_submitted`, `catering_form_success`, `outbound_click` (ezcater). Minimal GTM dataLayer or equivalent.
8. **CTA hygiene:** dedupe mobile “Order Catering Online”; wire Order Online → real ezCater URL; stop linking dead `/order` for catering.

Homepage: either deep-link to `/catering` or embed the same fixed form — do not maintain two different forms.

---

## Explicitly out of scope for v1 / still deferred

- Full package visual redesign, testimonial carousel, FAQ accordion  
- Searchable location / ZIP geo / multi-step wizard beyond path → form  
- Stubbing entire site nav (`/menu`, `/locations`, `/our-story`, …) — only catering path  
- Hard SLA / price without Ops  
- Server Actions / API routes on this Next export  

**Landed locally after Phase A (do not re-propose):** StickyPathBar · accordion menu · desktop package rail · compressed form · path-first Step 1/2 sequence.

---

## Implementation notes

- **Constraint:** `output: "export"` — form = external endpoint only. Env: `NEXT_PUBLIC_CATERING_FORM_ENDPOINT`.
- Prefer refactor of `components/CateringForm.tsx` over greenfield; extract validation helpers if needed (`lib/catering.ts`).
- Reuse `CateringMenu` card language; add optional “Quote this package” → form with package prefill (query/hash) if cheap.
- Brand tokens only (`brand-red` / `brand-gold` / `brand-tan` / `brand-black`); images via `asset()`.
- Contact-at-least-one: client validate email XOR/OR phone (not both forced).
- Success UI must restate response SLA so “confirmation email” copy isn’t a lie if endpoint only emails Ops.
- **Blockers before code freeze:** form destination owner, ezCater base URL, GTM access. Pricing floor can ship as “packages from $X” with X TBD if Ops is slow — do not block on perfect copy.

---

## Estimates

**Recommended first ship = P0 above only.**

| Workstream | Hours |
| :--- | :--- |
| Design (two-path cards + short form + trust + mobile) | **6–10** (lean: build on existing Figma language; skip full prototype) |
| Dev: `/catering` + two-path hero | 4–6 |
| Dev: form cut + native date/time + validation UX | 5–7 |
| Dev: static form endpoint + states | 3–6 |
| Dev: trust banner + CTA/ezCater wiring | 2–3 |
| Dev: analytics + UTMs | 3–5 |
| QA (mobile Safari/Chrome, form endpoint, events) | 3–5 |
| **Dev total** | **~20–32 hrs** |
| **Design + Dev** | **~26–42 hrs** (+~20% if form vendor/CRM unknown) |

Full CATERING_PLAN P0+P1 (~44–68 hrs) is **too wide** for first recovery ship.

---

## Risks / open questions

1. **Measurement gap:** Without pre-ship ezCater + form baselines, “50% recovery” is unfalsifiable. Instrument first week even if design lags.
2. **Form endpoint ownership:** Client CRM vs Formspree — blocks real submit.
3. **ezCater order data:** Clicks ≠ orders; negotiate order reporting or accept click proxy explicitly.
4. **Ops copy:** Pricing floor / lead time may be wrong → trust damage; use soft language until confirmed.
5. **Channel shift truth:** If ezCater already absorbed the drop, UX polish may not move form KPIs — still fix dead form (broken product).
6. **Homepage vs `/catering` dual maintenance** if both keep forms.

---

## Vote: top 5 ranked actions

1. **Make the form submit** (static endpoint + success/error) — broken product, not optimization.  
2. **Instrument both paths + UTMs** — kill form-only vanity metrics; establish primary KPI.  
3. **Ship two-path decision on `/catering`** — route standard vs custom intentionally.  
4. **Cut required fields + native date/time** — remove known mobile/decision friction.  
5. **Trust line (pricing / lead time / reply SLA)** — reduce quote-path anxiety without redesign.

*Everything else waits until these five ship and a 2-week KPI read exists.*
