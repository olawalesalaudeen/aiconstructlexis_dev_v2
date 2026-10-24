# DTD
**Type:** Measurement  
**Referenced in:** 12 papers  
**Also known as:** Texture  

## State of the Field

**What it is.** Across the papers, DTD is most commonly described as the Describable Textures Dataset, a dataset or benchmark for texture classification and texture recognition. Some definitions add that it contains texture images in the wild annotated with describable attributes and is used for fine-grained visual classification based on descriptive attributes, while another frames it as a benchmark for recognizing and differentiating textures within images. A smaller line of work refers to it simply as Texture and uses it as an out-of-distribution texture dataset.

**What it is claimed to measure.** Across papers, DTD is linked to 1 behavioral indicator and no constructs. The recurring claim is that papers use DTD to measure Image classification: they report image recognition or classification evaluations on DTD in settings such as fine-tuning, transfer learning, and zero-shot or linear-probe image classification. The measurement claims therefore center on one behavioral indicator rather than multiple constructs.

**Space of uses.** No measurement instrument is linked to DTD directly. In practice, papers usually place it inside multi-dataset evaluation suites alongside benchmarks such as CIFAR-100, EuroSAT, Oxford-Pets, SUN397, and Food101, rather than as a standalone protocol. Definitions and snippets also show it being used for few-shot learning performance, standard classification evaluations, and, in one paper under the name Texture, as part of a combined out-of-distribution dataset for OOD detection.

## Sources

**[Weighted Multi-Prompt Learning with Description-free Large Language Model Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/284e7ef68bf3d8fa42abf45a39f29f5e-Paper-Conference.pdf)**
> The Describable Textures Dataset (DTD) is used for texture classification to evaluate few-shot learning performance.

**[Local-Prompt: Extensible Local Prompts for Few-Shot Out-of-Distribution Detection](https://proceedings.iclr.cc/paper_files/paper/2025/file/d7c605815f41e866524372ae0f5b36b5-Paper-Conference.pdf) (as "Texture")**
> An out-of-distribution texture dataset used to evaluate OOD detection performance.

## Relationships

### → DTD
- **Image classification** (behaviors tasks) — *measured_by*
  > We evaluate our method on 12 image recognition datasets. We use the ... Describable Textures Dataset (DTD) (Cimpoi et al., 2014) (texture classification)... (Section 4)
  - [Follow-Up Differential Descriptions: Language Models Resolve Ambiguities for Image Classification](https://proceedings.iclr.cc/paper_files/paper/2024/file/17eca81974d2fd34f458916e0bfd820d-Paper-Conference.pdf)
