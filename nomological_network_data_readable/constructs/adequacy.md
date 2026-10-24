# Adequacy
**Type:** Construct  
**Referenced in:** 5 papers  
**Also known as:** Translation adequacy  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the papers, adequacy centers on preservation of source meaning in translation. One paper frames it more broadly as a latent model ability to convey semantic, cultural, and factual content while preserving historical and contextual meaning, whereas another treats translation adequacy as the degree to which an output preserves the source text's meaning, as judged by humans. The main difference is therefore latent ability versus judged output quality, and broader cultural and contextual preservation versus overall meaning preservation.

**Space of facets.** Papers most often use adequacy as one evaluation dimension alongside fluency and either elegance or comprehensibility. One formulation further unpacks it through the accuracy of each translated element, including historical, cultural, and factual aspects. The labels Adequacy and Translation adequacy are used for closely related notions centered on preserving meaning in translation.

**Space of measurement.** Operationally, adequacy is linked to 2 measurement instruments, most often Human evaluation and also LLM-as-a-judge, and it is not linked to any behavioral indicators. Human evaluation appears as direct grading of translation outputs on 1 to 5 or 0 to 10 scales, focused on whether meaning is preserved and whether the translation is consistent with the source text. LLM-as-a-judge appears through a GPT-4-based automatic metric that assesses adequacy, often together with fluency and elegance or comprehensibility, so the measurements largely follow the definitional emphasis on preserved meaning but usually score it as one dimension of broader translation quality.

## Sources

**[Benchmarking LLMs for Translating Classical Chinese Poetry: Evaluating Adequacy, Fluency, and Elegance](https://aclanthology.org/2025.emnlp-main.1678.pdf)**
> The latent ability of a model to accurately convey semantic, cultural, and factual content from source to target language, preserving historical and contextual meaning in translation.

**[Leveraging Loanword Constraints for Improving Machine Translation in a Low-Resource Multilingual Context](https://aclanthology.org/2025.emnlp-main.1406.pdf) (as "Translation adequacy")**
> The degree to which a model's translation preserves the meaning of the source text, as judged by human evaluators.

## Relationships

### Adequacy →
- **LLM-as-a-judge** (measurements) — *measured_by*
  > we propose an automatic evaluation metric based on GPT-4, which better assesses translation quality in terms of adequacy, fluency, and elegance, overcoming the limitations of traditional metrics. (Abstract)
  - [Benchmarking LLMs for Translating Classical Chinese Poetry: Evaluating Adequacy, Fluency, and Elegance](https://aclanthology.org/2025.emnlp-main.1678.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > Human evaluators directly assess MT outputs by grading scores (0 to 10) based on three key criteria: adequacy, fluency, and comprehensibility (ò see Appendix Section E.2). (Section 4.2)
  - [MultiMed-ST: Large-scale Many-to-many Multilingual Medical Speech Translation](https://aclanthology.org/2025.emnlp-main.599.pdf)
