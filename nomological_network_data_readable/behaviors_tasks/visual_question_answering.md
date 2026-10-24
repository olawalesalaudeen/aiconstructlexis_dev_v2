# Visual question answering
**Type:** Behavior  
**Referenced in:** 292 papers  
**Also known as:** Visual Question Answering, Image question answering, Vision question answering, Object analysis, GUI question answering, Region-text interleaved VQA, Embedded image question answering, Simple question answering, Single-image question answering, General visual question answering, Scene text question answering, Referring reasoning, Vision-language task performance  

## State of the Field

**Space of definitions.** Across the papers, the dominant framing is an image-question task: models receive visual input, most often a single image, plus a natural-language question, and are expected to produce a textual answer based on the visual content. Several definitions make the image-question pair explicit and describe the task as requiring joint use of image and text inputs, while some papers specify short answers or autoregressive answers. A smaller line of work broadens the visual source to one or more images, 3D scenes, videos, webpages or website screenshots, embedded images, generated images, or medical images, and one paper asks for both an answer and an explanation.

**Variants.** Most variants stay close to general image question answering, sometimes split into single-image QA, simple QA, text-related VQA, or image-agnostic versus image-specific prompts. Smaller strands study 3D visual question answering, region-text interleaved VQA, GUI question answering, embedded image question answering, and scene text question answering. Other papers specialize the same pattern to medical, object-focused, region-focused, or algorithmic-puzzle settings.

**Space of elicitation and scores.** Papers link this behavior to 45 measurement instruments, with VQA-v2, GQA, VizWiz, TextVQA, and OK-VQA appearing most often. Elicitation is usually an image plus question, sometimes with a short-answer prompt, but several papers use multiple-choice formats with one ground-truth answer, standard four-option questions, or yes/no object-presence questions. Scoring is commonly reported as benchmark accuracy, and one paper uses a pretrained LLM to check whether a prediction is semantically equivalent to the ground truth; other instruments span science- and knowledge-oriented VQA, medical and document VQA, region-focused evaluation, and video QA.

**What it is taken as evidence of.** The prevailing usage treats visual question answering as evidence of multimodal understanding and visual perception: papers describe it as a multimodal understanding task, use image or image/video question answering to measure multimodal understanding, and in one case use VQA accuracy as a proxy for perception capability. Papers link it to 15 constructs overall; after those two, the most frequent links are to visual grounding and visual understanding, usually as related constructs, though individual papers claim causal relationships from visual grounding to improved VQA performance and from visual understanding to the ability to handle VQA tasks. Another paper claims a causal relationship from visual question-answering instructions to brain alignment, so the papers do not converge on a single construct that this behavior reflects.

## Sources

**[An Image Is Worth 1000 Lies: Transferability of Adversarial Images across Prompts on Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/674ad201bc8fa74b3c9979230aa0c63b-Paper-Conference.pdf)**
> Generating answers to natural language questions about visual content in images or 3D scenes.

