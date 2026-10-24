# MultiNews
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** Multi-News  

## State of the Field

**What it is.** Across definitions, MultiNews is most commonly described as a dataset or benchmark for multi-document summarization. One description specifies that it consists of news articles and human-written summaries from newser.com, and one source further describes 56k article-summary pairs with summaries written by professional editors (GraphRouter: A Graph-based Router for LLM Selections). A smaller line of description places it within LongBench as a multi-document summarization dataset, while another simply frames it as a dataset for summarization tasks that require synthesizing multiple documents.

**What it is claimed to measure.** Papers use MultiNews to measure 1 behavioral indicator, Text summarization, and link it to no constructs. The recorded uses converge on summarization rather than spreading across multiple outcomes: papers describe it as a summarization task, use it in summarization evaluations, and report it as evaluating multi-document summarization. One paper adds that the task "requires synthesizing information from the entire context" (APE: Faster and Longer Context-Augmented Generation via Adaptive Parallel Encoding).

**Space of uses.** In the cited evaluations, MultiNews appears as one benchmark within broader summarization test suites. Papers pair it with datasets such as XSUM, SAMSum, GovReport, and WikiSum, and one paper also places it under LongBench; accordingly, the only linked instrument is LongBench, to which it is related. The excerpts position it as a recurring summarization benchmark rather than describing any special protocol or subset.

## Sources

**[GraphRouter: A Graph-based Router for LLM Selections](https://proceedings.iclr.cc/paper_files/paper/2025/file/41b6674c28a9b93ec8d22a53ca25bc3b-Paper-Conference.pdf) (as "Multi-News")**
> A benchmark dataset for multi-document summarization, consisting of news articles and human-written summaries from newser.com.

**[APE: Faster and Longer Context-Augmented Generation via Adaptive Parallel Encoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/ce186a37e63b37638ecd06dee6b9a355-Paper-Conference.pdf)**
> A dataset used for evaluating summarization tasks requiring synthesis of multiple documents.

## Relationships

### → MultiNews
- **Text summarization** (behaviors tasks) — *measured_by*
  > We investigate the drafts produced by this 1.5B blockwise parallel LM on ... ﬁve summarization tasks: XSUM [32], MultiNews [12], SAMSum [14], NewsRoom [15] and CNN/DailyMail [17]. (Section 4)
  - [Accelerating Blockwise Parallel Language Models with Draft Refinement](https://proceedings.neurips.cc/paper_files/paper/2024/file/3c9629e718d931e8d4d240378aa1d3bf-Paper-Conference.pdf)

### Associated with
- **LongBench** (measurements)
  > Following CacheBlend, we evaluate on four LongBench datasets (Bai et al., 2024): ...and MultiNews (multi-document summarization) (Section 5.1).
  - [EPIC: Efficient Position-Independent Caching for Serving Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hu25j/hu25j.pdf)
