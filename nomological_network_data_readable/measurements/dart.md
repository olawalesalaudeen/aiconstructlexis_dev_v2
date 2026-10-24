# DART
**Type:** Measurement  
**Referenced in:** 6 papers  

## State of the Field

**What it is.** Across the cited papers, DART is most commonly described as a dataset or benchmark for structured-data-to-text generation: definitions call it a large, open-domain resource with 82,191 examples from various domains, and describe the task as turning structured records, graphs, or RDF triples into natural language. Most descriptions use struct-to-text, data-to-text, or graph-to-text language, though one paper describes it as employed for evaluating text-to-data generation.

**What it is claimed to measure.** Papers use it to measure 2 behavioral indicators and no constructs. The linked indicators are Data-to-text generation and Text generation, both via measured_by relations; one paper further specifies RDF-to-text generation in that usage, while another places it inside a Natural Language Generation task and says it is employed for evaluating text-to-data generation.

**Space of uses.** Papers most often position it as an evaluation benchmark. As one study states, "We conducted all of our experiments on the following three benchmarks: WebNLG17, WebNLG20, DART", while other papers use it in broader NLG evaluation and in LoRA merging evaluation for converting structured data to natural language.

## Sources

**[Mixture of LoRA Experts](https://proceedings.iclr.cc/paper_files/paper/2024/file/ce806d8b4bf38cd92d483e5a0490d983-Paper-Conference.pdf)**
> A dataset for text-to-data generation, containing 82,191 examples from various domains to evaluate structured data-to-text tasks.

## Relationships

### → DART
- **Text generation** (behaviors tasks) — *measured_by*
  > We utilize the following datasets for our Natural Language Generation (NLG) task: ... DART (Nan et al., 2020) is yet another significant dataset employed for evaluating text-to-data generation. (Section 3.1)
  - [NOLA: Compressing LoRA using Linear Combination of Random Basis](https://proceedings.iclr.cc/paper_files/paper/2024/file/66b99dbf9ed172abac5cb5ccfc82d1e2-Paper-Conference.pdf)
- **Data-to-text generation** (behaviors tasks) — *measured_by*
  > ...DART for RDF-to-text generation (Nan et al., 2021)... (Section 4.1)
  - [Parameter-Efficient Fine-Tuning of State Space Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/galim25a/galim25a.pdf)
