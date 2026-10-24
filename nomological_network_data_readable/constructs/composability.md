# Composability
**Type:** Construct  
**Referenced in:** 4 papers  

## State of the Field

**Definition agreement:** Conflicting. The papers use composability for different phenomena: one is about combining task-specific parameters or components to get new multitask abilities without retraining, another is about sequential interventions not interfering with each other, and a third is about whether connected modular circuits yield a function that follows from their individual functions. These are properties of different objects and mechanisms, so papers using these definitions would not be studying the same thing.

**Space of definitions.** Across the surveyed work, the name is used for different kinds of combination rather than a single settled construct. A recurring extracted definition presents composability as the ability to combine model parameters or components trained on distinct tasks to create new multitask capabilities without additional training. The paper-specific definitions do not fully align with that framing: one treats composability as a latent property of interventions or models, where sequential updates should avoid interfering with prior or future interventions, and another defines it as the extent to which connected modular circuits produce a function that logically follows from their individual functions. Definitions therefore differ over both the object being composed and the criterion for successful composition.

**Space of facets.** Papers organize the concept around their local object of analysis rather than a shared taxonomy. One line of work uses it for combining trained weights or components across tasks, another for post-training interventions, and another for connected modular circuits. Within the intervention framing, composability is discussed through two facets, Order-free Error and Order Sensitivity, while the modular-circuit framing treats it as a property of connected MCs whose combined operation should reflect a logical composition of their individual functions.

**Space of measurement.** No measurement instrument is linked to it, and no behavioral indicator is linked to it. Even so, papers sometimes formalize it within their own framing: one proposes Order-free Error and Order Sensitivity as metrics for composability, another defines a mutual-information-based quantity, "ComposabilityT (S1 →S2) = MI(S1(d), S2(S1(d)))", and the multitask framing is illustrated by combining weights from models trained on distinct tasks to show multitask learning without additional adaptation. These operationalizations are paper-specific and track the differing definitions.

**Links.** Only related links are recorded. One paper reports that composability is related to General ability, citing a disparity between overall utility and composability metrics, and the same paper treats composability as related to Editability by introducing composability for post-training interventions to language models. No causal or correlational links are recorded.

## Sources

**[3-in-1: 2D Rotary Adaptation for Efficient Finetuning, Efficient Batching and Composability](https://proceedings.neurips.cc/paper_files/paper/2024/file/3dbcadb7beedc2afe32bb23f75dd30ec-Paper-Conference.pdf)**
> The ability to combine model parameters or components trained on distinct tasks to create new, multitask capabilities without requiring additional training.

## Relationships

### Associated with
- **General ability** (constructs)
  > The disparity between overall utility and composability metrics underscores the need for more nuanced evaluations explicitly targeting composability as a design criterion. (Section 4.4)
  - [Composable Interventions for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7f5f9a88c6516469c83d074c6f2976fb-Paper-Conference.pdf)
