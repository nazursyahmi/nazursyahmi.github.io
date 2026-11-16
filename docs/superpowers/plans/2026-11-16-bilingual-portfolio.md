# Bilingual portfolio implementation

Ruling: the user's "Just implement" overrides the remaining routine approval gates for this change. Execute locally; do not stage, commit, push, or deploy. Preserve the approved heading correction and all unrelated work.

Design: ../specs/2026-11-16-bilingual-portfolio-design.md.

1. Add behavior and seven-page integration tests using Node's built-in test runner; confirm the absent feature fails.
2. Add a shared vanilla JavaScript dictionary and language controller. Preserve English source text, nested markup, original contact URLs, and resilient local preference storage.
3. Annotate existing public text/attributes with explicit keys, add accessible progressive EN/BM controls to all seven pages, load translations before shared navigation, and synchronize dynamic menu labels.
4. Add narrowly scoped responsive control styling; preserve white training heading. Document translation maintenance and English SEO fallback in README.
5. Run behavior, coverage, HTML, local-link/image, CSS integrity, JavaScript syntax, and Git checks. Attempt browser validation; report unavailable tests. Obtain a final independent code review and resolve confirmed issues within scope.

## Execution and validation

Completed all five steps locally. Added 377 shared BM dictionary entries and explicit annotations for 403 direct text-node slots across seven pages. Translations update text nodes and selected attributes without replacing markup. The status region precedes module initialization; a regression assertion covers this ordering.

Four Node tests pass, covering seven-page script/control integration, complete key coverage, English defaults and exact restoration, persisted BM selection, invalid/blocked storage, translated draft URLs, and dynamic menu labels. JavaScript syntax checks pass for both shared scripts. Structural checks pass for seven HTML pages, 136 local paths/fragments, 17 image dimensions/alt attributes, all text-node/key counts, and CSS delimiter integrity. Comparison against HEAD confirms all original English text and original HTML elements/attributes are preserved. Git diff whitespace checks pass (Git reports line-ending conversion advisories).

A fresh independent code review found no confirmed important defects. Browser access timed out, so responsive rendering, real keyboard interaction, assistive-technology announcements, and BM draft application handoffs remain Not Verified. Existing user-confirmed English handoffs were not repeated. Translation wording requires final user review; original certificate titles, documents, names, model identifiers, code, and inert drafts remain unchanged. No staging, commit, push, deployment, or dependency installation was performed.
