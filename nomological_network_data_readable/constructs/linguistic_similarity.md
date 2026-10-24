# Linguistic similarity
**Type:** Construct  
**Referenced in:** 5 papers  
**Also known as:** Cross-lingual sharing  

## State of the Field

**Definition agreement:** Conflicting. Most papers define linguistic similarity as a model-internal property, namely how similarly different languages are encoded or processed through shared representations, parameters, or activation patterns. But one paper defines it as external relatedness between languages based on script, vocabulary, and grammar, so the term is applied to a different kind of thing and those papers would not be studying the same phenomenon.

**Space of definitions.** Most commonly, papers treat this construct as cross-lingual similarity inside a model: either the extent to which the model uses shared internal representations and parameters across languages, or the extent to which languages occupy similar positions in the model's internal neural space, inferred from overlapping neuron activations. A smaller line of work defines it instead as relatedness between languages based on script, vocabulary, and grammatical structures, and uses that framing to discuss shared weaknesses across languages. The main disagreement is whether linguistic similarity is anchored in model-internal sharing and overlap, or in language-level similarity described through external linguistic features.

**Space of facets.** Within the model-internal framing, papers break it down by where similarity appears: one usage focuses on layer-wise inter-language activation similarity, while another quantifies an 'internal linguistic spectrum' from overlapping neurons and computes similarity between language pairs as a measure of language distance. Papers also use nearby labels for closely related ideas, with 'cross-lingual sharing' referring to the use of shared representations and parameters across languages. One paper explicitly distinguishes its usage from external linguistic features by defining similarity through overlapping neurons instead.

**Space of measurement.** No measurement instrument is linked to it, and no behavioral indicator is linked to it. Even so, papers operationalize it through analyses of internal activations: one quantifies an 'internal linguistic spectrum' from overlapping neurons and calculates similarity between language pairs as a way to measure language distance, while another treats layers with high inter-language activation similarity as more involved in cross-lingual sharing. These operationalizations align with the model-internal definitions, whereas the language-relatedness framing points to script, vocabulary, and grammatical structure.

**Links.** The linked literature reports only correlational relationships. One paper reports that cross-lingual generalization correlates with linguistic similarity, stating that language similarity is tied to transfer, though pretraining size has a stronger correlation. Another paper reports that linguistic similarity correlates with Trustworthiness, and the cited evidence describes trustworthiness evaluations diminishing as the degree of AAE usage increases.

## Sources

**[M-Wanda: Improving One-Shot Pruning for Multilingual LLMs](https://aclanthology.org/2025.emnlp-main.1369.pdf) (as "Cross-lingual sharing")**
> The degree to which a model utilizes shared internal representations and parameters to process information across different languages.

**[Linguistic Neuron Overlap Patterns to Facilitate Cross-lingual Transfer on Low-resource Languages](https://aclanthology.org/2025.emnlp-main.1407.pdf)**
> The degree to which languages are represented similarly in the model's internal neural space, inferred from overlapping neuron activation patterns rather than external linguistic features.

## Relationships

### → Linguistic similarity
- **Cross-lingual generalization** (constructs) — *correlates*
  > Our results show that both pretraining size and language similarity are tied to transfer, but the former has a stronger correlation.
  - [Multilinguality Does not Make Sense: Investigating Factors Behind Zero-Shot Cross-Lingual Transfer in Sense-Aware Tasks](https://aclanthology.org/2025.emnlp-main.1773.pdf)
