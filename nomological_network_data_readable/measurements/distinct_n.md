# Distinct-n
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

Across the provided sources, Distinct-n is consistently defined as a metric that measures lexical diversity by computing the proportion of unique n-grams in generated text. It is operationalized as a direct measure of the construct "Generation diversity". The papers use this metric to evaluate the variety of model outputs in different contexts. For example, one line of work uses it to assess repetition in long sequences, stating that "a higher value indicates greater diversity and lower repetition" ("TokenSwift: Lossless Acceleration of Ultra Long Sequence Generation"). Another documented application is to measure the "lexical diversity of generated examples" in the context of generation-based distillation ("Towards General-Domain Word Sense Disambiguation: Distilling Large Language Model into Compact Disambiguator"). In all provided cases, it serves as a quantitative tool to evaluate the diversity of generated content.

## Sources

**[TokenSwift: Lossless Acceleration of Ultra Long Sequence Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25z/wu25z.pdf)**
> Metric that measures lexical diversity in generated text by computing the proportion of unique n-grams; used to assess repetition in long sequences.

## Relationships

### → Distinct-n
- **Generation diversity** (constructs) — *measured_by*
  > Commonly used n-gram-based diversity metrics include distinct n-grams (distinct-n) (Song et al., 2024), self-BLEU (Shu et al., 2019), and ROUGE-L (Wang et al., 2022; Padmakumar & He, 2023). (Section 2.1)
  - [Measuring Diversity in Synthetic Datasets](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhu25ac/zhu25ac.pdf)
