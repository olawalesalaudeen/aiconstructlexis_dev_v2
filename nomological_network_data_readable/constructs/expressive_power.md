# Expressive power
**Type:** Construct  
**Referenced in:** 71 papers  
**Also known as:** Representation capability, Representation capacity, Representational capacity, Expressiveness, Expressivity, Representation power, Expressive capacity, Model expressiveness, Computational power, Preference expressiveness, Computational expressivity, Function approximation power  

## State of the Field

**Definition agreement:** Consensus. Most papers define expressive power as a model, architecture, parameterization, or control mechanism's capacity to represent, approximate, or compute a broad class of complex functions, tasks, patterns, or formal languages, often framed as theoretical computational power or approximation capacity. A few papers instead emphasize richness of learned internal or value representations, trainable flexibility, or properties of prompt embeddings, but these are minority variants around the dominant idea rather than a substantial competing definition.

**Space of definitions.** Across the papers, the prevailing usage treats expressive power, often under names such as representational capacity, representation power, expressivity, or expressive capacity, as a latent ability of a model, architecture, parameterization, or adaptation method to represent, approximate, or encode complex functions, tasks, signals, or patterns, sometimes under compactness, low-rank, or parameter-sharing constraints. A large theoretical strand defines it in formal terms, as the class of functions, formal languages, or circuits an architecture can realize, sometimes explicitly separate from learnability or inductive bias, with papers describing prompting as Turing-complete and chain-of-thought steps as expanding expressiveness beyond TC0. Smaller strands use the label more locally, for the richness of prompts or embedding spaces, diversity across layer representations, context-sensitive value representations, or complex preference relations, so the main divide is between broad architecture-level capacity and narrower representation- or mechanism-level capacity.

**Space of facets.** Papers carve the construct into recurring subtypes: representational capacity of low-rank updates, weights, vocabularies, embeddings, and token representations; function approximation power for discontinuous or sequence-to-sequence mappings; and computational expressivity in automata, formal-language, or circuit-complexity terms. Several near-synonyms are used with little separation, while some papers introduce narrower variants such as preference expressiveness or expressive embedding space. A recurring contrast is between expressiveness and learnability or inductive bias, and some papers juxtapose greater continuous-space expressiveness with remaining structural limitations.

**Space of measurement.** Direct measurement is sparse: papers link expressive power to 2 measurement instruments, RewardBench, a benchmark used when richer preference modeling is evaluated, and LLM-as-a-judge, used in a judge pipeline that scores synthesized speech on instruction following, naturalness, and expressiveness. The construct is also linked to 5 behavioral indicators, most often Chain of thought, Code generation, and Context retrieval, and 2 others. Beyond named instruments, papers frequently operationalize it through analyses or proofs, for example by comparing reconstruction of high-rank matrices, showing approximation of wavelet projections or formal-language classes, examining lower cross-layer similarity as a sign of a more expressive model, or testing whether value representations change with demographic prompting and correlate with value-related action ratings; these operationalizations are narrower than the broad definitions and often target a specific component or setting.

**Links.** Among constructs, papers link expressive power to 11 constructs. Papers claim causal relationships both into and out of it: upstream, papers claim a causal relationship from Chain of thought and Context retrieval to expressive power, while other papers describe losses under restrictive output grammars or over-smoothing; downstream, papers claim a causal relationship from expressive power to Mathematical reasoning and several other outcomes. It is also reported to correlate with Knowledge transfer and one personality construct, and to be related to Generalization and several other constructs.

## Sources

