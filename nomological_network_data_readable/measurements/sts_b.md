# STS-B
**Type:** Measurement  
**Referenced in:** 18 papers  
**Also known as:** STS-Benchmark, STSB  

## State of the Field

**What it is.** Across papers, the prevailing description is a Semantic Textual Similarity Benchmark for sentence-pair evaluation, usually framed as a downstream sentence similarity task or a GLUE task. Several definitions add that it provides sentence pairs with human-annotated similarity scores on a 0 to 5 scale, and papers report correlation-based metrics on it, including Spearman and Pearson correlation. A smaller line of work uses different task framings, treating it as a classification dataset with a modest number of labels or as a scoring task where the model outputs a string form of a numerical prediction.

**What it is claimed to measure.** Its reported measurement role is concentrated rather than spread across many targets. Papers link it to one behavioral indicator, Semantic textual similarity, and to no constructs; one paper describes STSB as directly measuring the ability of embeddings to capture fine-grained semantic similarity, which matches the broader pattern of using it for sentence similarity evaluation.

**Space of uses.** Most commonly, papers use it as one item in larger evaluation suites rather than in isolation, for example within GLUE development or fine-tuning task collections and in broader semantic similarity sets. No instrument is linked to it, though papers place it alongside STS12, STS22, SICK, CoLA, and MRPC, among other benchmarks. A smaller usage treats it as a controlled scoring setup, or uses it in model-compression and continued pre-training evaluations.

## Sources

**[Accurate Retraining-free Pruning for Pretrained Encoder-based Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/45fc8e1c55df116b23488f3cdb2fc642-Paper-Conference.pdf)**
> The Semantic Textual Similarity Benchmark, used here as a downstream sentence-pair similarity evaluation.

**[NV-Embed: Improved Techniques for Training LLMs as Generalist Embedding Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c4bf73386022473a652a18941e9ea6f8-Paper-Conference.pdf) (as "STS-Benchmark")**
> A benchmark for semantic textual similarity that provides sentence pairs with human-annotated similarity scores on a 0-5 scale.

**[DEPT: Decoupled Embeddings for Pre-training Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/20ceffa1fcec0f882868e5b891e3e7fa-Paper-Conference.pdf) (as "STSB")**
> The Semantic Textual Similarity Benchmark used to evaluate downstream sentence similarity performance after continued pre-training.

## Relationships

### → STS-B
- **Semantic textual similarity** (behaviors tasks) — *measured_by*
  > Semantic Textual Similarity (STS): Directly measures the ability of embeddings to capture fine-grained semantic similarity. We use STSB, STS12 (both from MTEB (Muennighoff et al., 2023)) and SICK (from (Marelli et al., 2014)). (Section 4.1)
  - [EMO: Embedding Model Distillation via Intra-Model Relation and Optimal Transport Alignments](https://aclanthology.org/2025.emnlp-main.385.pdf)
