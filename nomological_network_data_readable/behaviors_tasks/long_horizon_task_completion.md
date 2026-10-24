# Long-horizon task completion
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Composite task solving, Sequential task completion  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage describes this behavior as completing a multi-stage, long-horizon sequence of distinct subtasks in a required order. Definitions differ mainly in how they specify the sequence: some speak of composite tasks with several goals over time, while others define sequential completion as carrying out up to five language instructions consecutively, with later progress depending on earlier success. Success is usually framed as completing the whole ordered chain, and one paper operationalizes it as successful completion of six distinct tasks, each with at least five subtasks.

**Variants.** Papers use several closely related names, including long-horizon task completion, composite task solving, and sequential task completion. The settings vary from language-instructed robot sequences to composite game tasks built around ordered goals such as reaching locations, collecting items, surviving to a final objective, finding an entrance, and returning before continuing to the next goal.

**Space of elicitation and scores.** No measurement instrument is linked to it. When papers score the behavior directly, they usually use whole-sequence success, for example "Task Completed in a Sequence (Success Rate)" or successful completion of long-horizon tasks composed of at least five subtasks.

**What it is taken as evidence of.** The recorded links do not present this behavior as evidence of a construct. Instead, papers treat it as an outcome: the linked constructs are Planning and Compositionality, each claimed to have a causal relationship to it, and a separate paper also claims a causal relationship from Self-reflection to it, arguing that failure of any sub-goal can halt later ones and that reflection is used to identify and rectify errors.

## Sources

**[VLMimic: Vision Language Models are Visual Imitation Learner for Fine-grained Actions](https://proceedings.neurips.cc/paper_files/paper/2024/file/8e6f3d53b2bef98fce17e699557f5f11-Paper-Conference.pdf)**
> The observable execution of a complex task that requires completing a sequence of multiple, distinct subtasks in a specific order.

**[MaestroMotif: Skill Design from Artificial Intelligence Feedback](https://proceedings.iclr.cc/paper_files/paper/2025/file/2dc5a0faac8102fd47363795f71126ee-Paper-Conference.pdf) (as "Composite task solving")**
> Completing multi-stage tasks that require sequencing several goals over time, such as reaching locations, collecting items, and surviving until a final objective is met.

**[Vision-Language Foundation Models as Effective Robot Imitators](https://proceedings.iclr.cc/paper_files/paper/2024/file/71639c317fb0bf398835627b4418693e-Paper-Conference.pdf) (as "Sequential task completion")**
> Successfully executing a chain of up to five language-instructed tasks in sequence, where progression depends on prior task success.

## Relationships

### → Long-horizon task completion
- **Planning** (constructs) — *causes*
  > Relevant studies indicate that the human brain is essential for planning and reflection, while the cerebellum controls low-level actions, both crucial for complex tasks [40, 41]. (Section 2.2)
  - [Optimus-1: Hybrid Multimodal Memory Empowered Agents Excel in Long-Horizon Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/5949a8750a110ce1f0631b1776c500a2-Paper-Conference.pdf)
- **Self-reflection** (behaviors tasks) — *causes*
  > The failure of any sub-goal halts the execution of subsequent ones, leading to overall task failure. Therefore, a reflection module is essential to identify and rectify errors promptly. (Section 2.2)
  - [Optimus-1: Hybrid Multimodal Memory Empowered Agents Excel in Long-Horizon Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/5949a8750a110ce1f0631b1776c500a2-Paper-Conference.pdf)
