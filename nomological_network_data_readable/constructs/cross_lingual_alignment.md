# Cross-lingual alignment
**Type:** Construct  
**Referenced in:** 20 papers  
**Also known as:** Multilingual alignment, Multilingual representation alignment, Multilingual semantic alignment, Language-agnostic semantic processing, Cross-lingual semantic alignment, Cross-lingual representation alignment, Representation alignment  

## State of the Field

**Definition agreement:** Consensus. Most papers define cross-lingual alignment as a model's latent ability to place semantically equivalent content from different languages into a shared or closely aligned internal semantic space, which supports transfer across languages. A few papers emphasize zero-shot transfer, inference, or retrieval as consequences or settings, but they still refer to the same core property rather than a different phenomenon.

**Space of definitions.** Across the papers, the prevailing usage treats cross-lingual alignment as a latent semantic or representational property: semantically equivalent content in different languages is mapped into a shared space, with sentence embeddings, internal representations, or hidden states brought closer together. Many definitions make this closeness the core of the construct and present it as the basis for cross-lingual transfer. A smaller line of work defines it more by what the shared space enables, such as zero-shot knowledge transfer, language-agnostic reasoning, cross-lingual inference, retrieval, or translation. The main disagreement is whether the construct is the internal closeness itself, the latent ability that follows from it, or a task-specific form of semantic matching.

**Space of facets.** Papers use several overlapping names for closely related notions, including multilingual alignment, multilingual representation alignment, multilingual semantic alignment, cross-lingual semantic alignment, and language-agnostic semantic processing, alongside other representation-alignment labels. Most of these labels point to the same shared-space formulation, but some authors cast alignment as a process and resulting state of making multilingual hidden states geometrically closer, while others describe it as a degree or latent ability. One strand separates it from language specialization and monolingual semantic structure, noting that alignment training can distort the monolingual structure of individual languages, and another ties semantic alignment to structural and lexical cues for cross-lingual understanding.

**Space of measurement.** Papers link the construct to 3 measurement instruments and 4 behavioral indicators. Direct measures are mostly XNLI, MKQA, and CoVoST 2, plus cross-lingual sentence retrieval accuracy at P@1, P@5, and P@10, sometimes paired with analyses of internal representations across models. Other linked behaviors appear mainly as downstream outcomes rather than direct measurements. The retrieval and representation-space analyses line up most closely with definitions centered on closeness in embeddings or hidden states, while task-performance uses reflect the transfer-oriented definitions.

**Links.** The recorded links are causal or general relatedness, and no correlational links are reported. Several papers claim causal relationships from cross-lingual alignment to knowledge transfer, cross-lingual generalization, and other downstream outcomes, while a smaller set claims causal relationships in the opposite direction, from multilingual reasoning and from information retrieval to cross-lingual alignment. One paper also reports that cross-lingual alignment is related to information retrieval ability through cross-lingual context retrieval.

## Sources

