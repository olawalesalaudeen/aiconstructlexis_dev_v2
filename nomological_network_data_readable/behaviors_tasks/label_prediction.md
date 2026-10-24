# Label prediction
**Type:** Behavior  
**Referenced in:** 7 papers  

## State of the Field

**Space of definitions.** Across the surveyed work, label prediction is most commonly treated as producing the correct class label for a target item from its context sequence, or as generating the final answer or classification label for an input question or premise, separate from the reasoning process. Definitions agree that the output is a label, while differing in scope: one formulation makes it target-token level, saying the network is trained to predict the label of the target token, whereas another speaks more generally of outputting a prediction label for the input.

**Variants.** Papers study this behavior in a few recurring settings: target-token prediction in in-context learning, question or premise classification, and patient-level healthcare prediction tasks such as mortality or readmission prediction. The task is also presented alongside related outputs, especially explanation or rationale generation and chain of thought, with papers describing the need to balance accurate label prediction with faithful rationale generation or to train both reasoning-chain generation and label prediction together.

**Space of elicitation and scores.** No measurement instrument is linked to label prediction. Instead, papers operationalize it directly in the task setup: one study trains the network to predict a target token's label, another has the smaller language model output the prediction label with the prefix "< Predict >", and another describes finetuning with ground-truth labels.

**What it is taken as evidence of.** No construct is linked to label prediction as what it evidences. Instead, papers relate it to other behavioral indicators, most often explanation generation and chain of thought, describing joint training or a need to balance these tasks.

## Sources

**[Differential learning kinetics govern the transition from memorization to generalization during in-context learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/187f9ba4cd5a59477305ac712282a1cd-Paper-Conference.pdf)**
> Producing the correct class label for a target item given its context sequence.

## Relationships

### Associated with
- **Explanation generation** (behaviors tasks)
  > Such domain insensitivity compromises their effectiveness, especially when balancing the dual demands of accurate label prediction and faithful rationale generation, which remains a challenge (Radhakrishnan et al., 2023). (Section 1).
  - [Drift: Enhancing LLM Faithfulness in Rationale Generation via Dual-Reward Probabilistic Inference](https://aclanthology.org/2025.acl-long.340.pdf)
