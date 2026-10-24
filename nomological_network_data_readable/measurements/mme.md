# MME
**Type:** Measurement  
**Referenced in:** 119 papers  

## State of the Field

**What it is.** Across the surveyed work, MME is most commonly described as a comprehensive multimodal or vision-language benchmark for large multimodal language models. Definitions consistently frame it around perception and cognition, with papers sometimes reporting separate MME-Perception and MME-Cognition scores, or an aggregate MME*, and task descriptions that include OCR, color, counting, scene understanding, and commonsense reasoning. Smaller variations describe it as using single-image instructions, as open-ended yes/no or true/false questions, as human-annotated, or as including a hallucination subset for existence, count, position, and color.

**What it is claimed to measure.** Papers use MME to measure 15 constructs and 6 behavioral indicators, so its measurement claims are spread across many targets rather than centered on one alone. The prevailing construct-level uses are visual understanding, multimodal understanding, and visual perception, while the most recurrent behavioral-indicator uses are visual question answering and hallucination. Papers also link it to many other constructs and several other behavioral indicators.

**Space of uses.** Papers frequently use MME inside broader benchmark suites, especially alongside MMBench, and often also with POPE, SEED-Bench, MM-Vet, and MMMU. In those suites it is commonly positioned as a comprehensive check on image understanding, multimodal understanding, or general VQA performance, though some papers break it out into MME-Perception, MME-Cognition, or the hallucination subset. A smaller line of use treats it as source material for another benchmark, and a systems paper lists it among integrated evaluation libraries.

## Sources

