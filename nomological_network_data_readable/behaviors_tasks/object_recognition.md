# Object recognition
**Type:** Behavior  
**Referenced in:** 29 papers  
**Also known as:** Object presence detection, Object identification, Structure identification, Object existence determination, Object name generation, Entity recognition  

## State of the Field

**Space of definitions.** Across papers, the dominant framing is an image-level task of identifying and naming specific objects present in a visual input. Success is usually cast as correct naming or categorization, but some definitions narrow it to deciding whether a specified object is present or absent, and some fold in localization, for example asking "What type of mushroom is it in the image?" or to "give the approximate coordinates of the spoon tail." A smaller line broadens the target to listing visible entities, and some papers describe it as a latent recognition ability rather than only a discrete question-answering task.

**Variants.** Papers study several variants across modalities and domains. In still images, they separate object presence detection from object identification, including everyday-object naming and broader entity-recognition prompts over objects, people, and environmental features. In video settings, the behavior appears both as identifying objects mentioned in captions and as surrogate tasks that localize objects on frames or keyframes, while biomedical work recasts it as structure identification for anatomies in the brain, heart, lung, abdomen, or spine; another strand studies free-form object name generation without a fixed vocabulary. One benchmark also situates object recognition as one of the tasks used inside hallucination scenarios.

**Space of elicitation and scores.** Papers link this behavior to 3 measurement instruments: CUB-200-2011, used for object identification focused on bird species, ImageNet-1k, used as an image-recognition benchmark, and POPE, described as querying the presence of specific objects with simple yes/no questions. A smaller operationalization measures it through visual question answering, using curated images and object questions such as "What is on the bed?" and comparing the next generated token after prefilling the response with "It is a". Scoring can also be ratio-based, with one entity-recognition setup calculating recognition as the ratio of recognized entities to annotated entities.

**What it is taken as evidence of.** Across linked constructs, papers connect object recognition to 3 constructs rather than using a single shared construct label. One paper claims a causal relationship from object recognition to Grounding, describing object recognition as one of the low-level surrogate tasks used to ground a model to scene information. Another paper reports it as related to Visual perception, and a separate paper claims a causal relationship from Multimodal alignment to object recognition by linking alignment limitations to lower accuracy in object name generation. These links point in different directions, so papers do not use one consistent construct framing.

## Sources

**[WildVision: Evaluating Vision-Language Models in the Wild with Human Preferences](https://proceedings.neurips.cc/paper_files/paper/2024/file/563991b5c8b45fe75bea42db738223b2-Paper-Datasets_and_Benchmarks_Track.pdf)**
> Identifying specific objects present in the image.

**[Have the VLMs Lost Confidence? A Study of Sycophancy in VLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/07be1a0850e58ca29e2b6ce31fc0c791-Paper-Conference.pdf) (as "Object presence detection")**
> The task of determining whether a specific object exists within an image.

**[See It from My Perspective: How Language Affects Cultural Bias in Image Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c0fabe372177d2aded596be2d3b4544-Paper-Conference.pdf) (as "Object identification")**
> The task of correctly naming an everyday object depicted in an image.

**[Interpretable Bilingual Multimodal Large Language Model for Diverse Biomedical Tasks](https://proceedings.iclr.cc/paper_files/paper/2025/file/414fd191b3246a19a55741b938380136-Paper-Conference.pdf) (as "Structure identification")**
> The specific task of identifying and naming anatomical structures, such as organs, within a specified region of a medical scan.

**[Evaluating and Mitigating Object Hallucination in Large Vision-Language Models: Can They Still See Removed Objects?](https://aclanthology.org/2025.naacl-long.349.pdf) (as "Object existence determination")**
> The model's latent capability to correctly identify whether a specified object is present or absent in a given image.

**[Open-Det: An Efficient Learning Framework for Open-Ended Detection](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cao25h/cao25h.pdf) (as "Object name generation")**
> The model produces free-form textual names for detected objects without relying on a fixed vocabulary.

**[A Cognitive Evaluation Benchmark of Image Reasoning and Description for Large Vision-Language Models](https://aclanthology.org/2025.naacl-long.324.pdf) (as "Entity recognition")**
> Identifying and naming visible objects, people, and environmental features in an image.

## Relationships

### Object recognition →
- **Grounding** (constructs) — *causes*
  > Our multi-modal LRR model is grounded to relevant low-level visual information in the scene by stochastically introducing low-level surrogate tasks during training, including object recognition, re-identification, and tracking (Section 1).
  - [Look, Remember and Reason: Grounded Reasoning in Videos with Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1df282080150537df7b00c20aadcafad-Paper-Conference.pdf)
- **CUB-200-2011** (measurements) — *measured_by*
  > Caltech’s CUB Dataset on Birds [82] is a well-known resource for evaluating algorithms on the task of object identification, specifically focused on bird species. (Section 4.3)
  - [Multimodal Task Vectors Enable Many-Shot Multimodal In-Context Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/27571b74d6cd650b8eb6cf1837953ae8-Paper-Conference.pdf)
- **ImageNet-1k** (measurements) — *measured_by*
  > "ImageNet, often considered a cornerstone in the field of computer vision, has been widely used as a benchmark to evaluate the performance of image recognition models."
  - [UniBench: Visual Reasoning Requires Rethinking Vision-Language Beyond Scaling](https://proceedings.neurips.cc/paper_files/paper/2024/file/96271227d3e204501d199433e56af289-Paper-Datasets_and_Benchmarks_Track.pdf)

### Associated with
- **Visual perception** (constructs)
  > Perception MLLMs retrieve information from multimodal inputs, using skills like object recognition and OCR. (Table 3).
  - [MLLM-Bench: Evaluating Multimodal LLMs with Per-sample Criteria](https://aclanthology.org/2025.naacl-long.256.pdf)
