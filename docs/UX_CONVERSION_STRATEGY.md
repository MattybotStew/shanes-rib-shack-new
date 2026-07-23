# Catering UX & Conversion — Multi-LLM Index

**This file is an index only.** It is **not** owned by any single LLM.  
**Rule for all agents:** Never overwrite another model’s strategy file. Write only under your own name.

---

## Repo ship status (2026-07-23)

**Phase A is live on GitHub Pages** (commit `dba4b07` and parents).  
**Local (post–Phase A):** 2-step path-first funnel + compact form + desktop package rail — treat as current UX baseline; do not rebuild from Phase A scratch.

| Live URL | HTTP |
| :--- | :--- |
| https://mattybotstew.github.io/shanes-rib-shack-new/ | 200 |
| https://mattybotstew.github.io/shanes-rib-shack-new/catering/ | 200 |

**Shipped on Pages (all agents should treat as done):**

- Labeled dual paths + helper copy  
- Short form + native date/time + soft trust line  
- FormSubmit → `catering@shanesribshack.com` (confirm first email in that inbox)  
- ezCater brand URL + UTMs  
- `/catering/` with `trailingSlash`  
- Analytics hooks · placeholder chrome cleaned  

**Local UX since Phase A (do not re-implement):**

- Hero hidden; ContactBanner → PathDecision (Step 1) → compact quote form (Step 2) → menu reference  
- StickyPathBar (mobile) · HashScroll · accordion CateringMenu · desktop sticky package rail (`lib/menuData.ts`)  
- Form: single Name · Email or phone · date min +2 days · guest ranges · collapsed optionals  
- CTA labels: **Order Online** / **Get a Quote** · RewardsApp out of catering flow  

**Next for humans:** client path-weight decision · FormSubmit confirm · GTM check · 14–30 day path-mix read → Phase B  

Details: [`CLIENT_BLOCKERS.md`](./CLIENT_BLOCKERS.md) · [`../AGENTS.md`](../AGENTS.md) · [`../CONSENSUS_PLAN.md`](../CONSENSUS_PLAN.md)

---

## Ownership rules (no overwrites)

| Allowed | Forbidden |
| :--- | :--- |
| Edit **your** file in `docs/strategies/{your-name}-ux-conversion-strategy.md` | Overwriting `docs/strategies/{other}-*.md` |
| Edit **your** plan in `docs/plans/{your-name}-catering-plan.md` | Claiming a shared “authoritative” strategy that replaces others |
| Update this **index** to add links / agreement / **ship status** | Pasting your full strategy into this index |
| Propose Phase B in your own strategy file | Re-implementing Phase A without a regression |

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
Missing piece was **hierarchy + labels + measurement**—**not** “add online order.”  
**This repo now wires both paths** on GitHub Pages (defaults + optional Secrets).

**PM / client blockers:** [`CLIENT_BLOCKERS.md`](./CLIENT_BLOCKERS.md)

| # | Decision | Default if client stalls | Code status |
| :--- | :--- | :--- | :--- |
| 1 | Primary path **weight** | Equal-weight labeled dual CTAs | ✅ Equal-weight labels live |
| 2 | SLA / price publishable? | Soft business-hours language; no fake `$X` | ✅ Soft language live |
| 3 | Form vs ezCater measurement | Instrument both; review 14–30 days | ✅ Hooks live; GTM confirm pending |

---

## Where they already agree (shared ground)

1. Two jobs: **standard online order** vs **custom quote**  
2. Form-only volume is a **bad primary KPI**  
3. Quote form must **actually complete**  
4. **Short required set** + easy dates  
5. Trust near the ask (**soft until client confirms**)  
6. Measure **both** paths  
7. Heavy redesign/FAQ is **not** the first lever  
8. Path work is about **clarity/weight**, not inventing a second channel  

---

## Where they differ (Phase B debate — do not paper over)

| Topic | Cursor | Grok | Cline | DeepSeek |
| :--- | :--- | :--- | :--- | :--- |
| Path UI | Strong clarity; fuller OK | Cards **or** labels; language > chrome | **Labels only** Phase A | Two paths + **explicit trade-off** |
| First lever | Path early + measure | Path clarity highest leverage | **Dead form first** | Cognitive load + path labels |
| Trust | SLA + lead time | SLA + lead time (+ price if real) | One honest line | **Social proof at submit** + SLA |
| Post-submit | Success + SLA | Success + SLA | Success + SLA | **Confirmation + auto-reply + optional SMS** |
| Menu vs form | Packages self-sort | Self-sort secondary | Minimal chrome | **Menu preview supports form** |
| Cadence | Phase A then measure | Phase A then measure | Hardest cut, ship fast | **Explicit 2-week UX sprint** |
| Scope | Phase A ~7 levers | Full messaging narrative | Stop after top 5 | Funnel targets + behavioral laws |
| Design gate | Lean mockups optional | Not required | Refuse as gate | Ready for microcopy / Figma next |

**Local resolution (post–Phase A, not a vote overwrite):** Path Step 1 → compact form Step 2 → menu as reference below; desktop package rail for browse/prefill. Remaining debate is Phase B chrome/proof/SMS — not reopening that sequence.

Human decides Phase B winners. Agents do not silently merge by overwriting.

---

## Related docs

- Ship consensus: [`../CONSENSUS_PLAN.md`](../CONSENSUS_PLAN.md)  
- Research archive: [`../CATERING_PLAN.md`](../CATERING_PLAN.md)  
- Agent entry: [`../AGENTS.md`](../AGENTS.md)  
- Docs map: [`README.md`](./README.md)

**Last index update:** 2026-07-23 (Phase A on Pages + local 2-step path-first UX documented)
