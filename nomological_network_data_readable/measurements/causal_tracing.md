# Causal tracing
**Type:** Measurement  
**Referenced in:** 7 papers  
**Also known as:** Causal Tracing  

## State of the Field

The prevailing usage of Causal tracing in the provided literature is as a technique to measure the influence of intermediate model states on final outputs. Its operationalization is consistent across papers, involving a comparison between a "clean run" and a "corrupted run" where inputs are perturbed, typically by adding noise to tokens. Researchers then selectively restore the activations of specific components, such as MLP or attention layers, from the clean run and measure the resulting change in the model's predictions. This method is frequently applied to identify which parts of a model's computation are responsible for a given behavior. For instance, several papers use it to locate the specific modules or layers responsible for recalling factual knowledge. Other documented applications include identifying components that "mediate bias," locating tokens critical for repetition avoidance, and tracing information flow to understand specificity failures. A less common application mentioned is its use in analyzing the mechanisms behind grammatical acceptability judgment. One paper offers a narrower definition, framing it specifically as a procedure for identifying modules that recall facts, which reflects one of its most common uses.

## Sources

**[Debiasing Algorithm through Model Adaptation](https://proceedings.iclr.cc/paper_files/paper/2024/file/05aedcaf4bc6e78a5e22b4cf9114c5e8-Paper-Conference.pdf)**
> A technique that measures the influence of intermediate model states on final outputs by perturbing inputs and restoring hidden states layer by layer.

**[Precise Localization of Memories: A Fine-grained Neuron-level Knowledge Editing Technique for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/01db36a646c07c64dd39a92b4eceb417-Paper-Conference.pdf) (as "Causal Tracing")**
> A procedure used to identify specific modules or layers responsible for recalling factual knowledge about entities.

## Relationships

### → Causal tracing
- **Subject-verb agreement** (behaviors tasks) — *measured_by*
  > In Figure 7bc we reproduce this effect on syntactic phenomena.
  - [What does the Knowledge Neuron Thesis Have to do with Knowledge?](https://proceedings.iclr.cc/paper_files/paper/2024/file/013d743db3c684957305d32017f13339-Paper-Conference.pdf)
- **Stereotyping** (constructs) — *measured_by*
  > By fitting the linear model (Equation 1) across all the prompts X, we get the as and af scores for each layer l and token position i.
  - [Debiasing Algorithm through Model Adaptation](https://proceedings.iclr.cc/paper_files/paper/2024/file/05aedcaf4bc6e78a5e22b4cf9114c5e8-Paper-Conference.pdf)
