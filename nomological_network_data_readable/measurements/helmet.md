# HELMET
**Type:** Measurement  
**Referenced in:** 7 papers  

## State of the Field

**What it is.** Across definitions, HELMET is most commonly described as a long-context benchmark for assessing model performance on extended text processing tasks. Papers describe it at different granularities: one account says it covers seven diverse, application-centric categories, while another reports evaluation across five task types, synthetic recall, retrieval-augmented generation, many-shot in-context learning, passage re-ranking, and long-document QA, covering 17 sub-tasks. A recurring detail is that it includes portions from other long-text benchmarks, especially RULER and ∞Bench, and one paper also refers to HotpotQA, Natural Questions, and TriviaQA as factoid QA tasks curated by HELMET for 128k-token benchmarking.

**What it is claimed to measure.** Papers link HELMET to several long-context constructs and behaviors rather than only one target. It is linked to 4 constructs, length generalization, long-context understanding, long-range dependency modeling, and memory, and to 4 behavioral indicators, in-context prediction, synthetic recall, document question answering, and ranking. The relationship evidence also places many-shot in-context learning and synthetic recall directly inside HELMET evaluations, with ICL evaluated by Accuracy and synthetic recall by SubEM.

**Space of uses.** In use, HELMET is often positioned prominently in evaluation: one paper calls it the main benchmark, while others pair it with RULER or adopt it alongside LONGMEMEVAL. Papers repeatedly use HELMET and RULER together when reporting long-context results, and one description says HELMET's synthetic recall category selects multiple tasks from RULER. Another paper relates HELMET to HotpotQA, Natural Questions, and TriviaQA because those QA sets are used as curated by HELMET for long-context benchmarking with 128k input tokens.

## Sources

