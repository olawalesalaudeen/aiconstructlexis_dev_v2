# VQA-v2
**Type:** Measurement  
**Referenced in:** 106 papers  
**Also known as:** VQA-V2, VQA, VQA v2, VQAv2, VQAV2  

## State of the Field

**What it is.** Across the literature, VQA-v2 is most commonly treated as a benchmark or dataset for visual question answering on images, typically requiring open-ended or free-form natural language answers to questions about a given image. Several definitions add that it is large-scale and based on natural images, and one formulation specifies images, associated questions, and ten ground-truth answers per question, while another describes it as a more balanced version of the original VQA dataset. Some papers further frame it as testing image understanding, visual comprehension, or vision, language, and commonsense knowledge. Papers also refer to specific evaluation slices, including validation and test-dev splits, and one study uses a VQA v2 32+50 subset.

**What it is claimed to measure.** Papers use VQA-v2 to measure 11 constructs and 3 behavioral indicators, so its reported role is spread across many targets rather than converging on a single construct or indicator. The prevailing construct framings are visual understanding, multimodal understanding, visual perception, fine-grained visual understanding, and fairness, and on the behavioral side it is most commonly used to measure visual question answering. Other papers extend its use to the remaining linked constructs, and to answer generation and visual instruction following.

**Space of uses.** In use, VQA-v2 is usually part of broader multimodal evaluation suites rather than being presented on its own, frequently appearing alongside GQA, VizWiz, OKVQA, TextVQA, and MMBench, as well as other benchmarks. Papers position it as a standard benchmark for zero-shot and in-context evaluation, and some also use it as a utility check when examining whether safety alignment preserves performance on standard VQA tasks. No measurement instrument is linked to it.

## Sources

**[Harnessing Webpage UIs for Text-Rich Visual Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/2da53cd1abdae59150e35f4693834f32-Paper-Conference.pdf) (as "VQA-V2")**
> A benchmark for visual question answering on natural images.

