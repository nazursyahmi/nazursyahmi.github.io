# Portfolio improvement design

Date: 2026-11-16

## Intent
Help prospective clients and collaborators understand Nazur’s hardware, firmware, and IoT work through concrete project evidence. Preserve the existing visual identity and buildless HTML/CSS/JavaScript stack.

## Approaches
1. Improve the existing design and strengthen project evidence — selected by the user. Preserves familiar styling and concentrates effort on documented work.
2. Redesign visuals and content — broader effort with less immediate benefit to engineering credibility.
3. Prioritize job applications — would require a stronger employment narrative and verified career details.

## Changes
- Tighten the homepage introduction around connected hardware and the documented project scope.
- Give the two existing case studies prominence, with concise problem, contribution or scope, and outcome summaries.
- Remove unfinished PCB project cards from the homepage and project listing.
- Replace generic experience claims with clearly labeled engineering capabilities; do not imply employment history that is not supplied.
- Improve the datalogger case study’s explanation of architecture decisions, proof-of-concept scope, and evidence. Retain its hardware photos, diagrams, and dashboard images.
- Make the rice-machine case study’s existing personal contributions and registration-to-dispensing workflow easier to scan.
- Improve hierarchy, spacing, mobile readability, keyboard focus, and image presentation within the existing design.
- Keep navigation, résumé access, and contact links easy to find.

## Evidence and constraints
Use only facts already present in the repository. Preserve confidentiality qualifications. Do not invent test measurements, deployment scale, dates, employers, testimonials, ownership claims, or numerical impact. Distinguish documented behavior from measured performance. Keep existing project URLs and contact destinations.

## Implementation choices
Edit the existing static files; introduce no framework or runtime dependency. Choose small layout and wording details during implementation. This work updates the local repository; publication is outside this design.

## Verification
Check local links, image paths, heading structure, and JavaScript syntax. Review desktop and mobile rendering if browser tooling is available, including menu behavior, readable layouts, and keyboard access. Review the final diff for unsupported claims and unintended changes.

## Success
Visitors can quickly identify the developer’s focus, inspect two substantive projects, understand the documented engineering work and its limits, and reach the developer or résumé.
