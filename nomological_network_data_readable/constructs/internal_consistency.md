# Internal consistency
**Type:** Construct  
**Referenced in:** 5 papers  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the available papers, the label is used in two distinct ways rather than one prevailing sense. One paper describes it as agreement between latent predictions decoded from intermediate layers and the final prediction, presenting it as a measure of the model's confidence and as reflecting the stability of the model's internal reasoning process; another defines it as giving equivalent answers to theoretically equivalent queries, regardless of correctness relative to ground truth. The definitions differ mainly on whether internal consistency is located in layerwise internal representations or in answer-level equivalence across matched queries.

**Space of facets.** The papers do not break the construct into subtypes, but they do use the same name for different targets. In Calibrating Reasoning in Language Models with Internal Consistency, it is tied to agreement among latent predictions across layers and framed as a measure of confidence; in Compositional Causal Reasoning Evaluation in Language Models, it refers to whether theoretically equivalent quantities are inferred to be equivalent, up to some error δ.

**Space of measurement.** No measurement instrument is linked to it, and no behavioral indicator is linked to it. The papers still make its operationalization concrete in two ways: one examines agreement between latent predictions decoded from intermediate layers and the final prediction, while the other evaluates whether theoretically equivalent quantities receive equivalent inferences, up to some error δ. These procedures mirror the paper-specific definitions rather than a shared measurement setup.

## Sources

**[Calibrating Reasoning in Language Models with Internal Consistency](https://proceedings.neurips.cc/paper_files/paper/2024/file/d037fd021c9aace128b8ce25001cdb6c-Paper-Conference.pdf)**
> The degree of agreement between latent predictions decoded from intermediate layers and the final prediction, reflecting the stability of the model's internal reasoning process.

## Relationships

### Internal consistency →
- **Reasoning** (constructs) — *causes*
  > we propose a new approach to calibrate reasoning by up-weighting reasoning paths with high internal consistency, resulting in a significant boost in reasoning performance. (Abstract)
  - [Calibrating Reasoning in Language Models with Internal Consistency](https://proceedings.neurips.cc/paper_files/paper/2024/file/d037fd021c9aace128b8ce25001cdb6c-Paper-Conference.pdf)

### Associated with
- **Calibration** (constructs)
  > This measure offers a straightforward method to gauge the level of internal consistency, serving as a useful indicator of the output’s correctness (i.e., calibration), without requiring additional training. (Section 3.2)
  - [Calibrating Reasoning in Language Models with Internal Consistency](https://proceedings.neurips.cc/paper_files/paper/2024/file/d037fd021c9aace128b8ce25001cdb6c-Paper-Conference.pdf)
- **Robustness** (constructs)
  > By linking layer consistency to robustness, CROW provides practical and effective protection against backdoor threats. (Section 1)
  - [CROW: Eliminating Backdoors from Large Language Models via Internal Consistency Regularization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/min25b/min25b.pdf)
- **Compositional consistency** (constructs)
  > We measure compositional consistency with respect to ground truth (external validity) and concordance among the LM’s responses (internal consistency) (Fig. 1). (Section 1)
  - [Compositional Causal Reasoning Evaluation in Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/maasch25a/maasch25a.pdf)
