# AndroidControl
**Type:** Measurement  
**Referenced in:** 7 papers  

## State of the Field

**What it is.** Definitions mostly treat AndroidControl as a benchmark for evaluating mobile agent tasks on Android platforms. One description is more specific, calling it an offline GUI benchmark and an in-distribution offline dataset, while another highlights two variants: AndroidControl-Low, where both low-level and high-level instructions are provided, and AndroidControl-High, where only high-level instructions are given. One paper also describes it as a UI control dataset with 14,548 unique tasks over 833 Android apps.

**What it is claimed to measure.** Papers use AndroidControl to measure three constructs, Agency, Generalization, and Out-of-distribution generalization, and no behavioral indicators are linked to it. These measurement claims are spread across those constructs rather than centered on one: one paper presents it as a mobile-agent benchmark, another frames evaluation on it as a test of out-of-distribution performance because only 20 of the 833 apps had been encountered during data synthesis, and another says its task and app coverage allows analysis of performance in and out of the training domain.

**Space of uses.** When papers place AndroidControl within broader evaluation suites, they use it alongside other agent benchmarks rather than in isolation. One study pairs it with GUI-Odyssey for mobile agents, while another evaluates on AndroidControl together with Android World and Multimodal-Mind2Web, positioning AndroidControl as one of the in-distribution offline datasets in contrast to an out-of-distribution online dataset.

## Sources

**[OS-ATLAS: Foundation Action Model for Generalist GUI Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/0faa4bc5f522076947a030273629d4fe-Paper-Conference.pdf)**
> A benchmark for evaluating mobile agent tasks on Android platforms, with variants for low-level and high-level instruction scenarios.

## Relationships

### → AndroidControl
- **Out-of-distribution generalization** (constructs) — *measured_by*
  > ANDROIDCONTROL is the most diverse UI control dataset to date, including 14,548 unique tasks over 833 Android apps, thus allowing us to conduct in-depth analysis of the model performance in and out of the domain of the training data. (Abstract)
  - [On the Effects of Data Scale on UI Control Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/a79f3ef3b445fd4659f44648f7ea8ffd-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Agency** (constructs) — *measured_by*
  > “We examine five distinct agent benchmarks across three different platforms: AndroidControl (Li et al., 2024) and GUI-Odyssey (Lu et al., 2024a) for mobile agents”
  - [OS-ATLAS: Foundation Action Model for Generalist GUI Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/0faa4bc5f522076947a030273629d4fe-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > Out of the 833 apps covered by AndroidControl, only 20 have been directly encountered during data synthesis, making this evaluation a test of OS-Genesis ’s out-of-distribution (OOD) performance. (Section 4.3)
  - [OS-Genesis: Automating GUI Agent Trajectory Construction via Reverse Task Synthesis](https://aclanthology.org/2025.acl-long.277.pdf)
