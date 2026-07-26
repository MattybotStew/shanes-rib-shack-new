<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:project-context -->
# Project: Shane's Rib Shack

## Status snapshot (2026-07-26) — READ THIS FIRST

**Full prototype + Figma marketing pages are on `main`** — pushed to `origin/main` @ **`1aa7e04`**.  
**Catering funnel unchanged at `/catering/`** — do not re-implement.  
**Pages deploy may lag:** GitHub Pages is updated via `.github/workflows/deploy.yml`. Do **not** assume live Pages URLs already serve the new menu/locations/shop/our-story UX until you verify the site (or the workflow completes). Prefer: *pushed to main @ 1aa7e04; Pages deploy via workflow may lag.* Extend these pages; do not rebuild.

**On `main` / this tree (extend, do not re-implement):**
1. **Full prototype — all nav/footer routes built** (static export, 0 build errors). Every header and footer link resolves. Site: https://mattybotstew.github.io/shanes-rib-shack-new/
2. **Marketing homepage at `/`** from Figma `DK-Home` (`6310:5558`, file `fIxLVL93B0QkxG3bbpH8vZ`). Mobile reference: **`MB-Home 1` `6310:5770`**. Listed Figma fidelity gaps closed. Copy largely from live [shanesribshack.com](https://www.shanesribshack.com) (not Figma lorem).
3. **Catering 2-step funnel unchanged at `/catering/`** — ContactBanner → PathDecision → compact quote form → menu reference; desktop package rail. Do not remove or rebuild it.
4. **Location detail pages** at `/locations/[slug]/` (Edgewood + Norcross, Carrollton, Douglasville) with order-confirm modal where applicable.
5. **PageShell** shared component (`components/PageShell.tsx`) used by most pages.
6. **404 page** at `app/not-found.tsx` with branded fallback.
7. **Footer copyright** now dynamic (`new Date().getFullYear()`).
8. **Social icons** `-scale-y-100` bug fixed.
9. **All content pages polished** with real copy (Menu, Our Story, FAQs, Contact, Careers, Order, Shop, Franchise, Terms, Privacy, etc.).
10. **Menu hub → category → item PDP** — `/menu/` (DK-Menu `6250:6294`), `/menu/[slug]/`, `/menu/[slug]/[item]/` e.g. `/menu/sandwiches/big-dad/` (DK-Menu-Item-sandwich-BigDad `6250:6349` / MB `6250:6498`). Category listing “More Info” links to PDP. Big Dad is the fully detailed Figma reference; other items use category photo fallback until dedicated art. Assets: `public/images/menu/`, `public/images/menu/items/`, share icons `public/images/share/`.
11. **Locations listing finder** — `/locations/` uses `LocationsFinder` (filters + list + desktop static map) matching DK-Location `6250:6377` / MB-Location `6250:6567`. Data: `LOCATION_LIST_ITEMS` in `lib/locationData.ts`. Map: `public/images/locations/map-atlanta.jpg`. Client-side search only (no geocoding API). Detail pages remain at `/locations/[slug]/`.
12. **Shop** — `/shop/` from Figma **DK-Shop** `6250:7860` / **MB-Shop** `6250:8150`. Composition: `ShopHero` → sauce grid (`ShopProductCard` + promo slot) → `ShopAllSauces` / `GiftCardPromo` (order swaps on mobile) → Rewards via `PageShell`. Data: `lib/shopData.ts`. Assets: `public/images/shop/`.
13. **Our Story** — `/our-story/` from Figma **DK-OurStory** `6250:6880` / **MB** `6250:7360`. Composition: `OurStoryHero` → `OurStorySections` (Shane band, Big Dad, Giving Back, Join Team) → Rewards via `PageShell`. Assets: `public/images/our-story/`.

| URL | Status |
| :--- | :--- |
| https://mattybotstew.github.io/shanes-rib-shack-new/ | ✅ 200 (homepage) |
| https://mattybotstew.github.io/shanes-rib-shack-new/catering/ | ✅ 200 (Phase A funnel) |
| https://mattybotstew.github.io/shanes-rib-shack-new/menu/ | ✅ 200 (on `main` @ `1aa7e04` = DK-Menu hub; Pages deploy may lag) |
| https://mattybotstew.github.io/shanes-rib-shack-new/locations/ | ✅ 200 (on `main` @ `1aa7e04` = LocationsFinder; Pages deploy may lag) |
| https://mattybotstew.github.io/shanes-rib-shack-new/our-story/ | ✅ 200 (on `main` @ `1aa7e04` = DK-OurStory; Pages deploy may lag) |
| https://mattybotstew.github.io/shanes-rib-shack-new/faqs/ | ✅ 200 |
| https://mattybotstew.github.io/shanes-rib-shack-new/contact/ | ✅ 200 |
| https://mattybotstew.github.io/shanes-rib-shack-new/order/ | ✅ 200 |
| https://mattybotstew.github.io/shanes-rib-shack-new/shop/ | ✅ 200 (on `main` @ `1aa7e04` = DK-Shop; Pages deploy may lag) |
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
| `/menu/[slug]/` · `/menu/[slug]/[item]/` | 🟡 on `main` @ `1aa7e04` (Pages deploy may lag) |

**Latest on `origin/main` @ `1aa7e04`:** Figma menu hub/category/PDP, LocationsFinder, Shop (DK-Shop), Our Story (DK-OurStory), plus prior Phase A catering + full prototype.  
**GitHub Pages:** deploy workflow runs after push — live Pages may still briefly serve the previous build. Prefer extending; do not re-implement Phase A or rebuild the funnel from scratch.

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

### Homepage (`/`) — Figma `DK-Home` / `MB-Home 1` (on Pages)

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

### Menu (`/menu/`) — Figma DK-Menu + category + PDP (on `main` @ `1aa7e04`)

**Do not rebuild.** Extend data/assets only.

| Route | Figma | Notes |
| :--- | :--- | :--- |
| `/menu/` | **DK-Menu** `6250:6294` · **MB-Menu** `6250:6830` | Category cards + promo slot + Rewards; `MenuCategoryCard` |
| `/menu/[slug]/` | category listing | Items from `lib/menuPageData.ts`; **More Info** → PDP |
| `/menu/[slug]/[item]/` | **DK-Menu-Item-sandwich-BigDad** `6250:6349` · **MB** `6250:6498` | `MenuItemDetailView` + `ShareButtons`; e.g. `/menu/sandwiches/big-dad/` |

- **Big Dad** is the fully detailed Figma reference (dedicated photo + copy). Other items use category photos / fallbacks until dedicated art lands in `public/images/menu/items/`.
- Share icons: `public/images/share/` (facebook, twitter/X, linkedin, link).
- Category art: `public/images/menu/*.jpg`.

### Locations (`/locations/`) — Figma DK-Location / MB-Location (on `main` @ `1aa7e04`)

**Do not rebuild.** Extend list data / detail pages only.

| Piece | Notes |
| :--- | :--- |
| `/locations/` | `LocationsFinder` — ZIP/city search + radius UI + list; desktop static map |
| Figma | **DK-Location** `6250:6377` · **MB-Location** `6250:6567` |
| Data | `LOCATION_LIST_ITEMS` in `lib/locationData.ts` (listing); `ALL_LOCATIONS` / `LOCATIONS_BY_SLUG` for detail pages |
| Map | `public/images/locations/map-atlanta.jpg` — static image only; **no** live maps/geocoding API |
| Details | Still `/locations/[slug]/` (4 locations); cards without a slug fall through to Google Maps URL |

### Shop (`/shop/`) — Figma DK-Shop / MB-Shop (on `main` @ `1aa7e04`)

**Do not rebuild.** Extend `shopData` / product assets / purchase URLs only.

| Piece | Notes |
| :--- | :--- |
| `/shop/` | **DK-Shop** `6250:7860` · **MB-Shop** `6250:8150` |
| Components | `ShopHero`, `ShopProductCard`, `ShopAllSauces`; reuses homepage `GiftCardPromo` + `PageShell` |
| Data | `lib/shopData.ts` — products, Buy Now / Available in Store CTAs, live purchase URLs where known |
| Assets | `public/images/shop/` (hero, sauce bottles, shop-all lineup) |

**Intentional deviations (do not “fix” to Figma lorem):**
- Hero body is shop-focused (Figma reused contact-page copy); headline + Gift Cards CTA kept.
- Gift card block reuses `GiftCardPromo` (real homepage copy) instead of Figma lorem / typo “Shiop GIFT CARD”.
- Section order: desktop Shop All → Gift Cards; mobile Gift Cards → Shop All (MB-Shop).

### Our Story (`/our-story/`) — Figma DK-OurStory / MB (on `main` @ `1aa7e04`)

**Do not rebuild.** Extend sections / assets / copy only.

| Piece | Notes |
| :--- | :--- |
| `/our-story/` | **DK-OurStory** `6250:6880` · **MB** `6250:7360` |
| Components | `OurStoryHero` (mobile stacked / desktop card overlay); `OurStorySections` (Shane, Big Dad, Giving Back, Join Team) |
| Assets | `public/images/our-story/` — re-encoded JPEGs (no Figma MCP URLs in code) |

**Intentional deviations:**
- Asset sourcing: Figma MCP hero fill was blank; shack hero from Figma `download_assets`; other full-bleed shots preferred higher-res live-site masters when MCP fills were downscaled.
- Join CTA labels match Figma (“Join Our Team” desktop / “Careers” mobile); both → `/careers/`.
- `RewardsApp` kept via default `PageShell` (Figma frame goes straight to footer).

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
app/menu/                         Menu hub (DK-Menu)
app/menu/[slug]/                 Category listing
app/menu/[slug]/[item]/         Item PDP (Big Dad reference)
app/locations/                    LocationsFinder index + [slug]/ detail
app/our-story/                    Our Story (DK-OurStory)
app/news-events/                  News & Events
app/careers/                      Careers
app/faqs/                         FAQs (accordion)
app/rewards/                      Rewards
app/order/                        Order Online
app/shop/                         Shop (DK-Shop)
app/franchise/                    Franchise + login/
app/terms/                        Terms of Use
app/contact/                      Contact
app/privacy/                      Privacy Policy
app/troubleshooting/              Troubleshooting
app/gift-cards/                   Gift Cards
components/
  shared:   Header, SiteFooter, Cta, RewardsApp, BigCta, PageShell, ShareButtons
  home:     HomeHero, CateringPromo, ShackNews, GiftCardPromo
  menu:     MenuCategoryCard, MenuItemDetailView
  shop:     ShopHero, ShopProductCard, ShopAllSauces
  story:    OurStoryHero, OurStorySections
  catering: ContactBanner, PathDecision, StickyPathBar, HashScroll,
            CateringMenu, CateringForm, Hero (present, hidden in flow),
            HeroPathActions
  location: LocationsFinder, LocationContent, LocationHero,
            LocationOrderConfirm, LocationPromoBanner
lib/ asset.ts, ezcater.ts, formEndpoint.ts, menuData.ts, newsData.ts,
     locationData.ts (ALL_LOCATIONS + LOCATION_LIST_ITEMS), menuPageData.ts,
     shopData.ts
public/images/home/               homepage photography (Figma exports)
public/images/menu/               category cards + items/ (e.g. big-dad.jpg)
public/images/share/              PDP share icons
public/images/locations/          storefront + map-atlanta.jpg + chevron
public/images/shop/               shop hero + sauce product art
public/images/our-story/          Our Story photography
public/images/arrow-right.svg
docs/ strategies/, plans/, CLIENT_BLOCKERS.md, UX_CONVERSION_STRATEGY.md (index)
CONSENSUS_PLAN.md, CATERING_PLAN.md
```

## Remaining known issues (not Phase A blockers)
1. Dual headline treatment on older catering hero (desktop H1 / mobile styled `p`) — intentional for a11y  
2. Most menu items lack dedicated PDP photography — only Big Dad has `public/images/menu/items/`; others fall back to category photos  
3. Only 4 locations have detail pages in `ALL_LOCATIONS` — listing may show more via `LOCATION_LIST_ITEMS` with Maps fallback when no slug  
4. Locations finder is static map + client-side text filter only — radius UI is present but not geo-backed  
5. Menu hub / category / PDP, LocationsFinder, Shop (DK-Shop), and Our Story (DK-OurStory) are on `main` @ `1aa7e04` — GitHub Pages deploy via workflow may lag behind the push  
6. Shop promo banner slot is a client-upload placeholder (no creative yet)  

## Agent focus now
1. **Do not** re-implement Phase A or the `/catering/` 2-step funnel unless fixing a regression.  
2. **Homepage is additive** — listed Figma fidelity gaps (`MB-Home 1` `6310:5770`) are closed; do not rebuild `/` or fold catering back into `/`.  
3. **Do not** re-implement menu hub / category / PDP, LocationsFinder, Shop, or Our Story — extend data/assets only (`menuPageData`, `LOCATION_LIST_ITEMS`, `shopData`, story assets).  
4. Prefer regression fixes / human-flagged pixel tweaks over new homepage sections.  
5. Ops/client blockers + Phase B debate remain human/docs work.  
6. **`origin/main` @ `1aa7e04`** includes menu PDP stack, LocationsFinder, Shop, and Our Story — extend, don't re-implement; Pages deploy may lag.  
7. Menu: **DK-Menu** `6250:6294` → `/menu/[slug]/` → PDP **DK-Menu-Item-sandwich-BigDad** `6250:6349` / **MB** `6250:6498` (Big Dad fully detailed; others category-photo fallback). Mobile menu: **MB-Menu** `6250:6830`.  
8. Locations: **DK-Location** `6250:6377` / **MB-Location** `6250:6567` via `LocationsFinder`; details stay at `/locations/[slug]/`.  
9. Shop: **DK-Shop** `6250:7860` / **MB-Shop** `6250:8150` — extend `shopData` / sauce art; keep `GiftCardPromo` reuse and shop-focused hero copy.  
10. Our Story: **DK-OurStory** `6250:6880` / **MB** `6250:7360` — extend sections/assets; do not rebuild hero/sections stack.  
<!-- END:project-context -->
