# Weight disentanglement
**Type:** Construct  
**Referenced in:** 3 papers  

## State of the Field

Across the provided literature, weight disentanglement is characterized as a property of a model's function space related to multi-task learning and model merging. The concept is defined as a state where the weight updates for different tasks, referred to as task-vectors, operate in distinct or disjoint regions. This property is primarily discussed as a mechanism to prevent task interference. Task interference is described as occurring when "fine-tuning modifies parameters that are critical to other tasks, resulting in unintended behavioral shifts." The construct is operationalized through a specific mechanism: ensuring that "data from disjoint regions in the input space (representing different tasks) should affect only their corresponding regions in the activation space." Therefore, achieving weight disentanglement is presented as a way to reduce negative interactions when combining task-specific model updates.

## Sources

**[Model merging with SVD to tie the Knots](https://proceedings.iclr.cc/paper_files/paper/2025/file/0d4f8a5109c5083b5307fcd0bddae7a7-Paper-Conference.pdf)**
> A property where the weight updates (task-vectors) for different tasks operate in distinct or disjoint regions of the model's function space, reducing interference when merged.

## Relationships

### Weight disentanglement →
- **Task interference** (constructs) — *causes*
  > Task interference occurs when fine-tuning modifies parameters that are critical to other tasks, resulting in unintended behavioral shifts. To prevent this, data from disjoint regions in the input space (representing different tasks) should affect only their corresponding regions in the activation space. Ortiz-Jimenez et al. (2023) formalized this concept as weight disentanglement. (Section 1)
  - [Efficient Model Editing with Task-Localized Sparse Fine-tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/96f5de31e8e3d19cbcd3a7397b8dce57-Paper-Conference.pdf)