**[Headless Language Models: Learning without Predicting with Contrastive Weight Tying](https://proceedings.iclr.cc/paper_files/paper/2024/file/92864e1191ed272deb0914b3bb50f97c-Paper-Conference.pdf)**
> The latent ability of a multilingual model to transfer knowledge across languages, particularly in zero-shot settings.

**[Large Multilingual Models Pivot Zero-Shot Multimodal Learning across Languages](https://proceedings.iclr.cc/paper_files/paper/2024/file/bd54a6d4dc60c82ae989154013e17754-Paper-Conference.pdf) (as "Multilingual alignment")**
> The latent ability of a language model to produce similar representations for semantically equivalent texts across different languages, forming the foundation for cross-lingual transfer.

**[AlignX: Advancing Multilingual Large Language Models with Multilingual Representation Alignment](https://aclanthology.org/2025.emnlp-main.328.pdf) (as "Multilingual representation alignment")**
> The process and resulting state of making the hidden-state representations of multilingual concepts more similar or geometrically closer within the model's semantic space.

**[Cross-Document Cross-Lingual NLI via RST-Enhanced Graph Fusion and Interpretability Prediction](https://aclanthology.org/2025.emnlp-main.1611.pdf) (as "Multilingual semantic alignment")**
> The latent ability to map concepts and meanings across languages using structural and lexical cues to support cross-lingual inference.

**[The Transfer Neurons Hypothesis: An Underlying Mechanism for Language Latent Space Transitions in Multilingual LLMs](https://aclanthology.org/2025.emnlp-main.1618.pdf) (as "Language-agnostic semantic processing")**
> The latent ability of a multilingual LLM to process meaning independently of input language by converging representations into a shared semantic latent space where reasoning occurs.

**[LexCLiPR: Cross-Lingual Paragraph Retrieval from Legal Judgments](https://aclanthology.org/2025.acl-long.683.pdf) (as "Cross-lingual semantic alignment")**
> The latent ability of a model to align meaning across different languages in a retrieval setting, enabling queries in one language to retrieve relevant content in another.

**[Bridging the Language Gaps in Large Language Models with Inference-Time Cross-Lingual Intervention](https://aclanthology.org/2025.acl-long.270.pdf) (as "Cross-lingual representation alignment")**
> The latent ability of a model to map semantic representations from one language into the representational space of another, enabling transfer of capabilities across languages.

**[ShifCon: Enhancing Non-Dominant Language Capabilities with a Shift-based Multilingual Contrastive Framework](https://aclanthology.org/2025.acl-long.239.pdf) (as "Representation alignment")**
> The degree to which internal model representations for different languages with the same meaning are mapped close together in the latent space, facilitating cross-lingual transfer and understanding.

## Relationships

### Cross-lingual alignment →
- **Machine translation** (behaviors tasks) — *causes*
  > We present cross-lingual attention alignment of the ﬁnetuned models across Mufu input as a mechanistic explanation of the improvement in translation performance.
  - [Mufu:  Multilingual Fused Learning for Low-Resource Translation with LLM](https://proceedings.iclr.cc/paper_files/paper/2025/file/b44ae90136013a8d0e2d24f6015b6097-Paper-Conference.pdf)
- **Cross-lingual generalization** (constructs) — *causes*
  > These metrics confirm that multi-way pretraining promotes a more coherent, language-agnostic embedding space, which drives the observed improvements in downstream performance and cross-lingual transfer. (Section 4.3)
  - [From Unaligned to Aligned: Scaling Multilingual LLMs with Multi-Way Parallel Corpora](https://aclanthology.org/2025.emnlp-main.374.pdf)
- **CoVoST 2** (measurements) — *measured_by*
  > These results confirm Audio-Reasoner’s superior cross-lingual alignment and translation performance. (Section 4.2, referring to CoVoST 2 results in Table 5)
  - [Audio-Reasoner: Improving Reasoning Capability in Large Audio Language Models](https://aclanthology.org/2025.emnlp-main.1216.pdf)
- **Knowledge transfer** (constructs) — *causes*
  > A classic assumption in multilingual NLP is that more consistent multilingual representations facilitate easier knowledge transfer (Pan et al., 2021; Tang et al., 2022). (Section 1)
  - [AlignX: Advancing Multilingual Large Language Models with Multilingual Representation Alignment](https://aclanthology.org/2025.emnlp-main.328.pdf)
- **MMMLU** (measurements) — *measured_by*
  > To evaluate this alignment, we utilize three benchmarks—Belebele (Bandarkar et al., 2024), m-ARC (Lai et al., 2023), and m-MMLU (Lai et al., 2023)—which collectively encompass a diverse range of high-, medium-, and low-resource languages. (Section 3.4)
  - [From Neurons to Semantics: Evaluating Cross-Linguistic Alignment Capabilities of Large Language Models via Neurons Alignment](https://aclanthology.org/2025.acl-long.1406.pdf)
- **Belebele** (measurements) — *measured_by*
  > To evaluate this alignment, we utilize three benchmarks—Belebele (Bandarkar et al., 2024), m-ARC (Lai et al., 2023), and m-MMLU (Lai et al., 2023)—which collectively encompass a diverse range of high-, medium-, and low-resource languages. (Section 3.4)
  - [From Neurons to Semantics: Evaluating Cross-Linguistic Alignment Capabilities of Large Language Models via Neurons Alignment](https://aclanthology.org/2025.acl-long.1406.pdf)
- **Multilingual ability** (constructs) — *causes*
  > We present ShifCon framework, designed to boost the performance of non-dominant languages by aligning their internal forward process with that of the dominant language.
  - [ShifCon: Enhancing Non-Dominant Language Capabilities with a Shift-based Multilingual Contrastive Framework](https://aclanthology.org/2025.acl-long.239.pdf)

### → Cross-lingual alignment
- **Information retrieval** (behaviors tasks) — *causes*
  > we propose a cross-lingual retrieval dataset (CLR), which integrates representations across different languages through cross-lingual search, thereby narrowing the representation gap between them. (Section 3.3)
  - [Conan-Embedding-v2: Training an LLM from Scratch for Text Embeddings](https://aclanthology.org/2025.emnlp-main.758.pdf)

### Associated with
- **Information retrieval ability** (constructs)
  > Cross-lingual context retrieval (extracting contextual information in one language based on requests in another) is a fundamental aspect of cross-lingual alignment (Abstract).
  - [Understanding LLMs' Cross-Lingual Context Retrieval: How Good It Is And Where It Comes From](https://aclanthology.org/2025.emnlp-main.1161.pdf)
- **Multilingual reasoning** (constructs)
  > Our analysis on cross-attention behaviour in Mufu-finetuned models provides evidence that the method extends LLM's capability in multilingual reasoning. That is, given any Mufu-style prompt, the finetuned models are capable of ... aligning the input semantics across languages...
  - [Mufu:  Multilingual Fused Learning for Low-Resource Translation with LLM](https://proceedings.iclr.cc/paper_files/paper/2025/file/b44ae90136013a8d0e2d24f6015b6097-Paper-Conference.pdf)
- **Cross-lingual sentence retrieval** (behaviors tasks)
  > We further analyze the alignment of internal representations across models. ... we compute the following four metrics: ... Cross-lingual sentence retrieval accuracy at P@1, P@5, and P@10 (Conneau et al., 2017)... (Section 4.3)
  - [From Unaligned to Aligned: Scaling Multilingual LLMs with Multi-Way Parallel Corpora](https://aclanthology.org/2025.emnlp-main.374.pdf)
