# Subject-driven generation
**Type:** Behavior  
**Referenced in:** 4 papers  
**Also known as:** Subject-driven image generation  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage is generating images of a specific subject from reference images while keeping the subject faithful to those references and aligning the result with a text prompt. One paper states, "Given several images of a specific subject and a textual prompt, subject-driven generation aims to generate images of the same subject in a context aligning with the prompt" (Bridging The Gap between Low-rank and Orthogonal Adaptation via Householder Reflection Adaptation). A smaller wording variation describes generating new, customized images from one or more reference images, often placing the subject in new contexts or styles.

**Variants.** Papers use both "subject-driven generation" and "subject-driven image generation" for closely similar tasks. The variants explicitly named are single-entity subject-driven generation and multi-image subject-driven generation. The multi-image variant is described as requiring that the main subjects across multiple reference images represent the same instance, while other formulations allow one or more reference images.

**Space of elicitation and scores.** Some papers mention "subject-driven generation performance comparisons on the DreamBench" and quantitative evaluation on DreamBench for single-entity subject-driven generation. However, no measurement instrument is linked to it through measured_by relationships.

**What it is taken as evidence of.** No construct is linked to it, and no relationship records it as evidence of a construct.

## Sources

**[Bridging The Gap between Low-rank and Orthogonal Adaptation via Householder Reflection Adaptation](https://proceedings.neurips.cc/paper_files/paper/2024/file/cdd0640218a27e9e2c0e52e324e25db0-Paper-Conference.pdf)**
> Generating images of a specified subject that remain faithful to reference images while matching a text prompt.

**[Kosmos-G: Generating Images in Context with Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/b2fe1ee8d936ac08dd26f2ff58986c8f-Paper-Conference.pdf) (as "Subject-driven image generation")**
> The task of generating new, customized images of a specific subject provided through one or more reference images, often placing the subject in new contexts or styles.
