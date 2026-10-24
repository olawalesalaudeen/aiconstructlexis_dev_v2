# Object goal navigation
**Type:** Behavior  
**Referenced in:** 4 papers  
**Also known as:** Object navigation, Object search  

## State of the Field

**Space of definitions.** Across the papers, the dominant framing is embodied navigation or exploration in a new or unknown environment to find a target object. Most definitions specify the target by category, though one definition adds that the target is not initially visible, and another instead frames the task as finding a specific object from textual or visual cues. As one paper puts it, the aim is to "efficiently explore a new environment while searching for a target object that is not directly visible" (GAMap: Zero-Shot Object Goal Navigation with Multi-Scale Geometric-Affordance Guidance).

**Variants.** The prevailing variants stay within navigation settings, including zero-shot object goal navigation in unseen environments, where the robot must navigate to a target object it has never encountered before and without training on the target or scene, and UAV object search with assistant guidance in aerial environments. Papers also use nearby names such as object navigation and object search for these settings. A smaller usage under the object search label appears outside navigation, where the task is to identify or describe an object's position in video, for example answering "What is the thing I brought with my left hand just now?" (Streaming Video Understanding and Multi-round Interaction with Memory-enhanced Knowledge).

**Space of elicitation and scores.** No measurement instrument is linked to it, so the papers do not identify a recurring instrument for eliciting or scoring this behavior.

**What it is taken as evidence of.** No construct is linked to it, so the papers do not use it here as recorded evidence of a named construct.

## Sources

**[GAMap: Zero-Shot Object Goal Navigation with Multi-Scale Geometric-Affordance Guidance](https://proceedings.neurips.cc/paper_files/paper/2024/file/459d93dad139eb084c365d40a57eada3-Paper-Conference.pdf)**
> The task of an embodied agent exploring an environment to find a target object of a specified category that is not initially visible.

**[SG-Nav: Online 3D Scene Graph Prompting for LLM-based Zero-shot Object Navigation](https://proceedings.neurips.cc/paper_files/paper/2024/file/098491b37deebbe6c007e69815729e09-Paper-Conference.pdf) (as "Object navigation")**
> The task of an agent moving through an unknown environment to find an object specified by its category.

**[Towards Realistic UAV Vision-Language Navigation: Platform, Benchmark, and Methodology](https://proceedings.iclr.cc/paper_files/paper/2025/file/15ce8e7afe5ee95bad56e3b9be28d3d1-Paper-Conference.pdf) (as "Object search")**
> The task of actively navigating an environment to find a specific object described by textual or visual cues.
