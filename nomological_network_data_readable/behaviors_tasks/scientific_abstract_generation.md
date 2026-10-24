# Scientific abstract generation
**Type:** Behavior  
**Referenced in:** 4 papers  
**Also known as:** Abstract generation, Abstract writing  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage is a text generation task in which a model produces a scientific or research abstract from a title-based prompt. Papers agree on the core behavior, abstract writing conditioned on the title, but differ in scope: one formulation treats it as generating an abstract of a specific document, such as a scientific paper, from its title, while another treats it as generating a concise abstract for a research topic from an article title and associated keywords, with objectives, methods, and subtopics covered and with length and scope matched to a human-written abstract.

**Variants.** Papers use the names abstract generation and abstract writing for this behavior. The studied settings vary between summarizing a specific paper and producing an abstract aligned with a research topic; prompt formats range from the title alone to the title with associated keywords, and one paper places the task in math papers by using abstracts from MathAbstracts and each paper's title as the prompt.

**Space of elicitation and scores.** No measurement instrument is linked to it in the papers. Instead, papers operationalize the behavior through prompting setups, most commonly titles alone, and in another formulation titles together with associated keywords.

**What it is taken as evidence of.** No construct is linked to it in the papers.

## Sources

**[Copyright-Protected Language Generation via Adaptive Model Fusion](https://proceedings.iclr.cc/paper_files/paper/2025/file/01953220e4becc6ac1078c24c1f8d3a7-Paper-Conference.pdf) (as "Abstract generation")**
> A specific text generation task where the model creates a summary or abstract of a document, such as a scientific paper, from its title.

**[Large Language Models for Automated Literature Review: An Evaluation of Reference Generation, Abstract Writing, and Review Composition](https://aclanthology.org/2025.emnlp-main.83.pdf) (as "Abstract writing")**
> Generating a concise summary of a research topic that outlines key components such as objectives, methods, and subtopics, matching the length and scope of a human-written abstract.
