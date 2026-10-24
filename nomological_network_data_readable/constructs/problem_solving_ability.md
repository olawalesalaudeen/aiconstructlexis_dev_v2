# Problem-solving ability
**Type:** Construct  
**Referenced in:** 30 papers  
**Also known as:** Problem-solving, Generalized problem solving, Complex problem solving, Problem-solving capability, Number puzzle solving, Multimodal problem solving  

## State of the Field

**Definition agreement:** Consensus. Most papers define problem-solving ability as a model's general capacity to solve complex or unfamiliar tasks by reasoning through steps or strategies to reach a correct or effective solution. A few papers emphasize particular settings such as competitive math, multimodal inputs, tool use, or benchmark performance, but these are narrower applications or emphases of the same core property rather than different phenomena.

**Space of definitions.** Across the surveyed work, the prevailing usage treats problem-solving ability as a broad capacity to solve complex or unfamiliar tasks by devising and carrying out strategies or sequences of steps, applying knowledge and reasoning, and arriving at correct solutions. Many definitions stay at this level, and also frame it as generalized problem solving rather than reliance on narrow memorized patterns, or as solving tasks with multiple interdependent reasoning steps. A smaller line of work narrows the construct to direct performance on evaluation tasks, especially competitive mathematics, while some definitions specialize it further to tool-aided, multimodal, or numerical puzzle solving.

**Space of facets.** The named variants in papers mainly differ by scope and setting: generalized and complex problem solving for unfamiliar, multi-step tasks, multimodal problem solving for problems that combine text and images, number puzzle solving for numerical items, and tool-aided problem-solving capability for solving complex tasks with external tools. Papers also distinguish problem-solving ability from neighboring abilities rather than collapsing them: one relates algorithmic reasoning to problem-solving and decision-making, another treats data generation ability as not necessarily correlated with problem-solving ability, and another says providing a gold answer can disentangle error detection from problem solving.

**Space of measurement.** Operationalization is benchmark-heavy. Papers link problem-solving ability to 12 measurement instruments and 2 behavioral indicators; the most frequently linked instruments are MMLU, AIME 2024, GPQA-Diamond, GSM8K, and Game of 24, with several other benchmark tasks also used. These measures range from broad cross-subject evaluation, since MMLU is described as assessing world knowledge and problem-solving across diverse subjects, to complex-task and numerical-reasoning tests, so the measurements partly match the broad definitions but often narrow the construct to benchmark task performance. No human evaluation, LLM-as-a-judge, or probe is linked to it.

**Links.** Beyond measurement, papers report only a few direct links. One paper claims a causal relationship from self-improvement to problem-solving ability, stating that post-training methods have been used to enhance problem-solving capabilities, and the same paper claims a causal relationship from self-correction to problem-solving ability in the context of limits on enhancement. Separately, one paper reports that error localization is weakly correlated with problem-solving accuracy, and one paper relates algorithmic reasoning to problem-solving and decision-making.

## Sources