**[Fine-tuning Multimodal LLMs to Follow Zero-shot Demonstrative Instructions](https://proceedings.iclr.cc/paper_files/paper/2024/file/8cb5b08f912600de3de07c6503599ba8-Paper-Conference.pdf)**
> Vision-language benchmark evaluating cognition and perception abilities across 14 sub-tasks, including OCR, color, counting, and scene understanding.

## Relationships

### → MME
- **Multimodal understanding** (constructs) — *measured_by*
  > we adopt these captions during the pre-training stage and follow the setup of LLaVA-1.5 [37] on various ... multi-modality understanding benchmarks for evaluation, such as ... MME [16]... (Section 4.1)
  - [DenseFusion-1M: Merging Vision Experts for Comprehensive Multimodal Perception](https://proceedings.neurips.cc/paper_files/paper/2024/file/20ffc2b42c7de4a1960cfdadf305bbe2-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Visual understanding** (constructs) — *measured_by*
  > In Tab. 8, we evaluate our model on recently proposed MLLM benchmarks such as MME [16], POPE [36], MMbench [42], ScienceQA [43], TextVQA [61], GQA [21]. Our model still achieves comparative results across all benchmarks. This performance indicates that the visual CoT data we proposed not only enhances visual comprehension in CoT-specific scenarios but also boosts the model's overall visual understanding in standard inference setups.
  - [Visual CoT: Advancing Multi-Modal Language Models with a Comprehensive Dataset and Benchmark for Chain-of-Thought Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/0ff38d72a2e0aa6dbe42de83a17b2223-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Visual perception** (constructs) — *measured_by*
  > MME benchmark measures both perception and cognition abilities on a total of 14 subtasks. (Section 4.2)
  - [Fine-tuning Multimodal LLMs to Follow Zero-shot Demonstrative Instructions](https://proceedings.iclr.cc/paper_files/paper/2024/file/8cb5b08f912600de3de07c6503599ba8-Paper-Conference.pdf)
- **Visual question answering** (behaviors tasks) — *measured_by*
  > ...we also evaluate MIRAGE on conventional VQA tasks, including the RetVQA multi-image QA (Penamakuri et al., 2023) and several single-image QA tasks, such as VQA-v2 (Goyal et al., 2017), GQA (Hudson & Manning, 2019), TextVQA (Singh et al., 2019), POPE (Li et al., 2023c), MMB (Liu et al., 2024c), MMB-CN (Liu et al., 2024c), MME (Fu et al., 2023), SEED-Bench (Li et al., 2023a), and MM-Vet (Yu et al., 2023b). (Section 5)
  - [Visual Haystacks: A Vision-Centric Needle-In-A-Haystack Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/a264726ebd222124514a32bf0143b83d-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks) — *measured_by*
  > To evaluate HIO’s capability on object-level and attribute-level hallucination, we compare it with several state-of-the-art Decoding methods on MME. (Section 6.2).
  - [Alleviating Hallucinations in Large Vision-Language Models through Hallucination-Induced Optimization](https://proceedings.neurips.cc/paper_files/paper/2024/file/dde040998d82553cf7f689e8ae173d5a-Paper-Conference.pdf)
- **Object hallucination** (behaviors tasks) — *measured_by*
  > The MME hallucination subset extends scope beyond object hallucination. Following [34], we evaluation 4 perception sub-tasks that examines LVLMs on object-level and attribute-level hallucinations... (Sec. 5.4)
  - [Mitigating Object Hallucination via Concentric Causal Attention](https://proceedings.neurips.cc/paper_files/paper/2024/file/a76ed4a8ef522c823d73925e7fff16d4-Paper-Conference.pdf)
- **Cognition** (constructs) — *measured_by*
  > MME benchmark measures both perception and cognition abilities on a total of 14 subtasks. (Section 4.2)
  - [Fine-tuning Multimodal LLMs to Follow Zero-shot Demonstrative Instructions](https://proceedings.iclr.cc/paper_files/paper/2024/file/8cb5b08f912600de3de07c6503599ba8-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > we selected several common comprehensive benchmarks and VQA datasets, such as ... MME ... to evaluate the general capabilities of VLMs (Section 5.1).
  - [ETA: Evaluating Then Aligning Safety of Vision Language Models at Inference Time](https://proceedings.iclr.cc/paper_files/paper/2025/file/06f9fe2915857be2b1e369419a531ad3-Paper-Conference.pdf)
- **Multimodal perception** (constructs) — *measured_by*
  > “In particular, MME and MM-VET evaluate the multimodal perception and cognition abilities of MLLMs.”
  - [Feast Your Eyes:  Mixture-of-Resolution Adaptation for Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d2781f7df8825bbde6cef55adfbcd283-Paper-Conference.pdf)
- **Visual reasoning** (constructs) — *measured_by*
  > To estimate the downstream error Y (N, C), we test our trained VLMs on a suite of nine commonly used benchmarks for evaluating visual reasoning: MME (Fu et al., 2024), GQA (Hudson & Manning, 2019), AI2D (Kembhavi et al., 2016), MMBench (Liu et al., 2024c), MMMU (Yue et al., 2023), ScienceQA (Lu et al., 2022), MathVista (Lu et al., 2024), POPE (Li et al., 2023c), and ChartQA (Masry et al., 2022). (Section 3.2)
  - [Inference Optimal VLMs Need Fewer Visual Tokens and More Parameters](https://proceedings.iclr.cc/paper_files/paper/2025/file/ef748b4544e8f12d608fd28bbf04177f-Paper-Conference.pdf)
- **Multimodal reasoning** (constructs) — *measured_by*
  > LLaMA-Adapter showcases higher tuning efficiency with competitive reasoning capacity on MME (Fu et al., 2023), MMBench (Liu et al., 2023c), and LVLM-eHub (Xu et al., 2023) benchmarks. (Section 1)
  - [LLaMA-Adapter: Efficient Fine-tuning of Large Language Models with Zero-initialized Attention](https://proceedings.iclr.cc/paper_files/paper/2024/file/c196239c5f9481e0db2755f31fe4585f-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > We empirically analyze the multimodal capacity and generalization ability of MoVA on a wide range of challenging MLLM benchmarks in Table 3. This comprehensive assessment is conducted on MME [82], MMBench [16], QBench [83], MathVista [84], MathVerse [85], and POPE [20]. (Section 4.2)
  - [MoVA: Adapting Mixture of Vision Experts to Multimodal Context](https://proceedings.neurips.cc/paper_files/paper/2024/file/bb0fea29f7aa6ede17e906ac6a225f34-Paper-Conference.pdf)
- **Visual instruction following** (behaviors tasks) — *measured_by*
  > ...as well as instruction-following-based LMM benchmarks including POPE [40], MME [17], MMBench [47], SEED-Bench [35], LLaVA-Wild [46], and MM-Vet [67]. (Section 4.1)
  - [CuMo: Scaling Multimodal LLM with Co-Upcycled Mixture-of-Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed1d3d4c64dc1b95332a8cde3f2a0bdf-Paper-Conference.pdf)
- **Commonsense knowledge** (constructs) — *measured_by*
  > Figure 1: Across 7B to over 110B parameters, comparing lots of open- and closed-source LLVMs with Meteor on MME [35], MMB [36], MathVista [37], and AI2D [38] requiring diverse capabilities for image understanding, common-sense knowledge, non-object concept understanding, etc.
  - [Meteor: Mamba-based Traversal of Rationale for Large Language and Vision Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/473a9a75edc46eff5ff224d53d5f7294-Paper-Conference.pdf)
- **Object counting** (behaviors tasks) — *measured_by*
  > Following Yin et al. (2023), we evaluate hallucination using four subtasks: Existence, Count, Position, and Color, with performance measured by the combined metric of accuracy and accuracy+ (Section 4.1).
  - [Do You Keep an Eye on What I Ask? Mitigating Multimodal Hallucination via Attention-Guided Ensemble Decoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/637b275a6e65924719198188fc939632-Paper-Conference.pdf)
- **Helpfulness** (constructs) — *measured_by*
  > “For multimodal helpfulness benchmarks, we use MMBench (Liu et al., 2023d), MME (Fu et al., 2024), and SEEDBench (Li et al., 2023a).”
  - [How Does Vision-Language Adaptation Impact the Safety of Vision Language Models?](https://proceedings.iclr.cc/paper_files/paper/2025/file/84d286e32bbee8fa3a86ee9c50e00081-Paper-Conference.pdf)
- **Knowledge retention** (constructs) — *measured_by*
  > We evaluate general knowledge retention... The evaluation uses widely-adopted benchmarks MME (Fu et al., 2024), MMMU (Yue et al., 2024), and POPE (Li et al., 2023), which assess the general abilities of MLLMs. (Section 5.2)
  - [Dynamic Mixture of Curriculum LoRA Experts for Continual Multimodal Instruction Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ge25d/ge25d.pdf)
- **Commonsense reasoning** (constructs) — *measured_by*
  > “For MME subset evaluations (covering both object-level and attribute-level hallucinations), the results in Figure 2 and Table 8 indicate that MemVR uniformly improves in handling object-level and attribute-level hallucinations, as well as commonsense reasoning.”
  - [Look Twice Before You Answer: Memory-Space Visual Retracing for Hallucination Mitigation in Multimodal Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zou25e/zou25e.pdf)
