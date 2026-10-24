# MMMU
**Type:** Measurement  
**Referenced in:** 109 papers  
**Also known as:** MMMU Validation Set, MMMU Benchmark  

## State of the Field

**What it is.** Across the papers, the prevailing usage treats MMMU as a massive multi-discipline multimodal understanding and reasoning benchmark. Definitions usually place it at college or university level, with questions requiring advanced subject knowledge and reasoning across diverse domains; several papers specify six core disciplines or 30 college-level subjects, some say it contains 11.5K questions while one says about 12.5K, and others note that it includes both single- and multi-image items drawn from exams, quizzes, and textbooks. Papers variously describe its format as VQA or image+text-to-text, and they also refer to MMMU-dev and the validation set as separate splits, often used through multiple-choice questions, while a smaller minority frame it more narrowly as college-level subject knowledge, expert knowledge assessment, or, in one definition, a university-level mathematics understanding benchmark.

**What it is claimed to measure.** Papers use MMMU to measure 17 constructs and 6 behavioral indicators, so its claimed targets are spread across many labels rather than concentrated on one. The dominant framing is that it measures multimodal understanding, reasoning, visual reasoning, visual understanding, and multimodal reasoning; beyond those, papers attach it to 12 other constructs. The behavioral indicators are mostly question-answering and diagram-related uses, and one paper reports hallucination as correlating with MMMU score.

**Space of uses.** Most papers position MMMU as a standard general-capability or understanding-and-reasoning benchmark within broader evaluation suites, often alongside MME, MMBench, MathVista, SEEDBench, and POPE. Some papers use only MMMU-dev or the validation split, sometimes restricting evaluation to multiple-choice items, and a smaller line of work reuses its content as source material by selecting MMMU-dev questions, drawing images from MMMU, or using it as the basis for a culture-agnostic subset in another benchmark. No measurement instrument is linked to it by an explicit relationship.

**Concerns raised.** A few papers note limitations or unusual behavior in MMMU results. One reports that a model reaches 42.7% on MMMU without any visual input, another says MMMU is "dominated by LLM capabilities" and "largely uncorrelated with the others," and another notes that it is limited to multiple-choice questions and that only a small fraction of its content is mathematical.

## Sources

