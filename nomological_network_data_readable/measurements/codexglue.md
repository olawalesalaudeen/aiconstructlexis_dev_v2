# CodeXGLUE
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** CodeXGlue  

## State of the Field

**What it is.** Across the surveyed papers, CodeXGLUE is most commonly treated as a benchmark for code tasks, but its scope is described in more than one way. Some authors present it narrowly as a code-to-text benchmark for evaluating natural-language explanations of code snippets, where the task is to generate a natural language explanation from a code snippet. Others describe it more broadly as a benchmark suite for code intelligence, including code defect detection in C, or as a public benchmark for programming language models with single-file code completion datasets such as PY150 and Github Java Corpus.

**What it is claimed to measure.** Papers link CodeXGLUE to 2 behavioral indicators and no constructs. The prevailing recorded use is to measure vulnerability identification, through the CodeXGLUE code defect detection task in C, which papers describe as a binary defect detection setting with a label for whether code is insecure and may attack software systems. A smaller usage links it to code summarization, with papers reporting that they use the CodeXGLUE benchmark for that task.

**Space of uses.** No other measurement instrument is linked to it. Papers use it directly as a benchmark, including 3-shot evaluation in code-to-text settings and as the benchmark chosen for several tasks within a study. Another paper positions public benchmarks like CodeXGLUE as evaluating models in single-file contexts.

## Sources

**[LLM Augmented LLMs: Expanding Capabilities through Composition](https://proceedings.iclr.cc/paper_files/paper/2024/file/008a16ead32f932b711788c276890456-Paper-Conference.pdf) (as "CodeXGlue")**
> CodeXGlue is a code-to-text benchmark used here to evaluate natural-language explanation of code snippets.

**[CODE REPRESENTATION LEARNING AT SCALE](https://proceedings.iclr.cc/paper_files/paper/2024/file/cfbba5249393100ada0bfb37557d2fd9-Paper-Conference.pdf)**
> A benchmark suite for code intelligence that includes the task of code defect detection in the C programming language.

## Relationships

### → CodeXGLUE
- **Vulnerability identification** (behaviors tasks) — *measured_by*
  > Code Defect detection is a benchmark in C from CodeXGLUE (Lu et al., 2021), with a binary label indicating whether a code is insecure and may attack software systems.
  - [CODE REPRESENTATION LEARNING AT SCALE](https://proceedings.iclr.cc/paper_files/paper/2024/file/cfbba5249393100ada0bfb37557d2fd9-Paper-Conference.pdf)
- **Code summarization** (behaviors tasks) — *measured_by*
  > for the other four tasks, we use the CodeXGLUE (Lu et al., 2021) benchmark. Among these tasks’ data, we downsampled the original data of code summarization and clone detection due to computation constraints... (Section 4.1.2)
  - [GALLa: Graph Aligned Large Language Models for Improved Source Code Understanding](https://aclanthology.org/2025.acl-long.676.pdf)
