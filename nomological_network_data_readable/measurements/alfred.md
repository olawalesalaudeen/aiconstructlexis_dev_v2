# ALFRED
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** ALFRed  

## State of the Field

**What it is.** Across papers, the dominant framing is a benchmark or dataset for embodied household tasks in simulation, used for planning and instruction following with human-annotated, formally verifiable tasks that involve object manipulation and state changes such as heating, cooling, and cleaning. Definitions and snippets variously place it in a simulated Unity environment or describe it as built on the AI2-THOR simulator, and some papers also present it as providing vision-and-language navigation and rearrangement tasks for everyday household settings. A smaller usage writes it as ALFRed and emphasizes long-horizon embodied tasks and task decomposition, while another paper curates an ALFRED test set for 3D evaluation.

**What it is claimed to measure.** Its reported measurement role is limited and split across 2 constructs, with no linked behavioral indicators. One paper uses it to measure 3D perception through a curated ALFRED test set for "3D evaluation" (LLaVA-Interleave: Tackling Multi-image, Video, and 3D in Large Multimodal Models), while another uses it to measure robustness by reporting experiments in "VirtualHome, ALFRED, and CARLA" (Exploratory Retrieval-Augmented Planning For Continual Embodied Instruction Following). The claims therefore do not converge on a single construct.

**Space of uses.** No measurement instrument is linked to it. In practice, papers use it alongside Mini Minecraft in language-specified planning, alongside VirtualHome and CARLA in continual embodied instruction following, and alongside ScanQA and two 3D-LLM tasks for 3D evaluation. Papers also position it as a benchmark scored with task success rates for planning performance, and one paper says it follows ALFRed's task decomposition method to divide tasks into sub-tasks before execution.

## Sources

**[Learning Grounded Action Abstractions from Language](https://proceedings.iclr.cc/paper_files/paper/2024/file/99dec5837aae1a7459960c6121b9e3b8-Paper-Conference.pdf)**
> Household planning benchmark with human-annotated, formally verifiable tasks in a simulated Unity environment, involving object manipulation and state changes such as heating, cooling, and cleaning.

**[MLLM as Retriever: Interactively Learning Multimodal Retrieval for Embodied Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/4e447acb68f57e29234bc0eb19896f11-Paper-Conference.pdf) (as "ALFRed")**
> An AI2-THOR-based benchmark for long-horizon embodied tasks, whose task decomposition method is adopted in the paper's experimental setup.

## Relationships

### → ALFRED
- **Robustness** (constructs) — *measured_by*
  > Finally, we demonstrate superior performance and robustness of ExRAP via intensive experiments with home robots and autonomous driving scenarios in VirtualHome, ALFRED, and CARLA. (Introduction)
  - [Exploratory Retrieval-Augmented Planning For Continual Embodied Instruction Following](https://proceedings.neurips.cc/paper_files/paper/2024/file/7bacd0ebd061d4694583ae0eb69ad15f-Paper-Conference.pdf)
- **3D perception** (constructs) — *measured_by*
  > For 3D evaluation, we select ScanQA (3), two tasks from 3D-LLM (16), i.e., 3D-assisted Dialogue and Task Decomposition, and also curate two new test set from nuScenes VQA (6) and ALFRED (48).
  - [LLaVA-Interleave: Tackling Multi-image, Video, and 3D in Large Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c9f95e9ec39fa5ad3d0a562b993b92aa-Paper-Conference.pdf)