**[Efficient Learning with Sine-Activated Low-Rank Matrices](https://proceedings.iclr.cc/paper_files/paper/2025/file/112d8e0c7563de6e3408b49a09b4d8a3-Paper-Conference.pdf) (as "Representational capacity")**
> The degree to which a model's parameterization can encode complex signals or functions while maintaining compactness.

**[Ask, and it shall be given: On the Turing completeness of prompting](https://proceedings.iclr.cc/paper_files/paper/2025/file/123d3e814e257e0781e5d328232ead9b-Paper-Conference.pdf)**
> The range and complexity of functions or tasks that a model is capable of performing or representing.

**[Theory, Analysis, and Best Practices for Sigmoid Self-Attention](https://proceedings.iclr.cc/paper_files/paper/2025/file/a43b459e9fab3a703148ba0c83b8a442-Paper-Conference.pdf) (as "Representation capability")**
> The ability of a model architecture to capture and store information, such as global context, within its token representations.

**[MoS: Unleashing Parameter Efficiency of Low-Rank Adaptation with Mixture of Shards](https://proceedings.iclr.cc/paper_files/paper/2025/file/e574db41163e700545ff4114f96b3d7a-Paper-Conference.pdf) (as "Representation capacity")**
> The model's latent ability to form internal representations sufficient for solving a range of tasks, which can be constrained by parameter sharing or rank.

**[Language Models Need Inductive Biases to Count Inductively](https://proceedings.iclr.cc/paper_files/paper/2025/file/378226e5df7eded3e401de5c9493143c-Paper-Conference.pdf) (as "Expressivity")**
> The range of functions or computational problems that a model architecture is theoretically capable of representing or solving.

**[RandLoRA: Full rank parameter-efficient fine-tuning of large models](https://proceedings.iclr.cc/paper_files/paper/2025/file/382b95a6580cfb0b5ca33c74b4e0e770-Paper-Conference.pdf) (as "Representation power")**
> The inherent capacity of a model's parameterization to capture complex functions and patterns required for downstream tasks.

**[Privacy-Preserving Personalized Federated Prompt Learning for Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4431224d3762aa655f0aee4eaf04ff16-Paper-Conference.pdf) (as "Expressiveness")**
> The capacity of a model's parameter space, such as a prompt, to represent complex functions and capture fine-grained, client-specific patterns.

**[RaSA: Rank-Sharing Low-Rank Adaptation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b4fd162d3e2d015233486a2e313828a7-Paper-Conference.pdf) (as "Expressive capacity")**
> The ability of a model or adaptation method to represent or approximate complex functions, often related to the effective rank of its parameter updates.

**[ComLoRA: A Competitive Learning Approach for Enhancing LoRA](https://proceedings.iclr.cc/paper_files/paper/2025/file/e993102e60e4484686f0bafe7ba8b8f2-Paper-Conference.pdf) (as "Model expressiveness")**
> The degree to which a fine-tuned model can represent complex patterns and tasks with limited adaptation capacity.

**[Training Neural Networks as Recognizers of Formal Languages](https://proceedings.iclr.cc/paper_files/paper/2025/file/7256b2c07b6980aca382eb41606501c2-Paper-Conference.pdf) (as "Computational power")**
> The set of problems or formal languages that a given neural network architecture is theoretically capable of solving, defining the upper and lower bounds on its reasoning capabilities.

**[Understanding Input Selectivity in Mamba: Impact on Approximation Power, Memorization, and Associative Recall Capacity](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25ab/huang25ab.pdf) (as "Function approximation power")**
> The latent ability of a model to represent complex or discontinuous functions by projecting onto appropriate basis functions, such as wavelets, enabling effective modeling of non-smooth signals.

**[Implicit Language Models are RNNs: Balancing Parallelization and Expressivity](https://raw.githubusercontent.com/mlresearch/v267/main/assets/schone25a/schone25a.pdf) (as "Computational expressivity")**
> The capacity of a model to represent complex computational functions, particularly those beyond the circuit complexity of transformers and linear SSMs, such as non-linear and non-diagonal state transitions.

**[Beyond Bradley-Terry Models: A General Preference Model for Language Model Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25de/zhang25de.pdf) (as "Preference expressiveness")**
> The extent to which a model can represent rich, complex preference relations rather than only simple scalar-ordering assumptions.

## Relationships

### Expressive power →
- **Mathematical reasoning** (constructs) — *causes*
  > the limited expressive capacity of LoRA, stemming from the low-rank constraint, has been recognized as a bottleneck, particularly in rigorous tasks like code generation and mathematical reasoning.
  - [RaSA: Rank-Sharing Low-Rank Adaptation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b4fd162d3e2d015233486a2e313828a7-Paper-Conference.pdf)
- **Language modeling** (behaviors tasks) — *causes*
  > a larger vocabulary enhances the representational capacity of the feature mapping, thereby positively impacting the model. (Section 3.1)
  - [Over-Tokenized Transformer: Vocabulary is Generally Worth Scaling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25bb/huang25bb.pdf)
- **Knowledge transfer** (constructs) — *correlates*
  > We observed in Table 3 that a larger source model (either BERTlarge or RoBERTalarge) has lower transfer performance. This aligns with the intuition in Khashabi et al. (2022) that there could be a large number of similarly performing continuous prompts, residing in a large (and also deep) model’s expressive embedding space... Therefore, the induced prompt may carry model specificity in addition to task semantics, limiting its transferability to other models. (Section 3.3)
  - [Zero-Shot Continuous Prompt Transfer: Generalizing Task Semantics Across Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/05f0734db34deb367fc66f1482528044-Paper-Conference.pdf)
- **Code generation** (behaviors tasks) — *causes*
  > the limited expressive capacity of LoRA, stemming from the low-rank constraint, has been recognized as a bottleneck, particularly in rigorous tasks like code generation and mathematical reasoning.
  - [RaSA: Rank-Sharing Low-Rank Adaptation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b4fd162d3e2d015233486a2e313828a7-Paper-Conference.pdf)
- **Personalization** (constructs) — *causes*
  > The residual term is crucial for retaining the expressiveness lost during the factorization process, thereby preserving the client-specific learning and improving personalization (Section 1).
  - [Privacy-Preserving Personalized Federated Prompt Learning for Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4431224d3762aa655f0aee4eaf04ff16-Paper-Conference.pdf)
- **State tracking** (behaviors tasks) — *causes*
  > Transformers, despite their dominance on contemporary language benchmarks, exhibit fundamental limitations in computational expressiveness... they cannot fully recognize regular languages (Bhattamishra et al., 2020) or, equivalently, represent finite state machines (FSMs) (Merrill et al., 2022). This limitation is significant because FSMs form the backbone of many real-world state-tracking problems...
  - [Implicit Language Models are RNNs: Balancing Parallelization and Expressivity](https://raw.githubusercontent.com/mlresearch/v267/main/assets/schone25a/schone25a.pdf)

### → Expressive power
- **Chain of thought** (behaviors tasks) — *causes*
  > we demonstrate that functions computed by Automata, Turing machines, or sparse circuits can be emulated by an ARDT using these intermediate “chain-of-thought” computations. (Section 3)
  - [On the Power of Decision Trees in Auto-Regressive Language Modeling](https://proceedings.neurips.cc/paper_files/paper/2024/file/72176f95680c3fb27a0966f36d5d0c53-Paper-Conference.pdf)
- **Reasoning** (constructs) — *causes*
  > We theoretically show that the loss of expressivity of LLMs under constrained decoding arises because the output grammar G is too restrictive to accommodate the intermediate reasoning steps required to compute the answer. (Section 1)
  - [CRANE: Reasoning with constrained LLM generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/banerjee25a/banerjee25a.pdf)
- **Context retrieval** (behaviors tasks) — *causes*
  > Our positive results showing that enhancing in-context retrieval can improve RNNs’ representation power hold for vanilla Linear RNNs, and can be easily extended to more complex architectures. (Section 1)
  - [RNNs are not Transformers (Yet):  The Key Bottleneck on In-Context Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/79dc391a2c1067e9ac2b764e31a60377-Paper-Conference.pdf)
- **Representation collapse** (constructs) — *causes*
  > This phenomenon, often referred to as the “over-smoothing” problem, substantially reduces the transformers’ ability to represent diverse features (Section 1).
  - [Transformer Meets Twicing: Harnessing Unattended Residual Information](https://proceedings.iclr.cc/paper_files/paper/2025/file/90cdfb6ac8d9f96bdf0ce92f5f05c391-Paper-Conference.pdf)
- **Prompt engineering** (behaviors tasks) — *causes*
  > “CoT improves the representation power of RNNs”
  - [RNNs are not Transformers (Yet):  The Key Bottleneck on In-Context Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/79dc391a2c1067e9ac2b764e31a60377-Paper-Conference.pdf)

### Associated with
- **Parameter efficiency** (constructs)
  > While low-rank models achieve both parameter and memory efficiency, as discussed earlier, they do not perform well in general [47, 59]. ... This is because neural networks often exhibit full-rank structure in the weights and imposing low-rank restrictions could significantly limit their representation power. (Section 1)
  - [SLTrain: a sparse plus low rank approach for parameter and memory efficient pretraining](https://proceedings.neurips.cc/paper_files/paper/2024/file/d63cf0622eed012a17fe88fced64dcb8-Paper-Conference.pdf)
- **Learnability** (constructs)
  > Recent works show that Transformers can be Turing-complete in terms of expressivity, but this does not address the learnability objective. (Abstract)
  - [How Far Can Transformers Reason? The Globality Barrier and Inductive Scratchpad](https://proceedings.neurips.cc/paper_files/paper/2024/file/3107e4bdb658c79053d7ef59cbc804dd-Paper-Conference.pdf)
- **In-context learning** (constructs)
  > We theoretically prove that ICL with transformer is expressive enough to mimic existing meta-learners. (Section 1)
  - [Why In-Context Learning Models are Good Few-Shot Learners?](https://proceedings.iclr.cc/paper_files/paper/2025/file/6c7ca1889f01a9b767c631686fb5fd24-Paper-Conference.pdf)
- **Interpretability and explainability** (constructs)
  > The trade-off between expressiveness and interpretability remains a core challenge when building human-centric models for classification and decision-making. (ABSTRACT)
  - [Large Language Models are Interpretable Learners](https://proceedings.iclr.cc/paper_files/paper/2025/file/887932131fddf943e8fe3310b62c0147-Paper-Conference.pdf)
- **Uniformity** (constructs)
  > Both isotropy and uniformity are related to the expressiveness of the embeddings (Gao et al., 2021; Rajaee and Pilehvar, 2021a; Zhang et al., 2022). (Section 1)
  - [On the Relation Between Fine-Tuning, Topological Properties, and Task Performance in Sense-Enhanced Embeddings](https://aclanthology.org/2025.acl-long.1151.pdf)
