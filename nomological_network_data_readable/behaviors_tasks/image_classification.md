# Image classification
**Type:** Behavior  
**Referenced in:** 140 papers  
**Also known as:** Object classification, Cell type classification, Few-shot classification, Visual classification, Image recognition, Zero-shot object recognition, Zero-shot image classification  

## State of the Field

**Space of definitions.** Across the surveyed work, the dominant framing is assigning a class or category label to an input or whole image from a predefined set. A recurrent usage, especially with vision-language models, casts this as zero-shot or prompt-based prediction by comparing images with text prompts or class descriptions; in Understanding prompt engineering may not require rethinking generalization, the task is described as "image classification via pretrained vision-language models" with prompts chosen to maximize training accuracy without finetuning. Many other papers use supervised fine-tuning or in-context classification from labeled image-label examples, and Context is Environment extends the goal to obtaining a predictor that can "correctly classify x in new cities" under environment shift.

**Variants.** Papers also carve out narrower forms of the behavior, most often zero-shot or few-shot classification, including in-context setups where labeled examples appear in the prompt. Others shift the scope from whole-image labels to object-level categorization, sometimes on cropped objects with the category produced through natural language generation. Domain-specific versions include species classification, cell type classification, and industrial product classification, and some papers group these tasks under broader labels such as visual classification or image recognition.

**Space of elicitation and scores.** Papers operationalize it with 26 linked measurement instruments. The most frequent are ImageNet-1k, CIFAR-10, CIFAR-100, VTAB-1k, and Food-101. These instruments are mostly benchmark datasets or benchmark suites for image classification, and papers use them in zero-shot, fine-tuning, transfer, and adaptation evaluations; VTAB-1k is described as a suite of 19 diverse visual classification tasks.

**What it is taken as evidence of.** Only a mixed set of 6 constructs is linked to this behavior, and the links point in several directions rather than a single shared framing. One paper uses image classification to measure Generalization. Separate papers claim a causal relationship from Image classification to General ability, and from Multimodal alignment and Fine-grained perception to Image classification; other papers report that Image classification is related to In-context learning and to Visual understanding.

## Sources

**[A Multi-Level Framework for Accelerating Training Transformer Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/33f2c200b71ce947d356d171022458ec-Paper-Conference.pdf)**
> Assigning a label to an image using a vision-language model by comparing it to text prompts, in a zero-shot setting.

