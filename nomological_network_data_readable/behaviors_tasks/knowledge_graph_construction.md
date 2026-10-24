# Knowledge graph construction
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Semantic network construction, Factual entity graph construction, Textual entity graph construction, Temporal knowledge graph update  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats this behavior as turning text or documents into a structured graph, usually by extracting entities or concepts as nodes and relations as edges. One paper defines the task as extracting entities E and relations R from a document D, also calling it text-to-graph generation, while related formulations describe semantic networks that represent knowledge structure from textual data. A smaller line of work extends the construction step to adding an edge only when a real-world relationship is found for linked entities, or to updating an existing KG with new scene information while preserving historical structure.

**Variants.** Papers use several nearby names for the behavior: text-to-graph generation, textual entity graph construction, factual entity graph construction, semantic network construction, and temporal knowledge graph update. The settings differ in whether the graph is built only from the input text, augmented by querying Wikipedia for relationships between linked entities, or updated over time by combining the previous temporal KG as long-term memory with the current spatial KG as short-term memory.

**Space of elicitation and scores.** Papers link this behavior to 1 measurement instrument, SciERC. In the recorded use, SciERC appears as a dataset with golden ground truth KGs in experiments alongside general and domain-specific datasets, and no other measurement instrument is linked.

**What it is taken as evidence of.** No constructs are linked to this behavior.

## Sources

**[Semantic Networks Extracted from Students' Think-Aloud Data are Correlated with Students' Learning Performance](https://aclanthology.org/2025.emnlp-main.1309.pdf) (as "Semantic network construction")**
> Transforming textual data into a graph of nodes (concepts) and edges (relations) to represent knowledge structure.

**[Non-Existent Relationship: Fact-Aware Multi-Level Machine-Generated Text Detection](https://aclanthology.org/2025.emnlp-main.186.pdf) (as "Textual entity graph construction")**
> Building a graph representation of entities and their relationships as expressed in the input text, where nodes represent entities and edges represent extracted relations.

**[Non-Existent Relationship: Fact-Aware Multi-Level Machine-Generated Text Detection](https://aclanthology.org/2025.emnlp-main.186.pdf) (as "Factual entity graph construction")**
> Constructing a knowledge-based entity graph by querying a knowledge base (e.g., Wikipedia) to determine whether real-world relationships exist between linked entities.

**[Can LLMs be Good Graph Judge for Knowledge Graph Construction?](https://aclanthology.org/2025.emnlp-main.554.pdf)**
> The process of automatically extracting entities and their relationships from unstructured text to create a structured knowledge graph.

**[Synergizing Multimodal Temporal Knowledge Graphs and Large Language Models for Social Relation Recognition](https://aclanthology.org/2025.emnlp-main.224.pdf) (as "Temporal knowledge graph update")**
> Updating a knowledge graph over time by incorporating new scene information while preserving historical structure, enabling long-term reasoning.

## Relationships

### Knowledge graph construction →
- **SciERC** (measurements) — *measured_by*
  > In our study, we conduct experiments on two general datasets (REBEL-Sub (Huguet Cabot and Navigli, 2021) and GenWiki (Jin et al., 2020)) and two domain-specific datasets (SCIERC (Luan et al., 2018) and the Windows-centric subset of Re-DocRED (Tan et al., 2022)) with golden ground truth KGs (Section 5.1.1).
  - [Can LLMs be Good Graph Judge for Knowledge Graph Construction?](https://aclanthology.org/2025.emnlp-main.554.pdf)
