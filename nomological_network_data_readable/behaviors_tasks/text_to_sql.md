# Text-to-SQL
**Type:** Behavior  
**Referenced in:** 56 papers  
**Also known as:** SQL generation, Text-to-SQL generation, SQL query generation, Text-to-SQL conversion, NL2SQL, Database query generation, Incremental SQL generation, Text-to-SQL parsing, SQL UPDATE generation, SQL trigger generation, Database querying  

## State of the Field

**Space of definitions.** Across papers, the dominant framing is translating a natural-language question, instruction, or prompt into a SQL query, usually with a database schema and sometimes table content, dialogue history, or auxiliary documentation available. Most definitions treat success as producing correct, functionally correct, or executable SQL that retrieves the desired information from the database, and some papers use SQL as an intermediate program for answering questions over tables. A smaller line of work extends the behavior beyond retrieval to database manipulation, including SQL UPDATE statements and SQL TRIGGER scripts generated from natural-language instructions and schema information.

**Variants.** Papers use several near-synonymous labels, most often SQL generation, text-to-SQL generation, NL2SQL, text-to-SQL parsing, and database querying. The common setting is generating a single query over one or more relational tables, though some work studies multi-turn or dialogue-conditioned generation, open-domain or large-table settings, and stepwise incremental generation that decomposes complex queries into sub-syntax trees. Smaller variants include generating multiple SQL programs with ascending complexity, combining SQL with Python, producing dialect-specific SQL, and specialized outputs such as SQL UPDATE or SQL TRIGGER generation.

**Space of elicitation and scores.** Papers measure this behavior with 7 instruments. Spider is the prevailing instrument, followed by BIRD; AgentBench, CoSQL, and Spider-DK appear less often, and 2 other instruments are also linked. These are mostly described as text-to-SQL datasets or benchmarks, while AgentBench is used for broader database-task evaluation.

**What it is taken as evidence of.** Papers do not converge on a single construct that this behavior reflects. One paper uses text-to-SQL to measure table reasoning, while other papers report that text-to-SQL is related to generalization and natural language understanding. Separate papers claim causal relationships from in-context learning to text-to-SQL and from reasoning to text-to-SQL, and 3 other constructs appear only in isolated claims.

## Sources

