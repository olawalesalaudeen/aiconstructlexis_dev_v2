# Multimodal alignment
**Type:** Construct  
**Referenced in:** 73 papers  
**Also known as:** Cross-modal alignment, Vision-language alignment, Multi-modal alignment, Cross-modal knowledge alignment, Cross-modality alignment, Cross-modal semantic alignment, Video-language alignment, Image-text alignment, Audio-visual alignment, Visual-language alignment, Visual-text alignment, Image-text modality alignment, Visual-linguistic alignment, Text alignment, Vision-text alignment, Visual-textual token alignment, Visual-semantic consistency, Prompt faithfulness, Audio-visual content consistency, Logical awareness, Modality alignment, Diagram-language alignment, Alignment quality  

## State of the Field

**Definition agreement:** Conflicting. Most papers define multimodal alignment as semantic correspondence or shared-space mapping between different modalities, usually in a model's internal representations or token-level associations. But a substantial minority define it instead as the groundedness and correctness of generated outputs or multimodal reasoning behavior, and a few treat it as the semantic match of the input pair itself, so the construct is being applied to different kinds of things rather than the same phenomenon.

**Space of definitions.** Across papers, the prevailing usage treats multimodal alignment as a model's degree or latent ability to make information from different modalities semantically correspond, usually by mapping them into a shared space or by making their internal representations encode the same information. This framing appears under many names, including cross-modal, vision-language, image-text, modality, and visual-linguistic alignment, and is most often applied to vision and language, though some authors extend it to video and text, audio and video, EEG and clinical text, time series and language, and diagrams and language. A smaller line of work defines it more behaviorally, as outputs that faithfully correspond to an image, video, or prompt, or as integrating and reasoning over different modalities rather than relying on one while ignoring the other.

**Space of facets.** Papers break the construct down at several granularities. Some describe hierarchical versions, especially instance-, temporal-, and perceptive-level video-language alignment, while others focus on token-level, region-level, sub-unit, bidirectional, or temporally selective alignment, and one paper frames alignment quality as the semantic proximity between visual and text token embeddings. The naming is broad: most labels are near-synonyms for semantic matching across modalities, while labels such as prompt faithfulness, audio-visual content consistency, visual-semantic consistency, and logical awareness are used in more specific settings or at specific levels of analysis.

**Space of measurement.** Operationalization is broad: papers link multimodal alignment to 8 measurement instruments and 11 behavioral indicators. The most frequently linked instruments are ImageNet-1k, MS-COCO, CC3M, CHAIR, and CIFAR-10, plus 3 other instruments; these are used through alignment scores on image benchmarks, zero-shot classification, image-text retrieval, text-to-image evaluation, and one judge-based setup that assesses caption fluency and alignment with images. Among behavioral indicators, cross-modal retrieval is explicitly used to evaluate alignment efficacy, while hallucination, object hallucination, image classification, and image-to-text generation recur as linked behaviors, so the measurement space spans both representation matching and output behavior.

**Links.** Several papers claim a causal relationship from multimodal alignment to hallucination and object hallucination, often describing misalignment as yielding outputs not grounded in visual input or favoring text over visual content; multimodal alignment is also reported as related to hallucination in other work. Papers also claim causal relationships from multimodal alignment to multimodal understanding, visual perception, reasoning, image classification, factuality, trustworthiness, visual understanding, object recognition, image-to-text generation, video generation, medical diagnosis, hallucination resistance, time series forecasting, and modality gap. In the other direction, papers claim causal relationships from self-reflection, representation quality, and factuality to multimodal alignment; multimodal alignment is further related to region-level understanding and referring expression segmentation, and no correlational link is reported.

## Sources

