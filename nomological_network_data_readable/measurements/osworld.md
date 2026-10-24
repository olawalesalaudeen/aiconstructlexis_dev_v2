# OSWorld
**Type:** Measurement  
**Referenced in:** 11 papers  
**Also known as:** OSWORLD  

## State of the Field

**What it is.** Across the surveyed papers, OSWorld is most commonly described as a real computer environment and benchmark, or an interactive OS agent testbed, for evaluating multimodal or virtual agents on open-ended, multi-step computer tasks. Definitions emphasize real web and desktop applications and stepwise interaction with the operating system, where the agent acts, waits for a response, and then proceeds. One definition specifies Ubuntu, Windows, and macOS, 369 tasks, and execution-based evaluation, while a smaller line of work describes it more briefly as a desktop virtual agent benchmark used for trajectory collection and evaluation.

**What it is claimed to measure.** Papers use OSWorld to measure 5 constructs and 1 behavioral indicator, and these claims are spread across several targets rather than converging on a single one. The linked constructs are Generalization, Adaptability, Agency, Commonsense reasoning, and Robustness, and the linked behavioral indicator is Action grounding. Separately, papers describe the benchmark itself as being measured by 2 instruments, Execution-based evaluation and Human baseline.

**Space of uses.** In use, papers commonly position OSWorld as a challenging benchmark or testbed for benchmarking agent approaches, sometimes as an additional evaluation of generalization and sometimes in evaluations framed around adaptability across real-time dynamic OS tasks. One paper tests a model on OSWorld "to further evaluate the generalization capabilities" of the model, while another benchmarks an approach on this "challenging OS agent testbed." Some work uses it alongside AndroidWorld, and one study uses it for trajectory collection as one of four benchmarks.

**Concerns raised.** Papers note that OSWorld tasks are more time-consuming and challenging than those in prior work, based on a human performance study. One study also reports that current agents are not robust to superficial changes on this benchmark, with performance drops of 60% and even 80%.

## Sources

**[OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments](https://proceedings.neurips.cc/paper_files/paper/2024/file/5d413e48f84dc61244b6be550f1cd8f5-Paper-Datasets_and_Benchmarks_Track.pdf) (as "OSWORLD")**
> A scalable, real computer environment and benchmark for evaluating multimodal agents on open-ended computer tasks across Ubuntu, Windows, and macOS, featuring 369 tasks with execution-based evaluation.

**[OS-ATLAS: Foundation Action Model for Generalist GUI Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/0faa4bc5f522076947a030273629d4fe-Paper-Conference.pdf)**
> An interactive OS agent testbed environment where agents must interact with the operating system at each step and wait for responses before proceeding, evaluating multi-step task completion across various applications.

## Relationships

### → OSWorld
- **Generalization** (constructs) — *measured_by*
  > To further evaluate the generalization capabilities of our model, we tested it on OSWorld, a unified computer environment designed for multimodal agents. (Section 4.3)
  - [Aguvis: Unified Pure Vision Agents for Autonomous GUI Interaction](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25ae/xu25ae.pdf)
- **Action grounding** (behaviors tasks) — *measured_by*
  > Extensive evaluation of state-of-the-art LLM/VLM agents on OSWORLD reveals deficiencies in their ability to serve as computer assistants. While humans accomplish 72.4% of the tasks, the best agents achieve <12.2%, struggling with GUI grounding and operational knowledge. (Abstract)
  - [OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments](https://proceedings.neurips.cc/paper_files/paper/2024/file/5d413e48f84dc61244b6be550f1cd8f5-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Commonsense reasoning** (constructs) — *measured_by*
  > It prioritizes a balanced benchmark across eight key applications... highlighting the need for varied operational skills, including commonsense reasoning, software navigation, and precise input control. (Section 3.1)
  - [OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments](https://proceedings.neurips.cc/paper_files/paper/2024/file/5d413e48f84dc61244b6be550f1cd8f5-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Robustness** (constructs) — *measured_by*
  > We find that current agents are not robust to these superficial changes, which lead to performance drops of 60% and even 80%. (Section 5)
  - [OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments](https://proceedings.neurips.cc/paper_files/paper/2024/file/5d413e48f84dc61244b6be550f1cd8f5-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Agency** (constructs) — *measured_by*
  > In this study, we benchmark our approach on the challenging OS agent testbed, OSWorld (Xie et al., 2024). (Section 4.3)
  - [OS-ATLAS: Foundation Action Model for Generalist GUI Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/0faa4bc5f522076947a030273629d4fe-Paper-Conference.pdf)
- **Adaptability** (constructs) — *measured_by*
  > On the OSWorld (Xie et al., 2024b) and AndroidWorld (Rawles et al., 2024) benchmarks, OSCAR consistently surpassed other agents... demonstrating superior adaptability across real-time dynamic OS tasks. (Section 1)
  - [OSCAR: Operating System Control via State-Aware Reasoning and Re-Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/b2077e6d66da612fcb701589efa9ce88-Paper-Conference.pdf)

### Associated with
- **Execution-based evaluation** (measurements)
  > “supporting task setup, interactive learning, and execution-based evaluation of open-ended computer tasks”
  - [OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments](https://proceedings.neurips.cc/paper_files/paper/2024/file/5d413e48f84dc61244b6be550f1cd8f5-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Human baseline** (measurements)
  > The human performance study indicates that task examples from OSWORLD are more time-consuming and challenging compared to those in prior work. (Section 3.2)
  - [OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments](https://proceedings.neurips.cc/paper_files/paper/2024/file/5d413e48f84dc61244b6be550f1cd8f5-Paper-Datasets_and_Benchmarks_Track.pdf)
