# Object localization
**Type:** Behavior  
**Referenced in:** 21 papers  
**Also known as:** Building localization, Defect localization, Instance localization, Text localization, Positioning, Bounding box prediction, Element identification, GUI element localization  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats this as locating an object or set of objects in an image, and sometimes a video frame, by returning spatial coordinates, most often bounding boxes. Several definitions make the box output explicit, with one specifying a 4-tuple of upper-left and lower-right coordinates, while another asks for approximate coordinates under a defined coordinate system. Smaller lines of work broaden the output to masks or to a textual statement of a defect’s location, and some formulations narrow the task to a single object or a referred region described in language.

**Variants.** Papers study several specialized forms of this behavior, including bounding box prediction for a region named in a sentence, instance localization from a reference image, building localization in earth-observation images, text localization in interfaces, and defect localization in anomaly images. Other formulations extend the same locating behavior to GUI element selection and to determining object position or arrangement in an image. One related paper contrasts it with reasoning segmentation, noting that the latter only allows single object localization.

**Space of elicitation and scores.** Papers link this behavior to 5 measurement instruments: Human evaluation, MM-ID, RefCOCO, RefCOCO+, and RefCOCOg. The dominant pattern is use of specific named evaluations for localization, while one paper also uses human evaluation. MM-ID is described as covering a "location" level of competency, and other papers measure object localization with RefCOCO, RefCOCO+, and RefCOCOg.

**What it is taken as evidence of.** Rather than pointing to one recurring construct, papers relate this behavior to 2 constructs: Spatial reasoning and Visual grounding. The spatial-reasoning link is phrased as spatial object localization helping models learn spatial reasoning, while the visual-grounding link appears in work where a grounding module predicts bounding box annotations to provide precise visual focus. This leaves the construct interpretation mixed rather than uniform across papers.

## Sources

**[GENOME: Generative Neuro-Symbolic Visual Reasoning by Growing and Reusing Modules](https://proceedings.iclr.cc/paper_files/paper/2024/file/088d99765bc121c6df215da7d45bc4e9-Paper-Conference.pdf)**
> The task of identifying the position of one or more objects within an image, typically by outputting bounding boxes.

**[TEOChat: A Large Vision-Language Assistant for Temporal Earth Observation Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/ac3af725ae398b6184faae0828bdbd6c-Paper-Conference.pdf) (as "Building localization")**
> Predicting bounding boxes for buildings visible in an earth-observation image region.

**[Feast Your Eyes:  Mixture-of-Resolution Adaptation for Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d2781f7df8825bbde6cef55adfbcd283-Paper-Conference.pdf) (as "Bounding box prediction")**
> Producing coordinate boxes that localize a referred region in an image.

**[MMAD: A Comprehensive Benchmark for Multimodal Large Language Models in Industrial Anomaly Detection](https://proceedings.iclr.cc/paper_files/paper/2025/file/d91ffbe9c126765755ff52d36b715683-Paper-Conference.pdf) (as "Defect localization")**
> The observable task of identifying the spatial position of a defect within an image, typically expressed through textual description.

**[IDA-VLM: Towards Movie Understanding via ID-Aware Large Vision-Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/82dcb6da1b408d59d15f68afdebf1489-Paper-Conference.pdf) (as "Instance localization")**
> The observable task of identifying and providing the bounding box coordinates for a specific instance within a test image, based on a provided reference image of that instance.

**[Ferret-UI 2: Mastering Universal User Interface Understanding Across Platforms](https://proceedings.iclr.cc/paper_files/paper/2025/file/f7baab9bb701848e75f3cc119bdf57bc-Paper-Conference.pdf) (as "Text localization")**
> The task of finding the location (i.e., bounding box) of a piece of text specified in a query.

**[Multimodal Language Models See Better When They Look Shallower](https://aclanthology.org/2025.emnlp-main.339.pdf) (as "Positioning")**
> The observable task of determining the spatial location or arrangement of objects in an image.

**[Grounding Multimodal Large Language Model in GUI World](https://proceedings.iclr.cc/paper_files/paper/2025/file/31fc85f7461ce71eadf27fb7281973bd-Paper-Conference.pdf) (as "Element identification")**
> The action of correctly selecting or pointing to a specific GUI element based on a textual description or query.

## Relationships

### Object localization →
- **RefCOCO** (measurements) — *measured_by*
  > Benchmarks that involve spatial understanding and fine-grained features include object localization (RefCOCO, OCID-Ref; Kazemzadeh et al. 2014; Wang et al. 2021)... (Section 5)
  - [Locality Alignment Improves Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ce6326ac4794bb04d5eb16f597446baf-Paper-Conference.pdf)
- **MM-ID** (measurements) — *measured_by*
  > "MM-ID dissects LVLMs’ competency across four progressively complex levels: matching, location, question-answering, and captioning."
  - [IDA-VLM: Towards Movie Understanding via ID-Aware Large Vision-Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/82dcb6da1b408d59d15f68afdebf1489-Paper-Conference.pdf)

### Associated with
- **Reasoning segmentation** (behaviors tasks)
  > RS has reasoning ability, but only allows single object localization. (Figure 2)
  - [Instruction-Guided Visual Masking](https://proceedings.neurips.cc/paper_files/paper/2024/file/e4165c96702bac5f4962b70f3cf2f136-Paper-Conference.pdf)
- **Visual grounding** (constructs)
  > a grounding module (Gaze) provides precise visual focus by predicting bounding box annotations. (Section 1)
  - [Taking Notes Brings Focus? Towards Multi-Turn Multimodal Dialogue Learning](https://aclanthology.org/2025.emnlp-main.1690.pdf)
- **Spatial reasoning** (constructs)
  > spatial object localization (2,361 samples), which helps models learn spatial reasoning (Section 3)
  - [SilVar: Speech-Driven Multimodal Model for Reasoning Visual Question Answering and Object Localization](https://aclanthology.org/2025.emnlp-main.589.pdf)
