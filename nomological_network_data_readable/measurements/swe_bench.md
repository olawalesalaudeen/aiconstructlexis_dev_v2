# SWE-bench
**Type:** Measurement  
**Referenced in:** 28 papers  
**Also known as:** SWE-BENCH, SWE-Bench, SWEBench  

## State of the Field

**What it is.** Most descriptions treat it as a benchmark, often a benchmark dataset, for real-world software engineering or GitHub issue resolution tasks. Papers commonly describe it as containing 2,294 instances from 12 Python repositories, though they variously call those instances GitHub issues, issue-pull request pairs, or tasks derived from pull requests; several descriptions add that systems must edit a repository or generate a patch that resolves the issue and passes unit tests, and one paper names % Resolved (Pass@1) as the metric. A related subset, SWE-bench Lite, is described as a 300-instance sample from the full benchmark, and one paper also describes SWEBench as the source dataset adapted into TESTGENEVAL.

**What it is claimed to measure.** In measurement claims, papers link it to 1 construct and 3 behavioral indicators. The construct link treats it as measuring Software engineering ability, while the behavioral links use it to measure Code debugging, GitHub issue resolution, and Code generation. Overall, the linked uses span a broad software-engineering construct and several task-specific behaviors rather than a single behavioral label.

**Space of uses.** Papers commonly position it as an evaluation benchmark for agents or LLMs, including comparative experiments against popular models and multi-benchmark evaluations alongside CrossCodeEval and EvoCodeBench. Some work places it in broader benchmark suites with WEBARENA, and one testing benchmark is built by adapting SWEBench into TESTGENEVAL. The only explicitly linked instrument is SWE-bench Lite, a related 300-instance subset used for a more self-contained evaluation of functional bug fixes.

## Sources

**[MAGIS: LLM-Based Multi-Agent Framework for GitHub Issue Resolution](https://proceedings.neurips.cc/paper_files/paper/2024/file/5d1f02132ef51602adf07000ca5b6138-Paper-Conference.pdf)**
> A benchmark dataset comprising 2,294 real-world issues from 12 popular Python repositories, designed to evaluate a model's ability to perform GitHub issue resolution.

**[StackEval: Benchmarking LLMs in Coding Assistance](https://proceedings.neurips.cc/paper_files/paper/2024/file/4126a607bbe2836cb6ca0eb45b75618b-Paper-Datasets_and_Benchmarks_Track.pdf) (as "SWE-BENCH")**
> A benchmark for evaluating language models on real-world software engineering tasks, using GitHub issues and pull requests to test code editing capabilities.

**[OpenHands: An Open Platform for AI Software Developers as Generalist Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/a4b6ad6b48850c0c331d1259fc66a69c-Paper-Conference.pdf) (as "SWE-Bench")**
> A benchmark designed to assess an agent's ability to resolve real-world GitHub issues, such as bug reports or feature requests, within a code repository.

**[TestGenEval: A Real World Unit Test Generation and Test Completion Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/26ded5c8ee8ec1bc4caced4e1c9b1584-Paper-Conference.pdf) (as "SWEBench")**
> A benchmark dataset of real-world software engineering tasks from which the code repositories and execution environments for TESTGENEVAL are derived.

## Relationships

### → SWE-bench
- **GitHub issue resolution** (behaviors tasks) — *measured_by*
  > In the experiments, we employ the SWE-bench dataset as the evaluation benchmark because it is the latest dataset specifically designed for evaluating the performance of the GitHub issue resolution. (Section 4.1)
  - [MAGIS: LLM-Based Multi-Agent Framework for GitHub Issue Resolution](https://proceedings.neurips.cc/paper_files/paper/2024/file/5d1f02132ef51602adf07000ca5b6138-Paper-Conference.pdf)
- **Software engineering ability** (constructs) — *measured_by*
  > we perform an evaluation of agents over 15 challenging tasks, including software engineering (e.g., SWE-BENCH) and web browsing (e.g., WEBARENA), among others. (ABSTRACT)
  - [OpenHands: An Open Platform for AI Software Developers as Generalist Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/a4b6ad6b48850c0c331d1259fc66a69c-Paper-Conference.pdf)

### Associated with
- **SWE-bench Lite** (measurements)
  > We conduct our experiments on SWE-Bench Lite, a 300-instance subset sampled from the full SWE-Bench for providing a more self-contained evaluation of functional bug fixes (Jimenez et al., 2024).
  - [Diversity Empowers Intelligence: Integrating Expertise of Software Engineering Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/d7b50b8ac2c781a12f26155f48310d8d-Paper-Conference.pdf)
