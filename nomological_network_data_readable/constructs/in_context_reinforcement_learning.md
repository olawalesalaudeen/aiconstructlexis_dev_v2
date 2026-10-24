# In-context reinforcement learning
**Type:** Construct  
**Referenced in:** 4 papers  

## State of the Field

In-context reinforcement learning is consistently defined across the provided literature as an ability of pretrained transformers to solve reinforcement learning tasks by learning from experience provided in the context. The definitions characterize this as either learning through "trial and error" to "maximize future rewards" or as solving "new and unseen" tasks by conditioning on a dataset of environment interactions. One paper specifies that this allows a model to predict optimal actions even when the context contains data from "unknown and often suboptimal policies" ("In-Context Reinforcement Learning From Suboptimal Historical Data"). This construct is operationalized and measured using the **Meta-world** benchmark. One study further quantifies the ability by measuring "how well it could predict the Q-learning agent’s actions over time" ("Sparse Autoencoders Reveal Temporal Difference Learning in Large Language Models"). The construct is reported to enable **Data efficiency**, specifically through "sample-efficient adaptation to unseen tasks without parameter updates." It is also linked to **Self-correction**, though the provided data does not elaborate on this relationship.

## Sources

**[Sparse Autoencoders Reveal Temporal Difference Learning in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/3b594f6dd4931c4af4f12042af8d40ec-Paper-Conference.pdf)**
> The specific ability to learn to generate actions that maximize future rewards through trial and error, based on experience provided in the context.

## Relationships

### In-context reinforcement learning →
- **Meta-World** (measurements) — *measured_by*
  > We evaluate DICP across a range of discrete and continuous environments, including Darkroom variants and Meta-World. (ABSTRACT)
  - [Distilling Reinforcement Learning Algorithms for In-Context Model-Based Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/5c4a7643ab90cd62320df95c873a1c6f-Paper-Conference.pdf)
- **Data efficiency** (constructs) — *causes*
  > "enabling sample-efficient adaptation to unseen tasks without parameter updates"
  - [Distilling Reinforcement Learning Algorithms for In-Context Model-Based Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/5c4a7643ab90cd62320df95c873a1c6f-Paper-Conference.pdf)
- **Self-improvement** (constructs) — *causes*
  > In particular, the assigned weights are constructed from the advantage functions of the behavior policies such that actions with high advantage values receive more weights during pretraining, leading to guaranteed policy improvements over the behavior policies. (Section 1).
  - [In-Context Reinforcement Learning From Suboptimal Historical Data](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dong25d/dong25d.pdf)
