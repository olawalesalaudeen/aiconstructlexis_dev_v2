# Dense captioning
**Type:** Behavior  
**Referenced in:** 7 papers  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats dense captioning as describing multiple objects or regions within a single image rather than assigning only category labels. Definitions agree on the multi-object, per-region scope, but differ on how much detail the text should contain: some describe short descriptions for each object present, while others emphasize rich or comprehensive descriptions that include attributes, relationships, and contextual details. A paper also defines the task as producing both the regions and the corresponding descriptions for each region, and Ins-DetCLIP: Aligning Detection Model to Follow Human-Language Instruction says the behavior should "go beyond predicting only the category name" and generate "a detailed description for objects of interest."

**Variants.** The dominant setting is image-based, and papers use both dense captioning and dense image captioning for that setting. Within images, the behavior is framed around multiple distinct regions, each object present, or objects of interest. A related task also appears as dense video captioning, which a paper relates to the goal of comprehensively describing all the events in a video.

**Space of elicitation and scores.** Papers link dense captioning to two measurement instruments, DOCCI and Visual Genome, and both are described as datasets. Visual Genome is the only instrument reported to measure it: a paper defines the task there as producing both the regions and the corresponding descriptions for each region. DOCCI is only related to the behavior, with a paper saying it contains images and corresponding dense captions and is used to synthesize hard negatives.

**What it is taken as evidence of.** Across the cited papers, no construct is linked to dense captioning.

## Sources

**[Ins-DetCLIP: Aligning Detection Model to Follow Human-Language Instruction](https://proceedings.iclr.cc/paper_files/paper/2024/file/accb5f309ec092a6787a1879ad5f2a5f-Paper-Conference.pdf)**
> Generating rich, descriptive captions for multiple objects in an image, going beyond category labels to include contextual details.

## Relationships

### Dense captioning →
- **Visual Genome** (measurements) — *measured_by*
  > The dense captioning task is defined as producing both the regions and the corresponding descriptions for each region. For this experiment, we use the Visual Genome [28] dataset. (Section 4.3)
  - [FlexCap: Describe Anything in Images in Controllable Detail](https://proceedings.neurips.cc/paper_files/paper/2024/file/c91b6f7e0152b7a95ee777e987fe811e-Paper-Conference.pdf)

### Associated with
- **Dense video captioning** (behaviors tasks)
  > We define two dense captioning tasks according to different goals: 1) [DVC] Dense Video Captioning: Comprehensively describe all the events happened in the video. (Section 2.1)
  - [E.T. Bench: Towards Open-Ended Event-Level Video-Language Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/38ace89a980ead30c6be2b46afc1a5bd-Paper-Datasets_and_Benchmarks_Track.pdf)
- **DOCCI** (measurements)
  > We synthesize hard negatives from DOCCI dataset (Onoe et al., 2024), which contains over 15,000 images and their corresponding dense captions. (Section 4)
  - [TLDR: Token-Level Detective Reward Model for Large Vision Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/70217f4d06e57a2395f03b4bc136361a-Paper-Conference.pdf)
