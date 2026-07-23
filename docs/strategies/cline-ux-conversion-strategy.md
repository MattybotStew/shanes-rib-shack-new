# Catering Page — UX & Conversion Strategy (Cline)

**Author:** Cline (derived from Cline plan vote; UX-only extract)  
**Status:** Cline’s own UX/conversion opinion — do not overwrite  
**Focus:** User experience and conversion only (no file lists, hours, or stack)  
**Audience:** Cursor, Grok CLI, Claude, design, PM  
**Date:** 2026-07-23  

> **Repo update (2026-07-23):** Phase A catering UX is **SHIPPED** on GitHub Pages.  
> Live: https://mattybotstew.github.io/shanes-rib-shack-new/catering/ · See [`../../AGENTS.md`](../../AGENTS.md).  
> **Local since Phase A:** 2-step path-first funnel + compact form + desktop package rail (StickyPathBar, HashScroll, accordion menu). Opinion body below is unchanged — extend for **Phase B**; do not re-propose Phase A or rebuild the local funnel.

**Sibling opinions (never overwrite each other):**  
- Cursor: [`cursor-ux-conversion-strategy.md`](./cursor-ux-conversion-strategy.md)  
- Grok: [`grok-ux-conversion-strategy.md`](./grok-ux-conversion-strategy.md)  
- DeepSeek: [`deepseek-ux-conversion-strategy.md`](./deepseek-ux-conversion-strategy.md)  
- Index: [`../UX_CONVERSION_STRATEGY.md`](../UX_CONVERSION_STRATEGY.md)

**Full Cline ship vote (implementation):** [`../plans/cline-catering-plan.md`](../plans/cline-catering-plan.md)

---

## For other LLMs

1. This file is **Cline only**. Critique in *your* strategy file; do not replace this content.
2. Cline optimizes for **smallest conversion ship**, not design theater.
3. Primary KPI: **working quote path + trackable online-order path**—form volume alone is a lie if people leave to online order.

**Cline’s one-line position:**  
Fix the dead form and make the two paths obvious with labels—not a redesign. Ship. Measure. Then argue about cards.

---

## Premise correction (production reality)

**Production** (`shanesribshack.com/catering/`) already has **both** paths:
- Order Online → ezCater (live)
- Submit Inquiry → form (live)

The problem is **not** "should we add online order." It is **hierarchy + labels + measurement**.  
This repo may not wire a live ezCater URL yet; production does. Ask stakeholders about **CTA weight**, not existence.

**Client blockers** (PM-ready — gate Phase A copy):

| # | Decision | Ask the client | Default if they stall |
| :--- | :--- | :--- | :--- |
| 1 | Primary path **weight** | "Which drives more margin/ops preference: standard online orders or custom quotes?" | Equal-weight labeled dual CTAs until data exists |
| 2 | SLA / price publishable? | "What reply time can you keep every weekday? Any $/person or min order we can publish?" | Soft: "A specialist will reach out during business hours." No fake `$X` |
| 3 | Measurement visibility | "Can we see form submits vs ezCater clicks/orders pre/post launch?" | Instrument both paths before calling redesign a win; review at ~14–30 days |

Until #1–#3 land: placeholders OK in mockups; **no hard promises ship**.

---

## Conversion problem (Cline view)

What actually kills conversion today (in priority order):

1. **Quote path is dead** — user completes a long form and nothing happens (no lead, no confirmation). That is not “low conversion”; it is a broken product.
2. **Friction** — org / package / time forced; dates as plain text; mobile suffers.
3. **No path guidance** — “Order online” vs “Submit inquiry” without who-each-is-for.
4. **Missing catering destination** — users following nav/hero to catering get a dead end if the URL isn’t real.
5. **Online-order path unmeasured** — so form drop looks like total failure.

Redesign, FAQ, and package chrome are **not** the first conversion problem.

---

## Primary KPI

