# Referring expression understanding
**Type:** Behavior  
**Referenced in:** 32 papers  
**Also known as:** Referring expression comprehension, Multi-object referring segmentation, Multi-target segmentation, Video grounding, Object grounding, Spatio-temporal object grounding, Phrase grounding, Referring expression grounding, Referential expression grounding  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is an image grounding task in which a natural-language referring expression is used to identify and localize the matching object or region. Most formulations ask for a bounding box, described as predicting the box for an object given its text description or outputting box coordinates; some instead describe generating a segmentation mask and deriving a box, or more generally linking the expression to the corresponding object or region. When scoring is specified, papers report accuracy or Acc@0.5, and one definition says a prediction is correct when the IoU between predicted and ground-truth bounding boxes exceeds 0.5.

**Variants.** Most papers stay with image versions under names such as referring expression comprehension, reference expression understanding, referring expression grounding, and referential expression grounding. A smaller line broadens the setting to phrase grounding, where one or more phrases, or even all noun phrases in a sentence, are associated with image boxes. Other variants recast it as segmentation, including multi-object referring segmentation and multi-target referring expression segmentation, where models generate distinct instance masks for several referred targets from one instruction. Some papers extend it to 3D or video settings, including object grounding in 3D scenes, video grounding over scene videos, and spatio-temporal object grounding that outputs tuples such as frame and spatial coordinates; one paper also relates it to object detection, while distinguishing object detection as using predefined categories rather than natural-language expressions.

**Space of elicitation and scores.** Papers link it to 8 measurement instruments. The recurring linked instruments are led by RefCOCO, followed by RefCOCOg, RefCOCO+, Flickr30k Entities, and HellaSwag, though HellaSwag is reported as a correlate rather than as a measured_by benchmark. Most actual measured_by use comes from dataset benchmarks, especially the RefCOCO family, with additional phrase-grounding, driving, and video-grounding datasets, and papers report scores such as accuracy or Acc@0.5.

**What it is taken as evidence of.** Papers link it to 5 constructs and do not converge on a single construct it reflects. The most common construct link is visual grounding: some papers treat visual grounding as measured by referring expression comprehension, while another reports it as related to visual grounding ability. Beyond that, one paper claims a causal relationship from referring expression understanding to 3D understanding, another uses it to measure localization ability, and other work relates it to semantic reasoning and spatial reasoning.

## Sources

**[Text4Seg: Reimagining Image Segmentation as Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/04d8c25cbf0d5e1b70d64e672ac92637-Paper-Conference.pdf) (as "Referring expression comprehension")**
> Identifying the referred object by generating a mask and deriving a bounding box that matches the language query.

