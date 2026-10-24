# Flores-101
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** FLORES-101  

## State of the Field

**What it is.** Across papers, the prevailing usage treats Flores-101 as a multilingual benchmark dataset built from aligned translations, or human-written translation pairs, across 101 languages. Definitions differ slightly in emphasis: some describe professionally translated sentences used for qualitative evaluation of interventions in a machine translation context, while others frame it as a benchmark for machine translation and cross-lingual generation, and one paper specifies BLEU and COMET as the translation-quality metrics. Source snippets also mention both the general dataset and the devtest split, and describe inputs as sampled from Flores-101.

**What it is claimed to measure.** Across the recorded relationships, papers use Flores-101 to measure 2 behavioral indicators and do not link it to constructs. The dominant link is to Machine translation: papers describe it as the evaluation set for translation tasks, translation performance, or bidirectional machine translation, with some reporting BLEU scores and others discussing Eng→X and X→Eng settings. A smaller line of work reports it as measuring Coreference resolution, illustrated by an example where the prediction of the pronoun "elles" depends on the context noun phrase "mob of market women".

**Space of uses.** Papers most often position Flores-101 as a benchmark within broader multilingual evaluation setups rather than alongside other named measurement instruments, and no measurement instrument is linked to it. One study says it evaluates multilingual general and cross-lingual generation capabilities on "five benchmarks: FLORES-101", while another places machine translation tasks from Flores-101 beside math problems, coding tasks, and MMLU. Other papers use it more narrowly, for example testing models on the devtest split or performing the same interventions on inputs sampled from the dataset.

## Sources

**[KS-Lottery: Finding Certified Lottery Tickets for Multilingual Transfer in Large Language Models](https://aclanthology.org/2025.naacl-long.458.pdf)**
> A benchmark dataset consisting of sentences professionally translated across 101 languages, used for qualitative evaluation of interventions in a machine translation context.

**[AlignX: Advancing Multilingual Large Language Models with Multilingual Representation Alignment](https://aclanthology.org/2025.emnlp-main.328.pdf) (as "FLORES-101")**
> Benchmark for evaluating machine translation and cross-lingual generation across 101 languages, using BLEU and COMET metrics to assess translation quality.

## Relationships

### → Flores-101
- **Machine translation** (behaviors tasks) — *measured_by*
  > In Table 10, we used the translation dataset Flores-101 [Fan et al., 2021] as the evaluation set (Section A.5)
  - [MindMerger: Efficiently Boosting LLM Reasoning in non-English Languages](https://proceedings.neurips.cc/paper_files/paper/2024/file/3bf80b34f731313b8292f4578e820c90-Paper-Conference.pdf)
