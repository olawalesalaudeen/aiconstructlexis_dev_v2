# Image editing
**Type:** Behavior  
**Referenced in:** 20 papers  
**Also known as:** Object creation, Object removal, Instruction-based image compositing, Identity-preserved inpainting, Identity transfer, Object replacement, Background replacement, Color alteration, Style alteration, Drag-based editing, Content dragging, Object moving, Instruction-based image editing  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats image editing as modifying an existing image from a natural-language or text instruction. Most definitions describe replacing, hiding, recoloring, adding, removing, or otherwise changing elements or attributes in the image; one example instruction is 'Replace the bottle of the same material as the blue one with a red bottle' (GENOME: Generative Neuro-Symbolic Visual Reasoning by Growing and Reusing Modules). A smaller line of work narrows the task to more specific success conditions, such as removing a specified object while plausibly filling the background, or integrating a reference object into a background image at an instructed location and spatial relationship.

**Variants.** Papers study several named variants. Object-level formulations include object creation, object removal, object replacement, and object moving; other formulations target background replacement, color alteration, and style alteration. More specialized variants include instruction-based image compositing, identity-preserved inpainting, which changes pose or view while preserving identity, and identity transfer, which applies a reference identity to a target object already in the scene, while drag-based editing uses handle and target points within a user-specified editable region and content dragging focuses on moving or deforming content inside that region.

**Space of elicitation and scores.** Papers measure image editing with 2 instruments, most often MagicBrush and also LLM-as-a-judge. MagicBrush is used as a dataset for editing queries that can demand a series of complex edits to an image, and papers report image editing results on it. LLM-as-a-judge appears in instruction-based editing evaluation by asking whether GPT-4V identifies the presence of the target object in the image.

**What it is taken as evidence of.** Across linked constructs, papers do not converge on a single construct that image editing reflects. They connect it to 4 constructs: Generalization is treated as related to image editing, In-context learning and Interpretability and explainability are each claimed to have a causal relationship toward it, and Spatial understanding is the only construct with causal relationships recorded in both directions. In those papers, image editing is described as being performed successfully from examples rather than explicit instructions, as becoming easier when prompts align with image content and are interpretable by humans, and as linked to depth information and spatial comprehension in 3D-aware image compositing.

## Sources

