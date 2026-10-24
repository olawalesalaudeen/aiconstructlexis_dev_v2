# Natural language inference
**Type:** Behavior  
**Referenced in:** 145 papers  
**Also known as:** Semantic inference, Textual entailment prediction, Hypothesis verification, Cross-lingual sentence classification, Textual entailment, NLI, Sentence entailment, Textual entailment task, Entailment prediction, Textual entailment recognition  

## State of the Field

**Space of definitions.** Across papers, the dominant framing is a premise-hypothesis inference task, where a model judges the relation between two sentences and usually assigns entailment, contradiction, or neutral or undetermined. Many definitions restate the labels as whether the hypothesis is true, false, or unknown given the premise, and some describe the output as a probability distribution over these three options. A smaller line narrows the task to whether the hypothesis is supported by, or can be logically inferred from, the premise, sometimes in binary entailment versus not-entailment or true versus false form.

**Variants.** Papers use several near-synonymous names, including textual entailment, sentence entailment, semantic inference, textual entailment prediction, and hypothesis verification. Most variants keep the same sentence-pair format, but papers also study multilingual or cross-lingual versions, a multi-sentence premise setting, commonsense NLI framed as predicting the most logical continuation of an event, biomedical entailment, and facts-and-rules settings where the answer is True, False, or Unknown. A few papers recast the task from classification into generation, for example asking whether one sentence entails another with answers like Yes, Maybe, or No.

**Space of elicitation and scores.** Papers link it to 19 measurement instruments. The most common are MNLI, RTE, XNLI, QNLI, and GLUE, which are used as datasets or benchmarks for sentence-pair inference; other papers use additional multilingual, adversarial, explanation-oriented, commonsense, and logic-focused NLI instruments, and one paper uses an evaluation tool to report accuracy. Some instruments preserve the three-way label space, while others operationalize the task as binary classification.

**What it is taken as evidence of.** Papers do not converge on a single construct that this behavior reflects. The most direct measurement claims use it to measure natural language understanding, general ability, and, in one formulation, consistency, with one paper calling NLI a proxy for the consistency condition. Other work relates it to knowledge, sometimes specifically commonsense knowledge, and a separate line claims causal relationships from reasoning, including logical reasoning, to NLI performance.

## Sources

