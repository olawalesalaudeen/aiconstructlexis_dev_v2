# MiniWoB++
**Type:** Measurement  
**Referenced in:** 8 papers  
**Also known as:** MiniWob  

## State of the Field

**What it is.** Most definitions treat MiniWoB++ as a simulated or interactive web benchmark for computer control or web navigation, with diverse tasks that simulate human-computer interaction through natural-language instructions and browser actions. Several descriptions emphasize simplified or minimalist web pages and low-level tasks, while others specify 56 simulated tasks, 125 minimalist web interfaces, or keyboard and mouse interaction; one paper also calls it "a standard task suite." A smaller line of work, using the name MiniWob, describes it differently, as 2000 open-ended tasks from 137 real web environments and as a multimodal benchmark requiring multi-step actions.

**What it is claimed to measure.** Papers use it to measure 1 construct and 3 behavioral indicators. The named targets are GUI automation, task completion, and web navigation, plus the construct adaptability, so the measurement claims are spread across several targets rather than centered on a single construct. In the relationship language, one paper reports task completion through success rates on MiniWoB++, another uses MiniWob to validate adaptability, another treats it as measuring GUI automation through tasks with high-level instructions and action trajectories, and another frames it as measuring web navigation in an interactive web benchmark with built-in reward functions.

**Space of uses.** No measurement instrument is linked to it. Papers position it mainly as a standard benchmark or task suite for agent evaluation, for example by running 100 evaluation episodes per task, reporting success rates, or using built-in reward functions and outcome-based programmatic checkers after execution. Papers also report it alongside ALFWorld, and one comparison groups its outcome-based evaluation with WebArena.

## Sources

**[A Real-World WebAgent with Planning, Long Context Understanding, and Program Synthesis](https://proceedings.iclr.cc/paper_files/paper/2024/file/e91bf7dfba0477554994c6d64833e9d8-Paper-Conference.pdf)**
> A standard benchmark suite for computer control agents, integrating diverse tasks that simulate real-world human-computer interactions in a simplified web environment.

**[Grounding Multimodal Large Language Model in GUI World](https://proceedings.iclr.cc/paper_files/paper/2025/file/31fc85f7461ce71eadf27fb7281973bd-Paper-Conference.pdf) (as "MiniWob")**
> A web navigation benchmark of open-ended tasks in real web environments that evaluates agents on instruction-following and action execution.

## Relationships

### → MiniWoB++
- **Web navigation** (behaviors tasks) — *measured_by*
  > MiniWoB++ (Liu et al., 2018) is an interactive web benchmark, with built-in reward functions. (§4.3)
  - [OpenHands: An Open Platform for AI Software Developers as Generalist Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/a4b6ad6b48850c0c331d1259fc66a69c-Paper-Conference.pdf)
- **Task completion** (behaviors tasks) — *measured_by*
  > These manuals allow LLM agents to achieve remarkable success rates of 97.4% with GPT-4-turbo and 86.2% with GPT-3.5-turbo on ALFWorld, 98.3% with GPT-4-turbo and 92.7% with GPT-3.5-turbo on MiniWoB++. (Introduction)
  - [AutoManual: Constructing Instruction Manuals by LLM Agents via Interactive Environmental Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/0142921fad7ef9192bd87229cdafa9d4-Paper-Conference.pdf)
- **Adaptability** (constructs) — *measured_by*
  > Our approach demonstrates superior performance in task accuracy and adaptability, as validated by benchmarks such as ScreenSpot, MiniWob, AITW, and Mind2Web.
  - [Grounding Multimodal Large Language Model in GUI World](https://proceedings.iclr.cc/paper_files/paper/2025/file/31fc85f7461ce71eadf27fb7281973bd-Paper-Conference.pdf)
