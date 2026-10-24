# Data-to-text generation
**Type:** Behavior  
**Referenced in:** 14 papers  
**Also known as:** RDF-to-text generation, Table-to-text generation, Data-to-text writing, Data description generation, Meal description generation, Table-to-description generation, Structured data to text generation  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats data-to-text generation as converting structured data into natural-language text, usually framed as producing descriptions or summaries from tables, knowledge graphs, or structured records. Most definitions stay broad, while smaller strands narrow the task to table-to-text or RDF-to-text, extend it to semi-structured inputs, or describe the output as a natural-language representation of each record. Some papers explicitly describe the output as coherent language or as a description that summarizes the record content, and a paper places the task among typical conditional text generation tasks.

**Variants.** Papers use several nearby names for this behavior, most commonly table-to-text generation, and also RDF-to-text generation, data-to-text writing, data description generation, and meal description generation. The settings center on tables, but also include knowledge graphs, RDF inputs, tabular records, semi-structured data, and meal descriptions generated from dietary intake data. Other papers use description-oriented labels for tables and for structured data more generally.

**Space of elicitation and scores.** Papers measure this behavior with 7 linked instruments. The most frequently named are E2E NLG Challenge, WebNLG, ToTTo, DART, and FeTaQA. These are described mainly as datasets or benchmarks for structured-data generation: ToTTo pairs highlighted table cells with a describing sentence, DART is used for RDF-to-text generation, and other linked instruments cover hierarchical tables and data-to-text writing within a RAG collection.

**What it is taken as evidence of.** Across the linked construct relations, papers connect this behavior to 1 construct, Faithfulness. The recorded link is a related relation, and the paper that makes it says faithfulness is needed so that generated text accurately reflects the input data. No other construct link is recorded for this behavior.

## Sources

