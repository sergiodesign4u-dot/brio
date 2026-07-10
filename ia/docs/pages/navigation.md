# Node 0.1 - Navigation (header + mobile tabs)

*Structural node (global shell). Source of truth for ia/navigation.html. Cluster 0, type: section (global component). Inherited on every operator-app page; the owner and employee surfaces carry a reduced variant. This is the exemplar: later structural nodes (footer) follow this shape. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06).*

## Purpose and jobs

Global wayfinding for the operator app: the shortest path for Priya to her main job. The component closes no job of its own; it gates every operator job (Main, J1, J2, J6, E1) and hosts the Settings utility. As a global component it carries NO H1 (the page owns the single H1). It is the primary internal-linking plane for the authenticated app and, in its guest variant, part of the crawlable marketing surface.

## Pattern basis (grounded, not by eye)

- 3 to 5 primary destinations in a bottom bar; more than 5 crowds tap targets and reduces accuracy (NN/g). Brio uses 4 job tabs; Settings is a utility, not a fifth tab.
- Minimum tap target 44px (WCAG 2.2 Target Size Enhanced, AAA; Apple HIG 44pt; Material 3 uses 48dp). Brio mobile tabs use a 48px minimum height with spacing to prevent mis-taps.
- Icon paired with a text label, never icon alone (NN/g, Apple HIG, Material 3).
- Fixed bottom bar, all options always visible, layout does not reflow (Smashing, Material 3).
- A bottom bar is for primary destinations of equal importance that users switch between frequently, not for secondary or hierarchical actions (Apple HIG). Settings and account are utilities, kept out of the primary bar.

Sources: NN/g Basic Patterns for Mobile Navigation (https://www.nngroup.com/articles/mobile-navigation-patterns/), Smashing "The Golden Rules of Mobile Navigation Design" (https://www.smashingmagazine.com/2016/11/the-golden-rules-of-mobile-navigation-design/), WCAG 2.2 Target Size Enhanced 2.5.5 (https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html), Apple HIG Tab Bars (https://developer.apple.com/design/human-interface-guidelines/tab-bars), Material 3 Navigation bar (https://m3.material.io/components/navigation-bar).

## State and role matrix

Rows are nav zones; columns are the four auth and role contexts. Cells state what shows, with desktop and mobile differences called out. The operator app is desktop-first in daily use but specified from the 360px baseline up.

| Zone | Guest (pre-auth) | Operator (authed) | Owner (authed) | Employee (check-in) |
|------|------------------|-------------------|----------------|---------------------|
| Brand / logo | Brio wordmark, links to 0.0 Landing | Brio wordmark, links to 4.0 Dashboard | Brio wordmark, links to 9.0 Owner dashboard | Brio wordmark, not a link (linear flow) |
| Primary job tabs (Dashboard, Programs, Team, Owner) | none | all 4. Desktop: top header. Mobile: fixed bottom bar (48px) | none (single aggregate dashboard by design) | none |
| Public links (Pricing) | Pricing (to 1.0) | none | none | none |
| Settings utility | none | gear, top-right (desktop) or inside the account sheet (mobile), to 8.0 | none | none |
| Account / session | "Log in" (to 2.1) + "Start free" (to 2.0) | avatar menu, to 8.4 Account + sign out | "Sign out" only | none |
| Privacy assurance | none | privacy-proof lives on 4.0 Dashboard, not in nav | "what I can and cannot see" is on 9.0, not in nav | persistent "your answers are anonymous" line in the top bar (J3, E2) |

**Transient states:** menu open (mobile operator): the bottom tab bar stays visible, account and Settings open as a sheet over content. Scrolled: the top bar condenses to brand plus essentials and stays sticky; the bottom tab bar is always fixed. Search open: N/A for Brio (no global search; the program library uses browse plus facets, node 5.0).

## Anatomy (element to behavior to destination node)

| Element | Behavior | Leads to |
|---------|----------|----------|
| Logo | click, home for the role | 0.0 (guest) / 4.0 (operator) / 9.0 (owner) / none (employee) |
| Dashboard tab | select, aria-current="page" when active | 4.0 Dashboard |
| Programs tab | select | 5.0 Program library |
| Team tab | select | 6.0 Team roster |
| Owner tab | select | 7.0 Share with owner |
| Settings gear | open utility | 8.0 Settings shell |
| Account avatar | open menu, then Account or sign out | 8.4 Account / sign out |
| Pricing (guest) | crawlable link | 1.0 Pricing |
| Start free (guest) | primary CTA | 2.0 Sign up |
| Log in (guest) | link | 2.1 Log in |
| Mobile bottom tab (each) | same destinations as the desktop tabs, 48px target | 4.0 / 5.0 / 6.0 / 7.0 |

## Transitions

0.1 does not sit in a flow; it is present on every page and points outward: to 4.0 Dashboard, 5.0 Program library, 6.0 Team roster, 7.0 Share with owner, 8.0 Settings (operator variant); to 0.0, 1.0, 2.0, 2.1 (guest variant); to 9.0 and sign out (owner variant); to nothing except leave (employee variant).

## SEO and accessibility

- The global component carries no H1; the H1 belongs to each page.
- Semantic `<nav aria-label="Primary">`; a "skip to content" link precedes it for keyboard users.
- `aria-current="page"` on the active destination; the active state is also visible (filled icon plus label plus an indicator bar), not color-only.
- Tap targets at least 44px, 48px on the mobile bottom bar, with spacing to prevent mis-taps.
- Icon is always paired with a visible text label.
- The guest and marketing nav (Landing, Pricing) is a crawlable internal-linking surface. The authenticated app nav sits in noindex zones (cluster 8 and the app shell), so there it is wayfinding, not an SEO surface.
- The employee and owner variants are reduced (no tabs); the employee top bar carries the persistent privacy assurance line, which is content, not navigation.

## Adaptive (mobile-first)

- Mobile, base 360px: a thin top bar (brand plus Settings or account) and a fixed bottom tab bar of 4 job tabs at 48px. Block priority reasoned from mobile: the bottom bar is thumb-reachable; the top bar holds only brand and the utility.
- Desktop, 900px and up: a single top header, brand on the left, the 4 job tabs on the left-center, Settings and account on the right. No bottom bar.
- Owner, 900px and up and mobile: a minimal top bar, no tabs (one aggregate read, under 2 minutes).
- Employee, mobile-first: a minimal top bar with the anonymity line, no tabs, no menu (linear near-anonymous flow, under 30 seconds).

## Canonical reuse

The Navigation component is defined once here and referenced by every node, never re-specified per page: 0.0 uses the guest variant; 4.0, 5.0, 6.0, 7.0, and cluster 8 use the operator variant; cluster 9 uses the owner variant; cluster 10 uses the employee variant. Change the component here, then propagate to all copies. Paired global component: 0.2 Footer (the second internal-linking plane), specified next.
