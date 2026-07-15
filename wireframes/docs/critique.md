# Wireframes - Critique (Stage 04, Step 9)

*The final audit of the grey clickable prototype and the fixes that followed. Method: one static scan (raw color / shadow / image / icon-font / lorem across all files) plus three parallel read-only auditors over the whole set (Flow 1 + auth; public + programs; owner + settings + employee + system), each cross-checking every screen against its IA node spec (the "States" section and copy), ia/docs/sitemap.md, ia/docs/flows.md, and this contract. Defect taxonomy: vigilance-leak, lorem, missing-state, dead-end, zone-without-action, off-map, canonical-desync. Link resolution, em dash, one-H1, and robots were verified globally before the audit and are not re-listed here.*

---

## Result summary

Clean across the whole set for: **vigilance-leak 0, lorem 0, dead-end 0, zone-without-action 0, off-map 0.** The grey contract holds (the only non-token `#...` hits are the shape glyphs `&#10003;` and `&#215;`, not colors; dashed frames and skeleton bars are sanctioned wireframe textures). Every screen traces to a sitemap node; every flow branch has a visible exit.

The only defects were **state-coverage gaps** (IA "States" the fan-out missed) and **one canonical-data drift**. All were fixed.

---

## Defects found and fixed

### Class 1 - Missing states (10 files added, all IA-grounded)

Each state below is listed in the node's IA "States" section in ia/docs/pages/; none is invented. Every added state has a visible exit.

| Node | Missing state(s) | File(s) added | Exit |
|------|------------------|---------------|------|
| 4.2 Threshold alert | Loading, Error / not found, Recovered / stale | threshold-alert-loading.html, threshold-alert-error.html, threshold-alert-recovered.html | error and recovered link back to Dashboard (4.0) and the current pulse (4.1) |
| 5.1 Program detail | Loading, Error, Not found | program-detail-loading.html, program-detail-error.html, program-detail-notfound.html | retry, and back to the library (5.0) |
| 5.0 Program library | Error | program-library-error.html | retry, and back to Dashboard (4.0) |
| 5.2 Check-in setup | Error (form kept filled) | check-in-setup-error.html | Try again, and back to the program (5.1) |
| 1.3 Contact | Error (send failed, form kept filled) | contact-error.html | Try again, or email directly |
| 2.4 Reset password | Success (Password updated confirmation) | reset-password-success.html | Log in (2.1); the base form and the loading state now route here instead of straight to login |

### Class 2 - Canonical-data desync (1 fixed)

| Screen | Drift | Fix |
|--------|-------|-----|
| dashboard-alert.html | Showed 68% participation while every neighbor shows the canonical 72%. The threshold alert is driven by the score dip, which is independent of participation, so 68% introduced a second number for the same metric. | Set participation to 72% and reworded the line so the dip is the score, not participation. |

*Two earlier drifts were caught and fixed during the Step 8 reconcile, before this audit: checkin-privacy.html 74% to 72% (canonical participation), and magic-link-sent.html and link-expired.html robots follow to nofollow (per their IA specs, these are transient / dead-end states).*

---

## Post-fix verification

- Coverage: **47 of 47 screens built, 99 state pages, 0 in spec** (index.html coverage map, rendered from _nav.js).
- Links: **0 broken** across 100 html files; every internal `<a href>` resolves to an existing wireframe file.
- Grey contract: **0 greyscale leaks**, **0 shadows / images / icon-fonts / gradients**, spot-checked with computed styles on one screen per shell (public, auth, operator, owner, employee, banner, self-contained) plus every new state file.
- Structure: **exactly one H1** in all 100 files; overflow **0** at 360px and desktop; correct shell rendered; **0 console errors**.
- Formatting: **0 em dash** anywhere.
- The employee trust moment (10.1) carries the full privacy spine plus the "see exactly what your manager sees" expander; the owner surface (9.0 / 9.3) never shows a partial number below minimum-N; 500 and 503 render with no JS.

Nothing invented beyond the IA: every added state is quoted from a node's IA "States" section.
