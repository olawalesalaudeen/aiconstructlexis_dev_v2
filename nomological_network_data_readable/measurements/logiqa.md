# LogiQA
**Type:** Measurement  
**Referenced in:** 45 papers  
**Also known as:** Logiqa  

## State of the Field

**What it is.** Across papers, LogiQA is most commonly described as a logical reasoning benchmark or dataset, often as multiple-choice machine reading comprehension in which a model chooses the correct option from a passage, a logic puzzle text, or stated premises. Several definitions say it uses expert-written questions to test human logical reasoning, and some specify deductive, inductive, and abductive inference or a broader mix of categorical, conditional, disjunctive, and conjunctive reasoning. A smaller line of work describes it instead as a commonsense reasoning benchmark, and one paper frames it as NLI-style questions that require inferring a conclusion from premises.

**What it is claimed to measure.** Papers link LogiQA to 5 constructs and 2 behavioral indicators. The prevailing use is to measure Logical reasoning, and more broadly Reasoning, while additional papers use it to measure Commonsense reasoning, Generalization, and Temporal reasoning. It is also used to measure Question answering and Zero-shot task performance, so papers most often treat it as a logical reasoning measure, while also attaching it to several adjacent targets.

**Space of uses.** Most papers position LogiQA as one task within larger evaluation suites rather than as a stand-alone protocol, often alongside PIQA, WinoGrande, WSC, MMLU, and GSM8K. The snippets place it in zero-shot accuracy reports, 5-shot generalization tests, reading comprehension task sets, continued QA and text understanding assessments, and broader downstream reasoning evaluations. The only linked instrument is MR-Ben, and one paper reports that MR-Ben draws its logic questions from LogiQA.

**Concerns raised.** One profiling paper raises a validity concern about what the benchmark measures, stating that LogiQA, though marketed as a logical reasoning benchmark, leans most on temporal reasoning, with deductive reasoning contributing only modestly.

## Sources

**[DataMan: Data Manager for Pre-training Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/1abed6ee581b9ceb4e2ddf37822c7fcb-Paper-Conference.pdf)**
> A dataset for logical reasoning, where models must choose the correct option for a question based on a given logical text passage.

**[Harnessing Diversity for Important Data Selection in Pretraining Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/b588d9b67932b459ea66ff6e2804c6b3-Paper-Conference.pdf) (as "Logiqa")**
> A benchmark dataset for evaluating commonsense reasoning capabilities in language models.

## Relationships

### → LogiQA
- **Logical reasoning** (constructs) — *measured_by*
  > "LogiQA [31] collects questions about natural language inference (NLI) and requires models to infer the conclusion based on provided premises."
  - [TAIA: Large Language Models are Out-of-Distribution Data Learners](https://proceedings.neurips.cc/paper_files/paper/2024/file/be0a8ecf8b2743a4117557c5eca0fb79-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > We evaluate Spectra Suite models using eight distinct common-sense and reasoning benchmarks consisting of tasks from logical and reasoning questions to grounded and physical commonsense tasks: Arc Easy, Arc Challenge (Clark et al., 2018), BoolQ (Clark et al., 2019), HellaSWAG (Zellers et al., 2019), WinoGrande (Sakaguchi et al., 2021), PIQA (Bisk et al., 2019), LAMBADA (Paperno et al., 2016), LogiQA (Liu et al., 2021), all under zero-shot settings. (Section 5)
  - [Surprising Effectiveness of pretraining Ternary  Language Model at Scale](https://proceedings.iclr.cc/paper_files/paper/2025/file/6499f26637f74f7c0fbfb46668434973-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > In the assessments of continued QA and text understanding, we report 0-shot accuracy for LogiQA [28], 32-shot BoolQ [29], and 0-shot LAMBADA [30]. (Section 5.1)
  - [DHA: Learning Decoupled-Head Attention from Transformer Checkpoints via Adaptive Heads Fusion](https://proceedings.neurips.cc/paper_files/paper/2024/file/518a75257f37b32f711082dff33c2ffc-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > To assess generalization beyond the pretraining distribution, we evaluate models on a series of diverse reasoning tasks in a 5-shot setting, including LogiQA Liu et al. (2020), LogiQA 2 Liu et al. (2023), SciQ Welbl et al. (2017), and PiQA Bisk et al. (2020). (Section 6.1)
  - [Dynamic Loss-Based Sample Reweighting for Improved Large Language Model Pretraining](https://proceedings.iclr.cc/paper_files/paper/2025/file/ded26b348d55953a4863d41540b7d5c4-Paper-Conference.pdf)
- **Commonsense reasoning** (constructs) — *measured_by*
  > Commonsense Reasoning: HellaSwag (Zellers et al., 2019), SIQA (Sap et al., 2019), Wino- Grande (Sakaguchi et al., 2021), Logiqa (Liu et al., 2020).
  - [Harnessing Diversity for Important Data Selection in Pretraining Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/b588d9b67932b459ea66ff6e2804c6b3-Paper-Conference.pdf)
- **Temporal reasoning** (constructs) — *measured_by*
  > “LogiQA, marketed as a logical reasoning benchmark, in fact leans most on Temporal Reasoning and Commonsense Causal Reasoning”
  - [Benchmark Profiling: Mechanistic Diagnosis of LLM Benchmarks](https://aclanthology.org/2025.emnlp-main.789.pdf)

### Associated with
- **MR-Ben** (measurements)
  > For logic questions, we draw from LogiQA [40], which encompasses a broad spectrum of logical reasoning types, including categorical, conditional, disjunctive, and conjunctive reasoning. (Section 3.1).
  - [MR-Ben: A Meta-Reasoning Benchmark for Evaluating System-2 Thinking in LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/d81cb1f4dc6e13aeb45553f80b3d6837-Paper-Conference.pdf)