**[Adapting Large Language Models via Reading Comprehension](https://proceedings.iclr.cc/paper_files/paper/2024/file/d51cd79a85833b022841f7a2383b32d3-Paper-Conference.pdf)**
> The task of determining whether a 'hypothesis' sentence is true (entailment), false (contradiction), or undetermined (neutral) given a 'premise' sentence.

**[Enhancing In-Context Learning Performance with just SVD-Based Weight Pruning: A Theoretical Perspective](https://proceedings.neurips.cc/paper_files/paper/2024/file/448444518637da106d978ae7409d9789-Paper-Conference.pdf) (as "Textual entailment")**
> Deciding whether a hypothesis is supported by a premise in a sentence-pair classification format.

**[DisLoRA: Task-specific Low-Rank Adaptation via Orthogonal Basis from Singular Value Decomposition](https://aclanthology.org/2025.emnlp-main.694.pdf) (as "Semantic inference")**
> The task of determining the logical relationship between two sentences, such as entailment or contradiction.

**[Multilingual Language Model Pretraining using Machine-translated Data](https://aclanthology.org/2025.emnlp-main.1426.pdf) (as "Textual entailment prediction")**
> The task of determining whether a 'hypothesis' sentence can be logically inferred from a 'premise' sentence.

**[LogicTree: Structured Proof Exploration for Coherent and Rigorous Logical Reasoning with Large Language Models](https://aclanthology.org/2025.emnlp-main.1054.pdf) (as "Hypothesis verification")**
> Determining whether a hypothesis is true, false, or unknown from a set of facts and rules.

**[MrT5: Dynamic Token Merging for Efficient Byte-level Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/8e9dd32cb9f9bff397f1a7ebd07010f2-Paper-Conference.pdf) (as "Cross-lingual sentence classification")**
> Assigning a natural language inference label to sentences across multiple languages.

**[AlphaEdit: Null-Space Constrained Knowledge Editing for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/29c8c615b3187ee995029284702d3f43-Paper-Conference.pdf) (as "NLI")**
> A natural language inference evaluation used to assess whether the model can infer logical relations between sentence pairs.

**[Understanding Catastrophic Forgetting in Language Models via Implicit Inference](https://proceedings.iclr.cc/paper_files/paper/2024/file/692ae28fda9bfbde7c01b13bf5a03395-Paper-Conference.pdf) (as "Sentence entailment")**
> The task of determining whether a 'hypothesis' sentence is true, false, or neutral given a 'premise' sentence.

**[SylloBio-NLI: Evaluating Large Language Models on Biomedical Syllogistic Reasoning](https://aclanthology.org/2025.naacl-long.371.pdf) (as "Textual entailment task")**
> A binary classification task where models determine whether a conclusion logically follows from a set of premises, focusing on logical validity in a biomedical context.

**[Entangled Relations: Leveraging NLI and Meta-analysis to Enhance Biomedical Relation Extraction](https://aclanthology.org/2025.naacl-long.165.pdf) (as "Entailment prediction")**
> Determining whether a hypothesis logically follows from a given premise in a natural language inference setup.

**[SR-LLM: Rethinking the Structured Representation in Large Language Model](https://aclanthology.org/2025.acl-long.172.pdf) (as "Textual entailment recognition")**
> Assessing whether one sentence logically follows from another, classifying the relationship as entailment, contradiction, or neutrality.

## Relationships

### Natural language inference →
- **MNLI** (measurements) — *measured_by*
  > “Natural Language Inference (MNLI”
  - [An LLM can Fool Itself: A Prompt-Based Adversarial Attack](https://proceedings.iclr.cc/paper_files/paper/2024/file/0c72285e193ec90dca93258128698cfb-Paper-Conference.pdf)
- **RTE** (measurements) — *measured_by*
  > “Natural Language Inference (MNLI, RTE, QNLI)”
  - [An LLM can Fool Itself: A Prompt-Based Adversarial Attack](https://proceedings.iclr.cc/paper_files/paper/2024/file/0c72285e193ec90dca93258128698cfb-Paper-Conference.pdf)
- **XNLI** (measurements) — *measured_by*
  > a language understanding dataset XNLI [Conneau et al., 2018] in natural language inference (NLI) task were used. (Section 4.2)
  - [MindMerger: Efficiently Boosting LLM Reasoning in non-English Languages](https://proceedings.neurips.cc/paper_files/paper/2024/file/3bf80b34f731313b8292f4578e820c90-Paper-Conference.pdf)
- **QNLI** (measurements) — *measured_by*
  > “Natural Language Inference (MNLI, RTE, QNLI)”
  - [An LLM can Fool Itself: A Prompt-Based Adversarial Attack](https://proceedings.iclr.cc/paper_files/paper/2024/file/0c72285e193ec90dca93258128698cfb-Paper-Conference.pdf)
- **GLUE** (measurements) — *measured_by*
  > on the General Language Understanding Evaluation (GLUE) Wang et al. (2018) benchmark, which includes two single-sentence classification, three similarity and paraphrase and four natural language inference datasets.
  - [Maintaining Structural Integrity in Parameter Spaces for Parameter Efficient Fine-tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/08487598819cba9feca884ef0d442950-Paper-Conference.pdf)
- **SNLI** (measurements) — *measured_by*
  > SNLI (Bowman et al., 2015) is an NLI inference task dataset with 10K samples and 3 labels – entailment, neutral and contradiction. (Section 3)
  - [Beyond correlation: The impact of human uncertainty in measuring the effectiveness of automatic evaluation and LLM-as-a-judge](https://proceedings.iclr.cc/paper_files/paper/2025/file/8798321486948322be2b4d658744ba72-Paper-Conference.pdf)
- **HellaSwag** (measurements) — *measured_by*
  > (e) natural language inference (HellaSwag (Zellers et al., 2019)) (Section 4.2)
  - [Think before you speak: Training Language Models With Pause Tokens](https://proceedings.iclr.cc/paper_files/paper/2024/file/76917808731dae9e6d62c2a7a6afb542-Paper-Conference.pdf)
- **CB** (measurements) — *measured_by*
  > Natural language inference: CB (De Marneff et al., 2019) and WiC (Pilehvar & Camacho-Collados, 2018) from superGLUE (Wang et al., 2019) (Section 5.1).
  - [Two-stage LLM Fine-tuning with Less Specialization and More Generalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/597254dc45be8c166d3ccf0ba2d56325-Paper-Conference.pdf)
- **ANLI** (measurements) — *measured_by*
  > MNLI (Multi-Genre Natural Language Inference) and ANLI (Adversarial Natural Language Inference) benchmark a models understanding of entailment, contradiction, and neutrality across genres and adversarially selected examples.
  - [EncryptedLLM: Privacy-Preserving Large Language Model Inference via GPU-Accelerated Fully Homomorphic Encryption](https://raw.githubusercontent.com/mlresearch/v267/main/assets/de-castro25a/de-castro25a.pdf)
- **e-SNLI** (measurements) — *measured_by*
  > The task of e-SNLI is to determine the logical relationship (contradiction, neutral or entailment) between the premise and hypothesis. (Section 4.1)
  - [Self-Critique and Refinement for Faithful Natural Language Explanations](https://aclanthology.org/2025.emnlp-main.427.pdf)
- **WiC** (measurements) — *measured_by*
  > Natural language inference: CB (De Marneff et al., 2019) and WiC (Pilehvar & Camacho-Collados, 2018) from superGLUE (Wang et al., 2019) (Section 5.1).
  - [Two-stage LLM Fine-tuning with Less Specialization and More Generalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/597254dc45be8c166d3ccf0ba2d56325-Paper-Conference.pdf)
- **WNLI** (measurements) — *measured_by*
  > for inference tasks, the RTE and WNLI (both from GLUE) datasets (Section 4).
  - [PortLLM: Personalizing Evolving Large Language Models with Training-Free and Portable Model Patches](https://proceedings.iclr.cc/paper_files/paper/2025/file/59c444334e6bcf4e796f59f6d0bcae2a-Paper-Conference.pdf)
- **PIQA** (measurements) — *measured_by*
  > Natural Language Inference (NLI) using PIQA (Bisk et al., 2020) and WinoGrande (Sakaguchi et al., 2020) (Section 4).
  - [It Helps to Take a Second Opinion: Teaching Smaller LLMs To Deliberate Mutually via Selective Rationale Optimisation](https://proceedings.iclr.cc/paper_files/paper/2025/file/bc12914d66b41b6bfc2d3a5decdb498b-Paper-Conference.pdf)
- **WinoGrande** (measurements) — *measured_by*
  > Natural Language Inference (NLI) using PIQA (Bisk et al., 2020) and WinoGrande (Sakaguchi et al., 2020) (Section 4).
  - [It Helps to Take a Second Opinion: Teaching Smaller LLMs To Deliberate Mutually via Selective Rationale Optimisation](https://proceedings.iclr.cc/paper_files/paper/2025/file/bc12914d66b41b6bfc2d3a5decdb498b-Paper-Conference.pdf)
- **Relation extraction** (behaviors tasks) — *causes*
  > Recent research efforts have explored the potential of leveraging natural language inference (NLI) techniques to enhance relation extraction (RE). (Abstract)
  - [Entangled Relations: Leveraging NLI and Meta-analysis to Enhance Biomedical Relation Extraction](https://aclanthology.org/2025.naacl-long.165.pdf)
- **LogicNLI** (measurements) — *measured_by*
  > We chose three representative datasets: LogicNLI (Tian et al., 2021) for natural language inference... (Section 5.2.1)
  - [Few-Shot Natural Language to First-Order Logic Translation via Code Generation](https://aclanthology.org/2025.naacl-long.547.pdf)
- **HANS** (measurements) — *measured_by*
  > In particular, for NLI, we employed HANS (McCoy et al., 2019), NAN (Truong et al., 2022), PISP (Liu et al., 2020a,b), ST (Naik et al., 2018), and ANLIR1–R3 (Nie et al., 2020a)... (Section 4.1)
  - [Exploring Explanations Improves the Robustness of In-Context Learning](https://aclanthology.org/2025.acl-long.1155.pdf)
- **PubMedQA** (measurements) — *measured_by*
  > For yes/no QA, we select PubMedQA (Jin et al., 2019), an English natural language inference task related to medical research papers. (Section 4.2)
  - [AQuilt: Weaving Logic and Self-Inspection into Low-Cost, High-Relevance Data Synthesis for Specialist LLMs](https://aclanthology.org/2025.emnlp-main.293.pdf)

### Associated with
- **Knowledge** (constructs)
  > notably NLI tasks, which require integrating knowledge and reasoning. (Section 1)
  - [Enhancing Reasoning Capabilities of LLMs via Principled Synthetic Logic Corpus](https://proceedings.neurips.cc/paper_files/paper/2024/file/8678da90126aa58326b2fc0254b33a8c-Paper-Conference.pdf)
- **Textual reasoning** (behaviors tasks)
  > Natural language reasoning suite consists of 11 benchmarks that involve natural language based reasoning such as Question Answering, natural language inference (NLI), sentence completion, co-reference resolution, and general intelligence.
  - [To Code or Not To Code? Exploring Impact of Code in Pre-training](https://proceedings.iclr.cc/paper_files/paper/2025/file/c513d1786f85531fac7050947736265f-Paper-Conference.pdf)
- **Grounded response generation** (behaviors tasks)
  > If a tree Ti shows how H is entailed from a set of corpus texts Li, we say H is grounded in the corpus.
  - [From Models to Microtheories: Distilling a Model's Topical Knowledge for Grounded Question-Answering](https://proceedings.iclr.cc/paper_files/paper/2025/file/77d52754ff6b2de5a5d96ee921b6b3cd-Paper-Conference.pdf)
- **Reasoning** (constructs)
  > notably NLI tasks, which require integrating knowledge and reasoning. (Section 1)
  - [Enhancing Reasoning Capabilities of LLMs via Principled Synthetic Logic Corpus](https://proceedings.neurips.cc/paper_files/paper/2024/file/8678da90126aa58326b2fc0254b33a8c-Paper-Conference.pdf)
- **Logical reasoning** (constructs)
  > NLI is similar to deductive reasoning in assessing whether a premise supports or contradicts a hypothesis. (Section 6.3)
  - [Enhancing Reasoning Capabilities of LLMs via Principled Synthetic Logic Corpus](https://proceedings.neurips.cc/paper_files/paper/2024/file/8678da90126aa58326b2fc0254b33a8c-Paper-Conference.pdf)
- **General ability** (constructs)
  > we perform General Capability Tests using six natural language tasks... Specifically, the evaluation tasks include: ... 6. NLI (Natural Language Inference) (Section 4.3).
  - [AlphaEdit: Null-Space Constrained Knowledge Editing for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/29c8c615b3187ee995029284702d3f43-Paper-Conference.pdf)
- **Consistency** (constructs)
  > “NLI evaluates NLP models’ ability to capture logical relationships between sentences, serving as a proxy for the consistency condition.”
  - [A Novel Computational Modeling Foundation for Automatic Coherence Assessment](https://aclanthology.org/2025.naacl-long.277.pdf)
- **Natural language understanding** (constructs)
  > In the recent past, a popular way of evaluating natural language understanding (NLU), was to consider a model’s ability to perform natural language inference (NLI) tasks. (Abstract)
  - [Lost in Inference: Rediscovering the Role of Natural Language Inference for Large Language Models](https://aclanthology.org/2025.naacl-long.466.pdf)
