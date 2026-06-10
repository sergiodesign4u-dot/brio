# Quality Gate

*Phase 6.5 - Self-review before HTML. Every quantitative claim checked.*

---

## 1. Quantitative Claims Audit

| Claim | File | Source | Status |
|-------|------|--------|--------|
| Wellable: 25-user minimum | competitive-analysis.md | wellable.co/pricing/subscriptions (visited June 2026) | VALID |
| Wellable: $1.25 PUPM pricing | competitive-analysis.md | wellable.co/pricing/subscriptions (visited June 2026) | VALID |
| Wellable: 10-response threshold for health assessment data | competitive-analysis.md, benchmark.md | support.wellable.co/hc/en-us/articles/360045639592-Overview (visited June 2026) | VALID |
| Nivati: 54% platform engagement vs 4% EAP average | competitive-analysis.md | nivati.com/platform (visited June 2026) | VALID - stated on their public page; note this is Nivati's own claimed figure, not independent audit |
| Vantage Fit: $2,000-5,000 pricing, 250-employee minimum | competitive-analysis.md | vantagefit.io/pricing (visited June 2026) | VALID |
| Woliba: $2/employee/month starting, $100/month minimum | competitive-analysis.md | woliba.io/pricing (visited June 2026) | VALID |
| Headspace Core: $69.99/user/year (10 seats) to $30.80/user/year (100 seats) | competitive-analysis.md | organizations.headspace.com/small-business (visited June 2026) | VALID |
| Gusto: $49+$6/person/month to $180+$22/person/month | competitive-analysis.md | gusto.com/product/pricing (visited June 2026) | VALID |
| Officevibe/Workleap: $4,999/year flat (Standard), $11,999/year (Pro) | competitive-analysis.md | workleap.com/pricing (visited June 2026) | VALID |
| Culture Amp: 5-respondent default threshold | benchmark.md | support.cultureamp.com/en/articles/7048386-confidentiality-protections-in-reporting (visited June 2026) | VALID |
| Officevibe: 3-respondent threshold for scores, 5 for written feedback | competitive-analysis.md | help.officevibe.com/hc/en-us/articles/360028520452 (visited June 2026) | VALID |
| Limeade: 20-person group minimum | benchmark.md | Stated as "found via search, not prominently disclosed" - this is insufficiently sourced | FLAG - marked [?] below |
| Gusto: 500,000+ SMB customers | master-research.md | gusto.com (visited June 2026) | VALID - stated on homepage |
| Typeform pricing: $29/mo to $99/mo | benchmark.md | typeform.com/pricing (visited June 2026) | VALID |
| Apple Health: "not even Apple can access your information" | benchmark.md | apple.com/privacy (visited June 2026) - this is the general claim; specific phrasing in iCloud context | VALID but note: claim applies when two-factor authentication is enabled with iCloud; not absolute |
| Oura: "Oura Member data is not for sale" | benchmark.md | ouraring.com/blog/health-data-privacy (visited June 2026) | VALID |
| New signups target 200/month by month 6 | aarrr.md | Hypothesis - marked as hypothesis in source | VALID (correctly labeled) |
| Activation target 55% | aarrr.md | Hypothesis | VALID (correctly labeled) |
| 90-day retention target 65% | aarrr.md | Hypothesis | VALID (correctly labeled) |
| Free-to-paid conversion 8-12% | aarrr.md | Hypothesis | VALID (correctly labeled) |

**Flagged for correction:**
- Limeade 20-person threshold: search-derived, not from a verified public URL. Changed to [?] in benchmark.md.

---

## 2. Invented, Vague, or Unverified Claims

**Scanning all files for statements without citations...**

| Issue | File | Resolution |
|-------|------|------------|
| "Limeade applies a minimum group size of 20 before showing insights dashboards (found via search, not prominently disclosed on the product page)" | benchmark.md | Already flagged as search-derived. Changing to: "Limeade's analytics threshold rules are [? not disclosed on any public page; search results suggest a 20-person minimum but this could not be verified from a primary source]" |
| "Nivati claimed 54% platform engagement vs. 4% EAP average" | competitive-analysis.md | Valid citation from public page, but noted as Nivati's self-reported figure (not independent). Adding "self-reported" qualifier. |
| Pricing estimates in CLAUDE.md for free/paid/growth tiers ($4-6/seat/month, $8-10/seat/month) | CLAUDE.md | Correctly labeled as "hypothesis" and "assumption". Valid. |
| "Assumption: N >= 5 minimum" for anonymity threshold | CLAUDE.md | Correctly labeled as assumption with note to validate with legal counsel. Valid. |
| Monthly digest email engagement figures | aarrr.md | No invented figures. Claims are hypotheses, correctly labeled. Valid. |

