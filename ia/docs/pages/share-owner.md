# Node 7.0 - Share with owner

*Page / section node, operator-facing, under the Owner tab. Source of truth for ia/share-owner.html. Cluster 7 Owner share and upgrade, type: page, surface [op] operator app. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is the operator's share moment: the paid-visibility decision (flow F3), fired contextually from a positive milestone on the Dashboard.*

## Page: Share with owner (7.0)

**Purpose:** let the operator give the owner a high-level, aggregate-only read of team wellbeing, and make the privacy boundary unmistakable before anyone is invited. The operator sees exactly what the owner will and will not see, then invites the owner. Because the owner dashboard is a paid feature, the invite gates on the plan: already paid goes straight to inviting, otherwise it routes to the upgrade (7.1). **Jobs:** J1 (make the signal legible and shareable), J5 (prove value at the business level to the owner), S2 (bring the owner in). Persona: Priya (operator, deciding to loop in Marcus the owner). Fires from a positive milestone on 4.0 Dashboard (F3).

**URL / slug:** `/app/owner` (operator app, Owner tab). **Breadcrumbs:** none; reached via the global Owner tab or a contextual prompt. **Reached from:** 4.0 Dashboard (contextual on a positive milestone, F3) and the global Owner tab. **Forward:** 7.1 Invite owner + upgrade (free plan, or paid unlock), 9.0 Owner dashboard (once the owner is live).

### Content blocks (mobile-first priority)

1. **0.1 Navigation**: the operator app nav with the Owner tab active.
2. **Heading and context**: a plain line ("Give your owner the big picture"), and when reached from a positive milestone, a contextual note ("Your team's pulse is trending up, a good moment to loop in your owner").
3. **What your owner will see (aggregate-only preview)**: the exact owner view rendered as a preview, the team score, trend, and participation as a share, reusing the pulse element from 4.0 / 4.1. Labelled clearly as the owner's view.
4. **The privacy boundary (sees / never sees)**: the canonical 0.3 Privacy-disclosure, owner-facing variant, as two plain lists. Sees: team score, trend, participation share. Never sees: individual responses, names, who answered, any drill-down. This is the differentiator, made visible in the product at the exact moment of sharing.
5. **Invite your owner (primary, with the plan gate)**: the primary action. If the operator is on a paid plan, it proceeds to invite the owner (owner email) toward 9.0. If on the free plan, it routes to 7.1, where the owner dashboard is unlocked. The paid nature is stated honestly here, not sprung later.

### Components used

0.1 Navigation (Owner tab active), 0.3 Privacy-disclosure (owner-facing variant, the sees / never-sees lists), and the pulse preview element reused from 4.0 / 4.1. No new global is invented; the sees / never-sees framing is a 0.3 variant, not a new component.

### States

- **Default, free plan:** preview, the sees / never-sees boundary, and Invite your owner routing to 7.1 (upgrade required), with the paid nature stated plainly.
- **Default, paid plan:** the same preview and boundary, and Invite your owner proceeds to the owner-email invite directly (toward 9.0).
- **Owner already invited or live:** the owner's access status is shown ("your owner has access"), with a link to 9.0 Owner dashboard and a way to manage or revoke access.
- **Pre-minimum-N (no aggregate yet):** if the team has not reached the minimum of 5 responses, the preview shows the same "waiting for 5" state the owner would see; sharing is still allowed, and the owner sees only that waiting state until N is met (honest, and consistent with 4.3 and D1).
- **Reached from a milestone:** the contextual positive-moment line is shown above the preview.

### Primary CTA

Invite your owner. On a paid plan it proceeds to invite directly; on the free plan it routes to 7.1 for the paid unlock. The value exchange is honest: the operator upgrades to give the owner visibility, and the privacy boundary is shown before any invite, never after.

### Adaptive (mobile-first)

- **Mobile, base 360px:** nav, heading and context, the aggregate-only preview, the sees / never-sees boundary, then Invite your owner. Single column; the preview and both boundary lists stack; nothing horizontally scrolls.
- **Desktop, 900px and up:** the preview and the boundary can sit side by side, with Invite your owner as the clear primary; the operator sees the owner view and the privacy boundary together.

### SEO block (noindex)

Share with owner is inside the authenticated operator app. It is not indexed and carries no schema.

- **robots:** `noindex, nofollow`. Deep app zone, like the Dashboard and Team surfaces.
- **schema.org / hreflang / OG:** none.
- **In-app findability (not SEO, still specified):** exactly one H1 (the heading) for the accessible document outline; the sees / never-sees boundary is conveyed in text and labels, not by color alone; the preview values are selectable text; Invite your owner is a labelled primary control that states when it leads to an upgrade; the plan gate is described in text; tap targets at least 44px.

## Canonical reuse and next

Share with owner reuses 0.1, the 0.3 owner-facing privacy variant (the sees / never-sees boundary), and the pulse preview from 4.0 / 4.1; it invents nothing global. It is the paid-visibility moment of flow F3, and it makes the aggregate-only promise visible in the product exactly where trust is spent: before the owner is invited, not in a policy afterward. Next in cluster 7: 7.1 Invite owner + upgrade (the owner email and the paid unlock), then the 7.2 Upgrade dialog and the 7.3 Payment failed state.
