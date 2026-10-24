# Hateful Memes
**Type:** Measurement  
**Referenced in:** 8 papers  
**Also known as:** HATEFUL MEMES, FHM, HatefulMemes  

## State of the Field

**What it is.** Across the surveyed papers, Hateful Memes is most commonly described as a multimodal meme benchmark or dataset for deciding whether a meme image together with its text or caption is hateful. Definitions also frame it as detecting hate speech or harmful content in memes, and one description says it was a challenge hosted by Meta to classify whether an image and caption "describes hateful intentions." A smaller line refers to it specifically as the Facebook Hateful Memes, or FHM, dataset and presents it as a binary yes or no task that can require reasoning beyond simple unimodal signals.

**What it is claimed to measure.** Papers link it to 2 behavioral indicators and 2 constructs. The prevailing use is hate speech detection, with papers describing it as a benchmark for multimodal hate speech detection; smaller lines of work use it to measure harmful content detection, multimodal reasoning, and toxicity, including use to see whether a model can distinguish toxic from non-toxic images. Overall, papers report it as evaluating several closely related targets rather than only one construct.

**Space of uses.** Papers do not link it to other measurement instruments. In use, they present it as an evaluation benchmark: one paper uses it alongside Vizwiz, another evaluates over three meme datasets including FHM, HarM, and MAMI, and another treats it as a specific-mapping task where a model is given a meme image and caption and outputs "yes" or "no" for harmful content. This positions it as one component in broader multimodal evaluation setups.

## Sources

**[HEMM: Holistic Evaluation of Multimodal Foundation Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/4b6e5dae3acb4cfdfe5928a6eff174ee-Paper-Datasets_and_Benchmarks_Track.pdf) (as "HATEFUL MEMES")**
> A multimodal meme classification benchmark used to determine whether an image-text combination is hateful.

**[Leveraging Visual Tokens for Extended Text Contexts in Multi-Modal Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/19f10adb6749b0c9f1ff7610bd01d44d-Paper-Conference.pdf) (as "HatefulMemes")**
> A dataset for detecting hate speech in multimodal memes, requiring reasoning beyond simple unimodal signals.

**[MIND: A Multi-agent Framework for Zero-shot Harmful Meme Detection](https://aclanthology.org/2025.acl-long.46.pdf) (as "FHM")**
> The Facebook Hateful Memes (FHM) dataset, a benchmark released as part of a challenge to evaluate multimodal harmful meme detection in hate speech.

## Relationships

### → Hateful Memes
- **Hate speech detection** (behaviors tasks) — *measured_by*
  > Multimodal fusion takes in the image, text, and a description of the task, and then outputs a prediction, which can include... hate speech detection in HATEFUL MEMES... (Section 2.2).
  - [HEMM: Holistic Evaluation of Multimodal Foundation Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/4b6e5dae3acb4cfdfe5928a6eff174ee-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Harmful content detection** (behaviors tasks) — *measured_by*
  > We use three publicly available meme datasets for evaluation: (1) HarM (Pramanick et al., 2021a), (2) FHM (Kiela et al., 2020), and (3) MAMI (Fersini et al., 2022). (Section 4.1)
  - [MIND: A Multi-agent Framework for Zero-shot Harmful Meme Detection](https://aclanthology.org/2025.acl-long.46.pdf)
