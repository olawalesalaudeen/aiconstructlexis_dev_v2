# Polysemanticity
**Type:** Construct  
**Referenced in:** 9 papers  
**Also known as:** Neuronal entanglement  

## State of the Field

**Definition agreement:** Consensus. Most papers define polysemanticity as a single internal model unit, usually a neuron or feature, being associated with multiple distinct or unrelated concepts, contexts, or functions. A few papers vary the component type, such as an attention head, or describe a manifestation of this property, but they are still treating the same core phenomenon of one model component carrying multiple meanings.

**Space of definitions.** Across the papers, the prevailing usage treats polysemanticity as a property of an internal unit, most often a neuron, whose activation reflects multiple semantically distinct or unrelated concepts, contexts, or features, and papers commonly present this as making interpretation harder. Several definitions use near-equivalent wording, describing neurons as activating in multiple distinct contexts or responding to multiple unrelated concepts. A smaller line of work applies the same idea to features, model components, or an attention head with multiple distinct interpretable behaviors, and one paper additionally presents it as a latent property that lets neurons activate on multiple concepts to maximize model capacity. Another paper instead defines neuronal entanglement, as a manifestation of polysemanticity, as the degree to which a neuron must distinguish similar inputs and map them to different outputs.

**Space of facets.** Papers do not share a detailed subtype taxonomy, but they systematize the construct in a few recurring ways. Most often the term is applied at the neuron level, while some authors use the same label for polysemantic features, model components, or attention heads, so the object carrying the property varies across papers. One paper formalizes neuron activations as an OR of different concepts, and another treats neuronal entanglement as a manifestation of polysemanticity rather than a separate phenomenon.

**Space of measurement.** No measurement instrument or behavioral indicator is linked to polysemanticity itself. Where papers make it concrete, they do so by describing neurons, features, components, or heads that activate for multiple unrelated concepts or behaviors. One paper proposes the Wasserstein distance from a neuron's output distribution to a Gaussian as a metric of neuronal entanglement, which that paper presents as a manifestation of polysemanticity.

**Links.** Linked work connects polysemanticity to three constructs, with Superposition appearing most often. One paper claims a causal relationship from Superposition to Polysemanticity, presenting superposition as a hypothesized cause, and another paper says Polysemanticity is related to Superposition through the superposition hypothesis. Separate papers also say Interpretability and explainability is related to Polysemanticity, describing polysemanticity as an obstacle to mechanistic interpretability, and that Polysemanticity is related to Redundancy, stating that polysemantic code favors redundancy for robustness.

## Sources

**[Sparse Autoencoders Find Highly Interpretable Features in Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1fa1ab11f4bd5f94b2ec20e794dbfa3b-Paper-Conference.pdf)**
> The phenomenon where individual neurons in a neural network activate in multiple, semantically distinct contexts, hindering interpretability.

**[Wasserstein Distances, Neuronal Entanglement, and Sparsity](https://proceedings.iclr.cc/paper_files/paper/2025/file/e1c1624dd7d9fa75adacd7e93c40e6b2-Paper-Conference.pdf) (as "Neuronal entanglement")**
> The degree to which a neuron must differentiate between similar input vectors and map them to different output values, a manifestation of polysemanticity.

## Relationships

### → Polysemanticity
- **Superposition** (constructs) — *causes*
  > One hypothesised cause of polysemanticity is superposition, where neural networks represent more features than they have neurons by assigning features to an overcomplete set of directions in activation space, rather than to individual neurons. (Abstract)
  - [Sparse Autoencoders Find Highly Interpretable Features in Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1fa1ab11f4bd5f94b2ec20e794dbfa3b-Paper-Conference.pdf)

### Associated with
- **Mechanistic interpretability** (measurements)
  > mechanistic interpretability is hindered by polysemanticity—where individual neurons respond to multiple, unrelated concepts.
  - [Monet: Mixture of Monosemantic Experts for Transformers](https://proceedings.iclr.cc/paper_files/paper/2025/file/382c35d1a57c07055dfcba58dd39e012-Paper-Conference.pdf)
- **Interpretability and explainability** (constructs)
  > A central obstacle to mechanistic interpretability is polysemanticity, where individual neurons encode multiple, unrelated concepts (Olah et al., 2020).
  - [Mixture of Experts Made Intrinsically Interpretable](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25ag/yang25ag.pdf)
- **Redundancy** (constructs)
  > Marshall and Kirchner (2024) connect information theory with polysemanticity where polysemantic code learned by LLMs is not only efficient but also favors redundancy for robustness (Fig. 2 of their paper).
  - [Polysemantic Dropout: Conformal OOD Detection for Specialized LLMs](https://aclanthology.org/2025.emnlp-main.595.pdf)
