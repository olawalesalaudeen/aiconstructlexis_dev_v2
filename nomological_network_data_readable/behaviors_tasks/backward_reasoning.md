# Backward reasoning
**Type:** Behavior  
**Referenced in:** 4 papers  

## State of the Field

**Space of definitions.** Most commonly, papers treat backward reasoning as working from a provided answer or solution to recover a concealed input. A recurring formulation conceals one of the inputs or masks a numerical value from the original problem and asks the model to infer the missing value from the original answer or solution, described as reasoning backwards to check consistency in the solution process. A smaller line of work frames it as solving a reversed question and generating step-by-step justification back toward the original problem context, so success is described either as computing the missing input or as producing the backward reasoning for the reversed question.

**Variants.** Papers use nearby names such as reversed reasoning and backward question. The main variants differ in what is hidden, an input generally or a numerical value specifically, and in whether the task asks for the recovered value or for a full step-by-step justification while solving the reversed question. Some work studies it alongside intermediate-step questions as part of testing whether a model can trace back through its reasoning pathway.

**Space of elicitation and scores.** No measurement instrument is linked to it. Instead, papers operationalize it directly through task prompts that conceal an input or numerical value and ask the model to infer it from the original answer or solution, or that present a reversed question and ask the model to generate backward reasoning.

**What it is taken as evidence of.** Papers link it to two constructs, and they do not use a single relationship type. One paper claims a causal relationship from Backward reasoning to Mathematical reasoning, citing improvement in mathematical reasoning ability; another reports that Backward reasoning is related to Self-verification ability, using backward reasoning tasks to test whether the model can trace back through its reasoning pathway.

## Sources

**[MR-GSM8K: A Meta-Reasoning Benchmark for Large Language Model Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/fc0b0e6ac2da44d5839b13f90625b357-Paper-Conference.pdf)**
> The observable task of computing a missing input variable in a problem when the final answer is already provided.

## Relationships

### Backward reasoning →
- **Mathematical reasoning** (constructs) — *causes*
  > ...demonstrating the effectiveness of SV and FOBAR augmentation data in improving mathematical reasoning ability. (Section 4.3)
  - [MetaMath: Bootstrap Your Own Mathematical Questions for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c400474e8a36d0812fdee52739288b12-Paper-Conference.pdf)
