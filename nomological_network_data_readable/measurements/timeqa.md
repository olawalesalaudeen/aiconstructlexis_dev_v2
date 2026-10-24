# TimeQA
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** TIMEQA  

## State of the Field

**What it is.** Across the surveyed work, TimeQA is most commonly described as a time-sensitive or temporal question-answering benchmark dataset. Definitions characterize it as derived from natural language and Wikidata, focusing on real-world factual questions about event-time relationships and, more broadly, on time-evolving factual questions grounded in the real world. A smaller description emphasizes its reuse as a source dataset for the context-based task in DATEAUGBENCH.

**What it is claimed to measure.** Papers use TimeQA to measure two constructs and no behavioral indicators. The prevailing usage is temporal reasoning: papers describe it as a benchmark used for temporal reasoning performance and as containing question-answer pairs requiring temporal reasoning. Less often, papers use it to measure factual knowledge, specifically through complex queries that require time-sensitive knowledge, so the measurement claims are concentrated on temporal reasoning rather than spread broadly across constructs.

**Space of uses.** In use, papers often place TimeQA alongside other temporal QA benchmarks, including TempReason, TGQA, MenatQA, and TimeBench, either in multi-benchmark temporal reasoning evaluations or as source material for DATEAUGBENCH. Beyond these pairings, no other measurement instrument is linked to it.

## Sources

**[UnSeenTimeQA: Time-Sensitive Question-Answering Beyond LLMs' Memorization](https://aclanthology.org/2025.acl-long.94.pdf)**
> A time-sensitive question-answering benchmark derived from natural language and Wikidata, focusing on real-world factual questions about event-time relationships.

**[Date Fragments: A Hidden Bottleneck of Tokenization for Temporal Reasoning](https://aclanthology.org/2025.emnlp-main.159.pdf) (as "TIMEQA")**
> A benchmark dataset for temporal question answering, used as a source for the context-based task in DATEAUGBENCH.

## Relationships

### → TimeQA
- **Temporal reasoning** (constructs) — *measured_by*
  > We demonstrate that fine-tuning and test-time scaling using TISER achieves state-of-the-art temporal reasoning performance on multiple benchmarks, including TGQA (Xiong et al., 2024), TempReason (Tan et al., 2023), and TimeQA (Chen et al., 2021) (Section 1).
  - [Learning to Reason Over Time: Timeline Self-Reflection for Improved Temporal Reasoning in Language Models](https://aclanthology.org/2025.acl-long.1358.pdf)
- **Factual knowledge** (constructs) — *measured_by*
  > We consider TimeQA (Chen et al., 2021) since it contains complex queries that require challenging time-sensitive knowledge. (Section 3.1)
  - [Take a Step Back: Evoking Reasoning via Abstraction in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/592da1445a51e54a3987958b5831948f-Paper-Conference.pdf)
