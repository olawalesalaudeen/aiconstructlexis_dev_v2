# QMSum
**Type:** Measurement  
**Referenced in:** 18 papers  
**Also known as:** SUM-QMSUM  

## State of the Field

**What it is.** Most commonly, papers describe QMSum as a query-based multi-domain meeting summarization dataset or benchmark. Definitions usually say it contains meeting transcripts together with summaries, questions, or query-summary pairs focused on specific questions about the dialogue, often across domains such as academic and industrial product meetings; some also describe realistic multi-party transcripts, and another description says it aggregates ICSI, AMI, and Parliament meetings. A smaller variation in naming presents it as SUM-QMSUM, a summarization benchmark requiring summaries of meeting transcripts, and some uses restrict evaluation to its "general queries" for global summarization.

**What it is claimed to measure.** Papers use QMSum to measure 4 constructs and 2 behavioral indicators. The prevailing behavioral framing is text summarization, with a smaller line of work using it for dialogue summarization; papers also report it as measuring generalization, length generalization, long-context understanding, and text generation quality. Taken together, its measurement claims are spread across several targets rather than concentrated on a single construct.

**Space of uses.** The prevailing usage is as a benchmark or evaluation task for long-context and summarization settings. Among linked instruments, papers relate it only to SCROLLS, and several definitions also place it in the SCROLL benchmark; papers report it alongside GovReport, NarrativeQA, and Qasper, and some evaluations report ROUGE-1 or RougeLSum and F1 on it. Some studies use it more selectively, for example evaluating only its "general queries" for global summarization, using it as a source of examples, testing a summary component on it, or drawing on it as source data for constructing CoPriva.

## Sources

**[In-Context Pretraining: Language Modeling Beyond Document Boundaries](https://proceedings.iclr.cc/paper_files/paper/2024/file/a1fe2365abdb691332537990a6385909-Paper-Conference.pdf)**
> A query-based multi-domain meeting summarization dataset from the SCROLL benchmark.

**[LongLeader: A Comprehensive Leaderboard for Large Language Models in Long-context Scenarios](https://aclanthology.org/2025.naacl-long.439.pdf) (as "SUM-QMSUM")**
> Summarization benchmark requiring models to generate summaries of meeting transcripts.

## Relationships

### → QMSum
- **Text summarization** (behaviors tasks) — *measured_by*
  > Summarization. We pick two summarization datasets from SCROLLS. QMSum [93] is a query-based summarization dataset, formed by meeting transcripts from multiple domains
  - [Chain of Agents: Large Language Models Collaborating on Long-Context Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/ee71a4b14ec26710b39ee6be113d7750-Paper-Conference.pdf)
- **Long-context understanding** (constructs) — *measured_by*
  > Long-context ability evaluation. Following Xiong et al. [94], we evaluated the models on long-sequence tasks, including ... QMSum [105]. (Table 4, Section 4.2)
  - [Gated Slot Attention for Efficient Linear-Time Sequence Modeling](https://proceedings.neurips.cc/paper_files/paper/2024/file/d3f39e51f5f634fb16cc3e658f8512b9-Paper-Conference.pdf)
- **Length generalization** (constructs) — *measured_by*
  > Figure 2: Length extrapolation on six long benchmarks.
  - [Gated Delta Networks: Improving Mamba2 with Delta Rule](https://proceedings.iclr.cc/paper_files/paper/2025/file/4904fad153f6434a7bcf04465d4be2cc-Paper-Conference.pdf)
- **Dialogue summarization** (behaviors tasks) — *measured_by*
  > dialogue summarization: samsum (Gliwa et al., 2019) and qmsum (Zhong et al., 2021) from LongBench (Bai et al., 2024)
  - [ResQ: Mixed-Precision Quantization of Large Language Models with Low-Rank Residuals](https://raw.githubusercontent.com/mlresearch/v267/main/assets/saxena25b/saxena25b.pdf)
- **Query-focused summarization** (behaviors tasks) — *measured_by*
  > QMSum (Zhong et al., 2021) is a human-annotated benchmark for a query-based multi-domain meeting summarization task, which consists of 1,808 query-summary pairs over 232 meetings in multiple domains. (Section 5.1)
  - [Accelerating Inference of Retrieval-Augmented Generation via Sparse Context Selection](https://proceedings.iclr.cc/paper_files/paper/2025/file/411fa9d368b5485be4c6bb62615b365e-Paper-Conference.pdf)

### Associated with
- **SCROLLS** (measurements)
  > ...we evaluate MEGALODON on long-context open-book question answering (QA) tasks in the Scrolls dataset (Shaham et al., 2022), including NarrativeQA (Koˇcisk´y et al., 2018), Qasper (Dasigi et al., 2021) and QMSum (Zhong et al., 2021). (Section 4.3).
  - [Megalodon: Efficient LLM Pretraining and Inference with Unlimited Context Length](https://proceedings.neurips.cc/paper_files/paper/2024/file/840abfadd04c967feaa2a49aba94a32d-Paper-Conference.pdf)
