# NFCorpus
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** NFCORPUS, NF-Corpus  

## State of the Field

**What it is.** Most commonly, papers describe NFCorpus as a medical information retrieval dataset or benchmark. A smaller line of work refers to it more generally as a retrieval or IR dataset, including as one of the BEIR datasets and as a dataset used to generate and evaluate adversarial passages in corpus-poisoning experiments. One definition adds that NF-Corpus contains queries in simple English and technical documents extracted from PubMed, with 323 queries in the test split and 3.6k total documents, while another uses it for domain-specific factual questions involving single entities.

**What it is claimed to measure.** Papers use NFCorpus to measure 2 behavioral indicators, Factual question answering and Information retrieval, and no constructs are linked to it. The measurement claims stay at the level of task behavior: one paper evaluates long-document retrieval scenarios, while another says NFCORPUS is among the datasets consisting of factual questions involving single entities.

**Space of uses.** In practice, papers position NFCorpus mainly as an evaluation dataset, for query generation and retrieval, long-document retrieval, and adversarial passage generation and evaluation. It is used alongside Natural Questions in corpus-poisoning experiments, alongside Dragonball, SQUAD, and SCI-DOCS in filtered evaluations, and papers link it to 1 other instrument, BEIR, with one paper treating NFCorpus as measured by BEIR because BEIR includes NFCorpus among its public datasets. One paper also notes that NFCorpus shows the highest unseen query term ratio.

**Concerns raised.** A concern raised in one paper is that, because NFCORPUS is a medical-information dataset, an LLM filtering mechanism may have limitations in processing the semantic information of professional academic terms.

## Sources

**[tRAG: Term-level Retrieval-Augmented Generation for Domain-Adaptive Retrieval](https://aclanthology.org/2025.naacl-long.334.pdf)**
> A retrieval dataset used to generate and evaluate adversarial passages in the corpus-poisoning experiments.

**[SAKI-RAG: Mitigating Context Fragmentation in Long-Document RAG via Sentence-level Attention Knowledge Integration](https://aclanthology.org/2025.emnlp-main.63.pdf) (as "NFCORPUS")**
> Medical information retrieval dataset used to evaluate performance on domain-specific factual questions involving single entities.

**[Time-Reversal Provides Unsupervised Feedback to LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/34aec5ab2f99a8f592e0cca4974013f2-Paper-Conference.pdf) (as "NF-Corpus")**
> A medical information retrieval benchmark dataset containing queries in simple English and technical documents extracted from PubMed.

## Relationships

### → NFCorpus
- **Information retrieval** (behaviors tasks) — *measured_by*
  > Experimental results across four datasets—Dragonball, SQUAD, NFCORPUS, and SCI-DOCS demonstrate that SAKI-RAG achieves better recall and precision compared to other RAG frameworks in long-document retrieval scenarios (Abstract).
  - [SAKI-RAG: Mitigating Context Fragmentation in Long-Document RAG via Sentence-level Attention Knowledge Integration](https://aclanthology.org/2025.emnlp-main.63.pdf)
- **Factual question answering** (behaviors tasks) — *measured_by*
  > the SQUAD, NFCORPUS, and SCI-DOCS datasets consist of factual questions involving single entities (Section 4.1).
  - [SAKI-RAG: Mitigating Context Fragmentation in Long-Document RAG via Sentence-level Attention Knowledge Integration](https://aclanthology.org/2025.emnlp-main.63.pdf)

### Associated with
- **BEIR** (measurements)
  > “nine public datasets in the BEIR benchmark (Thakur et al., 2021), including TREC-COVID (Voorhees et al., 2021), NFCorpus (Boteva et al., 2016)”
  - [Attention in Large Language Models Yields Efficient Zero-Shot Re-Rankers](https://proceedings.iclr.cc/paper_files/paper/2025/file/b5b1890a7c1a79fe9b32b0f442347089-Paper-Conference.pdf)
