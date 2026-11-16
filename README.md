# Engineering portfolio

Static portfolio for Ts Muhammad Nazur Syahmi at https://nazursyahmi.github.io.

## Structure

- `index.html`: introduction, services, engineering evidence, credentials, and contact links.
- `projects.html` and `projects/`: project listing and two engineering case studies.
- `contact.html`: editable WhatsApp and email inquiry templates; no backend.
- `notes.html`: completed note and inert `<template>` elements preserving unfinished drafts.
- `assets/css/site.css` and `assets/js/site.js`: shared styling and navigation/reveal behavior.
- `doc/`: public résumé and certificate documents. See `doc/certifications/README.md` for privacy rules.
- `sitemap.xml`, `robots.txt`, and `404.html`: search discovery and missing-page recovery.

## Local preview

No build or package installation is needed. With Python already installed, run `python -m http.server 8000` from this directory and open `http://localhost:8000/`.

The site uses Bootstrap 5.3.3 CSS, Bootstrap Icons pinned to 1.11.3, and Google Fonts. Internet access is needed for those external resources. No Bootstrap JavaScript bundle is required.

## Maintenance and validation

- Keep titles, descriptions, canonical/social metadata, and `sitemap.xml` aligned with public URLs.
- Keep contact templates consistent with `contact.html`. Links open a draft; visitors send messages themselves.
- Preserve original project images. Lossless WebP copies are served where smaller; do not downsample engineering diagrams without checking readability.
- Decorative motion previews use a static first frame; the original GIF remains available in the repository.
- Run `node --check assets/js/site.js` and `git diff --check`.
- Verify internal paths and fragments, keyboard navigation, and layouts at 375px, 768px, and 1280px.
- Inspect public documents and screenshots for private details before publication. `.gitignore` does not remove files from earlier history.

## GitHub Pages

This is the root user site, using real `.html` paths without client-side routing. The custom 404 uses root-relative links so recovery works for nested missing URLs. No build system or routing rewrite is required.

Repository Pages settings, deployment source, published revision, and live HTTP status must be checked in GitHub before release; they are not established by the local source. Deployment settings have not been changed. Commit, push, and deployment each require separate user authorization.
