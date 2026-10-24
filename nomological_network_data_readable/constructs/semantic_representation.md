# Semantic representation
**Type:** Construct  
**Referenced in:** 4 papers  
**Also known as:** Text representation quality, Embedding capability, Semantic representational power  

## State of the Field

**Definition agreement:** Consensus. All papers define semantic representation as a model's internal text or vector representations capturing semantic meaning or relationships among words, sentences, or concepts. The differences are minor shifts in wording and emphasis, such as embeddings versus representations, contextual richness, or bidirectional modeling, rather than different phenomena.

**Space of definitions.** Across the papers, the prevailing usage treats semantic representation as a model property: the ability or quality of its vector or internal representations to capture semantic meaning. Most definitions converge on high-quality text representations or embeddings that preserve meaning or semantic relationships, whether framed as "high-fidelity, contextually rich embeddings," the internal encoding of words and sentences, or the preservation of relations between words or concepts. A smaller difference in emphasis appears in whether the construct is described mainly as support for downstream tasks, as internal representational structure, or as an ability that bidirectional modeling can enhance, sometimes alongside a stated trade-off with generative performance.

**Space of facets.** The papers do not lay out a shared subtype system, but they use closely related labels for largely the same construct, including text representation quality, embedding capability, and semantic representational power. Across those formulations, the common thread is semantic content in representations, while some papers foreground context sensitivity or bidirectional information and others foreground preserving semantic relationships or monosemantic features. As one paper puts it, the question is whether bidirectional attention can "enhance the quality of word meaning representations" (Learning to Look at the Other Side: A Semantic Probing Study of Word Embeddings in LLMs with Enabled Bidirectional Attention).

**Space of measurement.** No measurement instrument is linked to this construct, and no behavioral indicator is linked to it. Even so, the definitions and snippets make the operational target fairly explicit in prose: papers talk about generating "higher-quality text representations," improving "embedding performance," representing subsequent and preceding context, and preserving semantic relationships between words or concepts. One paper also states that traditional metrics such as Mean Squared Error and L0 sparsity "ignore the evaluation of the semantic representational power" of sparse autoencoders, indicating a contrast between generic reconstruction or sparsity metrics and evaluations aimed at semantic preservation (Rethinking Evaluation of Sparse Autoencoders through the Representation of Polysemous Words).

**Links.** No causal, correlational, or related links are recorded for this construct.

## Sources

**[Look Both Ways and No Sink: Converting LLMs into Text Encoders without Training](https://aclanthology.org/2025.acl-long.1113.pdf) (as "Text representation quality")**
> The latent ability of a model to generate high-fidelity, contextually rich embeddings that effectively capture semantic meaning for downstream tasks.

**[Learning to Look at the Other Side: A Semantic Probing Study of Word Embeddings in LLMs with Enabled Bidirectional Attention](https://aclanthology.org/2025.acl-long.1132.pdf)**
> The quality and structure of how a model internally encodes the meaning of words and sentences in its vector representations.

**[What Limits Bidirectional Model’s Generative Capabilities? A Uni-Bi-Directional Mixture-of-Expert Method For Bidirectional Fine-tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25y/li25y.pdf) (as "Embedding capability")**
> The latent ability of a model to produce high-quality text representations that capture semantic meaning, enhanced by bidirectional modeling but typically at the cost of generative performance in unidirectional models.

**[Rethinking Evaluation of Sparse Autoencoders through the Representation of Polysemous Words](https://proceedings.iclr.cc/paper_files/paper/2025/file/380a0b16a7e6f8c5010f798c9f2d3c61-Paper-Conference.pdf) (as "Semantic representational power")**
> The capacity of a model's internal representations to accurately capture and preserve the semantic relationships between words or concepts.

## Relationships

### → Semantic representation
- **Attention sink** (constructs) — *causes*
  > Further analysis reveals that the attention sink phenomenon (Xiao et al., 2023), where the model tends to focus on the first token, significantly affects the performance of the converted text encoder. (Section 1)
  - [Look Both Ways and No Sink: Converting LLMs into Text Encoders without Training](https://aclanthology.org/2025.acl-long.1113.pdf)
