# Representational stability
**Type:** Construct  
**Referenced in:** 6 papers  
**Also known as:** Representation stability, Hidden representation stability, Vision feature stability, Performance stability, Representational robustness  

## State of the Field

**Definition agreement:** Complementary. Most papers define representational stability as the consistency or invariance of internal representations under some change, such as perturbations, parameter edits, different seeds or checkpoints, or semantically preserving input variation. A few extend the scope to performance or cross-layer comparisons, so the definitions are not identical, but they still describe related aspects of the same broad phenomenon of representations remaining stable under variation.

**Space of definitions.** Across the papers, the prevailing usage treats representational stability as the consistency or robustness of internal representations when something is perturbed or varies. Most definitions keep the focus on hidden states, token representations, feature representations, or learned audio-text representations, described as remaining stable under targeted perturbations, small input changes, mild image perturbations, noise, or varying initial conditions. A smaller line of work narrows the concept to invariance after parameter editing, while another broadens it to include performance staying consistent across random initializations or layers. The main disagreement is therefore about both what representation should remain stable and what kind of perturbation or variation is being considered.

**Space of facets.** Papers do not present a single shared subtype scheme, but they use several closely related labels for domain-specific versions of the same general idea: hidden representation stability, vision feature stability, performance stability, and representational robustness. These usages preserve a common theme of representation consistency, though one line studies representational instability across seeds and checkpoints, one centers on edited hidden-state distributions remaining invariant, and one extends the term to structured representations persisting across and within layers. The broadest divergence is that some authors restrict the construct to internal states alone, whereas others fold performance consistency into the same label.

**Space of measurement.** No measurement instrument is linked to it, while three behavioral indicators are linked: Confidence estimation, Hallucination, and Object hallucination. In use, papers operationalize it through analyses and probes rather than named benchmarks, including probing whether final hidden states stay stable under targeted perturbations, checking whether hidden-state distributions remain invariant after editing, comparing token representations across seeds and training checkpoints with an information-theoretic probing approach, examining whether vision encoder features stay unchanged under mild image perturbations, and using coefficient of variation to quantify performance stability. These operationalizations mostly follow the definitions' emphasis on robustness or consistency under perturbation or variation, although one formulation also treats performance stability itself as part of the construct.

**Links.** A few papers connect it to other entities. Confidence estimation is reported to correlate with representational stability, and one paper reports that hallucination and object hallucination correlate with it. One paper also claims a causal relationship from representational stability to knowledge retention, stating that keeping hidden representations invariant after editing alleviates model forgetting.

## Sources

**[Calibrating LLM Confidence by Probing Perturbed Representation Stability](https://aclanthology.org/2025.emnlp-main.530.pdf)**
> The robustness of a model's internal hidden state representations against targeted, systematic perturbations.

**[AlphaEdit: Null-Space Constrained Knowledge Editing for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/29c8c615b3187ee995029284702d3f43-Paper-Conference.pdf) (as "Hidden representation stability")**
> The degree to which the internal distribution of hidden states remains invariant after parameter editing.

**[Reducing Hallucinations in Large Vision-Language Models via Latent Space Steering](https://proceedings.iclr.cc/paper_files/paper/2025/file/b4008025c2182bfe16fcc8566ee14d64-Paper-Conference.pdf) (as "Vision feature stability")**
> The property of a vision encoder to produce consistent and unvarying feature representations when the semantic content of an input image remains unchanged despite mild perturbations.

**[CARMA: Enhanced Compositionality in LLMs via Advanced Regularisation and Mutual Information Alignment](https://aclanthology.org/2025.emnlp-main.822.pdf) (as "Performance stability")**
> The degree to which a model's performance and internal representations remain consistent across different random initializations or between layers.

**[Audio Flamingo 2: An Audio-Language Model with Long-Audio Understanding and Expert Reasoning Abilities](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ghosh25b/ghosh25b.pdf) (as "Representational robustness")**
> The extent to which learned audio-text representations remain reliable under variation and noise in the training or input data.

## Relationships

### Representational stability →
- **t-SNE visualization** (measurements) — *measured_by*
  > “Finally, we used t-SNE (Van der Maaten & Hinton, 2008) to visualize the hidden representation before and after editing.”
  - [AlphaEdit: Null-Space Constrained Knowledge Editing for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/29c8c615b3187ee995029284702d3f43-Paper-Conference.pdf)
- **Knowledge retention** (constructs) — *causes*
  > Our new objective ensures that the distribution of hidden representations within LLMs remains invariant after editing... This invariance enables the post-edited LLM to reduce e1 while keeping e0 close to zero, thereby alleviating the issues of model forgetting
  - [AlphaEdit: Null-Space Constrained Knowledge Editing for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/29c8c615b3187ee995029284702d3f43-Paper-Conference.pdf)

### → Representational stability
- **Hallucination** (behaviors tasks) — *correlates*
  > We comprehensively present and analyze the correlation between vision feature stability and model hallucinations in Section 3. (Section 1).
  - [Reducing Hallucinations in Large Vision-Language Models via Latent Space Steering](https://proceedings.iclr.cc/paper_files/paper/2025/file/b4008025c2182bfe16fcc8566ee14d64-Paper-Conference.pdf)
- **Object hallucination** (behaviors tasks) — *correlates*
  > We comprehensively present and analyze the correlation between vision feature stability and model hallucinations in Section 3.
  - [Reducing Hallucinations in Large Vision-Language Models via Latent Space Steering](https://proceedings.iclr.cc/paper_files/paper/2025/file/b4008025c2182bfe16fcc8566ee14d64-Paper-Conference.pdf)
- **Confidence estimation** (behaviors tasks) — *correlates*
  > We hypothesize that an LLM’s confidence correlates with the robustness of its internal states; specifically, the final hidden states that lead to the tokens of a high-confidence answer should exhibit greater stability when subjected to targeted perturbations. (Section 3)
  - [Calibrating LLM Confidence by Probing Perturbed Representation Stability](https://aclanthology.org/2025.emnlp-main.530.pdf)
