# FLAN
**Type:** Measurement  
**Referenced in:** 3 papers  

## State of the Field

**What it is.** Across the surveyed work, FLAN is described as a benchmark or dataset of diverse tasks, including free-form generation tasks such as translation and summarization. Some descriptions further frame it as a collection of datasets expressed via natural language instructions for evaluating model performance on a wide variety of NLP tasks, and papers also position it as a large multi-task evaluation set or a mix of multiple NLP tasks. A reported use samples 100 questions from each of its 66 tasks as a "whole benchmark."

**What it is claimed to measure.** Papers use FLAN to measure 2 constructs and link it to 1 behavioral indicator. The prevailing measurement claim is that it measures Generalization, while a smaller line of work uses it to measure Robustness, with both claims framed through evaluation across multiple tasks. Beyond those measurement links, FLAN is also related to Open-ended question answering.

**Space of uses.** In use, papers position FLAN as a reference dataset or multi-task evaluation set for checking performance across varied tasks. Reported uses include sampling 100 questions from each of its 66 tasks as a "whole benchmark" and evaluating it alongside Wikitext and Gigaword for robust evaluation across various tasks. No measurement instrument is linked to it through the recorded relationships.

## Sources

**[BenTo: Benchmark Reduction with In-Context Transferability](https://proceedings.iclr.cc/paper_files/paper/2025/file/4798eef078de031518beaf54f4b5fb5f-Paper-Conference.pdf)**
> A benchmark of diverse tasks including free-form generation tasks such as translation and summarization, used here as a large multi-task evaluation set.

## Relationships

### → FLAN
- **Generalization** (constructs) — *measured_by*
  > To demonstrate the generalizability and robustness of our method, we include FLAN (Chung et al., 2024) (a mix of multiple NLP tasks) as reference datasets .
  - [Harnessing Diversity for Important Data Selection in Pretraining Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/b588d9b67932b459ea66ff6e2804c6b3-Paper-Conference.pdf)
- **Robustness** (constructs) — *measured_by*
  > To demonstrate the generalizability and robustness of our method, we include FLAN (Chung et al., 2024) (a mix of multiple NLP tasks) as reference datasets .
  - [Harnessing Diversity for Important Data Selection in Pretraining Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/b588d9b67932b459ea66ff6e2804c6b3-Paper-Conference.pdf)

### Associated with
- **Text generation** (behaviors tasks)
  > FLAN is a dataset with more diverse forms of tasks, including free-form generation tasks like translation and summarization. (Section 5)
  - [BenTo: Benchmark Reduction with In-Context Transferability](https://proceedings.iclr.cc/paper_files/paper/2025/file/4798eef078de031518beaf54f4b5fb5f-Paper-Conference.pdf)
