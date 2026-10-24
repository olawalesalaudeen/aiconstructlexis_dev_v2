# Schema matching
**Type:** Behavior  
**Referenced in:** 4 papers  
**Also known as:** Table join prediction, Attribute alignment  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage is matching semantically corresponding columns or attributes across tables or knowledge graphs. Most commonly, authors describe it as checking whether a pair of columns from two tables are related, often as a binary classification decision; another formulation asks for a valid mapping of columns between two tables so a join can be performed. A smaller line of work uses the name attribute alignment for matching attributes from different knowledge graphs that have the same semantic meaning even when their labels differ.

**Variants.** Recurring settings include table-centric matching between two tables, sometimes with partially overlapping columns, and alignment across different knowledge graphs. The table-focused work uses names such as schema matching and table join prediction, while the knowledge-graph work uses attribute alignment and sometimes discusses alignment together with filtering. One paper also relates schema matching to candidate generation, ranking, and confidence scoring.

**Space of elicitation and scores.** Papers link it to one measurement instrument, Wikidata, used in evaluation and described as a general knowledge base. No other measurement instrument is linked, although a benchmark frames predicting which columns can be used to join two tables as part of Data analysis.

**What it is taken as evidence of.** Rather than treating schema matching as evidence of a single construct, the linked construct relations are all causal claims. Papers claim causal relationships from contextual understanding, semantic understanding, and in-context learning to schema matching; the supporting language says contextual understanding enables reasoning about schema hierarchies and potential matches, and that semantic understanding is needed to decide whether differently labeled attributes represent the same concept. These papers therefore present separate causal accounts, not a shared account of one construct that schema matching is taken to reflect.

## Sources

**[Table-LLM-Specialist: Language Model Specialists for Tables using Iterative Fine-tuning](https://aclanthology.org/2025.emnlp-main.1795.pdf)**
> Determining whether two columns from different tables are semantically related, treated as a binary classification task.

**[LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf) (as "Table join prediction")**
> The task of identifying and creating a valid mapping of columns between two tables to perform a join.

**[Tackling Uncertain Correspondences for Multi-Modal Entity Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/d7ed243b13831bdd468f35039936bcef-Paper-Conference.pdf) (as "Attribute alignment")**
> The task of identifying and matching attributes from different knowledge graphs that have the same semantic meaning, even if their labels differ, often performed using an LLM.

## Relationships

### Schema matching →
- **Wikidata** (measurements) — *measured_by*
  > Specifically, we evaluate Matchmaker on Magellan (e-commerce) and WikiData (general knowledge base). (Section 5.4)
  - [Bootstrapping Self-Improvement of Language Model Programs for Zero-Shot Schema Matching](https://raw.githubusercontent.com/mlresearch/v267/main/assets/seedat25a/seedat25a.pdf)

### → Schema matching
- **Semantic understanding** (constructs) — *causes*
  > Aligning attributes across different MMKGs is challenging due to the variations in the expression of identical attributes. It necessitates more than a basic lexical comparison and requires a profound semantic understanding to ascertain whether attributes with different labels indeed represent the same concept. (Section 4.1)
  - [Tackling Uncertain Correspondences for Multi-Modal Entity Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/d7ed243b13831bdd468f35039936bcef-Paper-Conference.pdf)
- **In-context learning** (constructs) — *causes*
  > With in-context learning, off-the-shelf LLM can solve attribute alignment without fine-tuning. (Section 4.1)
  - [Tackling Uncertain Correspondences for Multi-Modal Entity Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/d7ed243b13831bdd468f35039936bcef-Paper-Conference.pdf)
- **Contextual understanding** (constructs) — *causes*
  > This contextual understanding enables LLMs to effectively reason about schema hierarchies and identify potential matches. (Section 4)
  - [Bootstrapping Self-Improvement of Language Model Programs for Zero-Shot Schema Matching](https://raw.githubusercontent.com/mlresearch/v267/main/assets/seedat25a/seedat25a.pdf)

### Associated with
- **Candidate generation** (behaviors tasks)
  > we propose Matchmaker - a compositional language model program for schema matching, comprised of candidate generation, refinement and confidence scoring. (Abstract)
  - [Bootstrapping Self-Improvement of Language Model Programs for Zero-Shot Schema Matching](https://raw.githubusercontent.com/mlresearch/v267/main/assets/seedat25a/seedat25a.pdf)
- **Confidence scoring** (behaviors tasks)
  > we propose Matchmaker - a compositional language model program for schema matching, comprised of candidate generation, refinement and confidence scoring. (Abstract)
  - [Bootstrapping Self-Improvement of Language Model Programs for Zero-Shot Schema Matching](https://raw.githubusercontent.com/mlresearch/v267/main/assets/seedat25a/seedat25a.pdf)
- **Data analysis** (behaviors tasks)
  > “Data Analysis: three tasks using recent datasets from Kaggle and Socrata, specifically, ... predicting which columns can be used to join two tables”
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
