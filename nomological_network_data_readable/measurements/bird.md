# BIRD
**Type:** Measurement  
**Referenced in:** 27 papers  
**Also known as:** BIRD-Bench  

## State of the Field

**What it is.** Across the papers, BIRD is most commonly described as a large-scale, cross-domain, database-grounded Text-to-SQL benchmark, often framed as more challenging than earlier datasets because it includes complex databases, difficult questions, and reliance on external knowledge. Definitions also emphasize real-world coverage, with descriptions ranging from databases drawn from 37 domains to 95 databases, diverse cell-value formats, dirty values, and value-based reasoning; one sizing gives 9,428 training, 1,534 development, and 1,789 test pairs, while another describes over 12,751 unique question-SQL pairs totaling 33.4 GB. A smaller naming variant calls it BIRD-Bench, and some papers refer specifically to the development set, including a 1,534-example dev split with 11 databases or a dated 20240627 BIRD-dev version.

**What it is claimed to measure.** Papers link BIRD to 2 behavioral indicators and 1 construct. The prevailing use is to measure Text-to-SQL, with papers evaluating natural language queries to SQL generation on it; a smaller line of work uses it to measure schema linking, and one paper reports it as measuring cross-domain generalization, explicitly describing training and test databases as disjoint. The claims therefore concentrate on Text-to-SQL rather than spreading evenly across many targets.

**Space of uses.** Papers usually position BIRD as a standard or prominent benchmark rather than as a narrow auxiliary check. It is most often used alongside Spider, and some papers pair it with CoSQL, KaggleDBQA, AmbiDB, and Text2Cypher, or place it in broader text-to-query suites; some also note that methods can be adapted to BIRD from other Text-to-SQL settings. Usage varies between the full benchmark, sampled subsets, and specific dev resources, including the 20240627 BIRD-dev set.

## Sources

**[ROUTE: Robust Multitask Tuning and Collaboration for Text-to-SQL](https://proceedings.iclr.cc/paper_files/paper/2025/file/212b143b5a5d6b88feb0fb1441b9756e-Paper-Conference.pdf)**
> A large-scale, cross-domain Text-to-SQL benchmark designed to be more challenging than previous datasets, featuring complex databases, difficult questions, and reliance on external knowledge.

**[AMBROSIA: A Benchmark for Parsing Ambiguous Questions into Database Queries](https://proceedings.neurips.cc/paper_files/paper/2024/file/a4c942a8405cc910f0a833d28d2573cc-Paper-Datasets_and_Benchmarks_Track.pdf) (as "BIRD-Bench")**
> A benchmark for large-scale database grounded text-to-SQL tasks.

## Relationships

### → BIRD
- **Text-to-SQL** (behaviors tasks) — *measured_by*
  > For text-to-SQL tasks, the agent has to convert users’ natural language queries into SQL code to meet their data requirements. StreamBench integrates three prominent datasets: Spider [17], CoSQL [18], and BIRD [19]. (Section 3.2)
  - [StreamBench: Towards Benchmarking Continuous Improvement of Language Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/c189915371c4474fe9789be3728113fc-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Schema linking** (behaviors tasks) — *measured_by*
  > We evaluate our method performance of schema linking on the SPIDER, BIRD and AmbiDB datasets
  - [LinkAlign: Scalable Schema Linking for Real-World Large-Scale Multi-Database Text-to-SQL](https://aclanthology.org/2025.emnlp-main.51.pdf)
- **Cross-domain generalization** (constructs) — *measured_by*
  > Benchmarks like Spider(Yu et al., 2019) and BIRD(Li et al., 2023b) evaluate cross-domain generalization, where training and test databases are disjoint. (Section 1)
  - [GenLink: Generation-Driven Schema-Linking via Multi-Model Learning for Text-to-SQL](https://aclanthology.org/2025.emnlp-main.1518.pdf)
- **Table reasoning** (constructs) — *measured_by*
  > To verify the scalability of TableRAG for larger tables, we build two new benchmarks sourced from the real-world Arcade [26] and BIRD-SQL [7] datasets.
  - [TableRAG: Million-Token Table Understanding with Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/88dd7aa6979e352fda7c4952ca8eac59-Paper-Conference.pdf)
