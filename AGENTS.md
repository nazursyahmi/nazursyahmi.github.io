# Project guidance

Static website using HTML, CSS, JavaScript, Bootstrap 5.3.3, and Bootstrap Icons.

## Before implementation

1. Before developing a new feature, interview the user one question at a time until requirements are clear.
2. Clearly separate confirmed requirements, assumptions, and unanswered questions.
3. Review relevant documents in `docs/superpowers/` and `notes/git-workflow.md` before planning changes.
4. Propose an implementation plan and wait for user approval before modifying application code.
5. For visual changes, also present a UI design proposal and wait for approval before implementation.

## During implementation

6. Preserve existing pages, functionality, responsive behavior, accessibility, and working links.
7. Do not introduce frameworks, dependencies, or build tools without user approval.
8. Make small, focused changes and avoid unrelated refactoring.

## Validation and handoff

9. Validate relevant links, responsive layouts, accessibility, and JavaScript behavior. Report which checks were actually performed and which remain untested.
10. After implementation, summarize changed files, results, risks, and next steps.

## Approved development workflow

Follow these stages in order, with separate approval gates:

1. `requirements-interview` — discover requirements and obtain approval of the requirements summary before moving to design.
2. `superpowers:brainstorming` — develop the design and obtain separate design approval before implementation planning. Include a UI design proposal for visual changes.
3. `superpowers:writing-plans` — prepare the implementation plan and obtain separate approval of that plan.
4. `superpowers:executing-plans` — implement the approved plan only after separate, explicit authorization to implement.
5. Use appropriate Superpowers skills for testing, debugging, code review, and verification, including `superpowers:test-driven-development`, `superpowers:systematic-debugging`, `superpowers:requesting-code-review`, `superpowers:receiving-code-review`, and `superpowers:verification-before-completion` as applicable.

Approval of one stage does not approve any other stage or authorize implementation. Preserve all existing instructions and confirmed requirements throughout the workflow.

Do not commit, merge, or deploy without separate authorization for each action.
