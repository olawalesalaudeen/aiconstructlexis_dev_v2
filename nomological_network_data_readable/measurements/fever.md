# FEVER
**Type:** Measurement  
**Referenced in:** 30 papers  

## State of the Field

**What it is.** Across papers, the dominant treatment of FEVER is as a fact verification, or fact extraction and verification, benchmark built from claims that are checked against evidence from Wikipedia. The prevailing formulation is a three-way classification task, Supported, Refuted, and NotEnoughInfo, though one definition instead uses supported, refuted, and neutral, another frames it as a natural language inference benchmark, and some descriptions add that claims may require multiple evidence pieces; one paper also describes it as a large-scale resource with 185,000 annotated claims.

**What it is claimed to measure.** Papers use FEVER to measure one behavioral indicator, Fact checking, and they do not link it to any constructs. This use is concentrated rather than spread across many targets: relationship evidence repeatedly calls FEVER a fact-checking or fact verification task, and definitions say it assesses whether a model can determine the veracity of claims from evidence, while a smaller set of papers also describes it as testing world knowledge, factuality, or factual consistency.

**Space of uses.** Papers link FEVER to one other measurement instrument, BEIR, with one study listing FEVER among the datasets in that benchmark. Many papers use it as one task inside broader suites, including knowledge-intensive tasks, question-answering evaluations, the KILT subset, and RAG fine-tuning mixtures, though some use it across all experiments or for closed-book fact verification; in these settings it appears alongside HotpotQA, CREAK, CounterFact, Feverous, and MMLU, as well as several other tasks.

## Sources

**[BTR: Binary Token Representations for Efficient Retrieval Augmented Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c0f721d329c1a10546869c783e866fb7-Paper-Conference.pdf)**
> The Fact Extraction and VERification (FEVER) benchmark is a dataset for fact verification, consisting of claims that need to be classified as Supported, Refuted, or NotEnoughInfo based on evidence from Wikipedia.

## Relationships

### → FEVER
- **Fact checking** (behaviors tasks) — *measured_by*
  > We use the FEVER (Thorne et al., 2018) dataset for all our experiments and comparison against previous methods. (Section 4.1)
  - [Unsupervised Pretraining for Fact Verification by Language Model Distillation](https://proceedings.iclr.cc/paper_files/paper/2024/file/238c98450b1d9e8055f94d22f303bb57-Paper-Conference.pdf)

### Associated with
- **BEIR** (measurements)
  > “nine public datasets in the BEIR benchmark (Thakur et al., 2021), including ... FEVER (Thorne et al., 2018)”
  - [Attention in Large Language Models Yields Efficient Zero-Shot Re-Rankers](https://proceedings.iclr.cc/paper_files/paper/2025/file/b5b1890a7c1a79fe9b32b0f442347089-Paper-Conference.pdf)
