# NoCaps
**Type:** Measurement  
**Referenced in:** 14 papers  
**Also known as:** NOCAPS, Nocaps  

## State of the Field

**What it is.** Across papers, NoCaps is most commonly treated as an image captioning benchmark or dataset for testing captions on novel objects or classes not seen during training, often in zero-shot settings. Some authors describe it as large-scale or open-domain; one paper labels it a captioning task for natural images, another says it is derived from Open Images, and another uses it as an out-of-domain benchmark for transferability and robustness tests. The recurring content description is images with diverse objects and scenes, especially categories not seen frequently in training.

**What it is claimed to measure.** Papers use NoCaps to measure 2 behavioral indicators and no constructs. The prevailing use is Image captioning: papers describe it as evaluating image-level caption ability, zero-shot image captioning, or image-to-text captioning. A smaller line of work uses it to measure Object hallucination, with one paper evaluating object hallucination in visual caption and checking transferability and robustness on out-of-domain images.

**Space of uses.** No measurement instrument is linked to it. In practice, papers commonly report it alongside Flickr30K and COCO, and some also place it with TextCaps, SCREEN2WORDS, or COCO-Cap when evaluating captioning systems. The prevailing positioning is as an evaluation benchmark for image-level or zero-shot captioning, while a few papers use it as an auxiliary generalizability or out-of-domain check.

## Sources

**[Bridging Vision and Language Spaces with Assignment Prediction](https://proceedings.iclr.cc/paper_files/paper/2024/file/3f20f2b0315c72201e23512fdbd1ee91-Paper-Conference.pdf)**
> Zero-shot image captioning benchmark dataset used to evaluate generalization of vision-language models on novel image content not seen during training.

**[HEMM: Holistic Evaluation of Multimodal Foundation Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/4b6e5dae3acb4cfdfe5928a6eff174ee-Paper-Datasets_and_Benchmarks_Track.pdf) (as "NOCAPS")**
> A large-scale image captioning dataset designed to test a model's ability to describe novel objects not seen frequently in training data.

**[Understanding and Mitigating Hallucination in Large Vision-Language Models via Modular Attribution and Intervention](https://proceedings.iclr.cc/paper_files/paper/2025/file/8001c3568152d134d821cd46d4d84768-Paper-Conference.pdf) (as "Nocaps")**
> The Novel Object Captioning (Nocaps) dataset, used to evaluate the transferability and robustness of hallucination mitigation methods on out-of-domain images.

## Relationships

### → NoCaps
- **Image captioning** (behaviors tasks) — *measured_by*
  > We first quantitatively evaluate the zero-shot multi-modal understanding capacity of LaVIT on Image Captioning (NoCaps (Agrawal et al., 2019), Flickr30k (Plummer et al., 2015)) (Section 4.1)
  - [Unified Language-Vision Pretraining in LLM with Dynamic Discrete Visual Tokenization](https://proceedings.iclr.cc/paper_files/paper/2024/file/e1762b64958760f7bfabe3a7062d007f-Paper-Conference.pdf)
- **Object hallucination** (behaviors tasks) — *measured_by*
  > To evaluate object hallucination in visual caption, we use images from the COCO validation and Nocaps (Agrawal et al., 2019) datasets (Section 5.1).
  - [Understanding and Mitigating Hallucination in Large Vision-Language Models via Modular Attribution and Intervention](https://proceedings.iclr.cc/paper_files/paper/2025/file/8001c3568152d134d821cd46d4d84768-Paper-Conference.pdf)
