# MagicBrush
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Most papers describe MagicBrush as a benchmark or manually annotated dataset for instruction-guided image editing, in one case specified as real image editing and in another as evaluation for image editing within an interleaved generation context. Some descriptions emphasize that its editing queries can demand a series of complex edits to an image, and one paper reports using the full test set. A smaller line of work repurposes it to form paired images with subtle differences for existence comparison.

**What it is claimed to measure.** Across the papers, claims about what MagicBrush measures converge on a single behavioral indicator: papers use it to measure Image editing, often by describing evaluation of image editing capabilities on MagicBrush. It is linked to one behavioral indicator, Image editing, and no constructs are linked to it.

**Space of uses.** Papers mainly position it as an evaluation set for image editing. One paper uses it alongside EVR and MA5K when evaluating image editing capabilities, another reports an additional evaluation on the full test set, and another adapts it for comparative reasoning by constructing paired images with subtle differences.

## Sources

**[Modality-Specialized Synergizers for Interleaved Vision-Language Generalists](https://proceedings.iclr.cc/paper_files/paper/2025/file/22bf0634985f4e6dbb1fb40e247d1478-Paper-Conference.pdf)**
> A benchmark dataset used for evaluating image editing capabilities within the interleaved generation context.

## Relationships

### → MagicBrush
- **Image editing** (behaviors tasks) — *measured_by*
  > We use the MagicBrush dataset [129], which challenges models with an editing query that demands a series of complex edits to an image.
  - [Vitron: A Unified Pixel-level Vision LLM for Understanding, Generating, Segmenting, Editing](https://proceedings.neurips.cc/paper_files/paper/2024/file/68bad5506f0f9eea7ae75f01ae00d5e2-Paper-Conference.pdf)
