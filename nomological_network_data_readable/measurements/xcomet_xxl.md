# XComet-XXL
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** XCOMET-XL, XComet XXL  

## State of the Field

Across the provided sources, XComet-XXL and its variants are consistently characterized as neural models used to evaluate the quality of machine translations. The definitions are complementary, with one paper describing it as a "large-scale, multilingual neural quality estimation model" and another detailing its mechanism as a "reference-based neural model" that generates scores by comparing model output to human references. In practice, it is used to generate "pseudo ground-truth quality for translations," as stated in one study. This instrument is applied to evaluate Neural Machine Translation (NMT) outputs, where its scores are presented alongside other metrics such as Comet WMT 22 and Metric X XXL. The use of such a reference-based metric is justified in one paper by citing work showing they are "good enough to be used as the ground truth to rank reference-free QE metrics" (Are Generative Models Underconfident? Better Quality Estimation with Boosted Model Probability).

## Sources

**[Are Generative Models Underconfident? Better Quality Estimation with Boosted Model Probability](https://aclanthology.org/2025.emnlp-main.166.pdf) (as "XCOMET-XL")**
> A reference-based neural model used to generate pseudo ground-truth quality scores for translations by comparing model output to human references.

**[UNCERTAINTY-LINE: Length-Invariant Estimation of Uncertainty for Large Language Models](https://aclanthology.org/2025.emnlp-main.400.pdf) (as "XComet XXL")**
> A large-scale, multilingual neural quality estimation model used as an instrument to evaluate the quality of machine translations.
