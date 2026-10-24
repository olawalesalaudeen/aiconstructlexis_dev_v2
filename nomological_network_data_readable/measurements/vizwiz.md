# VizWiz
**Type:** Measurement  
**Referenced in:** 72 papers  
**Also known as:** Vizwiz, VisWiz, VizWiz-VQA, VizWizQA, VizWiz test-dev  

## State of the Field

**What it is.** Across papers, VizWiz is most commonly treated as a visual question answering dataset or benchmark built from questions asked by blind or visually impaired users about images they have taken or their surroundings. Definitions repeatedly emphasize real-world, uncurated or natural images, and several papers describe the visual input as challenging, low-quality, ambiguous, or visually degraded. A smaller set of descriptions refers to specific forms such as VizWiz-VQA for natural image VQA, VizWizQA, and the VizWiz test-dev split, which one paper says contains 8,000 image-question pairs.

**What it is claimed to measure.** The prevailing usage is as a measure of visual question answering, while a smaller line of work uses it to measure visual instruction following. Papers link it to 8 constructs and 2 behavioral indicators overall; the most frequent construct framings are visual understanding, multimodal understanding, and visual perception, with the remaining 5 linked constructs or indicators spread across other framings rather than concentrated on a single one. In the recorded claims, papers say it measures these capabilities rather than relating to them in some other way.

**Space of uses.** No measurement instrument is linked to it. Even so, papers usually place VizWiz inside broader evaluation suites, most often alongside VQAv2, OKVQA, GQA, and TextVQA, and they position it as one benchmark among broader image VQA or vision-understanding evaluations. The reported uses include zero-shot evaluation, few-shot evaluation, four-shot and eight-shot in-context evaluation, validation-set evaluation, and use of the test-dev split.

## Sources

**[DreamLLM: Synergistic Multimodal Comprehension and Creation](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a7a22152cd21f0ca3c0f8139bb32905-Paper-Conference.pdf)**
> A visual question answering dataset originating from questions asked by people who are blind, often featuring real-world, uncurated images.

