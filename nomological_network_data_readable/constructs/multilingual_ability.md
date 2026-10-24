# Multilingual ability
**Type:** Construct  
**Referenced in:** 76 papers  
**Also known as:** Multilingual capability, Multilinguality, Multilingual performance, Bilingual ability, Multilingual proficiency, Multilingualism, Multilingual capabilities, Multi-lingual abilities, General multilingual utility, Multilingual competence  

## State of the Field

**Definition agreement:** Consensus. Most papers define multilingual ability as a model-level capacity to understand, process, generate, or perform tasks across multiple languages, often beyond English. A few papers narrow this to particular domains or stress consistent performance across languages, underrepresented languages, or cultural and grammatical quality, but these are mainly scope restrictions or emphases on the same core phenomenon rather than different constructs.

**Space of definitions.** Across the surveyed work, multilingual ability is most commonly framed as a model capacity, often described as latent or underlying, to understand, process, generate, or perform tasks across multiple languages. Most definitions keep this broad and emphasize coverage beyond English, consistency across languages or writing systems, and in some cases fluency, reasoning, or maintaining performance in underrepresented languages. A smaller line of work narrows the construct to particular settings, such as comprehension of non-English text needed to resolve a query, doing the same task when the instruction or output language changes, bilingual English and Chinese medical vision-language use, or preserving cultural nuance and grammatical correctness.

**Space of facets.** Papers use several near-synonymous labels for largely the same idea, including multilingual capability, multilinguality, multilingual performance, multilingual proficiency, multilingualism, and multilingual competence, with narrower variants such as bilingual ability and general multilingual utility for non-safety-related performance across languages. The construct is commonly decomposed into understanding, generation, reasoning, and task performance, with some definitions adding language fidelity in vision-language settings, linguistic naturalness across dialects and registers, or balance between dominant and underrepresented languages. Some authors separate it from neighboring constructs rather than merging them: multilingual capability alone is said not to guarantee cultural understanding, Japanese language skill and cultural understanding are said to merit separate discussion, and one shopping benchmark divides multilingual skill into concept understanding and user behavior alignment.

**Space of measurement.** Papers operationalize the construct mainly with benchmark-based evaluation: it is linked to 15 measurement instruments and 2 behavioral indicators. The most frequently linked instruments are TyDi QA, MMMLU, A-OKVQA, ARC, and Belebele, and the broader measurement space includes multilingual question answering, translated tasks, native or parallel multilingual benchmark suites, retrieval, and code tasks. These operationalizations mostly test performance when tasks or content are presented in multiple languages, which matches the dominant definitions, though some are narrower than definitions that also include cultural nuance, language fidelity, or broad non-safety utility; the two behavioral indicators are linked as related rather than direct measures.

**Links.** A few papers make directional claims around the construct. One paper claims a causal relationship from model similarity to multilingual ability, describing alignment of the internal forward process of non-dominant languages with that of a dominant language, and another claims a causal relationship from cross-lingual generalization to multilingual ability through cross-lingual transfer from high-resource languages. Papers also report that multilingual ability is related to expert specialization, language bias, cross-lingual generalization, and two behavioral indicators; no correlational link is reported.

## Sources

