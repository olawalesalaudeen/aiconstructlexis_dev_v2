# CLEVR
**Type:** Measurement  
**Referenced in:** 6 papers  

## State of the Field

**What it is.** Across the surveyed papers, CLEVR is most commonly treated as a visual reasoning benchmark or diagnostic dataset, often framed around compositional language and elementary visual reasoning. Some definitions instead describe it as question answering about 3D scenes, and one paper uses it as an image classification task. A smaller line of work specifies a particular subset, using the val split with 15,000 images of cylinders, cubes, and spheres in different sizes and colors for multimodal data understanding and retrieval.

**What it is claimed to measure.** Papers link CLEVR to one construct and no behavioral indicators. The measurement claims converge on a single target: one paper claims that Chain-of-thought reasoning is measured by CLEVR, describing the setting as complex reasoning in CLEVR. No other construct is linked to it.

**Space of uses.** Papers use CLEVR in several roles, and no measurement instrument is linked to it. Some include it as one task within a broader evaluation suite, for example among image classification tasks, while others use it as a scene reasoning domain for inductive program synthesis or for multimodal data understanding and retrieving. Another recurring positioning is as a benchmark for understanding relationships between objects, spatial reasoning, and logical inference from visual input.

## Sources

**[Batch Calibration: Rethinking Calibration for In-Context Learning and Prompt Engineering](https://proceedings.iclr.cc/paper_files/paper/2024/file/003e438cf04e3caf0a5c908495e484fe-Paper-Conference.pdf)**
> A visual reasoning benchmark used here as an image classification task.

## Relationships

### → CLEVR
- **Complex reasoning** (constructs) — *measured_by*
  > complex reasoning in CLEVR (Johnson et al., 2017) and Winoground (Thrush et al., 2022) (Section 4.1).
  - [VoCoT: Unleashing Visually Grounded Multi-Step Reasoning in Large Multi-Modal Models](https://aclanthology.org/2025.naacl-long.192.pdf)
