# MS MARCO
**Type:** Measurement  
**Referenced in:** 22 papers  
**Also known as:** MSMARCO, MSMarco, MARCO QA, MS MARCO QA, MS-Marco  

## State of the Field

**What it is.** Across papers, MS MARCO is most commonly treated as a large-scale retrieval and question answering benchmark built from queries or questions and passages. Definitions variously describe it as a question answering dataset, a machine reading comprehension dataset, a passage-ranking benchmark, or a collection used for reading comprehension and information retrieval; several descriptions mention real-user Bing queries, and one specifies that the public dev split has 101.09k examples, each with a simple question and 10 relevant passages. A smaller line of work narrows attention to particular parts or variants, such as only the question-and-answer pairs, the passage set, the MARCO QA subset, or the TREC Deep Learning subsets DL19 and DL20.

**What it is claimed to measure.** Papers link MS MARCO to 4 behavioral indicators and 2 constructs, and all recorded relationships treat it as a measuring instrument. Among the named behavioral indicators, the most common use is to measure Information retrieval, followed by Open-domain question answering, Question answering, and Ranking; the linked constructs are Retrieval effectiveness and Robustness. These claims are spread across several retrieval and QA targets rather than converging on a single named construct, including use of a subset of MS MARCO to evaluate robustness in non-Wikipedia scenarios.

**Space of uses.** No other measurement instrument is linked to it. Papers position MS MARCO both as training material and as an evaluation benchmark: some use only the question-and-answer pairs for retriever fine-tuning, some use it as a source of examples for answering real-user Bing queries from retrieved passages, and others use the passage set to annotate utility, train retrievers, evaluate rerankers, or test in-domain retrieval. It also appears in zero-shot and fine-tuned settings, and some papers explicitly report evaluation on MS MARCO Dev, DL19, and DL20 with MRR or nDCG@10.

## Sources

**[RA-DIT: Retrieval-Augmented Dual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/536d18fbb454f80221465f1a42c6f389-Paper-Conference.pdf)**
> A question answering dataset used for retriever fine-tuning, specifically the question-and-answer pairs.

**[PICASO: Permutation-Invariant Context Composition with State Space Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/0730b81dbc16cce7e85b519cb7fe5a8d-Paper-Conference.pdf) (as "MSMARCO")**
> The Microsoft Machine Reading Comprehension (MSMARCO) dataset, a large-scale collection of queries and passages used for evaluating reading comprehension and information retrieval tasks.

**[BadJudge: Backdoor Vulnerabilities of LLM-As-A-Judge](https://proceedings.iclr.cc/paper_files/paper/2025/file/2e48f562a2c8f64c7404a6c3a518af74-Paper-Conference.pdf) (as "MSMarco")**
> A passage-ranking benchmark used to evaluate reranker judges in a retrieval setting.

**[RAG-DDR: Optimizing Retrieval-Augmented Generation Using Differentiable Data Rewards](https://proceedings.iclr.cc/paper_files/paper/2025/file/1a87980b9853e84dfb295855b425c262-Paper-Conference.pdf) (as "MARCO QA")**
> The MS MARCO Question Answering (MARCO QA) dataset, a large-scale benchmark for reading comprehension and question answering.

**[Utility-Focused LLM Annotation for Retrieval and Retrieval-Augmented Generation](https://aclanthology.org/2025.emnlp-main.88.pdf) (as "MS MARCO QA")**
> A dataset containing ground-truth answers for queries in the MS MARCO retrieval set, used for evaluating in-domain RAG performance.

**[Time-Reversal Provides Unsupervised Feedback to LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/34aec5ab2f99a8f592e0cca4974013f2-Paper-Conference.pdf) (as "MS-Marco")**
> A large-scale machine reading comprehension dataset containing user queries and relevant text passages, used for evaluating document retrieval.

## Relationships

### → MS MARCO
- **Open-domain question answering** (behaviors tasks) — *measured_by*
  > The open-domain QA tasks consist of NQ (Kwiatkowski et al., 2019), MARCO QA (Bajaj et al., 2016) and TriviaQA (Joshi et al., 2017), which require models to retrieve factual knowledge to help LLMs answer the given question.
  - [RAG-DDR: Optimizing Retrieval-Augmented Generation Using Differentiable Data Rewards](https://proceedings.iclr.cc/paper_files/paper/2025/file/1a87980b9853e84dfb295855b425c262-Paper-Conference.pdf)
- **Information retrieval** (behaviors tasks) — *measured_by*
  > To evaluate the model’s robustness in non-Wikipedia scenarios where high-quality text and titles are not available, we conduct experiments on a subset of MS MARCO [3]
  - [Self-Retrieval: End-to-End Information Retrieval with One Large Language Model](https://proceedings.neurips.cc/paper_files/paper/2024/file/741ad162ab0f3da6f9aad60e9e34f5f1-Paper-Conference.pdf)
- **Robustness** (constructs) — *measured_by*
  > “To evaluate the model’s robustness in non-Wikipedia scenarios where high-quality text and titles are not available, we conduct experiments on a subset of MS MARCO”
  - [Self-Retrieval: End-to-End Information Retrieval with One Large Language Model](https://proceedings.neurips.cc/paper_files/paper/2024/file/741ad162ab0f3da6f9aad60e9e34f5f1-Paper-Conference.pdf)
- **Ranking** (behaviors tasks) — *measured_by*
  > Re-ranking retrieved passages based on their relevance to the query is an important application of LCLMs (Sun et al., 2023). ... We use the MS MARCO dataset (Bajaj et al., 2018)
  - [HELMET: How to Evaluate Long-context Models Effectively and Thoroughly](https://proceedings.iclr.cc/paper_files/paper/2025/file/f5332c8273d02729730a9c24dec2135e-Paper-Conference.pdf)
- **Retrieval effectiveness** (constructs) — *measured_by*
  > We evaluate retrieval effectiveness using two retrieval benchmarks: MS MARCO (Bajaj et al., 2016) and BEIR (Thakur et al., 2021).
  - [ExpandR: Teaching Dense Retrievers Beyond Queries with LLM Guidance](https://aclanthology.org/2025.emnlp-main.963.pdf)
