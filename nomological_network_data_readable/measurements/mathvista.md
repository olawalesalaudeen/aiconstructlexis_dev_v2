# MathVista
**Type:** Measurement  
**Referenced in:** 72 papers  
**Also known as:** MATHVISTA  

## State of the Field

**What it is.** Papers most commonly describe MathVista as a benchmark for mathematical reasoning in visual or multimodal contexts. Definitions emphasize image-based puzzles and evaluation across reasoning types, including logical, arithmetic, and geometric reasoning, and across image contexts such as natural images, line plots, and scientific figures. Some authors describe it more broadly as combining mathematical and visual understanding across 31 existing multimodal datasets and 3 newly created datasets, totaling 6141 examples, and as including both math-related reasoning and general visual question answering tasks. A smaller line of work uses particular portions of the benchmark, especially the geometry problem solving task on the testmini split.

**What it is claimed to measure.** Across papers, the prevailing use is to measure mathematical reasoning. Papers link it to 8 constructs and 2 behavioral indicators; beyond mathematical reasoning, recurring links include reasoning and geometric reasoning, and the two behavioral indicators are visual question answering and chart and diagram understanding. Five other construct links are also reported, so the claims center on mathematical reasoning but extend across several neighboring reasoning targets.

**Space of uses.** No measurement instrument is linked to it. Even so, papers frequently use it alongside other multimodal benchmarks, for example MMMU, ScienceQA, MathVision, GeoQA, and MMStar, and some place it inside broader VQA, reasoning, or perception suites rather than only as a standalone math evaluation. Another use is as a source benchmark for derived evaluations, with one paper stating that MMEVALPRO includes "all 540 from MathVista." Some studies also use selected portions, especially the geometry problem solving task or the testmini split, including as an out-of-domain test set.

**Concerns raised.** A recurring qualification is that papers do not always treat MathVista as a purely mathematical benchmark. Some note that 30%-40% of its questions fall outside traditional mathematics, including scientific figure understanding, general VQA, and chart, table, or diagram QA, and another description says it mixes math-related reasoning with general visual question answering tasks. One paper also reports that correlations between MathVista and other benchmarks designed to evaluate mathematical abilities are "not particularly strong."

## Sources

**[Evaluating Large Vision-and-Language Models on Children's Mathematical Olympiads](https://proceedings.neurips.cc/paper_files/paper/2024/file/1cc12fb3d4033ad72d33a51f1d0ab5d0-Paper-Datasets_and_Benchmarks_Track.pdf) (as "MATHVISTA")**
> A benchmark for mathematical reasoning in LVLMs that involves puzzles with images and categorizes problems by reasoning type and image context.

**[G-LLaVA: Solving Geometric Problem with Multi-Modal Large Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/09afabe33dc7db66530dea6483b22e5d-Paper-Conference.pdf)**
> A benchmark for evaluating mathematical reasoning capabilities of large models, which includes a specific task for geometry problem solving.

## Relationships

### → MathVista
- **Mathematical reasoning** (constructs) — *measured_by*
  > In this paper, we present MATHVISTA, a consolidated Mathematical reasoning benchmark in Visual contexts. (Section 1)
  - [MathVista: Evaluating Mathematical Reasoning of Foundation Models in Visual Contexts](https://proceedings.iclr.cc/paper_files/paper/2024/file/663bce02a0050c4a11f1eb8a7f1429d3-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > For general reasoning, benchmarks like MathVista [31] and MMMU [32] assess models on tasks involving multiple-choice and free-form questions, with a focus on multimodal data.
  - [Benchmarking Generative Models on Computational Thinking Tests in Elementary Visual Programming](https://proceedings.neurips.cc/paper_files/paper/2024/file/6d5e00006b65fcc55c3c1798da821663-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Visual question answering** (behaviors tasks) — *measured_by*
  > In this section, we present the experiment results of STIC across seven visual question answering (VQA) benchmarks. We consider the widely used benchmarks for LVLM evaluation across different domains including: ScienceQA... TextVQA... ChartQA... LLaVA-Bench... MMBench... MM-Vet... and MathVista
  - [Enhancing Large Vision Language Models with Self-Training on Image Comprehension](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed45d6a03de84cc650cae0655f699356-Paper-Conference.pdf)
- **Geometric reasoning** (constructs) — *measured_by*
  > "We evaluate G-LLaVA on the geometry problems solving (GPS) task (testmini split) of MathVista"
  - [G-LLaVA: Solving Geometric Problem with Multi-Modal Large Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/09afabe33dc7db66530dea6483b22e5d-Paper-Conference.pdf)
- **Multimodal reasoning** (constructs) — *measured_by*
  > We perform experiments on two widely used multimodal mathematical reasoning benchmarks: MATHVISTA (Lu et al., 2024b) and WE-MATH (Qiao et al., 2024). (Section 4.1)
  - [Progressive Multimodal Reasoning via Active Retrieval](https://aclanthology.org/2025.acl-long.180.pdf)
- **Visual reasoning** (constructs) — *measured_by*
  > To estimate the downstream error Y (N, C), we test our trained VLMs on a suite of nine commonly used benchmarks for evaluating visual reasoning: MME (Fu et al., 2024), GQA (Hudson & Manning, 2019), AI2D (Kembhavi et al., 2016), MMBench (Liu et al., 2024c), MMMU (Yue et al., 2023), ScienceQA (Lu et al., 2022), MathVista (Lu et al., 2024), POPE (Li et al., 2023c), and ChartQA (Masry et al., 2022). (Section 3.2)
  - [Inference Optimal VLMs Need Fewer Visual Tokens and More Parameters](https://proceedings.iclr.cc/paper_files/paper/2025/file/ef748b4544e8f12d608fd28bbf04177f-Paper-Conference.pdf)
- **Chart and diagram understanding** (behaviors tasks) — *measured_by*
  > Many benchmarks in the popular MathVista evaluation suite [60] are designed to test chart understanding. (Sec 1)
  - [CharXiv: Charting Gaps in Realistic Chart Understanding in Multimodal LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/cdf6f8e9fd9aeaf79b6024caec24f15b-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Multimodal perception** (constructs) — *measured_by*
  > “Perception: Following (Tong et al., 2024a), we conduct experiments on 4 types of perception task (i.e., general, knowledge, ocr, and vision-centric) across 16 benchmarks: MME (Fu et al., 2023), MMBench (Liu et al., 2025), SEED (Li et al., 2024), GQA (Hudson & Manning, 2019), ScienceQA (Lu et al., 2022), MMMU (Yue et al., 2024), MathVista (Lu et al., 2024), AI2D (Kembhavi et al., 2016), ChartQA (Masry et al., 2022), OCRBench (Liu et al., 2024), TextVQA (Singh et al., 2019), DocVQA (Mathew et al., 2021), MMVP (Tong et al., 2024b), RealworldQA (xAI, 2024), and CV-Bench (Tong et al., 2024a).”
  - [MODA: MOdular Duplex Attention for Multimodal Perception, Cognition, and Emotion Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cg/zhang25cg.pdf)
- **Calibration** (constructs) — *measured_by*
  > To evaluate calibration under visual mathematical reasoning, we employ MathVista (Lu et al., 2024) and MathVision (Wang et al., 2024). (Section 3.1.1)
  - [Seeing is Believing, but How Much? A Comprehensive Analysis of Verbalized Calibration in Vision-Language Models](https://aclanthology.org/2025.emnlp-main.74.pdf)
