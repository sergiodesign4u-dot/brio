# Node 5.2 - Check-in setup (questions, cadence)

*Page node. Source of truth for ia/check-in-setup.html. Cluster 5 Programs, type: page, surface [op] operator app. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is the first page where the privacy mechanics of founder decision D1 (minimum-N and no-live-count) become visible in the product UI, not just a policy.*

## Page: Check-in setup (5.2)

**Purpose:** the operator configures the recurring check-in a program runs: which 1 to 3 questions the team sees, each question's answer type, and the cadence. This is also where the privacy guarantees are made concrete, so the operator understands and can stand behind them. **Jobs:** J2 (know if the team is struggling early, the cadence and questions feed the pulse), J4 (the configured check-in stays under 30 seconds for the employee), item 3 (low-effort check-in). Persona: Priya (operator).

**URL / slug:** `/app/programs/:slug/check-in` (setup nested under the program), operator app. **Breadcrumbs:** `Programs / [program name] / Check-in`. Back returns to 5.1.

**Reached from:** 5.1 Program detail (Finish setup when draft, Edit check-in when active); onboarding may route through it for the first program. **Forward:** 4.1 Team pulse detail (Save then see where results will appear); back to 5.1.

### Content blocks (mobile-first priority)

1. **Nav + header** (0.1 operator, Programs active): H1 "Set up the check-in", subhead naming the program. Back to 5.1. First screen on mobile.
2. **Question picker**: a short curated list for the program's category; the operator selects 1 to 3, with a live "N of 3 selected" counter. Each selected question carries a type control, emoji or slider. Curated, not free-text authoring (that keeps the employee check-in low-effort and consistent). This is the item 3 / J4 surface.
3. **Cadence**: weekly in the MVP (the free tier is weekly, one question). Shown as a fixed weekly cadence with an optional send day; heavier cadences are deferred [?].
4. **Privacy mechanics (D1), the key block**: two fixed, non-configurable statements, phrased plainly, not toggles.
   - **Minimum-N of 5:** "No score appears until at least 5 people have answered." Protects against identifying anyone in a small team.
   - **No live count:** "While a cycle is open, no one, not you and not the team, sees a running count of who has answered." Closes the small-team timing-inference vector (founder decision D1, June 2026, research/strategy.md Section 5).
   These are structural, so they are stated, not offered as settings (Design Principle 1: privacy is not a switch you can turn off).
5. **Employee preview**: a small preview of what the team will see, a short near-anonymous check-in under 30 seconds with the privacy note before the first question (links to the 10.x employee surface and the 0.3 employee variant). Reinforces J3 and the trust that drives honest answers.
6. **Save band**: Save (primary) writes the configuration and, for a draft program, activates it; then to 4.1 Team pulse detail (where results will appear), or back to 5.1.
7. **App shell footer** (minimal): privacy link (1.1) and help.

### Components used

0.1 Navigation (operator, Programs active), 0.3 Privacy-disclosure (operator variant for the D1 mechanics block, and the employee variant referenced in the preview), 0.6 Canonical lists (answer types, cadence values). The question picker and cadence control are page-specific form controls, thin, not globals. No new global component is invented.

### States

- **New setup (from a draft program):** nothing selected yet; Save is disabled until at least 1 question is chosen. Activating the program depends on completing this.
- **Edit (from an active program):** pre-filled with the current questions, types, and cadence; Save updates them for the next cycle, not the open one.
- **Validation:** at least 1 and at most 3 questions; selecting a fourth is blocked with a hint; a type is required per selected question.
- **Loading:** skeleton form until the program and its current config resolve.
- **Error:** "Could not save, retry" plus the form stays filled, never a dead-end (MS4).
- **Guest / Owner:** redirect to 2.1 Log in / 9.0 Owner dashboard.

### Primary CTA

Save the check-in to 4.1 Team pulse detail (where results appear once minimum-N is met); back to 5.1 as the secondary path.

### Adaptive (mobile-first)

- **Mobile, base 360px:** header, then the question list stacked (checkbox, text, type control per row), cadence, the privacy mechanics block, the employee preview, and Save. Single column; Save reachable by thumb.
- **Desktop, 900px and up:** a two-column form, the question picker and cadence on the left, the privacy mechanics block and employee preview on the right, Save under the picker.

### SEO block (noindex)

Check-in setup is inside the operator app, an authenticated per-account view. It is not indexed and carries no schema.

- **robots:** `noindex, nofollow`. No canonical for search, no hreflang, no Open Graph, no schema.org.
- **In-app findability (not SEO, still specified):** exactly one H1 ("Set up the check-in") for the accessible document outline; the question checkboxes and type controls are labeled form controls with a group label; the "N of 3 selected" counter is a live region; the privacy statements are plain text, not color-only; tap targets at least 44px.

## Canonical reuse and next

Check-in setup reuses 0.1, 0.3, and 0.6 and invents nothing global; the question picker and cadence control are thin page-specific form controls. This page closes the Programs cluster (5.0 to 5.3) and is where D1's privacy mechanics first appear in the UI. Next: cluster 4, the Dashboard and pulse (4.0 Dashboard, then 4.1 Team pulse detail), where those mechanics pay off as the aggregate signal.
