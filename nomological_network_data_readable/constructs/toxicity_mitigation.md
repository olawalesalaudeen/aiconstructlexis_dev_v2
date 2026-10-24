# Toxicity mitigation
**Type:** Construct  
**Referenced in:** 3 papers  
**Also known as:** Detoxification accuracy, Detoxification quality  

## State of the Field

**Definition agreement:** Consensus. All papers define toxicity mitigation as a model's underlying ability to stop, reduce, identify, or remove toxic content and produce non-toxic text instead. The differences are only in emphasis, with some papers adding scope such as handling different contexts or avoiding over- and under-correction, but they still study the same core capability.

**Space of definitions.** Across the papers, the prevailing framing is a latent model capability for making language non-toxic, whether by preventing toxic generation or by removing toxic content from text. The definitions agree that the construct is an inherent or latent capacity of the model, and they differ mainly in scope: one paper describes preventing, reducing, or counteracting toxic content broadly, while the others focus more narrowly on identifying and removing toxic elements in text. A smaller distinction is that some formulations add constraints on how this is done, especially avoiding over- or under-correction and transforming text into a non-toxic form.

**Space of facets.** Papers do not lay out a detailed subtype structure. Instead, they use nearby labels such as detoxification accuracy and detoxification quality for largely the same capacity, with one usage centered on successful toxic-element removal and another on removal plus transformation into non-toxic text; one paper also discusses it alongside semantic preservation rather than as a separate subtype.

**Space of measurement.** Operational language centers on whether toxic content is successfully removed. One paper frames detoxification accuracy as a metric that evaluates how effectively toxic elements are removed and whether a rewrite successfully removes toxic content, while another refers more generally to detoxification performance. No measurement instrument is linked to the construct, and no behavioral indicator is linked to it.

## Sources

**[Toxicity Red-Teaming: Benchmarking LLM Safety in Singapore's Low-Resource Languages](https://aclanthology.org/2025.emnlp-main.612.pdf)**
> The model's inherent capability to prevent, reduce, or counteract the generation of toxic content.

**[Chinese Toxic Language Mitigation via Sentiment Polarity Consistent Rewrites](https://aclanthology.org/2025.emnlp-main.1808.pdf) (as "Detoxification accuracy")**
> The underlying capacity of a model to effectively identify and remove toxic content across different forms and contexts without over- or under-correcting.

**[Text Detoxification: Data Efficiency, Semantic Preservation and Model Generalization](https://aclanthology.org/2025.emnlp-main.1636.pdf) (as "Detoxification quality")**
> The latent ability of a model to remove toxic content from text while transforming it into a non-toxic form.
