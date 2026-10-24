# bigcode-evaluation-harness
**Type:** Measurement  
**Referenced in:** 7 papers  
**Also known as:** bigcode-eval-harness, BigCode Harness  

## State of the Field

**What it is.** Across the papers, bigcode-evaluation-harness is most commonly treated as an evaluation framework or harness for running code-generation benchmarks and assessing models on coding tasks. Definitions largely converge on that role, while a smaller variation describes it as a software library, one paper highlights its use for HumanEval because it supports safe code execution, and others mention use with benchmarks such as HumanEval and MBPP and for assessing non-Python versions of APEval.

**What it is claimed to measure.** The measurement claims are narrow rather than spread across many targets: papers use it to measure Code generation, and it is linked to one behavioral indicator and no constructs. In relationship evidence, authors describe using the Bigcode Evaluation Harness as the evaluation tool for coding tasks, with one example reporting Pass@1 and Pass@10.

**Space of uses.** Papers commonly use it alongside Eleuther Harness or lm-evaluation-harness, with those paired with natural language tasks while bigcode-evaluation-harness is used for coding tasks; one paper also says evaluations are run under the same settings with lm-evaluation-harness and bigcode-evaluation-harness. Other uses are more targeted, including serving as the implementation for code-generation benchmark evaluations and assessing non-Python language versions of APEval.

## Sources

**[$\texttt{Model-GLUE}$: Democratized LLM Scaling for A Large Model Zoo in the Wild](https://proceedings.neurips.cc/paper_files/paper/2024/file/180a476f22a52b8ef14f42b2b927afcc-Paper-Datasets_and_Benchmarks_Track.pdf) (as "bigcode-eval-harness")**
> An evaluation framework and software library specifically designed for assessing the performance of code generation models.

**[Enhancing Reasoning Capabilities of LLMs via Principled Synthetic Logic Corpus](https://proceedings.neurips.cc/paper_files/paper/2024/file/8678da90126aa58326b2fc0254b33a8c-Paper-Conference.pdf)**
> A framework used to run code-generation benchmark evaluations.

**[any4: Learned 4-bit Numeric Representation for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/elhoushi25a/elhoushi25a.pdf) (as "BigCode Harness")**
> An evaluation framework specifically designed for assessing the performance of language models on coding tasks.

## Relationships

### → bigcode-evaluation-harness
- **Code generation** (behaviors tasks) — *measured_by*
  > We used the Bigcode Evaluation Harness (Ben Allal et al., 2022) as the evaluation tool, sampling 50 solutions per problem with a temperature of 0.2, and report both Pass@1 and Pass@10.
  - [RaSA: Rank-Sharing Low-Rank Adaptation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b4fd162d3e2d015233486a2e313828a7-Paper-Conference.pdf)
