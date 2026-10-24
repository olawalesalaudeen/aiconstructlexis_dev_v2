# Probing
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** Probing experiment  

## State of the Field

Across the provided literature, probing is consistently defined as a technique to assess whether specific properties or information can be decoded from a model's internal, latent representations. The method is operationalized by training an auxiliary classifier on these hidden states to predict the target property. For instance, one paper specifies training a 'linear classifier' on hidden representations ("Language models can learn implicit multi-hop reasoning, but only if they have lots of training data"), while another employs a 'specialized two-layer readout' trained on a supervised dataset ("How Transformers Learn Structured Data: Insights From Hierarchical Filtering"). The stated purpose is to determine what information is encoded within the model, with one paper framing it as a 'mechanistic interpretability technique'. Specific applications mentioned include assessing the encoding of 'intermediate bridge entities' and confirming how 'computation going up the tree is distributed sequentially in the transformer blocks' by probing for 'ancestor symbols'.

## Sources

**[How Transformers Learn Structured Data: Insights From Hierarchical Filtering](https://raw.githubusercontent.com/mlresearch/v267/main/assets/garnier-brun25a/garnier-brun25a.pdf) (as "Probing experiment")**
> A method that trains auxiliary classifiers on internal model representations to assess the presence of specific information (e.g., ancestor symbols) at different network layers.

**[Position: We Need An Algorithmic Understanding of Generative AI](https://raw.githubusercontent.com/mlresearch/v267/main/assets/eberle25a/eberle25a.pdf)**
> A technique to assess whether specific properties can be accurately decoded from a model's latent representations.

## Relationships

### → Probing
- **Molecular property prediction** (behaviors tasks) — *measured_by*
  > For a fair and comprehensive evaluation, all models are first pretrained using a common supervised learning strategy and then finetuned (or probed) for molecular property prediction.
  - [On the Scalability of GNNs for Molecular Graphs](https://proceedings.neurips.cc/paper_files/paper/2024/file/2345275663a15ee92a06bc957be54a2c-Paper-Conference.pdf)
