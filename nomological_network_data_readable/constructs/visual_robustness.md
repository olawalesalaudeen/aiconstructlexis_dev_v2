# Visual robustness
**Type:** Construct  
**Referenced in:** 4 papers  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** The only explicit definition describes visual robustness as the degree to which a model's predictions stay stable and accurate under degraded or distorted visual inputs, and it ties that behavior to reliable integration of visual cues. The accompanying snippets use the same framing, emphasizing consistent prediction patterns across varying visual qualities and consistent predictive behavior for distorted and normal visual inputs.

**Space of facets.** One paper places visual robustness within visual perception capabilities and treats it as one of three dimensions, alongside visual hallucinations and basic visual perception. In that usage, it appears as a distinct dimension related to visual perception rather than as a synonym for those other constructs.

**Space of measurement.** No measurement instrument or behavioral indicator is linked to visual robustness. The only operational cues describe it through whether prediction patterns remain consistent across varying visual qualities and whether predictive behavior is consistent for distorted and normal visual inputs, rather than through a named benchmark, human evaluation, LLM-as-a-judge, probe, or analysis.

**Links.** Papers link visual robustness to two other constructs. One paper claims a causal relationship from calibration to visual robustness, stating that explicitly linking confidence calibration to visual robustness reduces over-reliance on language priors, and another paper reports that visual robustness is related to visual perception by treating it as one dimension of visual perception capabilities.

## Sources

**[Be Confident: Uncovering Overfitting in MLLM Multi-Task Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25r/huang25r.pdf)**
> The degree to which the model's predictions remain stable and accurate under degraded or distorted visual inputs, reflecting reliable integration of visual cues.

## Relationships

### Associated with
- **Visual perception** (constructs)
  > We explore the impact of diffusion feedback on the visual perception capabilities of LMMs from three dimensions: visual robustness, visual hallucinations, and basic visual perception (Section 3.2).
  - [DEEM: Diffusion models serve as the eyes of large language models for image perception](https://proceedings.iclr.cc/paper_files/paper/2025/file/a8399aace3dfa6dfb8b635117748c561-Paper-Conference.pdf)
- **Calibration** (constructs)
  > By explicitly linking confidence calibration to visual robustness, this method reduces over-reliance on language priors. (Section 1)
  - [Be Confident: Uncovering Overfitting in MLLM Multi-Task Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25r/huang25r.pdf)
