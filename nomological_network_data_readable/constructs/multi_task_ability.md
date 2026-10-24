# Multi-task ability
**Type:** Construct  
**Referenced in:** 8 papers  
**Also known as:** Multi-task capability, Multi-task learning  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the papers, the prevailing usage treats multi-task ability as a model-level ability to perform multiple tasks effectively. One paper casts it as a latent ability of merged models to "maintain multi-task capabilities" after combining specialist models, while another describes it as performing well on multiple, distinct tasks simultaneously, often through shared knowledge. These definitions largely agree on multi-task performance and differ mainly in scope, merged-model retention after combination versus a broader multi-task learning framing.

**Space of facets.** Papers use two nearby labels, "multi-task capability" and "multi-task learning", for closely aligned versions of the concept. One source also positions multi-task learning as the seen-task counterpart to zero-shot generalization on unseen tasks, so the main distinction drawn around the term is seen versus unseen task performance.

**Space of measurement.** Operationalization is narrow in these papers: it is linked to 2 measurement instruments and no behavioral indicators. The named instruments are the Super-NaturalInstructions and SuperGLUE benchmarks, used to evaluate performance across tasks. This matches the common definition of doing well on multiple tasks, while the merged-model retention aspect in one definition is not given a separate instrument.

**Links.** Only a small number of construct links are reported. One paper claims a causal relationship from multi-task ability to task generalization, and the same paper also records a causal relationship from task generalization to multi-task ability, using language about modular and composable transfer learning leading to improved cross-task generalization. No correlational or broader related links are reported.

## Sources

**[Superpose Task-specific Features for Model Merging](https://aclanthology.org/2025.emnlp-main.210.pdf) (as "Multi-task capability")**
> The latent ability of a merged model to retain and perform multiple tasks effectively after combining specialist models.

**[REMEDY: Recipe Merging Dynamics in Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4065a881baab1744bfba208a4361bbb1-Paper-Conference.pdf) (as "Multi-task learning")**
> The ability of a model to perform well on multiple, distinct tasks simultaneously, often by sharing knowledge between them.

## Relationships

### Multi-task ability →
- **Parameter efficiency** (constructs) — *causes*
  > As a result, we argue that adopting both task-common skills learning and task-specific skills learning as a paradigm constitutes a robust strategy for achieving parameter efficiency in adapting multiple tasks. (Section 3.3.3)
  - [Customizable Combination of Parameter-Efficient Modules for Multi-Task Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/0a692a24dbc744fca340b9ba33bc6522-Paper-Conference.pdf)
- **Super-NaturalInstructions** (measurements) — *measured_by*
  > “we conducted experiments on two publicly available multitasking benchmarks: SuperGLUE (Wang et al., 2019) and Super Natural-Instructions (Super NI) (Wang et al., 2022).”
  - [Customizable Combination of Parameter-Efficient Modules for Multi-Task Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/0a692a24dbc744fca340b9ba33bc6522-Paper-Conference.pdf)
- **SuperGLUE** (measurements) — *measured_by*
  > “we conducted experiments on two publicly available multitasking benchmarks: SuperGLUE (Wang et al., 2019) and Super Natural-Instructions (Super NI) (Wang et al., 2022).”
  - [Customizable Combination of Parameter-Efficient Modules for Multi-Task Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/0a692a24dbc744fca340b9ba33bc6522-Paper-Conference.pdf)

### → Multi-task ability
- **Parameter efficiency** (constructs) — *causes*
  > “Our methods explicitly segregate shared and proprietary skills and effectively ensure parameter efficiency in multi-task learning under equivalent training settings.”
  - [Customizable Combination of Parameter-Efficient Modules for Multi-Task Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/0a692a24dbc744fca340b9ba33bc6522-Paper-Conference.pdf)
- **Task interference** (constructs) — *causes*
  > Model merging seeks to integrate task-specific expert models into a unified architecture while preserving multi-task generalization capabilities, yet parameter interference between constituent models frequently induces performance degradation. (Abstract)
  - [Whoever Started the interference Should End It: Guiding Data-Free Model Merging via Task Vectors](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cheng25h/cheng25h.pdf)
