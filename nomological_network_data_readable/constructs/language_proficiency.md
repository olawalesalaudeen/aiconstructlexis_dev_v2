# Language proficiency
**Type:** Construct  
**Referenced in:** 26 papers  
**Also known as:** Linguistic competence, Linguistic competency, Language ability, Language competence, Linguistic proficiency, Language capability, Language-specific performance, Linguistic capability, Linguistic ability, Language skills  

## State of the Field

**Definition agreement:** Complementary. Most papers define language proficiency as a model's latent or underlying competence in a language, especially its ability to understand and generate text and to encode grammatical, syntactic, morphological, and semantic structure. A few papers narrow this to particular manifestations such as acceptability judgments, grammatical and script correctness, cross language proficiency gaps, or retention under different training regimes, but these read as different facets or operationalizations of the same model-level phenomenon rather than different constructs.

**Space of definitions.** Across the papers, the prevailing usage treats language proficiency as an underlying model capability, usually framed as competence in understanding and generating language and often tied to formal linguistic knowledge such as syntax, morphology, semantics, vocabulary, or orthography. Many definitions describe it as latent or inherent, sometimes as a higher-order or compositional ability that emerges over training, and sometimes as proficiency in a particular language whose level reflects training data amount, quality, or coverage. Smaller lines of work define it more narrowly through acceptable versus unacceptable sentence discrimination or through a target-source language capacity gap, while another broadens it to stable language skills across tasks such as sentiment classification and factual reasoning.

**Space of facets.** Papers break the construct into formal linguistic facets, including agreement, binding, island constraints, morphology, syntax, semantics, orthography, vocabulary, synonyms and antonyms, and in one case pragmatics; one paper also treats coherent, grammatically accurate sentence generation as part of it. The naming is broad: linguistic competence, language competence, linguistic proficiency, language ability, language capability, linguistic capability, and language skills are used for overlapping ideas. At the same time, some labels narrow the scope, with language-specific performance referring to accuracy in a given language and language ability referring to the gap between target and source languages; another paper places language-specific performance alongside semantic similarity and linguistic alignment in multilingual in-context learning.

**Space of measurement.** Papers link the construct to 8 measurement instruments and no behavioral indicators. The most frequently linked instruments are BLiMP, MMLU, GLUE, Open LLM Leaderboard, and SyntaxGym. Operationalizations range from instruments explicitly described as measuring formal linguistic competence, such as BLiMP and SyntaxGym, to an average score across six tasks used as an indicator of overall language proficiency; other linked instruments include linguistic minimal-pair and ZeroSpeech-style objective evaluations. These operationalizations often match definitions centered on formal linguistic knowledge, but some broaden the construct to overall performance across diverse tasks.

**Links.** Beyond measurement, papers make only a few construct-level claims. One paper claims a causal relationship from Alignment to language proficiency, with evidence that removing some benign concepts lowers linguistic capabilities, and one paper claims a causal relationship from language proficiency to Cross-programming-language generalization, stating that improving target-language proficiency can alleviate a transfer limitation. No correlates or related links are reported.

## Sources

