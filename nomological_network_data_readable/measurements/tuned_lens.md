# Tuned lens
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** Tuned Lens  

## State of the Field

Across the provided literature, the Tuned lens is predominantly characterized as an interpretability tool for inspecting and decoding model activations at different layers to understand the information they represent. Its operational mechanism is consistently defined as a layerwise affine transformation. This procedure projects hidden states from a given layer into the output vocabulary space, with one paper specifying that the transformation is learned "from the output space of layer ℓ to the output space of the final layer" ("Residual Stream Analysis with Multi-Layer SAEs"). The stated purpose of this transformation is to map activations into a "more comparable basis," thereby enhancing interpretability and precision. Researchers employ the Tuned lens to achieve a "layer-by-layer understanding of how each token’s role and meaning are progressively sculpted" ("When Backdoors Speak: Understanding LLM Backdoor Attacks Through Model-Generated Explanations"). It is also used for more targeted inspection, such as identifying specific vectors within a model's representations.

## Sources

**[Residual Stream Analysis with Multi-Layer SAEs](https://proceedings.iclr.cc/paper_files/paper/2025/file/52eebfd420ebdb66bd9b925981af922c-Paper-Conference.pdf)**
> A layerwise affine transformation procedure that maps residual stream activations into a more comparable basis before encoding and then inverts the transformation after decoding.

**[Inspection and Control of Self-Generated-Text Recognition Ability in Llama3-8b-Instruct](https://proceedings.iclr.cc/paper_files/paper/2025/file/d560f94c582033e6d8eb0c97cdd4f721-Paper-Conference.pdf) (as "Tuned Lens")**
> An interpretability tool used to inspect and decode model activations at different layers to understand what information they represent.

## Relationships

### → Tuned lens
- **Self-recognition** (constructs) — *measured_by*
  > “Via inspection with the Tuned Lens ... we then identify one particular vector”
  - [Inspection and Control of Self-Generated-Text Recognition Ability in Llama3-8b-Instruct](https://proceedings.iclr.cc/paper_files/paper/2025/file/d560f94c582033e6d8eb0c97cdd4f721-Paper-Conference.pdf)
