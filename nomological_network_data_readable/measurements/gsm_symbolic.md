# GSM-Symbolic
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** GSM-symbolic  

## State of the Field

**What it is.** Across papers, it is described as a benchmark for symbolic math word problems. One description presents it as a dataset where names and numerical values are replaced with symbolic variables, so models must generate correct symbolic expression solutions; another presents it as an enhanced benchmark built from symbolic templates of GSM8K questions, able to generate diverse variants for more controllable and reliable evaluation.

**What it is claimed to measure.** Papers use it to measure 1 construct, Mathematical reasoning, and 1 behavioral indicator, Mathematical problem solving. The reported targets are concentrated rather than spread across many outcomes: one paper says it provides more reliable metrics for measuring models' reasoning capabilities, and another uses it to assess mathematical reasoning skills through correct symbolic expression generation.

**Space of uses.** No measurement instrument is linked to it in the recorded relationships. In use, one paper places it among "challenging symbolic reasoning benchmarks" alongside FOLIO and uses it as an evaluation benchmark for CRANE, while another positions it as an improved benchmark that generates diverse question variants from symbolic templates.

## Sources

**[CRANE: Reasoning with constrained LLM generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/banerjee25a/banerjee25a.pdf) (as "GSM-symbolic")**
> A benchmark dataset of math word problems where names and numerical values are replaced with symbolic variables, used to assess mathematical reasoning by requiring the generation of correct symbolic expressions.

**[GSM-Symbolic: Understanding the Limitations of Mathematical Reasoning in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ec2e7a896f8250986b3907f57621ce94-Paper-Conference.pdf)**
> An enhanced benchmark created from symbolic templates of GSM8K questions, allowing for the generation of diverse question variants to enable more controllable and reliable evaluations.

## Relationships

### → GSM-Symbolic
- **Mathematical reasoning** (constructs) — *measured_by*
  > GSM-Symbolic enables more controllable evaluations, providing key insights and more reliable metrics for measuring the reasoning capabilities of models. (Abstract)
  - [GSM-Symbolic: Understanding the Limitations of Mathematical Reasoning in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ec2e7a896f8250986b3907f57621ce94-Paper-Conference.pdf)
- **Mathematical problem solving** (behaviors tasks) — *measured_by*
  > We evaluate CRANE on GSM-Symbolic (Mirzadeh et al., 2024), a dataset consisting of math word problems designed to assess LLMs’ mathematical reasoning skills... the LLMs are tasked with generating correct symbolic expression solutions.
  - [CRANE: Reasoning with constrained LLM generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/banerjee25a/banerjee25a.pdf)
