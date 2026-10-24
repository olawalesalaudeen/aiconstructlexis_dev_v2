# Ranking
**Type:** Behavior  
**Referenced in:** 48 papers  
**Also known as:** Image reranking, Code reranking, Website reranking, Document reranking, Zero-shot reranking, Zero-shot re-ranking, Passage re-ranking, Document re-ranking, Listwise reranking, Passage reranking, Re-ranking, Information reranking, Candidate re-ranking, Candidate refinement, Reranking, Text ranking, Document ranking, Item ranking  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is reranking in retrieval pipelines: re-evaluating an initial list of retrieved documents, passages, images, code snippets, or other candidates and reordering them by relevance to a query so the most relevant item appears first or the top-ranked set is more precise. Several definitions make the scoring step explicit, describing fine-grained relevance scores, satisfaction scores, or binary relevance judgments before reordering, and one long-context evaluation instructs the model to return the top-10 document IDs ranked by relevance. A smaller line of work uses ranking more broadly for ordering candidate outputs from best to worst, arranging items under instructions, selecting the best generation from several candidates, or ordering regions on maps by legend value.

**Variants.** Most variants stay close to document and passage reranking, which are the most recurrent labels and are often framed as a second stage after initial retrieval. Papers also study zero-shot reranking, where prompting rather than task-specific fine-tuning is used, and listwise reranking, where a full ranking is produced by considering passages jointly rather than pairwise or pointwise. Beyond text documents and passages, the same behavior is instantiated for images, code, websites, entity candidates, shopping items, map regions, and candidate refinement in schema matching.

**Space of elicitation and scores.** Papers operationalize ranking with 5 linked instruments: BEIR, CodeSearchNet, HELMET, MS MARCO, and MTEB. These instruments are used as benchmarks or datasets for retrieval and reranking tasks: HELMET includes passage re-ranking among its task types, MTEB includes reranking alongside retrieval and other text tasks, BEIR is used for re-ranker evaluation, MS MARCO for passage re-ranking, and CodeSearchNet for text-to-code retrieval and reranking.

**What it is taken as evidence of.** Construct links are sparse. Only 1 construct is linked, Generative ability, and papers describe it as related to ranking rather than as something ranking directly measures or correlates with; one paper says reranking through a model's generative capabilities lets it improve on embedding performance. Papers connect ranking more often to other behaviors, 5 linked behavioral indicators, reporting it as related to question answering, information extraction, and schema matching, and claiming causal relationships from ranking to cross-modal retrieval and to language understanding task performance.

## Sources

**[Shopping MMLU: A Massive Multi-Task Online Shopping Benchmark for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2049d75dd13db049897562bcf7d59da8-Paper-Datasets_and_Benchmarks_Track.pdf)**
> Ranking a list of items according to their relevance to a query, one of the five task types included in Shopping MMLU.

