# COMETKIWI
**Type:** Measurement  
**Referenced in:** 6 papers  

## State of the Field

Based on the available literature, COMETKIWI is a learned metric used for evaluating machine translation. It is defined as an extension of the COMET evaluation metric, specifically trained on WMT Direct Assessment scores in a quality estimation style. The provided sources consistently use COMETKIWI to measure both "Machine translation" and "Translation quality". One paper positions it within a family of learned metrics, including COMET and xCOMET, that are reported to have improved MT evaluation. This improvement is attributed to the metric's ability to align "closely with human judgments" ("Evaluating Language Translation Models by Playing Telephone").

## Sources

**[Evaluating Language Translation Models by Playing Telephone](https://aclanthology.org/2025.emnlp-main.524.pdf)**
> An extension of the COMET evaluation metric, trained on WMT Direct Assessment scores in a quality estimation style.

## Relationships

### → COMETKIWI
- **Translation quality** (constructs) — *measured_by*
  > "We use two versions of COMETKIWI: wmt22-cometkiwi-da ... and wmt23-cometkiwi-da-xxl"
  - [Translate Smart, not Hard: Cascaded Translation Systems with Quality-Aware Deferral](https://aclanthology.org/2025.emnlp-main.1358.pdf)
- **Machine translation** (behaviors tasks) — *measured_by*
  > “we consider two reranking strategies: selecting the best candidate with MBR decoding using COMET-22 as the utility metric ... and reranking based on quality estimation using the reference-free CometKiwi”
  - [Reranking Laws for Language Generation: A Communication-Theoretic Perspective](https://proceedings.neurips.cc/paper_files/paper/2024/file/c8b2f897e45770595656a79a9ad91e89-Paper-Conference.pdf)
