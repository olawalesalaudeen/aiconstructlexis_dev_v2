# ScienceQA
**Type:** Measurement  
**Referenced in:** 78 papers  
**Also known as:** SCIENCEQA, Science-QA  

## State of the Field

**What it is.** Across papers, the prevailing usage treats ScienceQA as a multimodal science question answering benchmark built around multiple-choice questions. Definitions commonly describe items with visual and textual context, and one paper states that each sample contains "a visual context, a textual context, a question with multiple options, and an answer"; some papers also mention optional lecture or context text, background knowledge, and explanations, or describe the benchmark as covering diverse science topics and reasoning. A smaller line of work refers to ScienceQA-Image, an image-based subset, or text-only samples derived from it, and one evaluation uses only questions that include an image.

**What it is claimed to measure.** Papers use ScienceQA to measure 10 constructs and 5 behavioral indicators. The most common claims treat it as measuring scientific reasoning and visual question answering, with recurring use for multimodal reasoning, question answering, and chain of thought; papers also report it as measuring several other constructs and indicators, so its reported measurement role is spread across multiple targets.

**Space of uses.** Papers often position ScienceQA as one benchmark inside broader multimodal evaluation suites, frequently alongside MMBench, GQA, TextVQA, POPE, and VQAv2. Other uses are more task-specific: some papers fine-tune on its multimodal training set and test in-domain, some draw image-only or text-only subsets for specialized evaluations, and one paper uses ScienceQA-Image as a source for another benchmark.

## Sources

