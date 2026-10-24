# CelebA
**Type:** Measurement  
**Referenced in:** 8 papers  

## State of the Field

**What it is.** Across papers, the prevailing description is a large-scale face or facial attributes dataset of celebrity images, often described as having over 200K images with 40 attribute annotations or binary labels. Some authors frame it more specifically as a face-image classification benchmark, while others use it for facial attribute recognition or for building emotion-comparison examples from facial cues such as smiling. A smaller line of work describes task-specific protocols or preprocessing, such as taking Blond Hair as the target and Male as the sensitive attribute, or cropping, resizing, and flattening pixel values into space-separated numerical sentences.

**What it is claimed to measure.** Papers link CelebA to two behavioral indicators, Image classification and Image reconstruction, and no constructs. The recorded measured_by links do not converge on a construct; instead, papers use CelebA to measure those two behavioral indicators. In their own descriptions, papers also report using it to evaluate fairness, robustness under distribution shifts and spurious attribute correlations, early-exit diffusion-based image generation, disentanglement, and attribute-scoring reliability.

**Space of uses.** No measurement instrument is linked to CelebA through the recorded relationships. In practice, papers use it alongside other datasets such as UTK, Waterbirds, CIFAR-10, LSUN-horse, and FER-2013, and they position it variously as one dataset in a broader evaluation suite, as a benchmark for comparison against supervised approaches without using its ground-truth labels, or as a source of facial images for constructed comparison examples.

**Concerns raised.** A recurring concern in papers that foreground robustness or fairness is that CelebA is used in settings with spurious attribute correlations, distribution shifts, and sensitive-attribute evaluation. One fairness protocol specifically takes Blond Hair as the target and Male as the sensitive attribute, while another line of work treats CelebA as a benchmark with spurious correlations and distribution shifts.

## Sources

**[Debiasing Attention Mechanism in Transformer without Demographics](https://proceedings.iclr.cc/paper_files/paper/2024/file/2f5337a39b1f6d670aad9d32debc0e5d-Paper-Conference.pdf)**
> The Celeb-A dataset, a large-scale face attributes dataset used here to evaluate fairness in predicting the 'Blond Hair' attribute with respect to the 'Male' sensitive attribute.

## Relationships

### → CelebA
- **Image reconstruction** (behaviors tasks) — *measured_by*
  > As shown in Table 1, GEM surpasses baseline models in reconstruction quality on the datasets of CelebA, LSUN-horse, and LSUN-bedroom. (Section 4.2)
  - [Graph-based Unsupervised Disentangled Representation Learning via Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/bac4d92b3f6decfe47eab9a5893dd1f6-Paper-Conference.pdf)
