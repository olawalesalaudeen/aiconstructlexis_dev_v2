# MMLU-Pro
**Type:** Measurement  
**Referenced in:** 79 papers  
**Also known as:** MMLU-PRO, MMLU Pro, MMLU PRO, MMLU-pro  

## State of the Field

**What it is.** Across papers, the prevailing description is of an enhanced, more challenging version of MMLU for multi-task or multi-discipline language understanding and reasoning. It is repeatedly described as a multiple-choice benchmark, in one source with up to ten options, covering 14 domains or categories and a wide range of academic and professional subjects. Definitions commonly emphasize more complex reasoning questions and more distractor answer choices, and some also mention reduced dataset noise, a different evaluation protocol, or the use of subject subsets rather than the full benchmark.

**What it is claimed to measure.** Papers use MMLU-Pro to measure a broad set of targets rather than one shared construct: it is linked to 14 constructs and 5 behavioral indicators. The most recurrent claims are that it measures natural language understanding, reasoning, and world knowledge, while some papers use it for multiple-choice question answering and language understanding task performance. The remaining links spread across additional constructs and indicators rather than converging on a single measurement claim.

**Space of uses.** Papers relate it to two other instruments, JudgeBench and the Open LLM Leaderboard. More broadly, it is usually used as one benchmark within larger evaluation suites, often alongside MMLU, GSM8K, and BBH, and papers position it variously as a knowledge-category benchmark, a leaderboard task, a text-task validation when vision is added, and an out-of-distribution or out-domain check.

**Concerns raised.** One paper explicitly notes that, despite more challenging and reasoning-focused questions, MMLU-Pro remains constrained by the limitations of the multiple-choice format. Papers also describe its extra distractor options as reducing correct guessing by chance, and one paper claims this boosts the benchmark's difficulty and robustness.

## Sources

**[Cal-DPO: Calibrated Direct Preference Optimization for Language Model Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/cf8b2205e39f81726a8d828ecbe00ad0-Paper-Conference.pdf) (as "MMLU-PRO")**
> A multi-task language understanding benchmark used here to evaluate reasoning-oriented performance on the UltraFeedback-finetuned models.