**[CABINET: Content Relevance-based Noise Reduction for Table Question Answering](https://proceedings.iclr.cc/paper_files/paper/2024/file/19a42d5885e25e51852aca8144e5af0d-Paper-Conference.pdf) (as "SQL generation")**
> The observable behavior of an LLM producing a structured query language (SQL) program in response to a natural language query and a table schema.

**[Parameter-Efficient Fine-Tuning of State Space Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/galim25a/galim25a.pdf) (as "Text-to-SQL generation")**
> The task of converting a natural language question into a structured SQL query that can be executed against a database.

**[EHRCon: Dataset for Checking Consistency between Unstructured Notes and Structured Tables in Electronic Health Records](https://proceedings.neurips.cc/paper_files/paper/2024/file/a291dad965af9bc2e39ffeb2ca1c6dc0-Paper-Datasets_and_Benchmarks_Track.pdf) (as "SQL query generation")**
> The task of creating a structured query language (SQL) query based on information extracted from natural language text to retrieve data from a database.

**[StreamBench: Towards Benchmarking Continuous Improvement of Language Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/c189915371c4474fe9789be3728113fc-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Text-to-SQL conversion")**
> The task of generating correct SQL code from a user's natural language query about a database.

**[Bridging the Semantic Gap Between Text and Table: A Case Study on NL2SQL](https://proceedings.iclr.cc/paper_files/paper/2025/file/283f1354f1de1c53a14afe0a6740e889-Paper-Conference.pdf) (as "NL2SQL")**
> The task of translating a natural language question into a corresponding SQL query, given a specific database schema and content.

**[Agent Skill Acquisition for Large Language Models via CycleQD](https://proceedings.iclr.cc/paper_files/paper/2025/file/755acd0c7c07180d78959b6d89768207-Paper-Conference.pdf) (as "Database query generation")**
> The task of generating correct database queries (e.g., SQL) to retrieve or manipulate data based on a natural language request.

**[Structure-Guided Large Language Models for Text-to-SQL Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25k/zhang25k.pdf) (as "Incremental SQL generation")**
> The process of generating a complex SQL query step-by-step, often by decomposing the problem into smaller sub-tasks or syntax components.

**[SportReason: Evaluating Retrieval-Augmented Reasoning across Tables and Text for Sports Question Answering](https://aclanthology.org/2025.emnlp-main.34.pdf) (as "Text-to-SQL parsing")**
> The task of converting a natural language question into a formal SQL query that can be executed against a relational database.

**[SwiftKV: Fast Prefill-Optimized Inference with Knowledge-Preserving Model Transformation](https://aclanthology.org/2025.emnlp-main.1306.pdf)**
> Generating SQL queries from natural language prompts.

**[Castle: Causal Cascade Updates in Relational Databases with Large Language Models](https://aclanthology.org/2025.emnlp-main.1700.pdf) (as "SQL UPDATE generation")**
> Producing SQL UPDATE statements from natural language instructions and schema information.

**[Castle: Causal Cascade Updates in Relational Databases with Large Language Models](https://aclanthology.org/2025.emnlp-main.1700.pdf) (as "SQL trigger generation")**
> The task of automatically creating SQL TRIGGER scripts that maintain data consistency for derived or aggregate metrics in response to data modification events.

**[Lemur: Harmonizing Natural Language and Code for Language Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/41ec0e510c31883f3b50a782651fb5b9-Paper-Conference.pdf) (as "Database querying")**
> The task of generating structured query language (SQL) statements to retrieve information from a database based on a natural language question.

## Relationships

### Text-to-SQL →
- **Spider** (measurements) — *measured_by*
  > SELF-DEBUGGING achieves the state-of-the-art performance on several code generation benchmarks, including Spider for text-to-SQL generation, TransCoder for C++-to-Python translation, and MBPP for text-to-Python generation.
  - [Teaching Large Language Models to Self-Debug](https://proceedings.iclr.cc/paper_files/paper/2024/file/2460396f2d0d421885997dd1612ac56b-Paper-Conference.pdf)
- **BIRD** (measurements) — *measured_by*
  > For text-to-SQL tasks, the agent has to convert users’ natural language queries into SQL code to meet their data requirements. StreamBench integrates three prominent datasets: Spider [17], CoSQL [18], and BIRD [19]. (Section 3.2)
  - [StreamBench: Towards Benchmarking Continuous Improvement of Language Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/c189915371c4474fe9789be3728113fc-Paper-Datasets_and_Benchmarks_Track.pdf)
- **CoSQL** (measurements) — *measured_by*
  > For text-to-SQL tasks, the agent has to convert users’ natural language queries into SQL code to meet their data requirements. StreamBench integrates three prominent datasets: Spider [17], CoSQL [18], and BIRD [19]. (Section 3.2)
  - [StreamBench: Towards Benchmarking Continuous Improvement of Language Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/c189915371c4474fe9789be3728113fc-Paper-Datasets_and_Benchmarks_Track.pdf)
- **AgentBench** (measurements) — *measured_by*
  > Empirical results from AgentBench indicate that applying CycleQD to LLAMA3-8B-INSTRUCT based models not only enables them to surpass traditional fine-tuning methods in coding, operating systems, and database tasks, but also achieves performance on par with GPT-3.5-TURBO (Section 1).
  - [Agent Skill Acquisition for Large Language Models via CycleQD](https://proceedings.iclr.cc/paper_files/paper/2025/file/755acd0c7c07180d78959b6d89768207-Paper-Conference.pdf)
- **Spider-DK** (measurements) — *measured_by*
  > In this paper, we evaluate TNT on the task of NL2SQL. We adopt three prevalant datasets, SPIDER (Yu et al., 2018), SPIDER-DK (Gan et al., 2021a), and SPIDER-Realistic (Deng et al., 2021) (Section 6.1).
  - [Bridging the Semantic Gap Between Text and Table: A Case Study on NL2SQL](https://proceedings.iclr.cc/paper_files/paper/2025/file/283f1354f1de1c53a14afe0a6740e889-Paper-Conference.pdf)
- **Spider-Realistic** (measurements) — *measured_by*
  > In this paper, we evaluate TNT on the task of NL2SQL. We adopt three prevalant datasets, SPIDER (Yu et al., 2018), SPIDER-DK (Gan et al., 2021a), and SPIDER-Realistic (Deng et al., 2021) (Section 6.1).
  - [Bridging the Semantic Gap Between Text and Table: A Case Study on NL2SQL](https://proceedings.iclr.cc/paper_files/paper/2025/file/283f1354f1de1c53a14afe0a6740e889-Paper-Conference.pdf)
- **Instruction understanding** (constructs) — *causes*
  > Additionally, training LLMs on a single SQL generation task poses a substantial risk of diminishing performance in understanding instructions... (Section 1)
  - [ROUTE: Robust Multitask Tuning and Collaboration for Text-to-SQL](https://proceedings.iclr.cc/paper_files/paper/2025/file/212b143b5a5d6b88feb0fb1441b9756e-Paper-Conference.pdf)
- **WikiSQL** (measurements) — *measured_by*
  > "early benchmarks such as WikiSQL (Yavuz et al., 2018) and Spider (Yu et al., 2018) focus on Text-to-SQL parsing over one or more relational tables"
  - [SportReason: Evaluating Retrieval-Augmented Reasoning across Tables and Text for Sports Question Answering](https://aclanthology.org/2025.emnlp-main.34.pdf)

### → Text-to-SQL
- **Schema linking** (behaviors tasks) — *causes*
  > ideal schema linking can effectively achieve accurate SQL generation, which shows that schema linking is still an effective means to solve Text2SQL at this stage and in the future. (Section 4.3)
  - [ROUTE: Robust Multitask Tuning and Collaboration for Text-to-SQL](https://proceedings.iclr.cc/paper_files/paper/2025/file/212b143b5a5d6b88feb0fb1441b9756e-Paper-Conference.pdf)
- **Prompt engineering** (behaviors tasks) — *causes*
  > The Query Agent QAgent generates a SQL query qij and resulting tables Rij (qij(D) = Rij) to answer the subquestions using the database information and schema: QAgent(sij, Dinfo, Dschema) → qij (Section 4.2).
  - [An LLM-Based Approach for Insight Generation in Data Analysis](https://aclanthology.org/2025.naacl-long.24.pdf)
- **In-context learning** (constructs) — *causes*
  > With the demonstrations, our method fully leverages in-context learning capability and generate the target SQL correctly. (Section 3)
  - [DCG-SQL: Enhancing In-Context Learning for Text-to-SQL with Deep Contextual Schema Link Graph](https://aclanthology.org/2025.acl-long.748.pdf)
- **Structural understanding** (constructs) — *causes*
  > “This limitation makes it difficult for the model to handle the complex mapping between natural language queries and diverse database schemas, impeding its ability to accurately interpret schema relationships, construct complex SQL queries”
  - [Alpha-SQL: Zero-Shot Text-to-SQL using Monte Carlo Tree Search](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25dt/li25dt.pdf)

### Associated with
- **Generalization** (constructs)
  > In the zero-shot setting, the key challenge is to construct a mapping function f without task-specific labeled data. This requires the model to generalize across unseen SQL queries and databases, relying solely on pre-trained knowledge and the provided database schema. (Section 3.1)
  - [Alpha-SQL: Zero-Shot Text-to-SQL using Monte Carlo Tree Search](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25dt/li25dt.pdf)
- **Natural language understanding** (constructs)
  > Text-to-SQL generation provides an ideal middle ground, as SQL’s formal structure makes it more tractable than general language generation while still requiring natural language understanding. (Section 1)
  - [TinySQL: A Progressive Text-to-SQL Dataset for Mechanistic Interpretability Research](https://aclanthology.org/2025.emnlp-main.1489.pdf)
- **Table reasoning** (constructs)
  > To investigate this, we focus on NL2SQL, a pivotal task in table understanding where LLMs translate natural language queries into SQL, given a specific database (Section 1).
  - [Bridging the Semantic Gap Between Text and Table: A Case Study on NL2SQL](https://proceedings.iclr.cc/paper_files/paper/2025/file/283f1354f1de1c53a14afe0a6740e889-Paper-Conference.pdf)
- **Question decomposition** (behaviors tasks)
  > The Query Agent QAgent generates a SQL query qij and resulting tables Rij (qij(D) = Rij) to answer the subquestions using the database information and schema (Section 4.2)
  - [An LLM-Based Approach for Insight Generation in Data Analysis](https://aclanthology.org/2025.naacl-long.24.pdf)
- **Syntactic correctness** (constructs)
  > This ensures that the generated queries maintain both semantic accuracy (correctly capturing user intentions) and syntactic correctness (following proper SQL structure). (Section 1. Introduction)
  - [Structure-Guided Large Language Models for Text-to-SQL Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25k/zhang25k.pdf)
