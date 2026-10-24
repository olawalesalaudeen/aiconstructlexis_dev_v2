# APPS
**Type:** Measurement  
**Referenced in:** 31 papers  
**Also known as:** APPs  

## State of the Field

**What it is.** Across papers, APPS is most commonly described as a benchmark or dataset for code generation or program synthesis built from algorithmic or competitive programming problems. The recurring description is that each problem comes with a natural language description and test cases or unit tests, and some definitions add solutions, often Python solutions; several papers also describe it as 10,000 problems split into 5,000 training and 5,000 testing examples across introductory, interview, and competition levels. A smaller line of work uses subsets rather than the full benchmark, such as 500 interview-level problems, 500 sampled test questions, or the competition split of 1000 problems, and some papers refer to it as the Automated Programming Progress Standard.

**What it is claimed to measure.** Papers link APPS to 3 behavioral indicators and 1 construct. The prevailing use is to measure code generation, with papers describing it as evaluating generic code synthesis, program implementation, or coding tasks, often by pass@1 or pass@k and by checking solutions against test cases. Smaller uses treat it as measuring code debugging and neural self-repair, and one paper reports it as measuring factuality by evaluating generated code against private test cases for execution correctness.

**Space of uses.** Papers usually use APPS as part of a broader evaluation suite, often pairing it with HumanEval, MBPP, and CodeContests, and more occasionally with Codeforces or LiveCodeBench. Several papers describe it as a challenging or competition-level benchmark, including evaluations that focus only on the hardest split or on sampled subsets. A smaller line of work draws problems from its training split or fine-tunes models on the dataset.

## Sources

**[$\mathcal{B}$-Coder: Value-Based Deep Reinforcement Learning for Program Synthesis](https://proceedings.iclr.cc/paper_files/paper/2024/file/7e9c2053258b1bdd32ff2654802cd594-Paper-Conference.pdf)**
> Algorithmic Programming Problems benchmark containing natural language problem descriptions and test cases for evaluating code generation systems.

**[Preference Optimization for Reasoning with Pseudo Feedback](https://proceedings.iclr.cc/paper_files/paper/2025/file/31a57804448363bcab777f818f75f5b4-Paper-Conference.pdf) (as "APPs")**
> A programming benchmark used to evaluate code generation across problems of varying difficulty.

## Relationships

### → APPS
- **Code generation** (behaviors tasks) — *measured_by*
  > In line with prior RL-based works (Le et al., 2022; Shojaee et al., 2023; Liu et al., 2023), we evaluate B-Coder on the challenging code contests benchmark APPS (Hendrycks et al., 2021). (Section 5)
  - [$\mathcal{B}$-Coder: Value-Based Deep Reinforcement Learning for Program Synthesis](https://proceedings.iclr.cc/paper_files/paper/2024/file/7e9c2053258b1bdd32ff2654802cd594-Paper-Conference.pdf)
- **Code debugging** (behaviors tasks) — *measured_by*
  > We evaluate our NL-DEBUGGING framework on two widely used code datasets: APPS (Hendrycks et al., 2021) and Codeforces (Team, 2024). (Section 4.1.1)
  - [NL-Debugging: Exploiting Natural Language as an Intermediate Representation for Code Debugging](https://aclanthology.org/2025.emnlp-main.80.pdf)
- **Clarifying question generation** (behaviors tasks) — *measured_by*
  > We evaluate all question-generating strategies on... the more challenging APPS (Hendrycks et al., 2021) benchmark with competition-level coding challenges
  - [Active Task Disambiguation with LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/5e07476b6bd2497e1fbd11b8f0b2de3c-Paper-Conference.pdf)
- **Functional correctness** (constructs) — *measured_by*
  > Generated codes are evaluated against (private) test cases to check the execution correctness (Hendrycks et al., 2021; Chen et al., 2021; Li et al., 2022) (Section 3.1).
  - [CodeChain: Towards Modular Code Generation Through Chain of Self-revisions with Representative Sub-modules](https://proceedings.iclr.cc/paper_files/paper/2024/file/6111371a868af8dcfba0f96ad9e25ae3-Paper-Conference.pdf)

### Associated with
- **Few-shot prompting** (measurements)
  > Task: Few-shot prompting, Prompt Dataset: APPS (Table 4).
  - [DeFT: Decoding with Flash Tree-attention for Efficient Tree-structured LLM Inference](https://proceedings.iclr.cc/paper_files/paper/2025/file/a6df53f082619d02b9fad64a022e5de3-Paper-Conference.pdf)
