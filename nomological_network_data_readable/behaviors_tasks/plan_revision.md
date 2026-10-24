# Plan revision
**Type:** Behavior  
**Referenced in:** 10 papers  
**Also known as:** Course correction, Task-driven re-planning, Dynamic replanning, Plan revision capability, Adaptive replanning, Strategy revision, Counterfactual replanning, Plan refinement, Plan correction  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats this behavior as revising an existing plan, action sequence, preference, or strategy after new information arrives or conditions change. Most formulations center on feedback from the environment, task progress, user requirements, or other agents, and several make the revision concrete as adding, removing, or changing actions, or updating the plan after each executor step. A smaller line narrows the behavior to rewriting steps to satisfy a new condition, or adjusting specific sub-tasks rather than re-planning an entire workflow, and some travel work also expects the revised plan to remain coherent and feasible.

**Variants.** Variants span travel planning with revision cases across dining, transportation, budget, and weather-dependent activities, multi-agent dialogue where agents adjust just before action selection, and execution settings where plans are updated from current state, task progress, or validator feedback. Papers use several names for these variants, ranging from course correction and strategy revision to task-driven, dynamic, and counterfactual replanning.

**Space of elicitation and scores.** No measurement instrument is linked to it. Papers instead elicit it through scenario designs that introduce changed user needs or weather, new information from other agents, step-by-step execution feedback, or verification feedback, and some operationalizations make the revision observable through explicit action edits, such as adding, removing, or changing steps. Some travel work also treats coherence and feasibility under changed constraints as the target of a successful revision.

**What it is taken as evidence of.** The only linked construct is Adaptability. One paper claims a causal relationship from plan revision to Adaptability, describing task-driven re-planning as part of a system meant to enhance adaptability by adjusting to real-time feedback and exceptions. No other construct is linked here.

## Sources

**[RETAIL: Towards Real-world Travel Planning for Large Language Models](https://aclanthology.org/2025.emnlp-main.752.pdf)**
> Modifying an existing travel plan in response to changes in user preferences or environmental conditions such as weather or transportation disruptions.

**[The Hidden Strength of Disagreement: Unraveling the Consensus-Diversity Tradeoff in Adaptive Multi-Agent Systems](https://aclanthology.org/2025.emnlp-main.772.pdf) (as "Course correction")**
> Agents revise an initial preference or plan after hearing other agents or receiving new information.

**[OSCAR: Operating System Control via State-Aware Reasoning and Re-Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/b2077e6d66da612fcb701589efa9ce88-Paper-Conference.pdf) (as "Task-driven re-planning")**
> An adaptive planning strategy where an agent adjusts specific sub-tasks within a larger workflow in response to feedback, rather than re-planning the entire sequence from scratch.

**[Plan-and-Act: Improving Planning of Agents for Long-Horizon Tasks](https://raw.githubusercontent.com/mlresearch/v267/main/assets/erdogan25a/erdogan25a.pdf) (as "Dynamic replanning")**
> The capacity of an agent to revise its high-level plan in response to real-time environmental feedback and unexpected changes during task execution.

**[RETAIL: Towards Real-world Travel Planning for Large Language Models](https://aclanthology.org/2025.emnlp-main.752.pdf) (as "Plan revision capability")**
> The latent ability of a model to dynamically adjust travel plans in response to changing user needs or external conditions, maintaining coherence and feasibility.

**[UICOMPASS: UI Map Guided Mobile Task Automation via Adaptive Action Generation](https://aclanthology.org/2025.emnlp-main.1346.pdf) (as "Adaptive replanning")**
> The dynamic modification of a pre-generated task plan in response to real-time application states and task progress.

**[Noise, Adaptation, and Strategy: Assessing LLM Fidelity in Decision-Making](https://aclanthology.org/2025.emnlp-main.391.pdf) (as "Strategy revision")**
> The observable pattern of altering a decision-making approach over repeated rounds based on feedback from previous outcomes.

**[PlaSma: Procedural Knowledge Models for Language-based Planning and Re-Planning](https://proceedings.iclr.cc/paper_files/paper/2024/file/16bce4070c4e23434451b180348e3814-Paper-Conference.pdf) (as "Counterfactual replanning")**
> Rewriting an existing plan to satisfy a new condition or constraint, requiring revision of step sequences while preserving goal alignment.

**[Hephaestus: Improving Fundamental Agent Capabilities of Large Language Models through Continual Pre-Training](https://aclanthology.org/2025.naacl-long.308.pdf) (as "Plan refinement")**
> Adjusting or revising a current action sequence based on environmental feedback to improve task performance.

**[Hierarchical Planning for Complex Tasks with Knowledge Graph-RAG and Symbolic Verification](https://raw.githubusercontent.com/mlresearch/v267/main/assets/petruzzellis25a/petruzzellis25a.pdf) (as "Plan correction")**
> The observable behavior of modifying a generated plan by adding, removing, or changing actions in response to feedback from a verification process.

## Relationships

### Plan revision →
- **Adaptability** (constructs) — *causes*
  > To enhance stability and adaptability, OSCAR operates as a state machine, equipped with error-handling mechanisms and task-driven re-planning, allowing it to efficiently adjust to real-time feedback and exceptions. (ABSTRACT)
  - [OSCAR: Operating System Control via State-Aware Reasoning and Re-Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/b2077e6d66da612fcb701589efa9ce88-Paper-Conference.pdf)
