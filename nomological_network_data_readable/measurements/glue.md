# GLUE
**Type:** Measurement  
**Referenced in:** 167 papers  
**Also known as:** GLUE benchmark  

## State of the Field

**What it is.** Most papers treat GLUE as a benchmark suite, or collection, of diverse natural language understanding tasks, often described as covering sentence-level classification, inference, paraphrase, similarity, sentiment analysis, textual entailment, and linguistic acceptability. A recurring framing is that it is a multi-task evaluation benchmark, sometimes even an analysis platform, though papers differ on its exact composition: several describe nine tasks, others refer to eight tasks or datasets, and many use subsets such as four binary classification datasets, five challenging tasks, or six selected subtasks. A smaller line of work describes it more narrowly as shorter-sequence NLU evaluation, as a source of classification and entailment tasks, or as including question answering and coreference resolution.

**What it is claimed to measure.** Papers use GLUE mainly to measure natural language understanding. It is linked to 10 constructs and 9 behavioral indicators overall, and the most recurrent additional uses are for text classification, language understanding task performance, sentiment analysis, and natural language inference. The claims therefore converge most clearly on natural language understanding, while smaller lines of work also report GLUE as measuring broader or neighboring targets.

**Space of uses.** Across papers, GLUE is commonly used as a main evaluation benchmark for fine-tuning or downstream assessment, and authors often report average GLUE scores or results on selected GLUE tasks rather than always using the full suite. It is linked to 8 measurement instruments overall, most often through task-level components such as SST-2, MRPC, QNLI, QQP, and RTE. Papers also use it as a general capability check after model editing, compression, pruning, or distillation, and in a few cases with zero-shot or 2-shot prompting setups.

**Concerns raised.** Only a few papers raise explicit concerns about GLUE itself. One paper mentions GLUE as a knowledge-based or logic-based benchmark and treats it as not capturing nuanced human preferences.

## Sources

