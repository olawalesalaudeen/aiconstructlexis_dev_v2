# SCIDOCS
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** SciDocs  

## State of the Field

**What it is.** Papers most commonly treat SCIDOCS, also written SciDocs, as a retrieval dataset for scientific literature. The prevailing description is an information retrieval dataset dedicated to scientific scholarly articles or scientific document retrieval, and some authors place it within BEIR as a single-hop retrieval benchmark for re-ranking scientific documents. Another description presents it as a document retrieval dataset based on citation networks in scientific literature, used to assess whether embeddings retrieve semantically related academic papers.

**What it is claimed to measure.** These papers do not explicitly link SCIDOCS to any named construct or behavioral indicator. Instead, they use it to evaluate retrieval tasks, especially retrieval of scientific scholarly articles, single-hop re-ranking of scientific documents, and retrieval of semantically related academic papers.

**Space of uses.** Papers usually deploy SCIDOCS alongside other retrieval datasets. It appears within BEIR evaluations for re-ranking, in corpus-poisoning experiments to generate and evaluate adversarial passages, and in embedding evaluation with nDCG@10 alongside MS MARCO and NFCorpus.

**Concerns raised.** Some papers note practical limitations of the dataset. One reports that SciDocs has no separate training set, so both the attack and the evaluation are performed on the same dataset, and another notes that many query terms do not appear in the corpus, citing "20% in SciDocs" as part of the challenge of generating relevant out-of-corpus terms.

## Sources

**[Perplexity Trap: PLM-Based Retrievers Overrate Low Perplexity Documents](https://proceedings.iclr.cc/paper_files/paper/2025/file/4059971112ab22fc7b6aed520aaca6b2-Paper-Conference.pdf)**
> An information retrieval dataset dedicated to retrieval of scientific scholarly articles.

**[Attention in Large Language Models Yields Efficient Zero-Shot Re-Rankers](https://proceedings.iclr.cc/paper_files/paper/2025/file/b5b1890a7c1a79fe9b32b0f442347089-Paper-Conference.pdf) (as "SciDocs")**
> A BEIR dataset used as a single-hop retrieval benchmark for re-ranking scientific documents.
