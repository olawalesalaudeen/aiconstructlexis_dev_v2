# Visual perception
**Type:** Construct  
**Referenced in:** 82 papers  
**Also known as:** Vision perception, Perception, Perception capability, Perceptual capability, Sensation, Perception ability, Perceptual understanding  

## State of the Field

**Definition agreement:** Consensus. Most papers define visual perception as a model's latent ability to process, extract, and correctly interpret information in visual inputs, usually images and sometimes screenshots, charts, or video, often for downstream task solving. A few papers narrow this to particular domains or broaden it slightly to related sensory inputs, but they still treat the construct as the same core capability of understanding visual content rather than a different phenomenon.

**Space of definitions.** Across the surveyed work, the prevailing usage treats visual perception as a latent model ability to extract, interpret, and understand visual information from images or other visual inputs, often for downstream multimodal tasks. Most definitions stay broad, covering objects, scenes, text, spatial relations, diagrams, charts, plots, natural images, or video. A smaller line narrows the construct to specific settings such as chart reading, GUI screenshots, document screenshots, or agricultural visual input, and one paper instead frames "vision perception" as the quality of visual input interpretation shaped by resolution, keyframe granularity, and visual encoding.

**Space of facets.** Papers use several near-synonymous labels for closely overlapping ideas, including perception, perception capability, perceptual capability, perception ability, and perceptual understanding. One paper isolates a most basic layer under the name sensation and grounds it in count, color, OCR, and scene categories, while chart-focused work breaks perceptual failures into compositional, color, and spatial errors. Other papers place visual perception alongside reasoning, cognition, or generation as a separate competency, and one paper contrasts it with visual recognition by saying perception extends beyond recognition to interpretation and contextualization within the broader scene.

**Space of measurement.** Papers operationalize the construct with 14 linked measurement instruments and 12 linked behavioral indicators. The most common instruments are MME, GQA, MMStar, VQA-v2, and POPE, all used as benchmark-style evaluations; the descriptions say MME tests perception with yes or no questions, GQA and VQA-v2 assess it through open-ended short answers, and 9 other instruments are also linked. Other operationalizations treat accurate answers about the image or accurate description of the image as evidence of perception, which fits the broad extract-and-interpret definitions, though some papers define and test it more narrowly around charts, GUI screenshots, document screenshots, video input, or basic details such as count, color, and OCR.

**Links.** Several papers relate reasoning to visual perception, saying that reasoning benchmarks require a foundational perception capability and that perception and reasoning are encoded in different model layers; other papers relate cognition to visual perception, relate visual perception to question answering, and relate image captioning to visual perception. Papers also claim a causal relationship from multimodal alignment to visual perception. A smaller set claims causal relationships from visual perception to downstream creative and reasoning outcomes, hallucination-related outcomes, and resolution-sensitive tasks, and other one-paper related links connect it with recognition, understanding, memorization, and robustness. The papers report related and causal links, but no correlational links.

## Sources

