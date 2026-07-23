# Catering — UX & Conversion Strategy (Cursor)

**Author:** Cursor (Composer)  
**Status:** Cursor’s own UX/conversion opinion — do not overwrite  
**Focus:** User experience and conversion only (no stack, hours, or Basecamp packaging)  
**Audience:** Grok CLI, Cline, Claude, design, PM  
**Date:** 2026-07-23  

**Sibling opinions (never overwrite each other):**  
- Grok: [`grok-ux-conversion-strategy.md`](./grok-ux-conversion-strategy.md)  
- Cline: [`cline-ux-conversion-strategy.md`](./cline-ux-conversion-strategy.md)  
- Index: [`../UX_CONVERSION_STRATEGY.md`](../UX_CONVERSION_STRATEGY.md)

**Full Cursor ship vote:** [`../plans/cursor-catering-plan.md`](../plans/cursor-catering-plan.md)

**Phase A SHIPPED (2026-07-23) — live on GitHub Pages** (`dba4b07`): path-labeled CTAs + helpers · short quote form (native date/time, email-or-phone) · soft trust/SLA · success/error · `/catering/` · FormSubmit default + ezCater brand URL + UTMs · analytics hooks · skip link.

**Local UX since Phase A (current baseline — do not re-implement):**  
Hero hidden · ContactBanner → PathDecision (Step 1) → compact quote form (Step 2) → menu as reference · StickyPathBar (mobile) · HashScroll · accordion CateringMenu + desktop sticky package rail (`lib/menuData.ts`) · form compressed (single Name, Email or phone, date min +2 days, guest ranges, collapsed optionals) · CTAs **Order Online** / **Get a Quote** · RewardsApp removed from catering flow.

**Remaining humans:** FormSubmit inbox confirm · client path-weight · GTM · 14–30 day path-mix → Phase B.  
**Agents:** Prefer Phase B opinions here; do not re-litigate Phase A or rebuild the local 2-step funnel unless fixing a regression. See [`../../AGENTS.md`](../../AGENTS.md).

---

## For other LLMs (read this first)

1. This file is **Cursor’s opinion** only. If you disagree, write in *your* strategy file—**do not overwrite this doc**.
2. **Do not** expand into package redesign, FAQ carousels, or full visual redesign until Phase A path-mix is measurable. Sticky path bar and accordion menu are already local — do not re-propose them as greenfield.
3. Primary KPI = **total qualified catering conversions** (online-order path + quote path)—**not** form volume alone.
4. Implementation/hosting details belong in `CONSENSUS_PLAN.md` / your plan vote, not here.

**Cursor’s one-line position:**  
Route every visitor in under five seconds to either “checkout now” or “get a quote,” then make the quote path short, trustworthy, and measurable—without judging success by form fills alone.

**Current local product shape (Cursor):** Path-first 2-step funnel (choose path → compact form) with menu as reference; desktop package rail for browse-and-prefill. That is the conversion architecture to extend—not a blank Phase A restart.

---

## The conversion problem

Users arrive with **two jobs**:

| Job | Mindset | Ideal outcome |
| :--- | :--- | :--- |
| **Quick / standard order** | Office lunch, known package, wants price + checkout | Complete online catering order (ezCater) |
| **Custom quote** | Wedding, large event, unsure, needs human | Short inquiry + reply within 1 business day |

The page **competes with itself**: “Order Online” and “Submit Inquiry” appear without explaining who each is for. Form volume can fall ~50% while **total catering demand** is flat or up—because buyers shifted to the online-order path.

### Strategy implication

**Do not optimize for form submissions alone.**  
Treat “50% fewer form inputs” as a **hypothesis about path mix**, not proven UX failure, until both paths are measured.

---

## Primary KPI

**Total qualified catering conversions**  
= trackable standard online orders (or clicks if orders unavailable) **+** successful quote submissions  

**Guardrails:** form start→success rate (mobile vs desktop), path mix (`online` vs `quote`), validation errors by field.

---

## Phase A — Conversion levers (do in this order)

| # | Lever | UX action | Why it converts |
| :--- | :--- | :--- | :--- |
| 1 | **Path clarity** | Plain labels: “Order standard online — Instant pricing & checkout” vs “Request a custom quote — We’ll reply within 1 business day” | Stops wrong-path clicks |
| 2 | **Short quote form** | Required only: location, name, email **or** phone, event date, guest count | Cuts homework friction |
| 3 | **Easy dates** | Native date (and optional time) pickers | Mobile completion |
| 4 | **Trust strip** | Lead time + reply SLA (+ price floor only if Ops confirms) | Reduces black-box anxiety |
| 5 | **Path-aligned CTAs** | Package cards: “Order this online” / “Quote this package” (prefill optional package) | Bridges browsing → path |
| 6 | **Measure both paths** | Path chosen, form start/success, outbound online-order | Proves recovery vs channel shift |
| 7 | **Chrome cleanup** | Remove duplicate mobile Order CTAs; kill trust-eroding placeholders | Reduces noise |

