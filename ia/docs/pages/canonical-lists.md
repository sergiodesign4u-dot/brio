# Node 0.6 - Canonical lists

*Global component (reference node). Source of truth for ia/canonical-lists.html. Cluster 0, type: section (global reference). The single source for value lists that several pages consume, so a change is made once and propagates. This is a reference, not a visual surface; it renders as tables. Language: English (US).*

## Purpose

Values that repeat in more than one place (program categories, plan tiers, company sizes, statuses) are defined once here and referenced, never re-typed per page. When the canon changes, the change is made here and pushed to every consumer in the "consumed by" column. Brio has no catalog tree, so this replaces what a taxonomy node would be for a shop.

## L1 - Program categories

The four wellbeing domains. Source: CLAUDE.md (programs and check-in engine).

| Value | Consumed by |
|-------|-------------|
| Mental health | 0.4 program card, 5.0 library facets, 1.5 category landing |
| Physical | 0.4, 5.0, 1.5 |
| Financial | 0.4, 5.0, 1.5 |
| Social | 0.4, 5.0, 1.5 |

Fixed set for MVP. New categories are a product decision, not an IA one.

## L2 - Plan tiers

Source: CLAUDE.md business model. All prices are hypotheses [?], benchmarked in research/docs/competitors.md.

| Tier | Seats | Key unlocks | Price [?] |
|------|-------|-------------|-----------|
| Free | up to 10 | 1 active program, weekly 1-question pulse, aggregate to operator only, 3 to 5 programs | 0 |
| Starter | up to 50 | full library, full pulse with trends, owner dashboard, custom nudge scheduling | ~4 to 6 per seat / month [?] |
| Growth | 50 to 200+ | multi-team aggregation, advanced trend analytics, integrations, priority support | ~8 to 10 per seat / month [?] |

Consumed by: 1.0 Pricing, 7.2 Upgrade, 8.1 Plan and subscription. The owner dashboard being a paid unlock is a fixed product rule.

## L3 - Company-size buckets

Used to pre-select the first program at onboarding (3.0, J6) and to power the "recommended for your size" tag (0.4). Company range is 10 to 200, no HR (CLAUDE.md). The exact cut points are a design default [?], to validate; the structure (size drives a recommended program) is fixed.

| Bucket [?] | Notes |
|------------|-------|
| 10 to 24 | smallest teams; minimum-N of 5 is a real constraint here (ties to F1 sub-N path) |
| 25 to 49 | |
| 50 to 99 | |
| 100 to 200+ | |

The mapping of a size bucket to a specific recommended program is [?] pending product and content; only the mechanism is fixed here.

## L4 - Input types, cadence, and statuses

Small enumerations reused across the check-in and program nodes. Source: sitemap.md entities 3, 5, 6.

- **Check-in input types:** emoji scale, slider. Consumed by 5.2 Check-in setup, 10.2 Questions.
- **Cadence:** weekly (MVP default). Consumed by 5.2, 5.1. Other cadences are LATER / paid (custom nudge, item 11).
- **Program status:** draft, active, ended. Consumed by 0.4 card badge, 5.0, 5.1.
- **Cycle status:** open, closed. Consumed by 4.4, 5.2, and the pulse computation. No live count while open (D1).

## Consumption map and change rule

Every value above lists its consumers. To change a canonical value: edit it here, then update each node in its "consumed by" list. Do not redefine a list inside a page; reference this node.

## Gate

With 0.6 defined, the global and structural components are exhausted: 0.1 Navigation, 0.2 Footer, 0.3 Privacy-disclosure, 0.4 Program card, 0.5 Dialog shell, 0.6 Canonical lists. No taxonomy tree (Brio has no catalog). The phase now moves to the pages, starting with Home (0.0) as the exemplar at Step 4.
