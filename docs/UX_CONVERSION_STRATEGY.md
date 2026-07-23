# Catering UX & Conversion — Multi-LLM Index

**This file is an index only.** It is **not** owned by any single LLM.  
**Rule for all agents:** Never overwrite another model’s strategy file. Write only under your own name.

---

## Ownership rules (no overwrites)

| Allowed | Forbidden |
| :--- | :--- |
| Edit **your** file in `docs/strategies/{your-name}-ux-conversion-strategy.md` | Overwriting `docs/strategies/{other}-*.md` |
| Edit **your** plan in `docs/plans/{your-name}-catering-plan.md` | Claiming a shared “authoritative” strategy that replaces others |
| Update this **index** to add links / agreement matrix | Pasting your full strategy into this index |

If you disagree with another LLM: **say so in your own strategy file**, with a short “Differs from X” section.

---

## Strategy opinions (one file per LLM)

| LLM | Strategy file (UX/conversion only) | Plan / ship vote |
| :--- | :--- | :--- |
| **Cursor** | [`strategies/cursor-ux-conversion-strategy.md`](./strategies/cursor-ux-conversion-strategy.md) | [`plans/cursor-catering-plan.md`](./plans/cursor-catering-plan.md) |
| **Grok CLI** | [`strategies/grok-ux-conversion-strategy.md`](./strategies/grok-ux-conversion-strategy.md) | [`plans/grok-catering-plan.md`](./plans/grok-catering-plan.md) |
| **Cline** | [`strategies/cline-ux-conversion-strategy.md`](./strategies/cline-ux-conversion-strategy.md) | [`plans/cline-catering-plan.md`](./plans/cline-catering-plan.md) |
| **DeepSeek** | [`strategies/deepseek-ux-conversion-strategy.md`](./strategies/deepseek-ux-conversion-strategy.md) | [`plans/deepseek-catering-plan.md`](./plans/deepseek-catering-plan.md) |

---

## Shared premise (all LLMs — factual)

**Production already has both paths.**  
`shanesribshack.com/catering/` → Order Online (ezCater) **and** Submit Inquiry (form).  
Missing piece = **hierarchy + labels** (and measurement), **not** “add online order.”  
This repo may lag production on live ezCater wiring—do not confuse repo gaps with production reality.

**PM / client blockers:** [`CLIENT_BLOCKERS.md`](./CLIENT_BLOCKERS.md)

| # | Decision | Default if client stalls |
| :--- | :--- | :--- |
| 1 | Primary path **weight** (online vs quote) | Equal-weight labeled dual CTAs |
| 2 | SLA / price publishable? | Soft business-hours language; no fake `$X` |
| 3 | Form vs ezCater measurement | Instrument both; review 14–30 days |

Until #1–#3 land: placeholders OK in mockups; **no hard promises ship**.

---

## Where they already agree (shared ground)

All four currently align on:

1. Two jobs: **standard online order** vs **custom quote** (both already on production)  
2. Form-only volume is a **bad primary KPI** (channel shift / incomplete funnel possible)  
3. Quote form must **actually complete** (dead submit = product outage)  
4. **Short required set** (cut org/package/event type from required; easy dates)  
5. Trust: response SLA near the ask (**soft until client confirms**)  
6. Measure **both** paths + form funnel  
7. Heavy redesign/FAQ is **not** the first lever  
8. Path work is about **clarity/weight**, not inventing a second channel  

---

## Where they differ (do not paper over)

| Topic | Cursor | Grok | Cline | DeepSeek |
| :--- | :--- | :--- | :--- | :--- |
| Path UI | Strong clarity; fuller OK | Cards **or** labels; language > chrome | **Labels only** Phase A | Two paths + **explicit trade-off** (speed vs custom) |
| First lever | Path early + measure | Path clarity highest leverage | **Dead form first** | **Cognitive load** (field count) + path labels |
| Trust | SLA + lead time | SLA + lead time (+ price if real) | One honest line | **Social proof at submit** + SLA |
| Post-submit | Success + SLA | Success + SLA | Success + SLA | **Confirmation + auto-reply + optional SMS** as core UX |
| Menu vs form | Packages self-sort | Self-sort secondary | Minimal chrome | **Menu preview supports form** (salivate while filling) |
| Cadence | Phase A then measure | Phase A then measure | Hardest cut, ship fast | **Explicit 2-week UX sprint** |
| Scope | Phase A ~7 levers | Full messaging narrative | Stop after top 5 | Funnel targets + behavioral laws |
| Design gate | Lean mockups optional | Not required | Refuse as gate | Ready for microcopy / Figma flow next |

Human decides which opinion wins for mockups / Basecamp. Agents do not silently merge by overwriting.

---

## Related docs

- Ship consensus (implementation): [`../CONSENSUS_PLAN.md`](../CONSENSUS_PLAN.md)  
- Research archive: [`../CATERING_PLAN.md`](../CATERING_PLAN.md)  
- Agent entry: [`../AGENTS.md`](../AGENTS.md)  
- Docs map: [`README.md`](./README.md)

**Last index update:** 2026-07-23 (production dual-path correction + client blockers packet)
