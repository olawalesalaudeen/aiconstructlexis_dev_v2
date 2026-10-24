# Cross-lingual consistency
**Type:** Construct  
**Referenced in:** 5 papers  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the surveyed work, the term is used in two ways. One usage defines cross-lingual consistency as the degree to which a multilingual model gives semantically equivalent and correct outputs for the same factual query across languages, while another uses it more broadly for whether task or domain performance is stable and comparable across languages, especially within a language family. The papers agree that the construct concerns alignment across languages, but they differ on the reference object: same-query output equivalence and correctness versus cross-language performance stability.

**Space of facets.** The available papers do not introduce named subtypes, and no construct-to-construct links are reported. The main organizing difference is scope: one framing is narrow and tied to factual queries and parallel facts, while another treats the same label as a broader property of performance across languages and language families.

**Space of measurement.** Operationalization is narrow in the available work: the construct is linked to 2 measurement instruments, NOVA-63 and XSafety, and to no behavioral indicators. One paper evaluates it with the overlap ratio of correct predictions for parallel facts between language pairs, and another reports a consistency score on XSafety, described as a parallel dataset, by comparing English with each target language across models; NOVA-63 is used as an assessment instrument for cross-lingual consistency among language families. These measurements follow the same split seen in the definitions, alternating between factual-query agreement and cross-language performance stability.

## Sources

**[Lost in Multilinguality: Dissecting Cross-lingual Factual Inconsistency in Transformer Language Models](https://aclanthology.org/2025.acl-long.253.pdf)**
> The degree to which a multilingual model produces semantically equivalent and correct outputs for the same factual query when presented in different languages.

## Relationships

### Cross-lingual consistency →
- **XSafety** (measurements) — *measured_by*
  > We report consistency score on XSafety, a parallel dataset, comparing English with each target language across several models in Figure 5. (Section 5.2)
  - [MrGuard: A Multilingual Reasoning Guardrail for Universal LLM Safety](https://aclanthology.org/2025.emnlp-main.1392.pdf)
