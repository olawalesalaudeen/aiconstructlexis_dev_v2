# WikiSQL
**Type:** Measurement  
**Referenced in:** 7 papers  

## State of the Field

**What it is.** Most commonly, papers treat WikiSQL as a standard or benchmark text-to-SQL dataset. Definitions also place it among early benchmarks for Text-to-SQL parsing over relational tables, including one description that narrows this to single relational tables, while another paper uses it as a benchmark in a main evaluation table for structured knowledge grounding. A smaller usage presents it as another corpus to which a methodology can be adapted.

**What it is claimed to measure.** Papers link WikiSQL to two behavioral indicators and no constructs. It is reported as measuring Table question answering and Text-to-SQL: one paper describes it as one of three challenging table QA datasets, and another places it among early benchmarks that focus on Text-to-SQL parsing over relational tables. The reported measurement role is therefore split across these two task framings rather than tied to a linked construct.

**Space of uses.** No measurement instrument is linked to it. Papers nevertheless mention or use WikiSQL alongside other benchmarks, including BIRD and Spider as other text-to-SQL datasets, and alongside WikiTQ and FeTaQA when reporting table question answering results. Another paper includes it as a named column in a main results table.

## Sources

**[LLaSA: Large Language and Structured Data Assistant](https://aclanthology.org/2025.naacl-long.97.pdf)**
> WikiSQL is a standard text-to-SQL dataset referenced as another corpus the framework could be adapted to.

## Relationships

### → WikiSQL
- **Table question answering** (behaviors tasks) — *measured_by*
  > CABINET establishes new SoTA on three challenging table QA datasets (WikiTQ, FeTaQA and WikiSQL) significantly outperforming various strong baselines (§ 4.1). (Section 1)
  - [CABINET: Content Relevance-based Noise Reduction for Table Question Answering](https://proceedings.iclr.cc/paper_files/paper/2024/file/19a42d5885e25e51852aca8144e5af0d-Paper-Conference.pdf)
- **Text-to-SQL** (behaviors tasks) — *measured_by*
  > "early benchmarks such as WikiSQL (Yavuz et al., 2018) and Spider (Yu et al., 2018) focus on Text-to-SQL parsing over one or more relational tables"
  - [SportReason: Evaluating Retrieval-Augmented Reasoning across Tables and Text for Sports Question Answering](https://aclanthology.org/2025.emnlp-main.34.pdf)
