# SemEval 2010 Task 8
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** SemEval-2010 Task 8, SemEval  

## State of the Field

**What it is.** Most papers treat it as a standard or widely used relation extraction benchmark dataset. Definitions describe it as sentence-level and general-domain, and as evaluating semantic relation extraction between pairs of nominals; the prevailing description says it contains 19 relation types, though a smaller usage describes ten relation classes. Some definitions also present it as spanning diverse domains and as a benchmark used to evaluate few-shot learning and generalization.

**What it is claimed to measure.** Across the surveyed papers, claims converge on a single behavioral indicator: SemEval 2010 Task 8 is used to measure Relation extraction. Papers connect it to 1 behavioral indicator, Relation extraction, and to no constructs. The relationship language is consistent, with papers describing RE as being evaluated on this dataset or including it among standard RE benchmarks.

**Space of uses.** Papers usually use it alongside TACRED and its variants, including TACREV or TACRED-Revisit, and ReTACRED or Re-TACRED. They generally position it as one benchmark within a multi-dataset RE evaluation, for example as part of a set of widely used or standard benchmarks, while a smaller usage presents it as part of extensions to general-domain datasets. Definitions also frame it as a benchmark for evaluating approach or framework performance, and in a smaller usage the quality of generated training samples.

## Sources

**[Improving Data Annotation for Low-Resource Relation Extraction with Logical Rule-Augmented Collaborative Language Models](https://aclanthology.org/2025.naacl-long.70.pdf)**
> A benchmark dataset for evaluating semantic relation extraction between pairs of nominals, containing 19 distinct relation types.

**[Entangled Relations: Leveraging NLI and Meta-analysis to Enhance Biomedical Relation Extraction](https://aclanthology.org/2025.naacl-long.165.pdf) (as "SemEval-2010 Task 8")**
> A sentence-level, general-domain relation extraction dataset featuring ten distinct relation classes.

**[Generating Diverse Training Samples for Relation Extraction with Large Language Models](https://aclanthology.org/2025.acl-long.35.pdf) (as "SemEval")**
> Standard relation extraction dataset from SemEval 2010 Task 8, containing 19 relation types across diverse domains, used for evaluating few-shot learning and generalization.

## Relationships

### → SemEval 2010 Task 8
- **Relation extraction** (behaviors tasks) — *measured_by*
  > We evaluate BayesPrompt on four RE datasets, namely SemEval 2010 Task 8 (SemEval), TACRED (Zhang et al., 2017), TACREV (Alt et al., 2020), and ReTACRED (Stoica et al., 2021). (Section 6)
  - [BayesPrompt: Prompting Large-Scale Pre-Trained Language Models on Few-shot Inference via Debiased Domain Abstraction](https://proceedings.iclr.cc/paper_files/paper/2024/file/5fcfda9e2a28c62f1ba54bcfa09ebdbc-Paper-Conference.pdf)
