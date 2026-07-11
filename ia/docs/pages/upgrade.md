# Node 7.2 - Upgrade / paywall

*Dialog node, a pure 0.5 Dialog instance, operator-facing. Source of truth for ia/upgrade.html. Cluster 7 Owner share and upgrade, type: dialog, surface [op] operator app. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). Opened from 7.1 Invite owner + upgrade. It is item 8 and the business model in the product.*

## Dialog: Upgrade / paywall (7.2)

**Purpose:** take the payment that unlocks the owner dashboard, in a focused modal over 7.1. The operator confirms the tier, sees the seats and the price computed from team size, enters payment, and upgrades. Because it is a paywall, the recoverable exit ("Stay on Free") is always present, so the operator is never trapped and never charged by surprise. **Jobs:** item 8 (the paid unlock) and the business model. Persona: Priya (operator), upgrading to give Marcus the owner a dashboard.

**URL / slug:** no standalone route; it is a modal over `/app/owner/invite` (7.1). **Reached from:** 7.1 Invite owner + upgrade (Upgrade and invite, free plan). **Forward:** 7.3 Payment failed (on failure), 7.0 Share with owner (recoverable exit, F3 DE3), and on success it closes and the 7.1 invite proceeds (toward 9.0 Owner dashboard).

### Content blocks (mobile-first priority)

1. **Dialog title and close**: "Upgrade to Starter" with a close control. The close is the same as Stay on Free: a no-charge exit.
2. **Tier**: the Starter tier and the one line that matters here, the owner dashboard is included (0.6 tiers). This is the tier that unlocks owner visibility.
3. **Seats**: the number of seats, prefilled from the current team size, with the per-seat price. Per-seat pricing, so seats drive the total.
4. **Price**: the computed monthly total (seats times per-seat price), billed monthly. Pricing is a hypothesis [?], benchmarked.
5. **Payment**: a card block (card number, expiry, security code). In production this is a payment-provider element; here it is the structural place for it.
6. **Primary and recoverable exit**: "Upgrade now" (pay) as the primary; "Stay on Free" as the always-present recoverable exit back to 7.0. On failure the dialog routes to 7.3.

### Components used

The canonical 0.5 Dialog / modal shell (scrim, centered modal on desktop, bottom sheet on mobile, with the full a11y contract), the 0.6 plan tier reference (Starter), and standard payment inputs. No new global is invented; this is a 0.5 instance, registered as a 0.5 consumer.

### States

- **Default:** tier (Starter, owner dashboard included), seats prefilled from team size, the computed price, the payment block, Upgrade now, and Stay on Free.
- **Seats changed:** the price total recomputes from the new seat count.
- **Processing payment:** Upgrade now shows an in-progress state; inputs lock; the exit stays available until the charge is submitted.
- **Success:** the dialog closes, the upgrade is applied, and the 7.1 invite proceeds (the owner dashboard is now available, toward 9.0).
- **Failure:** to 7.3 Payment failed (recoverable, with retry and a stay-on-free option), never a hard stop.
- **Stay on Free / close / Esc / scrim click:** dismiss with no charge, returning to 7.0 (the recoverable exit, F3 DE3).

### Primary CTA

Upgrade now (pay the computed monthly total). Stay on Free is the always-present recoverable exit. The paywall is honest: the price is shown before payment, the exit is never hidden, and a failure recovers rather than traps.

### Accessibility (0.5 dialog contract)

`role="dialog"`, `aria-modal="true"`, labelled by the dialog title; focus moves into the dialog on open and is trapped within it; Esc closes (equals Stay on Free); the background (7.1) is inert; on close, focus returns to the opener (the Upgrade and invite control on 7.1). The price and any error are conveyed in text, not by color alone.

### Adaptive (mobile-first)

- **Mobile, base 360px:** a bottom sheet with a grab handle, the tier and seats, the price, the payment block, then Upgrade now and Stay on Free. Single column; the sheet scrolls internally if the payment block is tall; nothing horizontally scrolls.
- **Desktop, 900px and up:** a centered modal over the dimmed 7.1, the same content in one column.

### SEO block (noindex)

Upgrade or paywall is a modal inside the authenticated operator app. It is not indexed and carries no schema.

- **robots:** `noindex, nofollow`. It has no standalone URL; it is a modal over 7.1.
- **schema.org / hreflang / OG:** none.
- **In-app findability (not SEO, still specified):** the dialog has an accessible name (the title); the price and any error are conveyed in text, not by color alone; the payment inputs are labelled; Upgrade now and Stay on Free are labelled controls; the exit is reachable by keyboard (Esc) and pointer; tap targets at least 44px.

## Canonical reuse and next

Upgrade or paywall is a pure 0.5 Dialog instance (registered as a 0.5 consumer) and reuses the 0.6 Starter tier; it invents nothing global. It is the business model in the product: an honest paywall with the price shown, the exit always present, and a failure that recovers to 7.3 rather than trapping. Next in cluster 7: 7.3 Payment failed (the recoverable error state), which closes cluster 7.
