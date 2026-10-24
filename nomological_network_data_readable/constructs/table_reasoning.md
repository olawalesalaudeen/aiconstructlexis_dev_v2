# Table reasoning
**Type:** Construct  
**Referenced in:** 20 papers  
**Also known as:** Table-based reasoning, Table understanding, Visual table understanding, Column-level understanding, Table perception, Compositional condition understanding, Table structure understanding, Tabular reasoning  

## State of the Field

**Definition agreement:** Conflicting. Most papers define table reasoning as a model's ability to understand and reason over structured tabular data to answer, verify, or compute answers for natural language queries. But a substantial minority define it instead as reasoning over graphical charts, and a few others as visual table recognition or schema relationship understanding, so the construct is applied to different kinds of inputs and tasks rather than the same phenomenon.

**Space of definitions.** Across papers, the prevailing usage treats table reasoning as a latent ability or capacity to comprehend, query, process, connect, and synthesize structured tabular data in response to natural language questions or complex queries. Many definitions add intermediate reasoning over rows, columns, and cell values, or say it involves solving questions or verification problems by extracting and manipulating information from tables through intermediate steps. A smaller line of work frames it as a task rather than a model property, describing it as answering questions or solving problems based on a given table.

**Space of facets.** Papers often use table reasoning, table-based reasoning, tabular reasoning, and table understanding for closely overlapping phenomena, with some definitions broadening the scope to open-domain use, multi-table settings, or tables and infoboxes, and others narrowing it to visual tables. Several papers decompose the area into narrower facets, including column-level understanding, compositional condition understanding, and table structure understanding. In the visual-table line, the construct is further organized into table detection, table structure recognition, table querying, and table question answering, and some papers position table-based question answering and fact verification as tasks handled by table-based reasoning.

**Space of measurement.** Operationalization is mostly benchmark based: papers link table reasoning to 9 measurement instruments and 7 behavioral indicators. The most frequently linked instruments are WikiTQ, TabFact, BIG-Bench Hard, BiRdQA, and FEVEROUS, plus 4 other instruments; the evidence describes them as tabular benchmarks, datasets, or task collections, with FEVEROUS adapted for open-domain table reasoning and BIG-Bench Hard containing a tabular reasoning task. Overall, these operationalizations mostly follow definitions centered on answering questions from structured tables, though some extend to fact verification, larger or open-domain tables, table structure understanding, and Text-to-SQL.

**Links.** The papers do not make causal or correlational claims about this construct; they use related links instead. Most of these state that other tasks or abilities are related to table reasoning, for example table question answering, arithmetic computation, information extraction, and mathematical reasoning. Papers also connect it in the same related sense to several other constructs and indicators, and one paper relates table reasoning to temporal reasoning.

## Sources

