# Client blockers — catering conversion

Shared across Cursor / Grok / Cline / DeepSeek. Gates Phase A copy that ships as hard promises.

## Shared premise

Production (`shanesribshack.com/catering/`) already has **both** paths (ezCater + form).  
Ask about **CTA weight**, not “should we add online order.”

## Decisions

| # | Decision | Ask | Default if stalled | Status |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Primary path **weight** | Online order vs custom quote — which gets visual primacy? | Equal-weight labeled dual CTAs | ⏳ Pending client |
| 2 | SLA / price | Publishable reply time? $/person or min order? | Soft: “reach out during business hours.” No fake `$X` | ✅ Soft language shipped |
| 3 | Measurement | Form vs ezCater visible pre/post? | Instrument both; review 14–30 days | ✅ Analytics hooks shipped; confirm GTM |

## Shipped defaults (2026-07-23)

- ezCater CTAs → `https://www.ezcater.com/brand/shanes-rib-shack` + UTMs  
- Form → FormSubmit ajax to `catering@shanesribshack.com` (confirm first email in that inbox)  
- Override anytime with GitHub Secrets: `NEXT_PUBLIC_EZCATER_URL`, `NEXT_PUBLIC_CATERING_FORM_ENDPOINT`
