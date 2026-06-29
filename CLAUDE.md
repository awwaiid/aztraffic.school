# Project notes for Claude

Context to pick up quickly when making future changes to this site.

## What this is
- The static website for **aztraffic.school** (aka **139aztss.com**).
- Plain static HTML/CSS/JS. **No framework, no build step, no `node_modules`.**
  (It used to be a Nuxt site; that was removed in favor of static files.)
- Everything published lives in [`public/`](./public).

## Files (all in `public/`)
| File | Page / purpose |
| --- | --- |
| `index.html` | English landing page (`/`) |
| `index.es.html` | Spanish landing page (`/index.es`) |
| `privacy-policy.html` | Privacy Policy (`/privacy-policy`) |
| `terms-of-service.html` | Terms of Service (`/terms-of-service`) |
| `preview.html` | Staging page for proposed changes (`/preview.html`) |
| `styles.css` | Shared styles for every page |
| `locations.js` | `LOCATIONS` array + `initSite(labels)` (searchable grid + mobile menu) |
| `favicon.ico` | Favicon |
| `traffic-background.jpg`, `traffic_green_light.png` | Legacy assets, currently unused by the design |

## Standing instructions (IMPORTANT — confirmed by the owner)
1. **Official name is `$139 AZ Discount Traffic Survival School`.** ALWAYS include the
   `$139` prefix. NEVER use the bare "AZ Discount Traffic Survival School" anywhere in
   the markup/text — that is a *different, competing* school. In the nav it renders as a
   `$139` badge (`.brand .mark`) plus the full name in `.brand-name`.
2. **Spanish copy must be written in Arizona Spanish** (the Spanish actually spoken in
   Arizona), not generic/Castilian Spanish. Applies to `index.es.html` and any future
   Spanish content.

## Key content facts
- **Price:** $139 in person. Virtual adds ~$10 shipping/handling (≈$149 total).
- **Phone — English:** (602) 892-3570 (`tel:6028923570`).
- **Phone — Spanish:** (602) 899-1922 (`tel:6028991922`). The two language pages use
  different numbers on purpose.
- **Email:** kandy.trafficsafety@gmail.com
- **School #5175.** NSC waiver line: 602-222-3381. Mailing: PO Box 2, Waddell, AZ 85355.
- **Google Analytics** gtag id `G-14DSKD6GXC` — snippet is in the `<head>` of every page.
- The **reviews/testimonials** section in `index.html` is intentionally commented out
  (and omitted from `index.es.html`) until real testimonials exist. The markup is left
  in place for easy restoration; the "Reviews" nav link was removed too.

## Editing tips
- **Locations:** edit the `LOCATIONS` array in `locations.js` (drives both EN + ES grids).
- **Look & feel:** edit `styles.css` (shared by all pages).
- **Nav layout:** the menu collapses to a hamburger at `max-width: 1140px`. The brand
  name (`.brand-name`) is `flex-basis:100%` so it flows onto its own line below the
  `$139` badge and the rest of the nav items.
- **Clean URLs** (`/privacy-policy`, `/index.es`) rely on GitHub Pages auto-resolving
  `.html`. Keep cross-page links extensionless to match.

## Workflow
- **Develop on branch** `claude/website-new-version-rhl0jt`, push, open a PR, merge to
  `main`. Merging to `main` triggers deploy.
- **Preview workflow:** stage a proposed change in `public/preview.html` (use an inline
  `<style>` override block so the shared `styles.css` and live pages stay untouched),
  push it live, review at `/preview.html`, then once approved fold the change into the
  real pages + `styles.css` and reset `preview.html` to mirror live (banner only).
- The owner wants changes **pushed live** (to `main`), not held on a branch.

## Deploy
- GitHub Pages via [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) on
  push to `main`. It just publishes `public/` — **no build step**.
- ⚠️ The GitHub App used in sessions **cannot modify files under `.github/workflows/`**
  (needs `workflows` permission). If the workflow must change, the owner has to edit it
  directly on GitHub.

## Local preview / screenshots (for Claude's own verification)
- Serve: `python3 -m http.server` from the repo (serves `public/` as root in this env),
  or `python3 -m http.server -d public 8000`.
- Screenshots: use `playwright-core` with
  `executablePath: '/opt/pw-browsers/chromium'`. Installing it creates
  `node_modules/` + `package.json`/`package-lock.json` — **delete those before
  committing** (the repo must stay framework-free; `node_modules/` is gitignored).
