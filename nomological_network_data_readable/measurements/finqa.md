# FinQA
**Type:** Measurement  
**Referenced in:** 7 papers  

## State of the Field

**What it is.** Across the papers, the prevailing description treats FinQA as a financial question-answering dataset, often used as a held-out benchmark, that requires generating a Python-executable math expression from a question and a financial table. Some authors describe it more broadly as a financial benchmark for knowledge-based question answering, while another paper also presents it as a financial question-answering dataset used for reranking tasks and as a benchmark that primarily assesses text generation.

**What it is claimed to measure.** Its measurement claims are concentrated rather than spread across many targets. Papers link it to one construct, Financial reasoning, describing datasets such as FinQA as benchmarks for numerical reasoning tasks in the financial domain, and to one behavioral indicator, Table question answering, where it appears as benchmark data for evaluating table tasks.

**Space of uses.** Papers mainly position FinQA as an evaluation resource: one study uses it as a held-out dataset to test generalization ability, and another uses financial question-answering datasets such as FinQA to construct reranking tasks. No measurement instrument is linked to it, though papers mention it alongside ConvFinQA in financial reasoning work and alongside Fin-Fact and FinanceBench in papers discussing financial question answering and text-generation-oriented benchmarks.

**Concerns raised.** Some papers describe its scope in narrower terms: one places it among benchmarks that focus solely on knowledge-based question answering, and another says benchmarks like FinQA primarily assess text generation. No other concerns are stated by the cited papers.

## Sources

**[LLaSA: Large Language and Structured Data Assistant](https://aclanthology.org/2025.naacl-long.97.pdf)**
> A held-out dataset that requires generating a Python-executable math expression to answer questions based on financial tables.

## Relationships

### → FinQA
- **Financial reasoning** (constructs) — *measured_by*
  > datasets such as FinQA (Chen et al., 2021b) and ConvFinQA (Chen et al., 2022) have been developed to benchmark deep learning models for such numerical reasoning tasks in the financial domain.
  - [Program of Thoughts for Financial Reasoning: Leveraging Dynamic In-Context Examples and Generative Retrieval](https://aclanthology.org/2025.emnlp-main.1577.pdf)
