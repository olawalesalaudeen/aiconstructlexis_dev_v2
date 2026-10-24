# Relation classification
**Type:** Behavior  
**Referenced in:** 30 papers  
**Also known as:** Relation extraction, Medical relation extraction  

## State of the Field

**Space of definitions.** Across the definitions, the prevailing usage treats it as identifying and classifying semantic relationships between entities in text. Most formulations narrow the input to a specified pair of entities, often within a sentence, and treat success as predicting the relation class or label for that pair, sometimes as one or more labels and sometimes as a distribution over predefined relations. Some papers use the broader name relation extraction and emphasize identifying or generating relations, and one paper explicitly contrasts multi-class prediction with a binary decision about whether a queried relation exists between two entities.

**Variants.** Papers use both relation classification and relation extraction to name the behavior, and a smaller subset studies medical relation extraction. The settings range from sentence-level pair classification to document-level extraction across whole documents, and some papers study few-shot continual relation extraction as a variant. Other formulations target multiple relations simultaneously, fact triplets, or schema-defined relation types such as TA, A2A, and AS relations, while domain-specific versions appear in urban text with spatial and temporal relations and in knowledge-graph construction settings that derive edges such as has_entity, entity_related, and section_related.

**Space of elicitation and scores.** No measurement instrument is linked to it in the papers. When papers operationalize it directly, they usually elicit it with a sentence and a designated entity pair, sometimes with subject and object entities explicitly given, and in document-level variants with full documents. The outputs are described as a predicted relation label or class from a predefined set, one or more labels, a distribution over relation classes, or a binary yes or no judgment about whether a queried relation holds.

**What it is taken as evidence of.** No construct is linked to it in the papers.

## Sources

**[M-BRe: Discovering Training Samples for Relation Extraction from Unlabeled Texts with Large Language Models](https://aclanthology.org/2025.emnlp-main.264.pdf)**
> The observable task of assigning one or more relation labels to a pair of entities in a sentence based on their semantic relationship.

**[Training a Utility-based Retriever Through Shared Context Attribution for Retrieval-Augmented Language Models](https://aclanthology.org/2025.emnlp-main.33.pdf) (as "Relation extraction")**
> The task of identifying and classifying semantic relationships between entities in a text.

**[Beyond Demonstrations: Dynamic Vector Construction from Latent Representations](https://aclanthology.org/2025.emnlp-main.297.pdf) (as "Medical relation extraction")**
> Identifying a relation expressed between medical entities in text.
