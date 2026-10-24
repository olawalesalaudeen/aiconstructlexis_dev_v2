# Multimodal reasoning
**Type:** Construct  
**Referenced in:** 73 papers  
**Also known as:** Cross-modal reasoning, Multi-modal reasoning, X-modal reasoning, Cross-modal consistency reasoning, Audio-visual reasoning, Contrastive cross-modal reasoning, Image understanding and reasoning, Content reasoning  

## State of the Field

**Definition agreement:** Consensus. Most papers define multimodal reasoning as a model's ability to integrate information from multiple modalities, usually text and visual inputs, and use that combined information to make inferences or solve tasks. A few papers narrow this to specific settings such as semantic alignment judgments, video or audio-text cases, or grounded response generation, but these are mostly framed as instances or applications of the same core cross-modal reasoning ability rather than different phenomena.

**Space of definitions.** Most papers describe multimodal reasoning as a latent ability or capacity to integrate information from multiple modalities, usually text and images, so a model can draw conclusions, make inferences, or solve complex tasks. Some definitions broaden the modality set to tables and figures, audio and text, audio and video, or text, image, video, and audio. A smaller line of work narrows the construct to judging semantic consistency or alignment between modalities, especially text and images, or to contrastively selecting the modality that best matches a prompt; one source instead defines it through observable, contextually grounded responses rather than a latent capacity.

**Space of facets.** Papers use several overlapping labels for partly specialized versions of the construct, including cross-modal reasoning, multi-modal reasoning, X-modal reasoning, cross-modal consistency reasoning, contrastive cross-modal reasoning, content reasoning, audio-visual reasoning, and image understanding and reasoning. These variants organize the construct by modality pair or reasoning operation: some emphasize visual-text alignment, some multi-step reasoning over visual and textual inputs, some document-level reasoning over text, tables, and figures, and some audio-language or audio-visual inference. Multimodal reasoning is also described alongside visual understanding, code generation, and multimodal understanding, and one paper contrasts it with language reasoning.

**Space of measurement.** Operationalization is benchmark-heavy: papers link multimodal reasoning to 16 measurement instruments and 4 behavioral indicators. Among the most frequently linked instruments are MMMU, MMBench, MathVista, ScienceQA, and AI2D, all used as benchmarks or datasets for multimodal or image-text reasoning, with additional benchmarks used more selectively. Direct task-level operationalizations also appear in counting and character-recognition tasks, and some instruments narrow the construct to settings such as multimodal mathematical reasoning or chart-to-code generation while still treating cross-modal integration as the target ability.

**Links.** Outside direct measurement, papers claim causal relationships from multimodal reasoning to visual grounding and to robustness. One paper says multimodal chain-of-thought visual prompts help models understand queries, infer targets, and generate region proposals that enhance visual grounding, and another reports better stability and robustness. A smaller set of papers also relates multimodal reasoning to visual question answering and to text-to-speech synthesis.

## Sources

**[VDC: Versatile Data Cleanser based on Visual-Linguistic Inconsistency by Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/518046d86bbc41a0707727c38301ad8e-Paper-Conference.pdf) (as "Cross-modal reasoning")**
> The latent ability to infer whether visual content and textual labels are semantically consistent by combining evidence across modalities.

