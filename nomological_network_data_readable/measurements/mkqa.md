# MKQA
**Type:** Measurement  
**Referenced in:** 6 papers  

## State of the Field

**What it is.** Papers most commonly describe MKQA as a multilingual or cross-lingual question-answering benchmark or dataset. Definitions vary slightly: some present it as a multilingual open-domain benchmark derived from Natural Questions, some as a multilingual open-ended benchmark for assessing retrieval-augmented answering, and another treats it as a knowledge retrieval dataset for interpretability analysis. One study further characterizes it as a multilingual knowledge QA task with 10k question-answer pairs aligned across 26 languages, and some papers place it among benchmarks built by translating or aligning parallel questions across languages.

**What it is claimed to measure.** Across papers, the prevailing use is to measure multilingual question answering. It is linked to 2 behavioral indicators and 1 construct overall, most often multilingual question answering, with smaller usages as a measure of knowledge retrieval and as measuring cross-lingual alignment capability. The reported measurement claims are concentrated on question answering rather than spread across many different targets.

**Space of uses.** Papers frequently use MKQA alongside other multilingual QA benchmarks, especially MLQA and XOR-TyDi QA, where it is described as helping represent multilingual open-ended question-answering tasks. A smaller line of work uses it with BoolQ and AmbigQA as a representative knowledge retrieval dataset for interpretability analysis. Another study includes it in a broader battery of six benchmarks covering reasoning, understanding, and generation tasks.

## Sources

**[Is Translation All You Need? A Study on Solving Multilingual Tasks with Large Language Models](https://aclanthology.org/2025.naacl-long.485.pdf)**
> Multilingual Knowledge Questions and Answers, a cross-lingual question answering dataset used as a knowledge retrieval benchmark in interpretability analysis.

## Relationships

### → MKQA
- **Multilingual question answering** (behaviors tasks) — *measured_by*
  > We use a simple multilingual knowledge QA task called MKQA (Longpre et al., 2021), which consists of 10k knowledge question-answer pairs aligned across 26 languages. (Section 6.2).
  - [The Transfer Neurons Hypothesis: An Underlying Mechanism for Language Latent Space Transitions in Multilingual LLMs](https://aclanthology.org/2025.emnlp-main.1618.pdf)
- **Knowledge retrieval** (behaviors tasks) — *measured_by*
  > We selected MKQA (Longpre et al., 2021), BoolQ (Clark et al., 2019), and AmbigQA (Min et al., 2020) as representative datasets of knowledge retrieval tasks for the interpretability analysis. (Section 5.3)
  - [Large Language Models Are Cross-Lingual Knowledge-Free Reasoners](https://aclanthology.org/2025.naacl-long.72.pdf)
- **Information retrieval** (behaviors tasks) — *measured_by*
  > “To evaluate cross-lingual retrieval performance, we conducted comprehensive experiments using the Multilingual Knowledge Questions & Answers (MKQA) benchmark”
  - [Conan-Embedding-v2: Training an LLM from Scratch for Text Embeddings](https://aclanthology.org/2025.emnlp-main.758.pdf)
