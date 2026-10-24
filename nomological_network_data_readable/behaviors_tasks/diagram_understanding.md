# Diagram understanding
**Type:** Behavior  
**Referenced in:** 12 papers  
**Also known as:** Diagram interpretation, Diagram comprehension, Diagram Understanding, Flowchart understanding, Scientific diagram analysis, Science diagram comprehension, Diagram and table interpretation  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats diagram understanding as an observable task of interpreting diagrams and answering questions about them. Definitions repeatedly focus on understanding the content, structure, and meaning of diagram elements and their interrelations, often for scientific or schematic diagrams, and the common success criterion is answering questions based on the diagram. A smaller framing broadens the task to extracting information from structured visual formats such as charts, graphs, figures, and tables, and one paper places it within image recognition and reasoning cross capabilities.

**Variants.** Papers use several near-names, including diagram interpretation, diagram comprehension, diagram understanding, scientific diagram analysis, science diagram comprehension, flowchart understanding, and diagram and table interpretation. The main variants narrow the task to flowcharts, to scientific diagrams and figures, or to broader structured visuals that include charts, graphs, technical illustrations, and tables. In the flowchart setting, questions can target specific visual conventions, for example asking which step is shown with a diamond shape.

**Space of elicitation and scores.** Papers measure it with 4 instruments. AI2D is the most common: papers use it to gauge diagram comprehension, describe it as a multiple-choice benchmark for science diagram comprehension, and characterize it as targeting "diagram interpretation and reasoning" with syntactic parsing and semantic analysis. Other linked instruments are MME-RealWorld, MMMU, and MuirBench, which papers use for diagram tasks in realistic applications, scientific-diagram subcategories, or understanding information conveyed in diagram images.

**What it is taken as evidence of.** Papers do not explicitly treat diagram understanding as evidence of a named construct. There is no prevailing construct-level interpretation in these papers. Beyond constructs, one paper claims a causal relationship from diagram understanding to Action selection in the flowchart setting, discussing flowchart interpretation in relation to automation, decision-making, and analysis.

## Sources

**[Meteor: Mamba-based Traversal of Rationale for Large Language and Vision Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/473a9a75edc46eff5ff224d53d5f7294-Paper-Conference.pdf) (as "Diagram interpretation")**
> Interpreting the structure and meaning of diagram elements and their interrelations.

**[Prism: A Framework for Decoupling and Assessing the Capabilities of VLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/cac9e747a1d480c78312226959566cef-Paper-Conference.pdf) (as "Diagram comprehension")**
> The observable task of understanding and answering questions about the content of a diagram.

**[Does Acceleration Cause Hidden Instability in Vision Language Models? Uncovering Instance-Level Divergence Through a Large-Scale Empirical Study](https://aclanthology.org/2025.emnlp-main.425.pdf)**
> The task of interpreting and answering questions about scientific or schematic diagrams.

**[Law of the Weakest Link: Cross Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/63ea6a7d01a34a2c7334dcf1a2c3b03d-Paper-Conference.pdf) (as "Diagram Understanding")**
> Interpreting visual diagrams as part of image recognition and reasoning cross capabilities.

**[Dense Connector for MLLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/3a10c46572628d58cb44fb705f25cbbf-Paper-Conference.pdf) (as "Flowchart understanding")**
> Interpreting flowchart diagrams and answering questions about steps, decisions, or outcomes represented in the chart.

**[Chain-of-region: Visual Language Models Need  Details for Diagram Analysis](https://proceedings.iclr.cc/paper_files/paper/2025/file/464012c83279e19be4cd42c25f341c92-Paper-Conference.pdf) (as "Scientific diagram analysis")**
> The observable task of interpreting and answering questions about complex, structured images such as charts, graphs, and technical illustrations.

**[Solving Token Gradient Conflict in Mixture-of-Experts for Large Vision-Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/532ce4fcf853023c4cf2ac38cbc5d002-Paper-Conference.pdf) (as "Science diagram comprehension")**
> The task of interpreting and answering questions about diagrams, charts, and figures from scientific contexts.

**[Retrieval Enhanced Feedback via In-context Neural Error-book](https://aclanthology.org/2025.emnlp-main.711.pdf) (as "Diagram and table interpretation")**
> The task of extracting and understanding information presented in structured visual formats like diagrams, charts, and tables.

## Relationships

### Diagram understanding →
- **AI2D** (measurements) — *measured_by*
  > For domain-specific evaluations, we choose AI2D to gauge diagram comprehension (Section 5.2)
  - [Prism: A Framework for Decoupling and Assessing the Capabilities of VLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/cac9e747a1d480c78312226959566cef-Paper-Conference.pdf)
- **MuirBench** (measurements) — *measured_by*
  > [DIAGRAM UNDERSTANDING] aims to evaluate the ability of models to understand information conveyed in diagram images. (Section 3.1)
  - [MuirBench: A Comprehensive Benchmark for Robust Multi-image Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/9cf6139382f98623d08cc595622f3fb1-Paper-Conference.pdf)
- **MMMU** (measurements) — *measured_by*
  > To align our research focus, we conduct experiments on several sub-categories of MMMU that consists exclusively of scientific diagrams (Section 4).
  - [Chain-of-region: Visual Language Models Need  Details for Diagram Analysis](https://proceedings.iclr.cc/paper_files/paper/2025/file/464012c83279e19be4cd42c25f341c92-Paper-Conference.pdf)
- **MME-RealWorld** (measurements) — *measured_by*
  > MME-RealWorld covers complex visual reasoning tasks derived from realistic applications across diverse domains (e.g., Autonomous Driving, Diagrams, OCR) (Section 4.1).
  - [Retrieval Enhanced Feedback via In-context Neural Error-book](https://aclanthology.org/2025.emnlp-main.711.pdf)

### Associated with
- **Decision-making** (constructs)
  > Accurate interpretation of flowcharts is essential for tasks such as automation, decision-making, and analysis.
  - [Beyond End-to-End VLMs: Leveraging Intermediate Text Representations for Superior Flowchart Understanding](https://aclanthology.org/2025.naacl-long.180.pdf)
