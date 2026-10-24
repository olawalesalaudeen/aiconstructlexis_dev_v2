# MS-COCO
**Type:** Measurement  
**Referenced in:** 88 papers  
**Also known as:** MSCOCO, MSCOCO-2014, MS COCO, COCO, COCO-2017 validation set, COCO-Val  

## State of the Field

**What it is.** Across papers, the dominant framing is MS-COCO as Microsoft Common Objects in Context, usually a large-scale object detection, segmentation, and captioning dataset, and often more specifically its validation split for zero-shot captioning or text-to-image evaluation. Some definitions foreground image captioning with complex scenes and multiple objects, while others extend the scope to keypoint estimation or region-level classification. Papers also use several named subsets and versions, including MSCOCO-2014, the COCO-2017 validation set, COCO-Val, and the Karpathy test split, and one captioning-oriented description specifies 5 captions per image under the Karpathy split.

**What it is claimed to measure.** Papers use MS-COCO to measure 11 behavioral indicators and 4 constructs, so the claimed targets are broad rather than concentrated on a single construct. The prevailing behavioral uses are image captioning, cross-modal retrieval, image generation, object detection, and instance segmentation, with additional measured uses beyond these. On the construct side, papers report it as measuring multimodal alignment, in-context learning, multimodal understanding, and visual generation ability.

**Space of uses.** It is commonly positioned as a headline benchmark for captioning, retrieval, and text-to-image synthesis, though some papers use it more instrumentally as a source of images, boxes, annotations, or prompts. Papers often use it alongside Flickr30K, and also with NoCaps, TextCaps, ImageNet, and other benchmarks; some captioning work uses the Karpathy split, while text-to-image studies sample captions or prompts from the validation set, sometimes 30k at a time. Among named instruments, only CHAIR is linked, and that link is reported as related: one paper selects images from MSCOCO for CHAIR evaluation.

**Concerns raised.** Concerns appear mainly in retrieval-oriented uses. A few retrieval papers say that standard retrieval benchmarks including MSCOCO lack aesthetic evaluation, and that performance on popular cross-modal retrieval benchmarks such as MS-COCO has reached saturation.

## Sources

**[Beyond task performance: evaluating and reducing the flaws of large multimodal models with in-context-learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/5df817c5dd95293ebf6d1583303a8c73-Paper-Conference.pdf) (as "COCO")**
> MS-COCO validation set used for zero-shot image-to-text captioning and text-to-image generation evaluation.

**[An Image Is Worth 1000 Lies: Transferability of Adversarial Images across Prompts on Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/674ad201bc8fa74b3c9979230aa0c63b-Paper-Conference.pdf)**
> The validation set of the Microsoft Common Objects in Context (MS-COCO) dataset, used here to evaluate text-to-image synthesis quality.

