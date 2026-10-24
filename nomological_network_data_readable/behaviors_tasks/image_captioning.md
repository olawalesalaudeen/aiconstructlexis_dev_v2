# Image captioning
**Type:** Behavior  
**Referenced in:** 205 papers  
**Also known as:** Literal description writing, Visual captioning, Scene description, Image description generation, Image Caption Generation, Image Captioning, Image caption generation, Captioning, Diagram captioning, Situated captioning, Frame-level caption generation, Scene description generation, Image description, Caption generation, Open-ended generation  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is image-to-text generation: a model produces a textual description of an input image. Most formulations treat success as accurately describing visible content, often including objects, attributes, spatial relations, or broader scene content, and some prompts explicitly ask for objective descriptions that avoid subjective conjecture. Papers differ mainly in granularity, ranging from brief or single-sentence captions to rich, highly detailed descriptions, and a smaller line of work asks for structured scene descriptions in JSON, style-sensitive captions, or descriptions detailed enough to replace a diagram in downstream problem solving.

**Variants.** Papers use several near-synonymous labels, including image description, image description generation, visual captioning, scene description, and caption generation. Variants span literal description writing for two-panel comics, diagram and math captioning, medical and pathology images, earth-observation images, situated captioning from an agent's viewpoint, driving-scene description, and open-ended generation. Some studies caption whole images, while others target regions, detected objects, people, or UI observations, or use captions as inputs for later reasoning or summarization.

**Space of elicitation and scores.** Papers link image captioning to 10 measurement instruments. The most common are MS-COCO, Flickr30k, CHAIR, NoCaps, and COCO Caption; benchmark datasets dominate, while CHAIR is used to assess object hallucination in generated captions. The remaining five instruments are less common and include judge-based and human evaluation, with some papers scoring accuracy and detailedness on a Likert scale or testing low-level visual description.

**What it is taken as evidence of.** Papers link image captioning to 7 constructs, and they use it in several construct-level roles rather than linking it to a single construct. The most common framing connects it to visual understanding, multimodal understanding, visual perception, brain alignment, and generalization: multimodal understanding, visual perception, and generalization are measured by image captioning, image captioning is related to visual understanding, multimodal understanding, and visual perception, and some papers claim a causal relationship from image captioning to visual understanding and brain alignment. Two other constructs are also linked as additional causal targets.

## Sources

**[VHELM: A Holistic Evaluation of Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe2fc7dc60b55ccd8886220b40fb1f74-Paper-Datasets_and_Benchmarks_Track.pdf)**
> The observable task of producing textual descriptions of input images.

