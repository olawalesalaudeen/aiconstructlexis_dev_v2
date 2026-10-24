# lm-evaluation-harness
**Type:** Measurement  
**Referenced in:** 234 papers  
**Also known as:** lm-eval, LM-Eval, LM-EVAL, Language Model Evaluation Harness, language model evaluation harness, LM Eval Harness, lm-eval-harness, LM-Eval-Harness, LM Evaluation Harness, LM-evaluation harnesses, LM-Evaluation-Harness, LM-evaluation-harness, LM-EVALUATION-HARNESS, LM Harness, lm-harness, lm-eval framework, LM-Eval framework, Harness, llm-evaluation-harness, LLMs Evaluation Harness, Evaluation Harness, EleutherAI LM Harness, Harness-Eval framework, LLM-evaluation suite, Eleuther Harness, Eleuther AI Language Model Evaluation Harness, EleutherAI LM-Eval-Harness, llm-eval-harness, Eleuther AI eval-harness, Open LLM Leaderboard Harness, EleutherAI Language Model Evaluation Harness, HuggingFace Open LLM harness, EleutherAI evaluation harness, Harness framework, eleuther-AI evaluation harness, lm eval framework, Eleuther LM eval harness, eleuther AI eval harness, LLM Evaluation Harness  

## State of the Field

**What it is.** Across papers, the prevailing framing is as a standardized, open-source evaluation framework, library, or software suite for running language-model benchmarks in a reproducible and comparable way. Most definitions describe a broad suite of downstream tasks, while some narrow it to zero-shot or few-shot settings, multiple-choice tasks, or text-only and short-context subsets, with examples such as ARC, BoolQ, HellaSwag, Wikitext, and LAMBADA. A smaller line of work presents it as the common protocol for leaderboard-style assessments or as a unified framework for evaluating generative language models.

**What it is claimed to measure.** Papers link it to 11 constructs and 12 behavioral indicators, so the reported measurement claims span many targets rather than a single construct. Most commonly, papers use it to measure commonsense reasoning, general ability, reasoning, mathematical reasoning, and in-context learning. Across the behavioral-indicator links, the same broad pattern appears, with papers using it for capability evaluations such as zero-shot and downstream-task performance.

**Space of uses.** Most commonly, papers use it as a common framework for benchmark suites, often reporting zero-shot or few-shot accuracy under default or recommended settings and, in some cases, averaging across 0-shot to 5-shot runs. It is used alongside 23 linked instruments, most often HellaSwag, MMLU, PIQA, WinoGrande, and GSM8K, and papers position it both for broad model comparisons and for validating specific task setups, including text-only, generation, and multilingual evaluations.

**Concerns raised.** One paper reports that the default setting "did not allow some models to complete their full chain-of-thought reasoning before being truncated," identifying truncation under the default configuration as a concern in that use case.

## Sources

