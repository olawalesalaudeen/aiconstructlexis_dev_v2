# MMBench
**Type:** Measurement  
**Referenced in:** 127 papers  
**Also known as:** MMbench, MM-Bench, MMB  

## State of the Field

**What it is.** Across papers, the prevailing usage treats MMBench as a comprehensive, all-around multimodal benchmark for large vision-language models, used for complex vision-language tasks spanning perception, knowledge, commonsense, and reasoning. A common concrete description is a multiple-choice visual question answering benchmark with diverse question types and topics, while a smaller line of work frames it more specifically as a general VQA or instruction-following evaluation. Several papers also refer to English and Chinese variants, a Chinese version, or a dev split.

**What it is claimed to measure.** Papers use MMBench to measure 17 constructs and 6 behavioral indicators, so the claims about what it evaluates are broad rather than centered on a single target. The dominant construct links are visual understanding and multimodal understanding, followed by fine-grained visual understanding and general ability, with many additional constructs also linked. Among behavioral indicators, visual question answering is the most common use, while the remaining indicators appear in smaller lines of work.

**Space of uses.** No measurement instrument is linked to it, but papers often use MMBench alongside MME, MM-Vet, SEED-Bench, POPE, and MMMU in benchmark suites. They usually position it as a broad check of general multimodal or image understanding, often for zero-shot or comparative evaluation, while some papers reuse it as a public evaluation set, a source of candidate samples, or a source of images for other benchmarks. Some papers also select English and Chinese variants or a dev split rather than treating it as a single fixed release.

**Concerns raised.** One paper notes a language-coverage limitation, stating that MMBench is restricted to English and Chinese and therefore does not assess multilingual ability across a broader range of languages. Papers also describe MMBench and its Chinese version as testing answer robustness through all-round shuffling of multiple-choice answers.

## Sources

**[DreamLLM: Synergistic Multimodal Comprehension and Creation](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a7a22152cd21f0ca3c0f8139bb32905-Paper-Conference.pdf)**
> Comprehensive benchmark assessing multimodal models on complex vision-language tasks, including knowledge-based and reasoning questions.