**[STaRK: Benchmarking LLM Retrieval on Textual and Relational Knowledge Bases](https://proceedings.neurips.cc/paper_files/paper/2024/file/e607b1419e9ae7cd5cb5b5bb60c2ad5c-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Reranking")**
> The process of re-evaluating and re-ordering an initial set of retrieved candidates to improve the precision of the top-ranked results.

**[INQUIRE: A Natural World Text-to-Image Retrieval Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/e4ad9c75f0d60ed75700f020adb3f705-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Image reranking")**
> The process of re-ordering an initial set of retrieved images using a more sophisticated model to improve the final ranking's relevance to a query.

**[CoRNStack: High-Quality Contrastive Data for Better Code Retrieval and Reranking](https://proceedings.iclr.cc/paper_files/paper/2025/file/285b0e63256699c04dbf2c8d4163fba4-Paper-Conference.pdf) (as "Code reranking")**
> The process of re-ordering an initial list of retrieved code snippets to improve the relevance of the final ranking.

**[MMSearch: Unveiling the Potential of Large Models as Multi-modal Search Engines](https://proceedings.iclr.cc/paper_files/paper/2025/file/04e6525463afaa460b5a2e6868b18f18-Paper-Conference.pdf) (as "Website reranking")**
> Selecting the most informative website from retrieved search results for downstream answer extraction.

**[BadJudge: Backdoor Vulnerabilities of LLM-As-A-Judge](https://proceedings.iclr.cc/paper_files/paper/2025/file/2e48f562a2c8f64c7404a6c3a518af74-Paper-Conference.pdf) (as "Document reranking")**
> Ranking retrieved documents so that the most relevant document is placed first.

**[MM-EMBED: UNIVERSAL MULTIMODAL RETRIEVAL WITH MULTIMODAL LLMS](https://proceedings.iclr.cc/paper_files/paper/2025/file/6d5d6afa9957cfc9142ba60e78a467e9-Paper-Conference.pdf) (as "Zero-shot reranking")**
> The observable behavior of performing a reranking task using a model that has not been specifically fine-tuned for that task, relying instead on its pre-trained capabilities activated through prompting.

**[Attention in Large Language Models Yields Efficient Zero-Shot Re-Rankers](https://proceedings.iclr.cc/paper_files/paper/2025/file/b5b1890a7c1a79fe9b32b0f442347089-Paper-Conference.pdf) (as "Zero-shot re-ranking")**
> Ranking a set of retrieved documents by their relevance to a query without task-specific fine-tuning.

**[HELMET: How to Evaluate Long-context Models Effectively and Thoroughly](https://proceedings.iclr.cc/paper_files/paper/2025/file/f5332c8273d02729730a9c24dec2135e-Paper-Conference.pdf) (as "Passage re-ranking")**
> Ranking a set of retrieved passages by relevance to a query and outputting an ordered list of document IDs.

**[REALM: Recursive Relevance Modeling for LLM-based Document Re-Ranking](https://aclanthology.org/2025.emnlp-main.1218.pdf) (as "Document re-ranking")**
> The process of reordering a list of candidate documents based on their estimated relevance to a query, typically following an initial retrieval stage.

**[REARANK: Reasoning Re-ranking Agent via Reinforcement Learning](https://aclanthology.org/2025.emnlp-main.125.pdf) (as "Listwise reranking")**
> The model reorders a list of passages by considering their relative positions and relevance simultaneously, producing a full ranking rather than pairwise or pointwise scores.

**[Multi-view-guided Passage Reranking with Large Language Models](https://aclanthology.org/2025.emnlp-main.1459.pdf) (as "Passage reranking")**
> The task of assigning fine-grained relevance scores to a list of candidate passages for a given query to produce a re-ordered, more relevant list.

**[Chat-Driven Text Generation and Interaction for Person Retrieval](https://aclanthology.org/2025.emnlp-main.266.pdf) (as "Re-ranking")**
> The process of re-ordering an initial list of retrieved candidates based on additional information or a refined query to improve the final ranking.

**[LimRank: Less is More for Reasoning-Intensive Information Reranking](https://aclanthology.org/2025.emnlp-main.1041.pdf) (as "Information reranking")**
> Reordering a list of retrieved documents based on their relevance to a query, particularly in scenarios requiring reasoning beyond surface-level matching.

**[MedLinkDE -- MedDRA Entity Linking for German with Guided Chain of Thought Reasoning](https://aclanthology.org/2025.emnlp-main.1609.pdf) (as "Candidate re-ranking")**
> The process of reordering an initial list of candidate entities to place the most accurate or relevant entity at the top.

**[Bootstrapping Self-Improvement of Language Model Programs for Zero-Shot Schema Matching](https://raw.githubusercontent.com/mlresearch/v267/main/assets/seedat25a/seedat25a.pdf) (as "Candidate refinement")**
> The process of filtering and prioritizing a list of potential attribute matches to create a smaller, more relevant set for final evaluation.

**[The Ranking Blind Spot: Decision Hijacking in LLM-based Text Ranking](https://aclanthology.org/2025.emnlp-main.1116.pdf) (as "Text ranking")**
> The observable behavior of ordering documents or passages by relevance to a given query, as performed by LLMs in information retrieval settings.

**[Multi-Conditional Ranking with Large Language Models](https://aclanthology.org/2025.naacl-long.146.pdf) (as "Document ranking")**
> The task of ordering a large collection of documents in a monotonic order of relevance based on a single query.

**[Multi-Conditional Ranking with Large Language Models](https://aclanthology.org/2025.naacl-long.146.pdf) (as "Item ranking")**
> The observable action of arranging a given set of items into a specific order based on one or more instructions.

## Relationships

### Ranking →
- **Cross-modal retrieval** (behaviors tasks) — *causes*
  > We find that MLLMs can be used as zero-shot rerankers to further boost retrieval accuracy in challenging tasks that require the understanding of multimodal queries, such as ... composed image retrieval. (Section 6)
  - [MM-EMBED: UNIVERSAL MULTIMODAL RETRIEVAL WITH MULTIMODAL LLMS](https://proceedings.iclr.cc/paper_files/paper/2025/file/6d5d6afa9957cfc9142ba60e78a467e9-Paper-Conference.pdf)
- **MTEB** (measurements) — *measured_by*
  > It includes data for various tasks including Retrieval, Reranking, Clustering, Classification, and STS. (Section 4.1)
  - [Making Text Embedders Few-Shot Learners](https://proceedings.iclr.cc/paper_files/paper/2025/file/5eba8556ce2d1afff57591464d48fbc3-Paper-Conference.pdf)
- **CodeSearchNet** (measurements) — *measured_by*
  > For evaluation, we employ the CodeSearchNet and AdvTest text-to-code retrieval benchmarks... the top 100 results from our code retriever are passed to the reranker, with evaluation conducted using MRR@100.
  - [CoRNStack: High-Quality Contrastive Data for Better Code Retrieval and Reranking](https://proceedings.iclr.cc/paper_files/paper/2025/file/285b0e63256699c04dbf2c8d4163fba4-Paper-Conference.pdf)
- **MS MARCO** (measurements) — *measured_by*
  > Re-ranking retrieved passages based on their relevance to the query is an important application of LCLMs (Sun et al., 2023). ... We use the MS MARCO dataset (Bajaj et al., 2018)
  - [HELMET: How to Evaluate Long-context Models Effectively and Thoroughly](https://proceedings.iclr.cc/paper_files/paper/2025/file/f5332c8273d02729730a9c24dec2135e-Paper-Conference.pdf)
- **Retrieval-augmented generation** (behaviors tasks) — *correlates*
  > Naturally, RAG and passage re-ranking moderately correlate due to the shared retrieval component
  - [HELMET: How to Evaluate Long-context Models Effectively and Thoroughly](https://proceedings.iclr.cc/paper_files/paper/2025/file/f5332c8273d02729730a9c24dec2135e-Paper-Conference.pdf)
- **HELMET** (measurements) — *measured_by*
  > The evaluation spans five task types from the HELMET benchmark: synthetic recall, retrieval-augmented generation (RAG), many-shot in-context learning (ICL), passage re-ranking, and long-document QA, covering a total of 17 sub-tasks. (Section 4.1. Evaluation)
  - [NExtLong: Toward Effective Long-Context Training without Long Documents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gao25n/gao25n.pdf)
- **BEIR** (measurements) — *measured_by*
  > We further evaluate QRRETRIEVER as a re-ranker on the standard BEIR benchmark (Thakur et al., 2021). (Section 1)
  - [Query-Focused Retrieval Heads Improve Long-Context Reasoning and Re-ranking](https://aclanthology.org/2025.emnlp-main.1214.pdf)

### Associated with
- **Generative ability** (constructs)
  > We ﬁnd that reranking via the generative capabilities of GRITLM 7B allows it to improve on its embedding performance on most retrieval datasets. (Section 4)
  - [Generative Representational Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/70cf215430492f7d34830a24e744b3f1-Paper-Conference.pdf)
- **Question answering** (behaviors tasks)
  > To leverage the instruction following abilities in modern LLMs, we formulate the re-ranking task into either question answering (QA) or information extraction (IE) tasks, which are more commonly seen by LLMs. (Section 3.1)
  - [Attention in Large Language Models Yields Efficient Zero-Shot Re-Rankers](https://proceedings.iclr.cc/paper_files/paper/2025/file/b5b1890a7c1a79fe9b32b0f442347089-Paper-Conference.pdf)
- **Information extraction** (behaviors tasks)
  > To leverage the instruction following abilities in modern LLMs, we formulate the re-ranking task into either question answering (QA) or information extraction (IE) tasks, which are more commonly seen by LLMs. (Section 3.1)
  - [Attention in Large Language Models Yields Efficient Zero-Shot Re-Rankers](https://proceedings.iclr.cc/paper_files/paper/2025/file/b5b1890a7c1a79fe9b32b0f442347089-Paper-Conference.pdf)
- **Natural language understanding** (constructs)
  > Passage reranking aims to assign fine-grained relevance scores to candidate passages – typically retrieved by a first-stage retriever (Robertson et al., 1994; Karpukhin et al., 2020) – by harnessing the language understanding capabilities of large language models (LLMs) (Section 1).
  - [Multi-view-guided Passage Reranking with Large Language Models](https://aclanthology.org/2025.emnlp-main.1459.pdf)
