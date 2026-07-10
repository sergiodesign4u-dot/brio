# Node 0.5 - Dialog / modal shell

*Global component (canonical shell). Source of truth for ia/dialog.html. Cluster 0, type: dialog (global component). One accessible modal contract, defined once, that every dialog instance in the product reuses. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06).*

## Purpose and jobs

Several nodes open a dialog: 6.1 Resend or manage invite, 7.2 Upgrade or paywall, 11.3 Cookie consent, and destructive confirmations (end a program, revoke a code, delete an account). Rather than re-specify a modal each time, the shell defines the chrome and the accessibility contract once; each instance is a variant that fills the body and the actions. It closes no job of its own and carries no H1.

## Anatomy (the shell)

| Part | Behavior |
|------|----------|
| Overlay / backdrop | dims the page and makes the background inert (no interaction behind it) |
| Container | `role="dialog"`, `aria-modal="true"`, centered on desktop, bottom sheet on mobile |
| Header | title (the accessible name via `aria-labelledby`) plus a close (X) control |
| Body | the variant's content slot (form fields, options, a confirm message) |
| Footer | actions: one primary and one secondary or cancel |
| Dismiss paths | close (X), Escape, and a backdrop click (except where a variant blocks it) |

## Variants (over the same shell)

| Variant | Instance | Body and actions |
|---------|----------|------------------|
| **Form** | 6.1 Resend or manage invite | fields (resend to selected, copy link, regenerate code); primary Send, secondary Close |
| **Decision** | 7.2 Upgrade or paywall | tier, seats, price; primary Upgrade, secondary "Stay free" (a recoverable exit, F3 DE3) |
| **Confirm (destructive)** | end a program, revoke a code, delete an account | a short message; primary is the destructive action, secondary Cancel, and Cancel holds the initial focus |
| **Non-modal banner** | 11.3 Cookie consent | borrows the shell chrome but is NOT a focus-trapping modal: a `role="region"` banner, because blocking the whole page for consent is user-hostile and "Reject" must be as easy as "Accept". Full spec and legal grounding at Step 6 |

## States

- **Default (open):** header, body, footer.
- **Loading:** an action is in progress (payment processing, invite sending); the primary button shows a busy state and is disabled, the dialog stays open.
- **Error:** the action failed; an inline message appears in the body, actions return to enabled (for example 7.3 Payment failed inside 7.2).
- **Success:** a brief confirmation, then the dialog closes and returns focus.

## Accessibility contract (grounded in WAI-ARIA APG)

- `role="dialog"` and `aria-modal="true"` on the container.
- Labelled by the visible title with `aria-labelledby` (or `aria-label` when there is no visible title); `aria-describedby` only for a simple single-message body.
- **On open:** focus moves to the first focusable element inside the dialog (or the dialog container). For a destructive confirm, focus goes to Cancel.
- **Focus trap:** Tab and Shift+Tab cycle within the dialog; focus cannot leave without closing.
- **On close:** focus returns to the element that opened the dialog.
- **Escape** closes the dialog; a backdrop click closes it too, unless a variant blocks accidental loss (for example an in-progress payment).
- **Background** is inert and visually dimmed; no interaction reaches it.

Source: WAI-ARIA Authoring Practices, Dialog (Modal) pattern, https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/.

## SEO

Dialogs open on interaction and are not indexable content; the shell is an accessibility and interaction contract, not an SEO surface. The 11.3 cookie banner is a special case handled at Step 6.

## Adaptive (mobile-first)

- Mobile, base 360px: the dialog becomes a bottom sheet, full width, sliding from the bottom, dismissible by the close control, Escape, or a downward drag. Actions stack, primary on top.
- Desktop, 900px and up: a centered modal over the dimmed page, actions in a row.

## Canonical reuse

Defined once here. Reused by 6.1, 7.2, 11.3, and every confirmation. Instances fill the body and actions but inherit the same chrome and the same accessibility contract; change the contract here and it holds everywhere. Paired global components: 0.1 Navigation, 0.2 Footer, 0.3 Privacy-disclosure, 0.4 Program card. Next global component: 0.6 Canonical lists.
