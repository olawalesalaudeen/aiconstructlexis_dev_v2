# MME-RealWorld
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** MME-RW  

## State of the Field

**What it is.** Papers most commonly describe MME-RealWorld as a manually curated or manually annotated multimodal benchmark for real-world scenarios, used to assess vision-language performance across categories such as monitoring, autonomous driving, OCR, property, and text or address tasks. Descriptions converge on five primary categories or real-world domains and 43 subtasks, and one paper adds an average resolution of 2000x1500. Another recorded use specifies a multiple-choice format with four manually constructed answer options, and some work refers to a Reasoning subset and an MME-RealWorld-Lite Reasoning subset.

**What it is claimed to measure.** Claims about what it measures are spread across several targets rather than centered on one alone. Papers link it to 2 constructs, Generalization and Reasoning, and to 6 behavioral indicators, including Agent intention prediction, Color recognition, Diagram understanding, Multiple-choice question answering, and Object counting, plus 1 other behavioral indicator. The relationship evidence also frames it as covering perception and reasoning subtasks, and one paper uses the Lite Reasoning subset and the remaining Reasoning subset to test generalization.

**Space of uses.** Papers use it as an evaluation benchmark for model comparisons, sometimes as one of several challenging benchmarks and sometimes as a further real-world application check. One paper reports sub-task results within the benchmark, for example on MO/Orientation, AD/Intention, and OCR/license. Among linked instruments, papers only connect it to VLMEvalKit, which one study names as the evaluation framework, and one subset-based setup builds an Error-book on MME-RealWorld-Lite (Reasoning) before applying it to the remaining Reasoning subset.

## Sources

**[Efficient Multi-modal Long Context Learning for Training-free Adaptation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ma25v/ma25v.pdf) (as "MME-RW")**
> A benchmark for real-world multi-modal tasks used to assess vision-language performance.

**[Retrieval-Augmented Perception: High-resolution Image Perception Meets Visual RAG](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25at/wang25at.pdf)**
> A manually curated multimodal benchmark for real-world scenarios with multiple categories and sub-tasks, including monitoring, autonomous driving, OCR, property, and text/address tasks.

## Relationships

### → MME-RealWorld
- **Reasoning** (constructs) — *measured_by*
  > Our benchmark contains 5 real-world domains, covering 43 perception and reasoning subtasks. (Figure 1)
  - [MME-RealWorld: Could Your Multimodal LLM Challenge High-Resolution Real-World Scenarios that are Difficult for Humans?](https://proceedings.iclr.cc/paper_files/paper/2025/file/df29d63af05cb91d705cf06ba5945b9d-Paper-Conference.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > For each question, we manually construct four options, with one being the correct answer... We try to use the model's default prompt for multiple-choice questions...
  - [MME-RealWorld: Could Your Multimodal LLM Challenge High-Resolution Real-World Scenarios that are Difficult for Humans?](https://proceedings.iclr.cc/paper_files/paper/2025/file/df29d63af05cb91d705cf06ba5945b9d-Paper-Conference.pdf)
- **Object counting** (behaviors tasks) — *measured_by*
  > There are 3 perception tasks: object counting, color recognition, and spatial relationship understanding. (Section 2.2)
  - [MME-RealWorld: Could Your Multimodal LLM Challenge High-Resolution Real-World Scenarios that are Difficult for Humans?](https://proceedings.iclr.cc/paper_files/paper/2025/file/df29d63af05cb91d705cf06ba5945b9d-Paper-Conference.pdf)
- **Agent intention prediction** (behaviors tasks) — *measured_by*
  > Intention Prediction: focus on predicting driving intention of a designated traffic agent in the short-term future. (Section 2.2)
  - [MME-RealWorld: Could Your Multimodal LLM Challenge High-Resolution Real-World Scenarios that are Difficult for Humans?](https://proceedings.iclr.cc/paper_files/paper/2025/file/df29d63af05cb91d705cf06ba5945b9d-Paper-Conference.pdf)
- **Diagram understanding** (behaviors tasks) — *measured_by*
  > MME-RealWorld covers complex visual reasoning tasks derived from realistic applications across diverse domains (e.g., Autonomous Driving, Diagrams, OCR) (Section 4.1).
  - [Retrieval Enhanced Feedback via In-context Neural Error-book](https://aclanthology.org/2025.emnlp-main.711.pdf)
- **Generalization** (constructs) — *measured_by*
  > After creating an Error-book based on MME-RealWorld-Lite (Reasoning) subset, we applied it directly to the remaining MME-RealWorld Reasoning subset, excluding the Lite portion to rigorously test generalization (Section 4.1).
  - [Retrieval Enhanced Feedback via In-context Neural Error-book](https://aclanthology.org/2025.emnlp-main.711.pdf)

### Associated with
- **VLMEvalKit** (measurements)
  > "The evaluation framework employed for these benchmarks was VLMEvalKit (Duan et al., 2024)."
  - [Retrieval Enhanced Feedback via In-context Neural Error-book](https://aclanthology.org/2025.emnlp-main.711.pdf)
