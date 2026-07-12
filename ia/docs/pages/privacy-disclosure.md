# Node 0.3 - Privacy-disclosure component

*Global component (canonical). Source of truth for ia/privacy-disclosure.html. Cluster 0, type: section (global component). Brio's differentiator made into UI. Defined once here and rendered in role variants on the employee, operator, and owner surfaces, plus the public explainer. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06).*

## Purpose and jobs

This is the product. In an SMB there is no HR layer between the boss and personal data, so the privacy boundary has to be shown in the UI, not promised in a policy (the benchmark strategic dimension). The component carries the same canonical privacy promise everywhere it appears and reframes it per role. It serves J3 (certainty of privacy before responding), E2 (supported, not monitored), item 4 (clear statement of what the owner can and cannot see), and it is the trust gate for H2 (participation at or above 65%, still [?]). It closes no job of its own and carries no H1.

## Canonical privacy spine (the same five claims everywhere)

1. **Aggregate only.** No named responses, ever. No individual timeline, no drill-down.
2. **Minimum-N of 5.** No score is shown until at least 5 people have responded (indirect-identification protection, benchmarked to Culture Amp).
3. **No live count during an open cycle.** The operator and the employee never see a running tally while a cycle is open, which closes the small-team timing-inference vector (founder decision D1).
4. **Subscription as privacy.** The owner pays for aggregate insight; the business model is aligned with never exposing individual data, and this is stated plainly.
5. **What the owner can and cannot see**, listed explicitly (can: team score, trend, participation rate; cannot: any individual, any answer, any sub-group below N).

The five claims are fixed. The exact wording is [?] pending final UX and legal copy; the claims themselves do not change. The public (1.1) and legal (1.6) instances additionally carry a data-handling commitment (individual data is never shown or sold), a sanctioned public and legal-only extension consistent with the 11.3 Cookie consent claim-4 reconciliation; it is deliberately not repeated on the in-product operator, owner, and employee renders, which focus on who can see what.

Source: research/strategy.md Section 5 (founder decision D1, no live count), research/docs/benchmark.md (minimum-N, indirect identification), user-research/docs/cjm-to-be.md (privacy bundle), CLAUDE.md privacy mechanism.

## Role variants

| Variant | Where | Framing | What is different |
|---------|-------|---------|-------------------|
| **Employee (pre-Q1)** | 10.1, persistent before Question 1, every cycle | reassurance, "your answer" | leads with "no one sees your individual response"; your answer joins an aggregate of at least 5; results appear only after the cycle closes; includes the "see exactly what your manager sees" expander |
| **Operator (proof)** | 8.2 Privacy center, plus a summary at 3.1 onboarding confirm and on 4.0 Dashboard (DX2) | proof, "what you can and cannot see" | you see the team aggregate and participation rate, never who answered what; you cannot drill down |
| **Owner (comfort)** | 9.1, on the owner dashboard | comfort, "what you can and cannot see" | one number and a trend, aggregate only; you cannot see individuals, answers, or any sub-group below N |
| **Public (explainer)** | 1.1 Security and privacy, indexable | marketing, third-person | a fuller, crawlable version of the same five claims; the only indexable instance |

## Anatomy (element to behavior)

| Element | Behavior |
|---------|----------|
| Component heading | plain-language title, not an H1 |
| Claim list | the five claims, each an icon plus one plain sentence |
| Can / cannot panel | two columns, "can see" and "cannot see", role-framed |
| "See what your manager sees" | disclosure button (employee only), expands an aggregate-only mock |
| Below-minimum-N note | swaps the score claim for "results need at least 5 people" when the team is under N (ties to 4.3, 9.3, and the F1 sub-N path) |
| Action | Continue (employee), Close (operator, owner) |

## States

- **Default:** the five claims and the can / cannot panel.
- **Expanded (employee):** the "see exactly what your manager sees" mock, an aggregate-only preview, so the promise is shown, not just told.
- **Below minimum-N:** the score claim is replaced by the "at least 5 people" explanation; no live count is still enforced. This is the honest limit surfaced, not hidden.

## SEO and accessibility

- No H1; it is a component, not a page.
- On the employee check-in and the operator and owner apps it is content in noindex zones, so it is not an SEO surface there. The **public 1.1 Security and privacy** page renders the indexable version of the same canonical content; the two must not drift.
- The expander is a disclosure widget: a `<button aria-expanded>` toggling a labelled region.
- The can / cannot panel uses semantic lists; the whole component is keyboard reachable and screen-reader legible.

## Adaptive (mobile-first)

- Mobile, base 360px: the claims stack; the can / cannot panel becomes two stacked blocks; the expander opens in place. On the employee check-in this is the first thing seen, before Question 1.
- Desktop, 900px and up: claims in a tighter list; can / cannot side by side.

## Canonical reuse

Defined once here. Rendered by 10.1 (employee), 8.2 and 3.1 and 4.0 (operator), 9.1 (owner), and 1.1 (public). Copy list of instances kept here; change the spine here and propagate to all five. This is the single source of the privacy-promise content. Paired global components: 0.1 Navigation, 0.2 Footer. Next global component: 0.4 Program card.
