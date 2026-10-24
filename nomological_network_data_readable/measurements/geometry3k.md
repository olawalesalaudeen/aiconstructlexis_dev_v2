# Geometry3K
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** Geometry3k  

## State of the Field

**What it is.** Across the surveyed papers, Geometry3K is most commonly described as a geometry benchmark or dataset centered on plane geometry problems. Definitions differ slightly: one paper calls it an early multimodal reasoning benchmark, while another describes a geometry dataset with human-annotated logical forms that is used to generate factual QA pairs and to evaluate geometry problem solving.

**What it is claimed to measure.** Papers use it to measure 2 constructs and no behavioral indicators. The linked constructs are geometric reasoning and mathematical reasoning, so the measurement claims focus on reasoning tasks: one paper evaluates effectiveness with “the problems from the Geometry3K dataset,” and another includes Geometry3K in geometry sub-task evaluation.

**Space of uses.** Papers most often position it as an evaluation source. One study uses its problems directly for evaluation, while another also treats it as source material, stating that “the factual QA pairs in the alignment data are generated using Geometry3K”; the same paper places it alongside GeoQA+, UniGeo, and GEOS in geometry-focused evaluation, and notes that the testmini split of MathVista is collected from GeoQA, Geometry3K, GeoQA+, and GEOS.

## Sources

**[Measuring Multimodal Mathematical Reasoning with MATH-Vision Dataset](https://proceedings.neurips.cc/paper_files/paper/2024/file/ad0edc7d5fa1a783f063646968b7315b-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Geometry3k")**
> An early multimodal reasoning benchmark focused on plane geometry problems.

**[G-LLaVA: Solving Geometric Problem with Multi-Modal Large Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/09afabe33dc7db66530dea6483b22e5d-Paper-Conference.pdf)**
> A geometry dataset with human-annotated logical forms used to generate factual QA pairs and evaluate geometry problem solving.

## Relationships

### → Geometry3K
- **Mathematical reasoning** (constructs) — *measured_by*
  > “To evaluate the effectiveness of SKETCHPAD, we use the problems from the Geometry3K dataset [32].”
  - [Visual Sketchpad: Sketching as a Visual Chain of Thought for Multimodal Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fb82011040977c7712409fbdb5456647-Paper-Conference.pdf)
- **Geometric reasoning** (constructs) — *measured_by*
  > "Additionally, we show the results of sub-tasks on MathVista-GPS multiple-choice questions for easier evaluation in Table 15, which includes GeoQA+, UniGeo, Geometry3K, and GEOS."
  - [G-LLaVA: Solving Geometric Problem with Multi-Modal Large Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/09afabe33dc7db66530dea6483b22e5d-Paper-Conference.pdf)
