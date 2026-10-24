# MultiRC
**Type:** Measurement  
**Referenced in:** 17 papers  
**Also known as:** MRC, Multi-sentence reading comprehension  

## State of the Field

**What it is.** Most commonly, papers treat MultiRC as a Multi-Sentence Reading Comprehension dataset or benchmark for question answering, usually described as requiring reasoning or synthesis across multiple sentences in a passage or text. The prevailing description presents it as a multiple choice dataset, and one recurring definition adds exact-match accuracy as the evaluation format. Some authors place it within SuperGLUE, note that questions may have multiple correct answers, or describe multi-sentence reading comprehension as the task itself rather than the dataset.

**What it is claimed to measure.** Across the linked claims, papers connect MultiRC to 1 construct and 1 behavioral indicator. It is more commonly used to measure Machine reading comprehension, with papers describing it as a question-answering dataset testing reading comprehension and as part of validation sets that cover reading comprehension. A smaller line of work uses it to measure General ability by including it among many tasks drawn from different general domains.

**Space of uses.** Papers use MultiRC alongside Arc-Easy, Arc-Challenge, OpenBookQA, MMLU, and HellaSwag. In those settings it is usually one task among broader evaluation collections, sometimes a validation set for generalization loss estimation, and some authors also position it as one of the SuperGLUE NLU tasks. Fine-tuning papers additionally report task-level performance and memory results on MultiRC.

## Sources

**[BERTs are Generative In-Context Learners](https://proceedings.neurips.cc/paper_files/paper/2024/file/04ea184dfb5f1babb78c093e850a83f9-Paper-Conference.pdf)**
> Multi-Sentence Reading Comprehension, a multiple choice dataset evaluated with exact-match accuracy.

**[MEPT: Mixture of Expert Prompt Tuning as a Manifold Mapper](https://aclanthology.org/2025.emnlp-main.823.pdf) (as "MRC")**
> Multi-Sentence Reading Comprehension (MultiRC) is a dataset from the SuperGLUE benchmark for a question answering task.

**[SSMLoRA: Enhancing Low-Rank Adaptation with State Space Model](https://aclanthology.org/2025.naacl-long.230.pdf) (as "Multi-sentence reading comprehension")**
> The task of answering a question that requires synthesizing information from multiple sentences within a passage.

## Relationships

### → MultiRC
- **Machine reading comprehension** (behaviors tasks) — *measured_by*
  > Additionally, we use ARC (Clark et al., 2018), OpenBookQA (Mihaylov et al., 2018), and MultiRC (Khashabi et al., 2018), covering question answering, commonsense reasoning, and reading comprehension, as validation sets for generalization loss estimation.
  - [Optimizing Pre-Training Data Mixtures with Mixtures of Data Expert Models](https://aclanthology.org/2025.acl-long.1564.pdf)
- **General ability** (constructs) — *measured_by*
  > "We evaluate the pre-trained base models on 17 tasks across different general domains which include: MMLU (Hendrycks et al., 2020), Arc-Easy, Arc-Challenge (Clark et al., 2018), HellaSwag (Zellers et al., 2019), PIQA (Bisk et al., 2020), SIQA (Sap et al., 2019), SciQ (Welbl et al., 2017), RTE (Dagan et al., 2005), BBH (Suzgun et al., 2022), LAMBADA (Paperno et al., 2016), OpenBookQA (Mihaylov et al., 2018), RACE-Middle, RACE-High (Lai et al., 2017), MultiRC"
  - [Predictive Data Selection: The Data That Predicts Is the Data That Teaches](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shum25a/shum25a.pdf)

### Associated with
- **SuperGLUE** (measurements)
  > “we use six NLU tasks from the SuperGLUE benchmark to evaluate the performance of the language model ... including ... MRC”
  - [MEPT: Mixture of Expert Prompt Tuning as a Manifold Mapper](https://aclanthology.org/2025.emnlp-main.823.pdf)
