# Code debugging
**Type:** Behavior  
**Referenced in:** 75 papers  
**Also known as:** Bug fixing, Code repair, Debugging, Self-repair, Self-debugging, Runtime debugging, Bug identification, Crash resolution, Program repair, Data science code debugging, Code correction, Noise correction, Code fixing, Debugging capability, Debugging ability, Self-repair capability, Patch generation, Code patch generation, Reflective debugging  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats this behavior as finding and fixing errors in code, most often in a provided snippet, an existing codebase, or the model's own generated program. Many formulations make it interactive and feedback-driven, with revisions based on runtime output, exception messages, failing tests, or execution traces until the code is correct, executes successfully, or resolves the reported issue. A smaller line of work narrows success to producing a patch or diff, making minimal context-preserving edits, or editing a system so that an input no longer triggers a crash.

**Variants.** Most variants stay within software repair and use nearby names such as code repair, bug fixing, self-debugging, self-repair, and program repair. Papers vary the scope from function, class, or file-level edits to repository-level issue resolution, and some explicitly split bug identification or fault localization from the later fix. Smaller variants specialize the task to runtime debugging, patch generation, data science Python debugging that asks for identifying, localizing, and explaining logical runtime errors, SQL noise correction, visual JavaScript bug fixing, Linux kernel crash resolution, and, in one paper, self-repair as recovery after perturbed internal computation.

**Space of elicitation and scores.** Papers link this behavior to 11 measurement instruments. The most frequently linked are InfiniteBench, HumanEvalFix, SWE-bench, APPS, and Arena-Hard, and additional instruments are also used. Across these papers, the instruments range from long-context benchmark suites and code datasets, to function-level repair tasks with unit tests, repository issue-resolution benchmarks, execution-feedback self-repair settings, and human evaluation of explanations and repaired code.

**What it is taken as evidence of.** Some task descriptions explicitly treat successful repair as evidence of debugging capability or self-repair capability. Among named relationship links, only 1 construct appears, Generation diversity, and one paper reports that code debugging is correlated with it, describing superior performance alongside highly diverse fixes. Outside those capability framings, papers do not make a shared construct claim.

## Sources

