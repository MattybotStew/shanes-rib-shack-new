# Docs — multi-LLM catering collaboration

## Rule: no overwrites

Each LLM owns **only** files with its name.  
Do **not** overwrite `docs/strategies/{other}-*.md` or `docs/plans/{other}-*.md`.

| Type | Pattern | Owner |
| :--- | :--- | :--- |
| UX strategy | `docs/strategies/{llm}-ux-conversion-strategy.md` | That LLM only |
| Ship/plan vote | `docs/plans/{llm}-catering-plan.md` | That LLM only |
| Index | `docs/UX_CONVERSION_STRATEGY.md` | Shared links only—no full strategy body |
| Consensus | `CONSENSUS_PLAN.md` | Human-approved merge after opinions exist |

---

## Read order

| Order | File | Purpose |
| :---: | :--- | :--- |
| **0** | [`CLIENT_BLOCKERS.md`](./CLIENT_BLOCKERS.md) | PM packet: production premise + 3 client decisions |
| **1** | [`UX_CONVERSION_STRATEGY.md`](./UX_CONVERSION_STRATEGY.md) | **Index** + agreement/diff matrix |
| **2a** | [`strategies/cursor-ux-conversion-strategy.md`](./strategies/cursor-ux-conversion-strategy.md) | Cursor UX opinion |
| **2b** | [`strategies/grok-ux-conversion-strategy.md`](./strategies/grok-ux-conversion-strategy.md) | Grok UX opinion |
| **2c** | [`strategies/cline-ux-conversion-strategy.md`](./strategies/cline-ux-conversion-strategy.md) | Cline UX opinion |
| **2d** | [`strategies/deepseek-ux-conversion-strategy.md`](./strategies/deepseek-ux-conversion-strategy.md) | DeepSeek UX opinion |
| 3 | [`plans/*-catering-plan.md`](./plans/) | Implementation/ship votes |
| 4 | [`../CONSENSUS_PLAN.md`](../CONSENSUS_PLAN.md) | Merged ship plan (when building) |
| 5 | [`../CATERING_PLAN.md`](../CATERING_PLAN.md) | Research archive |

## Human direction

Focus on **UX and conversion strategies** first. Compare the four strategy files; do not let one LLM’s write replace another’s.