**[Smoothie: Label Free Language Model Routing](https://proceedings.neurips.cc/paper_files/paper/2024/file/e6b57a990462df5afa58d64ce2709db9-Paper-Conference.pdf)**
> Generating natural language text from structured data inputs.

**[Parameter-Efficient Fine-Tuning of State Space Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/galim25a/galim25a.pdf) (as "RDF-to-text generation")**
> The task of generating a natural language description from a structured RDF (Resource Description Framework) data input.

**[Revisiting Prefix-tuning: Statistical Benefits of Reparameterization among Prompts](https://proceedings.iclr.cc/paper_files/paper/2025/file/760dff0f9c0e9ed4d7e22918c73351d4-Paper-Conference.pdf) (as "Table-to-text generation")**
> The observable task of generating a natural language description from structured data presented in a table.

**[ReDeEP: Detecting Hallucination in Retrieval-Augmented Generation via Mechanistic Interpretability](https://proceedings.iclr.cc/paper_files/paper/2025/file/7daf60e805e596c3bd1e843e72ea5560-Paper-Conference.pdf) (as "Data-to-text writing")**
> The task of generating natural language text from structured or semi-structured data.

**[MuHBoost: Multi-Label Boosting For Practical Longitudinal Human Behavior Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/ca2963d1cfb25e93362e86fb427a9524-Paper-Conference.pdf) (as "Data description generation")**
> Converting structured records into natural-language descriptions that summarize the record content.

**[NutriBench: A Dataset for Evaluating Large Language Models in Nutrition Estimation from Meal Descriptions](https://proceedings.iclr.cc/paper_files/paper/2025/file/ef3a57e4f26b640e6f90d78cbb011feb-Paper-Conference.pdf) (as "Meal description generation")**
> Producing natural-language descriptions of meals from structured dietary intake data.

**[CABINET: Content Relevance-based Noise Reduction for Table Question Answering](https://proceedings.iclr.cc/paper_files/paper/2024/file/19a42d5885e25e51852aca8144e5af0d-Paper-Conference.pdf) (as "Table-to-description generation")**
> The observable task of generating a natural language summary or description of the information contained in a table.

**[LLaSA: Large Language and Structured Data Assistant](https://aclanthology.org/2025.naacl-long.97.pdf) (as "Structured data to text generation")**
> The observable task of generating a natural language summary or description based on the content of a structured data source like a table or knowledge graph.

## Relationships

### Data-to-text generation →
- **E2E NLG Challenge** (measurements) — *measured_by*
  > ...we consider 7 datasets corresponding to commonly-studied natural language generation (NLG) tasks [51]: ... E2E and WebNLG (data-to-text generation)... (Section 5.1)
  - [Smoothie: Label Free Language Model Routing](https://proceedings.neurips.cc/paper_files/paper/2024/file/e6b57a990462df5afa58d64ce2709db9-Paper-Conference.pdf)
- **WebNLG** (measurements) — *measured_by*
  > ...we consider 7 datasets corresponding to commonly-studied natural language generation (NLG) tasks [51]: ... E2E and WebNLG (data-to-text generation)... (Section 5.1)
  - [Smoothie: Label Free Language Model Routing](https://proceedings.neurips.cc/paper_files/paper/2024/file/e6b57a990462df5afa58d64ce2709db9-Paper-Conference.pdf)
- **ToTTo** (measurements) — *measured_by*
  > We first run experiments on four data-to-text generation datasets. ToTTo (Parikh et al., 2020) is an English dataset with Wikipedia tables where specific cells are highlighted, paired with a sentence describing those cells. (Section 4.1)
  - [SCOPE: A Self-supervised Framework for Improving Faithfulness in Conditional Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/05d6b5b6901fb57d2c287e1d3ce6d63c-Paper-Conference.pdf)
- **RAGTruth** (measurements) — *measured_by*
  > The data includes three RAG task types: Question Answering (QA), Data-to-Text Writing, and News Summarization.
  - [ReDeEP: Detecting Hallucination in Retrieval-Augmented Generation via Mechanistic Interpretability](https://proceedings.iclr.cc/paper_files/paper/2025/file/7daf60e805e596c3bd1e843e72ea5560-Paper-Conference.pdf)
- **FeTaQA** (measurements) — *measured_by*
  > We first run experiments on four data-to-text generation datasets. ... FeTaQA (Nan et al., 2022) is an English table question answering dataset... (Section 4.1)
  - [SCOPE: A Self-supervised Framework for Improving Faithfulness in Conditional Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/05d6b5b6901fb57d2c287e1d3ce6d63c-Paper-Conference.pdf)
- **HiTab** (measurements) — *measured_by*
  > HiTab: A dataset consisting of hierarchical tables, designed for table-based question answering (QA) and table-to-text generation (NLG) (Section 4.1).
  - [QuASAR: A Question-Driven Structure-Aware Approach for Table-to-Text Generation](https://aclanthology.org/2025.acl-long.1300.pdf)
- **DART** (measurements) — *measured_by*
  > ...DART for RDF-to-text generation (Nan et al., 2021)... (Section 4.1)
  - [Parameter-Efficient Fine-Tuning of State Space Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/galim25a/galim25a.pdf)

### Associated with
- **Conditional text generation** (behaviors tasks)
  > This issue arises in typical conditional text generation tasks, such as text summarization and data-to-text generation, where the goal is to produce fluent text based on contextual input. (ABSTRACT)
  - [SCOPE: A Self-supervised Framework for Improving Faithfulness in Conditional Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/05d6b5b6901fb57d2c287e1d3ce6d63c-Paper-Conference.pdf)
- **Faithfulness** (constructs)
  > Faithfulness is essential for both tasks to ensure the generated text accurately reflects the input data. (Section 1)
  - [SCOPE: A Self-supervised Framework for Improving Faithfulness in Conditional Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/05d6b5b6901fb57d2c287e1d3ce6d63c-Paper-Conference.pdf)
