# POPE
**Type:** Measurement  
**Referenced in:** 143 papers  

## State of the Field

**What it is.** Across the surveyed work, the prevailing usage treats POPE as a benchmark or dataset for evaluating object hallucination in multimodal or large vision-language models. Most definitions describe it as balanced yes/no or true/false visual question answering about whether a named object is present in an image, often framed as a binary classification or polling task with positive and negative samples; several papers add that it has Popular, Random, and Adversarial versions or splits based on different ways of sampling non-existing objects. A smaller number of papers describe it more loosely as a VQA hallucination benchmark, and isolated descriptions expand the name as Polling-based Object Probing Evaluation or Probing Object-level Hallucination, while one paper instead glosses it as Positional Object Perception Evaluation for localization and counting.

**What it is claimed to measure.** Papers use POPE mainly to measure hallucination-related outcomes, especially hallucination and object hallucination, sometimes stated more specifically as object existence or object-level hallucinations. Overall, it is linked to 10 constructs and 9 behavioral indicators. Beyond those dominant uses, papers also report it as measuring visual question answering, visual understanding, and hallucination resistance, with the remaining linked constructs and indicators appearing less often. Across these links, the clearest convergence is on hallucination, while broader capability claims are spread across several visual and multimodal framings.

**Space of uses.** No other measurement instrument is linked to it. Even so, papers commonly use POPE alongside broader evaluation suites, frequently with MME, MMBench, SEED-Bench, MMMU, and MM-Vet. Most papers position it as one part of a multi-benchmark evaluation rather than a standalone protocol, often reporting average F1 across the Random, Popular, and Adversarial splits; smaller lines of work use it for zero-shot object hallucination checks or to assess catastrophic forgetting and knowledge retention.

## Sources

