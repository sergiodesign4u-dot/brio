# Node 8.1 - Plan / subscription

*Section node, inside the 8.0 Settings shell. Source of truth for ia/settings-plan.html. Cluster 8 Settings, type: section, surface [P] operator app (desktop-first in daily use, specified from the 360px baseline up). Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is the plan and billing section: where the operator sees the current tier, seats and usage, changes plan, and reviews invoices. All pricing is a hypothesis, flagged.*

## Section: Plan / subscription (8.1)

**Purpose:** give the operator a plain read of what they are on and what it costs, how many seats are used, a way to change plan, and a record of past charges. It is the billing home for the paying customer. **Jobs:** item 1 (business model, the tiers and pricing) and item 8 (the owner dashboard is the paid unlock, so the upgrade path lives here too). Persona: Priya (operator, the buyer). Design Principle 2 (make the operator feel in control, no billing jargon).

**URL / slug:** `/app/settings/plan`, operator app, rendered as the active section of the 8.0 shell. **Breadcrumbs:** `Settings / Plan`. **Reached from:** 8.0 Settings (the Plan row, the default section on desktop). **Forward:** 7.2 Upgrade or paywall (the same 0.5 modal) for a change of plan; back to 8.0.

### Content blocks (mobile-first priority)

1. **Section context**: inside the app chrome, "Settings / Plan"; on mobile a back to the Settings index.
2. **Current tier card**: which plan the account is on (Free, Starter, or Growth), the per-seat price (flagged a hypothesis), the billing cadence, and the next renewal date. The plain answer to "what am I paying and when".
3. **Seats and usage**: how many seats are used of the plan's limit (for example, 8 of 50), tied to team size, with a simple usage bar. This is the honest read that drives an upgrade before the limit is hit.
4. **Change plan**: the primary action, which opens 7.2 Upgrade or paywall (the same 0.5 modal) to upgrade, or to downgrade. Below it, the tier comparison (the 0.6 tiers via the 7.1 plan cards) with the current plan marked and a per-tier action.
5. **Invoices**: a list of past charges (date, amount as a hypothesis, download), so the operator has a billing record. Download is a stub at wireframe level.

### Components used

0.6 Canonical lists (the plan tiers Free, Starter, Growth, and their limits), the 7.1 plan cards (wf-plans and wf-plan, reused here as a vertical comparison), 7.2 Upgrade or paywall as the change-plan action (the same 0.5 modal), and the 8.0 Settings shell chrome (app chrome and the section pane). The current-tier card, the seats usage bar, and the invoices list are section-specific layout, thin, not globals. No new global component is invented; all pricing is flagged as a hypothesis, benchmarked in research/docs/competitors.md.

### States

- **Free plan:** current tier is Free; the emphasis is the upgrade path (Starter unlocks the owner dashboard, item 8); no invoices yet.
- **Paid plan (Starter or Growth):** current tier shown with renewal date and seats used; invoices present; change plan can upgrade or downgrade.
- **Near the seat limit:** the usage bar is close to full; a gentle prompt to upgrade before the limit is hit (never a hard block in this MVP).
- **Past-due / payment failed:** a banner links to fix billing, tying to 7.3 Payment failed; the plan stays active per the recovery rule.
- **Loading:** skeleton for the tier card, usage, and invoices while billing resolves.
- **Guest / Owner:** redirect to 2.1 Log in / 9.0 Owner dashboard (the owner does not manage the plan).

### Primary CTA

Change plan, which opens 7.2 Upgrade or paywall (the same 0.5 modal) to upgrade or downgrade. Managing invoices is secondary. The upgrade path is deliberately close, because the owner dashboard is the paid unlock (item 8) and the operator is the buyer.

### Adaptive (mobile-first)

- **Mobile, base 360px:** a back to the Settings index, then the current-tier card, the seats usage bar, Change plan, the tier comparison stacked, and the invoices list. Single column.
- **Desktop, 900px and up:** rendered in the 8.0 two-pane, the Plan section in the pane beside the settings section list; the tier comparison and invoices sit within the pane.

### SEO block (noindex)

Plan is inside the operator app, an authenticated per-account billing view. It is not indexed and carries no schema.

- **robots:** `noindex, nofollow`. No canonical for search, no hreflang, no Open Graph, no schema.org.
- **In-app findability (not SEO, still specified):** exactly one H1 ("Plan" within the settings outline) for the accessible document outline; the tier and price are text, not color-only; the seats usage is conveyed by a labelled value and a bar, not color alone; Change plan and Download are labelled controls; the hypothesis flag on pricing is text; tap targets at least 44px.

## Canonical reuse and next

Plan is the billing home: the current tier and price, seats and usage, a close upgrade path to 7.2, and an invoices record, all inside the 8.0 shell. It reuses 0.6 tiers, the 7.1 plan cards, 7.2 as the change action, and the shell chrome, and invents nothing global; all pricing is flagged a hypothesis. Next in cluster 8: 8.2 Privacy center (the operator-facing proof surface, the 0.3 privacy-disclosure operator variant), then 8.3 Notifications and 8.4 Account settings.
