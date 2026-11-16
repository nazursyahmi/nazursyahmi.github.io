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

## Languages

All seven HTML pages offer an EN / BM switch. English is the default; `portfolio.language` in browser local storage remembers `en` or `ms`. If storage is blocked, switching works for the current page. Without JavaScript, the complete English page remains usable and the language controls stay hidden.

`assets/js/i18n.js` contains the Bahasa Melayu dictionary and updates existing text nodes through explicit `data-i18n-text` keys. Keys correspond to the element's nonempty direct text nodes in order; `-` leaves a node unchanged. Attribute keys use `data-i18n-aria-label` or `data-i18n-alt`. Preserve the original English text in HTML and add or update dictionary entries whenever copy changes. Do not translate certificate titles, personal names, device identifiers, code, or original documents.

Contact draft templates follow the selected language; recipients and the original English URLs remain unchanged. Page URLs, source metadata, canonical links, and social previews remain English; this implementation does not provide separately indexed BM pages.

Run `node --test tests/i18n.test.cjs` for language behavior and seven-page integration checks. Also visually review both languages on mobile and desktop, especially longer Malay labels, before publishing.

## GitHub Pages publishing

This is the root user site, using real `.html` paths without client-side routing. The custom 404 uses root-relative links so recovery works for nested missing URLs. No build system or routing rewrite is required.

Repository Pages settings, deployment source, published revision, and live HTTP status must be checked in GitHub before release; they are not established by the local source. Deployment settings have not been changed. Commit, push, and deployment each require separate user authorization.
