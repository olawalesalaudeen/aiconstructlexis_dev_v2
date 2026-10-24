# Code retrieval
**Type:** Behavior  
**Referenced in:** 7 papers  
**Also known as:** Code-to-code retrieval, Text-to-code retrieval, Code search  

## State of the Field

**Space of definitions.** Across the definitions, the prevailing usage treats code retrieval as searching a codebase or repository for relevant code snippets in response to a query, often framed as semantic search. Queries are most commonly natural language or code, and success is described as returning semantically relevant code; some papers narrow this to retrieving a specific function described in natural language without being named, or exact code snippets from very large repositories, while repository-level work focuses on selecting the most relevant snippet from other files for next-line prediction. A smaller framing, under the name code search, treats the task as a classification task that checks whether an incomplete code snippet is semantically consistent with a given text.

**Variants.** Papers distinguish text-to-code retrieval, also called NL2Code semantic search, from code-to-code retrieval, also called Code2Code semantic search. Other variants move to repository-level settings, including retrieving a function from a natural-language behavior description, retrieving exact snippets from very large repositories, and selecting relevant code knowledge from a repository knowledge base given an incomplete code query or in-file context. One paper also groups code-to-text and hybrid code retrieval under the same family.

**Space of elicitation and scores.** Papers link code retrieval to one measurement instrument only: CodeSearchNet. The recorded link says code retrieval is measured by this benchmark for function-level text-to-code retrieval, where natural language queries are used to retrieve relevant code snippets.

**What it is taken as evidence of.** The papers do not link code retrieval to any construct, so they do not state that it serves as evidence of a named construct.

## Sources

**[CoRNStack: High-Quality Contrastive Data for Better Code Retrieval and Reranking](https://proceedings.iclr.cc/paper_files/paper/2025/file/285b0e63256699c04dbf2c8d4163fba4-Paper-Conference.pdf)**
> The task of searching for and retrieving relevant code snippets from a large codebase based on a query.

**[CoRNStack: High-Quality Contrastive Data for Better Code Retrieval and Reranking](https://proceedings.iclr.cc/paper_files/paper/2025/file/285b0e63256699c04dbf2c8d4163fba4-Paper-Conference.pdf) (as "Text-to-code retrieval")**
> A semantic search task where natural language queries are used to retrieve relevant code snippets.

**[CoRNStack: High-Quality Contrastive Data for Better Code Retrieval and Reranking](https://proceedings.iclr.cc/paper_files/paper/2025/file/285b0e63256699c04dbf2c8d4163fba4-Paper-Conference.pdf) (as "Code-to-code retrieval")**
> The task of retrieving relevant code snippets based on another code snippet as a query.

**[LEANCODE: Understanding Models Better for Code Simplification of Pre-trained Large Language Models](https://aclanthology.org/2025.acl-long.78.pdf) (as "Code search")**
> Retrieving relevant code snippets from a codebase given a natural language query, treated as a classification task where models determine semantic consistency between text and code.

## Relationships

### Code retrieval →
- **CodeSearchNet** (measurements) — *measured_by*
  > First, we consider CodeSearchNet (CSN) (Husain et al., 2019) and AdvTest (Lu et al., 2021) as benchmarks for function-level text-to-code retrieval, a semantic search task where natural language queries are used to retrieve relevant code snippets. (Section 4.1.1)
  - [CoRNStack: High-Quality Contrastive Data for Better Code Retrieval and Reranking](https://proceedings.iclr.cc/paper_files/paper/2025/file/285b0e63256699c04dbf2c8d4163fba4-Paper-Conference.pdf)
- **BM25** (measurements) — *measured_by*
  > "Traditional RACG methods rely on retrievers like BM25 ... to fetch contextually relevant code snippets from repositories."
  - [SelfRACG: Enabling LLMs to Self-Express and Retrieve for Code Generation](https://aclanthology.org/2025.emnlp-main.541.pdf)