**[LLM-CXR: Instruction-Finetuned LLM for CXR Image Understanding and Generation](https://proceedings.iclr.cc/paper_files/paper/2024/file/7f70331dbe58ad59d83941dfa7d975aa-Paper-Conference.pdf)**
> The capacity to draw conclusions and make inferences by integrating information from both visual and textual inputs in a coherent manner.

**[LLaMA-Adapter: Efficient Fine-tuning of Large Language Models with Zero-initialized Attention](https://proceedings.iclr.cc/paper_files/paper/2024/file/c196239c5f9481e0db2755f31fe4585f-Paper-Conference.pdf) (as "Multi-modal reasoning")**
> The capacity of a model to process, integrate, and reason about information from multiple modalities, such as text and images, to perform complex tasks.

**[LLMs Can Evolve Continually on Modality for $\mathbb{X}$-Modal Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/5942d10ae51b6bd07648e54df07ef9cd-Paper-Conference.pdf) (as "X-modal reasoning")**
> The ability of a model to reason and perform tasks that involve integrating information from multiple, different modalities, such as text, image, video, and audio.

**[MMFakeBench: A Mixed-Source Multimodal Misinformation Detection Benchmark for LVLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/d6c53fe062716387ff0df73cc53de60c-Paper-Conference.pdf) (as "Cross-modal consistency reasoning")**
> The latent ability to judge the semantic alignment and consistency between textual and visual modalities.

**[video-SALMONN-o1: Reasoning-enhanced Audio-visual Large Language Model](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sun25x/sun25x.pdf) (as "Audio-visual reasoning")**
> The model's ability to perform logical inference by integrating and jointly processing information from both auditory and visual streams in a video.

**[Contra4: Evaluating Contrastive Cross-Modal Reasoning in Audio, Video, Image, and 3D](https://aclanthology.org/2025.emnlp-main.1288.pdf) (as "Contrastive cross-modal reasoning")**
> The ability to reason contrastively across multiple modalities to select the one that best satisfies a natural language prompt.

**[Seeing is Believing, but How Much? A Comprehensive Analysis of Verbalized Calibration in Vision-Language Models](https://aclanthology.org/2025.emnlp-main.74.pdf) (as "Image understanding and reasoning")**
> Producing responses that demonstrate comprehension and logical inference based on visual inputs, such as diagrams or scenes.

**[Lumen: Unleashing Versatile Vision-Centric Capabilities of Large Multimodal Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/946ecab300b0695fe24b53a92e632935-Paper-Conference.pdf) (as "Content reasoning")**
> The model's ability to perform logical inference based on the visual and textual content provided.

## Relationships

### Multimodal reasoning →
- **MMMU** (measurements) — *measured_by*
  > “On more complex multimodal reasoning benchmarks, the MINT-1T model outperforms OBELICS on MMMU but performs worse on Mantis-Eval.”
  - [MINT-1T: Scaling Open-Source Multimodal Data by 10x: A Multimodal Dataset with One Trillion Tokens](https://proceedings.neurips.cc/paper_files/paper/2024/file/40b9196c25fe1d64d87ca3a80a91d0ce-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MMBench** (measurements) — *measured_by*
  > LLaMA-Adapter showcases higher tuning efficiency with competitive reasoning capacity on MME (Fu et al., 2023), MMBench (Liu et al., 2023c), and LVLM-eHub (Xu et al., 2023) benchmarks. (Section 1)
  - [LLaMA-Adapter: Efficient Fine-tuning of Large Language Models with Zero-initialized Attention](https://proceedings.iclr.cc/paper_files/paper/2024/file/c196239c5f9481e0db2755f31fe4585f-Paper-Conference.pdf)
- **ScienceQA** (measurements) — *measured_by*
  > “We directly utilize ScienceQA’s multi-modal training set to fine-tune LLaMA-Adapter, and conduct in-domain testing.”
  - [LLaMA-Adapter: Efficient Fine-tuning of Large Language Models with Zero-initialized Attention](https://proceedings.iclr.cc/paper_files/paper/2024/file/c196239c5f9481e0db2755f31fe4585f-Paper-Conference.pdf)
- **MathVista** (measurements) — *measured_by*
  > We perform experiments on two widely used multimodal mathematical reasoning benchmarks: MATHVISTA (Lu et al., 2024b) and WE-MATH (Qiao et al., 2024). (Section 4.1)
  - [Progressive Multimodal Reasoning via Active Retrieval](https://aclanthology.org/2025.acl-long.180.pdf)
- **MME** (measurements) — *measured_by*
  > LLaMA-Adapter showcases higher tuning efficiency with competitive reasoning capacity on MME (Fu et al., 2023), MMBench (Liu et al., 2023c), and LVLM-eHub (Xu et al., 2023) benchmarks. (Section 1)
  - [LLaMA-Adapter: Efficient Fine-tuning of Large Language Models with Zero-initialized Attention](https://proceedings.iclr.cc/paper_files/paper/2024/file/c196239c5f9481e0db2755f31fe4585f-Paper-Conference.pdf)
- **MM-NIAH** (measurements) — *measured_by*
  > Our benchmark includes three types of evaluation tasks: multimodal retrieval, counting, and reasoning. (Abstract)
  - [Needle In A Multimodal Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/24a8968affe71ffe4067d022b9d16566-Paper-Datasets_and_Benchmarks_Track.pdf)
- **SQA** (measurements) — *measured_by*
  > We conduct extensive experiments on multiple challenging tasks such as arithmetic, knowledge reasoning, and multimodal benchmarks spanning GSM8K, MMLU, SQA, and VQA (Abstract).
  - [Discovering Sparsity Allocation for  Layer-wise Pruning of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/ff997469ac66cf893c4183efeb22212a-Paper-Conference.pdf)
- **VQA-v2** (measurements) — *measured_by*
  > We conduct extensive experiments on multiple challenging tasks such as arithmetic, knowledge reasoning, and multimodal benchmarks spanning GSM8K, MMLU, SQA, and VQA (Abstract).
  - [Discovering Sparsity Allocation for  Layer-wise Pruning of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/ff997469ac66cf893c4183efeb22212a-Paper-Conference.pdf)
- **Mantis-Eval** (measurements) — *measured_by*
  > “On more complex multimodal reasoning benchmarks, the MINT-1T model outperforms OBELICS on MMMU but performs worse on Mantis-Eval.”
  - [MINT-1T: Scaling Open-Source Multimodal Data by 10x: A Multimodal Dataset with One Trillion Tokens](https://proceedings.neurips.cc/paper_files/paper/2024/file/40b9196c25fe1d64d87ca3a80a91d0ce-Paper-Datasets_and_Benchmarks_Track.pdf)
- **ChartMimic** (measurements) — *measured_by*
  > ChartMimic places emphasis on evaluating LMMs’ capacity to harmonize a blend of cognitive capabilities, encompassing visual understanding, code generation, and cross-modal reasoning. (Abstract)
  - [ChartMimic: Evaluating LMM's Cross-Modal Reasoning Capability via Chart-to-Code Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/42806406dd99e30c3796bc98b2670fa2-Paper-Conference.pdf)
- **WE-MATH** (measurements) — *measured_by*
  > We perform experiments on two widely used multimodal mathematical reasoning benchmarks: MATHVISTA (Lu et al., 2024b) and WE-MATH (Qiao et al., 2024). (Section 4.1)
  - [Progressive Multimodal Reasoning via Active Retrieval](https://aclanthology.org/2025.acl-long.180.pdf)
- **Visual grounding** (constructs) — *causes*
  > RSVP employs multimodal chain-of-thought visual prompts to help MLLMs understand queries and infer targets, generating interpretable region proposals that enhance visual grounding. (Abstract)
  - [RSVP: Reasoning Segmentation via Visual Prompting and Multi-modal Chain-of-Thought](https://aclanthology.org/2025.acl-long.715.pdf)
- **MMMU-Pro** (measurements) — *measured_by*
  > MMMU-Pro is designed to more accurately and rigorously assess a model’s true multimodal understanding and reasoning capabilities across a wide range of academic disciplines. (Section 1)
  - [MMMU-Pro: A More Robust Multi-discipline Multimodal Understanding Benchmark](https://aclanthology.org/2025.acl-long.736.pdf)
- **Robustness** (constructs) — *causes*
  > MVoT demonstrates comparable performance on MAZE (92.95%) and MINIBEHAVIOR (95.14%), while achieving a higher accuracy of 85.60% on FROZENLAKE compared to both Direct and CoT. This demonstrates better stability and robustness of MVoT than CoT.
  - [Imagine While Reasoning in Space: Multimodal Visualization-of-Thought](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25cz/li25cz.pdf)
- **MMStar** (measurements) — *measured_by*
  > To further investigate how well M-STAR generalizes to multiple benchmarks, we select four extra multi-modal ones focus on reasoning as well: M3CoT (Chen et al., 2024b), MMStar (Chen et al., 2024a), MMBench (Dev set, v1.1) (Liu et al., 2025), AI2D (Kembhavi et al., 2016). (Section 4.2)
  - [Diving into Self-Evolving Training for Multimodal Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25aj/liu25aj.pdf)
- **AI2D** (measurements) — *measured_by*
  > To further investigate how well M-STAR generalizes to multiple benchmarks, we select four extra multi-modal ones focus on reasoning as well: M3CoT (Chen et al., 2024b), MMStar (Chen et al., 2024a), MMBench (Dev set, v1.1) (Liu et al., 2025), AI2D (Kembhavi et al., 2016). (Section 4.2)
  - [Diving into Self-Evolving Training for Multimodal Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25aj/liu25aj.pdf)
- **GQA** (measurements) — *measured_by*
  > ...and a multimodal experiment using GQA (Hudson and Manning, 2019) and the image-based subset of ScienceQA (Lu et al., 2022).
  - [Sketch-of-Thought: Efficient LLM Reasoning with Adaptive Cognitive-Inspired Sketching](https://aclanthology.org/2025.emnlp-main.1236.pdf)

### → Multimodal reasoning
- **Visual understanding** (constructs) — *causes*
  > the enhanced visual comprehension ability directly benefits the model performance and its multimodal reasoning ability. (Section 4)
  - [Enhancing Large Vision Language Models with Self-Training on Image Comprehension](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed45d6a03de84cc650cae0655f699356-Paper-Conference.pdf)

### Associated with
- **Visual question answering** (behaviors tasks)
  > Large vision-language models (LVLMs) [31, 53] have achieved outstanding performance in a large number of multi-modal reasoning tasks such as visual question answering [45, 28], embodied instruction following [1] and robot navigation [2, 16], which are benefited from numerous network parameters and vast training data. (Section 1)
  - [Q-VLM: Post-training Quantization for Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/cffbaf4f47546ece96bb42c0edda40ee-Paper-Conference.pdf)
- **Text-to-speech synthesis** (behaviors tasks)
  > We also note that the generated audio appears different from all context audio samples, demonstrating the cross-modal reasoning capability of LLMs when using the LLM-Codec as the connector for text and audio. (Section 5.2)
  - [UniAudio 1.5: Large Language Model-Driven Audio Codec is A Few-Shot Audio Task Learner](https://proceedings.neurips.cc/paper_files/paper/2024/file/6801fa3fd290229efc490ee0cf1c5687-Paper-Conference.pdf)
- **Object counting** (behaviors tasks)
  > We also show some multi-modal reasoning examples in Figure 6. Our approach exhibits better object counting, OCR, and commence reasoning performance. (Section 4.2)
  - [LLaMA-Adapter: Efficient Fine-tuning of Large Language Models with Zero-initialized Attention](https://proceedings.iclr.cc/paper_files/paper/2024/file/c196239c5f9481e0db2755f31fe4585f-Paper-Conference.pdf)
- **Optical character recognition** (behaviors tasks)
  > We also show some multi-modal reasoning examples in Figure 6. Our approach exhibits better object counting, OCR, and commence reasoning performance. (Section 4.2)
  - [LLaMA-Adapter: Efficient Fine-tuning of Large Language Models with Zero-initialized Attention](https://proceedings.iclr.cc/paper_files/paper/2024/file/c196239c5f9481e0db2755f31fe4585f-Paper-Conference.pdf)
- **Commonsense reasoning** (constructs)
  > We also show some multi-modal reasoning examples in Figure 6. Our approach exhibits better object counting, OCR, and commence reasoning performance. (Section 4.2)
  - [LLaMA-Adapter: Efficient Fine-tuning of Large Language Models with Zero-initialized Attention](https://proceedings.iclr.cc/paper_files/paper/2024/file/c196239c5f9481e0db2755f31fe4585f-Paper-Conference.pdf)
