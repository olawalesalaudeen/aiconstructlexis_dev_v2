# Image generation
**Type:** Behavior  
**Referenced in:** 83 papers  
**Also known as:** Text-to-image generation, Image synthesis, Chest X-ray generation, Controllable generation, Conditional image generation, Text-to-image synthesis, Text-conditioned image generation  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats image generation as text-to-image generation, the creation of static, novel, or realistic visual content from textual prompts or descriptions. Definitions usually frame success as producing images that follow the described content or conditioning input, sometimes with added emphasis on high quality, photo-realism, or high fidelity. A smaller line of work broadens the conditioning signal to class labels, visual prompts, multimodal context, or other controls, and some papers use the output to assess semantic interpretation or exact object counts.

**Variants.** The dominant variant is prompt-based text-to-image generation, including zero-shot or few-shot settings, lengthy prompts, and multilingual prompts in Chinese and English. Other papers study class-conditional generation, conditional generation from multimodal context, controllable generation with facial landmarks, canny edges, or segmentation maps, and chest X-ray generation from anatomical and pathology descriptions. A smaller set further splits the task into style and subject generation, uses image synthesis from visual and spatial clues as an auxiliary reasoning channel, or extends beyond single images to visual stories, image sequences, and interleaved video-text generation.

**Space of elicitation and scores.** Papers link image generation to 8 measurement instruments. The most common are MS-COCO, Flickr30k, ImageNet-1k, COCO Caption, and FFHQ: these are usually used as benchmark datasets, often with FID, CLIP score, or pair-wise CLIP similarity, while some papers instead use human judgments about exact object counts or LLM-based judging on generated images. One paper also claims a causal relationship from prompt rewriting to image generation, where an LLM rewrites the prompt so the final image improves in quality while maintaining or improving faithfulness to the original text prompt.

**What it is taken as evidence of.** Papers connect image generation to 4 constructs. It is most often related to visual generation ability; smaller lines of work relate it to abstract reasoning, memorization, and semantic alignment, for example by treating generation of a fourth image as one step in a visual analogy task, by describing depiction of image details as a memorization-centered task, or by defining semantic alignment as aligning generated images with text prompts. All recorded construct links are phrased as related.

## Sources

**[Jointly Training Large Autoregressive Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d564edd2bf015ac07c8031ab3f9839b0-Paper-Conference.pdf)**
> Producing realistic images from class labels or other conditioning signals using a generative model.

