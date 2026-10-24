# Multilingual reasoning
**Type:** Construct  
**Referenced in:** 13 papers  
**Also known as:** Multilingual Knowledge and Reasoning, Cross-lingual reasoning  

## State of the Field

**Definition agreement:** Consensus. Most papers define multilingual reasoning as a model's latent ability to carry out reasoning tasks across multiple languages, usually emphasizing effective, accurate, or consistent performance regardless of the language used. A few add cultural context or mention code as a language-agnostic bridge, but these are setting-specific elaborations of the same core property rather than different phenomena.

**Space of definitions.** Across papers, the prevailing usage treats multilingual reasoning as a model ability to carry out reasoning tasks in multiple languages, often explicitly non-English ones. Most definitions stay close to this task-performance framing, while several papers describe it as a latent capability that should remain consistent and accurate across languages; a smaller variant extends the scope to cultural contexts, and one survey adds that code can serve as a language-agnostic bridge for this reasoning. The main variation is therefore between defining it as effective multilingual task performance and as an underlying cross-language capacity, and between language-only versus language-plus-cultural-context scope.

**Space of facets.** Papers use multilingual reasoning, multilingual knowledge and reasoning, and cross-lingual reasoning as closely related labels for broadly the same cross-language reasoning capability, with the latter mainly emphasizing consistency across languages. One benchmark taxonomy also treats multilingual knowledge and reasoning as one category alongside algorithmic and multi-step arithmetic reasoning, natural language understanding, and use of world knowledge.

**Space of measurement.** Operationalization is benchmark-based: papers link the construct to 6 measurement instruments and no behavioral indicators. MGSM is the most recurrent instrument, and other named measures include BIG-Bench Hard, MMLU, MMLU-ProX, and MMMLU, plus 1 other instrument. These measures evaluate multilingual reasoning performance directly, with MMLU and MMMLU used in multilingual evaluation tracks, BIG-Bench Hard including a multilingual knowledge and reasoning category, and MMLU-ProX explicitly enabling direct cross-lingual comparisons while controlling for question difficulty, so the measurements mostly follow the dominant performance-based definitions and sometimes the consistency-across-languages framing.

**Links.** Beyond measurement, papers link multilingual reasoning to 2 constructs, both through causal claims. One paper claims a causal relationship from reasoning to multilingual reasoning, saying built-in reasoning and language understanding capabilities are used to boost multilingual reasoning effects, and another claims a causal relationship from multilingual reasoning to cross-lingual alignment in a translation setting where models assess input quality and align candidates cross-lingually. No correlational or generic related links are reported.

## Sources

**[SELF-DISCOVER: Large Language Models Self-Compose Reasoning Structures](https://proceedings.neurips.cc/paper_files/paper/2024/file/e41efb03e20ca3c231940a3c6917ef6f-Paper-Conference.pdf) (as "Multilingual Knowledge and Reasoning")**
> The latent ability to process and reason across multiple languages and cultural contexts.

**[MindMerger: Efficiently Boosting LLM Reasoning in non-English Languages](https://proceedings.neurips.cc/paper_files/paper/2024/file/3bf80b34f731313b8292f4578e820c90-Paper-Conference.pdf)**
> The ability of a model to perform reasoning tasks effectively when presented with queries in multiple, non-English languages.

**[MMLU-ProX: A Multilingual Benchmark for Advanced Large Language Model Evaluation](https://aclanthology.org/2025.emnlp-main.79.pdf) (as "Cross-lingual reasoning")**
> The latent ability of a model to apply reasoning processes consistently across different languages, maintaining performance regardless of linguistic or cultural context.

## Relationships

### Multilingual reasoning →
- **MGSM** (measurements) — *measured_by*
  > We experimented MindMerger with the latest multilingual mathematical reasoning MGSM [Shi et al., 2023] (Section 4.2)
  - [MindMerger: Efficiently Boosting LLM Reasoning in non-English Languages](https://proceedings.neurips.cc/paper_files/paper/2024/file/3bf80b34f731313b8292f4578e820c90-Paper-Conference.pdf)
- **X-CSQA** (measurements) — *measured_by*
  > In order to evaluate the diverse multilingual reasoning capabilities of the models, a challenging multilingual dataset X-CSQA [Lin et al., 2021] in commonsense reasoning task...were used. (Section 4.2)
  - [MindMerger: Efficiently Boosting LLM Reasoning in non-English Languages](https://proceedings.neurips.cc/paper_files/paper/2024/file/3bf80b34f731313b8292f4578e820c90-Paper-Conference.pdf)
- **BIG-Bench Hard** (measurements) — *measured_by*
  > BBH tasks cover a diverse range of reasoning problems spanning the following 4 categories according to their authors: 1) Algorithmic and Multi-Step Arithmetic Reasoning, 2) Natural Language Understanding, 3) Use of World Knowledge, and 4) Multilingual Knowledge and Reasoning.
  - [SELF-DISCOVER: Large Language Models Self-Compose Reasoning Structures](https://proceedings.neurips.cc/paper_files/paper/2024/file/e41efb03e20ca3c231940a3c6917ef6f-Paper-Conference.pdf)
- **MMLU-ProX** (measurements) — *measured_by*
  > It enables comprehensive evaluation of LLMs’ cross-lingual reasoning abilities and lays a foundation for the development of more inclusive LLMs in the future. (Introduction)
  - [MMLU-ProX: A Multilingual Benchmark for Advanced Large Language Model Evaluation](https://aclanthology.org/2025.emnlp-main.79.pdf)
- **MMMLU** (measurements) — *measured_by*
  > Beyond English textual reasoning, we include two additional evaluation tracks: a multilingual experiment using MMLU and its professionally translated variant MMMLU (Hendrycks et al., 2021)...
  - [Sketch-of-Thought: Efficient LLM Reasoning with Adaptive Cognitive-Inspired Sketching](https://aclanthology.org/2025.emnlp-main.1236.pdf)
- **MMLU** (measurements) — *measured_by*
  > Beyond English textual reasoning, we include two additional evaluation tracks: a multilingual experiment using MMLU and its professionally translated variant MMMLU (Hendrycks et al., 2021)...
  - [Sketch-of-Thought: Efficient LLM Reasoning with Adaptive Cognitive-Inspired Sketching](https://aclanthology.org/2025.emnlp-main.1236.pdf)

### → Multilingual reasoning
- **Reasoning** (constructs) — *causes*
  > utilize the built-in reasoning and language understanding capabilities of LLMs... to boost the multilingual reasoning effects.
  - [MindMerger: Efficiently Boosting LLM Reasoning in non-English Languages](https://proceedings.neurips.cc/paper_files/paper/2024/file/3bf80b34f731313b8292f4578e820c90-Paper-Conference.pdf)

### Associated with
- **Cross-lingual alignment** (constructs)
  > Our analysis on cross-attention behaviour in Mufu-finetuned models provides evidence that the method extends LLM's capability in multilingual reasoning. That is, given any Mufu-style prompt, the finetuned models are capable of ... aligning the input semantics across languages...
  - [Mufu:  Multilingual Fused Learning for Low-Resource Translation with LLM](https://proceedings.iclr.cc/paper_files/paper/2025/file/b44ae90136013a8d0e2d24f6015b6097-Paper-Conference.pdf)
