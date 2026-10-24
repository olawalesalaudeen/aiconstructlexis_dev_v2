# Meta-reasoning
**Type:** Construct  
**Referenced in:** 7 papers  
**Also known as:** Strategy selection  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the papers, the prevailing usage treats meta-reasoning as reasoning about how to reason, with emphasis on selecting and shaping a problem-solving strategy before answering. One paper describes this process as using prompts to "select, adapt, and implement an actionable reasoning structure." A smaller line of work narrows the construct to strategy selection, defined as dynamically choosing between approaches such as text-based reasoning and tool-augmented execution based on the problem.

**Space of facets.** Papers organize the construct around reasoning procedures before an answer is produced. In the broader framing, its facets include uncovering an "intrinsic reasoning structure" and then selecting, adapting, and implementing that structure; in the narrower framing, it appears as choosing between alternative strategies, including text-based reasoning and tool use. This leaves a broad usage of meta-reasoning alongside a narrower strategy-selection usage for part of the same process space.

**Space of measurement.** Operationalization is benchmark-based: meta-reasoning is linked to two measurement instruments, MR-Ben and MR-GSM8K, and to no behavioral indicators. MR-Ben is described as a process-based benchmark that asks language models to locate and analyze potential errors in automatically generated reasoning steps, while MR-GSM8K is introduced as a dedicated benchmark together with the MR-Score metric. These papers measure the construct only with benchmarks, with no linked human evaluation, LLM-as-a-judge, probe, or analysis measure.

**Links.** These papers relate meta-reasoning to System 2 thinking. They describe the meta-reasoning paradigm as especially suited to "system-2" slow thinking and as involving careful examination of assumptions, conditions, calculations, and logic to identify mistakes. Beyond that related link, the papers do not report causal or correlational links for this construct.

## Sources

**[SELF-DISCOVER: Large Language Models Self-Compose Reasoning Structures](https://proceedings.neurips.cc/paper_files/paper/2024/file/e41efb03e20ca3c231940a3c6917ef6f-Paper-Conference.pdf)**
> The ability to reason about how to reason, including selecting and shaping problem-solving strategies before producing an answer.

**[Agentic-R1: Distilled Dual-Strategy Reasoning](https://aclanthology.org/2025.emnlp-main.604.pdf) (as "Strategy selection")**
> The model's capacity to dynamically choose between different problem-solving approaches—such as text-based reasoning or tool-augmented execution—based on the nature of the input problem.

## Relationships

### Meta-reasoning →
- **MR-Ben** (measurements) — *measured_by*
  > To address this, we present a process-based benchmark MR-Ben that demands a meta-reasoning skill, where LMs are asked to locate and analyse potential errors in automatically generated reasoning steps. (Abstract).
  - [MR-Ben: A Meta-Reasoning Benchmark for Evaluating System-2 Thinking in LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/d81cb1f4dc6e13aeb45553f80b3d6837-Paper-Conference.pdf)
- **MR-GSM8K** (measurements) — *measured_by*
  > Following this design principle, we have developed a new benchmark named Meta-Reasoning-GSM8K (MR-GSM8K) and proposed a novel metric called MR-Score. (Section 1)
  - [MR-GSM8K: A Meta-Reasoning Benchmark for Large Language Model Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/fc0b0e6ac2da44d5839b13f90625b357-Paper-Conference.pdf)

### Associated with
- **System 2 thinking** (constructs)
  > Our meta-reasoning paradigm is especially suited for system-2 slow thinking, mirroring the human cognitive process of carefully examining assumptions, conditions, calculations, and logic to identify mistakes. (Abstract).
  - [MR-Ben: A Meta-Reasoning Benchmark for Evaluating System-2 Thinking in LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/d81cb1f4dc6e13aeb45553f80b3d6837-Paper-Conference.pdf)