**[Reinforcing LLM Agents via Policy Optimization with Action Decomposition](https://proceedings.neurips.cc/paper_files/paper/2024/file/bc09efb501c801ed92e181e26a885c2d-Paper-Conference.pdf)**
> The process of interactively modifying and correcting code based on feedback from a runtime environment to resolve errors and achieve successful execution.

**[CodeMMLU: A Multi-Task Benchmark for Assessing Code Understanding & Reasoning Capabilities of CodeLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/078b4435f5b61a092025fec713084008-Paper-Conference.pdf) (as "Code repair")**
> The observable task of identifying and fixing errors in a provided code snippet to make it correct.

**[SWE-bench Multimodal: Do AI Systems Generalize to Visual Software Domains?](https://proceedings.iclr.cc/paper_files/paper/2025/file/07d6332ae36730707fddddba736d7b6c-Paper-Conference.pdf) (as "Bug fixing")**
> The observable task of identifying and correcting errors or unintended behaviors in a software codebase based on a problem description.

**[WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild](https://proceedings.iclr.cc/paper_files/paper/2025/file/771155abaae744e08576f1f3b4b7ac0d-Paper-Conference.pdf) (as "Debugging")**
> The task of identifying and fixing errors in existing computer code.

**[LiveCodeBench: Holistic and Contamination Free Evaluation of Large Language Models for Code](https://proceedings.iclr.cc/paper_files/paper/2025/file/94074dd5a072d28ff75a76dabed43767-Paper-Conference.pdf) (as "Self-repair")**
> The observable task of fixing an incorrect program after being provided with error feedback, such as an exception message or a failing test case.

**[DSBench: How Far Are Data Science Agents from Becoming Data Science Experts?](https://proceedings.iclr.cc/paper_files/paper/2025/file/50e9ad960ae78b741a6b4fea533f2eaf-Paper-Conference.pdf) (as "Self-debugging")**
> The observable process where a model identifies errors in its own generated code or reasoning and attempts to correct them.

**[AutoML-Agent: A Multi-Agent LLM Framework for Full-Pipeline AutoML](https://raw.githubusercontent.com/mlresearch/v267/main/assets/trirat25a/trirat25a.pdf) (as "Runtime debugging")**
> Diagnosing and fixing issues that arise during code execution.

**[Position: Scaling LLM Agents Requires Asymptotic Analysis with LLM Primitives](https://raw.githubusercontent.com/mlresearch/v267/main/assets/meyerson25a/meyerson25a.pdf) (as "Bug identification")**
> The action of locating and describing a flaw or error within a piece of code.

**[kGym: A Platform and Dataset to Benchmark Large Language Models on Linux Kernel Crash Resolution](https://proceedings.neurips.cc/paper_files/paper/2024/file/8e9ed2a28af7d9085180e3817b2c9a57-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Crash resolution")**
> Editing the kernel so that the reproducer no longer causes a crash within the allotted execution window.

**[Hints-In-Browser: Benchmarking Language Models for Programming Feedback Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/34cc2ded6daba59357134c0b9fb06bfe-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Program repair")**
> Generating a repaired version of a buggy program with minimal edits that preserves the original context and style.

**[Why Stop at One Error? Benchmarking LLMs as Data Science Code Debuggers for Multi-Hop and Multi-Bug Errors](https://aclanthology.org/2025.emnlp-main.878.pdf) (as "Data science code debugging")**
> The task of identifying, localizing, and explaining logical runtime errors within Python scripts that use data science libraries.

**[TALON: A Multi-Agent Framework for Long-Table Exploration and Question Answering](https://aclanthology.org/2025.emnlp-main.1393.pdf) (as "Code correction")**
> The observable process of identifying an error in a generated code snippet and producing a revised version of the code to fix the error.

**[ROUTE: Robust Multitask Tuning and Collaboration for Text-to-SQL](https://proceedings.iclr.cc/paper_files/paper/2025/file/212b143b5a5d6b88feb0fb1441b9756e-Paper-Conference.pdf) (as "Noise correction")**
> The task of evaluating a given SQL query against a question and database, determining if it is correct, and providing a revised query if it is not.

**[CopySpec: Accelerating LLMs with Speculative Copy-and-Paste](https://aclanthology.org/2025.emnlp-main.1337.pdf) (as "Code fixing")**
> Editing existing code to correct errors such as indentation or syntax issues.

**[SemCoder: Training Code Language Models with Comprehensive Semantics Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/6efcc7fd8efeee29a050a79c843c90e0-Paper-Conference.pdf) (as "Debugging capability")**
> The latent ability to identify, analyze, and correct errors in source code.

**[Trace is the Next AutoDiff: Generative Optimization with Rich Feedback, Execution Traces, and LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/83ba7056bce2c3c3c27e17397cf3e1f0-Paper-Conference.pdf) (as "Debugging ability")**
> The latent capability of a large language model to identify, analyze, and correct errors in source code or computational workflows.

**[LiveCodeBench: Holistic and Contamination Free Evaluation of Large Language Models for Code](https://proceedings.iclr.cc/paper_files/paper/2025/file/94074dd5a072d28ff75a76dabed43767-Paper-Conference.pdf) (as "Self-repair capability")**
> The latent ability to use error feedback to revise an initially flawed program into a correct solution.

**[SWE-bench Multimodal: Do AI Systems Generalize to Visual Software Domains?](https://proceedings.iclr.cc/paper_files/paper/2025/file/07d6332ae36730707fddddba736d7b6c-Paper-Conference.pdf) (as "Patch generation")**
> The observable action of producing a set of code changes (a patch) intended to resolve a software issue.

**[UTBoost: Rigorous Evaluation of Coding Agents on SWE-Bench](https://aclanthology.org/2025.acl-long.189.pdf) (as "Code patch generation")**
> Producing a diff-formatted patch file that specifies additions, deletions, and modifications to source code in order to resolve a software issue.

**[Flow-of-Options: Diversified and Improved LLM Reasoning by Thinking Through Options](https://raw.githubusercontent.com/mlresearch/v267/main/assets/nair25c/nair25c.pdf) (as "Reflective debugging")**
> The process of an LLM agent identifying errors in the code it has generated and attempting to correct them.

## Relationships

### Code debugging →
- **InfiniteBench** (measurements) — *measured_by*
  > Table 2: Performance of single-step reasoning on InfiniteBench (Zhang et al., 2024a). ... Code.Debug
  - [OmniKV: Dynamic Context Selection for Efficient Long-Context LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/da1131a86ac3c70e0b7cae89c3d4df22-Paper-Conference.pdf)
- **HumanEvalFix** (measurements) — *measured_by*
  > HUMANEVALFIX (NL+C!C) Given an incorrect code function with a subtle bug and accompanying unit tests, the model is tasked to ﬁx the function. (Section 3)
  - [OctoPack: Instruction Tuning Code Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1ec299a5229034141e58aeded0d0b9de-Paper-Conference.pdf)
- **APPS** (measurements) — *measured_by*
  > We evaluate our NL-DEBUGGING framework on two widely used code datasets: APPS (Hendrycks et al., 2021) and Codeforces (Team, 2024). (Section 4.1.1)
  - [NL-Debugging: Exploiting Natural Language as an Intermediate Representation for Code Debugging](https://aclanthology.org/2025.emnlp-main.80.pdf)
- **EvalPlus** (measurements) — *measured_by*
  > We evaluate their static debug and self-refine capabilities on EvalPlus with five iterations.
  - [SemCoder: Training Code Language Models with Comprehensive Semantics Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/6efcc7fd8efeee29a050a79c843c90e0-Paper-Conference.pdf)
- **Arena-Hard** (measurements) — *measured_by*
  > Conversely, ArenaHard, sampling 500 tasks from ChatbotArena, displays an excessive concentration on coding and debugging tasks, accounting for over 57% of its content. (Section 1)
  - [WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild](https://proceedings.iclr.cc/paper_files/paper/2025/file/771155abaae744e08576f1f3b4b7ac0d-Paper-Conference.pdf)
- **LiveCodeBench** (measurements) — *measured_by*
  > "we evaluate the execution-feedback-based multi-turn coding using the self-repair scenario"
  - [LiveCodeBench: Holistic and Contamination Free Evaluation of Large Language Models for Code](https://proceedings.iclr.cc/paper_files/paper/2025/file/94074dd5a072d28ff75a76dabed43767-Paper-Conference.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > To measure the quality of generated contents from DCE-LLM, we conduct a human evaluation of both explanations and repaired code.
  - [DCE-LLM: Dead Code Elimination with Large Language Models](https://aclanthology.org/2025.naacl-long.501.pdf)
- **Generation diversity** (constructs) — *correlates*
  > The superior performance of AuPairs produced by Gemini-1.5-Pro corresponds to highly diverse fixes (Fig. 8, top right). (Section 3.7. High Code-specific Diversity)
  - [AuPair: Golden Example Pairs for Code Repair](https://raw.githubusercontent.com/mlresearch/v267/main/assets/mavalankar25a/mavalankar25a.pdf)
- **Codeforces** (measurements) — *measured_by*
  > We evaluate our NL-DEBUGGING framework on two widely used code datasets: APPS (Hendrycks et al., 2021) and Codeforces (Team, 2024). (Section 4.1.1)
  - [NL-Debugging: Exploiting Natural Language as an Intermediate Representation for Code Debugging](https://aclanthology.org/2025.emnlp-main.80.pdf)
- **Defects4J** (measurements) — *measured_by*
  > To assess HLP’s impact on practical applications beyond code completion, we evaluate the performance of code repair using Defects4J (Just et al., 2014). (Section 4.3)
  - [Planning-Aware Code Infilling via Horizon-Length Prediction](https://aclanthology.org/2025.emnlp-main.1672.pdf)
- **HumanEval** (measurements) — *measured_by*
  > In this paper, we analyze Code Llama, GPT-3.5 and GPT-4’s ability to perform self-repair on problems taken from HumanEval and APPS.
  - [Is Self-Repair a Silver Bullet for Code Generation?](https://proceedings.iclr.cc/paper_files/paper/2024/file/9ddc141bdbf9d1db510cefff56c586ad-Paper-Conference.pdf)

### → Code debugging
- **Self-correction** (behaviors tasks) — *causes*
  > “SELF-DEBUGGING can teach the LLM to perform rubber duck debugging”
  - [Teaching Large Language Models to Self-Debug](https://proceedings.iclr.cc/paper_files/paper/2024/file/2460396f2d0d421885997dd1612ac56b-Paper-Conference.pdf)
- **Feedback generation** (behaviors tasks) — *causes*
  > Finally, this feedback is used by the code model to repair the program (5). (Figure 1 caption)
  - [Is Self-Repair a Silver Bullet for Code Generation?](https://proceedings.iclr.cc/paper_files/paper/2024/file/9ddc141bdbf9d1db510cefff56c586ad-Paper-Conference.pdf)
- **Textual reasoning** (behaviors tasks) — *causes*
  > Our findings highlight the potential of natural language reasoning to advance automated code debugging and address complex programming challenges. (Abstract)
  - [NL-Debugging: Exploiting Natural Language as an Intermediate Representation for Code Debugging](https://aclanthology.org/2025.emnlp-main.80.pdf)

### Associated with
- **Hint generation** (behaviors tasks)
  > While this fixed program Pr is not directly used to provide feedback to learners, it is typically used as an intermediate step when generating hints. (Section 3.1)
  - [Hints-In-Browser: Benchmarking Language Models for Programming Feedback Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/34cc2ded6daba59357134c0b9fb06bfe-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Coding** (behaviors tasks)
  > Coding: The ability to write, synthesize, document, debug, and review code across various programming languages. (Section 2.1)
  - [Law of the Weakest Link: Cross Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/63ea6a7d01a34a2c7334dcf1a2c3b03d-Paper-Conference.pdf)
- **Fault localization** (behaviors tasks)
  > Software debugging is a time-consuming endeavor involving a series of steps, such as fault localization and patch generation, each requiring thorough analysis and a deep understanding of the underlying logic.
  - [UniDebugger: Hierarchical Multi-Agent Framework for Unified Software Debugging](https://aclanthology.org/2025.emnlp-main.921.pdf)
- **Code generation** (behaviors tasks)
  > we model self-repair as consisting of four stages: code generation, code execution, feedback generation, and code repair.
  - [Is Self-Repair a Silver Bullet for Code Generation?](https://proceedings.iclr.cc/paper_files/paper/2024/file/9ddc141bdbf9d1db510cefff56c586ad-Paper-Conference.pdf)
