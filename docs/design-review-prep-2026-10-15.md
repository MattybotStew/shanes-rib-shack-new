# Shane's design review — prep sheet

**Call:** Wed **15 Oct 2026** · **Client:** Shane's Rib Shack
**Prepared:** 2026-10-14 · **Repo:** `shanes-rib-shack-new`
**Agenda (from PM):** (1) changing location on mobile · (2) News landing + single post options · (3) missing **Order Catering** on the Location LPs

> Internal prep — talking order, options, reasoning, demo links, likely questions.
> Two of the three items already have a client-facing artifact. **Item 3 is new** and needs options developed here.
> Scope note: items 1 and 3 are the **live WordPress site** (`shanesribshack.com`); item 2 is a
> **design deliverable** for the live WP news templates. This repo is the Next.js prototype — it is the
> reference/anchor, not the place the fixes ship.

---

## Demo links (all verified 200 on 2026-10-14)

| What | URL |
| :--- | :--- |
| Mobile location brief (client page) | https://mattybotstew.github.io/shanes-rib-shack-new/find-a-shack/ |
| News mockups index (6 options) | https://mattybotstew.github.io/shanes-rib-shack-new/design-mockups/ |
| Catering funnel (prototype anchor) | https://mattybotstew.github.io/shanes-rib-shack-new/catering/ |
| Prototype location LP (shows Order Catering pattern) | https://mattybotstew.github.io/shanes-rib-shack-new/locations/edgewood-atlanta-ga/ |
| Live LP **with** the button | https://www.shanesribshack.com/locations/edgewood-atlanta-ga/ |
| Live LP **missing** the button | https://www.shanesribshack.com/locations/chattanooga-tn/ |

---

## Agenda item 1 — Changing location on mobile

### The finding (say this first)

The **picker already exists** — it just has no button on a phone. Desktop has **Change Your Shack**;
at 390px it computes to `display: none`, and the mobile hamburger has no location item. So switching a
shack today is **Menu → Locations → search → View Details = 3–4 taps plus typing**. The top-bar shack
name is a link to *that shack's page*, not a switcher. No map on mobile either (renders at height 0).

**Frame it:** "The good news is the picker works — we just need something on the phone to open it."

### The six options — ranked best-UX-first (tap count is what they asked to reduce)

| Rank | Option | Taps | Typing | Effort | Why it sits here |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | **Tap the top location → pick a shack** | **2** | No | **Low** | Where customers already look, always on screen, reuses the existing picker. Add a chevron + underline so it reads as tappable. Covers the client's three ideas (tap location, switch cue, underline). |
| 2 | Persistent "Ordering from" bar | 1 | No | Medium | Clearest of the six — current shack always visible, switch in 1 tap. Cost: a sticky bar uses screen space. Best on ordering pages. |
| 3 | Auto-suggest + one-tap confirm | 1–2 | No | Low–Med | Smoothest *first* visit ("We think you're near Edgewood — Order here / Change"). Only pays off once, must be dismissible. |
| 4 | Ask for a shack at checkout | 1–2 | No | Medium | Catches the choice exactly when it matters and prevents wrong-shack orders. Narrow: only appears at Order Now. |
| 5 | Native bottom-sheet picker | 2 | Optional | Medium | Ergonomic upgrade to the picker *shell* (search + "use my location" + nearest). Improves the thing 1/2/3 open; not an entry point by itself. |
| 6 | First item in the hamburger menu | 2 | No | Low | Smallest change, safe fallback — but hidden behind the hamburger (low discovery, Nielsen/Baymard). Not a standalone fix. |

### Recommendation to table

**Start with Option 1; layer Option 3 next.** Option 1 alone takes switching from
3–4 taps + typing → **2 taps, no typing**, and it ships the client's three asks in one change.
Then Option 3 catches new customers, and Option 2 is the best value on ordering pages — with Option 5
as the picker they all open. They **stack**; they aren't either/or.

### Reasoning / methodology (if challenged)