**[At Which Training Stage Does Code Data Help LLMs Reasoning?](https://proceedings.iclr.cc/paper_files/paper/2024/file/9c2aa1e456ea543997f6927295196381-Paper-Conference.pdf)**
> Multiple-choice question answering benchmark assessing scientific reasoning across diverse domains.

**[HEMM: Holistic Evaluation of Multimodal Foundation Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/4b6e5dae3acb4cfdfe5928a6eff174ee-Paper-Datasets_and_Benchmarks_Track.pdf) (as "SCIENCEQA")**
> A science question-answering benchmark with multiple-choice questions, some accompanied by images and optional lecture/context text.

**[CuMo: Scaling Multimodal LLM with Co-Upcycled Mixture-of-Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed1d3d4c64dc1b95332a8cde3f2a0bdf-Paper-Conference.pdf) (as "Science-QA")**
> A multimodal science question answering benchmark that evaluates science-related reasoning from visual and textual inputs.

## Relationships

### → ScienceQA
- **Visual question answering** (behaviors tasks) — *measured_by*
  > we perform Visual Question Answering (VQA) on ScienceQA (Lu et al., 2022) (Section 4.1)
  - [Octavius: Mitigating Task Interference in MLLMs via LoRA-MoE](https://proceedings.iclr.cc/paper_files/paper/2024/file/6b3b238c5786536dc9f835760e2dba02-Paper-Conference.pdf)
- **Scientific reasoning** (constructs) — *measured_by*
  > We use the ScienceQA dataset (Lu et al., 2022) to evaluate the scientific reasoning ability of the model. (Section 3.1)
  - [At Which Training Stage Does Code Data Help LLMs Reasoning?](https://proceedings.iclr.cc/paper_files/paper/2024/file/9c2aa1e456ea543997f6927295196381-Paper-Conference.pdf)
- **Multimodal reasoning** (constructs) — *measured_by*
  > “We directly utilize ScienceQA’s multi-modal training set to fine-tune LLaMA-Adapter, and conduct in-domain testing.”
  - [LLaMA-Adapter: Efficient Fine-tuning of Large Language Models with Zero-initialized Attention](https://proceedings.iclr.cc/paper_files/paper/2024/file/c196239c5f9481e0db2755f31fe4585f-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > Question Answering. For ScienceQA (Lu et al., 2022b), we gather text-only samples to form a train and test set with 6,508 and 2,224 samples. (Section 4.1).
  - [On Large Language Model Continual Unlearning](https://proceedings.iclr.cc/paper_files/paper/2025/file/fc28053a08f59fccb48b11f2e31e81c7-Paper-Conference.pdf)
- **Scientific question answering** (behaviors tasks) — *measured_by*
  > ScienceQA with multiple choice are used to evaluate the zero-shot generalization on scientific question answering. (Section 4.1)
  - [Efficient Large Multi-modal Models via Visual Context Compression](https://proceedings.neurips.cc/paper_files/paper/2024/file/871ed095b734818cfba48db6aeb25a62-Paper-Conference.pdf)
- **Data leakage** (constructs) — *measured_by*
  > We evaluate 16 leading LVLMs on MMStar to assess their multi-modal capabilities, and on 7 benchmarks with the proposed metrics to investigate their data leakage and actual multi-modal gain. (Abstract)
  - [Are We on the Right Way for Evaluating Large Vision-Language Models?](https://proceedings.neurips.cc/paper_files/paper/2024/file/2f8ee6a3d766b426d2618e555b5aeb39-Paper-Conference.pdf)
- **Zero-shot generalization** (constructs) — *measured_by*
  > ScienceQA with multiple choice are used to evaluate the zero-shot generalization on scientific question answering. (Section 4.1)
  - [Efficient Large Multi-modal Models via Visual Context Compression](https://proceedings.neurips.cc/paper_files/paper/2024/file/871ed095b734818cfba48db6aeb25a62-Paper-Conference.pdf)
- **Knowledge reasoning** (constructs) — *measured_by*
  > We employ the ScienceQA [28] dataset for the knowledge reasoning task (Section 5.1.1).
  - [Decompose, Analyze and Rethink: Solving Intricate Problems with Human-like Reasoning Cycle](https://proceedings.neurips.cc/paper_files/paper/2024/file/01025a4e79355bb37a10ba39605944b5-Paper-Conference.pdf)
- **Visual perception** (constructs) — *measured_by*
  > We further evaluate our trained model over six benchmarks that examines LVLMs general perception capability, including SEED-Bench [36], ScienceQA [49]... (Appendix D.1)
  - [Mitigating Object Hallucination via Concentric Causal Attention](https://proceedings.neurips.cc/paper_files/paper/2024/file/a76ed4a8ef522c823d73925e7fff16d4-Paper-Conference.pdf)
- **Visual reasoning** (constructs) — *measured_by*
  > To estimate the downstream error Y (N, C), we test our trained VLMs on a suite of nine commonly used benchmarks for evaluating visual reasoning: MME (Fu et al., 2024), GQA (Hudson & Manning, 2019), AI2D (Kembhavi et al., 2016), MMBench (Liu et al., 2024c), MMMU (Yue et al., 2023), ScienceQA (Lu et al., 2022), MathVista (Lu et al., 2024), POPE (Li et al., 2023c), and ChartQA (Masry et al., 2022). (Section 3.2)
  - [Inference Optimal VLMs Need Fewer Visual Tokens and More Parameters](https://proceedings.iclr.cc/paper_files/paper/2025/file/ef748b4544e8f12d608fd28bbf04177f-Paper-Conference.pdf)
- **Scientific knowledge** (constructs) — *measured_by*
  > ScienceQA (Lu et al., 2022b) is utilized to measure scientific knowledge. (Section 4.1)
  - [LLaVA-MoD: Making LLaVA Tiny via MoE-Knowledge Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/1a2131ebe25bd55e4fc734126ea583ed-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > To validate the effectiveness of our proposed method, we conduct extensive experiments across multiple reasoning VQA datasets, including ScienceQA (Lu et al., 2022), MMMU (Yue et al., 2024), and MathV (Wang et al., 2024a). (Section 1)
  - [Re-ranking Reasoning Context with Tree Search Makes Large Vision-Language Models Stronger](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25at/yang25at.pdf)
- **Multimodal perception** (constructs) — *measured_by*
  > “Perception: Following (Tong et al., 2024a), we conduct experiments on 4 types of perception task (i.e., general, knowledge, ocr, and vision-centric) across 16 benchmarks: MME (Fu et al., 2023), MMBench (Liu et al., 2025), SEED (Li et al., 2024), GQA (Hudson & Manning, 2019), ScienceQA (Lu et al., 2022), MMMU (Yue et al., 2024), MathVista (Lu et al., 2024), AI2D (Kembhavi et al., 2016), ChartQA (Masry et al., 2022), OCRBench (Liu et al., 2024), TextVQA (Singh et al., 2019), DocVQA (Mathew et al., 2021), MMVP (Tong et al., 2024b), RealworldQA (xAI, 2024), and CV-Bench (Tong et al., 2024a).”
  - [MODA: MOdular Duplex Attention for Multimodal Perception, Cognition, and Emotion Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cg/zhang25cg.pdf)
- **Multimodal understanding** (constructs) — *measured_by*
  > To evaluate multimodal understanding capabilities, we conduct evaluations on six widely-used benchmarks: RealworldQA (XAI, 2024), MMVP (Tong et al., 2024b), ScienceQA (Lu et al., 2022), VStar (Wu and Xie, 2023), MME (Fu et al., 2024), and POPE (Li et al., 2023b). (Section 4.2)
  - [UnifiedVisual: A Framework for Constructing Unified Vision-Language Datasets](https://aclanthology.org/2025.emnlp-main.1572.pdf)