**[Differential Transformer](https://proceedings.iclr.cc/paper_files/paper/2025/file/00b67df24009747e8bbed4c2c6f9c825-Paper-Conference.pdf) (as "LM Eval Harness")**
> A standardized evaluation suite comprising multiple downstream tasks like ARC, BoolQ, and HellaSwag to assess general language model performance.

**[SuperCorrect: Advancing Small LLM Reasoning with Thought Template Distillation and Self-Correction](https://proceedings.iclr.cc/paper_files/paper/2025/file/0967d7c8b171dd81b77c43067c02bebf-Paper-Conference.pdf)**
> An open-source framework used to standardize the evaluation of language models on various benchmarks, ensuring reproducible and comparable results.

**[Scaling Stick-Breaking Attention: An Efficient Implementation and In-depth Study](https://proceedings.iclr.cc/paper_files/paper/2025/file/0b9a261b9aca858b7e6ee44d8b2055be-Paper-Conference.pdf) (as "LM Evaluation Harness")**
> A standardized evaluation harness used to run language-model benchmarks and multiple-choice tasks.

**[Basis Sharing: Cross-Layer Parameter Sharing for Large Language Model Compression](https://proceedings.iclr.cc/paper_files/paper/2025/file/238c98450b1d9e8055f94d22f303bb57-Paper-Conference.pdf) (as "LM-Evaluation-Harness")**
> A unified software framework for evaluating language models on a wide range of tasks in a zero-shot setting.

**[Advantage-Guided Distillation for Preference Alignment in Small Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/2f891d026c7ba978168621842bc6fe73-Paper-Conference.pdf) (as "Language Model Evaluation Harness")**
> A unified framework for running standardized evaluations of generative language models on a large number of diverse tasks.

**[Should VLMs be Pre-trained with Image Data?](https://proceedings.iclr.cc/paper_files/paper/2025/file/34a5f638617ce32700e235e50dff9c8a-Paper-Conference.pdf) (as "LM Harness")**
> Eleuther's LM Harness, a standardized evaluation framework used to run the paper's text-only task suite.

**[Unlocking State-Tracking in Linear RNNs Through Negative Eigenvalues](https://proceedings.iclr.cc/paper_files/paper/2025/file/5a0ce3abb720b740419e193c87afd080-Paper-Conference.pdf) (as "lm-harness")**
> An evaluation framework (lm-evaluation-harness) that provides a standardized way to benchmark language models on a wide range of tasks.

**[RegMix: Data Mixture as Regression for Language Model Pre-training](https://proceedings.iclr.cc/paper_files/paper/2025/file/5f67d864aae6115374fed7beddd119e0-Paper-Conference.pdf) (as "lm-eval-harness")**
> An evaluation framework for language models used to score performance on various downstream tasks.

**[Adaptive Data Optimization: Dynamic Sample Selection with Scaling Laws](https://proceedings.iclr.cc/paper_files/paper/2025/file/923285deb805c3e14e1aeebc9854d644-Paper-Conference.pdf) (as "language model evaluation harness")**
> An evaluation suite providing a standardized framework for assessing performance on various downstream tasks.

**[Forgetting Transformer: Softmax Attention with a Forget Gate](https://proceedings.iclr.cc/paper_files/paper/2025/file/add3d389197ad2267f660ad060ef61f4-Paper-Conference.pdf) (as "LM-evaluation-harness")**
> A standardized evaluation harness used to run zero-shot short-context language-model benchmarks such as Wikitext, LAMBADA, PIQA, HellaSwag, and others.

**[Adaptive Rank Allocation: Speeding Up Modern Transformers with RaNA Adapters](https://proceedings.iclr.cc/paper_files/paper/2025/file/bdb0596d13cfccf2db6f0cc5280d2a3f-Paper-Conference.pdf) (as "LM-evaluation harnesses")**
> A software suite used to run downstream-task performance evaluations in zero-shot or few-shot settings.

**[On the Role of Attention Heads in Large Language Model Safety](https://proceedings.iclr.cc/paper_files/paper/2025/file/d0bcff6425bbf850ec87d5327a965db9-Paper-Conference.pdf) (as "lm-eval")**
> An evaluation harness (lm-evaluation-harness) used to assess model performance on a wide range of zero-shot tasks, in this case to measure helpfulness.

**[$\text{D}_{2}\text{O}$: Dynamic Discriminative Operations for Efficient Long-Context Inference of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d862f7f5445255090de13b825b880d59-Paper-Conference.pdf) (as "LM-Eval")**
> LM-Eval is an evaluation benchmark suite used here for generation tasks assessing commonsense and math reasoning.

**[STAR: Synthesis of Tailored Architectures](https://proceedings.iclr.cc/paper_files/paper/2025/file/dc300c4d75b94b211b149ae4bcbbf2d2-Paper-Conference.pdf) (as "LM-Eval-Harness")**
> A standardized framework for evaluating language models on a wide range of downstream tasks.

**[Hymba: A Hybrid-head Architecture for Small Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f32def07618040e540e0a6182e290562-Paper-Conference.pdf) (as "LM-EVALUATION-HARNESS")**
> LM Evaluation Harness, a standardized evaluation framework used to run language-model benchmarks across multiple tasks and settings.

**[Quamba: A Post-Training Quantization Recipe for Selective State Space Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/fb4b2fb2434f7cce5cb5ab50271296ee-Paper-Conference.pdf) (as "LM-EVAL")**
> LM-EVAL is an evaluation harness used to run zero-shot language-model benchmarks across multiple common-sense tasks.

**[Combatting Dimensional Collapse in LLM Pre-Training Data via Submodular File Selection](https://proceedings.iclr.cc/paper_files/paper/2025/file/136729ae4b0fee25a0d28077442506da-Paper-Conference.pdf) (as "Harness")**
> An evaluation framework (also known as lm-evaluation-harness) used to assess the generic performance of LLMs across a diverse set of tasks.

**[Weak-to-Strong Preference Optimization: Stealing Reward from Weak Aligned Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/5beb3a846137dd6524f2da17c97d9426-Paper-Conference.pdf) (as "llm-evaluation-harness")**
> The llm-evaluation-harness repository, used to run standardized evaluations on reasoning benchmarks.

**[Improving Reasoning Performance in Large Language Models via Representation Engineering](https://proceedings.iclr.cc/paper_files/paper/2025/file/6e73c39cc428c7d264d9820319f31e79-Paper-Conference.pdf) (as "lm-eval framework")**
> An evaluation suite for language models, referenced in the paper for its method of benchmarking performance by investigating output logits over a constrained set of potential responses.

**[RaSA: Rank-Sharing Low-Rank Adaptation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b4fd162d3e2d015233486a2e313828a7-Paper-Conference.pdf) (as "LLMs Evaluation Harness")**
> An evaluation framework used to assess mathematical reasoning performance, which can use tools like sympy to verify the correctness of generated solutions.

**[HShare: Fast LLM Decoding by Hierarchical Key-Value Sharing](https://proceedings.iclr.cc/paper_files/paper/2025/file/de7dc701a2882088f3136139949e1d05-Paper-Conference.pdf) (as "LM-Eval framework")**
> A software framework used to conduct zero-shot inference evaluations on language models.

**[Surgical, Cheap, and Flexible: Mitigating False Refusal in Language Models via Single Vector Ablation](https://proceedings.iclr.cc/paper_files/paper/2025/file/53dbd7e34fab703a639964e2d3ee9e84-Paper-Conference.pdf) (as "Evaluation Harness")**
> The Evaluation Harness framework, a standardized benchmark evaluation procedure used to run general capability tests.

**[Mixture Compressor for Mixture-of-Experts LLMs Gains More](https://proceedings.iclr.cc/paper_files/paper/2025/file/abc1943857a42935ceacff03c524bb44-Paper-Conference.pdf) (as "EleutherAI LM Harness")**
> An evaluation framework used to test language models on a wide range of benchmarks in a standardized way.

**[INCLUDE: Evaluating Multilingual Language Understanding with Regional Knowledge](https://proceedings.iclr.cc/paper_files/paper/2025/file/ced46a50befedcb884ccf0cbe8c3ad23-Paper-Conference.pdf) (as "Harness-Eval framework")**
> An evaluation framework used to standardize the assessment of language models, which was used to validate the results on the INCLUDE benchmark.

**[Towards Scalable Exact Machine Unlearning Using Parameter-Efficient Fine-Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/d33b741600f100b31256c70a46f66ec9-Paper-Conference.pdf) (as "LLM-evaluation suite")**
> LLM Evaluation Suite, a standardized evaluation suite used to report zero-shot performance on multiple language-model benchmarks.

**[Retraining-free Merging of Sparse MoE via Hierarchical Clustering](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25aq/chen25aq.pdf) (as "EleutherAI Language Model Evaluation Harness")**
> A standardized evaluation suite that assesses language models across a variety of zero-shot benchmarks covering reasoning, knowledge, and comprehension tasks.

**[any4: Learned 4-bit Numeric Representation for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/elhoushi25a/elhoushi25a.pdf) (as "Eleuther Harness")**
> The EleutherAI Language Model Evaluation Harness, a framework for standardized evaluation of language models on a wide range of natural language tasks.

**[MoH: Multi-Head Attention as Mixture-of-Head Attention](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jin25l/jin25l.pdf) (as "Eleuther AI Language Model Evaluation Harness")**
> A unified software framework, also known as lm-evaluation-harness, for standardized evaluation of generative language models across a wide range of benchmarks.

**[PROXSPARSE: REGULARIZED LEARNING OF SEMI-STRUCTURED SPARSITY MASKS FOR PRETRAINED LLMS](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25bi/liu25bi.pdf) (as "EleutherAI LM-Eval-Harness")**
> EleutherAI LM-Eval-Harness is an evaluation harness used to run standardized zero-shot language reasoning tasks on LLMs.

**[DISP-LLM: Dimension-Independent Structural Pruning for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/84a7fc24ed52e8eff514c33e8ac76ea3-Paper-Conference.pdf) (as "llm-eval-harness")**
> A framework for few-shot language model evaluation used to assess the performance of compressed models on zero-shot tasks.

**[Accuracy is Not All You Need](https://proceedings.neurips.cc/paper_files/paper/2024/file/e0e956681b04ac126679e8c7dd706b2e-Paper-Conference.pdf) (as "Eleuther AI eval-harness")**
> A standardized framework and software library for evaluating language models on a wide range of benchmarks.

**[Multi-Head Mixture-of-Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/ab05dc8bf36a9f66edbff6992ec86f56-Paper-Conference.pdf) (as "LLM Evaluation Harness")**
> A standardized framework for few-shot evaluation of language models across a diverse set of benchmarks.

**[Beyond Similarity: A Gradient-based Graph Method for Instruction Tuning Data Selection](https://aclanthology.org/2025.acl-long.1189.pdf) (as "Open LLM Leaderboard Harness")**
> A standardized framework and software tool used to provide a consistent methodology for evaluating the performance of large language models.

**[Re3Syn: A Dependency-Based Data Synthesis Framework for Long-Context Post-training](https://aclanthology.org/2025.acl-long.1518.pdf) (as "HuggingFace Open LLM harness")**
> Standard evaluation suite for assessing foundational language understanding and reasoning abilities of LLMs using a collection of short-text benchmarks such as MMLU, Winogrande, and Hellaswag.

**[SKILL-MIX: a Flexible and Expandable Family of Evaluations for AI Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/bbf38332580c1bed99fa99bc9ee53229-Paper-Conference.pdf) (as "EleutherAI evaluation harness")**
> A software framework for standardized evaluation of large language models across a wide range of benchmarks.

**[Large Language Models Badly Generalize across Option Length, Problem Types, and Irrelevant Noun Replacements](https://aclanthology.org/2025.emnlp-main.1362.pdf) (as "Harness framework")**
> The lm-eval-harness evaluation framework used to run benchmark evaluations under default settings.

**[M-Wanda: Improving One-Shot Pruning for Multilingual LLMs](https://aclanthology.org/2025.emnlp-main.1369.pdf) (as "eleuther-AI evaluation harness")**
> Standardized framework for zero-shot evaluation of LLMs across a wide range of benchmarks, used here to ensure consistent scoring across multilingual tasks.

**[QuZO: Quantized Zeroth-Order Fine-Tuning for Large Language Models](https://aclanthology.org/2025.emnlp-main.271.pdf) (as "lm eval framework")**
> The lm-eval framework, a standardized evaluation suite used to run benchmark tasks such as PIQA, ARC, HellaSwag, and WinoGrande.

**[Not-Just-Scaling Laws: Towards a Better Understanding of the Downstream Impact of Language Model Design Decisions](https://aclanthology.org/2025.emnlp-main.830.pdf) (as "Eleuther LM eval harness")**
> The Eleuther LM Eval Harness, a standardized evaluation framework used to run benchmark tasks in the same setting for models not on the leaderboard.

## Relationships

### → lm-evaluation-harness
- **Commonsense reasoning** (constructs) — *measured_by*
  > For commonsense reasoning we follow the LM Evaluation Harness [16] implementations of these tasks, evaluating on the test sets of ARC and OpenBookQA and the validation sets of HellaSwag, WinoGrande, BoolQ and PIQA, which brings our evaluations in line with other models. (Section 5.1)
  - [Would I Lie To You? Inference Time Alignment of Language Models using Direct Preference Heads](https://proceedings.neurips.cc/paper_files/paper/2024/file/ad3d0ac42b4b5cc3b5f0ca10107d5c84-Paper-Conference.pdf)
- **Zero-shot task performance** (behaviors tasks) — *measured_by*
  > For zero-shot evaluation, we use seven tasks from EleutherAI LM Harness (Gao et al., 2021).
  - [A Simple and Effective Pruning Approach for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/14c856c7a41297804de4c4890e846b25-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > For our performance evaluation, we use the few-shot tasks from Language Model Evaluation Harness (Gao et al., 2021). We select these tasks such that they can measure various abilities of the models (e.g., reading comprehension, reasoning, etc.) (Sec. 3.1)
  - [ReLU Strikes Back: Exploiting Activation Sparsity in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/6cf669c222ad13f60d503736fb2bd15b-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > the LLM’s generic performance A as the evaluation across different tasks using the Harness framework. (Section 2.1)
  - [Combatting Dimensional Collapse in LLM Pre-Training Data via Submodular File Selection](https://proceedings.iclr.cc/paper_files/paper/2025/file/136729ae4b0fee25a0d28077442506da-Paper-Conference.pdf)
- **Language modeling** (behaviors tasks) — *measured_by*
  > To ease reproducibility of our numbers, we use Eleuther-AI’s lm-evaluation-harness library (Gao et al., 2021) for evaluating perplexities on the Pile. (Section 5)
  - [Test-Time Training on Nearest Neighbors for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/f02f1185b97518ab5bd7ebde466992d3-Paper-Conference.pdf)
- **Machine reading comprehension** (behaviors tasks) — *measured_by*
  > For our performance evaluation, we use the few-shot tasks from Language Model Evaluation Harness (Gao et al., 2021). We select these tasks such that they can measure various abilities of the models (e.g., reading comprehension, reasoning, etc.) (Sec. 3.1)
  - [ReLU Strikes Back: Exploiting Activation Sparsity in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/6cf669c222ad13f60d503736fb2bd15b-Paper-Conference.pdf)
- **Downstream task performance** (behaviors tasks) — *measured_by*
  > ...and on an aggregate of six downstream tasks using the EleutherAI LM Harness (Gao et al., 2023)... (Section 5)
  - [Training-Free Activation Sparsity in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f3f2ff9579ba6deeb89caa2fe1f0b99c-Paper-Conference.pdf)
- **Zero-shot question answering** (behaviors tasks) — *measured_by*
  > To verify the effectiveness and generalizability, we perform extensive evaluation of our models on 7 zero-shot tasks. We employ a set of seven tasks sourced from the EleutherAI LM Harness [50]. (Section 7.1).
  - [Discovering Sparsity Allocation for  Layer-wise Pruning of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/ff997469ac66cf893c4183efeb22212a-Paper-Conference.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > We evaluate the pretrained models on language model tasks and multiple-choice tasks from LM evaluation Harness (Gao et al., 2023). (Section 5.3)
  - [Scaling Stick-Breaking Attention: An Efficient Implementation and In-depth Study](https://proceedings.iclr.cc/paper_files/paper/2025/file/0b9a261b9aca858b7e6ee44d8b2055be-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > Our method is benchmarked across a diverse range of question answering and generation datasets [24, 25, 26, 27, 28, 29, 30, 31] using the lm-eval-harness [32]. (Section 2)
  - [MiniCache: KV Cache Compression in Depth Dimension for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fd0705710bf01b88a60a3d479ea341d9-Paper-Conference.pdf)
- **In-context learning** (constructs) — *measured_by*
  > We evaluate APE on three ICL tasks using the LM Evaluation Harness (Gao et al., 2024):: GSM8K (8-shot) (Cobbe et al., 2021a), TriviaQA (5-shot) (Joshi et al., 2017), and MMLU (5-shot) (Hendrycks et al., 2020a). (Section 5.2).
  - [APE: Faster and Longer Context-Augmented Generation via Adaptive Parallel Encoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/ce186a37e63b37638ecd06dee6b9a355-Paper-Conference.pdf)
- **Natural language understanding** (constructs) — *measured_by*
  > The results show no significant losses of general ability like natural language understanding after aligning with the embodied environment... Table 2: Zero-shot performance on Language Model Evaluation Harness [56]
  - [Reinforcing LLM Agents via Policy Optimization with Action Decomposition](https://proceedings.neurips.cc/paper_files/paper/2024/file/bc09efb501c801ed92e181e26a885c2d-Paper-Conference.pdf)
- **Language understanding task performance** (behaviors tasks) — *measured_by*
  > Then we utilize popular language benchmarks provided in the open-sourced lm-evaluation-harness project [18] for evaluation
  - [MambaTree: Tree Topology is All You Need in State Space Model](https://proceedings.neurips.cc/paper_files/paper/2024/file/89b89c04f55ea7c7ca989992bb6a98c0-Paper-Conference.pdf)
- **Mathematical reasoning** (constructs) — *measured_by*
  > The evaluation scripts are based on lm-eval for commonsense and mathematical reasoning (Section 4.1).
  - [$\texttt{Model-GLUE}$: Democratized LLM Scaling for A Large Model Zoo in the Wild](https://proceedings.neurips.cc/paper_files/paper/2024/file/180a476f22a52b8ef14f42b2b927afcc-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > ...two generation datasets... with the LM-Evaluation-Harness framework (Gao et al., 2023).
  - [SVD-LLM V2: Optimizing Singular Value Truncation for Large Language Model Compression](https://aclanthology.org/2025.naacl-long.217.pdf)
- **Zero-shot generalization** (constructs) — *measured_by*
  > “Zero-shot performance was evaluated using the LM Evaluation Harness (Gao et al., 2021)”
  - [MoDeGPT: Modular Decomposition for Large Language Model Compression](https://proceedings.iclr.cc/paper_files/paper/2025/file/fb7214d2fdfd84165b08539d59c92e07-Paper-Conference.pdf)
- **Knowledge understanding** (constructs) — *measured_by*
  > We evaluate our models on a total of 9 different zero-shot benchmarks to assess their abilities across various natural language tasks like common sense reasoning, general language understanding and knowledge understanding using the LLM Evaluation Harness [14]. (Section 4.3)
  - [Multi-Head Mixture-of-Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/ab05dc8bf36a9f66edbff6992ec86f56-Paper-Conference.pdf)
- **Helpfulness** (constructs) — *measured_by*
  > we evaluate the impact of safety heads ablation on helpfulness. We use lm-eval (Gao et al., 2024) to assess model performance after ablating safety heads of Llama-2-7b-chat on zero-shot tasks... (Section 5.3)
  - [On the Role of Attention Heads in Large Language Model Safety](https://proceedings.iclr.cc/paper_files/paper/2025/file/d0bcff6425bbf850ec87d5327a965db9-Paper-Conference.pdf)
- **Few-shot task performance** (behaviors tasks) — *measured_by*
  > We used the Language Model Evaluation Harness framework (Gao et al., 2023) to evaluate accuracy on seven few-shot tasks, and averaged them for performance comparison. (Section 3.1)
  - [Relaxed Recursive Transformers: Effective Parameter Sharing with Layer-wise LoRA](https://proceedings.iclr.cc/paper_files/paper/2025/file/54d6a55225cebbdc16fbb0e45c5bdf2b-Paper-Conference.pdf)
- **Classification** (behaviors tasks) — *measured_by*
  > ...six classification datasets... with the LM-Evaluation-Harness framework (Gao et al., 2023).
  - [SVD-LLM V2: Optimizing Singular Value Truncation for Large Language Model Compression](https://aclanthology.org/2025.naacl-long.217.pdf)
- **Language modeling ability** (constructs) — *measured_by*
  > To further assess preservation of language modeling capability, we also evaluated on downstream tasks: ... ALMs using the LM Evaluation Harness (Gao et al., 2024) across 5 benchmarks... (Section 3.3).
  - [LLM Bias Detection and Mitigation through the Lens of Desired Distributions](https://aclanthology.org/2025.emnlp-main.76.pdf)
- **Text classification** (behaviors tasks) — *measured_by*
  > All the tasks except for MT are classification tasks, where we use the lm-evaluation-harness (Gao et al., 2024) evaluation tool and report accuracy. (Section 5.4)
  - [Adapters for Altering LLM Vocabularies: What Languages Benefit the Most?](https://proceedings.iclr.cc/paper_files/paper/2025/file/ab5492f57995409351cbf1a1cdf5f1a4-Paper-Conference.pdf)

### Associated with
- **MMLU** (measurements)
  > Table 2: Zero-shot performance on Language Model Evaluation Harness [56]... MMLU
  - [Reinforcing LLM Agents via Policy Optimization with Action Decomposition](https://proceedings.neurips.cc/paper_files/paper/2024/file/bc09efb501c801ed92e181e26a885c2d-Paper-Conference.pdf)
- **HellaSwag** (measurements)
  > Table 2: Zero-shot performance on Language Model Evaluation Harness [56]... HellaSwag
  - [Reinforcing LLM Agents via Policy Optimization with Action Decomposition](https://proceedings.neurips.cc/paper_files/paper/2024/file/bc09efb501c801ed92e181e26a885c2d-Paper-Conference.pdf)
- **WinoGrande** (measurements)
  > zero-shot downstream performance on 6 common-sense reasoning domains from the language model evaluation harness (Gao et al., 2024): HellaSwag (Zellers et al., 2019), WinoGrande (Sakaguchi et al., 2019), PIQA (Bisk et al., 2019), ARC-E (Clark et al., 2018), SciQ (Welbl et al., 2017), LogiQA2 (Liu et al., 2023) and LAMBADA (Paperno et al., 2016). (Section 4)
  - [Adaptive Data Optimization: Dynamic Sample Selection with Scaling Laws](https://proceedings.iclr.cc/paper_files/paper/2025/file/923285deb805c3e14e1aeebc9854d644-Paper-Conference.pdf)
- **GSM8K** (measurements)
  > ...using the EleutherAI LM Harness (Gao et al., 2023), including ... 5-shot GSM8K... (Section 5)
  - [Training-Free Activation Sparsity in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f3f2ff9579ba6deeb89caa2fe1f0b99c-Paper-Conference.pdf)
- **PIQA** (measurements)
  > zero-shot downstream performance on 6 common-sense reasoning domains from the language model evaluation harness (Gao et al., 2024): HellaSwag (Zellers et al., 2019), WinoGrande (Sakaguchi et al., 2019), PIQA (Bisk et al., 2019), ARC-E (Clark et al., 2018), SciQ (Welbl et al., 2017), LogiQA2 (Liu et al., 2023) and LAMBADA (Paperno et al., 2016). (Section 4)
  - [Adaptive Data Optimization: Dynamic Sample Selection with Scaling Laws](https://proceedings.iclr.cc/paper_files/paper/2025/file/923285deb805c3e14e1aeebc9854d644-Paper-Conference.pdf)
- **ARC-Challenge** (measurements)
  > Table 2: Zero-shot performance on Language Model Evaluation Harness [56]... ARC_C
  - [Reinforcing LLM Agents via Policy Optimization with Action Decomposition](https://proceedings.neurips.cc/paper_files/paper/2024/file/bc09efb501c801ed92e181e26a885c2d-Paper-Conference.pdf)
- **SciQ** (measurements)
  > zero-shot downstream performance on 6 common-sense reasoning domains from the language model evaluation harness (Gao et al., 2024): HellaSwag (Zellers et al., 2019), WinoGrande (Sakaguchi et al., 2019), PIQA (Bisk et al., 2019), ARC-E (Clark et al., 2018), SciQ (Welbl et al., 2017), LogiQA2 (Liu et al., 2023) and LAMBADA (Paperno et al., 2016). (Section 4)
  - [Adaptive Data Optimization: Dynamic Sample Selection with Scaling Laws](https://proceedings.iclr.cc/paper_files/paper/2025/file/923285deb805c3e14e1aeebc9854d644-Paper-Conference.pdf)
- **LAMBADA** (measurements)
  > zero-shot downstream performance on 6 common-sense reasoning domains from the language model evaluation harness (Gao et al., 2024): HellaSwag (Zellers et al., 2019), WinoGrande (Sakaguchi et al., 2019), PIQA (Bisk et al., 2019), ARC-E (Clark et al., 2018), SciQ (Welbl et al., 2017), LogiQA2 (Liu et al., 2023) and LAMBADA (Paperno et al., 2016). (Section 4)
  - [Adaptive Data Optimization: Dynamic Sample Selection with Scaling Laws](https://proceedings.iclr.cc/paper_files/paper/2025/file/923285deb805c3e14e1aeebc9854d644-Paper-Conference.pdf)
- **BoolQ** (measurements)
  > We use lm-evaluation-harness to report results on ... BoolQ
  - [QERA: an Analytical Framework for Quantization Error Reconstruction](https://proceedings.iclr.cc/paper_files/paper/2025/file/21718991f6acf19a42376b5c7a8668c5-Paper-Conference.pdf)
- **BIG-Bench Hard** (measurements)
  > We use lm-evaluation-harness to report results on ... BigBench-Hard
  - [QERA: an Analytical Framework for Quantization Error Reconstruction](https://proceedings.iclr.cc/paper_files/paper/2025/file/21718991f6acf19a42376b5c7a8668c5-Paper-Conference.pdf)
- **Open LLM Leaderboard** (measurements)
  > For the Open LLM Leaderboard, we adhere to the recommended Language Model Evaluation Harness (Gao et al., 2021) protocols. (Section 4.1)
  - [Advantage-Guided Distillation for Preference Alignment in Small Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/2f891d026c7ba978168621842bc6fe73-Paper-Conference.pdf)
- **ARC-Easy** (measurements)
  > zero-shot downstream performance on 6 common-sense reasoning domains from the language model evaluation harness (Gao et al., 2024): HellaSwag (Zellers et al., 2019), WinoGrande (Sakaguchi et al., 2019), PIQA (Bisk et al., 2019), ARC-E (Clark et al., 2018), SciQ (Welbl et al., 2017), LogiQA2 (Liu et al., 2023) and LAMBADA (Paperno et al., 2016). (Section 4)
  - [Adaptive Data Optimization: Dynamic Sample Selection with Scaling Laws](https://proceedings.iclr.cc/paper_files/paper/2025/file/923285deb805c3e14e1aeebc9854d644-Paper-Conference.pdf)
- **LogiQA 2.0** (measurements)
  > zero-shot downstream performance on 6 common-sense reasoning domains from the language model evaluation harness (Gao et al., 2024): HellaSwag (Zellers et al., 2019), WinoGrande (Sakaguchi et al., 2019), PIQA (Bisk et al., 2019), ARC-E (Clark et al., 2018), SciQ (Welbl et al., 2017), LogiQA2 (Liu et al., 2023) and LAMBADA (Paperno et al., 2016). (Section 4)
  - [Adaptive Data Optimization: Dynamic Sample Selection with Scaling Laws](https://proceedings.iclr.cc/paper_files/paper/2025/file/923285deb805c3e14e1aeebc9854d644-Paper-Conference.pdf)
- **WikiText-2** (measurements)
  > We use lm-evaluation-harness to report results on Wikitext2
  - [QERA: an Analytical Framework for Quantization Error Reconstruction](https://proceedings.iclr.cc/paper_files/paper/2025/file/21718991f6acf19a42376b5c7a8668c5-Paper-Conference.pdf)
- **ARC** (measurements)
  > “We use EleutherAI’s LM eval harness (Gao et al., 2024) to evaluate models on ARC (Clark et al., 2018), HellaSwag (Zellers et al., 2019), PIQA (Bisk et al., 2020), SciQ (Welbl et al., 2017) and Winogrande (Trinh & Le, 2018).”
  - [Ladder-Residual: Parallelism-Aware Architecture for Accelerating Large Model Inference with Communication Overlapping](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25bg/zhang25bg.pdf)
- **CommonsenseQA** (measurements)
  > We use lm-evaluation-harness to report results on ... CommonSenseQA
  - [QERA: an Analytical Framework for Quantization Error Reconstruction](https://proceedings.iclr.cc/paper_files/paper/2025/file/21718991f6acf19a42376b5c7a8668c5-Paper-Conference.pdf)
- **CoQA** (measurements)
  > We use the LM-Eval framework to conduct zero-shot inference on GSM8K and COQA.
  - [HShare: Fast LLM Decoding by Hierarchical Key-Value Sharing](https://proceedings.iclr.cc/paper_files/paper/2025/file/de7dc701a2882088f3136139949e1d05-Paper-Conference.pdf)
- **OpenBookQA** (measurements)
  > Evaluation is performed on ARC (Clark et al., 2018), BoolQ (BQ) (Clark et al., 2019), OpenbookQA (OBQA) (Mihaylov et al., 2018), PIQA (Bisk et al., 2020a), WinoGrande (WG) (Sakaguchi et al., 2021), LAMBADA (LMBD) (Paperno et al., 2016b), 5-shot MMLU (Hendrycks et al., 2020), and 10-shot HellaSwag (HS) (Zellers et al., 2019a). These evaluations were conducted using the LM-Evaluation-Harness repository (Gao et al., 2024).
  - [Balcony: A Lightweight Approach to Dynamic Inference of Generative Language Models](https://aclanthology.org/2025.emnlp-main.1263.pdf)
- **Chain of thought** (behaviors tasks)
  > We use a fork of EleutherAI's LM Evaluation Harness with minor modiﬁcations. We use the default settings for evaluation, except for increasing the maximum number of allowed generated tokens from 256 to 1000, as we notice that the default setting did not allow some models to complete their full chain-of-thought reasoning before being truncated.
  - [A Careful Examination of Large Language Model Performance on Grade School Arithmetic](https://proceedings.neurips.cc/paper_files/paper/2024/file/53384f2090c6a5cac952c598fd67992f-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MATH** (measurements)
  > “We perform evaluations using lm-evaluation-harness ... For both GSM8k and MATH, we use 5-shot examples”
  - [Can Large Language Models Invent Algorithms to Improve Themselves?: Algorithm Discovery for Recursive Self-Improvement through Reinforcement Learning](https://aclanthology.org/2025.naacl-long.519.pdf)