**[Can LLMs Understand Time Series Anomalies?](https://proceedings.iclr.cc/paper_files/paper/2025/file/05774fb74e863308c4b460c9f49f6918-Paper-Conference.pdf)**
> A benchmark used to validate that adding a vision modality to an LLM does not degrade its performance on text-based tasks.

**[How to Evaluate Reward Models for RLHF](https://proceedings.iclr.cc/paper_files/paper/2025/file/2e01083b381b4865919b4915ef32e3d2-Paper-Conference.pdf) (as "MMLU Pro")**
> A verifiable benchmark used in PPE to assess a model's general knowledge.

**[Magnetic Preference Optimization: Achieving Last-iterate Convergence for Language Model Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/5833b4daf5b076dd1cdb362b163dff0c-Paper-Conference.pdf) (as "MMLU PRO")**
> A more robust and challenging version of the Massive Multitask Language Understanding (MMLU) benchmark.

**[DOTS: Learning to Reason Dynamically in LLMs via Optimal Reasoning Trajectories Search](https://proceedings.iclr.cc/paper_files/paper/2025/file/5e5d6f9ac33ba9349ba7b2be9f21bad9-Paper-Conference.pdf) (as "MMLU-pro")**
> A scientific benchmark used in the paper’s out-of-distribution evaluation.

## Relationships

### → MMLU-Pro
- **Natural language understanding** (constructs) — *measured_by*
  > These benchmarks consist of multiple-choice questions, assessing various aspects of the model's natural language understanding. For MMLU and MMLU-Pro, we use macro accuracy...
  - [HMoRA: Making LLMs More Effective with Hierarchical Mixture of LoRA Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/e43a33994a28f746dcfd53eb51ed3c2d-Paper-Conference.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > “The MMLU-Pro dataset, while enhancing the complexity of MMLU by incorporating more challenging, reasoning-focused questions, remains constrained by the limitations of the multiple-choice format.”
  - [MMLU-Pro: A More Robust and Challenging Multi-Task Language Understanding Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/ad236edc564f3e3156e1b2feafb99a24-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Reasoning** (constructs) — *measured_by*
  > In this paper, we introduce MMLU-Pro: a comprehensive benchmark designed for proficient-level multi-discipline language understanding and reasoning. (Section 1).
  - [MMLU-Pro: A More Robust and Challenging Multi-Task Language Understanding Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/ad236edc564f3e3156e1b2feafb99a24-Paper-Datasets_and_Benchmarks_Track.pdf)
- **World knowledge** (constructs) — *measured_by*
  > MMLU and MMLU Pro measure the general knowledge of LLMs
  - [Q-Adapter: Customizing Pre-trained LLMs to New Preferences with Forgetting Mitigation](https://proceedings.iclr.cc/paper_files/paper/2025/file/6ebfb4ec1926fc6409df3bcf7ce957e8-Paper-Conference.pdf)
- **Knowledge** (constructs) — *measured_by*
  > To rigorously assess and push the capabilities of these LLMs, we introduce MMLU-Pro, a new benchmark designed to test the upper limits of reasoning and knowledge in advanced language models. (Section 2.1).
  - [MMLU-Pro: A More Robust and Challenging Multi-Task Language Understanding Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/ad236edc564f3e3156e1b2feafb99a24-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Generalization** (constructs) — *measured_by*
  > For the OOD evaluation, we test each approach’s generalization ability on Deepmind Math (Saxton et al., 2019), MMLU-pro (Wang et al., 2024), strategyQA (Geva et al., 2021), and DROP (Dua et al., 2019). (Section 3.1)
  - [DOTS: Learning to Reason Dynamically in LLMs via Optimal Reasoning Trajectories Search](https://proceedings.iclr.cc/paper_files/paper/2025/file/5e5d6f9ac33ba9349ba7b2be9f21bad9-Paper-Conference.pdf)
- **Scientific knowledge** (constructs) — *measured_by*
  > To assess their scientific knowledge, which serves as the foundation for scientific literature understanding, we evaluate the base models on scientific subjects – biology, chemistry, and health in MMLU-Pro (Wang et al., 2024) and MaScQA (Zaki et al., 2023) (Section 3.1.1)
  - [SciLitLLM: How to Adapt LLMs for Scientific Literature Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/8cb240de90aa20207db944c6c88a7cc0-Paper-Conference.pdf)
- **Multitask language understanding** (constructs) — *measured_by*
  > we evaluate unsupervised ICL on the GSM8K dataset that requires reasoning capabilities and on the MMLU(-Pro) dataset that covers broad knowledge of different disciplines. (Section 5.1)
  - [Large (Vision) Language Models are Unsupervised In-Context Learners](https://proceedings.iclr.cc/paper_files/paper/2025/file/3e887bf77d0ba6db38802e552a0d81d2-Paper-Conference.pdf)
- **General reasoning** (constructs) — *measured_by*
  > To evaluate the generalization ability of our method and mitigate the risk of catastrophic forgetting, we conduct experiments on commonsense and reasoning datasets, including CSQA (Talmor et al., 2018), Hellaswag (Zellers et al., 2019), and MMLU-pro (Wang et al., 2024). (Section 5.6)
  - [CulFiT: A Fine-grained Cultural-aware LLM Training Paradigm via Multilingual Critique Data Synthesis](https://aclanthology.org/2025.acl-long.1092.pdf)
- **Contextual understanding** (constructs) — *measured_by*
  > For evaluation, we selected eight general-purpose benchmarks to assess context awareness, including MMLU (5-shot) (Hendrycks et al., 2020), MMLU-PRO (5-shot) (Wang et al., 2024), GPQA (0-shot) (Rein et al., 2023), BBH (3-shot) (Srivastava et al., 2023), WinoGrande (5-shot) (Sakaguchi et al., 2019), GSM8k (8-shot) (Cobbe et al., 2021), MATH (4-shot) (Lightman et al., 2023), and DROP (3-shot) (Dua et al., 2019). (Section 6)
  - [HoPE: A Novel Positional Encoding Without Long-Term Decay for Enhanced Context Awareness and Extrapolation](https://aclanthology.org/2025.acl-long.1123.pdf)
- **Classification** (behaviors tasks) — *measured_by*
  > The classification benchmarks include ARC-Challenge (Clark et al., 2018), MMLU-Pro (Wang et al., 2024), and MixEval (Ni et al., 2024). (Section 5.2)
  - [A Unified Approach to Routing and Cascading for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dekoninck25a/dekoninck25a.pdf)
- **Complex reasoning question answering** (behaviors tasks) — *measured_by*
  > Additionally, we evaluate generative performance on complex reasoning tasks, such as GSM8K (Cobbe et al., 2021) with 5-shot prompting and MMLU-Pro Engineering/Law (Wang et al., 2024a) with zero-shot chain-of-thought.
  - [Lexico: Extreme KV Cache Compression via Sparse Coding over Universal Dictionaries](https://raw.githubusercontent.com/mlresearch/v267/main/assets/kim25ae/kim25ae.pdf)
- **Task generalization** (constructs) — *measured_by*
  > "To explore the efficacy of our general purpose ARCHON architectures, we evaluate them on three previously unseen tasks: GPQA (Rein et al., 2024), MMLU (Hendrycks et al., 2021), and MMLU Pro (Wang et al., 2024b)."
  - [An Architecture Search Framework for Inference-Time Techniques](https://raw.githubusercontent.com/mlresearch/v267/main/assets/saad-falcon25a/saad-falcon25a.pdf)
- **Chain-of-thought reasoning** (constructs) — *measured_by*
  > We evaluate our framework on four multi-step reasoning datasets: FOLIO (Han et al., 2022), ProofWriter (Tafjord et al., 2020), MMLU-Pro (Wang et al., 2024c) and GPQA (Rein et al., 2023) (Section 4.1).
  - [Stepwise Informativeness Search for Improving LLM Reasoning](https://aclanthology.org/2025.emnlp-main.1285.pdf)
- **Problem-solving ability** (constructs) — *measured_by*
  > MMLU-Pro: An enhanced version of the Massive Multitask Language Understanding (MMLU) benchmark, featuring challenging questions across 14 categories like physics, law, history, and so on to test real-world text understanding and complex problem solving (Section 2.2)
  - [Warm Up Before You Train: Unlocking General Reasoning in Resource-Constrained Settings](https://aclanthology.org/2025.emnlp-main.727.pdf)
- **Reasoning depth** (constructs) — *measured_by*
  > MMLU-Pro (Wang et al., 2024b) extends the original MMLU benchmark by introducing highly complex reasoning questions and more distractor options to better evaluate LLMs’ reasoning depth and robustness in English. (Section 2)
  - [MMLU-ProX: A Multilingual Benchmark for Advanced Large Language Model Evaluation](https://aclanthology.org/2025.emnlp-main.79.pdf)

### Associated with
- **JudgeBench** (measurements)
  > We use MMLU-Pro for the Knowledge category. (Section 3)
  - [JudgeBench: A Benchmark for Evaluating LLM-Based Judges](https://proceedings.iclr.cc/paper_files/paper/2025/file/9e720fce64f91114c49cfd640d821da3-Paper-Conference.pdf)
- **Open LLM Leaderboard** (measurements)
  > Table 2: Evaluation results on various tasks from the Huggingface Open Leaderboard v1 and v2. ... MMLU-PRO, BBH, MUSR, MATH, GSM8K, ARC
  - [On a Connection Between Imitation Learning and RLHF](https://proceedings.iclr.cc/paper_files/paper/2025/file/acf4a08f67724e9d2de34099f57a9c25-Paper-Conference.pdf)