**[Cracking the Code of Juxtaposition: Can AI Models Understand the Humorous Contradictions](https://proceedings.neurips.cc/paper_files/paper/2024/file/540a6eefb60428c8547a27253f9a2a59-Paper-Conference.pdf) (as "Literal description writing")**
> The task of generating a short, surface-level text description that illustrates the narrative depicted in the two panels of a comic.

**[MMDU: A Multi-Turn Multi-Image Dialog Understanding Benchmark and Instruction-Tuning Dataset for LVLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/1057053100de064a44286239724f7865-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Image description")**
> Generating textual descriptions of the visual content within an image.

**[Instruction-Guided Visual Masking](https://proceedings.neurips.cc/paper_files/paper/2024/file/e4165c96702bac5f4962b70f3cf2f136-Paper-Conference.pdf) (as "Visual captioning")**
> Generating descriptive text that summarizes or details the content of an image.

**[Understanding the Limits of Vision Language Models Through the Lens of the Binding Problem](https://proceedings.neurips.cc/paper_files/paper/2024/file/cdcc6d47c1627350014a3076112ab824-Paper-Conference.pdf) (as "Scene description")**
> The task of generating a structured (e.g., JSON) or natural language description of all objects and their features (e.g., color, shape) in a visual scene.

**[Image Textualization: An Automatic Framework for Generating Rich and Detailed Image Descriptions](https://proceedings.neurips.cc/paper_files/paper/2024/file/c37d94c04effc86d72ab2258ba9b76c7-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Image description generation")**
> The task of producing a natural language text that describes the visual content of a given image.

**[Unified Generative and Discriminative Training for Multi-modal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/29416b66c2149872b9d1415a3fd2c5e0-Paper-Conference.pdf) (as "Image Caption Generation")**
> The observable task of generating textual descriptions for provided images.

**[DreamClear: High-Capacity Real-World Image Restoration with Privacy-Safe Dataset Curation](https://proceedings.neurips.cc/paper_files/paper/2024/file/6452474601429509f3035dc81c233226-Paper-Conference.pdf) (as "Image Captioning")**
> The observable task of generating detailed textual descriptions of image content and style.

**[Measuring Multimodal Mathematical Reasoning with MATH-Vision Dataset](https://proceedings.neurips.cc/paper_files/paper/2024/file/ad0edc7d5fa1a783f063646968b7315b-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Image caption generation")**
> Describing a diagram or image in text so that the description can substitute for the visual input in downstream problem solving.

**[TEOChat: A Large Vision-Language Assistant for Temporal Earth Observation Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/ac3af725ae398b6184faae0828bdbd6c-Paper-Conference.pdf) (as "Captioning")**
> Generating descriptive natural-language text about the content of an earth-observation image.

**[SPARTUN3D: Situated Spatial Understanding of 3D World in Large Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/b633e7052970b8f5aa1a69164d99e9e8-Paper-Conference.pdf) (as "Situated captioning")**
> Generating brief descriptions of surrounding objects and their spatial directions from the agent’s current standing point and orientation.

**[MAVIS: Mathematical Visual Instruction Tuning with an Automatic Data Engine](https://proceedings.iclr.cc/paper_files/paper/2025/file/db36dcad6baee298a34ffca324b84b09-Paper-Conference.pdf) (as "Diagram captioning")**
> The observable behavior of generating a textual description that accurately identifies the mathematical elements and their relationships within a given diagram.

**[UP-VLA: A Unified Understanding and Prediction Model for Embodied Agent](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25w/zhang25w.pdf) (as "Scene description generation")**
> Generating a textual description of the current visual scene in response to a prompt.

**[Rephrase, Augment, Reason: Visual Grounding of Questions for Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/eef6cb60fd59b32d35718e176b4b08d6-Paper-Conference.pdf) (as "Caption generation")**
> Producing descriptive natural language summaries of visual regions or entire images based on their content.

**[The Hidden Life of Tokens: Reducing Hallucination of Large Vision-Language Models Via Visual Information Steering](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25ca/li25ca.pdf) (as "Open-ended generation")**
> Producing free-form textual descriptions of an image without constraints on content or structure, typically used in image captioning tasks.

## Relationships

### Image captioning →
- **MS-COCO** (measurements) — *measured_by*
  > and the image caption generation task, MSCOCO (Chen et al., 2015) (Section 3.1).
  - [DePT: Decomposed Prompt Tuning for Parameter-Efficient Fine-tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/e352b765e625934ce86919995e2371aa-Paper-Conference.pdf)
- **Flickr30k** (measurements) — *measured_by*
  > We first quantitatively evaluate the zero-shot multi-modal understanding capacity of LaVIT on Image Captioning (NoCaps (Agrawal et al., 2019), Flickr30k (Plummer et al., 2015)) (Section 4.1)
  - [Unified Language-Vision Pretraining in LLM with Dynamic Discrete Visual Tokenization](https://proceedings.iclr.cc/paper_files/paper/2024/file/e1762b64958760f7bfabe3a7062d007f-Paper-Conference.pdf)
- **CHAIR** (measurements) — *measured_by*
  > Caption Hallucination Assessment with Image Relevance (CHAIR) (Rohrbach et al., 2018) is a widely-used metric for evaluating object hallucination in image captioning tasks.
  - [Analyzing and Mitigating Object Hallucination in Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/fc625e831361cfcc82cb74224fdc66cb-Paper-Conference.pdf)
- **NoCaps** (measurements) — *measured_by*
  > We first quantitatively evaluate the zero-shot multi-modal understanding capacity of LaVIT on Image Captioning (NoCaps (Agrawal et al., 2019), Flickr30k (Plummer et al., 2015)) (Section 4.1)
  - [Unified Language-Vision Pretraining in LLM with Dynamic Discrete Visual Tokenization](https://proceedings.iclr.cc/paper_files/paper/2024/file/e1762b64958760f7bfabe3a7062d007f-Paper-Conference.pdf)
- **COCO Caption** (measurements) — *measured_by*
  > For COCO image captioning, we report BLEU@4 (B@4), METEOR (M), CIDEr (C), and SPICE (S). (Section 4.3)
  - [Multi-Head Mixture-of-Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/ab05dc8bf36a9f66edbff6992ec86f56-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > For literal description and contradiction, we report BERT score (recall), BLEURT (BLT), and GPT evaluation score. (Table 2)
  - [Cracking the Code of Juxtaposition: Can AI Models Understand the Humorous Contradictions](https://proceedings.neurips.cc/paper_files/paper/2024/file/540a6eefb60428c8547a27253f9a2a59-Paper-Conference.pdf)
- **Generative ability** (constructs) — *causes*
  > image captioning to yield the generative capability of frozen LLMs.
  - [Bridging Vision and Language Spaces with Assignment Prediction](https://proceedings.iclr.cc/paper_files/paper/2024/file/3f20f2b0315c72201e23512fdbd1ee91-Paper-Conference.pdf)
- **CUB-200-2011** (measurements) — *measured_by*
  > we use the learned codebook to conduct two visual text reasoning tasks: 1) image captioning on CUB-200; (Section 4.4.2)
  - [LG-VQ: Language-Guided Codebook Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/fc8781fb328fb1fd069584a4519a2709-Paper-Conference.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > we also include human evaluation to assess the quality of the outputs for the literal description and contradiction generation tasks. (Section 4.2)
  - [Cracking the Code of Juxtaposition: Can AI Models Understand the Humorous Contradictions](https://proceedings.neurips.cc/paper_files/paper/2024/file/540a6eefb60428c8547a27253f9a2a59-Paper-Conference.pdf)
- **LLaVA-Bench-in-the-Wild** (measurements) — *measured_by*
  > LLaVA-Bench (Liu et al., 2023b) consists of 24 images and 60 questions to assess LVLMs' performance on complex tasks and domain adaptation. Following Leng et al. (2024), we use GPT-4 to assess the accuracy and detailedness of LVLM's image captioning
  - [Do You Keep an Eye on What I Ask? Mitigating Multimodal Hallucination via Attention-Guided Ensemble Decoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/637b275a6e65924719198188fc939632-Paper-Conference.pdf)
- **Reasoning** (constructs) — *causes*
  > Much like humans, who often write down their key observations in an image and refer to them while solving complex reasoning tasks, we hypothesize that grounding the LVLM’s responses in a detailed visual description can significantly enhance its reasoning process. (Section 5)
  - [Visual Description Grounding Reduces Hallucinations and Boosts Reasoning in LVLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/a6805b5564bd8d813a81c4b5a97e5ca6-Paper-Conference.pdf)
- **Brain alignment** (constructs) — *causes*
  > Specifically, the image captioning instruction leads to stronger brain alignment in regions like the EBA (extrastriate body area), PPA (parahippocampal place area), and FFA (fusiform face area)
  - [Correlating instruction-tuning (in multimodal models) with vision-language processing (in the brain)](https://proceedings.iclr.cc/paper_files/paper/2025/file/e52e4de8689a9955b6d3ff421d019387-Paper-Conference.pdf)
- **CLIP score** (measurements) — *measured_by*
  > “CLIPScore (Hessel et al., 2021) has been widely-used to evaluate the alignment of samples generated by text-to-image/video (T2I/V) and image captioning models”
  - [PAK-UCB Contextual Bandit: An Online Learning Approach to Prompt-Aware Selection of Generative Models and LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hu25m/hu25m.pdf)

### → Image captioning
- **Language modeling** (behaviors tasks) — *causes*
  > The model is trained with next token prediction objective, to generate text conditioned on images in an auto-regressive fashion. In this work we focus on models trained to "translate" images into text, or image captioning models.
  - [A Concept-Based Explainability Framework for Large Multimodal Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/f4fba41b554f9aaa013c4062a1c40518-Paper-Conference.pdf)

### Associated with
- **Visual understanding** (constructs)
  > Our OMG-LLaVA unifies image-level (such as image caption and image-based conversation), object-level (such as region caption and visual prompt-based conversation), and pixel-level (such as universal segmentation, referring segmentation, reasoning segmentation, and grounded conversation generation) visual understanding and reasoning tasks into token-to-token generation. (Section 3.1)
  - [OMG-LLaVA: Bridging Image-level, Object-level, Pixel-level Reasoning and Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/83eb86be3e2f9fd66c44d9073c51ba4d-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks)
  > Dispreferred response: Model-generated descriptions resulting from either (1) corrupted image with low resolution or distorted color, or (2) “bad” prompts that cause the base model to hallucinate and describe elements that may not logically exist in the image. (Section 4)
  - [Enhancing Large Vision Language Models with Self-Training on Image Comprehension](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed45d6a03de84cc650cae0655f699356-Paper-Conference.pdf)
- **Multimodal understanding** (constructs)
  > While conceptually simple, this allows us to explore vision-language understanding tasks such as captioning and VQA, as well as text-to-image generation. (Section 3.3)
  - [JetFormer: An autoregressive generative model of raw images and text](https://proceedings.iclr.cc/paper_files/paper/2025/file/d5a8e37f38a08c68162452dcba89ae9c-Paper-Conference.pdf)
- **Visual perception** (constructs)
  > Visual perception is assessed through image captioning, where VLMs produce descriptions of the input images, or visual-question answering (VQA), where VLMs are asked to answer questions pertaining to the images. (Section 3.1)
  - [VHELM: A Holistic Evaluation of Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe2fc7dc60b55ccd8886220b40fb1f74-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Object hallucination** (behaviors tasks)
  > “HALVA substantially reduces hallucination in image descriptions compared to the base variants.”
  - [Mitigating Object Hallucination in MLLMs via Data-augmented Phrase-level Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/b73228d026ef49bfa49f95b7e330513e-Paper-Conference.pdf)
- **Generalization** (constructs)
  > Meanwhile, image captioning is conducted on the unseen BLIP-2 (OPT-2.7b) (Li et al., 2023), to demonstrate the generalization capacity. (Section 4.1)
  - [Privacy-Shielded Image Compression: Defending Against Exploitation from Vision-Language Pretrained Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shen25k/shen25k.pdf)
