# MMStar
**Type:** Measurement  
**Referenced in:** 31 papers  

## State of the Field

**What it is.** Across papers, MMStar is most commonly described as a single-image or multimodal benchmark for evaluating large vision-language models, often framed as vision-indispensable and built from 1,500 human-selected or curated samples. Several papers say it is designed so that visual content is necessary for the correct answer, and some descriptions add that it evaluates 6 core capabilities with 18 detailed axes. Most definitions cast it broadly as assessing visual-language understanding, general understanding, reasoning, or advanced capabilities, though some papers describe it more narrowly as an image question-answering benchmark, and a smaller line of work places it among math-related benchmarks.

**What it is claimed to measure.** Papers use MMStar to measure a broad set of targets rather than a single outcome. It is linked to 12 constructs and 1 behavioral indicator; the most frequent construct links frame it as measuring logical reasoning, reasoning, visual perception, and fine-grained perception, and papers also report it as evaluating visual question answering. Other links extend to additional reasoning and perception constructs.

**Space of uses.** Papers commonly use MMStar alongside MMBench, MathVista, MathVerse, and MathVision, among other benchmarks. Some position it as a primary benchmark or primary evaluation metric, while others include it as one of several single-image, question-answering, or reasoning checks. One paper repurposes two of its internal categories into train and test splits for an error-book setup, and another states that MMStar is measured by VLMEvalKit as the evaluation framework.

**Concerns raised.** Descriptions of MMStar often focus on evaluation concerns it is meant to address. Papers say it aims to minimize data leakage, ensure vision indispensability, exclude questions solvable by blind language models, and, in one description, use high-quality multiple-choice questions to alleviate misjudgment issues.

## Sources

**[MIA-DPO: Multi-Image Augmented Direct Preference Optimization For Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/557a20663907ed637c2807f608d5bec2-Paper-Conference.pdf)**
> A single-image benchmark used to evaluate visual-language understanding.

## Relationships

### → MMStar
- **Logical reasoning** (constructs) — *measured_by*
  > We further analyze the detailed scores on MM-Star (Chen et al., 2024a), including coarse perception (CP), fine-grained perception (FP), instance reasoning (IR), logical reasoning (LR)... (Table 4)
  - [HaploVL: A Single-Transformer Baseline for Multi-Modal Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25ab/yang25ab.pdf)
- **Reasoning** (constructs) — *measured_by*
  > MMStar and MMBench (Chen et al., 2024a; Liu et al., 2025) provide comprehensive evaluations by categorizing VLM tasks into two primary domains: perception and reasoning. (Section 5.1)
  - [SECOND: Mitigating Perceptual Hallucination in Vision-Language Models via Selective and Contrastive Decoding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/park25c/park25c.pdf)
- **Visual perception** (constructs) — *measured_by*
  > We further evaluate our trained model over six benchmarks that examines LVLMs general perception capability, including SEED-Bench [36], ScienceQA [49], GQA [28], Vizwiz [22], MMBench [48] and MMStar [8]... (Appendix D.1)
  - [Mitigating Object Hallucination via Concentric Causal Attention](https://proceedings.neurips.cc/paper_files/paper/2024/file/a76ed4a8ef522c823d73925e7fff16d4-Paper-Conference.pdf)
- **Fine-grained perception** (constructs) — *measured_by*
  > We further analyze the detailed scores on MM-Star (Chen et al., 2024a), including coarse perception (CP), fine-grained perception (FP), instance reasoning (IR), logical reasoning (LR)... (Table 4)
  - [HaploVL: A Single-Transformer Baseline for Multi-Modal Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25ab/yang25ab.pdf)
- **Mathematical reasoning** (constructs) — *measured_by*
  > The performance of LLaVA-Next-LLaMA3-8B model with merged task vectors across math-related Benchmarks: MathVista ..., MathVerse ..., MMStar ..., DynaMath ..., MathVision ... (Table 2)
  - [Bring Reason to Vision: Understanding Perception and Reasoning through Model Merging](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25cm/chen25cm.pdf)
- **Visual question answering** (behaviors tasks) — *measured_by*
  > These benchmarks include visual question answering datasets GQA (Hudson and Manning, 2019), MME (Fu et al., 2024), MMBench (Liu et al., 2024), and MMStar (Chen et al., 2024b) (Table 5)
  - [VisiPruner: Decoding Discontinuous Cross-Modal Dynamics for Efficient Multimodal LLMs](https://aclanthology.org/2025.emnlp-main.955.pdf)
- **Data leakage** (constructs) — *measured_by*
  > We evaluate 16 leading LVLMs on MMStar to assess their multi-modal capabilities, and on 7 benchmarks with the proposed metrics to investigate their data leakage and actual multi-modal gain. (Abstract)
  - [Are We on the Right Way for Evaluating Large Vision-Language Models?](https://proceedings.neurips.cc/paper_files/paper/2024/file/2f8ee6a3d766b426d2618e555b5aeb39-Paper-Conference.pdf)
- **Visual grounding** (constructs) — *measured_by*
  > “MMStar [8] is a vision-indispensible benchmark, which requires better visual grounding in trained LVLMs.”
  - [Mitigating Object Hallucination via Concentric Causal Attention](https://proceedings.neurips.cc/paper_files/paper/2024/file/a76ed4a8ef522c823d73925e7fff16d4-Paper-Conference.pdf)
- **Visual understanding** (constructs) — *measured_by*
  > To assess their visual understanding capability, numerous benchmarks have been developed, focusing on question-answering tasks, such as MMVet (Yu et al., 2023), MMStar (Chen et al., 2024a), and MMMU (Yue et al., 2024). (Section 1)
  - [Painting with Words: Elevating Detailed Image Captioning with Benchmark and Alignment Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/c6af791af7ef0f3e02bccef011211ca5-Paper-Conference.pdf)
- **Multimodal understanding** (constructs) — *measured_by*
  > MMStar benchmarks 6 core capabilities and 18 detailed axes, aiming to evaluate LVLMs’ multi-modal capacities with carefully balanced and purified samples. (Abstract)
  - [Are We on the Right Way for Evaluating Large Vision-Language Models?](https://proceedings.neurips.cc/paper_files/paper/2024/file/2f8ee6a3d766b426d2618e555b5aeb39-Paper-Conference.pdf)
- **Multimodal reasoning** (constructs) — *measured_by*
  > To further investigate how well M-STAR generalizes to multiple benchmarks, we select four extra multi-modal ones focus on reasoning as well: M3CoT (Chen et al., 2024b), MMStar (Chen et al., 2024a), MMBench (Dev set, v1.1) (Liu et al., 2025), AI2D (Kembhavi et al., 2016). (Section 4.2)
  - [Diving into Self-Evolving Training for Multimodal Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25aj/liu25aj.pdf)
- **General ability** (constructs) — *measured_by*
  > “We adopt MMStar (Chen et al., 2024c), an advanced benchmark of evaluation the comprehensive capabilities of LVLMs, as the primary evaluation metric.” (Section 4.1)
  - [Towards Rationale-Answer Alignment of LVLMs via Self-Rationale Calibration](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25am/wu25am.pdf)

### Associated with
- **VLMEvalKit** (measurements)
  > "The evaluation framework employed for these benchmarks was VLMEvalKit (Duan et al., 2024)."
  - [Retrieval Enhanced Feedback via In-context Neural Error-book](https://aclanthology.org/2025.emnlp-main.711.pdf)