**[OpenTab: Advancing Large Language Models as Open-domain Table Reasoners](https://proceedings.iclr.cc/paper_files/paper/2024/file/055ff1d86ca33e84c744cf8cca65ec8f-Paper-Conference.pdf)**
> The latent ability of a model to comprehend, query, and synthesize information from structured tabular data to address natural language prompts.

**[Chain-of-Table: Evolving Tables in the Reasoning Chain for Table Understanding](https://proceedings.iclr.cc/paper_files/paper/2024/file/f53fd88a4340063ecd258c0ae9948b40-Paper-Conference.pdf) (as "Table-based reasoning")**
> The capacity to solve questions or verification problems by extracting and manipulating information from tables through intermediate reasoning steps.

**[TableRAG: Million-Token Table Understanding with Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/88dd7aa6979e352fda7c4952ca8eac59-Paper-Conference.pdf) (as "Table understanding")**
> The latent ability of a language model to comprehend and process information presented in a structured tabular format.

**[TabPedia: Towards Comprehensive Visual Table Understanding with Concept Synergy](https://proceedings.neurips.cc/paper_files/paper/2024/file/0d97fe65d7a1dc12a05642d9fa4cd578-Paper-Conference.pdf) (as "Visual table understanding")**
> The model's latent ability to comprehend the structure, content, and semantics of tables presented in a visual format, such as a document image.

**[MMQA: Evaluating LLMs with Multi-Table Multi-Hop Complex Questions](https://proceedings.iclr.cc/paper_files/paper/2025/file/794a425a2e47e05d29d30f79b79a692d-Paper-Conference.pdf) (as "Column-level understanding")**
> The ability to interpret the semantic meaning of table columns and their relationships, such as identifying primary and foreign keys.

**[Can GRPO Boost Complex Multimodal Table Understanding?](https://aclanthology.org/2025.emnlp-main.637.pdf) (as "Table perception")**
> The ability to visually recognize and represent table structures and contents from table images.

**[Compositional Condition Question Answering in Tabular Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jiang25o/jiang25o.pdf) (as "Compositional condition understanding")**
> The latent ability to interpret and reason over multiple interdependent conditions in a question when retrieving or computing answers from tabular data.

**[TableEval: A Real-World Benchmark for Complex, Multilingual, and Multi-Structured Table Question Answering](https://aclanthology.org/2025.emnlp-main.363.pdf) (as "Table structure understanding")**
> The latent ability of an LLM to interpret and reason over complex table layouts, including hierarchical, nested, and concise structures, beyond simple flat tables.

**[DETQUS: Decomposition-Enhanced Transformers for QUery-focused Summarization](https://aclanthology.org/2025.naacl-long.138.pdf) (as "Tabular reasoning")**
> The latent ability to understand, connect, and synthesize information from structured tabular data to answer complex queries.

## Relationships

### Table reasoning →
- **WikiTQ** (measurements) — *measured_by*
  > We validate CHAIN-OF-TABLE with three tabular benchmarks to evaluate table-based reasoning: WikiTQ (Pasupat & Liang, 2015), TabFact (Chen et al., 2019), and FeTaQA (Nan et al., 2022). (Section 2)
  - [Chain-of-Table: Evolving Tables in the Reasoning Chain for Table Understanding](https://proceedings.iclr.cc/paper_files/paper/2024/file/f53fd88a4340063ecd258c0ae9948b40-Paper-Conference.pdf)
- **TabFact** (measurements) — *measured_by*
  > We validate CHAIN-OF-TABLE with three tabular benchmarks to evaluate table-based reasoning: WikiTQ (Pasupat & Liang, 2015), TabFact (Chen et al., 2019), and FeTaQA (Nan et al., 2022). (Section 2)
  - [Chain-of-Table: Evolving Tables in the Reasoning Chain for Table Understanding](https://proceedings.iclr.cc/paper_files/paper/2024/file/f53fd88a4340063ecd258c0ae9948b40-Paper-Conference.pdf)
- **FEVEROUS** (measurements) — *measured_by*
  > We adapted the dataset for open-domain table reasoning by filtering 323 examples from the validation set that rely solely on table data, using a corpus of 26,177 candidate tables from the FEVEROUS dataset.
  - [OpenTab: Advancing Large Language Models as Open-domain Table Reasoners](https://proceedings.iclr.cc/paper_files/paper/2024/file/055ff1d86ca33e84c744cf8cca65ec8f-Paper-Conference.pdf)
- **FeTaQA** (measurements) — *measured_by*
  > We validate CHAIN-OF-TABLE with three tabular benchmarks to evaluate table-based reasoning: WikiTQ (Pasupat & Liang, 2015), TabFact (Chen et al., 2019), and FeTaQA (Nan et al., 2022). (Section 2)
  - [Chain-of-Table: Evolving Tables in the Reasoning Chain for Table Understanding](https://proceedings.iclr.cc/paper_files/paper/2024/file/f53fd88a4340063ecd258c0ae9948b40-Paper-Conference.pdf)
- **BIG-Bench Hard** (measurements) — *measured_by*
  > We evaluate on tasks selected from BIG-Bench Hard (BBH) [43], a collection of diverse tasks considered to be challenging to LLMs ... the tasks include numerical reasoning, commonsense problem-solving, logical deduction, linguistic manipulation, machine translation, and tabular reasoning, among others. (Section 3.1)
  - [Teach Better or Show Smarter? On Instructions and Exemplars in Automatic Prompt Optimization](https://proceedings.neurips.cc/paper_files/paper/2024/file/6b031defd145b02bed031093d8797bb3-Paper-Conference.pdf)
- **HiTab** (measurements) — *measured_by*
  > ROT is evaluated on three widely used table reasoning datasets: WikiTableQuestions (Pasupat and Liang, 2015), HiTab (Cheng et al., 2022), and TableBench (Wu et al., 2024) (Section 3.1)
  - [RoT: Enhancing Table Reasoning with Iterative Row-Wise Traversals](https://aclanthology.org/2025.emnlp-main.29.pdf)
- **TableBench** (measurements) — *measured_by*
  > ROT is evaluated on three widely used table reasoning datasets: WikiTableQuestions (Pasupat and Liang, 2015), HiTab (Cheng et al., 2022), and TableBench (Wu et al., 2024) (Section 3.1)
  - [RoT: Enhancing Table Reasoning with Iterative Row-Wise Traversals](https://aclanthology.org/2025.emnlp-main.29.pdf)
- **TableEval** (measurements) — *measured_by*
  > This approach accommodates various task types within diverse real-world industrial scenarios, including information retrieval, numerical analysis, table reasoning, data analysis, multi-turn dialogue, and understanding of table structures. (Section 3.1)
  - [TableEval: A Real-World Benchmark for Complex, Multilingual, and Multi-Structured Table Question Answering](https://aclanthology.org/2025.emnlp-main.363.pdf)
- **BIRD** (measurements) — *measured_by*
  > To verify the scalability of TableRAG for larger tables, we build two new benchmarks sourced from the real-world Arcade [26] and BIRD-SQL [7] datasets.
  - [TableRAG: Million-Token Table Understanding with Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/88dd7aa6979e352fda7c4952ca8eac59-Paper-Conference.pdf)

### Associated with
- **Table question answering** (behaviors tasks)
  > Table-based reasoning with large language models (LLMs) is a promising direction to tackle many table understanding tasks, such as table-based question answering and fact veriﬁcation. (ABSTRACT)
  - [Chain-of-Table: Evolving Tables in the Reasoning Chain for Table Understanding](https://proceedings.iclr.cc/paper_files/paper/2024/file/f53fd88a4340063ecd258c0ae9948b40-Paper-Conference.pdf)
- **Mathematical reasoning** (constructs)
  > Secondly, table reasoning tasks often require numerical reasoning, data preparation, or key cell identification.
  - [ALTER: Augmentation for Large-Table-Based Reasoning](https://aclanthology.org/2025.naacl-long.9.pdf)
- **Table structure recognition** (behaviors tasks)
  > Visual Table Understanding (VTU) generally encompasses four subtasks: Table Detection (TD), which locates tables within document images; Table Structure Recognition (TSR), which parses the structure of tables in table-centric images; Table Querying (TQ), which recognizes the structure of a table from an entire image at a given location, a task that remains underexplored in the previous works; and Table Question Answering (TQA), which answers questions based on table contents. (Introduction)
  - [TabPedia: Towards Comprehensive Visual Table Understanding with Concept Synergy](https://proceedings.neurips.cc/paper_files/paper/2024/file/0d97fe65d7a1dc12a05642d9fa4cd578-Paper-Conference.pdf)
- **Logical reasoning** (constructs)
  > Tabular reasoning presents an inherently challenging problem, requiring logical, mathematical, and textual reasoning over unstructured queries and structured tables
  - [H-STAR: LLM-driven Hybrid SQL-Text Adaptive Reasoning on Tables](https://aclanthology.org/2025.naacl-long.445.pdf)
- **Chain-of-thought reasoning** (constructs)
  > Table reasoning presents distinct challenges compared to text-only tasks: it requires interpreting diverse cell contents, aligning data across the table, and performing multi-step reasoning with aggregation and numerical operations (Deng et al., 2024; Wu et al., 2025). (Section 1)
  - [Table-R1: Inference-Time Scaling for Table Reasoning Tasks](https://aclanthology.org/2025.emnlp-main.1040.pdf)
- **Semantic understanding** (constructs)
  > Our qualitative analysis of model responses reveals that Table-R1-Zero not only acquires multi-step reasoning and reflection abilities like other reasoning models, but also develops essential table-specific reasoning skills such as semantic understanding, information extraction, and arithmetic computation. (Section 1)
  - [Table-R1: Inference-Time Scaling for Table Reasoning Tasks](https://aclanthology.org/2025.emnlp-main.1040.pdf)
- **Information extraction** (behaviors tasks)
  > Our qualitative analysis of model responses reveals that Table-R1-Zero not only acquires multi-step reasoning and reflection abilities like other reasoning models, but also develops essential table-specific reasoning skills such as semantic understanding, information extraction, and arithmetic computation. (Section 1)
  - [Table-R1: Inference-Time Scaling for Table Reasoning Tasks](https://aclanthology.org/2025.emnlp-main.1040.pdf)
- **Arithmetic computation** (behaviors tasks)
  > Our qualitative analysis of model responses reveals that Table-R1-Zero not only acquires multi-step reasoning and reflection abilities like other reasoning models, but also develops essential table-specific reasoning skills such as semantic understanding, information extraction, and arithmetic computation. (Section 1)
  - [Table-R1: Inference-Time Scaling for Table Reasoning Tasks](https://aclanthology.org/2025.emnlp-main.1040.pdf)
- **Temporal reasoning** (constructs)
  > Third, we note a marked increase in arithmetic and temporal reasoning capabilities. The model becomes more adept at performing arithmetic calculations over table entries and reasoning over temporal sequences, both of which are crucial for table reasoning tasks. (Section 4.6)
  - [Table-R1: Inference-Time Scaling for Table Reasoning Tasks](https://aclanthology.org/2025.emnlp-main.1040.pdf)
- **Text-to-SQL** (behaviors tasks)
  > To investigate this, we focus on NL2SQL, a pivotal task in table understanding where LLMs translate natural language queries into SQL, given a specific database (Section 1).
  - [Bridging the Semantic Gap Between Text and Table: A Case Study on NL2SQL](https://proceedings.iclr.cc/paper_files/paper/2025/file/283f1354f1de1c53a14afe0a6740e889-Paper-Conference.pdf)
- **Natural language understanding** (constructs)
  > Tabular reasoning involves interpreting natural language queries about tabular data, which presents a unique challenge of combining language understanding with structured data analysis.
  - [H-STAR: LLM-driven Hybrid SQL-Text Adaptive Reasoning on Tables](https://aclanthology.org/2025.naacl-long.445.pdf)
