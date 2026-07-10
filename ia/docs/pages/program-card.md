# Node 0.4 - Program card

*Global component (canonical element card). Source of truth for ia/program-card.html. Cluster 0, type: section (global component). The repeated program element across the library, onboarding, and detail. Defined once here and propagated to every listing that shows a program, so a change lands everywhere at once. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06).*

## Purpose and jobs

The single repeated unit for a wellbeing program. It serves Main and J6 (the operator browses and picks what to run) and item 2 (curated library). It closes no job of its own; it is the reusable card that the library grid, the onboarding recommendation, and the detail header all render. Defining it once prevents the fields and layout from drifting between those places.

Source: sitemap.md entities 2 (Program library) and 3 (Program); CLAUDE.md programs and check-in engine (the four categories: mental health, physical, financial, social). Category values come from the canonical list (0.6).

## Anatomy (element to behavior)

| Element | Behavior |
|---------|----------|
| Title | the program name; the card's accessible name |
| Category | one of mental health, physical, financial, social (from 0.6) |
| Cadence and duration | for example "weekly, 4 weeks" |
| Short description | one line, what it runs |
| "Recommended for your size" tag | contextual, shown in onboarding (3.1) and at the top of the library (5.0) when the company size matches |
| Status badge | draft / active / ended; only in operator manage contexts, never in the catalog browse |
| Questions count | how many check-in questions it carries (1 to 3) |
| Primary action | context-dependent: Select (library), Confirm (onboarding), Manage (detail) |
| Whole card | a single click or tap target to 5.1 Program detail |

## States and variants

| State | Where | What changes |
|-------|-------|--------------|
| **Default (catalog)** | 5.0 library browse | category + cadence + description + Select; no status badge |
| **Recommended** | 3.1 onboarding, top of 5.0 | carries the "recommended for your size" tag; action is Confirm in onboarding |
| **Active (running)** | 5.0 and 5.1 for the operator's live program | status = active, shows next cycle; action Manage |
| **Draft** | 5.0, 5.1 | status = draft; action "Finish setup" |
| **Ended** | 5.0, 5.1 | status = ended; action "View results" or "Reactivate" |
| **Skeleton (loading)** | 5.0 while loading | placeholder card, no content, no action |

The library empty state (no active program yet) is not a card state; it belongs to node 5.3.

## Where it is used (canonical copy set)

Recorded so a change to the card propagates to all copies:

- **3.1 First program confirm** renders one recommended card (Confirm action).
- **5.0 Program library** renders a grid of default cards, with recommended pinned at the top and status badges when the operator already runs programs.
- **5.1 Program detail / manage** renders the card as its header summary, then expands into full management.

Change the card here, then update all three. The library facet set that filters this grid is defined inside 5.0 (it is thin and not a standalone global), and it filters cards, it does not change them.

## SEO and accessibility

- The card is a component with no H1.
- In the operator app (noindex) the card is wayfinding. If a marketing "programs overview" or a 1.5 landing renders program cards, that instance is indexable; a schema.org type is decided with that page, not here.
- The whole card is one link with an accessible name (the title); the primary action is a nested control with its own label.
- Status and the recommended tag are text, not color-only; tap targets at least 44px.

## Adaptive (mobile-first)

- Mobile, base 360px: one column, full-width cards; title and category first, then cadence, then the action.
- Desktop, 900px and up: a 2 to 3 column grid; the recommended card can span or pin to the top.

## Canonical reuse

Defined once here, rendered by 3.1, 5.0, and 5.1. This is the single source of the program element. Paired global components: 0.1 Navigation, 0.2 Footer, 0.3 Privacy-disclosure. Next global component: 0.5 Dialog / modal shell.
