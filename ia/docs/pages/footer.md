# Node 0.2 - Footer

*Structural node (global shell). Source of truth for ia/footer.html. Cluster 0, type: section (global component). The second internal-linking plane after 0.1 Navigation. Full on public and marketing pages, reduced in the operator app, absent on the owner and employee surfaces. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06).*

## Purpose and jobs

The footer closes no job of its own. It does two structural things: it repeats a trust signal on every page (Brio's differentiator made visible, per the benchmark), and it is the second crawlable internal-linking plane, carrying the SEO popular-links block and the legal set. As a global component it carries no H1.

## Structure (top to bottom)

1. **Trust strip** (above the footer, repeats on every page): one line, "Aggregate-only wellbeing. We never show individual responses." This is the "trust first" ribbon for a product that handles sensitive signals; it restates the privacy promise in the UI rather than in a policy.
2. **Main footer columns:**
   - **Product:** How it works (0.0 section), Pricing (1.0), Security and privacy (1.1)
   - **Company:** About (1.2), Contact and support (1.3)
   - **Resources:** Help and FAQ (1.4), Programs overview (marketing view of 5.0)
   - **Legal:** Privacy Policy, Terms of Service, Cookie Policy (all 1.6), Cookie settings (re-opens 11.3)
3. **SEO popular-links block:** a row of crawlable links to priority pages (the second linking plane). Structure is fixed here; the exact list is [?] pending keyword research. Candidates: by program category (mental health, physical, financial, social wellbeing) and by segment ("employee wellbeing for companies without HR", "team wellbeing under 50 people"). All point at the 1.5 landing template.
4. **Bottom row:** copyright (2026 Brio), cookie settings link, social (LinkedIn [?]). No compliance badges (SOC 2, GDPR) are shown, they are [?] pending legal review and must not be claimed before it.

## Destinations registered as nodes (discover-as-you-go)

The footer promised directions, so each is now a node in sitemap.md, not a dangling link:

| Destination | Node | Notes |
|-------------|------|-------|
| Security and privacy explainer | 1.1 | Brio's differentiator, public |
| About | 1.2 | marketing |
| Contact and support | 1.3 | |
| Help and FAQ | 1.4 | also an SEO surface |
| Category or segment landing | 1.5 | one canonical template, exact list [?] |
| Privacy Policy, Terms, Cookie Policy | 1.6 | shared legal template (TEMPLATE MAP) |
| Cookie settings | 11.3 | re-opens the consent banner |

## Footer by surface (variants)

| Surface | Footer |
|---------|--------|
| Public and marketing (0.0, 1.x) | full footer: trust strip, 4 columns, SEO block, bottom row |
| Operator app (4.x to 8.x) | minimal footer: copyright, Support (1.3), Privacy center (8.2). No SEO block (the app is a noindex zone) |
| Owner surface (9.x) | none (single aggregate read, under 2 minutes) |
| Employee check-in (10.x) | none (linear near-anonymous flow; the anonymity line lives in the top bar, node 0.1) |

## SEO and accessibility

- No H1 in the global component; semantic `<footer>` (contentinfo landmark).
- The footer is the second internal-linking plane: all links are real crawlable `<a>`, not script-driven.
- **Mobile accordions must be present in the initial DOM.** Google indexes content hidden in collapsed accordions and tabs as long as it is in the server-rendered HTML, not injected after load (Illyes 2016, Mueller 2020). So on mobile the columns and SEO block render collapsed but their links stay in the DOM and remain crawlable.
- The SEO popular-links block is the structure only; final copy and real query volumes are deferred to production.
- Cookie settings re-opens the consent UI (11.3); the legal pages (1.6) are indexable.

Sources: Google indexing of collapsed and tabbed content (Illyes 2016; Mueller 2020), summarized at https://www.searchenginejournal.com/ranking-factors/tabbed-content/ and https://www.oneupweb.com/blog/seo-for-accordion-content/.

## Adaptive (mobile-first)

- Mobile, base 360px: the trust strip stays visible; the four link columns and the SEO block collapse into accordions (collapsed by default, in the DOM); the bottom row stacks.
- Desktop, 900px and up: the four columns sit in a row with the SEO block below and the bottom row last.

## Canonical reuse

Defined once here and referenced by every public and marketing node. The trust strip is the same one line everywhere it appears. The legal set (1.6) is one shared template rendering three documents, not three page specs. Change the footer here, propagate to all copies. Paired global component: 0.1 Navigation.
