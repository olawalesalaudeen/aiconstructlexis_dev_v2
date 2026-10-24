# Majority voting
**Type:** Measurement  
**Referenced in:** 17 papers  

## State of the Field

The dominant usage of Majority voting in the provided literature is as an evaluation heuristic or baseline method for selecting a final answer from multiple model-generated solutions. This procedure involves generating several candidate answers for a problem and choosing the one that occurs most frequently, as one paper describes: 'one can sample many proposed solutions, extract the final answer from each, and select the most common answer' (Don't Trust: Verify -- Grounding LLM Quantitative Reasoning with Autoformalization). It is frequently used as a point of comparison and is referred to as a 'strong baseline' in some work. A smaller set of studies uses the term differently, to describe an aggregation method where multiple review models vote for the better of two responses. In its more common form, Majority voting is explicitly equated with 'Self-Consistency Decoding' and is noted as being applicable to Chain-of-thought reasoning. The method is also categorized as a 'test-time compute scaling procedure' and is studied alongside other selection heuristics like Best-of-N.

## Sources

**[BatchPrompt: Accomplish more with less](https://proceedings.iclr.cc/paper_files/paper/2024/file/5d8c01de2dc698c54201c1c7d0b86974-Paper-Conference.pdf)**
> An evaluation heuristic where multiple solutions are generated for a problem, and the most frequently occurring final answer among them is selected as the correct one.

## Relationships

### Associated with
- **Self-consistency** (measurements)
  > self-consistency [53], which runs majority voting on multiple responses from the first turn as a baseline to compare to our sequential strategy. (Section 5)
  - [Recursive Introspection: Teaching Language Model Agents How to Self-Improve](https://proceedings.neurips.cc/paper_files/paper/2024/file/639d992f819c2b40387d4d5170b8ffd7-Paper-Conference.pdf)
- **Chain of thought** (behaviors tasks)
  > In general, majority voting is applicable if the generation y = (c, a) can be decomposed into a chain-of-thought c and a final answer a. (Section 2)
  - [Optimizing Language Models for Inference Time Objectives using Reinforcement Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tang25o/tang25o.pdf)
- **Best-of-n sampling** (measurements)
  > “From these candidates, we can select the best answer using various strategies, including majority voting”
  - [ZebraLogic: On the Scaling Limits of LLMs for Logical Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lin25i/lin25i.pdf)
