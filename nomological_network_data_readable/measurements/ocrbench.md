# OCRBench
**Type:** Measurement  
**Referenced in:** 25 papers  
**Also known as:** OCR-Bench  

## State of the Field

**What it is.** Across papers, OCRBench is most commonly described as a benchmark for optical character recognition, often framed as evaluating OCR capabilities or text reading and text understanding in images or other visual inputs. Some authors use the spelling OCR-Bench, and one source abbreviates it as OCRB. A smaller line of description says it assesses a model's ability to recognize and reason about text within images using OCR tasks, but the prevailing usage remains an OCR-focused benchmark for large multimodal models.

**What it is claimed to measure.** Papers use OCRBench to measure one behavioral indicator and three constructs. The dominant measurement claim is optical character recognition, and additional papers report it as measuring fine-grained visual understanding, fine-grained perception, and multimodal perception. Overall, the measurement claims center on OCR, with some broader perception-oriented framing around the same benchmark.

**Space of uses.** Across papers, OCRBench is usually used as part of broader evaluation suites rather than in isolation. It is frequently grouped with DocVQA, ChartQA, TextVQA, and InfoVQA in OCR-related, OCR-extensive, or OCR/document/chart understanding evaluations, and some papers place it among widely-adopted VLM benchmarks or general datasets. Papers also position it within fine-grained or perception-focused evaluation setups.

## Sources

**[Harnessing Webpage UIs for Text-Rich Visual Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/2da53cd1abdae59150e35f4693834f32-Paper-Conference.pdf)**
> A benchmark for optical character recognition and text reading in visual inputs.

**[Seeing the Image: Prioritizing Visual Correlation by Contrastive Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/37294f033582ac0064bf90fa557c2573-Paper-Conference.pdf) (as "OCR-Bench")**
> A benchmark designed to evaluate the Optical Character Recognition (OCR) capabilities of large multimodal models.

## Relationships

### → OCRBench
- **Optical character recognition** (behaviors tasks) — *measured_by*
  > OCR-Related Tasks. DocVQA (Mathew et al., 2021), ChartQA (Masry et al., 2022), TextVQA (Singh et al., 2019), InfoVQA (Mathew et al., 2022), VisualMRC (Tanaka et al., 2021), OCRBench (Liu et al., 2023c).
  - [Harnessing Webpage UIs for Text-Rich Visual Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/2da53cd1abdae59150e35f4693834f32-Paper-Conference.pdf)
- **Fine-grained visual understanding** (constructs) — *measured_by*
  > To evaluate the impact of this masking on the performance of LMMs, we select a set of OCR-extensive benchmarks (DocVQA (Mathew et al., 2021), ChartQA (Masry et al., 2022), InfoVQA (Mathew et al., 2022), OCRBench (Liu et al., 2024c), TextVQA (Singh et al., 2019)) that require fine-grained visual information, thus being highly sensitive to potential information loss in vision tokens
  - [Streamline Without Sacrifice - Squeeze out Computation Redundancy in LMM](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25s/wu25s.pdf)
- **Multimodal perception** (constructs) — *measured_by*
  > “Perception: Following (Tong et al., 2024a), we conduct experiments on 4 types of perception task (i.e., general, knowledge, ocr, and vision-centric) across 16 benchmarks: MME (Fu et al., 2023), MMBench (Liu et al., 2025), SEED (Li et al., 2024), GQA (Hudson & Manning, 2019), ScienceQA (Lu et al., 2022), MMMU (Yue et al., 2024), MathVista (Lu et al., 2024), AI2D (Kembhavi et al., 2016), ChartQA (Masry et al., 2022), OCRBench (Liu et al., 2024), TextVQA (Singh et al., 2019), DocVQA (Mathew et al., 2021), MMVP (Tong et al., 2024b), RealworldQA (xAI, 2024), and CV-Bench (Tong et al., 2024a).”
  - [MODA: MOdular Duplex Attention for Multimodal Perception, Cognition, and Emotion Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cg/zhang25cg.pdf)
- **Fine-grained perception** (constructs) — *measured_by*
  > Ablation results on fine-grained perception tasks. We conduct ablation studies based on LLaVA across five fine-grained benchmarks: ... OCRBench (Liu et al., 2024b)... (Table 3)
  - [SEA: Supervised Embedding Alignment for Token-Level Visual-Textual Integration in MLLMs](https://aclanthology.org/2025.emnlp-main.55.pdf)
