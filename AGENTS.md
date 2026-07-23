<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:project-context -->
# Project: Shane's Rib Shack

## Status snapshot (2026-07-23) — READ THIS FIRST

**Phase A UX + conversion is SHIPPED and live on GitHub Pages.**

| URL | Status |
| :--- | :--- |
| https://mattybotstew.github.io/shanes-rib-shack-new/ | ✅ 200 |
| https://mattybotstew.github.io/shanes-rib-shack-new/catering/ | ✅ 200 |

**Latest commits:** `dc0014e` (Phase A UX) → `1fafd58` (endpoints) → `dba4b07` (trailingSlash Pages fix)

### What was shipped (do not re-implement)

- Path-labeled CTAs: **Order Online (Standard Packages)** vs **Request a Custom Quote** + helper copy  
- Short quote form: location, name, email **or** phone, event date, guest count required; org/package/time optional  
- Native `type="date"` / `type="time"`  
- Soft trust/SLA (no fake `$X`): ~48h notice · reply during business hours  
- Real submit via FormSubmit → `catering@shanesribshack.com` (first submit may need inbox confirm)  
- Success / error / loading states + “submit another”  
- Package CTAs: Order This Online / Quote This Package (package prefill)  
- `/catering/` route (static export + `trailingSlash: true`)  
- ezCater → `https://www.ezcater.com/brand/shanes-rib-shack` + UTMs  
- Analytics hooks: `catering_path_selected`, form start/submit/success, `outbound_click`  
- Placeholder alert/promo replaced; skip link + focus-visible  
- Multi-LLM docs under `docs/`  

### Still pending humans (not code)

1. Path **weight** preference (online vs quote) — client  
2. Hard SLA / price floor — Ops (soft language already live)  
3. Confirm FormSubmit email in `catering@shanesribshack.com` inbox  
4. Optional: GitHub Secrets to override endpoints; GTM verification  
5. Phase B after 14–30 day path-mix read (cards/FAQ/social proof)

### Anti-overwrite rules

1. Write UX strategy only to `docs/strategies/{your-name}-ux-conversion-strategy.md`  
2. Write ship/plan votes only to `docs/plans/{your-name}-catering-plan.md`  
3. **Never** replace another agent’s named file  
4. `docs/UX_CONVERSION_STRATEGY.md` is an **index only**  
5. Prefer extending shipped UX over rewriting Phase A  

### Strategy / plan map

| LLM | Strategy | Plan |
| :--- | :--- | :--- |
| Cursor | [`docs/strategies/cursor-ux-conversion-strategy.md`](./docs/strategies/cursor-ux-conversion-strategy.md) | [`docs/plans/cursor-catering-plan.md`](./docs/plans/cursor-catering-plan.md) |
| Grok | [`docs/strategies/grok-ux-conversion-strategy.md`](./docs/strategies/grok-ux-conversion-strategy.md) | [`docs/plans/grok-catering-plan.md`](./docs/plans/grok-catering-plan.md) |
| Cline | [`docs/strategies/cline-ux-conversion-strategy.md`](./docs/strategies/cline-ux-conversion-strategy.md) | [`docs/plans/cline-catering-plan.md`](./docs/plans/cline-catering-plan.md) |
| DeepSeek | [`docs/strategies/deepseek-ux-conversion-strategy.md`](./docs/strategies/deepseek-ux-conversion-strategy.md) | [`docs/plans/deepseek-catering-plan.md`](./docs/plans/deepseek-catering-plan.md) |

**Index:** [`docs/UX_CONVERSION_STRATEGY.md`](./docs/UX_CONVERSION_STRATEGY.md)  
**Client blockers:** [`docs/CLIENT_BLOCKERS.md`](./docs/CLIENT_BLOCKERS.md)  
**Ship merge:** [`CONSENSUS_PLAN.md`](./CONSENSUS_PLAN.md)

### Shared ground (all four — still true)

Two paths · KPI ≠ form-only · dead form = outage · short form · easy dates · soft trust · measure both · Phase B later  

### Known disagreement (still open for Phase B)

Path UI chrome · first lever ordering · menu-vs-form sequence · post-submit SMS depth  

---

## Tech Stack
- **Next.js 16.2.11** — `output: "export"`, `trailingSlash: true`  
- **React 19.2.4** · **Tailwind CSS v4** · **TypeScript** · **Montserrat** (400/600/700/800)  
- **Deploy:** GitHub Pages (`MattybotStew/shanes-rib-shack-new`) via `.github/workflows/deploy.yml`

## Configuration
- `GITHUB_PAGES=true` → basePath `/shanes-rib-shack-new`  
- Defaults (overridable by Secrets / `.env`):  
  - ezCater brand URL in `lib/ezcater.ts`  
  - FormSubmit ajax in `lib/formEndpoint.ts`  
- `lib/asset.ts` prefixes public assets under basePath  
- Images unoptimized (static export)

## Brand Colors (`globals.css`)
- `--brand-black` #101820 · `--brand-red` #bb202b · `--brand-gold` #ffc72c · `--brand-tan` #f8f5ec

## Project Structure
```
AGENTS.md
app/page.tsx, app/catering/page.tsx, app/layout.tsx, app/globals.css
components/ Header, Hero, HeroPathActions, BigCta, CateringMenu,
            CateringForm, RewardsApp, SiteFooter
lib/ asset.ts, ezcater.ts, formEndpoint.ts
docs/ strategies/, plans/, CLIENT_BLOCKERS.md, UX_CONVERSION_STRATEGY.md (index)
CONSENSUS_PLAN.md, CATERING_PLAN.md
```

## Remaining known issues (not Phase A blockers)
1. Social icons `-scale-y-100`  
2. Footer copyright “2025”  
3. Missing non-catering routes (`/menu`, `/locations`, …)  
4. Dual headline treatment (desktop H1 / mobile styled `p`) — intentional for a11y  

## Agent focus now
**Ops/client follow-through + Phase B debate** — not redoing Phase A unless fixing a regression.
<!-- END:project-context -->
