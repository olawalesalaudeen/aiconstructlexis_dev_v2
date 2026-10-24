# Omni-MATH
**Type:** Measurement  
**Referenced in:** 10 papers  
**Also known as:** Omini-MATH, OmniMath, Omni-Math  

## State of the Field

**What it is.** Across papers, Omni-MATH is most commonly described as a mathematical reasoning benchmark that covers diverse topics and a broad spectrum of difficulty levels. Several definitions narrow this further to olympiad-style or Olympiad-level challenges, and one description presents it as a universal Olympiad-level benchmark with over 33 sub-domains. Some papers refer to the full resource as 4.4K questions, while others evaluate 500-question samples for efficiency, including a named Omni-MATH-500 subset.

**What it is claimed to measure.** Papers link Omni-MATH to 1 construct and 2 behavioral indicators. The prevailing use is to measure mathematical reasoning, with papers describing it as a common or widely used math reasoning benchmark and using it to assess models' mathematical reasoning in standard suites or on synthetic data. These measurement claims mostly converge on mathematical reasoning, though a smaller line of work also uses it to measure problem solving and complex reasoning question answering.

**Space of uses.** Across papers, Omni-MATH is usually positioned as a challenging benchmark within broader evaluation suites, commonly alongside MATH, GSM8K, AIME, OlympiadBench, and GPQA. Several papers reduce evaluation cost by randomly sampling 500 examples from the full benchmark, and one of them names this subset Omni-MATH-500. A separate use appears in ProcessBench, where data derived from OmniMATH forms one of the test sets for evaluating step-wise error detection.

## Sources

**[OpenMathInstruct-2: Accelerating AI for Math with Massive Open-Source Instruction Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/302ce0673c00aee2cf84bb43d0117553-Paper-Conference.pdf)**
> Omni-MATH is a mathematics benchmark covering a broad spectrum of difficulty levels for evaluating math reasoning models.

**[Revisiting the Test-Time Scaling of o1-like Models: Do they Truly Possess Test-Time Scaling Capabilities?](https://aclanthology.org/2025.acl-long.232.pdf) (as "Omini-MATH")**
> Mathematical reasoning dataset from which 500 randomly sampled questions were used to evaluate model performance efficiently.

**[FastMCTS: A Simple Sampling Strategy for Data Synthesis](https://aclanthology.org/2025.acl-long.1190.pdf) (as "OmniMath")**
> A comprehensive mathematical reasoning benchmark covering diverse topics and difficulty levels, including olympiad-style problems.

**[RBench: Graduate-level Multi-disciplinary Benchmarks for LLM & MLLM Complex Reasoning Evaluation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/guo25r/guo25r.pdf) (as "Omni-Math")**
> A benchmark focused on employing mathematical olympiad challenges to evaluate mathematical reasoning.

## Relationships

### → Omni-MATH
- **Mathematical reasoning** (constructs) — *measured_by*
  > We evaluate our models on a set of common benchmarks that consists of GSM8K (1.3K examples), MATH (5K examples), AMC 2023 (40 examples), AIME 2024 (30 examples), and Omni-MATH (4.4K examples) (Omni-Math, 2024).
  - [OpenMathInstruct-2: Accelerating AI for Math with Massive Open-Source Instruction Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/302ce0673c00aee2cf84bb43d0117553-Paper-Conference.pdf)
- **Problem solving** (behaviors tasks) — *measured_by*
  > We introduce Omni-Math, a universal Olympiad-level mathematical benchmark with over 33 sub-domains and diverse difficulty levels, posing new challenges to the problem solving and complex reasoning capability of LLMs. (Section 1)
  - [Omni-MATH: A Universal Olympiad Level Mathematic Benchmark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f9e1e8b56c7e363985ebeb0e9dd1a85c-Paper-Conference.pdf)
- **Complex reasoning** (constructs) — *measured_by*
  > We introduce Omni-Math, a universal Olympiad-level mathematical benchmark with over 33 sub-domains and diverse difficulty levels, posing new challenges to the problem solving and complex reasoning capability of LLMs. (Section 1)
  - [Omni-MATH: A Universal Olympiad Level Mathematic Benchmark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f9e1e8b56c7e363985ebeb0e9dd1a85c-Paper-Conference.pdf)