**[TACO: Enhancing Multimodal In-context Learning via Task Mapping-Guided Sequence Configuration](https://aclanthology.org/2025.emnlp-main.39.pdf) (as "MSCOCO")**
> A large-scale benchmark dataset for image captioning, featuring complex scenes with multiple objects.

**[Merge then Realign: Simple and Effective Modality-Incremental Continual Learning for Multimodal LLMs](https://aclanthology.org/2025.emnlp-main.665.pdf) (as "MSCOCO-2014")**
> Microsoft Common Objects in Context 2014, a large-scale dataset for image captioning and object detection, used in this paper to evaluate the image modality.

**[Maintaining Structural Integrity in Parameter Spaces for Parameter Efficient Fine-tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/08487598819cba9feca884ef0d442950-Paper-Conference.pdf) (as "MS COCO")**
> The Microsoft Common Objects in Context (MS COCO) dataset is a large-scale object detection, segmentation, and captioning dataset.

**[SpatialRGPT: Grounded Spatial Reasoning in Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/f38cb4cf9a5eaa92b3cfa481832719c6-Paper-Conference.pdf) (as "COCO-2017 validation set")**
> The validation split of the Common Objects in Context (COCO) 2017 dataset, used here to evaluate region-level object classification with ground-truth bounding boxes.

**[$\textit{Bifr\"ost}$: 3D-Aware Image Compositing with Language Instructions](https://proceedings.neurips.cc/paper_files/paper/2024/file/ea011cd13bcdf7ca38506c844dccfee8-Paper-Conference.pdf) (as "COCO-Val")**
> The validation split of MS COCO used to manually select scene images for compositing evaluation.

## Relationships

### → MS-COCO
- **Image captioning** (behaviors tasks) — *measured_by*
  > and the image caption generation task, MSCOCO (Chen et al., 2015) (Section 3.1).
  - [DePT: Decomposed Prompt Tuning for Parameter-Efficient Fine-tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/e352b765e625934ce86919995e2371aa-Paper-Conference.pdf)
- **Cross-modal retrieval** (behaviors tasks) — *measured_by*
  > We evaluate the performance of Causal Q-Former on the image-text retrieval using COCO (Lin et al., 2014) and Flickr30K (Young et al., 2014). (Section 4)
  - [Making LLaMA SEE and Draw with SEED Tokenizer](https://proceedings.iclr.cc/paper_files/paper/2024/file/97011c648eda678424f9292dadeae72e-Paper-Conference.pdf)
- **Image generation** (behaviors tasks) — *measured_by*
  > We evaluate the text-to-image generation on MS-COCO (Chen et al., 2015) and Flickr30K (Young et al., 2014) and compute the pair-wise CLIP similarity score as the evaluation metric following GILL (Koh et al., 2023b). (Section 4.1.1)
  - [Making LLaMA SEE and Draw with SEED Tokenizer](https://proceedings.iclr.cc/paper_files/paper/2024/file/97011c648eda678424f9292dadeae72e-Paper-Conference.pdf)
- **Object detection** (behaviors tasks) — *measured_by*
  > In Table 3, we compare the results of VisionLLM v2 with state-of-the-art methods on two fundamental vision tasks, i.e., object detection, and instance segmentation. (Section 4.3, referring to Table 3 which evaluates on COCO)
  - [VisionLLM v2: An End-to-End Generalist Multimodal Large Language Model for Hundreds of Vision-Language Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/81a60d18e010b27b36cd465c6604b915-Paper-Conference.pdf)
- **Object hallucination** (behaviors tasks) — *measured_by*
  > Object hallucination. CIDEr (↑) for captioning and CHAIRs (↓) for hallucination on COCO dataset. (Figure 2a)
  - [Beyond task performance: evaluating and reducing the flaws of large multimodal models with in-context-learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/5df817c5dd95293ebf6d1583303a8c73-Paper-Conference.pdf)
- **Instance segmentation** (behaviors tasks) — *measured_by*
  > In Table 3, we compare the results of VisionLLM v2 with state-of-the-art methods on two fundamental vision tasks, i.e., object detection, and instance segmentation. (Section 4.3, referring to Table 3 which evaluates on COCO)
  - [VisionLLM v2: An End-to-End Generalist Multimodal Large Language Model for Hundreds of Vision-Language Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/81a60d18e010b27b36cd465c6604b915-Paper-Conference.pdf)
- **Multimodal alignment** (constructs) — *measured_by*
  > such fine-tuning also enhances foundational VLMs’ general image-text alignment capabilities as evident by marked improvements in CLIP’s image-text retrieval performance on COCO. (Section 1)
  - [VisMin: Visual Minimal-Change Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/c3070c3388552a08a3326f0d28dc2af9-Paper-Conference.pdf)
- **Visual generation ability** (constructs) — *measured_by*
  > “we adopt Fr´echet Inception Distance (FID) on MSCOCO dataset to evaluate the generation fidelity of Show-o.”
  - [Show-o: One Single Transformer to Unify Multimodal Understanding and Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/45f0d179ef7e10eb7366550cd4e574ae-Paper-Conference.pdf)
- **Multimodal understanding** (constructs) — *measured_by*
  > “We evaluate Emu on a broad range of vision-language tasks including image captioning (MS-COCO (Chen et al., 2015))”
  - [Emu: Generative Pretraining in Multimodality](https://proceedings.iclr.cc/paper_files/paper/2024/file/34d5143080c89a7ce10932c8c5e1907f-Paper-Conference.pdf)
- **Pose estimation** (behaviors tasks) — *measured_by*
  > We evaluate the results on the four crucial visual perception tasks: instance segmentation (COCO), visual grounding (RefCOCO), pose estimation (COCO), and interactive segmentation (COCO using scribble). (Table 5)
  - [VisionLLM v2: An End-to-End Generalist Multimodal Large Language Model for Hundreds of Vision-Language Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/81a60d18e010b27b36cd465c6604b915-Paper-Conference.pdf)
- **In-context learning** (constructs) — *measured_by*
  > The models are evaluated on four-shot and eight-shot in-context learning performance on various captioning benchmarks (COCO (Karpathy test) [Lin et al., 2014] and TextCaps (validation) [Sidorov et al., 2020]) and visual question answering datasets (VQAv2 (validation) [Agrawal et al., 2015], OK-VQA (validation) [Marino et al., 2019], TextVQA (validation) [Singh et al., 2019], and VizWiz (validation) [Gurari et al., 2018]). (Section 4.2)
  - [MINT-1T: Scaling Open-Source Multimodal Data by 10x: A Multimodal Dataset with One Trillion Tokens](https://proceedings.neurips.cc/paper_files/paper/2024/file/40b9196c25fe1d64d87ca3a80a91d0ce-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Image reconstruction** (behaviors tasks) — *measured_by*
  > Results of image reconstruction on TextCaps, CelebA-HQ, CUB-200, and MS-COCO. (Table 1)
  - [LG-VQ: Language-Guided Codebook Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/fc8781fb328fb1fd069584a4519a2709-Paper-Conference.pdf)
- **Semantic segmentation** (behaviors tasks) — *measured_by*
  > In table 1, we evaluate the performance on DIODE [90] surface normal and depth estimation, COCO [57] semantic and instance segmentation, 3DPW [91] 3D human pose estimation, and do ImageNet-1K [79] kNN retrieval using predicted DINOv2 global tokens. (Section 3.3)
  - [4M-21: An Any-to-Any Vision Model for Tens of Tasks and Modalities](https://proceedings.neurips.cc/paper_files/paper/2024/file/71883294314045d60c900113a359934b-Paper-Conference.pdf)
- **Prompt engineering** (behaviors tasks) — *measured_by*
  > Following PEZ (Wen et al., 2024), we randomly sample 100 images from each dataset and evaluate prompt inversion methods across 5 runs using different random seeds. (Section 4.1)
  - [Visually Guided Decoding: Gradient-Free Hard Prompt Inversion with Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/cd61329e2c14b93a89d617c914140f64-Paper-Conference.pdf)

### Associated with
- **CHAIR** (measurements)
  > As for CHAIR, Following (Wang et al., 2024a; Huang et al., 2024; Yue et al., 2024b), we randomly select 500 images from the validation set of the MSCOCO (Lin et al., 2014) dataset (Section 5.2).
  - [Self-Introspective Decoding: Alleviating Hallucinations for Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/3cc87f2bd3e3b4df8f9217326761c322-Paper-Conference.pdf)
