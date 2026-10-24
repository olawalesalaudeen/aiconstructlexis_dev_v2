# Abstention
**Type:** Behavior  
**Referenced in:** 26 papers  
**Also known as:** Abstaining from answering, Answer abstention, Selective answering, Task avoidance, Ill-defined problem rejection, Task skipping  

## State of the Field

**Space of definitions.** Across papers, abstention is most commonly described as withholding a substantive answer when the model is uncertain, lacks the needed knowledge, or does not have enough supporting information. Most papers operationalize this as refusing, saying variants of "I don't know", or returning no answer, though some broaden it to asking an information-seeking question instead of a final answer, and one thresholded formulation returns an answer only when confidence exceeds a preset level. A smaller line of work uses the same observable pattern for cases framed as task avoidance or rejection, and one paper distinguishes consistent refusal from cases that only "partly abstained" across multiple sampled answers.

**Variants.** Most variants remain in QA-style settings, where abstention can be expressed as refusal-like text, reserved outputs such as "[IDK]" or "NO-RESPONSE", or asking for more information. Other papers study it in multimodal questioning when the image lacks needed evidence, with a required keyword such as "doesnotapply", and in tool or reasoning settings under names like selective answering, task skipping, and ill-defined problem rejection when a task is not attempted or a problem is judged unsolvable. A smaller scoring-oriented variant allows abstention as an option in multiple-choice evaluation with negative marking.

**Space of elicitation and scores.** Papers measure abstention with 4 instruments: LLM-as-a-judge, LLMEval, LongMemEval, and TDIUC. These instruments score it in different ways, for example by labeling a response as abstention, clarification or refusal versus direct answer, rating examples as correct, abstain, or hallucinate, testing abstention as one of several long-term memory abilities, or using absurd visual questions that are not related to the image and thus should not be answered. Outside these named instruments, papers also elicit or score abstention through confidence thresholds, explicit reject instructions, and required abstention strings such as "NO-RESPONSE" and "doesnotapply".

**What it is taken as evidence of.** Papers do not converge on a single construct that abstention reflects. Across 9 linked constructs, the named links include calibration, confidence, factuality, generalization, and honesty: one paper claims a causal relationship from calibration to abstention, one paper treats abstention as measuring confidence, and other papers describe abstention as related to factuality, generalization, and honesty. Four other constructs are also linked through a mix of causal and related claims rather than a single shared interpretation, and one paper additionally claims a causal relationship from abstention to hallucination, stating that shifting toward abstention prevents hallucinations.

## Sources

**[MediQ: Question-Asking LLMs and a Benchmark for Reliable Interactive Clinical Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/32b80425554e081204e5988ab1c97e9a-Paper-Conference.pdf)**
> The observable behavior of refraining from providing a final answer when confidence is low, opting instead to ask a question.

