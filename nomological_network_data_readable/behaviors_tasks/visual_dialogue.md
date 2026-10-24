# Visual dialogue
**Type:** Behavior  
**Referenced in:** 25 papers  
**Also known as:** Open-ended visual chat, Multimodal chat, Multi-modal chat, Image-based conversation, Visual prompt-based conversation, Visual conversation, Multi-modal dialogue, Multi-turn visual conversation, Visual dialog, Visual chatting, Multi-image dialogue, Image dialogue, Visual chat, Conversational VQA, Biomedical multimodal conversation, Multimodal dialogue, Multimodal conversation, Multi-modal conversation  

## State of the Field

**Space of definitions.** Across the surveyed work, the dominant framing is a multi-turn or multi-round conversation grounded in visual input, usually an image, where responses depend on both the image and the prior dialogue context. Most definitions describe answering image-based prompts or user questions in an open-ended conversational format; some broaden this to multimodal exchanges over text and images, and a smaller line of work specifies settings such as contextually relevant biomedical answers, following instructions, or step-by-step decisions from interleaved visual context.

**Variants.** Papers use many near-synonymous names, most often multimodal chat, multimodal dialogue or conversation, visual conversation, visual chat or dialog, and image-based conversation. A smaller line of work studies variants grounded in one or more images, multiple images or interleaved multi-image inputs, conversational VQA, and visual prompt-based conversation where users refer to regions with points, boxes, or masks; domain-specific versions appear in biomedical and clinical settings, and one multilingual formulation includes answering questions and following instructions across languages.

**Space of elicitation and scores.** Papers link this behavior to three measurement instruments, most often MM-Vet, and also GQA and TextVQA. MM-Vet is described as evaluating a model's capability to engage in visual conversations, with one paper adding that it scores correctness and helpfulness through a GPT-4 evaluation framework; another paper says it uses GQA and TextVQA for this task.

**What it is taken as evidence of.** Only one construct link appears in the papers, and it is phrased as related rather than as direct evidence: one paper places image-based conversation and visual prompt-based conversation within a broader family of visual understanding and reasoning tasks. Beyond that, no other construct link is reported. Separately, one paper reports that visual dialogue is related to visual question answering, stating that VQA can evaluate task- and dataset-independent visual dialog.

## Sources

