# MMVP
**Type:** Measurement  
**Referenced in:** 18 papers  

## State of the Field

**What it is.** Across papers, MMVP is most commonly described as a benchmark for fine-grained visual recognition or visual detail understanding, built from CLIP-blind pairs of visually similar images with a binary-option question for each pair. Definitions also describe it as containing 150 image pairs and covering 9 visual patterns, with paired classification accuracy used for evaluation. A smaller line of work places it under single-image VQA or, more broadly, among multi-image benchmarks for probing visual shortcomings, and one paper notes converting it to paired image-text format without altering the content.

**What it is claimed to measure.** Papers use MMVP to measure a broad range of targets rather than one shared construct: it is linked to 9 constructs and 2 behavioral indicators. The constructs most often listed are Visual understanding, Compositional reasoning, Fine-grained perception, Fine-grained visual understanding, and Multimodal perception, with 4 other constructs also linked, while the behavioral indicators are Fine-grained visual recognition and Visual question answering. In the relationship evidence, papers also frame it as evaluating visual perception, visual reasoning, visual grounding, and multimodal understanding.

**Space of uses.** Papers often position MMVP as a vision-centric or fine-grained evaluation benchmark within larger benchmark suites. It appears alongside RealWorldQA, CV-Bench, MME, MMBench, and ChartQA, with additional use beside POPE, Winoground, and EQBEN in evaluations of perception, understanding, grounding, or compositional reasoning. Some papers single it out as a vision-centric or fine-grained comprehension check, while others include it inside broader general VQA or multimodal understanding evaluations.

**Concerns raised.** One practical caveat appears in a paper that says MMVP was not in paired image-text format for its evaluation setup, so the authors manually converted it without altering the content.

## Sources

**[Self-Correcting Decoding with Generative Feedback for Mitigating Hallucinations in Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/109cf25cbc36037deecdbeabfa199956-Paper-Conference.pdf)**
> A benchmark that evaluates the fine-grained visual recognition capabilities of LVLMs using pairs of visually similar (CLIP-blind) images, each with a binary-option question.

## Relationships

### → MMVP
- **Visual understanding** (constructs) — *measured_by*
  > MMVP [53] aims to evaluate the understanding of visual details for 9 different visual patterns using paired classification accuracy. (Section 4)
  - [CODE: Contrasting Self-generated Description to Combat Hallucination in Large Multi-modal Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/f1592b0d4ab737e18bb1899484d28d96-Paper-Conference.pdf)
- **Visual grounding** (constructs) — *measured_by*
  > the vision-disabled performance on benchmarks like MMVP is notably worse than random guessing, suggesting that strong visual grounding is particularly crucial. (Section 2.1)
  - [Cambrian-1: A Fully Open, Vision-Centric Exploration of Multimodal LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/9ee3a664ccfeabc0da16ac6f1f1cfe59-Paper-Conference.pdf)
- **Compositional reasoning** (constructs) — *measured_by*
  > Fine-tuning on this data enhances the model’s ability to distinguish between similar images, showing improvements on challenging benchmarks like Winoground, MMVP, and EQBEN, which test compositional reasoning and fine-grained understanding. (Section 6.1)
  - [VisMin: Visual Minimal-Change Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/c3070c3388552a08a3326f0d28dc2af9-Paper-Conference.pdf)
- **Visual perception** (constructs) — *measured_by*
  > We conducted extensive evaluations of DEEM on RobustVQA and two widely recognized benchmarks, POPE and MMVP, for visual hallucination and perception respectively (Section 1).
  - [DEEM: Diffusion models serve as the eyes of large language models for image perception](https://proceedings.iclr.cc/paper_files/paper/2025/file/a8399aace3dfa6dfb8b635117748c561-Paper-Conference.pdf)
- **Fine-grained visual recognition** (behaviors tasks) — *measured_by*
  > MMVP (Tong et al., 2024) collects CLIP-blind pairs and evaluates the fine-grained visual recognition capabilities of LVLMs (Section 4.1).
  - [Self-Correcting Decoding with Generative Feedback for Mitigating Hallucinations in Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/109cf25cbc36037deecdbeabfa199956-Paper-Conference.pdf)
- **Fine-grained visual understanding** (constructs) — *measured_by*
  > We evaluate our each variant of ROSS mainly on ... (ii) fine-grained comprehension: MMVP (Tong et al., 2024b) and ChartQA (Masry et al., 2022) (Section 5.1)
  - [Reconstructive Visual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/259a5df46308d60f8454bd4adcc3b462-Paper-Conference.pdf)
- **Fine-grained perception** (constructs) — *measured_by*
  > Among these benchmarks, MMVP mainly focuses on fine-grained perception. (Section 4.1)
  - [HaploVL: A Single-Transformer Baseline for Multi-Modal Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25ab/yang25ab.pdf)
- **Visual question answering** (behaviors tasks) — *measured_by*
  > General VQA: Assessing visual perception and reasoning abilities through single-image question answering, including MMBench (Liu et al., 2025b), MME (Fu et al., 2023), and MMVP (Zhong et al., 2023). (Section 4.5).
  - [CoMemo: LVLMs Need Image Context with Image Memory](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25bn/liu25bn.pdf)
- **Multimodal perception** (constructs) — *measured_by*
  > “Perception: Following (Tong et al., 2024a), we conduct experiments on 4 types of perception task (i.e., general, knowledge, ocr, and vision-centric) across 16 benchmarks: MME (Fu et al., 2023), MMBench (Liu et al., 2025), SEED (Li et al., 2024), GQA (Hudson & Manning, 2019), ScienceQA (Lu et al., 2022), MMMU (Yue et al., 2024), MathVista (Lu et al., 2024), AI2D (Kembhavi et al., 2016), ChartQA (Masry et al., 2022), OCRBench (Liu et al., 2024), TextVQA (Singh et al., 2019), DocVQA (Mathew et al., 2021), MMVP (Tong et al., 2024b), RealworldQA (xAI, 2024), and CV-Bench (Tong et al., 2024a).”
  - [MODA: MOdular Duplex Attention for Multimodal Perception, Cognition, and Emotion Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cg/zhang25cg.pdf)
- **Multimodal understanding** (constructs) — *measured_by*
  > To evaluate multimodal understanding capabilities, we conduct evaluations on six widely-used benchmarks: RealworldQA (XAI, 2024), MMVP (Tong et al., 2024b), ScienceQA (Lu et al., 2022), VStar (Wu and Xie, 2023), MME (Fu et al., 2024), and POPE (Li et al., 2023b). (Section 4.2)
  - [UnifiedVisual: A Framework for Constructing Unified Vision-Language Datasets](https://aclanthology.org/2025.emnlp-main.1572.pdf)
