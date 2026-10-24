# Task learning
**Type:** Construct  
**Referenced in:** 7 papers  
**Also known as:** Task inference  

## State of the Field

**Definition agreement:** Consensus. All papers define task learning as a model's ability to infer or learn a task's input-label mapping or abstract rule from in-context input-output demonstrations. One paper adds that this should involve new mappings not seen in pre-training and on-the-fly generalization rather than retrieval, but this is a narrower emphasis on the same core phenomenon rather than a different construct.

**Space of definitions.** Across the surveyed work, the prevailing usage treats task learning as the model's ability to solve a task from in-context demonstrations by learning or inferring the input-label mapping those examples instantiate. Most definitions stay close to this framing, describing performance that is based solely on demonstrations or the ability to grasp new mappings not seen during pre-training, and contrasting it with simply copying a label or retrieving memorized patterns. A smaller terminological variant uses the name task inference and phrases the same general ability as deducing the abstract rule or underlying task from input-output examples in context.

**Space of facets.** Papers most often position task learning against task recognition: one line describes it as directly learning from demonstrations to deal with the task, while separately tracking task recognition. Another line uses task inference for closely related behavior, describing the model as inferring the task from context rather than merely copying a label, and explicitly relating that ability to meta-learning. The construct is also tied to in-context learning more broadly, where effective in-context learning is described as inferring the underlying task from examples and refining predictions based on that inferred task.

**Space of measurement.** No measurement instrument is linked to task learning. Papers instead operationalize it in task terms, such as solving the target task solely from demonstrations, inferring and applying new input-label mappings from context, or, in one study, treating gains above NON-BIJECTIVE shuffles as indicative of task learning rather than task recognition. It is linked to two behavioral indicators, Catastrophic forgetting and Self-reflection, but those links are recorded as related rather than as explicit measurements.

**Links.** Papers do not record any measured_by or causes link for task learning. One paper reports that task learning correlates with Task recognition, with the performance of the two changing in opposite directions. Other work relates In-context learning to task learning and relates Meta-learning to task learning, and single papers also relate Catastrophic forgetting and Self-reflection to task learning.

## Sources

**[Investigating the Pre-Training Dynamics of In-Context Learning: Task Recognition vs. Task Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/83d349b6eb8125588b5f091e2d47525c-Paper-Conference.pdf)**
> The ability of a language model to learn how to perform a task solely by learning the input-label mapping from the provided in-context demonstrations.

**[Beyond Induction Heads: In-Context Meta Learning Induces Multi-Phase Circuit Emergence](https://raw.githubusercontent.com/mlresearch/v267/main/assets/minegishi25a/minegishi25a.pdf) (as "Task inference")**
> The model's capacity to deduce the abstract rule or mapping (e.g., class-to-label function) from a set of input-output examples provided in context.

## Relationships

### Task learning →
- **Task recognition** (constructs) — *correlates*
  > “the performance of task recognition and task learning changes in the opposite direction”
  - [Investigating the Pre-Training Dynamics of In-Context Learning: Task Recognition vs. Task Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/83d349b6eb8125588b5f091e2d47525c-Paper-Conference.pdf)

### Associated with
- **In-context learning** (constructs)
  > In effective ICL, the model infers the underlying task from the examples provided and refines its predictions based on the inferred task. (Section 2.1)
  - [Beyond Induction Heads: In-Context Meta Learning Induces Multi-Phase Circuit Emergence](https://raw.githubusercontent.com/mlresearch/v267/main/assets/minegishi25a/minegishi25a.pdf)
- **Meta-learning** (constructs)
  > This task inference ability is recognized as a form of meta-learning (Min et al., 2022a). (Section 1)
  - [Beyond Induction Heads: In-Context Meta Learning Induces Multi-Phase Circuit Emergence](https://raw.githubusercontent.com/mlresearch/v267/main/assets/minegishi25a/minegishi25a.pdf)
