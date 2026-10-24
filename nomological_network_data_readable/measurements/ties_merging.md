# TIES-Merging
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** Ties-merging, TIES-merging  

## State of the Field

Across the provided literature, TIES-Merging is consistently characterized as a model merging or model fusion procedure designed to combine multiple fine-tuned models. The prevailing description of its function is to resolve conflicts or reduce interference between the models being merged. Several papers specify its mechanism, most commonly describing it as a procedure that "trims conflicting values." A more detailed framing, present in multiple sources, states that it applies both "trimming and elect-sign operations." One paper further specifies this mechanism as multiplying "a binary matrix to the TA update with the goal to reduce interference" ("Model Merging by Uncertainty-Based Gradient Matching"). The issue it addresses is variously termed "parameter interference," "parameter conflicts," or "symbol conflicts." In the context of the surveyed research, TIES-Merging is frequently employed as a baseline method for comparison against other model fusion techniques.

## Sources

**[Model Merging by Uncertainty-Based Gradient Matching](https://proceedings.iclr.cc/paper_files/paper/2024/file/327b9b8d4e45c3f81568e11ffc505f77-Paper-Conference.pdf)**
> A model merging method that applies trimming and elect-sign operations to reduce interference when combining multiple fine-tuned models.

**[Parameter-Efficient Multi-Task Model Fusion with Partial Linearization](https://proceedings.iclr.cc/paper_files/paper/2024/file/5bacb12bf81e98e2ee0eed953a23c656-Paper-Conference.pdf) (as "Ties-merging")**
> A model fusion procedure that resolves parameter conflicts before merging task-specific models.

**[Layer Swapping for Zero-Shot Cross-Lingual Transfer in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7f9a44cb707ede42a659ad85d940dd55-Paper-Conference.pdf) (as "TIES-merging")**
> A model-merging procedure that trims conflicting values and merges weights, used as a baseline for comparison.