- Ranking is a **prioritised hypothesis** from UX principles + measured facts, not live analytics.
- Principles cited on the brief: Fitts's Law (1, 2, 5) · visibility of status (2) · recognition over recall (1, 3) · error prevention (4) · Jakob's Law (1, 2) · Hick's Law (nearest-4 first) · progressive disclosure (5) · thumb-zone (~49% one-handed → 2, 5) · hamburger low-discovery (why 6 is last).
- **Proof plan:** GA4 via GTM events `picker_open → location_selected`, location-set rate, picker abandonment. Full plan in `docs/live-wp-location-metrics.md`. Baselines need ~2 weeks *before* the change.
- Effort labels are relative: Low = a small tweak, Medium = a few days with testing.

### 30-second verbal

> "On desktop, changing your Shane's is one click. On mobile the button's missing and it's not in the
> menu, so customers go Menu → Locations → search → View Details — three or four taps plus typing.
> The location picker already exists; we just need something on the phone to open it. Cheapest fix: make
> the shack name at the top open that picker — two taps, no typing — with a chevron and underline so it's
> obviously clickable. I've put six options on a page, simplest first, with tap counts."

### Artifacts

`docs/client-briefs/mobile-find-a-shack.html` (client page) · `.png` (same one-pager) ·
`docs/client-briefs/mobile-find-a-shack-email.md` (send-ready email + verbal) ·
`docs/live-wp-find-location-flow.md` (internal, technical) · `docs/live-wp-location-metrics.md` (measurement plan).

### Likely questions

- *"Does this need a redesign?"* — No. It's one trigger + a chevron; the picker is already built.
- *"Won't a sticky bar cover content?"* — That's why it's rank 2, not 1, and best limited to ordering pages.
- *"How do we know it worked?"* — `picker_open → location_selected`; target ≤2 taps, <30% abandonment.

---

## Agenda item 2 — News landing + single post options

Six options: **three single-post**, **three landing**. All share the live 1230px content width,
16:9 thumbnails, and click-to-zoom featured images. Client's original asks: shorten the single-post
banner · content 2/3 + image 1/3 · drop the underused excerpt · image always fits and opens in a lightbox ·
redesign the landing page.

### Single post template

| Opt | Layout | Reasoning | Best when |
| :--- | :--- | :--- | :--- |
| **A · Recommended** | Short banner → body **2/3 left**, featured image **1/3 right** (sticky) → Fancybox | **Directly implements the client's stated ask** (2/3 + 1/3, short banner). Two-column keeps the image visible while reading without pushing copy down. Sticky rail = image stays with the reader. | Default for every post. |
| B · Alternative | Red banner → **full-width 16:9** featured image (Fancybox) → centered single column | Strongest visual/editorial statement; great for promo posts with a hero-quality image. **Fails the 2/3:1/3 ask** and pushes text below the fold. | Marquee/promo posts only. |
| C · Alternative | Featured image **left 1/3** (+ share card under it) → body **right 2/3** | Mirror of A. Keeps the 2/3:1/3 ratio; image-first reading order. Useful if ads/share need the right column, or to vary rhythm. Slightly less conventional (text-right is a weaker reading default for LTR). | When the image should lead. |

### News landing page

| Opt | Layout | Reasoning | Best when |
| :--- | :--- | :--- | :--- |
| **A · Recommended** | Short banner → **lead story** at 16:9 → **3-up card grid** + pagination | Best balance: an editorial lead gives hierarchy and a featured slot (campaigns/app promos), while the 3-up grid stays scannable and uses the same card language as the rest of the site. Low risk. | Default. |
| B · Alternative | **Full-width overlay hero** (dark scrim + headline) → 3-up grid + pagination | Most magazine-like; strongest at the top of the page. Overlay text over photos is the riskiest for legibility and editor discipline (must supply a good, dark-enough image). | If they want a "front page" feel and can supply hero art. |
| C · Alternative | No big featured block — **category filter chips + dense 4-up grid** + pagination | Densest: most posts above the fold, fastest to browse, scales best as the archive grows. Loses the editorial "lead" moment; needs clean categories. | Archive-first / high-volume publishing. |

