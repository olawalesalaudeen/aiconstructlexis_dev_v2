# NeedleBench
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** Needlebench  

## State of the Field

**What it is.** Across the surveyed papers, the prevailing usage treats NeedleBench as a long-context evaluation, described either as a benchmark for models' ability to comprehend and retrieve information from long input sequences or, in closely related terms, as "a suite of recall-intensive tasks" for long-context retrieval and information finding (Rodimus*: Breaking the Accuracy-Efficiency Trade-Off with Efficient Attentions). One paper also places it among synthetic benchmarks, and another description specifies three subtasks: Single-Needle Retrieval, Multi-Needle Retrieval, and Multi-Needle Reasoning.

**What it is claimed to measure.** Papers link it to one construct and one behavioral indicator. The construct link treats NeedleBench as measuring Long-context understanding, while the behavioral indicator link treats it as measuring Synthetic recall; across both framings, the recurring emphasis is retrieval, recall, and reasoning in complex or long contexts.

**Space of uses.** No other measurement instrument is linked to it. In use, papers discuss it alongside Needle-in-a-Haystack and Ruler as benchmarks focused on understanding long-context input sequences, and alongside MQAR when assessing recall or retrieval capabilities; one paper also reports model comparisons on NeedleBench and presents it as a recall-intensive evaluation.

## Sources

**[LongGenBench: Benchmarking Long-Form Generation in Long Context LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/141304a37d59ec7f116f3535f1b74bde-Paper-Conference.pdf) (as "Needlebench")**
> A benchmark that evaluates long-context models on their ability to comprehend and retrieve information from long input sequences.

**[Rodimus*: Breaking the Accuracy-Efficiency Trade-Off with Efficient Attentions](https://proceedings.iclr.cc/paper_files/paper/2025/file/59c08508131c3a50991f42dae7f69e1c-Paper-Conference.pdf)**
> A suite of recall-intensive tasks designed to test long-context retrieval and information finding in large language models.

## Relationships

### → NeedleBench
- **Synthetic recall** (behaviors tasks) — *measured_by*
  > NeedleBench (Li et al., 2024a): Tests retrieval and reasoning in complex contexts through three subtasks: Single-Needle Retrieval, Multi-Needle Retrieval, and Multi-Needle Reasoning.
  - [CAKE: Cascading and Adaptive KV Cache Eviction with Layer Preferences](https://proceedings.iclr.cc/paper_files/paper/2025/file/dfae940651f3e690a12e19c874edad7c-Paper-Conference.pdf)
