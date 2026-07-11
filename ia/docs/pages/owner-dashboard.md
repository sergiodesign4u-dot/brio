# Node 9.0 - Owner dashboard (with 9.1 privacy section and 9.3 empty state)

*Page node, the owner's surface. Source of truth for ia/owner-dashboard.html. Cluster 9 Owner surface, type: page, surface [O] owner (secondary, aggregate-only). Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is a deliberately minimal, one-read surface for a different persona (Marcus the owner): under 2 minutes, one screen, no navigation. It hosts the 9.1 "what I can and cannot see" section and the 9.3 score-not-ready empty state.*

## Page: Owner dashboard (9.0)

**Purpose:** give the owner a single, honest, aggregate-only read of team wellbeing in under two minutes: one number, whether it is up or down, and the plain-language meaning, with a clear statement of what the owner can and cannot see. This is the paid feature the operator unlocked in cluster 7. It is not a tool to operate; it is a read. **Jobs:** J1 (make the signal legible), J5 (prove value at the business level), item 8 (the paid feature). Persona: Marcus (owner), high on business, zero appetite for HR process detail, wants a number, a trend, and reassurance. Design Principle 5 (owner review under 2 minutes) and Principle 4 (honest signals over flattering ones).

**URL / slug:** `/owner` (owner surface, authenticated, separate from the operator app). **Breadcrumbs:** none. **No navigation tabs, by design:** the owner surface is a single read, not a set of tools; this is a deliberate contrast to the operator app's four job tabs. **Reached from:** the owner's magic-link or a bookmark, and re-entry from the 9.2 Monthly owner digest email. **Forward:** the 9.1 section is on this page; the 9.2 digest links back here.

### Content blocks (mobile-first priority)

1. **Minimal owner header**: the Brio mark and the company name, with an "Owner view" label. No job tabs.
2. **The pulse read (hero)**: a single plain-language level and one honest sentence ("Team wellbeing is steady this month", or, if it dipped, "Team wellbeing has dropped this month"). The one thing the owner came for. Honest, never a vanity metric (Principle 4).
3. **Trend**: a simple trend over the last several cycles, so the owner sees the direction at a glance.
4. **Participation**: as a share of the team (what portion is engaging), never who. This tells the owner the signal is real without exposing anyone.
5. **9.1 "What I can and cannot see"**: the canonical 0.3 Privacy-disclosure, owner variant, as two plain lists. Can see: the aggregate score, trend, participation share. Cannot see: individual responses, names, who answered, any drill-down. E2 owner comfort and item 4, the differentiator restated on the owner's own screen.
6. **Quiet footer note**: when the data updates and that the read takes under two minutes; a link to the latest digest (9.2).

### Components used

A minimal owner header (a distinct chrome, not the operator 0.1 nav), the pulse read (reusing the pulse element from 4.0 / 4.1 / 7.0), and the canonical 0.3 Privacy-disclosure owner variant (the 9.1 section). No new global is invented; 9.1 is a 0.3 variant, not a new component.

### States

- **Default (minimum-N met):** the pulse read, trend, participation share, and the 9.1 privacy section.
- **9.3 Owner score-not-ready empty (minimum-N not met):** the score area is replaced by "a score is not available yet, the privacy minimum of 5 responses has not been met", with no individual data and no partial number; the 9.1 privacy section still shows. This is the owner-facing expression of D1 and milestone MS2.
- **Trending down (honest signal):** the same structure with a plainly worded drop ("Team wellbeing has dropped this month"), never softened into a vanity metric.
- **Re-entry from the 9.2 digest:** the same page, reached from the monthly email link.
- **Access ended:** if the operator revoked owner access or downgraded, a plain "your access to this dashboard has ended" message, with no data shown.

### Primary CTA

There is no strong call to action, by design: the owner surface is a read, not a workflow. The only interaction is expanding or reading the 9.1 "what I can and cannot see" section. The owner is never upsold here (the operator is the buyer), which keeps the surface calm and trustworthy.

### Adaptive (mobile-first)

- **Mobile, base 360px:** the owner header, the pulse read, the trend, participation, then the 9.1 privacy section. Single column; the whole read fits a short scroll, since the owner often checks on a phone. Nothing horizontally scrolls.
- **Desktop, 900px and up:** the same content centered in a calm, narrow column; the pulse read is the visual anchor, with the privacy section below it. No sidebar, no tabs.

### SEO block (noindex)

Owner dashboard is an authenticated, private surface. It is not indexed and carries no schema.

- **robots:** `noindex, nofollow`. Private owner zone.
- **schema.org / hreflang / OG:** none.
- **In-app findability (not SEO, still specified):** exactly one H1 (the pulse reading or the page title) for the accessible document outline; the number and reading are text, not an image; participation is stated as a share, never as who; the "can see / cannot see" boundary is conveyed in text and labels, not by color alone; the empty state states the minimum-N reason in text; tap targets at least 44px.

## Canonical reuse and next

Owner dashboard reuses the pulse element and the 0.3 owner-variant privacy section (9.1); it invents nothing global, and its two sub-nodes (9.1 section, 9.3 empty state) live on this page. It is the calm counterpart to the operator app: one number, one honest sentence, one privacy statement, no navigation, under two minutes. It is where J5 (prove value) and E2 (owner comfort) are paid off, and where the aggregate-only promise is restated on the owner's own screen. Next in cluster 9: 9.2 Monthly owner digest (the email-to-view read that links back here), which then leaves only 9.x complete before the Employee cluster.
