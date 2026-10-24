# Logit lens
**Type:** Measurement  
**Referenced in:** 27 papers  
**Also known as:** Logit Lens, Vocabulary projection  

## State of the Field

Across the surveyed literature, the Logit lens is predominantly characterized as a probing or analysis technique for interpreting the internal states of transformer models. The method's core mechanism, described consistently across papers, involves applying the model's final unembedding matrix or decoder head to the hidden states of intermediate layers, thereby projecting these representations into the vocabulary space. This projection is used to visualize or decode next-token predictions at each stage of processing, with several papers describing this as a way to see what the model is "'thinking'" layer-by-layer. A recurring point is that this analysis can be done without any extra training. A less common framing, found in one paper, refers to this technique as "vocabulary projection" and notes it is "equivalent to early exiting on the Transformer block at inference time" ('Answer, Assemble, Ace: Understanding How LMs Answer Multiple Choice Questions'). As a measurement instrument, the Logit lens is used to assess a range of phenomena, including `Mathematical reasoning`, `Hallucination`, `Faithfulness`, and `Hallucination detection`. The technique has also been adapted for different modalities, such as Vision Transformers, and is used alongside other methods like Sparse Autoencoders to inspect their features.

## Sources

**[Linearity of Relation Decoding in Transformer Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/2b6d7285306fe896fca9b2e9a02ff6ec-Paper-Conference.pdf) (as "Logit Lens")**
> An existing probing technique that visualizes the next-token prediction information at any layer by applying the model's final decoder head to that layer's hidden state.

**[Overthinking the Truth: Understanding how Language Models Process False Demonstrations](https://proceedings.iclr.cc/paper_files/paper/2024/file/bb63841e1ad12370a34504f15c60db4f-Paper-Conference.pdf)**
> A method for decoding next-token predictions from a model's intermediate hidden states by applying the final layer's normalization and unembedding matrix, used to analyze the model's computation layer-by-layer without extra training.

**[Answer, Assemble, Ace: Understanding How LMs Answer Multiple Choice Questions](https://proceedings.iclr.cc/paper_files/paper/2025/file/c248154176c08147e82c0b30961604f7-Paper-Conference.pdf) (as "Vocabulary projection")**
> An analysis technique, also known as 'logit lens', used to inspect a model's internal representations by projecting hidden states from any layer into the vocabulary space to see which tokens are being promoted.

## Relationships

### → Logit lens
- **Modular arithmetic** (behaviors tasks) — *measured_by*
  > Next, we analyze the contributions of individual model components using Logit Lens [3]. We observe that some components primarily approximate the answer—they promote all numbers close to the correct answer in magnitude— while other components primarily classify the answer modulo m for various numbers m.
  - [Pre-trained Large Language Models Use Fourier Features to Compute Addition](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cc8dc30e52798b27d37b795cc153310-Paper-Conference.pdf)
- **Calibration** (constructs) — *measured_by*
  > To understand how calibration varies across layers, we take inspiration from the approach by Logit Lens (nostalgebraist, 2020), computing accuracy at different layers of the transformer.
  - [Calibration Across Layers: Understanding Calibration Evolution in LLMs](https://aclanthology.org/2025.emnlp-main.742.pdf)
- **Factual recall** (behaviors tasks) — *measured_by*
  > "To track this behavior, we further use the logit lens as a diagnostic tool to quantify the rate of relation propagation and answer extraction across layers."
  - [Paths Not Taken: Understanding and Mending the Multilingual Factual Recall Pipeline](https://aclanthology.org/2025.emnlp-main.762.pdf)
- **Hallucination detection** (behaviors tasks) — *measured_by*
  > We employ a lens observation method to analyze LLMs’ processing of pre- and post-negated text across layers. The Logit Lens (nostalgebraist, 2020; Dar et al., 2023) projects internal model states onto the vocabulary space, tracking prediction changes layer by layer.
  - [The Impact of Negated Text on Hallucination with Large Language Models](https://aclanthology.org/2025.emnlp-main.684.pdf)
- **Mathematical reasoning** (constructs) — *measured_by*
  > We probe the final token’s residual stream at each layer using logit lens analysis, which projects the residual stream values after each MLP layer to the vocabulary space with the unembedding matrix (nostalgebraist, 2020) (Section 4.5).
  - [All for One: LLMs Solve Mental Math at the Last Token With Information Transferred From Other Tokens](https://aclanthology.org/2025.emnlp-main.1565.pdf)
- **Hallucination** (behaviors tasks) — *measured_by*
  > The logit lens has been leveraged to investigate LLMs’ knowledge store and recall mechanisms (Haviv et al., 2023; Yu et al., 2023) and safety issues, such as hallucinations
  - [Interpretation Meets Safety: A Survey on Interpretation Methods and Tools for Improving LLM Safety](https://aclanthology.org/2025.emnlp-main.1091.pdf)
- **Latent reasoning** (constructs) — *measured_by*
  > “we interpret the hidden states at the subject position using the logit lens (Nostalgebraist, 2020)”
  - [Unveiling Internal Reasoning Modes in LLMs: A Deep Dive into Latent Reasoning vs. Factual Shortcuts with Attribute Rate Ratio](https://aclanthology.org/2025.emnlp-main.111.pdf)
