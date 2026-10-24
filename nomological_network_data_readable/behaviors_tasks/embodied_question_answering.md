# Embodied question answering
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Embodied VQA  

## State of the Field

**Space of definitions.** Across the definitions, the prevailing usage is answering questions about a 3D environment through embodied perception and action: papers describe agents as perceiving, navigating, interacting, and reasoning over sequences of multimodal observations and actions in order to answer a question. One formulation, in EQA-RM: A Generative Embodied Reward Model with Test-time Scaling, explicitly includes multimodal observations such as video frames and reasoning traces, while another broadens the scope to embodied 3D environments with dialogue and planning.

**Variants.** Papers use both Embodied question answering and Embodied VQA for closely related formulations. The named variants emphasize active exploration of the environment to answer natural language questions, and a 3D perception setting where embodied VQA covers dialogue and planning; another description highlights multimodal observation streams, including video frames and reasoning traces.

**Space of elicitation and scores.** No measurement instrument is linked to it. In the available papers, the behavior is operationalized directly as answering questions in 3D environments from multimodal observations and action sequences, and in one formulation as dialogue and planning within 3D perception.

**What it is taken as evidence of.** The construct link stated most directly is 3D perception: one paper uses embodied VQA as one of the tasks included for 3D perception, so the behavior is used there to measure that construct. Other papers describe embodied question answering as related to spatial understanding and temporal understanding, so the explicit roles differ across papers.

## Sources

**[EQA-RM: A Generative Embodied Reward Model with Test-time Scaling](https://aclanthology.org/2025.emnlp-main.48.pdf)**
> Answering questions about a 3D environment by perceiving, navigating, and interacting with multimodal observations such as video frames and reasoning traces.

**[LLaVA-Interleave: Tackling Multi-image, Video, and 3D in Large Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c9f95e9ec39fa5ad3d0a562b993b92aa-Paper-Conference.pdf) (as "Embodied VQA")**
> Answering questions about embodied 3D environments, including dialogue and planning.

## Relationships

### Associated with
- **Spatial understanding** (constructs)
  > complex embodied tasks like Embodied Question Answering (EQA) where nuanced evaluation of agents’ spatial, temporal, and logical understanding is critical yet not considered by generic approaches. (Abstract)
  - [EQA-RM: A Generative Embodied Reward Model with Test-time Scaling](https://aclanthology.org/2025.emnlp-main.48.pdf)
- **Temporal understanding** (constructs)
  > complex embodied tasks like Embodied Question Answering (EQA) where nuanced evaluation of agents’ spatial, temporal, and logical understanding is critical yet not considered by generic approaches. (Abstract)
  - [EQA-RM: A Generative Embodied Reward Model with Test-time Scaling](https://aclanthology.org/2025.emnlp-main.48.pdf)
- **Environment exploration** (behaviors tasks)
  > Embodied Question Answering (EQA) ... must actively explore its environment to answer questions posed in natural language. (Section 1)
  - [CityEQA: A Hierarchical LLM Agent on Embodied Question Answering Benchmark in City Space](https://aclanthology.org/2025.emnlp-main.630.pdf)
- **3D perception** (constructs)
  > “For 3D perception, we include 2 tasks: embodied VQA (dialogue and planning), and 3D scene VQA (captioning and grounding).”
  - [LLaVA-Interleave: Tackling Multi-image, Video, and 3D in Large Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c9f95e9ec39fa5ad3d0a562b993b92aa-Paper-Conference.pdf)
