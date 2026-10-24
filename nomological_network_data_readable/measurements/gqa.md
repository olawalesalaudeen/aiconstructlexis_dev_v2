# GQA
**Type:** Measurement  
**Referenced in:** 106 papers  

## State of the Field

**What it is.** Across the surveyed work, GQA is most commonly described as a visual question answering benchmark or dataset for real-world visual reasoning and compositional question answering over images. Many definitions emphasize complex, compositional, or multi-hop questions, and some describe it as grounded question answering or as focusing on scene understanding and reasoning. A smaller line of papers gives a more structural description, saying it uses scene graph structures to generate balanced question-answer pairs with one ground-truth answer, and that each image is paired with a scene graph and each VQA pair has a SQL-like reasoning path. Papers also refer to variants or evaluation splits such as GQA balanced, test-balanced, and balanced-testdev.

**What it is claimed to measure.** The measurement claims are spread across many constructs rather than a single target: papers use GQA to measure 12 constructs and 4 behavioral indicators. The most recurrent links are to visual understanding, compositional reasoning, visual perception, fine-grained visual understanding, and visual question answering, while the remaining links are distributed across other reasoning, understanding, generation, dialogue, and instruction-following framings. This matches the definitions, which variously present GQA as evaluating compositional reasoning, real-world visual understanding, reasoning ability, or open-ended VQA. A few papers also use related, rather than measured_by, links for reasoning-focused constructs.

**Space of uses.** No paper links GQA to another measurement instrument. Papers usually place it in larger evaluation suites alongside VQAv2, VizWiz, TextVQA, ScienceQA, and POPE, and they generally position it as a standard VQA or reasoning check within multimodal benchmark sets. Some papers use it more specifically as an out-of-domain evaluation set, as the source dataset for a model-selection benchmark, or as a source of real VQA instances.

**Concerns raised.** Some papers note evaluation observations on GQA: one reports that removing up to 70% of visual tokens at test time caused only a 3% drop in accuracy and describes this as redundancy in visual context, and another reports a nearly 40% positive gap between random guessing and vision-disabled scores.

## Sources

