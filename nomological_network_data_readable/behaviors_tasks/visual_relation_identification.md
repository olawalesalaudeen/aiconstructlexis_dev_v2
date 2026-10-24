# Visual relation identification
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Inter-relationship analysis, Interaction relation understanding, Relationship identification, Object interaction analysis  

## State of the Field

**Space of definitions.** Across definitions, the prevailing usage treats this behavior as identifying or describing relations among visual entities. Most commonly, papers describe connections, interactions, or spatial dynamics between multiple specified objects or marked regions within one image, sometimes as detailed analysis over arbitrary regions of interest; a smaller line of work frames it as reasoning about dynamic interactions in traffic scenes, including an ego vehicle's reaction to other elements, or as identifying which properties change and stay the same between images in a visual analogy.

**Variants.** Papers use several names for closely related formulations: inter-relationship analysis, object interaction analysis, interaction relation understanding, and relationship identification. These variants span within-image object or region relations, traffic-scene agent interactions, and cross-image analogy tasks that ask models to extract relations between images.

**Space of elicitation and scores.** No measurement instrument is linked to it. In the task formulations that are shown, papers elicit the behavior with direct instructions, such as asking for the relationships between marked regions or for the changed and unchanged properties between two images, and the excerpts do not describe a separate scoring instrument.

**What it is taken as evidence of.** The only construct linked to this behavior is Abstract reasoning. That link is recorded as a related relationship rather than a causal or correlational claim, with one paper describing visual analogy as including a step of "identifying relationships between images"; no other construct links are reported.

## Sources

**[Draw-and-Understand: Leveraging Visual Prompts to Enable MLLMs to Comprehend What You Want](https://proceedings.iclr.cc/paper_files/paper/2025/file/727658ad24ba28e02dffd379bdc69448-Paper-Conference.pdf) (as "Inter-relationship analysis")**
> The ability to identify and describe the connections, interactions, or spatial dynamics between multiple specified objects or regions within an image.

**[MME-RealWorld: Could Your Multimodal LLM Challenge High-Resolution Real-World Scenarios that are Difficult for Humans?](https://proceedings.iclr.cc/paper_files/paper/2025/file/df29d63af05cb91d705cf06ba5945b9d-Paper-Conference.pdf) (as "Interaction relation understanding")**
> The task of reasoning about the dynamic interactions between different agents in a traffic scene, such as an ego vehicle's reaction to others.

**[VOILA: Evaluation of MLLMs For Perceptual Understanding and Analogical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/adf17e7346b6be4c2f2bb40de572e5bc-Paper-Conference.pdf) (as "Relationship identification")**
> Identifying which properties stay the same or change between images in a visual analogy.

**[Mitigating Hallucination in Large Multi-Modal Models via Robust Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/fed9263d7f1086e735904ff690527a53-Paper-Conference.pdf) (as "Object interaction analysis")**
> Describing the relationships and interactions between objects in an image.
