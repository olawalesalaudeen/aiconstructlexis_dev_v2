# BookMIA
**Type:** Measurement  
**Referenced in:** 5 papers  

## State of the Field

**What it is.** Across these papers, the prevailing description is of BookMIA as a membership inference benchmark built from book text, and one definition also calls it a prior temporal detection dataset. Papers describe its contents somewhat differently: some define it as text excerpts from books published in 2023, after the knowledge cutoff of the studied models, paired with passages from popular books as memorized examples, while another describes paragraphs extracted from copyrighted books. A smaller usage keeps only the items labeled "unseen," defined as paragraphs from books published after the release of the models.

**What it is claimed to measure.** Papers link BookMIA to 1 construct and 2 behavioral indicators. The construct-level use is Memorization, where it is reported as evaluating unseen book excerpts against potentially memorized popular-book passages; at the behavioral-indicator level, papers use it to measure Pre-training data detection and, in a smaller use, Creative writing, where one study uses book snippets from BookMIA as human texts. Papers also describe it as measuring Membership inference attack, so the reported measurement claims span memorization and pretraining-data-related evaluation rather than centering on only one target.

**Space of uses.** Papers usually position BookMIA as a benchmark dataset within broader evaluations. One paper uses it alongside WikiMIA, ArXivTection, BookTection, and Pile as one of the common benchmark datasets for verifying detection methods, while another groups it with WikiMIA and BookTection as a previous membership inference benchmark. Papers also link it to 1 other measurement instrument, Membership inference attack, and some uses restrict the benchmark to its "unseen" items.

**Concerns raised.** The clearest stated concern is temporal fit to the model being tested: one paper says that previous membership inference benchmarks such as BookMIA "cannot be reliably used for Llama-3 because the model was trained more recently" (Infilling Score: A Pretraining Data Detection Algorithm for Large Language Models). In related uses, authors emphasize temporally defined unseen examples, such as books published after the model knowledge cutoff or after model release.

## Sources

**[Infilling Score: A Pretraining Data Detection Algorithm for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5709163243753c9c9ab7f4b4e5a8766d-Paper-Conference.pdf)**
> A membership inference benchmark for book excerpts used as a prior temporal detection dataset.

## Relationships

### → BookMIA
- **Pre-training data detection** (behaviors tasks) — *measured_by*
  > To verify the effectiveness of detection methods, we employ four common benchmark datasets for evaluations, including WikiMIA (Shi et al., 2024), ArXivTection (Duarte et al., 2024), BookTection (Duarte et al., 2024) BookMIA (Shi et al., 2024) and Pile (Maini et al., 2024). (Section 4.1)
  - [Fine-tuning can Help Detect Pretraining Data from Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/98cda3e39e4ca2da449092a99c485e1a-Paper-Conference.pdf)
- **Memorization** (constructs) — *measured_by*
  > We use the BookMIA dataset (Shi et al., 2023), which consists of text excerpts from books published in 2023 (after the knowledge cutoff of the models we study) as examples of unseen text, and passages from popular books as memorized examples (Chang et al., 2023). (Section 4.1)
  - [Information-Guided Identification of Training Data Imprint in (Proprietary) Large Language Models](https://aclanthology.org/2025.naacl-long.99.pdf)

### Associated with
- **Membership inference attack** (measurements)
  > “Previous membership inference benchmarks such as WikiMIA, BookMIA (Shi et al., 2024), and BookTection (Duarte et al., 2024)”
  - [Infilling Score: A Pretraining Data Detection Algorithm for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5709163243753c9c9ab7f4b4e5a8766d-Paper-Conference.pdf)
