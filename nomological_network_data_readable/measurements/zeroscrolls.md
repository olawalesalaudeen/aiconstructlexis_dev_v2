# ZeroSCROLLS
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Across the surveyed papers, the prevailing description is of a benchmark for LLMs, or a zero-shot benchmark for long text understanding, built around ten diverse natural language tasks that require understanding long input contexts. Definitions commonly mention summarization and question answering, with some also naming sentiment classification or information aggregation, and one paper describes it as related to the Scrolls benchmark. Papers describe its length range differently: one definition gives sequence lengths from 3k to 10k, while another describes Scrolls and ZeroSCROLLS together as QA, classification, and summarization tasks with higher average lengths from 1.7k to 49.3k. A smaller line of work treats it as a leaderboard, using its test set because the organizers had prepared baseline scores.

**What it is claimed to measure.** Papers use it to measure two constructs and three behavioral indicators. At the construct level, it is reported as measuring long-context reasoning and long-context understanding; at the task level, papers use it for question answering, text summarization, and information synthesis. The measurement claims therefore span both broad long-context constructs and specific task categories, rather than centering on only one named target.

**Space of uses.** Papers use it directly for evaluation on long-context tasks, for example to benchmark accelerated prompt processing, to compare zero-shot baseline models using leaderboard scores, and to evaluate selected subsets of tasks rather than the full suite. One paper draws on the leaderboard test set because the organizers had prepared scores for baseline models, and another chooses seven tasks spanning four categories, including document summarization, question answering, and information aggregation. No other measurement instrument is linked to it.

## Sources

**[IceFormer: Accelerated Inference with Long-Sequence Transformers on CPUs](https://proceedings.iclr.cc/paper_files/paper/2024/file/4059971112ab22fc7b6aed520aaca6b2-Paper-Conference.pdf)**
> Benchmark for large language models that evaluates long-context understanding across ten diverse natural language tasks including summarization, question answering, and sentiment classification with sequence lengths from 3k to 10k.

## Relationships

### → ZeroSCROLLS
- **Text summarization** (behaviors tasks) — *measured_by*
  > "ZeroSCROLLS benchmark ... contains ten diverse natural language tasks that require understanding long input contexts, including summarization, question answering"
  - [IceFormer: Accelerated Inference with Long-Sequence Transformers on CPUs](https://proceedings.iclr.cc/paper_files/paper/2024/file/4059971112ab22fc7b6aed520aaca6b2-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > "ZeroSCROLLS benchmark ... contains ten diverse natural language tasks that require understanding long input contexts, including summarization, question answering"
  - [IceFormer: Accelerated Inference with Long-Sequence Transformers on CPUs](https://proceedings.iclr.cc/paper_files/paper/2024/file/4059971112ab22fc7b6aed520aaca6b2-Paper-Conference.pdf)
- **Long-context understanding** (constructs) — *measured_by*
  > the ZeroSCROLLS benchmark (Shaham et al., 2023) which is specifically designed for LLMs and contains ten diverse natural language tasks that require understanding long input contexts (Section 5.3).
  - [IceFormer: Accelerated Inference with Long-Sequence Transformers on CPUs](https://proceedings.iclr.cc/paper_files/paper/2024/file/4059971112ab22fc7b6aed520aaca6b2-Paper-Conference.pdf)
- **Long-context reasoning** (constructs) — *measured_by*
  > To comprehensively evaluate the long-context reasoning abilities of LLMs, we choose seven tasks from ZeroSCROLLS [34]
  - [Found in the Middle: How Language Models Use Long Contexts Better via Plug-and-Play Positional Encoding](https://proceedings.neurips.cc/paper_files/paper/2024/file/6ffdbbe354893979367f93e2121e37dd-Paper-Conference.pdf)
- **Information synthesis** (behaviors tasks) — *measured_by*
  > "we choose seven tasks from ZeroSCROLLS [34], spanning all four task categories: ④ Information Aggregation (BookSumSort)"
  - [Found in the Middle: How Language Models Use Long Contexts Better via Plug-and-Play Positional Encoding](https://proceedings.neurips.cc/paper_files/paper/2024/file/6ffdbbe354893979367f93e2121e37dd-Paper-Conference.pdf)
