# Node 3.1 - First program confirm (pre-selected by size)

*Page node, wizard step 2. Source of truth for ia/onboarding-program.html. Cluster 3 Onboarding, type: page (wizard step), surface [op] operator app. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). Uses the wizard shell from 3.0. This is where the interpretive layer (E1) and the canonical program card (0.4) do the work of making a first choice feel easy and right.*

## Page: First program confirm (3.1)

**Purpose:** show the operator one program we picked for them based on their size, explain plainly what it runs, and let them confirm it or pick another, so the first choice is easy and reassuring. **Jobs:** Main (run wellbeing without HR training), J6 (the curated library the system runs), item 2 (self-serve start). Persona: Priya (operator, brand-new).

**URL / slug:** `/app/onboarding/program` (operator app, wizard). **Breadcrumbs:** none; the wizard shows "Step 2 of 3". **Reached from:** 3.0 Company setup (Continue). **Forward:** 3.2 Invite team (Confirm), 5.0 Program library (Pick another).

### Content blocks (mobile-first priority)

1. **Wizard header**: the Brio mark and "Step 2 of 3". First screen on mobile.
2. **Pre-select (loading, F1 Load1)**: on entry, a brief loading while the size-based recommendation resolves; a skeleton 0.4 card holds the space.
3. **Heading**: a warm, competence-building line ("Here is a first program we picked for your team").
4. **Recommended program card** (0.4, recommended state): the canonical card with the "Recommended for your size" tag, category, title, cadence and duration.
5. **What it runs**: a short expansion, what the program does and how the check-in works, to reassure the non-expert.
6. **Interpretive line** (E1): "It is a light, weekly check-in. You can change it any time," which lowers commitment anxiety.
7. **Actions**: Confirm and continue (to 3.2), the primary; Pick another (to 5.0 Program library), the secondary.

### Components used

0.4 Program card (recommended state, and its skeleton for the pre-select loading), 0.6 Canonical lists (category), the wizard shell from 3.0. No new global component is invented; 3.1 is the onboarding consumer of 0.4 recorded in that card's copy set.

### States

- **Loading (F1 Load1):** the size-based pre-select resolves; a 0.4 skeleton card holds the space.
- **Resolved (default):** the recommended card, what it runs, the interpretive line, and the two actions.
- **Pick another:** goes to 5.0 Program library; choosing there returns to the wizard with the new pick, then Confirm continues to 3.2.
- **Pre-select error:** if no recommendation resolves, fall back to browsing the library ("Could not pick automatically, choose from the library," to 5.0), never a dead-end (MS4).
- **Back:** to 3.0 Company setup (step 1).
- **Already onboarded:** redirect to 4.0 Dashboard. **Guest:** redirect to 2.1 Log in.

### Primary CTA

Confirm and continue, to 3.2 Invite team; Pick another, to 5.0, is the secondary path.

### Adaptive (mobile-first)

- **Mobile, base 360px:** the wizard header, heading, the recommended card full width, what it runs, the interpretive line, then Confirm and the pick-another link. Single column.
- **Desktop, 900px and up:** the same content in a centered, narrow wizard card, the program card sized within it.

### SEO block (noindex)

First program confirm is a transactional, authenticated wizard step. It is not indexed and carries no schema.

- **robots:** `noindex, nofollow`. No canonical for search, no hreflang, no Open Graph, no schema.org.
- **In-app findability (not SEO, still specified):** exactly one H1 (the heading) for the accessible document outline; the recommended tag and card content are text, not color-only; the loading state is announced, not silent; tap targets at least 44px.

## Canonical reuse and next

First program confirm reuses 0.4 (recommended and skeleton), 0.6, and the wizard shell; it invents nothing global and adds the onboarding context to the 0.4 copy set. The size chosen at 3.0 drives the recommendation here. Next: 3.2 Invite team (join link, code, email, with the privacy note that the roster is not linked to answers), wizard step 3 of 3, which finishes to 4.0 Dashboard.
