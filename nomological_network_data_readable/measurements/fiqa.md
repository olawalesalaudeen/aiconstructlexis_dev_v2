# FiQA
**Type:** Measurement  
**Referenced in:** 6 papers  

## State of the Field

**What it is.** Across the surveyed work, FiQA is most commonly described as a BEIR retrieval dataset, often used as a single-hop retrieval benchmark. One paper states that its retrieval corpus consists of human-written responses to the search queries in the dataset. Some papers instead describe it as a financial question answering benchmark for downstream evaluation, and one paper refers to FiQA as a financial-domain sentiment analysis task.

**What it is claimed to measure.** Papers link FiQA to 2 behavioral indicators and no constructs. The prevailing usage is that it measures Financial question answering, while a smaller line of work uses it to measure Sentiment analysis, described as predicting positive, neutral, or negative sentiments in financial texts. Taken together, the measurement claims spread across these behavioral indicators rather than converging on a construct.

**Space of uses.** FiQA is linked to 1 other measurement instrument, BEIR, and papers frequently position it as part of the BEIR benchmark rather than a standalone protocol. Beyond that broad placement, papers use it to generate and evaluate adversarial passages in corpus-poisoning experiments, to evaluate methods alongside other BEIR datasets, and as a downstream evaluation benchmark; one paper reports using ROUGE-L for FiQA.

## Sources

**[Attention in Large Language Models Yields Efficient Zero-Shot Re-Rankers](https://proceedings.iclr.cc/paper_files/paper/2025/file/b5b1890a7c1a79fe9b32b0f442347089-Paper-Conference.pdf)**
> A BEIR dataset used as a single-hop retrieval benchmark where passages are human-written responses to search queries.

## Relationships

### → FiQA
- **Financial question answering** (behaviors tasks) — *measured_by*
  > FIQA for financial question answering (Section 4.3).
  - [Co-Eval: Augmenting LLM-based Evaluation with Machine Metrics](https://aclanthology.org/2025.emnlp-main.1307.pdf)

### Associated with
- **BEIR** (measurements)
  > “nine public datasets in the BEIR benchmark (Thakur et al., 2021), including ... FiQA (Maia et al., 2018)”
  - [Attention in Large Language Models Yields Efficient Zero-Shot Re-Rankers](https://proceedings.iclr.cc/paper_files/paper/2025/file/b5b1890a7c1a79fe9b32b0f442347089-Paper-Conference.pdf)
