# Model similarity
**Type:** Construct  
**Referenced in:** 10 papers  
**Also known as:** Representation alignment, Model alignment  

## State of the Field

**Definition agreement:** Conflicting. Most papers define model similarity as similarity between two models' outputs or output distributions on the same inputs, sometimes at the token level or via confusability. But a notable minority use the term for internal representation consistency across layers and tasks, or for adherence to safety constraints, which are different phenomena applied to different things, so papers using these definitions would not be studying the same construct.

**Space of definitions.** Across the surveyed work, the prevailing usage treats model similarity as correspondence between two models' outputs: papers define it as statistical resemblance between output distributions, statistically similar or confusable outputs, or closeness between a fine-tuned or draft model and a reference model at the token or output-space level. In that framing, the comparison is often stated to be independent of architecture or size, and one paper notes that models from the same family output more similar distributions than models of similar size. Smaller lines of work use nearby labels for different objects: one defines representation alignment as consistency in hidden-state encoding across layers and tasks during merging, and another uses model alignment to mean adherence to safety constraints and avoidance of harmful outputs.

**Space of facets.** Papers do not present a single shared taxonomy, but they repeatedly distinguish the notion by what is being aligned and in what setting. The main variants are similarity between arbitrary models' output distributions, token-level alignment between draft and target models in speculative decoding, output-space alignment between fine-tuned and pre-trained models to retain pre-training knowledge, and layer-wise hidden-representation alignment for hierarchical model merging over clustered typical samples. At the naming level, model similarity, model alignment, and representation alignment are often used for related cross-model correspondence, though one paper uses model alignment for a different object, a continuum from strong to weak safety alignment.

**Space of measurement.** Papers do not link this construct to any measurement instrument or behavioral indicator. Instead, they operationalize it through analyses such as pairwise distances between output distributions, misclassification patterns for inferring similarities between proprietary and open-weight models, layer-wise hidden-representation similarity over clustered typical samples, and output-space alignment between paired models. One speculative-decoding paper also states that the acceptance rate of draft-generated tokens is directly tied to alignment between draft and target token distributions, so efficiency is discussed alongside the similarity notion even though no named instrument is attached to it.

**Links.** Papers only claim causal links for this construct. One paper claims a causal relationship from model similarity to knowledge retention, describing alignment between fine-tuned and pre-trained models as ensuring retention of knowledge from large-scale data, and another claims a causal relationship from model similarity to multilingual ability by aligning the internal forward process of non-dominant languages with that of a dominant language to boost performance. Separately, one paper claims a causal relationship from knowledge transfer to model similarity, in a discussion that cites aligning white-box and target models and the transferability of adversarial prompts.

## Sources

**[Model Equality Testing: Which Model is this API Serving?](https://proceedings.iclr.cc/paper_files/paper/2025/file/d73234a13815fc1f9779dd17d89be9b4-Paper-Conference.pdf)**
> The degree of statistical resemblance between the output distributions of two different language models, independent of their architecture or size.

**[RECALL: REpresentation-aligned Catastrophic-forgetting ALLeviation via Hierarchical Model Merging](https://aclanthology.org/2025.emnlp-main.829.pdf) (as "Representation alignment")**
> The internal consistency of how models encode inputs across layers and tasks, serving as a proxy for semantic and syntactic knowledge preservation during merging.

**[DistillSpec: Improving Speculative Decoding via Knowledge Distillation](https://proceedings.iclr.cc/paper_files/paper/2024/file/8766fbc68e1ed1cdef712ce273e0a363-Paper-Conference.pdf) (as "Model alignment")**
> The degree to which the token-level output distributions of a smaller draft model and a larger target model correspond, which is a critical factor for the efficiency of speculative decoding.

## Relationships

### Model similarity →
- **Knowledge retention** (constructs) — *causes*
  > aligning the fine-tuned model with the pre-trained one is crucial, as it ensures retention of knowledge obtained from large-scale data (Section 3.3).
  - [PACE: Marrying generalization in PArameter-efficient fine-tuning with Consistency rEgularization](https://proceedings.neurips.cc/paper_files/paper/2024/file/70a06501001e1820fd1eb9ee821302d2-Paper-Conference.pdf)
- **Attack transferability** (constructs) — *causes*
  > “Building on previous work suggesting that aligning white-box and target models in the safety domain can improve the transferability of adversarial prompts”
  - [Stealthy Jailbreak Attacks on Large Language Models via Benign Data Mirroring](https://aclanthology.org/2025.naacl-long.88.pdf)
