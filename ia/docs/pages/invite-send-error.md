# Node 3.3 - Invite-send error

*State node (error), surfaced inside 3.2 Invite team (wizard step 3). Source of truth for ia/invite-send-error.html. Cluster 3 Onboarding, type: state (error), surface [op] operator app. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This state closes cluster 3. It is the error surface behind a failed email send; it is never a dead-end (main flow F1, milestone MS3).*

## State: Invite-send error (3.3)

**Purpose:** when one or more email invites fail to send (a mistyped address, a transient mail error), tell the operator plainly which ones failed, let them fix and retry, and always keep a way forward. The join link and join code are unaffected and still work, so the operator can finish onboarding no matter what the email did. **Jobs:** Main (run wellbeing without HR training) and inviting the team; it inherits 3.2's job coverage. Persona: Priya (operator, brand-new), who must never feel stuck or as if she broke something.

**URL / slug:** same as 3.2, `/app/onboarding/invite` (the error is surfaced inline within wizard step 3, not a separate route). **Breadcrumbs:** none; the wizard still shows "Step 3 of 3". **Reached from:** 3.2 Invite team (a send attempt that partly or fully fails). **Forward:** 3.2 Invite team (retry succeeds, or skip for now); from 3.2, Finish still hands off to 4.0 Dashboard.

### Content blocks (mobile-first priority)

1. **Error summary**: a plain, non-alarming line stating how many invites did not send ("2 of 3 invites did not send"). No blame, no jargon. First block on mobile.
2. **Failed list**: the specific addresses that failed, each with a short reason hint ("could not be delivered") and a per-row retry. The operator can see and fix a typo in place.
3. **Retry action**: Retry failed (retries all still-failing rows). The primary corrective action.
4. **Reassurance (link and code still work)**: the join link and join code are shown again with a copy control and a one-line note that they are unaffected. This is the guarantee that onboarding is never blocked by an email problem.
5. **Skip for now**: a clearly visible way to dismiss the error and return to 3.2, where Finish still completes onboarding to 4.0. The failed people can be invited later from 6.0 Team roster.

### Components used

The in-node invite element from 6.0 / 3.2 (join link and code, shown here as the still-works reassurance), the wizard shell from 3.0, and an in-node inline-error panel. No new global component is invented; the inline-error panel stays in-node until a second consumer (for example a cluster 2 or check-in send error) justifies promoting it to a canonical alert component.

### States

- **Default (error shown):** the summary, the failed list with per-row retry, Retry failed, the still-works link and code, and Skip for now.
- **Retrying:** the retried rows show a sending state; Skip for now stays available throughout, so the operator is never locked while a retry runs.
- **Retry success (some or all):** cleared rows leave the failed list; when the list empties, the operator returns to 3.2 Invite team (default), invites sent.
- **Retry fails again:** the row stays with its reason hint; Skip for now is still there, so a bad address can never trap the operator.
- **Skip for now:** to 3.2 Invite team; the link and code still work and Finish there completes onboarding to 4.0 Dashboard.
- **Back:** to 3.2 Invite team.
- **Already onboarded:** redirect to 4.0 Dashboard. **Guest:** redirect to 2.1 Log in.

### Primary CTA

Retry failed (the corrective action, since the usual cause is a mistyped address). Skip for now is given equal visibility so the state is never a trap; per-row Retry and Copy link are supporting actions. This is the concrete expression of the never-a-dead-end rule for main-flow milestone MS3.

### Adaptive (mobile-first)

- **Mobile, base 360px:** error summary, the failed rows (each with Retry), Retry failed, the still-works link and code (copy high), then Skip for now. Single column; nothing horizontally scrolls.
- **Desktop, 900px and up:** the same content in the centered, narrow wizard card, matching 3.2 so the error reads as a state of the same step, not a new screen.

### SEO block (noindex)

Invite-send error is a transactional, authenticated wizard state. It is not indexed and carries no schema.

- **robots:** `noindex, nofollow`. No canonical for search, no hreflang, no Open Graph, no schema.org.
- **In-app findability (not SEO, still specified):** exactly one H1 (the error heading) for the accessible document outline; the failed addresses and the join code and link are selectable text with labelled controls; the error is conveyed in text, not by color alone; each retry and copy control is a labelled button; tap targets at least 44px.

## Canonical reuse and next

Invite-send error reuses the in-node invite element from 6.0 and the wizard shell; the inline-error panel stays in-node. It guarantees main flow F1 never dead-ends at MS3: a failed email cannot block onboarding, because the link and code always work and Skip for now always finishes. This state closes cluster 3 (Onboarding). Next cluster in the Step 5 build order: cluster 2 Auth (2.0 Sign up, 2.1 Log in, 2.2 Magic-link sent, 2.3 Invalid or expired link).
