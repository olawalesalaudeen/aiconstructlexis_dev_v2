# TabMWP
**Type:** Measurement  
**Referenced in:** 17 papers  

## State of the Field

**What it is.** Across the surveyed work, TabMWP is most commonly described as a benchmark or dataset of table-based math word problems, usually framed as mathematical reasoning over tabular or semi-structured data. Definitions describe examples as combining a table with a natural-language problem that requires extracting relevant information and performing calculations; one paper says each sample contains "one table and one corresponding problem in natural language" (CRAFT: Customizing LLMs by Creating and Retrieving from Specialized Toolsets). A smaller line of work describes it as tabular or structured-data question answering, and some papers phrase the tables as contextual input or semi-structured tables rather than simply tabular data.

**What it is claimed to measure.** Papers link TabMWP to two constructs and one behavioral indicator. The prevailing usage is as a measure of Mathematical reasoning, with several papers listing it among math reasoning benchmarks or saying it requires mathematical reasoning; a smaller line of work treats it as measuring Reasoning more generally, and one paper uses it to measure Question answering in tabular contexts. Overall, most linked claims center on mathematical reasoning, with the remaining links pointing to reasoning and question answering.

**Space of uses.** Papers commonly use TabMWP alongside other reasoning benchmarks, especially GSM8K, SVAMP, ASDIV, MATH, and GSM-Hard, with other datasets also appearing in the same evaluation suites. In these setups it is usually one component of a broader benchmark suite, though some papers position it more specifically as an out-of-distribution dataset, a structured reasoning test over semi-structured tables, or an unseen task for checking generalizability. No other measurement instrument is linked to it.

## Sources

**[CRAFT: Customizing LLMs by Creating and Retrieving from Specialized Toolsets](https://proceedings.iclr.cc/paper_files/paper/2024/file/af31604708f3e44b4de9fdfa6dcaa9d1-Paper-Conference.pdf)**
> A benchmark for mathematical reasoning that requires processing information from tables to solve math word problems.

## Relationships

### → TabMWP
- **Mathematical reasoning** (constructs) — *measured_by*
  > We evaluated models on... TabMWP... ensuring a thorough assessment of the model’s mathematical reasoning aptitude. (Section 3.2)
  - [ToRA: A Tool-Integrated Reasoning Agent for Mathematical Problem Solving](https://proceedings.iclr.cc/paper_files/paper/2024/file/d3cf1559a8795eb1ed2b3ad52409ac7d-Paper-Conference.pdf)
- **Table question answering** (behaviors tasks) — *measured_by*
  > "Lastly, we also test on a popular tabular question-answering dataset, TabMWP (Lu et al., 2023), that requires LLMs to use reasoning skills over tabular contexts."
  - [AdaCAD: Adaptively Decoding to Balance Conflicts between Contextual and Parametric Knowledge](https://aclanthology.org/2025.naacl-long.581.pdf)
