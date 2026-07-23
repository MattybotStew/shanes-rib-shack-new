This is a [Next.js](https://nextjs.org) project for **Shane's Rib Shack** (static export → GitHub Pages).

## Live

- https://mattybotstew.github.io/shanes-rib-shack-new/
- https://mattybotstew.github.io/shanes-rib-shack-new/catering/

**Phase A catering UX is shipped** (dual-path CTAs, short quote form, FormSubmit, ezCater brand URL).  
Agent context: see [`AGENTS.md`](./AGENTS.md).

## Catering env

Static export — set at build time (see `.env.example`):

| Variable | Purpose | Default if empty |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_CATERING_FORM_ENDPOINT` | Form webhook | FormSubmit → `catering@shanesribshack.com` |
| `NEXT_PUBLIC_EZCATER_URL` | ezCater storefront | Brand page + UTMs |

GitHub Actions can override via repo Secrets. First FormSubmit send may require confirming the catering inbox email.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Catering: [/catering](http://localhost:3000/catering).

## Learn More

- Multi-LLM docs: [`docs/README.md`](./docs/README.md)
- Next.js docs: https://nextjs.org/docs
