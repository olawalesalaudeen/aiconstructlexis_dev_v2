# Length generalization
**Type:** Construct  
**Referenced in:** 67 papers  
**Also known as:** Length generalizability, Length extrapolation, Context Length Generalizability, Generative length extrapolation, Size generalisation, Extrapolation ability, Long-context generalization  

## State of the Field

**Definition agreement:** Consensus. Most papers define length generalization as a model's ability to keep performing effectively on sequences or contexts that are longer than those seen during training or pretraining. A few papers phrase this in narrower settings such as longer programs, longer generations, or unseen shorter lengths too, but these are minority variants around the same core train-short, test-long extrapolation property rather than a substantial competing definition.

**Space of definitions.** Across the surveyed work, the prevailing usage describes training on shorter sequences and testing on longer ones while maintaining performance, often phrased as applying a model directly to Ltest > Ltrain without performance degradation or effectively processing inputs longer than pre-training exposure. A smaller line of work narrows this to specific settings, such as applying a learned algorithm to longer inputs as evidence of a scalable rather than memorized solution, producing longer programs than seen in training, solving math word problems with extended narratives, or sustaining coherent generation over longer durations. Some authors also broaden the construct from longer inputs alone to varying numbers of context examples, or define it over both upward and downward out-of-distribution lengths.

**Space of facets.** Papers use several near-synonymous labels, including length extrapolation, long-context generalization, length generalizability, context length generalizability, generative length extrapolation, and size generalisation; one paper explicitly notes that, in language modelling, size generalisation is also known as length generalisation. The construct is also positioned relative to other generalization notions: some work treats easy-to-hard generalization as a type of length generalization, and another uses length generalization as a proxy for whether the model has learned the correct problem-solving strategy, linking it to systematic generalization. A smaller theoretical line further splits it into downward and upward OOD generalization, and one recurrent-model definition formalizes it through position-wise perplexities over longer positions.

**Space of measurement.** Papers link the construct to 18 measurement instruments and 5 behavioral indicators. The most frequently linked instruments are Books3, InfiniteBench, LongBench, PG-19, and RULER, and the broader measurement space is dominated by benchmark scores and perplexity on long-context corpora, with additional task evaluations for memory, retrieval, summarization, and question answering. These operationalizations usually match the dominant train-short, test-long definition, and some papers make the criterion explicit as accuracy beyond trained lengths or position-wise perplexity staying below a reference threshold on longer positions, while others narrow it to task-specific proxies such as arithmetic, recall, program length, or long-form generation.

**Links.** Beyond measurement, papers most often relate length generalization to long-context understanding and to other generalization or reasoning constructs. One paper reports that it correlates with a locality condition on which token distances matter across train and extrapolation lengths. Separate papers claim causal relationships from counting, simplicity bias, effective receptive field, and permutation invariance to length generalization.

## Sources

