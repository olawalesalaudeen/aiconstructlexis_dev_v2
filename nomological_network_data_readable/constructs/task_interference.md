# Task interference
**Type:** Construct  
**Referenced in:** 15 papers  
**Also known as:** Negative transfer, Inter-task interference, Parameter interference  

## State of the Field

**Definition agreement:** Consensus. Most papers define task interference as performance degradation on one task, language, or capability caused by training jointly with or combining other tasks because their learning signals, representations, or parameter updates conflict. The differences are mainly in setting and mechanism emphasis, such as multi-task learning versus model merging, not in what phenomenon is being studied.

**Space of definitions.** Across the papers, task interference is most commonly treated as a latent phenomenon of performance degradation when multiple tasks are learned jointly or when task-specific models are merged, because learning signals, shared parameters, or representations conflict. Most definitions describe one task's learning as hurting another at the task level, while some authors use near-synonyms such as negative transfer or inter-task interference for the same broad pattern. A smaller line narrows the construct to parameter interference, where updates or merged parameters that help one source model or language pair degrade others. The main variation is therefore between a broad cross-task degradation framing and a narrower parameter-conflict framing.

**Space of facets.** Papers do not settle on a single naming scheme: alongside task interference, they also use negative transfer, inter-task interference, and, in model-merging or multilingual settings, parameter interference. Only one paper explicitly names a subtype, partial task interference, for jointly trained control and understanding tasks with overlapping representations that mutually degrade performance. One definition also contrasts the phenomenon with synergistic learning, marking it as the adverse case rather than the cooperative one.

**Space of measurement.** Papers do not link task interference to any measurement instrument, and the construct is linked to 2 behavioral indicators overall, Catastrophic forgetting and Object detection, through related and causal claims rather than as explicit measures. Operationally, authors infer it from degraded performance when tasks are trained together or checkpoints are merged, including generalists underperforming specialists on VL tasks, merged checkpoints losing performance on disparate tasks, and control and understanding tasks degrading each other when trained simultaneously. One paper further says inter-task interference is measured by changes in internal activations induced by merging, so the operationalizations largely match the definitions' focus on cross-task degradation.

**Links.** Overall, papers link task interference to 3 constructs, Graceful forgetting, Multimodal understanding, and Task generalization, and to 2 behavioral indicators, Catastrophic forgetting and Object detection. One paper claims a causal relationship from Object detection to Task interference, stating that learning instance-level perception together with logical reasoning may lead to interference. Separate papers claim causal relationships from Task interference to Task generalization and from Task interference to Multimodal understanding. Other papers relate Task interference to Catastrophic forgetting and to Graceful forgetting.

## Sources

**[MoME: Mixture of Multimodal Experts for Generalist Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/4a3a14b9536806a0522930007c5512f7-Paper-Conference.pdf)**
> A latent phenomenon in multi-task learning where a model's performance on certain tasks degrades due to conflicting learning signals from being trained on a diverse mixture of other tasks.

**[Customizing Language Models with Instance-wise LoRA for Sequential Recommendation](https://proceedings.neurips.cc/paper_files/paper/2024/file/cd476d01692c508ddf1cb43c6279a704-Paper-Conference.pdf) (as "Negative transfer")**
> A phenomenon where training on diverse or unrelated tasks or data instances leads to a degradation in model performance, as opposed to synergistic learning.

**[Whoever Started the interference Should End It: Guiding Data-Free Model Merging via Task Vectors](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cheng25h/cheng25h.pdf) (as "Parameter interference")**
> A latent phenomenon in model merging where parameter conflicts between different source models cause performance degradation in the final unified model.

**[No Task Left Behind: Isotropic Model Merging with Common and Task-Specific Subspaces](https://raw.githubusercontent.com/mlresearch/v267/main/assets/marczak25a/marczak25a.pdf) (as "Inter-task interference")**
> The phenomenon where the process of learning or combining capabilities for one task negatively impacts performance on other tasks within a multi-task model.

## Relationships

### Task interference →
- **Multimodal understanding** (constructs) — *causes*
  > “task interference, where competing control and understanding tasks degrade performance when trained jointly.”
  - [ChatVLA: Unified Multimodal Understanding and Robot Control with Vision-Language-Action Model](https://aclanthology.org/2025.emnlp-main.273.pdf)
- **Multi-task ability** (constructs) — *causes*
  > Model merging seeks to integrate task-specific expert models into a unified architecture while preserving multi-task generalization capabilities, yet parameter interference between constituent models frequently induces performance degradation. (Abstract)
  - [Whoever Started the interference Should End It: Guiding Data-Free Model Merging via Task Vectors](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cheng25h/cheng25h.pdf)

### → Task interference
- **Object detection** (behaviors tasks) — *causes*
  > simultaneously learning to acquire knowledge at distinct granularities, such as the instance-level perception (e.g., object detection) and logical reasoning (e.g., VQA), may lead to significant interference. (Section 1)
  - [Octavius: Mitigating Task Interference in MLLMs via LoRA-MoE](https://proceedings.iclr.cc/paper_files/paper/2024/file/6b3b238c5786536dc9f835760e2dba02-Paper-Conference.pdf)
- **Weight disentanglement** (constructs) — *causes*
  > Task interference occurs when fine-tuning modifies parameters that are critical to other tasks, resulting in unintended behavioral shifts. To prevent this, data from disjoint regions in the input space (representing different tasks) should affect only their corresponding regions in the activation space. Ortiz-Jimenez et al. (2023) formalized this concept as weight disentanglement. (Section 1)
  - [Efficient Model Editing with Task-Localized Sparse Fine-tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/96f5de31e8e3d19cbcd3a7397b8dce57-Paper-Conference.pdf)
- **Model merging** (behaviors tasks) — *causes*
  > misalignment of MSU parameters when merging LoRAs can result in parameter interference.
  - [Merging LoRAs like Playing LEGO: Pushing the Modularity of LoRA to Extremes Through Rank-Wise Clustering](https://proceedings.iclr.cc/paper_files/paper/2025/file/b54e0146a82945f01e69c2e3309ba925-Paper-Conference.pdf)
- **Subspace alignment** (constructs) — *correlates*
  > In Appendix A.3, we show that increased SAR is associated with reduced inter-task interference, measured by changes in internal activations induced by merging. (Section 4.1)
  - [No Task Left Behind: Isotropic Model Merging with Common and Task-Specific Subspaces](https://raw.githubusercontent.com/mlresearch/v267/main/assets/marczak25a/marczak25a.pdf)

### Associated with
- **Catastrophic forgetting** (behaviors tasks)
  > Task interference is linked to catastrophic forgetting, as the individual task vectors lose a significant amount of generalization ability to other tasks after fine-tuning and merging them leads to interference among each other (Section 5.2).
  - [LiNeS: Post-training Layer Scaling Prevents Forgetting and Enhances Model Merging](https://proceedings.iclr.cc/paper_files/paper/2025/file/43ae0b566b802b2d00e525b672794b82-Paper-Conference.pdf)
- **Graceful forgetting** (constructs)
  > Some of the knowledge may actually bring detrimental effects to the fine-tuning tasks, which is also known as negative transfer. To address this problem, graceful forgetting has emerged as a promising approach. (Abstract)
  - [Graceful Forgetting in Generative Language Models](https://aclanthology.org/2025.emnlp-main.666.pdf)
