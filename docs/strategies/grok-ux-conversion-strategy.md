# Catering Page — UX & Conversion Strategy (Grok CLI)

**Author:** Grok CLI (xAI)  
**Status:** Grok’s own UX/conversion opinion — do not overwrite  
**Focus:** User experience and conversion only (no implementation, stack, or hour estimates)  
**Audience:** Cursor, Cline, Claude, design, PM, client  
**Date:** 2026-07-23  

> **Repo update (2026-07-23):** Phase A catering UX is **SHIPPED** on GitHub Pages.  
> Live: https://mattybotstew.github.io/shanes-rib-shack-new/catering/ · See [`../../AGENTS.md`](../../AGENTS.md).  
> Opinion body below is unchanged — extend for **Phase B**; do not re-propose Phase A.

**Sibling opinions (never overwrite each other):**  
- Cursor: [`cursor-ux-conversion-strategy.md`](./cursor-ux-conversion-strategy.md)  
- Cline: [`cline-ux-conversion-strategy.md`](./cline-ux-conversion-strategy.md)  
- Index: [`../UX_CONVERSION_STRATEGY.md`](../UX_CONVERSION_STRATEGY.md)

---

## For other LLMs

1. This file is **Grok only**. Critique in *your* strategy file; do not replace this content.
2. Prefer product debate here; implementation belongs in `docs/plans/*-catering-plan.md` or `CONSENSUS_PLAN.md`.
3. Primary KPI is **total qualified catering conversions**—not form volume alone.

**Grok’s one-line position:**  
Help every visitor instantly choose “checkout now” or “talk to us,” then make the quote path short, trustworthy, and measurable.

---

## The real conversion problem

Users land on catering with **two different jobs**:

| Job | User mindset | Ideal outcome |
| :--- | :--- | :--- |
| **Quick order** | Office lunch, known package, wants price + checkout now | Complete an online catering order |
| **Custom inquiry** | Wedding, large event, special needs, uncertain details | Submit a short quote request and get a human reply |

The page currently **competes with itself**: “Order online” and “Submit inquiry” sit side by side without explaining who each is for. Form volume can fall while **total catering demand** is stable or up—because some people left the form path for the online-order path.

### Strategy implication

**Do not optimize for form submissions alone.**

**Primary success metric:**  
**Total qualified catering conversions** = online orders (or clicks into checkout) + successful quote requests.

Secondary metrics:

- Quote-form start → complete rate  
- Split of traffic choosing “order” vs “quote”  
- Mobile vs desktop completion on the quote path  

---

## Conversion principles

1. **One job per primary action** — Never make the user decode which button is “theirs.”
2. **Match effort to certainty** — People who know what they want should checkout; people who don’t should not fill a long form.
3. **Remove anxiety before the ask** — Price floor, lead time, and “we’ll reply by…” reduce abandonment more than extra fields.
4. **Mobile is the form** — Most traffic is mobile; date pickers, short fields, and clear CTAs dominate conversion.
5. **Measure both doors** — If you only count forms, you’ll “fix” the wrong problem.

---

## Recommended UX strategy (priority order)

### 1. Decision clarity (highest conversion leverage)

**Problem:** Users don’t know whether to order online or request a quote.

**Strategy:** Create an explicit **two-path choice** at the top of the catering experience.

| Path | Who it’s for | Promise | Primary CTA |
| :--- | :--- | :--- | :--- |
| **Order standard catering** | Small events, offices, standard packages | Instant pricing & checkout | Order online |
| **Request a custom quote** | Large events, weddings, special requests | Personalized help; reply within 1 business day | Get a quote |

**Copy rules:**

- Label by **outcome**, not system (“Order online” is weak; “Instant checkout for standard packages” is clearer).
- One short line under each option explaining **when to pick it**.
- Avoid two equally loud buttons that say different things but feel the same weight.

**Visual options (design choice, same strategy):**

- **A. Two cards** — strongest clarity (best for confused users).  
- **B. Two clearly labeled CTAs + helper line** — lighter change, still works if labels are excellent.

Either is valid; **clarity of language matters more than card chrome.**

---

### 2. Quote form as a short conversation (not an application)

**Problem:** Long, rigid forms kill incomplete demand—especially personal events and “I’m not sure yet” planners.

**Strategy:** Ask only what is needed to **start a reply**, not to fully specify the event.

#### Required (minimum viable quote)

| Field | Why it must be required |
| :--- | :--- |
| Location | Routing / kitchen capacity |
| Name | Who to contact |
| Email **or** phone (at least one) | Ability to reply |
| Event date | Feasibility / calendar |
| Guest count | Package scale and kitchen load |

#### Optional (nice, not blocking)

