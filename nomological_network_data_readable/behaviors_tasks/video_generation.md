# Video generation
**Type:** Behavior  
**Referenced in:** 21 papers  
**Also known as:** Text-to-video generation, Image-to-video generation, Impossible video generation  

## State of the Field

**Space of definitions.** Across the surveyed work, video generation is most commonly treated as synthesizing a coherent sequence of frames or a video clip, often with an emphasis on realism. Many papers formulate it conditionally, especially from text prompts, and describe success in terms of spatial and temporal coherence and faithfulness to the prompt, desired attributes, motion patterns, or caption. Some papers use broader conditional or unconditional forms instead, including class-conditional generation, generation from previous frames, and frame prediction with a 5-frame condition; a smaller line of work narrows the task to producing impossible scenes that violate physical, biological, geographical, or social laws while still following the text description.

**Variants.** The most common named variant is text-to-video generation, with image-to-video generation appearing as a narrower modality-specific version based on a static input image. Other settings include class-conditional video generation, frame prediction from prior frames, and unconditional versus conditional video synthesis. A smaller set of papers studies guided variants, such as generation from dynamic scene layouts or DSLs, and one paper isolates impossible video generation as a counterfactual prompt-following setting.

**Space of elicitation and scores.** Three measurement instruments are linked to it. VBench appears most often, used both to evaluate video generation capability and as a source of GPT-augmented text prompts, while MSR-VTT and UCF-101 are used as common datasets for text-to-video or broader video-generation experiments. Across these papers, the instruments function as a benchmark in the case of VBench and as evaluation datasets in the cases of MSR-VTT and UCF-101.

**What it is taken as evidence of.** Rather than being linked to several constructs, the recorded construct linking is limited to one construct, multimodal alignment. The relationship is stated causally, not as a measurement claim: one paper claims a causal relationship from multimodal alignment to video generation, reporting that image-to-text and text-to-video models prefer modality-aligned data and perform well with high image-text similarity, phrase grounding recall, and frames-text similarity. No other construct link is recorded.

## Sources

**[LLM-grounded Video Diffusion Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d9f8b5abc8e0926539ecbb492af7b2f1-Paper-Conference.pdf)**
> Generating coherent and realistic video sequences, either conditioned on class labels or previous frames.

**[Vitron: A Unified Pixel-level Vision LLM for Understanding, Generating, Segmenting, Editing](https://proceedings.neurips.cc/paper_files/paper/2024/file/68bad5506f0f9eea7ae75f01ae00d5e2-Paper-Conference.pdf) (as "Text-to-video generation")**
> Creating dynamic video content from textual prompts.

**[Vitron: A Unified Pixel-level Vision LLM for Understanding, Generating, Segmenting, Editing](https://proceedings.neurips.cc/paper_files/paper/2024/file/68bad5506f0f9eea7ae75f01ae00d5e2-Paper-Conference.pdf) (as "Image-to-video generation")**
> Creating dynamic video content based on a static input image.

**[Impossible Videos](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bai25a/bai25a.pdf) (as "Impossible video generation")**
> The observable act of producing a video that depicts a scene violating real-world physical, biological, geographical, or social laws, as prompted by a text description.

## Relationships

### Video generation →
- **VBench** (measurements) — *measured_by*
  > To evaluate the visual generation capability, we use... VBench (Huang et al., 2024) for video generation. (Section 4.1)
  - [VILA-U: a Unified Foundation Model Integrating Visual Understanding and Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/e9e140df6de01afb672cb859d203c307-Paper-Conference.pdf)
- **UCF-101** (measurements) — *measured_by*
  > We use Kinetics-600 (K600) and UCF-101 (Soomro et al., 2012) for video generation experiments (Section 4.1).
  - [Language Model Beats Diffusion - Tokenizer is key to visual generation](https://proceedings.iclr.cc/paper_files/paper/2024/file/036912a83bdbb1fd792baf6532f102d8-Paper-Conference.pdf)
- **MSR-VTT** (measurements) — *measured_by*
  > "We also evaluate LVD on common datasets such as UCF-101 (Soomro et al., 2012) and MSR-VTT (Xu et al., 2016)"
  - [LLM-grounded Video Diffusion Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d9f8b5abc8e0926539ecbb492af7b2f1-Paper-Conference.pdf)
