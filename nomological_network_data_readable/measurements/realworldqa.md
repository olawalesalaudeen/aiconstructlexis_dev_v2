# RealWorldQA
**Type:** Measurement  
**Referenced in:** 17 papers  
**Also known as:** RealworldQA  

## State of the Field

**What it is.** Across papers, RealWorldQA is most commonly described as a benchmark or dataset of questions about real-world images. The most specific definition presents it as multiple-choice questions over anonymized outdoor and indoor images, scored by accuracy, and aimed at basic real-world spatial understanding. Other papers frame it more broadly as practical, real-world visual understanding, or as a multimodal question-answering benchmark used to assess general capability in real-world question answering.

**What it is claimed to measure.** Papers use RealWorldQA to measure a range of constructs rather than a single shared target. It is linked to 7 constructs and no behavioral indicators, with the listed uses covering fine-grained perception, multimodal perception, multimodal understanding, reasoning, and spatial understanding, with additional papers placing it under other perception and understanding constructs. Across the relationship evidence, papers state that these constructs are measured by RealWorldQA.

**Space of uses.** No other measurement instrument is linked to it. In practice, papers often evaluate it alongside MMMU, MMVP, ScienceQA, MME, and SEED-Bench, usually as part of broad multimodal, perception-focused, or vision-centric benchmark suites. A smaller line of work uses it as a general-capability check under safety interventions, while another description emphasizes its multiple-choice accuracy setting.

## Sources

**[CODE: Contrasting Self-generated Description to Combat Hallucination in Large Multi-modal Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/f1592b0d4ab737e18bb1899484d28d96-Paper-Conference.pdf) (as "RealworldQA")**
> A dataset designed to assess an LMM's basic spatial understanding in real-world contexts through multiple-choice questions based on anonymized outdoor and indoor images.

**[Dynamic-LLaVA: Efficient Multimodal Large Language Models via Dynamic Vision-language Context Sparsification](https://proceedings.iclr.cc/paper_files/paper/2025/file/aeafb73dfed3007ec5299be1604d6f99-Paper-Conference.pdf)**
> A benchmark featuring questions about real-world images to assess practical, real-world visual understanding.

## Relationships

### → RealWorldQA
- **Spatial understanding** (constructs) — *measured_by*
  > RealworldQA [57] is the most recent dataset tailored to assess the capability of LMMs in basic real-world spatial understanding, using the accuracy metric within multiple-choice questions. (Section 4)
  - [CODE: Contrasting Self-generated Description to Combat Hallucination in Large Multi-modal Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/f1592b0d4ab737e18bb1899484d28d96-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > Reasoning is benchmarked using GQA [15], MathVista [29], Mementos [43], SEED-Bench [22], and RealWorldQA [13] in VHELM. (Section 3.1)
  - [VHELM: A Holistic Evaluation of Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe2fc7dc60b55ccd8886220b40fb1f74-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Visual understanding** (constructs) — *measured_by*
  > Furthermore, we also use the vision-centric vision understanding benchmarks, such as MMVP (Tong et al., 2024b), RealWorldQA (xAI, 2024) and CVBench-2D (Tong et al., 2024a). (Section 4.1)
  - [Dynamic-LLaVA: Efficient Multimodal Large Language Models via Dynamic Vision-language Context Sparsification](https://proceedings.iclr.cc/paper_files/paper/2025/file/aeafb73dfed3007ec5299be1604d6f99-Paper-Conference.pdf)
- **Multimodal perception** (constructs) — *measured_by*
  > “Perception: Following (Tong et al., 2024a), we conduct experiments on 4 types of perception task (i.e., general, knowledge, ocr, and vision-centric) across 16 benchmarks: MME (Fu et al., 2023), MMBench (Liu et al., 2025), SEED (Li et al., 2024), GQA (Hudson & Manning, 2019), ScienceQA (Lu et al., 2022), MMMU (Yue et al., 2024), MathVista (Lu et al., 2024), AI2D (Kembhavi et al., 2016), ChartQA (Masry et al., 2022), OCRBench (Liu et al., 2024), TextVQA (Singh et al., 2019), DocVQA (Mathew et al., 2021), MMVP (Tong et al., 2024b), RealworldQA (xAI, 2024), and CV-Bench (Tong et al., 2024a).”
  - [MODA: MOdular Duplex Attention for Multimodal Perception, Cognition, and Emotion Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cg/zhang25cg.pdf)
- **Visual perception** (constructs) — *measured_by*
  > The perception-focused benchmarks include RealWorldQA, CV-Bench and BLINK (Section 4)
  - [LATTE: Learning to Think with Vision Specialists](https://aclanthology.org/2025.emnlp-main.564.pdf)
- **Multimodal understanding** (constructs) — *measured_by*
  > To evaluate multimodal understanding capabilities, we conduct evaluations on six widely-used benchmarks: RealworldQA (XAI, 2024), MMVP (Tong et al., 2024b), ScienceQA (Lu et al., 2022), VStar (Wu and Xie, 2023), MME (Fu et al., 2024), and POPE (Li et al., 2023b). (Section 4.2)
  - [UnifiedVisual: A Framework for Constructing Unified Vision-Language Datasets](https://aclanthology.org/2025.emnlp-main.1572.pdf)
- **Fine-grained perception** (constructs) — *measured_by*
  > The Vision-centric category emphasize fine-grained perception and localization, including... RealWorldQA (real-world QA)... (Section 3)
  - [Multimodal Language Models See Better When They Look Shallower](https://aclanthology.org/2025.emnlp-main.339.pdf)
