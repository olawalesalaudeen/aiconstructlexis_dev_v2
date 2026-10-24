# 3D understanding
**Type:** Construct  
**Referenced in:** 10 papers  
**Also known as:** 3D awareness, Object-level 3D awareness, 3D-related reasoning, 3D scene understanding, 3D scene representation  

## State of the Field

**Definition agreement:** Complementary. Most papers define 3D understanding as a model's ability or latent capacity to infer, represent, perceive, or reason about the 3D structure, geometry, and spatial relations of objects and scenes, often from 2D visual input. A few papers foreground narrower facets such as depth-aware compositing, information encoded in internal representations, or maintaining a metrically accurate scene model over time, but these read as compatible aspects or settings of the same underlying phenomenon rather than different constructs.

**Space of definitions.** Across the papers, the prevailing usage treats 3D understanding as a model ability to infer, perceive, ground, represent, and reason about three-dimensional structure, layout, objects, and spatial relations, often from 2D or RGB inputs. Several definitions stay at this broad scene-and-object level, while smaller strands narrow it to depth and geometry for image compositing, to object-level encoding of 3D structure and viewpoint in internal representations, or to constructing and maintaining a metrically accurate 3D scene model over time from egocentric visual inputs.

**Space of facets.** Papers use several nearby labels for different facets, including 3D awareness, object-level 3D awareness, 3D-related reasoning, 3D scene understanding, and 3D scene representation. These labels emphasize, respectively, accounting for depth and geometry in compositing, encoding structure and viewpoint in features, reasoning about pose, distance, and spatial relationships, comprehending objects and their attributes and relations in a 3D environment, and maintaining a coherent metric scene model across time. One paper also describes explicit, fine-grained 3D understanding as needed for higher-level 3D-aware tasks such as articulating dynamic scene changes and motion planning.

**Space of measurement.** Papers link 3D understanding to 2 measurement instruments, SQA3D and ScanQA, both used for visual question answering, and to 3 behavioral indicators: 3D question answering, motion planning, and referring expression understanding. Beyond these named instruments, one paper operationalizes object-level 3D awareness by linear probing frozen feature representations on a 3D viewpoint classification task. These operationalizations match definitions that stress scene comprehension and spatial reasoning more directly than definitions centered on latent representations, compositing, or temporally maintained scene models.

**Links.** The relationship evidence is limited and mixed. One paper claims a causal relationship from 3D understanding to motion planning, saying that higher-level 3D-aware tasks such as motion planning require fundamental and explicit 3D understanding, and another claims a causal relationship from referring expression understanding to 3D understanding through object referencing and grounding for advanced scene understanding. Separately, one paper reports that 3D question answering is related to 3D understanding by using 3D-QA as a representative example of 3D scene understanding tasks; no paper reports a correlational link involving this construct.

## Sources

**[SpatialPIN: Enhancing Spatial Reasoning Capabilities of Vision-Language Models through Prompting and Interacting 3D Priors](https://proceedings.neurips.cc/paper_files/paper/2024/file/7f2257d2b291b8d7e712c70b67e09412-Paper-Conference.pdf)**
> The model's ability to infer and represent the three-dimensional structure, layout, and properties of a scene and its objects from two-dimensional inputs.

**[$\textit{Bifr\"ost}$: 3D-Aware Image Compositing with Language Instructions](https://proceedings.neurips.cc/paper_files/paper/2024/file/ea011cd13bcdf7ca38506c844dccfee8-Paper-Conference.pdf) (as "3D awareness")**
> The latent capacity to account for depth and three-dimensional geometry when placing or compositing objects into a scene.

**[ImageNet3D: Towards General-Purpose Object-Level 3D Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/ae51515c1cfecf544963a527260f94e9-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Object-level 3D awareness")**
> The degree to which a model's internal representations encode discriminative information about the 3D structure and viewpoint of objects.

**[ImageNet3D: Towards General-Purpose Object-Level 3D Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/ae51515c1cfecf544963a527260f94e9-Paper-Datasets_and_Benchmarks_Track.pdf) (as "3D-related reasoning")**
> The cognitive ability of a model, particularly an LLM, to reason about object properties like pose, distance, and spatial relationships using integrated 3D information.

**[Chat-Scene: Bridging 3D Scene and Large Language Models with Object Identifiers](https://proceedings.neurips.cc/paper_files/paper/2024/file/cebbd24f1e50bcb63d015611fe0fe767-Paper-Conference.pdf) (as "3D scene understanding")**
> The ability to comprehend and reason about the objects, their attributes, and their spatial relationships within a three-dimensional environment.

**[Out of Sight, Not Out of Context? Egocentric Spatial Reasoning in VLMs Across Disjoint Frames](https://aclanthology.org/2025.emnlp-main.816.pdf) (as "3D scene representation")**
> The internal construction and maintenance of a metrically accurate, three-dimensional model of a scene from egocentric visual inputs, enabling spatial inference across time.

## Relationships

### 3D understanding →
- **ScanQA** (measurements) — *measured_by*
  > on ScanQA and SQA3D, which do not require object referencing and grounding, we still achieve consistent performance enhancement, demonstrating improved overall 3D scene understanding and reasoning
  - [Chat-Scene: Bridging 3D Scene and Large Language Models with Object Identifiers](https://proceedings.neurips.cc/paper_files/paper/2024/file/cebbd24f1e50bcb63d015611fe0fe767-Paper-Conference.pdf)
- **Motion planning** (behaviors tasks) — *causes*
  > ...higher-level 3D-aware tasks, such as articulating dynamic scene changes and motion planning, require a fundamental and explicit 3D understanding beyond current spatial VQA datasets. (Abstract)
  - [SpatialPIN: Enhancing Spatial Reasoning Capabilities of Vision-Language Models through Prompting and Interacting 3D Priors](https://proceedings.neurips.cc/paper_files/paper/2024/file/7f2257d2b291b8d7e712c70b67e09412-Paper-Conference.pdf)
- **SQA3D** (measurements) — *measured_by*
  > on ScanQA and SQA3D, which do not require object referencing and grounding, we still achieve consistent performance enhancement, demonstrating improved overall 3D scene understanding and reasoning
  - [Chat-Scene: Bridging 3D Scene and Large Language Models with Object Identifiers](https://proceedings.neurips.cc/paper_files/paper/2024/file/cebbd24f1e50bcb63d015611fe0fe767-Paper-Conference.pdf)

### Associated with
- **3D question answering** (behaviors tasks)
  > In this work, we explore how to harness their potential to address 3D scene understanding tasks, using 3D question answering (3D-QA) as a representative example. (Abstract)
  - [3D Question Answering via only 2D Vision-Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25ef/wang25ef.pdf)
