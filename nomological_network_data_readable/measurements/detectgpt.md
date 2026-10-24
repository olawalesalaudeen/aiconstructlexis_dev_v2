# DetectGPT
**Type:** Measurement  
**Referenced in:** 20 papers  

## State of the Field

Across the provided literature, DetectGPT is consistently characterized as a measurement instrument for detecting machine-generated text. The most prevalent description of its methodology is as a zero-shot, training-free, or post-hoc approach that relies on perturbing a given text passage and analyzing the resulting changes. This method operates by comparing the log probabilities of the original text with those of its perturbed versions, using what several papers describe as the "curvature of the log probability function" as the core detection criterion. The technique is based on the widely cited assumption that machine-generated text occupies a local optimum of log probability, meaning variations will typically have a lower model probability than the original passage. As one paper notes, this is because "AI-generated passages occupy regions with clear negative log probability curvature" (DNA-GPT: Divergent N-Gram Analysis for Training-Free Detection of GPT-Generated Text). Some sources refer to it as a "state-of-the-art thresholding approach" and a "representative for loss-based post-hoc detectors." Overall, DetectGPT is used to operationalize the detection of AI-generated text by measuring this perturbation-based discrepancy.

## Sources

**[DNA-GPT: Divergent N-Gram Analysis for Training-Free Detection of GPT-Generated Text](https://proceedings.iclr.cc/paper_files/paper/2024/file/d4ce6738e84876aa79f13c8bc8b7c5eb-Paper-Conference.pdf)**
> A detection method that identifies machine-generated text by thresholding the curvature of the log probability function from a scoring model.

## Relationships

### → DetectGPT
- **AI-generated text detection** (behaviors tasks) — *measured_by*
  > “PPL (Guo et al., 2023), and DetectGPT (Mitchell et al., 2023) are zero-shot methods that do not require further training: they rely on the likelihood outputs of a pretrained language model.”
  - [Multiscale Positive-Unlabeled Detection of AI-Generated Texts](https://proceedings.iclr.cc/paper_files/paper/2024/file/95ab5c3e26fd82c7de3230bbad087d2d-Paper-Conference.pdf)
