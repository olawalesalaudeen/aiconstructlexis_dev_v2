# Multi-image reasoning
**Type:** Construct  
**Referenced in:** 16 papers  
**Also known as:** Multi-image comprehension, Multi-frame integration, Multi-image understanding  

## State of the Field

**Definition agreement:** Consensus. Most papers define multi-image reasoning as a model's ability to process, integrate, and reason across multiple images within a single input or context. A few papers emphasize particular manifestations such as cross-image comparison, finding shared elements, handling interleaved text, or aggregating cues across video frames, but these are all specific settings or emphases of the same core ability rather than different phenomena.

**Space of definitions.** Across papers, the prevailing framing describes a latent ability to integrate information across multiple images, then answer questions or infer relations that require cross-image comparison and synthesis. Closely related definitions recast it as multi-image comprehension or understanding, emphasizing processing, integrating, and reasoning over multiple images, sometimes with interleaved text and sometimes with attention to shared or consistent elements across a group of images. Another framing calls it multi-frame integration and defines it as accumulating geometric and visual cues across non-overlapping frames to form a unified understanding of a scene, with one snippet saying models must "mentally" reconstruct the scene.

**Space of facets.** Papers use several near-synonymous labels for overlapping uses: multi-image reasoning, multi-image comprehension, multi-image understanding, and, in one line of work, multi-frame integration. Within these labels, the targeted relations are variously described as spatial, temporal, or logical relationships among multiple images, while example prompts focus on similarities between images or temporal progression across them. The construct is also contrasted with single-image visual understanding in papers that say current models mainly focus on single-image inputs, which limits their ability to integrate information across multiple images.

**Space of measurement.** Papers operationalize the construct with 10 measurement instruments and one linked behavioral indicator, and these operationalizations are benchmark-based. The most frequently linked instruments are Mantis-Eval, BLINK, MMMU, NLVR2, and MVBench, with five other instruments also used; Mantis-Eval is described as a human-annotated benchmark for multi-image reasoning, and MMMU is used because it contains both single- and multi-image questions. Papers present these instruments as tests of "multi-image reasoning abilities" or multi-image understanding, and one paper additionally links the construct to a visual question answering indicator.

**Links.** Beyond measurement, one paper reports that in-context learning is related to multi-image reasoning, describing a model as showing "strong in-context learning and multi-image reasoning capabilities right out of the box." Papers do not make causal or correlational claims here.

## Sources

