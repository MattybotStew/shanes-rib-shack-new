<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:project-context -->
# Project: Shane's Rib Shack

## Status snapshot (2026-07-25) — READ THIS FIRST

**Full prototype is SHIPPED and live on GitHub Pages** — all 20 static pages deployed, replacing the Phase A homepage.  
**Catering funnel unchanged at `/catering/`** — do not re-implement.

**Live (this tree):**
1. **Full prototype — all nav/footer routes built** (20 static pages, 0 build errors). Every header and footer link resolves. Live at: https://mattybotstew.github.io/shanes-rib-shack-new/
2. **Marketing homepage at `/`** from Figma `DK-Home` (`6310:5558`, file `fIxLVL93B0QkxG3bbpH8vZ`). Mobile reference: **`MB-Home 1` `6310:5770`**. Listed Figma fidelity gaps closed. Copy largely from live [shanesribshack.com](https://www.shanesribshack.com) (not Figma lorem).
3. **Catering 2-step funnel unchanged at `/catering/`** — ContactBanner → PathDecision → compact quote form → menu reference; desktop package rail. Do not remove or rebuild it.
4. **Edgewood location detail page** at `/locations/edgewood-atlanta-ga/` with order-confirm modal, matched to live production.
5. **PageShell** shared component (`components/PageShell.tsx`) used by most pages.
6. **404 page** at `app/not-found.tsx` with branded fallback.
7. **Footer copyright** now dynamic (`new Date().getFullYear()`).
8. **Social icons** `-scale-y-100` bug fixed.
9. **All content pages polished** with real copy (Menu, Our Story, FAQs, Contact, Careers, Order, Shop, Franchise, Terms, Privacy, etc.).

| URL | Status |
| :--- | :--- |
| https://mattybotstew.github.io/shanes-rib-shack-new/ | ✅ 200 (new homepage) |
| https://mattybotstew.github.io/shanes-rib-shack-new/catering/ | ✅ 200 (Phase A funnel) |
| https://mattybotstew.github.io/shanes-rib-shack-new/menu/ | ✅ 200 |
| https://mattybotstew.github.io/shanes-rib-shack-new/locations/ | ✅ 200 |
| https://mattybotstew.github.io/shanes-rib-shack-new/our-story/ | ✅ 200 |
| https://mattybotstew.github.io/shanes-rib-shack-new/faqs/ | ✅ 200 |
| https://mattybotstew.github.io/shanes-rib-shack-new/contact/ | ✅ 200 |
| https://mattybotstew.github.io/shanes-rib-shack-new/order/ | ✅ 200 |
| https://mattybotstew.github.io/shanes-rib-shack-new/shop/ | ✅ 200 |
| https://mattybotstew.github.io/shanes-rib-shack-new/franchise/ | ✅ 200 |
| https://mattybotstew.github.io/shanes-rib-shack-new/careers/ | ✅ 200 |
| https://mattybotstew.github.io/shanes-rib-shack-new/rewards/ | ✅ 200 |
| https://mattybotstew.github.io/shanes-rib-shack-new/gift-cards/ | ✅ 200 |
| https://mattybotstew.github.io/shanes-rib-shack-new/news-events/ | ✅ 200 |
| https://mattybotstew.github.io/shanes-rib-shack-new/terms/ | ✅ 200 |
| https://mattybotstew.github.io/shanes-rib-shack-new/privacy/ | ✅ 200 |
| https://mattybotstew.github.io/shanes-rib-shack-new/troubleshooting/ | ✅ 200 |
| https://mattybotstew.github.io/shanes-rib-shack-new/franchise/login/ | ✅ 200 |
| https://mattybotstew.github.io/shanes-rib-shack-new/locations/edgewood-atlanta-ga/ | ✅ 200 |

**Latest shipped commits (Pages):** `7609829` (Phase 2 polish) → `469063d` (full prototype) → `4fb5644` (audit cleanup)  
**All local UX is now live on Pages.** Prefer extending; do not re-implement Phase A or rebuild the funnel from scratch.

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

### Current `/catering/` UX (post–Phase A — do not re-implement)

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

### Homepage (`/`) — Figma `DK-Home` / `MB-Home 1` (LOCAL, uncommitted)

Composition: **HomeHero → CateringPromo → ShackNews → GiftCardPromo → RewardsApp → SiteFooter**

| Piece | Notes |
| :--- | :--- |
| `components/HomeHero.tsx` | Mobile stacked photo-above-copy (`6310:5773`); desktop white card over photo (`6310:5562`) |
| `components/CateringPromo.tsx` | Full-bleed photo + 50% scrim + cream/40 bordered box; Order Now (ezCater) + View Catering Menu |
| `components/ShackNews.tsx` | "Latest Shack News" snap carousel, red cards, dashed rules, arrow buttons |
| `components/GiftCardPromo.tsx` | Full-bleed wood bg; plate + rotated card overlay (17.33°); live-site gift-card copy |
| `components/RewardsApp.tsx` / `SiteFooter.tsx` | Shared sections; mobile footer links-then-logo; desktop Rewards `gap-[100px]` |
| `components/Cta.tsx` | Shared red / black / white / outline; auto `outbound_click` on external hrefs |
| `lib/newsData.ts` | News carousel items |
| `public/images/home/` + `public/images/arrow-right.svg` | Homepage assets from Figma (re-encoded) |
| Brand tokens | `--brand-cream` `#efeadc`, `--brand-gray` `#3a3a3a` in `globals.css` (with existing brand colors) |

**Fidelity — DONE (verified in components / smoke):**
- GiftCard full-bleed background (no white gutters); italic supporting line retained
- Mobile HomeHero stacked photo above copy (not overlay)
- `CateringForm` `minDate` = `todayPlusDays(2)` (no setState-in-effect lint)
- `CateringPromo` mobile CTA stack/sizes (`6310:5774`) — 45px heading; stacked CTAs; red 206px / white full-width
- `ShackNews` mobile card/type/spacing (`6310:5775`) — py-10, 32px heading, 290px cards, 198px images
- `Header` mobile default alert with Norcross address + full-width **Change your location** → `/locations` (`6354:11981`)
- `SiteFooter` mobile **links then logo** order (`6310:5778`); desktop logo-first OK
- `RewardsApp` desktop **100px** gap between copy and phones

**Fidelity — STILL OPEN:** none for the listed MB-Home / DK-Home gaps — homepage Figma fidelity pass is complete. Residual pixel-tuning only if a human flags a specific frame mismatch; do not rebuild `/`.

Full design inventory: Figma Dev handoff canvas. Key mobile home frame: **`6310:5770`**.

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
- `--brand-cream` #efeadc (section border at 40%) · `--brand-gray` #3a3a3a

## Project Structure
```
AGENTS.md
app/page.tsx (marketing home), app/catering/page.tsx (funnel), app/layout.tsx, app/globals.css
app/not-found.tsx (branded 404)
app/menu/                  Menu page
app/locations/             Locations index + [slug]/ dynamic detail
app/our-story/             Our Story
app/news-events/           News & Events
app/careers/               Careers
app/faqs/                  FAQs (accordion)
app/rewards/               Rewards
app/order/                 Order Online
app/shop/                  Shop
app/franchise/             Franchise + login/
app/terms/                 Terms of Use
app/contact/               Contact
app/privacy/               Privacy Policy
app/troubleshooting/       Troubleshooting
app/gift-cards/            Gift Cards
components/
  shared:   Header, SiteFooter, Cta, RewardsApp, BigCta, PageShell
  home:     HomeHero, CateringPromo, ShackNews, GiftCardPromo
  catering: ContactBanner, PathDecision, StickyPathBar, HashScroll,
            CateringMenu, CateringForm, Hero (present, hidden in flow),
            HeroPathActions
  location: LocationContent, LocationHero, LocationOrderConfirm, LocationPromoBanner
lib/ asset.ts, ezcater.ts, formEndpoint.ts, menuData.ts, newsData.ts, locationData.ts, menuPageData.ts
public/images/home/          homepage photography (Figma exports)
public/images/arrow-right.svg
docs/ strategies/, plans/, CLIENT_BLOCKERS.md, UX_CONVERSION_STRATEGY.md (index)
CONSENSUS_PLAN.md, CATERING_PLAN.md
```

## Remaining known issues (not Phase A blockers)
1. Dual headline treatment on older catering hero (desktop H1 / mobile styled `p`) — intentional for a11y  
2. Menu page uses placeholder images for items without dedicated photos (Figma design has per-item photography)  
3. Only 4 locations have detail pages — remaining 24+ from live site not yet added to `ALL_LOCATIONS`  

## Agent focus now
1. **Do not** re-implement Phase A or the `/catering/` 2-step funnel unless fixing a regression.  
2. **Homepage is additive** — listed Figma fidelity gaps (`MB-Home 1` `6310:5770`) are closed; do not rebuild `/` or fold catering back into `/`.  
3. Prefer regression fixes / human-flagged pixel tweaks over new homepage sections.  
4. Ops/client blockers + Phase B debate remain human/docs work; deploy/ship local UX only when asked.  
5. **All 20 pages are live on Pages** — extend, don't re-implement.  
6. Menu page now matches Figma `DK-Menu-Item-sandwich` design — add real item photos to `menuPageData.ts` when available.  
<!-- END:project-context -->
