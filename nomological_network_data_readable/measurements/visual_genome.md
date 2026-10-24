# Visual Genome
**Type:** Measurement  
**Referenced in:** 11 papers  
**Also known as:** VISUAL GENOME  

## State of the Field

**What it is.** Across the surveyed work, the dominant framing is of Visual Genome as a vision-language dataset with dense annotations of objects, attributes, and relationships in images, sometimes used through selected object relationships, region captions, or object data. Some papers note that its object data are converted into a Region-in Text-out format, while a smaller framing describes it as a visual question-answering dataset grounded in scene graphs that grounds visual concepts to language. Papers also refer to specific versions or splits, including VG100K with 108,077 images and over 1.7 million question-answer pairs, and a 77,398-image training split used as detection data.

**What it is claimed to measure.** Papers link Visual Genome to 1 construct and 4 behavioral indicators. The most common measurement claim is that papers use it to measure region captioning, including region-level caption ability; smaller lines use it to measure dense captioning and open-vocabulary object detection, and one paper uses it to measure the construct relation understanding by placing it among relational benchmarks. Visual question answering appears differently: one paper reports that Visual Genome is related to visual question answering because hard negatives are synthesized from VG100K, rather than treating it as a measurement instrument for that indicator.

**Space of uses.** Papers often position Visual Genome as an evaluation dataset or benchmark. One paper uses it alongside RefCOCOg to assess region-level caption ability, and another groups it with Winoground and SugarCrepe within relational benchmarking; elsewhere, papers use it as source data by converting object relationships and region captions into refer-and-ground instruction examples, casting object data in a Region-in Text-out format, synthesizing VQA hard negatives from VG100K, or training with a small Visual Genome detection set. Papers do not link it to another measurement instrument.

## Sources

**[Ferret: Refer and Ground Anything Anywhere at Any Granularity](https://proceedings.iclr.cc/paper_files/paper/2024/file/fd6613131889a4b656206c50a8bd7790-Paper-Conference.pdf)**
> A dataset containing dense annotations of objects, attributes, and relationships within images, used here to evaluate region-level captioning ability.

**[HEMM: Holistic Evaluation of Multimodal Foundation Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/4b6e5dae3acb4cfdfe5928a6eff174ee-Paper-Datasets_and_Benchmarks_Track.pdf) (as "VISUAL GENOME")**
> A visual question-answering dataset grounded in scene graphs, used to assess visual concept grounding and reasoning.

## Relationships

### → Visual Genome
- **Region captioning** (behaviors tasks) — *measured_by*
  > To assess the region-level caption ability, we also evaluate ASM on the Visual Genome (Krishna et al., 2017) and RefCOCOg (Mao et al., 2016).
  - [The All-Seeing Project: Towards Panoptic Visual Recognition and Understanding of the Open World](https://proceedings.iclr.cc/paper_files/paper/2024/file/68a3919db3858f548dea769f2dbba611-Paper-Conference.pdf)
- **Dense captioning** (behaviors tasks) — *measured_by*
  > The dense captioning task is defined as producing both the regions and the corresponding descriptions for each region. For this experiment, we use the Visual Genome [28] dataset. (Section 4.3)
  - [FlexCap: Describe Anything in Images in Controllable Detail](https://proceedings.neurips.cc/paper_files/paper/2024/file/c91b6f7e0152b7a95ee777e987fe811e-Paper-Conference.pdf)
- **Open-vocabulary object detection** (behaviors tasks) — *measured_by*
  > Open-Ended Object Detection on the Visual Genome dataset. (Figure 6)
  - [FlexCap: Describe Anything in Images in Controllable Detail](https://proceedings.neurips.cc/paper_files/paper/2024/file/c91b6f7e0152b7a95ee777e987fe811e-Paper-Conference.pdf)
- **Relation understanding** (constructs) — *measured_by*
  > We include relational benchmarks, such as Visual Genome [Yuksekgonul et al., 2023], Winoground [Thrush et al., 2022a], and SugarCrepe [Hsieh et al., 2024] designed to evaluate the models’ ability to understand and represent relationships between objects within an image... (Section 3.2)
  - [UniBench: Visual Reasoning Requires Rethinking Vision-Language Beyond Scaling](https://proceedings.neurips.cc/paper_files/paper/2024/file/96271227d3e204501d199433e56af289-Paper-Datasets_and_Benchmarks_Track.pdf)

### Associated with
- **Visual question answering** (behaviors tasks)
  > For VQA data, we synthesize hard negatives from Visual Genome (VG100K) dataset (Krishna et al., 2016), which contains 108,077 images with over 1.7 million question-answer pairs. (Section 4)
  - [TLDR: Token-Level Detective Reward Model for Large Vision Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/70217f4d06e57a2395f03b4bc136361a-Paper-Conference.pdf)
