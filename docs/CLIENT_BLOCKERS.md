# Client blockers — catering conversion

Shared across Cursor / Grok / Cline / DeepSeek.

## Shared premise

Production (`shanesribshack.com/catering/`) already has **both** paths (ezCater + form).  
This GitHub Pages repo now wires both as well. Ask about **CTA weight**, not existence.

## Decisions

| # | Decision | Ask | Default if stalled | Status |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Primary path **weight** | Online vs quote — which is primary? | Equal-weight labeled dual CTAs | ⏳ Pending · equal-weight **live** |
| 2 | SLA / price | Publishable reply time? $/person min? | Soft business-hours; no fake `$X` | ✅ Soft language **shipped** |
| 3 | Measurement | Form vs ezCater pre/post? | Instrument both; review 14–30 days | ✅ Hooks **shipped** · GTM confirm ⏳ |

## Shipped defaults (2026-07-23)

| Item | Value |
| :--- | :--- |
| Live catering (Phase A) | https://mattybotstew.github.io/shanes-rib-shack-new/catering/ |
| ezCater | `https://www.ezcater.com/brand/shanes-rib-shack` + UTMs (`lib/ezcater.ts`) |
| Form | FormSubmit ajax → `catering@shanesribshack.com` (`lib/formEndpoint.ts`) |
| Overrides | GitHub Secrets `NEXT_PUBLIC_EZCATER_URL`, `NEXT_PUBLIC_CATERING_FORM_ENDPOINT` |
| Local UX (post–Phase A) | 2-step path-first funnel · compact form · desktop package rail — see [`../AGENTS.md`](../AGENTS.md) |

**Human action:** Open first FormSubmit confirmation email in the catering inbox (required once).  
**Unchanged blockers:** path weight · hard SLA/price · GTM verify · Phase B after measurement.
