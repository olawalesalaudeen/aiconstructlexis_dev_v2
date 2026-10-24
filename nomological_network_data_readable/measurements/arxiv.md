# Arxiv
**Type:** Measurement  
**Referenced in:** 11 papers  

## State of the Field

**What it is.** Across papers, Arxiv is most commonly treated broadly as a dataset of scientific or academic texts from the arXiv repository, but the format varies by task. Some definitions present it as a directed citation network of Computer Science papers, while others use the same name for a long-document summarization corpus of scientific articles, a subset of paper abstracts used through validation splits, a citation recommendation benchmark derived from arXiv preprints, or a short-form academic-text dataset. The prevailing usage is therefore task-specific rather than tied to a single format.

**What it is claimed to measure.** Papers use Arxiv to measure 2 constructs, Length generalization and Zero-shot generalization, and 1 behavioral indicator, Node classification. For node classification, one paper frames the task as predicting which arXiv CS sub-category a paper belongs to. Other papers report Arxiv as part of real-world or out-of-domain evaluations for length generalization and zero-shot generalization, so the measurement claims span several targets rather than converging on one.

**Space of uses.** No measurement instrument is explicitly linked to Arxiv through instrument relationships. Even so, papers commonly deploy it in multi-dataset evaluations, often alongside Pubmed, and also with Cora, OpenWebText, Books3, and RefSeer. They position it variously as an out-of-domain or open-ended evaluation set, a summarization benchmark scored with BLEU, ROUGE-L, and BERTScore, and in citation recommendation as one of the largest benchmarks for that task.

**Concerns raised.** One paper raises a length-related limitation in an ICL setting. It describes Arxiv as having 'extremely over-length' documents, so the original ICL setup leaves little room for demonstrations.

## Sources

**[LLMs as Zero-shot Graph Learners: Alignment of GNN Representations with LLM Token Embeddings](https://proceedings.neurips.cc/paper_files/paper/2024/file/0b77d3a82b59e9d9899370b378087faf-Paper-Conference.pdf)**
> A benchmark dataset representing a directed citation network of Computer Science papers from the arXiv preprint server, used for evaluating tasks like node classification.

## Relationships

### → Arxiv
- **Node classification** (behaviors tasks) — *measured_by*
  > Using the node classification task on the Arxiv dataset (see Sect. 3.1) as an example, the instruction is structured as follows: Which arXiv CS sub-category does this paper belong to? (Section 2.3.1)
  - [LLMs as Zero-shot Graph Learners: Alignment of GNN Representations with LLM Token Embeddings](https://proceedings.neurips.cc/paper_files/paper/2024/file/0b77d3a82b59e9d9899370b378087faf-Paper-Conference.pdf)
- **Length generalization** (constructs) — *measured_by*
  > Experimental validation on real-world datasets (Arxiv, Books3, and CHE) demonstrates that DAPE enhances model performances in terms of trained length and length generalization, where the improvements are statistically significant. (Abstract)
  - [DAPE: Data-Adaptive Positional Encoding for Length Extrapolation](https://proceedings.neurips.cc/paper_files/paper/2024/file/2f050fa9f0d898e3f265d515f50ae8f9-Paper-Conference.pdf)
- **Zero-shot generalization** (constructs) — *measured_by*
  > We evaluate the model capacity for both the OpenWebText test set and seven out-of-domain unseen datasets, used to validate the models' ability in zero-shot generalization. These unseen datasets include Our Penn Tree Bank (PTB)... Wikitext... LM1B, Lambada... AG News... Pubmed and Arxiv
  - [Energy-Based Diffusion Language Models for Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/535baca36883a4e0450423b26b150a48-Paper-Conference.pdf)
