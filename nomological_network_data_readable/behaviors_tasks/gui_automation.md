# GUI automation
**Type:** Behavior  
**Referenced in:** 18 papers  
**Also known as:** GUI control, GUI interaction, UI control, GUI navigation, Pixel-level operation, On-device control, Mobile device control, Computer interaction, Cross-application task completion, Cross-app task execution, Single-app task execution, Software application manipulation, Computer control, UI interaction, Interface manipulation  

## State of the Field

**Space of definitions.** Across the definitions, the prevailing usage treats GUI automation as end-to-end interaction with graphical interfaces to accomplish a task or reach a goal state. Most papers describe sequences of interface actions, such as clicking, typing, scrolling, swiping, tapping, and mouse or keyboard inputs, often guided by natural-language instructions or user requests and based on perceived screens, screenshots, or interface state. Several definitions make the target explicit as completing web, mobile, desktop, or enterprise software tasks, and one description makes the action space concrete as tapping and sliding, typing text strings, and pressing HOME, BACK, and ENTER. A smaller line narrows the behavior to direct pixel-level operations at screen coordinates without relying on underlying code structures.

**Variants.** Variants mainly differ by environment and workflow scope. Papers variously frame the behavior as GUI control, GUI navigation, mobile or on-device control, and computer control, covering web pages, mobile apps, desktop applications, and broader software workflows such as browsing, email, editing, and office tasks. Several papers split it into single-app execution versus cross-app or cross-application task completion, where the latter requires switching among multiple applications and, in one formulation, interactions with multiple GUIs, multiple APIs, or both. A narrower variant isolates pixel-level operation, emphasizing clicks, hovers, or typing at specific coordinates.

**Space of elicitation and scores.** Papers measure it with three instruments. AitW is linked most often and is described as a mobile navigation benchmark with instructions and operation trajectories, while Mind2Web and MiniWoB++ also measure it through web-navigation tasks; MiniWoB++ is further described as simplified web environments with high-level instructions and action trajectories.

**What it is taken as evidence of.** The available construct links do not use GUI automation as an indicator of a construct. Instead, two constructs are linked through causal claims toward GUI automation: papers claim causal relationships from visual grounding and context retention to GUI automation, with the supporting snippets emphasizing mapping referring expressions to GUI coordinates and retaining context across long, multi-step, multi-app tasks. Papers also link two behavioral indicators, action grounding and code generation, through causal claims toward GUI automation.

## Sources