**[Ferret: Refer and Ground Anything Anywhere at Any Granularity](https://proceedings.iclr.cc/paper_files/paper/2024/file/fd6613131889a4b656206c50a8bd7790-Paper-Conference.pdf)**
> POPE, a benchmark for evaluating object hallucinations in multimodal large language models using balanced yes/no visual question answering tasks.

## Relationships

### → POPE
- **Object hallucination** (behaviors tasks) — *measured_by*
  > POPE (Li et al., 2023b) is used to evaluate the level of object hallucinations in MLLMs, which consists of three versions of balanced yes/no VQA tasks (i.e., Popular/Random/Adversarial) considering objects in the given image. (Section 3)
  - [Tuning LayerNorm in Attention: Towards Efficient Multi-Modal LLM Finetuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/7cc16e8635e6f27c295355bd214ef8d8-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks) — *measured_by*
  > Similar results are seen in other tasks, like the hallucination question "Is there a car in the image?" from POPE.
  - [Matryoshka Query Transformer for Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/59c147c7d4fdb732daea3064eab949bf-Paper-Conference.pdf)
- **Visual question answering** (behaviors tasks) — *measured_by*
  > VQA (ScienceQA (SQA) (Lu et al., 2022), POPE (Li et al., 2023e), GQA (Hudson & Manning, 2019))
  - [Fine-Grained Verifiers: Preference Modeling as Next-token Prediction in Vision-Language Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/7c1f8ca17d2f0bdf82c73abafb577837-Paper-Conference.pdf)
- **Visual hallucination** (behaviors tasks) — *measured_by*
  > We conducted extensive evaluations of DEEM on RobustVQA and two widely recognized benchmarks, POPE and MMVP, for visual hallucination and perception respectively (Section 1).
  - [DEEM: Diffusion models serve as the eyes of large language models for image perception](https://proceedings.iclr.cc/paper_files/paper/2025/file/a8399aace3dfa6dfb8b635117748c561-Paper-Conference.pdf)
- **Visual understanding** (constructs) — *measured_by*
  > Our study investigates the performance of DYNMOE-LLaVA on image understanding benchmarks. Evaluation Benchmarks include VQA-v2; GQA; VisWiz; SQAI (ScienceQA-IMG); VQAT (TextVQA); POPE; MME; MMB (MMBench); LLaVAW (LLaVA-Bench (in-the-Wild)); MM-Vet. (Table 2)
  - [Dynamic Mixture of Experts: An Auto-Tuning Approach for Efficient Transformer Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c63ff34c163bca3055d39490f6d1aaf7-Paper-Conference.pdf)
- **Multimodal understanding** (constructs) — *measured_by*
  > we adopt these captions during the pre-training stage and follow the setup of LLaVA-1.5 [37] on various ... multi-modality understanding benchmarks for evaluation, such as ... POPE [34]... (Section 4.1)
  - [DenseFusion-1M: Merging Vision Experts for Comprehensive Multimodal Perception](https://proceedings.neurips.cc/paper_files/paper/2024/file/20ffc2b42c7de4a1960cfdadf305bbe2-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Hallucination resistance** (constructs) — *measured_by*
  > We assess our models’ ability toward anti-hallucination through POPE [29]. (Section 5)
  - [Web2Code: A Large-scale Webpage-to-Code Dataset and Evaluation Framework for Multimodal LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/cb66be286795d71f89367d596bf78ea7-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Generalization** (constructs) — *measured_by*
  > We empirically analyze the multimodal capacity and generalization ability of MoVA on a wide range of challenging MLLM benchmarks in Table 3. This comprehensive assessment is conducted on MME [82], MMBench [16], QBench [83], MathVista [84], MathVerse [85], and POPE [20]. (Section 4.2)
  - [MoVA: Adapting Mixture of Vision Experts to Multimodal Context](https://proceedings.neurips.cc/paper_files/paper/2024/file/bb0fea29f7aa6ede17e906ac6a225f34-Paper-Conference.pdf)
- **Visual perception** (constructs) — *measured_by*
  > In contrast, for several benchmarks primarily targeting the visual perception skills of models, performance remains consistent when gradually reducing the number of visual tokens until a threshold is reached. Beyond this threshold, performance drops significantly (see Figure 5 and Appendix Figure 8). This “turning point" is observed in benchmarks such as MME Cognition, MME Perception, POPE, and MMMU.
  - [Matryoshka Query Transformer for Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/59c147c7d4fdb732daea3064eab949bf-Paper-Conference.pdf)
- **Visual instruction following** (behaviors tasks) — *measured_by*
  > ...as well as instruction-following-based LMM benchmarks including POPE [40], MME [17], MMBench [47], SEED-Bench [35], LLaVA-Wild [46], and MM-Vet [67]. (Section 4.1)
  - [CuMo: Scaling Multimodal LLM with Co-Upcycled Mixture-of-Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed1d3d4c64dc1b95332a8cde3f2a0bdf-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > we further evaluated the performance of our fine-tuned visually-grounded language model (VLM) on additional benchmarks to ensure its robustness across a variety of tasks. In particular, we tested the model on TextVQA [42], POPE [29], and MMVet [51]. (Appendix C.3)
  - [Why are Visually-Grounded Language Models Bad at Image Classification?](https://proceedings.neurips.cc/paper_files/paper/2024/file/5c7024041be305c94d7311cfcc53d93e-Paper-Conference.pdf)
- **Object hallucination detection** (behaviors tasks) — *measured_by*
  > For generative tasks, Sugar establishes new state-of-the-art results on the tasks for ... object hallucinations detection (i.e., POPE [51]) (Section 1)
  - [Unified Generative and Discriminative Training for Multi-modal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/29416b66c2149872b9d1415a3fd2c5e0-Paper-Conference.pdf)
- **Catastrophic forgetting** (behaviors tasks) — *measured_by*
  > To evaluate the extent of catastrophic forgetting in Yo’LLaVA, we assessed both the Original LLaVA-1.5-13B [10] and Yo’LLaVA using common benchmarks for multimodal models: POPE [41], MMBench [42], and LLaVA-Wild [2]. (Appendix B)
  - [Yo'LLaVA: Your Personalized Language and Vision Assistant](https://proceedings.neurips.cc/paper_files/paper/2024/file/48088756ec0ce6ba362bddc7ebeb3915-Paper-Conference.pdf)
- **Fine-grained visual understanding** (constructs) — *measured_by*
  > We evaluate their effectiveness in improving the perception of smaller visual concepts on 4 detail-sensitive datasets (TextVQA, V∗, POPE, DocVQA)... (Sec. 6)
  - [MLLMs Know Where to Look: Training-free Perception of Small Visual Details with Multimodal LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/aaa0ac4253da75faf9b0dc0dda062612-Paper-Conference.pdf)
- **Visual reasoning** (constructs) — *measured_by*
  > To estimate the downstream error Y (N, C), we test our trained VLMs on a suite of nine commonly used benchmarks for evaluating visual reasoning: MME (Fu et al., 2024), GQA (Hudson & Manning, 2019), AI2D (Kembhavi et al., 2016), MMBench (Liu et al., 2024c), MMMU (Yue et al., 2023), ScienceQA (Lu et al., 2022), MathVista (Lu et al., 2024), POPE (Li et al., 2023c), and ChartQA (Masry et al., 2022). (Section 3.2)
  - [Inference Optimal VLMs Need Fewer Visual Tokens and More Parameters](https://proceedings.iclr.cc/paper_files/paper/2025/file/ef748b4544e8f12d608fd28bbf04177f-Paper-Conference.pdf)
- **Zero-shot generalization** (constructs) — *measured_by*
  > Unseen tasks are datasets that were not involved in the recipe construction process. These tasks are used to evaluate the zero-shot generalizability of our method. Specifically, we employed the MM-Vet (Yu et al., 2024), MM-Bench (Zhang et al., 2023a), MM-Bench-Chinese (Zhang et al., 2023a), VizWiz (Gurari et al., 2018), and POPE (Li et al., 2023) datasets to assess this capability.
  - [REMEDY: Recipe Merging Dynamics in Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4065a881baab1744bfba208a4361bbb1-Paper-Conference.pdf)
- **Knowledge retention** (constructs) — *measured_by*
  > We evaluate general knowledge retention... The evaluation uses widely-adopted benchmarks MME (Fu et al., 2024), MMMU (Yue et al., 2024), and POPE (Li et al., 2023), which assess the general abilities of MLLMs. (Section 5.2)
  - [Dynamic Mixture of Curriculum LoRA Experts for Continual Multimodal Instruction Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ge25d/ge25d.pdf)
- **Hallucination detection** (behaviors tasks) — *measured_by*
  > POPE (Li et al., 2023): hallucination detection. (Section 4.3)
  - [VERITAS: Leveraging Vision Priors and Expert Fusion to Improve Multimodal Data](https://aclanthology.org/2025.emnlp-main.1002.pdf)
