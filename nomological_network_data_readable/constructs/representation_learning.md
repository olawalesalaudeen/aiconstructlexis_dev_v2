# Representation learning
**Type:** Construct  
**Referenced in:** 14 papers  
**Also known as:** Feature learning, Semantic representation learning  

## State of the Field

**Definition agreement:** Consensus. Most papers define representation learning as a model's ability to learn meaningful, useful internal or latent representations or embeddings of input data that preserve important structure or semantics and support transfer or downstream tasks. A few papers add specific emphases such as invariances, similarity in latent space, semantic rather than superficial patterns, or layerwise intermediate states, but these are refinements of the same core idea rather than different phenomena.

**Space of definitions.** Across the surveyed work, the prevailing usage describes representation learning as learning embeddings, features, or latent representations that preserve useful information for downstream tasks, often by encoding similar instances closely in a representation space. Several definitions stay within this broad framing but vary in emphasis, referring to universal or rich representations that transfer across tasks or modalities, or to a fixed transformation that prepares inputs for later learning. Smaller lines of work instead define it as learning context-relevant or invariant features, note that contexts can help find 'contextual features that ERM ignores', emphasize semantic rather than token-pattern representations, or focus on meaningful intermediate representations across layers.

**Space of facets.** Papers organize the construct through nearby labels and contrasts rather than a single shared taxonomy. One usage calls it feature learning and ties it to contextual or environment-relevant features, while another explicitly contrasts semantic representations with token pattern representations. In one in-context account, representation learning is the first stage of a two-step scheme in which lower layers transform inputs into a structured format and the model then performs linear in-context learning; a separate layer-focused usage discusses intermediate representations that contain more non-support samples at higher layers.

**Space of measurement.** Operationalization is sparse: papers link the construct to one measurement instrument, the Nucleotide Transformer Benchmark, and to no behavioral indicators. In the linked use, learned representations are evaluated by fine-tuning pretrained DNA-xLSTM models on genomic classification benchmarks, so measurement proceeds through downstream benchmark performance. This follows the common downstream-transfer framing in the definitions more than the variants that specify latent-space proximity, semantic-versus-token distinctions, or contextual invariance.

**Links.** Links are concentrated in five constructs, most often in-context learning. Several papers report that representation learning is related to in-context learning, describing the ICL process through a representation-learning lens or as learning with representations, and one paper claims a causal relationship from representation learning to in-context learning through learning informative basis representations. Single papers also claim causal relationships from representation learning to generalization and understanding, from representation learning to relational reasoning, and from representation learning to generation diversity.

## Sources

**[Context is Environment](https://proceedings.iclr.cc/paper_files/paper/2024/file/03645743ea35690f30d795d6bac149a5-Paper-Conference.pdf) (as "Feature learning")**
> The model's capacity to learn useful representations of input data that capture invariant or environment-relevant patterns, which can be enhanced through context-based training.

**[How Do Transformers Learn In-Context Beyond Simple Functions? A Case Study on Learning with Representations](https://proceedings.iclr.cc/paper_files/paper/2024/file/c9694bf4f9bf3626f7d21158bab74f8e-Paper-Conference.pdf)**
> The ability of a model to learn to encode input data into a latent space where similar instances are represented closely, facilitating downstream tasks.

**[What Factors Affect Multi-Modal In-Context Learning? An In-Depth Exploration](https://proceedings.neurips.cc/paper_files/paper/2024/file/deeb4d6bdb5860fd7faf321dd5486d25-Paper-Conference.pdf) (as "Semantic representation learning")**
> The ability to learn and utilize semantic meaning rather than superficial token patterns, which VLLMs rely on for effective MM-ICL performance.

## Relationships

### Representation learning →
- **In-context learning** (constructs) — *causes*
  > we show that ICL can improve upon the a priori optimal rate when the task class basis resides in a coarser Besov space by learning to encode informative basis representations, emphasizing the importance of pretraining on diverse tasks. (Section 1)
  - [Transformers are Minimax Optimal Nonparametric In-Context Learners](https://proceedings.neurips.cc/paper_files/paper/2024/file/c11daad0a48ea5f3c5c6390c7b060720-Paper-Conference.pdf)
- **Nucleotide Transformer Benchmark** (measurements) — *measured_by*
  > To evaluate the learned representations, we fine-tuned our MLM-pretrained, short-context DNA-xLSTM models ... while the DNA-xLSTM-2M model was fine-tuned on the Nucleotide Transformers Tasks (Dalla-Torre et al., 2024) (Section 4.1)
  - [Bio-xLSTM: Generative modeling, representation and in-context learning of biological and chemical sequences](https://proceedings.iclr.cc/paper_files/paper/2025/file/60cefc59610f8f59ea10099f99a36726-Paper-Conference.pdf)
- **Generation diversity** (constructs) — *causes*
  > Introducing representation-level learning and architectural innovations infuses geometric inductive biases and effectively refines generation diversity. (Section 1)
  - [Elucidating the Design Space of Multimodal Protein Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hsieh25a/hsieh25a.pdf)

### → Representation learning
- **Masked language modeling** (behaviors tasks) — *causes*
  > This modeling approach, often referred to as bidirectional modeling, has proven instrumental in enabling the successful learning of protein representations at an evolutionary scale (Rives et al., 2021), which has powered many subsequent applications, such as machine-learning guided directed evolution for protein engineering (Yang et al., 2019). (Section 3.2)
  - [Bio-xLSTM: Generative modeling, representation and in-context learning of biological and chemical sequences](https://proceedings.iclr.cc/paper_files/paper/2025/file/60cefc59610f8f59ea10099f99a36726-Paper-Conference.pdf)
