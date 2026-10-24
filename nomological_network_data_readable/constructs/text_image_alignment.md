# Text-image alignment
**Type:** Construct  
**Referenced in:** 7 papers  

## State of the Field

**Definition agreement:** Consensus. Most papers define text-image alignment as how well a generated image or visual asset matches the semantic content and details of the input text prompt, caption, or narrative. One paper uses a broader cross-modal meaning-consistency idea for jointly interpreting visual content and embedded text, but this is a lone outlier, so the overall pattern is consensus.

**Space of definitions.** Across the surveyed work, the prevailing usage treats text-image alignment as semantic fidelity between a text input and a generated visual output: papers describe the degree to which an image or other visual asset corresponds to a caption, prompt, or narrative fragment, including its semantic content, intended visual elements, and descriptive details. A smaller line of work uses the same label more broadly for cross-modal consistency, defining it as the capacity to jointly interpret visual content and embedded text so that meaning remains consistent across modalities; one paper further describes this as requiring integration that goes beyond pattern recognition toward comprehension.

**Space of facets.** Recurring facets in the definitions are semantic correspondence, accurate interpretation of visual concepts from text, faithfulness to intended visual elements and descriptive details, and, in narrative settings, visual consistency in depictions of characters and settings. The same name is therefore used for two nearby targets in these papers, most often faithfulness of generated visuals to text, and in a minority usage consistency of meaning across visual content and embedded text.

**Space of measurement.** It is linked to 1 measurement instrument and no behavioral indicators. The only linked instrument is LLM-as-a-judge, used for a more human-aligned evaluation that assesses generation quality, text-image alignment, and helpfulness to yield a comprehensive score, so the recorded operationalization is a broad judgment over generated outputs.

## Sources

**[AutomaTikZ: Text-Guided Synthesis of Scientific Vector Graphics with TikZ](https://proceedings.iclr.cc/paper_files/paper/2024/file/f7641940c7dd9e5de58c20e39586eb64-Paper-Conference.pdf)**
> The degree to which the generated image semantically corresponds to the input caption, reflecting accurate interpretation of visual concepts from text.

## Relationships

### Text-image alignment →
- **CLIP score** (measurements) — *measured_by*
  > "We utilize it to evaluate the correlation between a rasterized TikZ drawing and its corresponding caption."
  - [AutomaTikZ: Text-Guided Synthesis of Scientific Vector Graphics with TikZ](https://proceedings.iclr.cc/paper_files/paper/2024/file/f7641940c7dd9e5de58c20e39586eb64-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > Building on previous work (An et al., 2023; Liu et al., 2024d), we enhance the process by employing MLLM-as-a-Judge with golden answers and the "Analyze-then-Judge" Chain-of-Thought (CoT) (Wei et al., 2022). This allows for a more human-aligned evaluation, assessing generation quality, text-image alignment, and helpfulness to yield a comprehensive score.
  - [Interleaved Scene Graphs for Interleaved Text-and-Image Generation Assessment](https://proceedings.iclr.cc/paper_files/paper/2025/file/b9e0ceee9751ae8b5c6603c029e4ca42-Paper-Conference.pdf)
- **Pick-a-Pic** (measurements) — *measured_by*
  > 2) Score agreement with human judgments of alignment for image-text alignment, using images generated from complex text prompts. We report results on five text-to-image evaluation benchmarks (DrawBench (Saharia et al., 2022), EditBench (Wang et al., 2023a), COCO-T2I (Lin et al., 2014), TIFA160 (Hu et al., 2023), Pick-a-Pic (Kirstain et al., 2023)).
  - [Natural Language Inference Improves Compositionality in Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7eeec4dffcfe4912482ffbf2ab8ddb41-Paper-Conference.pdf)

### Associated with
- **Boolean question answering** (behaviors tasks)
  > "we use a function q(.) that converts a given text t into a question format, which enables the model to assess the visual-textual alignment in a consistent manner. Specifically, q(.) generates a yes/no question"
  - [Natural Language Inference Improves Compositionality in Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7eeec4dffcfe4912482ffbf2ab8ddb41-Paper-Conference.pdf)
