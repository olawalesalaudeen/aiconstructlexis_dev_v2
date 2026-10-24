# GlobalOpinionQA
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** GLOBALOPINIONQA  

## State of the Field

**What it is.** Across papers, GlobalOpinionQA is most commonly described as a dataset or benchmark built from the World Values Survey and the Pew Global Attitudes Survey, with questions and answers intended to capture diverse perspectives on global issues. Several descriptions present it as a multiple-choice evaluation of model opinions against aggregated population opinions from different countries, while another describes it as a benchmark for human values and opinions across regions with around 2.5K questions. Some work also treats it as a template for preserving original questions and response options, uses selected country sets such as C′1 and C3, or notes that the original data contains answer distributions from multiple respondents within a country.

**What it is claimed to measure.** Across the surveyed work, its measurement claims are spread across several constructs rather than centered on one. It is linked to 3 constructs and no behavioral indicators, and papers use it to measure In-context learning, Personalization, and Social bias. The recorded measurement language varies, including quantifying distributional alignment, assessing steerability for specific users or social groups, and identifying model bias in representing diverse viewpoints.

**Space of uses.** Papers position it as a benchmark or evaluation dataset, including as a chosen benchmark for human values and opinions. No measurement instrument is linked to it, but papers often use it alongside OpinionQA, and one paper groups it with NYT Book Opinions for quantifying distributional alignment. Other usage details include following the GlobalOpinionQA template for consistency, evaluating selected countries from the data, and converting country-level answer distributions into a single answer by taking the highest-probability choice.

## Sources

**[Few-shot Personalization of LLMs with Mis-aligned Responses](https://aclanthology.org/2025.naacl-long.598.pdf)**
> A dataset of questions and answers from cross-national surveys (World Values Survey and PEW Global Attitudes Survey) designed to capture diverse perspectives on global issues.

**[CultureInstruct: Curating Multi-Cultural Instructions at Scale](https://aclanthology.org/2025.naacl-long.465.pdf) (as "GLOBALOPINIONQA")**
> Benchmark aggregating Pew Global Attitudes Survey and World Values Survey to assess alignment of model responses with human opinions across regions.

## Relationships

### → GlobalOpinionQA
- **Social bias** (constructs) — *measured_by*
  > GlobalOpinionQA (Durmus et al., 2024) uses multiple-choice questions to assess the opinions stated by a model relative to aggregated population opinions from different countries. The goal is to identify model bias in representing diverse viewpoints. (Section 3)
  - [The Impact of Inference Acceleration on Bias of LLMs](https://aclanthology.org/2025.naacl-long.91.pdf)
- **Personalization** (constructs) — *measured_by*
  > For the experiments, we first use two multiple-choice QA datasets proposed to measure the steerability of LLMs for specific users (or social groups): OpinionQA (Santurkar et al., 2023) and GlobalOpinionQA (Durmus et al., 2023). (Section 4.1)
  - [Few-shot Personalization of LLMs with Mis-aligned Responses](https://aclanthology.org/2025.naacl-long.598.pdf)
- **Pluralistic alignment** (constructs) — *measured_by*
  > In this section, we describe three datasets for quantifying distributional alignment – OpinionQA (Santurkar et al., 2023), GlobalOpinionQA (Durmus et al., 2024), and a new non-political subjective opinion dataset, NYT Book Opinions.
  - [Benchmarking Distributional Alignment of Large Language Models](https://aclanthology.org/2025.naacl-long.2.pdf)
