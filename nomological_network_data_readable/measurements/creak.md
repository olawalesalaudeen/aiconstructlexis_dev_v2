# Creak
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** CREAK  

## State of the Field

**What it is.** Across the definitions, the prevailing framing is a fact-checking dataset or benchmark. One paper describes Creak as a dataset for "evaluating the verification of claims against a knowledge graph, using Wikidata" (Reasoning of Large Language Models over Knowledge Graphs with Super-Relations), while another treats CREAK as a benchmark "for fact-checking and commonsense reasoning ability" that assesses whether statements are supported by commonsense knowledge (Weak to Strong Generalization for Large Language Models with Multi-capabilities).

**What it is claimed to measure.** Papers use it to measure one behavioral indicator and two constructs. The most common claim is that it measures Fact checking, while a smaller line of work also uses it to measure Commonsense reasoning, and a more limited framing reports it as evaluating Factuality through a "Factual Reasoning Task." Overall, the reported measurement claims cluster around fact checking, commonsense reasoning, and factuality rather than spanning many constructs.

**Space of uses.** Papers position it mainly as an evaluation dataset within broader benchmark suites. It appears alongside FEVER in fact verification settings, and alongside StrategyQA and CSQA2 in evaluations described as containing "a large number of questions about entity knowledge and commonsense reasoning"; no measurement instrument is linked to it directly.

## Sources

**[Reasoning of Large Language Models over Knowledge Graphs with Super-Relations](https://proceedings.iclr.cc/paper_files/paper/2025/file/0c6799a1a5db47be8864fed46ba77697-Paper-Conference.pdf)**
> A fact-checking dataset for evaluating the verification of claims against a knowledge graph, using Wikidata.

**[Weak to Strong Generalization for Large Language Models with Multi-capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/1ebcb8f051d0c178474619bbfb32b340-Paper-Conference.pdf) (as "CREAK")**
> A benchmark for fact-checking and commonsense reasoning that assesses whether statements are supported by commonsense knowledge.

## Relationships

### → Creak
- **Fact checking** (behaviors tasks) — *measured_by*
  > and one fact-checking dataset: Creak (Onoe et al., 2021).
  - [Think-on-Graph: Deep and Responsible Reasoning of Large Language Model on Knowledge Graph](https://proceedings.iclr.cc/paper_files/paper/2024/file/10a6bdcabbd5a3d36b760daa295f63c1-Paper-Conference.pdf)
- **Commonsense reasoning** (constructs) — *measured_by*
  > We evaluate our UniCoTT over CREAK (Onoe et al., 2021), StrategyQA (Geva et al., 2021) and CSQA2 (Talmor et al., 2021) datasets, which contain a large number of questions about entity knowledge and commonsense reasoning (Section 4.1).
  - [UniCoTT: A Unified Framework for Structural Chain-of-Thought Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/ca642f8e1174012d67c05c1c9f969644-Paper-Conference.pdf)
- **Factual reasoning** (constructs) — *measured_by*
  > We conduct experiments across three types of tasks: (1) Factual Reasoning Task. We evaluate our UniCoTT over CREAK (Onoe et al., 2021), StrategyQA (Geva et al., 2021) and CSQA2 (Talmor et al., 2021) datasets (Section 4.1).
  - [UniCoTT: A Unified Framework for Structural Chain-of-Thought Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/ca642f8e1174012d67c05c1c9f969644-Paper-Conference.pdf)
