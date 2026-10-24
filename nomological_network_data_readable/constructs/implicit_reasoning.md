# Implicit reasoning
**Type:** Construct  
**Referenced in:** 7 papers  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Definitions are split between two uses. One paper frames it as a model capacity for inferring unstated assumptions, background knowledge, or indirect logical connections needed to interpret ambiguous or incompletely specified argumentative content, and describes it as "utilizing different background knowledge to complement implicit information" (Identification of Multiple Logical Interpretations in Counter-Arguments). Elsewhere, it is defined as the ability to solve multi-hop reasoning tasks in a single forward pass, without chain of thought, so the main disagreement is between an argumentative-interpretation framing and a multi-hop task-solving framing.

**Space of facets.** The available papers do not lay out a detailed subtype scheme. The clearest organizing split is between use in identifying logical structure and implicit logic in counter-arguments, including cases where a model "sometimes identifies implicit logic that even annotators did not realize," and use as a capability aligned closely with multi-hop reasoning. In that latter usage, implicit reasoning is treated as closely related to, and sometimes nearly interchangeable with, single-pass multi-hop reasoning without chain of thought.

**Space of measurement.** No measurement instrument and no behavioral indicator are linked to it. In the available papers, it is not tied to a named benchmark, human evaluation, LLM-as-a-judge, probe, or analysis; the excerpts instead describe it through interpreting implicit information in arguments and through single-pass multi-hop task solving.

**Links.** Several papers claim a causal relationship from grokking to implicit reasoning, stating that transformers can learn implicit reasoning "only through grokking" and that grokking-based data augmentation can unlock implicit multi-hop reasoning capabilities. Another line of work treats it as related to multi-hop reasoning, including a formulation that ties it to solving multi-hop tasks in a single forward pass without chain of thought. The recorded links also include a causal relationship from implicit reasoning to grokking in one paper, and one paper uses implicit reasoning as a measure of social intelligence by evaluating information reasoning alongside goal completion.

## Sources

**[Identification of Multiple Logical Interpretations in Counter-Arguments](https://aclanthology.org/2025.emnlp-main.326.pdf)**
> The model's capacity to infer unstated assumptions, background knowledge, or indirect logical connections necessary to interpret ambiguous or incompletely specified argumentative content.

## Relationships

### → Implicit reasoning
- **Grokking** (constructs) — *causes*
  > transformers can learn implicit reasoning, but only through grokking, i.e., extended training far beyond overfitting.
  - [Grokking of Implicit Reasoning in Transformers: A Mechanistic Journey to the Edge of Generalization](https://proceedings.neurips.cc/paper_files/paper/2024/file/ad217e0c7fecc71bdf48660ad6714b07-Paper-Conference.pdf)

### Associated with
- **Multi-hop reasoning** (constructs)
  > This property aligns closely with our focus on multi-hop reasoning and underscores the need for implicit reasoning capability (Section 1).
  - [Grokking in the Wild: Data Augmentation for Real-World Multi-Hop Reasoning with Transformers](https://raw.githubusercontent.com/mlresearch/v267/main/assets/abramov25a/abramov25a.pdf)
- **Social intelligence** (constructs)
  > We evaluate social intelligence from multiple aspects, considering both goal completion and information reasoning... (Section 1).
  - [AgentSense: Benchmarking Social Intelligence of Language Agents through Interactive Scenarios](https://aclanthology.org/2025.naacl-long.257.pdf)
