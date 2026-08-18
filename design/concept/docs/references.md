# Concept References

*Stage 06 Concept, Step 1. Real visual language for Brio's one strategic dimension, found through the Refero MCP. Input, not output: one reference as the base, specific techniques borrowed from others, no clone. Reflex palettes (anything guessable from the "wellbeing" category) are discarded on sight.*

---

## The dimension we are sourcing for

`research/docs/benchmark.md` already named the single most strategically important dimension for Brio at Stage 01: **Trust and Privacy, aggregate insight without surveilling the individual.** The load-bearing product line (CLAUDE.md): the privacy model must be **made visible in the product UI, not promised in a policy.**

The benchmark named five best-in-class products from outside the competitor set. Top three by score:

| Named benchmark | Score | What it is best at | In Refero? |
|---|---|---|---|
| Apple Health / Apple privacy | 35 | Privacy as product identity; the "trust ceiling" | Yes (Apple style captured) |
| Culture Amp | 33 | Anonymity threshold + indirect-identification protection | No visual style in Refero |
| Oura Ring | 32 | Business model as privacy architecture | No visual style in Refero |

No new research this step. We look for the **visual language** of that named dimension, then take one base and specific techniques.

---

## Strategic read before any pixel: reject the category reflex

The "wellbeing" category has one reflex palette, and every self-serve competitor uses it: warm cream, sage or terracotta, rounded blobs, soft illustration (August Health, Function Health, Ease Health, Headspace all landed on this in the same Refero search). If Brio looks like a wellness app, it competes on the axis it loses.

Brio's differentiator is **trust in a privacy boundary**. So Brio should look like a **privacy and trust product** (Signal, Apple, 1Password: cool, calm, restrained, high-contrast-legible, one anchor accent, product-as-proof), not like a wellness brand. This is the anti-reflex move: the look reinforces the actual differentiator instead of the category. Every borrowed technique below is chosen to hold that line.

---

## Base reference (recommended)

### Signal Messenger - the base
- **Link:** https://signal.org (Refero style `461c8e24-b574-4d6b-a771-58829197adcc`)
- **Why the base, not Apple:** Apple is the *named* benchmark and stays the primary technique source below (the trust ceiling). But Apple's captured visual language is a dark, cinematic hardware-retail page: a pitch-black hero and luxury drama that would push Brio into exactly the loud register `voice/docs/voice.md` forbids (P5, quiet against a loud category). Signal carries the **same privacy-first principle in a light, warm, human register** that fits an SMB operator and a skeptical employee, not a hardware buyer. Signal's own north star line: it makes "complex privacy concepts feel accessible," "a balance of technical clarity and human warmth." That is Brio's brief in one sentence.
- **Techniques taken (specific, not "the vibe"):**
  1. **Split section rhythm: one calm sentence + one product visual.** Text on one side, a real product screenshot on the other, alternating white / very-light-grey / one soft brand-blue fill. This is how Brio renders "what the owner sees" and the privacy claims: a statement next to the proof, not a wall of copy.
  2. **Product screenshot as the trust proof**, wrapped with a soft 16px radius and a single subtle elevation shadow (`0 4px 12px rgba(0,0,0,0.12)`), never floating decoration.
  3. **Soft radius scale:** buttons 8px, cards and images 16px. Approachable, not playful, not sharp-corporate.
  4. **One calm blue as the hero accent** (`#9dbbf8` airy hero fill, `#2c6bed` for action), flat backgrounds, no gradient reflex, dark text `#1b1b1b` for maximum legibility.
- **Persona anxiety it removes:** Yemi **E3** ("Can my manager see my answer?") and **E4** (the first check-in is the trust-forming moment) plus benchmark **C6** (tone must feel honest and non-judgmental, never clinical or surveillance-flavored). Signal proves privacy can feel safe and human at the exact moment trust is decided.

---

## Techniques borrowed from other references

### Apple - the named benchmark; borrow its restraint, not its drama
- **Link:** https://www.apple.com (Refero style `c1811968-89c8-4c63-9ffc-aaeaa204ca4f`); privacy identity documented in `benchmark.md` Mechanism 2.
- **Technique taken:** **Privacy stated as calm editorial fact.** Apple's light sections (Ghost White `#f5f5f7`) present claims and fine print in precise, tightly-set type with thin dividers, and get their depth from **tonal and surface contrast, not shadows** ("elevation is achieved through background color shifts, not floating effects"). Plus the discipline of **one accent as the only interactive color** and no color outside the defined palette. Brio takes this for its privacy claims block and the "five things we promise" list: quiet, exact, unadorned, credible.
- **Explicitly not taken:** the pitch-black cinematic hero, the retail product-drama, the 80px display type. Those read as luxury persuasion; Brio needs plain proof.
- **Persona anxiety it removes:** Marcus **W3** (the owner trusts architecture over policy; "privacy language that sounds like marketing copy" scares him off) and **E6** (privacy by architecture, not by promise). Restraint reads as structural truth.