### Recommendation

**A for both**, as a matched pair — they share the banner treatment, the 16:9 ratio and the card grid,
so the landing → post journey feels like one system. B and C are real alternatives held in reserve:
B if they want a bolder front page, C if they publish enough that browsing beats curation.

### The featured-image question (they asked directly)

Feed editors **one fixed crop per surface** so words are never cropped. Recommendation:
**1600 × 900 (16:9), `object-fit: cover`, keep text in the centre ~50% safe zone.** 16:9 is what the
cards and the single-post rail both use in the mockups, so one master file works everywhere; anything
outside the centre safe zone may be trimmed on the 1/3 rail and the 3-up cards.

### Also asked for (not built yet)

A **step-by-step publish guide** (duplicate post → swap content → publish). Estimate ~1h; offer to
produce it after they pick a layout, since the exact steps depend on the winning template.

### Artifacts

Canonical: `docs/design-mockups/` — `index.html` + `single-post.html`, `single-post-alt-1/2.html`,
`news-landing.html`, `news-landing-alt-1/2.html`. Published mirror: `/design-mockups/` on Pages.
Estimates (from `AGENTS.md`): single post 6–10h · landing 4–8h · sizing spec ~1h · publish guide ~1h.

### Likely questions

- *"Which is your recommendation?"* — A + A, and why (implements the stated ask; matched system).
- *"Can the image still be full-width on some posts?"* — Yes: B for marquee posts as an exception.
- *"Will our old images crop badly?"* — Only outside the centre 50%; the ratio spec fixes it going forward.

---

## Agenda item 3 — "Order Catering" missing on the Location LPs ⭐ NEW

### The finding (verified live 2026-10-14)

The Location detail pages are **inconsistent**. Every LP has a **"See Our Catering Menu"** text link to
`/catering/#catering-menu`, but the **"Order catering" button** is only on *some* LPs:

| Live location LP | "Order catering" button? |
| :--- | :--- |
| Edgewood (`/locations/edgewood-atlanta-ga/`) | ✅ → `ezcater.com/catering/shanes-rib-shack-atlanta-caroline-st-ne` |
| Norcross (`/locations/norcross-ga/`) | ✅ → `ezcater.com/catering/shanes-rib-shack-norcross` |
| Carrollton (`/locations/carrollton-ga/`) | ✅ → `ezcater.com/catering/shanes-rib-shack-carrollton` |
| Douglasville (`/locations/douglasville-ga/`) | ✅ → `ezcater.com/catering/shanes-rib-shack-douglasville` |
| Chattanooga (`/locations/chattanooga-tn/`) | ❌ **not rendered** — only Pickup + Delivery + the menu text link |

The 3-button row is Pickup · Delivery · **Catering**. Where catering is missing the row drops to two
buttons, so the page looks like catering isn't offered.

### Root cause (most likely)

The button is rendered **conditionally on a per-store ezCater URL** — the `ez_cater_url` field in the
`window.tcmInteractiveMaps` config (`docs/live-wp-find-location-flow.md` §2 lists `ez_cater_url`,
`order_online_link` per shack). Shacks that possess an ezCater storefront get the button; those without a
per-store URL get **no button at all** rather than a fallback. Chattanooga is one; there are likely
others among the 28 shacks.

**Also note the second surface:** the `/locations/` finder cards render **Directions · Order Now · View
Details** — no catering entry — and after any search the Order Now button is dropped entirely
(flow doc §7.2). So "catering is missing" is true of the finder cards too.

### Options