**[ClawMachine: Learning to Fetch Visual Tokens for Referential Comprehension](https://proceedings.iclr.cc/paper_files/paper/2025/file/b1abd42eb5aace7f0ad9ba9cfb029f54-Paper-Conference.pdf) (as "Multi-object referring segmentation")**
> The observable task of generating instance segmentation masks for multiple referred objects in an image.

**[MMR: A Large-scale Benchmark Dataset for Multi-target and Multi-granularity Reasoning Segmentation](https://proceedings.iclr.cc/paper_files/paper/2025/file/a8661ab3440964c27794607f0ea73624-Paper-Conference.pdf) (as "Multi-target segmentation")**
> The observable behavior of simultaneously generating distinct segmentation masks for multiple target entities within a single image based on one instruction.

**[Chat-Scene: Bridging 3D Scene and Large Language Models with Object Identifiers](https://proceedings.neurips.cc/paper_files/paper/2024/file/cebbd24f1e50bcb63d015611fe0fe767-Paper-Conference.pdf) (as "Video grounding")**
> The task of localizing a target object described by text within a video sequence of a 3D scene.

**[Multi-modal Situated Reasoning in 3D Scenes](https://proceedings.neurips.cc/paper_files/paper/2024/file/feaeec8ec2d3cb131fe18517ff14ec1f-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Object grounding")**
> The task of localizing a specific 3D object in a scene based on a natural language description.

**[TUMTraf VideoQA: Dataset and Benchmark for Unified Spatio-Temporal Video Understanding in Traffic Scenes](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhou25g/zhou25g.pdf) (as "Spatio-temporal object grounding")**
> Predicting the precise spatio-temporal coordinates (frame, x, y) of a referred object in a video as a tuple output.

**[Contrastive Localized Language-Image Pre-Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25ah/chen25ah.pdf) (as "Phrase grounding")**
> The task of associating specific phrases or words in a text description with their corresponding regions or objects in an image.

**[Follow the Flow: Fine-grained Flowchart Attribution with Neurosymbolic Agents](https://aclanthology.org/2025.emnlp-main.1144.pdf) (as "Referring expression grounding")**
> The task of linking a textual description (referring expression) to the corresponding object or region in an image.

**[Mitigating Hallucination in Large Multi-Modal Models via Robust Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/fed9263d7f1086e735904ff690527a53-Paper-Conference.pdf) (as "Referential expression grounding")**
> Locating the object in an image that corresponds to a given textual description.

## Relationships

### Referring expression understanding →
- **RefCOCO** (measurements) — *measured_by*
  > Initially, we demonstrate our models’ effectiveness in learning neural modules on two established benchmarks: GQA (Hudson & Manning, 2019), focusing on compositional visual question answering, and RefCOCO (Kazemzadeh et al., 2014), which assesses referring expression comprehension. (Section 4)
  - [GENOME: Generative Neuro-Symbolic Visual Reasoning by Growing and Reusing Modules](https://proceedings.iclr.cc/paper_files/paper/2024/file/088d99765bc121c6df215da7d45bc4e9-Paper-Conference.pdf)
- **RefCOCOg** (measurements) — *measured_by*
  > RefCOCOg [67] Refer grounding on natural images. (Table A2)
  - [Accelerating Pre-training of Multimodal LLMs via Chain-of-Sight](https://proceedings.neurips.cc/paper_files/paper/2024/file/8a54a80ffc2834689ffdd0920202018e-Paper-Conference.pdf)
- **RefCOCO+** (measurements) — *measured_by*
  > RefCOCO+ [103] Refer grounding on natural images. (Table A2)
  - [Accelerating Pre-training of Multimodal LLMs via Chain-of-Sight](https://proceedings.neurips.cc/paper_files/paper/2024/file/8a54a80ffc2834689ffdd0920202018e-Paper-Conference.pdf)
- **Flickr30k Entities** (measurements) — *measured_by*
  > We evaluate phrase grounding task on Flickr30k Entities (Plummer et al., 2015) val and test splits. (Sec. 4.1.1).
  - [Grounding Multimodal Large Language Models to the World](https://proceedings.iclr.cc/paper_files/paper/2024/file/e112a4671e8779aa9f640a0e3f81bd26-Paper-Conference.pdf)
- **Talk2Car** (measurements) — *measured_by*
  > We also use the driving, non human-centric, Talk2Car (Deruyttere et al., 2019) REC dataset.
  - [LLM-wrapper: Black-Box Semantic-Aware Adaptation of Vision-Language Models for Referring Expression Comprehension](https://proceedings.iclr.cc/paper_files/paper/2025/file/fb8f2d4e90018c0fae060dff09a91ce3-Paper-Conference.pdf)
- **RefCOCO/g/+** (measurements) — *measured_by*
  > In Table 4, we compare CUBE-LLM to the state-of-the-arts in Referring Expression Comprehension (REC) benchmark on refCOCO/+/g (Yu et al., 2016) dataset. (Section 4.4)
  - [Language-Image Models with 3D Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/5a829e299ebc1c1615ddb09e98fb6ce8-Paper-Conference.pdf)
- **Scene understanding** (constructs) — *causes*
  > Object referencing and grounding are essential for advanced scene understanding.
  - [Chat-Scene: Bridging 3D Scene and Large Language Models with Object Identifiers](https://proceedings.neurips.cc/paper_files/paper/2024/file/cebbd24f1e50bcb63d015611fe0fe767-Paper-Conference.pdf)

### Associated with
- **Visual grounding** (constructs)
  > For tasks that focus on visual grounding ability like REC [42], and REG [37], the model uses more DINO features to perceive region-level visual information. (Section 4.1)
  - [MoME: Mixture of Multimodal Experts for Generalist Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/4a3a14b9536806a0522930007c5512f7-Paper-Conference.pdf)
- **Spatial reasoning** (constructs)
  > This work focuses on the challenging open-vocabulary detection task of Referring Expression Comprehension (REC) (Mao et al., 2016), which involves localizing an object in an image based on a complex textual query, requiring both spatial and semantic reasoning.
  - [LLM-wrapper: Black-Box Semantic-Aware Adaptation of Vision-Language Models for Referring Expression Comprehension](https://proceedings.iclr.cc/paper_files/paper/2025/file/fb8f2d4e90018c0fae060dff09a91ce3-Paper-Conference.pdf)
- **Semantic reasoning** (constructs)
  > This work focuses on the challenging open-vocabulary detection task of Referring Expression Comprehension (REC) (Mao et al., 2016), which involves localizing an object in an image based on a complex textual query, requiring both spatial and semantic reasoning.
  - [LLM-wrapper: Black-Box Semantic-Aware Adaptation of Vision-Language Models for Referring Expression Comprehension](https://proceedings.iclr.cc/paper_files/paper/2025/file/fb8f2d4e90018c0fae060dff09a91ce3-Paper-Conference.pdf)
- **Object detection** (behaviors tasks)
  > It also differs from object detection (Girshick, 2015), which uses predefined categories instead of natural language expressions.
  - [LLM-wrapper: Black-Box Semantic-Aware Adaptation of Vision-Language Models for Referring Expression Comprehension](https://proceedings.iclr.cc/paper_files/paper/2025/file/fb8f2d4e90018c0fae060dff09a91ce3-Paper-Conference.pdf)
- **Localization ability** (constructs)
  > The REC task serves as a critical benchmark to evaluate the localization capabilities of these models. (Section 2)
  - [A Large-Scale Human-Centric Benchmark for Referring Expression Comprehension in the LMM Era](https://proceedings.neurips.cc/paper_files/paper/2024/file/80f0cd0305f7741659304f5325f3bf6d-Paper-Datasets_and_Benchmarks_Track.pdf)
- **HellaSwag** (measurements)
  > “Further analysis shows a Pearson correlation of 0.88 between the LLM’s original performance on reasoning benchmarks, measured by the HellaSwag score (Zellers et al., 2019), and REC performance”
  - [LLM-wrapper: Black-Box Semantic-Aware Adaptation of Vision-Language Models for Referring Expression Comprehension](https://proceedings.iclr.cc/paper_files/paper/2025/file/fb8f2d4e90018c0fae060dff09a91ce3-Paper-Conference.pdf)
