# WildGuardMix
**Type:** Measurement  
**Referenced in:** 9 papers  
**Also known as:** WildGuardMix Test Response, WildGuardTest  

## State of the Field

**What it is.** Across the surveyed work, the dominant framing treats WildGuardMix as a benchmark dataset for safety guard models, especially for instruction-response pair classification and response classification for content safety. Papers also refer to WildGuardMix Test Response and WildGuardTest: the former is described as a public benchmark for response classification, while the latter is presented as an evaluation dataset or prompt safety benchmark. Definitions of WildGuardTest differ, with one paper describing 1725 prompts, 863 harmful persuasion and 862 safe, and another describing 960 vanilla and 796 adversarial prompts. A smaller line of work instead uses WildGuardMix as a preference dataset for synthesized judge training data, or as a dataset containing a broad spectrum of jailbroken prompts and responses.

**What it is claimed to measure.** Papers link WildGuardMix to three behavioral indicators and no constructs. The reported measurement use is spread across Content moderation, Harmful content detection, and Response harmfulness classification, rather than centered on a linked construct. In these uses, papers present it as evaluating safety guard or content safety classification performance, including harmfulness F1 scores on WILDGUARDTEST.

**Space of uses.** Papers use WildGuardMix in both training and evaluation. They place it alongside other safety benchmarks such as OpenAI Moderation, ToxicChat, HarmBench, BeaverTails Test, and SafeRLHF Test, and one paper explicitly uses its train split for training and its test split for evaluation. Smaller usages treat it as a source dataset for synthesized judge training data, or as harmful data for training defensive models.

## Sources

**[On Calibration of LLM-based Guard Models for Reliable Content Moderation](https://proceedings.iclr.cc/paper_files/paper/2025/file/a99f732df9b668284b449da0214a3286-Paper-Conference.pdf) (as "WildGuardMix Test Response")**
> A public benchmark dataset used to evaluate the performance of response classification for content safety.

**[HarmAug: Effective Data Augmentation for Knowledge Distillation of Safety Guard Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ac2d4db1615bf3736f44a1b4889e666b-Paper-Conference.pdf)**
> A benchmark dataset used for both training and testing safety guard models on the task of instruction-response pair classification.

**[Beyond Mere Token Analysis: A Hypergraph Metric Space Framework for Defending Against Socially Engineered LLM Attacks](https://proceedings.iclr.cc/paper_files/paper/2025/file/18699b47bb4abf5f92b0b73266b3ffc8-Paper-Conference.pdf) (as "WildGuardTest")**
> An evaluation dataset consisting of 1725 prompts, with 863 harmful persuasion prompts and 862 safe prompts.

## Relationships

### → WildGuardMix
- **Response harmfulness classification** (behaviors tasks) — *measured_by*
  > For the response classification, we utilize datasets containing BeaverTails Test (Ji et al., 2024), SafeRLHF Test (Dai et al., 2023), Harmbench Response (Mazeika et al., 2024), and WildGuardMix Test Response (Han et al., 2024).
  - [On Calibration of LLM-based Guard Models for Reliable Content Moderation](https://proceedings.iclr.cc/paper_files/paper/2025/file/a99f732df9b668284b449da0214a3286-Paper-Conference.pdf)
- **Harmful content detection** (behaviors tasks) — *measured_by*
  > We evaluate the safety guard models on four public benchmark datasets: OpenAI Moderation (OAI; Markov et al., 2023), ToxicChat (Lin et al., 2023), HarmBench (Mazeika et al., 2024), and the test split of WildGuardMix.
  - [HarmAug: Effective Data Augmentation for Knowledge Distillation of Safety Guard Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ac2d4db1615bf3736f44a1b4889e666b-Paper-Conference.pdf)
- **Content moderation** (behaviors tasks) — *measured_by*
  > Additionally, it performs on par with WILDGUARD (Han et al., 2024) in terms of average harmfulness F1 scores across WILDGUARDTEST (Han et al., 2024), XSTest (Röttger et al., 2023; Han et al., 2024), and the OpenAI Moderation Dataset (Markov et al., 2023). (Section 5)
  - [AEGIS2.0: A Diverse AI Safety Dataset and Risks Taxonomy for Alignment of LLM Guardrails](https://aclanthology.org/2025.naacl-long.306.pdf)
