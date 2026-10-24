# Visual object localization
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Piece localization, UI element localization, Widget localization  

## State of the Field

**Space of definitions.** Across the papers, this behavior is framed as producing the location of a target within visual input. One formulation asks for the original position of a masked image patch in a partially masked grid, while the UI-focused formulations ask for the location of a described interface element, either as precise screen or mouse click coordinates or as a bounding box. The papers therefore agree on localization as the core behavior, but differ in whether the target is an image patch or a UI widget and in the required output format.

**Variants.** The named variants are piece localization, UI element localization, and widget localization. Piece localization is posed on a partially masked image and asks for a patch's original position; one paper presents it as a representative single-step spatial reasoning capability. The UI variants use natural language instructions or widget descriptions with screenshots or interfaces and ask the model to find the target element, and one paper describes this as mapping "instructions and screenshots to precise mouse click coordinates" (AgentStudio: A Toolkit for Building General Virtual Agents).

**Space of elicitation and scores.** No measurement instrument is linked to this behavior.

**What it is taken as evidence of.** No construct is linked to this behavior.

## Sources

**[Jigsaw-Puzzles: From Seeing to Understanding to Reasoning in Vision-Language Models](https://aclanthology.org/2025.emnlp-main.1320.pdf) (as "Piece localization")**
> The task of identifying the original position of a given image patch within a partially masked grid.

**[AgentStudio: A Toolkit for Building General Virtual Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/172fe9f8cc55953bad5c24774bf0142b-Paper-Conference.pdf) (as "UI element localization")**
> The observable behavior of generating the precise screen coordinates corresponding to a UI element described in a natural language instruction.

**[Ferret-UI 2: Mastering Universal User Interface Understanding Across Platforms](https://proceedings.iclr.cc/paper_files/paper/2025/file/f7baab9bb701848e75f3cc119bdf57bc-Paper-Conference.pdf) (as "Widget localization")**
> The task of finding the location (i.e., bounding box) of a UI widget based on a textual description of it.
