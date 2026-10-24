# Winoground
**Type:** Measurement  
**Referenced in:** 11 papers  
**Also known as:** WINOGROUND, WinoGround  

## State of the Field

**What it is.** Across the surveyed work, Winoground is most commonly described as a compositional image-text matching dataset or benchmark for probing visio-linguistic compositionality, fine-grained alignment, and reasoning. Definitions converge on a setup with carefully constructed minimal pairs, or paired images and captions, and one recurring task description says the model must correctly match two images and captions whose captions use the same words in different orders. A smaller framing describes it more broadly as a dataset of images for evaluating vision-language models, including image captioning and compositional understanding.

**What it is claimed to measure.** Papers link it to three constructs and two behavioral indicators. The prevailing usage is to measure compositional reasoning, followed by compositionality and relation understanding: papers describe it as testing compositional visual reasoning, as a benchmark for assessing VLM compositionality, and as evaluating the ability to understand relationships between objects within an image. Smaller uses report it as measuring cross-modal retrieval through binary image-text matching, and self-correction, where authors evaluate whether extra token-level annotation cues let a model self-correct hallucinations.

**Space of uses.** No measurement instrument is linked to it. Papers instead use it alongside other benchmarks, including EqBen, Visual Genome, NLVR, MMVP, and SugarCREPE, sometimes as one of a small set of image-text matching benchmarks and sometimes within broader suites for fine-grained alignment or compositional visual reasoning. One paper also uses 100 samples from it for human evaluation of token-level predictions, as a check on whether extra annotation cues let a model self-correct hallucinations.

## Sources

**[HEMM: Holistic Evaluation of Multimodal Foundation Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/4b6e5dae3acb4cfdfe5928a6eff174ee-Paper-Datasets_and_Benchmarks_Track.pdf) (as "WINOGROUND")**
> A dataset for probing visio-linguistic compositionality by requiring models to correctly match images and captions from carefully constructed minimal pairs.

**[TLDR: Token-Level Detective Reward Model for Large Vision Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/70217f4d06e57a2395f03b4bc136361a-Paper-Conference.pdf) (as "WinoGround")**
> A dataset of images used to evaluate vision-language models, particularly for tasks like image captioning and assessing compositional understanding.

**[Natural Language Inference Improves Compositionality in Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7eeec4dffcfe4912482ffbf2ab8ddb41-Paper-Conference.pdf)**
> A compositional image-text matching benchmark with paired images and captions designed to test fine-grained alignment and reasoning.

## Relationships

### → Winoground
- **Compositional reasoning** (constructs) — *measured_by*
  > Fine-tuning on this data enhances the model’s ability to distinguish between similar images, showing improvements on challenging benchmarks like Winoground, MMVP, and EQBEN, which test compositional reasoning and fine-grained understanding. (Section 6.1)
  - [VisMin: Visual Minimal-Change Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/c3070c3388552a08a3326f0d28dc2af9-Paper-Conference.pdf)
- **Relation understanding** (constructs) — *measured_by*
  > We include relational benchmarks, such as Visual Genome [Yuksekgonul et al., 2023], Winoground [Thrush et al., 2022a], and SugarCrepe [Hsieh et al., 2024] designed to evaluate the models’ ability to understand and represent relationships between objects within an image... (Section 3.2)
  - [UniBench: Visual Reasoning Requires Rethinking Vision-Language Beyond Scaling](https://proceedings.neurips.cc/paper_files/paper/2024/file/96271227d3e204501d199433e56af289-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Self-correction** (behaviors tasks) — *measured_by*
  > In this section, we evaluate on WinoGround (Thrush et al., 2022) dataset to show whether given extra token-level annotation cues, the vision language model is able to self-correct its own hallucinations. (Section 5.3)
  - [TLDR: Token-Level Detective Reward Model for Large Vision Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/70217f4d06e57a2395f03b4bc136361a-Paper-Conference.pdf)
- **Cross-modal retrieval** (behaviors tasks) — *measured_by*
  > Image-text matching evaluation through binary retrieval tasks... We report results on two benchmarks (Winoground (Thrush et al., 2022), EqBen (Wang et al., 2023b))
  - [Natural Language Inference Improves Compositionality in Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7eeec4dffcfe4912482ffbf2ab8ddb41-Paper-Conference.pdf)
- **Compositionality** (constructs) — *measured_by*
  > We use several challenging benchmarks, Winoground (Thrush et al., 2022), NaturalBench (Li et al., 2024), SeeTrue (Yarom et al., 2024), SugarCREPE (Hsieh et al., 2024), for assessing VLMs’ compositionality. (Section 2.1)
  - [Exploring How Generative MLLMs Perceive More Than CLIP with the Same Vision Encoder](https://aclanthology.org/2025.acl-long.499.pdf)
