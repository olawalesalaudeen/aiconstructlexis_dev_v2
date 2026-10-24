# Spatial understanding
**Type:** Construct  
**Referenced in:** 32 papers  
**Also known as:** Spatial awareness, Spatial comprehension, Spatial structure understanding, Spatial relationship understanding  

## State of the Field

**Definition agreement:** Consensus. Most papers define spatial understanding as the ability to perceive, interpret, or reason about the positions, arrangement, and spatial relationships of objects or regions in visual scenes or images, sometimes extending to 3D, embodied, or medical imaging settings. A few papers use the term for other domains such as road networks, lists, or audio spatial context, but these are outliers rather than a substantial alternative definition.

**Space of definitions.** Across the surveyed work, the dominant framing treats spatial understanding, often under closely related labels such as spatial awareness or spatial relationship understanding, as a latent ability to perceive, interpret, and reason about the arrangement, positions, and relations of objects in images or visual scenes. Many definitions stay close to this object-in-scene formulation, sometimes adding fine-grained relations, transformations, or grounding in embodied scenes. Smaller lines of work extend the term to positional sequences in structured lists, the connectivity and continuity of road networks, overall structure and spatially distributed findings in medical images, layout or self-positioning in 3D environments, or directional context from audio inputs.

**Space of facets.** Papers use several labels for overlapping ideas, including spatial awareness, spatial understanding, spatial comprehension, spatial structure understanding, and spatial relationship understanding. Within this family, some papers single out facets such as relative position, arrangement, grounding, transformations, connectivity and continuity, or position and orientation; others place spatial understanding alongside numeric and attribute comprehension, or alongside temporal and logical understanding. One paper presents grounding and referring as capabilities that stem from the broader problem of spatial understanding, and another treats spatial relationship understanding as one perception task alongside object counting and color recognition.

**Space of measurement.** Papers link the construct to 3 measurement instruments and 4 behavioral indicators. The named instruments are MM-Vet, MMBench-Video, and RealWorldQA: MM-Vet includes a "Spat" or spatial awareness slice, RealWorldQA is described as a dataset tailored to assess basic real-world spatial understanding through multiple-choice accuracy, and MMBench-Video is used in an assessment that includes spatial understanding in video. Behavioral operationalizations mentioned in linked work include embodied question answering, image editing, UI element referring, and video question answering, so the linked measurements line up most directly with the visual and scene-based definitions, even though some papers define the construct more broadly for lists, road networks, medical structure, 3D self-location, or audio context.

**Links.** Beyond measurement, papers report related and causal links, not correlational ones. One paper says grounding is related to spatial understanding and presents UI element referring and grounding as capabilities that stem from it; other papers relate spatial understanding to video question answering, embodied question answering, and medical visual reasoning. A separate paper claims a causal relationship from image editing to spatial understanding in a discussion of depth information and 3D-aware compositing, and the same paper also claims a causal relationship in the reverse direction, from spatial understanding to image editing, with language about enhanced spatial comprehension and sophisticated spatial interactions.

## Sources

**[Visual CoT: Advancing Multi-Modal Language Models with a Comprehensive Dataset and Benchmark for Chain-of-Thought Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/0ff38d72a2e0aa6dbe42de83a17b2223-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Spatial awareness")**
> The ability to perceive and reason about the spatial arrangement and relationships of objects in a visual scene.

**[DenseFusion-1M: Merging Vision Experts for Comprehensive Multimodal Perception](https://proceedings.neurips.cc/paper_files/paper/2024/file/20ffc2b42c7de4a1960cfdadf305bbe2-Paper-Datasets_and_Benchmarks_Track.pdf)**
> The ability to perceive and reason about the spatial arrangement, positions, and relationships of objects within an image.

**[SMART: Scalable Multi-agent Real-time Motion Generation via Next-token Prediction](https://proceedings.neurips.cc/paper_files/paper/2024/file/cef5c8dec67597b854f0162ad76d92d2-Paper-Conference.pdf) (as "Spatial comprehension")**
> The latent ability to understand and model the structural and topological properties of a road network, such as the connectivity and continuity between road segments.

**[Med-VRAgent: A Framework for Medical Visual Reasoning-Enhanced Agents](https://aclanthology.org/2025.emnlp-main.939.pdf) (as "Spatial structure understanding")**
> The ability to reason about spatially distributed findings and structural relationships within medical images.

**[MME-RealWorld: Could Your Multimodal LLM Challenge High-Resolution Real-World Scenarios that are Difficult for Humans?](https://proceedings.iclr.cc/paper_files/paper/2025/file/df29d63af05cb91d705cf06ba5945b9d-Paper-Conference.pdf) (as "Spatial relationship understanding")**
> Determining the positional or relational configuration between objects in an image.

## Relationships

### Spatial understanding →
- **MM-Vet** (measurements) — *measured_by*
  > Table 5: Multimodal reasoning ability on MM-Vet [92]. Rec denotes Recognition; Know denotes knowledge; Gen denotes Language generation; and Spat denotes Spatial awareness.
  - [LOVA3: Learning to Visual Question Answering, Asking and Assessment](https://proceedings.neurips.cc/paper_files/paper/2024/file/d0822540916cd716add52e1846a6e18d-Paper-Conference.pdf)
- **RealWorldQA** (measurements) — *measured_by*
  > RealworldQA [57] is the most recent dataset tailored to assess the capability of LMMs in basic real-world spatial understanding, using the accuracy metric within multiple-choice questions. (Section 4)
  - [CODE: Contrasting Self-generated Description to Combat Hallucination in Large Multi-modal Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/f1592b0d4ab737e18bb1899484d28d96-Paper-Conference.pdf)
- **MMBench-Video** (measurements) — *measured_by*
  > "The comprehensive assessment underscores the significant performance disparities between Video-LLMs and leading LVLMs in both spatial and temporal understanding"
  - [MMBench-Video: A Long-Form Multi-Shot Benchmark for Holistic Video Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/a2326c9715a516c91174132e0170073a-Paper-Datasets_and_Benchmarks_Track.pdf)

### Associated with
- **Grounding** (constructs)
  > In vision-language learning, how to enable spatial understanding in models is a fundamental research problem. Two desired capabilities stem from this problem: referring and grounding.
  - [Ferret: Refer and Ground Anything Anywhere at Any Granularity](https://proceedings.iclr.cc/paper_files/paper/2024/file/fd6613131889a4b656206c50a8bd7790-Paper-Conference.pdf)
- **Video question answering** (behaviors tasks)
  > We annotate 98 videos and provide 882 question-answer pairs that target three types of questions: ... 2) spatial Understanding about the position of items and their relation to other items...
  - [Evaluating Multimodal Language Models as Visual Assistants for Visually Impaired Users](https://aclanthology.org/2025.acl-long.1260.pdf)
- **Embodied question answering** (behaviors tasks)
  > complex embodied tasks like Embodied Question Answering (EQA) where nuanced evaluation of agents’ spatial, temporal, and logical understanding is critical yet not considered by generic approaches. (Abstract)
  - [EQA-RM: A Generative Embodied Reward Model with Test-time Scaling](https://aclanthology.org/2025.emnlp-main.48.pdf)
