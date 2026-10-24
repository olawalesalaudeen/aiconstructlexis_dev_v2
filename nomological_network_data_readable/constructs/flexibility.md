# Flexibility
**Type:** Construct  
**Referenced in:** 4 papers  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Papers do not converge on a single meaning of flexibility. In $R^2$-Guard: Robust Reasoning Enabled LLM Guardrail via Knowledge-Enhanced Logical Reasoning, it is used for a guardrail model's ability to adapt to new or unseen safety categories without complete retraining, with examples that it "shows flexibility to new safety categories by simple PGM graph editing" and can adapt "by simply editing the reasoning graph." In MuseScorer: Idea Originality Scoring At Scale, the term instead refers to response diversity across semantic categories, defined as "distinct semantic category count" or "the number of categories in each participant's responses."

**Space of facets.** No shared subtype scheme appears across papers. The main pattern is that the same label is used for two different targets, one a model-level adaptation property tied to new safety categories and changes to a knowledge or reasoning graph, the other an output-level count of distinct semantic categories in responses. One paper also mentions Creativity Quotient (CQ) scores alongside the latter usage.

**Space of measurement.** No measurement instrument is linked to it and no behavioral indicator is linked to it. The papers instead use paper-specific operationalizations: one demonstrates flexibility through adapting to unseen safety categories via simple PGM or reasoning-graph editing rather than complete retraining, while the other operationalizes it as a count of distinct semantic categories in responses. These operationalizations follow the two different definitions rather than a shared measurement approach.

**Links.** Flexibility is linked to two constructs. One paper claims a causal relationship from Logical reasoning to Flexibility, stating that a principled reasoning procedure enables flexibility given new safety categories. Separately, one paper reports that Flexibility is reported to correlate with Originality.

## Sources

**[$R^2$-Guard: Robust Reasoning Enabled LLM Guardrail via Knowledge-Enhanced Logical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a07e87ecfa8a651d62257571669b0150-Paper-Conference.pdf)**
> The ability of a guardrail model to adapt to new or unseen safety categories without requiring complete retraining, often by modifying its knowledge base or reasoning structure.

## Relationships

### Flexibility →
- **Originality** (constructs) — *correlates*
  > “For convergent validity, MUSESCORER’s normalized originality scores {Othresh_i} correlate strongly with Creativity Quotient (CQ) scores in socialmuse24. CQ is a flexibility measure that captures the diversity of semantic categories.”
  - [MuseScorer: Idea Originality Scoring At Scale](https://aclanthology.org/2025.emnlp-main.1009.pdf)

### → Flexibility
- **Prompt engineering** (behaviors tasks) — *causes*
  > VGD enhances the interpretability, generalization, and flexibility of prompt generation without the need for additional training. (Section 1)
  - [Visually Guided Decoding: Gradient-Free Hard Prompt Inversion with Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/cd61329e2c14b93a89d617c914140f64-Paper-Conference.pdf)
- **Logical reasoning** (constructs) — *causes*
  > The grounding knowledge and principled reasoning procedure enable R2-Guard to be effective, robust against jailbreak attacks, and flexible given new safety categories. (Abstract)
  - [$R^2$-Guard: Robust Reasoning Enabled LLM Guardrail via Knowledge-Enhanced Logical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a07e87ecfa8a651d62257571669b0150-Paper-Conference.pdf)
