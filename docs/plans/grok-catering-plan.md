# Grok CLI Plan

> **Grok UX strategy (owned file — do not overwrite):**  
> [`../strategies/grok-ux-conversion-strategy.md`](../strategies/grok-ux-conversion-strategy.md)  
> Siblings: Cursor · Cline under `docs/strategies/`. Index: [`../UX_CONVERSION_STRATEGY.md`](../UX_CONVERSION_STRATEGY.md).  
> This file is the **technical / PR-sequenced** Grok ship vote.

> **SHIP STATUS (2026-07-23):** Phase A is **live** on GitHub Pages.  
> https://mattybotstew.github.io/shanes-rib-shack-new/catering/ · [`../../AGENTS.md`](../../AGENTS.md) · [`../../CONSENSUS_PLAN.md`](../../CONSENSUS_PLAN.md)  
> **Local since Phase A:** 2-step path-first funnel + compact form + desktop package rail. Historical “codebase reality” below is **pre-ship**; do not re-implement Phase A or the local funnel.

Grounded against repo truth (Next 16.2.11 static export). Aligns with `CATERING_PLAN.md` / `AGENTS.md`; tighter on reuse vs rewrite and PR sequencing.

## Codebase reality check

| Fact | Evidence |
| :--- | :--- |
| Single route | `app/` has only `page.tsx`, `layout.tsx`, `globals.css` — **no** `app/catering/` |
| Static export | `next.config.ts`: `output: "export"`, `images.unoptimized`, `basePath` when `GITHUB_PAGES=true` |
| Form is a no-op | `CateringForm.tsx` L32–34: `onSubmit` → `e.preventDefault()` only |
| Date/time are text | `name="eventDate"` / `name="startTime"` — no `type="date"` / `type="time"` |
| Over-required fields | Org, package, startTime, eventType, email **and** phone all `required` |
| Broken nav | `Header` → `/catering`; Hero/Menu “Order Online” → `/order` (no ezCater URL) |
| Homepage hosts catering | `page.tsx` stacks Hero → BigCta → CateringMenu → CateringForm |
| Client islands | Only `Header`, `CateringForm` are `"use client"` |
| Asset rule | All images must use `asset()` (`lib/asset.ts` + `NEXT_PUBLIC_BASE_PATH`) |
| Brand tokens | `globals.css`: black/red/gold/tan — **not** `#FF6B00` |
| No form/analytics deps | `package.json`: next/react only; no zod, GTM helper, or form SDK |
| Deps pending | Form endpoint, pricing floor, ezCater URL/UTMs, GA4/GTM |

## Architecture decisions

1. **Canonical conversion URL:** `app/catering/page.tsx`. Homepage keeps teaser CTAs → `/catering` (or shared sections temporarily).
2. **No Server Actions / no `app/api/*`** on GitHub Pages. Submit is **client `fetch` POST** to external endpoint.
3. **Two-path UX:** Standard → ezCater (+UTM); Custom → `#catering-form` short form.
4. **Rewrite form logic, reuse chrome:** keep tan/black card shell, `fieldClass`/`labelClass`/`selectWrap`, locations/packages lists; rewrite validation, required set, submit states.
5. **Thin analytics:** `lib/analytics.ts` pushing `dataLayer` / `gtag` if present (no-op safe).
6. **Config via env:** `NEXT_PUBLIC_CATERING_FORM_ENDPOINT`, `NEXT_PUBLIC_EZCATER_URL` (build-time for static).

## File layout

```
app/catering/page.tsx              # NEW — composition + metadata
components/catering/
  CateringPathHero.tsx             # NEW — two-path cards, single H1
  CateringTrustBanner.tsx          # NEW — pricing / lead time / reply SLA
  CateringForm.tsx                 # MOVE+REWRITE from components/CateringForm.tsx
components/CateringMenu.tsx        # REUSE — optional package→form CTAs
lib/asset.ts                       # UNCHANGED
lib/catering.ts                    # NEW — types, required-field rules
lib/submitCatering.ts              # NEW — static-safe POST helper
lib/analytics.ts                   # NEW — event stubs
lib/ezcater.ts                     # NEW — base URL + UTM builder
```

