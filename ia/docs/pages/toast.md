# Node 11.4 - Toast / inline notification

*System / global node, cluster 11. Source of truth for ia/toast.html. Type: section (global component). Surface [all]. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This formalizes the transient notification pattern used implicitly across the app (invite sent, saved, copied, and their error cases). aria-live, no SEO impact. It is a global component, discovered and specified at Step 6.*

## Component: Toast / inline notification (11.4)

**Purpose:** give the operator brief, non-blocking feedback that an action worked or failed, without a modal interrupting the flow. Many app actions already imply it (6.0 and 3.2 "invite sent", 5.2 and 8.x "saved", 6.1 "copied", and their failures); this node names the one pattern so those are consistent, accessible, and not reinvented per screen. **Jobs:** supporting (feedback and competence, E1). Persona: Priya (operator) primarily; the employee check-in uses its own inline states, not toasts. Design Principle 2 (clear, tells you it worked).

**Reached from:** it is not a destination; it is emitted by an action. Used by, at least, 6.0 and 3.2 (invite sent), 5.2 and 8.1 to 8.4 (saved), 6.1 (link copied), 7.x (invite sent), and the recoverable failures that are not full inline panels.

### Content blocks (anatomy)

1. **Icon (by shape, not color)**: success is a solid check (the 10.3 wf-donecheck), an error is a dashed "!" (the 2.3 and 10.4 wf-check.attn), info is a neutral "i". The meaning is carried by shape and fill, never by color alone.
2. **Message**: a short line ("Invite sent"), with an optional second line for detail ("3 teammates invited").
3. **Action (optional)**: one inline action, such as "Undo" (for a reversible action like ending a program) or "Retry" (for a recoverable failure).
4. **Close**: a manual close control (x), always present, so the user is never forced to wait it out.
5. **Auto-dismiss timer**: success and info auto-dismiss after a few seconds (shown as a thin progress line); errors persist longer or until dismissed, because a failure should not vanish before it is read.

### Variants

- **Success** (solid check): "Invite sent", "Saved", "Link copied". Polite, auto-dismiss.
- **Info** (neutral i): a neutral status ("Draft saved"). Polite, auto-dismiss.
- **Error** (dashed "!"): "Could not send", with an optional "Retry". Assertive, does not auto-dismiss quickly.
- **With action** (solid check + Undo): "Program ended" with "Undo", for a reversible action.

### Placement and stacking

- **Desktop:** a corner stack (bottom-right by default), newest nearest the corner; multiple toasts stack and each dismisses on its own timer.
- **Mobile, base 360px:** a single full-width toast at the top or bottom, above the thumb zone; only one or two at a time to avoid covering content.

### When to use which (the feedback taxonomy)

This is the reason to formalize the pattern: three feedback surfaces exist and must not be confused.

- **Toast (11.4):** non-blocking, transient, auto-dismiss. For quick confirmations and light, recoverable failures (sent, saved, copied). aria-live polite (or assertive for errors).
- **Inline panel (3.3, 10.6):** non-blocking but persistent, in the flow, next to the thing that failed, keeping the form filled. For errors the user must act on in place (invite-send failure, submit failure).
- **Dialog (0.5):** blocking and modal, until dismissed. For decisions and confirmations (delete account, upgrade, consent). role=dialog.

### Accessibility and behavior

- **aria-live:** success and info use `aria-live="polite"` (announced without interrupting); errors use `aria-live="assertive"` or `role="alert"` so they are announced promptly.
- **No focus trap:** a toast never steals focus or blocks the page; it is not a dialog. If it carries an action (Undo, Retry), that control is keyboard reachable while the toast is present.
- **Dismissable:** the close control is always present; auto-dismiss is paused on hover or focus so it can be read and acted on.
- **Reduced motion:** the enter and exit animation is a simple fade when `prefers-reduced-motion` is set, no slide.
- **State by shape and text:** the success, info, and error marks differ by shape and fill and are paired with text, never distinguished by color alone.

### Technical and SEO

No SEO impact: a toast is transient UI, not content and not a URL, so there is no SEO block. It is emitted client-side after an action resolves; the message text is real text for screen readers.

## Canonical reuse and next

Toast is the single transient-feedback component: a short message with an icon by shape (solid check for success, dashed "!" for error, neutral i for info), an optional action (Undo, Retry), a manual close, and an auto-dismiss timer, placed in a desktop corner stack or a mobile top or bottom slot, with aria-live and no focus trap. It reuses the 10.3 success check and the 2.3 attention mark, invents nothing new, and is separated cleanly from the persistent inline panels (3.3, 10.6) and the modal dialog (0.5). Cluster 11 is complete (11.0-11.4; 11.5 Global search confirmed not applicable). The 2.x password-reset entry was closed as node 2.4 Reset password, which finished Step 6.
