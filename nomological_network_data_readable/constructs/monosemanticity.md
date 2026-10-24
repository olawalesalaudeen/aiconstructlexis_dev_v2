# Monosemanticity
**Type:** Construct  
**Referenced in:** 10 papers  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the papers, the prevailing usage treats monosemanticity as a feature-level property: a learned feature is more monosemantic when it corresponds to a single word meaning or a single coherent concept, rather than mixing multiple meanings. The shared contrast case is conflation, either of multiple meanings in context or of multiple unrelated behaviors. The small variation in wording is mainly about scope, with one framing centered on word meaning and polysemy, and another using broader language about coherent concepts and behaviors.

**Space of facets.** Papers mostly use the term at the level of features extracted from activations, speaking of "monosemantic features" rather than a whole-model property. In these uses, monosemanticity is contrasted with "polysemantic activations" and is examined through polysemous words, including whether systems can preserve "the semantic relationship of words" while extracting monosemantic features. Papers also tie it closely to interpretability by describing monosemantic features as interpretable features.

**Space of measurement.** No measurement instrument is linked to monosemanticity, and no behavioral indicator is linked to it. The available descriptions of use instead center on feature-level analysis: papers discuss acquiring interpretable monosemantic features, analyzing the quality of such features through polysemous words, and extracting monosemantic features from polysemantic activations. This operational language matches the definitions in keeping the focus on whether a learned feature isolates a single meaning or concept.

**Links.** The only recorded construct link is to interpretability and explainability, and one paper frames this as a causal relationship from monosemanticity to that construct. Its evidence presents sparse autoencoders as improving interpretability by "mapping the complex superposition of polysemantic neurons into monosemantic features," so the claimed causal link is specifically tied to producing monosemantic features. No correlational or merely related links are recorded.

## Sources

**[Rethinking Evaluation of Sparse Autoencoders through the Representation of Polysemous Words](https://proceedings.iclr.cc/paper_files/paper/2025/file/380a0b16a7e6f8c5010f798c9f2d3c61-Paper-Conference.pdf)**
> The degree to which a learned feature corresponds to a single word meaning rather than conflating multiple meanings in context.

## Relationships

### Monosemanticity →
- **Interpretability and explainability** (constructs) — *causes*
  > Sparse autoencoders (SAEs) have gained a lot of attention as a promising tool to improve the interpretability of large language models (LLMs) by mapping the complex superposition of polysemantic neurons into monosemantic features
  - [Rethinking Evaluation of Sparse Autoencoders through the Representation of Polysemous Words](https://proceedings.iclr.cc/paper_files/paper/2025/file/380a0b16a7e6f8c5010f798c9f2d3c61-Paper-Conference.pdf)

### → Monosemanticity
- **Activation sparsity** (constructs) — *causes*
  > These designs ensure that only the most salient features are routed and processed by the experts
  - [Mixture of Experts Made Intrinsically Interpretable](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25ag/yang25ag.pdf)
