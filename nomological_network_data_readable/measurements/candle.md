# Candle
**Type:** Measurement  
**Referenced in:** 3 papers  
**Also known as:** CANDLE  

## State of the Field

**What it is.** Across the surveyed papers, CANDLE is most commonly treated as a cultural benchmark or dataset, though one definition instead describes Candle as an international research program studying human values that is used with the World Values Survey to select sensitive topics. Papers describe the benchmark form as a multiple-choice question benchmark, larger in sample size at 1.1M, with a focus on cultural norms and commonsense knowledge. Another paper frames it as a prior dataset for culture-specific items that extracts cultural commonsense knowledge from web-scale corpora.

**What it is claimed to measure.** The recorded measurement claims are concentrated rather than spread across many targets: papers link it to 1 construct, Cultural knowledge, and to no behavioral indicators. In that usage, it is reported as measuring general cultural knowledge, and no other construct is linked to it here.

**Space of uses.** Papers most often position it as part of a suite of cultural evaluations. One study says it is used with CULTURALBENCH as a multiple-choice benchmark, and another places it alongside CULTURALBENCH and ETICOR for general cultural knowledge evaluation; elsewhere it is used as a baseline for cultural adaptation evaluation, and one definition places Candle alongside the World Values Survey when selecting sensitive topic areas for dataset creation.

**Concerns raised.** The clearest concern is coverage: one paper says CANDLE "considers only a limited set of facets that may not fully represent Indian culture." Papers also describe its scope narrowly, noting that its focus is only on cultural norms and commonsense knowledge.

## Sources

**[Navigating the Cultural Kaleidoscope: A Hitchhiker's Guide to Sensitivity in Large Language Models](https://aclanthology.org/2025.naacl-long.388.pdf)**
> An international research program studying various human values, used alongside the World Values Survey to select sensitive topics for dataset creation.

**[DIWALI - Diversity and Inclusivity aWare cuLture specific Items for India: Dataset and Assessment of LLMs for Cultural Text Adaptation in Indian Context](https://aclanthology.org/2025.emnlp-main.1706.pdf) (as "CANDLE")**
> A prior dataset for culture-specific items that extracts cultural commonsense knowledge from web-scale corpora, used here as a baseline for comparison in cultural adaptation evaluation.

## Relationships

### → Candle
- **Cultural knowledge** (constructs) — *measured_by*
  > Fine-tuning with CULTUREINSTRUCT outperforms the base LLMs significantly on multiple types of cultural benchmarks, including: (i) benchmarks for general cultural knowledge - CULTURALBENCH (Chiu et al., 2024), CANDLE (Nguyen et al., 2023), and ETICOR (Dwivedi et al., 2023) (Section 4.1)
  - [CultureInstruct: Curating Multi-Cultural Instructions at Scale](https://aclanthology.org/2025.naacl-long.465.pdf)