**[MaVEn: An Effective Multi-granularity Hybrid Visual Encoding Framework for Multimodal Large Language Model](https://proceedings.neurips.cc/paper_files/paper/2024/file/b8f21f324ff277ba26aed2e944b7576b-Paper-Conference.pdf)**
> The latent ability to integrate information across multiple images and answer questions or infer relations that require cross-image comparison and synthesis.

**[EasyRef: Omni-Generalized Group Image Reference for Diffusion Models via Multimodal LLM](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zong25a/zong25a.pdf) (as "Multi-image comprehension")**
> The latent ability of a multimodal model to understand and integrate visual content across multiple images to identify shared or consistent elements.

**[Out of Sight, Not Out of Context? Egocentric Spatial Reasoning in VLMs Across Disjoint Frames](https://aclanthology.org/2025.emnlp-main.816.pdf) (as "Multi-frame integration")**
> The capacity to accumulate and synthesize geometric and visual cues across non-overlapping video frames to form a unified understanding of a scene.

**[MIA-DPO: Multi-Image Augmented Direct Preference Optimization For Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/557a20663907ed637c2807f608d5bec2-Paper-Conference.pdf) (as "Multi-image understanding")**
> The latent ability to correctly interpret and reason over inputs containing multiple images and interleaved text.

## Relationships

### Multi-image reasoning →
- **Mantis-Eval** (measurements) — *measured_by*
  > We additionally evaluate models on MMMU [Yue et al., 2024](containing both single and multi-image questions) and Mantis-Eval [Jiang et al., 2024](all multi-image questions) to probe a model’s multi-image reasoning abilities beyond in-context learning evaluations. (Section 4.2)
  - [MINT-1T: Scaling Open-Source Multimodal Data by 10x: A Multimodal Dataset with One Trillion Tokens](https://proceedings.neurips.cc/paper_files/paper/2024/file/40b9196c25fe1d64d87ca3a80a91d0ce-Paper-Datasets_and_Benchmarks_Track.pdf)
- **BLINK** (measurements) — *measured_by*
  > “Table 4 presents the the evaluation results on multi-image understanding benchmarks. The evaluation benchmarks consist of ... BLINK ...”
  - [mPLUG-Owl3: Towards Long Image-Sequence Understanding in Multi-Modal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f50f282a3093d36471008b045bd478af-Paper-Conference.pdf)
- **MMMU** (measurements) — *measured_by*
  > We additionally evaluate models on MMMU [Yue et al., 2024](containing both single and multi-image questions) and Mantis-Eval [Jiang et al., 2024](all multi-image questions) to probe a model’s multi-image reasoning abilities beyond in-context learning evaluations. (Section 4.2)
  - [MINT-1T: Scaling Open-Source Multimodal Data by 10x: A Multimodal Dataset with One Trillion Tokens](https://proceedings.neurips.cc/paper_files/paper/2024/file/40b9196c25fe1d64d87ca3a80a91d0ce-Paper-Datasets_and_Benchmarks_Track.pdf)
- **NLVR2** (measurements) — *measured_by*
  > “Table 4 presents the the evaluation results on multi-image understanding benchmarks. The evaluation benchmarks consist of NLVR2 ...”
  - [mPLUG-Owl3: Towards Long Image-Sequence Understanding in Multi-Modal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f50f282a3093d36471008b045bd478af-Paper-Conference.pdf)
- **MathVerse-mv** (measurements) — *measured_by*
  > “Table 4 presents the the evaluation results on multi-image understanding benchmarks. The evaluation benchmarks consist of ... MathVerse-mv ...”
  - [mPLUG-Owl3: Towards Long Image-Sequence Understanding in Multi-Modal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f50f282a3093d36471008b045bd478af-Paper-Conference.pdf)
- **SciVerse-mv** (measurements) — *measured_by*
  > “Table 4 presents the the evaluation results on multi-image understanding benchmarks. The evaluation benchmarks consist of ... SciVerse-mv ...”
  - [mPLUG-Owl3: Towards Long Image-Sequence Understanding in Multi-Modal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f50f282a3093d36471008b045bd478af-Paper-Conference.pdf)
- **MVBench** (measurements) — *measured_by*
  > First, we select five multi-image benchmarks: MMMU (Yue et al., 2024), BLINK (Fu et al., 2024), Mantis (Jiang et al., 2024), NLVR2 (Suhr et al., 2018), and MVBench (Li et al., 2024c). (Section 4.1)
  - [MIA-DPO: Multi-Image Augmented Direct Preference Optimization For Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/557a20663907ed637c2807f608d5bec2-Paper-Conference.pdf)
- **MuirBench** (measurements) — *measured_by*
  > we introduce MUIRBENCH (MULTI-IMAGE UNDERSTANDING BENCHMARK), a comprehensive benchmark designed to rigorously assess and evaluate multi-image understanding by multimodal LLMs. (Section 2)
  - [MuirBench: A Comprehensive Benchmark for Robust Multi-image Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/9cf6139382f98623d08cc595622f3fb1-Paper-Conference.pdf)
- **SEED-Bench-2** (measurements) — *measured_by*
  > Multi-image Tasks: Seed-Bench-2 (Li et al., 2024) evaluates the ability to comprehend multimodal inputs containing multiple images.
  - [From Introspection to Best Practices: Principled Analysis of Demonstrations in Multimodal In-Context Learning](https://aclanthology.org/2025.naacl-long.170.pdf)
- **Q-Bench** (measurements) — *measured_by*
  > For multi-image tasks, we incorporate Mantis-Eval (Jiang et al., 2024), QBench (Wu et al., 2024b), and BLINK (Fu et al., 2024b), in line with LLaVA-Interleave (Li et al., 2024a). (Section 2.1)
  - [Design Choices for Extending the Context Length of Visual Language Models](https://aclanthology.org/2025.acl-long.1603.pdf)

### Associated with
- **Knowledge-based visual question answering** (behaviors tasks)
  > DemonBench comprises seven scenarios involving multi-image reasoning and understanding, including tasks such as Multi-Modal Dialogue, Visual Relation Inference, Knowledge Grounded QA, and Multi-Image Reasoning.
  - [MaVEn: An Effective Multi-granularity Hybrid Visual Encoding Framework for Multimodal Large Language Model](https://proceedings.neurips.cc/paper_files/paper/2024/file/b8f21f324ff277ba26aed2e944b7576b-Paper-Conference.pdf)
