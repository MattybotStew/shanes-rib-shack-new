# Live-site imagery scrape

Pulled from [shanesribshack.com](https://www.shanesribshack.com) WordPress media library + theme CSS / page references.

- **Source of truth for paths:** `MANIFEST.json`
- **Layout:** `uploads/YYYY/MM/…` mirrors WP; `themes/…` for theme SVGs
- **Not wired into the app** — reference library for replacing placeholders (news, careers, menu PDPs, etc.)
- Scraped via `/wp-json/wp/v2/media` (full `source_url` originals / `-scaled` masters)

Five listed URLs 404’d on the live CDN (missing theme SVGs + one category template filename).
