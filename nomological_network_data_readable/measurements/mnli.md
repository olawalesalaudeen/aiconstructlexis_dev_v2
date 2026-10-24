# MNLI
**Type:** Measurement  
**Referenced in:** 60 papers  
**Also known as:** MultiNLI  

## State of the Field

**What it is.** Across these papers, MNLI is most commonly treated as a natural language inference benchmark or corpus of premise-hypothesis sentence pairs for entailment classification. Definitions usually describe three labels, entailment, contradiction, and neutral, and often add that it is large-scale, crowdsourced, and spans multiple genres; one paper paraphrases the third label as unrelated, and another presents it as a multi-class classification problem. Some authors refer to match and mismatch variants, including MNLI-(m/mm) and hard-match versus hard-mismatch splits, while a smaller line of work describes MultiNLI as supervision for fine-tuning NLI-adapted models.

**What it is claimed to measure.** The prevailing measurement claim is that papers use MNLI to measure natural language inference. Beyond that, papers link it to 4 constructs and 4 behavioral indicators: alongside natural language inference, it is used to measure natural language understanding, generalization, in-context learning, and reasoning, and to evaluate language understanding task performance, text classification, and zero-shot task performance. The measurement claims therefore converge most clearly on NLI, with smaller lines of work extending it to broader evaluation targets.

**Space of uses.** In use, MNLI is usually one task inside larger evaluation suites rather than a standalone protocol. GLUE is the only linked instrument, and papers frequently place MNLI alongside SST-2, QNLI, RTE, QQP, and MRPC; other papers also use it as a downstream indicator after pre-training, pruning, compression, or prompt tuning. A smaller line of work uses MultiNLI directly as supervision, for example to fine-tune NLI heads or backbone models.

**Concerns raised.** One paper notes that standard NLI datasets like MNLI contain many similar samples because they are constructed through edits, and in that paper NLI predictions are expected to be more reliable on those pairs. Other papers distinguish hard-match and hard-mismatch variants when using MNLI for robustness or out-of-distribution checks.

## Sources

**[Accurate Retraining-free Pruning for Pretrained Encoder-based Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/45fc8e1c55df116b23488f3cdb2fc642-Paper-Conference.pdf)**
> A natural language inference benchmark used to evaluate entailment classification across sentence pairs.

**[Sneaking Syntax into Transformer Language Models with Tree Regularization](https://aclanthology.org/2025.naacl-long.407.pdf) (as "MultiNLI")**
> A natural language inference dataset used as pretraining or backbone supervision for NLI-adapted models.

## Relationships

### → MNLI
- **Natural language inference** (behaviors tasks) — *measured_by*
  > “Natural Language Inference (MNLI”
  - [An LLM can Fool Itself: A Prompt-Based Adversarial Attack](https://proceedings.iclr.cc/paper_files/paper/2024/file/0c72285e193ec90dca93258128698cfb-Paper-Conference.pdf)
- **Natural language understanding** (constructs) — *measured_by*
  > In the realm of NLU, we utilized the CoLA (Warstadt et al., 2019), RTE (Poliak, 2020), MNLI (Williams et al., 2018), MRPC (Dolan & Brockett, 2005) datasets from GLUE benchmark (Wang et al., 2018) to evaluate the performance of UniCoTT (Section 4.1).
  - [UniCoTT: A Unified Framework for Structural Chain-of-Thought Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/ca642f8e1174012d67c05c1c9f969644-Paper-Conference.pdf)
- **In-context learning** (constructs) — *measured_by*
  > We conduct experiments to investigate the correlation between subset influence and its corresponding in-context learning performance. (Section 4.3.1, Figure 4b on MNLI)
  - [IDEAL: Influence-Driven Selective Annotations Empower In-Context Learners in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/a7f90da65dd41d699d00e95700e6fa1e-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > For inference ability, we choose six datasets including Hellaswag [48], PIQA [1], WinoGrande [32], QNLI [31], MNLI [44], and WikiText2 [28] for evaluation.
  - [LLMCBench: Benchmarking Large Language Model Compression for Efficient Deployment](https://proceedings.neurips.cc/paper_files/paper/2024/file/9f4cc62d0632911c63163ea3d9ec19bd-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Text classification** (behaviors tasks) — *measured_by*
  > We experiment on four large-scale text classification datasets: SST-2 (Socher et al., 2013), MNLI (Williams et al., 2018), AG News (Zhang and LeCun, 2015), and IMDB (Maas et al., 2011) (Section 3.1).
  - [CondenseLM: LLMs-driven Text Dataset Condensation via Reward Matching](https://aclanthology.org/2025.emnlp-main.65.pdf)

### Associated with
- **GLUE** (measurements)
  > We first evaluate the language understanding tasks from the GLUE benchmark(Wang et al., 2018) including MNLI, SST2, QNLI and QQP using the RoBERTa model.
  - [Improving LoRA in Privacy-preserving Federated Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/4e243e95c913b367775d71d7182b99d9-Paper-Conference.pdf)
