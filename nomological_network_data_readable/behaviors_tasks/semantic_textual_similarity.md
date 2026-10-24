# Semantic textual similarity
**Type:** Behavior  
**Referenced in:** 23 papers  
**Also known as:** Text similarity prediction, Text pair classification, Semantic similarity, Sentence similarity estimation, Sentence similarity, Semantic similarity judgment, Semantic text similarity, Sentence similarity assessment  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats this behavior as judging how similar two texts or sentences are in meaning and, most often, returning a similarity score on a continuous scale. Definitions repeatedly describe predicting or measuring the degree of semantic equivalence between a pair of texts or sentences, and one paper explicitly asks a system to "assess the similarity of the two sentences and provide a score from 0 to 1." A smaller line of work frames success more categorically, as deciding whether two sentences are semantically similar or paraphrases, whether two financial texts are semantically related, or whether a post-dropout response preserves the meaning of a pre-dropout response. Another variant evaluates success by whether semantically related pairs receive higher similarity than unrelated pairs.

**Variants.** Papers use closely related labels such as semantic textual similarity, sentence similarity, semantic similarity, and text pair classification. The behavior is studied with ordinary sentence pairs, with monolingual and cross-lingual sentence pairs, in finance through headline to article and query to intent matching, in biomedical task collections that include sentence similarity, and in output comparison settings where current and dropout responses are judged as similar or "different."

**Space of elicitation and scores.** Papers link this behavior to 4 measurement instruments. MTEB is the most common, described as including STS alongside retrieval, reranking, clustering, classification, and related embedding tasks; GLUE is another recurring benchmark that includes semantic similarity; STS12 and STS-B appear as more specific evaluation sets, with one paper using STS12 for Spearman correlation analysis and another describing STS-B as directly measuring fine-grained semantic similarity. The elicitation and scoring described in the papers range from continuous scores, including 0 to 1 and 0 to 5 scales, to pairwise comparison rules such as whether Sim(q, s+) > Sim(q, s−), and one paper uses GPT-4o to judge whether two responses are semantically similar.

**What it is taken as evidence of.** Only 1 construct is linked. Papers do not mainly treat this behavior as evidence of a construct; instead, the only linked construct is Coherence, and one paper relates the two by stating that measuring semantic similarity through token-level embedding distances can overlook contextual information and lead to reduced contextual semantic coherence. No alternative construct-level framing is linked alongside that relation.

## Sources

**[PiSSA: Principal Singular Values and Singular Vectors Adaptation of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/db36f4d603cc9e3a2a5e10b93e6428f2-Paper-Conference.pdf) (as "Text similarity prediction")**
> Predicting the semantic similarity score between two text sentences.

**[AROMA: Autonomous Rank-one Matrix Adaptation](https://aclanthology.org/2025.emnlp-main.170.pdf) (as "Semantic similarity")**
> The observable task of assessing the degree to which two pieces of text are similar in meaning.

**[FinMTEB: Finance Massive Text Embedding Benchmark](https://aclanthology.org/2025.emnlp-main.179.pdf) (as "Text pair classification")**
> The observable behavior of determining whether two financial texts are semantically related, such as assessing if a headline matches a news article or if a query matches user intent.

**[Training LLMs to be Better Text Embedders through Bidirectional Reconstruction](https://aclanthology.org/2025.emnlp-main.216.pdf) (as "Sentence similarity estimation")**
> The task of quantifying the degree of semantic similarity between two sentences, often on a continuous scale.

**[Tiny Budgets, Big Gains: Parameter Placement Strategy in Parameter Super-Efficient Fine-Tuning](https://aclanthology.org/2025.emnlp-main.321.pdf) (as "Sentence similarity")**
> Judging whether two sentences are semantically similar or paraphrases.

**[Polysemantic Dropout: Conformal OOD Detection for Specialized LLMs](https://aclanthology.org/2025.emnlp-main.595.pdf) (as "Semantic similarity judgment")**
> The observable behavior of comparing two text responses to determine whether their meaning is preserved, used here to detect changes in model output after neuron dropout.

**[Making Text Embedders Few-Shot Learners](https://proceedings.iclr.cc/paper_files/paper/2025/file/5eba8556ce2d1afff57591464d48fbc3-Paper-Conference.pdf)**
> The task of measuring the degree of semantic equivalence between two texts, typically on a continuous scale.

**[MMTEB: Massive Multilingual Text Embedding Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/fc0e3f908a2116ba529ad0a1530a3675-Paper-Conference.pdf) (as "Semantic text similarity")**
> The task of determining how similar two pieces of text are in meaning, typically by assigning a continuous score.

**[Semantic-Eval : A Semantic Comprehension Evaluation Framework for Large Language Models Generation without Training](https://aclanthology.org/2025.acl-long.477.pdf) (as "Sentence similarity assessment")**
> The observable task of determining the degree of semantic similarity between two sentences.

## Relationships

### Semantic textual similarity →
- **MTEB** (measurements) — *measured_by*
  > It includes data for various tasks including Retrieval, Reranking, Clustering, Classification, and STS. (Section 4.1)
  - [Making Text Embedders Few-Shot Learners](https://proceedings.iclr.cc/paper_files/paper/2025/file/5eba8556ce2d1afff57591464d48fbc3-Paper-Conference.pdf)
- **STS12** (measurements) — *measured_by*
  > To validate this hypothesis and quantify their complementarity, we need to examine how these two embedding relate to one another. We approach this by conducting a Spearman correlation analysis using the STS12 dataset, which contains 6,216 sentence pairs. (Section 3.2)
  - [Your Mixture-of-Experts LLM Is Secretly an Embedding Model for Free](https://proceedings.iclr.cc/paper_files/paper/2025/file/aed2049f68827943dda5a63b7c4ba0a2-Paper-Conference.pdf)
- **GLUE** (measurements) — *measured_by*
  > "the GLUE benchmark (Wang et al., 2019), which encompasses a diverse range of tasks, including question answering, sentiment analysis, and semantic textual similarity" (Section 6.2)
  - [A Memory Efficient Randomized Subspace Optimization Method for Training Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25cj/chen25cj.pdf)
- **STS-B** (measurements) — *measured_by*
  > Semantic Textual Similarity (STS): Directly measures the ability of embeddings to capture fine-grained semantic similarity. We use STSB, STS12 (both from MTEB (Muennighoff et al., 2023)) and SICK (from (Marelli et al., 2014)). (Section 4.1)
  - [EMO: Embedding Model Distillation via Intra-Model Relation and Optimal Transport Alignments](https://aclanthology.org/2025.emnlp-main.385.pdf)

### Associated with
- **Coherence** (constructs)
  > Besides, these works typically measure semantic similarity via token-level embedding distances. Such approach overlooks contextual information, often leading to reduced contextual semantic coherence. (Section 1)
  - [Cape: Context-Aware Prompt Perturbation Mechanism with Differential Privacy](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25g/wu25g.pdf)
- **ROUGE** (measurements)
  > We observe high ROUGE, semantic similarity, logical consistency scores between clean and REGTEXT data (Table 2), indicating a positive association between lexical overlap (ROUGE) and semantic similarity.
  - [Towards Operationalizing Right to Data Protection](https://aclanthology.org/2025.naacl-long.416.pdf)
