# Search query generation
**Type:** Behavior  
**Referenced in:** 15 papers  
**Also known as:** Query generation  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage is the model’s production of search queries for retrieval: a textual, and sometimes formal, query is generated so a retriever, search engine, or other knowledge source can fetch external information. Most formulations condition the query on a question plus context or on the current reasoning state, and they describe better performance as producing effective, sufficiently specified queries that retrieve relevant documents. A smaller line of work broadens this to heterogeneous sources in SPARQL, SQL, or natural language, and one paper treats it reversely as generating a question or query from a given response.

**Variants.** Papers use both “query generation” and “search query generation” for closely related tasks. Variants include generating a single query for simple questions, generating multiple or k queries, and producing a new query at each hop of retrieval. The behavior is also studied with note content as input, with forecasting questions and background for news search, and over structured and unstructured sources where the output may be SPARQL, SQL, or a natural-sentence query.

**Space of elicitation and scores.** No instrument is recorded as measuring it through a measured_by link. The only linked measurement instrument is SAFE, and the recorded relation is causes rather than measured_by: one paper says SAFE utilizes an LLM and includes “sending search queries to Google Search.”

**What it is taken as evidence of.** No construct is linked to it, so the papers do not explicitly treat it as evidence of a construct.

## Sources

**[SportReason: Evaluating Retrieval-Augmented Reasoning across Tables and Text for Sports Question Answering](https://aclanthology.org/2025.emnlp-main.34.pdf) (as "Query generation")**
> The observable production of search queries by a model, particularly in the context of retrieval-augmented generation, where queries are used to fetch external knowledge.

**[DecoupleSearch: Decouple Planning and Search via Hierarchical Reward Modeling](https://aclanthology.org/2025.emnlp-main.222.pdf)**
> Producing search queries from the current reasoning state to retrieve external documents.

## Relationships

### Associated with
- **SAFE** (measurements)
  > SAFE utilizes an LLM to... comprising sending search queries to Google Search...
  - [Long-form factuality in large language models](https://proceedings.neurips.cc/paper_files/paper/2024/file/937ae0e83eb08d2cb8627fe1def8c751-Paper-Conference.pdf)
