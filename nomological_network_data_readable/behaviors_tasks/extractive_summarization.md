# Extractive summarization
**Type:** Behavior  
**Referenced in:** 4 papers  

## State of the Field

**Space of definitions.** Across the definitions, the prevailing usage treats extractive summarization as producing a summary by selecting text directly from the source document. Most commonly, papers describe this as selecting and concatenating the most important sentences, while some wording broadens the unit from sentences to spans of text. Across these formulations, the shared criterion is that the summary uses text taken directly from the source document.

**Variants.** The papers vary mainly in what is selected and in the application setting. One recurring formulation is sentence-level selection, including a Greek financial task described as evaluating whether models can identify key sentences within narrative financial reports. Another uses the label "span summary" for cases where summaries are built from spans taken directly from the document, and one paper reports that extractive summarization is related to abstractive summarization as an earlier stage before later revision.

**Space of elicitation and scores.** Papers link extractive summarization to one measurement instrument, Plutus-ben. It is presented as a benchmark that addresses extractive summarization among its core tasks.

**What it is taken as evidence of.** No construct is linked to extractive summarization in the recorded relationships, so the papers here do not use it as evidence of a named construct.

## Sources

**[Plutus: Benchmarking Large Language Models in Low-Resource Greek Finance](https://aclanthology.org/2025.emnlp-main.1535.pdf)**
> The task of creating a summary by selecting and concatenating the most important sentences directly from a source document.

## Relationships

### Extractive summarization →
- **Plutus-ben** (measurements) — *measured_by*
  > “Plutus-ben addresses six core tasks: numeric/textual named entity recognition, question answering, extractive summarization, abstractive summarization, and topic classification.”
  - [Plutus: Benchmarking Large Language Models in Low-Resource Greek Finance](https://aclanthology.org/2025.emnlp-main.1535.pdf)

### Associated with
- **Abstractive summarization** (behaviors tasks)
  > in the second stage of the pipeline (Figure 1’s last panel), we prompt the LLM again to revise the extractive summary in order to obtain a more concise and natural-sounding data description, which is known as abstractive summarization (Gupta & Gupta, 2019). (Section 3.1)
  - [MuHBoost: Multi-Label Boosting For Practical Longitudinal Human Behavior Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/ca2963d1cfb25e93362e86fb427a9524-Paper-Conference.pdf)
