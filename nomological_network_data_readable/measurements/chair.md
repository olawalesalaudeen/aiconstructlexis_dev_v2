# CHAIR
**Type:** Measurement  
**Referenced in:** 32 papers  

## State of the Field

**What it is.** Across the cited definitions, CHAIR is most commonly described as a benchmark, metric, or evaluation protocol for hallucination in image captioning, especially object hallucination. The prevailing description is that it compares generated captions with ground-truth objects or annotations and computes the proportion or ratio of mentioned objects that are not present in the image; most papers describe instance and sentence variants, written as CHAIRi and CHAIRs, for hallucinated object instances and sentences containing hallucinated objects. Some papers describe the same evaluation as open-ended captioning on sampled MS-COCO images, and a smaller line describes broader sentence- or image-level checks such as object, attribute, count, or positional correctness.

**What it is claimed to measure.** Papers link CHAIR to five behavioral indicators and one construct. The most frequent use is to measure Hallucination, Image captioning, and Object hallucination, with papers saying that CHAIR assesses hallucination by comparing objects mentioned in generated captions with ground-truth or reference objects; additional links treat it as measuring Text generation in open-ended generation settings and Visual hallucination in image-consistency evaluations. The only linked construct is Multimodal alignment, where one paper reports using CHAIR to show reward distributions of generated objects on the benchmark.

**Space of uses.** In use, papers commonly place CHAIR alongside other hallucination benchmarks, especially POPE, and some also pair it with GPT-4V-assisted evaluation, MMHal-Bench, or HallusionBench. The only explicit linked instrument is MS-COCO, and some papers describe running CHAIR on random samples of 500 validation images from that dataset. Papers usually position it as a commonly used benchmark for open-ended caption generation and hallucination evaluation, though some also use the CHAIR score to assess synthetic caption quality or to visualize generated-object rewards.

## Sources

**[Analyzing and Mitigating Object Hallucination in Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/fc625e831361cfcc82cb74224fdc66cb-Paper-Conference.pdf)**
> Evaluation metric for hallucination in image captioning, measuring the fraction of hallucinated object instances (CHAIRi) and sentences containing hallucinated objects (CHAIRs).

## Relationships

### → CHAIR
- **Object hallucination** (behaviors tasks) — *measured_by*
  > Caption Hallucination Assessment with Image Relevance (CHAIR) (Rohrbach et al., 2018) is a widely-used metric for evaluating object hallucination in image captioning tasks.
  - [Analyzing and Mitigating Object Hallucination in Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/fc625e831361cfcc82cb74224fdc66cb-Paper-Conference.pdf)
- **Image captioning** (behaviors tasks) — *measured_by*
  > Caption Hallucination Assessment with Image Relevance (CHAIR) (Rohrbach et al., 2018) is a widely-used metric for evaluating object hallucination in image captioning tasks.
  - [Analyzing and Mitigating Object Hallucination in Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/fc625e831361cfcc82cb74224fdc66cb-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks) — *measured_by*
  > “The CHAIR metric ... evaluates the exact match between generated and ground-truth image captions”
  - [Alleviating Hallucinations in Large Vision-Language Models through Hallucination-Induced Optimization](https://proceedings.neurips.cc/paper_files/paper/2024/file/dde040998d82553cf7f689e8ae173d5a-Paper-Conference.pdf)
- **Multimodal alignment** (constructs) — *measured_by*
  > To better demonstrate how our method enhances vision-language alignment and ensures the generation of high-scoring objects, we visualize the reward distribution of generated objects on the CHAIR benchmark, as depicted in Figure 4.
  - [Fine-Grained Verifiers: Preference Modeling as Next-token Prediction in Vision-Language Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/7c1f8ca17d2f0bdf82c73abafb577837-Paper-Conference.pdf)
- **Visual hallucination** (behaviors tasks) — *measured_by*
  > Visual hallucination task evaluates whether the response of the model is consistent with the image content to ensure the trustworthiness and reliability of the model. We use CHAIR (Rohrbach et al., 2018), POPE (Li et al., 2023c), and MMHal-Bench (Sun et al., 2023).
  - [See What You Are Told: Visual Attention Sink in Large Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/da8a39bc39ae1c89dd6ebb1e3bcbb3f3-Paper-Conference.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > Finally, for open-ended generation, we use the CHAIR (Rohrbach et al., 2018). (Section 5.1)
  - [Unveiling the Response of Large Vision-Language Models to Visually Absent Tokens](https://aclanthology.org/2025.emnlp-main.1092.pdf)

### Associated with
- **MS-COCO** (measurements)
  > As for CHAIR, Following (Wang et al., 2024a; Huang et al., 2024; Yue et al., 2024b), we randomly select 500 images from the validation set of the MSCOCO (Lin et al., 2014) dataset (Section 5.2).
  - [Self-Introspective Decoding: Alleviating Hallucinations for Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/3cc87f2bd3e3b4df8f9217326761c322-Paper-Conference.pdf)
