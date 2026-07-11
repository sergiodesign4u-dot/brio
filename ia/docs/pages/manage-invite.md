# Node 6.1 - Resend or manage invite

*Dialog node. Source of truth for ia/manage-invite.html. Cluster 6 Team, type: dialog (an instance of the 0.5 modal shell), surface [op] operator app. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is roster-identity administration only; it never touches answer identity.*

## Dialog: Resend or manage invite (6.1)

**Purpose:** let the operator act on a single invite, resend it, copy its link, or revoke it, without leaving the roster. **Jobs:** supports the main job (running wellbeing) by keeping the team roster current. Persona: Priya (operator).

**Type and shell:** a dialog rendered by 0.5 (the canonical modal shell), so it inherits the 0.5 accessibility contract. Not a page; noindex, no URL of its own, no SEO block.

**Opened from:** the Manage or Resend action on a member row in 6.0 Team roster. **On close:** focus returns to the row control that opened it (0.5 contract). **Returns to:** 6.0.

### Dialog content blocks

1. **Title**: "Manage invite" plus the member's name or email.
2. **Member summary**: name or email and status (invited or joined). Roster identity only.
3. **Actions, by status** (see variants).
4. **Dismiss**: Cancel or the close control; Esc also closes.

### Variants

- **Pending invite (status invited):** actions are Resend invite, Copy invite link, and Revoke invite (destructive). Revoke uses an inline confirm step inside the same dialog, not a second stacked modal.
- **Joined member (status joined):** action is Remove from team (destructive, inline confirm). Copy and resend do not apply.

### Components used

0.5 Dialog / modal shell (this node is an instance of it). No new component is invented; 6.1 is the already-registered 0.5 consumer that 6.0 opens.

### Privacy: this manages the roster, not answers

Managing or revoking an invite is roster-identity administration, which is allowed. It never reveals or touches answer identity. Removing a joined member affects future participation only; their past contributions were only ever aggregate and were never stored as an identifiable individual record, so there is nothing individual to expose or delete. The dialog says this plainly next to a destructive action.

### States

- **Default (pending invite):** Resend, Copy link, Revoke.
- **Joined member:** Remove from team.
- **Revoke / remove confirm (inline):** "Revoke this invite?" or "Remove from the team?" with Confirm and Cancel, inside the same dialog. Reversible where possible (re-invite later).
- **Sending:** the action control shows a sending state; the dialog stays open.
- **Success:** a brief confirmation ("Invite resent"), then the dialog closes or updates the row.
- **Error:** "Could not resend, retry," the dialog stays open, never a dead-end.

### Primary action

Resend invite (pending) is the primary; Revoke or Remove is the destructive secondary, always behind an inline confirm.

### Accessibility contract (from 0.5)

`role="dialog"`, `aria-modal="true"`, labelled by the title; focus moves into the dialog on open and is trapped; Esc closes; the background is inert; on close, focus returns to the opener. The destructive confirm is reachable by keyboard and clearly labelled; tap targets at least 44px.

### Adaptive (mobile-first)

- **Mobile, base 360px:** a full-width sheet from the bottom, actions stacked, comfortable tap targets.
- **Desktop, 900px and up:** a centered modal over an inert, dimmed roster, per 0.5.

## Canonical reuse and next

Resend or manage invite is a pure instance of 0.5; it invents nothing and keeps roster identity separate from answer identity. It closes cluster 6 (Team: 6.0 roster, 6.1 manage). Next: cluster 3, the onboarding wizard (3.0 Welcome / company size, 3.1 First program confirm, 3.2 Invite team, 3.3 Invite-send error), the guided first run for a brand-new operator.
