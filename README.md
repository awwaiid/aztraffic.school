# $139 Arizona Discount Traffic Survival School

This is the static website for [aztraffic.school](https://aztraffic.school) aka [139aztss.com](https://139aztss.com).

It is a plain static site — just HTML, CSS, and a little vanilla JavaScript. No build step, no framework, no `node_modules`.

## Structure

Everything that gets published lives in [`public/`](./public):

| File | Page |
| --- | --- |
| `index.html` | English landing page (`/`) |
| `index.es.html` | Spanish landing page (`/index.es`) |
| `privacy-policy.html` | Privacy Policy (`/privacy-policy`) |
| `terms-of-service.html` | Terms of Service (`/terms-of-service`) |
| `preview.html` | Staging copy for reviewing proposed changes (`/preview.html`) |
| `styles.css` | Shared styles for every page |
| `locations.js` | Class locations data + the searchable grid / mobile menu |
| `favicon.ico`, `*.jpg`, `*.png` | Static assets |

> **Naming:** the official school name is **"$139 AZ Discount Traffic Survival School"**. Always include the `$139` prefix — never use the bare "AZ Discount Traffic Survival School" (that's a different, competing school).
>
> **Spanish:** all Spanish copy (`index.es.html`, etc.) should use **Arizona Spanish** — the Spanish actually spoken in Arizona — not generic/Castilian Spanish.

## Editing

- **Text / content:** edit the relevant `.html` file directly.
- **Class locations:** edit the `LOCATIONS` array in `public/locations.js` (used by both the English and Spanish pages).
- **Look & feel:** edit `public/styles.css`.

## Local preview

No tooling required. Open `public/index.html` in a browser, or serve the folder:

```bash
npx serve public
# or
python3 -m http.server -d public 8000
```

## Preview workflow

Proposed changes are staged in `public/preview.html` and pushed live alongside the
real pages. Because it's a real published file, it can be reviewed on the production
server at [`/preview.html`](https://aztraffic.school/preview.html) without changing the
live homepage. `preview.html` carries a `noindex` tag and a banner so it's never
mistaken for the live site or picked up by search engines. Once a change is approved,
it's folded into `index.html` (and the other pages as needed).

## Production

Production is deployed automatically to GitHub Pages by GitHub Actions whenever the `main` branch is pushed. The workflow ([.github/workflows/deploy.yml](./.github/workflows/deploy.yml)) simply publishes the `public/` folder — there is no build step.
