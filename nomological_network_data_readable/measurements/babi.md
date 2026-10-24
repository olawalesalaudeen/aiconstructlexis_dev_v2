# bAbI
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Across the papers, the prevailing usage is to treat bAbI as a reasoning benchmark. One description presents it as a benchmark of 20 synthetic tasks designed to evaluate basic aspects of reasoning, while another uses it more narrowly for deductive reasoning questions requiring inference from a short passage; a smaller line of description cites it as a set of prerequisite toy question-answering tasks and an example of a language-based reasoning benchmark.

**What it is claimed to measure.** Across the papers, bAbI is used to measure three constructs and one behavioral indicator. The most common claim is that it measures Logical reasoning, and smaller lines of work also report it as measuring Spatial reasoning and Temporal reasoning; one paper further links it to the behavioral indicator Coreference resolution, describing the benchmark as assessing "spatial and temporal reasoning, deduction, and coreference resolution" ("BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack").

**Space of uses.** In use, papers link bAbI to one other measurement instrument, BABILong, and characterize that instrument as extending bAbI. Outside that relation, authors employ bAbI as a deductive reasoning test based on short passages and cite it as an example when discussing language-based reasoning tasks.

## Sources

**[Improving Reasoning Performance in Large Language Models via Representation Engineering](https://proceedings.iclr.cc/paper_files/paper/2025/file/6e73c39cc428c7d264d9820319f31e79-Paper-Conference.pdf)**
> The bAbI reasoning benchmark, used here for deductive reasoning questions requiring inference from a short passage.

## Relationships

### → bAbI
- **Logical reasoning** (constructs) — *measured_by*
  > "the reasoning skills they assess, including spatial and temporal reasoning, deduction, and coreference resolution"
  - [BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Spatial reasoning** (constructs) — *measured_by*
  > The tasks in bAbI vary in the number of facts, question complexity, and the reasoning skills they assess, including spatial and temporal reasoning, deduction, and coreference resolution.
  - [BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Temporal reasoning** (constructs) — *measured_by*
  > "the reasoning skills they assess, including spatial and temporal reasoning, deduction, and coreference resolution"
  - [BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Coreference resolution** (behaviors tasks) — *measured_by*
  > The tasks in bAbI vary in the number of facts, question complexity, and the reasoning skills they assess, including spatial and temporal reasoning, deduction, and coreference resolution.
  - [BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf)

### Associated with
- **BABILong** (measurements)
  > In this work we extend the bAbI benchmark (Weston et al., 2016), which consists of 20 tasks designed to evaluate basic aspects of reasoning.
  - [BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf)
