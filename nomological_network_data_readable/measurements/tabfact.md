# TabFact
**Type:** Measurement  
**Referenced in:** 13 papers  

## State of the Field

**What it is.** Across the surveyed work, TabFact is most commonly described as a benchmark or dataset for table-based fact verification over Wikipedia tables, pairing tables with textual statements and asking whether each statement is supported, entailed or true, or instead refuted or false, by the table. Several papers also call it a large-scale dataset, and some describe a specific evaluation subset, the test-small set with 2,024 statements or test samples from 298 tables. A smaller line of work presents it as a public TableQA resource, describing pairs of content-related question and answer or yes or no answers for TQA evaluation.

**What it is claimed to measure.** Papers use TabFact to measure 2 behavioral indicators and 1 construct. The prevailing measurement claim is fact checking, with papers explicitly using it for fact verification or TFV; a smaller but recurring usage treats it as measuring table question answering, including TableQA settings where the answer is yes or no. At the construct level, it is also reported as measuring table reasoning, so papers connect it both to specific behaviors and to a broader table reasoning construct.

**Space of uses.** Papers commonly use TabFact alongside WikiTQ, and more occasionally with FeTaQA, FinQA, HiTab, and TabMWP. It is usually positioned as one component of broader evaluations across multiple table tasks, while some work uses the test-small split specifically, one paper uses it as held-in training and evaluation data, and another generates synthetic larger-table variants from TabFact, ranging from 50 × 50 to 1000 × 1000, for scalability evaluation.

**Concerns raised.** One paper notes that, as a TableQA benchmark, TabFact features small web tables that fall within the context limits of most LMs. That paper also creates synthetic data from TabFact with larger table sizes for a scalability test.

## Sources

**[LLaSA: Large Language and Structured Data Assistant](https://aclanthology.org/2025.naacl-long.97.pdf)**
> A benchmark dataset for table-based fact verification, containing statements paired with Wikipedia tables, where the task is to determine if the statement is supported by the table.

## Relationships

### → TabFact
- **Fact checking** (behaviors tasks) — *measured_by*
  > We evaluate our method on three datasets covering fact verification, short-form, and long-form question-answering tasks... (a) TabFact (Chen et al., 2019): A fact verification benchmark utilizing Wikipedia tables. (Section 3)
  - [H-STAR: LLM-driven Hybrid SQL-Text Adaptive Reasoning on Tables](https://aclanthology.org/2025.naacl-long.445.pdf)
- **Table question answering** (behaviors tasks) — *measured_by*
  > Existing TableQA benchmarks such as TabFact [2] and WikiTableQA [12] feature small web tables that fall within the context limits of most LMs (Section 4.1)
  - [TableRAG: Million-Token Table Understanding with Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/88dd7aa6979e352fda7c4952ca8eac59-Paper-Conference.pdf)
- **Table reasoning** (constructs) — *measured_by*
  > We validate CHAIN-OF-TABLE with three tabular benchmarks to evaluate table-based reasoning: WikiTQ (Pasupat & Liang, 2015), TabFact (Chen et al., 2019), and FeTaQA (Nan et al., 2022). (Section 2)
  - [Chain-of-Table: Evolving Tables in the Reasoning Chain for Table Understanding](https://proceedings.iclr.cc/paper_files/paper/2024/file/f53fd88a4340063ecd258c0ae9948b40-Paper-Conference.pdf)
