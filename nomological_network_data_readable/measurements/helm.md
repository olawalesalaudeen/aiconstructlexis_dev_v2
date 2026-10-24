# HELM
**Type:** Measurement  
**Referenced in:** 23 papers  

## State of the Field

**What it is.** Most papers treat HELM as Stanford's Holistic Evaluation of Language Models, a large-scale, comprehensive benchmark or framework for evaluating language models across a wide range of scenarios and metrics, often described as covering capabilities, limitations, and risks. Some papers further position it as an aggregate benchmark, and one paper uses it specifically as the source of rankings for LLM performance on MMLU. A smaller usage in one paper instead labels "HELM" as a non-adaptive watermark-evasion baseline that randomly adds typos, lowercasing, or contractions.

**What it is claimed to measure.** Across the papers, HELM is linked to 0 constructs, 1 behavioral indicator, and 2 other instruments. The recorded measurement claims center on a single behavioral indicator rather than multiple constructs: multiple-choice question answering is measured by HELM in one paper, which says HELM uses MMLU questions "with multiple choice questions and labeled correct answers," and MMLU is measured by HELM in another paper through HELM-based ranking of MMLU performance. Beyond that, the other instrument-level link is not another measurement claim but a reported correlation with LiveBench.

**Space of uses.** Papers usually place HELM alongside broad evaluation suites and leaderboards, especially Open LLM Leaderboard, LiveBench, BigBench, ChatbotArena, and MMLU, with several other benchmark names appearing more peripherally. One paper says frameworks such as HELM, BigBench, and ChatbotArena conduct comprehensive evaluations of language models, and another says aggregate benchmarks such as HELM and Open LLM Leaderboard "act as a proxy measurement of the true capabilities of LLMs." One paper also reports that HELM is strongly correlated with LiveBench, and another uses HELM rankings to identify top-performing LLMs on MMLU.

**Concerns raised.** Explicit concerns are limited. One paper groups HELM with knowledge-based and logic-based benchmarks and characterizes such benchmarks as failing to capture nuanced human preferences. Another paper describes aggregate benchmarks such as HELM as "a proxy measurement of the true capabilities of LLMs."

## Sources

**[Style Outweighs Substance: Failure Modes of LLM Judges in Alignment Benchmarking](https://proceedings.iclr.cc/paper_files/paper/2025/file/1eb36d07ebb13be16ddbda679a95018b-Paper-Conference.pdf)**
> Holistic Evaluation of Language Models, a large-scale benchmark from Stanford for evaluating language models across a wide range of scenarios and metrics.

## Relationships

### HELM →
- **LiveBench** (measurements) — *correlates*
  > LiveBench and HELM are strongly correlated (Table 1).
  - [Style Outweighs Substance: Failure Modes of LLM Judges in Alignment Benchmarking](https://proceedings.iclr.cc/paper_files/paper/2025/file/1eb36d07ebb13be16ddbda679a95018b-Paper-Conference.pdf)

### → HELM
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > We started from two LLM leaderboards: (1) HuggingFace’s Open LLM Leaderboard 21; and (2) Stanford’s Holistic Evaluation of Language Models (Helm) (Liang et al., 2023). Both use questions from the Massive Multitask Language Understanding (MMLU) question-answering dataset (Hendrycks et al., 2020), with multiple choice questions and labeled correct answers. (Section 3.1).
  - [Correlated Errors in Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/kim25e/kim25e.pdf)

### Associated with
- **MMLU** (measurements)
  > "the performance of the ten best-performing LLMs on MMLU (as ranked by HELM (Liang et al., 2023))"
  - [Are We Done with MMLU?](https://aclanthology.org/2025.naacl-long.262.pdf)
