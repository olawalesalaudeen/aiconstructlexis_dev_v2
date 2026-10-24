# SentEval
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Papers treat SentEval as a standard transfer learning evaluation suite for sentence embeddings. The clearest description presents it through transfer tasks for sentiment classification, subjectivity detection, and question classification, with MR and SST-2 given as examples. A separate paper frames it as the evaluation tool for seven STS subsets, including STS 2012-2016 and STS-Benchmark.

**What it is claimed to measure.** Across the recorded links, papers do not connect SentEval to any constructs or behavioral indicators. Instead, one paper reports that SentEval measures STS tasks, using Spearman's correlation for model performance on semantic textual similarity. Its only linked measurement target is STS tasks.

**Space of uses.** Papers use SentEval as an evaluation tool for sentence embeddings. One usage relies on the standard transfer tasks provided by SentEval, while another adopts it specifically for STS evaluation with Spearman's correlation. The only linked instrument is STS tasks.

## Sources

**[Token Prepending: A Training-Free Approach for Eliciting Better Sentence Embeddings from LLMs](https://aclanthology.org/2025.acl-long.159.pdf)**
> Standard transfer learning evaluation suite for sentence embeddings, including tasks like sentiment classification (MR, SST-2), subjectivity detection (SUBJ), and question classification (TREC).

## Relationships

### Associated with
- **STS tasks** (measurements)
  > To validate our method for sentence embeddings, we evaluated the model’s performance on semantic textual similarity (STS) tasks, we use the standard evaluation method, measuring model performance with Spearman’s correlation, and we adopt SentEval (Conneau and Kiela, 2018) as the evaluation tool, which contains seven STS subsets: STS 2012-2016, the STS-Benchmark and the SICK Relatedness. (Section 4.1)
  - [Enhancing Unsupervised Sentence Embeddings via Knowledge-Driven Data Augmentation and Gaussian-Decayed Contrastive Learning](https://aclanthology.org/2025.acl-long.244.pdf)
