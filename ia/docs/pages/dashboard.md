# Node 4.0 - Dashboard (operator home)

*Page node. Source of truth for ia/dashboard.html. Cluster 4 Dashboard and pulse, type: page, surface [op] operator app (the app home). Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is the pulse aha and the operator's home, 1 tap from login; it is where founder decision D1 pays off (the aggregate appears only at minimum-N, with no live count) and where the interpretive layer (E1) does its work.*

## Page: Dashboard (4.0)

**Purpose:** the operator's home. In one screen it delivers the recurring value: a plain-language read of how the team is doing, what it means, and the one thing to do next. **Jobs:** E1 (feel competent as a people person, via the interpretive layer), J1 (see the team wellbeing signal), J2 (catch a struggle early). The aha, 1 tap from login. Persona: Priya (operator).

**URL / slug:** `/app` (the operator app home; Dashboard is the default view). **Breadcrumbs:** none. Dashboard is the home tab (0.1), so location is the active tab.

**Reached from:** 2.1 Log in (lands here), 3.2 onboarding finish, the Dashboard tab from anywhere. **Forward:** 4.1 Team pulse detail, 4.2 Threshold alert detail, 7.0 Share with owner (contextual, on a positive milestone, F3).

### Content blocks (mobile-first priority)

1. **Nav + greeting** (0.1 operator, Dashboard active): a light greeting, no jargon. First screen on mobile.
2. **Pulse card (the aha)**: the interpretive layer, three parts in one place, a plain-language score (a word, not a bare number), a one-line interpretation of what it means, and one suggested next action. This is the recurring main-job value; it is the first meaningful block on every visit.
3. **Trend spark + participation**: a small sparkline of the trend over time, and the participation rate as a share ("72% of the team answered"), never who. Aggregate only.
4. **Threshold-alert banner (DX1, contextual)**: appears only when the aggregate drops meaningfully; a plain-language "Wellbeing dipped this week, see what changed" that deep-links to 4.2. Also the landing target of the alert notification. Defined in-node; not always present.
5. **Privacy-proof mini (DX2)**: a small standing reassurance at the main surface, "Aggregate only. You never see who answered," linking to the privacy center (1.1). A condensed reuse of 0.3, not a new component.
6. **Quick links**: to 4.1 full pulse detail, Programs (5.0), and Share with owner (7.0) when a positive milestone makes it relevant.
7. **App shell footer** (minimal): privacy link (1.1) and help.

### Components used

0.1 Navigation (operator, Dashboard active), 0.3 Privacy-disclosure (condensed, the DX2 privacy-proof mini). The pulse card, trend spark, and threshold-alert banner (DX1) are dashboard-specific elements defined in-node (thin, used mainly here), not new globals. No new global component is invented.

### The interpretive layer (E1), why the pulse card is three parts

E1 is a core MVP job: make the non-expert operator feel competent. So the pulse never shows a bare metric. Every state of the pulse card carries: (1) a plain-language reading, (2) one sentence of what it means, (3) one suggested next action. The operator always knows what happened, what it means, and what to do, with no HR training.

### States

- **Default (score ready, N of 5 or more met):** the pulse card shows score, interpretation, and next action; trend and participation render.
- **Pre-minimum-N empty (4.3):** score not ready; "Waiting for at least 5 responses," no live count, and a nudge-team CTA to 6.0. A registered state, never a dead-end; this is the D1 privacy math made visible (J3, E2).
- **Cycle open, no live count (4.4):** "This cycle is open, results appear after it closes," with no running tally, for anyone. A registered state that closes the timing-inference vector (J3, D1).
- **No program yet (first run):** if no program is running, the card guides to pick one (to 5.0), rather than showing an empty pulse.
- **Loading:** skeleton pulse card and panels.
- **Error:** "Could not load your pulse, retry" plus a link to Programs, never a dead-end (MS4).
- **Owner role:** the operator dashboard is operator-only; an owner is sent to 9.0 Owner dashboard (aggregate-only). Guest to 2.1 Log in.

### Primary CTA

The suggested next action from the interpretive layer, which varies by state: default may be View full pulse (to 4.1) or Share with your owner (to 7.0) on a positive milestone; in 4.3 it is Nudge the team (to 6.0); on a threshold dip it is See what changed (to 4.2). One clear next step, always.

### Adaptive (mobile-first)

- **Mobile, base 360px:** greeting, then the pulse card (score, interpretation, action) as the first screen, then trend and participation, the alert banner if present, and the privacy mini. Single column; the next action is thumb-reachable.
- **Desktop, 900px and up:** the pulse card leads at the left as the hero, trend and participation sit in a right panel, and the threshold-alert banner spans full width above both when present.

### SEO block (noindex)

Dashboard is inside the operator app, an authenticated per-account view. It is not indexed and carries no schema.

- **robots:** `noindex, nofollow`. No canonical for search, no hreflang, no Open Graph, no schema.org.
- **In-app findability (not SEO, still specified):** exactly one H1 (the greeting or "Your team pulse") for the accessible document outline; the pulse score and its interpretation are text, not color-only (an operator using a screen reader hears the reading, not just a color); the trend spark has a text equivalent (the participation share and direction); tap targets at least 44px.

## Canonical reuse and next

Dashboard reuses 0.1 and 0.3 (condensed) and invents nothing global; the pulse card, trend spark, and threshold-alert banner are thin in-node dashboard elements. It hosts two registered states, 4.3 pre-minimum-N and 4.4 cycle-open, where D1 becomes visible. Next: 4.1 Team pulse detail (the full read behind the card: score and number, trend over time, participation, interpretation and next action), then 4.2 Threshold alert detail.
