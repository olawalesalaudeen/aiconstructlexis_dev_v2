# Aggregative question answering
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Aggregation question answering, Abstraction and aggregation, Counting question answering  

## State of the Field

**Space of definitions.** A common framing treats it as producing an aggregate answer, often a count or sum over entities or attributes that satisfy a condition, or a frequency over a given time period. Other papers use the same label for synthesized answers over thousands of conversations, such as trends, demographic concerns, or sentiment shifts, and one formulation casts the task as grouping database rows by a semantically derived attribute before aggregating within each group.

**Variants.** Papers study several settings under closely related names: aggregation question answering, counting question answering, and abstraction and aggregation. The variants range from criteria-based counts or sums over entities and attributes, to temporal frequency questions about events, to queries over thousands of user-chatbot interactions about trending topics or changes in sentiment, and to unstructured-database grouping by abstract semantic attributes before aggregation.

**Space of elicitation and scores.** Papers link it to 2 measurement instruments, ComplexTempQA and WildChat-AQA. ComplexTempQA operationalizes it through counting-type questions about events, entities, or time periods, while WildChat-AQA is introduced as a benchmark for aggregative queries over many user-chatbot conversations.

**What it is taken as evidence of.** Rather than a direct measurement claim, the only construct link relates it to Statistical reasoning. In that relation, aggregation is described as part of quantitative synthesis alongside distributional analysis, correlation analysis, and variance analysis across multi-document settings, and papers do not provide another construct link here.

## Sources

**[MEBench: Benchmarking Large Language Models for Cross-Document Multi-Entity Question Answering](https://aclanthology.org/2025.emnlp-main.77.pdf) (as "Aggregation question answering")**
> Answering a question by counting or summing entities or attributes that meet a certain criteria.

**[From Chat Logs to Collective Insights: Aggregative Question Answering](https://aclanthology.org/2025.emnlp-main.1667.pdf)**
> Generating answers to questions that require synthesizing information across thousands of conversations, such as identifying trends, demographic concerns, or sentiment shifts.

**[UQE: A Query Engine for Unstructured Databases](https://proceedings.neurips.cc/paper_files/paper/2024/file/34b3a40ec9752c1ae48fe85fef8fe8dc-Paper-Conference.pdf) (as "Abstraction and aggregation")**
> Grouping rows from a database based on an abstract, semantically-derived attribute and then performing an aggregation operation (like counting) on each group.

**[ComplexTempQA: A 100m Dataset for Complex Temporal Question Answering](https://aclanthology.org/2025.emnlp-main.463.pdf) (as "Counting question answering")**
> Answering questions that require aggregating or counting the frequency of a specific event type or entity attribute within a given time period.

## Relationships

### Aggregative question answering →
- **WildChat-AQA** (measurements) — *measured_by*
  > To facilitate research into Aggregative Question Answering, we introduce WildChat-AQA, a benchmark constructed from the WildChat dataset (Zhao et al., 2024b; Deng et al., 2024). (Section 1)
  - [From Chat Logs to Collective Insights: Aggregative Question Answering](https://aclanthology.org/2025.emnlp-main.1667.pdf)
- **ComplexTempQA** (measurements) — *measured_by*
  > The dataset includes diverse categories of questions, such as attribute-, comparison-, and counting-type questions, each pertaining to events, entities, or time periods.
  - [ComplexTempQA: A 100m Dataset for Complex Temporal Question Answering](https://aclanthology.org/2025.emnlp-main.463.pdf)

### Associated with
- **Statistical reasoning** (constructs)
  > Statistical tasks assess LLM’s proficiency in quantitative synthesis, including aggregation, distributional analysis, correlation analysis, and variance analysis across multi-document.
  - [MEBench: Benchmarking Large Language Models for Cross-Document Multi-Entity Question Answering](https://aclanthology.org/2025.emnlp-main.77.pdf)
