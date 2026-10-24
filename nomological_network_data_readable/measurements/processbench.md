# ProcessBench
**Type:** Measurement  
**Referenced in:** 7 papers  
**Also known as:** PROCESSBENCH  

## State of the Field

**What it is.** Across the surveyed papers, the prevailing description is a benchmark for mathematical reasoning that provides step-by-step solutions with human annotation of where errors occur. One recurring formulation is that it contains 3,400 test cases or problems, mainly competition- and Olympiad-level math, with annotations by multiple human experts and four subsets, as described in ProcessBench: Identifying Process Errors in Mathematical Reasoning. Other papers describe the same resource more generally as containing human-annotated stepwise labels for mathematical solutions, with emphasis on the earliest or first incorrect step.

**What it is claimed to measure.** Papers most commonly describe ProcessBench as evaluating a model's ability to identify erroneous steps in mathematical reasoning, especially step-level error identification focused on the earliest or first incorrect step. Definitions also frame it as assessing detection of the first incorrect step in LLM-generated mathematical solutions. Papers do not link it to named constructs or behavioral indicators.

**Space of uses.** In the available descriptions, papers use ProcessBench as an evaluation benchmark for step-level error identification in mathematical solutions. For example, Premise-Augmented Reasoning Chains Improve Error Identification in Math reasoning with LLMs says it is used to evaluate a framework on a benchmark with human-annotated stepwise labels. No other measurement instrument is linked to it.

## Sources

**[ProcessBench: Identifying Process Errors in Mathematical Reasoning](https://aclanthology.org/2025.acl-long.50.pdf) (as "PROCESSBENCH")**
> A benchmark consisting of 3,400 test cases with competition- and Olympiad-level math problems, each containing a step-by-step solution with human-annotated error locations, used to assess models' ability to identify the earliest erroneous reasoning step.

**[Premise-Augmented Reasoning Chains Improve Error Identification in Math reasoning with LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/mukherjee25a/mukherjee25a.pdf)**
> A benchmark containing human-annotated stepwise labels for mathematical solutions, used to evaluate step-level error identification with focus on the first incorrect step.
