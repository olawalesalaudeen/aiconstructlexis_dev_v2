# Multi-step planning
**Type:** Construct  
**Referenced in:** 6 papers  
**Also known as:** Natural planning, Step-by-step planning  

## State of the Field

**Definition agreement:** Consensus. All papers define multi-step planning as goal-directed planning over a sequence of ordered steps, actions, or subgoals rather than a single decision. Some emphasize action selection and execution while others emphasize decomposing the task into intermediate subgoals beforehand, but these are wording and emphasis differences within the same core phenomenon.

**Space of definitions.** Across papers, the prevailing usage describes multi-step planning as forming or selecting an ordered sequence of actions, steps, or subgoals to reach a goal across multiple steps or an extended horizon. Most definitions agree on the ordered, goal-directed sequence, while some stress execution and future outcomes, including plans that receive high reward, and others stress decomposition into intermediate subgoals or reasoning steps before solution generation. Some definitions also label this natural planning or step-by-step planning and frame it as a latent ability to break complex problems into simpler subtasks.

**Space of facets.** Some authors use nearby labels, especially natural planning and step-by-step planning, for the same general idea of ordered subgoals or reasoning steps. One paper explicitly contrasts natural planning with classical AI planning and, in the recorded links, relates it to Task decomposition by defining it as decomposing an input problem into ordered intermediate subgoals. In challenge-oriented usage, it is described alongside pathfinding, logic skills, spatial navigation, rule understanding, and constraint satisfaction.

**Space of measurement.** Operationalization is narrow: papers link the construct to 1 measurement instrument and 2 behavioral indicators. The only named instrument is SPaRC, a spatial pathfinding reasoning challenge, and the evidence says it tests long-term, step-by-step path planning and reveals limitations in multi-step planning; the recorded operationalization centers on performance in an extended-horizon pathfinding and reasoning challenge. The linked behavioral indicators are Complex reasoning question answering and Task decomposition; no human evaluation, LLM-as-a-judge instrument, or probe is linked, and the subgoal-decomposition framing appears through Task decomposition rather than through a separate instrument.

**Links.** One paper claims a causal relationship from multi-step planning to Complex reasoning question answering, stating that planning trajectories improve complex reasoning capabilities. One paper also relates it to Task decomposition by defining natural planning as decomposing an input problem into ordered intermediate subgoals. No correlate links are reported.

## Sources

**[MONA: Myopic Optimization with Non-myopic Approval Can Mitigate Multi-step Reward Hacking](https://raw.githubusercontent.com/mlresearch/v267/main/assets/farquhar25a/farquhar25a.pdf)**
> Selecting a sequence of actions across multiple steps to achieve a goal or manipulate future outcomes.

**[PLAN-TUNING: Post-Training Language Models to Learn Step-by-Step Planning for Complex Problem Solving](https://aclanthology.org/2025.emnlp-main.1087.pdf) (as "Natural planning")**
> The ability to decompose a problem into an ordered sequence of intermediate subgoals that guide solution generation.

## Relationships

### Multi-step planning →
- **SPaRC** (measurements) — *measured_by*
  > Empirically, SPaRC reveals critical limitations in current reasoning models regarding spatial reasoning, rule-based reasoning, multi-step planning, and constraint satisfaction. (Section 5)
  - [SPaRC: A Spatial Pathfinding Reasoning Challenge](https://aclanthology.org/2025.emnlp-main.526.pdf)
- **Complex reasoning** (constructs) — *causes*
  > Our detailed analysis demonstrates how planning trajectories improves complex reasoning capabilities, showing that PLAN-TUNING is an effective strategy for improving task-specific performance of smaller LLMs. (Abstract)
  - [PLAN-TUNING: Post-Training Language Models to Learn Step-by-Step Planning for Complex Problem Solving](https://aclanthology.org/2025.emnlp-main.1087.pdf)

### Associated with
- **Task decomposition** (behaviors tasks)
  > In this work, we formalize natural planning—distinct from classical AI planning (which is not the focus of this work)—as the process of decomposing an input problem x into an ordered sequence of intermediate subgoals that guide its solution. (Section 3.1)
  - [PLAN-TUNING: Post-Training Language Models to Learn Step-by-Step Planning for Complex Problem Solving](https://aclanthology.org/2025.emnlp-main.1087.pdf)
