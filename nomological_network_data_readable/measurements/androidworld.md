# AndroidWorld
**Type:** Measurement  
**Referenced in:** 12 papers  
**Also known as:** ANDROIDWORLD, Android World  

## State of the Field

**What it is.** Across the surveyed work, the dominant framing is of an online or dynamic Android benchmark for mobile or autonomous agents, usually running in Android emulators or a virtual Android environment. Definitions mostly converge on a suite of 116 tasks across 20 real-world apps, with reward signals or automated evaluation based on final device states, and with task-specific initialization, success-checking, and tear-down logic; one paper also describes a Pixel 6 phone simulator. A smaller line of work treats it more broadly as an Android virtual agent benchmark used for both trajectory collection and evaluation.

**What it is claimed to measure.** Papers link it to three constructs and no behavioral indicators. The most common claim is that it measures adaptability: papers say it enables finer-grained analyses of agent adaptability and use results on AndroidWorld to report adaptability across real-time dynamic OS tasks. Smaller uses report it as measuring robustness, through performance across different random seeds and task parameters, and chain-of-thought reasoning, in work that describes AndroidWorld as an online environment requiring multi-step reasoning. Overall, the measurement claims are spread across several constructs rather than converging on only one, though adaptability is the prevailing usage.

**Space of uses.** Papers commonly use it as an evaluation benchmark for mobile, GUI, and virtual agents, often reporting task success rate from final device states. It appears both as a headline benchmark and as one benchmark among others: papers use it alongside OSWorld, WebArena, and AitW, and one paper uses it to collect agent action trajectories in addition to evaluation.

## Sources

**[AndroidWorld: A Dynamic Benchmarking Environment for Autonomous Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/01a83bc2f2732a58e6aa731e659e7101-Paper-Conference.pdf) (as "ANDROIDWORLD")**
> A dynamic Android benchmark with 116 programmatic tasks across 20 real-world apps, using reproducible initialization, success-checking, and teardown logic to assess autonomous agents.

**[Navigating the Digital World as Humans Do: Universal Visual Grounding for GUI Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/4ca0e369689dadb25a5345ba9755ad6f-Paper-Conference.pdf)**
> An online mobile agent benchmark running in Android emulators that evaluates task success rate based on the final states of the device.

**[Boosting Virtual Agent Learning and Reasoning: A Step-Wise, Multi-Dimensional, and Generalist Reward Model with Benchmark](https://raw.githubusercontent.com/mlresearch/v267/main/assets/miao25b/miao25b.pdf) (as "Android World")**
> An Android virtual agent benchmark used for trajectory collection and evaluation.

## Relationships

### → AndroidWorld
- **Adaptability** (constructs) — *measured_by*
  > On the OSWorld (Xie et al., 2024b) and AndroidWorld (Rawles et al., 2024) benchmarks, OSCAR consistently surpassed other agents... demonstrating superior adaptability across real-time dynamic OS tasks. (Section 1)
  - [OSCAR: Operating System Control via State-Aware Reasoning and Re-Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/b2077e6d66da612fcb701589efa9ce88-Paper-Conference.pdf)
- **Robustness** (constructs) — *measured_by*
  > To understand agent robustness, we analyze M3A’s performance across different random seeds, which generate different task parameters... (Section 5)
  - [AndroidWorld: A Dynamic Benchmarking Environment for Autonomous Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/01a83bc2f2732a58e6aa731e659e7101-Paper-Conference.pdf)
- **Chain-of-thought reasoning** (constructs) — *measured_by*
  > We evaluate RAG-GUI on AndroidWorld, an online environment requiring multi-step reasoning that mirrors real-world scenarios. (Section 4.2)
  - [Retrieval-augmented GUI Agents with Generative Guidelines](https://aclanthology.org/2025.emnlp-main.902.pdf)
