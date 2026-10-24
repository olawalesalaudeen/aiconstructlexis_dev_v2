# ADE20K
**Type:** Measurement  
**Referenced in:** 13 papers  
**Also known as:** Ade20k  

## State of the Field

**What it is.** Across the surveyed work, ADE20K is most commonly described as a large-scale scene parsing or semantic segmentation benchmark, sometimes specified as ADE20K (A-150). Definitions describe it as containing densely annotated images across a wide range of scenes, with a diverse set of objects and stuff classes. A smaller line of work treats it differently, either as a source dataset for constructing evaluation data with instance-level semantic annotations or as an alternative dataset for patch-level probing.

**What it is claimed to measure.** Papers link ADE20K to 3 behavioral indicators and to no constructs. The prevailing usage is that it measures semantic segmentation, with several papers describing evaluation, fine-tuning, or reported results on ADE20K for that purpose. A smaller line of work uses it to measure open-vocabulary semantic segmentation, and one paper reports it as measuring image segmentation.

**Space of uses.** Most papers position ADE20K as a benchmark or transfer target for semantic segmentation, often reporting results on it, fine-tuning on it, or using it as a downstream check after image restoration. It appears alongside PASCAL Context, PASCAL VOC 20, COCO val2017, ImageNet-1K, and NYUv2 in broader evaluation suites, while a smaller line of work uses it as source data for constructing an evaluation set with instance-level semantic annotations or mentions it as an alternative dataset for patch-level probing.

## Sources

**[Text4Seg: Reimagining Image Segmentation as Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/04d8c25cbf0d5e1b70d64e672ac92637-Paper-Conference.pdf)**
> A large-scale scene parsing benchmark (A-150) used for evaluating open-vocabulary semantic segmentation with a diverse set of objects and stuff classes.

**[Locality Alignment Improves Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ce6326ac4794bb04d5eb16f597446baf-Paper-Conference.pdf) (as "Ade20k")**
> A semantic segmentation dataset mentioned as an alternative dataset for the patch-level probing benchmark.

## Relationships

### → ADE20K
- **Semantic segmentation** (behaviors tasks) — *measured_by*
  > Evaluation on COCO val2017 (object detection & instance segmentation) and ADE20K (semantic segmentation). (Table 2)
  - [DreamClear: High-Capacity Real-World Image Restoration with Privacy-Safe Dataset Curation](https://proceedings.neurips.cc/paper_files/paper/2024/file/6452474601429509f3035dc81c233226-Paper-Conference.pdf)
- **Open-vocabulary semantic segmentation** (behaviors tasks) — *measured_by*
  > “We fine-tune segmentation models on COCO Stuff [4] and evaluate them on ADE20K [71] and PASCAL Context [34] dataset”
  - [FineCLIP: Self-distilled Region-based CLIP for Better Fine-grained Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/3122aaa22b2fe83f9cead1a696f65ceb-Paper-Conference.pdf)
- **Image segmentation** (behaviors tasks) — *measured_by*
  > On top of the classification task, we compare the performance of the Segmenter models using DeiT and DeiT-Twicing backbones on the ADE20K (Zhou et al., 2019) image segmentation task to further validate the advantages of our proposed method (Section 4.1).
  - [Transformer Meets Twicing: Harnessing Unattended Residual Information](https://proceedings.iclr.cc/paper_files/paper/2025/file/90cdfb6ac8d9f96bdf0ce92f5f05c391-Paper-Conference.pdf)
