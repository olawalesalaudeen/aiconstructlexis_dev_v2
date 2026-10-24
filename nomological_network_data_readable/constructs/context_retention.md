# Context retention
**Type:** Construct  
**Referenced in:** 5 papers  
**Also known as:** Information retention, Sustained context management, Memory retention  

## State of the Field

**Definition agreement:** Consensus. Most papers define context retention as a model's ability to keep and correctly use relevant information or instructions across long contexts, long generations, or multiple conversational turns. A few papers use the term for preserving knowledge after unlearning or from stored memories, but these are outliers rather than a substantial competing definition.

**Space of definitions.** Across papers, the prevailing usage treats context retention as maintaining, accessing, and using relevant information or instructions over long contexts, multiple turns, or long sequences of generation. Most definitions differ mainly by setting, long-context fact access, conversational or task continuity, and long-form generation, and one paper makes the boundary explicit by separating retention from sequential reasoning. A smaller line uses the label memory retention for different targets: preserving untargeted knowledge after unlearning operations, or preserving recorded memories for later recall.

**Space of facets.** Papers do not offer a shared formal taxonomy, but they use several near-overlapping names for similar long-context phenomena: information retention, context retention, sustained context management, and memory retention. The clearest internal contrast is between retaining facts or instructions and reasoning over them in sequence, with one paper describing models as able to store and retrieve large amounts of information while remaining constrained in coherent multi-step inference. Other papers situate the construct in multi-turn instruction transfer, later agent actions, and long-form generation, while the minority memory-preservation usages extend the same label to unlearning and recall from recorded memories.

**Space of measurement.** The recorded measurement space is narrow: papers link context retention to 1 measurement instrument and 2 behavioral indicators. BFCL is the only direct instrument, a benchmark or leaderboard whose multi-turn and long-context settings assess sustained context management and whether models maintain accuracy over later queries or function call results. The linked behavioral indicators are GUI automation and instruction following, but the available evidence treats them as downstream behaviors rather than direct measures. This operationalization lines up with the dominant multi-turn and long-context definitions more than with the minority uses about unlearning or recorded memories.

**Links.** Recorded links are causal rather than correlational or generic. One paper claims a causal relationship from context retention to coherence and instruction following, stating that memory retention issues often lead to loss of coherence and adherence to task instructions. Another paper claims a causal relationship from context retention to GUI automation, describing agents that lose context during long, multi-step tasks or app transitions and therefore produce incomplete task execution.

## Sources

**[seqBench: A Tunable Benchmark to Quantify Sequential Reasoning Limits of LLMs](https://aclanthology.org/2025.emnlp-main.1714.pdf) (as "Information retention")**
> The capacity to store and access relevant facts within a long context, distinct from the ability to reason over them in sequence.

**[LoCt-Instruct: An Automatic Pipeline for Constructing Datasets of Logical Continuous Instructions](https://aclanthology.org/2025.emnlp-main.1734.pdf)**
> The ability to maintain and utilize information presented over long and complex contexts or across multiple conversational turns.

**[The Berkeley Function Calling Leaderboard (BFCL): From Tool Use to Agentic Evaluation of Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/patil25a/patil25a.pdf) (as "Sustained context management")**
> The ability to maintain relevant conversational or task context across multiple turns and use it correctly in later actions.

**[LongGenBench: Benchmarking Long-Form Generation in Long Context LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/141304a37d59ec7f116f3535f1b74bde-Paper-Conference.pdf) (as "Memory retention")**
> The model's ability to maintain and access information and instructions over the course of generating a long sequence of text.

## Relationships

### Context retention →
- **Coherence** (constructs) — *causes*
  > This highlights the memory retention issue in long-context models, which often leads to a loss of coherence and adherence to task instructions. (Section 3.2)
  - [LongGenBench: Benchmarking Long-Form Generation in Long Context LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/141304a37d59ec7f116f3535f1b74bde-Paper-Conference.pdf)
- **Instruction following** (behaviors tasks) — *causes*
  > This highlights the memory retention issue in long-context models, which often leads to a loss of coherence and adherence to task instructions. (Section 3.2)
  - [LongGenBench: Benchmarking Long-Form Generation in Long Context LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/141304a37d59ec7f116f3535f1b74bde-Paper-Conference.pdf)
- **Task completion** (behaviors tasks) — *causes*
  > Memory retention mechanisms can be improved as well, especially for handling long, multi-step tasks that span multiple apps. Current agents often lose context during complex tasks or app transitions, which leads to incomplete task execution.
  - [SPA-BENCH: A COMPREHENSIVE BENCHMARK FOR SMARTPHONE AGENT EVALUATION](https://proceedings.iclr.cc/paper_files/paper/2025/file/9a75f4dd9679aa4ff80a4e6f0a1dc700-Paper-Conference.pdf)
