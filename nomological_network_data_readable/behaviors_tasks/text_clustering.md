# Text clustering
**Type:** Behavior  
**Referenced in:** 9 papers  
**Also known as:** Clustering  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats text clustering, often called just clustering, as grouping a set of texts into groups so that texts in the same group are more similar to one another than to texts in other groups. A smaller variation states the task as grouping similar text inputs into coherent clusters based on embedding proximity and explicitly notes that this is done without prior labels. Papers also consistently present it as one task category alongside other embedding tasks.

**Variants.** Papers use both the names "Clustering" and "Text clustering" for the same behavior. The named variants are mostly dataset and setting specific: Arxiv, Biorxiv, Medrxiv, Reddit, and StackExchange clustering appear in S2S and P2P forms, and TwentyNewsgroups-Clustering is also listed. Beyond these named datasets, papers mainly discuss it as a general task category within broader evaluations.

**Space of elicitation and scores.** One measurement instrument is linked to text clustering, MTEB, and papers describe it as a collection of datasets or a benchmark that includes clustering among its task categories. This is the only reported way papers measure the behavior, with models evaluated on MTEB clustering tasks; one paper further notes that clustering is scored with V-Measure.

**What it is taken as evidence of.** The papers do not link text clustering to any construct, so they do not specify what broader construct this behavior is taken to indicate. There is therefore no recorded agreement or disagreement about what it reflects.

## Sources

**[Making Text Embedders Few-Shot Learners](https://proceedings.iclr.cc/paper_files/paper/2025/file/5eba8556ce2d1afff57591464d48fbc3-Paper-Conference.pdf) (as "Clustering")**
> The task of grouping a set of texts in such a way that texts in the same group are more similar to each other than to those in other groups.

**[Your Mixture-of-Experts LLM Is Secretly an Embedding Model for Free](https://proceedings.iclr.cc/paper_files/paper/2025/file/aed2049f68827943dda5a63b7c4ba0a2-Paper-Conference.pdf)**
> The task of grouping a set of texts such that texts in the same group are more similar to each other than to those in other groups.

## Relationships

### Text clustering →
- **MTEB** (measurements) — *measured_by*
  > MTEB is a collection of 56 datasets that are grouped into different embedding tasks: classification, clustering, pair classification, reranking, retrieval, sentence similarity (STS), and summarization, with the goal of evaluating embeddings broadly. (Section 4.1)
  - [Repetition Improves Language Model Embeddings](https://proceedings.iclr.cc/paper_files/paper/2025/file/e9b0c9480b03f9a6bca24ed8c08ee058-Paper-Conference.pdf)
