# MTEB
**Type:** Measurement  
**Referenced in:** 32 papers  

## State of the Field

**What it is.** Across papers, MTEB is most commonly described as a comprehensive or general-purpose suite for evaluating text embedding models, and some papers also refer to it as a leaderboard plus a collection of benchmarks. The most detailed description presents it as 56 English tasks across 7 types, including classification, clustering, retrieval, semantic textual similarity, and summarization, plus 2 other task types. A smaller line of work describes it differently, as covering 8 task types, or uses narrower subsets such as the retrieval set or ten STS tasks; one definition also frames it as spanning multiple tasks and languages.

**What it is claimed to measure.** Papers use MTEB to measure 6 behavioral indicators and 3 constructs. These reported uses span several embedding-related outcomes rather than a single target: text clustering and information retrieval are the most frequently linked behavioral indicators, semantic textual similarity is also a recurring reported use, and 3 other behavioral indicators are additionally reported. On the construct side, representation quality is the most frequently linked construct, with 2 other constructs also measured through MTEB.

**Space of uses.** In use, papers commonly treat MTEB as a benchmark suite or leaderboard reference when testing embedding and retrieval models, sometimes evaluating on the broad benchmark and sometimes on subsets such as retrieval or STS tasks. Among linked instruments, MTEB is related to BEIR, and one paper describes MTEB's 15 retrieval tasks as "commonly referred to as BEIR." Other papers also use it in direct comparison with a domain-specific benchmark, FinMTEB.

**Concerns raised.** Only a smaller line of work raises explicit limitations. One paper notes that standard suites such as MTEB "do not contain instructions," and another states that "higher MTEB performance does not guarantee better downstream performance."

## Sources

**[Weighted Multi-Prompt Learning with Description-free Large Language Model Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/284e7ef68bf3d8fa42abf45a39f29f5e-Paper-Conference.pdf)**
> The Massive Text Embedding Benchmark (MTEB) is a comprehensive evaluation suite used to assess the performance of text embedding models.

## Relationships

### → MTEB
- **Information retrieval** (behaviors tasks) — *measured_by*
  > We evaluate 13 representative retrieval models, ranging from traditional bag-of-words models to large dense retrieval models, including the top performers from the retrieval set of the MTEB leaderboard (Muennighoff et al., 2023), BEIR (Thakur et al., 2021). (Section 4.1)
  - [BRIGHT: A Realistic and Challenging Benchmark for Reasoning-Intensive Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/7a0f8055c838df8e62329a76c7c6403d-Paper-Conference.pdf)
- **Text clustering** (behaviors tasks) — *measured_by*
  > MTEB is a collection of 56 datasets that are grouped into different embedding tasks: classification, clustering, pair classification, reranking, retrieval, sentence similarity (STS), and summarization, with the goal of evaluating embeddings broadly. (Section 4.1)
  - [Repetition Improves Language Model Embeddings](https://proceedings.iclr.cc/paper_files/paper/2025/file/e9b0c9480b03f9a6bca24ed8c08ee058-Paper-Conference.pdf)
- **Semantic textual similarity** (behaviors tasks) — *measured_by*
  > It includes data for various tasks including Retrieval, Reranking, Clustering, Classification, and STS. (Section 4.1)
  - [Making Text Embedders Few-Shot Learners](https://proceedings.iclr.cc/paper_files/paper/2025/file/5eba8556ce2d1afff57591464d48fbc3-Paper-Conference.pdf)
- **Text embedding** (behaviors tasks) — *measured_by*
  > Through systematic evaluation on 32 embedding tasks from the Massive Text Embedding Benchmark (MTEB) (Muennighoff et al., 2022), we find that intermediate layers often surpass the final layer by up to 16% in downstream accuracy.
  - [Layer by Layer: Uncovering Hidden Representations in Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/skean25a/skean25a.pdf)
- **Representation quality** (constructs) — *measured_by*
  > For embedding performance we evaluate using the 56 main datasets from MTEB (Muennighoff et al., 2023c). (Section 3.1)
  - [Generative Representational Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/70cf215430492f7d34830a24e744b3f1-Paper-Conference.pdf)
- **Ranking** (behaviors tasks) — *measured_by*
  > It includes data for various tasks including Retrieval, Reranking, Clustering, Classification, and STS. (Section 4.1)
  - [Making Text Embedders Few-Shot Learners](https://proceedings.iclr.cc/paper_files/paper/2025/file/5eba8556ce2d1afff57591464d48fbc3-Paper-Conference.pdf)
- **Information retrieval ability** (constructs) — *measured_by*
  > our model, MM-Embed, ... surpassing the state-of-the-art text retrieval model, NV-Embed-v1, on the MTEB retrieval benchmark. (Section 1)
  - [MM-EMBED: UNIVERSAL MULTIMODAL RETRIEVAL WITH MULTIMODAL LLMS](https://proceedings.iclr.cc/paper_files/paper/2025/file/6d5d6afa9957cfc9142ba60e78a467e9-Paper-Conference.pdf)
- **Pair classification** (behaviors tasks) — *measured_by*
  > We evaluate MOEE on 6 task categories from the MTEB, including Classification, Clustering, Pair Classification, Re-ranking, Semantic Textual Similarity (STS), and Summarization. (Section 4.1)
  - [Your Mixture-of-Experts LLM Is Secretly an Embedding Model for Free](https://proceedings.iclr.cc/paper_files/paper/2025/file/aed2049f68827943dda5a63b7c4ba0a2-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > To validate the effectiveness and generalization ability of our proposed method, we followed the data selection strategy of e5-mistral-7b-instruct (Wang et al., 2023) and used only a small portion of the MTEB training dataset for zero-shot training. (Section 4.3)
  - [Conan-Embedding-v2: Training an LLM from Scratch for Text Embeddings](https://aclanthology.org/2025.emnlp-main.758.pdf)

### Associated with
- **BEIR** (measurements)
  > “Note that our model also attains the highest scores in 15 retrieval tasks (commonly referred to as BEIR (Thakur et al., 2021)), 11 clustering tasks, and 12 classification tasks in the MTEB benchmark.”
  - [NV-Embed: Improved Techniques for Training LLMs as Generalist Embedding Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c4bf73386022473a652a18941e9ea6f8-Paper-Conference.pdf)
