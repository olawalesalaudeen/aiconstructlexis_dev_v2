# Oxford Flowers-102
**Type:** Measurement  
**Referenced in:** 12 papers  
**Also known as:** Flower-102, Flowers-102, Oxford Flowers, OxfordFlowers, Flowers102, Flowers  

## State of the Field

**What it is.** Across papers, the dominant framing is a flower image classification benchmark for fine-grained recognition. Definitions variously call it Flowers-102, Flower-102, Flowers102, Oxford Flowers, OxfordFlowers, or the Oxford 102 Flowers dataset, and some descriptions specify fine-grained classification of 102 different flower species or categories. Most papers describe it broadly as an image or visual classification dataset, while smaller lines of work describe it more specifically as a zero-shot classification benchmark, a few-shot learning dataset, a fine-grained visual recognition dataset, or a benchmark used to evaluate personalized and generalized performance across clients.

**What it is claimed to measure.** Papers link it to 2 behavioral indicators and no constructs. The prevailing use is to measure Image classification: papers report using Flowers102 among image classification benchmarks, to test downstream performance, or for zero-shot classification. A smaller line of work uses it to measure Fine-grained visual recognition, so the linked claims stay with behavioral indicators rather than constructs.

**Space of uses.** Papers usually place it inside broader benchmark suites rather than as a standalone protocol, alongside datasets such as Stanford Cars, CIFAR-100, Food101, and ImageNet, among others. It is also related to 1 other instrument, FGVC, with one paper stating that FGVC includes Oxford Flowers. Across these uses, authors position it as one of several visual or fine-grained classification datasets, and one paper uses it to investigate balancing personalization, generalization and privacy across clients.

## Sources

**[Mitigate the Gap: Improving Cross-Modal Alignment in CLIP](https://proceedings.iclr.cc/paper_files/paper/2025/file/cc1de06a58ba1db43538a37e076e466d-Paper-Conference.pdf) (as "Flowers-102")**
> An image classification benchmark used for zero-shot classification.

**[Analyzing and Boosting the Power of Fine-Grained Visual Recognition for Multi-modal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/dfa2f1555d46b553827af4e1557f3c9a-Paper-Conference.pdf) (as "Flower-102")**
> A fine-grained flower classification dataset used to evaluate FGVR performance.

**[Weighted Multi-Prompt Learning with Description-free Large Language Model Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/284e7ef68bf3d8fa42abf45a39f29f5e-Paper-Conference.pdf) (as "Oxford Flowers")**
> A dataset for fine-grained classification of flower species, used to evaluate few-shot learning performance.

**[Privacy-Preserving Personalized Federated Prompt Learning for Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4431224d3762aa655f0aee4eaf04ff16-Paper-Conference.pdf) (as "OxfordFlowers")**
> A visual classification benchmark used to evaluate personalized and generalized performance across clients.

**[A Multi-Level Framework for Accelerating Training Transformer Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/33f2c200b71ce947d356d171022458ec-Paper-Conference.pdf) (as "Flowers102")**
> Flowers102, a flower classification benchmark used to evaluate class descriptions for everyday visual categories.

**[Multimodal Task Vectors Enable Many-Shot Multimodal In-Context Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/27571b74d6cd650b8eb6cf1837953ae8-Paper-Conference.pdf) (as "Flowers")**
> An object classification dataset, also known as the Oxford 102 Flowers dataset, designed for fine-grained image-based recognition of 102 different flower species.

## Relationships

### → Oxford Flowers-102
- **Image classification** (behaviors tasks) — *measured_by*
  > We evaluate our method on 12 image recognition datasets. We use the ... Flowers102 (Nilsback & Zisserman, 2008)... (Section 4)
  - [Follow-Up Differential Descriptions: Language Models Resolve Ambiguities for Image Classification](https://proceedings.iclr.cc/paper_files/paper/2024/file/17eca81974d2fd34f458916e0bfd820d-Paper-Conference.pdf)
- **Fine-grained visual recognition** (behaviors tasks) — *measured_by*
  > We conduct experiments on several popular FGVR datasets that include... Flower-102 (Nilsback & Zisserman, 2008) (Section 4.1).
  - [Analyzing and Boosting the Power of Fine-Grained Visual Recognition for Multi-modal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/dfa2f1555d46b553827af4e1557f3c9a-Paper-Conference.pdf)

### Associated with
- **FGVC** (measurements)
  > FGVC includes five Fine-Grained Visual Classification datasets: ... Oxford Flowers (Nilsback & Zisserman, 2008)... (Section 5.1)
  - [Revisiting Prefix-tuning: Statistical Benefits of Reparameterization among Prompts](https://proceedings.iclr.cc/paper_files/paper/2025/file/760dff0f9c0e9ed4d7e22918c73351d4-Paper-Conference.pdf)