### 1Password - product-as-proof and single-accent discipline
- **Link:** https://1password.com (Refero style `1949fd5e-85e3-424b-8ea7-25a4778c6a02`)
- **Technique taken:** **The boundary shown as the product itself.** 1Password frames product screenshots as the primary evidence (the Discover / Secure / Audit feature cards; the clean integration list rows at 8px radius with a 1px border). Brio uses this to render "what the owner can and cannot see" as the **actual owner view, framed as proof**, which is `benchmark.md` Mechanism 2 (privacy visible in the UI, not in a policy). Also reinforces Apple's rule: **one blue is the single point of interactive confirmation; everything else stays monochrome.**
- **Persona anxiety it removes:** Yemi **E5** (the pre-check-in disclosure must be specific, shown, not a policy link) and Marcus **W3** (he wants to see the exact boundary, demonstrated). Showing beats telling.

### Named benchmarks with no Refero visual (carried from benchmark.md as mechanism, not look)
- **Culture Amp** (https://cultureamp.com/data-privacy) - the **minimum-of-5 and indirect-identification** rule. No visual clone; it drives the *content* of Brio's privacy surfaces (the "no score until 5 answered, no live count" statements).
- **Oura Ring** (https://ouraring.com/blog/health-data-privacy) - **business model as privacy**. Drives the one-sentence "subscription pays for the aggregate; we cannot and do not sell individual data" claim, rendered in the Apple-restraint register above.

---

## Concrete-mechanism screens (Refero), and an honest gap

Refero's screen index is strong on marketing pages but **does not hold a true "pre-check-in disclosure before Question 1" or "what your employer can and cannot see" product screen.** The screen search returned mostly generic legal privacy-policy pages (Anthropic, Tesla, Canva, Calm, Instacart), which are the anti-pattern Brio replaces. The two usable concrete patterns:

- **Krisp - privacy and sharing info page** (https://app.krisp.ai/meeting-notes/faq, Refero `ebf209bc-6041-4e75-b71a-efe624ea7eae`). A **product-surface** privacy explainer: a plain-language heading plus an expandable FAQ accordion explaining data handling and access, not a legal document. Maps directly to Brio's `security-privacy.html` and the privacy group in `help.html`. **Removes E3** by answering "who sees this" as a readable product page, not a policy PDF.
- **Zendesk - Benchmark Survey** (Refero `a90d4c23-a44d-4142-9cca-c22c24334ca3`). A participation form with a **privacy link beside the action** and side-by-side **aggregate comparison cards** (industry vs global), never individual rows. Maps to Brio's check-in setup and the aggregate pulse. **Removes W3** by showing signal as comparison, not surveillance.

**Honest note for traceability:** the exact aggregate-disclosure mechanism (one specific sentence before Question 1) has no Refero screen and stays sourced from `benchmark.md` Mechanism 2 (Apple Nutrition Label) and Mechanism 1 (Culture Amp confidentiality). We are not inventing it; we are carrying the research forward.

---

## Sources

- Refero styles: Signal `461c8e24` (base), Apple `c1811968`, 1Password `1949fd5e`.
- Refero screens: Krisp `ebf209bc`, Zendesk Benchmark Survey `a90d4c23`.
- Rejected as category reflex (same search, not used): August Health, Function Health, Ease Health, Headspace (warm cream / sage / blob illustration).
- Research inputs: `research/docs/benchmark.md` (dimension, five benchmarks, three mechanisms), `research/docs/personas.md` (E3, E4, E5, E6, W3, O3), `voice/docs/voice.md` (P5 quiet against a loud category, C6 honest tone).

*Nothing here is copied wholesale. Signal sets the register; Apple lends restraint; 1Password lends product-as-proof; Culture Amp and Oura lend mechanism content. The base and technique split is a recommendation for Step 1 sign-off; the visual attributes and the brand plates follow in Steps 2 and 3.*