**[A Silver Bullet or a Compromise for Full Attention? A Comprehensive Study of Gist Token-based Context Compression](https://aclanthology.org/2025.acl-long.241.pdf)**
> A long-context benchmark that includes portions from RULER and ∞Bench, used to assess model performance on extended text processing tasks.

## Relationships

### → HELMET
- **In-context prediction** (behaviors tasks) — *measured_by*
  > we present HELMET (How to Evaluate Long-context Models Effectively and Thoroughly). We curate a diverse set of application-centric long-context tasks across seven categories. Beyond widely adopted categories like ... we also add many-shot in-context learning (ICL)
  - [HELMET: How to Evaluate Long-context Models Effectively and Thoroughly](https://proceedings.iclr.cc/paper_files/paper/2025/file/f5332c8273d02729730a9c24dec2135e-Paper-Conference.pdf)
- **Synthetic recall** (behaviors tasks) — *measured_by*
  > we present HELMET (How to Evaluate Long-context Models Effectively and Thoroughly). We curate a diverse set of application-centric long-context tasks across seven categories. Beyond widely adopted categories like synthetic recall...
  - [HELMET: How to Evaluate Long-context Models Effectively and Thoroughly](https://proceedings.iclr.cc/paper_files/paper/2025/file/f5332c8273d02729730a9c24dec2135e-Paper-Conference.pdf)
- **Retrieval-augmented generation** (behaviors tasks) — *measured_by*
  > The evaluation spans five task types from the HELMET benchmark: synthetic recall, retrieval-augmented generation (RAG), many-shot in-context learning (ICL), passage re-ranking, and long-document QA, covering a total of 17 sub-tasks. (Section 4.1. Evaluation)
  - [NExtLong: Toward Effective Long-Context Training without Long Documents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gao25n/gao25n.pdf)
- **Long-context understanding** (constructs) — *measured_by*
  > In this section, we assess our method AgenticLU using a suite of evaluation tasks drawn from the HELMET long-context benchmark (Yen et al., 2024). (Section 6)
  - [Self-Taught Agentic Long Context Understanding](https://aclanthology.org/2025.acl-long.275.pdf)
- **Long-range dependency modeling** (constructs) — *measured_by*
  > Extensive experiments on the HELMET(Yen et al., 2024b) and RULER(Hsieh et al., 2024) benchmarks demonstrate that NExtLong significantly improves the model’s ability to capture and utilize long-range dependencies. (Section 1. Introduction)
  - [NExtLong: Toward Effective Long-Context Training without Long Documents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gao25n/gao25n.pdf)
- **Ranking** (behaviors tasks) — *measured_by*
  > The evaluation spans five task types from the HELMET benchmark: synthetic recall, retrieval-augmented generation (RAG), many-shot in-context learning (ICL), passage re-ranking, and long-document QA, covering a total of 17 sub-tasks. (Section 4.1. Evaluation)
  - [NExtLong: Toward Effective Long-Context Training without Long Documents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gao25n/gao25n.pdf)
- **Document question answering** (behaviors tasks) — *measured_by*
  > The evaluation spans five task types from the HELMET benchmark: synthetic recall, retrieval-augmented generation (RAG), many-shot in-context learning (ICL), passage re-ranking, and long-document QA, covering a total of 17 sub-tasks. (Section 4.1. Evaluation)
  - [NExtLong: Toward Effective Long-Context Training without Long Documents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gao25n/gao25n.pdf)
- **Memory** (constructs) — *measured_by*
  > To assess long-context memory and extrapolation ability, two benchmarks are adopted: ... an application-centric benchmark HELMET (Yen et al., 2024). (Section 1)
  - [Recall with Reasoning: Chain-of-Thought Distillation for Mamba's Long-Context Memory and Extrapolation](https://aclanthology.org/2025.emnlp-main.235.pdf)
- **Length generalization** (constructs) — *measured_by*
  > To assess long-context memory and extrapolation ability, two benchmarks are adopted: ... an application-centric benchmark HELMET (Yen et al., 2024). (Section 1)
  - [Recall with Reasoning: Chain-of-Thought Distillation for Mamba's Long-Context Memory and Extrapolation](https://aclanthology.org/2025.emnlp-main.235.pdf)

### Associated with
- **HotpotQA** (measurements)
  > For testing on factoid QA tasks, we use HotpotQA (Yang et al., 2018), Natural Questions (NQ) (Kwiatkowski et al., 2019), and TriviaQA (Joshi et al., 2017), as curated by HELMET (Yen et al., 2025) for long-context benchmarking with 128k input tokens. (Section 4.1)
  - [Efficient Context Selection for Long-ContextQA: No Tuning, No Iteration, Just Adaptive‐k](https://aclanthology.org/2025.emnlp-main.1017.pdf)
- **Natural Questions** (measurements)
  > For testing on factoid QA tasks, we use HotpotQA (Yang et al., 2018), Natural Questions (NQ) (Kwiatkowski et al., 2019), and TriviaQA (Joshi et al., 2017), as curated by HELMET (Yen et al., 2025) for long-context benchmarking with 128k input tokens. (Section 4.1)
  - [Efficient Context Selection for Long-ContextQA: No Tuning, No Iteration, Just Adaptive‐k](https://aclanthology.org/2025.emnlp-main.1017.pdf)
- **TriviaQA** (measurements)
  > For testing on factoid QA tasks, we use HotpotQA (Yang et al., 2018), Natural Questions (NQ) (Kwiatkowski et al., 2019), and TriviaQA (Joshi et al., 2017), as curated by HELMET (Yen et al., 2025) for long-context benchmarking with 128k input tokens. (Section 4.1)
  - [Efficient Context Selection for Long-ContextQA: No Tuning, No Iteration, Just Adaptive‐k](https://aclanthology.org/2025.emnlp-main.1017.pdf)
- **RULER** (measurements)
  > “For this category, we select multiple synthetic recall tasks from RULER (an extended version of NIAH; Hsieh et al., 2024) and also add a JSON KV retrieval task (Liu et al., 2023), which we find more challenging.”
  - [HELMET: How to Evaluate Long-context Models Effectively and Thoroughly](https://proceedings.iclr.cc/paper_files/paper/2025/file/f5332c8273d02729730a9c24dec2135e-Paper-Conference.pdf)
