# Target identification
**Type:** Behavior  
**Referenced in:** 3 papers  

## State of the Field

**Space of definitions.** Papers use this label for target-finding tasks, but not with a single uniform meaning. In AmpleHate: Amplifying the Attention for Versatile Implicit Hate Detection, it is framed as detecting and isolating entities in text that may be the focus of hate, including groups, organizations, nationalities, religions, and locations, and the paper notes that it "first identifies explicit targets" before hatefulness becomes clear. In Superlatives in Context: Modeling the Implicit Semantics of Superlatives, it is framed as recognizing the entity or event that has the maximal or minimal value in a comparison, where the target is one of the entities or events in the comparison set.

**Variants.** The observed variants split by setting. In the hate-related usage, papers treat it as explicit target extraction, with retained labels such as ORG, NORP, GPE, LOC, and EVENT. In the superlative usage, papers speak of "the target of the comparison," allow either an entity or an event as the target, require the target to stand in an IS-A relation with the comparison set, and illustrate it with cases where a named item such as "Nemo" is the max or min element.

**Space of elicitation and scores.** No measurement instrument is linked to it by the papers. An explicit operationalization appears in the hate-target setting, where a pretrained Named Entity Recognition model or pre-trained NER tagger is applied to each token and only ORG, NORP, GPE, LOC, and EVENT labels are retained; the other usage is described more minimally as "identifying the target" in results reporting.

**What it is taken as evidence of.** Papers do not link this behavior to any construct, so they do not state what broader construct it is evidence of.

## Sources

**[AmpleHate: Amplifying the Attention for Versatile Implicit Hate Detection](https://aclanthology.org/2025.emnlp-main.1469.pdf)**
> Detecting and isolating specific entities in text that may be the focus of hate, including groups, organizations, nationalities, religions, and locations.
