# InstruSum
**Type:** Measurement  
**Referenced in:** 3 papers  

## State of the Field

**What it is.** Across the surveyed work, InstruSum is most commonly described as a benchmark dataset for evaluating instruction-controllable summary generation. Definitions describe it as containing articles or a source article, summary requirements expressed as a specific or complex instruction, and model outputs; one description also says it contains human annotations, and another states that it contains 400 samples. A smaller line of work instead frames it as a summarization-focused pairwise comparison benchmark for evaluating instruction-following and content quality in summaries.

**What it is claimed to measure.** Papers link InstruSum to one behavioral indicator, Pointwise scoring, and to no constructs. The reported use is that it measures pointwise scoring of instruction-controllable summarization, so the measurement claims are concentrated on that single behavioral indicator rather than spread across multiple constructs or behaviors.

**Space of uses.** Papers use InstruSum as an evaluation benchmark for instruction-controllable summarization. In one evaluation setup it appears alongside LLMBar, with the two benchmarks described as respectively representing pairwise evaluation of instruction-following and pointwise scoring of instruction-controllable summarization. Beyond that co-use, papers do not link it to another measurement instrument.

## Sources

**[ReIFE: Re-evaluating Instruction-Following Evaluation](https://aclanthology.org/2025.naacl-long.610.pdf)**
> A benchmark dataset for evaluating instruction-controllable summary generation, containing articles, summary requirements, and model outputs.

## Relationships

### → InstruSum
- **Pointwise scoring** (behaviors tasks) — *measured_by*
  > "We evaluate CAMIEVAL on two benchmarks, LLMBar (Zeng et al., 2023) and InstruSum (Liu et al., 2023c), which respectively represent pairwise evaluation of instruction-following and pointwise scoring of instruction controllable summarization."
  - [CAMIEval: Enhancing NLG Evaluation through Multidimensional Comparative Instruction-Following Analysis](https://aclanthology.org/2025.naacl-long.438.pdf)
