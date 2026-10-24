# Spatiotemporal reasoning
**Type:** Construct  
**Referenced in:** 13 papers  
**Also known as:** Spatial-temporal awareness, Spatial-temporal understanding, Spatiotemporal dynamics understanding, Spatial-temporal orientation awareness, Spatial-temporal knowledge, Spatio-temporal reasoning, Spatial-temporal reasoning, Fine-grained spatio-temporal reasoning  

## State of the Field

**Definition agreement:** Consensus. Most papers define spatiotemporal reasoning as a model's ability to understand or infer spatial relationships, layouts, locations, and movements together with temporal order, dynamics, or changes over time, usually in video or an evolving environment. A few papers phrase this in specific settings such as action selection, assembly, or multimodal scenes, but they still target the same core property rather than different phenomena.

**Space of definitions.** Across the papers, the prevailing usage treats spatiotemporal reasoning as a latent ability to reason about or understand spatial relationships or layout together with temporal change, dynamics, order, or constraints, most often within video content. Many definitions stay close to object relations and their changes over time, while others emphasize movement, positioning and directional change, fine-grained temporal extents, or making inferences from spatial layout and temporal dynamics. A smaller line of work broadens the scope to images, videos, and 3D scenes, or recasts the construct as awareness of a model's own movement history, a mental model of a changing environment, or correct representation of world state and action order in physical assembly.

**Space of facets.** Across papers, the construct is differentiated by what is tracked across space and time: spatial relationships or layout, temporal order or temporal structure, movement and directional change, object locations and temporal extents across frames, and the updating of world or environment state. The naming is varied, with nearby labels such as spatial-temporal awareness, spatial-temporal understanding, spatiotemporal dynamics understanding, spatial-temporal orientation awareness, spatial-temporal knowledge, and fine-grained spatio-temporal reasoning. One paper further treats it as one reasoning-task category among others, alongside logical attribution.

**Space of measurement.** Operationalization is concentrated in benchmarks: the construct is linked to 4 measurement instruments, ActivityNet-QA, MM-ID, NExT-QA, and Video-MME. ActivityNet-QA is described as assessing long-term spatiotemporal reasoning, NExT-QA as focusing on spatio-temporal reasoning in videos over visual-fact retrieval, MM-ID as evaluating spatial and temporal comprehension, and Video-MME as covering diverse videos and temporal lengths. Papers also link it to 2 behavioral indicators, Action prediction and Robotic manipulation, but these are recorded as causal outcomes rather than direct measures. Overall, the operationalization stays closest to the video-centered definitions and is narrower than definitions that also mention images, 3D scenes, movement history, or changing environments.

**Links.** Beyond measurement, the recorded links are causal claims only. One paper on robotic policies claims a causal relationship from spatiotemporal reasoning to Action prediction, and the same paper claims causal relationships from spatiotemporal reasoning to Robotic manipulation and to Generalization; its evidence says spatial and temporal relations are necessary for manipulation tasks and that the approach improves overall generalization. No correlational or generic related links are recorded.

## Sources

