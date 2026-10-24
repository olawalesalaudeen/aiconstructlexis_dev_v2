# TextVQA
**Type:** Measurement  
**Referenced in:** 106 papers  
**Also known as:** TextQA, VQAT, VQAText  

## State of the Field

**What it is.** Across papers, the prevailing usage is as a visual question answering benchmark or dataset in which answering requires reading and reasoning about text within images, often described as text-rich or natural-image question answering. Some definitions place it more specifically in OCR, text recognition, or Text/Doc evaluation, and papers sometimes refer to it as TextQA, VQAT, or VQAText. A smaller line of work frames it as a document task dataset for multimodal documents, and a few papers mention specific evaluation splits such as the validation set or "TextVQA val."

**What it is claimed to measure.** Papers use TextVQA to measure 9 constructs and 5 behavioral indicators. The most frequent links are to Visual understanding, Fine-grained visual understanding, General ability, Visual question answering, and Optical character recognition, with the remaining claims extending to 6 other constructs and 3 other behavioral indicators. The prevailing measurement claims center on text-oriented VQA and OCR-style evaluation, but papers also use it for a wider spread of construct claims rather than limiting it to one framing.

**Space of uses.** Most papers position TextVQA as a standard text-oriented VQA benchmark inside broader multimodal evaluation suites, often alongside VQAv2, GQA, DocVQA, ChartQA, and OCRBench. Several papers also use it in zero-shot, few-shot, or in-context evaluation settings. A smaller set uses it as a targeted check for OCR-heavy, detail-sensitive, document-oriented, or robustness-focused evaluation, and one study reports results without providing OCR tokens.

**Concerns raised.** The concerns that appear are about evaluation conditions: one study groups TextVQA with OCR-extensive benchmarks that are "highly sensitive to potential information loss in vision tokens," and another reports results without providing OCR tokens.

## Sources

**[Text4Seg: Reimagining Image Segmentation as Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/04d8c25cbf0d5e1b70d64e672ac92637-Paper-Conference.pdf) (as "TextQA")**
> A benchmark dataset that requires models to read and reason about text in images to answer questions.

