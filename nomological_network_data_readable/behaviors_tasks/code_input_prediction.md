# Code input prediction
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Input prediction  

## State of the Field

**Space of definitions.** The available definition treats code input prediction as recovering plausible or potential inputs from a program given observed outputs. One paper further describes the task as requiring the LLM to backtrack through the program's execution process to recover the potential inputs.

**Variants.** Papers use the name input prediction for this behavior. In benchmark use, it appears as CruxEval-I, an input-prediction task presented alongside the separate CruxEval-O output-prediction task.

**Space of elicitation and scores.** Papers link it to 1 measurement instrument, CRUXEval. There it is operationalized as CruxEval-I, described as one of the benchmark's code-understanding tasks.

**What it is taken as evidence of.** Papers link it to 1 construct, Abductive code reasoning. One paper treats abductive code reasoning as measured by this behavior, stating that the meta-benchmark can be framed as an input prediction task.

## Sources

**[Unveiling the Magic of Code Reasoning through Hypothesis Decomposition and Amendment](https://proceedings.iclr.cc/paper_files/paper/2025/file/eeffa70bcbbd43f6bd067edebc6595e8-Paper-Conference.pdf) (as "Input prediction")**
> Recovering plausible inputs from a program and observed outputs.

## Relationships

### Code input prediction →
- **CRUXEval** (measurements) — *measured_by*
  > two code-understanding tasks—namely, CruxEval-I (input prediction) and CruxEval-O (output prediction) from CruxEval benchmark [6] (Section 4.1).
  - [Prompt Tuning Strikes Back: Customizing Foundation Models with Low-Rank Prompt Adaptation](https://proceedings.neurips.cc/paper_files/paper/2024/file/548551c07a68c8f0a87d67c6167cedb1-Paper-Conference.pdf)

### Associated with
- **Abductive code reasoning** (constructs)
  > Abductive code reasoning is concretized as input prediction tasks.
  - [Unveiling the Magic of Code Reasoning through Hypothesis Decomposition and Amendment](https://proceedings.iclr.cc/paper_files/paper/2025/file/eeffa70bcbbd43f6bd067edebc6595e8-Paper-Conference.pdf)