**[Mitigating Object Hallucination via Concentric Causal Attention](https://proceedings.neurips.cc/paper_files/paper/2024/file/a76ed4a8ef522c823d73925e7fff16d4-Paper-Conference.pdf) (as "Vizwiz")**
> A benchmark consisting of visual questions asked by people who are blind, designed to evaluate a model's ability to answer real-world visual queries.

**[Efficient Large Multi-modal Models via Visual Context Compression](https://proceedings.neurips.cc/paper_files/paper/2024/file/871ed095b734818cfba48db6aeb25a62-Paper-Conference.pdf) (as "VisWiz")**
> VisWiz is a visual question answering benchmark based on questions from blind users.

**[Dynamic Mixture of Curriculum LoRA Experts for Continual Multimodal Instruction Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ge25d/ge25d.pdf) (as "VizWiz-VQA")**
> A Visual Question Answering (VQA) benchmark focused on questions about natural images, often taken by people who are blind.

**[MaVEn: An Effective Multi-granularity Hybrid Visual Encoding Framework for Multimodal Large Language Model](https://proceedings.neurips.cc/paper_files/paper/2024/file/b8f21f324ff277ba26aed2e944b7576b-Paper-Conference.pdf) (as "VizWizQA")**
> A visual question answering dataset originating from visually impaired people, featuring questions about images they have taken.

**[QAVA: Query-Agnostic Visual Attack to Large Vision-Language Models](https://aclanthology.org/2025.naacl-long.512.pdf) (as "VizWiz test-dev")**
> Dataset of image-question pairs from visually impaired users, used to evaluate model performance on real-world, user-generated queries.

## Relationships

### → VizWiz
- **Visual question answering** (behaviors tasks) — *measured_by*
  > We first quantitatively evaluate the zero-shot multi-modal understanding capacity of LaVIT on ... Visual Question Answering (VQAv2 (Goyal et al., 2017), OKVQA (Marino et al., 2019), GQA (Hudson & Manning, 2019), VizWiz (Gurari et al., 2018)). (Section 4.1)
  - [Unified Language-Vision Pretraining in LLM with Dynamic Discrete Visual Tokenization](https://proceedings.iclr.cc/paper_files/paper/2024/file/e1762b64958760f7bfabe3a7062d007f-Paper-Conference.pdf)
- **Multimodal understanding** (constructs) — *measured_by*
  > “We evaluate Emu on a broad range of vision-language tasks including image question answering (VQAv2 (Goyal et al., 2017), OKVQA (Marino et al., 2019), VizWiz (Gurari et al., 2018))”
  - [Emu: Generative Pretraining in Multimodality](https://proceedings.iclr.cc/paper_files/paper/2024/file/34d5143080c89a7ce10932c8c5e1907f-Paper-Conference.pdf)
- **Visual understanding** (constructs) — *measured_by*
  > VizWiz [23] consists of images taken by visually impaired individuals paired with questions they pose about these images, making it crucial for developing AI systems that assist in real-world, accessibility-focused visual understanding tasks. (Section 4.3)
  - [Multimodal Task Vectors Enable Many-Shot Multimodal In-Context Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/27571b74d6cd650b8eb6cf1837953ae8-Paper-Conference.pdf)
- **Visual perception** (constructs) — *measured_by*
  > We further evaluate our trained model over six benchmarks that examines LVLMs general perception capability, including SEED-Bench [36], ScienceQA [49], GQA [28], Vizwiz [22]... (Appendix D.1)
  - [Mitigating Object Hallucination via Concentric Causal Attention](https://proceedings.neurips.cc/paper_files/paper/2024/file/a76ed4a8ef522c823d73925e7fff16d4-Paper-Conference.pdf)
- **In-context learning** (constructs) — *measured_by*
  > The models are evaluated on four-shot and eight-shot in-context learning performance on various captioning benchmarks (COCO (Karpathy test) [Lin et al., 2014] and TextCaps (validation) [Sidorov et al., 2020]) and visual question answering datasets (VQAv2 (validation) [Agrawal et al., 2015], OK-VQA (validation) [Marino et al., 2019], TextVQA (validation) [Singh et al., 2019], and VizWiz (validation) [Gurari et al., 2018]). (Section 4.2)
  - [MINT-1T: Scaling Open-Source Multimodal Data by 10x: A Multimodal Dataset with One Trillion Tokens](https://proceedings.neurips.cc/paper_files/paper/2024/file/40b9196c25fe1d64d87ca3a80a91d0ce-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Long-context understanding** (constructs) — *measured_by*
  > To evaluate the long-context understanding ability, we adopt the few-shot evaluation setting in Flamingo [1]. We report answer accuracy on the OK-VQA [28], TextVQA [29], VizWiz [30], and VQAV2 [31]. (Section 3.1)
  - [Leveraging Visual Tokens for Extended Text Contexts in Multi-Modal Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/19f10adb6749b0c9f1ff7610bd01d44d-Paper-Conference.pdf)
- **Fine-grained visual understanding** (constructs) — *measured_by*
  > Tasks that require fine-grained visual understanding and deep reasoning across multiple areas of the image naturally demand a higher number of visual tokens for optimal performance. ... This trend is evident in tasks such as VQAv2, GQA, VizWiz, MMBench, LLaVA-Bench, and MM-Vet.
  - [Matryoshka Query Transformer for Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/59c147c7d4fdb732daea3064eab949bf-Paper-Conference.pdf)
- **Visual reasoning** (constructs) — *measured_by*
  > VQAv2 Goyal et al. (2017) and VizWiz Gurari et al. (2018) test general visual reasoning
  - [EMMA: Empowering Multi-modal Mamba with Structural and Hierarchical Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/3760dbb5835bf0b771c3f83cb27ef2c0-Paper-Conference.pdf)
- **Zero-shot generalization** (constructs) — *measured_by*
  > Unseen tasks are datasets that were not involved in the recipe construction process. These tasks are used to evaluate the zero-shot generalizability of our method. Specifically, we employed the MM-Vet (Yu et al., 2024), MM-Bench (Zhang et al., 2023a), MM-Bench-Chinese (Zhang et al., 2023a), VizWiz (Gurari et al., 2018), and POPE (Li et al., 2023) datasets to assess this capability.
  - [REMEDY: Recipe Merging Dynamics in Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4065a881baab1744bfba208a4361bbb1-Paper-Conference.pdf)
