# Fine-grained visual understanding
**Type:** Construct  
**Referenced in:** 27 papers  
**Also known as:** Perception of small visual details, Fine-grained recognition, Granular visual recognition, Detailed scene understanding, Fine-grained image comprehension, Confusing concept recognition, Fine-grained image understanding, Region-level comprehension, Fine-grained understanding, Finer-grained understanding, Fine-grained comprehension  

## State of the Field

**Definition agreement:** Consensus. Most papers define fine-grained visual understanding as a model's ability to perceive, represent, and reason over subtle, localized visual details in images, such as small objects, attributes, regions, or discriminative features, beyond a global scene-level summary. A few papers place this in video or multimodal settings, but they still treat the construct as understanding and using detailed local visual cues rather than a different phenomenon.

**Space of definitions.** Across the surveyed work, the prevailing usage treats this construct as a latent model ability to perceive, identify, and interpret detailed local visual information, especially small, pixel-level, point-level, or region-level details that go beyond high-level objects, global summaries, or whole-image semantics. Several definitions make this contrast explicit, describing struggles with 'pixel-level semantic details', small objects, intricate patterns, object attributes and relationships, or subtle local features, and some add that accurate understanding also involves relating local details to broader context. A smaller line of work narrows the construct to more specific settings, such as subtle visual differences in motion, distinguishing confusing or visually similar concepts, or preserving detailed visual information when answering multimodal questions.

**Space of facets.** Most papers use a cluster of near-synonymous labels for the same general idea, including perception of small visual details, granular visual recognition, detailed scene understanding, fine-grained image understanding, and region-level comprehension. Within that cluster, papers emphasize different facets: point-level details, small or occluded objects, text-like elements, specific spatial regions, and local object attributes or relationships. The main contrast is against coarse or global understanding, though a few definitions extend the term toward action-level differencing, confusing-concept recognition, or subtle multimodal patterns in both vision and language.

**Space of measurement.** Operationalization is almost entirely benchmark-based. The construct is linked to 17 measurement instruments, and the broader network also includes 2 behavioral indicators; the most frequently linked instruments are ChartQA, DocVQA, GQA, MMBench, and OCRBench, within a larger group of OCR-extensive, detail-sensitive, image-understanding, and referring or grounding benchmarks. This largely matches the dominant definitions, because papers use success on benchmarks described as requiring fine-grained visual information, object locations and relationships, or reasoning across multiple image areas as evidence of perceiving small details and local regions.

**Links.** In the broader nomological network, one paper claims a causal relationship from image reconstruction to this construct, stating that maintaining low-level details enhances fine-grained comprehension. Papers also report related links with fine-grained visual reasoning, sign language recognition, cognition, and emotion understanding: one relation is framed through hair-color identification as fine-grained visual reasoning, another says sign language tasks place strong demands on fine-grained comprehension and context awareness, and another connects perceiving fine-grained details with understanding cognition and emotion.

## Sources

**[KptLLM: Unveiling the Power of Large Language Model for Keypoint Comprehension](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe692980c5d9732cf153ce27947653a7-Paper-Conference.pdf)**
> The ability to perceive and interpret small, pixel-level semantic details within an image, as opposed to only understanding high-level objects and scenes.

**[MLLMs Know Where to Look: Training-free Perception of Small Visual Details with Multimodal LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/aaa0ac4253da75faf9b0dc0dda062612-Paper-Conference.pdf) (as "Perception of small visual details")**
> The ability to accurately identify and interpret fine-grained details or small objects within an image, a specific facet of visual perception.

**[Feast Your Eyes:  Mixture-of-Resolution Adaptation for Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d2781f7df8825bbde6cef55adfbcd283-Paper-Conference.pdf) (as "Granular visual recognition")**
> The latent ability of a model to perceive and identify small, occluded, or fine-grained details within an image.

