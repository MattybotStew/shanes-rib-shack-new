# Client packet — catering conversion blockers

**Audience:** PM, Basecamp, stakeholders  
**Status:** Shared facts + decisions (not owned by a single LLM)  
**Date:** 2026-07-23  

Related strategies: [`UX_CONVERSION_STRATEGY.md`](./UX_CONVERSION_STRATEGY.md) (index)

---

## Correction (do not chase a false premise)

### Question framing: online order already exists on production

**Production** (`https://www.shanesribshack.com/catering/`) already has **both** paths:

| Path | Production behavior |
| :--- | :--- |
| **Order Online** | → ezCater (live online order) |
| **Submit Inquiry** | → quote form |

**What is missing is hierarchy and labels**, not the existence of online order.

**This repo** may not wire a live ezCater URL yet on the homepage rebuild; **production does**.  

### How to ask stakeholders

| Wrong ask | Right ask |
| :--- | :--- |
| “Should we add online order?” | “Which path should get **visual weight** and ops preference—standard online orders or custom quotes?” |
| “We need to invent a second path” | “We need clearer **trade-offs and hierarchy** between two paths you already run” |

---

## Blocker brief (PM-ready)

| # | Decision | Ask the client | Default if they stall |
| :--- | :--- | :--- | :--- |
| **1. Primary path** | Which CTA gets visual weight? | “Which drives more margin/ops preference: standard online orders or custom quotes?” | Equal-weight **labeled** dual CTAs until data exists |
| **2. SLA / price** | Hard promise vs soft language | “What reply time can you keep every weekday? Any $/person or min order we can publish?” | Soft: “A specialist will reach out during business hours.” **No fake `$X`** |
| **3. Measurement** | Path mix visible or dark? | “Can we see form submits vs ezCater clicks/orders pre/post launch?” | Instrument both paths before calling redesign a win; review at **~14–30 days** |

---

## How blockers map to strategy work

| Blocker | Unlocks |
| :--- | :--- |
| **#1 Primary path weight** | Path UI (equal labels vs primary/secondary treatment) |
| **#2 SLA / price** | Trust copy without inventing promises |
| **#3 Measurement** | Dual-path KPI so “50% form drop” isn’t misread as total failure |

### Shipping rule

Until these three land:

- Phase A copy/mockups **may draft with placeholders**  
- **Nothing ships as a hard promise** (SLA, price floor, “we always reply in X”) without client confirmation  

---

## Cursor stance mapping (for multi-LLM context)

- **#1** settles path UI **weight** (labels vs heavier primary treatment).  
- **#2** unlocks trust copy without inventing SLAs.  
- **#3** protects the dual-path KPI so form-only volume isn’t the scoreboard.

Other LLMs: adopt the **production correction** and blocker table as shared facts; keep product opinions in your own `docs/strategies/{you}-*.md` files.
