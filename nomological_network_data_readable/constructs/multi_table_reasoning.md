# Multi-table reasoning
**Type:** Construct  
**Referenced in:** 4 papers  
**Also known as:** Cross-table comprehension, Multi-table understanding  

## State of the Field

**Definition agreement:** Consensus. All papers define multi-table reasoning as a model's ability to understand and integrate information distributed across multiple related or interdependent tables. Most papers differ only in emphasis, with one spelling out operations like joins, filtering, and aggregation while the others describe the same core ability more broadly in terms of unified analysis or downstream task support.

**Space of definitions.** Across papers, the prevailing usage is a latent or general ability to integrate information across multiple related or interdependent tables and reason over it. Most definitions converge on cross-table understanding as the central idea, while a narrower framing in nvAgent: Automated Data Visualization from Natural Language via Collaborative Agent Workflow makes this concrete through correct joins, filtering conditions, and aggregations for complex queries, and other papers phrase the same ability more broadly as unified analysis or support for downstream tasks.

**Space of facets.** Papers do not offer a detailed taxonomy of subtypes. Instead, they use nearby labels, multi-table reasoning, cross-table comprehension, and multi-table understanding, for closely overlapping descriptions centered on integrating information from multiple tables; one paper further specifies query-oriented components such as joins, filters, and aggregations, while another explicitly pairs understanding with reasoning in multi-table tasks.

**Space of measurement.** No measurement instrument is linked to it, and it is linked to one behavioral indicator, Information retrieval, through a causal relationship rather than a measurement link. In the papers' descriptions, the construct is examined through performance on multi-table tasks: models show degradation when moving from single-table to multi-table settings, papers assess handling multi-table tasks, and failures are described in terms of incorrect joins or mis-filtering in cross-table queries. These descriptions use the same cross-table integration frame that appears in the definitions.

**Links.** The papers only claim one link: one paper reports a causal relationship from Information retrieval to Multi-table reasoning, stating that subsequent reasoning and answering performance are based on the quality of the retrieved tables. No papers report correlational or other related links.

## Sources

**[nvAgent: Automated Data Visualization from Natural Language via Collaborative Agent Workflow](https://aclanthology.org/2025.acl-long.960.pdf)**
> The latent ability of a model to integrate and reason across multiple related tables in a database, including correct identification of joins, filtering conditions, and aggregations to support complex queries.

**[T2R-BENCH: A Benchmark for Real World Table-to-Report Task](https://aclanthology.org/2025.emnlp-main.1141.pdf) (as "Cross-table comprehension")**
> The ability to understand and reason across multiple interdependent tables, integrating information from different sources into a unified analysis.

**[MMQA: Evaluating LLMs with Multi-Table Multi-Hop Complex Questions](https://proceedings.iclr.cc/paper_files/paper/2025/file/794a425a2e47e05d29d30f79b79a692d-Paper-Conference.pdf) (as "Multi-table understanding")**
> The latent ability to comprehend information distributed across multiple related tables and use that structure to support downstream task performance.

## Relationships

### → Multi-table reasoning
- **Information retrieval** (behaviors tasks) — *causes*
  > This task is fundamental because in the real-world scenario, the subsequent steps of reasoning and answering performance are based on the quality of the retrieved tables.
  - [MMQA: Evaluating LLMs with Multi-Table Multi-Hop Complex Questions](https://proceedings.iclr.cc/paper_files/paper/2025/file/794a425a2e47e05d29d30f79b79a692d-Paper-Conference.pdf)
