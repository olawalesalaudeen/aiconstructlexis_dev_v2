# Machine reading comprehension
**Type:** Behavior  
**Referenced in:** 77 papers  
**Also known as:** Paragraph understanding, Reading comprehension  

## State of the Field

**Space of definitions.** Across definitions, the prevailing usage treats this as a passage or paragraph understanding task in which a model reads given text and answers questions about its content. Several papers make the setup explicitly cross-lingual, allowing the question and passage to be in different languages, while a smaller formulation calls it paragraph understanding and reasoning. Success is usually operationalized through answer correctness, with some papers using multiple-choice accuracy, for example whether the model "selects the correct answer from multiple choices," and another using exact match from context.

**Variants.** Papers study several named variants. The most visible are cross-lingual machine reading comprehension, including Belebele and zero-shot transfer setups that fine-tune on Chinese CMRC or English SQuAD and test on TibetanQA, and paragraph understanding or reasoning in BoolQ-style yes or no questions. Other variants include comprehensive reading, reading comprehension with discrete reasoning, multi-hop reasoning, and reading comprehension over document images.

**Space of elicitation and scores.** Papers measure it with 31 instruments. The most recurrent are BoolQ, RACE, SQuAD 2.0, Belebele, and SQuAD v1.1, typically used as benchmark datasets for reading-comprehension evaluation, while other papers use additional benchmarks and task suites. Scoring is usually automatic: accuracy recurs in multiple-choice and yes or no setups, one paper uses exact match from context, and another reports F1.

**What it is taken as evidence of.** Across four linked constructs, papers do not converge on a single construct that this behavior reflects. One paper uses it as a measure of cross-lingual generalization, and another claims a causal relationship from machine reading comprehension to domain knowledge, stating that reading comprehension texts provide domain knowledge, as well as a causal relationship from domain knowledge to machine reading comprehension. Other papers only relate it to knowledge conflict resolution, which is said to require strong reading comprehension skills, and to note comprehension, where Note-MRC is described as testing reading comprehension.

## Sources

