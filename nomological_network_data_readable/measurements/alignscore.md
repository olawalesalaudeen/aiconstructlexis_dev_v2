# AlignScore
**Type:** Measurement  
**Referenced in:** 15 papers  
**Also known as:** ALIGNSCORE  

## State of the Field

Across the surveyed literature, AlignScore is predominantly described as a model-based evaluation procedure for assessing text alignment between a generated text and a source passage. It is frequently used to operationalize and measure constructs like `Faithfulness` and, most commonly, "factual consistency" in the context of behaviors like `Text summarization` and `Paraphrase generation`. Several sources specify its underlying mechanism, describing it as an NLI-based or "trained entailment metric" that is based on a fine-tuned RoBERTa-large model. This procedure yields a continuous score, typically from 0 to 1, indicating the degree of correspondence or entailment. While the most prevalent usage is as an evaluation metric, a smaller line of work also employs AlignScore as a "verifier model" in fact-checking or as a quality filter, for instance by accepting only generations with a score above a certain threshold. The definitions are largely consistent, with the most common one being a general text-alignment procedure, while a few papers offer a more specific framing of it as an NLI-based metric for summarization.

## Sources

**[PlagBench: Exploring the Duality of Large Language Models in Plagiarism Generation and Detection](https://aclanthology.org/2025.naacl-long.384.pdf)**
> A model-based text-alignment evaluation procedure used to assess how well generated answers align with reference passages.

**[Discourse-Driven Evaluation: Unveiling Factual Inconsistency in Long Document Summarization](https://aclanthology.org/2025.naacl-long.103.pdf) (as "ALIGNSCORE")**
> An NLI-based metric that computes an aggregated inference score between a source article and a generated summary to evaluate factual consistency.

## Relationships

### → AlignScore
- **Paraphrasing** (behaviors tasks) — *measured_by*
  > "Consistency →AlignScore (Zha et al., 2023)"
  - [PlagBench: Exploring the Duality of Large Language Models in Plagiarism Generation and Detection](https://aclanthology.org/2025.naacl-long.384.pdf)
- **Text summarization** (behaviors tasks) — *measured_by*
  > "We use the same models from paraphrase evaluation regarding consistency and language quality"
  - [PlagBench: Exploring the Duality of Large Language Models in Plagiarism Generation and Detection](https://aclanthology.org/2025.naacl-long.384.pdf)
- **Factuality** (constructs) — *measured_by*
  > "we use recommended AlignScore (Zha et al., 2023) to measure the factual consistency of summaries"
  - [AdaCAD: Adaptively Decoding to Balance Conflicts between Contextual and Parametric Knowledge](https://aclanthology.org/2025.naacl-long.581.pdf)
- **Groundedness** (constructs) — *measured_by*
  > Besides human evaluation of the above, we also computed groundedness as faithfulness to the input chain in terms of Alignscore (Zha et al., 2023). (Section 4)
  - [HypER: Literature-grounded Hypothesis Generation and Distillation with Provenance](https://aclanthology.org/2025.emnlp-main.1292.pdf)
