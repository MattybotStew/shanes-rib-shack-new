# Consensus Plan — Catering Conversion P0

**Sources:** Cursor · Grok CLI · Cline  
**Date:** 2026-07-23  
**Repo:** `shanes-rib-shack-new` (Next.js 16 static export → GitHub Pages)

> **UX strategies (one file per LLM — no overwrites):**  
> Index: [`docs/UX_CONVERSION_STRATEGY.md`](./docs/UX_CONVERSION_STRATEGY.md)  
> · [Cursor](./docs/strategies/cursor-ux-conversion-strategy.md)  
> · [Grok](./docs/strategies/grok-ux-conversion-strategy.md)  
> · [Cline](./docs/strategies/cline-ux-conversion-strategy.md)  
> · [DeepSeek](./docs/strategies/deepseek-ux-conversion-strategy.md)  
> This document is the multi-agent **implementation / ship** merge. Do not replace another LLM’s strategy file.

---

## Verdict (all three agree)

1. **Do not treat “50% fewer form inputs” as proven redesign failure.** ezCater may have absorbed volume. Success KPI = **total qualified catering conversions** (form successes + trackable ezCater), not form submits alone.
2. **The form is currently a product outage** (`preventDefault` only). Shipping a real static-safe submit is non-negotiable.
3. **Static export constraint is real:** no Server Actions / no Node API on GitHub Pages. Use Formspree / CRM webhook / external endpoint.
4. **Clarify two paths:** standard → ezCater; custom → short inquiry form.
5. **Reduce required fields** + **native date/time** + **light trust/response copy**.
6. **Instrument both paths before calling the ship a win.**

---

## Where they diverge

| Topic | Cursor | Grok | Cline |
| :--- | :--- | :--- | :--- |
| P0 size | Fuller: `/catering`, two-path cards, trust banner, analytics, form fix | **Ship thin:** fix form + `/catering` composition + CTA labels/UTMs; delay card redesign / FAQ | Aligns with Cursor’s fuller structure (restate of plan) |
| Design hours | 8–12 (P0 mockups) | **0–2** (copy polish only; not a gate) | 8–12 |
| Dev hours | 26–40 | **15–20** (with buffer) | 26–40 |
| Redesign packages / FAQ | Later (P1/P2) | **Cut from v1** | Keep in plan as later phases |
| Analytics | Required | Required (minimal), warn half-wired GTM | Required |

---

## Consensus P0 (ship this)

**In scope**

| # | Item | Why |
| :--- | :--- | :--- |
| 1 | Working form submit (static-safe endpoint) | Dead form = conversion outage |
| 2 | Fewer required fields (location, name, email and/or phone, event date, guest count) | Friction reduction |
| 3 | Native `type="date"` / `type="time"` | Mobile UX |
| 4 | `/catering` route composing existing sections | Matches production URL + nav |
| 5 | Path clarity via **CTA copy** (standard vs custom)—not a full hero redesign | Cheap clarity |
| 6 | One trust line (pricing floor / notice / 1-business-day reply)—pending Ops copy | Transparency |
| 7 | ezCater real URL + UTMs | Half the funnel |
| 8 | Minimal analytics: path select, form start/submit/success, outbound ezCater | Prove recovery |
| 9 | Remove duplicate mobile “Order Catering Online” CTA | Quick win |
| 10 | Shared form so homepage embed and `/catering` don’t diverge | Consistency |

**Out of P0 (consensus cut / defer)**

- Package visual redesign  
- FAQ / testimonial carousel  
- Full two-card hero redesign (unless design wants it and hours allow)  
- Stubbing every missing nav route (`/menu`, `/locations`, …) as a P0 gate  
- Multi-step wizard / heavy Zod theater  
- Design mockups as a **hard gate** (optional polish only)

---

## Consensus estimates

| Workstream | Consensus range | Notes |
| :--- | :--- | :--- |
| **Design P0** | **2–8 hrs** | Grok: optional 0–2; Cursor/Cline: up to 8–12. **Recommend 2–8:** CTA/trust copy + light wire if needed; do not block eng. |
| **Dev P0** | **18–28 hrs** | Between Grok’s 15–20 and Cursor’s 26–40. Core path ~18; +buffer for endpoint/GTM unknown → ~28. |
| **Buffer** | +20% | Form provider / CRM setup unknowns |

**Recommended Basecamp quote band:** Design **4–8 hrs** · Dev **20–28 hrs** · Total **~24–36 hrs** (all-in P0).

---

## Top risks (union of all three)

1. **Wrong success story** — Client expects form volume rebound; channel shift to ezCater may explain the drop. Educate on dual-path KPI.
2. **No form destination** — Without Formspree/CRM webhook, there is nothing to ship.
3. **Measurement theater** — Events fire but never land in GA4/GTM, or ezCater isn’t attributable → post-ship “read” is vibes.

---

## Dependencies (must lock before / during build)

| Item | Owner |
| :--- | :--- |
| Form endpoint | Dev Lead + Client |
| Pricing floor + lead-time + response copy | Operations / Marketing |
| ezCater destination URL + UTM scheme | Marketing |
| GTM/GA4 access | Analytics |
| Optional: light design polish | Designer |

---

## Ship order (consensus sequence)

1. Lock form endpoint + ezCater URL  
2. Fix `CateringForm` (submit, fields, date/time, success/error + `aria-live`)  
3. Add `/catering` page (compose existing components)  
4. CTA labels + UTMs + trust one-liner  
5. Minimal analytics events  
6. Deduplicate mobile CTA / worst placeholders if in scope  
7. `GITHUB_PAGES=true` build smoke + QA  
8. Ship → **2-week path-mix read** → only then consider card redesign / FAQ  

---

## Basecamp Opportunity (consensus pitch)

**Title:** Catering P0 — Fix Dead Form, Clarify Dual Paths, Measure Both

**Pitch**

1. Inquiry form currently does nothing (`preventDefault` only)—treat as a conversion outage, not polish.  
2. Ship `/catering` + a short static-safe form (fewer required fields, native date/time, success/error).  
3. Clarify standard (ezCater + UTMs) vs custom quote with light CTA/trust copy—not a package redesign.  
4. Instrument **both** paths; primary KPI = total catering conversions (the “50% drop” may be channel shift).  
5. **Estimate: Design 4–8 hrs · Dev 20–28 hrs (~24–36 all-in).** No redesign until a 2-week post-ship path-mix read.

---

## Source notes

- **Cursor:** Authored `CATERING_PLAN.md` / `AGENTS.md` (fuller research P0, 8–12 / 26–40).  
- **Grok CLI:** Independent review; push to thinner first ship (0–2 / 15–20); cut redesign theater.  
- **Cline CLI:** Reviewed embedded plan; aligned with Cursor structure and original hour bands; did not push a thinner cut.

This consensus file is the middle path: **Cursor’s problem framing + Grok’s tighter ship scope + Cline’s confirmation of the dual-path strategy.**
