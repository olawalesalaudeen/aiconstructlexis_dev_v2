# Style transfer
**Type:** Behavior  
**Referenced in:** 15 papers  
**Also known as:** Text style transfer, Template rewriting, Authorship obfuscation, Authorship mimicking, Tone adjustment, Stylistic rewriting  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage is textual rewriting: authors most commonly describe style transfer as rewriting a given text so it matches a target style while preserving its original meaning, core content, or semantic content. Common success criteria are style conformity plus content preservation, and some formulations add fluency, describing the goal as generating a fluent rewrite in the desired style. A smaller line of work uses the same label for image generation or editing, where the goal is to keep the content of a test image while changing artistic style or visual appearance, sometimes with a separate style image or multimodal instructions.

**Variants.** Most variants remain text-based and differ mainly in the target style, including sentiment transfer, formal versus informal rewriting, general tone adjustment, matching a specific author's or dataset's style, and broader stylistic rewriting such as changing formality, fixing grammar, or improving coherence. Some papers cast it as template rewriting, where a structured sentence is rewritten with domain-specific examples while preserving original meaning and emotional tone, and others distinguish authorship obfuscation, which hides the original author's identity by altering stylistic cues, from authorship mimicking, which generates text in a target author's style. A smaller multimodal line studies art style transfer and sequences of transformed images with accompanying text descriptions, and one paper relates style transfer to repetitive generation and hallucination by noting repetitions and hallucinations in some transferred texts.

**Space of elicitation and scores.** No measurement instrument is linked to it in these papers. Papers instead describe the task directly, for example as rewriting text into a requested style while preserving meaning, or generating an image that contains the content of a test image in the style of a style image.

**What it is taken as evidence of.** Papers link it to Fluency and Reasoning, rather than converging on a single construct. Style transfer is related to Fluency in one formulation that defines the goal as generating a fluent rewrite with the same meaning in the target style, and it is reported to correlate with Reasoning in work stating that models described as stronger at reasoning were less effective at faithfully replicating an author's distinctive style while better at verification and concealing authorial traits.

## Sources

**[Reference Trustable Decoding: A Training-Free Augmentation Paradigm for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/925869234d3aa2a3aad5f05b643974aa-Paper-Conference.pdf)**
> The task of modifying the linguistic style of a model's output to match a target style, such as that of a specific author or dataset.

**[Evolving Prompts In-Context: An Open-ended, Self-replicating Perspective](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25aj/wang25aj.pdf) (as "Text style transfer")**
> The task of rewriting a given text to conform to a different style, such as sentiment, while preserving its core content.

**[Adapting Bias Evaluation to Domain Contexts using Generative Models](https://aclanthology.org/2025.emnlp-main.1424.pdf) (as "Template rewriting")**
> The observable action of a generative model taking a structured template sentence as input and producing a new sentence that preserves the original meaning but matches a target linguistic style.

**[Unraveling Interwoven Roles of Large Language Models in Authorship Privacy: Obfuscation, Mimicking, and Verification](https://aclanthology.org/2025.emnlp-main.753.pdf) (as "Authorship obfuscation")**
> The observable task of altering the stylistic features of a text to conceal the original author's identity while preserving the semantic content.

**[Unraveling Interwoven Roles of Large Language Models in Authorship Privacy: Obfuscation, Mimicking, and Verification](https://aclanthology.org/2025.emnlp-main.753.pdf) (as "Authorship mimicking")**
> The observable task of generating text that replicates the distinctive writing style of a specific target author.

**[HydraOpt: Navigating the Efficiency-Performance Trade-off of Adapter Merging](https://aclanthology.org/2025.emnlp-main.1365.pdf) (as "Tone adjustment")**
> Rewriting a given text in a different stylistic or tonal register as specified by the task.

**[Automatic Input Rewriting Improves Translation with Large Language Models](https://aclanthology.org/2025.naacl-long.542.pdf) (as "Stylistic rewriting")**
> The task of rewriting text to conform to specific stylistic requirements, such as fixing grammar, improving coherence, or changing formality.

## Relationships

### → Style transfer
- **Prompt engineering** (behaviors tasks) — *causes*
  > VGD can also be easily adapted to style transfer. (Section 4.2)
  - [Visually Guided Decoding: Gradient-Free Hard Prompt Inversion with Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/cd61329e2c14b93a89d617c914140f64-Paper-Conference.pdf)
- **Reasoning** (constructs) — *correlates*
  > models with stronger reasoning abilities (e.g., o3-mini, Deepseek) according to the benchmark 1, excel at verification and concealing authorial traits but are less effective at faithfully replicating an author’s distinctive style.
  - [Unraveling Interwoven Roles of Large Language Models in Authorship Privacy: Obfuscation, Mimicking, and Verification](https://aclanthology.org/2025.emnlp-main.753.pdf)

### Associated with
- **Fluency** (constructs)
  > ...the goal of text style transfer is to generate a fluent rewrite of x, denoted as x→s, that has the same meaning as x but is in style s. (Section 2.1)
  - [Style Transfer with Multi-iteration Preference Optimization](https://aclanthology.org/2025.naacl-long.135.pdf)
- **Hallucination** (behaviors tasks)
  > First, we observe repetitions and hallucinations in some transferred texts. (Limitations)
  - [Style Transfer with Multi-iteration Preference Optimization](https://aclanthology.org/2025.naacl-long.135.pdf)
- **Repetitive generation** (behaviors tasks)
  > First, we observe repetitions and hallucinations in some transferred texts. (Limitations)
  - [Style Transfer with Multi-iteration Preference Optimization](https://aclanthology.org/2025.naacl-long.135.pdf)
