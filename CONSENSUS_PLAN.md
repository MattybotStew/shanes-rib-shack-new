# Consensus Plan — Catering Conversion P0

**Sources:** Cursor · Grok CLI · Cline · DeepSeek  
**Date:** 2026-07-23  
**Repo:** `shanes-rib-shack-new` (Next.js 16 static export → GitHub Pages)

> **Status: Phase A SHIPPED** to GitHub Pages (`dba4b07`).  
> Live: https://mattybotstew.github.io/shanes-rib-shack-new/catering/  
> **Local (post–Phase A):** 2-step path-first funnel + compact form + desktop package rail — see [`AGENTS.md`](./AGENTS.md).  
> UX index: [`docs/UX_CONVERSION_STRATEGY.md`](./docs/UX_CONVERSION_STRATEGY.md)  
> Do not replace another LLM’s strategy file. Do not re-implement Phase A or the local funnel.

---

## Definition of done — checklist

| # | Item | Status |
| :--- | :--- | :--- |
| 1 | Working form submit (static-safe) | ✅ FormSubmit → catering@shanesribshack.com |
| 2 | Fewer required fields | ✅ |
| 3 | Native date/time | ✅ |
| 4 | `/catering/` route | ✅ `trailingSlash: true` |
| 5 | Path clarity via CTA copy | ✅ Labels + helpers |
| 6 | Trust line (soft SLA) | ✅ Soft language (no fake `$X`) |
| 7 | ezCater URL + UTMs | ✅ Brand storefront |
| 8 | Minimal dual-path analytics | ✅ dataLayer/gtag hooks |
| 9 | Placeholder / CTA cleanup | ✅ |
| 10 | Shared form on home + `/catering` | ✅ |

**Remaining human steps:** FormSubmit inbox confirm · client path-weight · GTM verify · 14–30 day path-mix read → Phase B  

---

## Verdict (all agreed — still true)

1. Do not treat “50% fewer form inputs” as proven redesign failure — measure **total** catering conversions.  
2. Dead form was a product outage — fixed with static-safe POST.  
3. Static export: no Server Actions — external endpoint only.  
4. Clarify two paths: standard → ezCater; custom → short form.  
5. Short fields + native dates + soft trust.  
6. Instrument both paths.

---

## Where they diverged (historical)

| Topic | Cursor | Grok | Cline |
| :--- | :--- | :--- | :--- |
| P0 size | Fuller | Thin ship | Thin ship |
| Design hours | 8–12 | 0–2 | 8–12 |
| Dev hours | 26–40 | 15–20 | ~7–11 (aggressive) |

**What actually shipped:** thin Phase A (Cline/Grok lean) with Cursor UX copy/framing — aligns with consensus middle path.

---

## Out of P0 / Phase B (still deferred)

- Package visual redesign · FAQ · testimonial carousel  
- Full two-card hero redesign (hero is currently **hidden** in local flow)  
- Stubbing every nav route  
- Multi-step **wizard** beyond the local 2-step path → form funnel  
- Hard SLA / price floor without Ops confirmation  

**Note:** Sticky mobile path bar, accordion menu, and desktop package rail landed locally after Phase A — do not re-propose them as greenfield Phase B.

---

## Dependencies (updated)

| Item | Owner | Status |
| :--- | :--- | :--- |
| Form endpoint | Dev | ✅ Default FormSubmit; Secrets override OK |
| ezCater URL | Marketing | ✅ Brand URL default |
| Soft trust copy | UX | ✅ Shipped |
| Hard SLA / price | Ops | ⏳ Pending |
| Path weight preference | Client | ⏳ Pending (equal weight live) |
| GTM/GA4 verification | Analytics | ⏳ Pending |

---

## Ship order (executed)

1. ~~Lock form endpoint + ezCater URL~~ ✅ defaults  
2. ~~Fix CateringForm~~ ✅  
3. ~~`/catering` page~~ ✅  
4. ~~CTA labels + UTMs + trust~~ ✅  
5. ~~Minimal analytics~~ ✅  
6. ~~Placeholder cleanup~~ ✅  
7. ~~Pages build/QA~~ ✅  
8. **Next:** Deploy local 2-step UX when ready · 2-week path-mix read → Phase B  

---

## Basecamp Opportunity (post-ship)

**Title:** Catering Phase A Live — Confirm Inbox + Measure Dual Paths  

**Pitch**

1. Phase A is live on GitHub Pages (dual-path labels, short form, soft SLA). Local tree extends to a path-first 2-step funnel.  
2. Confirm FormSubmit email so leads reach `catering@shanesribshack.com`.  
3. Primary KPI remains **total catering conversions** (form + ezCater), not form-only.  
4. Client still chooses path **weight**; Ops still owns hard SLA/price.  
5. After 14–30 days of path mix, decide Phase B (FAQ/proof beyond what’s already local).  

---

## Source notes

Cursor UX framing + Cline thin ship + Grok path-first + DeepSeek behavior notes → Phase A shipped by Cursor implementation.
