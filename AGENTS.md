<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:project-context -->
# Project: Shane's Rib Shack

## Status snapshot (2026-07-23) — READ THIS FIRST

**Phase A UX + conversion is SHIPPED and live on GitHub Pages.**  
**Local working tree (uncommitted / post–Phase A):** 2-step path-first catering UX — ContactBanner → PathDecision → compact quote form → menu reference; desktop package rail.

| URL | Status |
| :--- | :--- |
| https://mattybotstew.github.io/shanes-rib-shack-new/ | ✅ 200 (Phase A) |
| https://mattybotstew.github.io/shanes-rib-shack-new/catering/ | ✅ 200 (Phase A) |

**Latest shipped commits (Pages):** `dc0014e` (Phase A UX) → `1fafd58` (endpoints) → `dba4b07` (trailingSlash Pages fix)  
**Local UX since Phase A:** path-first funnel, compact form, StickyPathBar, HashScroll, accordion menu + package rail — prefer extending this; do not re-implement Phase A or rebuild the funnel from scratch.

### What was shipped on Pages (do not re-implement)

- Path-labeled CTAs: **Order Online** vs **Get a Quote** + helper copy  
- Short quote form + native date/time + soft trust/SLA  
- Real submit via FormSubmit → `catering@shanesribshack.com` (first submit may need inbox confirm)  
- Success / error / loading states + “submit another”  
- `/catering/` route (static export + `trailingSlash: true`)  
- ezCater → `https://www.ezcater.com/brand/shanes-rib-shack` + UTMs  
- Analytics hooks: `catering_path_selected`, form start/submit/success, `outbound_click`  
- Placeholder alert/promo replaced; skip link + focus-visible  
- Multi-LLM docs under `docs/`  

### Current local UX (post–Phase A — do not re-implement)

1. **Hero hidden** — page starts with **ContactBanner** (email · phone · See Menu) then **PathDecision**  
2. **True 2-step funnel:** Step 1 path cards → Step 2 compact quote form → menu as reference below  
3. **PathDecision** slimmed (Step 1 eyebrow, one-line benefits)  
4. **StickyPathBar** (mobile): Order Online | Get a Quote after Step 1 scrolls away  
5. **HashScroll** for smooth scroll to `#catering-menu` / `#catering-inquiry`  
6. **CateringMenu:** stacked accordion; promo banner removed; sides/dessert as two brand cards; max-width ~600px  
7. **Form compressed:** single Name; single “Email or phone”; date min +2 days; guest ranges; optionals collapsed; no black shell; tighter padding  
8. **Desktop:** form + sticky **Catering Packages** sidebar rail; “Use this package →” prefills + opens optionals; no competing Order/Quote CTAs in rail; data in `lib/menuData.ts`  
9. CTA labels unified: **Get a Quote** / **Order Online**  
10. Header alert slimmed (phone only)  
11. **RewardsApp** removed from homepage catering flow  

### Still pending humans (not code)

1. Path **weight** preference (online vs quote) — client  
2. Hard SLA / price floor — Ops (soft language already live)  
3. Confirm FormSubmit email in `catering@shanesribshack.com` inbox  
4. Optional: GitHub Secrets to override endpoints; GTM verification  
5. Phase B after 14–30 day path-mix read (cards/FAQ/social proof beyond what’s already local)

### Anti-overwrite rules

1. Write UX strategy only to `docs/strategies/{your-name}-ux-conversion-strategy.md`  
2. Write ship/plan votes only to `docs/plans/{your-name}-catering-plan.md`  
3. **Never** replace another agent’s named file  
4. `docs/UX_CONVERSION_STRATEGY.md` is an **index only**  
5. Prefer extending shipped / local UX over rewriting Phase A  

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

Path UI chrome weight · first lever ordering · post-submit SMS depth · further FAQ/social proof  

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
components/ Header, ContactBanner, PathDecision, StickyPathBar, HashScroll,
            CateringMenu, CateringForm, Hero (present, hidden in flow),
            HeroPathActions, BigCta, SiteFooter
lib/ asset.ts, ezcater.ts, formEndpoint.ts, menuData.ts
docs/ strategies/, plans/, CLIENT_BLOCKERS.md, UX_CONVERSION_STRATEGY.md (index)
CONSENSUS_PLAN.md, CATERING_PLAN.md
```

## Remaining known issues (not Phase A blockers)
1. Social icons `-scale-y-100`  
2. Footer copyright “2025”  
3. Missing non-catering routes (`/menu`, `/locations`, …)  
4. Dual headline treatment (desktop H1 / mobile styled `p`) — intentional for a11y  
5. Local post–Phase A UX not yet redeployed to Pages (until next ship)

## Agent focus now
**Ops/client follow-through + Phase B debate** — not redoing Phase A or the local 2-step funnel unless fixing a regression. Deploy/ship local UX when humans ask.
<!-- END:project-context -->
