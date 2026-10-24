# CodeContests
**Type:** Measurement  
**Referenced in:** 15 papers  
**Also known as:** CodeContests dataset, CodeContest  

## State of the Field

**What it is.** Most commonly, papers treat CodeContests as a benchmark or dataset of challenging competitive programming problems for code generation. Definitions also describe it as a competitive programming dataset in which each problem comes with multiple human-written correct and incorrect solutions, and one line of work further divides the test problems into basic and advanced levels by difficulty tags. Some papers describe the task as generating code from natural language problem statements, sometimes with public test-case descriptions, with evaluation against private test cases, and some studies use subsets rather than the full benchmark.

**What it is claimed to measure.** Across reported relationships, papers link CodeContests to 2 behavioral indicators and 2 constructs. The prevailing use is to measure code generation, and a smaller line of work reports it as measuring coding; these claims are framed through benchmark performance or pass@k evaluation on test problems. Single-paper claims also report that it measures algorithmic reasoning, because competition-level benchmarks "require algorithmic reasoning," and factuality, where generated code is checked against private test cases for execution correctness.

**Space of uses.** Papers usually use CodeContests alongside other code benchmarks, most often APPS, HumanEval, and MBPP, with some studies also pairing it with LiveCode or Leetcode. In these setups it is positioned as one of several evaluation benchmarks for code-generation methods, though some papers use it more specifically as the source distribution for a code generation task or evaluate on selected test subsets and difficulty-based partitions.

## Sources

**[SFS: Smarter Code Space Search improves LLM Inference Scaling](https://proceedings.iclr.cc/paper_files/paper/2025/file/387982dbf23d9975c7fc45813dd3dabc-Paper-Conference.pdf)**
> A benchmark dataset featuring challenging programming problems from code competitions.

**[Generative Monoculture in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5178b2f2d7c44aa390c0777dc77b3f0c-Paper-Conference.pdf) (as "CodeContests dataset")**
> A competitive programming dataset containing problems with multiple human-written correct and incorrect solutions, used as the source distribution (Dsrc) for the code generation task.

**[DebateCoder: Towards Collective Intelligence of LLMs via Test Case Driven LLM Debate for Code Generation](https://aclanthology.org/2025.acl-long.589.pdf) (as "CodeContest")**
> A benchmark dataset for code generation that includes test problems divided into basic and advanced levels based on their difficulty tags.

## Relationships

### → CodeContests
- **Code generation** (behaviors tasks) — *measured_by*
  > “For Dsrc, we chose the CodeContests dataset (Li et al., 2022), a competitive programming problem dataset where each problem comes with multiple correct and incorrect solutions.”
  - [Generative Monoculture in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5178b2f2d7c44aa390c0777dc77b3f0c-Paper-Conference.pdf)
- **Algorithmic reasoning** (constructs) — *measured_by*
  > complex algorithmic reasoning tasks, such as those found in competitive programming benchmarks like CodeContests
  - [What Makes Large Language Models Reason in (Multi-Turn) Code Generation?](https://proceedings.iclr.cc/paper_files/paper/2025/file/63fef0802863f47775c3563e18cbba17-Paper-Conference.pdf)
- **Coding** (behaviors tasks) — *measured_by*
  > For our analysis, we look at seven datasets spanning instruction-following, reasoning, mathematics, and coding: MT-Bench (Zheng et al., 2023), AlpacaEval 2.0 (Li et al., 2023), Arena Hard Auto (Li et al., 2024b), MixEval (Ni et al., 2024), MixEval-Hard, MATH (Hendrycks et al., 2021), and CodeContests (Li et al., 2022). (Section 3.2)
  - [An Architecture Search Framework for Inference-Time Techniques](https://raw.githubusercontent.com/mlresearch/v267/main/assets/saad-falcon25a/saad-falcon25a.pdf)
- **Functional correctness** (constructs) — *measured_by*
  > Generated codes are evaluated against (private) test cases to check the execution correctness (Hendrycks et al., 2021; Chen et al., 2021; Li et al., 2022) (Section 3.1).
  - [CodeChain: Towards Modular Code Generation Through Chain of Self-revisions with Representative Sub-modules](https://proceedings.iclr.cc/paper_files/paper/2024/file/6111371a868af8dcfba0f96ad9e25ae3-Paper-Conference.pdf)
