# ShareGPT
**Type:** Measurement  
**Referenced in:** 23 papers  

## State of the Field

**What it is.** Across the surveyed work, ShareGPT is most commonly described as a dataset of user-shared, real-world conversations with ChatGPT, collected from sharegpt.com. Definitions largely converge on dialog or instruction-response data, though some papers narrow it to authentic multilingual user requests, a wild-query source, or real conversation traces for workload benchmarking. Snippets also describe derived uses such as taking 10,000 instruction-response pairs for supervised fine-tuning, evaluating on another 1,000 instructions, and generating synthetic workloads from its real input and output texts.

**What it is claimed to measure.** Papers use ShareGPT to measure 2 constructs and 3 behavioral indicators. The prevailing usage is instruction-oriented: it is recorded as measuring Instruction following ability and Instruction following, and one paper describes it as a "general instruction tuning set" focused on models' instruction-following ability. Other recorded links report it as measuring Multi-turn dialogue, Text generation, and Robustness, so the measurement claims extend beyond a single construct even though instruction following is the recurrent framing.

**Space of uses.** In use, papers position ShareGPT as a source of prompts, dialogues, and traces for several experimental roles: supervised fine-tuning, instruction-following evaluation, extracting real user requests, generating synthetic workloads, and benchmarking serving performance. The only recorded linked instrument is HelpSteer2, which is related to ShareGPT because most HelpSteer2 prompts are sourced from it. Snippets also place it alongside OpenOrca for supervised fine-tuning, ArenaHard and Numina as other curated prompt sets, and WildGPT in workload mixtures.

## Sources

**[DataMan: Data Manager for Pre-training Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/1abed6ee581b9ceb4e2ddf37822c7fcb-Paper-Conference.pdf)**
> A dataset of user-shared conversations with ChatGPT, used here for instruction fine-tuning and evaluation.

## Relationships

### → ShareGPT
- **Robustness** (constructs) — *measured_by*
  > This section assesses the robustness of CLMTracing against fine-tuning, wherein the model is fine-tuned on two clean datasets, ShareGPT and Evol-Instruct, with the goal of overwriting embedded watermarks. (Section 4.2.2)
  - [CLMTracing: Black-box User-level Watermarking for Code Language Model Tracing](https://aclanthology.org/2025.emnlp-main.1475.pdf)

### Associated with
- **HelpSteer2** (measurements)
  > Most of the prompts (over 95%) used in HelpSteer2 are sourced from ShareGPT [19], a platform where ChatGPT users voluntarily share their conversations.
  - [HelpSteer 2: Open-source dataset for training top-performing reward models](https://proceedings.neurips.cc/paper_files/paper/2024/file/02fd91a387a6a5a5751e81b58a75af90-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Instruction following** (behaviors tasks)
  > “ShareGPT is a dialog dataset collected from sharegpt.com, a website collecting user-shared dialog with ChatGPT. This dataset encompasses a wide range of topics, making it suitable as a general instruction tuning set focusing on the instruction-following ability of models.”
  - [Transferable Post-training via Inverse Value Learning](https://aclanthology.org/2025.naacl-long.227.pdf)
