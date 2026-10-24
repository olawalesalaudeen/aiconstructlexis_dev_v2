# MetaICL
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Across the surveyed papers, MetaICL is most commonly described as a benchmark dataset or evaluation framework for in-context learning. Definitions repeatedly describe it as covering 142 NLP tasks, with papers variously emphasizing meta-training and meta-testing partitions, seven partitions, or task types such as text classification, question answering, natural language inference, and paraphrase detection. A smaller line of description focuses on a high-to-low resources setting with 61 training tasks and 26 unseen test tasks, where evaluation uses multiple-choice accuracy.

**What it is claimed to measure.** Across the reported relationships, papers link MetaICL to one construct, In-context learning, and to no behavioral indicators. The claims converge on that single construct rather than spreading across many: papers describe MetaICL as "designed for in-context learning scenarios," use it for "short finetuning and evaluation," and report results as a "MetaICL in-context learning evaluation."

**Space of uses.** Papers use MetaICL as an evaluation benchmark to validate methods, and some follow its short-finetuning-and-evaluation setup. One paper reports average accuracy across 26 tasks, another evaluates a high-to-low resources setting with 61 training tasks and 26 unseen test tasks using multiple-choice accuracy, and one paper uses MetaICL alongside LaMP and DailyDialog in the same evaluation.

## Sources

**[Compressed Context Memory for Online Language Model Interaction](https://proceedings.iclr.cc/paper_files/paper/2024/file/97dc07f1253ab33ee514f395a82fa7cc-Paper-Conference.pdf)**
> A benchmark dataset designed for evaluating in-context learning, composed of 142 unique NLP tasks divided into distinct meta-training and meta-testing partitions.

## Relationships

### → MetaICL
- **In-context learning** (constructs) — *measured_by*
  > In the section, to validate our methodology, we employ the MetaICL dataset introduced by Min et al. (2022a), designed for in-context learning scenarios. (Section 4.1)
  - [MEND: Meta Demonstration Distillation for Efficient and Effective In-Context Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/7ce1cbededb4b0d6202847ac1b484ee8-Paper-Conference.pdf)
