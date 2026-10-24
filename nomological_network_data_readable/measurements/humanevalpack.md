# HumanEvalPack
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** HumanEvalSynthesize  

## State of the Field

**What it is.** Papers most commonly describe HumanEvalPack as a code benchmark used to supply prompts for code-domain evaluation. In RM-Bench: Benchmarking Reward Models of Language Models with Subtlety and Style, authors state that prompts for the code domain are sourced from HumanEvalPack. Some authors discuss the HumanEvalSynthesize variant instead, describing it as adapted for instruction-following models, where the task is framed as a natural language instruction to generate a complete program.

**What it is claimed to measure.** Papers use it to measure 1 behavioral indicator, Code generation, and link it to no constructs. The reported measurement claims converge on code generation, including a setup where, given a natural language docstring or comment describing the desired code, the model is tasked to synthesize the correct code.

**Space of uses.** Papers relate it to 1 other instrument, RM-Bench, where it is used as a source of prompts for the code domain or code split. Generative Representational Instruction Tuning uses the HumanEvalSynthesize variant and describes that choice as more adequate for instruction-following models.

## Sources

**[RM-Bench: Benchmarking Reward Models of Language Models with Subtlety and Style](https://proceedings.iclr.cc/paper_files/paper/2025/file/6da1eec80095dc5937f7716db15aca4b-Paper-Conference.pdf)**
> HumanEvalPack is a code benchmark used here as a source of prompts for the code split.

**[Generative Representational Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/70cf215430492f7d34830a24e744b3f1-Paper-Conference.pdf) (as "HumanEvalSynthesize")**
> A variant of the HumanEval benchmark adapted for instruction-following models, where the task is framed as a natural language instruction to generate a complete program.

## Relationships

### → HumanEvalPack
- **Code generation** (behaviors tasks) — *measured_by*
  > HUMANEVALSYNTHESIZE (NL!C) Given a natural language docstring or comment describing the desired code, the model is tasked to synthesize the correct code. (Section 3)
  - [OctoPack: Instruction Tuning Code Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1ec299a5229034141e58aeded0d0b9de-Paper-Conference.pdf)

### Associated with
- **RM-Bench** (measurements)
  > Prompts for the code domain are sourced from HumanEvalPack (Muennighoff et al., 2023), while math prompts are drawn from the MATH benchmark (Hendrycks et al., 2021).
  - [RM-Bench: Benchmarking Reward Models of Language Models with Subtlety and Style](https://proceedings.iclr.cc/paper_files/paper/2025/file/6da1eec80095dc5937f7716db15aca4b-Paper-Conference.pdf)
