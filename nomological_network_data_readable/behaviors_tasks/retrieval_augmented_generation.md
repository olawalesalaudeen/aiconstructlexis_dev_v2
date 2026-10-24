# Retrieval-augmented generation
**Type:** Behavior  
**Referenced in:** 37 papers  
**Also known as:** RAG  

## State of the Field

Retrieval-augmented generation (RAG) is predominantly described as a two-step behavior where a model first retrieves relevant information from an external knowledge source to augment its context, and then generates a response based on that augmented context. A common specialization of this behavior is retrieval-augmented question answering, with one paper equating open-domain question answering with RAG applications. While most definitions are general, a few papers frame RAG for specific domains, such as retrieving code examples for code generation. A distinct line of work emphasizes the verifiability of the output, defining related behaviors like "grounded question answering" and "source-supported response generation," which require the generated text to be "systematically entailed by" or "explicitly backed by" the provided documents. This focus on attribution is further operationalized through tasks like "sentence-level" and "chunk-level" citation generation. The behavior, particularly its grounded variant, is measured using benchmarks such as ARC and MedQA, where evaluation centers on a "Grounding Rate" of test hypotheses. The external knowledge source itself is variously described as a "non-parametric datastore," a "knowledge corpus," or knowledge chunks modeled as a graph. The emphasis on verifiability also connects the behavior to textual entailment.

## Sources

