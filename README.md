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
| `styles.css` | Shared styles for every page |
| `locations.js` | Class locations data + the searchable grid / mobile menu |
| `favicon.ico`, `*.jpg`, `*.png` | Static assets |

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

## Production

Production is deployed automatically to GitHub Pages by GitHub Actions whenever the `main` branch is pushed. The workflow ([.github/workflows/deploy.yml](./.github/workflows/deploy.yml)) simply publishes the `public/` folder — there is no build step.
