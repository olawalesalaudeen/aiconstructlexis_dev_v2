# GUI understanding
**Type:** Construct  
**Referenced in:** 10 papers  
**Also known as:** GUI Understanding, UI understanding, Screen understanding, Screen reading comprehension, GUI action grounding  

## State of the Field

**Definition agreement:** Complementary. Most papers define GUI understanding as a model's ability to interpret the visual and structural content of a GUI screen, often to recognize or locate interactive and actionable elements. A few papers narrow that same capability to specific manifestations such as reading on-screen text and symbols for question answering or grounding natural language instructions to GUI elements, so they emphasize different facets or tasks rather than incompatible constructs.

**Space of definitions.** Most papers treat GUI understanding, or neighboring labels such as UI understanding and screen understanding, as a latent capability to interpret visual interface information, including layout, text, icons, structure, and function, and to identify relevant interactive or actionable elements. A smaller line of work narrows the construct either to screen reading comprehension, defined as reading textual and symbolic information on a screen to answer questions, or to GUI action grounding, defined as mapping natural language instructions to specific elements or locations. The main variation is scope: broad interface comprehension versus task-specific question answering or instruction-to-element mapping.

**Space of facets.** Across papers, the construct is organized through overlapping labels rather than a single fixed taxonomy: GUI understanding, UI understanding, and screen understanding are used for closely similar abilities. Some papers separate it from planning and tool usage as one component of broader agentic abilities, while others treat action grounding as a related dimension or say that action prediction builds on UI understanding. Papers also introduce narrower neighboring labels, especially screen reading comprehension and GUI action grounding, and some bundle understanding with grounding in references to GUI understanding and grounding benchmarks.

**Space of measurement.** Operationalization centers on named evaluation instruments: papers link the construct to 2 measurement instruments and 5 behavioral indicators, with GUI-WORLD and WebSRC the named instruments. GUI-WORLD is explicitly presented as a comprehensive benchmark for GUI-oriented understanding capabilities, while WebSRC is selected for GUI understanding evaluation; the linked behavioral indicators are Action grounding, Action prediction, Code generation, Document question answering, and Optical character recognition. These operationalizations track the broader definitions of visual interface understanding, although some paper-level definitions narrow the construct further toward screen reading or grounding.

**Links.** Papers claim causal relationships in both directions. One paper claims causal relationships from Document question answering and from Optical character recognition to GUI understanding, stating that QA samples enhance performance on GUI understanding benchmarks and that OCR samples benefit it most. Other papers claim causal relationships from GUI understanding to Code generation and to Action prediction, with one stating that action prediction builds on UI understanding, and a separate paper reports that GUI understanding is related to Action grounding.

## Sources

**[Harnessing Webpage UIs for Text-Rich Visual Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/2da53cd1abdae59150e35f4693834f32-Paper-Conference.pdf)**
> The capability to comprehend the structure, content, and function of graphical user interfaces from visual inputs.

**[OSCAR: Operating System Control via State-Aware Reasoning and Re-Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/b2077e6d66da612fcb701589efa9ce88-Paper-Conference.pdf) (as "GUI Understanding")**
> The latent capability to interpret visual screen information and accurately identify interactive UI elements.

**[SPA-BENCH: A COMPREHENSIVE BENCHMARK FOR SMARTPHONE AGENT EVALUATION](https://proceedings.iclr.cc/paper_files/paper/2025/file/9a75f4dd9679aa4ff80a4e6f0a1dc700-Paper-Conference.pdf) (as "UI understanding")**
> The capacity to interpret complex mobile interface layouts and identify relevant on-screen information for action selection.

**[Windows Agent Arena: Evaluating Multi-Modal OS Agents at Scale](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bonatti25a/bonatti25a.pdf) (as "Screen understanding")**
> The latent ability to interpret and reason about visual and structural elements of a computer interface, including text, icons, and layout, to identify actionable components.

**[ScreenQA: Large-Scale Question-Answer Pairs Over Mobile App Screenshots](https://aclanthology.org/2025.naacl-long.477.pdf) (as "Screen reading comprehension")**
> The capacity to read and understand textual and symbolic information presented on a screen to answer specific questions.

**[GUI-Bee: Align GUI Action Grounding to Novel Environments via Autonomous Exploration](https://aclanthology.org/2025.emnlp-main.1688.pdf) (as "GUI action grounding")**
> The latent ability of a model to correctly map natural language instructions to specific actionable elements or locations on a Graphical User Interface screen.

## Relationships

### GUI understanding →
- **WebSRC** (measurements) — *measured_by*
  > We select VisualWebBench (Liu et al., 2024c), WebSRC (Chen et al., 2021), ScreenQA-Short (Hsiao et al., 2022), WidgetCap (Li et al., 2020) for GUI understanding.
  - [Harnessing Webpage UIs for Text-Rich Visual Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/2da53cd1abdae59150e35f4693834f32-Paper-Conference.pdf)
- **GUI-WORLD** (measurements) — *measured_by*
  > Likewise, we also establish a comprehensive benchmark for GUI understanding, which encompasses nine mainstream MLLMs (e.g., GPT-4o (OpenAI, 2024) and Gemini-1.5-Pro (Team et al., 2023)), five keyframe selection strategies (e.g., UVD (Zhang et al., 2024d)), and six GUI scenarios, aiming to provide a thorough evaluation of the GUI-oriented understanding capabilities of MLLMs. (Section 1)
  - [GUI-World: A Video Benchmark and Dataset for Multimodal GUI-oriented Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/3926df1a00c9abf056df7bcf253d026a-Paper-Conference.pdf)
- **Code generation** (behaviors tasks) — *causes*
  > To further demonstrate how GUI understanding capability enhances mainstream GUI-related tasks, including generating operational code (Cheng et al., 2024) and providing chat assistance (Hong et al., 2024), we conduct experiments as follows... (Section 4.2)
  - [GUI-World: A Video Benchmark and Dataset for Multimodal GUI-oriented Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/3926df1a00c9abf056df7bcf253d026a-Paper-Conference.pdf)
- **Action prediction** (behaviors tasks) — *causes*
  > Action Prediction builds on these skills, testing whether agents can execute interactions like clicking, dragging, and typing based on their UI understanding
  - [UI-Vision: A Desktop-centric GUI Benchmark for Visual Perception and Interaction](https://raw.githubusercontent.com/mlresearch/v267/main/assets/nayak25a/nayak25a.pdf)

### → GUI understanding
- **Optical character recognition** (behaviors tasks) — *causes*
  > OCR samples benefit most in GUI understanding.
  - [Harnessing Webpage UIs for Text-Rich Visual Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/2da53cd1abdae59150e35f4693834f32-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *causes*
  > both QA and Caption samples enhance performance in GUI understanding and OCR-related benchmarks
  - [Harnessing Webpage UIs for Text-Rich Visual Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/2da53cd1abdae59150e35f4693834f32-Paper-Conference.pdf)
