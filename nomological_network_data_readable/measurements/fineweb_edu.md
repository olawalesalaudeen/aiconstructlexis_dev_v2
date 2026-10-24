# FineWeb-Edu
**Type:** Measurement  
**Referenced in:** 7 papers  
**Also known as:** Fineweb-Edu  

## State of the Field

**What it is.** Across the papers, FineWeb-Edu is most commonly described as a curated educational web-text dataset used in language model training and evaluation. Definitions present it as high-quality educational text from CommonCrawl, while one paper instead treats Fineweb-Edu as an English LLM-annotated dataset with approximately 450,000 document assessments of educational value. Another description presents it as educational text filtered from FineWeb, comprising 1.3T tokens with documents up to 339K tokens long, and mentions a curated subset of 1,000 texts of 128K tokens each for perplexity assessment.

**What it is claimed to measure.** The papers do not link FineWeb-Edu to any construct or behavioral indicator through measured_by relations, so no prevailing claim appears about what it measures. In the available descriptions, it is used as training, evaluation, sampling, or perplexity material rather than being tied to a recorded construct-level or behavioral measurement claim.

**Space of uses.** Papers position it mainly as source material rather than as an instrument used alongside other named instruments, and no other measurement instrument is linked to it. The recurring uses are training on FineWeb-Edu tokens, evaluating perplexity on curated long documents, and using an English LLM-annotated subset as a starting point for sampling documents by educational value.

## Sources

**[Disentangling and Integrating Relational and Sensory Information in Transformer Architectures](https://raw.githubusercontent.com/mlresearch/v267/main/assets/altabaa25a/altabaa25a.pdf)**
> A large, curated dataset of high-quality educational text from the web, used for training and evaluating language models.

**[Judging Quality Across Languages: A Multilingual Approach to Pretraining Data Filtering with Language Models](https://aclanthology.org/2025.emnlp-main.449.pdf) (as "Fineweb-Edu")**
> An English dataset annotated by a large language model, containing approximately 450,000 documents assessed for educational value, used as a starting point for sampling in this study.

## Relationships

### → FineWeb-Edu
- **Causal language modeling** (behaviors tasks) — *measured_by*
  > In this section, we evaluate DAT on causal language modeling... We train on 10 billion tokens of the FineWeb-Edu dataset [50]... (Section 4.4)
  - [Disentangling and Integrating Relational and Sensory Information in Transformer Architectures](https://raw.githubusercontent.com/mlresearch/v267/main/assets/altabaa25a/altabaa25a.pdf)