**[UniBench: Visual Reasoning Requires Rethinking Vision-Language Beyond Scaling](https://proceedings.neurips.cc/paper_files/paper/2024/file/96271227d3e204501d199433e56af289-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Object classification")**
> Observably identifying and classifying objects within images across various categories.

**[VLM4Bio: A Benchmark Dataset to Evaluate Pretrained Vision-Language Models for Trait Discovery from Biological Images](https://proceedings.neurips.cc/paper_files/paper/2024/file/eced4a5fbc776e81b45e2f72447f0164-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Species classification")**
> The task of identifying and providing the correct scientific name (species class) for an organism shown in an image.

**[Micro-Bench: A Microscopy Benchmark for Vision-Language Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/36b31e1bb8ecd4f4081686448e9eff2d-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Cell type classification")**
> The task of identifying the specific type of cell present in a microscopy image.

**[Bridging Compressed Image Latents and Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/17061a94c3c7fda5fa24bbdd1832fa99-Paper-Conference.pdf) (as "Few-shot classification")**
> An image classification task where the model must generalize to new classes given only a few examples of each.

**[Privacy-Preserving Personalized Federated Prompt Learning for Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4431224d3762aa655f0aee4eaf04ff16-Paper-Conference.pdf) (as "Visual classification")**
> Assigning an image to one of several classes using a prompt-conditioned multimodal model.

**[Disentangling and Integrating Relational and Sensory Information in Transformer Architectures](https://raw.githubusercontent.com/mlresearch/v267/main/assets/altabaa25a/altabaa25a.pdf) (as "Image recognition")**
> The observable task of classifying an image into one of a predefined set of categories.

**[Kernel-based Unsupervised Embedding Alignment for Enhanced Visual Representation in Vision-language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gong25b/gong25b.pdf) (as "Zero-shot object recognition")**
> The task of classifying an image into one of several categories without having seen any training examples for those specific categories.

**[VisMin: Visual Minimal-Change Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/c3070c3388552a08a3326f0d28dc2af9-Paper-Conference.pdf) (as "Zero-shot image classification")**
> The task of classifying an image into one of several categories without having seen any training examples for those specific categories.

## Relationships

### Image classification →
- **ImageNet-1k** (measurements) — *measured_by*
  > We evaluate our method on 12 image recognition datasets. We use the ... ImageNet (Deng et al., 2009)... (Section 4)
  - [Follow-Up Differential Descriptions: Language Models Resolve Ambiguities for Image Classification](https://proceedings.iclr.cc/paper_files/paper/2024/file/17eca81974d2fd34f458916e0bfd820d-Paper-Conference.pdf)
- **CIFAR-10** (measurements) — *measured_by*
  > We perform experiments on the image classification task... We use CIFAR10... datasets for finetuning. (Section 3.4)
  - [NOLA: Compressing LoRA using Linear Combination of Random Basis](https://proceedings.iclr.cc/paper_files/paper/2024/file/66b99dbf9ed172abac5cb5ccfc82d1e2-Paper-Conference.pdf)
- **CIFAR-100** (measurements) — *measured_by*
  > We perform experiments on the image classification task... We use... CIFAR100... datasets for finetuning. (Section 3.4)
  - [NOLA: Compressing LoRA using Linear Combination of Random Basis](https://proceedings.iclr.cc/paper_files/paper/2024/file/66b99dbf9ed172abac5cb5ccfc82d1e2-Paper-Conference.pdf)
- **VTAB-1k** (measurements) — *measured_by*
  > For the CV task, we use ViT-B/16 (Dosovitskiy et al., 2020) as our pre-trained model and evaluate the efficacy of our method on the VTAB-1k (Zhai et al., 2019) benchmark. (Section 4)
  - [Increasing Model Capacity for Free: A Simple Strategy for Parameter Efficient Fine-tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/ce3fd6b9dfe458dc258a8164a5e95bd2-Paper-Conference.pdf)
- **Oxford Flowers-102** (measurements) — *measured_by*
  > We evaluate our method on 12 image recognition datasets. We use the ... Flowers102 (Nilsback & Zisserman, 2008)... (Section 4)
  - [Follow-Up Differential Descriptions: Language Models Resolve Ambiguities for Image Classification](https://proceedings.iclr.cc/paper_files/paper/2024/file/17eca81974d2fd34f458916e0bfd820d-Paper-Conference.pdf)
- **Food-101** (measurements) — *measured_by*
  > We evaluate our method on 12 image recognition datasets. We use the ... Food101 (Bossard et al., 2014)... (Section 4)
  - [Follow-Up Differential Descriptions: Language Models Resolve Ambiguities for Image Classification](https://proceedings.iclr.cc/paper_files/paper/2024/file/17eca81974d2fd34f458916e0bfd820d-Paper-Conference.pdf)
- **DTD** (measurements) — *measured_by*
  > We evaluate our method on 12 image recognition datasets. We use the ... Describable Textures Dataset (DTD) (Cimpoi et al., 2014) (texture classification)... (Section 4)
  - [Follow-Up Differential Descriptions: Language Models Resolve Ambiguities for Image Classification](https://proceedings.iclr.cc/paper_files/paper/2024/file/17eca81974d2fd34f458916e0bfd820d-Paper-Conference.pdf)
- **EuroSAT** (measurements) — *measured_by*
  > We evaluate our method on 12 image recognition datasets. We use the ... EuroSAT (Helber et al., 2019) (satellite image classification)... (Section 4)
  - [Follow-Up Differential Descriptions: Language Models Resolve Ambiguities for Image Classification](https://proceedings.iclr.cc/paper_files/paper/2024/file/17eca81974d2fd34f458916e0bfd820d-Paper-Conference.pdf)
- **Stanford Cars** (measurements) — *measured_by*
  > We evaluate our method on 12 image recognition datasets. We use the ... Stanford Cars (Krause et al., 2013)... (Section 4)
  - [Follow-Up Differential Descriptions: Language Models Resolve Ambiguities for Image Classification](https://proceedings.iclr.cc/paper_files/paper/2024/file/17eca81974d2fd34f458916e0bfd820d-Paper-Conference.pdf)
- **FGVC** (measurements) — *measured_by*
  > We evaluate our method across four visual classification adaptation tasks: VTAB-1K [78], few-shot learning [30], FGVC [28] and domain adaptation [82] (Section 4).
  - [PACE: Marrying generalization in PArameter-efficient fine-tuning with Consistency rEgularization](https://proceedings.neurips.cc/paper_files/paper/2024/file/70a06501001e1820fd1eb9ee821302d2-Paper-Conference.pdf)
- **RESISC45** (measurements) — *measured_by*
  > Performance on image classification benchmarks – CIFAR-100 (C100), Food101 (F101), Flowers102 (F102), and Resisc-45 (R45). (Table 4)
  - [SVFT: Parameter-Efficient Fine-Tuning with Singular Vectors](https://proceedings.neurips.cc/paper_files/paper/2024/file/48c368f105e8145b945227b73255635a-Paper-Conference.pdf)
- **SUN397** (measurements) — *measured_by*
  > We perform experiments on the image classification task... We use... SUN397... datasets for finetuning. (Section 3.4)
  - [NOLA: Compressing LoRA using Linear Combination of Random Basis](https://proceedings.iclr.cc/paper_files/paper/2024/file/66b99dbf9ed172abac5cb5ccfc82d1e2-Paper-Conference.pdf)
- **Places365** (measurements) — *measured_by*
  > We evaluate our method on 12 image recognition datasets. We use the ... Places365 (Zhou et al., 2017)... (Section 4)
  - [Follow-Up Differential Descriptions: Language Models Resolve Ambiguities for Image Classification](https://proceedings.iclr.cc/paper_files/paper/2024/file/17eca81974d2fd34f458916e0bfd820d-Paper-Conference.pdf)
- **CUB-200-2011** (measurements) — *measured_by*
  > We perform experiments on the image classification task... We use... CUB-200-2011... datasets for finetuning. (Section 3.4)
  - [NOLA: Compressing LoRA using Linear Combination of Random Basis](https://proceedings.iclr.cc/paper_files/paper/2024/file/66b99dbf9ed172abac5cb5ccfc82d1e2-Paper-Conference.pdf)
- **Caltech101** (measurements) — *measured_by*
  > We evaluated the aforementioned models on four widely-used image classification benchmarks: ImageNet (shortened as , same below) [11], Flowers102 ( ) [35], StanfordCars ( ) [21], and Caltech101 ( ) [13] (Section 2.2)
  - [Why are Visually-Grounded Language Models Bad at Image Classification?](https://proceedings.neurips.cc/paper_files/paper/2024/file/5c7024041be305c94d7311cfcc53d93e-Paper-Conference.pdf)
- **MNIST** (measurements) — *measured_by*
  > We consider models trained on the MNIST dataset of handwritten digits and the Fashion-MNIST dataset of clothing images.
  - [Bilinear MLPs enable weight-based mechanistic interpretability](https://proceedings.iclr.cc/paper_files/paper/2025/file/7504142a20a3e1fe9dd7de42f475828c-Paper-Conference.pdf)
- **SVHN** (measurements) — *measured_by*
  > We fine-tune the CLIP-ViT-B/16 (Radford et al., 2021) model on various datasets, including StanfordCars, DTD, EuroSAT, GTSRB, RESISC45, SUN397, and SVHN.
  - [LoRA-Pro: Are Low-Rank Adapters Properly Optimized?](https://proceedings.iclr.cc/paper_files/paper/2025/file/ea184f920a0f0f8d8030aa1bd7ac9fd4-Paper-Conference.pdf)
- **FGVC-Aircraft** (measurements) — *measured_by*
  > We evaluate our method on 12 image recognition datasets. We use the ... FGVCAircraft (Maji et al., 2013) (aircraft model classification)... (Section 4)
  - [Follow-Up Differential Descriptions: Language Models Resolve Ambiguities for Image Classification](https://proceedings.iclr.cc/paper_files/paper/2024/file/17eca81974d2fd34f458916e0bfd820d-Paper-Conference.pdf)
- **ImageNetV2** (measurements) — *measured_by*
  > We evaluate our method on 12 image recognition datasets. We use the ... ImageNetV2 (Kornblith et al., 2019)... (Section 4)
  - [Follow-Up Differential Descriptions: Language Models Resolve Ambiguities for Image Classification](https://proceedings.iclr.cc/paper_files/paper/2024/file/17eca81974d2fd34f458916e0bfd820d-Paper-Conference.pdf)
- **Stanford Dogs** (measurements) — *measured_by*
  > We evaluate our method on 12 image recognition datasets. We use the ... Stanford Dogs (Khosla et al., 2011) datasets. (Section 4)
  - [Follow-Up Differential Descriptions: Language Models Resolve Ambiguities for Image Classification](https://proceedings.iclr.cc/paper_files/paper/2024/file/17eca81974d2fd34f458916e0bfd820d-Paper-Conference.pdf)
- **General ability** (constructs) — *causes*
  > enhanced classification performance of the VLM transfers to its general capabilities
  - [Why are Visually-Grounded Language Models Bad at Image Classification?](https://proceedings.neurips.cc/paper_files/paper/2024/file/5c7024041be305c94d7311cfcc53d93e-Paper-Conference.pdf)
- **ImageNet-100** (measurements) — *measured_by*
  > We begin by evaluating on training Vision Transformers from scratch on the ImageNet-100 dataset (Tian et al., 2020). (Section 4.1)
  - [MCNC: Manifold-Constrained Reparameterization for Neural Compression](https://proceedings.iclr.cc/paper_files/paper/2025/file/2f63d2963526bdd9ff1b8bcc2dc9905a-Paper-Conference.pdf)
- **ImageNet-Sketch** (measurements) — *measured_by*
  > TIMM is evaluated on on three image datasets: ImageNet (Deng et al., 2009), ImageNet-Sketch (Sketch) (Wang et al., 2019), and ImageNet-Rendition (ImageNet-r) (Hendrycks et al., 2021).
  - [SageAttention: Accurate 8-Bit Attention for Plug-and-play Inference Acceleration](https://proceedings.iclr.cc/paper_files/paper/2025/file/b286c344d38e10d2466c0514b78e2f36-Paper-Conference.pdf)
- **Linear probing** (measurements) — *measured_by*
  > “We analyze this aspect using the protocol adopted by (Yuksekgonul et al., 2023; Zhang et al., 2024), which is based on linear probing the fine-tuned CLIP visual encoder on CIFAR10, CIFAR100 and ImageNet.”
  - [Causal Graphical Models for Vision-Language Compositional Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/b9a17133e3943509243b5e197c1c23b2-Paper-Conference.pdf)
- **Oxford-IIIT Pets** (measurements) — *measured_by*
  > Image classification is performed on the CIFAR-100 (Krause et al., 2013), DTD (Cimpoi et al., 2014), EuroSAT (Helber et al., 2019), and Oxford-Pets (Parkhi et al., 2012) datasets. (Section 4.7)
  - [SSH: Sparse Spectrum Adaptation via Discrete Hartley Transformation](https://aclanthology.org/2025.naacl-long.522.pdf)
- **Tiny ImageNet** (measurements) — *measured_by*
  > We evaluate the method on three image classification datasets: CIFAR-100 (Krizhevsky et al., 2009), Food-101 (Bossard et al., 2014), and Tiny-Imagenet (mn-moustafa, 2017). (Section 6)
  - [Towards Infinite-Long Prefix in Transformer](https://aclanthology.org/2025.emnlp-main.563.pdf)

### Associated with
- **Visual understanding** (constructs)
  > To study the performance of the joint inference framework on tasks that require visual comprehension, we evaluate our methods on seven vision datasets, spanning both image classification tasks (CIFAR-10, CIFAR-100, Food101) and visual question-answering tasks (COCO-Color, COCO-Number, VQAv2 and VizWiz). (Section 5.2)
  - [Large (Vision) Language Models are Unsupervised In-Context Learners](https://proceedings.iclr.cc/paper_files/paper/2025/file/3e887bf77d0ba6db38802e552a0d81d2-Paper-Conference.pdf)
- **In-context learning** (constructs)
  > we design a 5-way 1-shot classification scenario to evaluate the performance with in-context learning (Section 4.1)
  - [Bridging Compressed Image Latents and Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/17061a94c3c7fda5fa24bbdd1832fa99-Paper-Conference.pdf)
- **Generalization** (constructs)
  > Moreover, we extend our experiments to image classification tasks, aiming to evaluate the model's generalizability across diverse domains.
  - [Orchid: Flexible and Data-Dependent Convolution for Sequence Modeling](https://proceedings.neurips.cc/paper_files/paper/2024/file/8ccc5ec30a8d46793d790e2216efd40d-Paper-Conference.pdf)
- **Fine-grained perception** (constructs)
  > “The improvements are particularly notable for images with low resolution (e.g., CIFAR) or tiny objects (e.g., EuroSAT), highlighting enhanced fine-grained perception capabilities.”
  - [Kernel-based Unsupervised Embedding Alignment for Enhanced Visual Representation in Vision-language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gong25b/gong25b.pdf)
