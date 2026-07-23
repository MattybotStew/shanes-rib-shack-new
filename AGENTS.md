<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:project-context -->
# Project: Shane's Rib Shack

## Current focus for all LLMs (2026-07-23)

**Topic:** Catering conversion (~50% fewer form inputs post-launch).  
**Human direction:** Focus on **UX and conversion strategy**. Each LLM keeps its **own** opinion file—**no overwrites**.

### Anti-overwrite rules

1. Write UX strategy only to `docs/strategies/{your-name}-ux-conversion-strategy.md`
2. Write ship/plan votes only to `docs/plans/{your-name}-catering-plan.md`
3. **Never** replace another agent’s named file
4. `docs/UX_CONVERSION_STRATEGY.md` is an **index only** (links + agreement matrix)—not one model’s manifesto

### Strategy opinions (one per LLM)

| LLM | UX strategy (do not overwrite others) |
| :--- | :--- |
| **Cursor** | [`docs/strategies/cursor-ux-conversion-strategy.md`](./docs/strategies/cursor-ux-conversion-strategy.md) |
| **Grok CLI** | [`docs/strategies/grok-ux-conversion-strategy.md`](./docs/strategies/grok-ux-conversion-strategy.md) |
| **Cline** | [`docs/strategies/cline-ux-conversion-strategy.md`](./docs/strategies/cline-ux-conversion-strategy.md) |
| **DeepSeek** | [`docs/strategies/deepseek-ux-conversion-strategy.md`](./docs/strategies/deepseek-ux-conversion-strategy.md) |

**Index:** [`docs/UX_CONVERSION_STRATEGY.md`](./docs/UX_CONVERSION_STRATEGY.md)

### Ship / plan votes

| LLM | Plan file |
| :--- | :--- |
| Cursor | [`docs/plans/cursor-catering-plan.md`](./docs/plans/cursor-catering-plan.md) |
| Grok | [`docs/plans/grok-catering-plan.md`](./docs/plans/grok-catering-plan.md) |
| Cline | [`docs/plans/cline-catering-plan.md`](./docs/plans/cline-catering-plan.md) |
| DeepSeek | [`docs/plans/deepseek-catering-plan.md`](./docs/plans/deepseek-catering-plan.md) |

### Shared premise (do not get wrong)

- **Production already has both paths** (Order Online → ezCater + Submit Inquiry → form).  
- Missing: **hierarchy, labels, measurement**—not “should we add online order.”  
- This **repo** may not wire live ezCater yet; ask stakeholders about **CTA weight**, not existence.  
- Client blockers (PM packet): [`docs/CLIENT_BLOCKERS.md`](./docs/CLIENT_BLOCKERS.md)

### Shared ground (all four)

- Two paths: standard online order vs custom quote  
- Primary KPI ≠ form-only volume  
- Dead form submit = product outage  
- Short form; easy dates; org/package not forced  
- Trust / response promise near the ask (soft until client confirms SLA/price)  
- Measure both paths  

### Known disagreement

- **Path UI:** Cline = labels only; Grok = cards or labels; Cursor = strong clarity; DeepSeek = trade-off labels (speed vs custom)  
- **First priority:** Cline = dead form; Grok = path clarity; Cursor = path + measure; DeepSeek = cognitive load + confirmation loop  
- **Menu sequence:** DeepSeek wants menu preview to support form completion; others treat packages as self-sort / secondary  
- **Post-submit:** DeepSeek elevates auto-reply / SMS confirmation as core UX  

Human picks the winner for Basecamp/design. Agents record dissent in their own files.

Other docs: [`docs/CLIENT_BLOCKERS.md`](./docs/CLIENT_BLOCKERS.md) · [`CONSENSUS_PLAN.md`](./CONSENSUS_PLAN.md) · [`CATERING_PLAN.md`](./CATERING_PLAN.md)

---

## Tech Stack
- **Next.js 16.2.11** (static export via `output: "export"`)
- **React 19.2.4** · **Tailwind CSS v4** · **TypeScript** · **Montserrat** (400/600/700/800)
- **Deploy:** GitHub Pages (`MattybotStew/shanes-rib-shack-new`)

## Configuration
- `GITHUB_PAGES=true` → basePath `/shanes-rib-shack-new`
- `NEXT_PUBLIC_BASE_PATH` + `lib/asset.ts` for public asset URLs
- Images unoptimized (static export)

## Brand Colors (`globals.css`)
- `--brand-black` #101820 · `--brand-red` #bb202b · `--brand-gold` #ffc72c · `--brand-tan` #f8f5ec

## Project Structure
```
AGENTS.md
docs/UX_CONVERSION_STRATEGY.md          <- INDEX only (no single-LLM ownership)
docs/strategies/*-ux-conversion-strategy.md  <- one UX opinion per LLM
docs/plans/*-catering-plan.md           <- one ship vote per LLM
CONSENSUS_PLAN.md
CATERING_PLAN.md
app/  components/  lib/
```

## Known Issues / UX Audit Findings
1. Placeholder alert/promo copy  
2. Social icons `-scale-y-100`  
3. Copyright “2025”  
4. Form `preventDefault` only  
5. Date/time plain text  
6. No skip-to-content / weak focus styles  
7. Missing routes (`/catering`, `/menu`, …)  
8. Dual H1 (desktop + mobile hero)

## Catering work status

**Now:** Multi-LLM UX strategy comparison (separate files).  
**Later:** Implement under `CONSENSUS_PLAN.md` once human picks direction.
