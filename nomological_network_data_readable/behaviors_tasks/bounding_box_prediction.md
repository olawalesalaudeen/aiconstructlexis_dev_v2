# Bounding box prediction
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Bounding box generation  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage is producing rectangular coordinates that localize a target region. Most definitions describe the required output as a bounding box that spatially corresponds to the sought element, either an edit location in a document or object or evidence in an image; another definition also specifies boxes that correspond to answer tokens.

**Variants.** The papers study this behavior in document and PDF localization and in image grounding. They use the names bounding box prediction and bounding box generation, and vary the target across edit elements, objects, evidence tied to a textual concept, and answer tokens; one approach is described as directly identifying boxes instead of thresholding each patch.

**Space of elicitation and scores.** No measurement instrument is linked to it. Instead, elicitation is described through the task output itself, a predicted box for an edit element or directly identified boxes for answer tokens, and the snippets discuss bounding box precision, including reports that existing systems struggle with it and claims of highly precise boxes.

**What it is taken as evidence of.** No construct is linked to it.

## Sources

**[DELOC: Document Element Localizer](https://aclanthology.org/2025.emnlp-main.1585.pdf)**
> The action of generating a set of coordinates that define a rectangular region corresponding to a target element in a document.

**[Beyond Logit Lens: Contextual Embeddings for Robust Hallucination Detection & Grounding inVLMs](https://aclanthology.org/2025.naacl-long.488.pdf) (as "Bounding box generation")**
> The behavior of producing rectangular coordinates (bounding boxes) to localize objects or evidence within an image corresponding to a textual concept.
