# ScanNet
**Type:** Measurement  
**Referenced in:** 3 papers  

## State of the Field

**What it is.** Across the surveyed work, the prevailing usage treats ScanNet as an indoor 3D scene dataset, with definitions alternating between real indoor room scenes, a 3D indoor scene dataset, and richly annotated 3D reconstructions of indoor scenes. The content described for it varies by paper: some authors use scenes from it to construct scenarios, others highlight annotations supporting object classification, visual question answering, and captioning in point cloud modality, and another describes it as a segmentation dataset with 1,201 training scenes, 312 validation scenes, and 20 semantic classes.

**What it is claimed to measure.** Papers link ScanNet to one behavioral indicator, Semantic segmentation, reporting that semantic segmentation is measured by the ScanNet segmentation dataset. The recorded links do not connect it to any constructs. Beyond that linked use, some papers also report evaluating classification, captioning, and QA on its test split, and one paper reports building a partial scene registration benchmark from it.

**Space of uses.** Papers position ScanNet both as source material for derived resources and as a direct evaluation dataset. It is used alongside PartNet when constructing ScenePlan scenarios, including an evaluation set with 10 ScanNet scenarios, and another paper uses it to generate the Scan2Inst instruction dataset; other papers use its train, validation, or test splits directly for semantic segmentation, classification, captioning, QA, and partial scene registration. No measurement instrument is linked to it.

## Sources

**[Octavius: Mitigating Task Interference in MLLMs via LoRA-MoE](https://proceedings.iclr.cc/paper_files/paper/2024/file/6b3b238c5786536dc9f835760e2dba02-Paper-Conference.pdf)**
> A dataset of real indoor room scenes, used as a source to construct scenarios for the ScenePlan evaluation dataset to test generalization to real-world data.

## Relationships

### → ScanNet
- **Semantic segmentation** (behaviors tasks) — *measured_by*
  > We conduct the experiments on the ScanNet [20] segmentation dataset which has 1,201 and 312 scenes for training and validation, respectively, with a total of 20 semantic classes for evaluation.
  - [Lexicon3D: Probing Visual Foundation Models for Complex 3D Scene Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/8c67fc501a50977947c5bebbc39ca8f6-Paper-Conference.pdf)
