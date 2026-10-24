# WikiMIA
**Type:** Measurement  
**Referenced in:** 9 papers  
**Also known as:** WIKIMIA  

## State of the Field

**What it is.** Across papers, the prevailing description is a dataset or benchmark for evaluating training or pretraining data detection on large language models. Definitions commonly frame it as temporal or dynamic: it uses Wikipedia texts or excerpts, and labels items as seen versus unseen, or member versus non-member, by comparing publication date with a model's training cutoff or release timeline. Some papers also describe it as a temporal MIA dataset or a benchmark for membership inference attacks, but the shared setup is a date-based split of Wikipedia content.

**What it is claimed to measure.** Papers link WikiMIA to one behavioral indicator and no constructs. The dominant use is to measure pre-training data detection: several papers describe it as a common benchmark for evaluating detection methods, and one paper treats WikiMIA and MIMIR as the only two benchmarks it considers for this task. A smaller line of work also links it to membership inference attack through measured_by relations, using earlier Wikipedia text as member data and more recent text as non-member data.

**Space of uses.** Papers use WikiMIA in both focused and multi-benchmark evaluations. One line of work pairs it with MIMIR for pre-training data detection, while broader evaluation suites place it alongside ArXivTection, BookTection, BookMIA, and Pile.

**Concerns raised.** One paper raises a concern about the date-based split, arguing that separating member and non-member groups by publication date can introduce artificial distribution shifts. It notes that a blind baseline, predicting membership solely from text content without model access, already achieves 98.7% AUC.

## Sources

**[TDDBench: A Benchmark for Training data detection](https://proceedings.iclr.cc/paper_files/paper/2025/file/4db8a681ae1e58376dc6227978829063-Paper-Conference.pdf) (as "WIKIMIA")**
> A dataset specifically designed to evaluate training data detection algorithms on large language models.

**[Infilling Score: A Pretraining Data Detection Algorithm for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5709163243753c9c9ab7f4b4e5a8766d-Paper-Conference.pdf)**
> A temporal benchmark dataset for evaluating pretraining data detection methods, containing excerpts from Wikipedia articles classified as "seen" or "unseen" based on their publication date relative to a model's training cutoff.

## Relationships

### → WikiMIA
- **Pre-training data detection** (behaviors tasks) — *measured_by*
  > To facilitate this study, we introduce a dynamic benchmark WIKIMIA that uses data created before and after model training to support gold truth detection. (Abstract)
  - [Detecting Pretraining Data from Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/e32ad85fa27be4a9868d55703f01323e-Paper-Conference.pdf)

### Associated with
- **Membership inference attack** (measurements)
  > MIA on LLM pre-training texts. We use the WikiMIA benchmark [52], which leverages the Wikipedia timestamp to separate the early Wiki data as the member data, and recent Wiki data as the non-member data (Section 6.3).
  - [Membership Inference Attacks against Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b2c892312af07f8a77afbeed188391f4-Paper-Conference.pdf)
