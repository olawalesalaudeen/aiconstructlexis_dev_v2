# MRPC
**Type:** Measurement  
**Referenced in:** 36 papers  

## State of the Field

**What it is.** Across the surveyed work, MRPC is most commonly described as the Microsoft Research Paraphrase Corpus, framed either as a benchmark or as a dataset for paraphrase detection or paraphrase identification. Definitions usually describe the task as deciding whether two sentences are paraphrases of each other, while some papers phrase it as determining the semantic equivalence relationship between two sentences. A recurring secondary framing treats it as a binary sentence-pair text classification task, often as a GLUE task.

**What it is claimed to measure.** Measurement claims center on paraphrase detection: papers explicitly use MRPC to measure the behavioral indicator Paraphrase detection, often under nearby labels such as paraphrase identification or paraphrase tasks. Papers also use it to measure 3 constructs, Natural language understanding, General ability, and In-context learning, so the broader construct-level use is spread across several constructs even though the task-level framing converges on paraphrase detection. Overall, it is linked to 1 behavioral indicator and 3 constructs.

**Space of uses.** Papers most commonly position MRPC as one task within broader evaluation suites, especially GLUE, which is the only linked instrument and is repeatedly named as the benchmark context around MRPC. In practice, papers use it alongside multi-dataset evaluations for fine-tuning, in-context learning, prompt tuning or exemplar selection, pruning or compression, and post-editing capability checks, usually as one item in a larger task list rather than as a standalone evaluation.

## Sources

**[Accurate Retraining-free Pruning for Pretrained Encoder-based Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/45fc8e1c55df116b23488f3cdb2fc642-Paper-Conference.pdf)**
> The Microsoft Research Paraphrase Corpus, a benchmark for detecting whether two sentences are paraphrases of each other.

## Relationships

### → MRPC
- **Paraphrase detection** (behaviors tasks) — *measured_by*
  > paraphrasing: QQP, MRPC (Dolan & Brockett, 2005); (Section 5.1)
  - [Batch Calibration: Rethinking Calibration for In-Context Learning and Prompt Engineering](https://proceedings.iclr.cc/paper_files/paper/2024/file/003e438cf04e3caf0a5c908495e484fe-Paper-Conference.pdf)
- **Natural language understanding** (constructs) — *measured_by*
  > In the realm of NLU, we utilized the CoLA (Warstadt et al., 2019), RTE (Poliak, 2020), MNLI (Williams et al., 2018), MRPC (Dolan & Brockett, 2005) datasets from GLUE benchmark (Wang et al., 2018) to evaluate the performance of UniCoTT (Section 4.1).
  - [UniCoTT: A Unified Framework for Structural Chain-of-Thought Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/ca642f8e1174012d67c05c1c9f969644-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > we perform General Capability Tests using six natural language tasks... Specifically, the evaluation tasks include: ... 2. MRPC (Microsoft Research Paraphrase Corpus) (Section 4.3).
  - [AlphaEdit: Null-Space Constrained Knowledge Editing for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/29c8c615b3187ee995029284702d3f43-Paper-Conference.pdf)

### Associated with
- **GLUE** (measurements)
  > MRPC in GLUE (Wang et al., 2019) (Section 4.1).
  - [Merge, Then Compress: Demystify Efficient SMoE with Hints from Its Routing Policy](https://proceedings.iclr.cc/paper_files/paper/2024/file/3d09a88c3372cdb79401fde592ca4db8-Paper-Conference.pdf)
