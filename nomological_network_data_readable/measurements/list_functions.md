# List Functions
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** List Function, List functions  

## State of the Field

**What it is.** Across the papers, the prevailing description is a dataset or benchmark for list transformation, where a model infers a rule that maps an input list to an output list from examples. Definitions and snippets variously describe the target rule as primitive, compositional, or a general transformation function, and they frame the benchmark as evaluating human and machine concept learning ability and inductive reasoning ability. A smaller line of work presents "List Function" as a Programming by Example task about computable list to list functions using GPL rules. Some descriptions further specify integer-list inputs and outputs, including the possibility of an empty list.

**What it is claimed to measure.** Across the linked work, papers use List Functions to measure inductive reasoning. It is linked to one construct, Inductive reasoning, and to no behavioral indicators or other measurement instruments. The claims converge on that single construct, with papers describing the benchmark as evaluating "inductive reasoning ability in inferring list transform functions" and as one of the "inductive reasoning datasets" used in experiments.

**Space of uses.** Papers most often position it as part of broader benchmark suites rather than in isolation. In the cited evaluations it appears alongside other inductive reasoning datasets, including ARC, 1D-ARC, SyGuS, and ACRE, and one paper also places it next to planning benchmarks when reporting results across task families. Within that usage, it is treated as an inductive reasoning benchmark.

## Sources

**[Hypothesis Search: Inductive Reasoning with Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/a934282496e7b907f5d48d49bb4c9d7d-Paper-Conference.pdf)**
> A dataset designed to evaluate concept learning in humans and machines, which requires identifying a primitive or compositional function that maps an input list to an output list.

**[Unveiling the Magic of Code Reasoning through Hypothesis Decomposition and Amendment](https://proceedings.iclr.cc/paper_files/paper/2025/file/eeffa70bcbbd43f6bd067edebc6595e8-Paper-Conference.pdf) (as "List Function")**
> A Programming by Example (PBE) benchmark task designed to investigate how computable functions map lists to lists using GPL rules.

## Relationships

### → List Functions
- **Inductive reasoning** (constructs) — *measured_by*
  > We conduct experiments on four inductive reasoning datasets: the Abstraction and Reasoning Corpus (ARC), the one-dimensional variant of ARC (1D-ARC), the Syntax-Guided Synthesis (SyGuS) dataset, and the List Functions dataset. (Section 1)
  - [Hypothesis Search: Inductive Reasoning with Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/a934282496e7b907f5d48d49bb4c9d7d-Paper-Conference.pdf)
