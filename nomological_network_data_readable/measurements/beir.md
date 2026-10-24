# BEIR
**Type:** Measurement  
**Referenced in:** 23 papers  
**Also known as:** BEIR benchmark  

## State of the Field

**What it is.** Most descriptions treat BEIR as a diverse benchmark suite for information retrieval, used for zero-shot or out-of-domain evaluation across domains. Papers describe it as a collection of diverse or public retrieval datasets, sometimes emphasizing ranking or re-ranking performance, and one definition names Covid, SciFact, DBpedia, and NFCorpus as included datasets. The coverage is described differently across papers, with references to 18 datasets, 14 public retrieval datasets excluding MS MARCO, or more generally a standard suite of retrieval benchmarks.

**What it is claimed to measure.** Across papers, its measurement claims cluster around retrieval-related outcomes. BEIR is linked to 2 constructs, most often Generalization and also Retrieval effectiveness, and to 2 behavioral indicators, Information retrieval and Ranking. Papers use it to measure out-of-domain or zero-shot retrieval performance, the generalization ability of ranking models, and re-ranking or retrieval effectiveness.

**Space of uses.** Papers often use BEIR as a main evaluation suite alongside MS MARCO, TREC Deep Learning benchmarks, and MTEB, and they describe it as a standard or widely used benchmark for downstream, zero-shot, and re-ranking evaluation. Across papers, 7 other instruments are linked to it, most often FEVER and FiQA, which are described as measured by BEIR, and MTEB, which is related to it, with 4 others also linked. Papers also report metrics such as Recall@100 and NDCG@10 on the benchmark.

**Concerns raised.** One paper notes that BEIR does not contain instructions, and uses that as a contrast when evaluating instruction-following retrieval models.

## Sources

**[Promptriever: Instruction-Trained Retrievers Can Be Prompted Like Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/2cefdb2c4c3274b78cd450bac35228df-Paper-Conference.pdf)**
> The Benchmark for Evaluation of Information Retrieval (BEIR) is a collection of diverse datasets used to measure a model's out-of-domain retrieval performance.

**[REALM: Recursive Relevance Modeling for LLM-based Document Re-Ranking](https://aclanthology.org/2025.emnlp-main.1218.pdf) (as "BEIR benchmark")**
> Broad Evaluation of Information Retrieval benchmark, a diverse collection of datasets including Covid, SciFact, DBpedia, and NFCorpus, used to evaluate zero-shot retrieval and re-ranking performance across domains.

## Relationships

### → BEIR
- **Information retrieval** (behaviors tasks) — *measured_by*
  > “BEIR dataset [52] is a popular benchmark for evaluating dense retrievers’ zero-shot effectiveness”
  - [Enhancing LLM’s Cognition via Structurization](https://proceedings.neurips.cc/paper_files/paper/2024/file/f169ec4d47933ea4896b994af8ff4f17-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > Our main evaluations are conducted on BEIR (Thakur et al., 2021) and MIRACL (Zhang et al., 2023), to assess the generalization of dense retrievers and multilingual retrieval capability. (Section 4.5).
  - [DRAMA: Diverse Augmentation from Large Language Models to Smaller Dense Retrievers](https://aclanthology.org/2025.acl-long.1457.pdf)
- **Retrieval effectiveness** (constructs) — *measured_by*
  > We evaluate retrieval effectiveness using two retrieval benchmarks: MS MARCO (Bajaj et al., 2016) and BEIR (Thakur et al., 2021).
  - [ExpandR: Teaching Dense Retrievers Beyond Queries with LLM Guidance](https://aclanthology.org/2025.emnlp-main.963.pdf)
- **Ranking** (behaviors tasks) — *measured_by*
  > We further evaluate QRRETRIEVER as a re-ranker on the standard BEIR benchmark (Thakur et al., 2021). (Section 1)
  - [Query-Focused Retrieval Heads Improve Long-Context Reasoning and Re-ranking](https://aclanthology.org/2025.emnlp-main.1214.pdf)

### Associated with
- **MTEB** (measurements)
  > “Note that our model also attains the highest scores in 15 retrieval tasks (commonly referred to as BEIR (Thakur et al., 2021)), 11 clustering tasks, and 12 classification tasks in the MTEB benchmark.”
  - [NV-Embed: Improved Techniques for Training LLMs as Generalist Embedding Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c4bf73386022473a652a18941e9ea6f8-Paper-Conference.pdf)
- **TREC-COVID** (measurements)
  > “nine public datasets in the BEIR benchmark (Thakur et al., 2021), including TREC-COVID”
  - [Attention in Large Language Models Yields Efficient Zero-Shot Re-Rankers](https://proceedings.iclr.cc/paper_files/paper/2025/file/b5b1890a7c1a79fe9b32b0f442347089-Paper-Conference.pdf)
- **NFCorpus** (measurements)
  > “nine public datasets in the BEIR benchmark (Thakur et al., 2021), including TREC-COVID (Voorhees et al., 2021), NFCorpus (Boteva et al., 2016)”
  - [Attention in Large Language Models Yields Efficient Zero-Shot Re-Rankers](https://proceedings.iclr.cc/paper_files/paper/2025/file/b5b1890a7c1a79fe9b32b0f442347089-Paper-Conference.pdf)
- **SciFact** (measurements)
  > “nine public datasets in the BEIR benchmark (Thakur et al., 2021), including ... SciFact (Wadden et al., 2020)”
  - [Attention in Large Language Models Yields Efficient Zero-Shot Re-Rankers](https://proceedings.iclr.cc/paper_files/paper/2025/file/b5b1890a7c1a79fe9b32b0f442347089-Paper-Conference.pdf)
- **FiQA** (measurements)
  > “nine public datasets in the BEIR benchmark (Thakur et al., 2021), including ... FiQA (Maia et al., 2018)”
  - [Attention in Large Language Models Yields Efficient Zero-Shot Re-Rankers](https://proceedings.iclr.cc/paper_files/paper/2025/file/b5b1890a7c1a79fe9b32b0f442347089-Paper-Conference.pdf)
- **FEVER** (measurements)
  > “nine public datasets in the BEIR benchmark (Thakur et al., 2021), including ... FEVER (Thorne et al., 2018)”
  - [Attention in Large Language Models Yields Efficient Zero-Shot Re-Rankers](https://proceedings.iclr.cc/paper_files/paper/2025/file/b5b1890a7c1a79fe9b32b0f442347089-Paper-Conference.pdf)
- **Natural Questions** (measurements)
  > “nine public datasets in the BEIR benchmark (Thakur et al., 2021), including ... NQ (Kwiatkowski et al., 2019)”
  - [Attention in Large Language Models Yields Efficient Zero-Shot Re-Rankers](https://proceedings.iclr.cc/paper_files/paper/2025/file/b5b1890a7c1a79fe9b32b0f442347089-Paper-Conference.pdf)
