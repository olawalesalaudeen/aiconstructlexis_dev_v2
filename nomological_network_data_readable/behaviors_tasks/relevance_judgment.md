# Relevance judgment
**Type:** Behavior  
**Referenced in:** 7 papers  
**Also known as:** Document relevance assessment, Passage relevance assessment, Text relevance assessment  

## State of the Field

**Space of definitions.** Across papers, relevance judgment is treated as an explicit evaluation of whether a retrieved or given text is relevant to a query, topic, or task. The definitions converge on judging documents, passages, or text for alignment or usefulness: one formulation asks the model to analyze each document one by one, then give a final judgment and explanation, while another frames the decision as whether a retrieved passage "provides useful information to solve x." A further formulation describes the task as assessing how well a piece of text aligns with a query or topic through semantic criteria.

**Variants.** Papers use several parallel names and settings: document relevance assessment, passage relevance assessment, and text relevance assessment. The document and passage variants focus on retrieved material in response to a question or task, while the text variant is described more generally as alignment to a query or topic. Across these variants, success is framed either as an explicit judgment of relevance or as deciding whether the passage is useful for solving the task.

**Space of elicitation and scores.** No paper links this behavior to a measurement instrument. Where papers show elicitation directly, they ask the model to judge each document one by one and return a final judgment with an explanation, or to predict whether a passage is relevant or useful for solving the task. One formulation also describes the criterion as assessing "semantic alignment precision."

**What it is taken as evidence of.** No paper links relevance judgment to a construct. The only recorded non-construct relation is that one paper reports information retrieval as related to relevance judgment, framing the activity as judging whether a document is relevant to a query.

## Sources

**[Training Large Language Models for Retrieval-Augmented Question Answering through Backtracking Correction](https://proceedings.iclr.cc/paper_files/paper/2025/file/80790082a3b0e4fa9061730ee876f5ba-Paper-Conference.pdf) (as "Document relevance assessment")**
> The observable task of evaluating one or more retrieved documents and making an explicit judgment about their relevance to a given query.

**[Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection](https://proceedings.iclr.cc/paper_files/paper/2024/file/25f7be9694d7b32d5cc670927b8091e1-Paper-Conference.pdf) (as "Passage relevance assessment")**
> Evaluating whether a retrieved passage provides useful information for solving the given task.

**[GuideBench: Benchmarking Domain-Oriented Guideline Following for LLM Agents](https://aclanthology.org/2025.acl-long.557.pdf) (as "Text relevance assessment")**
> The task of evaluating how well a piece of text aligns with a given query or topic based on specific semantic criteria.