**[Should VLMs be Pre-trained with Image Data?](https://proceedings.iclr.cc/paper_files/paper/2025/file/34a5f638617ce32700e235e50dff9c8a-Paper-Conference.pdf)**
> A benchmark dataset for visual question answering (Goyal et al., 2017) that requires models to provide open-ended answers to questions about images.

**[Do Vision & Language Decoders use Images and Text equally? How Self-consistent are their Explanations?](https://proceedings.iclr.cc/paper_files/paper/2025/file/37294f033582ac0064bf90fa557c2573-Paper-Conference.pdf) (as "VQA")**
> The Visual Question Answering (VQA) dataset requires models to provide a free-form natural language answer to a question about a given image.

**[Text4Seg: Reimagining Image Segmentation as Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/04d8c25cbf0d5e1b70d64e672ac92637-Paper-Conference.pdf) (as "VQAv2")**
> A visual question answering benchmark used to assess multimodal question answering performance.

**[QAVA: Query-Agnostic Visual Attack to Large Vision-Language Models](https://aclanthology.org/2025.naacl-long.512.pdf) (as "VQA v2")**
> A benchmark dataset for visual question answering, comprising a large set of images, associated questions, and ten ground-truth answers per question for evaluation.

**[Leveraging Visual Tokens for Extended Text Contexts in Multi-Modal Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/19f10adb6749b0c9f1ff7610bd01d44d-Paper-Conference.pdf) (as "VQAV2")**
> A large-scale visual question answering dataset, which is a more balanced version of the original VQA dataset.

## Relationships

### → VQA-v2
- **Visual question answering** (behaviors tasks) — *measured_by*
  > For visual question-answering, we evaluate zero-shot performance on the test-dev set of VQAv2. (Sec. 4.3).
  - [Grounding Multimodal Large Language Models to the World](https://proceedings.iclr.cc/paper_files/paper/2024/file/e112a4671e8779aa9f640a0e3f81bd26-Paper-Conference.pdf)
- **Visual understanding** (constructs) — *measured_by*
  > We evaluate on the widely used vision-language understanding and generation benchmarks... We report vqa-score on VQAv2... Above results show that X-MoE exhibits enhanced visual information comprehension
  - [Multi-Head Mixture-of-Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/ab05dc8bf36a9f66edbff6992ec86f56-Paper-Conference.pdf)
- **Multimodal understanding** (constructs) — *measured_by*
  > “We evaluate Emu on a broad range of vision-language tasks including image question answering (VQAv2 (Goyal et al., 2017)”
  - [Emu: Generative Pretraining in Multimodality](https://proceedings.iclr.cc/paper_files/paper/2024/file/34d5143080c89a7ce10932c8c5e1907f-Paper-Conference.pdf)
- **Visual perception** (constructs) — *measured_by*
  > GQA and VQA-v2 evaluate the model’s visual perception capabilities on open-ended short answers. (Section 4.1)
  - [Efficient Large Multi-modal Models via Visual Context Compression](https://proceedings.neurips.cc/paper_files/paper/2024/file/871ed095b734818cfba48db6aeb25a62-Paper-Conference.pdf)
- **Fine-grained visual understanding** (constructs) — *measured_by*
  > Tasks that require fine-grained visual understanding and deep reasoning across multiple areas of the image naturally demand a higher number of visual tokens for optimal performance. ... This trend is evident in tasks such as VQAv2, GQA, VizWiz, MMBench, LLaVA-Bench, and MM-Vet.
  - [Matryoshka Query Transformer for Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/59c147c7d4fdb732daea3064eab949bf-Paper-Conference.pdf)
- **In-context learning** (constructs) — *measured_by*
  > The models are evaluated on four-shot and eight-shot in-context learning performance on various captioning benchmarks (COCO (Karpathy test) [Lin et al., 2014] and TextCaps (validation) [Sidorov et al., 2020]) and visual question answering datasets (VQAv2 (validation) [Agrawal et al., 2015], OK-VQA (validation) [Marino et al., 2019], TextVQA (validation) [Singh et al., 2019], and VizWiz (validation) [Gurari et al., 2018]). (Section 4.2)
  - [MINT-1T: Scaling Open-Source Multimodal Data by 10x: A Multimodal Dataset with One Trillion Tokens](https://proceedings.neurips.cc/paper_files/paper/2024/file/40b9196c25fe1d64d87ca3a80a91d0ce-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Long-context understanding** (constructs) — *measured_by*
  > To evaluate the long-context understanding ability, we adopt the few-shot evaluation setting in Flamingo [1]. We report answer accuracy on the OK-VQA [28], TextVQA [29], VizWiz [30], and VQAV2 [31]. (Section 3.1)
  - [Leveraging Visual Tokens for Extended Text Contexts in Multi-Modal Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/19f10adb6749b0c9f1ff7610bd01d44d-Paper-Conference.pdf)
- **Fairness** (constructs) — *measured_by*
  > In VHELM, this is assessed by asking questions drawn from A-OKVQA [34] and VQAv2 [12] in African-American English (AAE)... (Section 3.1)
  - [VHELM: A Holistic Evaluation of Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe2fc7dc60b55ccd8886220b40fb1f74-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Robustness** (constructs) — *measured_by*
  > We introduce typos into A-OKVQA [34] and VQAv2 [12] to test the robustness against text perturbations. (Section 3.1)
  - [VHELM: A Holistic Evaluation of Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe2fc7dc60b55ccd8886220b40fb1f74-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Multimodal reasoning** (constructs) — *measured_by*
  > We conduct extensive experiments on multiple challenging tasks such as arithmetic, knowledge reasoning, and multimodal benchmarks spanning GSM8K, MMLU, SQA, and VQA (Abstract).
  - [Discovering Sparsity Allocation for  Layer-wise Pruning of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/ff997469ac66cf893c4183efeb22212a-Paper-Conference.pdf)
- **Answer generation** (behaviors tasks) — *measured_by*
  > We experiment on samples from i) 3 datasets requiring free-form answer generation – VQA (Goyal et al., 2017), GQA, and GQA balanced (Hudson & Manning, 2019) (Section 4.1).
  - [Do Vision & Language Decoders use Images and Text equally? How Self-consistent are their Explanations?](https://proceedings.iclr.cc/paper_files/paper/2025/file/37294f033582ac0064bf90fa557c2573-Paper-Conference.pdf)
- **Visual reasoning** (constructs) — *measured_by*
  > VQAv2 Goyal et al. (2017) and VizWiz Gurari et al. (2018) test general visual reasoning
  - [EMMA: Empowering Multi-modal Mamba with Structural and Hierarchical Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/3760dbb5835bf0b771c3f83cb27ef2c0-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > we selected several common comprehensive benchmarks and VQA datasets, such as ... VQAv2 ... to evaluate the general capabilities of VLMs (Section 5.1).
  - [ETA: Evaluating Then Aligning Safety of Vision Language Models at Inference Time](https://proceedings.iclr.cc/paper_files/paper/2025/file/06f9fe2915857be2b1e369419a531ad3-Paper-Conference.pdf)