**[PUZZLES: A Benchmark for Neural Algorithmic Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/e5d1eaadeed651ba1021c09149db4b92-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Problem-solving")**
> The ability to devise and execute a strategy to move from an initial state to a desired goal state, particularly in complex and unfamiliar domains.

**[PutnamBench: Evaluating Neural Theorem-Provers on the Putnam Mathematical Competition](https://proceedings.neurips.cc/paper_files/paper/2024/file/1582eaf9e0cf349e1e5a6ee453100aa1-Paper-Datasets_and_Benchmarks_Track.pdf)**
> The general capability to solve complex problems, particularly those found in competitive mathematics that require non-trivial insight.

**[Evaluating Large Vision-and-Language Models on Children's Mathematical Olympiads](https://proceedings.neurips.cc/paper_files/paper/2024/file/1cc12fb3d4033ad72d33a51f1d0ab5d0-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Generalized problem solving")**
> The broad capacity to solve unfamiliar problems across settings rather than relying on narrow memorized patterns.

**[Large Language Models as Tool Makers](https://proceedings.iclr.cc/paper_files/paper/2024/file/ed91353f700d113e5d848c7e04a858b0-Paper-Conference.pdf) (as "Problem-solving capability")**
> The general ability of an LLM to solve complex tasks effectively, especially when aided by external tools.

**[Can Large Language Models Win the International Mathematical Games?](https://aclanthology.org/2025.emnlp-main.488.pdf) (as "Multimodal problem solving")**
> Solving problems that require integrating information from both text and images, such as interpreting diagrams to compute geometric properties.

## Relationships

### Problem-solving ability →
- **MMLU** (measurements) — *measured_by*
  > MMLU (Hendrycks et al., 2021) Problem-solving across disciplines. (Table 2)
  - [Demystifying Small Language Models for Edge Deployment](https://aclanthology.org/2025.acl-long.718.pdf)
- **PutnamBench** (measurements) — *measured_by*
  > PUTNAMBENCH requires significant problem-solving ability and proficiency in a broad range of topics taught in undergraduate mathematics courses.
  - [PutnamBench: Evaluating Neural Theorem-Provers on the Putnam Mathematical Competition](https://proceedings.neurips.cc/paper_files/paper/2024/file/1582eaf9e0cf349e1e5a6ee453100aa1-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MMLU-Pro** (measurements) — *measured_by*
  > MMLU-Pro: An enhanced version of the Massive Multitask Language Understanding (MMLU) benchmark, featuring challenging questions across 14 categories like physics, law, history, and so on to test real-world text understanding and complex problem solving (Section 2.2)
  - [Warm Up Before You Train: Unlocking General Reasoning in Resource-Constrained Settings](https://aclanthology.org/2025.emnlp-main.727.pdf)
- **MathQA** (measurements) — *measured_by*
  > It consists of questions that test numerical reasoning and problem-solving skills, requiring models to both understand the text of a word problem and perform mathematical operations to arrive at the correct solution. (Section 3.2.1)
  - [NESTFUL: A Benchmark for Evaluating LLMs on Nested Sequences of API Calls](https://aclanthology.org/2025.emnlp-main.1702.pdf)

### → Problem-solving ability
- **Self-improvement** (constructs) — *causes*
  > Self-improvement through post-training methods such as iterative preference learning has been acclaimed for enhancing the problem-solving capabilities (e.g., mathematical reasoning) of Large Language Models (LLMs) without human intervention. (ABSTRACT)
  - [Progress or Regress? Self-Improvement Reversal in Post-training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1fa0c4e5a7e189729230d018b229abc7-Paper-Conference.pdf)
- **Self-correction** (behaviors tasks) — *causes*
  > ...post-prompting strategies are limited by the model’s intrinsic self-correction capabilities, thereby failing to significantly enhance problem-solving capabilities. (Section 2)
  - [Progress or Regress? Self-Improvement Reversal in Post-training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1fa0c4e5a7e189729230d018b229abc7-Paper-Conference.pdf)
- **Error localization** (behaviors tasks) — *correlates*
  > A chi-squared test for independence confirms that error localization and problem-solving accuracy are weakly correlated (p > 0.01; ϕ < 0.2) across models and prompts (Section 4.2)
  - [LLMs cannot spot math errors, even when allowed to peek into the solution](https://aclanthology.org/2025.emnlp-main.553.pdf)

### Associated with
- **Algorithmic reasoning** (constructs)
  > Algorithmic reasoning is a fundamental cognitive ability that plays a pivotal role in problem-solving and decision-making processes. (Abstract)
  - [PUZZLES: A Benchmark for Neural Algorithmic Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/e5d1eaadeed651ba1021c09149db4b92-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Mathematical reasoning** (constructs)
  > Mathematical reasoning has emerged as a critical benchmark to measure the advanced reasoning and problem-solving abilities of the Large Language Models (LLMs) (Section 1).
  - [SBSC: Step-by-Step Coding for Improving Mathematical Olympiad Performance](https://proceedings.iclr.cc/paper_files/paper/2025/file/4e5f5e4504759e3957e3eef2a44a535e-Paper-Conference.pdf)