**[A Hitchhiker's Guide to Fine-Grained Face Forgery Detection Using Common Sense Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/059d2b9188cdb7ae00f4d78cc9469704-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Visual Question Answering")**
> Answering questions about an image by generating natural language responses based on visual and text inputs.

**[Task Me Anything](https://proceedings.neurips.cc/paper_files/paper/2024/file/237ffa9a473eff1c66d085dba7f813ba-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Image question answering")**
> The task of providing a text-based answer to a question about a static image, typically in a multiple-choice format.

**[Automated Multi-level Preference for MLLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/2e3073cb65608aa887bb945c382e687f-Paper-Conference.pdf) (as "Vision question answering")**
> Answering natural language questions based on visual input provided to the model.

**[ClawMachine: Learning to Fetch Visual Tokens for Referential Comprehension](https://proceedings.iclr.cc/paper_files/paper/2025/file/b1abd42eb5aace7f0ad9ba9cfb029f54-Paper-Conference.pdf) (as "Region-text interleaved VQA")**
> The model answers visual questions whose inputs and outputs can contain interleaved image-region tokens and text.

**[BigDocs: An Open Dataset for Training Multimodal Models on Document and Code Tasks](https://proceedings.iclr.cc/paper_files/paper/2025/file/c4659191ae1e89faa09864c23fa91f31-Paper-Conference.pdf) (as "GUI question answering")**
> The task of answering questions about the content, elements, and layout of a website based on its screenshot.

**[MMAD: A Comprehensive Benchmark for Multimodal Large Language Models in Industrial Anomaly Detection](https://proceedings.iclr.cc/paper_files/paper/2025/file/d91ffbe9c126765755ff52d36b715683-Paper-Conference.pdf) (as "Object analysis")**
> The observable task of answering detailed questions about an object's components, structure, appearance, or purpose.

**[Harnessing Webpage UIs for Text-Rich Visual Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/2da53cd1abdae59150e35f4693834f32-Paper-Conference.pdf) (as "Embedded image question answering")**
> Answering specific questions about the visual content of an embedded image in a webpage.

**[DAMO: Decoding by Accumulating Activations Momentum for Mitigating Hallucinations in Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/8f0f23417ce1d00212a7c85c2560c392-Paper-Conference.pdf) (as "Simple question answering")**
> The task of providing a direct, often factual, answer to a straightforward question about an image.

**[Visual Haystacks: A Vision-Centric Needle-In-A-Haystack Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/a264726ebd222124514a32bf0143b83d-Paper-Conference.pdf) (as "Single-image question answering")**
> The observable task of answering a textual question based on information contained within a single image provided as input.

**[Redundancy Principles for MLLMs Benchmarks](https://aclanthology.org/2025.acl-long.612.pdf) (as "General visual question answering")**
> Answering broad visual questions not specific to mathematical or scientific content, contributing noise when used in math-focused evaluation.

**[TVQACML: Benchmarking Text-Centric Visual Question Answering in Multilingual Chinese Minority Languages](https://aclanthology.org/2025.emnlp-main.705.pdf) (as "Scene text question answering")**
> Answering questions about naturally occurring text in real-world scenes such as signs, menus, and labels, requiring both text recognition and contextual understanding.

**[Draw-and-Understand: Leveraging Visual Prompts to Enable MLLMs to Comprehend What You Want](https://proceedings.iclr.cc/paper_files/paper/2025/file/727658ad24ba28e02dffd379bdc69448-Paper-Conference.pdf) (as "Referring reasoning")**
> An observable task, evaluated on Ferret-Bench, where the model performs reasoning based on information within a visually prompted region.

**[Should VLMs be Pre-trained with Image Data?](https://proceedings.iclr.cc/paper_files/paper/2025/file/34a5f638617ce32700e235e50dff9c8a-Paper-Conference.pdf) (as "Vision-language task performance")**
> Producing correct answers or outputs on image-based benchmarks that require interpreting visual inputs.

## Relationships

### Visual question answering →
- **VQA-v2** (measurements) — *measured_by*
  > For visual question-answering, we evaluate zero-shot performance on the test-dev set of VQAv2. (Sec. 4.3).
  - [Grounding Multimodal Large Language Models to the World](https://proceedings.iclr.cc/paper_files/paper/2024/file/e112a4671e8779aa9f640a0e3f81bd26-Paper-Conference.pdf)
- **GQA** (measurements) — *measured_by*
  > We first quantitatively evaluate the zero-shot multi-modal understanding capacity of LaVIT on ... Visual Question Answering (VQAv2 (Goyal et al., 2017), OKVQA (Marino et al., 2019), GQA (Hudson & Manning, 2019), VizWiz (Gurari et al., 2018)). (Section 4.1)
  - [Unified Language-Vision Pretraining in LLM with Dynamic Discrete Visual Tokenization](https://proceedings.iclr.cc/paper_files/paper/2024/file/e1762b64958760f7bfabe3a7062d007f-Paper-Conference.pdf)
- **VizWiz** (measurements) — *measured_by*
  > We first quantitatively evaluate the zero-shot multi-modal understanding capacity of LaVIT on ... Visual Question Answering (VQAv2 (Goyal et al., 2017), OKVQA (Marino et al., 2019), GQA (Hudson & Manning, 2019), VizWiz (Gurari et al., 2018)). (Section 4.1)
  - [Unified Language-Vision Pretraining in LLM with Dynamic Discrete Visual Tokenization](https://proceedings.iclr.cc/paper_files/paper/2024/file/e1762b64958760f7bfabe3a7062d007f-Paper-Conference.pdf)
- **TextVQA** (measurements) — *measured_by*
  > ...evaluated on... visual question answering datasets (VQAv2 (validation) [Agrawal et al., 2015], OK-VQA (validation) [Marino et al., 2019], TextVQA (validation) [Singh et al., 2019], and VizWiz (validation) [Gurari et al., 2018]). (Section 4.2)
  - [MINT-1T: Scaling Open-Source Multimodal Data by 10x: A Multimodal Dataset with One Trillion Tokens](https://proceedings.neurips.cc/paper_files/paper/2024/file/40b9196c25fe1d64d87ca3a80a91d0ce-Paper-Datasets_and_Benchmarks_Track.pdf)
- **OK-VQA** (measurements) — *measured_by*
  > We first quantitatively evaluate the zero-shot multi-modal understanding capacity of LaVIT on ... Visual Question Answering (VQAv2 (Goyal et al., 2017), OKVQA (Marino et al., 2019), GQA (Hudson & Manning, 2019), VizWiz (Gurari et al., 2018)). (Section 4.1)
  - [Unified Language-Vision Pretraining in LLM with Dynamic Discrete Visual Tokenization](https://proceedings.iclr.cc/paper_files/paper/2024/file/e1762b64958760f7bfabe3a7062d007f-Paper-Conference.pdf)
- **ScienceQA** (measurements) — *measured_by*
  > we perform Visual Question Answering (VQA) on ScienceQA (Lu et al., 2022) (Section 4.1)
  - [Octavius: Mitigating Task Interference in MLLMs via LoRA-MoE](https://proceedings.iclr.cc/paper_files/paper/2024/file/6b3b238c5786536dc9f835760e2dba02-Paper-Conference.pdf)
- **MMBench** (measurements) — *measured_by*
  > MMBench [59] Multi-choice VQA on a diverse set of topics (Table A2)
  - [Accelerating Pre-training of Multimodal LLMs via Chain-of-Sight](https://proceedings.neurips.cc/paper_files/paper/2024/file/8a54a80ffc2834689ffdd0920202018e-Paper-Conference.pdf)
- **POPE** (measurements) — *measured_by*
  > VQA (ScienceQA (SQA) (Lu et al., 2022), POPE (Li et al., 2023e), GQA (Hudson & Manning, 2019))
  - [Fine-Grained Verifiers: Preference Modeling as Next-token Prediction in Vision-Language Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/7c1f8ca17d2f0bdf82c73abafb577837-Paper-Conference.pdf)
- **SEED-Bench** (measurements) — *measured_by*
  > SEED-Bench [43] Multi-choice VQA on a diverse set of topics (Table A2)
  - [Accelerating Pre-training of Multimodal LLMs via Chain-of-Sight](https://proceedings.neurips.cc/paper_files/paper/2024/file/8a54a80ffc2834689ffdd0920202018e-Paper-Conference.pdf)
- **MME** (measurements) — *measured_by*
  > ...we also evaluate MIRAGE on conventional VQA tasks, including the RetVQA multi-image QA (Penamakuri et al., 2023) and several single-image QA tasks, such as VQA-v2 (Goyal et al., 2017), GQA (Hudson & Manning, 2019), TextVQA (Singh et al., 2019), POPE (Li et al., 2023c), MMB (Liu et al., 2024c), MMB-CN (Liu et al., 2024c), MME (Fu et al., 2023), SEED-Bench (Li et al., 2023a), and MM-Vet (Yu et al., 2023b). (Section 5)
  - [Visual Haystacks: A Vision-Centric Needle-In-A-Haystack Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/a264726ebd222124514a32bf0143b83d-Paper-Conference.pdf)
- **MM-Vet** (measurements) — *measured_by*
  > MMVet [101] evaluates integrated capabilities in visual question answering. (Section 3.2)
  - [WildVision: Evaluating Vision-Language Models in the Wild with Human Preferences](https://proceedings.neurips.cc/paper_files/paper/2024/file/563991b5c8b45fe75bea42db738223b2-Paper-Datasets_and_Benchmarks_Track.pdf)
- **ChartQA** (measurements) — *measured_by*
  > In this section, we present the experiment results of STIC across seven visual question answering (VQA) benchmarks. We consider the widely used benchmarks for LVLM evaluation across different domains including: ScienceQA... TextVQA... ChartQA
  - [Enhancing Large Vision Language Models with Self-Training on Image Comprehension](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed45d6a03de84cc650cae0655f699356-Paper-Conference.pdf)
- **LLaVA-Bench-in-the-Wild** (measurements) — *measured_by*
  > In this section, we present the experiment results of STIC across seven visual question answering (VQA) benchmarks. We consider the widely used benchmarks for LVLM evaluation across different domains including: ScienceQA... TextVQA... ChartQA... LLaVA-Bench
  - [Enhancing Large Vision Language Models with Self-Training on Image Comprehension](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed45d6a03de84cc650cae0655f699356-Paper-Conference.pdf)
- **MMMU** (measurements) — *measured_by*
  > MMMU [104] VQA on a diverse set of topics (Table A2)
  - [Accelerating Pre-training of Multimodal LLMs via Chain-of-Sight](https://proceedings.neurips.cc/paper_files/paper/2024/file/8a54a80ffc2834689ffdd0920202018e-Paper-Conference.pdf)
- **MathVista** (measurements) — *measured_by*
  > In this section, we present the experiment results of STIC across seven visual question answering (VQA) benchmarks. We consider the widely used benchmarks for LVLM evaluation across different domains including: ScienceQA... TextVQA... ChartQA... LLaVA-Bench... MMBench... MM-Vet... and MathVista
  - [Enhancing Large Vision Language Models with Self-Training on Image Comprehension](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed45d6a03de84cc650cae0655f699356-Paper-Conference.pdf)
- **IconQA** (measurements) — *measured_by*
  > Task Type: Visual Question Answering (VQA), Dataset Name: IconQA (Lu et al., 2021), Task Description: Diagram Understanding VQA (Table 1)
  - [Dynamic Mixture of Curriculum LoRA Experts for Continual Multimodal Instruction Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ge25d/ge25d.pdf)
- **A-OKVQA** (measurements) — *measured_by*
  > Focusing on three visual question answering tasks, we show that REPARE can result in a 3.85% (absolute) increase in zero-shot accuracy on VQAv2, 6.41%, and 7.94% points increase on A-OKVQA, and VizWiz respectively. (Sec. 1)
  - [Rephrase, Augment, Reason: Visual Grounding of Questions for Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/eef6cb60fd59b32d35718e176b4b08d6-Paper-Conference.pdf)
- **SQA** (measurements) — *measured_by*
  > we evaluate our method for pruning language models on various visual question-answering and reasoning benchmarks, including VQAv2 [17], SQA [37], and VQA [47]. (Section 7.3).
  - [Discovering Sparsity Allocation for  Layer-wise Pruning of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/ff997469ac66cf893c4183efeb22212a-Paper-Conference.pdf)
- **MMStar** (measurements) — *measured_by*
  > These benchmarks include visual question answering datasets GQA (Hudson and Manning, 2019), MME (Fu et al., 2024), MMBench (Liu et al., 2024), and MMStar (Chen et al., 2024b) (Table 5)
  - [VisiPruner: Decoding Discontinuous Cross-Modal Dynamics for Efficient Multimodal LLMs](https://aclanthology.org/2025.emnlp-main.955.pdf)
- **CVQA** (measurements) — *measured_by*
  > “We propose CVQA, a large-scale multilingual VQA benchmark”
  - [CVQA: Culturally-diverse Multilingual Visual Question Answering Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/1568882ba1a50316e87852542523739c-Paper-Datasets_and_Benchmarks_Track.pdf)
- **SLAKE** (measurements) — *measured_by*
  > We adopt three widely used VQA datasets for evaluation: ... (ii) SLAKE (Liu et al., 2021): A bilingual (English and Chinese) medical VQA dataset. (Section 4.2)
  - [VividMed: Vision Language Model with Versatile Visual Grounding for Medicine](https://aclanthology.org/2025.naacl-long.89.pdf)
- **VQA-RAD** (measurements) — *measured_by*
  > We adopt three widely used VQA datasets for evaluation: (i) VQA-RAD (Lau et al., 2018): A radiology VQA dataset comprising 315 images and 2,248 QA pairs. (Section 4.2)
  - [VividMed: Vision Language Model with Versatile Visual Grounding for Medicine](https://aclanthology.org/2025.naacl-long.89.pdf)
- **PathVQA** (measurements) — *measured_by*
  > PathVQA and Q-VQA assess VQA performance (Section 4.2)
  - [EAGLE: Expert-Guided Self-Enhancement for Preference Alignment in Pathology Large Vision-Language Model](https://aclanthology.org/2025.acl-long.711.pdf)
- **InstructBLIP** (measurements) — *measured_by*
  > We resort to MLLM as our VQA model owing to its remarkable capabilities of visual and language understanding and reasoning, which has been demonstrated in a wide range of visual-language tasks.
  - [VDC: Versatile Data Cleanser based on Visual-Linguistic Inconsistency by Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/518046d86bbc41a0707727c38301ad8e-Paper-Conference.pdf)
- **ScanQA** (measurements) — *measured_by*
  > ...and both ScanQA [2] and SQA3D [38] for visual question answering.
  - [Chat-Scene: Bridging 3D Scene and Large Language Models with Object Identifiers](https://proceedings.neurips.cc/paper_files/paper/2024/file/cebbd24f1e50bcb63d015611fe0fe767-Paper-Conference.pdf)
- **MMBench-CN** (measurements) — *measured_by*
  > ...we also evaluate MIRAGE on conventional VQA tasks, including the RetVQA multi-image QA (Penamakuri et al., 2023) and several single-image QA tasks, such as VQA-v2 (Goyal et al., 2017), GQA (Hudson & Manning, 2019), TextVQA (Singh et al., 2019), POPE (Li et al., 2023c), MMB (Liu et al., 2024c), MMB-CN (Liu et al., 2024c), MME (Fu et al., 2023), SEED-Bench (Li et al., 2023a), and MM-Vet (Yu et al., 2023b). (Section 5)
  - [Visual Haystacks: A Vision-Centric Needle-In-A-Haystack Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/a264726ebd222124514a32bf0143b83d-Paper-Conference.pdf)
- **VisDial** (measurements) — *measured_by*
  > In order to assess multimodal vision and language capabilities of DEEM , we conduct evaluation against current SOTA LMMs ... across several tasks, including ... visual question answering on ... VisDial (Das et al., 2017) (Section 3.2).
  - [DEEM: Diffusion models serve as the eyes of large language models for image perception](https://proceedings.iclr.cc/paper_files/paper/2025/file/a8399aace3dfa6dfb8b635117748c561-Paper-Conference.pdf)
- **MP-DocVQA** (measurements) — *measured_by*
  > We collect question-document pairs from a series of VQA datasets, targeting different document types: MP-DocVQA (Tito et al., 2023) for industrial documents... (Sec. 3.3)
  - [VisRAG: Vision-based Retrieval-augmented Generation on Multi-modality Documents](https://proceedings.iclr.cc/paper_files/paper/2025/file/3640a1997a4c9571cea9db2c82e1fc35-Paper-Conference.pdf)
- **ArXivQA** (measurements) — *measured_by*
  > We collect question-document pairs from a series of VQA datasets, targeting different document types: ... ArXivQA (Li et al., 2024b), ChartQA (Masry et al., 2022), InfographicsVQA (Mathew et al., 2022), and PlotQA (Methani et al., 2020) for various figure types... (Sec. 3.3)
  - [VisRAG: Vision-based Retrieval-augmented Generation on Multi-modality Documents](https://proceedings.iclr.cc/paper_files/paper/2025/file/3640a1997a4c9571cea9db2c82e1fc35-Paper-Conference.pdf)
- **SlideVQA** (measurements) — *measured_by*
  > We collect question-document pairs from a series of VQA datasets, targeting different document types: ... and SlideVQA (Tanaka et al., 2023) for presentation slides. (Sec. 3.3)
  - [VisRAG: Vision-based Retrieval-augmented Generation on Multi-modality Documents](https://proceedings.iclr.cc/paper_files/paper/2025/file/3640a1997a4c9571cea9db2c82e1fc35-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > For VQA, we use a pretrained LLM to determine whether the prediction has semantically equivalent to the ground-truth while for captioning, we use GPT-3.5 to score the quality of the generated caption on a scale of score 1-10 (details in appendix). (Section 2.2)
  - [VL-ICL Bench: The Devil in the Details of Multimodal In-Context Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/f8a2070082ad05b4deeff4ffb4312a6f-Paper-Conference.pdf)
- **Brain alignment** (constructs) — *causes*
  > Visual question-answering instructions, such as 'are there people in this image?' and 'foreground and background of the image,' contribute significantly to brain alignment in higher visual regions
  - [Correlating instruction-tuning (in multimodal models) with vision-language processing (in the brain)](https://proceedings.iclr.cc/paper_files/paper/2025/file/e52e4de8689a9955b6d3ff421d019387-Paper-Conference.pdf)
- **MSVD-QA** (measurements) — *measured_by*
  > Visual Question Answering (VQA): We evaluate the performance of visual question answering on the following benchmark datasets:... We also use MSVD-QA
  - [Teaching Human Behavior Improves Content Understanding Abilities Of VLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/f0d8e47e50fa0ef219c61d6fb9f2a4b3-Paper-Conference.pdf)
- **ST-VQA** (measurements) — *measured_by*
  > We conduct extensive experiments on 9 benchmarks from 4 categories, including TextVQA (Singh et al., 2019), ST-VQA (Biten et al., 2019), TallyVQA (Acharya et al., 2019), and GQA Hudson & Manning (2019) for detailed visual question answering (Section 1)
  - [CogCoM: A Visual Language Model with Chain-of-Manipulations Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/1dcee1cd6890ab7fcdf173ec10526da9-Paper-Conference.pdf)
- **MMVP** (measurements) — *measured_by*
  > General VQA: Assessing visual perception and reasoning abilities through single-image question answering, including MMBench (Liu et al., 2025b), MME (Fu et al., 2023), and MMVP (Zhong et al., 2023). (Section 4.5).
  - [CoMemo: LVLMs Need Image Context with Image Memory](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25bn/liu25bn.pdf)
- **OCR-VQA** (measurements) — *measured_by*
  > Task Type: Visual Question Answering (VQA), Dataset Name: OCR-VQA (Mishra et al., 2019), Task Description: Text Understanding VQA (Table 1)
  - [Dynamic Mixture of Curriculum LoRA Experts for Continual Multimodal Instruction Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ge25d/ge25d.pdf)
- **PMC-VQA** (measurements) — *measured_by*
  > Task Type: Visual Question Answering (VQA), Dataset Name: PMC-VQA (Zhang et al., 2024a), Task Description: Medical VQA (Table 1)
  - [Dynamic Mixture of Curriculum LoRA Experts for Continual Multimodal Instruction Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ge25d/ge25d.pdf)
- **HallusionBench** (measurements) — *measured_by*
  > Additionally, we evaluate performance on specific-domain VQA tasks, which include ChartQA (Masry et al., 2022), LLaVABench (Liu et al., 2024c), and HallusionBench (Guan et al., 2023). (Section 4.1)
  - [Towards Rationale-Answer Alignment of LVLMs via Self-Rationale Calibration](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25am/wu25am.pdf)

### → Visual question answering
- **Visual understanding** (constructs) — *causes*
  > Large vision-language models (LVLMs) have demonstrated remarkable image understanding and dialogue capabilities, allowing them to handle a variety of visual question answering tasks. (ABSTRACT)
  - [Tracking the Copyright of Large Vision-Language Models through Parameter Learning Adversarial Images](https://proceedings.iclr.cc/paper_files/paper/2025/file/d368eba3fb546ae5d868dae2ecb17200-Paper-Conference.pdf)
- **Personalization** (constructs) — *causes*
  > After being personalized, our method (Yo’LLaVA) can: ... (2) support visual question answering about the subject (e.g., given a new photo, one can ask about <sks>’s location); (Section 3)
  - [Yo'LLaVA: Your Personalized Language and Vision Assistant](https://proceedings.neurips.cc/paper_files/paper/2024/file/48088756ec0ce6ba362bddc7ebeb3915-Paper-Conference.pdf)

### Associated with
- **Multimodal understanding** (constructs)
  > Researchers (Liu et al., 2024a; Zhu et al., 2023; Dai et al., 2024; Alayrac et al., 2022; Chen et al., 2023) have attempted to build a bridge between large language models and image encoders through simple mapping modules, and have already made significant progress in multimodal understanding tasks such as visual question answering (Section 1).
  - [DEEM: Diffusion models serve as the eyes of large language models for image perception](https://proceedings.iclr.cc/paper_files/paper/2025/file/a8399aace3dfa6dfb8b635117748c561-Paper-Conference.pdf)
- **Visual perception** (constructs)
  > Visual perception is assessed through image captioning, where VLMs produce descriptions of the input images, or visual-question answering (VQA), where VLMs are asked to answer questions pertaining to the images. (Section 3.1)
  - [VHELM: A Holistic Evaluation of Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe2fc7dc60b55ccd8886220b40fb1f74-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Hallucination** (behaviors tasks)
  > This issue is particularly prevalent in tasks such as image captioning and visual question answering (Liu et al., 2023a; Yin et al., 2023; Zhou et al., 2023b; Zhu et al., 2024a; Gunjal et al., 2024), where maintaining coherence between modalities is critical. (Section 2)
  - [DAMO: Decoding by Accumulating Activations Momentum for Mitigating Hallucinations in Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/8f0f23417ce1d00212a7c85c2560c392-Paper-Conference.pdf)
- **Visual dialogue** (behaviors tasks)
  > most recently, VQA also become one of the most powerful benchmarks for evaluating task and dataset independent visual dialog. (Section 5)
  - [FlexCap: Describe Anything in Images in Controllable Detail](https://proceedings.neurips.cc/paper_files/paper/2024/file/c91b6f7e0152b7a95ee777e987fe811e-Paper-Conference.pdf)
- **Multimodal reasoning** (constructs)
  > Large vision-language models (LVLMs) [31, 53] have achieved outstanding performance in a large number of multi-modal reasoning tasks such as visual question answering [45, 28], embodied instruction following [1] and robot navigation [2, 16], which are benefited from numerous network parameters and vast training data. (Section 1)
  - [Q-VLM: Post-training Quantization for Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/cffbaf4f47546ece96bb42c0edda40ee-Paper-Conference.pdf)
- **Relational reasoning** (constructs)
  > This question tests the model’s multimodal understanding capabilities, such as visual perception and relational reasoning. (Introduction)
  - [LongVideoBench: A Benchmark for Long-context Interleaved Video-Language Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/329ad516cf7a6ac306f29882e9c77558-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Visual Genome** (measurements)
  > For VQA data, we synthesize hard negatives from Visual Genome (VG100K) dataset (Krishna et al., 2016), which contains 108,077 images with over 1.7 million question-answer pairs. (Section 4)
  - [TLDR: Token-Level Detective Reward Model for Large Vision Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/70217f4d06e57a2395f03b4bc136361a-Paper-Conference.pdf)
- **Visual grounding** (constructs)
  > Several recent works have explored ways to improve the visual localization capability of MLLMs for visual question answering, including chain-of-thought (Shao et al., 2024; Liu et al., 2024b), tool-using (Wu and Xie, 2023), and visual programming approaches (Surís et al., 2023; Gupta and Kembhavi, 2023). (Sec. 2)
  - [MLLMs Know Where to Look: Training-free Perception of Small Visual Details with Multimodal LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/aaa0ac4253da75faf9b0dc0dda062612-Paper-Conference.pdf)
- **Versatility** (constructs)
  > Our MedRegA not only enables three region-centric tasks, but also achieves the best performance for visual question answering, report generation and medical image classification over 8 modalities, showcasing significant versatility. (Abstract)
  - [Interpretable Bilingual Multimodal Large Language Model for Diverse Biomedical Tasks](https://proceedings.iclr.cc/paper_files/paper/2025/file/414fd191b3246a19a55741b938380136-Paper-Conference.pdf)
- **Object hallucination** (behaviors tasks)
  > “we compare the performance of MLLMs on visual question-answering tasks using both object hallucination (AMBER) and general vision-language (TextVQA) benchmarks.”
  - [Mitigating Object Hallucination in MLLMs via Data-augmented Phrase-level Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/b73228d026ef49bfa49f95b7e330513e-Paper-Conference.pdf)
- **Visual instruction following** (behaviors tasks)
  > "The visual instruction tuning is performed in a multitask setting, including VQA ... region-level VQA ..."
  - [MiLoRA: Harnessing Minor Singular Components for Parameter-Efficient LLM Finetuning](https://aclanthology.org/2025.naacl-long.248.pdf)
- **Compositional reasoning** (constructs)
  > In many compositional reasoning tasks, interactions are key and marginal attributions are insufficient. We illustrate this using an image of a dog playing with a basketball and prompting the LLaVA-NeXT-Mistral-7B model (Liu et al., 2023) with “What is shown in this image?”. (Sec. 7.2)
  - [SPEX: Scaling Feature Interaction Explanations for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/kang25a/kang25a.pdf)
- **Conversational ability** (constructs)
  > We evaluate ChatVLA across three dimensions: conversational ability (visual question answering), general multimodal understanding, and general robot control. (Section 1)
  - [ChatVLA: Unified Multimodal Understanding and Robot Control with Vision-Language-Action Model](https://aclanthology.org/2025.emnlp-main.273.pdf)
- **Stereotyping** (constructs)
  > Images, along with prompts, are presented to the VLAs in a visual question answering (VQA) format, and responses are analyzed to discern systematic distributional differences for females and males. (Section 1)
  - [Revealing and Reducing Gender Biases in Vision and Language Assistants (VLAs)](https://proceedings.iclr.cc/paper_files/paper/2025/file/189b0101331a7a87bf7686d8bb20e12d-Paper-Conference.pdf)