Homepage: either slim to marketing + link `/catering`, or import shared packages/form (avoid diverging two forms).

## P0 implementation sequence (PR-sized steps)

**PR1 — Route skeleton (~4–6h)**  
`app/catering/page.tsx`; compose PathHero (scaffold) + existing Menu + existing Form; wire Header `/catering` works under basePath (`Link` is fine).

**PR2 — Two-path hero + CTA cleanup (~4–6h)**  
Path cards (ezCater vs `#catering-form`); single H1; Hero/Menu “Order Online” → ezCater env URL; dedupe mobile Order CTAs.

**PR3 — Form friction + native pickers (~6–8h)**  
Required: location, name, email **or** phone, event date, guest count. Optional: org, package, time, delivery, comments. `type="date"`/`type="time"`. Loading/success/error + `aria-live`.

**PR4 — Static-safe submit (~4–8h)**  
`submitCatering` + env endpoint; success copy (“1 business day”); never ship preventDefault-only.

**PR5 — Trust banner + analytics/UTM (~4–6h)**  
Ops placeholders OK; events: path_selected, form_started, form_submitted, form_success, outbound_click(ezcater).

**PR6 — QA static export (~2–4h)**  
`GITHUB_PAGES=true next build`; verify basePath assets, form POST, ezCater outbound.

*P1 later:* skip-link, `:focus-visible`, placeholders, other route stubs, FAQ.

## Form submission approach (static-safe)

```
Browser → fetch(NEXT_PUBLIC_CATERING_FORM_ENDPOINT, { method:'POST', body })
       → Formspree | Basin | Getform | CRM webhook | any CORS-enabled HTTPS
```

| Option | Use when |
| :--- | :--- |
| **Formspree / Basin / Getform** | Fastest ship; no backend (recommended default) |
| CRM webhook | Client already has HubSpot/etc. |
| Separate API | Only if hosting moves off pure static |
| `mailto:` | Last resort — poor mobile UX |

Do **not** add `app/api/` or Server Actions for production on this host.  
Client: validate → disable submit → POST JSON or `FormData` → success panel / inline error. Keep confirmation-email claim only if endpoint actually sends mail.

## Estimates

| Scope | Hours |
| :--- | :--- |
| P0 dev (PR1–6) | **26–40** |
| P0+P1 | **44–68** |
| Design P0 (optional) | 8–12 |
| Buffer for form-provider setup | +~20% |

## Agent notes (for future LLMs)

1. Read `AGENTS.md` + `node_modules/next/dist/docs/` (Next 16 ≠ training data).
2. Static export: **no** Server Actions, **no** Node routes on GH Pages.
3. Always `asset()` for public images; test with `GITHUB_PAGES=true`.
4. Brand: `brand-red` `#bb202b`, `brand-gold` `#ffc72c` — never orange `#FF6B00`.
5. One H1 on `/catering` (do not clone desktop+mobile dual H1 pattern from `Hero.tsx`).
6. Form must POST; preventDefault alone is a bug.
7. Primary KPI = form success **+** ezCater clicks/orders, not form volume alone.
8. Prefer rewrite of `CateringForm` submit/fields over full visual redesign.
9. Env vars are build-time; document in README/CI for Pages deploy.
10. Scope P0: route + paths + working short form + trust + analytics stubs.

## Vote: top 5 ranked actions

1. **Pick form endpoint** + set `NEXT_PUBLIC_CATERING_FORM_ENDPOINT` (unblocks PR4).
2. **Ship `app/catering` + two-path hero** (fixes nav 404; clarifies ezCater vs quote).
3. **Rewrite form** — fewer required fields, native date/time, real POST + success UI.
4. **Wire ezCater URL + UTMs**; replace `/order` dead links on catering CTAs.
5. **Instrument both paths** before claiming conversion recovery.

---
*Source of truth for UI product detail: `CATERING_PLAN.md`. This file = Grok CLI technical cut.*
