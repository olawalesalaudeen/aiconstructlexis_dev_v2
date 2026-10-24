# VoiceBench
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Across the cited papers, VoiceBench is presented as a benchmark dataset for evaluating speech language models on semantic understanding tasks without relying on auxiliary LLMs for scoring. Definitions describe it through multiple subsets, including AdvBench, IFEval, OBQA, MMSU, and sd-qa, and one study reports adopting those five subsets and, after filtering, obtaining 4,947 test samples. A smaller descriptive thread characterizes parts of VoiceBench as speech versions of existing text benchmarks and spoken-query datasets.

**What it is claimed to measure.** Papers link VoiceBench to 3 constructs and 1 behavioral indicator, and the recorded uses cover several targets rather than a single one. It is used to measure Modality gap, with one paper defining the gap through drops in benchmark scores between text and speech inputs; World knowledge, where it is described as a spoken counterpart to text benchmarks across diverse factual domains; Safety, where spoken queries are used to evaluate whether models reject them; and Instruction following, where papers report that a text-based instruction-following benchmark is synthesized into speech.

**Space of uses.** No measurement instrument is linked to VoiceBench. Papers use it as an evaluation benchmark by selecting subsets from it for test-time assessment, and they also position it relative to existing text-oriented benchmarks as a spoken counterpart or speech-transformed version. One reported VoiceBench comparison highlights a score contrast between a pipeline system and an LSLM counterpart, 79.06 versus 37.51 overall.

## Sources

**[Understanding the Modality Gap: An Empirical Study on the Speech-Text Alignment Mechanism of Large Speech Language Models](https://aclanthology.org/2025.emnlp-main.262.pdf)**
> Benchmark dataset for evaluating speech language models, comprising multiple subsets including AdvBench, IFEval, OBQA, MMSU, and sd-qa, used to assess performance on semantic understanding tasks without reliance on auxiliary LLMs for scoring.

## Relationships

### → VoiceBench
- **Modality gap** (constructs) — *measured_by*
  > We quantify the modality gap as the drop in benchmark scores between text and speech inputs... For evaluation, we adopt five subsets of the VoiceBench dataset (Chen et al., 2024)—AdvBench, IFEval, OBQA, MMSU, and sd-qa (Sections 4.3 & 3.2)
  - [Understanding the Modality Gap: An Empirical Study on the Speech-Text Alignment Mechanism of Large Speech Language Models](https://aclanthology.org/2025.emnlp-main.262.pdf)
- **World knowledge** (constructs) — *measured_by*
  > VoxEval (Cui et al., 2025) and VoiceBench serve as spoken counterparts to MMLU (Hendrycks et al., 2021) and MMLU-Pro (Wang et al., 2024), testing models across diverse factual domains like social science and humanities.
  - [Towards Holistic Evaluation of Large Audio-Language Models: A Comprehensive Survey](https://aclanthology.org/2025.emnlp-main.514.pdf)
- **Instruction following** (behaviors tasks) — *measured_by*
  > ...VoiceBench (Chen et al., 2024c) synthesizes IFEval (Zhou et al., 2023a), a text-based LLM instruction-following benchmark, into speech...
  - [Towards Holistic Evaluation of Large Audio-Language Models: A Comprehensive Survey](https://aclanthology.org/2025.emnlp-main.514.pdf)
- **Safety** (constructs) — *measured_by*
  > For example, VoiceBench (Chen et al., 2024c) and Roh et al. (2025) synthesize datasets like AdvBench (Zou et al., 2023) into spoken queries, evaluating LALMs on their ability to reject them.
  - [Towards Holistic Evaluation of Large Audio-Language Models: A Comprehensive Survey](https://aclanthology.org/2025.emnlp-main.514.pdf)
