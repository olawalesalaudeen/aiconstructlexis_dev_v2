# Interleaved text-and-image generation
**Type:** Behavior  
**Referenced in:** 7 papers  
**Also known as:** Interleaved image-text generation, Interleaved document generation  

## State of the Field

**Space of definitions.** Across these papers, the prevailing usage treats it as generating a sequence or document that mixes text and images, often in an autoregressive manner. Most descriptions emphasize coherence in the combined output, variously as an arbitrary sequence of text segments and images, a single coherent document with interleaved text and images, or a document in a coherent, free-form layout. Success is usually described in terms of coherent or high-quality interleaved output, and some papers further stress contextually or narratively consistent continuations.

**Variants.** Papers use several nearby names, most commonly interleaved image-text generation, alongside interleaved text-and-image generation and interleaved document generation. A common variant is long-form or lengthy generation with alternating text and images, while a smaller line of work focuses on free-form interleaved documents or continuation from mixed-modality prompts, such as starting from an initial image-text pair and continuing a story.

**Space of elicitation and scores.** No measurement instrument is linked to it. The papers instead describe the behavior through task and training setups, including end-to-end interleaved text-image modeling and instruction tuning tailored to interleaved image-text generation, without naming a dedicated instrument here.

**What it is taken as evidence of.** No construct is linked to it, so the papers do not record agreement about which construct it indicates. The recorded relations instead connect it to other behaviors: one paper claims a causal relationship from instruction following to interleaved text-and-image generation, and another claims a causal relationship from interleaved text-and-image generation to visual storytelling.

## Sources

**[Modality-Specialized Synergizers for Interleaved Vision-Language Generalists](https://proceedings.iclr.cc/paper_files/paper/2025/file/22bf0634985f4e6dbb1fb40e247d1478-Paper-Conference.pdf)**
> The task of producing an arbitrary sequence containing both text segments and images.

**[DEEM: Diffusion models serve as the eyes of large language models for image perception](https://proceedings.iclr.cc/paper_files/paper/2025/file/a8399aace3dfa6dfb8b635117748c561-Paper-Conference.pdf) (as "Interleaved image-text generation")**
> The observable task of generating a sequence containing both text and images in an autoregressive manner.

**[DreamLLM: Synergistic Multimodal Comprehension and Creation](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a7a22152cd21f0ca3c0f8139bb32905-Paper-Conference.pdf) (as "Interleaved document generation")**
> The task of generating documents that contain a mix of text and images in a coherent, free-form layout.

## Relationships

### Interleaved text-and-image generation →
- **Visual storytelling** (behaviors tasks) — *causes*
  > It opens up possibilities for various complex applications, such as multi-step inference (Lu et al., 2024; Kazemi et al., 2024), multimodal situational analysis (Yang et al., 2021), and visual storytelling (Huang et al., 2016). (Section 1)
  - [MMIE: Massive Multimodal Interleaved Comprehension Benchmark for Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4072543747a14bbed76284cf2c04b9e9-Paper-Conference.pdf)
