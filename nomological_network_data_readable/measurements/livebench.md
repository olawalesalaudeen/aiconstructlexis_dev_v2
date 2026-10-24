# LiveBench
**Type:** Measurement  
**Referenced in:** 16 papers  

## State of the Field

**What it is.** Across the surveyed definitions, LiveBench is most commonly described as a dynamic, contamination-limited benchmark from Abacus AI: papers say it evaluates models on questions with ground-truth answers, compiles items from recent sources such as math competitions, and refreshes the dataset regularly. A recurring description is that it spans multiple domains, most commonly data analysis, language, reasoning, math, instruction following, and coding, while some definitions emphasize the large test set and others stress periodic updates to reduce contamination.

**What it is claimed to measure.** Papers use it to measure 5 constructs and 3 behavioral indicators. The construct links are led by Reasoning, with additional claims for Coding ability, General ability, Mathematical reasoning, and Natural language understanding, while the behavioral-indicator links cover Data analysis, Instruction following, and Language understanding task performance. Overall, the measurement claims are spread across several abilities rather than concentrated on one construct, in line with the benchmark's multi-domain task descriptions.

**Space of uses.** It is linked to 6 other measurement instruments. Papers most often connect it to Arena-Hard, BIG-Bench Hard, Chatbot Arena, HELM, and IFEval, plus 1 other instrument. Those links are described in different ways: papers report correlations with Arena-Hard, Chatbot Arena, and HELM; they relate it to BIG-Bench Hard and IFEval by describing LiveBench as containing harder, contamination-limited versions of earlier tasks; and one related benchmark uses the corresponding LiveBench datasets for Reasoning and Mathematics categories.

**Concerns raised.** The recurring concern around LiveBench is data contamination. Papers say it is updated with recent questions and periodically refreshed to mitigate or reduce contamination, and related work describes it as contamination-limited.

## Sources

**[Style Outweighs Substance: Failure Modes of LLM Judges in Alignment Benchmarking](https://proceedings.iclr.cc/paper_files/paper/2025/file/1eb36d07ebb13be16ddbda679a95018b-Paper-Conference.pdf)**
> A benchmark from Abacus AI that evaluates models on a large test set of questions with ground truth answers.

## Relationships

### → LiveBench
- **Reasoning** (constructs) — *measured_by*
  > LiveBench... contains a wide variety of challenging tasks, spanning math, coding, reasoning, language, instruction following, and data analysis.
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
- **Chatbot Arena** (measurements) — *correlates*
  > LiveBench has a 0.91 and 0.88 correlation with ChatBot Arena and Arena-Hard, respectively.
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
- **Arena-Hard** (measurements) — *correlates*
  > LiveBench has a 0.91 and 0.88 correlation with ChatBot Arena and Arena-Hard, respectively.
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
- **Mathematical reasoning** (constructs) — *measured_by*
  > LiveBench... contains a wide variety of challenging tasks, spanning math, coding, reasoning, language, instruction following, and data analysis.
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
- **Coding ability** (constructs) — *measured_by*
  > LiveBench... contains a wide variety of challenging tasks, spanning math, coding, reasoning, language, instruction following, and data analysis.
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
- **Natural language understanding** (constructs) — *measured_by*
  > LiveBench... contains a wide variety of challenging tasks, spanning math, coding, reasoning, language, instruction following, and data analysis.
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
- **Instruction following** (behaviors tasks) — *measured_by*
  > LiveBench... contains a wide variety of challenging tasks, spanning math, coding, reasoning, language, instruction following, and data analysis.
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
- **HELM** (measurements) — *correlates*
  > LiveBench and HELM are strongly correlated (Table 1).
  - [Style Outweighs Substance: Failure Modes of LLM Judges in Alignment Benchmarking](https://proceedings.iclr.cc/paper_files/paper/2025/file/1eb36d07ebb13be16ddbda679a95018b-Paper-Conference.pdf)
- **Data analysis** (behaviors tasks) — *measured_by*
  > LiveBench (White et al., 2024) contains 6 problem categories: data analysis, language, reasoning, math, instruction following, and coding. (Section 4.2)
  - [Scaling LLM Inference Efficiently with Optimized Sample Compute Allocation](https://aclanthology.org/2025.naacl-long.404.pdf)
- **Evaluation reliability** (constructs) — *measured_by*
  > Our Unbiased Evaluator demonstrates a significantly stronger alignment with human expert judgments. Since obtaining comprehensive expert evaluations across multiple models is both costly and impractical, we instead benchmark our method against LiveBench (White et al., 2025), a continuously updated and widely recognized evaluation platform. (Section 6.3. Evaluation Reliability)
  - [Unbiased Evaluation of Large Language Models from a Causal Perspective](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25bi/chen25bi.pdf)

### Associated with
- **JudgeBench** (measurements)
  > For the Reasoning and Mathematics categories, we use the corresponding LiveBench datasets. (Section 3)
  - [JudgeBench: A Benchmark for Evaluating LLM-Based Judges](https://proceedings.iclr.cc/paper_files/paper/2025/file/9e720fce64f91114c49cfd640d821da3-Paper-Conference.pdf)
- **BIG-Bench Hard** (measurements)
  > LiveBench... contains harder, contamination-limited versions of tasks from previous benchmarks such as Big-Bench Hard, AMPS, and IFEval.
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
- **IFEval** (measurements)
  > LiveBench... contains harder, contamination-limited versions of tasks from previous benchmarks such as Big-Bench Hard, AMPS, and IFEval.
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
