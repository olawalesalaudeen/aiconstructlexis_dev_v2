# Imperceptibility
**Type:** Construct  
**Referenced in:** 4 papers  
**Also known as:** Anti-steganalysis capacity  

## State of the Field

In the provided literature, imperceptibility is primarily defined as the degree to which steganographic or watermarked text is statistically indistinguishable from ordinary, unmodified text. This concept is presented alongside the closely related notion of 'anti-steganalysis capacity,' which is the ability to evade automated detection. The operationalization of imperceptibility varies across the sources. One paper explicitly measures it using KL divergence (KLD) between modified and original text pools, stating that KLD "quantifies statistical disparities, reflecting imperceptibility." This same work measures the related anti-steganalysis capacity via steganalysis accuracy. A different paper, however, indicates that Perplexity is also used as a measurement instrument for imperceptibility. Across the data, imperceptibility is studied in the context of improving steganographic texts, where one method is reported to improve it alongside fluency.

## Sources

**[Addressing Tokenization Inconsistency in Steganography and Watermarking Based on Large Language Models](https://aclanthology.org/2025.emnlp-main.361.pdf)**
> The degree to which steganographic or watermarked text is statistically indistinguishable from ordinary, unmodified text.

**[Addressing Tokenization Inconsistency in Steganography and Watermarking Based on Large Language Models](https://aclanthology.org/2025.emnlp-main.361.pdf) (as "Anti-steganalysis capacity")**
> The ability of a steganographic method to evade detection by automated systems designed to identify hidden messages in text.

## Relationships

### Imperceptibility →
- **Perplexity** (measurements) — *measured_by*
  > "For the evaluation of imperceptibility, we split the criteria into two aspects: (1) the distribution bias within each output (2) the independence among different outputs. The former can be evaluated with Perplexity"
  - [WaterPool: A Language Model Watermark Mitigating Trade-Offs among Imperceptibility, Efficacy and Robustness](https://aclanthology.org/2025.naacl-long.209.pdf)