**[I Don't Know: Explicit Modeling of Uncertainty with an [IDK] Token](https://proceedings.neurips.cc/paper_files/paper/2024/file/14c018d2e72c521605b0567029ef0efb-Paper-Conference.pdf) (as "Abstaining from answering")**
> Withholding an answer by emitting an uncertainty signal or equivalent refusal-like output instead of a substantive response.

**[Fictitious Synthetic Data Can Improve LLM Factuality via Prerequisite Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/98ecdc722006c2959babbdbdeb22eb75-Paper-Conference.pdf) (as "Answer abstention")**
> The model's action of declining to answer a question, often by stating "I don't know", when it lacks the necessary knowledge.

**[QA-Calibration of Language Model Confidence Scores](https://proceedings.iclr.cc/paper_files/paper/2025/file/cd96cb9a239c37b39dbf34f3f5a4c56f-Paper-Conference.pdf) (as "Selective answering")**
> The observable behavior of returning an answer only when confidence exceeds a threshold, otherwise abstaining from responding.

**[Evaluating Large Language Models through Role-Guide and Self-Reflection: A Comparative Study](https://proceedings.iclr.cc/paper_files/paper/2025/file/0b8705a611ed1ce19cdb759031078705-Paper-Conference.pdf) (as "Task avoidance")**
> The behavior of a model failing to provide a definitive answer to a task as instructed in the prompt.

**[VCSearch: Bridging the Gap Between Well-Defined and Ill-Defined Problems in Mathematical Reasoning](https://aclanthology.org/2025.emnlp-main.642.pdf) (as "Ill-defined problem rejection")**
> The observable behavior of a model refusing to generate a solution when presented with a mathematical problem that has missing or contradictory conditions.

**[Benchmarking Failures in Tool-Augmented Language Models](https://aclanthology.org/2025.naacl-long.149.pdf) (as "Task skipping")**
> Choosing not to attempt a task when the model determines it lacks necessary information or tools to solve it.

## Relationships

### Abstention →
- **TDIUC** (measurements) — *measured_by*
  > We evaluate on TDIUC (Kafle & Kanan, 2017), a VQA dataset containing absurd questions (∼22% of a total number of questions), that are not related to the image and thus should not be answered.
  - [Beyond task performance: evaluating and reducing the flaws of large multimodal models with in-context-learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/5df817c5dd95293ebf6d1583303a8c73-Paper-Conference.pdf)
- **LLMEval** (measurements) — *measured_by*
  > Then, for each example, we can rate it as “correct” or “abstain” or “hallucinate” depending on the LLMEval output. (Section 4.2)
  - [Sufficient Context: A New Lens on Retrieval Augmented Generation Systems](https://proceedings.iclr.cc/paper_files/paper/2025/file/33dffa2e3d2ab74a783d1a8c292f66d9-Paper-Conference.pdf)
- **LongMemEval** (measurements) — *measured_by*
  > We introduce LONGMEMEVAL, a comprehensive benchmark designed to evaluate five core long-term memory abilities of chat assistants: information extraction, multi-session reasoning, temporal reasoning, knowledge updates, and abstention. (Abstract)
  - [LongMemEval: Benchmarking Chat Assistants on Long-Term Interactive Memory](https://proceedings.iclr.cc/paper_files/paper/2025/file/d813d324dbf0598bbdc9c8e79740ed01-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks) — *causes*
  > CDA successfully shifts the distribution towards abstention, preventing hallucinations. (Section 6.6, Figure 10)
  - [When to Speak, When to Abstain: Contrastive Decoding with Abstention](https://aclanthology.org/2025.acl-long.479.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > A pretrained LLM-as-judge labels responses as either abstention (clarification or refusal) or direct answer... (Section 4.1)
  - [Sparse Neurons Carry Strong Signals of Question Ambiguity in LLMs](https://aclanthology.org/2025.emnlp-main.813.pdf)

### → Abstention
- **In-context learning** (constructs) — *causes*
  > “ICL significantly improves abstention.”
  - [Beyond task performance: evaluating and reducing the flaws of large multimodal models with in-context-learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/5df817c5dd95293ebf6d1583303a8c73-Paper-Conference.pdf)
- **Calibration** (constructs) — *causes*
  > Finally, finetuning with our listener-aware method leads to an emergent increase in model abstention (e.g. saying “I don’t know”) for answers that are likely to be wrong, trading recall for precision. (Abstract)
  - [LACIE: Listener-Aware Finetuning for Calibration in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/4b8eaf3bcdc105423a972ed90eb07217-Paper-Conference.pdf)

### Associated with
- **Honesty** (constructs)
  > LMMs must be ... honest (e.g., abstention or the ability to say I don’t know...)
  - [Beyond task performance: evaluating and reducing the flaws of large multimodal models with in-context-learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/5df817c5dd95293ebf6d1583303a8c73-Paper-Conference.pdf)
- **Generalization** (constructs)
  > generalizability: whether abstention extends to concept’s descendants (Section 1)
  - [Knowledge Graph Guided Evaluation of Abstention Techniques](https://aclanthology.org/2025.naacl-long.353.pdf)
- **Specificity** (constructs)
  > specificity: whether questions about ancestor and sibling concepts are not refused, where abstention is undesirable. (Section 1)
  - [Knowledge Graph Guided Evaluation of Abstention Techniques](https://aclanthology.org/2025.naacl-long.353.pdf)
- **Truthfulness** (constructs)
  > It evaluates whether models can provide factually accurate responses, or appropriately abstain when uncertain. (Section 2.1)
  - [FinTrust: A Comprehensive Benchmark of Trustworthiness Evaluation in Finance Domain](https://aclanthology.org/2025.emnlp-main.512.pdf)
- **Factuality** (constructs)
  > We define L(∅, ·) = 0, which indicates that we do not penalize the model for abstaining from responding when it is uncertain, as here we only focus on the assurance of factuality while neglecting other aspects of reliability such as omission of information. (Section 3.1)
  - [Towards Statistical Factuality Guarantee for Large Vision-Language Models](https://aclanthology.org/2025.emnlp-main.576.pdf)
- **Confidence** (constructs)
  > The goal of the Abstention Module is to evaluate the confidence level of the Expert system
  - [MediQ: Question-Asking LLMs and a Benchmark for Reliable Interactive Clinical Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/32b80425554e081204e5988ab1c97e9a-Paper-Conference.pdf)
- **Knowledge boundary awareness** (constructs)
  > To address the critical limitation of RAFT models regarding their inability to abstain from answering when queries fall outside both knowledge boundaries (✘✘), we construct a comprehensive preference dataset that captures the desired behavior for each quadrant. (Section 5)
  - [Divide-Then-Align: Honest Alignment based on the Knowledge Boundary of RAG](https://aclanthology.org/2025.acl-long.561.pdf)
