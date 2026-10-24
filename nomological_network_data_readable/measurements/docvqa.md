# DocVQA
**Type:** Measurement  
**Referenced in:** 52 papers  
**Also known as:** VQADoc  

## State of the Field

**What it is.** Most papers treat it as a document visual question answering benchmark or dataset for document images, often framed as a standard benchmark for document understanding. Definitions commonly say models answer questions from document text and layout, and one paper describes an extractive QA format for span or segment extraction over scanned or photographed documents; one variant name, VQADoc, is used once for an image-based question answering benchmark on document images. Descriptions diverge on scope: some papers say it can only assess single-page documents, while one definition presents it as evaluating single-page and multi-page document QA and retrieval.

**What it is claimed to measure.** Papers use it to measure 4 constructs and 5 behavioral indicators. The prevailing construct framing is document understanding, and on the behavioral side it is most often used for optical character recognition, document question answering, information retrieval, and machine reading comprehension. Overall, papers distribute it across multiple constructs and indicators rather than tying it to a single target.

**Space of uses.** No measurement instrument is linked to it in explicit relationship claims. In practice, papers usually evaluate on it alongside other benchmarks, commonly SlideVQA, MMLongBench-Doc, DUDE, ChartQA, and OCRBench, and they place it within broader document understanding, OCR, text-oriented VQA, or perception benchmark suites. One paper also reuses its existing question-answer pairs as a source domain.

**Concerns raised.** A recurring concern is scope. Some papers say it can only assess single-page documents, and another describes strong results on single-page document understanding datasets like DocVQA; another groups it with benchmarks that require sufficiently high resolution to extract text from an image. Separately, one paper notes that DocVQA alone has thousands of examples for doc understanding and OCR-related abilities, in the course of arguing that overly repetitive large-scale evaluation can waste resources.

## Sources

**[SV-RAG: LoRA-Contextualizing Adaptation of  MLLMs for Long Document Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/0d40c7b4d78bf7f08ba532542818f6c0-Paper-Conference.pdf)**
> Document visual question answering benchmark used for evaluating single-page and multi-page document QA and retrieval.

**[Seeing the Image: Prioritizing Visual Correlation by Contrastive Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/37294f033582ac0064bf90fa557c2573-Paper-Conference.pdf) (as "VQADoc")**
> A document visual question answering benchmark used to evaluate image-based question answering on document images.

## Relationships

### → DocVQA
- **Document understanding** (constructs) — *measured_by*
  > In order to illustrate the impact of having long in-context text, we evaluate the model for document understanding on DocVQA [15] and OCR VQA [34]. (Section 3.1)
  - [Leveraging Visual Tokens for Extended Text Contexts in Multi-Modal Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/19f10adb6749b0c9f1ff7610bd01d44d-Paper-Conference.pdf)
- **Optical character recognition** (behaviors tasks) — *measured_by*
  > OCR-Related Tasks. DocVQA (Mathew et al., 2021), ChartQA (Masry et al., 2022), TextVQA (Singh et al., 2019), InfoVQA (Mathew et al., 2022), VisualMRC (Tanaka et al., 2021), OCRBench (Liu et al., 2023c).
  - [Harnessing Webpage UIs for Text-Rich Visual Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/2da53cd1abdae59150e35f4693834f32-Paper-Conference.pdf)
- **Fine-grained visual understanding** (constructs) — *measured_by*
  > We evaluate their effectiveness in improving the perception of smaller visual concepts on 4 detail-sensitive datasets (TextVQA, V∗, POPE, DocVQA)... (Sec. 6)
  - [MLLMs Know Where to Look: Training-free Perception of Small Visual Details with Multimodal LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/aaa0ac4253da75faf9b0dc0dda062612-Paper-Conference.pdf)
- **Document question answering** (behaviors tasks) — *measured_by*
  > Then, we consider the document questions answering task... We adopt a dataset that originates from a Privacy Preserving Federated Learning Document VQA (PFL-DocVQA) competition (Tito et al., 2023). (Section 4.2)
  - [Privacy-Preserving In-Context Learning for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/572cd21bd5dea96b065476b77d21b3c6-Paper-Conference.pdf)
- **Long-context understanding** (constructs) — *measured_by*
  > “To evaluate the long-context understanding ability, we adopt the few-shot evaluation setting in Flamingo [1]. ... In order to illustrate the impact of having long in-context text, we evaluate the model for document understanding on DocVQA [15] and OCR VQA [34].”
  - [Leveraging Visual Tokens for Extended Text Contexts in Multi-Modal Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/19f10adb6749b0c9f1ff7610bd01d44d-Paper-Conference.pdf)
- **Information retrieval** (behaviors tasks) — *measured_by*
  > We first evaluate the retrieval accuracy of the Col-retrieval module within SV-RAG and compare it with several baselines on SlideVQA (Tanaka et al., 2023), MM-LongBench (Ma et al., 2024d), DUDE (Van Landeghem et al., 2023), DocVQA (Mathew et al., 2020; 2021) and VisR-Bench. (Section 5)
  - [SV-RAG: LoRA-Contextualizing Adaptation of  MLLMs for Long Document Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/0d40c7b4d78bf7f08ba532542818f6c0-Paper-Conference.pdf)
- **Machine reading comprehension** (behaviors tasks) — *measured_by*
  > DocVQA (Mathew et al., 2021) focuses on reading comprehension tasks over document images. (Section 4.1)
  - [Solving Token Gradient Conflict in Mixture-of-Experts for Large Vision-Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/532ce4fcf853023c4cf2ac38cbc5d002-Paper-Conference.pdf)
- **Multimodal perception** (constructs) — *measured_by*
  > “Perception: Following (Tong et al., 2024a), we conduct experiments on 4 types of perception task (i.e., general, knowledge, ocr, and vision-centric) across 16 benchmarks: MME (Fu et al., 2023), MMBench (Liu et al., 2025), SEED (Li et al., 2024), GQA (Hudson & Manning, 2019), ScienceQA (Lu et al., 2022), MMMU (Yue et al., 2024), MathVista (Lu et al., 2024), AI2D (Kembhavi et al., 2016), ChartQA (Masry et al., 2022), OCRBench (Liu et al., 2024), TextVQA (Singh et al., 2019), DocVQA (Mathew et al., 2021), MMVP (Tong et al., 2024b), RealworldQA (xAI, 2024), and CV-Bench (Tong et al., 2024a).”
  - [MODA: MOdular Duplex Attention for Multimodal Perception, Cognition, and Emotion Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cg/zhang25cg.pdf)