**[ETA: Evaluating Then Aligning Safety of Vision Language Models at Inference Time](https://proceedings.iclr.cc/paper_files/paper/2025/file/06f9fe2915857be2b1e369419a531ad3-Paper-Conference.pdf)**
> A visual question answering dataset where questions require reading and reasoning about text within images, used to evaluate general VLM capabilities.

**[Maintaining Structural Integrity in Parameter Spaces for Parameter Efficient Fine-tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/08487598819cba9feca884ef0d442950-Paper-Conference.pdf) (as "VQAT")**
> Visual question answering benchmark used in multimodal evaluation.

**[Seeing the Image: Prioritizing Visual Correlation by Contrastive Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/37294f033582ac0064bf90fa557c2573-Paper-Conference.pdf) (as "VQAText")**
> A visual question answering benchmark that requires models to read and understand text within images to answer questions.

## Relationships

### → TextVQA
- **Visual question answering** (behaviors tasks) — *measured_by*
  > ...evaluated on... visual question answering datasets (VQAv2 (validation) [Agrawal et al., 2015], OK-VQA (validation) [Marino et al., 2019], TextVQA (validation) [Singh et al., 2019], and VizWiz (validation) [Gurari et al., 2018]). (Section 4.2)
  - [MINT-1T: Scaling Open-Source Multimodal Data by 10x: A Multimodal Dataset with One Trillion Tokens](https://proceedings.neurips.cc/paper_files/paper/2024/file/40b9196c25fe1d64d87ca3a80a91d0ce-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Optical character recognition** (behaviors tasks) — *measured_by*
  > our strategy can effectively alleviate these issues, bringing substantial improvements on different benchmarks, especially in TextVQA with rich OCR information. (Section 4.3)
  - [DenseFusion-1M: Merging Vision Experts for Comprehensive Multimodal Perception](https://proceedings.neurips.cc/paper_files/paper/2024/file/20ffc2b42c7de4a1960cfdadf305bbe2-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Visual understanding** (constructs) — *measured_by*
  > For examining visual understanding ability, we evaluate our model on the widely adopted zero-shot image-based visual-language benchmarks including VQAv2 (Goyal et al., 2017), GQA (Hudson & Manning, 2019), TextVQA (Singh et al., 2019), POPE (Li et al., 2023d), MME (Fu et al., 2024), SEED (Li et al., 2023a), MM-Vet (Yu et al., 2023b) (Section 4.1)
  - [VILA-U: a Unified Foundation Model Integrating Visual Understanding and Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/e9e140df6de01afb672cb859d203c307-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > we further evaluated the performance of our fine-tuned visually-grounded language model (VLM) on additional benchmarks to ensure its robustness across a variety of tasks. In particular, we tested the model on TextVQA [42], POPE [29], and MMVet [51]. (Appendix C.3)
  - [Why are Visually-Grounded Language Models Bad at Image Classification?](https://proceedings.neurips.cc/paper_files/paper/2024/file/5c7024041be305c94d7311cfcc53d93e-Paper-Conference.pdf)
- **Fine-grained visual understanding** (constructs) — *measured_by*
  > We evaluate their effectiveness in improving the perception of smaller visual concepts on 4 detail-sensitive datasets (TextVQA, V∗, POPE, DocVQA)... (Sec. 6)
  - [MLLMs Know Where to Look: Training-free Perception of Small Visual Details with Multimodal LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/aaa0ac4253da75faf9b0dc0dda062612-Paper-Conference.pdf)
- **In-context learning** (constructs) — *measured_by*
  > The models are evaluated on four-shot and eight-shot in-context learning performance on various captioning benchmarks (COCO (Karpathy test) [Lin et al., 2014] and TextCaps (validation) [Sidorov et al., 2020]) and visual question answering datasets (VQAv2 (validation) [Agrawal et al., 2015], OK-VQA (validation) [Marino et al., 2019], TextVQA (validation) [Singh et al., 2019], and VizWiz (validation) [Gurari et al., 2018]). (Section 4.2)
  - [MINT-1T: Scaling Open-Source Multimodal Data by 10x: A Multimodal Dataset with One Trillion Tokens](https://proceedings.neurips.cc/paper_files/paper/2024/file/40b9196c25fe1d64d87ca3a80a91d0ce-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Long-context understanding** (constructs) — *measured_by*
  > To evaluate the long-context understanding ability, we adopt the few-shot evaluation setting in Flamingo [1]. We report answer accuracy on the OK-VQA [28], TextVQA [29], VizWiz [30], and VQAV2 [31]. (Section 3.1)
  - [Leveraging Visual Tokens for Extended Text Contexts in Multi-Modal Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/19f10adb6749b0c9f1ff7610bd01d44d-Paper-Conference.pdf)
- **Optical character recognition ability** (constructs) — *measured_by*
  > TextVQA (Singh et al., 2019) for OCR abilities
  - [What matters when building vision-language models?](https://proceedings.neurips.cc/paper_files/paper/2024/file/a03037317560b8c5f2fb4b6466d4c439-Paper-Conference.pdf)
- **Visual dialogue** (behaviors tasks) — *measured_by*
  > Multi-Modal Chat Vision-language models (VLMs) are attracting increasing attention due to their ability to process both text and images. ... For this task, we use GQA (Hudson & Manning, 2019) and TextVQA (Singh et al., 2019)
  - [Delta-CoMe: Training-Free Delta-Compression with Mixed-Precision for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/37664246a1e07e212ddacea6e5a523f2-Paper-Conference.pdf)
- **Language understanding task performance** (behaviors tasks) — *measured_by*
  > Benchmarks that involve spatial understanding and fine-grained features include ... text comprehension (TextVQA; Singh et al. 2019). (Section 5)
  - [Locality Alignment Improves Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ce6326ac4794bb04d5eb16f597446baf-Paper-Conference.pdf)
- **Document understanding** (constructs) — *measured_by*
  > For document understanding, ... We utilize benchmarks such as ChartQA (Masry et al., 2022), DocVQA (Mathew et al., 2021), InfoVQA (Mathew et al., 2022), TextVQA (Singh et al., 2019), STVQA (Biten et al., 2019), FUNSD (Jaume et al., 2019), SROIE (Huang et al., 2019), POIE (Kuang et al., 2023) and OCR-Bench (Liu et al., 2023c). (Section 4.1)
  - [Mini-Monkey: Alleviating the Semantic Sawtooth Effect for Lightweight MLLMs via Complementary Image Pyramid](https://proceedings.iclr.cc/paper_files/paper/2025/file/d52b3500a00748169dd4dad80fb75357-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > we assess the learned generalization ability on OKVQA (Marino et al., 2019), TextVQA (Singh et al., 2019), GQA (Hudson & Manning, 2019), and OCRVQA (Mishra et al., 2019) (Section 4.1).
  - [Learn from Downstream and Be Yourself in Multimodal Large Language Models Fine-Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25q/huang25q.pdf)
- **Multimodal perception** (constructs) — *measured_by*
  > “Perception: Following (Tong et al., 2024a), we conduct experiments on 4 types of perception task (i.e., general, knowledge, ocr, and vision-centric) across 16 benchmarks: MME (Fu et al., 2023), MMBench (Liu et al., 2025), SEED (Li et al., 2024), GQA (Hudson & Manning, 2019), ScienceQA (Lu et al., 2022), MMMU (Yue et al., 2024), MathVista (Lu et al., 2024), AI2D (Kembhavi et al., 2016), ChartQA (Masry et al., 2022), OCRBench (Liu et al., 2024), TextVQA (Singh et al., 2019), DocVQA (Mathew et al., 2021), MMVP (Tong et al., 2024b), RealworldQA (xAI, 2024), and CV-Bench (Tong et al., 2024a).”
  - [MODA: MOdular Duplex Attention for Multimodal Perception, Cognition, and Emotion Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cg/zhang25cg.pdf)
