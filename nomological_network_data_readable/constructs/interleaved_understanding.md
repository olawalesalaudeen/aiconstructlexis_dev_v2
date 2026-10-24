# Interleaved understanding
**Type:** Construct  
**Referenced in:** 5 papers  
**Also known as:** Interleaved multimodal comprehension, Interleaved image-text comprehension  

## State of the Field

**Definition agreement:** Consensus. All papers define interleaved understanding as a model's latent ability to comprehend and reason over a single input sequence in which text and visual content are interleaved, often explicitly as alternating image and text elements. A few papers add emphasis on coherent integration, long-form content, or filtering distractors, but these are narrower conditions or consequences of the same core ability rather than different phenomena.

**Space of definitions.** Across the surveyed work, the prevailing usage is a latent ability or capacity for understanding interleaved multimodal inputs, especially alternating image and text sequences within a single input, sometimes described as requiring reasoning over those elements and integrating them into a coherent interpretation. A smaller line of work uses a narrower framing centered on long-form intertwined text and multiple images, where the model must identify relevant information and ignore superfluous or distracting content.

**Space of facets.** Papers use several labels for closely related capacities, including interleaved understanding, interleaved multimodal comprehension, and interleaved image-text comprehension, with scope varying from broad multimodal contexts to specifically image-text settings. Most formulations focus on comprehension or understanding, though one paper explicitly discusses interleaved multimodal comprehension together with generation, and another frames the task around answering questions and following instructions to pinpoint the relevant image.

**Space of measurement.** Formally, no measurement instrument and no behavioral indicator are linked to the construct. In the papers' own descriptions, evaluation is still benchmark-like: one paper mentions benchmarks introduced to evaluate interleaved visual understanding capability and reports performance on FIND-Bench, another says MMIE is designed to assess capabilities in understanding and generating interleaved text and images in any sequence, and another introduces IITC as a more demanding task for question answering and instruction following over intertwined image-text content. These descriptions largely match the dominant definition by targeting comprehension of interleaved image-text inputs, while some versions extend to generation or to filtering distractors.

**Links.** The only linked construct is Reasoning. One paper claims a causal relationship from Reasoning to interleaved understanding, in language about capabilities in reasoning across modalities and about unlocking models' potential for interleaved understanding and reasoning; no correlational or other related links are reported.

## Sources

**[Interfacing Foundation Models' Embeddings](https://proceedings.neurips.cc/paper_files/paper/2024/file/46e3b98045760c8cd9a0728d9e9f158d-Paper-Conference.pdf)**
> The specific latent ability to comprehend and reason over inputs that contain an alternating sequence of visual and textual elements.

**[Unified Generative and Discriminative Training for Multi-modal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/29416b66c2149872b9d1415a3fd2c5e0-Paper-Conference.pdf) (as "Interleaved multimodal comprehension")**
> The latent capacity to process and understand multiple, interleaved, and multimodal contexts within a single input sequence.

**[Learning Interleaved Image-Text Comprehension in Vision-Language Large Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/b441276ce6097177f1c001b3ea643f7a-Paper-Conference.pdf) (as "Interleaved image-text comprehension")**
> The ability of a model to understand and reason over long-form content where text and multiple images are intertwined, requiring it to identify relevant information while ignoring distractors.
