This is a [Next.js](https://nextjs.org) project for **Shane's Rib Shack** (static export → GitHub Pages).

## Live

- https://mattybotstew.github.io/shanes-rib-shack-new/
- https://mattybotstew.github.io/shanes-rib-shack-new/catering/

**Phase A catering UX is shipped** on GitHub Pages (dual-path CTAs, short quote form, FormSubmit, ezCater brand URL).  
**Local tree** extends that into a 2-step path-first funnel (ContactBanner → PathDecision → compact form → menu; desktop package rail).  
Agent context: see [`AGENTS.md`](./AGENTS.md).

## Catering env

Static export — set at build time (see `.env.example`):

| Variable | Purpose | Default if empty |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_CATERING_FORM_ENDPOINT` | Form webhook | FormSubmit → `catering@shanesribshack.com` |
| `NEXT_PUBLIC_EZCATER_URL` | ezCater storefront | Brand page + UTMs |
| `NEXT_PUBLIC_SITE_URL` | Canonical/metadata base URL | `http://localhost:3000` locally, GitHub Pages URL in CI |

GitHub Actions can override via repo Secrets. First FormSubmit send may require confirming the catering inbox email.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Catering: [/catering](http://localhost:3000/catering).

## Testing & Smoke Checks

Quick local checks:

```bash
npm run lint
npm run build
npm run test:e2e
```

Notes:
- `npm run test:e2e` uses Playwright with a tiny static server (`scripts/serve-static.mjs`) against the exported `out/` build.
- The static server emulates the GitHub Pages basePath mount (auto-detected from the export, or set `NEXT_PUBLIC_BASE_PATH`), so the suite passes against both local and `GITHUB_PAGES=true` CI builds.
- The smoke suite lives in `tests/smoke.spec.ts` and currently covers core routes, menu/article detail pages, desktop/mobile navigation behavior, catering form validation, mocked successful catering submit, and branded 404 behavior.
- CI smoke coverage runs in `.github/workflows/smoke.yml`.

Useful local commands:

```bash
npm run serve:out
npx playwright show-report
```

## Learn More

- Multi-LLM docs: [`docs/README.md`](./docs/README.md)
- Next.js docs: https://nextjs.org/docs
