# Image-to-text generation
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Image-grounded text generation  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats this behavior as generating text from an input image. Most definitions describe textual descriptions or responses, ranging from image description to responses to user instructions, and one paper roughly summarizes it as "generating description for input images" (Large Multilingual Models Pivot Zero-Shot Multimodal Learning across Languages). Some authors make the conditioning more explicit by including an optional text prompt or textual query and by describing the response as relevant, coherent, and consistent with the image and query.

**Variants.** Papers use several closely related names, including image-to-text generation, Image2Text, I2T, and image-grounded text generation. The task appears in image description, conversational or instruction-following response generation over images, and broader formulations that include detailed description and complex reasoning. Some formulations use only the image, while others pair the image with an optional text prompt or textual query.

**Space of elicitation and scores.** No measurement instrument is linked to this behavior in the papers. Instead, the task is operationalized directly through its prompt format: models generate language responses from user-provided images, sometimes together with text, or produce text conditioned on an image and query.

**What it is taken as evidence of.** Only one construct is linked to this behavior, Multimodal alignment. In Data-Juicer Sandbox: A Feedback-Driven Suite for Multimodal Data-Model Co-development, the recorded link is a causal claim from Multimodal alignment to image-to-text generation: image-to-text models are said to prefer modality-aligned data, with good performance on pools featuring high image-text similarity, phrase grounding recall, and frames-text similarity. No other construct link is represented in the relationships.

## Sources

**[Large Multilingual Models Pivot Zero-Shot Multimodal Learning across Languages](https://proceedings.iclr.cc/paper_files/paper/2024/file/bd54a6d4dc60c82ae989154013e17754-Paper-Conference.pdf)**
> Producing textual descriptions or responses based on input images, including conversation, detailed description, and complex reasoning.

**[Look Twice Before You Answer: Memory-Space Visual Retracing for Hallucination Mitigation in Multimodal Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zou25e/zou25e.pdf) (as "Image-grounded text generation")**
> The task of generating a textual response that is conditioned on and consistent with a given input image and a textual query.
