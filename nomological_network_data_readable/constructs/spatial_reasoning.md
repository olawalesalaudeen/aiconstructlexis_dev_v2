# Spatial reasoning
**Type:** Construct  
**Referenced in:** 98 papers  
**Also known as:** Visual-spatial reasoning, Spatial cognition, Spatial localization ability, Spatial intelligence, Directional reasoning, Spatiality, Spatial relation inference  

## State of the Field

**Definition agreement:** Consensus. Most papers define spatial reasoning as the ability to understand, infer, represent, or reason about spatial relationships, positions, layouts, and properties of objects or scenes, often in 2D or 3D and sometimes across visual and language inputs. A few papers emphasize particular settings such as navigation, route following, flowcharts, temporal scene integration, or acting in space, but these are specific applications or elaborations of the same core property rather than different phenomena.

**Space of definitions.** Across the papers, the prevailing usage treats the term as a broad ability to understand, infer, and navigate spatial relationships, positions, and layouts in 2D or 3D settings, often from visual inputs, language prompts, or both. Many definitions emphasize directions, relative position, object size or other attributes, topological structure, and navigation, and some snippets describe it through questions like where a model is, what it will see, or whether one object is to the left of another. Smaller lines of work broaden the construct into spatial cognition or spatial intelligence, adding perception, mental representation, interaction, and action in space and time, while others narrow it to spatial localization, directional reasoning, a yes or no spatial relation inference task, or an a priori Euclidean spatiality. The main variation is therefore between a broad latent ability and narrower subskills or tasks, and between reasoning alone versus broader perception, representation, and action.

**Space of facets.** Papers systematize the area in several ways. One line divides the broader notion into large-scale and small-scale spatial cognition, while another separates scale-based from direction-based questions and names directional reasoning as a distinct facet. Other work uses neighboring labels for overlapping phenomena or casts the construct as a specific inference task. Spatial reasoning is also positioned within larger umbrellas, as a type of visual reasoning and as a subset of physical world understanding, and one paper emphasizes frame of reference ambiguity in spatial language.

**Space of measurement.** Operationalization is benchmark-based, with 11 linked instruments and 9 linked behavioral indicators. The most frequently linked instruments listed are VSR, BLINK, Bongard Problems, GQA, and Maze. In practice, papers use benchmark formats that probe spatial relations and layouts through spatial VQA, relative depth, jigsaw or correspondence style items, scene question answering, and dynamic layout or navigation tasks, so the measurements usually match the broad definitions while sometimes narrowing the construct to particular formats such as pathfinding, game play, or single spatial-relation judgments.

**Links.** Several papers claim a causal relationship from spatial reasoning to generalization and to downstream robotics tasks. Other papers claim causal relationships from depth estimation, analogical reasoning, and fine-grained perception to spatial reasoning. Beyond causality, papers relate it to visual reasoning and to several other broader constructs and task settings. No correlational link is reported.

## Sources

**[DreamLLM: Synergistic Multimodal Comprehension and Creation](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a7a22152cd21f0ca3c0f8139bb32905-Paper-Conference.pdf)**
> The ability to understand and navigate within 2D or 3D environments and comprehend spatial relationships.

