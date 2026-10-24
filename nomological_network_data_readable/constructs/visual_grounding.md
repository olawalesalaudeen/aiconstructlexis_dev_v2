# Visual grounding
**Type:** Construct  
**Referenced in:** 77 papers  
**Also known as:** Multimodal grounding, Shape grounding, Region-text alignment, Grounding ability, Grounding capability, Visual localization, Grounded understanding, Region understanding, Referring expression comprehension, Referring ability  

## State of the Field

**Definition agreement:** Consensus. Most papers define visual grounding as linking language or other references to specific visual regions, objects, or locations in an image or similar visual input, often operationalized by localization outputs such as boxes, masks, or coordinates. A few papers emphasize grounded reasoning or responses rather than localization alone, but they still treat the construct as anchoring model behavior to identifiable visual evidence rather than a different phenomenon.

**Space of definitions.** Across papers, the prevailing usage treats visual grounding as a latent ability to connect language, such as phrases, referring expressions, instructions, or generated answers, to specific visual regions, objects, or locations. Most definitions describe aligning semantic descriptions with image regions or localizing the instance named by text, and domain-specific versions apply the same framing to medical images, GUIs, diagrams, embodied scenes, and 3D scenes. A smaller line of work frames it more behaviorally, as producing explicit spatial outputs such as bounding boxes, coordinates, masks, or highlighted patches, and another minority extends it from localization to whether reasoning and responses are anchored in observed visual evidence rather than text alone.

**Space of facets.** Papers organize the construct through nearby task names and subtypes rather than a single fixed taxonomy. Multimodal grounding is described as including phrase grounding and referring expression comprehension, and some work explicitly uses visual grounding as referring expression comprehension; elsewhere closely related labels include spatial understanding, visual localization, region-text alignment, grounded understanding, region understanding, shape grounding, grounding ability, and grounding capability. The same label therefore covers both general text-region association and narrower variants tied to visual prompts, diagram shapes, or reasoning steps grounded to regions.

**Space of measurement.** Operationalization is mostly benchmark-based: papers link visual grounding to 8 measurement instruments and 15 behavioral indicators, with RefCOCO used most often, followed by RefCOCOg, RefCOCO+, ScreenSpot, and MMStar, plus 3 other instruments. The linked instruments are benchmark datasets, and they usually test whether a model can localize the referred region, often by returning bounding boxes or coordinates; some papers also describe masks, highlighted image patches, or grounded object tuples with coordinates. Among linked behavioral indicators, hallucination, referring expression understanding, visual question answering, GUI automation, and instruction following appear most often, plus 10 others. This measurement space centers on localization and referential linking, while some definitions extend beyond localization to grounded reasoning or answer support.

**Links.** The most recurrent link is with hallucination: several papers claim a causal relationship from visual grounding to hallucination, and several others say hallucination is related to visually ungrounded responses. Beyond that, papers claim causal relationships from visual grounding to visual question answering and GUI automation, while other papers say visual grounding is related to reasoning and record causal arrows into visual grounding from instruction following and other reasoning or editing interventions. Other single-paper causal links target additional multimodal, medical, robotic, and interpretability outcomes, and no correlational links are reported.

## Sources

