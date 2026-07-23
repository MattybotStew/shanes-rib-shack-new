# Cline Plan

> **Cline UX strategy (owned file — do not overwrite):**  
> [`../strategies/cline-ux-conversion-strategy.md`](../strategies/cline-ux-conversion-strategy.md)  
> Siblings: Cursor · Grok under `docs/strategies/`. Index: [`../UX_CONVERSION_STRATEGY.md`](../UX_CONVERSION_STRATEGY.md).  
> This file is Cline’s ship vote.

## Philosophy (smallest ship)

Ship conversion fixes, not a redesign. The form is a no-op, date/time are text, `/catering` 404s, and users get no path guidance. Fix those in place. Compose `/catering` from existing components. Do not invent `components/catering/*`, two-path card systems, FAQ, zod packages, or a 40-hour Basecamp theater. Static export = Formspree/webhook only — no Server Actions.

**Primary KPI:** form actually submits + ezCater clicks are trackable. Form volume alone is a lie if people leave to ezCater.

## Exact files to change

| File | What |
| :--- | :--- |
| `components/CateringForm.tsx` | Real submit, native date/time, drop over-required fields, success/error/loading, thin trust line above form |
| `app/catering/page.tsx` | **New** — compose Hero + BigCta + CateringMenu + CateringForm (+ footer already in layout? check — footer is in page, include it) |
| `components/Hero.tsx` | Path-clarity labels/links only: “Order online (standard packages)” → ezCater URL+UTM; “Request custom quote” → `#catering-inquiry`. One H1 fix if cheap (hide one variant’s H1 as `p`/`span` or `aria-hidden` on mobile duplicate — optional if time) |
| `components/CateringMenu.tsx` | FooterCard “Order Catering Online” → real ezCater URL + UTM; keep inquiry `#` as-is |
| `.env.example` (or README note) | `NEXT_PUBLIC_CATERING_FORM_ENDPOINT` — Formspree/Basin URL |
| `app/page.tsx` | Optional: leave homepage as-is (already embeds catering) OR thin it later. **Do not rewrite homepage for v1.** |

**Do not touch** unless broken by the above: Header, SiteFooter, globals redesign, RewardsApp, package card visuals.

## Step-by-step edit order

1. **Form endpoint contract** — Confirm Formspree (or client webhook). Add `NEXT_PUBLIC_CATERING_FORM_ENDPOINT`. If unknown, still build against env + clear error UI; do not invent Server Actions.
2. **`CateringForm.tsx` (core)**  
   - `type="date"` / `type="time"` on event fields.  
   - Required only: location, first/last name, email **or** phone (custom validate: at least one), eventDate, attendees.  
   - Optional (remove `required` + red asterisk): organization, package, startTime, eventType (or drop eventType entirely if no one uses it — keep field optional if client wants it).  
   - Submit: `fetch(endpoint, { method: "POST", headers: { Accept: "application/json" }, body: FormData or JSON })`. States: idle / submitting / success / error. Success copy: “Thanks — we’ll reply within 1 business day.”  
   - Trust line under H2 (static copy, Ops can swap later): “Most events need ~48-hour notice · We’ll reply within 1 business day · Packages from $XX/person” — use placeholder `$` only if Ops hasn’t given a number; better one honest line than fake pricing.  
   - Optional: `dataLayer.push` / `window.gtag` for `catering_form_success` if present — 10 lines max, no analytics framework.
3. **`app/catering/page.tsx`** — Mirror homepage composition for catering sections:
   ```tsx
   // Hero, BigCta, CateringMenu, CateringForm, SiteFooter (same as page.tsx minus RewardsApp if you want leaner; either is fine)
   ```
   Static export will emit `/catering/index.html`. Header already links here.
4. **Hero + CateringMenu CTAs** — Point “Order Catering Online” at real ezCater URL with `?utm_source=shanessite&utm_medium=catering&utm_campaign=online_order`. Point primary path at form hash. One-line helper under buttons if it fits without layout surgery.
5. **Smoke test** — `npm run build` (export), open `/catering`, submit form against Formspree test, mobile date picker, both CTAs.

## What I refuse to build in v1

- New `components/catering/` tree, two-path decision cards, FAQ accordion, trust-banner component file
- Zod / full type modules / multi-step form wizard
- Searchable location, geolocation, package redesign
- Full GTM event taxonomy from CATERING_PLAN (all 7 events)
- Stubbing every broken nav route (`/menu`, `/locations`, …)
- Homepage IA rewrite, sticky mobile bar, testimonials carousel
- Design mockups as a blocker — ship with existing brand tokens

## Estimates (aggressive)

| Task | Hours |
| :--- | :--- |
| Form submit + states + field prune + date/time | 3–4 |
| Trust line copy (inline) | 0.5 |
| `/catering` page composition | 0.5–1 |
| Hero/Menu CTA URL + path labels | 1 |
| Env/docs + Formspree wire | 1–2 |
| Build/QA mobile | 1–2 |
| **Total** | **~7–11 hrs** |

(Vs CATERING_PLAN 26–40 hrs P0 — that’s design theater + greenfield components. We skip it.)

**Blockers that can stop ship:** form endpoint account; real ezCater URL. Pricing floor is nice-to-have, not a code blocker.

## Definition of done

- [ ] Submit posts to a real endpoint; user sees success or error (not silent `preventDefault`)
- [ ] Date/time use native pickers
- [ ] Org / package / time / eventType not blocking submit
- [ ] `/catering` loads under static export (and basePath if GITHUB_PAGES)
- [ ] ezCater CTAs leave site with UTMs
- [ ] No new design system; existing components still look like Shane’s
- [ ] `npm run build` green

## Vote: top 5 ranked actions

1. **Make the form submit** (endpoint + success/error) — nothing else matters if leads die
2. **Native date/time + drop forced org/package/time** — kill friction
3. **Ship `/catering` by composition** — stop 404 on the money URL
4. **Real ezCater URLs + UTMs** on Order Online CTAs — measure the other path
5. **One trust line + path labels** on hero/form — clarity without redesign

*Stop after #5. Ship. Measure. Then argue about two-path cards.*
