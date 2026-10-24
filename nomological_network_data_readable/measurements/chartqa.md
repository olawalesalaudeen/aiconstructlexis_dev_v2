# ChartQA
**Type:** Measurement  
**Referenced in:** 56 papers  
**Also known as:** VQAChart  

## State of the Field

**What it is.** Across the papers, ChartQA is most commonly described as a benchmark or dataset for question answering about charts, often framed as requiring both visual perception and logical reasoning. Several descriptions make that more specific by mentioning item comparison, counting, numerical computation, or even complex, multi-step logical and visual reasoning; a smaller set of papers frames it more broadly as figure QA or a document task dataset, and one paper refers to it as VQAChart. Papers also vary in how they describe its contents, including real-world charts from sources such as Statista and Pew Research, human-created and LLM-augmented questions in one account, and a mixture of handwritten and machine-generated questions in another; one reuse paper states that it contains 18K real-world charts and 23.1K human-authored QA pairs.

**What it is claimed to measure.** Papers link ChartQA to 5 behavioral indicators and 4 constructs, so its reported measurement role is spread across chart-specific evaluation and broader multimodal assessment rather than concentrated on a single target. Among behavioral indicators, papers most often use it to measure chart and diagram understanding and visual question answering, followed by chart question answering, information retrieval, and optical character recognition. Among constructs, papers report it as measuring document understanding, fine-grained visual understanding, multimodal perception, and visual reasoning.

**Space of uses.** No measurement instrument is linked to it by recorded relationships. In practice, papers usually position ChartQA as a representative or prior benchmark inside larger evaluation suites, often alongside DocVQA, InfoVQA, PlotQA, Chart-to-Text, and OpenCQA, and several snippets place it among OCR or single-page document understanding evaluations. A smaller line of work reuses it as source material, for example by sampling it into F2TBenchmark, sourcing a subset for tabular dialogue scenarios, or creating chart triplets to test pure image processing.

**Concerns raised.** Only a few papers state explicit concerns. One says that although ChartQA includes a mixture of handwritten and machine-generated questions, the charts lack visual diversity, and another describes prevailing benchmarks like ChartQA as predominantly comprising scanned or digital documents.

## Sources

**[SV-RAG: LoRA-Contextualizing Adaptation of  MLLMs for Long Document Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/0d40c7b4d78bf7f08ba532542818f6c0-Paper-Conference.pdf)**
> Chart question answering benchmark referenced as a prior single-page document understanding dataset.

**[Seeing the Image: Prioritizing Visual Correlation by Contrastive Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/37294f033582ac0064bf90fa557c2573-Paper-Conference.pdf) (as "VQAChart")**
> A chart question answering benchmark used to assess answering questions about charts and diagrams.

## Relationships

### → ChartQA
- **Visual question answering** (behaviors tasks) — *measured_by*
  > In this section, we present the experiment results of STIC across seven visual question answering (VQA) benchmarks. We consider the widely used benchmarks for LVLM evaluation across different domains including: ScienceQA... TextVQA... ChartQA
  - [Enhancing Large Vision Language Models with Self-Training on Image Comprehension](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed45d6a03de84cc650cae0655f699356-Paper-Conference.pdf)
- **Document understanding** (constructs) — *measured_by*
  > document understanding/Optical character recognition (OCR) benchmarks: DocVQA (Mathew et al., 2021), ChartQA (Masry et al., 2022), AI2D (Kembhavi et al., 2016) and TextVQA (Singh et al., 2019). (Section 4.1)
  - [Matryoshka Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/722fcbc1a6667f2075d75ea79a1b3552-Paper-Conference.pdf)
- **Fine-grained visual understanding** (constructs) — *measured_by*
  > We evaluate our each variant of ROSS mainly on ... (ii) fine-grained comprehension: MMVP (Tong et al., 2024b) and ChartQA (Masry et al., 2022) (Section 5.1)
  - [Reconstructive Visual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/259a5df46308d60f8454bd4adcc3b462-Paper-Conference.pdf)
- **Chart and diagram understanding** (behaviors tasks) — *measured_by*
  > 2) OCR/document/chart understanding: OCRBench (Liu et al., 2023f), DocVQA (Mathew et al., 2021), ChartQA (Masry et al., 2022); (Section 2.1)
  - [Eagle: Exploring The Design Space for Multimodal LLMs with Mixture of Encoders](https://proceedings.iclr.cc/paper_files/paper/2025/file/e78457d4a04b8565f1fe5077df13cddb-Paper-Conference.pdf)
- **Chart question answering** (behaviors tasks) — *measured_by*
  > "ChartQA (Masry et al., 2022) | Figure QA"
  - [F2TEval: Human-Aligned Multi-Dimensional Evaluation for Figure-to-Text Task](https://aclanthology.org/2025.emnlp-main.195.pdf)
- **Visual reasoning** (constructs) — *measured_by*
  > To estimate the downstream error Y (N, C), we test our trained VLMs on a suite of nine commonly used benchmarks for evaluating visual reasoning: MME (Fu et al., 2024), GQA (Hudson & Manning, 2019), AI2D (Kembhavi et al., 2016), MMBench (Liu et al., 2024c), MMMU (Yue et al., 2023), ScienceQA (Lu et al., 2022), MathVista (Lu et al., 2024), POPE (Li et al., 2023c), and ChartQA (Masry et al., 2022). (Section 3.2)
  - [Inference Optimal VLMs Need Fewer Visual Tokens and More Parameters](https://proceedings.iclr.cc/paper_files/paper/2025/file/ef748b4544e8f12d608fd28bbf04177f-Paper-Conference.pdf)
- **Information retrieval** (behaviors tasks) — *measured_by*
  > We employ question-document pairs from various VQA datasets, each targeting distinct document types: MP-DocVQA (Tito et al., 2023) for industrial documents, ArXivQA (Li et al., 2024), ChartQA (Masry et al., 2022), InfographicsVQA (Mathew et al., 2022), and PlotQA (Methani et al., 2020) for different types of figures, as well as SlideVQA (Tanaka et al., 2023) for presentation slides. (Section 3.1)
  - [Unveil: Unified Visual-Textual Integration and Distillation for Multi-modal Document Retrieval](https://aclanthology.org/2025.acl-long.1166.pdf)
- **Optical character recognition** (behaviors tasks) — *measured_by*
  > ChartQA (Masry et al., 2022), OCRVQA (Mishra et al., 2019), TextVQA (Singh et al., 2019) and DocVQA (Mathew et al., 2021) to examine their ability to recognize optical character (Section 5.1)
  - [Ranked from Within: Ranking Large Multimodal Models Without Labels](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tu25a/tu25a.pdf)
- **Multimodal perception** (constructs) — *measured_by*
  > “Perception: Following (Tong et al., 2024a), we conduct experiments on 4 types of perception task (i.e., general, knowledge, ocr, and vision-centric) across 16 benchmarks: MME (Fu et al., 2023), MMBench (Liu et al., 2025), SEED (Li et al., 2024), GQA (Hudson & Manning, 2019), ScienceQA (Lu et al., 2022), MMMU (Yue et al., 2024), MathVista (Lu et al., 2024), AI2D (Kembhavi et al., 2016), ChartQA (Masry et al., 2022), OCRBench (Liu et al., 2024), TextVQA (Singh et al., 2019), DocVQA (Mathew et al., 2021), MMVP (Tong et al., 2024b), RealworldQA (xAI, 2024), and CV-Bench (Tong et al., 2024a).”
  - [MODA: MOdular Duplex Attention for Multimodal Perception, Cognition, and Emotion Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cg/zhang25cg.pdf)
