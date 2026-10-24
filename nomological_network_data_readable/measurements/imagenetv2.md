# ImageNetV2
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** ImageNet-V2  

## State of the Field

**What it is.** Across definitions, papers treat ImageNetV2 as an ImageNet-derived benchmark or test set rather than a new task. The prevailing descriptions say it is used to test robustness under natural distribution shift and to measure generalization to new, similarly distributed data, and one definition also specifies that it was collected with a replicated protocol. Papers use both spellings, ImageNetV2 and ImageNet-V2.

**What it is claimed to measure.** Papers link ImageNetV2 to one behavioral indicator and no constructs. The only recorded measurement claim is that image classification is measured by ImageNetV2, so the reported use converges on a single behavioral indicator rather than spreading across multiple constructs. In the definitions, this evaluation is framed as testing robustness under natural distribution shift or measuring generalization to new, similarly distributed data.

**Space of uses.** Across the cited uses, papers position ImageNetV2 as one dataset within broader evaluation suites. One paper includes it among a larger collection of image recognition datasets, and another uses it alongside ImageNet-R, ImageNet-A, and ImageNetSketch for evaluation. No measurement instrument is linked to it through recorded relationships.

## Sources

**[Mitigate the Gap: Improving Cross-Modal Alignment in CLIP](https://proceedings.iclr.cc/paper_files/paper/2025/file/cc1de06a58ba1db43538a37e076e466d-Paper-Conference.pdf)**
> A distribution-shift benchmark derived from ImageNet used to test robustness under natural distribution shift.

**[LiNeS: Post-training Layer Scaling Prevents Forgetting and Enhances Model Merging](https://proceedings.iclr.cc/paper_files/paper/2025/file/43ae0b566b802b2d00e525b672794b82-Paper-Conference.pdf) (as "ImageNet-V2")**
> A test set for ImageNet collected with a replicated protocol to measure generalization to new, similarly distributed data.

## Relationships

### → ImageNetV2
- **Image classification** (behaviors tasks) — *measured_by*
  > We evaluate our method on 12 image recognition datasets. We use the ... ImageNetV2 (Kornblith et al., 2019)... (Section 4)
  - [Follow-Up Differential Descriptions: Language Models Resolve Ambiguities for Image Classification](https://proceedings.iclr.cc/paper_files/paper/2024/file/17eca81974d2fd34f458916e0bfd820d-Paper-Conference.pdf)