**[Biomedical Visual Instruction Tuning with Clinician Preference Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/aec33ab89b5986605cd7c331396e7e5c-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Open-ended visual chat")**
> Responding to image-based prompts in a multi-round conversational format with contextually relevant biomedical answers.

**[WildVision: Evaluating Vision-Language Models in the Wild with Human Preferences](https://proceedings.neurips.cc/paper_files/paper/2024/file/563991b5c8b45fe75bea42db738223b2-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Multimodal chat")**
> Engaging in a multi-turn conversational interaction with a user, where the conversation is grounded in one or more images.

**[Delta-CoMe: Training-Free Delta-Compression with Mixed-Precision for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/37664246a1e07e212ddacea6e5a523f2-Paper-Conference.pdf) (as "Multi-modal chat")**
> The task of engaging in a conversation that involves understanding and responding to inputs from multiple modalities, such as combined text and image queries.

**[Octopus: A Multi-modal LLM with Parallel Recognition and Sequential Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/a3eadeebbc9eecd621086f6978865a85-Paper-Conference.pdf)**
> The observable task of participating in a conversation about an image, where the model's responses are contextually dependent on both the visual input and the dialogue history.

**[OMG-LLaVA: Bridging Image-level, Object-level, Pixel-level Reasoning and Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/83eb86be3e2f9fd66c44d9073c51ba4d-Paper-Conference.pdf) (as "Image-based conversation")**
> The task of engaging in a multi-turn dialogue with a user about the content of an image.

**[OMG-LLaVA: Bridging Image-level, Object-level, Pixel-level Reasoning and Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/83eb86be3e2f9fd66c44d9073c51ba4d-Paper-Conference.pdf) (as "Visual prompt-based conversation")**
> The task of engaging in a dialogue about an image where the user can refer to specific areas using visual prompts like points, boxes, or masks.

**[Efficient Large Multi-modal Models via Visual Context Compression](https://proceedings.neurips.cc/paper_files/paper/2024/file/871ed095b734818cfba48db6aeb25a62-Paper-Conference.pdf) (as "Visual conversation")**
> Engaging in multi-turn dialogue about visual content, producing responses conditioned on images and prior turns.

**[MaVEn: An Effective Multi-granularity Hybrid Visual Encoding Framework for Multimodal Large Language Model](https://proceedings.neurips.cc/paper_files/paper/2024/file/b8f21f324ff277ba26aed2e944b7576b-Paper-Conference.pdf) (as "Multi-modal dialogue")**
> Engaging in a conversational exchange that involves both textual and visual information.

**[ConvBench: A Multi-Turn Conversation Evaluation Benchmark with Hierarchical Ablation Capability for Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b69396afc07a9ca3428d194f4db84c02-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Multi-turn visual conversation")**
> The observable behavior of engaging in a sequence of dialogue turns involving both visual and textual inputs, where responses depend on prior context.

**[FlexCap: Describe Anything in Images in Controllable Detail](https://proceedings.neurips.cc/paper_files/paper/2024/file/c91b6f7e0152b7a95ee777e987fe811e-Paper-Conference.pdf) (as "Visual dialog")**
> Engaging in a multi-turn conversational exchange with a user about the content of an image.

**[Painting with Words: Elevating Detailed Image Captioning with Benchmark and Alignment Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/c6af791af7ef0f3e02bccef011211ca5-Paper-Conference.pdf) (as "Visual chatting")**
> Engaging in a multi-turn, conversational interaction with a user about the content of an image.

**[LLaVA-Interleave: Tackling Multi-image, Video, and 3D in Large Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c9f95e9ec39fa5ad3d0a562b993b92aa-Paper-Conference.pdf) (as "Multi-image dialogue")**
> Engaging in dialogue grounded in multiple images provided together as input.

**[Tracking the Copyright of Large Vision-Language Models through Parameter Learning Adversarial Images](https://proceedings.iclr.cc/paper_files/paper/2025/file/d368eba3fb546ae5d868dae2ecb17200-Paper-Conference.pdf) (as "Image dialogue")**
> Responding in natural language to image-based prompts in a conversational format.

**[Towards Rationale-Answer Alignment of LVLMs via Self-Rationale Calibration](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25am/wu25am.pdf) (as "Visual chat")**
> Engaging in a multi-turn conversational dialogue with a user about the contents of an image.

**[ClawMachine: Learning to Fetch Visual Tokens for Referential Comprehension](https://proceedings.iclr.cc/paper_files/paper/2025/file/b1abd42eb5aace7f0ad9ba9cfb029f54-Paper-Conference.pdf) (as "Conversational VQA")**
> The model answers conversational visual questions about images, including dialogue-style prompts and responses.

**[Does Acceleration Cause Hidden Instability in Vision Language Models? Uncovering Instance-Level Divergence Through a Large-Scale Empirical Study](https://aclanthology.org/2025.emnlp-main.425.pdf) (as "Biomedical multimodal conversation")**
> Engaging in a conversational exchange about biomedical topics, involving the interpretation of medical images and related text.

**[DreamLLM: Synergistic Multimodal Comprehension and Creation](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a7a22152cd21f0ca3c0f8139bb32905-Paper-Conference.pdf) (as "Multimodal dialogue")**
> Engaging in a conversational exchange with a user where the context includes both text and images.

**[Large Multilingual Models Pivot Zero-Shot Multimodal Learning across Languages](https://proceedings.iclr.cc/paper_files/paper/2024/file/bd54a6d4dc60c82ae989154013e17754-Paper-Conference.pdf) (as "Multimodal conversation")**
> Engaging in dialogue with users based on visual input, including answering questions and following instructions in multiple languages.

**[EAGLE: Expert-Guided Self-Enhancement for Preference Alignment in Pathology Large Vision-Language Model](https://aclanthology.org/2025.acl-long.711.pdf) (as "Multi-modal conversation")**
> Engaging in dialogue involving both image and text inputs, such as responding to follow-up questions or providing detailed descriptions in a clinical context.

## Relationships

### Visual dialogue →
- **MM-Vet** (measurements) — *measured_by*
  > MM-Vet evaluates a model’s capabilities in engaging in visual conversations. (Section 4.1)
  - [Efficient Large Multi-modal Models via Visual Context Compression](https://proceedings.neurips.cc/paper_files/paper/2024/file/871ed095b734818cfba48db6aeb25a62-Paper-Conference.pdf)
- **GQA** (measurements) — *measured_by*
  > Multi-Modal Chat Vision-language models (VLMs) are attracting increasing attention due to their ability to process both text and images. ... For this task, we use GQA (Hudson & Manning, 2019) and TextVQA (Singh et al., 2019)
  - [Delta-CoMe: Training-Free Delta-Compression with Mixed-Precision for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/37664246a1e07e212ddacea6e5a523f2-Paper-Conference.pdf)
- **TextVQA** (measurements) — *measured_by*
  > Multi-Modal Chat Vision-language models (VLMs) are attracting increasing attention due to their ability to process both text and images. ... For this task, we use GQA (Hudson & Manning, 2019) and TextVQA (Singh et al., 2019)
  - [Delta-CoMe: Training-Free Delta-Compression with Mixed-Precision for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/37664246a1e07e212ddacea6e5a523f2-Paper-Conference.pdf)

### Associated with
- **Visual question answering** (behaviors tasks)
  > most recently, VQA also become one of the most powerful benchmarks for evaluating task and dataset independent visual dialog. (Section 5)
  - [FlexCap: Describe Anything in Images in Controllable Detail](https://proceedings.neurips.cc/paper_files/paper/2024/file/c91b6f7e0152b7a95ee777e987fe811e-Paper-Conference.pdf)
- **Visual understanding** (constructs)
  > Our OMG-LLaVA unifies image-level (such as image caption and image-based conversation), object-level (such as region caption and visual prompt-based conversation), and pixel-level (such as universal segmentation, referring segmentation, reasoning segmentation, and grounded conversation generation) visual understanding and reasoning tasks into token-to-token generation. (Section 3.1)
  - [OMG-LLaVA: Bridging Image-level, Object-level, Pixel-level Reasoning and Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/83eb86be3e2f9fd66c44d9073c51ba4d-Paper-Conference.pdf)
