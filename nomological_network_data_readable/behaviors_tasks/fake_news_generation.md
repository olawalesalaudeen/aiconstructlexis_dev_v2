# Fake news generation
**Type:** Behavior  
**Referenced in:** 6 papers  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats this behavior as generating fabricated news articles or deceptive narratives, often with LLMs, in forms that mimic legitimate journalism. Outputs are commonly described as intentionally false or deceitful, and some definitions explicitly add an intent to deceive readers or evade automated detection systems. A smaller line of work states the task more procedurally, as generating news articles from fake headlines or producing the "next version of fake news" through iterative prompt refinement.

**Variants.** Papers study several variants that differ in how the article is sourced or transformed. Reported settings include generation from fake news headlines, rewriting, expanding, or disguising given fake news, and modifying true news articles to introduce believable factual errors. Some work uses multi-perspective generation in three different styles, including chain-of-thought prompting, while another allows fake news stories to include visual elements and strategic content manipulation.

**Space of elicitation and scores.** Papers link this behavior to 1 measurement instrument, XSum. In the linked use, one paper says generated fake news is compared with "real news articles from the XSum dataset", and XSum is the only named instrument linked to its measurement.

**What it is taken as evidence of.** Papers do not link this behavior to any construct, so they do not state a broader construct that fake news generation is taken to indicate.

## Sources

**[A Symbolic Adversarial Learning Framework for Evolving Fake News Generation and Detection](https://aclanthology.org/2025.emnlp-main.619.pdf)**
> Producing fabricated news content that mimics legitimate journalism, with the intent to deceive readers or evade automated detection systems.

## Relationships

### Fake news generation →
- **XSum** (measurements) — *measured_by*
  > "and compare them with the real news articles from the XSum (Narayan et al., 2018) dataset"
  - [AI as Humanity’s Salieri: Quantifying Linguistic Creativity of Language Models via Systematic Attribution of Machine Text against Web Text](https://proceedings.iclr.cc/paper_files/paper/2025/file/e304d374c85e385eb217ed4a025b6b63-Paper-Conference.pdf)