**[CRAFT: Customizing LLMs by Creating and Retrieving from Specialized Toolsets](https://proceedings.iclr.cc/paper_files/paper/2024/file/af31604708f3e44b4de9fdfa6dcaa9d1-Paper-Conference.pdf)**
> A benchmark dataset for compositional visual question answering, featuring complex, multi-hop questions about real-world images.

## Relationships

### → GQA
- **Visual question answering** (behaviors tasks) — *measured_by*
  > We first quantitatively evaluate the zero-shot multi-modal understanding capacity of LaVIT on ... Visual Question Answering (VQAv2 (Goyal et al., 2017), OKVQA (Marino et al., 2019), GQA (Hudson & Manning, 2019), VizWiz (Gurari et al., 2018)). (Section 4.1)
  - [Unified Language-Vision Pretraining in LLM with Dynamic Discrete Visual Tokenization](https://proceedings.iclr.cc/paper_files/paper/2024/file/e1762b64958760f7bfabe3a7062d007f-Paper-Conference.pdf)
- **Visual understanding** (constructs) — *measured_by*
  > we evaluated the visual understanding ability of LMMs when visual tokens were dropped at different layers. Specifically, we measured the performance of LLaVA-v1.5 on the GQA (Hudson & Manning, 2019) and MMBench (Liu et al., 2024c) (Section 3.2).
  - [LLaVA-Mini: Efficient Image and Video Large Multimodal Models with One Vision Token](https://proceedings.iclr.cc/paper_files/paper/2025/file/8400a2ec9ba85bfdb41eb2a584c0876d-Paper-Conference.pdf)
- **Visual perception** (constructs) — *measured_by*
  > GQA and VQA-v2 evaluate the model’s visual perception capabilities on open-ended short answers. (Section 4.1)
  - [Efficient Large Multi-modal Models via Visual Context Compression](https://proceedings.neurips.cc/paper_files/paper/2024/file/871ed095b734818cfba48db6aeb25a62-Paper-Conference.pdf)
- **Compositional reasoning** (constructs) — *measured_by*
  > ...GQA (Hudson and Manning, 2019) for real-world compositional reasoning... (Section 3.1)
  - [Does Acceleration Cause Hidden Instability in Vision Language Models? Uncovering Instance-Level Divergence Through a Large-Scale Empirical Study](https://aclanthology.org/2025.emnlp-main.425.pdf)
- **Generalization** (constructs) — *measured_by*
  > The reason behind selecting GQA, InfoSeek, and A-OKVQA is to evaluate the generalization capability of our framework across datasets that do not necessitate up-to-date knowledge (Section 5.1).
  - [SearchLVLMs: A Plug-and-Play Framework for Augmenting Large Vision-Language Models by Searching Up-to-Date Internet Knowledge](https://proceedings.neurips.cc/paper_files/paper/2024/file/76954b4a44e158e738b4c64494977c6a-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > The GQA dataset does not rely on external knowledge and is used to evaluate the reasoning ability of LVLMs (Section 5.2).
  - [SearchLVLMs: A Plug-and-Play Framework for Augmenting Large Vision-Language Models by Searching Up-to-Date Internet Knowledge](https://proceedings.neurips.cc/paper_files/paper/2024/file/76954b4a44e158e738b4c64494977c6a-Paper-Conference.pdf)
- **Multimodal understanding** (constructs) — *measured_by*
  > Following LLaVA (Liu et al., 2024b), we evaluate the multimodal understanding capabilities of Show-o on POPE, MME, Flickr30k, VQAv2, GQA, and MMMU benchmarks. (Section 4.1)
  - [Show-o: One Single Transformer to Unify Multimodal Understanding and Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/45f0d179ef7e10eb7366550cd4e574ae-Paper-Conference.pdf)
- **Visual reasoning** (constructs) — *measured_by*
  > To estimate the downstream error Y (N, C), we test our trained VLMs on a suite of nine commonly used benchmarks for evaluating visual reasoning: MME (Fu et al., 2024), GQA (Hudson & Manning, 2019), AI2D (Kembhavi et al., 2016), MMBench (Liu et al., 2024c), MMMU (Yue et al., 2023), ScienceQA (Lu et al., 2022), MathVista (Lu et al., 2024), POPE (Li et al., 2023c), and ChartQA (Masry et al., 2022). (Section 3.2)
  - [Inference Optimal VLMs Need Fewer Visual Tokens and More Parameters](https://proceedings.iclr.cc/paper_files/paper/2025/file/ef748b4544e8f12d608fd28bbf04177f-Paper-Conference.pdf)
- **Fine-grained visual understanding** (constructs) — *measured_by*
  > Tasks that require fine-grained visual understanding and deep reasoning across multiple areas of the image naturally demand a higher number of visual tokens for optimal performance. ... This trend is evident in tasks such as VQAv2, GQA, VizWiz, MMBench, LLaVA-Bench, and MM-Vet.
  - [Matryoshka Query Transformer for Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/59c147c7d4fdb732daea3064eab949bf-Paper-Conference.pdf)
- **Visual dialogue** (behaviors tasks) — *measured_by*
  > Multi-Modal Chat Vision-language models (VLMs) are attracting increasing attention due to their ability to process both text and images. ... For this task, we use GQA (Hudson & Manning, 2019) and TextVQA (Singh et al., 2019)
  - [Delta-CoMe: Training-Free Delta-Compression with Mixed-Precision for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/37664246a1e07e212ddacea6e5a523f2-Paper-Conference.pdf)
- **Answer generation** (behaviors tasks) — *measured_by*
  > We experiment on samples from i) 3 datasets requiring free-form answer generation – VQA (Goyal et al., 2017), GQA, and GQA balanced (Hudson & Manning, 2019) (Section 4.1).
  - [Do Vision & Language Decoders use Images and Text equally? How Self-consistent are their Explanations?](https://proceedings.iclr.cc/paper_files/paper/2025/file/37294f033582ac0064bf90fa557c2573-Paper-Conference.pdf)
- **Spatial reasoning** (constructs) — *measured_by*
  > GQA Hudson & Manning (2019) validates spatial reasoning
  - [EMMA: Empowering Multi-modal Mamba with Structural and Hierarchical Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/3760dbb5835bf0b771c3f83cb27ef2c0-Paper-Conference.pdf)
- **Relational reasoning** (constructs) — *measured_by*
  > for general VQA tasks, we use ... GQA (Hudson & Manning, 2019) to test ... relational reasoning. (Section 4.1)
  - [LLaVA-MoD: Making LLaVA Tiny via MoE-Knowledge Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/1a2131ebe25bd55e4fc734126ea583ed-Paper-Conference.pdf)
- **Multimodal perception** (constructs) — *measured_by*
  > “Perception: Following (Tong et al., 2024a), we conduct experiments on 4 types of perception task (i.e., general, knowledge, ocr, and vision-centric) across 16 benchmarks: MME (Fu et al., 2023), MMBench (Liu et al., 2025), SEED (Li et al., 2024), GQA (Hudson & Manning, 2019), ScienceQA (Lu et al., 2022), MMMU (Yue et al., 2024), MathVista (Lu et al., 2024), AI2D (Kembhavi et al., 2016), ChartQA (Masry et al., 2022), OCRBench (Liu et al., 2024), TextVQA (Singh et al., 2019), DocVQA (Mathew et al., 2021), MMVP (Tong et al., 2024b), RealworldQA (xAI, 2024), and CV-Bench (Tong et al., 2024a).”
  - [MODA: MOdular Duplex Attention for Multimodal Perception, Cognition, and Emotion Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cg/zhang25cg.pdf)
- **Multimodal reasoning** (constructs) — *measured_by*
  > ...and a multimodal experiment using GQA (Hudson and Manning, 2019) and the image-based subset of ScienceQA (Lu et al., 2022).
  - [Sketch-of-Thought: Efficient LLM Reasoning with Adaptive Cognitive-Inspired Sketching](https://aclanthology.org/2025.emnlp-main.1236.pdf)