**[GENOME: Generative Neuro-Symbolic Visual Reasoning by Growing and Reusing Modules](https://proceedings.iclr.cc/paper_files/paper/2024/file/088d99765bc121c6df215da7d45bc4e9-Paper-Conference.pdf)**
> Modifying an image according to a natural-language instruction, such as replacing, hiding, or recoloring an object.

**[PromptFix: You Prompt and We Fix the Photo](https://proceedings.neurips.cc/paper_files/paper/2024/file/468c9ec4215e05b6488ac307d377662e-Paper-Conference.pdf) (as "Object creation")**
> The task of adding a new object to an image based on a textual instruction.

**[PromptFix: You Prompt and We Fix the Photo](https://proceedings.neurips.cc/paper_files/paper/2024/file/468c9ec4215e05b6488ac307d377662e-Paper-Conference.pdf) (as "Object removal")**
> The task of removing a specified object from an image and plausibly filling the background, guided by a textual instruction.

**[$\textit{Bifr\"ost}$: 3D-Aware Image Compositing with Language Instructions](https://proceedings.neurips.cc/paper_files/paper/2024/file/ea011cd13bcdf7ca38506c844dccfee8-Paper-Conference.pdf) (as "Instruction-based image compositing")**
> The task of generating a composite image by integrating a reference object into a background image according to a natural language instruction that specifies the object's location and spatial relationship.

**[$\textit{Bifr\"ost}$: 3D-Aware Image Compositing with Language Instructions](https://proceedings.neurips.cc/paper_files/paper/2024/file/ea011cd13bcdf7ca38506c844dccfee8-Paper-Conference.pdf) (as "Identity-preserved inpainting")**
> The task of modifying the pose or view of an object within an image while preserving its unique visual identity, often guided by a user-provided mask.

**[$\textit{Bifr\"ost}$: 3D-Aware Image Compositing with Language Instructions](https://proceedings.neurips.cc/paper_files/paper/2024/file/ea011cd13bcdf7ca38506c844dccfee8-Paper-Conference.pdf) (as "Identity transfer")**
> The task of applying the visual identity of a reference object to a different target object already present in a background scene.

**[$\textit{Bifr\"ost}$: 3D-Aware Image Compositing with Language Instructions](https://proceedings.neurips.cc/paper_files/paper/2024/file/ea011cd13bcdf7ca38506c844dccfee8-Paper-Conference.pdf) (as "Object replacement")**
> The task of substituting an existing object in a background image with a new reference object.

**[I2EBench: A Comprehensive Benchmark for Instruction-based Image Editing](https://proceedings.neurips.cc/paper_files/paper/2024/file/48fecef47b19fe501d27d338b6d52582-Paper-Conference.pdf) (as "Background replacement")**
> Changing the background of an image to match a target background described in the instruction.

**[I2EBench: A Comprehensive Benchmark for Instruction-based Image Editing](https://proceedings.neurips.cc/paper_files/paper/2024/file/48fecef47b19fe501d27d338b6d52582-Paper-Conference.pdf) (as "Color alteration")**
> The observable task of modifying the color of a specified object in an image based on a text instruction.

**[I2EBench: A Comprehensive Benchmark for Instruction-based Image Editing](https://proceedings.neurips.cc/paper_files/paper/2024/file/48fecef47b19fe501d27d338b6d52582-Paper-Conference.pdf) (as "Style alteration")**
> The observable task of changing the artistic or visual style of an entire image based on a text instruction.

**[Localize, Understand, Collaborate: Semantic-Aware Dragging via Intention Reasoner](https://proceedings.neurips.cc/paper_files/paper/2024/file/3dd7c683eddc14f8cabcd6ce8d48cd41-Paper-Conference.pdf) (as "Drag-based editing")**
> Editing an image by moving specified handle points toward target points within an editable region.

**[Localize, Understand, Collaborate: Semantic-Aware Dragging via Intention Reasoner](https://proceedings.neurips.cc/paper_files/paper/2024/file/3dd7c683eddc14f8cabcd6ce8d48cd41-Paper-Conference.pdf) (as "Content dragging")**
> The task of moving or deforming the content within a specified region of an image according to drag points.

**[Localize, Understand, Collaborate: Semantic-Aware Dragging via Intention Reasoner](https://proceedings.neurips.cc/paper_files/paper/2024/file/3dd7c683eddc14f8cabcd6ce8d48cd41-Paper-Conference.pdf) (as "Object moving")**
> The task of relocating an entire object from a source position to a target position within an image.

**[Guiding Instruction-based Image Editing via Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/f0e91b1314fa5eabf1d7ef6d1561ecec-Paper-Conference.pdf) (as "Instruction-based image editing")**
> The task of modifying an input image according to a natural language command that specifies the desired change, without requiring regional masks or elaborate descriptions.

## Relationships

### Image editing →
- **MagicBrush** (measurements) — *measured_by*
  > We use the MagicBrush dataset [129], which challenges models with an editing query that demands a series of complex edits to an image.
  - [Vitron: A Unified Pixel-level Vision LLM for Understanding, Generating, Segmenting, Editing](https://proceedings.neurips.cc/paper_files/paper/2024/file/68bad5506f0f9eea7ae75f01ae00d5e2-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > To evaluate this dimension, we inquire whether GPT-4V identifies the presence of the target object in the image. (Sec. 3.1.1)
  - [I2EBench: A Comprehensive Benchmark for Instruction-based Image Editing](https://proceedings.neurips.cc/paper_files/paper/2024/file/48fecef47b19fe501d27d338b6d52582-Paper-Conference.pdf)

### → Image editing
- **Interpretability and explainability** (constructs) — *causes*
  > When a prompt closely aligns with the image content and is interpretable by humans, it becomes easier for users to modify the image in the desired direction by making slight edits to the prompt. (Section 4.3)
  - [Visually Guided Decoding: Gradient-Free Hard Prompt Inversion with Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/cd61329e2c14b93a89d617c914140f64-Paper-Conference.pdf)
- **In-context learning** (constructs) — *causes*
  > Notably, Orthus exhibits in-context learning capacity by performing image editing successfully when provided with examples rather than explicit instructions, which is not included in the training dataset. (Figure 3)
  - [Orthus: Autoregressive Interleaved Image-Text Generation with Modality-Specific Heads](https://raw.githubusercontent.com/mlresearch/v267/main/assets/kou25a/kou25a.pdf)

### Associated with
- **Generalization** (constructs)
  > To further demonstrate the generalization and applicability of ELM, we evaluate its ability to generate samples from novel classes and perform image editing tasks, with the results in Appendix A.2. (Section 4.4)
  - [Elucidating the design space of language models for image generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25w/liu25w.pdf)