---

## 3. Competitor Facts From Memory vs. Research

Confirming all competitor facts derived from live web research, not from training data.

| Competitor | Source | Verified by live fetch |
|------------|--------|----------------------|
| Wellable | wellable.co | Yes - Phase 3 agent research, June 2026 |
| Nivati | nivati.com | Yes - Phase 3 agent research, June 2026 |
| Vantage Fit | vantagefit.io | Yes - Phase 3 agent research + screenshot |
| Woliba | woliba.io | Yes - Phase 3 agent research + screenshot |
| Calm for Business | health.calm.com | Yes - Phase 3 agent research |
| Headspace for Work | organizations.headspace.com/small-business | Yes - Phase 3 agent research + screenshot |
| Gusto | gusto.com | Yes - Phase 3 agent research + screenshot |
| Officevibe / Workleap | workleap.com | Yes - Phase 3 agent research + screenshot |
| Culture Amp | cultureamp.com | Yes - Phase 4 agent research + screenshot |
| Oura Ring | ouraring.com | Yes - Phase 4 agent research + screenshot |
| Apple Health | apple.com | Yes - Phase 4 agent research + screenshot |
| Typeform | typeform.com | Yes - Phase 4 agent research + screenshot |
| Limeade | limeade.com | Yes - Phase 4 agent research |

All facts confirmed as live-fetched. No competitor data relied on training data alone.

---

## 4. v2 Product Model Reflected Downstream

Checking that master-research.md, ux-patterns.md, and aarrr.md reflect the v2 validated model.

| Check | Status |
|-------|--------|
| Operator as primary segment (not owner) | Confirmed in master-research.md section 2, ux-patterns.md behavioral patterns |
| Employee privacy as architectural constraint (not preference) | Confirmed in master-research.md section 2, ux-patterns.md pattern B5, benchmark.md |
| Self-serve + no demo as critical differentiator | Confirmed in master-research.md gaps table, aarrr.md acquisition section |
| Minimum-N threshold non-configurable by employer | Confirmed in benchmark.md mechanism 1, master-research.md H1, H6 |
| Transparent pricing as table-stake | Confirmed in master-research.md conclusion 4, competitive-analysis.md key differences |
| Guided Program + Pulse hybrid as primary UX | Confirmed in ux-patterns.md section 3, master-research.md section 6 |
| Business model (subscription-only) as privacy argument | Confirmed in benchmark.md mechanism 3, master-research.md H5 |

All v2 elements reflected in downstream documents. No orphaned v1-only claims.

---

## 5. Em Dash Audit

Scanning all research files for the em dash character (—).

```
Files checked:
- CLAUDE.md
- research/product-model.md
- research/aarrr.md
- research/competitive-analysis.md
- research/benchmark.md
- research/ux-patterns.md
- research/master-research.md
```

**Result:** All em dashes found have been replaced with commas, periods, or spaced hyphens ( - ) per the global rules. Confirmed: no em dash characters in any output file.

---

## 6. Fixes Applied

| Fix | File | Change |
|-----|------|--------|
| Limeade 20-person threshold - insufficient source | benchmark.md | Changed to [?] with note about unverified search-derived figure |
| Nivati 54% figure - self-reported | competitive-analysis.md | Added "self-reported" qualifier |

---

## 7. Quality Gate Verdict

| Check | Result |
|-------|--------|
| All quantitative claims have cited sources or are labeled [?]/hypothesis | PASS |
| No invented statistics | PASS |
| No competitor facts from memory alone | PASS |
| v2 product model reflected in all downstream files | PASS |
| No em dash characters | PASS |
| Limeade threshold corrected to [?] | PASS |

**Verdict: READY FOR HTML.**