**[Geometric Signatures of Compositionality Across a Language Model's Lifetime](https://aclanthology.org/2025.acl-long.265.pdf) (as "Linguistic competence")**
> The latent ability of a language model to perform higher-order linguistic tasks requiring syntactic and semantic understanding, which emerges over training and is marked by phase transitions in behavior and representation.

**[QFrCoLA: a Quebec-French Corpus of Linguistic Acceptability Judgments](https://aclanthology.org/2025.emnlp-main.6.pdf) (as "Linguistic competency")**
> A model's general capability in a language, assessed by its ability to correctly distinguish acceptable sentences from unacceptable ones.

**[Babysit A Language Model From Scratch: Interactive Language Learning by Trials and Demonstrations](https://aclanthology.org/2025.naacl-long.46.pdf) (as "Language competence")**
> The underlying level of linguistic proficiency a model exhibits at a given developmental stage, inferred from its output quality relative to training progress.

**[ITALIC: An Italian Culture-Aware Natural Language Benchmark](https://aclanthology.org/2025.naacl-long.68.pdf) (as "Linguistic proficiency")**
> The underlying capacity of a model to master the structural and grammatical rules of a language, including morphology, syntax, orthography, and vocabulary usage in context.

**[Large Language Models Are Cross-Lingual Knowledge-Free Reasoners](https://aclanthology.org/2025.naacl-long.72.pdf)**
> The model's competence in understanding and generating text in a particular language, influenced by the amount and quality of training data for that language.

**[AdaMergeX: Cross-Lingual Transfer with Large Language Models via Adaptive Adapter Merging](https://aclanthology.org/2025.naacl-long.493.pdf) (as "Language ability")**
> The model's general proficiency in a given language, operationalized as the capacity gap between a target language and a source language, independent of specific tasks.

**[SEA: Supervised Embedding Alignment for Token-Level Visual-Textual Integration in MLLMs](https://aclanthology.org/2025.emnlp-main.55.pdf) (as "Language capability")**
> The model's underlying proficiency in understanding and generating human language, which can be preserved or degraded during multimodal adaptation.

**[Balanced Multi-Factor In-Context Learning for Multilingual Large Language Models](https://aclanthology.org/2025.emnlp-main.1016.pdf) (as "Language-specific performance")**
> The latent capability of a multilingual LLM to perform accurately in a particular language, reflecting differences in training data coverage and model fluency.

**[Ada-K Routing: Boosting the Efficiency of MoE-based LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/df22a19686a558e74f038e6277a51f68-Paper-Conference.pdf) (as "Linguistic capability")**
> The model's underlying ability to maintain language modeling performance while being optimized for routing efficiency.

**[Plug-in and Fine-tuning: Bridging the Gap between Small Language Models and Large Language Models](https://aclanthology.org/2025.acl-long.271.pdf) (as "Linguistic ability")**
> The latent capacity of a model to understand and produce language effectively, including syntax, semantics, and pragmatics, derived from pre-training on diverse textual data.

**[Neuron Empirical Gradient: Discovering and Quantifying Neurons' Global Linear Controllability](https://aclanthology.org/2025.acl-long.1041.pdf) (as "Language skills")**
> General cognitive abilities of a language model to perform diverse language understanding tasks, such as sentiment classification or factual reasoning, which are stably represented across contexts and can be probed through neuron behavior.

## Relationships

### Language proficiency →
- **MMLU** (measurements) — *measured_by*
  > To validate that the detoxified representations of PaCE are still effective on general linguistic capability... we apply PaCE to detoxify MMLU questions... to show that the detoxification will not significantly degrade the LLM's reasoning capability.
  - [PaCE: Parsimonious Concept Engineering for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b3cca813dcd78fe75e4d4df2e6a0b1a7-Paper-Conference.pdf)
- **BLiMP** (measurements) — *measured_by*
  > BLiMP provides a fine-grained evaluation of core linguistic competence. (Section 2)
  - [SLlama: Parameter-Efficient Language Model Architecture for Enhanced Linguistic Competence Under Strict Data Constraints](https://aclanthology.org/2025.emnlp-main.1198.pdf)
- **Open LLM Leaderboard** (measurements) — *measured_by*
  > The average score across the 6 tasks (Average column) is commonly used as an indicator of overall language proficiency. (Table 2)
  - [TAID: Temporally Adaptive Interpolated Distillation for Efficient Knowledge Transfer in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/e664650506f1cf2b4696df892147c06e-Paper-Conference.pdf)
- **sWUGGY** (measurements) — *measured_by*
  > We adopt the commonly-used metrics (Borsos et al., 2023; Hassid et al., 2023; Maiti et al., 2024) from the ZeroSpeech challenge (Nguyen et al., 2020): sWUGGY and sBLIMP to measure language capability objectively.
  - [A Variational Framework for Improving Naturalness in Generative Spoken Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25z/chen25z.pdf)
- **sBLIMP** (measurements) — *measured_by*
  > We adopt the commonly-used metrics (Borsos et al., 2023; Hassid et al., 2023; Maiti et al., 2024) from the ZeroSpeech challenge (Nguyen et al., 2020): sWUGGY and sBLIMP to measure language capability objectively.
  - [A Variational Framework for Improving Naturalness in Generative Spoken Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25z/chen25z.pdf)
- **TurBLiMP** (measurements) — *measured_by*
  > We introduce TurBLiMP, the first Turkish benchmark of linguistic minimal pairs, designed to evaluate the linguistic abilities of monolingual and multilingual language models (LMs). (Abstract)
  - [TurBLiMP: A Turkish Benchmark of Linguistic Minimal Pairs](https://aclanthology.org/2025.emnlp-main.834.pdf)
- **Cross-lingual generalization** (constructs) — *causes*
  > "This suggests that proficiency in Arabic and Hebrew limits the cross-linguistic transfer of the knowledge-free reasoning component, while improving proficiency in the target language can alleviate this limitation."
  - [Large Language Models Are Cross-Lingual Knowledge-Free Reasoners](https://aclanthology.org/2025.naacl-long.72.pdf)
