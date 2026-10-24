# PRMBench
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** PRMBENCH  

## State of the Field

**What it is.** Across papers, PRMBench is most commonly described as a benchmark or benchmark dataset for evaluating process-level rewards, or process-level reward models, in reasoning chains. One description makes its format explicit: it is built on the PRM800K corpus and contains 6k math problems across 9 error categories, while another emphasizes that it assesses step-level correctness in multi-step problem solving. Definitions also frame it as targeting reasoning correctness and error detection.

**What it is claimed to measure.** Papers link PRMBench to 3 constructs and 1 behavioral indicator. The prevailing measurement claims are concentrated on Prompt sensitivity, Soundness, and Simplicity: papers say it evaluates models across simplicity, soundness, and sensitivity, further divided into nine aspects. A smaller line of work reports it as measuring Error analysis, describing it as a benchmark with particular emphasis on granular error diagnosis.

**Space of uses.** Papers use PRMBench as an evaluation dataset for reporting model results, sometimes as one dataset among several. One study evaluates on four datasets, pairing it with DeltaBench, ClaimTrees, and CaptainCookRecipes, while another reports results on PRMBENCH in a results table. It is also linked to 1 measurement instrument, Human evaluation: one paper says 10% of instances were manually evaluated by five volunteers to ensure the quality of the data.

## Sources

**[Dynamic and Generalizable Process Reward Modeling](https://aclanthology.org/2025.acl-long.212.pdf) (as "PRMBENCH")**
> Benchmark dataset built on PRM800K corpus with 6k math problems across 9 error categories, designed to evaluate process-level reward models on reasoning correctness and error detection.

**[Probabilistic Soundness Guarantees in LLM Reasoning Chains](https://aclanthology.org/2025.emnlp-main.382.pdf)**
> Benchmark for evaluating process-level rewards in reasoning chains, assessing step-level correctness in multi-step problem solving.

## Relationships

### → PRMBench
- **Soundness** (constructs) — *measured_by*
  > PRMBENCH comprises 6,216 carefully designed problems and 83,456 step-level labels, evaluating models across multiple dimensions, including simplicity, soundness, and sensitivity.
  - [PRMBench: A Fine-grained and Challenging Benchmark for Process-Level Reward Models](https://aclanthology.org/2025.acl-long.1230.pdf)
- **Simplicity** (constructs) — *measured_by*
  > PRMBENCH comprises 6,216 carefully designed problems and 83,456 step-level labels, evaluating models across multiple dimensions, including simplicity, soundness, and sensitivity.
  - [PRMBench: A Fine-grained and Challenging Benchmark for Process-Level Reward Models](https://aclanthology.org/2025.acl-long.1230.pdf)
- **Error analysis** (behaviors tasks) — *measured_by*
  > PRMBench (Song et al., 2025) constitutes a comprehensive benchmark for evaluating PRMs, with particular emphasis on granular error diagnosis (Section 4.1).
  - [R-PRM: Reasoning-Driven Process Reward Modeling](https://aclanthology.org/2025.emnlp-main.679.pdf)

### Associated with
- **Human evaluation** (measurements)
  > Furthermore, to further ensure the quality of the data, we manually evaluate 10% of the total instances... We recruited five volunteers to evaluate our proposed PRMBENCH... (Section 3.3)
  - [PRMBench: A Fine-grained and Challenging Benchmark for Process-Level Reward Models](https://aclanthology.org/2025.acl-long.1230.pdf)
