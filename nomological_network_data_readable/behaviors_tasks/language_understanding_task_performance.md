# Language understanding task performance
**Type:** Behavior  
**Referenced in:** 17 papers  
**Also known as:** Text comprehension, Language understanding, Natural language understanding, Natural language understanding tasks  

## State of the Field

**Space of definitions.** Across papers, the dominant framing is performance on observable language or natural language understanding tasks, often organized as benchmark collections such as GLUE or SuperGLUE. Definitions converge on tasks that require comprehending text, including classification, similarity and paraphrase, natural language inference or textual entailment, sentiment analysis, and question answering. A narrower strand treats it as text comprehension, where success means answering questions or producing outputs that require understanding and integrating information from text, and one definition also includes grammatical correctness among the target tasks.

**Variants.** Papers use several near-synonyms, especially language understanding, natural language understanding, text comprehension, and natural language understanding tasks. The recurring variants are single-sentence classification, similarity and paraphrase, natural language inference, sentiment analysis, question answering, and reading comprehension. A smaller body of work studies multilingual versions through XNLI, XQuAD, and Belebele, and one paper places text comprehension in a multimodal setting through TextVQA.

**Space of elicitation and scores.** Papers link this behavior to 37 measurement instruments. The most frequently linked instruments are MMLU, HellaSwag, BoolQ, GLUE, and OpenBookQA, and papers usually operationalize the behavior with benchmark suites or task datasets, alongside other benchmarks and evaluation frameworks. The snippets also show zero-shot and few-shot scoring, as well as broader evaluations over grouped task families.

**What it is taken as evidence of.** Papers do not present a single, shared construct-level interpretation of this behavior. It is linked to 4 constructs overall: one paper claims a causal relationship from Cross-lingual alignment to this behavior, another claims a causal relationship from this behavior to Paraphrastic robustness, and separate papers report it as related to Reasoning and to Table reasoning. Construct-level links are less common than measurement links.

## Sources

