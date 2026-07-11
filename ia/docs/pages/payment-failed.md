# Node 7.3 - Payment failed

*State node (error), the failed-payment state of the 7.2 Upgrade dialog. Source of truth for ia/payment-failed.html. Cluster 7 Owner share and upgrade, type: state (error), surface [op] operator app. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). Rendered in the same 0.5 modal as 7.2, with an error body. It is recoverable, not a trap (flow F3, dead-end guard DE3). This state closes cluster 7.*

## State: Payment failed (7.3)

**Purpose:** when a card is declined during the upgrade, say plainly what happened, reassure that no charge was made and the team stays on the free plan, and offer two clear ways forward: try again or stay free and retry later. A failed payment must never trap the operator or lose their place. **Jobs:** item 8 (the paid unlock) and the business model, in its failure path. Persona: Priya (operator), mid-upgrade, whose card just failed.

**URL / slug:** no standalone route; it is the error state of the 7.2 modal over `/app/owner/invite`. **Reached from:** 7.2 Upgrade or paywall (a declined or failed payment). **Forward:** 7.2 Upgrade (Try again, to re-enter or change payment) and 4.0 Dashboard (Stay on the free tier, retry later).

### Content blocks (mobile-first priority)

1. **Dialog title and close**: "Payment did not go through" with a close control. Close equals staying on the free tier: a no-charge exit to 4.0.
2. **Attention mark**: the same black-and-white attention badge as 2.3 (an exclamation, not a check), so error reads from success without color.
3. **Reason**: a plain, non-blaming reason for the decline ("your card was declined", or the processor's plain-language reason), so the operator knows what to fix.
4. **Reassurance**: "you have not been charged, and your team stays on the free plan", removing the fear that a failed attempt cost money or lost the account.
5. **Primary and recoverable exit**: "Try again" (to 7.2, re-enter or use a different card) as the primary; "Stay on the free tier, retry later" (to 4.0 Dashboard) as the always-present recoverable exit.

### Components used

The canonical 0.5 Dialog / modal shell (this is the error body of the 7.2 instance, not a second dialog), the attention mark and explanation layout reused from 2.3, and standard buttons. No new global is invented; because it is the error state of the 7.2 dialog, it is not registered as a separate 0.5 consumer.

### States

- **Default (declined):** the attention mark, the reason, the no-charge reassurance, Try again, and Stay on the free tier.
- **Try again:** to 7.2 Upgrade, with the payment step ready to re-enter or use a different card.
- **Stay on the free tier, retry later:** to 4.0 Dashboard; the free plan continues, and the owner can be invited again later from 7.0.
- **Close / Esc / scrim click:** dismiss with no charge, to 4.0 Dashboard (the recoverable exit, F3 DE3).
- **Repeated failure:** the same state, still recoverable; the reason updates, and Stay on the free tier is always there, so a bad card can never trap the operator.

### Primary CTA

Try again, to 7.2 Upgrade. Stay on the free tier, retry later is the always-present recoverable exit to 4.0. This is the concrete expression of the never-a-trap rule for the upgrade path (F3 DE3): a failed payment always has both a retry and a no-penalty way out.

### Accessibility (0.5 dialog contract)

`role="dialog"`, `aria-modal="true"`, labelled by the title; focus is trapped within the dialog; Esc closes (equals Stay on the free tier, to 4.0); the background is inert; on close, focus returns to the opener. The error and the reason are conveyed in text and an attention mark, not by color alone.

### Adaptive (mobile-first)

- **Mobile, base 360px:** a bottom sheet with the attention mark, the reason, the reassurance, then Try again and Stay on the free tier. Single column; nothing horizontally scrolls.
- **Desktop, 900px and up:** a centered modal over the dimmed 7.1, the same content in one column, matching 7.2 so the failure reads as a state of the same upgrade, not a new screen.

### SEO block (noindex)

Payment failed is a modal error state inside the authenticated operator app. It is not indexed and carries no schema.

- **robots:** `noindex, nofollow`. No standalone URL; it is the error state of the 7.2 modal.
- **schema.org / hreflang / OG:** none.
- **In-app findability (not SEO, still specified):** the dialog has an accessible name (the title) and the 0.5 a11y contract; the error and the reason are conveyed in text and an attention mark, not by color alone; Try again and Stay on the free tier are labelled controls; the exit is reachable by keyboard (Esc) and pointer; tap targets at least 44px.

## Canonical reuse and next

Payment failed is the error state of the 7.2 dialog (the same 0.5 modal, an error body) and reuses the 2.3 attention mark; it invents nothing global and is not a separate 0.5 consumer. It is the concrete guarantee that the upgrade path never traps (F3 DE3): a declined card always offers a retry and a no-penalty way back to the free tier. This state closes cluster 7 Owner share and upgrade (7.0 Share with owner, 7.1 Invite owner + upgrade, 7.2 Upgrade / paywall, 7.3 Payment failed). Next cluster in the Step 5 build order: cluster 9 Owner surface (9.0 Owner dashboard aggregate-only, then 9.1, 9.2 Monthly digest, 9.3).