**[TraceVLA: Visual Trace Prompting Enhances Spatial-Temporal Awareness for Generalist Robotic Policies](https://proceedings.iclr.cc/paper_files/paper/2025/file/8667f264f88c7938a73a53ab01eb1327-Paper-Conference.pdf) (as "Spatial-temporal awareness")**
> The model's ability to understand and utilize its history of movements and the spatial relationships evolving over time to inform its actions.

**[Oryx MLLM: On-Demand Spatial-Temporal Understanding at Arbitrary Resolution](https://proceedings.iclr.cc/paper_files/paper/2025/file/d480a9c2164e76e40ae03076e9d5b6d8-Paper-Conference.pdf) (as "Spatial-temporal understanding")**
> The latent multimodal competence to interpret visual content across both spatial detail and temporal structure, including images, videos, and 3D scenes.

**[Streaming Video Question-Answering with In-context Video KV-Cache Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/67a9b444cbcd647572c88194619f72d5-Paper-Conference.pdf)**
> The ability to reason about the spatial relationships between objects and their changes over time within a video.

**[Unhackable Temporal Reward for Scalable Video MLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/c1e5b9a51dcd78528795584860797fdb-Paper-Conference.pdf) (as "Spatiotemporal dynamics understanding")**
> The ability to comprehend and model the interplay of spatial relationships and their changes over time within a video.

**[LongVU: Spatiotemporal Adaptive Compression for Long Video-Language Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shen25j/shen25j.pdf) (as "Spatial-temporal orientation awareness")**
> The ability to perceive and reason about the movement, positioning, and directional changes of objects across both space and time in a video sequence.

**[VisEscape: A Benchmark for Evaluating Exploration-driven Decision-making in Virtual Escape Rooms](https://aclanthology.org/2025.emnlp-main.810.pdf) (as "Spatial-temporal knowledge")**
> The latent ability to construct and update a mental model of the environment that integrates spatial layout and dynamic state changes over time.

**[MapEval: A Map-Based Evaluation of Geo-Spatial Reasoning in Foundation Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dihan25a/dihan25a.pdf) (as "Spatio-temporal reasoning")**
> The ability to reason about entities and events considering both their spatial locations and their temporal properties or constraints.

**[Modularized Self-Reflected Video Reasoner for Multimodal LLM with Application to Video Question Answering](https://raw.githubusercontent.com/mlresearch/v267/main/assets/song25g/song25g.pdf) (as "Spatial-temporal reasoning")**
> The latent ability to understand and make inferences based on the spatial layout and temporal dynamics present in video content.

**[TUMTraf VideoQA: Dataset and Benchmark for Unified Spatio-Temporal Video Understanding in Traffic Scenes](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhou25g/zhou25g.pdf) (as "Fine-grained spatio-temporal reasoning")**
> The capacity to make precise inferences about object locations, movements, and temporal extents across video frames.

## Relationships

### Spatiotemporal reasoning →
- **ActivityNet-QA** (measurements) — *measured_by*
  > ActivityNet-QA (Yu et al., 2019) encompasses human-annotated QA pairs on 5,800 videos derived from the ActivityNet (Caba Heilbron et al., 2015) dataset. This benchmark is designed to assess the capabilities of VideoQA models in long-term spatiotemporal reasoning.
  - [Streaming Video Question-Answering with In-context Video KV-Cache Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/67a9b444cbcd647572c88194619f72d5-Paper-Conference.pdf)
- **MM-ID** (measurements) — *measured_by*
  > Spatial and temporal comprehension are equally important for multimodal video understanding. Here, we evaluate Video-UTR’s performance in these two areas using the latest benchmark, MM-ID, in a zero-shot setting. (Section 4.4)
  - [Unhackable Temporal Reward for Scalable Video MLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/c1e5b9a51dcd78528795584860797fdb-Paper-Conference.pdf)
- **Action prediction** (behaviors tasks) — *causes*
  > we introduce visual trace prompting, a simple yet effective approach to facilitate VLA models’ spatial-temporal awareness for action prediction by encoding state-action trajectories visually. (ABSTRACT)
  - [TraceVLA: Visual Trace Prompting Enhances Spatial-Temporal Awareness for Generalist Robotic Policies](https://proceedings.iclr.cc/paper_files/paper/2025/file/8667f264f88c7938a73a53ab01eb1327-Paper-Conference.pdf)
- **Robotic manipulation** (behaviors tasks) — *causes*
  > We hypothesize that this will effectively provide spatial and temporal relations necessary for improving manipulation tasks (Wen et al., 2023; Yuan et al., 2024). (1 INTRODUCTION)
  - [TraceVLA: Visual Trace Prompting Enhances Spatial-Temporal Awareness for Generalist Robotic Policies](https://proceedings.iclr.cc/paper_files/paper/2025/file/8667f264f88c7938a73a53ab01eb1327-Paper-Conference.pdf)
- **NExT-QA** (measurements) — *measured_by*
  > "We focus on the NExT-QA (Xiao et al., 2021) benchmark for its size, variety of human-annotated questions, and its focus on spatio-temporal reasoning in videos over mere visual-fact retrieval"
  - [Understanding Complexity in VideoQA via Visual Program Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/eyzaguirre25a/eyzaguirre25a.pdf)
