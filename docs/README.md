# Docs — multi-LLM catering collaboration

## Repo status (2026-07-23)

**Phase A SHIPPED** on GitHub Pages.  
https://mattybotstew.github.io/shanes-rib-shack-new/catering/  

Agents: read [`../AGENTS.md`](../AGENTS.md) status snapshot before proposing new work. Do **not** redo Phase A unless fixing a regression.

## Rule: no overwrites

Each LLM owns **only** files with its name.  
Do **not** overwrite `docs/strategies/{other}-*.md` or `docs/plans/{other}-*.md`.

| Type | Pattern | Owner |
| :--- | :--- | :--- |
| UX strategy | `docs/strategies/{llm}-ux-conversion-strategy.md` | That LLM only |
| Ship/plan vote | `docs/plans/{llm}-catering-plan.md` | That LLM only |
| Index | `docs/UX_CONVERSION_STRATEGY.md` | Shared links + ship status |
| Consensus | `CONSENSUS_PLAN.md` | Human-approved merge |
| Blockers | `CLIENT_BLOCKERS.md` | Shared PM packet |

---

## Read order

| Order | File | Purpose |
| :---: | :--- | :--- |
| **0** | [`../AGENTS.md`](../AGENTS.md) | **Ship status + rules** |
| **1** | [`CLIENT_BLOCKERS.md`](./CLIENT_BLOCKERS.md) | PM packet + live defaults |
| **2** | [`UX_CONVERSION_STRATEGY.md`](./UX_CONVERSION_STRATEGY.md) | Index + agreement/diff + shipped |
| **3a–d** | `strategies/*-ux-conversion-strategy.md` | Per-LLM UX opinions |
| **4** | `plans/*-catering-plan.md` | Per-LLM ship votes |
| **5** | [`../CONSENSUS_PLAN.md`](../CONSENSUS_PLAN.md) | Merged ship checklist (Phase A done) |
| **6** | [`../CATERING_PLAN.md`](../CATERING_PLAN.md) | Research archive / Phase B+ |

## Human direction

Phase A is live. Focus remaining debate on **Phase B** and **client blockers**—not re-litigating short form / path labels.
