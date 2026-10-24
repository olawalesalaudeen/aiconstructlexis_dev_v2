# Fine-grained perception
**Type:** Construct  
**Referenced in:** 15 papers  
**Also known as:** Fine-grained visual perception  

## State of the Field

**Definition agreement:** Consensus. Essentially all papers define fine-grained perception as a model's ability to perceive or use subtle, detailed visual information in images. The examples vary, such as identities, clothing styles, object locations, counts, color, texture, and spatial relations, but they all point to the same core property with only differences in emphasis and illustration.

**Space of definitions.** Across papers, the prevailing usage treats fine-grained perception as a facet or latent ability of visual perception centered on recognizing detailed, specific, or subtle visual attributes from images. Definitions repeatedly illustrate it with object locations, celebrity identities, clothing styles, instance-level features, color and texture, counts, and spatial relations between small objects. A smaller wording difference is whether the emphasis falls on broad detailed visual attributes, instance-level cues, or pixel-level detail, but the definitions otherwise align closely.

**Space of facets.** Papers usually place fine-grained perception as one capability axis within larger evaluation schemes, alongside coarse perception and, in some cases, OCR, spatial perception, instance reasoning, logical reasoning, attribute reasoning, and relation reasoning. One operational split distinguishes single-instance and cross-instance fine-grained perception, and one paper groups it with localization inside a vision-centric category. The label also appears once as fine-grained visual perception, defined in terms of detailed visual attributes and subtle appearance cues.

**Space of measurement.** Operationalization is benchmark-based: the construct is linked to 9 measurement instruments and 2 behavioral indicators. The most frequently linked instrument is MMStar, and other linked benchmarks include COCO Caption, CapsBench, MMBench, and MMMU, plus 4 others; some of these benchmarks make the construct explicit as a scored capability axis or split it into single-instance and cross-instance forms. Where papers state the task focus directly, the operationalizations line up with the definitions by targeting detailed recognition, localization, and counting, and no linked human evaluation, LLM-as-a-judge, probe, or analysis instrument appears.

**Links.** The recorded non-measurement links are all causal claims. One paper claims a causal relationship from fine-grained perception to logical reasoning, describing stronger fine-grained perception as subsequently enhancing image-based logical reasoning; another paper claims causal relationships from fine-grained perception to counting, spatial reasoning, localization ability, and image classification in the context of enhanced visual capabilities after alignment. No correlational or generic related links are reported.

## Sources

**[ConvBench: A Multi-Turn Conversation Evaluation Benchmark with Hierarchical Ablation Capability for Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b69396afc07a9ca3428d194f4db84c02-Paper-Datasets_and_Benchmarks_Track.pdf)**
> A specific facet of perception involving the ability to recognize detailed and specific visual attributes, such as object locations, celebrity identities, or clothing styles.

**[EasyRef: Omni-Generalized Group Image Reference for Diffusion Models via Multimodal LLM](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zong25a/zong25a.pdf) (as "Fine-grained visual perception")**
> The latent ability to capture detailed visual attributes and subtle appearance cues from images.

## Relationships

### Fine-grained perception →
- **MMStar** (measurements) — *measured_by*
  > We further analyze the detailed scores on MM-Star (Chen et al., 2024a), including coarse perception (CP), fine-grained perception (FP), instance reasoning (IR), logical reasoning (LR)... (Table 4)
  - [HaploVL: A Single-Transformer Baseline for Multi-Modal Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25ab/yang25ab.pdf)
- **MMVP** (measurements) — *measured_by*
  > Among these benchmarks, MMVP mainly focuses on fine-grained perception. (Section 4.1)
  - [HaploVL: A Single-Transformer Baseline for Multi-Modal Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25ab/yang25ab.pdf)
- **Logical reasoning** (constructs) — *causes*
  > This suggests that fusing raw image and text embeddings in a single transformer is beneficial for fine-grained perception and subsequently enhances image-based logical reasoning. (Section 4.3)
  - [HaploVL: A Single-Transformer Baseline for Multi-Modal Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25ab/yang25ab.pdf)
- **Localization ability** (constructs) — *causes*
  > We visualize the attention maps from the penultimate layer of the CLIP visual encoder for several examples in Fig 2. The attention maps are generally similar w/wo alignment, as the regularization term prevents significant changes in the model’s weights. However, we still observe that the attention maps after alignment are sharper and highlight more fine-grained features. This indicates that the aligned model is better at capturing details from the input image, resulting in improved localization ability. (Section 4.2)
  - [Kernel-based Unsupervised Embedding Alignment for Enhanced Visual Representation in Vision-language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gong25b/gong25b.pdf)
- **CapsBench** (measurements) — *measured_by*
  > Ablation results on fine-grained perception tasks. We conduct ablation studies based on LLaVA across five fine-grained benchmarks: CapsBench (Liu et al., 2024a)... (Table 3)
  - [SEA: Supervised Embedding Alignment for Token-Level Visual-Textual Integration in MLLMs](https://aclanthology.org/2025.emnlp-main.55.pdf)
- **Stanford Dogs** (measurements) — *measured_by*
  > Ablation results on fine-grained perception tasks. We conduct ablation studies based on LLaVA across five fine-grained benchmarks: ... Stanford Dogs (Khosla et al., 2011)... (Table 3)
  - [SEA: Supervised Embedding Alignment for Token-Level Visual-Textual Integration in MLLMs](https://aclanthology.org/2025.emnlp-main.55.pdf)
- **COCO Caption** (measurements) — *measured_by*
  > Ablation results on fine-grained perception tasks. We conduct ablation studies based on LLaVA across five fine-grained benchmarks: ... COCO Captions (Chen et al., 2015)... (Table 3)
  - [SEA: Supervised Embedding Alignment for Token-Level Visual-Textual Integration in MLLMs](https://aclanthology.org/2025.emnlp-main.55.pdf)
- **OCRBench** (measurements) — *measured_by*
  > Ablation results on fine-grained perception tasks. We conduct ablation studies based on LLaVA across five fine-grained benchmarks: ... OCRBench (Liu et al., 2024b)... (Table 3)
  - [SEA: Supervised Embedding Alignment for Token-Level Visual-Textual Integration in MLLMs](https://aclanthology.org/2025.emnlp-main.55.pdf)
- **MMMU** (measurements) — *measured_by*
  > Ablation results on fine-grained perception tasks. We conduct ablation studies based on LLaVA across five fine-grained benchmarks: ... and MMMU (Yue et al., 2024). (Table 3)
  - [SEA: Supervised Embedding Alignment for Token-Level Visual-Textual Integration in MLLMs](https://aclanthology.org/2025.emnlp-main.55.pdf)
- **RealWorldQA** (measurements) — *measured_by*
  > The Vision-centric category emphasize fine-grained perception and localization, including... RealWorldQA (real-world QA)... (Section 3)
  - [Multimodal Language Models See Better When They Look Shallower](https://aclanthology.org/2025.emnlp-main.339.pdf)

### Associated with
- **Image classification** (behaviors tasks)
  > “The improvements are particularly notable for images with low resolution (e.g., CIFAR) or tiny objects (e.g., EuroSAT), highlighting enhanced fine-grained perception capabilities.”
  - [Kernel-based Unsupervised Embedding Alignment for Enhanced Visual Representation in Vision-language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gong25b/gong25b.pdf)
