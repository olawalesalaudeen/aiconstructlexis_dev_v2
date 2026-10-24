# Systematic generalization
**Type:** Construct  
**Referenced in:** 5 papers  

## State of the Field

**Definition agreement:** Consensus. All papers define systematic generalization as the ability to reuse learned knowledge or structure in novel cases, especially by composition or by applying abstract patterns across different contexts. The definitions differ mainly in scope and example, with one paper focusing on problem instances, one on abstract inferences, and one on new words across contexts, but they describe the same core property.

**Space of definitions.** Across the cited work, the prevailing usage treats systematic generalization as applying learned knowledge to novel instances, most often phrased as solving new problem instances by composing knowledge learned from multiple smaller training examples. One paper makes the setting explicit by saying the test instances are systematically made larger than the informationally complete training instances. Other formulations keep the same core idea but describe it as applying learned abstract structures to superficially different new instances, or, in a word-learning setting, using a newly learned word consistently and flexibly across structurally different but semantically related contexts.

**Space of facets.** The available papers frame the construct through composition across training examples, abstraction and generalization in novel ways, and flexible transfer across different contexts. In these formulations, the same name is used for both a broad ability to handle novel instances and a narrower word-learning case, without a separate naming scheme. Length generalization is treated as related rather than synonymous.

**Space of measurement.** Papers do not link systematic generalization to any measurement instrument or behavioral indicator. Instead, the available operationalizations are described through evaluation setups: benchmarks that require composing knowledge learned from multiple training instances, with test instances larger than the training instances, and a word-learning setting that asks whether a new word can be used in novel contexts from just a few examples, reported through accuracy. No specific benchmark, human evaluation, LLM-as-a-judge, probe, or analysis instrument is explicitly attached to the construct.

**Links.** The recorded links are sparse. One paper reports that length generalization is related to systematic generalization, describing length generalization as evaluation on problems that are longer than seen in training and as a proxy for whether the correct problem-solving strategy has been learned. One paper also claims a causal relationship from relational reasoning to systematic generalization, stating that relational reasoning is believed to underlie human abilities for abstraction and systematic generalization.

## Sources

**[Large Language and Reasoning Models are Shallow Disjunctive Reasoners](https://aclanthology.org/2025.acl-long.433.pdf)**
> The ability to solve novel problem instances by composing knowledge learned from multiple, smaller training examples.

## Relationships

### → Systematic generalization
- **Relational reasoning** (constructs) — *causes*
  > Relational reasoning is a central component of generally intelligent systems and is believed to underlie human abilities for abstraction and systematic generalization (Section 1).
  - [Disentangling and Integrating Relational and Sensory Information in Transformer Architectures](https://raw.githubusercontent.com/mlresearch/v267/main/assets/altabaa25a/altabaa25a.pdf)

### Associated with
- **Length generalization** (constructs)
  > While we focus on studying length generalization in this work, we expect the intuitions developed here can apply to systematic generalization more broadly. (Section 1)
  - [What Algorithms can Transformers Learn? A Study in Length Generalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/45ed1a72597594c097152ef9cc187762-Paper-Conference.pdf)
