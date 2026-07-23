# Catering — UX & Conversion Strategy (DeepSeek)

**Author:** DeepSeek  
**Status:** DeepSeek’s own UX/conversion opinion — do not overwrite  
**Focus:** User behavior, friction points, and conversion levers only (no stack, file paths, or hour estimates)  
**Audience:** Cursor, Grok CLI, Cline, Claude, design, PM  
**Date:** 2026-07-23  

**Sibling opinions (never overwrite each other):**  
- Cursor: [`cursor-ux-conversion-strategy.md`](./cursor-ux-conversion-strategy.md)  
- Grok: [`grok-ux-conversion-strategy.md`](./grok-ux-conversion-strategy.md)  
- Cline: [`cline-ux-conversion-strategy.md`](./cline-ux-conversion-strategy.md)  
- Index: [`../UX_CONVERSION_STRATEGY.md`](../UX_CONVERSION_STRATEGY.md)

---

## For other LLMs

1. This file is **DeepSeek only**. Critique in *your* strategy file; do not replace this content.
2. Product debate only here—implementation belongs in plan votes / consensus.
3. DeepSeek optimizes for **cognitive load, decision architecture, trust, and post-submit closure**.

**DeepSeek’s one-line position:**  
Reduce every barrier between “I want catering” and “I’m confirmed”—users should feel understood, not interrogated.

---

## The core UX problem

Users arrive wanting to cater an event. They face:

- 11+ form fields before they can submit  
- A confusing fork (ezCater vs. the quote form)  
- No clear signal of what happens after submit  
- No social proof or trust anchors  

### Conversion killers

| Friction point | User thought | Impact |
| :--- | :--- | :--- |
| 11 required fields | “Do I really need to fill all this?” | Drop-off |
| Text date/time | “How do I format this? 03/04? 3/4?” | Abandonment |
| No endpoint confirmation | “Did they even get my request?” | Lost trust |
| Two paths without labels | “What’s the difference?” | Decision paralysis |
| No trust signals | “Can they handle my event?” | Risk avoidance |

---

## The 5 highest-impact UX moves

### 1. Reduce cognitive load (~50% fewer fields ≈ less friction)

- Move to optional: Organization, Type of Event, Package  
- Consider merge First/Last → Full Name (or keep split but cut other required fields hard)  
- Add reassurance near contact fields: e.g. “We’ll reach out within 2 hours” *(SLA must match real ops)*  

### 2. Native date/time = instant relief

- Users already know their device picker  
- No formatting anxiety  
- Mobile-friendly by default  

### 3. Two-path clarity (decision architecture)

| Path | Label direction | Promise |
| :--- | :--- | :--- |
| **A** | “Order Online Now” | Immediate fulfillment (ezCater) |
| **B** | “Submit Inquiry” | Custom / group events (quote form) |

**Critical:** Label the **trade-off** (speed vs. customization)—not just two buttons with different nouns.

### 4. Trust anchors (social proof)

Place near the **submit button** (where anxiety peaks):

- “1,000+ events catered” *(only if true)*  
- “Trusted by [well-known local companies]” *(only with permission)*  
- “100% satisfaction guarantee” *(only if policy-backed)*  

DeepSeek prioritizes **proof near the CTA**, not only in a distant footer.

### 5. Confirmation & follow-up (post-submit UX)

- Explicit response promise (DeepSeek example: “within 2 business hours”—align with real capacity)  
- Auto-reply email so the user knows the loop closed  
- Optional text confirmation  

**Post-submit is part of conversion**, not a backend afterthought.

---

## Conversion funnel (current vs. target)

*Directional model for discussion—not measured baseline.*

| Stage | Current (est.) | Target | Gap driver |
| :--- | :--- | :--- | :--- |
| Land on catering page | 100% | 100% | — |
| Choose a path | ~50% bounce | ~20% bounce | Clarity |
| Start form | ~30% | ~70% | Fewer fields |
| Complete form | ~15% | ~50% | Native inputs + trust |
| Follow-through | ~5% | ~35% | Confirmation + follow-up |

---

## Behavioral principles

