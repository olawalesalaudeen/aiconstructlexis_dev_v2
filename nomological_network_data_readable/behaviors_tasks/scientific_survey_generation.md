# Scientific survey generation
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Review composition, Literature review  

## State of the Field

**Space of definitions.** Across these papers, the prevailing usage is generation of a structured survey or literature review on a specified research topic. Most formulations require synthesis across multiple sources and an organized output, either as an end-to-end academic survey with an outline, content, and references, or as a coherent review that supports claims with newly generated citations. One paper narrows the task to writing "a short literature review" from a title, keywords, and abstract, while another treats it as the literature review stage in which the system reads a provided set of references and abstracts to understand the research background.

**Variants.** Papers use nearby labels such as scientific survey generation, review composition, and literature review. The clearest named variants are fully LLM-based, RAG-based, and human-guided survey generation, presented as different evaluation levels. Other settings differ by inputs: some provide only a topic signal from title, keywords, and abstract, while another begins from a bib file containing references and their corresponding abstracts.

**Space of elicitation and scores.** No measurement instrument is linked to it. The papers instead operationalize it through task setups, for example by comparing fully LLM-based, RAG-based, and human-guided generation, or by prompting a model from titles, keywords, abstracts, or a bib file of references and corresponding abstracts.

**What it is taken as evidence of.** No construct is linked to it as something this behavior is evidence of. The available papers define the task and describe how it is elicited, but they do not report construct-level links for it.

## Sources

**[SurveyGen: Quality-Aware Scientific Survey Generation with Large Language Models](https://aclanthology.org/2025.emnlp-main.136.pdf)**
> The end-to-end task of producing a structured academic survey article on a given topic, including an outline, content, and references.

**[Large Language Models for Automated Literature Review: An Evaluation of Reference Generation, Abstract Writing, and Review Composition](https://aclanthology.org/2025.emnlp-main.83.pdf) (as "Review composition")**
> Writing a coherent and structured literature review on a given topic, synthesizing multiple sources and supporting claims with newly generated citations.

**[CycleResearcher: Improving Automated Research via Automated Review](https://proceedings.iclr.cc/paper_files/paper/2025/file/0a48036026dc7946ef6033ae14719cc5-Paper-Conference.pdf) (as "Literature review")**
> The process of reading and synthesizing information from a provided set of reference papers and their abstracts to understand a research background.
