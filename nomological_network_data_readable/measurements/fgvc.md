# FGVC
**Type:** Measurement  
**Referenced in:** 5 papers  

## State of the Field

**What it is.** Across the surveyed work, FGVC is treated as a Fine-Grained Visual Classification benchmark for specialized image classification, covering bird, flower, dog, and car recognition. Definitions describe it as five specialized tasks; one source names CUB-Birds, NA-Birds, Oxford Flowers, Stanford Dogs, and Stanford Cars, while a related description says FGVC includes CUB-200-2011, Oxford Flowers, Stanford Dogs, and Stanford Cars.

**What it is claimed to measure.** Papers link FGVC to 1 construct and 1 behavioral indicator, both centered on image-focused evaluation. The prevailing usage is to use FGVC to measure Image classification, and one paper also reports Visual recognition as measured by FGVC.

**Space of uses.** Papers use FGVC alongside other evaluation settings: one evaluation quote groups it with VTAB-1K, few-shot learning, and domain adaptation as visual classification adaptation tasks, and another reports evaluation on VTAB-1k and the FGVC benchmark. Papers also relate FGVC to 4 instruments, CUB-200-2011, Oxford Flowers-102, Stanford Cars, and Stanford Dogs, describing them as included datasets within the benchmark.

## Sources

**[SAN: Hypothesizing Long-Term Synaptic Development and Neural Engram Mechanism in Scalable Model’s Parameter-Efficient Fine-Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dai25e/dai25e.pdf)**
> Fine-Grained Visual Classification benchmark evaluating models on specialized image classification tasks such as bird, flower, dog, and car recognition.

## Relationships

### → FGVC
- **Image classification** (behaviors tasks) — *measured_by*
  > We evaluate our method across four visual classification adaptation tasks: VTAB-1K [78], few-shot learning [30], FGVC [28] and domain adaptation [82] (Section 4).
  - [PACE: Marrying generalization in PArameter-efficient fine-tuning with Consistency rEgularization](https://proceedings.neurips.cc/paper_files/paper/2024/file/70a06501001e1820fd1eb9ee821302d2-Paper-Conference.pdf)
- **Visual recognition** (constructs) — *measured_by*
  > We evaluate WeGeFT on the VTAB-1k benchmark (Zhai et al., 2019) and the fine-grained visual classification (FGVC) benchmark...
  - [WeGeFT: Weight-Generative Fine-Tuning for Multi-Faceted Efficient Adaptation of Large Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/savadikar25a/savadikar25a.pdf)
- **Data efficiency** (constructs) — *measured_by*
  > To validate this claim, we evaluate the sample efficiency of RepLoRA on FGVC datasets.
  - [RepLoRA: Reparameterizing Low-rank Adaptation via the Perspective of Mixture of Experts](https://raw.githubusercontent.com/mlresearch/v267/main/assets/truong25a/truong25a.pdf)

### Associated with
- **CUB-200-2011** (measurements)
  > FGVC includes five Fine-Grained Visual Classification datasets: CUB-200-2011 (Wah et al., 2011)... (Section 5.1)
  - [Revisiting Prefix-tuning: Statistical Benefits of Reparameterization among Prompts](https://proceedings.iclr.cc/paper_files/paper/2025/file/760dff0f9c0e9ed4d7e22918c73351d4-Paper-Conference.pdf)
- **Oxford Flowers-102** (measurements)
  > FGVC includes five Fine-Grained Visual Classification datasets: ... Oxford Flowers (Nilsback & Zisserman, 2008)... (Section 5.1)
  - [Revisiting Prefix-tuning: Statistical Benefits of Reparameterization among Prompts](https://proceedings.iclr.cc/paper_files/paper/2025/file/760dff0f9c0e9ed4d7e22918c73351d4-Paper-Conference.pdf)
- **Stanford Dogs** (measurements)
  > FGVC includes five Fine-Grained Visual Classification datasets: ... Stanford Dogs (Khosla et al., 2011)... (Section 5.1)
  - [Revisiting Prefix-tuning: Statistical Benefits of Reparameterization among Prompts](https://proceedings.iclr.cc/paper_files/paper/2025/file/760dff0f9c0e9ed4d7e22918c73351d4-Paper-Conference.pdf)
- **Stanford Cars** (measurements)
  > FGVC includes five Fine-Grained Visual Classification datasets: ... Stanford Cars (Gebru et al., 2017). (Section 5.1)
  - [Revisiting Prefix-tuning: Statistical Benefits of Reparameterization among Prompts](https://proceedings.iclr.cc/paper_files/paper/2025/file/760dff0f9c0e9ed4d7e22918c73351d4-Paper-Conference.pdf)
