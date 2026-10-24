# Data analysis
**Type:** Behavior  
**Referenced in:** 10 papers  

## State of the Field

**Space of definitions.** Across definitions, the prevailing usage treats data analysis as answering questions or producing findings from data by inspecting, transforming, modeling, and interpreting it with statistical and logical reasoning. Most descriptions emphasize deriving insights from a database or processing data to answer specific questions, while some benchmark-oriented formulations cast it as multiple-choice, fill-in-the-blank, or other analysis questions; one paper further says a system should return "findings and suggestions based on the database" (DACO: Towards Application-Driven and Comprehensive Data Analysis via Code Generation).

**Variants.** Papers study both broad analysis-question settings and narrower tabular tasks. The broader framing includes database or CSV inputs, financial analysis questions, and multi-level easy, medium, and hard prompts, while a smaller line of work narrows the behavior to "three practical tasks in which the LLM assists in data analysis or data science": table reformatting, predicting which columns can be used to join two tables, and predicting the correct column type annotation (LiveBench: A Challenging, Contamination-Limited LLM Benchmark). One paper also relates complex analysis queries to Question decomposition, and another claims a causal relationship from Code generation to Data analysis by describing LLMs enhanced by code generation as automatically generating high-quality data analysis.

**Space of elicitation and scores.** Papers link data analysis to 4 measurement instruments, most often InfiAgent-DABench, LiveBench, TableEval, and WildBench. These instruments elicit it through CSV-based analysis challenges, benchmark categories labeled data analysis, collections of tasks users expect LLMs to perform, and task settings drawn from diverse real-world industrial scenarios. At the task level, papers also measure the category through Data transformation, Schema matching, and Column type annotation.

**What it is taken as evidence of.** The linked construct picture includes 3 constructs, Logical reasoning, Mathematical reasoning, and Strategic reasoning. In the recorded relationships, papers describe data analysis as related to all three reasoning skills in specific application scenarios, rather than singling out only one construct.

## Sources

**[DACO: Towards Application-Driven and Comprehensive Data Analysis via Code Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/a4cb1444fb05839d0113d2773da88a49-Paper-Datasets_and_Benchmarks_Track.pdf)**
> The process of systematically applying statistical and logical reasoning to comprehend data and derive insights from a database.

## Relationships

### Data analysis →
- **WildBench** (measurements) — *measured_by*
  > This dataset is particularly suited for conversion into an evaluation benchmark because it contains a diverse array of tasks that users expect LLMs to perform, such as writing assistance, coding, mathematics, data analysis, role playing, and planning. (Section 2.1)
  - [WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild](https://proceedings.iclr.cc/paper_files/paper/2025/file/771155abaae744e08576f1f3b4b7ac0d-Paper-Conference.pdf)
- **LiveBench** (measurements) — *measured_by*
  > LiveBench (White et al., 2024) contains 6 problem categories: data analysis, language, reasoning, math, instruction following, and coding. (Section 4.2)
  - [Scaling LLM Inference Efficiently with Optimized Sample Compute Allocation](https://aclanthology.org/2025.naacl-long.404.pdf)
- **InfiAgent-DABench** (measurements) — *measured_by*
  > (1) Data Analysis: InfiAgent-DABench (Hu et al., 2024b) contains 257 challenges with CSV inputs and multi-level (easy/medium/hard) analysis questions. (Section 4.1)
  - [DatawiseAgent: A Notebook-Centric LLM Agent Framework for Adaptive and Robust Data Science Automation](https://aclanthology.org/2025.emnlp-main.58.pdf)
- **TableEval** (measurements) — *measured_by*
  > This approach accommodates various task types within diverse real-world industrial scenarios, including information retrieval, numerical analysis, table reasoning, data analysis, multi-turn dialogue, and understanding of table structures. (Section 3.1)
  - [TableEval: A Real-World Benchmark for Complex, Multilingual, and Multi-Structured Table Question Answering](https://aclanthology.org/2025.emnlp-main.363.pdf)

### → Data analysis
- **Code generation** (behaviors tasks) — *causes*
  > we use large language models (LLMs) enhanced by code generation to automatically generate high-quality data analysis, which will later be refined by human annotators. (Abstract)
  - [DACO: Towards Application-Driven and Comprehensive Data Analysis via Code Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/a4cb1444fb05839d0113d2773da88a49-Paper-Datasets_and_Benchmarks_Track.pdf)

### Associated with
- **Mathematical reasoning** (constructs)
  > the need for data analysis typically arises from specific application scenarios, and requires diverse reasoning skills including mathematical reasoning, logical reasoning, and strategic reasoning. (Abstract)
  - [DACO: Towards Application-Driven and Comprehensive Data Analysis via Code Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/a4cb1444fb05839d0113d2773da88a49-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Logical reasoning** (constructs)
  > the need for data analysis typically arises from specific application scenarios, and requires diverse reasoning skills including mathematical reasoning, logical reasoning, and strategic reasoning. (Abstract)
  - [DACO: Towards Application-Driven and Comprehensive Data Analysis via Code Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/a4cb1444fb05839d0113d2773da88a49-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Strategic reasoning** (constructs)
  > the need for data analysis typically arises from specific application scenarios, and requires diverse reasoning skills including mathematical reasoning, logical reasoning, and strategic reasoning. (Abstract)
  - [DACO: Towards Application-Driven and Comprehensive Data Analysis via Code Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/a4cb1444fb05839d0113d2773da88a49-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Question decomposition** (behaviors tasks)
  > most existing table QA datasets focus on obtaining specific information, our data analysis queries can be complex and requires query decomposition and reasoning. (Section 6)
  - [DACO: Towards Application-Driven and Comprehensive Data Analysis via Code Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/a4cb1444fb05839d0113d2773da88a49-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Column type annotation** (behaviors tasks)
  > “Data Analysis: three tasks using recent datasets from Kaggle and Socrata, specifically, ... and predicting the correct column type annotation”
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
- **Schema matching** (behaviors tasks)
  > “Data Analysis: three tasks using recent datasets from Kaggle and Socrata, specifically, ... predicting which columns can be used to join two tables”
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
- **Data transformation** (behaviors tasks)
  > “Data Analysis: three tasks using recent datasets from Kaggle and Socrata, specifically, table reformatting ...”
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