**[A-Bench: Are LMMs Masters at Evaluating AI-generated Images?](https://proceedings.iclr.cc/paper_files/paper/2025/file/d355518527578ce26b80da96e9fc2750-Paper-Conference.pdf) (as "MMbench")**
> A comprehensive evaluation benchmark for Large Multimodal Models (LMMs) across various subtasks.

**[REMEDY: Recipe Merging Dynamics in Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4065a881baab1744bfba208a4361bbb1-Paper-Conference.pdf) (as "MM-Bench")**
> A multi-modal benchmark that evaluates LVLMs on a diverse set of tasks requiring perception and reasoning abilities.

**[CoreMatching: A Co-adaptive Sparse Inference Framework with Token and Neuron Pruning for Comprehensive Acceleration of Vision-Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25eb/wang25eb.pdf) (as "MMB")**
> MMBench, a comprehensive multimodal benchmark with diverse question types and modalities.

## Relationships

### → MMBench
- **Visual understanding** (constructs) — *measured_by*
  > To examine general visual understanding and instruction following of our model, we follow common practices and employ MMBench [77], MME [78], SEEDBench [79], MMMU [30] and MathVista [80] for evaluation. (Section 4.2)
  - [Lumen: Unleashing Versatile Vision-Centric Capabilities of Large Multimodal Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/946ecab300b0695fe24b53a92e632935-Paper-Conference.pdf)
- **Multimodal understanding** (constructs) — *measured_by*
  > Additionally, we conducted a zero-shot evaluation on the recently developed benchmarks of MMBench and MM-Vet to assess the model’s performance in complex multimodal tasks. (Section 4.1)
  - [DreamLLM: Synergistic Multimodal Comprehension and Creation](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a7a22152cd21f0ca3c0f8139bb32905-Paper-Conference.pdf)
- **Visual question answering** (behaviors tasks) — *measured_by*
  > MMBench [59] Multi-choice VQA on a diverse set of topics (Table A2)
  - [Accelerating Pre-training of Multimodal LLMs via Chain-of-Sight](https://proceedings.neurips.cc/paper_files/paper/2024/file/8a54a80ffc2834689ffdd0920202018e-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > we selected several common comprehensive benchmarks and VQA datasets, such as ... MMBench ... to evaluate the general capabilities of VLMs (Section 5.1).
  - [ETA: Evaluating Then Aligning Safety of Vision Language Models at Inference Time](https://proceedings.iclr.cc/paper_files/paper/2025/file/06f9fe2915857be2b1e369419a531ad3-Paper-Conference.pdf)
- **Multimodal reasoning** (constructs) — *measured_by*
  > LLaMA-Adapter showcases higher tuning efficiency with competitive reasoning capacity on MME (Fu et al., 2023), MMBench (Liu et al., 2023c), and LVLM-eHub (Xu et al., 2023) benchmarks. (Section 1)
  - [LLaMA-Adapter: Efficient Fine-tuning of Large Language Models with Zero-initialized Attention](https://proceedings.iclr.cc/paper_files/paper/2024/file/c196239c5f9481e0db2755f31fe4585f-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > We empirically analyze the multimodal capacity and generalization ability of MoVA on a wide range of challenging MLLM benchmarks in Table 3. This comprehensive assessment is conducted on MME [82], MMBench [16], QBench [83], MathVista [84], MathVerse [85], and POPE [20]. (Section 4.2)
  - [MoVA: Adapting Mixture of Vision Experts to Multimodal Context](https://proceedings.neurips.cc/paper_files/paper/2024/file/bb0fea29f7aa6ede17e906ac6a225f34-Paper-Conference.pdf)
- **Robustness** (constructs) — *measured_by*
  > MMBench and the CN version evaluate a model’s answer robustness with all-round shuffling on multiple choice answers. (Section 4.1)
  - [Efficient Large Multi-modal Models via Visual Context Compression](https://proceedings.neurips.cc/paper_files/paper/2024/file/871ed095b734818cfba48db6aeb25a62-Paper-Conference.pdf)
- **Visual instruction following** (behaviors tasks) — *measured_by*
  > ...as well as instruction-following-based LMM benchmarks including POPE [40], MME [17], MMBench [47], SEED-Bench [35], LLaVA-Wild [46], and MM-Vet [67]. (Section 4.1)
  - [CuMo: Scaling Multimodal LLM with Co-Upcycled Mixture-of-Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed1d3d4c64dc1b95332a8cde3f2a0bdf-Paper-Conference.pdf)
- **Fine-grained visual understanding** (constructs) — *measured_by*
  > Tasks that require fine-grained visual understanding and deep reasoning across multiple areas of the image naturally demand a higher number of visual tokens for optimal performance. ... This trend is evident in tasks such as VQAv2, GQA, VizWiz, MMBench, LLaVA-Bench, and MM-Vet.
  - [Matryoshka Query Transformer for Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/59c147c7d4fdb732daea3064eab949bf-Paper-Conference.pdf)
- **Logical reasoning** (constructs) — *measured_by*
  > LR: Logic Reasoning, AR: Attribute Reasoning, RR: Relation Reasoning, FP-S: Fine-grained Perception (Single-instance), FP-C: Fine-grained Perception (Cross-instance), CP: Coarse Perception. (Table A4)
  - [Accelerating Pre-training of Multimodal LLMs via Chain-of-Sight](https://proceedings.neurips.cc/paper_files/paper/2024/file/8a54a80ffc2834689ffdd0920202018e-Paper-Conference.pdf)
- **Instruction following** (behaviors tasks) — *measured_by*
  > To examine general visual understanding and instruction following of our model, we follow common practices and employ MMBench [77], MME [78], SEEDBench [79], MMMU [30] and MathVista [80] for evaluation. (Section 4.2)
  - [Lumen: Unleashing Versatile Vision-Centric Capabilities of Large Multimodal Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/946ecab300b0695fe24b53a92e632935-Paper-Conference.pdf)
- **Visual perception** (constructs) — *measured_by*
  > We further evaluate our trained model over six benchmarks that examines LVLMs general perception capability, including SEED-Bench [36], ScienceQA [49], GQA [28], Vizwiz [22], MMBench [48]... (Appendix D.1)
  - [Mitigating Object Hallucination via Concentric Causal Attention](https://proceedings.neurips.cc/paper_files/paper/2024/file/a76ed4a8ef522c823d73925e7fff16d4-Paper-Conference.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > “we further evaluate our trained model over six benchmarks that examines LVLMs general perception capability, including SEED-Bench [36], ScienceQA [49], GQA [28], Vizwiz [22], MMBench [48] and MMStar [8] which evaluates LVLMs perception capability with multiple choice questions.”
  - [Mitigating Object Hallucination via Concentric Causal Attention](https://proceedings.neurips.cc/paper_files/paper/2024/file/a76ed4a8ef522c823d73925e7fff16d4-Paper-Conference.pdf)
- **Catastrophic forgetting** (behaviors tasks) — *measured_by*
  > To evaluate the extent of catastrophic forgetting in Yo’LLaVA, we assessed both the Original LLaVA-1.5-13B [10] and Yo’LLaVA using common benchmarks for multimodal models: POPE [41], MMBench [42], and LLaVA-Wild [2]. (Appendix B)
  - [Yo'LLaVA: Your Personalized Language and Vision Assistant](https://proceedings.neurips.cc/paper_files/paper/2024/file/48088756ec0ce6ba362bddc7ebeb3915-Paper-Conference.pdf)
- **Visual reasoning** (constructs) — *measured_by*
  > To estimate the downstream error Y (N, C), we test our trained VLMs on a suite of nine commonly used benchmarks for evaluating visual reasoning: MME (Fu et al., 2024), GQA (Hudson & Manning, 2019), AI2D (Kembhavi et al., 2016), MMBench (Liu et al., 2024c), MMMU (Yue et al., 2023), ScienceQA (Lu et al., 2022), MathVista (Lu et al., 2024), POPE (Li et al., 2023c), and ChartQA (Masry et al., 2022). (Section 3.2)
  - [Inference Optimal VLMs Need Fewer Visual Tokens and More Parameters](https://proceedings.iclr.cc/paper_files/paper/2025/file/ef748b4544e8f12d608fd28bbf04177f-Paper-Conference.pdf)
- **Zero-shot generalization** (constructs) — *measured_by*
  > Unseen tasks are datasets that were not involved in the recipe construction process. These tasks are used to evaluate the zero-shot generalizability of our method. Specifically, we employed the MM-Vet (Yu et al., 2024), MM-Bench (Zhang et al., 2023a), MM-Bench-Chinese (Zhang et al., 2023a), VizWiz (Gurari et al., 2018), and POPE (Li et al., 2023) datasets to assess this capability.
  - [REMEDY: Recipe Merging Dynamics in Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4065a881baab1744bfba208a4361bbb1-Paper-Conference.pdf)
- **Instruction fine-tuning** (behaviors tasks) — *measured_by*
  > “we employ FLoRA to fine-tune LLaVA-1.5-7B ... on visual instruction tuning tasks, which include seven vision-language benchmarks: ... MMBench”
  - [Maintaining Structural Integrity in Parameter Spaces for Parameter Efficient Fine-tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/08487598819cba9feca884ef0d442950-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > MMStar and MMBench (Chen et al., 2024a; Liu et al., 2025) provide comprehensive evaluations by categorizing VLM tasks into two primary domains: perception and reasoning. (Section 5.1)
  - [SECOND: Mitigating Perceptual Hallucination in Vision-Language Models via Selective and Contrastive Decoding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/park25c/park25c.pdf)
- **Multimodal perception** (constructs) — *measured_by*
  > “Perception: Following (Tong et al., 2024a), we conduct experiments on 4 types of perception task (i.e., general, knowledge, ocr, and vision-centric) across 16 benchmarks: MME (Fu et al., 2023), MMBench (Liu et al., 2025), SEED (Li et al., 2024), GQA (Hudson & Manning, 2019), ScienceQA (Lu et al., 2022), MMMU (Yue et al., 2024), MathVista (Lu et al., 2024), AI2D (Kembhavi et al., 2016), ChartQA (Masry et al., 2022), OCRBench (Liu et al., 2024), TextVQA (Singh et al., 2019), DocVQA (Mathew et al., 2021), MMVP (Tong et al., 2024b), RealworldQA (xAI, 2024), and CV-Bench (Tong et al., 2024a).”
  - [MODA: MOdular Duplex Attention for Multimodal Perception, Cognition, and Emotion Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cg/zhang25cg.pdf)
