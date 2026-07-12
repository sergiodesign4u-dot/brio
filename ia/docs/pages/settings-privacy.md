# Node 8.2 - Privacy center

*Section node, inside the 8.0 Settings shell. Source of truth for ia/settings-privacy.html. Cluster 8 Settings, type: section, surface [P] operator app (desktop-first in daily use, specified from the 360px baseline up). This is the operator-facing render of the canonical 0.3 privacy-disclosure (operator variant): the differentiator made checkable inside the product, not just promised. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06).*

## Section: Privacy center (8.2)

**Purpose:** show the operator, in one plain place, exactly what they and the owner can and cannot see, and that it is built into how Brio works rather than a setting anyone can change. It is the operator-facing proof surface: the strategic dimension we must win (privacy made visible in the UI) rendered where the operator can check it, so they can stand behind the promise to their team. **Jobs:** J3 (certainty of privacy), E2 (supported, not monitored, felt by the operator on behalf of the team), and item 4 (a clear statement of what the owner can and cannot see). Persona: Priya (operator). Design Principle 1 (privacy is the product, structural, not a switch) and Principle 2 (feel competent, able to answer a team member who asks "who sees this?").

**URL / slug:** `/app/settings/privacy`, operator app, rendered as the active section of the 8.0 shell. **Breadcrumbs:** `Settings / Privacy center`. **Reached from:** 8.0 Settings (the Privacy center row). **Forward:** back to 8.0; an optional link to the public 1.1 Security and privacy page (the same five claims, indexable) and to the employee pre-Q1 view (10.1), so the operator sees what the team sees.

### Content blocks (mobile-first priority)

1. **Section context**: inside the app chrome, "Settings / Privacy center"; on mobile a back to the Settings index.
2. **Intro and structural note**: one line that this is exactly what can and cannot be seen, and that it is built in, not a setting, marked with a "Structural" lock label (Principle 1, and founder decision D1).
3. **The five claims (operator framing)**: the canonical 0.3 spine, each an icon and one plain sentence, framed as "what you see": aggregate only (you see the team aggregate, never an individual response); minimum-N of 5 (no score until at least 5 answer); no live count (no running tally while a cycle is open); subscription as privacy (the subscription pays for the aggregate, the business never exposes an individual); and the lead-in to what the owner can and cannot see.
4. **Can and cannot panel**: two lists, operator framed. Can see: the team wellbeing score and its trend, and participation as a share of the team. Cannot see: any individual response, name, or who answered; any drill-down to a person; any sub-group below the minimum of 5.
5. **Same promise everywhere (quiet)**: a note that this is the same promise the team sees before they answer (10.1) and the public explainer (1.1), so the operator knows it does not differ by audience.

### Components used

The canonical 0.3 privacy-disclosure component (operator variant), rendered here as the settings proof surface. The can and cannot panel reuses the wf-see and wf-seerow list from 7.0 and 9.0 (plus and x marks, never color). The claim list is the same five-claim spine used at 10.1 (employee) and 9.1 (owner), reframed for the operator. It runs inside the 8.0 shell chrome. No new global component is invented; 8.2 is one of the registered 0.3 instances (employee 10.1, operator 8.2 and 3.1 and 4.0, owner 9.1, public 1.1), which must not drift.

### States

- **Default:** the five claims, the structural note, and the can and cannot panel. This is the same for every plan and team size, because the boundary is structural, not configurable.
- **Below minimum-N (contextual):** when the team is under 5, the same "results need at least 5 people" note appears (ties to 4.3, 9.3, and the employee 10.1 below-N swap), reinforcing that the limit is real.
- **Guest / Owner:** redirect to 2.1 Log in / 9.0 Owner dashboard (the owner sees their own comfort variant at 9.1, not this operator proof view).

### Primary CTA

None that changes anything, by design: the whole point is that nothing here is a setting. The affordances are read-only, plus optional links to the public 1.1 explainer and the employee 10.1 view. Privacy is proof, not a control panel.

### Adaptive (mobile-first)

- **Mobile, base 360px:** a back to the Settings index, then the intro and structural note, the five claims stacked, and the can and cannot panel as two stacked blocks. Single column.
- **Desktop, 900px and up:** rendered in the 8.0 two-pane, the Privacy center section in the pane beside the settings section list; the claims and the can and cannot panel sit within the pane.

### SEO block (noindex)

Privacy center is inside the operator app, an authenticated per-account view. It is not indexed and carries no schema. The indexable version of the same five claims lives on the public 1.1 Security and privacy page; the two must not drift (0.3 is the single source).

- **robots:** `noindex, nofollow`. No canonical for search, no hreflang, no Open Graph, no schema.org.
- **In-app findability (not SEO, still specified):** exactly one H1 ("Privacy center" within the settings outline) for the accessible document outline; the claims and the can and cannot lists are text with plus and x marks, never carried by color alone; the structural note is text; the optional external links are labelled controls; tap targets at least 44px.

## Canonical reuse and next

Privacy center is the operator-facing proof surface: the canonical 0.3 five claims and the can and cannot panel, framed for the operator, marked structural rather than configurable, inside the 8.0 shell. It reuses the 0.3 component, the wf-see and wf-seerow can and cannot list from 7.0 and 9.0, and the shell chrome, and invents nothing global; it is the operator twin of 9.1 (owner) and 10.1 (employee), the same promise reframed. Next in cluster 8: 8.3 Notifications (reminders and digests, items 9 and 10), then 8.4 Account settings (identity, password, sign out, and delete account for GDPR erasure), which closes cluster 8.