**[Enhancing LLM Reasoning via Vision-Augmented Prompting](https://proceedings.neurips.cc/paper_files/paper/2024/file/328c922d068dd4ccb23cec5c64e6c7fc-Paper-Conference.pdf) (as "Visual-spatial reasoning")**
> The ability to interpret, process, and reason about information presented through visual and spatial clues, rather than purely textual descriptions.

**[Does Spatial Cognition Emerge in Frontier Models?](https://proceedings.iclr.cc/paper_files/paper/2025/file/fb92196c6d2afe416528be19ba9963bc-Paper-Conference.pdf) (as "Spatial cognition")**
> The ability to perceive, interpret, represent, and interact with objects and environments, including building mental representations to support navigation and manipulation.

**[ThinkBot: Embodied Instruction Following with Thought Chain Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/ffa8551239448e07ced48311bf88f6f3-Paper-Conference.pdf) (as "Spatial localization ability")**
> The latent capacity of a model to determine the physical position of objects in an environment, particularly when reasoning from linguistic descriptions.

**[Where Am I and What Will I See: An Auto-Regressive Model for Spatial Localization and View Prediction](https://proceedings.iclr.cc/paper_files/paper/2025/file/786e39208b37bfcb0ad89413f155df99-Paper-Conference.pdf) (as "Spatial intelligence")**
> The ability of a machine to perceive, reason, and act in three dimensions within space and time, encompassing the understanding of spatial relationships between objects and scenes.

**[Core Knowledge Deficits in Multi-Modal Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25p/li25p.pdf) (as "Spatiality")**
> The a priori understanding of spatial properties and Euclidean structure in the world.

**[Hypo3D: Exploring Hypothetical Reasoning in 3D](https://raw.githubusercontent.com/mlresearch/v267/main/assets/mao25b/mao25b.pdf) (as "Directional reasoning")**
> The ability to understand and reason about directional terms and spatial orientation within a consistent reference frame.

**[Do Vision-Language Models Represent Space and How? Evaluating Spatial Frame of Reference under Ambiguities](https://proceedings.iclr.cc/paper_files/paper/2025/file/af2d9fb5bcee19ef2dfa70d843520c97-Paper-Conference.pdf) (as "Spatial relation inference")**
> The task of determining whether a stated spatial relation (e.g., 'to the left of', 'in front of') holds true for a pair of objects depicted in an image, typically by answering a yes/no question.

## Relationships

### Spatial reasoning →
- **VSR** (measurements) — *measured_by*
  > Similarly, on spatial reasoning benchmarks (SPEC, Whatsup, VSR), VisMin-CLIP showed an average 7.79% improvement over NegCLIP and 5.21% over CounterCurate-CLIP. (Section 6.1)
  - [VisMin: Visual Minimal-Change Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/c3070c3388552a08a3326f0d28dc2af9-Paper-Conference.pdf)
- **Generalization** (constructs) — *causes*
  > state-of-the-art VLMs have exhibited strong spatial reasoning and temporal understanding capabilities across various vision tasks (Nag et al., 2022; Chen et al., 2024; Hong et al., 2023; Gao et al., 2024), allowing them to generalize to novel scenarios. (Section 1)
  - [Vision Language Models are In-Context Value Learners](https://proceedings.iclr.cc/paper_files/paper/2025/file/54854cf15a24fff9f5134a8641136fe4-Paper-Conference.pdf)
- **Minecraft** (measurements) — *measured_by*
  > Minecraft offers a unique challenge in 3D spatial reasoning and generalization within a procedurally generated world.
  - [SmartPlay : A Benchmark for LLMs as Intelligent Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/063d1fadbde557466bf5bcffe814a64e-Paper-Conference.pdf)
- **Motion planning** (behaviors tasks) — *causes*
  > Extensive experiments demonstrate that our spatial reasoning-imbued VLM performs well on various forms of spatial VQA and can extend to help in various downstream robotics tasks such as pick and stack and trajectory planning. (Abstract)
  - [SpatialPIN: Enhancing Spatial Reasoning Capabilities of Vision-Language Models through Prompting and Interacting 3D Priors](https://proceedings.neurips.cc/paper_files/paper/2024/file/7f2257d2b291b8d7e712c70b67e09412-Paper-Conference.pdf)
- **bAbI** (measurements) — *measured_by*
  > The tasks in bAbI vary in the number of facts, question complexity, and the reasoning skills they assess, including spatial and temporal reasoning, deduction, and coreference resolution.
  - [BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf)
- **BLINK** (measurements) — *measured_by*
  > GPT-4o with SKETCHPAD sets a new state of the art on all tasks, including... BLINK spatial reasoning (83.9%)
  - [Visual Sketchpad: Sketching as a Visual Chain of Thought for Multimodal Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fb82011040977c7712409fbdb5456647-Paper-Conference.pdf)
- **RefCOCO** (measurements) — *measured_by*
  > Task Name: RefCOCO, Domain(s): Spatial (Table 1)
  - [ReMI: A Dataset for Reasoning with Multiple Images](https://proceedings.neurips.cc/paper_files/paper/2024/file/6ea56c0baacac9f7764257a43a93c90a-Paper-Datasets_and_Benchmarks_Track.pdf)
- **GQA** (measurements) — *measured_by*
  > GQA Hudson & Manning (2019) validates spatial reasoning
  - [EMMA: Empowering Multi-modal Mamba with Structural and Hierarchical Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/3760dbb5835bf0b771c3f83cb27ef2c0-Paper-Conference.pdf)
- **Maze** (measurements) — *measured_by*
  > We validate MVoT’s effectiveness through controlled experiments across three dynamic spatial reasoning tasks. MAZE (Ivanitskiy et al., 2023) and MINIBEHAVIOR (Jin et al., 2023) focus on interactions with spatial layouts. (1. Introduction)
  - [Imagine While Reasoning in Space: Multimodal Visualization-of-Thought](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25cz/li25cz.pdf)
- **Bongard Problems** (measurements) — *measured_by*
  > “we observe that humans are substantially better at solving BPs that have spatial reasoning components.”
  - [Bongard in Wonderland: Visual Puzzles that Still Make AI Go Mad?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wust25a/wust25a.pdf)
- **TTT-Bench** (measurements) — *measured_by*
  > In this work, we introduce TTT-Bench, a new benchmark that is designed to evaluate basic strategic, spatial, and logical reasoning abilities in LRMs through a suite of four two-player Tic-Tac-Toe-style games that humans can effortlessly solve from a young age. (Abstract)
  - [TTT-Bench: A Benchmark for Evaluating Reasoning Ability with Simple and Novel Tic-Tac-Toe-style Games](https://aclanthology.org/2025.emnlp-main.140.pdf)
- **SPaRC** (measurements) — *measured_by*
  > Empirically, SPaRC reveals critical limitations in current reasoning models regarding spatial reasoning, rule-based reasoning, multi-step planning, and constraint satisfaction. (Section 5)
  - [SPaRC: A Spatial Pathfinding Reasoning Challenge](https://aclanthology.org/2025.emnlp-main.526.pdf)

### → Spatial reasoning
- **Depth estimation** (behaviors tasks) — *causes*
  > To determine if there are cookies stacked on top of other cookies in the image... the model first produces an intermediate depth estimate. By analyzing the depth estimate... the model is able to correctly answer that the cookies are indeed stacked.
  - [Visual Sketchpad: Sketching as a Visual Chain of Thought for Multimodal Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fb82011040977c7712409fbdb5456647-Paper-Conference.pdf)
- **Analogical reasoning** (constructs) — *causes*
  > By leveraging text-based analogical reasoning, the agent enhances its global scene understanding and spatial reasoning, leading to more accurate action decisions.
  - [Vision-and-Language Navigation with Analogical Textual Descriptions in LLMs](https://aclanthology.org/2025.emnlp-main.759.pdf)

### Associated with
- **Visual reasoning** (constructs)
  > Our task suite encompasses a comprehensive set of perceptual and cognitive tasks, including summarization, perception (recall, tracking), visual reasoning (spatial, temporal, predictive, causal, counterfactual), and navigation (room-to-room, object retrieval) tasks. (Section 2.1)
  - [HourVideo: 1-Hour Video-Language Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/5f2809607f692d79a01c05c43d702883-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Webpage understanding** (constructs)
  > webpage understanding and webpage-to-code generation, which requires a unique combination of capabilities such as optical character recognition (OCR), spatial reasoning, and long-text generation, among others. (Section 1)
  - [Web2Code: A Large-scale Webpage-to-Code Dataset and Evaluation Framework for Multimodal LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/cb66be286795d71f89367d596bf78ea7-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Referring expression understanding** (behaviors tasks)
  > This work focuses on the challenging open-vocabulary detection task of Referring Expression Comprehension (REC) (Mao et al., 2016), which involves localizing an object in an image based on a complex textual query, requiring both spatial and semantic reasoning.
  - [LLM-wrapper: Black-Box Semantic-Aware Adaptation of Vision-Language Models for Referring Expression Comprehension](https://proceedings.iclr.cc/paper_files/paper/2025/file/fb8f2d4e90018c0fae060dff09a91ce3-Paper-Conference.pdf)
- **Large-scale spatial cognition** (constructs)
  > Spatial cognition is broadly divided into two categories: large-scale and small-scale (Hegarty et al., 2006; Jansen, 2009; Meneghetti et al., 2022; Newcombe, 2024). (Section 2)
  - [Does Spatial Cognition Emerge in Frontier Models?](https://proceedings.iclr.cc/paper_files/paper/2025/file/fb92196c6d2afe416528be19ba9963bc-Paper-Conference.pdf)
- **Small-scale spatial cognition** (constructs)
  > Spatial cognition is broadly divided into two categories: large-scale and small-scale (Hegarty et al., 2006; Jansen, 2009; Meneghetti et al., 2022; Newcombe, 2024). (Section 2)
  - [Does Spatial Cognition Emerge in Frontier Models?](https://proceedings.iclr.cc/paper_files/paper/2025/file/fb92196c6d2afe416528be19ba9963bc-Paper-Conference.pdf)
- **Physical world understanding** (constructs)
  > However, since spatial reasoning represents only a subset of physical world understanding, our work aims to provide a more comprehensive evaluation and improvement of VLMs’ physical world understanding abilities. (Section 2)
  - [PhysBench: Benchmarking and Enhancing Vision-Language Models for Physical World Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/f38cb4cf9a5eaa92b3cfa481832719c6-Paper-Conference.pdf)
- **Situated question answering** (behaviors tasks)
  > Situated QA is designed with different types of questions targeting various levels of spatial reasoning ability for embodied agents.
  - [SPARTUN3D: Situated Spatial Understanding of 3D World in Large Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/b633e7052970b8f5aa1a69164d99e9e8-Paper-Conference.pdf)
- **Geometric reasoning** (constructs)
  > "Geometric ability is a significant challenge for large language models (LLMs) due to the need for advanced spatial comprehension and abstract thinking."
  - [Do Large Language Models Truly Understand Geometric Structures?](https://proceedings.iclr.cc/paper_files/paper/2025/file/8de035590685bf7389da6a769fbcecce-Paper-Conference.pdf)
- **Information extraction** (behaviors tasks)
  > Documents exhibit diverse formats and structures, requiring spatial reasoning to correctly associate text with their semantic roles. (Section 1)
  - [Information Extraction from Visually Rich Documents using LLM-based Organization of Documents into Independent Textual Segments](https://aclanthology.org/2025.acl-long.844.pdf)
- **3D question answering** (behaviors tasks)
  > "all of these methods require computationally intensive 3D-language alignment using point cloud data for spatial reasoning"
  - [3D Question Answering via only 2D Vision-Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25ef/wang25ef.pdf)
- **Object localization** (behaviors tasks)
  > spatial object localization (2,361 samples), which helps models learn spatial reasoning (Section 3)
  - [SilVar: Speech-Driven Multimodal Model for Reasoning Visual Question Answering and Object Localization](https://aclanthology.org/2025.emnlp-main.589.pdf)
- **Robotic manipulation** (behaviors tasks)
  > Pick and stack is a classic robotics task. ... This task demands advanced spatial reasoning
  - [SpatialPIN: Enhancing Spatial Reasoning Capabilities of Vision-Language Models through Prompting and Interacting 3D Priors](https://proceedings.neurips.cc/paper_files/paper/2024/file/7f2257d2b291b8d7e712c70b67e09412-Paper-Conference.pdf)
- **SQA3D** (measurements)
  > It encompasses a diverse range of question types, including object identification, spatial relationships, scene-level understanding, and general reasoning. (Section 5)
  - [3D Question Answering via only 2D Vision-Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25ef/wang25ef.pdf)