**[Select-Then-Decompose: From Empirical Analysis to Adaptive Selection Strategy for Task Decomposition in Large Language Models](https://aclanthology.org/2025.emnlp-main.278.pdf) (as "Text comprehension")**
> Answering questions or producing outputs that require understanding and integrating information from text.

**[The Role of Outgoing Connection Heterogeneity in Feedforward Layers of Large Language Models](https://aclanthology.org/2025.emnlp-main.1143.pdf) (as "Language understanding")**
> Performing a range of language understanding tasks such as those included in SuperGLUE.

**[Not All Adapters Matter: Selective Adapter Freezing for Memory-Efficient Fine-Tuning of Language Models](https://aclanthology.org/2025.naacl-long.480.pdf) (as "Natural language understanding")**
> Performing classification, similarity, paraphrase, and inference tasks on text inputs.

**[LIFT the Veil for the Truth: Principal Weights Emerge after Rank Reduction for Reasoning-Focused Supervised Fine-Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25ba/liu25ba.pdf) (as "Natural language understanding tasks")**
> A collection of observable tasks designed to test language comprehension, such as sentiment analysis, textual entailment, and grammatical correctness.

## Relationships

### Language understanding task performance →
- **MMLU** (measurements) — *measured_by*
  > we evaluate both the zero-shot and few-shot performance of the LLMs on Massively Multitask Language Understanding (MMLU) benchmark (Hendrycks et al., 2021). (Section 4.1)
  - [QA-LoRA: Quantization-Aware Low-Rank Adaptation of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/e6c2e85db1f1039177c4495ccd399ac4-Paper-Conference.pdf)
- **GLUE** (measurements) — *measured_by*
  > MDMs are only advantageous in language understanding tasks (surpassing ARMs and BERT on the GLUE metric (Wang et al., 2018)). (Section 3.3)
  - [Masked Diffusion Models are Secretly Time-Agnostic Masked Models and Exploit Inaccurate Categorical Sampling](https://proceedings.iclr.cc/paper_files/paper/2025/file/9e3b203e72c4e058de26d02a92a81844-Paper-Conference.pdf)
- **HellaSwag** (measurements) — *measured_by*
  > Table 1 presents a comprehensive breakdown of downstream evaluation results for our models and multiple baselines on a standard set of commonsense reasoning and language understanding tasks: WinoGrande [33], HellaSwag [45], PIQA [2], ARC-Challenge and ARC-Easy [6], and LAMBADA [29] (Section 5).
  - [Transformers to SSMs: Distilling Quadratic Knowledge to Subquadratic Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/3848fef259495bfd04d60cdc5c1b4db7-Paper-Conference.pdf)
- **lm-evaluation-harness** (measurements) — *measured_by*
  > Then we utilize popular language benchmarks provided in the open-sourced lm-evaluation-harness project [18] for evaluation
  - [MambaTree: Tree Topology is All You Need in State Space Model](https://proceedings.neurips.cc/paper_files/paper/2024/file/89b89c04f55ea7c7ca989992bb6a98c0-Paper-Conference.pdf)
- **ARC-Challenge** (measurements) — *measured_by*
  > Table 1 presents a comprehensive breakdown of downstream evaluation results for our models and multiple baselines on a standard set of commonsense reasoning and language understanding tasks: WinoGrande [33], HellaSwag [45], PIQA [2], ARC-Challenge and ARC-Easy [6], and LAMBADA [29] (Section 5).
  - [Transformers to SSMs: Distilling Quadratic Knowledge to Subquadratic Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/3848fef259495bfd04d60cdc5c1b4db7-Paper-Conference.pdf)
- **PIQA** (measurements) — *measured_by*
  > Table 1 presents a comprehensive breakdown of downstream evaluation results for our models and multiple baselines on a standard set of commonsense reasoning and language understanding tasks: WinoGrande [33], HellaSwag [45], PIQA [2], ARC-Challenge and ARC-Easy [6], and LAMBADA [29] (Section 5).
  - [Transformers to SSMs: Distilling Quadratic Knowledge to Subquadratic Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/3848fef259495bfd04d60cdc5c1b4db7-Paper-Conference.pdf)
- **WinoGrande** (measurements) — *measured_by*
  > Table 1 presents a comprehensive breakdown of downstream evaluation results for our models and multiple baselines on a standard set of commonsense reasoning and language understanding tasks: WinoGrande [33], HellaSwag [45], PIQA [2], ARC-Challenge and ARC-Easy [6], and LAMBADA [29] (Section 5).
  - [Transformers to SSMs: Distilling Quadratic Knowledge to Subquadratic Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/3848fef259495bfd04d60cdc5c1b4db7-Paper-Conference.pdf)
- **SuperGLUE** (measurements) — *measured_by*
  > The first benchmark, SuperGLUE, is a collection of eight challenging language understanding and reasoning tasks.
  - [GaussMark: A Practical Approach for Structural Watermarking of Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/block25a/block25a.pdf)
- **ARC-Easy** (measurements) — *measured_by*
  > Table 1 presents a comprehensive breakdown of downstream evaluation results for our models and multiple baselines on a standard set of commonsense reasoning and language understanding tasks: WinoGrande [33], HellaSwag [45], PIQA [2], ARC-Challenge and ARC-Easy [6], and LAMBADA [29] (Section 5).
  - [Transformers to SSMs: Distilling Quadratic Knowledge to Subquadratic Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/3848fef259495bfd04d60cdc5c1b4db7-Paper-Conference.pdf)
- **WSC** (measurements) — *measured_by*
  > Language Understanding (LU): Lambada-OpenAI [44], Hellaswag-0-shot [65], Winograd-3-shots [30], and WinoGrande-5-shots [54].
  - [Dataset Decomposition: Faster LLM Training with Variable Sequence Length Curriculum](https://proceedings.neurips.cc/paper_files/paper/2024/file/3f9bf45ea04c98ad7cb857f951f499e2-Paper-Conference.pdf)
- **XNLI** (measurements) — *measured_by*
  > a language understanding dataset XNLI [Conneau et al., 2018] in natural language inference (NLI) task were used. (Section 4.2)
  - [MindMerger: Efficiently Boosting LLM Reasoning in non-English Languages](https://proceedings.neurips.cc/paper_files/paper/2024/file/3bf80b34f731313b8292f4578e820c90-Paper-Conference.pdf)
- **XQuAD** (measurements) — *measured_by*
  > Employing various benchmark tasks, including XQuAD (Artetxe et al., 2020) for understanding, MGSM (Shi et al., 2022) for reasoning, X-CSQA (Lin et al., 2021) for knowledge extraction, and XLSum for generation (Hasan et al., 2021)... (Section 2)
  - [How do Large Language Models Handle Multilingualism?](https://proceedings.neurips.cc/paper_files/paper/2024/file/1bd359b32ab8b2a6bbafa1ed2856cf40-Paper-Conference.pdf)
- **LAMBADA** (measurements) — *measured_by*
  > “a standard set of commonsense reasoning and language understanding tasks: WinoGrande [33], HellaSwag [45], PIQA [2], ARC-Challenge and ARC-Easy [6], and LAMBADA [29].”
  - [Transformers to SSMs: Distilling Quadratic Knowledge to Subquadratic Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/3848fef259495bfd04d60cdc5c1b4db7-Paper-Conference.pdf)
- **TextVQA** (measurements) — *measured_by*
  > Benchmarks that involve spatial understanding and fine-grained features include ... text comprehension (TextVQA; Singh et al. 2019). (Section 5)
  - [Locality Alignment Improves Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ce6326ac4794bb04d5eb16f597446baf-Paper-Conference.pdf)
- **HotpotQA** (measurements) — *measured_by*
  > Comparison of decomposition approaches across benchmarks. Method ... Text Understanding ... HotpotQA (Table 2)
  - [Select-Then-Decompose: From Empirical Analysis to Adaptive Selection Strategy for Task Decomposition in Large Language Models](https://aclanthology.org/2025.emnlp-main.278.pdf)

### → Language understanding task performance
- **Masked language modeling** (behaviors tasks) — *causes*
  > MLM (Devlin et al., 2019; Liu et al., 2019) is prominently used to pretrain bidirectional text encoders to achieve superior performance for language understanding (Section 5)
  - [Representation Deficiency in Masked Language Modeling](https://proceedings.iclr.cc/paper_files/paper/2024/file/bfde7fb279709eff53faa074b45840d8-Paper-Conference.pdf)
