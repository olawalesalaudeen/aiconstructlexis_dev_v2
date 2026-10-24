# Geometric reasoning
**Type:** Construct  
**Referenced in:** 5 papers  
**Also known as:** Geometric comprehension, Geometric understanding, Geometric ability, Geometric structure understanding, Geometry reasoning, Geometric problem solving, Geometric relationship identification  

## State of the Field

**Definition agreement:** Consensus. All papers define geometric reasoning as the ability to understand geometric figures or diagrams and reason about their properties and spatial relationships in order to solve problems; most explicitly describe this as multi-step logical or symbolic inference. The remaining definitions use broader wording such as spatial reasoning or deep understanding of geometric structures, but they stay within the same core property and scope rather than describing a different phenomenon.

**Space of definitions.** Across the surveyed work, the prevailing usage treats geometric reasoning as a latent ability to understand geometric figures, diagrams, symbols, shapes, and textual problem statements, and then carry out multi-step logical or symbolic inference about properties, relationships, spatial configurations, or theorems to reach a solution. Most definitions cluster around this end-to-end reasoning framing, though some papers use nearby labels for narrower abilities such as geometric comprehension, geometric understanding, geometric structure understanding, or geometric relationship identification, centered on perceiving elements like points, lines, and angles and identifying their relations. A smaller line of work also frames it as the observable task of geometric problem solving, namely taking a diagram-plus-text problem and producing a final, often step-by-step, answer.

**Space of facets.** Some papers break the construct into lower-level components: geometric comprehension focuses on basic elements and their spatial relations within diagrams, geometric understanding on interpreting diagrams, symbols, and text, and geometric relationship identification on deciding relations such as parallel, perpendicular, intersecting, or indeterminate from textual descriptions. One paper treats geometric relationship identification as a sub-step extracted from mainstream geometric problems and a minimal module for evaluating geometric structure understanding, while another places geometry reasoning among several mathematical reasoning types. Across these uses, geometric reasoning, geometry reasoning, and geometric ability are used for closely similar broad abilities, whereas geometric problem solving names the observable task rather than the latent ability.

**Space of measurement.** Papers link the construct to 5 measurement instruments and 1 behavioral indicator. Operationalization is mostly benchmark-based: GeoQA and the geometry problem solving split of MathVista are the most frequently linked instruments, with GEOS, Geometry3K, and MathVerse also used; the evaluation language describes assessing models on geometry problem solving and, in one case, generalization on a newly introduced benchmark. These operationalizations mostly target end-to-end problem solving, which fits the dominant definition of multi-step solution finding, but some papers explicitly separate that from lower-level structure understanding, noting that correct answers may occur by coincidence and isolating geometric relationship identification in GeomRel as a minimal evaluation module.

**Links.** One paper claims a causal relationship from hallucination to geometric reasoning, stating that severe hallucination on geometric figures hinders abilities on solving geometric problems. Separate single-paper claims relate geometric reasoning to spatial reasoning and to abstract reasoning, with geometric ability described as demanding spatial comprehension and abstract thinking.

## Sources

**[G-LLaVA: Solving Geometric Problem with Multi-Modal Large Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/09afabe33dc7db66530dea6483b22e5d-Paper-Conference.pdf)**
> The ability to perform multi-step, symbolic inference based on geometric figures and textual problem descriptions to arrive at a solution.

**[G-LLaVA: Solving Geometric Problem with Multi-Modal Large Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/09afabe33dc7db66530dea6483b22e5d-Paper-Conference.pdf) (as "Geometric comprehension")**
> The ability to accurately perceive and understand basic geometric elements (like points, lines, angles), their properties, and their spatial relationships within a diagram.

