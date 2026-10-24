# t-SNE visualization
**Type:** Measurement  
**Referenced in:** 25 papers  
**Also known as:** t-SNE clustering, t-SNE  

## State of the Field

Across the provided literature, t-SNE visualization is consistently described as a non-linear dimensionality reduction technique used to project high-dimensional data into a two-dimensional space for visual analysis. Its primary application is to qualitatively assess the structure of model-internal representations, such as embeddings, hidden states, or activations. A frequent use is to inspect the clustering of these representations, for instance, to determine if task vectors cluster by task identity rather than input modality, or to visualize the separation between different query types like clean and triggered samples. Other papers employ it to evaluate the quality of representations, such as assessing the semantic alignment between visual and textual modalities or the stability of hidden state distributions after model editing. As one study notes, the goal is to see if different modalities are "closely aligned – an indicator of whether [the model] integrates coherent semantics across different modalities within a unified semantic space" (A Multi-modal Large Language Model with Graph-of-Thought for Effective Recommendation). Reflecting these applications, the technique is explicitly used as a measurement instrument for the constructs of `Semantic understanding` and `Safety`.

## Sources

**[ESE: Espresso Sentence Embeddings](https://proceedings.iclr.cc/paper_files/paper/2025/file/60dc26558762425a465cb0409fc3dc52-Paper-Conference.pdf)**
> A non-linear dimensionality reduction technique (t-Distributed Stochastic Neighbor Embedding) used to visualize high-dimensional data, applied to assess the quality of information compression in sentence embeddings.

**[Vision-Language Models Create Cross-Modal Task Representations](https://raw.githubusercontent.com/mlresearch/v267/main/assets/luo25c/luo25c.pdf) (as "t-SNE clustering")**
> A visualization technique used to assess whether task vectors cluster by task identity rather than input modality, providing evidence of modality-invariant representation.

**[The Ripple Effect: On Unforeseen Complications of Backdoor Attacks](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25bo/zhang25bo.pdf) (as "t-SNE")**
> t-Distributed Stochastic Neighbor Embedding, a statistical method for visualizing high-dimensional data by projecting embeddings into a two-dimensional space.

## Relationships

### → t-SNE visualization
- **Semantic understanding** (constructs) — *measured_by*
  > “To illustrate the performance in a more intuitive manner, we include the t-SNE (Van der Maaten & Hinton, 2008) plots of the sentence embeddings” and “As one can see, on average, the SetCSE framework improves performance of intersection by 38%, indicating a significant increase on semantic awareness.”
  - [SetCSE: Set Operations using Contrastive Learning of Sentence Embeddings](https://proceedings.iclr.cc/paper_files/paper/2024/file/ed863220bf8b6ae698e26d66e86fb97d-Paper-Conference.pdf)
- **Representational stability** (constructs) — *measured_by*
  > “Finally, we used t-SNE (Van der Maaten & Hinton, 2008) to visualize the hidden representation before and after editing.”
  - [AlphaEdit: Null-Space Constrained Knowledge Editing for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/29c8c615b3187ee995029284702d3f43-Paper-Conference.pdf)
- **Task recognition** (constructs) — *measured_by*
  > "we routed the questions of these tasks and visualized the routing results from the task router in the last laye of LLM with t-SNE"
  - [HMoRA: Making LLMs More Effective with Hierarchical Mixture of LoRA Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/e43a33994a28f746dcfd53eb51ed3c2d-Paper-Conference.pdf)
