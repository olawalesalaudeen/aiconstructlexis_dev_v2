# QNLI
**Type:** Measurement  
**Referenced in:** 35 papers  

## State of the Field

**What it is.** Across the papers, QNLI is most commonly described as a question-answering natural language inference benchmark or dataset. Most definitions frame it as an entailment-style binary classification task over question-sentence pairs, asking whether a sentence contains the answer to a question, and several also note that it is derived from SQuAD. A smaller number of papers describe it more generally as question answering framed as textual entailment, and one describes the input as question-paragraph pairs rather than question-sentence pairs.

**What it is claimed to measure.** Papers report QNLI as measuring 2 constructs and 4 behavioral indicators. The prevailing use is to measure Natural language inference, with several papers explicitly listing QNLI among inference tasks; papers also use it to measure Natural language understanding, Language understanding task performance, Question answering, and Text classification, with one additional construct link to Reasoning. Most recorded measurement claims therefore concern inference and language understanding rather than a single exclusive target.

**Space of uses.** In use, papers frequently position QNLI as one task within broader evaluation suites rather than as a standalone instrument. It is related to one other instrument, GLUE, and is commonly used alongside other GLUE tasks in fine-tuning and adaptation studies; other papers include it in pruning and compression comparisons, inference-ability evaluation, and in-context learning experiments.

**Concerns raised.** One paper, "Batch Calibration: Rethinking Calibration for In-Context Learning and Prompt Engineering," raises a calibration concern, reporting that the content-free prompt "Question: N/A, Sentence: N/A, Answer:" biases QNLI predictions toward "entailment".

## Sources

**[Accurate Retraining-free Pruning for Pretrained Encoder-based Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/45fc8e1c55df116b23488f3cdb2fc642-Paper-Conference.pdf)**
> A question-answering natural language inference benchmark used to evaluate entailment classification for question-sentence pairs.

## Relationships

### → QNLI
- **Natural language inference** (behaviors tasks) — *measured_by*
  > “Natural Language Inference (MNLI, RTE, QNLI)”
  - [An LLM can Fool Itself: A Prompt-Based Adversarial Attack](https://proceedings.iclr.cc/paper_files/paper/2024/file/0c72285e193ec90dca93258128698cfb-Paper-Conference.pdf)
- **Natural language understanding** (constructs) — *measured_by*
  > The experiments involved 4 NLU benchmarks: RTE (Wang et al., 2019), COLA (Wang et al., 2019), 20NG (Lang, 1995) and QNLI (Wang et al., 2019) (Section 4).
  - [Federated Residual Low-Rank Adaption of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/906c860f1b7515a8ffec02dcdac74048-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > For inference ability, we choose six datasets including Hellaswag [48], PIQA [1], WinoGrande [32], QNLI [31], MNLI [44], and WikiText2 [28] for evaluation.
  - [LLMCBench: Benchmarking Large Language Model Compression for Efficient Deployment](https://proceedings.neurips.cc/paper_files/paper/2024/file/9f4cc62d0632911c63163ea3d9ec19bd-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Text classification** (behaviors tasks) — *measured_by*
  > QNLI: This is a dataset containing sentence pairs for binary classification (entailment/not entailment). (Section 5)
  - [Cape: Context-Aware Prompt Perturbation Mechanism with Differential Privacy](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25g/wu25g.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > ...and QNLI for question answering (Wang et al., 2018). (Section 4.1)
  - [NormXLogit: The Head-on-Top Never Lies](https://aclanthology.org/2025.emnlp-main.1769.pdf)

### Associated with
- **GLUE** (measurements)
  > We first evaluate the language understanding tasks from the GLUE benchmark(Wang et al., 2018) including MNLI, SST2, QNLI and QQP using the RoBERTa model.
  - [Improving LoRA in Privacy-preserving Federated Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/4e243e95c913b367775d71d7182b99d9-Paper-Conference.pdf)
