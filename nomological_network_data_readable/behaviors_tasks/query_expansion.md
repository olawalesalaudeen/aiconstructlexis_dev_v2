# Query expansion
**Type:** Behavior  
**Referenced in:** 5 papers  

## State of the Field

Across the provided literature, query expansion is consistently described as the process of augmenting, reformulating, or generating additional text for an original search query. The prevailing goal of this behavior is to improve retrieval performance and information search, with one paper noting its utility for handling "complex queries." The operationalization of query expansion is frequently tied to the use of large language models (LLMs). As one study notes, "Large language models (LLMs) have been used to generate query expansions augmenting original queries for improving information search" ("Knowledge-Aware Query Expansion with Large Language Models for Textual and Relational Retrieval"). A specific method described involves using an LLM to sample multiple responses and then concatenating them with the original query. An alternative approach uses Retrieval-Augmented Generation (RAG) to incorporate terms from related documents to broaden the query's scope. The added content is variously defined as "descriptive text," "synonyms," or "related terms." This behavior is consistently positioned as a technique intended to improve information retrieval.

## Sources

**[tRAG: Term-level Retrieval-Augmented Generation for Domain-Adaptive Retrieval](https://aclanthology.org/2025.naacl-long.334.pdf)**
> Generating additional descriptive text based on an original search query to improve retrieval performance by capturing more context.

## Relationships

### Query expansion →
- **Information retrieval** (behaviors tasks) — *causes*
  > To enhance this retrieval phase, current query expansion (QE) techniques leverage pre-trained language models (PLM) to mitigate word mismatches and improve the recall of relevant documents. (Abstract)
  - [Not All Terms Matter: Recall-Oriented Adaptive Learning for PLM-aided Query Expansion in Open-Domain Question Answering](https://aclanthology.org/2025.acl-long.1076.pdf)
