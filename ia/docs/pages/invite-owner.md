# Node 7.1 - Invite owner + upgrade

*Page node, operator-facing, under the Owner tab. Source of truth for ia/invite-owner.html. Cluster 7 Owner share and upgrade, type: page, surface [op] operator app. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is the paid unlock: the operator enters the owner's email and, on the free plan, upgrades to give the owner a dashboard. Reached from 7.0 Share with owner.*

## Page: Invite owner + upgrade (7.1)

**Purpose:** turn the intent from 7.0 into a real invite. The operator enters the owner's email, sees plainly that the owner dashboard is a paid feature, and either upgrades (free plan) or sends the invite directly (paid plan). The privacy boundary was already established on 7.0, so here the reminder is condensed and the focus is the email, the plan, and the unlock. **Jobs:** S2 (bring the owner in) and item 8 (the paid unlock, the business model). Persona: Priya (operator, inviting Marcus the owner and, if needed, upgrading).

**URL / slug:** `/app/owner/invite` (operator app, Owner tab). **Breadcrumbs:** none; reached from 7.0. **Reached from:** 7.0 Share with owner (Invite your owner). **Forward:** 7.2 Upgrade or paywall (the upgrade dialog, free plan), 9.2 Monthly owner digest (a preview of what the owner receives), and 9.0 Owner dashboard once the owner is live.

### Content blocks (mobile-first priority)

1. **0.1 Navigation**: the operator app nav with the Owner tab active.
2. **Heading**: "Invite your owner".
3. **Owner email field**: a labelled email field (and an optional owner name), so the invite reaches the right person.
4. **Plan comparison (owner dashboard = paid)**: a compact comparison of the current free plan and the paid Starter plan, with the owner dashboard shown as the paid unlock. Reuses the 0.6 canonical plan tiers. Pricing is a hypothesis [?], benchmarked against competitors.
5. **Condensed privacy reminder**: one 0.3 line ("your owner sees aggregate only, never individual data"), continuity with 7.0 without repeating the full boundary.
6. **Primary action (plan-dependent)**: on the free plan, "Upgrade and invite" opens the 7.2 Upgrade dialog; on a paid plan, "Send invite" sends the owner invite directly. On success, the "invite sent" confirmation.

### Components used

0.1 Navigation (Owner tab active), the 0.6 canonical plan tiers (the comparison), a condensed 0.3 privacy reminder, the 7.2 Upgrade dialog (opened from the primary action on the free plan), and the confirmation layout reused from 2.2 (the "invite sent" success). No new global is invented.

### States

- **Default, free plan:** email field, plan comparison with the owner dashboard as the paid unlock, condensed privacy reminder, and Upgrade and invite (opens 7.2).
- **Default, paid plan:** email field and Send invite, which sends the owner invite directly; no upgrade needed.
- **Email validation:** inline text for an invalid email (not color alone).
- **Upgrade dialog open:** the 7.2 Upgrade or paywall dialog; on payment failure it routes to 7.3, and a recoverable exit returns here (F3 DE3).
- **Sending / submitting:** the primary control shows an in-progress state; the field locks.
- **Confirmation (invite sent):** a success state, "your owner will get a link", with a way to preview what the owner receives (9.2 Monthly owner digest) and, once live, open 9.0 Owner dashboard.
- **Owner already has access:** the owner's status is shown, with manage or revoke, rather than a fresh invite.

### Primary CTA

On the free plan, Upgrade and invite (opens 7.2). On a paid plan, Send invite. The two are the same intent at different plan states; the operator is never surprised by the paywall, because 7.0 and the plan comparison here both state that the owner dashboard is paid before the action.

### Adaptive (mobile-first)

- **Mobile, base 360px:** nav, heading, the owner email field, the plan comparison stacked, the condensed privacy reminder, then the primary action. On confirmation, the success layout stacks: mark, message, and the two follow-on links. Single column, nothing horizontally scrolls.
- **Desktop, 900px and up:** the email field and the plan comparison can sit together, with the primary action as the clear next step.

### SEO block (noindex)

Invite owner and upgrade is inside the authenticated operator app. It is not indexed and carries no schema.

- **robots:** `noindex, nofollow`. Deep app zone, like the Dashboard, Team, and Share surfaces.
- **schema.org / hreflang / OG:** none.
- **In-app findability (not SEO, still specified):** exactly one H1 (the heading) for the accessible document outline; the email field is a labelled input; the plan comparison is a real table or list, not an image, and prices are text; the primary control states when it leads to an upgrade; the confirmation is conveyed in text, not by color alone; tap targets at least 44px.

## Canonical reuse and next

Invite owner and upgrade reuses 0.1, the 0.6 plan tiers, a condensed 0.3 reminder, the 7.2 Upgrade dialog, and the 2.2 confirmation layout; it invents nothing global. It is the paid unlock of flow F3 and the business model in the product: the operator upgrades to give the owner an aggregate-only dashboard, with the paywall never a surprise. Next in cluster 7: 7.2 Upgrade or paywall (the dialog, a 0.5 instance), then 7.3 Payment failed (recoverable, not a trap), which closes cluster 7.