**[Linguistic Neuron Overlap Patterns to Facilitate Cross-lingual Transfer on Low-resource Languages](https://aclanthology.org/2025.emnlp-main.1407.pdf)**
> The task of answering questions based on a given context passage, where the questions and passage may be in different languages.

**[Learning to Plan Before Answering: Self-Teaching LLMs to Learn Abstract Plans for Problem Solving](https://proceedings.iclr.cc/paper_files/paper/2025/file/821a6e5681b072351fd3c21fac44739a-Paper-Conference.pdf) (as "Paragraph understanding")**
> The observable task of reading a paragraph and answering a question based on its content.

**[SSMLoRA: Enhancing Low-Rank Adaptation with State Space Model](https://aclanthology.org/2025.naacl-long.230.pdf) (as "Reading comprehension")**
> The general task of reading a passage of text and answering questions about its content.

## Relationships

### Machine reading comprehension →
- **BoolQ** (measurements) — *measured_by*
  > Reading Comprehension (0-shot): BoolQ (Clark et al., 2019). (Section 4.2).
  - [Megalodon: Efficient LLM Pretraining and Inference with Unlimited Context Length](https://proceedings.neurips.cc/paper_files/paper/2024/file/840abfadd04c967feaa2a49aba94a32d-Paper-Conference.pdf)
- **RACE** (measurements) — *measured_by*
  > RACE is a reading comprehension benchmark introduced in Lai et al. (2017) collected from English examinations of middle and high school students. (Section 3)
  - [The Consensus Game: Language Model Generation via Equilibrium Search](https://proceedings.iclr.cc/paper_files/paper/2024/file/17a9bfda8be2301e24f232fb32f1e0fa-Paper-Conference.pdf)
- **SQuAD 2.0** (measurements) — *measured_by*
  > “our reading comprehension (RC) fine-tuning datasets include SQuAD 2.0 ...”
  - [RA-DIT: Retrieval-Augmented Dual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/536d18fbb454f80221465f1a42c6f389-Paper-Conference.pdf)
- **SQuAD v1.1** (measurements) — *measured_by*
  > Reading Comprehension (RC): SQuAD-3-shots [50], BoolQ-0-shot [12], and CoQA-0-shot [51].
  - [Dataset Decomposition: Faster LLM Training with Variable Sequence Length Curriculum](https://proceedings.neurips.cc/paper_files/paper/2024/file/3f9bf45ea04c98ad7cb857f951f499e2-Paper-Conference.pdf)
- **Belebele** (measurements) — *measured_by*
  > Belebele (Bandarkar et al., 2024): Belebele is a multiple-choice machine reading comprehension dataset spanning 122 language variants. (Section 3.3)
  - [Pipeline Analysis for Developing Instruct LLMs in Low-Resource Languages: A Case Study on Basque](https://aclanthology.org/2025.naacl-long.629.pdf)
- **lm-evaluation-harness** (measurements) — *measured_by*
  > For our performance evaluation, we use the few-shot tasks from Language Model Evaluation Harness (Gao et al., 2021). We select these tasks such that they can measure various abilities of the models (e.g., reading comprehension, reasoning, etc.) (Sec. 3.1)
  - [ReLU Strikes Back: Exploiting Activation Sparsity in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/6cf669c222ad13f60d503736fb2bd15b-Paper-Conference.pdf)
- **DROP** (measurements) — *measured_by*
  > DROP [50] Task Reading comprehension with discrete reasoning (Table D.1).
  - [QuanTA: Efficient High-Rank Fine-Tuning of LLMs with Quantum-Informed Tensor Adaptation](https://proceedings.neurips.cc/paper_files/paper/2024/file/a7c17115db36193f6b83b71b0fe1d416-Paper-Conference.pdf)
- **OpenBookQA** (measurements) — *measured_by*
  > we use seven commonsense reasoning tasks from the popular framework Harness (Gao et al., 2024), including four reading comprehension tasks (ARC-e, ARC-c (Clark et al., 2018), OBQA (Mihaylov et al., 2018), and BoolQ (Clark et al., 2019))... (Section 4.1)
  - [Combatting Dimensional Collapse in LLM Pre-Training Data via Submodular File Selection](https://proceedings.iclr.cc/paper_files/paper/2025/file/136729ae4b0fee25a0d28077442506da-Paper-Conference.pdf)
- **CoQA** (measurements) — *measured_by*
  > Reading Comprehension (RC): SQuAD-3-shots [50], BoolQ-0-shot [12], and CoQA-0-shot [51].
  - [Dataset Decomposition: Faster LLM Training with Variable Sequence Length Curriculum](https://proceedings.neurips.cc/paper_files/paper/2024/file/3f9bf45ea04c98ad7cb857f951f499e2-Paper-Conference.pdf)
- **ARC-Easy** (measurements) — *measured_by*
  > For common sense and reading comprehension tasks, we report 0-shot accuracy results for SciQ [22], PIQA [23], WinoGrande (Wino.) [24], ARC Easy(ARC-E.) [25], and HellaSwag (HellaS.) [26], alongside 25-shot accuracy for ARC Challenge (ARC-C.) [27]. (Section 5.1)
  - [DHA: Learning Decoupled-Head Attention from Transformer Checkpoints via Adaptive Heads Fusion](https://proceedings.neurips.cc/paper_files/paper/2024/file/518a75257f37b32f711082dff33c2ffc-Paper-Conference.pdf)
- **ARC** (measurements) — *measured_by*
  > Reading comprehension and commonsense reasoning improves. For ARC and HellaSwag, preference optimization methods generally improve performance compared to the SFT checkpoint.
  - [SimPO: Simple Preference Optimization with a Reference-Free Reward](https://proceedings.neurips.cc/paper_files/paper/2024/file/e099c1c9699814af0be873a175361713-Paper-Conference.pdf)
- **MultiRC** (measurements) — *measured_by*
  > Additionally, we use ARC (Clark et al., 2018), OpenBookQA (Mihaylov et al., 2018), and MultiRC (Khashabi et al., 2018), covering question answering, commonsense reasoning, and reading comprehension, as validation sets for generalization loss estimation.
  - [Optimizing Pre-Training Data Mixtures with Mixtures of Data Expert Models](https://aclanthology.org/2025.acl-long.1564.pdf)
- **TibetanQA** (measurements) — *measured_by*
  > For the machine reading comprehension task, we evaluate the models’ performance by fine-tuning them on the Chinese CMRC dataset (Cui et al., 2019) and English SQuAD dataset (Rajpurkar, 2016), followed by zero-shot testing on the TibetanQA dataset (Sun et al., 2021) to assess their cross-lingual transfer capabilities (Section 4.3).
  - [Enhancing Cross-Lingual Transfer through Reversible Transliteration: A Huffman-Based Approach for Low-Resource Languages](https://aclanthology.org/2025.acl-long.795.pdf)
- **Domain knowledge** (constructs) — *causes*
  > the utilization of reading comprehension texts provides domain knowledge that enhances performance in domain-specific tasks. (Section 6)
  - [Adapting Large Language Models via Reading Comprehension](https://proceedings.iclr.cc/paper_files/paper/2024/file/d51cd79a85833b022841f7a2383b32d3-Paper-Conference.pdf)
- **C3** (measurements) — *measured_by*
  > a free-form multiple-choice Chinese machine reading comprehension dataset (C3) (Sun et al., 2020) (Section 3.3.5)
  - [At Which Training Stage Does Code Data Help LLMs Reasoning?](https://proceedings.iclr.cc/paper_files/paper/2024/file/9c2aa1e456ea543997f6927295196381-Paper-Conference.pdf)
- **HellaSwag** (measurements) — *measured_by*
  > For common sense and reading comprehension tasks, we report 0-shot accuracy results for SciQ [22], PIQA [23], WinoGrande (Wino.) [24], ARC Easy(ARC-E.) [25], and HellaSwag (HellaS.) [26], alongside 25-shot accuracy for ARC Challenge (ARC-C.) [27]. (Section 5.1)
  - [DHA: Learning Decoupled-Head Attention from Transformer Checkpoints via Adaptive Heads Fusion](https://proceedings.neurips.cc/paper_files/paper/2024/file/518a75257f37b32f711082dff33c2ffc-Paper-Conference.pdf)
- **ARC-Challenge** (measurements) — *measured_by*
  > For common sense and reading comprehension tasks, we report 0-shot accuracy results for SciQ [22], PIQA [23], WinoGrande (Wino.) [24], ARC Easy(ARC-E.) [25], and HellaSwag (HellaS.) [26], alongside 25-shot accuracy for ARC Challenge (ARC-C.) [27]. (Section 5.1)
  - [DHA: Learning Decoupled-Head Attention from Transformer Checkpoints via Adaptive Heads Fusion](https://proceedings.neurips.cc/paper_files/paper/2024/file/518a75257f37b32f711082dff33c2ffc-Paper-Conference.pdf)
- **QuALITY** (measurements) — *measured_by*
  > The QuALITY dataset is a reading comprehension task consisting of documents (about 5k tokens long) with a set of multiple choice reading comprehension questions. (Appendix F.1)
  - [On scalable oversight with weak LLMs judging strong LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/899511e37a8e01e1bd6f6f1d377cc250-Paper-Conference.pdf)
- **LAMBADA** (measurements) — *measured_by*
  > we evaluate the models from Figure 3 on five downstream tasks: ARC-easy, lambada, RACE, PIQA, and BoolQ, which collectively test for common sense reasoning, world knowledge, and reading comprehension. (Section 4.3)
  - [Sparse maximal update parameterization: A holistic approach to sparse training dynamics](https://proceedings.neurips.cc/paper_files/paper/2024/file/3b6aaffec941f98930753fa6d6de7263-Paper-Conference.pdf)
- **PIQA** (measurements) — *measured_by*
  > we evaluate the models from Figure 3 on five downstream tasks: ARC-easy, lambada, RACE, PIQA, and BoolQ, which collectively test for common sense reasoning, world knowledge, and reading comprehension. (Section 4.3)
  - [Sparse maximal update parameterization: A holistic approach to sparse training dynamics](https://proceedings.neurips.cc/paper_files/paper/2024/file/3b6aaffec941f98930753fa6d6de7263-Paper-Conference.pdf)
- **WikiHop** (measurements) — *measured_by*
  > Reading Comprehension ... We primarily consider WIKIHOP [31] in the task, which necessitates multi-hop reasoning to derive the final answer.
  - [Information Re-Organization Improves Reasoning in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/eb1a323fa10d4102ff13422476a744ff-Paper-Conference.pdf)
- **TriviaQA** (measurements) — *measured_by*
  > Reading Comprehension:TriviaQA [42] (0-shot), with the assessment based on the exact match from context. (Section 3.1).
  - [Should We Really Edit Language Models? On the Evaluation of Edited Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/370fa2e691f57eb319bc263a07dad4a5-Paper-Conference.pdf)
- **DocVQA** (measurements) — *measured_by*
  > DocVQA (Mathew et al., 2021) focuses on reading comprehension tasks over document images. (Section 4.1)
  - [Solving Token Gradient Conflict in Mixture-of-Experts for Large Vision-Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/532ce4fcf853023c4cf2ac38cbc5d002-Paper-Conference.pdf)
- **SciQA** (measurements) — *measured_by*
  > Additionally, the DWM not only enhances the model’s performance on reading comprehension tasks, such as SciQA and BoolQ, but also improves its performance on commonsense reasoning tasks, such as the WinoGrande.
  - [LLM Data Selection and Utilization via Dynamic Bi-level Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yu25g/yu25g.pdf)
- **FilBench** (measurements) — *measured_by*
  > “FILBENCH, a Filipino-centric benchmark designed to evaluate LLMs across a diverse set of tasks and capabilities in Filipino, Tagalog, and Cebuano. We carefully curate the tasks in FILBENCH to reflect the priorities and trends of NLP research in the Philippines such as Cultural Knowledge, Classical NLP, Reading Comprehension, and Generation.”
  - [FilBench: Can LLMs Understand and Generate Filipino?](https://aclanthology.org/2025.emnlp-main.127.pdf)
- **TyDi QA** (measurements) — *measured_by*
  > We adopt the Indonesian set from TyDi QA (Clark et al., 2020) for reading comprehension, which is based on Indonesian Wikipedia with human-written questions. (Section 3.3)
  - [LORAXBENCH: A Multitask, Multilingual Benchmark Suite for 20 Indonesian Languages](https://aclanthology.org/2025.emnlp-main.881.pdf)

### Associated with
- **Knowledge conflict resolution** (constructs)
  > To achieve this, it requires strong reading comprehension skills to interpret and extract accurate information as well as confidence reasoning...
  - [To Trust or Not to Trust? Enhancing Large Language Models' Situated Faithfulness to External Contexts](https://proceedings.iclr.cc/paper_files/paper/2025/file/186a213d720568b31f9b59c085a23e5a-Paper-Conference.pdf)
- **Note comprehension** (constructs)
  > Note Comprehension. Models must understand and analyze textual content within SNS... The designed tasks are: ... (2) Note-MRC. Tests reading comprehension...
  - [SNS-Bench: Defining, Building, and Assessing Capabilities of Large Language Models in Social Networking Services](https://raw.githubusercontent.com/mlresearch/v267/main/assets/guo25o/guo25o.pdf)
- **Activation sparsity** (constructs)
  > "we introduce a tiny validation dataset and two groups of benchmarks for evaluation, including commonsense reasoning (C.R.) and reading comprehension (R.C.)"
  - [Sparsing Law: Towards Large Language Models with Greater Activation Sparsity](https://raw.githubusercontent.com/mlresearch/v267/main/assets/luo25i/luo25i.pdf)
