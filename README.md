# Andy Zhang · middleclicker

A cozy, static personal website at [middleclicker.github.io](https://middleclicker.github.io/).

Plain HTML, CSS, and JavaScript. No build step, package installation, API calls, or backend. Fonts and artwork are served from this repository. The page remains usable without JavaScript; JavaScript adds a saved daylight/evening color preference.

## Preview locally

```sh
python3 -m http.server 4173
```

Open `http://localhost:4173`. Stop the server with Ctrl+C.

## Edit

- `index.html`: introduction, selected projects, about section, and contact links.
- `index.css`: layout, typography, responsive styles, and both color palettes.
- `index.js`: color preference and footer year.
- `assets/`: local illustration, favicon, paper texture, fonts, and font licenses.
- `404.html`: the page shown for missing URLs, including removed writing pages.

Project cards are intentionally curated in HTML rather than fetched from the GitHub API. To add a project, copy an existing `<article class="project-card">` and update its link, description, and labels.

## Publish

Push to `main`. GitHub Pages is configured to deploy from `main` at the repository root. `.nojekyll` lets GitHub serve the static files directly. No additional hosting is needed. After changing CSS or JavaScript, increment the `?v=` asset version in the HTML to refresh cached assets for returning visitors.

The old writing pages have been removed from the published site. Earlier versions remain recoverable in Git history.

See [asset notes](assets/README.md) for font licenses and the illustration prompt.
