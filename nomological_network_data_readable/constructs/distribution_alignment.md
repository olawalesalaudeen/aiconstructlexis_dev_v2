# Distribution alignment
**Type:** Construct  
**Referenced in:** 3 papers  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across papers, the term is not used in a single way. The prevailing framing describes how closely selected training data matches representative examples from a target task, so that a model can learn the target distribution efficiently; one formulation says the selected data should "match the distribution of the representative examples from the target task." A smaller formulation uses the same label for a student model's ability to replicate a teacher model's output probability distribution across tokens and contexts, described as "fine-grained" and "per-token" alignment. The main difference is whether alignment is defined over training-data selection relative to a target task or over model output probabilities relative to a teacher distribution.

**Space of facets.** Papers do not present a single stable taxonomy, but they do place the construct in different local structures. One paper treats it as one objective in task-specific data selection and describes a smooth trade-off with generation diversity, while another treats it at a fine-grained, token-wise level through dynamic mixing of divergences. A separate usage contrasts a "distribution alignment setting" with calibration: the former compares probabilities over the entire label set, whereas calibration compares only the predicted label probability to the ground truth. Taken together, the same name is used for both data-distribution matching and teacher-student probability matching.

**Space of measurement.** No measurement instrument and no behavioral indicator are linked to it. In the task-specific data selection framing, papers operationalize it by measuring the discrepancy between the distribution assigned to candidate data and the target distribution, with one paper saying it uses optimal transport to measure that discrepancy and encourage alignment. In the teacher-student framing, papers describe token-wise divergence control that "dynamically emphasizes the appropriate divergence for each token," with the goal of more accurately capturing the teacher distribution. These operationalizations follow the split in definitions, one at the data-distribution level and one at the output-distribution level.

**Links.** The recorded links are limited to related links. One paper relates it to generation diversity, describing task-specific data selection as a smooth trade-off between those two objectives. Another paper relates it to calibration and explicitly distinguishes them by saying distribution alignment compares probabilities over the entire label set, while calibration compares the predicted label probability to the ground truth.

## Sources

**[TSDS: Data Selection for Task-Specific Model Finetuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/13848b5893119ff772b69812c95914fa-Paper-Conference.pdf)**
> The degree to which the distribution of selected training data matches the distribution of representative examples from a target task, enabling a model to learn the target distribution efficiently.

## Relationships

### Associated with
- **Calibration** (constructs)
  > Our proposed distribution alignment setting differs from calibration in that it compares the probabilities over the entire label set whereas calibration only compares the predicted label probability to the ground truth. (Section 2.3)
  - [Large Language Models Do Multi-Label Classification Differently](https://aclanthology.org/2025.emnlp-main.126.pdf)
