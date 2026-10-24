# ARC-AGI
**Type:** Measurement  
**Referenced in:** 8 papers  

## State of the Field

**What it is.** Papers describe ARC-AGI as a benchmark of grid-based reasoning tasks in which models infer a transformation rule from example input-output pairs and then produce the correct output for a test input. One description adds that the original dataset consists of 900 reasoning tasks, and a source snippet states that the objective of each task is to discern the rule from the examples and apply it to new input grids.

**What it is claimed to measure.** Papers use ARC-AGI to measure 4 constructs and 1 behavioral indicator. The prevailing usage is reasoning: papers describe ARC as a benchmark designed to challenge AI models' core reasoning capabilities and list ARC-AGI among novel reasoning tasks. Smaller strands report it as measuring abstract reasoning, core knowledge, and generalization, and one paper uses it to measure code generation by treating ARC as a strong testbed for program synthesis.

**Space of uses.** No other measurement instrument is linked to ARC-AGI. Papers position it directly as a benchmark or testbed: one source says it poses a challenge for large language models, and another treats it as a strong testbed for program synthesis because it was designed to resist pattern matching and require core reasoning.

## Sources

**[Product of Experts with LLMs: Boosting Performance on ARC Is a Matter of Perspective](https://raw.githubusercontent.com/mlresearch/v267/main/assets/franzen25a/franzen25a.pdf)**
> Abstraction and Reasoning Corpus (ARC-AGI), a benchmark of grid-based reasoning tasks where models infer a transformation rule from examples and produce the correct output for a test input.

## Relationships

### → ARC-AGI
- **Reasoning** (constructs) — *measured_by*
  > We demonstrate SOAR’s effectiveness on the Abstraction and Reasoning Corpus (ARC), a program synthesis benchmark specifically designed to challenge AI models’ core reasoning capabilities (Chollet, 2019).
  - [Self-Improving Language Models for Evolutionary Program Synthesis: A Case Study on ARC-AGI](https://raw.githubusercontent.com/mlresearch/v267/main/assets/pourcel25a/pourcel25a.pdf)
- **Generalization** (constructs) — *measured_by*
  > The Abstraction and Reasoning Corpus (ARC-AGI), introduced by Chollet (2019) and designed to assess core knowledge and the ability to generalize in AI, exemplifies this difficulty. (Section 1)
  - [Product of Experts with LLMs: Boosting Performance on ARC Is a Matter of Perspective](https://raw.githubusercontent.com/mlresearch/v267/main/assets/franzen25a/franzen25a.pdf)
- **Abstract reasoning** (constructs) — *measured_by*
  > The Abstraction and Reasoning Corpus (ARC-AGI) poses a significant challenge for large language models (LLMs), exposing limitations in their abstract reasoning abilities. (Abstract)
  - [Product of Experts with LLMs: Boosting Performance on ARC Is a Matter of Perspective](https://raw.githubusercontent.com/mlresearch/v267/main/assets/franzen25a/franzen25a.pdf)
- **Core knowledge** (constructs) — *measured_by*
  > The Abstraction and Reasoning Corpus (ARC-AGI), introduced by Chollet (2019) and designed to assess core knowledge and the ability to generalize in AI, exemplifies this difficulty. (Section 1)
  - [Product of Experts with LLMs: Boosting Performance on ARC Is a Matter of Perspective](https://raw.githubusercontent.com/mlresearch/v267/main/assets/franzen25a/franzen25a.pdf)
- **Inductive reasoning** (constructs) — *measured_by*
  > "We verify our pipeline’s effectiveness on the ARC visual inductive reasoning benchmark"
  - [Hypothesis Search: Inductive Reasoning with Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/a934282496e7b907f5d48d49bb4c9d7d-Paper-Conference.pdf)
- **Program synthesis ability** (constructs) — *measured_by*
  > ARC was explicitly designed to resist pattern matching and require core reasoning, making it a strong testbed for program synthesis (Chollet, 2024).
  - [Self-Improving Language Models for Evolutionary Program Synthesis: A Case Study on ARC-AGI](https://raw.githubusercontent.com/mlresearch/v267/main/assets/pourcel25a/pourcel25a.pdf)

### Associated with
- **Compositionality** (constructs)
  > Therefore, we regard ARC tasks as complex compositions of atomic operations for evaluation. (Section 4.2)
  - [Understanding LLMs' Fluid Intelligence Deficiency: An Analysis of the ARC Task](https://aclanthology.org/2025.naacl-long.423.pdf)