**[ExeDec: Execution Decomposition for Compositional Generalization in Neural Program Synthesis](https://proceedings.iclr.cc/paper_files/paper/2024/file/c43b2989b1ba055aa713a4abbe4a8b05-Paper-Conference.pdf)**
> The ability of a model to be trained on shorter sequences and then be applied to longer sequences without performance degradation.

**[InfLLM: Training-Free Long-Context Extrapolation for LLMs with an Efficient Context Memory](https://proceedings.neurips.cc/paper_files/paper/2024/file/d842425e4bf79ba039352da0f658a906-Paper-Conference.pdf) (as "Length generalizability")**
> The ability of a large language model to effectively process sequences that are longer than those it was exposed to during its pre-training phase.

**[Can LLMs Solve Longer Math Word Problems Better?](https://proceedings.iclr.cc/paper_files/paper/2025/file/474ada926b331d78f06d95e8913111cc-Paper-Conference.pdf) (as "Context Length Generalizability")**
> The ability of a Large Language Model to solve math word problems with extended narratives or lengthy contexts.

**[Gated Delta Networks: Improving Mamba2 with Delta Rule](https://proceedings.iclr.cc/paper_files/paper/2025/file/4904fad153f6434a7bcf04465d4be2cc-Paper-Conference.pdf) (as "Length extrapolation")**
> The ability to effectively process sequences that are longer than any seen during the training phase.

**[MambaExtend: A Training-Free Approach to Improve Long Context Extension of Mamba](https://proceedings.iclr.cc/paper_files/paper/2025/file/f1922bd718528ac3eab114eabbbfa7a0-Paper-Conference.pdf) (as "Long-context generalization")**
> The ability of a model to maintain its performance and effectiveness when processing input sequences that are significantly longer than those it was exposed to during its pre-training phase.

**[Long-Form Speech Generation with Spoken Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/park25k/park25k.pdf) (as "Generative length extrapolation")**
> The ability to maintain high-quality and coherent generation for durations significantly longer than those seen during training.

**[Softmax is not Enough (for Sharp Size Generalisation)](https://raw.githubusercontent.com/mlresearch/v267/main/assets/velickovic25a/velickovic25a.pdf) (as "Size generalisation")**
> The ability of a model to maintain performance on tasks when the number of input items exceeds the maximum seen during training, particularly relevant for reasoning tasks over variable-length sequences.

**[BehaviorGPT: Smart Agent Simulation for Autonomous Driving with Next-Patch Prediction](https://proceedings.neurips.cc/paper_files/paper/2024/file/9144c7c014bf4c30e88f650bef8f68dd-Paper-Conference.pdf) (as "Extrapolation ability")**
> The model's capability to generate coherent and realistic sequences that are longer than the sequences it was trained on.

## Relationships

### Length generalization →
- **Books3** (measurements) — *measured_by*
  > Figure 2: Perplexity of larger bases on Books3 (Presser, 2020) shows better extrapolation.
  - [Scaling Laws of RoPE-based Extrapolation](https://proceedings.iclr.cc/paper_files/paper/2024/file/d33b741600f100b31256c70a46f66ec9-Paper-Conference.pdf)
- **PG-19** (measurements) — *measured_by*
  > Figure 2: Length extrapolation on six long benchmarks.
  - [Gated Delta Networks: Improving Mamba2 with Delta Rule](https://proceedings.iclr.cc/paper_files/paper/2025/file/4904fad153f6434a7bcf04465d4be2cc-Paper-Conference.pdf)
- **RULER** (measurements) — *measured_by*
  > Benchmarks of Long Context Generalization (Section 5.2)
  - [LongRecipe: Recipe for Efficient Long Context Generalization in Large Language Models](https://aclanthology.org/2025.acl-long.581.pdf)
- **InfiniteBench** (measurements) — *measured_by*
  > We compare our method with existing length extrapolation approaches... on LongBench (Bai et al., 2023) and InfiniteBench (Zhang et al., 2024)... (Section 5.1)
  - [ParallelComp: Parallel Long-Context Compressor for Length Extrapolation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xiong25b/xiong25b.pdf)
- **LongBench** (measurements) — *measured_by*
  > We compare our method with existing length extrapolation approaches... on LongBench (Bai et al., 2023) and InfiniteBench (Zhang et al., 2024)... (Section 5.1)
  - [ParallelComp: Parallel Long-Context Compressor for Length Extrapolation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xiong25b/xiong25b.pdf)
- **Arxiv** (measurements) — *measured_by*
  > Experimental validation on real-world datasets (Arxiv, Books3, and CHE) demonstrates that DAPE enhances model performances in terms of trained length and length generalization, where the improvements are statistically significant. (Abstract)
  - [DAPE: Data-Adaptive Positional Encoding for Length Extrapolation](https://proceedings.neurips.cc/paper_files/paper/2024/file/2f050fa9f0d898e3f265d515f50ae8f9-Paper-Conference.pdf)
- **Needle-in-a-Haystack** (measurements) — *measured_by*
  > We measure the extent to which DeBERTa generalizes to longer sequences with the ‘needle in a haystack’ test from RULER (Hsieh et al., 2024). (Section 2.3)
  - [BERTs are Generative In-Context Learners](https://proceedings.neurips.cc/paper_files/paper/2024/file/04ea184dfb5f1babb78c093e850a83f9-Paper-Conference.pdf)
- **GovReport** (measurements) — *measured_by*
  > Figure 2: Length extrapolation on six long benchmarks.
  - [Gated Delta Networks: Improving Mamba2 with Delta Rule](https://proceedings.iclr.cc/paper_files/paper/2025/file/4904fad153f6434a7bcf04465d4be2cc-Paper-Conference.pdf)
- **QMSum** (measurements) — *measured_by*
  > Figure 2: Length extrapolation on six long benchmarks.
  - [Gated Delta Networks: Improving Mamba2 with Delta Rule](https://proceedings.iclr.cc/paper_files/paper/2025/file/4904fad153f6434a7bcf04465d4be2cc-Paper-Conference.pdf)
- **NarrativeQA** (measurements) — *measured_by*
  > Figure 2: Length extrapolation on six long benchmarks.
  - [Gated Delta Networks: Improving Mamba2 with Delta Rule](https://proceedings.iclr.cc/paper_files/paper/2025/file/4904fad153f6434a7bcf04465d4be2cc-Paper-Conference.pdf)
- **Qasper** (measurements) — *measured_by*
  > Figure 2: Length extrapolation on six long benchmarks.
  - [Gated Delta Networks: Improving Mamba2 with Delta Rule](https://proceedings.iclr.cc/paper_files/paper/2025/file/4904fad153f6434a7bcf04465d4be2cc-Paper-Conference.pdf)
- **CodeParrot** (measurements) — *measured_by*
  > Figure 2: Length extrapolation on six long benchmarks.
  - [Gated Delta Networks: Improving Mamba2 with Delta Rule](https://proceedings.iclr.cc/paper_files/paper/2025/file/4904fad153f6434a7bcf04465d4be2cc-Paper-Conference.pdf)
- **DoTA (traffic accident analysis)** (measurements) — *measured_by*
  > Long Context... mean testing on the... DoTA long context subset (Table 1).
  - [Single-to-mix Modality Alignment with Multimodal Large Language Model for Document Image Machine Translation](https://aclanthology.org/2025.acl-long.606.pdf)
- **The Pile (deduplicated)** (measurements) — *measured_by*
  > To assess their capability for length extrapolation, we evaluated the implicit models on the test split of the D-PILE, which was packed with longer sequences consisting of 4096, 8192, and 16384 tokens. (Section 5)
  - [Implicit Language Models are RNNs: Balancing Parallelization and Expressivity](https://raw.githubusercontent.com/mlresearch/v267/main/assets/schone25a/schone25a.pdf)
- **LongMemEval** (measurements) — *measured_by*
  > To assess long-context memory and extrapolation ability, two benchmarks are adopted: a chat-form benchmark LONGMEMEVAL... (Section 1)
  - [Recall with Reasoning: Chain-of-Thought Distillation for Mamba's Long-Context Memory and Extrapolation](https://aclanthology.org/2025.emnlp-main.235.pdf)
- **HELMET** (measurements) — *measured_by*
  > To assess long-context memory and extrapolation ability, two benchmarks are adopted: ... an application-centric benchmark HELMET (Yen et al., 2024). (Section 1)
  - [Recall with Reasoning: Chain-of-Thought Distillation for Mamba's Long-Context Memory and Extrapolation](https://aclanthology.org/2025.emnlp-main.235.pdf)

### → Length generalization
- **Simplicity bias** (constructs) — *causes*
  > Toy Model (RASP Learning). For symbolic tasks, Transformers tend to learn the shortest RASP-L program which fits the training set, if one exists. Thus, if this minimal program exists and correctly length-generalizes, then so will the Transformer. (Section 1)
  - [What Algorithms can Transformers Learn? A Study in Length Generalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/45ed1a72597594c097152ef9cc187762-Paper-Conference.pdf)
- **Effective receptive field** (constructs) — *causes*
  > Through a series of visualizations, analyses, and empirical measures, recognize that although Mamba can theoretically capture global interactions via the recurrent state, its limited ERF prevents significant length-extrapolation; (Section 1)
  - [DeciMamba: Exploring the Length Extrapolation Potential of Mamba](https://proceedings.iclr.cc/paper_files/paper/2025/file/fae0a4535196bf7715c1aef2ccfe283f-Paper-Conference.pdf)
- **Adaptive computation** (constructs) — *causes*
  > In this work, we demonstrate that looped Transformers with an adaptive number of steps significantly improve length generalization. (ABSTRACT)
  - [Looped Transformers for Length Generalization](https://proceedings.iclr.cc/paper_files/paper/2025/file/25cc3adf8c85f7c70989cb8a97a691a7-Paper-Conference.pdf)
- **Sparsity** (constructs) — *causes*
  > a key factor driving length generalization is a “sparse” dependency structure of each token on the previous ones. (Abstract)
  - [The Role of Sparsity for Length Generalization in LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/golowich25a/golowich25a.pdf)

### Associated with
- **Long-context understanding** (constructs)
  > Length extrapolation methods, although theoretically capable of extending the context window beyond the training sequence length, often underperform in practical long-context applications. (Section 1)
  - [CLEX: Continuous  Length Extrapolation for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/3df38ca67befaed9c03b95ffee07d9f8-Paper-Conference.pdf)
- **Easy-to-hard generalization** (constructs)
  > “we investigate whether these models are capable of logical extrapolation—can they solve problems of greater size and difficulty than those that appear in their training set?”
  - [Transformers Can Do Arithmetic with the Right Embeddings](https://proceedings.neurips.cc/paper_files/paper/2024/file/c35986bc1ee29b31c1011481b77fe540-Paper-Conference.pdf)
- **Integer addition** (behaviors tasks)
  > Standard Transformers trained from scratch on addition and other arithmetic tasks exhibit little to no length generalization (Section 1)
  - [What Algorithms can Transformers Learn? A Study in Length Generalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/45ed1a72597594c097152ef9cc187762-Paper-Conference.pdf)
- **Language modeling** (behaviors tasks)
  > First, we examine its extrapolation capability in decoder-only models for next-token prediction, comparing it against several representative RPEs as well as commonly used APEs. (Section 5)
  - [Context-aware Biases for Length Extrapolation](https://aclanthology.org/2025.emnlp-main.1545.pdf)
- **Systematic generalization** (constructs)
  > While we focus on studying length generalization in this work, we expect the intuitions developed here can apply to systematic generalization more broadly. (Section 1)
  - [What Algorithms can Transformers Learn? A Study in Length Generalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/45ed1a72597594c097152ef9cc187762-Paper-Conference.pdf)
- **Long-form text generation** (behaviors tasks)
  > While transformer-based models exhibit satisfying performances in tasks of consistent length and distribution, their effectiveness tends to diminish sharply when the input length exceeds the training length, e.g., long document summarization, “needle in a haystack” search, and long text generation. (Section 1)
  - [DAPE: Data-Adaptive Positional Encoding for Length Extrapolation](https://proceedings.neurips.cc/paper_files/paper/2024/file/2f050fa9f0d898e3f265d515f50ae8f9-Paper-Conference.pdf)
- **Inductive bias** (constructs)
  > The short validation set reveals an architecture’s inductive bias in the absence of any disambiguating information about how it should generalize to longer lengths, as in the experiments of Del´etang et al. (2023). (Section 4)
  - [Training Neural Networks as Recognizers of Formal Languages](https://proceedings.iclr.cc/paper_files/paper/2025/file/7256b2c07b6980aca382eb41606501c2-Paper-Conference.pdf)
- **Reasoning** (constructs)
  > Length generalization (LG) is a challenging problem in learning to reason. (ABSTRACT)
  - [Generalizing Reasoning Problems to Longer Lengths](https://proceedings.iclr.cc/paper_files/paper/2025/file/abcbdf504b621b4d1213aa7a5c489f8a-Paper-Conference.pdf)
- **Attention sink** (constructs)
  > most training-free extrapolation methods are not only severely limited by memory bottlenecks, but also suffer from the attention sink, which restricts their scalability and effectiveness in practice. (Abstract)
  - [ParallelComp: Parallel Long-Context Compressor for Length Extrapolation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xiong25b/xiong25b.pdf)
- **Counting** (behaviors tasks)
  > We train a Transformer with learned positional embeddings on count sequences of lengths up to 50, with random a and b points in [0, 155]. This trained model then length-generalizes near perfectly when prompted to count sequences of length 100 (see Figure 1b).
  - [What Algorithms can Transformers Learn? A Study in Length Generalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/45ed1a72597594c097152ef9cc187762-Paper-Conference.pdf)
