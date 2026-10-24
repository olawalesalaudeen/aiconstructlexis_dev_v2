# BioASQ
**Type:** Measurement  
**Referenced in:** 10 papers  

## State of the Field

**What it is.** Most descriptions treat BioASQ as a biomedical question answering dataset or challenge, often tied to scientific literature or PubMed abstracts, while some definitions frame it more broadly as a resource for biomedical semantic indexing and question answering. Papers describe its contents in several ways, including human expert-written question-answer pairs with ground truth documents based on PubMed abstracts, and they vary in the question types they foreground: several mention factoid, list, and yes/no questions, while another mentions factoid, list, and summary questions. A narrower use focuses on Tasks 2B, 3B, and 4B and disregards long answers to assess the precision of short responses.

**What it is claimed to measure.** Across papers, the prevailing measured use is question answering. BioASQ is linked to 2 behavioral indicators, Question answering and Text generation, and to no constructs; the more common claim is that it measures question answering, including PubMed-based biomedical QA for specialized domains and biology and medicine tasks. A smaller line of work also uses it to measure text generation in the biology and medicine domain.

**Space of uses.** Papers commonly use BioASQ as one component of broader benchmark suites or medical QA evaluations rather than only as a standalone test. It is included among the five datasets in the MIRAGE benchmark, used alongside MedQuAD and MASH-QA in medical QA experiments, employed for the biomedical domain in setups following RobustQA, and in one paper serves as source material for curating contexts in FaithEval.

## Sources

**[FaithEval: Can Your Language Model Stay Faithful to Context, Even If "The Moon is Made of Marshmallows"](https://proceedings.iclr.cc/paper_files/paper/2025/file/48404cd9ce03946c6b7177691f3267a1-Paper-Conference.pdf)**
> A dataset for biomedical semantic indexing and question answering, used as a source for creating contexts in the FaithEval benchmark.

## Relationships

### → BioASQ
- **Question answering** (behaviors tasks) — *measured_by*
  > We evaluate RAG performance across three datasets spanning different reasoning complexities and domain-specificity... BioASQ (Task 11B) (Krithara et al., 2023): PubMed-based biomedical QA for specialized domains. (Section 3.3)
  - [RAGGED: Towards Informed Design of Scalable and Stable RAG Systems](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hsia25a/hsia25a.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > We evaluate our method on the following tasks covering different domains of natural language generation: ... biology and medicine (BioASQ [35]) (Sec. 5)
  - [Kernel Language Entropy: Fine-grained Uncertainty Quantification for LLMs from Semantic Similarities](https://proceedings.neurips.cc/paper_files/paper/2024/file/10c456d2160517581a234dfde15a7505-Paper-Conference.pdf)
