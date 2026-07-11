# Node 3.0 - Company setup (name, size)

*Page node, wizard step 1. Source of truth for ia/onboarding-company.html. Cluster 3 Onboarding, type: page (wizard step), surface [op] operator app. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). The onboarding is a linear, one-time, time-budgeted (under 5 minutes) wizard; it is sequential depth, not navigational depth, and is not reachable from global nav after it is finished.*

## Page: Company setup (3.0)

**Purpose:** the first step of the guided first run: name the company and pick its size, because the size is what pre-selects a fitting first program on the next step. **Jobs:** J6 (the curated library the system runs; size drives the pre-selected program), and the opinionated onboarding that makes the non-expert operator feel competent. Persona: Priya (operator, brand-new).

**URL / slug:** `/app/onboarding/company` (operator app, wizard). **Breadcrumbs:** none; the wizard shows a "Step 1 of 3" progress indicator instead. **Reached from:** 2.0 Sign up (right after the account is created). **Forward:** 3.1 First program confirm (F1).

### The wizard shell (defined here, reused by 3.0 to 3.2)

The onboarding steps share a minimal chrome, defined in-node because it is thin and used only by cluster 3: a slim header (the Brio mark and a "Step N of 3" progress indicator), a single centered column, and one primary action per step. It deliberately omits the operator app's four job tabs and other global chrome, so the first run is a focused line, not a place to wander. This is the concrete expression of "sequential depth, not navigational depth."

### Content blocks (mobile-first priority)

1. **Wizard header**: the Brio mark and the "Step 1 of 3" progress indicator. First screen on mobile.
2. **Welcome**: a short, warm line that sets the tone and the time budget ("Let's set up wellbeing for your team. It takes about five minutes.").
3. **Company name**: a single text field.
4. **Company-size selector**: the size buckets from 0.6 (for example up to 10, 11 to 50, 51 to 200, 200+ [? exact boundaries confirmed with 0.6]). The pivotal input, because it pre-selects the first program on 3.1.
5. **Why we ask**: one micro-line, "Your size helps us pick a first program that fits," which sets up 3.1.
6. **Primary action**: Continue, to 3.1.

### Components used

0.6 Canonical lists (company-size buckets). The wizard shell, the company-name field, and the size selector are thin in-node elements, not new globals. No new global component is invented.

### States

- **Default (step 1):** name empty, no size selected; Continue is disabled until a name is entered and a size is chosen.
- **Validation:** company name required; a size is required, because it drives the pre-selection.
- **Loading / saving:** the Continue action shows a saving state while step 1 is written, then advances.
- **Error:** "Could not save, retry," the entered values are kept, never a dead-end (MS4).
- **Already onboarded:** the wizard runs once; an operator who finished it is redirected to 4.0 Dashboard if they reach this URL.
- **No back on step 1:** this is the first step, so there is no back target; the operator moves forward.
- **Guest:** the wizard is post-signup; an unauthenticated hit goes to 2.1 Log in.

### Primary CTA

Continue, to 3.1 First program confirm. One clear next step.

### Adaptive (mobile-first)

- **Mobile, base 360px:** the wizard header, then welcome, name, size selector (stacked full-width options), and Continue, in a single column. Focused, no global nav.
- **Desktop, 900px and up:** the same content in a centered, narrow wizard card (not the full app width), so the first run stays a focused line.

### SEO block (noindex)

Company setup is a transactional, authenticated wizard step inside the operator app. It is not indexed and carries no schema.

- **robots:** `noindex, nofollow`. No canonical for search, no hreflang, no Open Graph, no schema.org.
- **In-app findability (not SEO, still specified):** exactly one H1 (the welcome heading) for the accessible document outline; the size selector is a labelled radio group, not color-only; the progress indicator states "Step 1 of 3" in text; tap targets at least 44px.

## Canonical reuse and next

Company setup reuses 0.6 and defines the thin wizard shell used across 3.0 to 3.2; it invents nothing global. The size chosen here drives the pre-selection on the next step. Next: 3.1 First program confirm (the recommended 0.4 card pre-selected by size, with confirm or pick another to 5.0), wizard step 2 of 3.
