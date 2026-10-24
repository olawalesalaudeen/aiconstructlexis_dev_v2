# NL4OPT
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** NL4Opt, NLP4OPT  

## State of the Field

**What it is.** Across the surveyed work, the prevailing usage treats NL4OPT as a benchmark or benchmark dataset for optimization modeling from natural language. Definitions describe it as evaluating a model's ability to construct or extract mathematical or optimization formulations from natural language questions or descriptions, with one description specifying named entity recognition to extract entities and numerical values before formulating the model. A smaller line of work describes it more simply as a dataset from the NL4Opt competition for solving optimization problems stated in natural language, and one paper characterizes it as a curated set of 244 linear programming problems used to evaluate autoformulation systems.

**What it is claimed to measure.** Papers link NL4OPT to one construct, Accuracy, and to no behavioral indicators. In the recorded relationships, Accuracy is measured by NL4OPT, described through "formulation correctness results on four benchmarks containing LPs/MILPs," so the available claims concentrate on accuracy rather than a broader spread of measured targets.

**Space of uses.** The available usage places NL4OPT inside broader benchmark suites. Papers describe evaluating models on NL4OPT alongside MAMO, IndustryOR, OptiBench, and OptMATH-Bench, and another description includes it among real-world optimization and operation task datasets. No measurement instrument is linked to it in the recorded relationships.

## Sources

**[OptiBench Meets ReSocratic: Measure and Improve LLMs for Optimization Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/3deb687c44d3687ace0729e5db3b4efd-Paper-Conference.pdf)**
> A benchmark that evaluates a model's ability to construct mathematical formulations from natural language questions, focusing on named entity recognition to extract entities and numerical values.

**[LLMOPT: Learning to Define and Solve General Optimization Problems from Scratch](https://proceedings.iclr.cc/paper_files/paper/2025/file/fbe6dd68b0cf2b1d43b458d2b8ca31b0-Paper-Conference.pdf) (as "NL4Opt")**
> A dataset from the NL4Opt competition focused on leveraging LLMs to solve optimization problems described in natural language.

**[Autoformulation of Mathematical Optimization Models Using LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/astorga25a/astorga25a.pdf) (as "NLP4OPT")**
> A benchmark dataset consisting of 244 linear programming problems described in natural language, used to evaluate autoformulation systems.