**[Centurio: On Drivers of Multilingual Ability of Large Vision-Language Model](https://aclanthology.org/2025.acl-long.143.pdf)**
> The latent capacity of a model to understand and generate content across multiple languages, encompassing both language understanding and language fidelity in vision-language contexts.

**[NusaAksara: A Multimodal and Multilingual Benchmark for Preserving Indonesian Indigenous Scripts](https://aclanthology.org/2025.acl-long.1377.pdf) (as "Multilingual capability")**
> The ability of a model to understand and generate text across a diverse range of languages and writing systems.

**[Browsing Lost Unformed Recollections: A Benchmark for Tip-of-the-Tongue Search and Reasoning](https://aclanthology.org/2025.acl-long.406.pdf) (as "Multilinguality")**
> The ability to understand and reason using textual information in languages other than English, particularly when such content is essential to resolving a query.

**[M-Wanda: Improving One-Shot Pruning for Multilingual LLMs](https://aclanthology.org/2025.emnlp-main.1369.pdf) (as "Multilingual performance")**
> The latent ability of a model to maintain strong language understanding and task performance across multiple languages, particularly balancing performance between high-resource and underrepresented languages.

**[Interpretable Bilingual Multimodal Large Language Model for Diverse Biomedical Tasks](https://proceedings.iclr.cc/paper_files/paper/2025/file/414fd191b3246a19a55741b938380136-Paper-Conference.pdf) (as "Bilingual ability")**
> The capacity to operate in both English and Chinese for medical vision-language tasks, including report generation and question answering.

**[MoS: Unleashing Parameter Efficiency of Low-Rank Adaptation with Mixture of Shards](https://proceedings.iclr.cc/paper_files/paper/2025/file/e574db41163e700545ff4114f96b3d7a-Paper-Conference.pdf) (as "Multilingual proficiency")**
> The model's capability to understand and process information in multiple languages.

**[The BiGGen Bench: A Principled Benchmark for Fine-grained Evaluation of Language Models with Language Models](https://aclanthology.org/2025.naacl-long.303.pdf) (as "Multilingualism")**
> The ability to understand, generate, and reason in multiple languages while preserving meaning, cultural nuance, and grammatical correctness.

**[P-MMEval: A Parallel Multilingual Multitask Benchmark for Consistent Evaluation of LLMs](https://aclanthology.org/2025.emnlp-main.242.pdf) (as "Multilingual capabilities")**
> The ability of a model to perform effectively across a diverse range of tasks and languages beyond English.

**[Shopping MMLU: A Massive Multi-Task Online Shopping Benchmark for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2049d75dd13db049897562bcf7d59da8-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Multi-lingual abilities")**
> The capability of a model to understand and perform tasks across multiple languages within the online shopping domain.

**[MPO: Multilingual Safety Alignment via Reward Gap Optimization](https://aclanthology.org/2025.acl-long.1149.pdf) (as "General multilingual utility")**
> The model's overall effectiveness and performance on a wide range of non-safety-related tasks across multiple languages.

**[Grounding Multilingual Multimodal LLMs With Cultural Knowledge](https://aclanthology.org/2025.emnlp-main.1232.pdf) (as "Multilingual competence")**
> The model's ability to understand and generate text effectively across multiple languages.

## Relationships

### Multilingual ability →
- **TyDi QA** (measurements) — *measured_by*
  > We use Big Bench Hard (BBH; Suzgun et al. (2022)) as a testbed for reasoning ability, HumanEval (Chen et al., 2021) for coding ability, and TydiQA (Clark et al., 2020) for multilingual ability.
  - [SALMON: Self-Alignment with Instructable Reward Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/dda5cac5272a9bcd4bc73d90bc725ef1-Paper-Conference.pdf)
- **MMMLU** (measurements) — *measured_by*
  > To evaluate the LLMs’ capability across languages, researchers developed various multilingual benchmarks. Many rely on English translation, including XNLI (Conneau et al., 2018), MMMLU (Hendrycks et al., 2021a)... (Section 2)
  - [NOVA-63: Native Omni-lingual Versatile Assessments of 63 Disciplines](https://aclanthology.org/2025.emnlp-main.364.pdf)
- **MGSM** (measurements) — *measured_by*
  > We found all the FLAN-MOE perform poorly on multi-lingual benchmarks including TyDiQA and MGSM. (Section 4.3).
  - [Mixture-of-Experts Meets Instruction Tuning: A Winning Combination for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/5222867be1bde4fb2d8ba018c03b3be8-Paper-Conference.pdf)
- **A-OKVQA** (measurements) — *measured_by*
  > We augment A-OKVQA [34] by translating the questions and answers from English to either Chinese, Hindi, Spanish, or Swahili to test whether the VLMs are invariant to VQA in different languages. (Section 3.1)
  - [VHELM: A Holistic Evaluation of Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe2fc7dc60b55ccd8886220b40fb1f74-Paper-Datasets_and_Benchmarks_Track.pdf)
- **WMT16** (measurements) — *measured_by*
  > Multilinguality contains LAMBADA Multilingual [45], WMT 2014 [8], and WMT 2016 [52] (Section 4.1)
  - [Instruction Tuning With Loss Over Instructions](https://proceedings.neurips.cc/paper_files/paper/2024/file/7ffb43adf37b3eeaba559098bc084cc6-Paper-Conference.pdf)
- **MIRACL** (measurements) — *measured_by*
  > Our main evaluations are conducted on BEIR (Thakur et al., 2021) and MIRACL (Zhang et al., 2023), to assess the generalization of dense retrievers and multilingual retrieval capability. (Section 4.5).
  - [DRAMA: Diverse Augmentation from Large Language Models to Smaller Dense Retrievers](https://aclanthology.org/2025.acl-long.1457.pdf)
- **WildChat** (measurements) — *measured_by*
  > (2) Multilingual Capability: Assessed with MultiAlpaca and WildChat datasets, covering French, Canadian French, German, and Italian, with English questions from MKQA. (Section 5.3. FPO Achieves Accurate Control Over Model Capabilities)
  - [Constrain Alignment with Sparse Autoencoders](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yin25a/yin25a.pdf)
- **P-MMEval** (measurements) — *measured_by*
  > We develop a multilingual multi-task benchmark P-MMEVAL that includes both fundamental and capability-specialized tasks, which ensures consistent language coverage across various datasets and provides parallel samples across different languages. This benchmark facilitates a thorough assessment of multilingual capabilities and enables unprecedented fairness and consistency in evaluating cross-lingual transfer capabilities. (Section 1)
  - [P-MMEval: A Parallel Multilingual Multitask Benchmark for Consistent Evaluation of LLMs](https://aclanthology.org/2025.emnlp-main.242.pdf)
- **NOVA-63** (measurements) — *measured_by*
  > We propose NOVA-63, a general large-scale discipline-balanced, native multilingual benchmark with 89,107 questions in 14 languages across 63 academic disciplines, to comprehensively evaluate the multilingual capabilities of LLMs using native content. (Section 1)
  - [NOVA-63: Native Omni-lingual Versatile Assessments of 63 Disciplines](https://aclanthology.org/2025.emnlp-main.364.pdf)
- **MHellaSwag** (measurements) — *measured_by*
  > To evaluate the LLMs’ capability across languages, researchers developed various multilingual benchmarks. Many rely on English translation, including... MHellaswag (Dac Lai et al., 2023)... (Section 2)
  - [NOVA-63: Native Omni-lingual Versatile Assessments of 63 Disciplines](https://aclanthology.org/2025.emnlp-main.364.pdf)
- **MMLU-ProX** (measurements) — *measured_by*
  > To evaluate the LLMs’ capability across languages, researchers developed various multilingual benchmarks. Many rely on English translation, including... MMLU-ProX (Xuan et al., 2025)... (Section 2)
  - [NOVA-63: Native Omni-lingual Versatile Assessments of 63 Disciplines](https://aclanthology.org/2025.emnlp-main.364.pdf)
- **ARC-Challenge** (measurements) — *measured_by*
  > As shown in table 1, the resulting merged model surpasses each language-specific variant by up to 19% in accuracy on the ARC-Challenge dataset (Clark et al., 2018).
  - [MERGE$^3$: Efficient Evolutionary Merging on Consumer-grade GPUs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/mencattini25a/mencattini25a.pdf)

### → Multilingual ability
- **Cross-lingual generalization** (constructs) — *causes*
  > Researchers have attributed this phenomenon to cross-lingual transfer in LLM training, where linguistic patterns and knowledge acquired from high-resource languages (particularly English) appear to transfer effectively to enhance performance on the other languages (Section 1).
  - [Enhancing LLM Language Adaption through Cross-lingual In-Context Pre-training](https://aclanthology.org/2025.emnlp-main.1380.pdf)
- **Cross-lingual alignment** (constructs) — *causes*
  > We present ShifCon framework, designed to boost the performance of non-dominant languages by aligning their internal forward process with that of the dominant language.
  - [ShifCon: Enhancing Non-Dominant Language Capabilities with a Shift-based Multilingual Contrastive Framework](https://aclanthology.org/2025.acl-long.239.pdf)

### Associated with
- **Expert specialization** (constructs)
  > The ﬁne-grained specialization of FLAN-MOE models, particularly when ﬁne-tuned on English-only instructions, can inadvertently lead to a narrowing of the model’s capacity to effectively process and generate content in multiple languages. (Section 4.3).
  - [Mixture-of-Experts Meets Instruction Tuning: A Winning Combination for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/5222867be1bde4fb2d8ba018c03b3be8-Paper-Conference.pdf)
- **Language bias** (constructs)
  > Large language models (LLMs) have demonstrated multilingual capabilities, yet they are mostly English-centric due to the imbalanced training corpora. (Abstract)
  - [Is Translation All You Need? A Study on Solving Multilingual Tasks with Large Language Models](https://aclanthology.org/2025.naacl-long.485.pdf)
- **Grammatical error correction** (behaviors tasks)
  > Given the need for language learning across different languages, multilingual GEC has become an important area of research. (Section 1)
  - [Explanation based In-Context Demonstrations Retrieval for Multilingual Grammatical Error Correction](https://aclanthology.org/2025.naacl-long.251.pdf)
- **Commonsense reasoning** (constructs)
  > We measure the language model’s multilingual capabilities by evaluating its translation and common-sense reasoning performance.
  - [Just Go Parallel: Improving the Multilingual Capabilities of Large Language Models](https://aclanthology.org/2025.acl-long.1602.pdf)