**[BioBridge: Bridging Biomedical Foundation Models via Knowledge Graphs](https://proceedings.iclr.cc/paper_files/paper/2024/file/4a5a9f5c15632e9f52c9c1ba4134f13c-Paper-Conference.pdf)**
> A generation process where a model first retrieves relevant information from an external knowledge source to augment its context before generating a response.

**[SolEval: Benchmarking Large Language Models for Repository-level Solidity Smart Contract Generation](https://aclanthology.org/2025.emnlp-main.218.pdf) (as "RAG")**
> Retrieval-Augmented Generation, a method that retrieves relevant code examples from a database to enhance prompt context for code generation tasks.

## Relationships

### Retrieval-augmented generation →
- **Spec-Bench** (measurements) — *measured_by*
  > The benchmark includes various generation subtasks including... retrieval-augmented generation
  - [Block Verification Accelerates Speculative Decoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/3e710b42b1a9ed898f607ec0f4fcc971-Paper-Conference.pdf)
- **Natural Questions** (measurements) — *measured_by*
  > We benchmark the caching variants on Natural Questions (Kwiatkowski et al., 2019) using 2,681,468 documents from BEIR NQ (Thakur et al., 2021) as our index. (Section 5, Setup)
  - [Generative Representational Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/70cf215430492f7d34830a24e744b3f1-Paper-Conference.pdf)
- **HotpotQA** (measurements) — *measured_by*
  > We use open-domain question answering (ODQA)...as a representation of retrieval-augmented generation (RAG) applications. We utilize ... HotpotQA (Yang et al., 2018)...
  - [HELMET: How to Evaluate Long-context Models Effectively and Thoroughly](https://proceedings.iclr.cc/paper_files/paper/2025/file/f5332c8273d02729730a9c24dec2135e-Paper-Conference.pdf)
- **HELMET** (measurements) — *measured_by*
  > The evaluation spans five task types from the HELMET benchmark: synthetic recall, retrieval-augmented generation (RAG), many-shot in-context learning (ICL), passage re-ranking, and long-document QA, covering a total of 17 sub-tasks. (Section 4.1. Evaluation)
  - [NExtLong: Toward Effective Long-Context Training without Long Documents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gao25n/gao25n.pdf)
- **Information extraction** (behaviors tasks) — *causes*
  > DRAG incorporates extensive retrieved documents within the demonstrations, enabling long-context LLMs to learn to extract relevant information and answer questions using a rich input context. (Section 3.2)
  - [Inference Scaling for Long-Context Retrieval Augmented Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b57471758783450408f5c9b70257d15b-Paper-Conference.pdf)
- **Radiology report generation** (behaviors tasks) — *causes*
  > “we introduce a fact-aware multimodal retrieval-augmented pipeline in generating accurate radiology reports (FactMM-RAG).”
  - [Fact-Aware Multimodal Retrieval Augmentation for Accurate Medical Radiology Report Generation](https://aclanthology.org/2025.naacl-long.28.pdf)
- **Factuality** (constructs) — *causes*
  > Augmenting Large Language Models (LLMs) with retrieved external knowledge has proven effective in improving the factual accuracy of generated responses.
  - [Entropy-Based Decoding for Retrieval-Augmented Large Language Models](https://aclanthology.org/2025.naacl-long.236.pdf)
- **LongBench v2** (measurements) — *measured_by*
  > We utilize LongBench v2 (Bai et al., 2024), a benchmark designed for challenging long-context question-answering (in Appendix A.5).
  - [Graph World Model](https://raw.githubusercontent.com/mlresearch/v267/main/assets/feng25p/feng25p.pdf)
- **DPR** (measurements) — *measured_by*
  > We evaluated our multi-model speculative system in SpecBench(Xia et al., 2024), across multiple tasks including... retrieval-augmented generation, employing the... DPR (Karpukhin et al., 2020).
  - [polybasic Speculative Decoding Through a Theoretical Perspective](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25az/wang25az.pdf)
- **TriviaQA** (measurements) — *measured_by*
  > In addition, we make TriviaQA (Joshi et al., 2017) dataset for additional RAG task... (Section 4.1.2).
  - [Faster In-Context Learning for LLMs via N-Gram Trie Speculative Decoding](https://aclanthology.org/2025.emnlp-main.911.pdf)
- **GPQA** (measurements) — *measured_by*
  > To assess LIMRANK’s practical utility, we further deploy and evaluate it in two real-world-inspired tasks: ... (2) Retrieval-Augmented Generation (RAG) on the GPQA benchmark (Rein et al., 2024). (Section 1)
  - [LimRank: Less is More for Reasoning-Intensive Information Reranking](https://aclanthology.org/2025.emnlp-main.1041.pdf)

### → Retrieval-augmented generation
- **Ranking** (behaviors tasks) — *correlates*
  > Naturally, RAG and passage re-ranking moderately correlate due to the shared retrieval component
  - [HELMET: How to Evaluate Long-context Models Effectively and Thoroughly](https://proceedings.iclr.cc/paper_files/paper/2025/file/f5332c8273d02729730a9c24dec2135e-Paper-Conference.pdf)
- **Factuality** (constructs) — *causes*
  > “Augmenting Large Language Models (LLMs) with retrieved external knowledge has proven effective in improving the factual accuracy of generated responses.”
  - [Entropy-Based Decoding for Retrieval-Augmented Large Language Models](https://aclanthology.org/2025.naacl-long.236.pdf)

### Associated with
- **Multimodal question answering** (behaviors tasks)
  > In this task, BioBRIDGE serves as a cross-modal retriever to enhance the contexts for Galactica’s response to the input question. (Section 5)
  - [BioBridge: Bridging Biomedical Foundation Models via Knowledge Graphs](https://proceedings.iclr.cc/paper_files/paper/2024/file/4a5a9f5c15632e9f52c9c1ba4134f13c-Paper-Conference.pdf)
- **In-context learning** (constructs)
  > Such in-context learning (ICL) offers a novel and effective alternative to traditional fine-tuning techniques and has become an important feature of LLM with its applications spanning retrieval-augmented generation [Lewis et al., 2020]... (Introduction)
  - [Fine-grained Analysis of In-context Linear Estimation: Data, Architecture, and Beyond](https://proceedings.neurips.cc/paper_files/paper/2024/file/f9dc462382fef56d58279e75de2438f3-Paper-Conference.pdf)
- **Text generation** (behaviors tasks)
  > One such scenario is Retrieval-Augmented Generation (RAG) (Lewis et al., 2021a), where an embedding model retrieves context for a generative model to answer a user query. (Section 2)
  - [Generative Representational Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/70cf215430492f7d34830a24e744b3f1-Paper-Conference.pdf)
- **Document utility** (constructs)
  > “we introduce an automatic evaluation method that measures retrieval utility through the lens of information gain within the RAG framework.”
  - [SePer: Measure Retrieval Utility Through The Lens Of Semantic Perplexity Reduction](https://proceedings.iclr.cc/paper_files/paper/2025/file/c44c4afd77d5ee760e7f4bed0c50f878-Paper-Conference.pdf)
- **Noise robustness** (constructs)
  > Despite their success, retrieval-augmented LLMs still face the distractibility issue, where the generated responses are negatively influenced by noise from both external and internal knowledge sources.
  - [Entropy-Based Decoding for Retrieval-Augmented Large Language Models](https://aclanthology.org/2025.naacl-long.236.pdf)
- **Hallucination** (behaviors tasks)
  > Retrieval-Augmented Generation (RAG) has emerged as a promising approach to address key limitations of Large Language Models (LLMs), such as hallucination, outdated knowledge, and lacking reference. (Abstract)
  - [InfoGain-RAG: Boosting Retrieval-Augmented Generation through Document Information Gain-based Reranking and Filtering](https://aclanthology.org/2025.emnlp-main.365.pdf)
