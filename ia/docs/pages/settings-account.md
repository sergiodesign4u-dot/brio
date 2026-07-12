# Node 8.4 - Account settings

*Section node, inside the 8.0 Settings shell, closes cluster 8. Source of truth for ia/settings-account.html. Cluster 8 Settings, type: section, surface [P] operator app (desktop-first in daily use, specified from the 360px baseline up). Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is the operator's identity and access section: name, email, password, magic link, sign out, and delete account (GDPR erasure), the last of which is a destructive action gated by the 0.5 confirm dialog.*

## Section: Account settings (8.4)

**Purpose:** let the operator manage their own identity and access: update their name and email, change their password or use a magic link, sign out, and, if they choose, delete their account and data (GDPR erasure). It is supporting infrastructure, but it carries the one destructive action in the app, so it is handled carefully. **Jobs:** supporting (identity and access); it also upholds the GDPR erasure boundary condition (individual responses must be deletable, and the account is fully erasable). Persona: Priya (operator). Design Principle 2 (clear and low-jargon, even for account admin).

**URL / slug:** `/app/settings/account`, operator app, rendered as the active section of the 8.0 shell. **Breadcrumbs:** `Settings / Account`. **Reached from:** 8.0 Settings (the Account row). **Forward:** sign out to 2.1 Log in; change email and change password open their own confirm flows (email verification reuses the 2.2 check-your-email pattern); delete account opens the 0.5 confirm dialog, then erasure.

### Content blocks (mobile-first priority)

1. **Section context**: inside the app chrome, "Settings / Account"; on mobile a back to the Settings index.
2. **Name**: an editable field with Save. Plain identity.
3. **Email**: the current email with a change-email action; a changed email is verified (the confirmation reuses the 2.2 check-your-email pattern), so a typo does not lock the operator out.
4. **Password and sign-in**: a change-password action, plus a magic-link option (a toggle to allow passwordless sign-in, tying to the 2.x auth choices).
5. **Sign out**: signs out to 2.1 Log in.
6. **Delete account (danger)**: a clearly separated destructive action that opens the 0.5 confirm dialog. The confirm states plainly what is erased (the operator account, the company's programs and aggregate history) and requires an explicit confirmation; it is GDPR erasure. Individual employee responses were never stored identifiably (aggregate only), which the confirm notes.

### Components used

The 8.0 Settings shell chrome (app chrome and the section pane), the auth input field (wf-input, from the 2.x auth pages), and the canonical 0.5 Dialog / modal shell for the delete-account confirm (the same shell used at 5.1 End program, 6.1 revoke, and 7.2 upgrade). The field rows, the magic-link toggle, and the danger block are section-specific layout, thin, not globals. 8.4 is a new consumer of the 0.5 dialog; no new global component is invented.

### States

- **Default:** the name, email, password and magic-link, sign out, and the delete-account danger block.
- **Editing a field:** Save enabled on change; a lightweight saved confirmation; errors keep the entered value, never a dead-end.
- **Change email (pending verification):** a note that the new email must be confirmed (reuses the 2.2 pattern); the old email stays active until verified.
- **Delete confirm (0.5 dialog):** the destructive confirm, stating what is erased and requiring an explicit confirmation; Cancel is the always-present safe exit (close, Esc, and scrim all dismiss without deleting); the full 0.5 a11y contract applies.
- **Deleting / deleted:** a brief working state, then sign-out and erasure; the account cannot be recovered, stated plainly.
- **Guest / Owner:** redirect to 2.1 Log in / 9.0 Owner dashboard.

### Primary CTA

Per field, Save; for access, Change password and the magic-link toggle; Sign out to 2.1. The delete-account action is deliberately separated and destructive, gated by the 0.5 confirm dialog, and never the visual primary of the section. Cancel in the confirm is the safe default.

### Adaptive (mobile-first)

- **Mobile, base 360px:** a back to the Settings index, then the fields stacked, sign out, and the danger block; the delete confirm is a bottom sheet (the 0.5 mobile variant).
- **Desktop, 900px and up:** rendered in the 8.0 two-pane, the Account section in the pane; the delete confirm is a centered modal (the 0.5 desktop variant).

### SEO block (noindex)

Account is inside the operator app, an authenticated per-account view. It is not indexed and carries no schema.

- **robots:** `noindex, nofollow`. No canonical for search, no hreflang, no Open Graph, no schema.org.
- **In-app findability (not SEO, still specified):** exactly one H1 ("Account" within the settings outline) for the accessible document outline; every field is a labelled input; the magic-link toggle state is conveyed by position and text, not color; the delete-account action and its confirm are labelled, and the destructive step reads by an attention mark and words, not color; the confirm dialog is a role=dialog with aria-modal, a focus trap, Esc to close, and focus returned to the opener; tap targets at least 44px.

## Canonical reuse and next

Account is the operator's identity and access section: name, email, password and magic link, sign out, and delete account (GDPR erasure) behind the 0.5 confirm dialog, all inside the 8.0 shell. It reuses the shell chrome, the auth input field, and the 0.5 dialog, and invents nothing global; the destructive step is carefully gated and never the visual primary. This closes cluster 8 (8.0 shell, 8.1 Plan, 8.2 Privacy center, 8.3 Notifications, 8.4 Account). Next in the Detail rollout: cluster 1 Public pages (1.0 Pricing and 1.1 to 1.6), the first indexed surfaces with full A to E SEO, where 1.1 Security and privacy renders the public, indexable instance of the 0.3 privacy-disclosure.