**[MathVista: Evaluating Mathematical Reasoning of Foundation Models in Visual Contexts](https://proceedings.iclr.cc/paper_files/paper/2024/file/663bce02a0050c4a11f1eb8a7f1429d3-Paper-Conference.pdf)**
> The latent ability to accurately interpret and understand visual information such as diagrams, charts, plots, and natural images, especially in the context of mathematical reasoning.

**[GUI-World: A Video Benchmark and Dataset for Multimodal GUI-oriented Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/3926df1a00c9abf056df7bcf253d026a-Paper-Conference.pdf) (as "Vision perception")**
> The latent quality of visual input interpretation, influenced by resolution, keyframe granularity, and visual encoding.

**[Fine-tuning Multimodal LLMs to Follow Zero-shot Demonstrative Instructions](https://proceedings.iclr.cc/paper_files/paper/2024/file/8cb5b08f912600de3de07c6503599ba8-Paper-Conference.pdf) (as "Perception")**
> The latent ability to extract and interpret visual information from images in order to support downstream multimodal tasks.

**[Mitigating Object Hallucination via Concentric Causal Attention](https://proceedings.neurips.cc/paper_files/paper/2024/file/a76ed4a8ef522c823d73925e7fff16d4-Paper-Conference.pdf) (as "Perception capability")**
> The model's general ability to correctly interpret and understand visual information from an image.

**[MMLONGBENCH-DOC: Benchmarking Long-context Document Understanding with Visualizations](https://proceedings.neurips.cc/paper_files/paper/2024/file/ae0e43289bffea0c1fa34633fc608e92-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Perceptual capability")**
> The ability to extract and interpret visual information from document screenshots, including charts, images, and layout cues.

**[Unveiling the Tapestry of Consistency in Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d6f094ba0f5ce1720466342f78031bdb-Paper-Conference.pdf) (as "Sensation")**
> The fundamental capability of LVLMs to perceive basic visual details such as count, color, OCR, and scene categories.

**[Dysca: A Dynamic and Scalable Benchmark for Evaluating Perception Ability of LVLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/a2372bb107ef0ba85e47c6a2dc7dafda-Paper-Conference.pdf) (as "Perception ability")**
> The model's fundamental capability to interpret and understand visual information across various contexts, styles, and scenarios.

**[VOILA: Evaluation of MLLMs For Perceptual Understanding and Analogical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/adf17e7346b6be4c2f2bb40de572e5bc-Paper-Conference.pdf) (as "Perceptual understanding")**
> The latent ability to accurately interpret visual content and extract relevant properties from images.

## Relationships

### Visual perception →
- **MME** (measurements) — *measured_by*
  > MME benchmark measures both perception and cognition abilities on a total of 14 subtasks. (Section 4.2)
  - [Fine-tuning Multimodal LLMs to Follow Zero-shot Demonstrative Instructions](https://proceedings.iclr.cc/paper_files/paper/2024/file/8cb5b08f912600de3de07c6503599ba8-Paper-Conference.pdf)
- **GQA** (measurements) — *measured_by*
  > GQA and VQA-v2 evaluate the model’s visual perception capabilities on open-ended short answers. (Section 4.1)
  - [Efficient Large Multi-modal Models via Visual Context Compression](https://proceedings.neurips.cc/paper_files/paper/2024/file/871ed095b734818cfba48db6aeb25a62-Paper-Conference.pdf)
- **VQA-v2** (measurements) — *measured_by*
  > GQA and VQA-v2 evaluate the model’s visual perception capabilities on open-ended short answers. (Section 4.1)
  - [Efficient Large Multi-modal Models via Visual Context Compression](https://proceedings.neurips.cc/paper_files/paper/2024/file/871ed095b734818cfba48db6aeb25a62-Paper-Conference.pdf)
- **POPE** (measurements) — *measured_by*
  > In contrast, for several benchmarks primarily targeting the visual perception skills of models, performance remains consistent when gradually reducing the number of visual tokens until a threshold is reached. Beyond this threshold, performance drops significantly (see Figure 5 and Appendix Figure 8). This “turning point" is observed in benchmarks such as MME Cognition, MME Perception, POPE, and MMMU.
  - [Matryoshka Query Transformer for Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/59c147c7d4fdb732daea3064eab949bf-Paper-Conference.pdf)
- **VizWiz** (measurements) — *measured_by*
  > We further evaluate our trained model over six benchmarks that examines LVLMs general perception capability, including SEED-Bench [36], ScienceQA [49], GQA [28], Vizwiz [22]... (Appendix D.1)
  - [Mitigating Object Hallucination via Concentric Causal Attention](https://proceedings.neurips.cc/paper_files/paper/2024/file/a76ed4a8ef522c823d73925e7fff16d4-Paper-Conference.pdf)
- **BLINK** (measurements) — *measured_by*
  > The perception-focused benchmarks include RealWorldQA, CV-Bench and BLINK (Section 4)
  - [LATTE: Learning to Think with Vision Specialists](https://aclanthology.org/2025.emnlp-main.564.pdf)
- **Visual hallucination** (behaviors tasks) — *causes*
  > “Neglecting to fine-tune the projector can significantly impair the model’s visual perception capabilities. This deficiency may lead to visual hallucinations”
  - [REMEDY: Recipe Merging Dynamics in Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4065a881baab1744bfba208a4361bbb1-Paper-Conference.pdf)
- **MMStar** (measurements) — *measured_by*
  > We further evaluate our trained model over six benchmarks that examines LVLMs general perception capability, including SEED-Bench [36], ScienceQA [49], GQA [28], Vizwiz [22], MMBench [48] and MMStar [8]... (Appendix D.1)
  - [Mitigating Object Hallucination via Concentric Causal Attention](https://proceedings.neurips.cc/paper_files/paper/2024/file/a76ed4a8ef522c823d73925e7fff16d4-Paper-Conference.pdf)
- **Creativity** (constructs) — *causes*
  > the weak perception of LVLMs inhibits authentic strengths in reasoning and creation. (Abstract).
  - [ConvBench: A Multi-Turn Conversation Evaluation Benchmark with Hierarchical Ablation Capability for Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b69396afc07a9ca3428d194f4db84c02-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Abstract visual reasoning** (constructs) — *causes*
  > A single error in visual feature perception can impact reasoning since the correct pattern must apply to all puzzle shapes. (Section 6)
  - [MARVEL: Multidimensional Abstraction and Reasoning through Visual Evaluation and Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/529d8b3a23991e83db07f21727256374-Paper-Datasets_and_Benchmarks_Track.pdf)
- **SEED-Bench** (measurements) — *measured_by*
  > We further evaluate our trained model over six benchmarks that examines LVLMs general perception capability, including SEED-Bench [36]... (Appendix D.1)
  - [Mitigating Object Hallucination via Concentric Causal Attention](https://proceedings.neurips.cc/paper_files/paper/2024/file/a76ed4a8ef522c823d73925e7fff16d4-Paper-Conference.pdf)
- **ScienceQA** (measurements) — *measured_by*
  > We further evaluate our trained model over six benchmarks that examines LVLMs general perception capability, including SEED-Bench [36], ScienceQA [49]... (Appendix D.1)
  - [Mitigating Object Hallucination via Concentric Causal Attention](https://proceedings.neurips.cc/paper_files/paper/2024/file/a76ed4a8ef522c823d73925e7fff16d4-Paper-Conference.pdf)
- **MMBench** (measurements) — *measured_by*
  > We further evaluate our trained model over six benchmarks that examines LVLMs general perception capability, including SEED-Bench [36], ScienceQA [49], GQA [28], Vizwiz [22], MMBench [48]... (Appendix D.1)
  - [Mitigating Object Hallucination via Concentric Causal Attention](https://proceedings.neurips.cc/paper_files/paper/2024/file/a76ed4a8ef522c823d73925e7fff16d4-Paper-Conference.pdf)
- **Flickr30k** (measurements) — *measured_by*
  > “Visual perception is assessed through image captioning, where VLMs produce descriptions of the input images, or visual-question answering (VQA), where VLMs are asked to answer questions pertaining to the images. VHELM uses scenarios such as Flickr-30k [46], VQAv2 [12], VizWiz [14] and POPE [23] to assess this aspect.”
  - [VHELM: A Holistic Evaluation of Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe2fc7dc60b55ccd8886220b40fb1f74-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MMVP** (measurements) — *measured_by*
  > We conducted extensive evaluations of DEEM on RobustVQA and two widely recognized benchmarks, POPE and MMVP, for visual hallucination and perception respectively (Section 1).
  - [DEEM: Diffusion models serve as the eyes of large language models for image perception](https://proceedings.iclr.cc/paper_files/paper/2025/file/a8399aace3dfa6dfb8b635117748c561-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks) — *causes*
  > Recent work indicates that enhanced visual perception significantly reduces hallucinations and improves performance on resolution-sensitive tasks, such as optical character recognition and document analysis. (ABSTRACT)
  - [Eagle: Exploring The Design Space for Multimodal LLMs with Mixture of Encoders](https://proceedings.iclr.cc/paper_files/paper/2025/file/e78457d4a04b8565f1fe5077df13cddb-Paper-Conference.pdf)
- **Optical character recognition** (behaviors tasks) — *causes*
  > Recent work indicates that enhanced visual perception significantly reduces hallucinations and improves performance on resolution-sensitive tasks, such as optical character recognition and document analysis. (ABSTRACT)
  - [Eagle: Exploring The Design Space for Multimodal LLMs with Mixture of Encoders](https://proceedings.iclr.cc/paper_files/paper/2025/file/e78457d4a04b8565f1fe5077df13cddb-Paper-Conference.pdf)
- **Document understanding** (constructs) — *causes*
  > Recent work indicates that enhanced visual perception significantly reduces hallucinations and improves performance on resolution-sensitive tasks, such as optical character recognition and document analysis. (ABSTRACT)
  - [Eagle: Exploring The Design Space for Multimodal LLMs with Mixture of Encoders](https://proceedings.iclr.cc/paper_files/paper/2025/file/e78457d4a04b8565f1fe5077df13cddb-Paper-Conference.pdf)
- **MNIST** (measurements) — *measured_by*
  > The perception capability is tested on CIFAR-10/100 (Krizhevsky et al., 2009) and MNIST (Deng, 2012). (Section 4.1)
  - [Re-Imagining Multimodal Instruction Tuning: A Representation View](https://proceedings.iclr.cc/paper_files/paper/2025/file/dcf88cbc8d01ce7309b83d0ebaeb9d29-Paper-Conference.pdf)
- **RealWorldQA** (measurements) — *measured_by*
  > The perception-focused benchmarks include RealWorldQA, CV-Bench and BLINK (Section 4)
  - [LATTE: Learning to Think with Vision Specialists](https://aclanthology.org/2025.emnlp-main.564.pdf)

### → Visual perception
- **Multimodal alignment** (constructs) — *causes*
  > This suggests a misalignment between its visual and language abilities, hindering complex board recognition. (Section 4.1)
  - [Are Large Vision Language Models Good Game Players?](https://proceedings.iclr.cc/paper_files/paper/2025/file/27881a19f100fdbf57f0ba1c3d499b08-Paper-Conference.pdf)

### Associated with
- **Visual question answering** (behaviors tasks)
  > Visual perception is assessed through image captioning, where VLMs produce descriptions of the input images, or visual-question answering (VQA), where VLMs are asked to answer questions pertaining to the images. (Section 3.1)
  - [VHELM: A Holistic Evaluation of Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe2fc7dc60b55ccd8886220b40fb1f74-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Reasoning** (constructs)
  > these reasoning benchmarks require a foundational perception capability to accurately identify key elements. (Section A.3)
  - [Prism: A Framework for Decoupling and Assessing the Capabilities of VLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/cac9e747a1d480c78312226959566cef-Paper-Conference.pdf)
- **Object detection** (behaviors tasks)
  > SKETCHPAD can also use specialist vision models during the sketching process (e.g., draw bounding boxes with object detection models... to further enhance visual perception and reasoning.
  - [Visual Sketchpad: Sketching as a Visual Chain of Thought for Multimodal Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fb82011040977c7712409fbdb5456647-Paper-Conference.pdf)
- **Image captioning** (behaviors tasks)
  > Visual perception is assessed through image captioning, where VLMs produce descriptions of the input images, or visual-question answering (VQA), where VLMs are asked to answer questions pertaining to the images. (Section 3.1)
  - [VHELM: A Holistic Evaluation of Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe2fc7dc60b55ccd8886220b40fb1f74-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Object hallucination** (behaviors tasks)
  > With CCA, visual tokens can better interact with instruction tokens, thereby enhancing model’s perception capability and alleviating object hallucination. (Abstract)
  - [Mitigating Object Hallucination via Concentric Causal Attention](https://proceedings.neurips.cc/paper_files/paper/2024/file/a76ed4a8ef522c823d73925e7fff16d4-Paper-Conference.pdf)
- **Cognition** (constructs)
  > cognition capabilities (integrating perceptual attributes and knowledge to deduce more complex answers) (Section 1).
  - [Micro-Bench: A Microscopy Benchmark for Vision-Language Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/36b31e1bb8ecd4f4081686448e9eff2d-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Instance segmentation** (behaviors tasks)
  > "Visual Perception covers a wide range of visual tasks, such as open-ended/closed-set object detection, instance segmentation, pose estimation, etc."
  - [VisionLLM v2: An End-to-End Generalist Multimodal Large Language Model for Hundreds of Vision-Language Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/81a60d18e010b27b36cd465c6604b915-Paper-Conference.pdf)
- **Pose estimation** (behaviors tasks)
  > "Visual Perception covers a wide range of visual tasks, such as open-ended/closed-set object detection, instance segmentation, pose estimation, etc."
  - [VisionLLM v2: An End-to-End Generalist Multimodal Large Language Model for Hundreds of Vision-Language Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/81a60d18e010b27b36cd465c6604b915-Paper-Conference.pdf)
- **Visual recognition** (constructs)
  > Visual Perception (VP) extends beyond VR by interpreting and contextualizing these elements within the broader scene (Fu et al., 2024), essential for tasks requiring more than basic recognition. (Section 3)
  - [Visual Description Grounding Reduces Hallucinations and Boosts Reasoning in LVLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/a6805b5564bd8d813a81c4b5a97e5ca6-Paper-Conference.pdf)
- **Visual robustness** (constructs)
  > We explore the impact of diffusion feedback on the visual perception capabilities of LMMs from three dimensions: visual robustness, visual hallucinations, and basic visual perception (Section 3.2).
  - [DEEM: Diffusion models serve as the eyes of large language models for image perception](https://proceedings.iclr.cc/paper_files/paper/2025/file/a8399aace3dfa6dfb8b635117748c561-Paper-Conference.pdf)
- **Memorization** (constructs)
  > It raises a critical concern: “Does the model genuinely perceive and understand the input, or is it merely memorizing it?” (Section 1)
  - [Dynamic Multimodal Evaluation with Flexible Complexity by Vision-Language Bootstrapping](https://proceedings.iclr.cc/paper_files/paper/2025/file/36d9468ebdb76b9b229fbd343fff84d5-Paper-Conference.pdf)
- **Factual retention** (constructs)
  > For factual retention, we further divide this category into four finer sub-categories: (1) Visual Perception (OCR, Spatial Reasoning), (2) Audio Perception, (3) Full Video Understanding (i.e., tasks that require information across several parts of the video), and (4) Temporal Reasoning (i.e., tasks that require understanding the video with respect to time).
  - [VideoWebArena:  Evaluating Long Context Multimodal Agents with Video Understanding Web Tasks](https://proceedings.iclr.cc/paper_files/paper/2025/file/5b555804d495321df2e3208cc27f4fbc-Paper-Conference.pdf)
- **Analogical reasoning** (constructs)
  > Analogical reasoning consists of diverse atomic abilities; perceptual understanding, mapping abstract relationships between visual contents (Gentner, 1983), and transferring relational patterns to novel cases. (Section 1)
  - [VOILA: Evaluation of MLLMs For Perceptual Understanding and Analogical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/adf17e7346b6be4c2f2bb40de572e5bc-Paper-Conference.pdf)
- **Object recognition** (behaviors tasks)
  > Perception MLLMs retrieve information from multimodal inputs, using skills like object recognition and OCR. (Table 3).
  - [MLLM-Bench: Evaluating Multimodal LLMs with Per-sample Criteria](https://aclanthology.org/2025.naacl-long.256.pdf)
- **Decision-making** (constructs)
  > Decision-making is a complex task requiring various abilities. Several common ones are evaluated across all games: (1) Perception...
  - [Competing Large Language Models in Multi-Agent Gaming Environments](https://proceedings.iclr.cc/paper_files/paper/2025/file/a46adbe2f0ca0e16ef8857e188991ad7-Paper-Conference.pdf)
- **Synthetic data detection** (behaviors tasks)
  > the task of distinguishing between real and synthetic data effectively tests the perception, knowledge, and reasoning capabilities of LMMs. (ABSTRACT)
  - [LOKI: A Comprehensive Synthetic Data Detection Benchmark using Large Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/afd6374c7f2839cba22f537f15f4f760-Paper-Conference.pdf)
