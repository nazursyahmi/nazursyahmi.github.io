# BM/EN portfolio design

Status: implemented locally following the user's "Just implement" instruction to proceed without the remaining routine approval gates. No commit or deployment authorization is implied.

## Intent and approved requirements

Make the engineering portfolio readable in Bahasa Melayu and English across all seven existing pages. English is the first-visit default. Remember the chosen language across pages and later visits in the same browser. Translate navigation, public page copy, case studies, accessibility labels, and contact inquiry templates. Preserve the original resume and certificate documents, contact destinations, factual claims, current architecture, styling, and existing functionality.

## Approaches

The user selected a JavaScript language switch on the existing pages. It preserves current URLs and avoids duplicating seven documents. Separate English and BM pages were considered: they offer independent indexing and no-JavaScript BM access, but duplicate content and increase maintenance. The selected approach requires JavaScript for BM; source HTML, canonical URLs, and social previews remain English. No separate BM URLs or hreflang alternatives are claimed.

## UI design

Add a compact EN / BM button group beside the existing navigation, outside the collapsible links so it remains available on mobile. Reuse existing type, blue/white colors, rounded borders, and visible focus treatment. Buttons have minimum 44px touch targets, full accessible language names, and aria-pressed state. The active option uses fill and weight as well as color. On narrow screens the header can wrap without overlap or horizontal overflow. Preserve the brand and menu toggle. The already-approved white Courses & Professional Development heading remains white in either language.

## Interaction and language state

Switch text in place without reload, navigation, or moving keyboard focus. Preserve the current URL, fragment, expanded certificate groups, and open/closed navigation state. Use language codes en and ms; label the Malay option BM. Set document.documentElement.lang to the active language. Announce a completed language change using a small polite live region. Set the active state before announcing completion.

Use one namespaced localStorage preference. Accept only en or ms. First visit or invalid/missing values use English. Catch storage errors; switching continues for the current page without persistence. With JavaScript disabled or unavailable, complete English content and usable links remain present and the nonfunctional language control is hidden. This is a browser preference, not an account setting or synchronised preference.

## Translation structure

Keep English source content in HTML. Use explicit translation keys on text spans and translatable attributes, with a shared vanilla JavaScript translation module and dictionary. Translate leaf text rather than replacing parent innerHTML, preserving icons, links, nested emphasis, event handlers, and semantic structure. Do not derive translation keys from display text. Missing BM entries fall back to original English rather than blank or undefined strings. Scope translations to public content; inert unfinished drafts are not published or expanded by the switch.

Preserve personal names, proper nouns, product/model names, code samples, original certificate titles, contact addresses and phone numbers. Translate surrounding headings, explanations, labels, image alternatives where meaningful, and link accessibility labels. Technical BM wording must retain the original meaning and qualifiers; do not create achievements, measurements, or promises. The selected language also controls mobile-menu open/close labels after every menu interaction.

## Contact templates

Generate WhatsApp query text and email subject/body from the active language using URL encoding. Preserve verified destinations and each link's existing direct-versus-template intent. Neither channel sends anything automatically. Visitors can edit drafts before sending. Original English templates remain unchanged when EN is selected.

## Files and boundaries

Expected application files: index.html, contact.html, notes.html, projects.html, projects/smart-iot-datalogger.html, projects/smart-rice-machine.html, 404.html, assets/css/site.css, assets/js/site.js, and a new shared assets/js/i18n.js. README documentation may describe the language feature. Load root-relative assets on 404 and correct relative paths on nested case studies. No frameworks, dependencies, backend, build system, new routes, or document/image changes. Do not edit AGENTS.md or unrelated work. No staging, commit, push, or deployment is included.

## Validation and acceptance

Verify both languages on seven pages, translation-key coverage, English fallback, invalid/unavailable storage, cross-page persistence, document language, translated menu states, preserved icons/markup and expanded groups, and encoded contact templates. Check 375px, 768px, and 1280px where browser access permits, including long BM labels. Check keyboard focus, pressed states, and live announcements. Run HTML/link/image checks, JavaScript syntax, CSS integrity, and Git diff checks. Confirm English canonical/social metadata remains correct. Mark browser or assistive-technology checks Not Verified if unavailable; do not infer success from static checks.

## Outstanding decisions

No outstanding implementation decisions. Translation wording remains subject to the user's final language review. The user waived the remaining routine gates for this change; staging, committing, pushing, and deploying remain outside this implementation.