Microcopy on form: “Takes about 1 minute.”

---

## Required vs optional (quote path)

**Required**
- Location  
- Name  
- Email **or** phone (at least one)  
- Event date  
- Guest count  

**Optional**
- Organization, event type, package interest, start time, delivery method, comments  

Do **not** require Organization for personal events.

---

## Phase B — Only after path-mix is measurable (~2-week read)

Still deferred (not already local):

- Package visual redesign  
- FAQ accordion  
- Testimonials / logos  
- Searchable location / ZIP  
- True multi-step **wizard** beyond path → form  
- Hard SLA / price floor (Ops)

Already in local tree (do not re-propose): StickyPathBar · accordion menu · desktop package rail · compressed form · path-first sequence.

If form is down but online orders are up → messaging/positioning, not “redesign the form.”  
If both paths are weak → path clarity/friction still unsolved.

---

## What Cursor explicitly rejects as Phase A

- Judging success on form-only volume after adding an online-order path  
- Forcing account creation on the quote path  
- Redesigning package cards before path clarity + form length  
- Using FAQ/chat/sticky as the first fix  
- Shipping a quote form that does nothing (no confirmation / no lead) — that is a product outage, not a polish ticket  

---

## Messaging patterns (use these)

**Standard path**  
“Order standard catering online — Instant pricing & checkout for set packages.”

**Quote path**  
“Request a custom quote — Large events, special requests, or if you’re not sure. We’ll reply within 1 business day.”

**Trust (one line)**  
“Most events need ~48-hour notice. We’ll respond within 1 business day.”  
Add “Packages start at $X/person” only when Ops confirms X.

---

## Experiments (UX-led)

| Test | Hypothesis |
| :--- | :--- |
| Path label clarity | Clearer copy → fewer wrong-path clicks, higher completion on intended path |
| Required-field count | Dropping org/package/time from required → higher quote completion |
| Price floor shown vs hidden | Shown → fewer tire-kickers, better lead quality |
| Native date vs text | Fewer errors, higher mobile completion |

---

## Success look

A visitor can answer in under 5 seconds:  
**“Should I order now or ask for a quote?”**

Quote seekers finish without inventing an organization or guessing date formats.  
Standard buyers are not forced through a lead form to see a price.

---

## Production premise (correction)

**Do not tell stakeholders “we need to add online order.”**

On **production** (`shanesribshack.com/catering/`):

- **Order Online → ezCater** already exists  
- **Submit Inquiry → form** already exists  

What’s missing is **hierarchy and labels** (who each path is for, and which CTA carries visual weight)—not the existence of the online-order path.

This **repo** now wires both paths (Pages defaults + optional Secrets). Stakeholder asks should be about **weight and preference**, not “should we add online order.” Local UX clarifies the fork as a Step 1 decision before the quote form.

Shared PM packet: [`../CLIENT_BLOCKERS.md`](../CLIENT_BLOCKERS.md)

---

## Client blockers (Cursor)

Until these three decisions land, draft mockups with placeholders—**do not ship hard promises**.

| # | Decision | Ask the client | Default if they stall |
| :--- | :--- | :--- | :--- |
| **1. Primary path** | Which CTA gets visual weight? | “Which drives more margin/ops preference: standard online orders or custom quotes?” | Equal-weight **labeled** dual CTAs until data exists |
| **2. SLA / price** | Hard promise vs soft language | “What reply time can you keep every weekday? Any $/person or min order we can publish?” | Soft: “A specialist will reach out during business hours.” No fake `$X` |
| **3. Measurement** | Path mix visible or dark? | “Can we see form submits vs ezCater clicks/orders pre/post launch?” | Instrument both paths before calling redesign a win; review at ~14–30 days |

### How this maps to Cursor’s stance

- **#1** settles path UI **weight** (labels vs heavier primary treatment).  
- **#2** unlocks trust copy without inventing SLAs.  
- **#3** protects the dual-path KPI so “50% form drop” isn’t misread.

---

## How other agents should use this

| Agent | Instruction |
| :--- | :--- |
| **Grok / Cline / Claude** | Critique or extend in **your own** `docs/strategies/{you}-ux-conversion-strategy.md`. Never replace this file. |
| **Design** | Mock Phase A only: path labels, short form, trust strip, mobile. |
| **PM / Basecamp** | Pitch Phase A conversion story + dual-path KPI; defer Phase B visuals. |
| **Engineering** | When coding, follow `CONSENSUS_PLAN.md` under multi-agent strategy agreement. |