**[Mini-Monkey: Alleviating the Semantic Sawtooth Effect for Lightweight MLLMs via Complementary Image Pyramid](https://proceedings.iclr.cc/paper_files/paper/2025/file/d52b3500a00748169dd4dad80fb75357-Paper-Conference.pdf) (as "Detailed scene understanding")**
> The model's ability to perceive and interpret fine-grained visual details within an image, such as small objects or intricate patterns.

**[Mini-Monkey: Alleviating the Semantic Sawtooth Effect for Lightweight MLLMs via Complementary Image Pyramid](https://proceedings.iclr.cc/paper_files/paper/2025/file/d52b3500a00748169dd4dad80fb75357-Paper-Conference.pdf) (as "Fine-grained recognition")**
> The latent ability to correctly identify small, irregular, or text-like visual elements in images.

**[Draw-and-Understand: Leveraging Visual Prompts to Enable MLLMs to Comprehend What You Want](https://proceedings.iclr.cc/paper_files/paper/2025/file/727658ad24ba28e02dffd379bdc69448-Paper-Conference.pdf) (as "Fine-grained image comprehension")**
> The model's ability to understand specific details, objects, and their attributes within an image at a level more detailed than a global summary.

**[Contrastive Visual Data Augmentation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhou25h/zhou25h.pdf) (as "Confusing concept recognition")**
> The latent ability of a model to distinguish between visually similar or commonly misrecognized concepts by leveraging fine-grained discriminative features.

**[Contrastive Localized Language-Image Pre-Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25ah/chen25ah.pdf) (as "Fine-grained image understanding")**
> The model's capacity to comprehend and reason about specific regions and objects within an image, beyond global image-level semantics.

**[GeoPixel: Pixel Grounding Large Multimodal Model in Remote Sensing](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shabbir25a/shabbir25a.pdf) (as "Region-level comprehension")**
> The ability to understand and reason about specific spatial regions within an image, as opposed to only processing the image as a whole.

**[FineCLIP: Self-distilled Region-based CLIP for Better Fine-grained Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/3122aaa22b2fe83f9cead1a696f65ceb-Paper-Conference.pdf) (as "Fine-grained understanding")**
> The model's ability to comprehend and represent detailed local information within an image, such as object attributes and their relationships, as opposed to just global scene-level content.

**[Multi-Head Mixture-of-Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/ab05dc8bf36a9f66edbff6992ec86f56-Paper-Conference.pdf) (as "Finer-grained understanding")**
> The ability to capture subtle differences and detailed semantic information in both visual and linguistic patterns.

**[Reconstructive Visual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/259a5df46308d60f8454bd4adcc3b462-Paper-Conference.pdf) (as "Fine-grained comprehension")**
> The latent ability to preserve and use detailed visual information when answering multimodal questions.

## Relationships

### Fine-grained visual understanding →
- **TextVQA** (measurements) — *measured_by*
  > We evaluate their effectiveness in improving the perception of smaller visual concepts on 4 detail-sensitive datasets (TextVQA, V∗, POPE, DocVQA)... (Sec. 6)
  - [MLLMs Know Where to Look: Training-free Perception of Small Visual Details with Multimodal LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/aaa0ac4253da75faf9b0dc0dda062612-Paper-Conference.pdf)
- **DocVQA** (measurements) — *measured_by*
  > We evaluate their effectiveness in improving the perception of smaller visual concepts on 4 detail-sensitive datasets (TextVQA, V∗, POPE, DocVQA)... (Sec. 6)
  - [MLLMs Know Where to Look: Training-free Perception of Small Visual Details with Multimodal LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/aaa0ac4253da75faf9b0dc0dda062612-Paper-Conference.pdf)
- **ChartQA** (measurements) — *measured_by*
  > We evaluate our each variant of ROSS mainly on ... (ii) fine-grained comprehension: MMVP (Tong et al., 2024b) and ChartQA (Masry et al., 2022) (Section 5.1)
  - [Reconstructive Visual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/259a5df46308d60f8454bd4adcc3b462-Paper-Conference.pdf)
- **VQA-v2** (measurements) — *measured_by*
  > Tasks that require fine-grained visual understanding and deep reasoning across multiple areas of the image naturally demand a higher number of visual tokens for optimal performance. ... This trend is evident in tasks such as VQAv2, GQA, VizWiz, MMBench, LLaVA-Bench, and MM-Vet.
  - [Matryoshka Query Transformer for Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/59c147c7d4fdb732daea3064eab949bf-Paper-Conference.pdf)
- **GQA** (measurements) — *measured_by*
  > Tasks that require fine-grained visual understanding and deep reasoning across multiple areas of the image naturally demand a higher number of visual tokens for optimal performance. ... This trend is evident in tasks such as VQAv2, GQA, VizWiz, MMBench, LLaVA-Bench, and MM-Vet.
  - [Matryoshka Query Transformer for Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/59c147c7d4fdb732daea3064eab949bf-Paper-Conference.pdf)
- **MMBench** (measurements) — *measured_by*
  > Tasks that require fine-grained visual understanding and deep reasoning across multiple areas of the image naturally demand a higher number of visual tokens for optimal performance. ... This trend is evident in tasks such as VQAv2, GQA, VizWiz, MMBench, LLaVA-Bench, and MM-Vet.
  - [Matryoshka Query Transformer for Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/59c147c7d4fdb732daea3064eab949bf-Paper-Conference.pdf)
- **OCRBench** (measurements) — *measured_by*
  > To evaluate the impact of this masking on the performance of LMMs, we select a set of OCR-extensive benchmarks (DocVQA (Mathew et al., 2021), ChartQA (Masry et al., 2022), InfoVQA (Mathew et al., 2022), OCRBench (Liu et al., 2024c), TextVQA (Singh et al., 2019)) that require fine-grained visual information, thus being highly sensitive to potential information loss in vision tokens
  - [Streamline Without Sacrifice - Squeeze out Computation Redundancy in LMM](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25s/wu25s.pdf)
- **VizWiz** (measurements) — *measured_by*
  > Tasks that require fine-grained visual understanding and deep reasoning across multiple areas of the image naturally demand a higher number of visual tokens for optimal performance. ... This trend is evident in tasks such as VQAv2, GQA, VizWiz, MMBench, LLaVA-Bench, and MM-Vet.
  - [Matryoshka Query Transformer for Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/59c147c7d4fdb732daea3064eab949bf-Paper-Conference.pdf)
- **MM-Vet** (measurements) — *measured_by*
  > Tasks that require fine-grained visual understanding and deep reasoning across multiple areas of the image naturally demand a higher number of visual tokens for optimal performance. ... This trend is evident in tasks such as VQAv2, GQA, VizWiz, MMBench, LLaVA-Bench, and MM-Vet.
  - [Matryoshka Query Transformer for Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/59c147c7d4fdb732daea3064eab949bf-Paper-Conference.pdf)
- **POPE** (measurements) — *measured_by*
  > We evaluate their effectiveness in improving the perception of smaller visual concepts on 4 detail-sensitive datasets (TextVQA, V∗, POPE, DocVQA)... (Sec. 6)
  - [MLLMs Know Where to Look: Training-free Perception of Small Visual Details with Multimodal LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/aaa0ac4253da75faf9b0dc0dda062612-Paper-Conference.pdf)
- **MMVP** (measurements) — *measured_by*
  > We evaluate our each variant of ROSS mainly on ... (ii) fine-grained comprehension: MMVP (Tong et al., 2024b) and ChartQA (Masry et al., 2022) (Section 5.1)
  - [Reconstructive Visual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/259a5df46308d60f8454bd4adcc3b462-Paper-Conference.pdf)
- **InfoVQA** (measurements) — *measured_by*
  > To evaluate the impact of this masking on the performance of LMMs, we select a set of OCR-extensive benchmarks (DocVQA (Mathew et al., 2021), ChartQA (Masry et al., 2022), InfoVQA (Mathew et al., 2022), OCRBench (Liu et al., 2024c), TextVQA (Singh et al., 2019)) that require fine-grained visual information, thus being highly sensitive to potential information loss in vision tokens
  - [Streamline Without Sacrifice - Squeeze out Computation Redundancy in LMM](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25s/wu25s.pdf)
- **SUN** (measurements) — *measured_by*
  > The SUN Dataset (Xiao et al., 2010) is a widely used large-scale scene recognition dataset that contains rich and confusing visual scenes. Correctly recognizing the scenes requires fine-grained visual reasoning and understanding of the scenes. (Section 5.1)
  - [Contrastive Visual Data Augmentation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhou25h/zhou25h.pdf)

### → Fine-grained visual understanding
- **Image reconstruction** (behaviors tasks) — *causes*
  > This approach encourages LMMs to maintain low-level details, thereby enhancing their fine-grained comprehension abilities and reducing hallucinations. (Section 1)
  - [Reconstructive Visual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/259a5df46308d60f8454bd4adcc3b462-Paper-Conference.pdf)

### Associated with
- **Sign language recognition** (behaviors tasks)
  > All these tasks [ISLR, CSLR, and SLT] impose indispensable demands on the model’s fine-grained comprehension and context awareness capabilities. (Section 1)
  - [Uni-Sign: Toward Unified Sign Language Understanding at Scale](https://proceedings.iclr.cc/paper_files/paper/2025/file/260a14acce2a89dad36adc8eefe7c59e-Paper-Conference.pdf)
- **Cognition** (constructs)
  > While recent MLLMs show promising results in basic perception, they still struggle to perceive fine-grained details (Tong et al., 2024b), which is essential for understanding cognition and emotion.
  - [MODA: MOdular Duplex Attention for Multimodal Perception, Cognition, and Emotion Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cg/zhang25cg.pdf)
- **Emotion understanding** (constructs)
  > While recent MLLMs show promising results in basic perception, they still struggle to perceive fine-grained details (Tong et al., 2024b), which is essential for understanding cognition and emotion.
  - [MODA: MOdular Duplex Attention for Multimodal Perception, Cognition, and Emotion Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cg/zhang25cg.pdf)
