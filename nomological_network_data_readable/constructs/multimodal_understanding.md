# Multimodal understanding
**Type:** Construct  
**Referenced in:** 103 papers  
**Also known as:** Cross-modal understanding, Multi-modal understanding, Multimodal comprehension, Vision-language comprehension, Vision-language understanding, General multimodal ability, General multimodal capabilities, Multimodal capability, Multimodal Capability, Audio-visual understanding, Multimodal information comprehension, Visual-language understanding, Cross-modality comprehension, Trimodal understanding, Image-text understanding  

## State of the Field

**Definition agreement:** Consensus. Most papers define multimodal understanding as a model's latent ability to jointly process, integrate, and reason over information from multiple modalities, especially visual and textual inputs, in order to answer queries or perform tasks. A few papers broaden the examples to audio, video, tables, emoji, or sensor data, or emphasize alignment or unified representations, but these are variations in scope and emphasis rather than different phenomena.

**Space of definitions.** Across the surveyed work, the dominant framing treats multimodal understanding as a model-level ability or capacity to integrate and interpret information across modalities, most often vision and language, for tasks such as question answering, captioning, or responding to image-based queries. Most definitions stay close to image-text integration, though a smaller line broadens the scope to other modality mixtures or document elements, including audio or speech, sensor signals, emoji, and figures, tables, or equations. A further minority uses broader labels such as general multimodal capability or ability, sometimes tying the construct to prediction or generation settings, so the main disagreement is about scope rather than the basic idea of cross-modal integration.

**Space of facets.** Paper usage is not terminologically uniform: overlapping labels include multimodal comprehension, vision-language understanding, cross-modal understanding, audio-visual understanding, and trimodal understanding, alongside other capability and comprehension variants. Some papers carve out setting-specific versions, such as STEM problem solving, scientific-document understanding over text, figures, tables, and equations, or screenshot, sensor, and culturally grounded queries. Several papers also contrast understanding with multimodal generation or creation, describing systems that first interpret multimodal inputs, often into textual responses, and in other cases jointly model understanding and generation.

**Space of measurement.** Operationalization is dominated by benchmark-based evaluation: papers link the construct to 25 measurement instruments and 5 behavioral indicators, most often MMBench, MMMU, MME, VQA-v2, and MM-Vet. These evaluations usually instantiate the construct through image, video, or document question answering and captioning, and some are explicitly described as assessing multimodal understanding and reasoning capabilities or general multimodal tasks. This largely follows the dominant definitions of integrating multimodal inputs, though some papers define the construct more broadly than the recurring benchmark suites capture.

**Links.** Beyond measurement, papers link it to 9 constructs. The most recurrent claim is a causal relationship from multimodal alignment to multimodal understanding; single-paper claims also report incoming causal links from visual grounding, image reconstruction, personalization, and task interference, while outgoing causal links connect multimodal understanding to personalization and to downstream task or generation behavior. Related links connect it to adaptability, cognitive reasoning, compositional generalization, and longer-context or temporal understanding, as well as to familiar vision-language task families, and no correlational link is recorded.

## Sources

**[DreamLLM: Synergistic Multimodal Comprehension and Creation](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a7a22152cd21f0ca3c0f8139bb32905-Paper-Conference.pdf) (as "Multimodal comprehension")**
> The latent ability to understand and reason over combined text and image inputs, integrating information across modalities to perform tasks like visual question answering and captioning.

