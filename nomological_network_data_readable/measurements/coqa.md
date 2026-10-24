# CoQA
**Type:** Measurement  
**Referenced in:** 28 papers  
**Also known as:** COQA  

## State of the Field

**What it is.** Across papers, CoQA is most commonly described as a conversational question answering benchmark or dataset for evaluation, often framed as dialogue-based question answering or reading comprehension. Definitions repeatedly describe understanding a text passage or dialogue context and answering a series of interconnected questions in conversation, with some adding multi-turn reading comprehension, short-answer questions, or conversational comprehension requiring coreference and pragmatic reasoning. Papers mention the development split, the validation set, and the coqa-dev-v1.0 version; many descriptions call it open-book, though one paper labels it a closed-book reading comprehension dataset.

**What it is claimed to measure.** Papers link CoQA to 5 behavioral indicators and 1 construct. The dominant use is for question-answering related indicators, especially Question answering, Conversational question answering, and Machine reading comprehension; it is also used for Extractive question answering and Knowledge generation. These claims are concentrated on behavioral indicators rather than multiple constructs, since the only linked construct is Reasoning, with one paper assessing commonsense and math reasoning on CoQA by exact match accuracy.

**Space of uses.** Several papers use CoQA in zero-shot or 0-shot evaluation, sometimes through lm-evaluation-harness, the only linked instrument, which papers describe as a standardized or zero-shot evaluation framework. It is frequently evaluated alongside SQuAD, GSM8K, TruthfulQA, and TriviaQA. Papers variously position it as a widely used benchmark, an unrelated task, a longer-input test, or, in one setup, an "Independent" setting where the questions are not related to each other, typically on development or validation splits.

## Sources

**[BadEdit: Backdooring Large Language Models by Model Editing](https://proceedings.iclr.cc/paper_files/paper/2024/file/6f6fe6789e14796b6544a04b20d11902-Paper-Conference.pdf)**
> CoQA (Conversational Question Answering) is an open-book conversational question answering dataset used for evaluation.

**[HShare: Fast LLM Decoding by Hierarchical Key-Value Sharing](https://proceedings.iclr.cc/paper_files/paper/2025/file/de7dc701a2882088f3136139949e1d05-Paper-Conference.pdf) (as "COQA")**
> The Conversational Question Answering benchmark, a dataset designed to evaluate dialogue-based question-answering systems.

## Relationships

### → CoQA
- **Conversational question answering** (behaviors tasks) — *measured_by*
  > We use a relation extraction dataset ZSRE (Meng et al., 2022a) and a conversational question answering dataset CoQA (Reddy et al., 2019) to represent unrelated tasks
  - [BadEdit: Backdooring Large Language Models by Model Editing](https://proceedings.iclr.cc/paper_files/paper/2024/file/6f6fe6789e14796b6544a04b20d11902-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > we performed experiments on three datasets that cover a broad range of question answering settings. To be concrete, we use ... the almost 8,000 open-book questions in the development split of CoQA (Reddy et al., 2019) (Section 6).
  - [Improving Uncertainty Estimation through Semantically Diverse Language Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b94d8b035e2183e47afef9e2f299ba47-Paper-Conference.pdf)
- **Machine reading comprehension** (behaviors tasks) — *measured_by*
  > Reading Comprehension (RC): SQuAD-3-shots [50], BoolQ-0-shot [12], and CoQA-0-shot [51].
  - [Dataset Decomposition: Faster LLM Training with Variable Sequence Length Curriculum](https://proceedings.neurips.cc/paper_files/paper/2024/file/3f9bf45ea04c98ad7cb857f951f499e2-Paper-Conference.pdf)
- **Extractive question answering** (behaviors tasks) — *measured_by*
  > (b) extractive question answering (SQuAD (Rajpurkar et al., 2016), CoQA (Reddy et al., 2019)) (Section 4.2)
  - [Think before you speak: Training Language Models With Pause Tokens](https://proceedings.iclr.cc/paper_files/paper/2024/file/76917808731dae9e6d62c2a7a6afb542-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > For standard contexts, we utilize generation tasks from LM-Eval (Gao et al., 2021), assessing model performance across commonsense and math reasoning on CoQA (Exact Match (EM) Accuracy) (Reddy et al., 2019)... (Section 5.1)
  - [$\text{D}_{2}\text{O}$: Dynamic Discriminative Operations for Efficient Long-Context Inference of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d862f7f5445255090de13b825b880d59-Paper-Conference.pdf)

### Associated with
- **lm-evaluation-harness** (measurements)
  > We use the LM-Eval framework to conduct zero-shot inference on GSM8K and COQA.
  - [HShare: Fast LLM Decoding by Hierarchical Key-Value Sharing](https://proceedings.iclr.cc/paper_files/paper/2025/file/de7dc701a2882088f3136139949e1d05-Paper-Conference.pdf)
