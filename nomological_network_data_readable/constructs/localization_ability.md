# Localization ability
**Type:** Construct  
**Referenced in:** 5 papers  
**Also known as:** Localization capability, Localization  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the papers, the dominant framing treats localization ability as a latent model capacity for accurate spatial localization in visual content: identifying where a target instance or object is, and in one definition, also determining its boundaries. There is little definitional disagreement: both definitions describe a property of the model rather than an observable behavior, and both anchor it in accurate position specification within images or visual content.

**Space of facets.** Papers do not break the construct into named subtypes. The main naming variation is between "localization capability" and "localization ability," which are used for the same latent property, and one paper contrasts this ability with specific perception models such as SAM in open-ended object detection and segmentation, describing failures as missing objects or producing wrong localization results.

**Space of measurement.** Operationalization is benchmark-oriented: localization ability is linked to one measurement instrument, MMLongBench-Doc, and two behavioral indicators, Referring expression understanding and Open-vocabulary object detection. Papers use the REC task to evaluate localization capabilities with IoU-based accuracy criteria and mean accuracy, use MMLongBench-Doc single-page questions mainly to evaluate localization abilities, and benchmark open-vocabulary object detection through zero-shot evaluation on detection datasets. These measures mostly match the definitions by testing whether models can correctly locate target instances or objects, although only one definition states object boundaries explicitly.

**Links.** Beyond measurement, one paper claims a causal relationship from Fine-grained perception to Localization ability. No correlational or undirected related links are reported.

## Sources

**[A Large-Scale Human-Centric Benchmark for Referring Expression Comprehension in the LMM Era](https://proceedings.neurips.cc/paper_files/paper/2024/file/80f0cd0305f7741659304f5325f3bf6d-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Localization capability")**
> The latent ability of a model to accurately identify and specify the position of target instances within visual content.

**[Training-Free Open-Ended Object Detection and Segmentation via Attention as Prompts](https://proceedings.neurips.cc/paper_files/paper/2024/file/80f48ffa8022773973a4a5cec7cce19c-Paper-Conference.pdf)**
> The model's latent capacity to accurately determine the spatial position and boundaries of objects within an image.

## Relationships

### Localization ability →
- **MMLongBench-Doc** (measurements) — *measured_by*
  > “(1) 494 single-page questions (with one evidence page) mainly to evaluate localization abilities”
  - [MMLONGBENCH-DOC: Benchmarking Long-context Document Understanding with Visualizations](https://proceedings.neurips.cc/paper_files/paper/2024/file/ae0e43289bffea0c1fa34633fc608e92-Paper-Datasets_and_Benchmarks_Track.pdf)

### → Localization ability
- **Fine-grained perception** (constructs) — *causes*
  > We visualize the attention maps from the penultimate layer of the CLIP visual encoder for several examples in Fig 2. The attention maps are generally similar w/wo alignment, as the regularization term prevents significant changes in the model’s weights. However, we still observe that the attention maps after alignment are sharper and highlight more fine-grained features. This indicates that the aligned model is better at capturing details from the input image, resulting in improved localization ability. (Section 4.2)
  - [Kernel-based Unsupervised Embedding Alignment for Enhanced Visual Representation in Vision-language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gong25b/gong25b.pdf)

### Associated with
- **Referring expression understanding** (behaviors tasks)
  > The REC task serves as a critical benchmark to evaluate the localization capabilities of these models. (Section 2)
  - [A Large-Scale Human-Centric Benchmark for Referring Expression Comprehension in the LMM Era](https://proceedings.neurips.cc/paper_files/paper/2024/file/80f0cd0305f7741659304f5325f3bf6d-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Open-vocabulary object detection** (behaviors tasks)
  > improving the localization capability, most works specifically focus on the downstream dense vision tasks such as open-vocabulary detection (Section 2)
  - [Contrastive Localized Language-Image Pre-Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25ah/chen25ah.pdf)
