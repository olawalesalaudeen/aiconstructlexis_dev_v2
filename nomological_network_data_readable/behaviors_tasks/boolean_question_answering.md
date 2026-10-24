# Boolean question answering
**Type:** Behavior  
**Referenced in:** 22 papers  
**Also known as:** Binary question answering, True/False question answering, Yes/no question answering, True/false question answering, Judgment question answering, Polar question answering, Yes-No question answering  

## State of the Field

**Space of definitions.** Across papers, the dominant framing is a question-answering behavior with a forced binary outcome: models return "yes" or "no", and in some papers the equivalent "true" or "false", based on provided context, a text passage, or whether a statement is correct. Most formulations describe the target output as the correct binary judgment for a question or declarative statement, while a smaller line of work uses equivalent binary alternatives such as "A" or "B" for sentence-meaning comprehension.

**Variants.** Variants span reading-comprehension and passage-based settings, factual-reasoning framings, professional qualification exam true/false items, sentence-meaning questions after garden-path disambiguation, and several vision-language uses such as map queries and counter-commonsense multimodal scenarios. Papers use several near-synonymous labels, especially binary, Boolean, true/false, yes/no, and polar question answering; one profiling setup uses polar questions about whether the model would say a profiling statement, and one paper reports the format is related to cross-modal retrieval by generating yes/no questions to assess visual-textual alignment.

**Space of elicitation and scores.** Papers link this behavior to one measurement instrument, StrategyQA, described as a yes-no or binary QA dataset where answers are yes or no. Elicitation is usually direct, with instructions that the model "MUST answer Yes or No," and some scoring procedures reduce free-form output to the binary label by extracting "yes" or "no" from the response.

**What it is taken as evidence of.** Papers link it to two constructs, but not through a single shared interpretation. One paper says Boolean question answering is related to factuality, stating that factual reasoning can be interpreted as a binary QA task, while another paper claims a causal relationship from positional bias to Boolean question answering, reporting that positional bias can hurt performance even for yes/no questions.

## Sources

**[DIDS: Domain Impact-aware Data Sampling for Large Language Model Training](https://aclanthology.org/2025.emnlp-main.215.pdf) (as "Binary question answering")**
> The observable task of responding to a question with a definitive 'yes' or 'no' answer based on provided context.

**[From General Reward to Targeted Reward: Improving Open-ended Long-context Generation Models](https://aclanthology.org/2025.emnlp-main.260.pdf)**
> The task of responding to a question with a binary 'True' or 'False' answer based on a provided context.

**[QualBench: Benchmarking Chinese LLMs with Localized Professional Qualifications for Vertical Domain Evaluation](https://aclanthology.org/2025.emnlp-main.303.pdf) (as "True/False question answering")**
> Determining the truth value of declarative statements drawn from professional qualification exams in various vertical domains.

**[SEFE: Superficial and Essential Forgetting Eliminator for Multimodal Continual Instruction Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25n/chen25n.pdf) (as "Yes/no question answering")**
> Responding to a question with either 'Yes' or 'No' based on whether a provided statement is correct.

**[Unveiling the Tapestry of Consistency in Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d6f094ba0f5ce1720466342f78031bdb-Paper-Conference.pdf) (as "True/false question answering")**
> A specific question answering task where the model must respond with 'yes' or 'no' or an equivalent binary choice.

**[CFinBench: A Comprehensive Chinese Financial Benchmark for Large Language Models](https://aclanthology.org/2025.naacl-long.40.pdf) (as "Judgment question answering")**
> The observable task of determining whether a given statement is correct or wrong.

**[Evaluating the Prompt Steerability of Large Language Models](https://aclanthology.org/2025.naacl-long.400.pdf) (as "Polar question answering")**
> The model's behavior of responding to yes/no questions about whether it would say a given profiling statement, used to assess alignment with a persona dimension.

**[Insight Over Sight: Exploring the Vision-Knowledge Conflicts in Multimodal LLMs](https://aclanthology.org/2025.acl-long.872.pdf) (as "Yes-No question answering")**
> Producing binary (Yes/No) responses to questions that directly present counter-commonsense scenarios, testing whether the model adheres to visual input or parametric knowledge.

## Relationships

### Boolean question answering →
- **StrategyQA** (measurements) — *measured_by*
  > StrategyQA is a yes-no QA dataset (Section 3.1.1)
  - [Correcting Negative Bias in Large Language Models through Negative Attention Score Alignment](https://aclanthology.org/2025.naacl-long.503.pdf)

### → Boolean question answering
- **Positional bias** (constructs) — *causes*
  > We further find that the positional bias can hurt models’ performance even for questions answerable with Yes/No. (Section 1)
  - [Where is the answer? An empirical study of positional bias for parametric knowledge extraction in language model](https://aclanthology.org/2025.naacl-long.58.pdf)

### Associated with
- **Factual reasoning** (constructs)
  > This perspective leads to interpreting factual reasoning as a binary question answering (QA) task (Burns et al., 2022; Kassner et al., 2021; Mitchell et al., 2022).
  - [Logically Consistent Language Models via Neuro-Symbolic Integration](https://proceedings.iclr.cc/paper_files/paper/2025/file/871a06b60cf087bbdb854ebfcdf5349a-Paper-Conference.pdf)
- **Text-image alignment** (constructs)
  > "we use a function q(.) that converts a given text t into a question format, which enables the model to assess the visual-textual alignment in a consistent manner. Specifically, q(.) generates a yes/no question"
  - [Natural Language Inference Improves Compositionality in Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7eeec4dffcfe4912482ffbf2ab8ddb41-Paper-Conference.pdf)
