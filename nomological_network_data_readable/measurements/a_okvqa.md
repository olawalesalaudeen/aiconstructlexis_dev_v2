# A-OKVQA
**Type:** Measurement  
**Referenced in:** 18 papers  
**Also known as:** AOKVQA  

## State of the Field

**What it is.** Most commonly, papers treat A-OKVQA as a visual question answering dataset or benchmark for image-grounded questions that require knowledge beyond direct visual evidence, variously described as external real-world knowledge, world knowledge, or commonsense knowledge about objects or actions in the image. Some definitions add format details, describing image-question pairs in open-ended and multiple-choice settings, while another specifies four candidate answers with one correct option and three distractors, and one paper notes that the images come from MSCOCO. A smaller line of work describes it more broadly as a general-purpose VQA benchmark with mostly large objects or larger visual concepts.

**What it is claimed to measure.** Papers use A-OKVQA to measure a broad mix of targets rather than a single construct. It is linked to 8 constructs and 2 behavioral indicators: the prevailing measured target is Visual question answering, and individual papers also report it as measuring Commonsense knowledge, Commonsense reasoning, Cultural bias, and Fairness, with 4 other constructs and one other behavioral indicator linked elsewhere. These measurement claims usually follow the benchmark's knowledge-focused framing, with papers describing it as covering questions that rely on outside knowledge or world knowledge.

**Space of uses.** Papers usually place it inside multi-benchmark evaluations, often alongside GQA, OK-VQA, VQAv2, InfoSeek, and CVQA. They position it as a complex or knowledge-based visual reasoning task, as a reference benchmark, or as a targeted probe, for example to capture underspecification tied to lack of reasoning or world knowledge. Some papers also build derived evaluations from it by translating questions and answers into other languages, introducing typos, or drawing on it for unseen-category generalization sets.

**Concerns raised.** Explicit concerns are limited, but one paper uses A-OKVQA to examine Western bias in question answering and describes the benchmark as containing MSCOCO images queried for Western concepts from ImageNet, with questions and four candidate answers written by English speakers on Mechanical Turk.

## Sources

**[CRAFT: Customizing LLMs by Creating and Retrieving from Specialized Toolsets](https://proceedings.iclr.cc/paper_files/paper/2024/file/af31604708f3e44b4de9fdfa6dcaa9d1-Paper-Conference.pdf)**
> A visual question answering dataset where questions require external, real-world knowledge about objects or actions depicted in the image.

**[MLLMs Know Where to Look: Training-free Perception of Small Visual Details with Multimodal LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/aaa0ac4253da75faf9b0dc0dda062612-Paper-Conference.pdf) (as "AOKVQA")**
> A general-purpose visual question answering benchmark used to evaluate performance on larger visual concepts.

## Relationships

### → A-OKVQA
- **Visual question answering** (behaviors tasks) — *measured_by*
  > Focusing on three visual question answering tasks, we show that REPARE can result in a 3.85% (absolute) increase in zero-shot accuracy on VQAv2, 6.41%, and 7.94% points increase on A-OKVQA, and VizWiz respectively. (Sec. 1)
  - [Rephrase, Augment, Reason: Visual Grounding of Questions for Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/eef6cb60fd59b32d35718e176b4b08d6-Paper-Conference.pdf)
- **Commonsense knowledge** (constructs) — *measured_by*
  > InfoSeek and A-OKVQA Rely on Commonsense Knowledge (RCK) (Table 2).
  - [SearchLVLMs: A Plug-and-Play Framework for Augmenting Large Vision-Language Models by Searching Up-to-Date Internet Knowledge](https://proceedings.neurips.cc/paper_files/paper/2024/file/76954b4a44e158e738b4c64494977c6a-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > The reason behind selecting GQA, InfoSeek, and A-OKVQA is to evaluate the generalization capability of our framework across datasets that do not necessitate up-to-date knowledge (Section 5.1).
  - [SearchLVLMs: A Plug-and-Play Framework for Augmenting Large Vision-Language Models by Searching Up-to-Date Internet Knowledge](https://proceedings.neurips.cc/paper_files/paper/2024/file/76954b4a44e158e738b4c64494977c6a-Paper-Conference.pdf)
- **Fairness** (constructs) — *measured_by*
  > In VHELM, this is assessed by asking questions drawn from A-OKVQA [34] and VQAv2 [12] in African-American English (AAE)... (Section 3.1)
  - [VHELM: A Holistic Evaluation of Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe2fc7dc60b55ccd8886220b40fb1f74-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Multilingual ability** (constructs) — *measured_by*
  > We augment A-OKVQA [34] by translating the questions and answers from English to either Chinese, Hindi, Spanish, or Swahili to test whether the VLMs are invariant to VQA in different languages. (Section 3.1)
  - [VHELM: A Holistic Evaluation of Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe2fc7dc60b55ccd8886220b40fb1f74-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Robustness** (constructs) — *measured_by*
  > We introduce typos into A-OKVQA [34] and VQAv2 [12] to test the robustness against text perturbations. (Section 3.1)
  - [VHELM: A Holistic Evaluation of Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe2fc7dc60b55ccd8886220b40fb1f74-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Object hallucination** (behaviors tasks) — *measured_by*
  > we... examined object hallucination using the SEEM-annotated MSCOCO and A-OKVQA datasets from POPE. (Section 4)
  - [DAMO: Decoding by Accumulating Activations Momentum for Mitigating Hallucinations in Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/8f0f23417ce1d00212a7c85c2560c392-Paper-Conference.pdf)
- **Cultural bias** (constructs) — *measured_by*
  > “To measure Western bias in question answering, we use A-OKVQA and CVQA (Schwenk et al., 2022; Romero et al., 2024).”
  - [See It from My Perspective: How Language Affects Cultural Bias in Image Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c0fabe372177d2aded596be2d3b4544-Paper-Conference.pdf)