**[Bridging Vision and Language Spaces with Assignment Prediction](https://proceedings.iclr.cc/paper_files/paper/2024/file/3f20f2b0315c72201e23512fdbd1ee91-Paper-Conference.pdf) (as "Cross-modal alignment")**
> The latent ability of a model to ensure that representations from different modalities (e.g., vision and language) encode equivalent semantic information, enabling interoperability between them.

**[Kosmos-G: Generating Images in Context with Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/b2fe1ee8d936ac08dd26f2ff58986c8f-Paper-Conference.pdf) (as "Vision-language alignment")**
> The latent ability of a model to integrate and relate visual and linguistic information into a coherent joint representation, enabling understanding of multimodal inputs.

**[Large Multilingual Models Pivot Zero-Shot Multimodal Learning across Languages](https://proceedings.iclr.cc/paper_files/paper/2024/file/bd54a6d4dc60c82ae989154013e17754-Paper-Conference.pdf)**
> The latent ability of a model to connect and integrate information from visual and textual modalities, creating a shared semantic space.

**[What Factors Affect Multi-Modal In-Context Learning? An In-Depth Exploration](https://proceedings.neurips.cc/paper_files/paper/2024/file/deeb4d6bdb5860fd7faf321dd5486d25-Paper-Conference.pdf) (as "Multi-modal alignment")**
> The degree to which a vision-language model forms semantically aligned representations across modalities, enabling effective use of multi-modal context.

**[ShareGPT4Video: Improving Video Understanding and Generation with Better Captions](https://proceedings.neurips.cc/paper_files/paper/2024/file/22a7476e4fd36818777c47e666f61a41-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Modality alignment")**
> The degree to which a model effectively bridges and correlates information between visual and textual representations internally.

**[TIGeR: Unifying Text-to-Image Generation and Retrieval with Large Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/0a9bc5536c595ee44a72b575b258d141-Paper-Conference.pdf) (as "Cross-modal knowledge alignment")**
> The ability to correctly associate textual concepts, especially knowledge-intensive ones like landmarks or species, with their corresponding visual representations.

**[MMed-RAG: Versatile Multimodal RAG System for Medical Vision Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a559a5a8aa5ae6682ced009ad97cdb16-Paper-Conference.pdf) (as "Cross-modality alignment")**
> The extent to which a model correctly integrates and reasons over information from different modalities, such as medical images and text, rather than relying on one while ignoring the other.

**[CHiP: Cross-modal Hierarchical Direct Preference Optimization for Multimodal LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/e1c73e9595126794186536cfbbed012f-Paper-Conference.pdf) (as "Cross-modal semantic alignment")**
> The degree to which a model's internal representations for images and their corresponding textual descriptions are congruent in semantic space.

**[$\mathcalVista\mathcalDPO$: Video Hierarchical Spatial-Temporal Direct Preference Optimization for Large Video Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25g/huang25g.pdf) (as "Video-language alignment")**
> The degree to which a model's textual outputs accurately and coherently correspond to the semantic content of a given video input.

**[Corrupted but Not Broken: Understanding and Mitigating the Negative Impacts of Corrupted Data in Visual Instruction Tuning](https://aclanthology.org/2025.emnlp-main.1317.pdf) (as "Image-text alignment")**
> The latent ability to match visual content with textual instructions and responses so that answers are consistent with the image.

**[Audio-centric Video Understanding Benchmark without Text Shortcut](https://aclanthology.org/2025.emnlp-main.333.pdf) (as "Audio-visual alignment")**
> The latent ability to integrate and synchronize information across auditory and visual modalities, such as linking spoken words to visual characters, objects, or on-screen text, or aligning audio segments with corresponding video frames.

**[Proactive Assistant Dialogue Generation from Streaming Egocentric Videos](https://aclanthology.org/2025.emnlp-main.605.pdf) (as "Visual-language alignment")**
> The degree to which a model integrates visual percepts with linguistic representations to produce contextually grounded responses.

**[METok: Multi-Stage Event-based Token Compression for Efficient Long Video Understanding](https://aclanthology.org/2025.emnlp-main.954.pdf) (as "Visual-text alignment")**
> The latent capacity of a VLLM to identify and leverage correspondences between visual content and textual input, ensuring that relevant visual tokens are aligned with the semantic context of the question or prompt.

**[Seeing the Image: Prioritizing Visual Correlation by Contrastive Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/37294f033582ac0064bf90fa557c2573-Paper-Conference.pdf) (as "Image-text modality alignment")**
> The degree to which a model correctly associates textual concepts with corresponding visual evidence in an image, forming the basis for cross-modal understanding.

**[Boosting Weakly Supervised Referring Image Segmentation via Progressive Comprehension](https://proceedings.neurips.cc/paper_files/paper/2024/file/a97f0218b49bc17ea3f121a0e724f028-Paper-Conference.pdf) (as "Visual-linguistic alignment")**
> The latent ability of a model to correctly associate textual descriptions with corresponding visual regions in an image.

**[VILA-U: a Unified Foundation Model Integrating Visual Understanding and Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/e9e140df6de01afb672cb859d203c307-Paper-Conference.pdf) (as "Text alignment")**
> The degree to which the model's internal representations of visual content are semantically aligned with corresponding textual descriptions.

**[Parrot: Multilingual Visual Instruction Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sun25ad/sun25ad.pdf) (as "Visual-textual token alignment")**
> The degree to which visual features extracted from images are semantically aligned with textual tokens in a given language, enabling coherent multimodal understanding and generation.

**[Towards Rationale-Answer Alignment of LVLMs via Self-Rationale Calibration](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25am/wu25am.pdf) (as "Vision-text alignment")**
> The degree to which a model's textual outputs accurately correspond to the visual elements and context present in an image.

**[FineCLIP: Self-distilled Region-based CLIP for Better Fine-grained Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/3122aaa22b2fe83f9cead1a696f65ceb-Paper-Conference.pdf) (as "Visual-semantic consistency")**
> The degree to which the model's visual representations maintain a coherent and meaningful alignment with their corresponding semantic (textual) representations across different levels of granularity.

**[Who Evaluates the Evaluations? Objectively Scoring Text-to-Image Prompt Coherence Metrics with T2IScoreScore (TS2)](https://proceedings.neurips.cc/paper_files/paper/2024/file/9b9cfd5428153ccfbd4ba34b7e007305-Paper-Conference.pdf) (as "Prompt faithfulness")**
> The degree to which a generated image semantically aligns with and satisfies the requirements of the text prompt it was conditioned on.

**[AGAV-Rater: Adapting Large Multimodal Model for AI-Generated Audio-Visual Quality Assessment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cao25f/cao25f.pdf) (as "Audio-visual content consistency")**
> The latent ability of a model to perceive whether the audio aligns semantically and contextually with the visual content in a video, reflecting coherence between modalities.

**[Context-Alignment: Activating and Enhancing LLMs Capabilities in Time Series](https://proceedings.iclr.cc/paper_files/paper/2025/file/e1de63ec74f40d3234c4e053f3528e18-Paper-Conference.pdf) (as "Logical awareness")**
> The model's latent awareness of logical relationships between time series data and language prompts, ensuring semantic coherence.

**[MAVIS: Mathematical Visual Instruction Tuning with an Automatic Data Engine](https://proceedings.iclr.cc/paper_files/paper/2025/file/db36dcad6baee298a34ffca324b84b09-Paper-Conference.pdf) (as "Diagram-language alignment")**
> The degree to which visual representations of mathematical diagrams are aligned with language representations so the model can correctly interpret diagram content in text form.

**[SEA: Supervised Embedding Alignment for Token-Level Visual-Textual Integration in MLLMs](https://aclanthology.org/2025.emnlp-main.55.pdf) (as "Alignment quality")**
> A quantifiable measure of the semantic correspondence and proximity between visual token embeddings and their corresponding text representations in the language model's input space.

## Relationships

### Multimodal alignment →
- **Hallucination** (behaviors tasks) — *causes*
  > Misalignment between modalities can lead to safety risks such as biased or inappropriate content generation (Gong et al., 2023; Tu et al., 2023) and hallucinations, where outputs are not grounded in visual input (Wang et al., 2023).
  - [Fine-Grained Verifiers: Preference Modeling as Next-token Prediction in Vision-Language Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/7c1f8ca17d2f0bdf82c73abafb577837-Paper-Conference.pdf)
- **ImageNet-1k** (measurements) — *measured_by*
  > We start by reporting and comparing the alignment scores when using CLIP, SharedCLIP, and AlignCLIP models on the ... ImageNet-1K ... test datasets. (Section 4.2)
  - [Mitigate the Gap: Improving Cross-Modal Alignment in CLIP](https://proceedings.iclr.cc/paper_files/paper/2025/file/cc1de06a58ba1db43538a37e076e466d-Paper-Conference.pdf)
- **MS-COCO** (measurements) — *measured_by*
  > such fine-tuning also enhances foundational VLMs’ general image-text alignment capabilities as evident by marked improvements in CLIP’s image-text retrieval performance on COCO. (Section 1)
  - [VisMin: Visual Minimal-Change Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/c3070c3388552a08a3326f0d28dc2af9-Paper-Conference.pdf)
- **Visual perception** (constructs) — *causes*
  > This suggests a misalignment between its visual and language abilities, hindering complex board recognition. (Section 4.1)
  - [Are Large Vision Language Models Good Game Players?](https://proceedings.iclr.cc/paper_files/paper/2025/file/27881a19f100fdbf57f0ba1c3d499b08-Paper-Conference.pdf)
- **Object hallucination** (behaviors tasks) — *causes*
  > this design leads to long-term decay [61] in multimodal alignment... but induces insufficient interactions between visual tokens and instruction tokens, leading to inferior multimodal alignment and object hallucinations in the trained LVLMs (see our experiments in Sec. 3 for details). (Introduction)
  - [Mitigating Object Hallucination via Concentric Causal Attention](https://proceedings.neurips.cc/paper_files/paper/2024/file/a76ed4a8ef522c823d73925e7fff16d4-Paper-Conference.pdf)
- **Multimodal understanding** (constructs) — *causes*
  > “it is required to involve more image-text pairs for multimodal alignment and more image tokens to represent an image for better comprehending the image information.”
  - [Show-o: One Single Transformer to Unify Multimodal Understanding and Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/45f0d179ef7e10eb7366550cd4e574ae-Paper-Conference.pdf)
- **CLIP score** (measurements) — *measured_by*
  > CLIPScore [15] is a popular prompt faithfulness metric based on simple text-image similarity. (Section 4.1)
  - [Who Evaluates the Evaluations? Objectively Scoring Text-to-Image Prompt Coherence Metrics with T2IScoreScore (TS2)](https://proceedings.neurips.cc/paper_files/paper/2024/file/9b9cfd5428153ccfbd4ba34b7e007305-Paper-Conference.pdf)
- **Modality gap** (constructs) — *causes*
  > AlignCLIP increases the cross-modal alignment, and thereby reduce the modality gap.
  - [Mitigate the Gap: Improving Cross-Modal Alignment in CLIP](https://proceedings.iclr.cc/paper_files/paper/2025/file/cc1de06a58ba1db43538a37e076e466d-Paper-Conference.pdf)
- **CC3M** (measurements) — *measured_by*
  > We start by reporting and comparing the alignment scores when using CLIP, SharedCLIP, and AlignCLIP models on the validation sets from CC3M... (Section 4.2)
  - [Mitigate the Gap: Improving Cross-Modal Alignment in CLIP](https://proceedings.iclr.cc/paper_files/paper/2025/file/cc1de06a58ba1db43538a37e076e466d-Paper-Conference.pdf)
- **CIFAR-100** (measurements) — *measured_by*
  > We start by reporting and comparing the alignment scores when using CLIP, SharedCLIP, and AlignCLIP models on the ... CIFAR-100 ... test datasets. (Section 4.2)
  - [Mitigate the Gap: Improving Cross-Modal Alignment in CLIP](https://proceedings.iclr.cc/paper_files/paper/2025/file/cc1de06a58ba1db43538a37e076e466d-Paper-Conference.pdf)
- **CIFAR-10** (measurements) — *measured_by*
  > We start by reporting and comparing the alignment scores when using CLIP, SharedCLIP, and AlignCLIP models on the ... CIFAR-10 test datasets. (Section 4.2)
  - [Mitigate the Gap: Improving Cross-Modal Alignment in CLIP](https://proceedings.iclr.cc/paper_files/paper/2025/file/cc1de06a58ba1db43538a37e076e466d-Paper-Conference.pdf)
- **CHAIR** (measurements) — *measured_by*
  > To better demonstrate how our method enhances vision-language alignment and ensures the generation of high-scoring objects, we visualize the reward distribution of generated objects on the CHAIR benchmark, as depicted in Figure 4.
  - [Fine-Grained Verifiers: Preference Modeling as Next-token Prediction in Vision-Language Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/7c1f8ca17d2f0bdf82c73abafb577837-Paper-Conference.pdf)
- **Reasoning** (constructs) — *causes*
  > As an early model bridging vision and language with an adaptor, LLaVA’s consistent poor performance highlights how such misalignment can impair both perception and reasoning in such tasks. (Section 4.1)
  - [Are Large Vision Language Models Good Game Players?](https://proceedings.iclr.cc/paper_files/paper/2025/file/27881a19f100fdbf57f0ba1c3d499b08-Paper-Conference.pdf)
- **Hallucination resistance** (constructs) — *causes*
  > Due to better cross-modal alignment, our model exhibits lower degrees of hallucination
  - [EMMA: Empowering Multi-modal Mamba with Structural and Hierarchical Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/3760dbb5835bf0b771c3f83cb27ef2c0-Paper-Conference.pdf)
- **Trustworthiness** (constructs) — *causes*
  > This misalignment undermines trustworthiness, posing challenges for reliable applications of these models in high-stakes medical scenarios (Section 1).
  - [HSCR: Hierarchical Self-Contrastive Rewarding for Aligning Medical Vision Language Models](https://aclanthology.org/2025.acl-long.679.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > GPT-4V (Achiam et al., 2023b), which assesses the fluency and alignment of captions with the given images.
  - [What If We Recaption Billions of Web Images with LLaMA-3?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25ch/li25ch.pdf)
- **Visual understanding** (constructs) — *causes*
  > "train abstract-grained visual adapters using high-quality image-text pairs to align visual embeddings with textual embeddings, thereby enabling the model to accurately describe medical visual content."
  - [HealthGPT: A Medical Large Vision-Language Model for Unifying Comprehension and Generation via Heterogeneous Knowledge Adaptation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lin25n/lin25n.pdf)
- **Training efficiency** (constructs) — *causes*
  > “To further strengthen the alignment between Vision and Language modalities, we present a new Bidirectional Vision-Language Alignment module (BVLA-M) within the Vision-Language Aligner. This module is designed to improve the alignment of vision queries with text embeddings, thereby enhancing training efficiency and overall performance.”
  - [Open-Det: An Efficient Learning Framework for Open-Ended Detection](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cao25h/cao25h.pdf)
- **Factuality** (constructs) — *causes*
  > However, Medical LVLMs (Med-LVLMs) encounter factuality issues due to modality misalignment, where the models prioritize textual knowledge over visual input, causing hallucinations that conflict with medical images. (Abstract)
  - [MMedPO: Aligning Medical Vision-Language Models with Clinical-Aware Multimodal Preference Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhu25v/zhu25v.pdf)

### → Multimodal alignment
- **Self-reflection** (behaviors tasks) — *causes*
  > The tool use, planning, and reflection steps operate cyclically to become an agentic workflow where audio signals are gradually aligned to visual content.
  - [Aligning Audio-Visual Joint Representations with an Agentic Workflow](https://proceedings.neurips.cc/paper_files/paper/2024/file/6c0ff499edc529c7d8c9f05c7c0ccb82-Paper-Conference.pdf)
- **Representation quality** (constructs) — *causes*
  > The improvement on MMStar, which emphasizes fine-grained multimodal alignment and reasoning under instruction-following settings, demonstrates DS-VLM’s ability to preserve semantic coherence across modalities through enhanced visual feature quality. (Section 4.2)
  - [DS-VLM: Diffusion Supervision Vision Language Model](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sun25p/sun25p.pdf)

### Associated with
- **Region-level understanding** (constructs)
  > we investigated the multi-modal alignment process in region-level context across intermediate layers by calculating the Wasserstein-2 distance between each layer’s region-encoded token [mask] and the last language token. (Section 3.2)
  - [Unleashing Region Understanding in Intermediate Layers for MLLM-based Referring Expression Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/da76884a4e003ad0de97804ec4578e5b-Paper-Conference.pdf)
- **Referring expression segmentation** (behaviors tasks)
  > Despite remarkable progress, most existing RIS works [7, 58, 27, 26, 21, 5] rely heavily on pixel-level ground-truth masks to learn visual-linguistic alignment. (Section 1)
  - [Boosting Weakly Supervised Referring Image Segmentation via Progressive Comprehension](https://proceedings.neurips.cc/paper_files/paper/2024/file/a97f0218b49bc17ea3f121a0e724f028-Paper-Conference.pdf)
- **Language modeling** (behaviors tasks)
  > "we consider preference tuning as a decision-making process undertaken by an agent. In this context, after observing the input text and image, a VLLM policy πθ takes actions by predicting the next token."
  - [Fine-Grained Verifiers: Preference Modeling as Next-token Prediction in Vision-Language Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/7c1f8ca17d2f0bdf82c73abafb577837-Paper-Conference.pdf)
- **Cross-modal retrieval** (behaviors tasks)
  > In our study, we evaluate pretrained models’ cross-modal alignment efficacy by conducting both zero-shot text-to-image and image-to-text retrieval tasks in multiple hierarchical levels. (Section 4.2)
  - [Procedure-Aware Surgical Video-language Pretraining with Hierarchical Knowledge Augmentation](https://proceedings.neurips.cc/paper_files/paper/2024/file/de0f2a9943b7bd060e5c10c2fb2654f3-Paper-Conference.pdf)
