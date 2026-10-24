# Image inpainting
**Type:** Behavior  
**Referenced in:** 4 papers  
**Also known as:** Image in-painting, Image infilling, Generative fill  

## State of the Field

**Space of definitions.** Across definitions, the prevailing usage is filling a missing, masked, or corrupted part of an image by generating pixels or content from the visible parts of the image. Some papers explicitly describe the target as plausible or contextually appropriate content, while one paper adds textual instruction as part of the task and another frames the completion from in-context visual examples. The main variation is in what additional context guides the fill, while the shared requirement is to complete the missing region.

**Variants.** Papers use several nearby names, most commonly image inpainting or image in-painting, with smaller variants called image infilling and generative fill. The settings differ in mask structure and task framing: papers mention zero-shot control settings with different pixel-space masks, generating only within a mask while outside tokens are teacher-forced, and completing the missing half of an example on SVHN, MNIST, and CIFAR-10. One paper also mentions it alongside out-painting and editing as separate downstream tasks.

**Space of elicitation and scores.** No measurement instrument is linked to it. Papers instead operationalize the behavior directly through completion setups, such as filling a designated mask, infilling pixel-space masks, or completing a missing half of an example, and no named scoring instrument is reported.

**What it is taken as evidence of.** Only one construct is linked, zero-shot generalization. The recorded relationship is a causal claim from zero-shot generalization to image inpainting, described as showcasing zero-shot generalization ability on downstream tasks including image in-painting. No other construct link is reported.

## Sources

**[PromptFix: You Prompt and We Fix the Photo](https://proceedings.neurips.cc/paper_files/paper/2024/file/468c9ec4215e05b6488ac307d377662e-Paper-Conference.pdf)**
> The task of filling in missing or corrupted parts of an image based on a textual instruction.

**[Visual Autoregressive Modeling: Scalable Image Generation via Next-Scale Prediction](https://proceedings.neurips.cc/paper_files/paper/2024/file/9a24e284b187f662681440ba15c416fb-Paper-Conference.pdf) (as "Image in-painting")**
> The task of filling in a missing or masked region within an image with plausible, contextually appropriate content.

**[Glauber Generative Model: Discrete Diffusion Models via Binary Classification](https://proceedings.iclr.cc/paper_files/paper/2025/file/125be378b39b10676f56e12e6923b902-Paper-Conference.pdf) (as "Image infilling")**
> The task of generating pixels to fill in a masked or missing region of an image based on the visible parts.

**[Can Generative AI Solve Your In-Context Learning Problem?  A Martingale Perspective](https://proceedings.iclr.cc/paper_files/paper/2025/file/d90268f01ef06a55630b0588227adf4f-Paper-Conference.pdf) (as "Generative fill")**
> Completing missing parts of an image based on in-context visual examples.

## Relationships

### Associated with
- **Zero-shot generalization** (constructs)
  > VAR further showcases zero-shot generalization ability in downstream tasks including image in-painting, out-painting, and editing.
  - [Visual Autoregressive Modeling: Scalable Image Generation via Next-Scale Prediction](https://proceedings.neurips.cc/paper_files/paper/2024/file/9a24e284b187f662681440ba15c416fb-Paper-Conference.pdf)
