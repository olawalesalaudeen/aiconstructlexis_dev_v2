# SQA
**Type:** Measurement  
**Referenced in:** 20 papers  

## State of the Field

**What it is.** Across papers, the prevailing use of the label SQA is for science question answering, usually described as a benchmark or dataset of science questions that require complex reasoning and often include diagrams. Several definitions cast it as a multimodal benchmark for scientific reasoning, knowledge, or reasoning over text and diagrams, and one says it primarily assesses model reasoning capability. The acronym is also used differently in other papers, for sequential question answering over tables or logically related question sequences, for a 3D question answering benchmark with over 33K question-answer pairs from 650 indoor scenes, and in isolated cases for StrategyQA or a Speech Question Answering dataset.

**What it is claimed to measure.** Across papers, SQA is linked to four constructs and four behavioral indicators, and the measurement claims are spread across several targets rather than centering on one. The most common claim is that papers use it to measure visual question answering, with SQA listed among VQA or image question answering benchmarks; other papers use an SQA-labeled benchmark to measure 3D question answering, spoken question answering, and visual instruction following. On the construct side, papers use it to measure multi-hop reasoning, multimodal reasoning, and visual understanding, and one paper further relates SQA to spatial reasoning through question types that include spatial relationships.

**Space of uses.** Most papers position SQA as one item in broader evaluation suites rather than as a standalone instrument, often alongside VQAv2, GQA, VizWiz, TextVQA, and ScanQA, plus other multimodal and reasoning benchmarks. A smaller line of work instead uses an SQA-labeled dataset for sequential or table-based evaluation, and one 3D-QA paper treats SQA as one of two widely used benchmarks.

## Sources

**[Maintaining Structural Integrity in Parameter Spaces for Parameter Efficient Fine-tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/08487598819cba9feca884ef0d442950-Paper-Conference.pdf)**
> The Science Question Answering (SQA) dataset, which involves answering science questions that require complex reasoning and often an accompanying diagram.

## Relationships

### → SQA
- **Visual question answering** (behaviors tasks) — *measured_by*
  > we evaluate our method for pruning language models on various visual question-answering and reasoning benchmarks, including VQAv2 [17], SQA [37], and VQA [47]. (Section 7.3).
  - [Discovering Sparsity Allocation for  Layer-wise Pruning of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/ff997469ac66cf893c4183efeb22212a-Paper-Conference.pdf)
- **Multimodal reasoning** (constructs) — *measured_by*
  > We conduct extensive experiments on multiple challenging tasks such as arithmetic, knowledge reasoning, and multimodal benchmarks spanning GSM8K, MMLU, SQA, and VQA (Abstract).
  - [Discovering Sparsity Allocation for  Layer-wise Pruning of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/ff997469ac66cf893c4183efeb22212a-Paper-Conference.pdf)
