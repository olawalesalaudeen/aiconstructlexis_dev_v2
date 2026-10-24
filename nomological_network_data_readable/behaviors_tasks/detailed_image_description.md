# Detailed image description
**Type:** Behavior  
**Referenced in:** 11 papers  
**Also known as:** Detailed description generation, Ultra-detailed image caption generation, Dense caption generation, Detailed image captioning  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage is long, rich, and comprehensive description of visual content, usually as multi-sentence text that enumerates many visible details. Papers variously call it elaborate, thorough, fine-grained, or long-form, and they often ask for coverage of both prominent elements and subtle details; one prompt states, "Describe this image in detail. Give as many details as possible. Say everything you see" (MiniGPT-4: Enhancing Vision-Language Understanding with Advanced Large Language Models). Some authors also contrast it with short or shallow descriptions, and a smaller line of work asks for an elaborate, detailed natural language description of a visual scene from corresponding fMRI brain recordings.

**Variants.** Most papers use nearby labels such as detailed image description and detailed image captioning. Smaller variants include detailed description generation, which is used for visual scenes decoded from brain recordings, and dense caption generation for biological specimen images, where the caption is intended to contain all necessary trait information. The domains therefore range from general images to specimen images and brain recording based visual scenes.

**Space of elicitation and scores.** Papers link this behavior to one measurement instrument, LLaVA-Bench-in-the-Wild. In the linked papers it is described as a benchmark or generalized dataset of images and questions that includes detailed description items, and it is used to evaluate models on that category alongside other tasks. No other measurement instrument is linked.

**What it is taken as evidence of.** Papers do not link detailed image description to any construct, so they do not present it as evidence of a particular construct. Instead, one paper reports a correlation with Hallucination, stating that longer captions tend to have higher hallucination rates, which is framed as a correlational link to another behavioral indicator rather than a construct relation.

## Sources

**[Neuro-Vision to Language: Enhancing Brain Recording-based Visual Reconstruction and Language Interaction](https://proceedings.neurips.cc/paper_files/paper/2024/file/b1c62bdeee97b38c34dcda152c829511-Paper-Conference.pdf) (as "Detailed description generation")**
> The task of generating an elaborate, detailed natural language description of a visual scene from the corresponding fMRI brain recordings.

**[Beyond task performance: evaluating and reducing the flaws of large multimodal models with in-context-learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/5df817c5dd95293ebf6d1583303a8c73-Paper-Conference.pdf)**
> Generating rich, multi-sentence descriptions that enumerate many visible details in an image.

**[VLM4Bio: A Benchmark Dataset to Evaluate Pretrained Vision-Language Models for Trait Discovery from Biological Images](https://proceedings.neurips.cc/paper_files/paper/2024/file/eced4a5fbc776e81b45e2f72447f0164-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Dense caption generation")**
> The behavior of generating a detailed, comprehensive textual description of an image, intended to capture all necessary trait information of a biological specimen.

**[Perception in Reflection](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wei25r/wei25r.pdf) (as "Detailed image captioning")**
> Generating long-form, fine-grained textual descriptions of an image that include both prominent elements and subtle visual details.

## Relationships

### Detailed image description →
- **LLaVA-Bench-in-the-Wild** (measurements) — *measured_by*
  > LLaVA-Bench, a generalized dataset, comprising 24 diverse images and 60 questions across categories like simple QA, detailed descriptions, and complex reasoning, is used to further evaluate the model’s generalization and robustness. (Section 4.1)
  - [DAMO: Decoding by Accumulating Activations Momentum for Mitigating Hallucinations in Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/8f0f23417ce1d00212a7c85c2560c392-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks) — *correlates*
  > Results in Tab.6 show that longer captions tend to have higher hallucination rates. (Section 4.5)
  - [MiniGPT-4: Enhancing Vision-Language Understanding with Advanced Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/50623630a2372839c078474efa6c0cb8-Paper-Conference.pdf)