| Priority | Metric |
| :--- | :--- |
| **Primary** | Quote form **actually delivers** a lead (success state) **+** trackable online-order exits |
| Secondary | Quote start → success rate |
| Guardrail | Do not call “recovery” from form count alone |

---

## UX strategy (Phase A only)

### 1. Make quote completion real (product honesty)

- User must see success or error after submit.  
- Success copy restates SLA (“We’ll reply within 1 business day”).  
- A silent form is worse than a short form.

### 2. Kill form friction

**Required only:** location, name, email **or** phone, event date, guest count.  
**Optional:** organization, package, start time, event type, delivery, comments.

Native-feeling date (and time if kept). No inventing an organization for a family BBQ.

### 3. Path clarity without redesign theater

**Cline rejects two-path card systems as Phase A.**  
Use **clear labels + one helper line** on existing hero/CTAs:

| Label direction | Job |
| :--- | :--- |
| “Order online (standard packages)” | Instant checkout path |
| “Request custom quote” | Human quote path |

One sentence of help is enough: standard = checkout; custom = reply in 1 business day.

### 4. Trust as one line, not a component system

Inline near form:

- ~48-hour notice  
- Reply within 1 business day  
- Price floor **only** if real—never fake `$XX`

### 5. Wire the other door

Online-order CTAs must go to a **real** catering checkout destination and be countable. Otherwise you cannot interpret the form drop.

### 6. Stop after the minimum

Ship Phase A. Measure. **Then** argue about two-path cards, FAQ, package redesign.

---

## What Cline explicitly refuses as Phase A UX

- Two-path decision **card** redesign  
- FAQ accordion / testimonial carousel as first fix  
- Multi-step form wizard  
- Package visual redesign before form works  
- Judging success by form volume alone  
- Design mockups as a **blocker** to shipping path + form clarity  
- “Complete all fields” messaging when most fields should be optional  

---

## Phase B (only after ship + measure)

- Two-path cards **if** path mix shows continued confusion after clear labels  
- FAQ for minimums / radius / notice  
- Package compare UX  
- Sticky mobile quote CTA  

---

## Messaging (minimal)

| Element | Cline direction |
| :--- | :--- |
| Standard CTA | Order online (standard packages) |
| Quote CTA | Request custom quote |
| Helper | Instant checkout vs personal reply in 1 business day |
| Form intro | A few details—we’ll follow up |
| Success | Thanks—we’ll reply within 1 business day |

---

## How this differs from siblings (Cline view)

| Topic | Cursor | Grok | DeepSeek | **Cline** |
| :--- | :--- | :--- | :--- | :--- |
| Path UI | Strong clarity; fuller OK | Cards **or** labels; language > chrome | Two paths + **explicit trade-off** (speed vs custom) | **Labels only** Phase A |
| First priority | Path early + measure | Path clarity highest leverage | **Cognitive load** (field count) + path labels | **Dead form first**, then friction, then labels |
| Trust | SLA + lead time | SLA + lead time (+ price if real) | **Social proof at submit** + SLA | One honest line |
| Post-submit | Success + SLA | Success + SLA | **Confirmation + auto-reply + optional SMS** as core UX | Success + SLA |
| Menu vs form | Packages self-sort | Self-sort secondary | **Menu preview supports form** (salivate while filling) | Minimal chrome |
| Cadence | Phase A then measure | Phase A then measure | **Explicit 2-week UX sprint** | Hardest cut, ship fast |
| Scope | Phase A ~7 levers | Full messaging narrative | Funnel targets + behavioral laws | **Stop after top 5** |
| Design gate | Lean mockups optional | Not required | Ready for microcopy / Figma flow next | **Refuse as gate** |

---

## Vote: top 5 UX/conversion actions

1. Quote form that actually completes (success/error + SLA)  
2. Short required set + easy mobile dates  
3. Real catering destination users can land on  
4. Real online-order path that can be measured  
5. Path labels + one trust line—**no card redesign**  

*Stop after #5. Ship. Measure. Then argue about cards.*
