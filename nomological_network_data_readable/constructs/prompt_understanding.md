# Prompt understanding
**Type:** Construct  
**Referenced in:** 14 papers  
**Also known as:** Prompt following, Prompt adherence, Prompt-following  

## State of the Field

**Definition agreement:** Consensus. Most papers define prompt understanding as how well a model's generated output matches the content and constraints of the input prompt, especially its specified objects, attributes, relationships, actions, or requirements. A few papers phrase this as the model's ability to interpret and follow prompt semantics or apply it to different modalities such as video or code, but these are variations in wording and setting rather than different phenomena.

**Space of definitions.** Across the papers, the prevailing usage, often under the names prompt following, prompt-following, or prompt adherence, treats the construct as how faithfully a generated image or video realizes what the prompt specifies, commonly its objects, attributes, relationships, constraints, and other contextual details. Several definitions state this as faithful representation or consistency with the prompt, and one study narrows it to whether a video accurately depicts an impossible event described in the prompt. A smaller line of work frames it more as the model's ability to interpret or grasp complex textual semantics and then follow them during generation, and one code-generation paper uses prompt adherence for observable alignment of generated code with prompt requirements, especially later in generation.

**Space of facets.** Paper use clusters around overlapping labels rather than sharply separated subtypes: prompt understanding, prompt following, and prompt adherence are all used for following prompt content, but they differ in whether the construct is treated as a model ability or as a property of generated outputs. When papers break down what must be followed, they most often name objects, attributes, and relationships, with some extending this to actions, settings, context, and specific constraints, and one evaluation asks raters to focus on relevance, accuracy, completeness, and context. Some papers also narrow the setting, either to complex and lengthy prompts, to counterfactual or impossible scenes, or to later-stage code generation.

**Space of measurement.** Papers link the construct to 2 measurement instruments, GenEval and Human evaluation, and to 1 behavioral indicator, Text summarization. The linked instruments are a benchmark and a human evaluation: GenEval is used as a benchmark where gains are presented as highlighting enhanced prompt-following capabilities, and the human evaluation asks users to choose the image that most accurately matches textual descriptions of spatial arrangement, object characteristics, and overall scene dynamics. These operationalizations match the common definitions that emphasize faithful realization of prompt content rather than introducing probes or LLM-as-a-judge measures.

**Links.** Outside measurement, one paper reports that prompt understanding is related to Text summarization, describing summarization as a generation task that mainly relies on prompt understanding. No papers report a correlational link or claim a causal relationship, and no paper links it to another construct.

## Sources

**[VideoTetris: Towards Compositional Text-to-Video Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/345208bdbbb6104616311dfc1d093fe7-Paper-Conference.pdf)**
> The model's ability to accurately interpret and follow complex textual semantics, including detailed attributes and relationships between objects.

**[Impossible Videos](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bai25a/bai25a.pdf) (as "Prompt following")**
> The degree to which a video generation model accurately realizes the content described in a text prompt, especially when the prompt describes counterfactual or impossible scenes.

**[LLM Blueprint: Enabling Text-to-Image Generation with Complex and Detailed Prompts](https://proceedings.iclr.cc/paper_files/paper/2024/file/adf7fa39d65e2983d724ff7da57f00ac-Paper-Conference.pdf) (as "Prompt adherence")**
> The degree to which a generated image faithfully represents all objects, attributes, and relationships described in a complex, lengthy text prompt.

**[Multimodal Large Language Models Make Text-to-Image Generative Models Align Better](https://proceedings.neurips.cc/paper_files/paper/2024/file/9421261e06f1a63a352b068f1ac90609-Paper-Conference.pdf) (as "Prompt-following")**
> The degree to which a generated image faithfully represents the objects, attributes, and relationships described in the input text prompt.

## Relationships

### Prompt understanding →
- **Human evaluation** (measurements) — *measured_by*
  > We also conducted an extensive user study to assess the effectiveness of our method... Their goal was to choose the image that most accurately represented the provided textual descriptions regarding spatial arrangement, object characteristics, and overall scene dynamics. (Section 4)
  - [LLM Blueprint: Enabling Text-to-Image Generation with Complex and Detailed Prompts](https://proceedings.iclr.cc/paper_files/paper/2024/file/adf7fa39d65e2983d724ff7da57f00ac-Paper-Conference.pdf)
- **GenEval** (measurements) — *measured_by*
  > Synthetic captions lead to significant improvements on the GenEval benchmark (Ghosh et al., 2024), as shown in Table 6, highlighting the advantage of enhanced prompt-following capabilities. (Section 4.3)
  - [Revisit Large-Scale Image-Caption Data in Pre-training Multimodal Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ebba182cb97864368fdb6ae00773a5e4-Paper-Conference.pdf)

### Associated with
- **Text summarization** (behaviors tasks)
  > while generally robust in classification tasks and generation tasks that mainly rely on prompt understanding (e.g., summarization, chat question-answering), we found that CS models struggle at high-level reasoning and understanding tasks.
  - [SIRIUS : Contexual Sparisty with Correction for Efficient LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/2ae6b2bdf3a179e3e24129e2c54bd871-Paper-Conference.pdf)