**[A Good Learner can Teach Better: Teacher-Student Collaborative Knowledge Distillation](https://proceedings.iclr.cc/paper_files/paper/2024/file/a781ff9cfb267277937db1818284739f-Paper-Conference.pdf)**
> A collection of natural language understanding tasks including sentiment analysis, textual entailment, and paraphrasing, used to evaluate model performance across diverse NLP benchmarks.

**[Encryption-Friendly LLM Architecture](https://proceedings.iclr.cc/paper_files/paper/2025/file/6715b4e97be055687c1ecaf33913d358-Paper-Conference.pdf) (as "GLUE benchmark")**
> The General Language Understanding Evaluation (GLUE) benchmark is a collection of diverse natural language understanding tasks used to evaluate model performance.

## Relationships

### → GLUE
- **Natural language understanding** (constructs) — *measured_by*
  > We compare our approach with LoRA and other parameter-efficient adaptation methods on the natural language understanding (GLUE) and natural language generation (E2E) benchmarks... (Section 1)
  - [VeRA: Vector-based Random Matrix Adaptation](https://proceedings.iclr.cc/paper_files/paper/2024/file/1b53ad08de383a049e9668a9d0b6a053-Paper-Conference.pdf)
- **Text classification** (behaviors tasks) — *measured_by*
  > We evaluate on GLUE [70] for text classification and GSM-8K [9] for mathematical reasoning (Section 4).
  - [PACE: Marrying generalization in PArameter-efficient fine-tuning with Consistency rEgularization](https://proceedings.neurips.cc/paper_files/paper/2024/file/70a06501001e1820fd1eb9ee821302d2-Paper-Conference.pdf)
- **Instruction fine-tuning** (behaviors tasks) — *measured_by*
  > We evaluate GaRare for fine-tuning on the GLUE benchmark (Wang et al., 2019), which comprises a variety of tasks such as sentiment analysis, question answering, and textual entailment. (Section 6.3)
  - [On the Optimization Landscape of Low Rank Adaptation Methods for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c34262c35aa5f8c1a091822cbb2020c2-Paper-Conference.pdf)
- **Sentiment analysis** (behaviors tasks) — *measured_by*
  > We finetune the pretrained RoBERTa-base model (Liu et al., 2019) on the GLUE benchmark, a widely used suite for evaluating NLP models across various tasks, including sentiment analysis and question answering (Wang et al., 2019). (Section 4.2)
  - [CompAct: Compressed Activations for Memory-Efficient LLM Training](https://aclanthology.org/2025.naacl-long.71.pdf)
- **Natural language inference** (behaviors tasks) — *measured_by*
  > on the General Language Understanding Evaluation (GLUE) Wang et al. (2018) benchmark, which includes two single-sentence classification, three similarity and paraphrase and four natural language inference datasets.
  - [Maintaining Structural Integrity in Parameter Spaces for Parameter Efficient Fine-tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/08487598819cba9feca884ef0d442950-Paper-Conference.pdf)
- **Language understanding task performance** (behaviors tasks) — *measured_by*
  > MDMs are only advantageous in language understanding tasks (surpassing ARMs and BERT on the GLUE metric (Wang et al., 2018)). (Section 3.3)
  - [Masked Diffusion Models are Secretly Time-Agnostic Masked Models and Exploit Inaccurate Categorical Sampling](https://proceedings.iclr.cc/paper_files/paper/2025/file/9e3b203e72c4e058de26d02a92a81844-Paper-Conference.pdf)
- **Downstream task performance** (behaviors tasks) — *measured_by*
  > “In Table 6, we list the performance on downstream tasks of GLUE and SAQuAD according to LIGO(Wang et al., 2023).”
  - [LOIRE: LifelOng learning on Incremental data via pre-trained language model gRowth Efficiently](https://proceedings.iclr.cc/paper_files/paper/2025/file/03945380ca5af0dc80782d8e0b72a8d7-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > “To further evaluate the intrinsic knowledge of post-edited LLMs, we perform General Capability Tests using six natural language tasks from the General Language Understanding Evaluation (GLUE) benchmark (Wang et al., 2019).”
  - [AlphaEdit: Null-Space Constrained Knowledge Editing for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/29c8c615b3187ee995029284702d3f43-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > We finetune the pretrained RoBERTa-base model (Liu et al., 2019) on the GLUE benchmark, a widely used suite for evaluating NLP models across various tasks, including sentiment analysis and question answering (Wang et al., 2019). (Section 4.2)
  - [CompAct: Compressed Activations for Memory-Efficient LLM Training](https://aclanthology.org/2025.naacl-long.71.pdf)
- **Paraphrase detection** (behaviors tasks) — *measured_by*
  > This benchmark we use covers paraphrase detection (MRPC, QQP), sentiment classification (SST-2), natural language inference (MNLI, RTE, QNLI), and linguistic acceptability (CoLA). (Section 4.3)
  - [Enhancing Language Model Hypernetworks with Restart: A Study on Optimization](https://aclanthology.org/2025.naacl-long.397.pdf)
- **Semantic textual similarity** (behaviors tasks) — *measured_by*
  > "the GLUE benchmark (Wang et al., 2019), which encompasses a diverse range of tasks, including question answering, sentiment analysis, and semantic textual similarity" (Section 6.2)
  - [A Memory Efficient Randomized Subspace Optimization Method for Training Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25cj/chen25cj.pdf)
- **Generalization** (constructs) — *measured_by*
  > SAFE improves the average GLUE score from 84.66 (LoRA) to 84.99 — this is because SAFE induces a regularization effect on less-important adapters improving generalization performance of the model. (Section 5.2.1)
  - [Not All Adapters Matter: Selective Adapter Freezing for Memory-Efficient Fine-Tuning of Language Models](https://aclanthology.org/2025.naacl-long.480.pdf)
- **Adversarial robustness** (constructs) — *measured_by*
  > Existing research evaluates adversarial robustness of LLMs on the GLUE dataset (Wang et al., 2018)
  - [An LLM can Fool Itself: A Prompt-Based Adversarial Attack](https://proceedings.iclr.cc/paper_files/paper/2024/file/0c72285e193ec90dca93258128698cfb-Paper-Conference.pdf)
- **Masked language modeling** (behaviors tasks) — *measured_by*
  > "In Table 1, we compare our headless MLM with the classical MLM on the GLUE benchmark."
  - [Headless Language Models: Learning without Predicting with Contrastive Weight Tying](https://proceedings.iclr.cc/paper_files/paper/2024/file/92864e1191ed272deb0914b3bb50f97c-Paper-Conference.pdf)
- **Language modeling** (behaviors tasks) — *measured_by*
  > We conducted an evaluation of Orchid-BERT models on GLUE fine-tuning tasks, comparing them against the baseline models: BERT-base and BERT-large... (Section 4.2)
  - [Orchid: Flexible and Data-Dependent Convolution for Sequence Modeling](https://proceedings.neurips.cc/paper_files/paper/2024/file/8ccc5ec30a8d46793d790e2216efd40d-Paper-Conference.pdf)
- **Parameter efficiency** (constructs) — *measured_by*
  > "Our method achieves comparable performance to LoRA on the General Language Understanding Evaluation (GLUE) benchmark while using only half the parameters."
  - [SSMLoRA: Enhancing Low-Rank Adaptation with State Space Model](https://aclanthology.org/2025.naacl-long.230.pdf)
- **Utility preservation** (constructs) — *measured_by*
  > “we assessed downstream performance using 6 tests from GLUE”
  - [Reinforced Lifelong Editing for Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25an/li25an.pdf)
- **Model merging** (behaviors tasks) — *measured_by*
  > “For evaluating small-scale models, we utilized the GLUE benchmark”
  - [CABS: Conflict-Aware and Balanced Sparsification for Enhancing Model Merging](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25x/yang25x.pdf)
- **Memory efficiency** (constructs) — *measured_by*
  > “We further apply the parallel control approach to the GLUE benchmark (Wang, 2018)”
  - [From Weight-Based to State-Based Fine-Tuning: Further Memory Reduction on LoRA with Parallel Control](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25au/zhang25au.pdf)
- **Language modeling ability** (constructs) — *measured_by*
  > To further assess preservation of language modeling capability, we also evaluated on downstream tasks: MLMs on GLUE tasks... (Section 3.3).
  - [LLM Bias Detection and Mitigation through the Lens of Desired Distributions](https://aclanthology.org/2025.emnlp-main.76.pdf)
- **Conceptual understanding** (constructs) — *measured_by*
  > These tasks assess linguistic competence (BLiMP), conceptual understanding (GLUE), and general world knowledge (Ewok). (Section 4)
  - [SLlama: Parameter-Efficient Language Model Architecture for Enhanced Linguistic Competence Under Strict Data Constraints](https://aclanthology.org/2025.emnlp-main.1198.pdf)
- **Formal linguistic competence** (constructs) — *measured_by*
  > To assess the significance of the localized units on the models’ linguistic abilities, we utilize three widely used benchmarks that measure formal linguistic competence (Mahowald et al., 2024). ... Third, GLUE...
  - [The LLM Language Network: A Neuroscientific Approach for Identifying Causally Task-Relevant Units](https://aclanthology.org/2025.naacl-long.544.pdf)

### Associated with
- **SST-2** (measurements)
  > We first evaluate the language understanding tasks from the GLUE benchmark(Wang et al., 2018) including MNLI, SST2, QNLI and QQP using the RoBERTa model.
  - [Improving LoRA in Privacy-preserving Federated Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/4e243e95c913b367775d71d7182b99d9-Paper-Conference.pdf)
- **MRPC** (measurements)
  > MRPC in GLUE (Wang et al., 2019) (Section 4.1).
  - [Merge, Then Compress: Demystify Efficient SMoE with Hints from Its Routing Policy](https://proceedings.iclr.cc/paper_files/paper/2024/file/3d09a88c3372cdb79401fde592ca4db8-Paper-Conference.pdf)
- **QNLI** (measurements)
  > We first evaluate the language understanding tasks from the GLUE benchmark(Wang et al., 2018) including MNLI, SST2, QNLI and QQP using the RoBERTa model.
  - [Improving LoRA in Privacy-preserving Federated Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/4e243e95c913b367775d71d7182b99d9-Paper-Conference.pdf)
- **QQP** (measurements)
  > We first evaluate the language understanding tasks from the GLUE benchmark(Wang et al., 2018) including MNLI, SST2, QNLI and QQP using the RoBERTa model.
  - [Improving LoRA in Privacy-preserving Federated Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/4e243e95c913b367775d71d7182b99d9-Paper-Conference.pdf)
- **RTE** (measurements)
  > six Natural Language Understanding (NLU) tasks from the GLUE benchmark [34]—namely, SST-2 [31], MNLI [37], MRPC [3], QNLI [29], QQP, and RTE [5] (Section 4.1).
  - [Prompt Tuning Strikes Back: Customizing Foundation Models with Low-Rank Prompt Adaptation](https://proceedings.neurips.cc/paper_files/paper/2024/file/548551c07a68c8f0a87d67c6167cedb1-Paper-Conference.pdf)
- **MNLI** (measurements)
  > We first evaluate the language understanding tasks from the GLUE benchmark(Wang et al., 2018) including MNLI, SST2, QNLI and QQP using the RoBERTa model.
  - [Improving LoRA in Privacy-preserving Federated Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/4e243e95c913b367775d71d7182b99d9-Paper-Conference.pdf)
- **CoLA** (measurements)
  > In this context, our evaluation is conducted across 6 datasets from the GLUE: SST-2, MRPC, CoLA, QNLI, RTE, and STS-B. (Section 4.2)
  - [KaSA: Knowledge-Aware Singular-Value Adaptation of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/8aec95bc5344290249c32841c07c9dd1-Paper-Conference.pdf)
- **WNLI** (measurements)
  > for inference tasks, the RTE and WNLI (both from GLUE) datasets (Section 4).
  - [PortLLM: Personalizing Evolving Large Language Models with Training-Free and Portable Model Patches](https://proceedings.iclr.cc/paper_files/paper/2025/file/59c444334e6bcf4e796f59f6d0bcae2a-Paper-Conference.pdf)
