# Editability
**Type:** Construct  
**Referenced in:** 5 papers  
**Also known as:** Multiple edits, Lifelong knowledge editing, Editing reliability  

## State of the Field

**Definition agreement:** Complementary. Most papers define editability as a model or editing system's capacity to accept edits or new factual updates while preserving prior knowledge, prior edits, or overall performance, with some stating this broadly and others focusing on continual accumulation without interference. A single paper instead frames it as how well a concept editing method controls a target concept across inputs, but the dominant pattern is still complementary rather than fully conflicting.

**Space of definitions.** Across papers, the term does not have a single settled definition, but several neighboring ones centered on how well editing can be sustained. One framing treats it as an inherent capacity of a large language model to be successfully and efficiently modified by editing techniques while maintaining overall performance. Another line narrows it to durability under continued updates, either as retaining multiple edits without forgetting or interference, or as continuously integrating a stream of factual updates while retaining prior knowledge. A separate usage treats it as editing reliability, the degree to which a concept editing method consistently and effectively controls a target concept across different inputs.

**Space of facets.** Papers systematize the construct through different neighboring labels rather than a shared taxonomy. One line uses multiple edits for the property that a system can edit repeatedly without forgetting previous edits, and lifelong knowledge editing for updating a model with a stream of new or revised facts while retaining previously acquired knowledge. Another paper positions editing reliability as one dimension in a broader four-part evaluation framework, alongside output generalization, neuron-level consistency, and mathematical formalization.

**Space of measurement.** No measurement instrument is linked to it, and the only linked behavioral indicator is Knowledge editing, though papers connect it causally rather than through a named measure. In practice, authors operationalize the construct through editing outcomes described in text rather than through a named benchmark or judge: sequential updates are said to degrade editability, performance across multiple edits is treated as evidence that a system retains earlier edits, and one hierarchical evaluation framework evaluates concept editing methods on an editing-reliability dimension. These operationalizations line up most directly with the repeated-update and cross-input control definitions, while the broader framing that also includes maintaining overall performance is stated in definitions but not tied to a named instrument.

**Links.** Only a few explicit links are reported. One paper claims a causal relationship from Knowledge editing to Editability, stating that sequential updates gradually deviate the model from its initial state and lead to degradation in editability, and that keeping the model in its initial state avoids this degradation. Separately, one paper reports that Editability is related to Composability.

## Sources

**[Towards Lifelong Model Editing via Simulating Ideal Editor](https://raw.githubusercontent.com/mlresearch/v267/main/assets/guo25c/guo25c.pdf)**
> The inherent capacity of a large language model to be successfully and efficiently modified by editing techniques while maintaining its overall performance.

**[BalancEdit: Dynamically Balancing the Generality-Locality Trade-off in Multi-modal Model Editing](https://raw.githubusercontent.com/mlresearch/v267/main/assets/guo25e/guo25e.pdf) (as "Multiple edits")**
> The latent ability of a model editing system to accumulate and retain multiple knowledge updates over time without forgetting previous edits or causing interference.

**[WikiBigEdit: Understanding the Limits of Lifelong Knowledge Editing in LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/thede25a/thede25a.pdf) (as "Lifelong knowledge editing")**
> The ability of a model to continuously integrate a stream of new or updated factual information while retaining previously acquired knowledge.

**[Towards a Unified Paradigm of Concept Editing in Large Language Models](https://aclanthology.org/2025.emnlp-main.930.pdf) (as "Editing reliability")**
> The degree to which a concept editing method consistently and effectively controls a target concept in a model's outputs across different inputs.

## Relationships

### → Editability
- **Knowledge editing** (behaviors tasks) — *causes*
  > The sequential updates gradually deviate the model from its initial state, leading to degradation in its editability (Ma et al., 2024; Gupta et al., 2024b). (Section 1)
  - [Towards Lifelong Model Editing via Simulating Ideal Editor](https://raw.githubusercontent.com/mlresearch/v267/main/assets/guo25c/guo25c.pdf)
