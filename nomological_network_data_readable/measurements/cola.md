# CoLA
**Type:** Measurement  
**Referenced in:** 35 papers  
**Also known as:** GLUE-COLA, GLUE-CoLA  

## State of the Field

**What it is.** Across the definitions, the prevailing usage treats CoLA as the Corpus of Linguistic Acceptability, a GLUE benchmark or task for judging whether an English sentence is grammatically acceptable. Papers commonly describe it as a single-sentence, often binary classification setting, with sentences labeled as acceptable or unacceptable, or as grammatically correct or incorrect. A smaller line of work describes GLUE-CoLA as a dataset of text from books and journal articles used inside TDDBench, and one paper refers to CoLA-dev in its evaluation setup.

**What it is claimed to measure.** In the papers that connect it to broader concepts, CoLA is used to measure one construct, Generalization, and it is not linked to any behavioral indicators. One paper treats GLUE-COLA as one of several "unseen tasks" when reporting Generalization, so the measurement claims converge on a single construct rather than spreading across several.

**Space of uses.** No measurement instrument is linked to it. Most papers position CoLA as one task inside broader benchmark suites or downstream checks, including GLUE development-set reporting, fine-tuning and parameter-efficient adaptation, out-of-domain close-ended ICL evaluation, downstream capability assessment after editing, and robustness testing under bit-flip errors. A smaller line of work places GLUE-CoLA inside TDDBench to evaluate training data detection algorithms.

## Sources

**[Fast-ELECTRA for Efficient Pre-training](https://proceedings.iclr.cc/paper_files/paper/2024/file/1e5f58d98523298cba093f658cfdf2d6-Paper-Conference.pdf)**
> The Corpus of Linguistic Acceptability benchmark, used here as a downstream grammatical acceptability evaluation.

**[ELICIT: LLM Augmentation Via External In-context Capability](https://proceedings.iclr.cc/paper_files/paper/2025/file/3ffd6024f02b92a52abe8e79a78e9064-Paper-Conference.pdf) (as "GLUE-COLA")**
> The Corpus of Linguistic Acceptability, a task from the GLUE benchmark for determining if a sentence is grammatically correct.

**[TDDBench: A Benchmark for Training data detection](https://proceedings.iclr.cc/paper_files/paper/2025/file/4db8a681ae1e58376dc6227978829063-Paper-Conference.pdf) (as "GLUE-CoLA")**
> A dataset of text from books and journal articles, part of the GLUE benchmark, used in TDDBench to evaluate TDD algorithms.

## Relationships

### → CoLA
- **Natural language understanding** (constructs) — *measured_by*
  > In the realm of NLU, we utilized the CoLA (Warstadt et al., 2019), RTE (Poliak, 2020), MNLI (Williams et al., 2018), MRPC (Dolan & Brockett, 2005) datasets from GLUE benchmark (Wang et al., 2018) to evaluate the performance of UniCoTT (Section 4.1).
  - [UniCoTT: A Unified Framework for Structural Chain-of-Thought Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/ca642f8e1174012d67c05c1c9f969644-Paper-Conference.pdf)
- **Grammatical acceptability judgment** (behaviors tasks) — *measured_by*
  > CoLA (Corpus of Linguistic Acceptability) (Warstadt et al., 2019) is a single-sentence classification task, where sentences are annotated as either grammatically acceptable or unacceptable (Section 4.3).
  - [AlphaEdit: Null-Space Constrained Knowledge Editing for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/29c8c615b3187ee995029284702d3f43-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > In Table 3, we observe that ELICIT significantly improves model performance on unseen tasks (GLUE-COLA, BBQ Religion, Deepmind (Saxton et al., 2019), MMLU-Psychology, and BBH-Logical-Deduction-Five-objects) not present in its capability library. (Section 4.4).
  - [ELICIT: LLM Augmentation Via External In-context Capability](https://proceedings.iclr.cc/paper_files/paper/2025/file/3ffd6024f02b92a52abe8e79a78e9064-Paper-Conference.pdf)
- **Text classification** (behaviors tasks) — *measured_by*
  > Following Zhang et al. (2023b), we evaluate on a series of Text Classification datasets: CoLA (2 labels) (Warstadt et al., 2019)... (Section 3.1)
  - [Learning to Reason via Program Generation, Emulation, and Search](https://proceedings.neurips.cc/paper_files/paper/2024/file/401ece9f5d1cfa8600c22049ef43930e-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > we perform General Capability Tests using six natural language tasks... Specifically, the evaluation tasks include: ... 5. CoLA (Corpus of Linguistic Acceptability) (Section 4.3).
  - [AlphaEdit: Null-Space Constrained Knowledge Editing for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/29c8c615b3187ee995029284702d3f43-Paper-Conference.pdf)

### Associated with
- **GLUE** (measurements)
  > In this context, our evaluation is conducted across 6 datasets from the GLUE: SST-2, MRPC, CoLA, QNLI, RTE, and STS-B. (Section 4.2)
  - [KaSA: Knowledge-Aware Singular-Value Adaptation of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/8aec95bc5344290249c32841c07c9dd1-Paper-Conference.pdf)
