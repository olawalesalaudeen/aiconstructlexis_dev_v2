# GenEval
**Type:** Measurement  
**Referenced in:** 5 papers  

## State of the Field

**What it is.** Across the surveyed papers, GenEval is most commonly described as a benchmark for whether a model can generate an image that accurately depicts a given prompt. Some authors also treat it as a score or metric for the quality and alignment of generated images with input text, with one description saying it is based on human preferences and semantic accuracy.

**What it is claimed to measure.** Papers link GenEval to 2 constructs and 2 behavioral indicators. The prevailing use is to measure visual generation ability, with papers evaluating text-to-image or visual generation capabilities on it; other papers use it to measure prompt understanding, saying improvements on GenEval reflect enhanced prompt-following capabilities. It is also reported as measuring image generation and multimodal generation.

**Space of uses.** Papers typically position GenEval as a visual generation benchmark for model comparison, including comparisons with recent diffusion models and with other state-of-the-art systems. Papers do not link it to another measurement instrument, though some use it alongside MS-COCO and DSG, and one paper presents it as part of a move to report more comprehensive benchmarks rather than only CLIP score.

## Sources

**[Transfusion: Predict the Next Token and Diffuse Images with One Multi-Modal Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/12678c3948153f4bc391f51e2082bd6e-Paper-Conference.pdf)**
> A benchmark designed to evaluate a model's ability to generate an image that is an accurate depiction of a given prompt.

## Relationships

### → GenEval
- **Visual generation ability** (constructs) — *measured_by*
  > “we follow SD3 (Esser et al., 2024) to evaluate the text-to-image generation capabilities of Show-o on the GenEval (Ghosh et al., 2023) benchmark.”
  - [Show-o: One Single Transformer to Unify Multimodal Understanding and Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/45f0d179ef7e10eb7366550cd4e574ae-Paper-Conference.pdf)
- **Prompt understanding** (constructs) — *measured_by*
  > Synthetic captions lead to significant improvements on the GenEval benchmark (Ghosh et al., 2024), as shown in Table 6, highlighting the advantage of enhanced prompt-following capabilities. (Section 4.3)
  - [Revisit Large-Scale Image-Caption Data in Pre-training Multimodal Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ebba182cb97864368fdb6ae00773a5e4-Paper-Conference.pdf)
- **Image generation** (behaviors tasks) — *measured_by*
  > we report results on more comprehensive benchmarks instead of only CLIP score, such as GenEval (Ghosh et al., 2024) and DSG (Cho et al., 2024). (Section 4.3)
  - [Revisit Large-Scale Image-Caption Data in Pre-training Multimodal Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ebba182cb97864368fdb6ae00773a5e4-Paper-Conference.pdf)
