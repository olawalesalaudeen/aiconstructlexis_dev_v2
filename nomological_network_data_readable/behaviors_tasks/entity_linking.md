# Entity linking
**Type:** Behavior  
**Referenced in:** 8 papers  
**Also known as:** Entity alignment  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats this behavior as mapping textual or surface-form entities to canonical identifiers. Most commonly, success is described as linking an entity mention or generated entity name to the correct code or identifier, such as assigning unique ICD codes from clinical text or mapping entities in a logical form to their corresponding mids. A smaller framing uses entity alignment language for pairing entities that refer to the same real-world concept across separate multi-modal knowledge graphs, with 1-to-1 correspondence as the target.

**Variants.** Papers study this behavior in several settings and under related names. One line treats ICD coding as entity linking, where disease mentions in a doctor's diagnosis text are linked to ICD entries based on semantic similarity with ICD dictionary entries; another uses entity alignment in knowledge base question answering to map entities in generated logical forms to mids, with popularity, similarity, and FACC1-based selection appearing in the description. A smaller multi-modal variant, called multi-modal entity alignment, matches corresponding entities across separate multi-modal knowledge graphs that describe identical real-world concepts.

**Space of elicitation and scores.** No paper links this behavior to a measurement instrument, so the papers do not report an instrument-level pattern for eliciting or scoring it.

**What it is taken as evidence of.** Papers link this behavior to only one construct. One paper claims a causal relationship from Semantic understanding to Entity linking, stating that language models provide advanced semantic understanding for tasks like entity alignment; no other construct is linked in the recorded relationships.

## Sources

**[RuCCoD: Towards Automated ICD Coding in Russian](https://aclanthology.org/2025.emnlp-main.129.pdf)**
> The observable process of mapping disease mentions in clinical text to standardized ICD codes from a formal hierarchy.

**[CompKBQA: Component-wise Task Decomposition for Knowledge Base Question Answering](https://aclanthology.org/2025.emnlp-main.16.pdf) (as "Entity alignment")**
> Mapping surface-form entity names in generated logical forms to their canonical identifiers (mids) in the knowledge base using popularity and similarity scoring.
