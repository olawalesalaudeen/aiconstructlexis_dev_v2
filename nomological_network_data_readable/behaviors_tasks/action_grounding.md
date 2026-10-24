# Action grounding
**Type:** Behavior  
**Referenced in:** 12 papers  
**Also known as:** Clicking, Dragging, UI grounding, GUI action grounding, GUI grounding  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats action grounding as instruction-conditioned localization in a GUI: a model maps a textual or natural language instruction to the UI element or screen location needed to execute the action, typically by returning a click position, coordinates, or a bounding box. Most definitions emphasize accurately locating the target element, while a smaller line of work states the task more broadly as transforming instructions into executable actions and associated parameters within a GUI or operating system. Papers largely agree on identifying the intended executable element, but differ on whether success is framed narrowly as finding the click target or more broadly as producing action parameters for execution.

**Variants.** The most common variants are clicking and dragging. Clicking is described as localizing the target element and outputting a bounding box or click position, while dragging requires both the initial and end coordinates for a drag-and-drop operation. Papers study this behavior on webpages, narrated screenshots, mobile screens, and broader GUI or operating-system screens, and use names such as action grounding, UI grounding, GUI action grounding, and GUI grounding; some also mention bbox versions of element and action grounding subtasks.

**Space of elicitation and scores.** Papers measure it with 4 instruments. The most frequently linked instrument is ScreenSpot, which papers use for single-step or cross-platform GUI grounding, followed by Multimodal Mind2Web, OSWorld, and RefCOCO+; together these instruments assess the behavior in cross-platform GUI settings, open-ended real computer environments, post-alignment evaluation of GUI grounding models, and natural image grounding scenarios.

**What it is taken as evidence of.** Only 2 constructs are linked to action grounding in papers, and they are linked in different ways rather than through one shared construct framing. One paper reports that action grounding is related to GUI understanding, while another claims a causal relationship from action grounding to out-of-distribution generalization. Separately, papers relate it to action prediction and claim causal relationships from action grounding to GUI automation and privacy leakage.

## Sources

**[Harnessing Webpage UIs for Text-Rich Visual Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/2da53cd1abdae59150e35f4693834f32-Paper-Conference.pdf)**
> Locating the click position or target element needed to carry out a specified action on a webpage.

**[VideoGUI: A Benchmark for GUI Automation from Instructional Videos](https://proceedings.neurips.cc/paper_files/paper/2024/file/804e757b7d7043c26701c3a313032101-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Clicking")**
> The action of identifying and specifying the coordinates of a target UI element to be clicked.

**[VideoGUI: A Benchmark for GUI Automation from Instructional Videos](https://proceedings.neurips.cc/paper_files/paper/2024/file/804e757b7d7043c26701c3a313032101-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Dragging")**
> The action of identifying and specifying both the start and end coordinates for a drag-and-drop operation on a UI element.

**[UI-Hawk: Unleashing the Screen Stream Understanding for Mobile GUI Agents](https://aclanthology.org/2025.emnlp-main.920.pdf) (as "UI grounding")**
> Producing bounding box coordinates that accurately localize a specified UI element on a mobile screen in response to a textual instruction.

**[GUI-Bee: Align GUI Action Grounding to Novel Environments via Autonomous Exploration](https://aclanthology.org/2025.emnlp-main.1688.pdf) (as "GUI action grounding")**
> Mapping natural language instructions to specific executable elements or locations on a GUI screen, such as clicking a button or selecting a menu item.

**[OS-ATLAS: Foundation Action Model for Generalist GUI Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/0faa4bc5f522076947a030273629d4fe-Paper-Conference.pdf) (as "GUI grounding")**
> The model's ability to transform natural language instructions into executable actions, such as coordinate-based operations, within a graphical user interface.

## Relationships

### Action grounding →
- **ScreenSpot** (measurements) — *measured_by*
  > We also include Bbox-version of element and action grounding subtasks in VisualWebBench (Liu et al., 2024c), ScreenSpot (Cheng et al., 2024), RefExp (Wichers et al., 2018) for GUI grounding.
  - [Harnessing Webpage UIs for Text-Rich Visual Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/2da53cd1abdae59150e35f4693834f32-Paper-Conference.pdf)
- **OSWorld** (measurements) — *measured_by*
  > Extensive evaluation of state-of-the-art LLM/VLM agents on OSWORLD reveals deficiencies in their ability to serve as computer assistants. While humans accomplish 72.4% of the tasks, the best agents achieve <12.2%, struggling with GUI grounding and operational knowledge. (Abstract)
  - [OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments](https://proceedings.neurips.cc/paper_files/paper/2024/file/5d413e48f84dc61244b6be550f1cd8f5-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Out-of-distribution generalization** (constructs) — *causes*
  > omitting the pre-training stage significantly degrades performance... These results highlight the critical importance of the data infrastructure for grounding data synthesis; with this infrastructure in place, we can easily improve OOD downstream performance simply by scaling the pre-training corpus. (Section 5.3)
  - [OS-ATLAS: Foundation Action Model for Generalist GUI Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/0faa4bc5f522076947a030273629d4fe-Paper-Conference.pdf)
- **Multimodal Mind2Web** (measurements) — *measured_by*
  > We extend our evaluation by following Gou et al. (2024) to leverage the test data from Multimodal-Mind2Web (Zheng et al., 2024b) for further assessing the GUI grounding models after the alignment. (Section 5.1)
  - [GUI-Bee: Align GUI Action Grounding to Novel Environments via Autonomous Exploration](https://aclanthology.org/2025.emnlp-main.1688.pdf)

### Associated with
- **Privacy leakage** (behaviors tasks)
  > EIA with the MI strategy can attack the action grounding stage of SeeAct and leak users' specific PII
  - [EIA: ENVIRONMENTAL INJECTION ATTACK ON GENERALIST WEB AGENTS FOR PRIVACY LEAKAGE](https://proceedings.iclr.cc/paper_files/paper/2025/file/a73474c359ed523e6cd3174ed29a4d56-Paper-Conference.pdf)
