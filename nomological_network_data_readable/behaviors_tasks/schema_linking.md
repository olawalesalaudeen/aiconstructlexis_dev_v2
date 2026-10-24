# Schema linking
**Type:** Behavior  
**Referenced in:** 11 papers  
**Also known as:** Schema item grounding, Schema parsing, Schema resolution, Schema item prediction, Schema pruning, Schema selection  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats schema linking as identifying, selecting, or outputting the tables and columns relevant to a natural language question, usually the subset needed to construct a valid or accurate SQL query. Some authors make the matching step more explicit, describing it as connecting question tokens, keywords, or phrases to schema elements, while a smaller line of work extends the linked items beyond tables and columns to rows or foreign keys. SAFE-SQL describes the step as detecting question "keywords and phrases" that correspond to schema elements such as tables, columns, rows, and foreign keys, and other papers frame success as grounding schema elements so the SQL can correctly reference them.

**Variants.** A smaller line of work renames the behavior as schema item grounding, schema parsing, schema resolution, schema item prediction, schema selection, or schema pruning. These variants appear especially in large-scale or multi-database settings with complex, redundant, or filtered schemas, where papers describe extracting a salient subset of tables, columns, and sometimes relationships from a large schema pool. LinkAlign: Scalable Schema Linking for Real-World Large-Scale Multi-Database Text-to-SQL also frames schema parsing as extracting potentially required elements across tables, fields, and relationships, while another paper broadens the predicted items to tables, nodes, or attributes.

**Space of elicitation and scores.** Papers link schema linking to 2 measurement instruments, BIRD and Spider, and one evaluation reports schema linking performance on the SPIDER and BIRD datasets. Beyond direct dataset evaluation, a prediction-style variant selects schema items whose probability exceeds a threshold and reports F1-Score and ROC-AUC, while another paper says it uses attention scores to predict schema linking.

**What it is taken as evidence of.** At the construct level, papers connect schema linking only to Cross-domain generalization, and one paper claims a causal relationship from schema linking to that construct. Outside construct links, several papers claim a causal relationship from schema linking to Text-to-SQL, and one paper reports Information retrieval is related to schema linking. Papers do not report another construct link, so they do not show competing construct-level interpretations.

## Sources

**[ROUTE: Robust Multitask Tuning and Collaboration for Text-to-SQL](https://proceedings.iclr.cc/paper_files/paper/2025/file/212b143b5a5d6b88feb0fb1441b9756e-Paper-Conference.pdf)**
> The observable behavior of identifying and outputting the specific database tables and columns that are relevant to a given natural language question.

**[LinkAlign: Scalable Schema Linking for Real-World Large-Scale Multi-Database Text-to-SQL](https://aclanthology.org/2025.emnlp-main.51.pdf) (as "Schema item grounding")**
> The observable identification of relevant tables and columns within a database schema for accurate SQL generation, including correct linking during query construction.

**[LinkAlign: Scalable Schema Linking for Real-World Large-Scale Multi-Database Text-to-SQL](https://aclanthology.org/2025.emnlp-main.51.pdf) (as "Schema parsing")**
> The extraction and identification of necessary tables and columns from a filtered schema to support accurate SQL generation.

**[TinySQL: A Progressive Text-to-SQL Dataset for Mechanistic Interpretability Research](https://aclanthology.org/2025.emnlp-main.1489.pdf) (as "Schema resolution")**
> Identifying and grounding database schema elements (tables, fields) in the natural language query to correctly reference them in the SQL output.

**[Adaptive and Robust Translation from Natural Language to Multi-model Query Languages](https://aclanthology.org/2025.acl-long.776.pdf) (as "Schema item prediction")**
> The behavior of identifying and predicting which schema items, such as tables, nodes, or attributes, are relevant to a given natural language question.

**[DCG-SQL: Enhancing In-Context Learning for Text-to-SQL with Deep Contextual Schema Link Graph](https://aclanthology.org/2025.acl-long.748.pdf) (as "Schema pruning")**
> The observable behavior of identifying and selecting a subset of relevant schema items (tables and columns) from a larger database schema that are necessary to answer a given question.

**[Alpha-SQL: Zero-Shot Text-to-SQL using Monte Carlo Tree Search](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25dt/li25dt.pdf) (as "Schema selection")**
> The action of identifying and selecting the relevant subset of tables and columns from a database schema that are needed to answer a given question.

## Relationships

### Schema linking →
- **Text-to-SQL** (behaviors tasks) — *causes*
  > ideal schema linking can effectively achieve accurate SQL generation, which shows that schema linking is still an effective means to solve Text2SQL at this stage and in the future. (Section 4.3)
  - [ROUTE: Robust Multitask Tuning and Collaboration for Text-to-SQL](https://proceedings.iclr.cc/paper_files/paper/2025/file/212b143b5a5d6b88feb0fb1441b9756e-Paper-Conference.pdf)
- **Spider** (measurements) — *measured_by*
  > We evaluate our method performance of schema linking on the SPIDER, BIRD and AmbiDB datasets
  - [LinkAlign: Scalable Schema Linking for Real-World Large-Scale Multi-Database Text-to-SQL](https://aclanthology.org/2025.emnlp-main.51.pdf)
- **BIRD** (measurements) — *measured_by*
  > We evaluate our method performance of schema linking on the SPIDER, BIRD and AmbiDB datasets
  - [LinkAlign: Scalable Schema Linking for Real-World Large-Scale Multi-Database Text-to-SQL](https://aclanthology.org/2025.emnlp-main.51.pdf)
- **Cross-domain generalization** (constructs) — *causes*
  > Schema-linking is widely recognized as key to improving generalization by adaptively associating queries with database items. (Section 1)
  - [GenLink: Generation-Driven Schema-Linking via Multi-Model Learning for Text-to-SQL](https://aclanthology.org/2025.emnlp-main.1518.pdf)

### Associated with
- **Information retrieval** (behaviors tasks)
  > Through error analysis, we identify two major challenges in schema linking: (1) Database Retrieval: accurately selecting the target database from a large schema pool, while effectively filtering out irrelevant ones
  - [LinkAlign: Scalable Schema Linking for Real-World Large-Scale Multi-Database Text-to-SQL](https://aclanthology.org/2025.emnlp-main.51.pdf)
