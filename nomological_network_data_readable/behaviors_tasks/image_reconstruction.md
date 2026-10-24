# Image reconstruction
**Type:** Behavior  
**Referenced in:** 8 papers  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is recreating an original image after it has been transformed into another representation, most often by encoding it into a compressed form and decoding it back, or by generating an image that accurately matches a given input. Success is usually framed as fidelity to the original image, either as high reconstruction quality or as low reconstruction loss or error, with one paper treating error above a threshold ε as failure. A smaller formulation treats the behavior as re-rendering decomposed layers, including occluded regions, so that the original composite picture is reproduced.

**Variants.** Papers study several variants: reconstructing full input images, reconstructing latent visual representations to supervise visual outputs, recovering clean fine-grained tokens from noisy tokens, generating the original image from noise conditioned on visual and textual features, and re-rendering graphic-design layers according to metadata. The common target stays the original image or composite picture, but the intermediate form varies across compressed codes, latent or noisy tokens, diffusion features, and decomposed layers.

**Space of elicitation and scores.** Papers link image reconstruction to 3 measurement instruments: CUB-200-2011, CelebA, and MS-COCO. The measurement language is usually reconstruction quality or performance on these evaluations, and some papers score it directly with reconstruction loss or reconstruction error against the original image, including one threshold-based failure definition.

**What it is taken as evidence of.** Papers link image reconstruction to 3 constructs: Fine-grained visual understanding, Multimodal understanding, and Representation quality. The recorded links are all causal, but they are split across these constructs rather than centered on one: one line of work claims a causal relationship from image reconstruction to fine-grained visual understanding and to multimodal understanding, and another claims a causal relationship from image reconstruction to representation quality. Papers also record 1 linked behavioral indicator, Hallucination, through a causal claim from image reconstruction to hallucination, phrased as reducing hallucinations, and the same literature also includes a reverse causal claim from Multimodal understanding to Image reconstruction.

## Sources

**[LG-VQ: Language-Guided Codebook Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/fc8781fb328fb1fd069584a4519a2709-Paper-Conference.pdf)**
> The task of encoding an image into a compressed representation and then decoding it back to its original form to measure fidelity.

## Relationships

### Image reconstruction →
- **CelebA** (measurements) — *measured_by*
  > As shown in Table 1, GEM surpasses baseline models in reconstruction quality on the datasets of CelebA, LSUN-horse, and LSUN-bedroom. (Section 4.2)
  - [Graph-based Unsupervised Disentangled Representation Learning via Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/bac4d92b3f6decfe47eab9a5893dd1f6-Paper-Conference.pdf)
- **CUB-200-2011** (measurements) — *measured_by*
  > Results of image reconstruction on TextCaps, CelebA-HQ, CUB-200, and MS-COCO. (Table 1)
  - [LG-VQ: Language-Guided Codebook Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/fc8781fb328fb1fd069584a4519a2709-Paper-Conference.pdf)
- **MS-COCO** (measurements) — *measured_by*
  > Results of image reconstruction on TextCaps, CelebA-HQ, CUB-200, and MS-COCO. (Table 1)
  - [LG-VQ: Language-Guided Codebook Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/fc8781fb328fb1fd069584a4519a2709-Paper-Conference.pdf)
- **Fine-grained visual understanding** (constructs) — *causes*
  > This approach encourages LMMs to maintain low-level details, thereby enhancing their fine-grained comprehension abilities and reducing hallucinations. (Section 1)
  - [Reconstructive Visual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/259a5df46308d60f8454bd4adcc3b462-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks) — *causes*
  > This approach encourages LMMs to maintain low-level details, thereby enhancing their fine-grained comprehension abilities and reducing hallucinations. (Section 1)
  - [Reconstructive Visual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/259a5df46308d60f8454bd4adcc3b462-Paper-Conference.pdf)
- **Multimodal understanding** (constructs) — *causes*
  > In this way, LMMs are required to preserve every detail of input images, thereby enhancing multimodal comprehension capabilities and reducing hallucinations. (Figure 1)
  - [Reconstructive Visual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/259a5df46308d60f8454bd4adcc3b462-Paper-Conference.pdf)
- **Representation quality** (constructs) — *causes*
  > This approach simultaneously preserves high-level semantic alignment through conventional text supervision while enhancing visual feature quality via pixel-level reconstruction constraints. (Abstract)
  - [DS-VLM: Diffusion Supervision Vision Language Model](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sun25p/sun25p.pdf)
