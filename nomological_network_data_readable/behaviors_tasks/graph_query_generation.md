# Graph query generation
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Query graph generation, Text-to-Cypher generation, Text-to-nGQL generation  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage is translating natural language questions into complete, executable graph queries, often in openCypher or Cypher, so they can be run against a graph database or knowledge graph to retrieve an answer or structured data. A smaller line of work describes the behavior as generating a structured or pseudo query graph from the question rather than the final executable query, and one paper also describes LLM agents formulating multiple queries from the user's question and previously gathered information.

**Variants.** Papers use several closely related names for this behavior, including query graph generation, graph query generation, text-to-Cypher generation, and text-to-nGQL generation. The main variants differ by target language and output form: openCypher or Cypher, nGQL, or a query graph or pseudo query graph, and the retrieval setting ranges from knowledge graphs to code graph databases that return relevant code fragments or code structures.

**Space of elicitation and scores.** Only one measurement instrument is linked to this behavior in the papers: Text2Cypher, described as a large-scale dataset used to evaluate the Text-to-Cypher task. No other measurement instrument is linked to it.

**What it is taken as evidence of.** Papers do not link this behavior to any construct, so there is no reported construct that it is taken to indicate.

## Sources

**[SAFE: Schema-Driven Approximate Distance Join for Efficient Knowledge Graph Querying](https://aclanthology.org/2025.emnlp-main.883.pdf) (as "Query graph generation")**
> The process of generating a structured, graph-based representation of a natural language query, which can then be used to search a knowledge graph.

**[BYOKG-RAG: Multi-Strategy Graph Retrieval for Knowledge Graph Question Answering](https://aclanthology.org/2025.emnlp-main.1417.pdf)**
> Producing executable graph database queries (e.g., in openCypher) from natural language questions to retrieve structured data from a knowledge graph.

**[Skeletons Matter: Dynamic Data Augmentation for Text-to-Query](https://aclanthology.org/2025.emnlp-main.64.pdf) (as "Text-to-Cypher generation")**
> The specific task of translating a natural language question into an executable Cypher query for a graph database.

**[Skeletons Matter: Dynamic Data Augmentation for Text-to-Query](https://aclanthology.org/2025.emnlp-main.64.pdf) (as "Text-to-nGQL generation")**
> The specific task of translating a natural language question into an executable nGQL query for a graph database.

## Relationships

### Graph query generation →
- **Text2Cypher** (measurements) — *measured_by*
  > For the Text-to-Cypher task, We evaluate our approach on Text2Cypher (Ozsoy et al., 2025), a large-scale dataset released by Neo4j.
  - [Skeletons Matter: Dynamic Data Augmentation for Text-to-Query](https://aclanthology.org/2025.emnlp-main.64.pdf)
