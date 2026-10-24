# MathVision
**Type:** Measurement  
**Referenced in:** 9 papers  

## State of the Field

**What it is.** Across the surveyed work, MathVision is most commonly described as a visual mathematical reasoning dataset or benchmark for multimodal problem solving. Definitions present it as covering algebra, geometry, combinatorics, and logic, with evaluation by accuracy on complex multimodal problems, while another description says it involves interpreting diagrams and solving quantitative problems. One source also refers to the testmini subset of the MATH-Vision dataset.

**What it is claimed to measure.** Papers link MathVision to 2 constructs and no behavioral indicators. The prevailing usage is to measure Mathematical reasoning: papers place it among math-related benchmarks and describe such benchmarks as designed to evaluate the mathematical abilities of MLLMs. A smaller line of work uses it to measure Calibration under visual mathematical reasoning.

**Space of uses.** It is frequently used alongside MathVista, and in some benchmark suites also with MathVerse, DynaMath, MMStar, and CharXiv. Papers position it as one benchmark within broader visual reasoning or math-related evaluations, and one paper pairs it with MathVista specifically to evaluate calibration under visual mathematical reasoning.

## Sources

**[VReST: Enhancing Reasoning in Large Vision-Language Models through Tree Search and Self-Reward Mechanism](https://aclanthology.org/2025.acl-long.199.pdf)**
> Visual mathematical reasoning dataset covering algebra, geometry, combinatorics, and logic, evaluated using accuracy on complex multimodal problems.

## Relationships

### → MathVision
- **Mathematical reasoning** (constructs) — *measured_by*
  > The performance of LLaVA-Next-LLaMA3-8B model with merged task vectors across math-related Benchmarks: MathVista ..., MathVerse ..., MMStar ..., DynaMath ..., MathVision ... (Table 2)
  - [Bring Reason to Vision: Understanding Perception and Reasoning through Model Merging](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25cm/chen25cm.pdf)
- **Calibration** (constructs) — *measured_by*
  > To evaluate calibration under visual mathematical reasoning, we employ MathVista (Lu et al., 2024) and MathVision (Wang et al., 2024). (Section 3.1.1)
  - [Seeing is Believing, but How Much? A Comprehensive Analysis of Verbalized Calibration in Vision-Language Models](https://aclanthology.org/2025.emnlp-main.74.pdf)
