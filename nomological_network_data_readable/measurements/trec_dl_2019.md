# TREC-DL 2019
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** TREC-DL19, TREC-DL'19, TREC-DL2019, TREC DL 2019  

## State of the Field

**What it is.** Across the papers, the prevailing usage treats TREC-DL 2019 as a benchmark dataset or test set from the TREC Deep Learning Track 2019 for passage retrieval and document re-ranking. Definitions vary slightly: some describe an in-domain evaluation set derived from MS-MARCO-V1, others emphasize a deep learning-based ad-hoc retrieval benchmark with human-annotated relevance judgments, and another frames it as a benchmark for LLM-based ranking systems on document relevance tasks.

**What it is claimed to measure.** Across the papers, claims about what it assesses stay at the task level: passage retrieval systems, information retrieval and reranking tasks, document relevance tasks, and document re-ranking systems. Papers do not link it to any constructs or behavioral indicators.

**Space of uses.** Papers commonly use it alongside TREC-DL 2020, and some descriptions also place it with MS-MARCO-V1 or MS MARCO; one study lists it with BEIR among "widely used benchmarks." It is positioned as an in-domain evaluation set in some work, while another paper uses the TREC-DL2019/2020 benchmarks to evaluate LLM-based ranking systems' vulnerability to Decision Hijacking attacks across pairwise, listwise, and setwise paradigms.

**Concerns raised.** A smaller line of work explicitly describes TREC-DL'19, together with TREC-DL'20, as "not reasoning intensive."

## Sources

**[REARANK: Reasoning Re-ranking Agent via Reinforcement Learning](https://aclanthology.org/2025.emnlp-main.125.pdf) (as "TREC-DL19")**
> A benchmark dataset from the TREC Deep Learning Track 2019, derived from MS-MARCO-V1, used for in-domain evaluation of information retrieval and reranking tasks.

**[RaDeR: Reasoning-aware Dense Retrieval Models](https://aclanthology.org/2025.emnlp-main.1011.pdf) (as "TREC-DL'19")**
> A test set from the TREC Deep Learning Track 2019, used for evaluating passage retrieval systems, often in conjunction with MS MARCO.

**[The Ranking Blind Spot: Decision Hijacking in LLM-based Text Ranking](https://aclanthology.org/2025.emnlp-main.1116.pdf) (as "TREC-DL2019")**
> Benchmark dataset from the Text REtrieval Conference used to evaluate LLM-based ranking systems on document relevance tasks, assessing performance in passage retrieval and reranking.

**[REALM: Recursive Relevance Modeling for LLM-based Document Re-Ranking](https://aclanthology.org/2025.emnlp-main.1218.pdf) (as "TREC DL 2019")**
> Benchmark dataset for evaluating document re-ranking systems in information retrieval, focusing on deep learning-based ad-hoc retrieval tasks with human-annotated relevance judgments.