**[Spider2-V: How Far Are Multimodal Agents From Automating Data Science and Engineering Workflows?](https://proceedings.neurips.cc/paper_files/paper/2024/file/c2f71567cd53464161cab3336e8fc865-Paper-Datasets_and_Benchmarks_Track.pdf) (as "GUI control")**
> The observable action of interacting with graphical user interfaces, including navigating web pages, clicking buttons, and filling in forms, to manage enterprise software systems.

**[VideoGUI: A Benchmark for GUI Automation from Instructional Videos](https://proceedings.neurips.cc/paper_files/paper/2024/file/804e757b7d7043c26701c3a313032101-Paper-Datasets_and_Benchmarks_Track.pdf)**
> Performing end-to-end computer interface tasks by navigating software and executing interface actions to achieve a goal state.

**[OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments](https://proceedings.neurips.cc/paper_files/paper/2024/file/5d413e48f84dc61244b6be550f1cd8f5-Paper-Datasets_and_Benchmarks_Track.pdf) (as "GUI interaction")**
> Interacting with a computer system by manipulating graphical elements like windows, icons, and buttons using a mouse and keyboard.

**[On the Effects of Data Scale on UI Control Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/a79f3ef3b445fd4659f44648f7ea8ffd-Paper-Datasets_and_Benchmarks_Track.pdf) (as "UI control")**
> The observable behavior of an agent interacting with a digital device's user interface to accomplish tasks specified in natural language.

**[Grounding Multimodal Large Language Model in GUI World](https://proceedings.iclr.cc/paper_files/paper/2025/file/31fc85f7461ce71eadf27fb7281973bd-Paper-Conference.pdf) (as "GUI navigation")**
> Selecting and executing actions on interface elements to complete web or mobile tasks from screenshots and instructions.

**[Navigating the Digital World as Humans Do: Universal Visual Grounding for GUI Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/4ca0e369689dadb25a5345ba9755ad6f-Paper-Conference.pdf) (as "Pixel-level operation")**
> Executing direct interactions on a GUI such as clicking or typing at specific screen coordinates without relying on underlying code structures.

**[DistRL: An Asynchronous Distributed Reinforcement Learning Framework for On-Device Control Agent](https://proceedings.iclr.cc/paper_files/paper/2025/file/b9e472cd579c83e2f6aa3459f46aac28-Paper-Conference.pdf) (as "On-device control")**
> The act of operating a mobile device's applications and functionalities to fulfill user requests.

**[What Limits Virtual Agent Application? OmniBench: A Scalable Multi-Dimensional Benchmark for Essential Virtual Agent Capabilities](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bu25b/bu25b.pdf) (as "Mobile device control")**
> Completing tasks by operating mobile interfaces and apps through GUI actions.

**[What Limits Virtual Agent Application? OmniBench: A Scalable Multi-Dimensional Benchmark for Essential Virtual Agent Capabilities](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bu25b/bu25b.pdf) (as "Computer interaction")**
> Completing tasks through direct interaction with desktop or GUI-based computer interfaces.

**[AgentStudio: A Toolkit for Building General Virtual Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/172fe9f8cc55953bad5c24774bf0142b-Paper-Conference.pdf) (as "Cross-application task completion")**
> The observable performance on tasks that require navigating and interacting with multiple distinct software applications to achieve a single goal.

**[SPA-BENCH: A COMPREHENSIVE BENCHMARK FOR SMARTPHONE AGENT EVALUATION](https://proceedings.iclr.cc/paper_files/paper/2025/file/9a75f4dd9679aa4ff80a4e6f0a1dc700-Paper-Conference.pdf) (as "Cross-app task execution")**
> Completing a task that requires switching between multiple applications and coordinating actions across them.

**[SPA-BENCH: A COMPREHENSIVE BENCHMARK FOR SMARTPHONE AGENT EVALUATION](https://proceedings.iclr.cc/paper_files/paper/2025/file/9a75f4dd9679aa4ff80a4e6f0a1dc700-Paper-Conference.pdf) (as "Single-app task execution")**
> Completing a task within one mobile application by performing the required sequence of UI actions.

**[Cradle: Empowering Foundation Agents towards General Computer Control](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tan25h/tan25h.pdf) (as "Software application manipulation")**
> Using desktop applications to perform everyday tasks such as browsing, email, editing, and office workflows.

**[Synapse: Trajectory-as-Exemplar Prompting with Memory for Computer Control](https://proceedings.iclr.cc/paper_files/paper/2024/file/52f050499cf82fa8efb588e263f6f3a7-Paper-Conference.pdf) (as "Computer control")**
> The observable task of an agent interacting with a computer environment, such as a webpage or application, by perceiving states and executing actions via keyboard and mouse inputs.

**[AXIS: Efficient Human-Agent-Computer Interaction with API-First LLM-Based Agents](https://aclanthology.org/2025.acl-long.381.pdf) (as "UI interaction")**
> The model interacts with graphical user interface elements such as menus, buttons, and controls to perform actions step by step.

**[Boosting Virtual Agent Learning and Reasoning: A Step-Wise, Multi-Dimensional, and Generalist Reward Model with Benchmark](https://raw.githubusercontent.com/mlresearch/v267/main/assets/miao25b/miao25b.pdf) (as "Interface manipulation")**
> Operating UI elements in digital environments to accomplish tasks.

## Relationships

### GUI automation →
- **AitW** (measurements) — *measured_by*
  > Android In The Wild (AITW) (Rawles et al., 2023) dataset is a mobile navigation benchmark including 30K instructions and 715K corresponding operation trajectories.
  - [Grounding Multimodal Large Language Model in GUI World](https://proceedings.iclr.cc/paper_files/paper/2025/file/31fc85f7461ce71eadf27fb7281973bd-Paper-Conference.pdf)

### → GUI automation
- **Code generation** (behaviors tasks) — *causes*
  > OSCAR generates executable Python code to directly interface with the OS, enabling semantically clear and precise actions, ensuring broad applicability across diverse tasks. (Section 2)
  - [OSCAR: Operating System Control via State-Aware Reasoning and Re-Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/b2077e6d66da612fcb701589efa9ce88-Paper-Conference.pdf)
- **Visual grounding** (constructs) — *causes*
  > In this paper, we advocate a human-like embodiment for GUI agents that perceive the environment entirely visually and directly perform pixel-level operations on the GUI. The key is visual grounding models that can accurately map diverse referring expressions of GUI elements to their coordinates on the GUI across different platforms. (ABSTRACT)
  - [Navigating the Digital World as Humans Do: Universal Visual Grounding for GUI Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/4ca0e369689dadb25a5345ba9755ad6f-Paper-Conference.pdf)