**[Revealing and Reducing Gender Biases in Vision and Language Assistants (VLAs)](https://proceedings.iclr.cc/paper_files/paper/2025/file/189b0101331a7a87bf7686d8bb20e12d-Paper-Conference.pdf)**
> MMMU (Yue et al., 2024) is a massive multi-discipline multimodal understanding benchmark used to evaluate the general performance of Vision-Language Assistants after applying debiasing methods.

**[COAT: Compressing Optimizer states and Activations for Memory-Efficient FP8 Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/6ac807c9b296964409b277369e55621a-Paper-Conference.pdf) (as "MMMU Validation Set")**
> The validation set of the Massively Multitask Multimodal Understanding benchmark, which evaluates models on college-level problems requiring expert knowledge across various domains.

## Relationships

### → MMMU
- **Multimodal understanding** (constructs) — *measured_by*
  > For capabilities evaluation, we follow [34] to evaluate multimodal models on LLaVA-Wild for visual chat capability and MMMU [71] for multimodal understanding capability. (Section 4.2)
  - [Improving Alignment and Robustness with Circuit Breakers](https://proceedings.neurips.cc/paper_files/paper/2024/file/97ca7168c2c333df5ea61ece3b3276e1-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > For general reasoning, benchmarks like MathVista [31] and MMMU [32] assess models on tasks involving multiple-choice and free-form questions, with a focus on multimodal data.
  - [Benchmarking Generative Models on Computational Thinking Tests in Elementary Visual Programming](https://proceedings.neurips.cc/paper_files/paper/2024/file/6d5e00006b65fcc55c3c1798da821663-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Visual understanding** (constructs) — *measured_by*
  > For image understanding, we reported scores from popular benchmarks like MM-Vet (Yu et al., 2023), MMBench (Liu et al., 2023b), MMMU (Yue et al., 2024), MME (Fu et al., 2023), LLaVA-wild (Liu et al., 2024b), SEED (Ge et al., 2023b), AI2D (Kembhavi et al., 2016), and RealWorldQA (xAI, 2024). (Section 4.2)
  - [Unhackable Temporal Reward for Scalable Video MLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/c1e5b9a51dcd78528795584860797fdb-Paper-Conference.pdf)
- **Visual reasoning** (constructs) — *measured_by*
  > Additionally, the challenging MMMU [68] is evaluated to assess the visual reasoning abilities of the multimodal LLMs. (Section 4.1)
  - [CuMo: Scaling Multimodal LLM with Co-Upcycled Mixture-of-Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed1d3d4c64dc1b95332a8cde3f2a0bdf-Paper-Conference.pdf)
- **Visual question answering** (behaviors tasks) — *measured_by*
  > MMMU [104] VQA on a diverse set of topics (Table A2)
  - [Accelerating Pre-training of Multimodal LLMs via Chain-of-Sight](https://proceedings.neurips.cc/paper_files/paper/2024/file/8a54a80ffc2834689ffdd0920202018e-Paper-Conference.pdf)
- **Multimodal reasoning** (constructs) — *measured_by*
  > “On more complex multimodal reasoning benchmarks, the MINT-1T model outperforms OBELICS on MMMU but performs worse on Mantis-Eval.”
  - [MINT-1T: Scaling Open-Source Multimodal Data by 10x: A Multimodal Dataset with One Trillion Tokens](https://proceedings.neurips.cc/paper_files/paper/2024/file/40b9196c25fe1d64d87ca3a80a91d0ce-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Multi-image reasoning** (constructs) — *measured_by*
  > We additionally evaluate models on MMMU [Yue et al., 2024](containing both single and multi-image questions) and Mantis-Eval [Jiang et al., 2024](all multi-image questions) to probe a model’s multi-image reasoning abilities beyond in-context learning evaluations. (Section 4.2)
  - [MINT-1T: Scaling Open-Source Multimodal Data by 10x: A Multimodal Dataset with One Trillion Tokens](https://proceedings.neurips.cc/paper_files/paper/2024/file/40b9196c25fe1d64d87ca3a80a91d0ce-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Multi-image visual question answering** (behaviors tasks) — *measured_by*
  > We additionally evaluate models on MMMU [Yue et al., 2024](containing both single and multi-image questions)... (Section 4.2)
  - [MINT-1T: Scaling Open-Source Multimodal Data by 10x: A Multimodal Dataset with One Trillion Tokens](https://proceedings.neurips.cc/paper_files/paper/2024/file/40b9196c25fe1d64d87ca3a80a91d0ce-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Data leakage** (constructs) — *measured_by*
  > We evaluate 16 leading LVLMs on MMStar to assess their multi-modal capabilities, and on 7 benchmarks with the proposed metrics to investigate their data leakage and actual multi-modal gain. (Abstract)
  - [Are We on the Right Way for Evaluating Large Vision-Language Models?](https://proceedings.neurips.cc/paper_files/paper/2024/file/2f8ee6a3d766b426d2618e555b5aeb39-Paper-Conference.pdf)
- **Multitask language understanding** (constructs) — *measured_by*
  > MMMU and MathVista aim to evaluate the multi-discipline and math understanding ability, respectively. (Section 5.1)
  - [Feast Your Eyes:  Mixture-of-Resolution Adaptation for Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d2781f7df8825bbde6cef55adfbcd283-Paper-Conference.pdf)
- **Diagram understanding ability** (constructs) — *measured_by*
  > Based on observations reported in the MMMU benchmark (Yue et al., 2023) and our empirical studies, we found that current general purpose MLLMs, including the most powerful ones such as GPT-4V and Claude-3.5, exhibit poor perception abilities in understanding diagrams related to physical sciences (e.g., circuit diagrams). (Section 2)
  - [MAPS: Advancing Multi-Modal Reasoning in Expert-Level Physical Science](https://proceedings.iclr.cc/paper_files/paper/2025/file/e0422224da8dc076cab83709b9839b7b-Paper-Conference.pdf)
- **Diagram understanding** (behaviors tasks) — *measured_by*
  > To align our research focus, we conduct experiments on several sub-categories of MMMU that consists exclusively of scientific diagrams (Section 4).
  - [Chain-of-region: Visual Language Models Need  Details for Diagram Analysis](https://proceedings.iclr.cc/paper_files/paper/2025/file/464012c83279e19be4cd42c25f341c92-Paper-Conference.pdf)
- **Multiple-choice visual question answering** (behaviors tasks) — *measured_by*
  > Note that SQA-I, AI2D, RWQA and MMMU are MCVQ datasets, while the others are VQA. (Section 5.1)
  - [Ranked from Within: Ranking Large Multimodal Models Without Labels](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tu25a/tu25a.pdf)
- **Knowledge retention** (constructs) — *measured_by*
  > We evaluate general knowledge retention... The evaluation uses widely-adopted benchmarks MME (Fu et al., 2024), MMMU (Yue et al., 2024), and POPE (Li et al., 2023), which assess the general abilities of MLLMs. (Section 5.2)
  - [Dynamic Mixture of Curriculum LoRA Experts for Continual Multimodal Instruction Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ge25d/ge25d.pdf)
- **Multimodal perception** (constructs) — *measured_by*
  > “Perception: Following (Tong et al., 2024a), we conduct experiments on 4 types of perception task (i.e., general, knowledge, ocr, and vision-centric) across 16 benchmarks: MME (Fu et al., 2023), MMBench (Liu et al., 2025), SEED (Li et al., 2024), GQA (Hudson & Manning, 2019), ScienceQA (Lu et al., 2022), MMMU (Yue et al., 2024), MathVista (Lu et al., 2024), AI2D (Kembhavi et al., 2016), ChartQA (Masry et al., 2022), OCRBench (Liu et al., 2024), TextVQA (Singh et al., 2019), DocVQA (Mathew et al., 2021), MMVP (Tong et al., 2024b), RealworldQA (xAI, 2024), and CV-Bench (Tong et al., 2024a).”
  - [MODA: MOdular Duplex Attention for Multimodal Perception, Cognition, and Emotion Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cg/zhang25cg.pdf)
- **Fine-grained perception** (constructs) — *measured_by*
  > Ablation results on fine-grained perception tasks. We conduct ablation studies based on LLaVA across five fine-grained benchmarks: ... and MMMU (Yue et al., 2024). (Table 3)
  - [SEA: Supervised Embedding Alignment for Token-Level Visual-Textual Integration in MLLMs](https://aclanthology.org/2025.emnlp-main.55.pdf)
- **Cognition** (constructs) — *measured_by*
  > we use scores from the MMMU benchmark (Yue et al., 2024) as an indicator of models’ cognitive ability, as MMMU is specifically designed to evaluate comprehensive cognitive skills of MLLMs. (Section 6)
  - [AssoCiAm: A Benchmark for Evaluating Association Thinking while Circumventing Ambiguity](https://aclanthology.org/2025.emnlp-main.263.pdf)
- **General reasoning** (constructs) — *measured_by*
  > It evaluates VLMs on both breadth and depth of subject knowledge, as well as on their expert-level reasoning and understanding. (Section 5.1)
  - [Cache-of-Thought: Master-Apprentice Framework for Cost-Effective Vision Language Model Reasoning](https://aclanthology.org/2025.emnlp-main.97.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > “For both multiple-choice answers in MMMU and open responses in VL-ICL”
  - [Cache-of-Thought: Master-Apprentice Framework for Cost-Effective Vision Language Model Reasoning](https://aclanthology.org/2025.emnlp-main.97.pdf)
- **Generalization** (constructs) — *measured_by*
  > MODRWKV attains the highest reported score among peers on the MMMU benchmark, highlighting its generalization ability in challenging multi-modal understanding scenarios (Section 4.2).
  - [ModRWKV: Transformer Multimodality in Linear Time](https://aclanthology.org/2025.emnlp-main.204.pdf)

### Associated with
- **Hallucination** (behaviors tasks)
  > We also include self-reported MMMU (Yue et al., 2024) results to demonstrate their significant correlation with hallucination rates: the Pearson correlation between −log HT and MMMU score is 0.902 with a p-value of 3.45×10−4. (Table 2)
  - [TLDR: Token-Level Detective Reward Model for Large Vision Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/70217f4d06e57a2395f03b4bc136361a-Paper-Conference.pdf)
