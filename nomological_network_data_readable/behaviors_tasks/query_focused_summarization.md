# Query-focused summarization
**Type:** Behavior  
**Referenced in:** 7 papers  
**Also known as:** Query-based summarization  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats this as generating a summary or response to a query, with the content selected to address that query rather than the whole source. Definitions converge on summarizing one or more documents, often long inputs, and emphasizing only the information relevant to a user-provided or generated query. One paper states this especially explicitly: "given a query about a long input consisting of one or more documents, generate a response to the query which cites arbitrary length text spans from the input" (Unstructured Evidence Attribution for Long Context Query Focused Summarization). A smaller wording difference is between calling the output a concise summary and calling it a response, but both framings keep query conditioning and relevance to the query as the criterion for success.

**Variants.** Papers use several near-synonymous names, including query-focused summarization, query-based summarization, QFS, and long context query focused summarization (LCQFS). The task appears in long-document and long-context settings, with examples involving one or more documents, meeting transcripts, narratives, dialogue, and podcast transcripts. Some descriptions frame it as summarizing a certain topic raised about a dialogue, while others present it as summarizing context in response to a generated query.

**Space of elicitation and scores.** No measurement instrument is linked to it. The available papers instead describe elicitation through task setup: a query is posed over a long document or over one or more documents, and outputs are described as concise summaries, query-conditioned summaries, or, in one formulation, responses that cite arbitrary length text spans from the input.

**What it is taken as evidence of.** No construct is linked to it.

## Sources

**[StructRAG: Boosting Knowledge Intensive Reasoning of LLMs via Inference-time Hybrid Information Structurization](https://proceedings.iclr.cc/paper_files/paper/2025/file/5975754c7650dfee0682e06e1fec0522-Paper-Conference.pdf)**
> Generating a summary of one or more documents that is specifically tailored to answer a given query.

**[Retrieval meets Long Context Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d75f29006df67df084e6586f1cb8458c-Paper-Conference.pdf) (as "Query-based summarization")**
> Producing a concise summary focused on a specific query or topic from a long document, such as meeting transcripts or narratives.

## Relationships

### Query-focused summarization →
- **QMSum** (measurements) — *measured_by*
  > QMSum (Zhong et al., 2021) is a human-annotated benchmark for a query-based multi-domain meeting summarization task, which consists of 1,808 query-summary pairs over 232 meetings in multiple domains. (Section 5.1)
  - [Accelerating Inference of Retrieval-Augmented Generation via Sparse Context Selection](https://proceedings.iclr.cc/paper_files/paper/2025/file/411fa9d368b5485be4c6bb62615b365e-Paper-Conference.pdf)
