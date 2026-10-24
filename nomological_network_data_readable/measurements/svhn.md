# SVHN
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Papers most commonly describe SVHN as the Street View House Numbers dataset, containing images of house numbers. In the available definition, it is used for in-distribution image generation and completion tasks, and one source snippet states, "For imaging ICL experiments, we use SVHN for in-distribution data." Other papers refer to it as a benchmark dataset in broader evaluations and as an external OOD dataset.

**What it is claimed to measure.** Overall, papers link SVHN to one construct and two behavioral indicators. The most common use in these papers is to measure image classification, with SVHN included in broader classification benchmark evaluations. A smaller line of work uses it to measure out-of-distribution detection, where it is described as an external OOD dataset, and one paper reports it as measuring optical character recognition ability. The measurement claims therefore span several targets rather than converging on a single construct.

**Space of uses.** No measurement instrument is linked to SVHN. Instead, papers usually position it as one component of larger evaluation suites: it appears in classification runs alongside several other benchmark datasets, in one paper as part of an extension to benchmarks such as CountBench and ClevrCount, and in another as one of several external datasets for OOD validation. The available definition also places it in imaging ICL experiments as in-distribution data for image generation and completion.

## Sources

**[Can Generative AI Solve Your In-Context Learning Problem?  A Martingale Perspective](https://proceedings.iclr.cc/paper_files/paper/2025/file/d90268f01ef06a55630b0588227adf4f-Paper-Conference.pdf)**
> The Street View House Numbers (SVHN) dataset consists of images of house numbers and is used in this paper for in-distribution image generation and completion tasks.

## Relationships

### → SVHN
- **Image classification** (behaviors tasks) — *measured_by*
  > We fine-tune the CLIP-ViT-B/16 (Radford et al., 2021) model on various datasets, including StanfordCars, DTD, EuroSAT, GTSRB, RESISC45, SUN397, and SVHN.
  - [LoRA-Pro: Are Low-Rank Adapters Properly Optimized?](https://proceedings.iclr.cc/paper_files/paper/2025/file/ea184f920a0f0f8d8030aa1bd7ac9fd4-Paper-Conference.pdf)
- **Optical character recognition ability** (constructs) — *measured_by*
  > Counting and Character Recognition: Assessing the models' ability to identify digits and count objects within images, a fundamental skill for quantitative understanding. ... including decades old benchmarks such as MNIST and SVHN [LeCun et al., 1998, Netzer et al., 2011].
  - [UniBench: Visual Reasoning Requires Rethinking Vision-Language Beyond Scaling](https://proceedings.neurips.cc/paper_files/paper/2024/file/96271227d3e204501d199433e56af289-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Out-of-distribution detection** (behaviors tasks) — *measured_by*
  > The model is trained on CIFAR100-LT Krizhevsky & Hinton (2009) with an imbalance ratio of 100, and validated on external OOD datasets including SVHN Netzer et al. (2011), Places365 Zhou et al. (2017), LSUN Yu et al., iSUN Xu et al. and Texture Cimpoi et al. (2014). (Section 3)
  - [Adapting Multi-modal Large Language Model to Concept Drift From Pre-training Onwards](https://proceedings.iclr.cc/paper_files/paper/2025/file/e25d87b8a42ee3f0d5b3ef741ca13031-Paper-Conference.pdf)
