# Spider
**Type:** Measurement  
**Referenced in:** 35 papers  
**Also known as:** SPIDER  

## State of the Field

**What it is.** Across the surveyed work, the prevailing usage treats Spider as a large-scale, complex, cross-domain text-to-SQL benchmark or dataset. Papers commonly describe it as natural-language questions paired with SQL queries over multiple databases or database schemas, sometimes emphasizing executable SQL and syntactic and semantic correctness. A smaller line of work describes it as a benchmark for text-to-SQL semantic parsers or parsing over one or more relational tables, and some papers also refer to train, development, and test splits and a range of difficulty levels.

**What it is claimed to measure.** Papers overwhelmingly use Spider to measure Text-to-SQL, including generating SQL queries from natural-language questions and schemas. Beyond that dominant use, papers link it to two behavioral indicators, Text-to-SQL and Schema linking, and to two constructs, Cross-domain generalization and General ability. The claims are concentrated on Text-to-SQL, while a single paper each reports Spider as measuring schema linking, evaluating cross-domain generalization, or testing general downstream performance.

**Space of uses.** Papers usually position Spider as a standard or prominent benchmark in text-to-SQL evaluation. They often use it alongside other text-to-SQL datasets such as BIRD, KaggleDBQA, and CoSQL, and some papers pair it with Spider-DK, Spider-Realistic, or Spider-Syn. Some evaluations focus on the development split, and one paper explicitly notes that its problem descriptions do not include unit tests.

## Sources

**[Lemur: Harmonizing Natural Language and Code for Language Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/41ec0e510c31883f3b50a782651fb5b9-Paper-Conference.pdf)**
> Text-to-SQL benchmark evaluating the ability to generate syntactically and semantically correct SQL queries from natural language questions over complex databases, used here without unit tests.

**[ROUTE: Robust Multitask Tuning and Collaboration for Text-to-SQL](https://proceedings.iclr.cc/paper_files/paper/2025/file/212b143b5a5d6b88feb0fb1441b9756e-Paper-Conference.pdf) (as "SPIDER")**
> A widely-used, large-scale, cross-domain benchmark dataset for evaluating Text-to-SQL models, consisting of natural language questions paired with SQL queries across multiple databases.

## Relationships

### → Spider
- **Text-to-SQL** (behaviors tasks) — *measured_by*
  > SELF-DEBUGGING achieves the state-of-the-art performance on several code generation benchmarks, including Spider for text-to-SQL generation, TransCoder for C++-to-Python translation, and MBPP for text-to-Python generation.
  - [Teaching Large Language Models to Self-Debug](https://proceedings.iclr.cc/paper_files/paper/2024/file/2460396f2d0d421885997dd1612ac56b-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > To validate that MTJD indeed betters output quality, we test MTJD (k=4) and standard multinomial sampling on Spider, MTBench, and HumanEval using the Llama-3 series models. ... For this process, the higher the scores, the better the downstream performance. (Section 5.1)
  - [Optimized Multi-Token Joint Decoding With Auxiliary Model for LLM Inference](https://proceedings.iclr.cc/paper_files/paper/2025/file/438c34f45d7b5d82aef1b6016e695d5a-Paper-Conference.pdf)
- **Schema linking** (behaviors tasks) — *measured_by*
  > We evaluate our method performance of schema linking on the SPIDER, BIRD and AmbiDB datasets
  - [LinkAlign: Scalable Schema Linking for Real-World Large-Scale Multi-Database Text-to-SQL](https://aclanthology.org/2025.emnlp-main.51.pdf)
- **Cross-domain generalization** (constructs) — *measured_by*
  > Benchmarks like Spider(Yu et al., 2019) and BIRD(Li et al., 2023b) evaluate cross-domain generalization, where training and test databases are disjoint. (Section 1)
  - [GenLink: Generation-Driven Schema-Linking via Multi-Model Learning for Text-to-SQL](https://aclanthology.org/2025.emnlp-main.1518.pdf)
