# Adaptive computation
**Type:** Construct  
**Referenced in:** 3 papers  
**Also known as:** Compute adaptivity  

## State of the Field

Across the provided literature, adaptive computation is described as a model's ability to dynamically adjust its internal computation based on input characteristics. The definitions converge on the idea of allocating more or less of a computational budget, such as the "number of processing steps or depth," in response to input "difficulty," "complexity," "length," or external "budget constraints." This construct is operationalized in what are termed "compute adaptive models," which might "automatically allocate more compute to the tokens that need it." The implementation of this capability at inference time is a recurring theme, with papers discussing the use of "adaptive depth" and the need for "rules to decide when to stop" the process. One study reports that this construct, when implemented as an "adaptive number of steps," improves length generalization.

## Sources

**[CoTFormer: A Chain of Thought Driven Architecture with Budget-Adaptive Computation Cost at Inference](https://proceedings.iclr.cc/paper_files/paper/2025/file/1eaa5146756be028ad6fff1efcc8e6bd-Paper-Conference.pdf) (as "Compute adaptivity")**
> The tendency of a model to allocate more or less internal computation depending on input difficulty or budget constraints.

**[Looped Transformers for Length Generalization](https://proceedings.iclr.cc/paper_files/paper/2025/file/25cc3adf8c85f7c70989cb8a97a691a7-Paper-Conference.pdf)**
> The model's ability to dynamically adjust its computational budget, such as the number of processing steps or depth, based on the complexity or length of the input task.

## Relationships

### Adaptive computation →
- **Length generalization** (constructs) — *causes*
  > In this work, we demonstrate that looped Transformers with an adaptive number of steps significantly improve length generalization. (ABSTRACT)
  - [Looped Transformers for Length Generalization](https://proceedings.iclr.cc/paper_files/paper/2025/file/25cc3adf8c85f7c70989cb8a97a691a7-Paper-Conference.pdf)
