# ActivityNet-QA
**Type:** Measurement  
**Referenced in:** 33 papers  

## State of the Field

**What it is.** Across papers, the prevailing usage is as a video question-answering benchmark or dataset built on ActivityNet videos. Descriptions repeatedly frame it as open-ended and aimed at understanding complex web videos, longer activity videos, or complex human activities, and some papers further emphasize complex temporal or event understanding. Some authors specify that it is constructed from the ActivityNet action recognition dataset, and a smaller line of work positions it for zero-shot video understanding evaluation.

**What it is claimed to measure.** Papers link ActivityNet-QA to 3 constructs and 2 behavioral indicators. The dominant claim is that it measures Video question answering, with many papers using it as an open-ended or general VideoQA benchmark, and a smaller but recurring framing uses it to measure Video understanding. Only a few papers use it to measure Visual question answering, Long video understanding, or Spatiotemporal reasoning, and one paper explicitly says it is "designed to assess the capabilities of VideoQA models in long-term spatiotemporal reasoning."

**Space of uses.** No paper links it to another measurement instrument. Even so, papers usually use it inside multi-benchmark evaluation suites, most often alongside MSVD-QA and MSRVTT-QA, often with TGIF-QA, and sometimes with NextQA or Video-MME. Across these uses it is commonly treated as one component of broader benchmark suites for comparing models.

## Sources

**[Aligned Better, Listen Better for Audio-Visual Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/0c79d6ed1788653643a1ac67b6ea32a7-Paper-Conference.pdf)**
> A video question-answering benchmark used for zero-shot video understanding evaluation.

## Relationships

### → ActivityNet-QA
- **Video question answering** (behaviors tasks) — *measured_by*
  > Additionally, we evaluate zero-shot performance on open-ended video question-answering benchmarks such as MSVD-QA [68], ActivityNet-QA [69], MSRVTT-QA [70]... (Section 4.1)
  - [Dense Connector for MLLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/3a10c46572628d58cb44fb705f25cbbf-Paper-Conference.pdf)
- **Video understanding** (constructs) — *measured_by*
  > By scaling up the LLM to 34B, our model demonstrates a marked improvement in video understanding capabilities, achieving state-of-the-art performance on video evaluation benchmarks with accuracies of 77.4% on MSVD [68], 62.1% on MSR-VTT [70], and 55.8% on ActivityNet [69]. (Section 4.3)
  - [Dense Connector for MLLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/3a10c46572628d58cb44fb705f25cbbf-Paper-Conference.pdf)
- **Spatiotemporal reasoning** (constructs) — *measured_by*
  > ActivityNet-QA (Yu et al., 2019) encompasses human-annotated QA pairs on 5,800 videos derived from the ActivityNet (Caba Heilbron et al., 2015) dataset. This benchmark is designed to assess the capabilities of VideoQA models in long-term spatiotemporal reasoning.
  - [Streaming Video Question-Answering with In-context Video KV-Cache Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/67a9b444cbcd647572c88194619f72d5-Paper-Conference.pdf)
