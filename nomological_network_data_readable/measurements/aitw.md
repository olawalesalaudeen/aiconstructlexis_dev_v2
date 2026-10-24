# AitW
**Type:** Measurement  
**Referenced in:** 8 papers  
**Also known as:** Android-in-the-Wild (AitW), AITW, Android-in-the-Wild  

## State of the Field

**What it is.** Most papers treat AitW as a large-scale dataset or benchmark for Android device control, used to evaluate mobile or GUI agents. Definitions also describe it as containing diverse natural language instructions and operation trajectories, with subsets such as General and Web Shopping, and some authors add that it provides an evaluation environment for real-world tasks. A smaller line of work presents it more specifically as a mobile navigation benchmark, and one paper describes it as an open-source mobile control dataset that lacks UI trees.

**What it is claimed to measure.** Across the surveyed work, claims about what AitW measures are concentrated on a small set of outcomes: papers link it to 2 behavioral indicators and 1 construct. The prevailing usage is to use it to measure GUI automation, papers also use it to measure task completion, and a smaller line of work reports that it measures Adaptability.

**Space of uses.** Papers commonly position AitW as an evaluation benchmark for Android, mobile, or GUI control agents. Some also use it as a training or fine-tuning source and then evaluate on test subsets derived from AitW, while others use it as a comparison point or evaluate alongside benchmarks such as AndroidControl and AndroidWorld. No paper links AitW to another measurement instrument.

**Concerns raised.** One paper raises a practical limitation in its setup: Android-in-the-Wild is described as lacking UI trees, so OCR extraction is required.

## Sources

**[DigiRL: Training In-The-Wild Device-Control Agents with Autonomous Reinforcement Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/1704ddd0bb89f159dfe609b32c889995-Paper-Conference.pdf) (as "Android-in-the-Wild (AitW)")**
> A large-scale dataset for evaluating Android device control agents, featuring diverse natural language instructions across subsets like 'General' and 'Web Shopping'.

**[On the Effects of Data Scale on UI Control Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/a79f3ef3b445fd4659f44648f7ea8ffd-Paper-Datasets_and_Benchmarks_Track.pdf)**
> Android in the Wild, a large-scale dataset for Android device control, used as a point of comparison.

**[Grounding Multimodal Large Language Model in GUI World](https://proceedings.iclr.cc/paper_files/paper/2025/file/31fc85f7461ce71eadf27fb7281973bd-Paper-Conference.pdf) (as "AITW")**
> Android In The Wild, a mobile navigation benchmark with instructions and operation trajectories for evaluating mobile GUI agents.

**[Lightweight Neural App Control](https://proceedings.iclr.cc/paper_files/paper/2025/file/b81266057eb3d96469940d1860a41ad2-Paper-Conference.pdf) (as "Android-in-the-Wild")**
> An open-source dataset for mobile control tasks lacking UI trees, requiring OCR extraction.

## Relationships

### → AitW
- **GUI automation** (behaviors tasks) — *measured_by*
  > Android In The Wild (AITW) (Rawles et al., 2023) dataset is a mobile navigation benchmark including 30K instructions and 715K corresponding operation trajectories.
  - [Grounding Multimodal Large Language Model in GUI World](https://proceedings.iclr.cc/paper_files/paper/2025/file/31fc85f7461ce71eadf27fb7281973bd-Paper-Conference.pdf)
- **Task completion** (behaviors tasks) — *measured_by*
  > We demonstrate the effectiveness of DigiRL using the Android-in-the-Wild (AitW) dataset, where our 1.3B VLM trained with RL achieves a 49.5% absolute improvement – from 17.7 to 67.2% success rate
  - [DigiRL: Training In-The-Wild Device-Control Agents with Autonomous Reinforcement Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/1704ddd0bb89f159dfe609b32c889995-Paper-Conference.pdf)
- **Adaptability** (constructs) — *measured_by*
  > Our approach demonstrates superior performance in task accuracy and adaptability, as validated by benchmarks such as ScreenSpot, MiniWob, AITW, and Mind2Web.
  - [Grounding Multimodal Large Language Model in GUI World](https://proceedings.iclr.cc/paper_files/paper/2025/file/31fc85f7461ce71eadf27fb7281973bd-Paper-Conference.pdf)
