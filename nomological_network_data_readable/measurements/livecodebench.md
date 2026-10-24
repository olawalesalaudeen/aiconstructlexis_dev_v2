# LiveCodeBench
**Type:** Measurement  
**Referenced in:** 45 papers  
**Also known as:** LiveCodeBench-v1.0  

## State of the Field

**What it is.** Across papers, LiveCodeBench is most commonly described as a contamination-free benchmark for code generation built from recent competitive programming problems, often from LeetCode, AtCoder, and CodeForces, with careful segregation by date to avoid contamination. Some descriptions emphasize continual collection of new human-authored problems to maintain freshness, while others frame it more broadly as a holistic evaluation for code that includes code generation and code execution tasks, including a code execution component called LCB-Exec. Papers also describe different slices and sizes: LiveCodeBench-v1.0 appears in one study, its "easy" subset is used for efficiency and accuracy comparisons, and other papers variously describe over 711 coding problems, 400 recent Python algorithm challenges, or over 300 challenging questions.

**What it is claimed to measure.** Most papers use LiveCodeBench to measure code generation, and one paper explicitly says the benchmark continues to evolve and add new code generation tasks. Papers link it to 6 constructs and 3 behavioral indicators overall. Beyond code generation, smaller lines of work use it to measure code debugging and code output prediction, and report it as measuring abductive code reasoning and code debugging ability, with 4 other linked constructs or indicators beyond these. The overall pattern is a strong concentration on code generation, with additional use across several other coding-related capabilities.

**Space of uses.** Papers often place LiveCodeBench alongside HumanEval+ and MBPP+, and some pair it with CRUXEval and other code benchmarks in the same evaluation suites. They position it as a commonly used or fair-comparison benchmark, and one study uses the LiveCodeBench-v1.0 easy subset for efficiency and accuracy comparisons. It is linked to 2 other instruments: it is reported to correlate with Chatbot Arena and is related to JudgeBench.

**Concerns raised.** Across definitions, the recurring concern is data contamination. Papers describe LiveCodeBench as contamination-free, mention careful segregation by date, and say it continuously collects new human-authored problems to maintain freshness and reduce the risk of contamination in evaluation.

## Sources

**[Planning in Natural Language Improves LLM Search for Code Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/071a637d41ea290ac4360818a8323f33-Paper-Conference.pdf)**
> A benchmark for code generation consisting of competitive programming problems, with careful segregation by date to avoid data contamination issues in evaluation.

**[Dynamic Parallel Tree Search for Efficient LLM Reasoning](https://aclanthology.org/2025.acl-long.550.pdf) (as "LiveCodeBench-v1.0")**
> Code generation benchmark designed to evaluate LLMs on programming tasks across difficulty levels, with an 'easy' subset used for efficiency and accuracy comparisons.

## Relationships

### → LiveCodeBench
- **Code generation** (behaviors tasks) — *measured_by*
  > LiveCodeBench [21] is a benchmark for contamination-free evaluation. ... we focus on the code generation task for assessing LLM function generation. (Section 3.1)
  - [SelfCodeAlign: Self-Alignment for Code Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/72da102da91a8042a0b2aa968429a9f9-Paper-Conference.pdf)
- **Code output prediction** (behaviors tasks) — *measured_by*
  > "For execution reasoning, we employ CRUXEval [37] and the code execution task in LiveCodeBench (LCB-Exec for short) [18]."
  - [SemCoder: Training Code Language Models with Comprehensive Semantics Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/6efcc7fd8efeee29a050a79c843c90e0-Paper-Conference.pdf)
- **Abductive code reasoning** (constructs) — *measured_by*
  > Deductive code and abductive code reasoning can be regarded as opposite processes; therefore, we selected two identical and representative datasets, CRUXEval (Gu et al., 2024) and LiveCodeBench (Jain et al., 2024), as benchmarks to validate these two capabilities.
  - [Unveiling the Magic of Code Reasoning through Hypothesis Decomposition and Amendment](https://proceedings.iclr.cc/paper_files/paper/2025/file/eeffa70bcbbd43f6bd067edebc6595e8-Paper-Conference.pdf)
- **Code debugging** (behaviors tasks) — *measured_by*
  > "we evaluate the execution-feedback-based multi-turn coding using the self-repair scenario"
  - [LiveCodeBench: Holistic and Contamination Free Evaluation of Large Language Models for Code](https://proceedings.iclr.cc/paper_files/paper/2025/file/94074dd5a072d28ff75a76dabed43767-Paper-Conference.pdf)
- **Test generation ability** (constructs) — *measured_by*
  > "introduce the test output prediction scenario to evaluate the models’ test generation capabilities"
  - [LiveCodeBench: Holistic and Contamination Free Evaluation of Large Language Models for Code](https://proceedings.iclr.cc/paper_files/paper/2025/file/94074dd5a072d28ff75a76dabed43767-Paper-Conference.pdf)
- **Chatbot Arena** (measurements) — *correlates*
  > Even then, our results are well correlated with findings from human evaluations like Chatbot-Arena
  - [LiveCodeBench: Holistic and Contamination Free Evaluation of Large Language Models for Code](https://proceedings.iclr.cc/paper_files/paper/2025/file/94074dd5a072d28ff75a76dabed43767-Paper-Conference.pdf)
- **Coding ability** (constructs) — *measured_by*
  > “Coding: code generation questions from recent Leetcode and AtCoder questions (via LiveCodeBench (Jain et al., 2024))”
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > Extensive evaluations across multiple models and reasoning tasks (AIME-2024, GPQA-Diamond, and LiveCodeBench) demonstrate that STAND reduces inference latency by 60-65% compared to standard autoregressive decoding while maintaining accuracy. (Abstract)
  - [Accelerated Test-Time Scaling with Model-Free Speculative Sampling](https://aclanthology.org/2025.emnlp-main.1558.pdf)

### Associated with
- **JudgeBench** (measurements)
  > LiveCodeBench is a contamination-free dataset for coding tasks, containing over 300 challenging questions sourced from coding contests like LeetCode, AtCoder, and Codeforces. We select this dataset for the Coding category. (Section 3)
  - [JudgeBench: A Benchmark for Evaluating LLM-Based Judges](https://proceedings.iclr.cc/paper_files/paper/2025/file/9e720fce64f91114c49cfd640d821da3-Paper-Conference.pdf)