**[Grounding Multimodal Large Language Models to the World](https://proceedings.iclr.cc/paper_files/paper/2024/file/e112a4671e8779aa9f640a0e3f81bd26-Paper-Conference.pdf) (as "Multimodal grounding")**
> The latent ability of a model to associate textual descriptions, such as phrases or referring expressions, with their corresponding spatial regions in an image.

**[LoTa-Bench: Benchmarking Language-oriented Task Planners for Embodied Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/e91fb65c6324a984ea9ef39a5b84af04-Paper-Conference.pdf)**
> The ability to use scene information to connect language instructions with visible objects and their states in the environment.

**[Ferret: Refer and Ground Anything Anywhere at Any Granularity](https://proceedings.iclr.cc/paper_files/paper/2024/file/fd6613131889a4b656206c50a8bd7790-Paper-Conference.pdf) (as "Spatial understanding")**
> The latent ability to align visual regions with semantic descriptions, enabling both comprehension of spatial references and localization of described content.

**[Primitive Vision: Improving Diagram Understanding in MLLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25n/zhang25n.pdf) (as "Shape grounding")**
> The alignment of detected shapes in a diagram (e.g., circle, rectangle) with their semantic labels and spatial locations.

**[Contrastive Localized Language-Image Pre-Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25ah/chen25ah.pdf) (as "Region-text alignment")**
> The model's ability to match textual descriptions with specific image regions, demonstrated through contrastive learning on region-caption pairs.

**[VideoGUI: A Benchmark for GUI Automation from Instructional Videos](https://proceedings.neurips.cc/paper_files/paper/2024/file/804e757b7d7043c26701c3a313032101-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Grounding ability")**
> The capacity to produce precise spatial outputs for GUI elements, such as coordinates or bounding boxes, from screenshots.

**[Ferret-UI 2: Mastering Universal User Interface Understanding Across Platforms](https://proceedings.iclr.cc/paper_files/paper/2025/file/f7baab9bb701848e75f3cc119bdf57bc-Paper-Conference.pdf) (as "Grounding capability")**
> The latent ability to accurately associate textual references with specific visual locations or bounding boxes in a UI.

**[MLLMs Know Where to Look: Training-free Perception of Small Visual Details with Multimodal LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/aaa0ac4253da75faf9b0dc0dda062612-Paper-Conference.pdf) (as "Visual localization")**
> The latent ability to identify where in an image the relevant subject or evidence for a question is located.

**[CogCoM: A Visual Language Model with Chain-of-Manipulations Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/1dcee1cd6890ab7fcdf173ec10526da9-Paper-Conference.pdf) (as "Grounded understanding")**
> The ability to connect language expressions to specific image regions or objects with precise spatial localization.

**[CPCF: A Cross-Prompt Contrastive Framework for Referring Multimodal Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhu25h/zhu25h.pdf) (as "Region understanding")**
> The latent ability of a referring MLLM to accurately interpret and generate responses based on a specific visual region indicated by a prompt, distinguishing it from surrounding or similar regions.

**[A Large-Scale Human-Centric Benchmark for Referring Expression Comprehension in the LMM Era](https://proceedings.neurips.cc/paper_files/paper/2024/file/80f0cd0305f7741659304f5325f3bf6d-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Referring expression comprehension")**
> The latent ability to identify the specific visual instance described by a natural-language referring expression.

**[ControlMLLM: Training-Free Visual Prompt Learning for Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/4fd96b997454b5b02698595df70fccaf-Paper-Conference.pdf) (as "Referring ability")**
> The latent capability of a multimodal model to understand and ground its responses in specific spatial regions of an image indicated by visual prompts like boxes, masks, scribbles, or points.

## Relationships

### Visual grounding →
- **RefCOCO** (measurements) — *measured_by*
  > Visual Grounding. Visual grounding involves a set of tasks that establish referential links between textual mentions in a sentence and specific regions in an image. We evaluate our model on the typical datasets, including Visual7w [Zhu et al., 2016], RefCOCO [Liu et al., 2017], RefCOCO+, and RefCOCOg to ensure completeness. (Section 3)
  - [CogVLM: Visual Expert for Pretrained Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/dc06d4d2792265fb5454a6092bfd5c6a-Paper-Conference.pdf)
- **RefCOCOg** (measurements) — *measured_by*
  > For visual grounding, we use RefCOCO, RefCCO+ and RefCOCOg [62]. (Section 4.1)
  - [Lumen: Unleashing Versatile Vision-Centric Capabilities of Large Multimodal Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/946ecab300b0695fe24b53a92e632935-Paper-Conference.pdf)
- **RefCOCO+** (measurements) — *measured_by*
  > For visual grounding, we use RefCOCO, RefCCO+ and RefCOCOg [62]. (Section 4.1)
  - [Lumen: Unleashing Versatile Vision-Centric Capabilities of Large Multimodal Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/946ecab300b0695fe24b53a92e632935-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks) — *causes*
  > Several causes of hallucinations have been identified including biased training data (Liu et al., 2023), the inability of vision encoders to accurately ground images (Jain et al., 2024), misalignment among different modalities (Liu et al., 2024b), and insufficient context attention in LLM decoders (Huang et al., 2024; Liu et al., 2024d). (Section 2.2)
  - [Mitigating Hallucinations in Vision-Language Models through Image-Guided Head Suppression](https://aclanthology.org/2025.emnlp-main.631.pdf)
- **ScreenSpot** (measurements) — *measured_by*
  > First, ScreenSpot (Cheng et al., 2024) provides a GUI visual grounding benchmark containing 1,200 instructions with target element bounding boxes across mobile, desktop, and web environments. (Section 3.1)
  - [AgentTrek: Agent Trajectory Synthesis via Guiding Replay with Web Tutorials](https://proceedings.iclr.cc/paper_files/paper/2025/file/c681fb2bf1d785fbc766f3ea14758aab-Paper-Conference.pdf)
- **Multimodal understanding** (constructs) — *causes*
  > visual grounding is crucial for robust multimodal understanding. (Section 1)
  - [Cambrian-1: A Fully Open, Vision-Centric Exploration of Multimodal LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/9ee3a664ccfeabc0da16ac6f1f1cfe59-Paper-Conference.pdf)
- **MMVP** (measurements) — *measured_by*
  > the vision-disabled performance on benchmarks like MMVP is notably worse than random guessing, suggesting that strong visual grounding is particularly crucial. (Section 2.1)
  - [Cambrian-1: A Fully Open, Vision-Centric Exploration of Multimodal LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/9ee3a664ccfeabc0da16ac6f1f1cfe59-Paper-Conference.pdf)
- **Visual7W** (measurements) — *measured_by*
  > Visual Grounding. Visual grounding involves a set of tasks that establish referential links between textual mentions in a sentence and specific regions in an image. We evaluate our model on the typical datasets, including Visual7w [Zhu et al., 2016], RefCOCO [Liu et al., 2017], RefCOCO+, and RefCOCOg to ensure completeness. (Section 3)
  - [CogVLM: Visual Expert for Pretrained Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/dc06d4d2792265fb5454a6092bfd5c6a-Paper-Conference.pdf)
- **MMStar** (measurements) — *measured_by*
  > “MMStar [8] is a vision-indispensible benchmark, which requires better visual grounding in trained LVLMs.”
  - [Mitigating Object Hallucination via Concentric Causal Attention](https://proceedings.neurips.cc/paper_files/paper/2024/file/a76ed4a8ef522c823d73925e7fff16d4-Paper-Conference.pdf)
- **GUI automation** (behaviors tasks) — *causes*
  > In this paper, we advocate a human-like embodiment for GUI agents that perceive the environment entirely visually and directly perform pixel-level operations on the GUI. The key is visual grounding models that can accurately map diverse referring expressions of GUI elements to their coordinates on the GUI across different platforms. (ABSTRACT)
  - [Navigating the Digital World as Humans Do: Universal Visual Grounding for GUI Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/4ca0e369689dadb25a5345ba9755ad6f-Paper-Conference.pdf)

### → Visual grounding
- **Instruction following** (behaviors tasks) — *causes*
  > “These results emphasize the superiority of Text4Seg in following instructions, leading to enhanced visual grounding ability.”
  - [Text4Seg: Reimagining Image Segmentation as Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/04d8c25cbf0d5e1b70d64e672ac92637-Paper-Conference.pdf)
- **Multimodal reasoning** (constructs) — *causes*
  > RSVP employs multimodal chain-of-thought visual prompts to help MLLMs understand queries and infer targets, generating interpretable region proposals that enhance visual grounding. (Abstract)
  - [RSVP: Reasoning Segmentation via Visual Prompting and Multi-modal Chain-of-Thought](https://aclanthology.org/2025.acl-long.715.pdf)
- **Visual editing** (behaviors tasks) — *causes*
  > The Set-of-Mark study (Yang et al., 2023) extends this investigation by demonstrating that segmenting the original image can significantly enhance the visual grounding capabilities of GPT-4v models. (Section 2. Related Works)
  - [ReFocus: Visual Editing as a Chain of Thought for Structured Image Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/fu25d/fu25d.pdf)

### Associated with
- **Referring expression understanding** (behaviors tasks)
  > For tasks that focus on visual grounding ability like REC [42], and REG [37], the model uses more DINO features to perceive region-level visual information. (Section 4.1)
  - [MoME: Mixture of Multimodal Experts for Generalist Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/4a3a14b9536806a0522930007c5512f7-Paper-Conference.pdf)
- **Referring expression generation** (behaviors tasks)
  > In order to endow our model with consistent, interactive visual grounding capabilities, we collect a high-quality dataset covering 4 types of grounding data: ... (2) Referring Expression Generation (REG)... (Section 2.3)
  - [CogVLM: Visual Expert for Pretrained Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/dc06d4d2792265fb5454a6092bfd5c6a-Paper-Conference.pdf)
- **Object detection** (behaviors tasks)
  > This demonstrates that object detection and visual grounding can benefit from each other. (Section 4.3)
  - [Lumen: Unleashing Versatile Vision-Centric Capabilities of Large Multimodal Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/946ecab300b0695fe24b53a92e632935-Paper-Conference.pdf)
- **Visual recognition** (constructs)
  > A mainstream of Multi-modal Large Language Models (MLLMs) have two essential functions, i.e., visual recognition (e.g., grounding) and understanding (e.g., visual question answering). (Abstract)
  - [Octopus: A Multi-modal LLM with Parallel Recognition and Sequential Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/a3eadeebbc9eecd621086f6978865a85-Paper-Conference.pdf)
- **Visual question answering** (behaviors tasks)
  > Several recent works have explored ways to improve the visual localization capability of MLLMs for visual question answering, including chain-of-thought (Shao et al., 2024; Liu et al., 2024b), tool-using (Wu and Xie, 2023), and visual programming approaches (Surís et al., 2023; Gupta and Kembhavi, 2023). (Sec. 2)
  - [MLLMs Know Where to Look: Training-free Perception of Small Visual Details with Multimodal LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/aaa0ac4253da75faf9b0dc0dda062612-Paper-Conference.pdf)
- **Referring expression segmentation** (behaviors tasks)
  > flexible switching between referring expression segmentation, open-vocabulary segmentation, and other visual grounding tasks. (Section 1)
  - [Text4Seg: Reimagining Image Segmentation as Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/04d8c25cbf0d5e1b70d64e672ac92637-Paper-Conference.pdf)
- **Open-vocabulary semantic segmentation** (behaviors tasks)
  > flexible switching between referring expression segmentation, open-vocabulary segmentation, and other visual grounding tasks. (Section 1)
  - [Text4Seg: Reimagining Image Segmentation as Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/04d8c25cbf0d5e1b70d64e672ac92637-Paper-Conference.pdf)
- **Region captioning** (behaviors tasks)
  > Next, we study visual grounding, a.k.a. referring expression comprehension (REC), the counterpart task to visual referring that requires the model to identify the location of an object with language descriptions.
  - [ClawMachine: Learning to Fetch Visual Tokens for Referential Comprehension](https://proceedings.iclr.cc/paper_files/paper/2025/file/b1abd42eb5aace7f0ad9ba9cfb029f54-Paper-Conference.pdf)
- **Object localization** (behaviors tasks)
  > a grounding module (Gaze) provides precise visual focus by predicting bounding box annotations. (Section 1)
  - [Taking Notes Brings Focus? Towards Multi-Turn Multimodal Dialogue Learning](https://aclanthology.org/2025.emnlp-main.1690.pdf)
- **Visual reasoning** (constructs)
  > it’s essential for the LLM to possess high-level, in-depth vision reasoning capabilities, building upon the foundational low-level pixel grounding.
  - [Vitron: A Unified Pixel-level Vision LLM for Understanding, Generating, Segmenting, Editing](https://proceedings.neurips.cc/paper_files/paper/2024/file/68bad5506f0f9eea7ae75f01ae00d5e2-Paper-Conference.pdf)
- **Robotic manipulation** (behaviors tasks)
  > The strong task instruction understanding and visual grounding capabilities of MLLMs [5, 4] have exhibited great promise for language-instructed multitask robotic manipulation [7, 8, 9].
  - [DeeR-VLA: Dynamic Inference of Multimodal Large Language Models for Efficient Robot Execution](https://proceedings.neurips.cc/paper_files/paper/2024/file/67b0e7c7c2a5780aeefe3b79caac106e-Paper-Conference.pdf)
- **Chain-of-thought reasoning** (constructs)
  > it is crucial to ground the reasoning process to the visual information and VoCoT is the most suitable format (Section 4.3).
  - [VoCoT: Unleashing Visually Grounded Multi-Step Reasoning in Large Multi-Modal Models](https://aclanthology.org/2025.naacl-long.192.pdf)