| Field | Why optional |
| :--- | :--- |
| Organization | Irrelevant for many personal events |
| Package interest | They may not know yet |
| Start time | Flexible until confirmed |
| Delivery vs pickup | Often “not sure” |
| Event type / comments | Capture later in conversation |

**UX rules:**

- Never force “Organization” for a birthday or family reunion.  
- Prefer **email or phone**, not both as hard requirements.  
- Date (and time if shown) must feel native and easy on phones.  
- Success state should **restate the promise**: “We’ll reply within 1 business day.”

**Form length target:** scannable in under ~60 seconds on mobile.

---

### 3. Trust and process transparency

| Message type | Example direction |
| :--- | :--- |
| Price anchor | Packages start around $X/person (only if real) |
| Lead time | Most events need about 48 hours notice |
| Response SLA | We’ll reply within 1 business day |

Honest anchors only. Soft language until Ops confirms numbers.

---

### 4. Path-aligned CTAs throughout the page

| Context | Better CTA | Path |
| :--- | :--- | :--- |
| Standard package description | “Order this package online” / “See instant pricing” | Online order |
| Custom / large / wedding framing | “Request a custom quote” | Form |
| End of packages | Dual choice again (short) | Both |

Avoid repeating the same unlabeled “Order Catering Online” twice on mobile.

---

### 5. Package presentation (secondary)

Packages should help users **self-sort**: “this is enough → order” vs “too custom → quote.”  
Scannable cards beat long text walls. Highlight most popular if marketing agrees.  
**Priority:** Secondary to path clarity + form friction.

---

### 6. Social proof & FAQ (phase 2)

Use after core path + form work ships and you have baseline metrics.

---

## Recommended page narrative

```
1. Land → understand “we cater events of all sizes”
2. Choose path → Standard order  OR  Custom quote   (clear, above the fold)
3a. Standard → leave site to instant checkout (tracked)
3b. Custom → see trust strip → short form → success + SLA
4. (Optional scan) packages reinforce choice with path-aligned CTAs
5. (Phase 2) FAQ / proof for residual hesitation
```

Everything on the page should serve **step 2** or **step 3**.

---

## Messaging framework

| Element | Direction |
| :--- | :--- |
| Standard path title | Order standard catering |
| Standard promise | Instant pricing & checkout for offices and small events |
| Custom path title | Request a custom quote |
| Custom promise | Large events, weddings, special requests—we’ll reply within 1 business day |
| Form headline | Get a catering quote |
| Form intro | A few details is enough—we’ll follow up to finalize |
| Success | Thanks—we’ll reply within 1 business day |

Avoid: “Submit” without outcome; “Complete all fields” when many are optional; vague “Order online.”

---

## Mobile conversion rules

1. Path choice stacked, full-width buttons.  
2. Form fields large, one column, labels visible.  
3. Easy date entry (no typing arbitrary date strings).  
4. Phone as first-class contact path (tap-to-call supports high intent).  
5. No duplicate competing CTAs without labels.  
6. Trust strip visible before submit.

---

## Measurement strategy

| Signal | What it tells you |
| :--- | :--- |
| Path split (order vs quote) | Whether channel shift explains form drop |
| Form start rate | Whether path CTA is working |
| Form complete rate | Friction of the form itself |
| Online-order click-outs | Health of standard path |
| Mobile vs desktop complete | Where to invest next UX pass |

**Good:** total conversions up even if form-only is flat.  
**Bad:** more clicks, fewer completes, unclear path mix.

---

## Phased UX roadmap

### Phase A — Conversion clarity (do first)

| Priority | Strategy |
| :--- | :--- |
| A1 | Explicit order vs quote decision (copy + hierarchy) |
| A2 | Short quote form (required minimum only) |
| A3 | Easy date entry on mobile |
| A4 | Trust: lead time + response SLA (+ price if real) |
| A5 | Path-aligned CTAs; kill confusing duplicates |
| A6 | Measure both paths |

### Phase B — Confidence & scanning

Package cards easier to compare · FAQ near form · testimonials / logos · searchable location if list feels long

### Phase C — Polish

Sticky mobile quote CTA · stronger event photography · A/B path labels and form length

---

## Client conversation points

1. The 50% form drop may not be a failure—it may be a channel split. Agree on **total conversion**.  
2. Two paths are a feature if explained; a bug if not.  
3. Shorter form will feel less “complete” to Ops—trade completeness for more starts.  
4. Price/lead-time honesty needs Ops.  
5. Phase A first—prove path + form lift before funding redesign breadth.

---

## How this differs from siblings (Grok view)

| Topic | Grok stance |
| :--- | :--- |
| Cards vs labels | Language > chrome; both OK |
| Form-first vs path-first | Path clarity is highest leverage, then short form |
| Phase B redesign | Explicitly after measurable Phase A |
| Form that doesn’t submit | Broken product (shared with all) |
