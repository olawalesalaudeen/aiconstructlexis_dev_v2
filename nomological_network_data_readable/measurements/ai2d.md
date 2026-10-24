# AI2D
**Type:** Measurement  
**Referenced in:** 44 papers  

## State of the Field

**What it is.** Across papers, AI2D is most commonly described as a benchmark or dataset of diagrams, usually science or textbook diagrams, for diagram understanding and question answering. Many descriptions also treat it as an evaluation of diagram comprehension, interpretation, or reasoning, and one paper frames it around scientific knowledge and mathematical reasoning. Some authors add format detail, describing diagrams paired with questions and answers, exhaustive annotations of constituents and relationships, and multiple-choice questions; papers also mention named forms such as AI2D-Test and AI2D-RST.

**What it is claimed to measure.** Papers link AI2D to 5 constructs and 4 behavioral indicators, so its reported measurement claims are spread across several targets rather than centered on one construct. The prevailing use is diagram-focused: papers use it to measure Diagram understanding, Chart and diagram understanding, Multiple-choice visual question answering, and Visual question answering. Broader construct-level uses are also reported, with AI2D used to measure Document understanding and 4 other constructs.

**Space of uses.** Papers do not claim direct links from AI2D to other measurement instruments. Instead, they often place it in broader benchmark suites alongside DocVQA, ChartQA, MMMU, MME, and MMBench. In those settings it is typically positioned as a representative or domain-specific evaluation for diagram or science-diagram capability, and one paper evaluates visual question answering on AI2D through Vlmevalkit.

**Concerns raised.** One paper refers to AI2D-Test and reports an "abnormal hit rate" for AI2D.

## Sources

**[LiveXiv - A Multi-Modal live benchmark based on Arxiv papers content](https://proceedings.iclr.cc/paper_files/paper/2025/file/1eaa1373fe55b223c2dfe1fd29a277d7-Paper-Conference.pdf)**
> The Allen Institute for AI Diagrams (AI2D) benchmark, an established dataset for diagram understanding and question answering.

## Relationships

### → AI2D
- **Diagram understanding** (behaviors tasks) — *measured_by*
  > For domain-specific evaluations, we choose AI2D to gauge diagram comprehension (Section 5.2)
  - [Prism: A Framework for Decoupling and Assessing the Capabilities of VLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/cac9e747a1d480c78312226959566cef-Paper-Conference.pdf)
- **Chart and diagram understanding** (behaviors tasks) — *measured_by*
  > Benchmarks that involve spatial understanding and fine-grained features include ... chart understanding (AI2D; Kembhavi et al. 2016)... (Section 5)
  - [Locality Alignment Improves Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ce6326ac4794bb04d5eb16f597446baf-Paper-Conference.pdf)
- **Visual reasoning** (constructs) — *measured_by*
  > To estimate the downstream error Y (N, C), we test our trained VLMs on a suite of nine commonly used benchmarks for evaluating visual reasoning: MME (Fu et al., 2024), GQA (Hudson & Manning, 2019), AI2D (Kembhavi et al., 2016), MMBench (Liu et al., 2024c), MMMU (Yue et al., 2023), ScienceQA (Lu et al., 2022), MathVista (Lu et al., 2024), POPE (Li et al., 2023c), and ChartQA (Masry et al., 2022). (Section 3.2)
  - [Inference Optimal VLMs Need Fewer Visual Tokens and More Parameters](https://proceedings.iclr.cc/paper_files/paper/2025/file/ef748b4544e8f12d608fd28bbf04177f-Paper-Conference.pdf)
- **Multiple-choice visual question answering** (behaviors tasks) — *measured_by*
  > Note that SQA-I, AI2D, RWQA and MMMU are MCVQ datasets, while the others are VQA. (Section 5.1)
  - [Ranked from Within: Ranking Large Multimodal Models Without Labels](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tu25a/tu25a.pdf)
- **Multimodal reasoning** (constructs) — *measured_by*
  > To further investigate how well M-STAR generalizes to multiple benchmarks, we select four extra multi-modal ones focus on reasoning as well: M3CoT (Chen et al., 2024b), MMStar (Chen et al., 2024a), MMBench (Dev set, v1.1) (Liu et al., 2025), AI2D (Kembhavi et al., 2016). (Section 4.2)
  - [Diving into Self-Evolving Training for Multimodal Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25aj/liu25aj.pdf)
- **Multimodal perception** (constructs) — *measured_by*
  > “Perception: Following (Tong et al., 2024a), we conduct experiments on 4 types of perception task (i.e., general, knowledge, ocr, and vision-centric) across 16 benchmarks: MME (Fu et al., 2023), MMBench (Liu et al., 2025), SEED (Li et al., 2024), GQA (Hudson & Manning, 2019), ScienceQA (Lu et al., 2022), MMMU (Yue et al., 2024), MathVista (Lu et al., 2024), AI2D (Kembhavi et al., 2016), ChartQA (Masry et al., 2022), OCRBench (Liu et al., 2024), TextVQA (Singh et al., 2019), DocVQA (Mathew et al., 2021), MMVP (Tong et al., 2024b), RealworldQA (xAI, 2024), and CV-Bench (Tong et al., 2024a).”
  - [MODA: MOdular Duplex Attention for Multimodal Perception, Cognition, and Emotion Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cg/zhang25cg.pdf)