1. **Hick’s Law** — More choices = slower decisions → reduce to **2 clear paths**.  
2. **Fitts’s Law** — Submit CTA large, obvious, high-contrast.  
3. **Zeigarnik effect** — Incomplete tasks stick → show progress if form stays multi-step.  
4. **Social proof** — Others have done this safely → numbers/logos near submit.  
5. **Loss aversion** — “Don’t miss catering for your event” can outperform generic “Get catering” *(tone must stay brand-true)*.  

---

## Visual hierarchy (mobile-first sequence)

DeepSeek’s recommended **content order**:

```
1. HERO — emotional photo + “Cater your next event”
   [Order Online]  [Submit Inquiry]   ← two clear paths

2. TRUST BAR early
   e.g. events catered / social proof

3. FORM (minimal)
   Name · Email · Phone · Date (picker) · Guests
   [SUBMIT] huge CTA
   Response promise under button

4. MENU PREVIEW — “What we’ll serve”
   Let appetite reinforce the form (see North Star add-on)

5. APP / secondary CTA (lower priority)
```

### Sequence thesis (DeepSeek differentiator)

**Don’t hide the menu.**  
Let users see (and want) the food **while** they fill the short form. The form is a chore; the menu is a reward. **Sequence matters.**

Grok/Cursor often put packages as self-sort tools around the form; DeepSeek argues **menu preview should salivate users through completion**, not only appear as a brochure after the ask.

---

## Measure-everything framework

| Metric | Why |
| :--- | :--- |
| Form abandonment rate | Where do they drop? |
| Path selection | Which path wins? |
| Time to complete | Is the form too long? |
| Submit success rate | Did the lead actually go through? |
| Follow-through rate | Did we close the loop (email open / reply)? |

**Goal:** Know exactly where users hesitate; optimize from evidence.

---

## 2-week UX sprint (DeepSeek plan)

### Week 1 — Reduce friction

| Days | Focus |
| :--- | :--- |
| 1–2 | Audit fields → cut ~50% required |
| 3–4 | Native date/time instead of free text |
| 5 | Trust anchors (numbers + logos if real) |

### Week 2 — Clarify & confirm

| Days | Focus |
| :--- | :--- |
| 6–7 | Two-path clarity (copy + visual hierarchy) |
| 8–9 | Post-submit confirmation + follow-up email |
| 10 | Launch & start measuring |

### After 2 weeks

- Analyze abandonment patterns  
- A/B test two-path labels  
- Optional: “What almost stopped you?” micro-survey  

---

## North star

> **Reduce every barrier between “I want catering” and “I’m confirmed.”**

**UX success =** Users feel understood, not interrogated.

---

## Primary KPI (DeepSeek)

| Priority | Metric |
| :--- | :--- |
| **Primary** | Completed, **confirmed** quote requests + successful online-order path starts |
| Critical quality bar | User knows the request was received and when to expect a reply |
| Secondary | Abandonment by field, path mix, time-to-complete |

DeepSeek puts extra weight on **post-submit confirmation and follow-through**, not only form submit counts.

---

## How this differs from siblings (DeepSeek view)

| Topic | Cursor | Grok | Cline | **DeepSeek** |
| :--- | :--- | :--- | :--- | :--- |
| Path UI | Strong clarity; fuller OK | Cards or labels | Labels only Phase A | Two paths + **explicit trade-off labels** |
| Form | Short required set | Short required set | Short + form-first | Short + **cognitive load / field-count** framing |
| Trust | Lead time + SLA | Lead time + SLA (+ price if real) | One honest line | **Social proof at submit** + SLA |
| Post-submit | Success + SLA | Success + SLA | Success + SLA | **Confirmation + auto-reply + optional SMS** as core UX |
| Menu vs form order | Packages support self-sort | Self-sort secondary to path | Minimal chrome | **Menu preview above/alongside form** to reward completion |
| Cadence | Phase A then measure | Phase A then measure | Hardest cut, ship fast | **Explicit 2-week UX sprint** |

---

## Design deliverables DeepSeek would prioritize next

1. Exact microcopy per field  
2. Two-path decision labels (wording first)  
3. Post-submit confirmation screen  
4. User flow suitable for Figma  

---

## Integrity rules (DeepSeek + brand)

- Do not invent stats (“1,000+ events”) without client confirmation.  
- Response SLA (“2 hours” vs “1 business day”) must match real ops—**copy cannot over-promise**.  
- Loss-aversion headlines must stay on-brand (Southern hospitality, not dark patterns).