**[Vitron: A Unified Pixel-level Vision LLM for Understanding, Generating, Segmenting, Editing](https://proceedings.neurips.cc/paper_files/paper/2024/file/68bad5506f0f9eea7ae75f01ae00d5e2-Paper-Conference.pdf) (as "Text-to-image generation")**
> Creating static visual content from textual prompts.

**[Enhancing LLM Reasoning via Vision-Augmented Prompting](https://proceedings.neurips.cc/paper_files/paper/2024/file/328c922d068dd4ccb23cec5c64e6c7fc-Paper-Conference.pdf) (as "Image synthesis")**
> Creating an image from a textual problem description using a drawing or generation tool.

**[MedRAX: Medical Reasoning Agent for Chest X-ray](https://raw.githubusercontent.com/mlresearch/v267/main/assets/fallahpour25a/fallahpour25a.pdf) (as "Chest X-ray generation")**
> Synthesizing realistic chest X-ray images from textual descriptions of anatomical features and pathologies.

**[Bridging The Gap between Low-rank and Orthogonal Adaptation via Householder Reflection Adaptation](https://proceedings.neurips.cc/paper_files/paper/2024/file/cdd0640218a27e9e2c0e52e324e25db0-Paper-Conference.pdf) (as "Controllable generation")**
> Generating images that align with a text prompt and additional control signals such as edges, landmarks, or segmentation maps.

**[Demystifying Poisoning Backdoor Attacks from a Statistical Perspective](https://proceedings.iclr.cc/paper_files/paper/2024/file/4488bf8354049b1cd592b6418dc30466-Paper-Conference.pdf) (as "Conditional image generation")**
> The task of synthesizing an image based on a given condition, such as a text prompt or a multimodal context.

**[DreamLLM: Synergistic Multimodal Comprehension and Creation](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a7a22152cd21f0ca3c0f8139bb32905-Paper-Conference.pdf) (as "Text-to-image synthesis")**
> Generating images from textual prompts or descriptions.

**[I Think, Therefore I Diffuse: Enabling Multimodal In-Context Reasoning in Diffusion Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/mi25a/mi25a.pdf) (as "Text-conditioned image generation")**
> Generating an image based solely on a textual prompt, following the described content with high fidelity.

## Relationships

### Image generation →
- **MS-COCO** (measurements) — *measured_by*
  > We evaluate the text-to-image generation on MS-COCO (Chen et al., 2015) and Flickr30K (Young et al., 2014) and compute the pair-wise CLIP similarity score as the evaluation metric following GILL (Koh et al., 2023b). (Section 4.1.1)
  - [Making LLaMA SEE and Draw with SEED Tokenizer](https://proceedings.iclr.cc/paper_files/paper/2024/file/97011c648eda678424f9292dadeae72e-Paper-Conference.pdf)
- **ImageNet-1k** (measurements) — *measured_by*
  > when evaluating on the ImageNet dataset, a gold standard benchmark for image generation (Section 1).
  - [Language Model Beats Diffusion - Tokenizer is key to visual generation](https://proceedings.iclr.cc/paper_files/paper/2024/file/036912a83bdbb1fd792baf6532f102d8-Paper-Conference.pdf)
- **Flickr30k** (measurements) — *measured_by*
  > We evaluate the text-to-image generation on MS-COCO (Chen et al., 2015) and Flickr30K (Young et al., 2014) and compute the pair-wise CLIP similarity score as the evaluation metric following GILL (Koh et al., 2023b). (Section 4.1.1)
  - [Making LLaMA SEE and Draw with SEED Tokenizer](https://proceedings.iclr.cc/paper_files/paper/2024/file/97011c648eda678424f9292dadeae72e-Paper-Conference.pdf)
- **COCO Caption** (measurements) — *measured_by*
  > Table 8: Text-to-Image generation on COCO-caption data [60].
  - [Vitron: A Unified Pixel-level Vision LLM for Understanding, Generating, Segmenting, Editing](https://proceedings.neurips.cc/paper_files/paper/2024/file/68bad5506f0f9eea7ae75f01ae00d5e2-Paper-Conference.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > To assess their ability to generate images with the exact number of objects requested, we conducted a human evaluation study. (Section 3.1)
  - [Understanding the Limits of Vision Language Models Through the Lens of the Binding Problem](https://proceedings.neurips.cc/paper_files/paper/2024/file/cdcc6d47c1627350014a3076112ab824-Paper-Conference.pdf)
- **FFHQ** (measurements) — *measured_by*
  > We report the FID (Parmar et al., 2022) values in Table 2 for unconditional 256×256 image synthesis on the CelebA-HQ dataset (Karras et al., 2017) and the FFHQ dataset (Karras et al., 2018).
  - [Glauber Generative Model: Discrete Diffusion Models via Binary Classification](https://proceedings.iclr.cc/paper_files/paper/2025/file/125be378b39b10676f56e12e6923b902-Paper-Conference.pdf)
- **GenEval** (measurements) — *measured_by*
  > we report results on more comprehensive benchmarks instead of only CLIP score, such as GenEval (Ghosh et al., 2024) and DSG (Cho et al., 2024). (Section 4.3)
  - [Revisit Large-Scale Image-Caption Data in Pre-training Multimodal Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ebba182cb97864368fdb6ae00773a5e4-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > following the GPT-4V metric introduced in Section 4.2, we randomly select a subset of 3,000 our generated images for GPT-4V evaluation.
  - [What If We Recaption Billions of Web Images with LLaMA-3?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25ch/li25ch.pdf)
- **CLIP score** (measurements) — *measured_by*
  > “we report two performance metrics: (i) outscore-the-best (OtB): the difference between the CLIPScore attained by the algorithm and the highest average CLIPScore attained by any single model”
  - [PAK-UCB Contextual Bandit: An Online Learning Approach to Prompt-Aware Selection of Generative Models and LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hu25m/hu25m.pdf)

### → Image generation
- **Prompt engineering** (behaviors tasks) — *causes*
  > generative models can generate images of objects using a well-crafted prompt
  - [Visually Guided Decoding: Gradient-Free Hard Prompt Inversion with Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/cd61329e2c14b93a89d617c914140f64-Paper-Conference.pdf)
- **Query rewriting** (behaviors tasks) — *causes*
  > The goal of the LLM is to “rewrite” the prompt passed into the T2I model, such that the final generated image improves in quality, while maintaining or improving the faithfulness to the original text prompt. (Section 4.4)
  - [LLMs can see and hear without any training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ashutosh25a/ashutosh25a.pdf)

### Associated with
- **Visual generation ability** (constructs)
  > "Visual Generation is also a wide topic covering a number of different tasks, such as generation, editing, variation, personalization, etc. In VisionLLM v2, we focus on two fundamental tasks, i.e., text-to-image generation and instruction-based image editing."
  - [VisionLLM v2: An End-to-End Generalist Multimodal Large Language Model for Hundreds of Vision-Language Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/81a60d18e010b27b36cd465c6604b915-Paper-Conference.pdf)
- **Memorization** (constructs)
  > we observe that LISA is much better than LoRA at memorization-centered tasks, such as Writing or depicting image details, while this gap is much smaller in reasoning-centered tasks like Code or Math (Section 5).
  - [LISA: Layerwise Importance Sampling for Memory-Efficient Large Language Model Fine-Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/687163285b8affc8ee933bdca8e75747-Paper-Conference.pdf)
- **Semantic alignment** (constructs)
  > “aligning the generated images with the text prompts, which is referred to as semantic alignment”
  - [Token Merging for Training-Free Semantic Binding in Text-to-Image Synthesis](https://proceedings.neurips.cc/paper_files/paper/2024/file/f8ce25dcb2cb0eb8a24b492bf3e84695-Paper-Conference.pdf)
- **Analogical reasoning** (constructs)
  > "The aim is to generate an image that completes the analogy problem following perceptual and relational reasoning."
  - [VOILA: Evaluation of MLLMs For Perceptual Understanding and Analogical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/adf17e7346b6be4c2f2bb40de572e5bc-Paper-Conference.pdf)