**[Towards Unified Multi-Modal Personalization: Large Vision-Language Models for Generative Recommendation and Beyond](https://proceedings.iclr.cc/paper_files/paper/2024/file/297a7a54da76d95f02b04d957a53c7ba-Paper-Conference.pdf) (as "Multi-modal understanding")**
> The capacity to integrate and interpret information from multiple modalities such as images, text, IDs, and tabular attributes when making predictions or generating outputs.

**[Emu: Generative Pretraining in Multimodality](https://proceedings.iclr.cc/paper_files/paper/2024/file/34d5143080c89a7ce10932c8c5e1907f-Paper-Conference.pdf)**
> The latent ability to integrate and interpret information across vision and language modalities to perform tasks such as question answering and captioning.

**[MiniGPT-4: Enhancing Vision-Language Understanding with Advanced Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/50623630a2372839c078474efa6c0cb8-Paper-Conference.pdf) (as "Vision-language understanding")**
> The latent ability to integrate and interpret information from both visual and linguistic modalities, enabling coherent responses to image-based queries.

**[Vision-Language Foundation Models as Effective Robot Imitators](https://proceedings.iclr.cc/paper_files/paper/2024/file/71639c317fb0bf398835627b4418693e-Paper-Conference.pdf) (as "Vision-language comprehension")**
> The latent ability to understand and align information from both visual and textual modalities to perform complex tasks.

**[Guiding Instruction-based Image Editing via Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/f0e91b1314fa5eabf1d7ef6d1561ecec-Paper-Conference.pdf) (as "Cross-modal understanding")**
> The underlying capacity of a multimodal model to integrate and interpret information from both visual and linguistic inputs to form coherent, context-sensitive responses or actions.

**[Aligned Better, Listen Better for Audio-Visual Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/0c79d6ed1788653643a1ac67b6ea32a7-Paper-Conference.pdf) (as "Audio-visual understanding")**
> The latent ability to integrate auditory and visual information to comprehend videos accurately across multimodal and unimodal settings.

**[Harnessing Webpage UIs for Text-Rich Visual Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/2da53cd1abdae59150e35f4693834f32-Paper-Conference.pdf) (as "General multimodal capabilities")**
> A broad set of skills for processing and reasoning about information from multiple modalities, such as text and images, in non-specialized contexts.

**[How Does Vision-Language Adaptation Impact the Safety of Vision Language Models?](https://proceedings.iclr.cc/paper_files/paper/2025/file/84d286e32bbee8fa3a86ee9c50e00081-Paper-Conference.pdf) (as "Multimodal capability")**
> The latent capacity to process and respond appropriately to image-based or other non-text inputs after vision-language adaptation.

**[PerturboLLaVA: Reducing Multimodal Hallucinations with Perturbative Visual Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/9a8eb202c060b7d81f5889631cbcd47e-Paper-Conference.pdf) (as "General multimodal ability")**
> The overall proficiency of a model across a wide range of tasks that require processing and integrating both visual and textual information.

**[See What You Are Told: Visual Attention Sink in Large Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/da8a39bc39ae1c89dd6ebb1e3bcbb3f3-Paper-Conference.pdf) (as "Multimodal Capability")**
> The general ability of the model to process and integrate information from multiple modalities, such as vision and language.

**[REMEDY: Recipe Merging Dynamics in Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4065a881baab1744bfba208a4361bbb1-Paper-Conference.pdf) (as "Visual-language understanding")**
> The model's latent ability to comprehend and integrate information from both visual (images) and textual modalities.

**[MMIE: Massive Multimodal Interleaved Comprehension Benchmark for Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4072543747a14bbed76284cf2c04b9e9-Paper-Conference.pdf) (as "Multimodal information comprehension")**
> The ability to correctly interpret and extract meaning from queries that contain a mix of text and images.

**[SegLLM: Multi-round Reasoning Segmentation with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/8e125fb53198f2143716d969584d0a28-Paper-Conference.pdf) (as "Cross-modality comprehension")**
> The latent ability to jointly understand visual scenes and natural-language prompts in order to ground language in image content.

**[MIO: A Foundation Model on Multimodal Tokens](https://aclanthology.org/2025.emnlp-main.255.pdf) (as "Trimodal understanding")**
> The ability to comprehend and reason over inputs that simultaneously combine text, image, and speech modalities.

**[TripletCLIP:  Improving Compositional Reasoning of CLIP via Synthetic Vision-Language Negatives](https://proceedings.neurips.cc/paper_files/paper/2024/file/39781da4b5d05bc2908ce08e43bc6404-Paper-Conference.pdf) (as "Image-text understanding")**
> The model's general ability to comprehend the semantic relationship and alignment between visual and textual information.

## Relationships

### Multimodal understanding →
- **MMBench** (measurements) — *measured_by*
  > Additionally, we conducted a zero-shot evaluation on the recently developed benchmarks of MMBench and MM-Vet to assess the model’s performance in complex multimodal tasks. (Section 4.1)
  - [DreamLLM: Synergistic Multimodal Comprehension and Creation](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a7a22152cd21f0ca3c0f8139bb32905-Paper-Conference.pdf)
- **MMMU** (measurements) — *measured_by*
  > For capabilities evaluation, we follow [34] to evaluate multimodal models on LLaVA-Wild for visual chat capability and MMMU [71] for multimodal understanding capability. (Section 4.2)
  - [Improving Alignment and Robustness with Circuit Breakers](https://proceedings.neurips.cc/paper_files/paper/2024/file/97ca7168c2c333df5ea61ece3b3276e1-Paper-Conference.pdf)
- **MME** (measurements) — *measured_by*
  > we adopt these captions during the pre-training stage and follow the setup of LLaVA-1.5 [37] on various ... multi-modality understanding benchmarks for evaluation, such as ... MME [16]... (Section 4.1)
  - [DenseFusion-1M: Merging Vision Experts for Comprehensive Multimodal Perception](https://proceedings.neurips.cc/paper_files/paper/2024/file/20ffc2b42c7de4a1960cfdadf305bbe2-Paper-Datasets_and_Benchmarks_Track.pdf)
- **VQA-v2** (measurements) — *measured_by*
  > “We evaluate Emu on a broad range of vision-language tasks including image question answering (VQAv2 (Goyal et al., 2017)”
  - [Emu: Generative Pretraining in Multimodality](https://proceedings.iclr.cc/paper_files/paper/2024/file/34d5143080c89a7ce10932c8c5e1907f-Paper-Conference.pdf)
- **VizWiz** (measurements) — *measured_by*
  > “We evaluate Emu on a broad range of vision-language tasks including image question answering (VQAv2 (Goyal et al., 2017), OKVQA (Marino et al., 2019), VizWiz (Gurari et al., 2018))”
  - [Emu: Generative Pretraining in Multimodality](https://proceedings.iclr.cc/paper_files/paper/2024/file/34d5143080c89a7ce10932c8c5e1907f-Paper-Conference.pdf)
- **POPE** (measurements) — *measured_by*
  > we adopt these captions during the pre-training stage and follow the setup of LLaVA-1.5 [37] on various ... multi-modality understanding benchmarks for evaluation, such as ... POPE [34]... (Section 4.1)
  - [DenseFusion-1M: Merging Vision Experts for Comprehensive Multimodal Perception](https://proceedings.neurips.cc/paper_files/paper/2024/file/20ffc2b42c7de4a1960cfdadf305bbe2-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MM-Vet** (measurements) — *measured_by*
  > Additionally, we conducted a zero-shot evaluation on the recently developed benchmarks of MMBench and MM-Vet to assess the model’s performance in complex multimodal tasks. (Section 4.1)
  - [DreamLLM: Synergistic Multimodal Comprehension and Creation](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a7a22152cd21f0ca3c0f8139bb32905-Paper-Conference.pdf)
- **OK-VQA** (measurements) — *measured_by*
  > “We evaluate Emu on a broad range of vision-language tasks including image question answering (VQAv2 (Goyal et al., 2017), OKVQA (Marino et al., 2019)”
  - [Emu: Generative Pretraining in Multimodality](https://proceedings.iclr.cc/paper_files/paper/2024/file/34d5143080c89a7ce10932c8c5e1907f-Paper-Conference.pdf)
- **GQA** (measurements) — *measured_by*
  > Following LLaVA (Liu et al., 2024b), we evaluate the multimodal understanding capabilities of Show-o on POPE, MME, Flickr30k, VQAv2, GQA, and MMMU benchmarks. (Section 4.1)
  - [Show-o: One Single Transformer to Unify Multimodal Understanding and Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/45f0d179ef7e10eb7366550cd4e574ae-Paper-Conference.pdf)
- **Video question answering** (behaviors tasks) — *causes*
  > These models also exhibit strong multimodal understanding (Lin et al., 2023; Li et al., 2024; Zhang et al., 2023b), capable of answering questions about unseen content, thus opening up new avenues for improving VideoQA.
  - [ReasVQA: Advancing VideoQA with Imperfect Reasoning Process](https://aclanthology.org/2025.naacl-long.82.pdf)
- **SEED-Bench** (measurements) — *measured_by*
  > we adopt these captions during the pre-training stage and follow the setup of LLaVA-1.5 [37] on various ... multi-modality understanding benchmarks for evaluation, such as ... SEED [30]... (Section 4.1)
  - [DenseFusion-1M: Merging Vision Experts for Comprehensive Multimodal Perception](https://proceedings.neurips.cc/paper_files/paper/2024/file/20ffc2b42c7de4a1960cfdadf305bbe2-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MS-COCO** (measurements) — *measured_by*
  > “We evaluate Emu on a broad range of vision-language tasks including image captioning (MS-COCO (Chen et al., 2015))”
  - [Emu: Generative Pretraining in Multimodality](https://proceedings.iclr.cc/paper_files/paper/2024/file/34d5143080c89a7ce10932c8c5e1907f-Paper-Conference.pdf)
- **GAIA** (measurements) — *measured_by*
  > It requires various agent capabilities, including reasoning, multi-modal understanding, web browsing, and coding. (§4.4)
  - [OpenHands: An Open Platform for AI Software Developers as Generalist Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/a4b6ad6b48850c0c331d1259fc66a69c-Paper-Conference.pdf)
- **Flickr30k** (measurements) — *measured_by*
  > Following LLaVA (Liu et al., 2024b), we evaluate the multimodal understanding capabilities of Show-o on POPE, MME, Flickr30k, VQAv2, GQA, and MMMU benchmarks. (Section 4.1)
  - [Show-o: One Single Transformer to Unify Multimodal Understanding and Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/45f0d179ef7e10eb7366550cd4e574ae-Paper-Conference.pdf)
- **MMBench-CN** (measurements) — *measured_by*
  > We conduct experiments on MME (Fu et al., 2023), MMB (Liu et al., 2023c), and MMBCN. Each encompasses various sub-tasks, enabling comprehensive evaluation of multimodal understanding and reasoning capabilities. (Section 4.1)
  - [LLaVA-MoD: Making LLaVA Tiny via MoE-Knowledge Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/1a2131ebe25bd55e4fc734126ea583ed-Paper-Conference.pdf)
- **VisDial** (measurements) — *measured_by*
  > In order to assess multimodal vision and language capabilities of DEEM , we conduct evaluation against current SOTA LMMs ... across several tasks, including ... VisDial (Das et al., 2017)
  - [DEEM: Diffusion models serve as the eyes of large language models for image perception](https://proceedings.iclr.cc/paper_files/paper/2025/file/a8399aace3dfa6dfb8b635117748c561-Paper-Conference.pdf)
- **MMMU-Pro** (measurements) — *measured_by*
  > MMMU-Pro is designed to more accurately and rigorously assess a model’s true multimodal understanding and reasoning capabilities across a wide range of academic disciplines. (Section 1)
  - [MMMU-Pro: A More Robust Multi-discipline Multimodal Understanding Benchmark](https://aclanthology.org/2025.acl-long.736.pdf)
- **MMStar** (measurements) — *measured_by*
  > MMStar benchmarks 6 core capabilities and 18 detailed axes, aiming to evaluate LVLMs’ multi-modal capacities with carefully balanced and purified samples. (Abstract)
  - [Are We on the Right Way for Evaluating Large Vision-Language Models?](https://proceedings.neurips.cc/paper_files/paper/2024/file/2f8ee6a3d766b426d2618e555b5aeb39-Paper-Conference.pdf)
- **Multimodal generation** (behaviors tasks) — *causes*
  > incorporating multimodal understanding data enhances the model’s comprehension of object details, including attributes such as color and quantity, thereby improving its generation capability. (Section 5.2.2)
  - [UnifiedVisual: A Framework for Constructing Unified Vision-Language Datasets](https://aclanthology.org/2025.emnlp-main.1572.pdf)
- **RealWorldQA** (measurements) — *measured_by*
  > To evaluate multimodal understanding capabilities, we conduct evaluations on six widely-used benchmarks: RealworldQA (XAI, 2024), MMVP (Tong et al., 2024b), ScienceQA (Lu et al., 2022), VStar (Wu and Xie, 2023), MME (Fu et al., 2024), and POPE (Li et al., 2023b). (Section 4.2)
  - [UnifiedVisual: A Framework for Constructing Unified Vision-Language Datasets](https://aclanthology.org/2025.emnlp-main.1572.pdf)
- **MMVP** (measurements) — *measured_by*
  > To evaluate multimodal understanding capabilities, we conduct evaluations on six widely-used benchmarks: RealworldQA (XAI, 2024), MMVP (Tong et al., 2024b), ScienceQA (Lu et al., 2022), VStar (Wu and Xie, 2023), MME (Fu et al., 2024), and POPE (Li et al., 2023b). (Section 4.2)
  - [UnifiedVisual: A Framework for Constructing Unified Vision-Language Datasets](https://aclanthology.org/2025.emnlp-main.1572.pdf)
- **ScienceQA** (measurements) — *measured_by*
  > To evaluate multimodal understanding capabilities, we conduct evaluations on six widely-used benchmarks: RealworldQA (XAI, 2024), MMVP (Tong et al., 2024b), ScienceQA (Lu et al., 2022), VStar (Wu and Xie, 2023), MME (Fu et al., 2024), and POPE (Li et al., 2023b). (Section 4.2)
  - [UnifiedVisual: A Framework for Constructing Unified Vision-Language Datasets](https://aclanthology.org/2025.emnlp-main.1572.pdf)
- **LLaVA-Bench-in-the-Wild** (measurements) — *measured_by*
  > LLaVA Bench (Li et al., 2024) assesses multimodal understanding and reasoning capabilities, with overall accuracy reported across all tasks (Section 4.1).
  - [Mitigating Hallucinations in Large Vision-Language Models via Entity-Centric Multimodal Preference Optimization](https://aclanthology.org/2025.emnlp-main.982.pdf)
- **DRISHTIKON** (measurements) — *measured_by*
  > “offering a robust testbed to advance culturally aware, multimodally competent language technologies”
  - [DRISHTIKON: A Multimodal Multilingual Benchmark for Testing Language Models' Understanding on Indian Culture](https://aclanthology.org/2025.emnlp-main.68.pdf)

### → Multimodal understanding
- **Multimodal alignment** (constructs) — *causes*
  > “it is required to involve more image-text pairs for multimodal alignment and more image tokens to represent an image for better comprehending the image information.”
  - [Show-o: One Single Transformer to Unify Multimodal Understanding and Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/45f0d179ef7e10eb7366550cd4e574ae-Paper-Conference.pdf)
- **Visual grounding** (constructs) — *causes*
  > visual grounding is crucial for robust multimodal understanding. (Section 1)
  - [Cambrian-1: A Fully Open, Vision-Centric Exploration of Multimodal LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/9ee3a664ccfeabc0da16ac6f1f1cfe59-Paper-Conference.pdf)
- **Image reconstruction** (behaviors tasks) — *causes*
  > In this way, LMMs are required to preserve every detail of input images, thereby enhancing multimodal comprehension capabilities and reducing hallucinations. (Figure 1)
  - [Reconstructive Visual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/259a5df46308d60f8454bd4adcc3b462-Paper-Conference.pdf)
- **Task interference** (constructs) — *causes*
  > “task interference, where competing control and understanding tasks degrade performance when trained jointly.”
  - [ChatVLA: Unified Multimodal Understanding and Robot Control with Vision-Language-Action Model](https://aclanthology.org/2025.emnlp-main.273.pdf)

### Associated with
- **Visual question answering** (behaviors tasks)
  > Researchers (Liu et al., 2024a; Zhu et al., 2023; Dai et al., 2024; Alayrac et al., 2022; Chen et al., 2023) have attempted to build a bridge between large language models and image encoders through simple mapping modules, and have already made significant progress in multimodal understanding tasks such as visual question answering (Section 1).
  - [DEEM: Diffusion models serve as the eyes of large language models for image perception](https://proceedings.iclr.cc/paper_files/paper/2025/file/a8399aace3dfa6dfb8b635117748c561-Paper-Conference.pdf)
- **Image captioning** (behaviors tasks)
  > While conceptually simple, this allows us to explore vision-language understanding tasks such as captioning and VQA, as well as text-to-image generation. (Section 3.3)
  - [JetFormer: An autoregressive generative model of raw images and text](https://proceedings.iclr.cc/paper_files/paper/2025/file/d5a8e37f38a08c68162452dcba89ae9c-Paper-Conference.pdf)
- **Adaptability** (constructs)
  > This strategy is underpinned by the understanding that the evolution from LLMs to MLLMs can be conceptualized as a domain adaptation process, i.e., transitioning from text-centric to multi-modal understanding. (Section 1)
  - [Tuning LayerNorm in Attention: Towards Efficient Multi-Modal LLM Finetuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/7cc16e8635e6f27c295355bd214ef8d8-Paper-Conference.pdf)
- **Compositional generalization** (constructs)
  > Many of the advanced vision-language capabilities demonstrated by GPT-4 can be understood as compositional skills rooted in two foundational skills: image understanding and language generation. (Section 5)
  - [MiniGPT-4: Enhancing Vision-Language Understanding with Advanced Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/50623630a2372839c078474efa6c0cb8-Paper-Conference.pdf)
- **Long-context understanding** (constructs)
  > Integrating multi-modal understanding with long-context capability is important. (Section 1)
  - [LongVILA: Scaling Long-Context Visual Language Models for Long Videos](https://proceedings.iclr.cc/paper_files/paper/2025/file/2e163450c1ae3167832971e6da29f38d-Paper-Conference.pdf)
- **Temporal understanding** (constructs)
  > Specifically, temporal understanding issues refer to multimodal information comprehension and cross-modality coherence, while reasoning issues involve complex reasoning and generation capabilities. (Section 5)
  - [MMIE: Massive Multimodal Interleaved Comprehension Benchmark for Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4072543747a14bbed76284cf2c04b9e9-Paper-Conference.pdf)
- **Cognitive reasoning** (constructs)
  > Cognition and Reasoning. This dimension encompasses data inference, cross-modal understanding, trend prediction, causal analysis, scenario-based decision support, and hypothesis analysis. (Section 3.3).
  - [FinMME: Benchmark Dataset for Financial Multi-Modal Reasoning Evaluation](https://aclanthology.org/2025.acl-long.1426.pdf)