| Opt | Approach | What changes | Pros | Cons / effort |
| :--- | :--- | :--- | :--- | :--- |
| **A** | **Always render the button (fallback chain)** | One template change: `href` = per-store ezCater → else brand ezCater → else `/catering/` | No LP ever shows a 2-button row; consistent with Pickup/Delivery; smallest UI change | Low. Uses a generic destination where the storefront is missing |
| **B** | **Fall back to the site Catering page (`/catering/`)** | Missing-URL shacks link the button to `/catering/` | Keeps the customer in the funnel that already has Order Online **and** the quote form; captures leads for shacks ezCater doesn't cover | Low–Med. One extra hop vs a direct storefront |
| **C** | **Fall back to the brand ezCater page** | `ezcater.com/brand/shanes-rib-shack` | Stays inside the ordering platform; customer picks their shack there | Low–Med. Brand page may not list every shack; extra selection step |
| **D** | **Keep the text link where unavailable** | No button; rely on "See Our Catering Menu" | No dead-end, no false promise | Low. Lowest conversion — the weakest of the "always show something" family |
| **E** | **"Find catering near you" routing** | Server-side availability flag; when the shack has none, show a catering-filtered finder | Most accurate; never mis-routes | High. Needs a catering-availability field + finder filtering |
| **F** | **Data fix — audit & populate `ez_cater_url`** | Fill the missing per-store URLs across all 28 shacks | Fixes the true root cause; keeps every link per-store accurate | Ops/data task, not code. Only closes the gap if a storefront *exists* to link |

> Options **A/B/C** overlap: A is the rule, B/C are the two fallback destinations to choose between.
> **D** is the "do the minimum" path.

### Recommendation to table

**Do F, then ship A.** Audit the per-store catering URLs and populate the gaps (F) — that's the real fix,
and it's data, not design. Then make the button **always render** with a fallback chain (A), choosing
**B (`/catering/`) as the fallback** because it keeps the customer in a funnel we control and gives
ezCater-less shacks a quote path. Net: every Location LP shows a full, honest 3-button row.

### The killer demo point

**We already built and shipped this pattern in the prototype.** On the prototype location pages
(`/locations/edgewood-atlanta-ga/`) the button **always** renders, and `lib/locationData.ts` already
uses exactly the fallback we're recommending: detail-backed shacks use their per-store ezCater URL,
while shacks without a dedicated storefront fall back to the brand catering URL
(`cateringUrl: "https://www.ezcater.com/brand/shanes-rib-shack"`). So this is a **one-template change to
bring the live LPs in line with what the prototype already does** — same "the pattern exists, we just
need to apply it" story as item 1.

### Scope boundary (say this plainly)

The live LP template is in the **WordPress theme (`cm-shanes`)** — not this repo. We can **spec the
change and show the pattern** from the prototype, but the theme edit is a separate deliverable with the
site dev. Don't imply we can ship it from here.

### Likely questions

- *"How many locations are affected?"* — Unknown until the `ez_cater_url` audit; Chattanooga is confirmed, and the cause suggests every shack without a per-store ezCater storefront.
- *"Why not just always link to the brand page?"* — That's option C; we prefer B because `/catering/` also captures custom-quote leads where ezCater has no coverage.
- *"Do those shacks even offer catering?"* — That's the one thing to confirm with Ops; it decides between "always show" (A) and "show catering-near-you" (E).

---

## Cross-cutting talking track

1. **Lead with what works.** Item 1: picker exists. Item 3: prototype already does it. Item 2: templates are mockup-ready. All three are small, not verdicts on the site.
2. **Give one recommendation per item** so they choose, not debate: 1 → Option 1 (+3) · 2 → A + A · 3 → F then A (fallback B).
3. **Offer the walkthrough**, don't request a meeting.
4. Keep it non-technical in the room: "picker", "button", "button row", "catering storefront" — no `ez_cater_url`, no `display:none`.

## Still open (owners)

| # | Question / item | Owner |
| :--- | :--- | :--- |
| 1 | Mobile: confirm Option 1 as the starting fix; GA4/GTM + theme deploy access | Client + site dev |
| 2 | News: pick landing + single-post layout; supply hero art if B; publish guide after pick | Client |
| 3 | Location LPs: `ez_cater_url` audit across 28 shacks; confirm which shacks genuinely offer catering | Ops + site dev |
| 4 | Location LPs: confirm fallback destination (B `/catering/` vs C brand ezCater) | Client + marketing |
| 5 | Measurement baseline (~2 weeks) before any mobile change | Ops/marketing |