**[GeoX: Geometric Problem Solving Through Unified Formalized Vision-Language Pre-training](https://proceedings.iclr.cc/paper_files/paper/2025/file/2722a0ccf6acfe3d144fdbb0dedd80b5-Paper-Conference.pdf) (as "Geometric understanding")**
> The ability to comprehend and interpret information from geometric diagrams, symbols, and textual descriptions.

**[Do Large Language Models Truly Understand Geometric Structures?](https://proceedings.iclr.cc/paper_files/paper/2025/file/8de035590685bf7389da6a769fbcecce-Paper-Conference.pdf) (as "Geometric ability")**
> The cognitive capacity to perform tasks involving spatial reasoning and a deep understanding of geometric diagrams and structures.

**[Do Large Language Models Truly Understand Geometric Structures?](https://proceedings.iclr.cc/paper_files/paper/2025/file/8de035590685bf7389da6a769fbcecce-Paper-Conference.pdf) (as "Geometric structure understanding")**
> The latent ability of a model to accurately comprehend and interpret the components and relationships within a geometric figure described textually.

**[MathVista: Evaluating Mathematical Reasoning of Foundation Models in Visual Contexts](https://proceedings.iclr.cc/paper_files/paper/2024/file/663bce02a0050c4a11f1eb8a7f1429d3-Paper-Conference.pdf) (as "Geometry reasoning")**
> The ability to understand and reason about geometric shapes, relationships, and properties, including the use of theorems and spatial configurations.

**[G-LLaVA: Solving Geometric Problem with Multi-Modal Large Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/09afabe33dc7db66530dea6483b22e5d-Paper-Conference.pdf) (as "Geometric problem solving")**
> The observable task of receiving a geometric problem, which includes a diagram and text, and producing a final answer, often with a step-by-step solution.

**[Do Large Language Models Truly Understand Geometric Structures?](https://proceedings.iclr.cc/paper_files/paper/2025/file/8de035590685bf7389da6a769fbcecce-Paper-Conference.pdf) (as "Geometric relationship identification")**
> The specific cognitive skill of correctly identifying explicit or implicit geometric relationships between elements like points, lines, and shapes from a textual description.

## Relationships

### Geometric reasoning →
- **GeoQA** (measurements) — *measured_by*
  > We evaluate G-LLaVA on the geometry problems solving (GPS) task (testmini split) of MathVista (Lu et al., 2023) and test set of GeoQA. (Section 5.1)
  - [G-LLaVA: Solving Geometric Problem with Multi-Modal Large Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/09afabe33dc7db66530dea6483b22e5d-Paper-Conference.pdf)
- **MathVista** (measurements) — *measured_by*
  > "We evaluate G-LLaVA on the geometry problems solving (GPS) task (testmini split) of MathVista"
  - [G-LLaVA: Solving Geometric Problem with Multi-Modal Large Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/09afabe33dc7db66530dea6483b22e5d-Paper-Conference.pdf)
- **Geometry3K** (measurements) — *measured_by*
  > "Additionally, we show the results of sub-tasks on MathVista-GPS multiple-choice questions for easier evaluation in Table 15, which includes GeoQA+, UniGeo, Geometry3K, and GEOS."
  - [G-LLaVA: Solving Geometric Problem with Multi-Modal Large Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/09afabe33dc7db66530dea6483b22e5d-Paper-Conference.pdf)
- **GEOS** (measurements) — *measured_by*
  > "Additionally, we show the results of sub-tasks on MathVista-GPS multiple-choice questions for easier evaluation in Table 15, which includes GeoQA+, UniGeo, Geometry3K, and GEOS."
  - [G-LLaVA: Solving Geometric Problem with Multi-Modal Large Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/09afabe33dc7db66530dea6483b22e5d-Paper-Conference.pdf)

### → Geometric reasoning
- **Hallucination** (behaviors tasks) — *causes*
  > State-of-the-art MLLMs suffer severe hallucination on geometric figures, which greatly hinders their abilities on solving geometric problems. (Figure 1)
  - [G-LLaVA: Solving Geometric Problem with Multi-Modal Large Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/09afabe33dc7db66530dea6483b22e5d-Paper-Conference.pdf)

### Associated with
- **Abstract reasoning** (constructs)
  > Geometric ability is a significant challenge for large language models (LLMs) due to the need for advanced spatial comprehension and abstract thinking.
  - [Do Large Language Models Truly Understand Geometric Structures?](https://proceedings.iclr.cc/paper_files/paper/2025/file/8de035590685bf7389da6a769fbcecce-Paper-Conference.pdf)
- **Instruction fine-tuning** (behaviors tasks)
  > we also fine-tune the open-source model LLaMA3-8B-Instruct using question-answer pairs but find that this does not necessarily improve its understanding of geometric structures.
  - [Do Large Language Models Truly Understand Geometric Structures?](https://proceedings.iclr.cc/paper_files/paper/2025/file/8de035590685bf7389da6a769fbcecce-Paper-Conference.pdf)
- **Spatial reasoning** (constructs)
  > "Geometric ability is a significant challenge for large language models (LLMs) due to the need for advanced spatial comprehension and abstract thinking."
  - [Do Large Language Models Truly Understand Geometric Structures?](https://proceedings.iclr.cc/paper_files/paper/2025/file/8de035590685bf7389da6a769fbcecce-Paper-Conference.pdf)
