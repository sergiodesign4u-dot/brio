# Node 11.3 - Cookie consent

*System / global node, cluster 11. Source of truth for ia/cookie-consent.html. Type: dialog / banner component (with a modal manage panel). Surface [all]. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is the cookie-consent surface, grounded in real law (researched July 2026): a first-visit consent banner plus a granular manage panel, geo-adaptive between the EU/UK opt-in model and the US opt-out model. Referenced by 1.6 (the "manage cookie settings" control) and shown on first visit. Legal copy and the final geo logic are [?] pending legal review.*

## Component: Cookie consent (11.3)

**Purpose:** obtain and manage cookie consent lawfully and honestly, so Brio respects the user's choice before any non-essential cookie loads, and so the choice can be changed at any time. For a privacy-first product this is not a nuisance banner; it is the design principle made operational at the browser layer. **Jobs:** compliance and trust (supporting the whole product). Persona: anyone (guest first-visit, or any user reopening settings). Design Principle 1 (privacy is the product) and Principle 3 (earn trust).

**Reached from:** the first page load (the banner), the 1.6 Cookie Policy "manage cookie settings" control, and a persistent reopen control (a footer link or a small floating preferences entry), because consent must be withdrawable as easily as it was given. **Forward:** 1.6 Cookie Policy (the full detail).

### Legal grounding (researched July 2026, [?] pending legal review)

Brio's primary market is the US and secondary is the EU and UK, so two models apply and the surface is geo-adaptive.

- **EU (GDPR + ePrivacy Directive), opt-in:** prior opt-in consent is required before any non-essential cookie loads; the banner must appear first and non-essential tags must not fire until a choice is made. Strictly necessary cookies are exempt from consent but must still be disclosed. **Reject must be as easy as Accept**, on the same first layer, with equal prominence (asymmetry has drawn CNIL fines). Consent must be **granular per category** (accept analytics, reject advertising independently). **No pre-ticked boxes** (Planet49, CJEU C-673/17): non-essential toggles default off. Consent must be withdrawable at any time, as easily as given. Consent records (timestamp, categories, banner version) are kept server-side.
- **US (CCPA / CPRA and about 20 state laws), opt-out:** a notice-and-opt-out model, not opt-in; cookies may load, but the user can opt out of any sale or sharing via a "Do Not Sell or Share My Personal Information" control, and browser Global Privacy Control (GPC) signals must be honored.
- **Brio reconciliation:** Brio is aggregate-only and does not sell individual data (the 0.3 spine, claim 4), so the "sale" surface is largely moot, but the control is shown honestly. Because the brand is privacy-first, the recommended default is to apply the stricter opt-in model and a genuine Reject everywhere, and to honor GPC; the final geo logic is [?] pending legal review.

### Content blocks (mobile-first priority)

1. **Consent banner (first visit)**: a non-modal region, shown before non-essential cookies load. A plain line ("Brio uses essential cookies to run the site; with your consent we also use analytics to improve it; we never sell your data"), a link to 1.6 Cookie Policy, and the first-layer actions: **Reject all** and **Accept all** at equal prominence, plus a **Manage** link to the panel.
2. **Manage panel (modal)**: the granular categories, a 0.5 dialog instance. Strictly necessary is on and locked ("always on", structural, like the 8.2 lock); Functional, Analytics, and Advertising each a toggle (the 8.3 switch, state by knob position and On/Off text, never color), all **default off** (no pre-ticked boxes). Actions: **Reject all**, **Save choices**, and **Accept all**, with Reject as easy as Accept. A link to 1.6.
3. **Persistent reopen control**: a footer link or small floating preferences entry, and the 1.6 "manage cookie settings" control, so consent can be changed or withdrawn at any time.
4. **US opt-out variant**: where US state law applies, a notice with a "Do Not Sell or Share My Personal Information" control and a note that GPC signals are honored; because Brio does not sell data, this is honest reassurance more than a live sale toggle.

### Components used

The 8.3 toggle (wf-switch, wf-swtxt) for the optional categories, the 8.2 lock idea (wf-lock) for the always-on essential category, the 0.5 dialog shell for the modal manage panel (11.3 is already registered as a 0.5 consumer in sitemap.md), and a link to 1.6 Cookie Policy. The banner region and the category rows are thin, component-specific layout. No new global component is invented.

### States

- **First visit (no choice yet):** the banner is shown; non-essential cookies have not loaded.
- **Manage open:** the modal panel with the category toggles, all optional ones off by default.
- **Choice saved (accept all / reject all / custom):** the banner dismisses; the chosen categories load or stay blocked; the choice is recorded.
- **Reopened:** the same panel prefilled with the current choice, reachable any time (withdrawal as easy as consent).
- **US opt-out region:** the notice-and-opt-out variant, GPC honored.

### Accessibility

- The **first-visit banner** is a non-modal `region` with an accessible label ("Cookie consent"); it does not trap focus or block the page (it is not a cookie wall), but its actions are keyboard reachable and clearly labelled.
- The **manage panel** is a modal `dialog` (the 0.5 contract): `role="dialog"`, `aria-modal="true"`, an accessible name, a focus trap, Escape to close, the background inert, and focus returned to the opener.
- Toggle state is conveyed by knob position and On/Off text, not color; the locked essential category is announced as disabled with an explanation.

### Technical and SEO

- The banner and panel are UI over the page, not a separate URL, so there is no A to E SEO block and nothing to index here; the crawlable legal detail lives at 1.6.
- **Enforcement:** non-essential cookies must not load until consent (EU); the choice is stored client-side and recorded server-side (timestamp, categories, banner version).
- **GPC:** browser Global Privacy Control signals are honored as an opt-out.
- No color-only meaning; the actions are real buttons; Reject is as prominent as Accept.

## Canonical reuse and next

Cookie consent is the lawful, honest consent surface: a first-visit non-modal banner with Reject as easy as Accept, a modal manage panel with granular per-category toggles (essential locked on, the rest default off, no pre-ticked boxes), a persistent reopen control, and a US opt-out variant with GPC honored, all grounded in current EU and US law. It reuses the 8.3 toggle, the 8.2 lock idea, and the 0.5 dialog shell, links to 1.6, and invents nothing global; the legal copy and final geo logic are [?] pending legal review. Next in cluster 11: 11.4 Toast / inline notification (the transient app-wide confirm), then the 11.5 Global search N/A confirmation, and closing the 2.x password-reset entry [?].
