# LoCoMo
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** LOCOMO  

## State of the Field

**What it is.** Across the papers, LoCoMo is most commonly treated as a long-term conversation benchmark for assessing long-term conversational memory over very long dialogue histories. Definitions describe it as including 50 long-term chat histories with questions, and one paper also calls it the longest conversation dataset to date, while another quoted description instead refers to 30 multi-session dialogues between two speakers. Papers also vary in how they describe its question categories: some list single-hop, multi-hop, temporal, commonsense, world knowledge, and adversarial reasoning, while another lists single-hop, multi-hop, temporal, and open-domain.

**What it is claimed to measure.** In the recorded relationships, papers use LoCoMo to measure one behavioral indicator, Question answering, and it is not linked to any constructs. The measurement claims converge on that single target: papers report QA performance on LoCoMo and describe it as a dataset for evaluating question answering.

**Space of uses.** Papers commonly position LoCoMo as one of the long-term conversation benchmarks and mention it alongside Long-MT-Bench+, including in performance comparison tables. No measurement instrument is linked to it, and the papers present it directly as a benchmark for long-term conversational memory and QA performance.

## Sources

**[LongMemEval: Benchmarking Chat Assistants on Long-Term Interactive Memory](https://proceedings.iclr.cc/paper_files/paper/2025/file/d813d324dbf0598bbdc9c8e79740ed01-Paper-Conference.pdf)**
> A benchmark for long-term conversational memory that includes 50 long-term chat histories and questions testing various reasoning types like single-hop, multi-hop, and temporal reasoning.

**[SeCom: On Memory Construction and Retrieval for Personalized Conversational Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/e56f394bbd4f0ec81393d767caa5a31b-Paper-Conference.pdf) (as "LOCOMO")**
> A long-term conversation benchmark designed to assess conversational memory over very long dialogue histories.

## Relationships

### → LoCoMo
- **Question answering** (behaviors tasks) — *measured_by*
  > Table 1: Performance comparison on LOCOMO and Long-MT-Bench+. (The table shows QA Performance metrics for these datasets.)
  - [SeCom: On Memory Construction and Retrieval for Personalized Conversational Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/e56f394bbd4f0ec81393d767caa5a31b-Paper-Conference.pdf)
