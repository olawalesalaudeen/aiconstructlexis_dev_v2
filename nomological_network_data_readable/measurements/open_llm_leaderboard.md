# Open LLM Leaderboard
**Type:** Measurement  
**Referenced in:** 54 papers  
**Also known as:** Huggingface Open Leaderboard, Open LLM Leaderboards, HuggingFace open LLM leaderboard, OpenLLM LeaderBoard, OpenLLM leaderboard, Hugging Face Open LLM Leaderboard, OpenLM leaderboard, HuggingFace Open LLM Leaderboard, Open-LLM, Open LLM leaderboard, LLM Leaderboard, Open-LLM Leaderboard, Open LLM Benchmarks, OPENLLM, OpenLLM Leaderboard  

## State of the Field

**What it is.** Most commonly, papers treat the Open LLM Leaderboard as a public HuggingFace evaluation suite or leaderboard that ranks open, open-source, or open-access LLMs on standardized downstream or academic benchmarks. The prevailing content description is a bundle of reasoning and knowledge tasks, often the six-task mix of ARC, HellaSwag, MMLU, TruthfulQA, WinoGrande, and GSM8K, though some papers describe four-task versions centered on ARC-Challenge, HellaSwag, MMLU, and TruthfulQA, and others report five-task or ten-benchmark selections. A smaller line of work emphasizes versions and formats such as v1, v2, v12, OpenLLM 2, and Leaderboard 2, or treats it as a few-shot evaluation methodology built on the Eleuther AI Language Model Evaluation Harness.

**What it is claimed to measure.** Papers use it to measure 10 constructs and 3 behavioral indicators, so the reported measurement claims are spread across multiple targets rather than centered on one. The most frequent construct links are Reasoning, General ability, Truthfulness, Alignment tax, and Commonsense reasoning, with five other constructs also linked; papers also use it for Catastrophic forgetting, Instruction following, and Multiple-choice question answering. In relationship evidence, authors describe the suite as measuring commonsense reasoning, truthfulness, math problem-solving, general ability on real-world tasks, and overall language proficiency via the average score across its six tasks.

**Space of uses.** In use, papers usually position it as a headline standardized benchmark for downstream, short-context, or few-shot evaluation, and they often pair it with MT-Bench and AlpacaEval variants, sometimes alongside LongBench, Arena-Hard, or Anthropic-HH. It is linked to 11 measurement instruments, most often MMLU, GSM8K, ARC, BIG-Bench Hard, and TruthfulQA, with six other instruments also mentioned. Some papers also use its benchmark scores, correctness data, or sample-wise evaluation files as source material for IRT estimation, similarity analyses, or compiled standardized comparisons, and one paper notes adherence to the recommended lm-evaluation-harness protocols.

**Concerns raised.** Only a few papers raise explicit concerns. One states that the leaderboard "only utilizes accuracy" and does not take model uncertainty into account, and another remarks that models can overfit on leaderboards like the OpenLLM leaderboard.

## Sources

**[SimPO: Simple Preference Optimization with a Reference-Free Reward](https://proceedings.neurips.cc/paper_files/paper/2024/file/e099c1c9699814af0be873a175361713-Paper-Conference.pdf) (as "Huggingface Open Leaderboard")**
> A suite of benchmarks used to evaluate and rank open-source language models on a variety of downstream tasks.

**[Star-Agents: Automatic Data Optimization with LLM Agents for Instruction Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/0852b88e96d973bd4e21b673f51621d0-Paper-Conference.pdf) (as "Open LLM Leaderboards")**
> A public platform that ranks and evaluates the performance of various large language models on a standardized set of benchmarks.

**[Benchmarking LLMs via Uncertainty Quantification](https://proceedings.neurips.cc/paper_files/paper/2024/file/1bdcb065d40203a00bd39831153338bb-Paper-Datasets_and_Benchmarks_Track.pdf) (as "HuggingFace open LLM leaderboard")**
> A widely recognized evaluation platform that compares LLM performance, primarily utilizing accuracy as the evaluation metric.

**[RocketEval: Efficient automated LLM evaluation via grading checklist](https://proceedings.iclr.cc/paper_files/paper/2025/file/937defc32e8ad2daba66a0e434177ae9-Paper-Conference.pdf) (as "OpenLLM LeaderBoard")**
> An evaluation suite that ranks and tracks the performance of open-source large language models on various benchmarks.

**[Preserving Diversity in Supervised Fine-Tuning of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a548ef984f30bca3abdc09f43743827f-Paper-Conference.pdf) (as "OpenLLM leaderboard")**
> An evaluation suite that aggregates model performance across a standard set of academic benchmarks to measure general reasoning and knowledge capabilities.

**[Improving Data Efficiency via Curating LLM-Driven Rating Systems](https://proceedings.iclr.cc/paper_files/paper/2025/file/faa6144674bce872365874c576b4f56f-Paper-Conference.pdf) (as "OpenLLM Leaderboard")**
> An evaluation suite comprising several standardized benchmarks used to assess the performance of large language models on various tasks.

**[PhyloLM: Inferring the Phylogeny of Large Language Models and Predicting their Performances in Benchmarks](https://proceedings.iclr.cc/paper_files/paper/2025/file/a2e28663712d5a3429a98918c3058f7b-Paper-Conference.pdf) (as "Hugging Face Open LLM Leaderboard")**
> An evaluation suite that ranks and tracks the performance of open-access LLMs on a set of standard benchmarks.

**[Diffusion-based Neural Network Weights Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/f74d79573d71078848973009d0e99bdb-Paper-Conference.pdf) (as "OpenLM leaderboard")**
> A public platform for evaluating and ranking the performance of large language models across a standardized suite of benchmarks.

**[Joint Reward and Policy Learning with Demonstrations and Human Feedback Improves Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/0ad6ebd11593822b8a6d5873ca9c5b0b-Paper-Conference.pdf) (as "HuggingFace Open LLM Leaderboard")**
> An evaluation framework that measures LLM performance across a standardized suite of diverse academic benchmarks.

**[Concept-ROT: Poisoning Concepts in Large Language Models with Model Editing](https://proceedings.iclr.cc/paper_files/paper/2025/file/cb7baa005c239c1c7c4098c2a9e00450-Paper-Conference.pdf) (as "Open-LLM")**
> Open-LLM benchmark used to assess the impact of poisoning on benign model performance.

**[SimPER: A Minimalist Approach to Preference  Alignment without Hyperparameters](https://proceedings.iclr.cc/paper_files/paper/2025/file/278fb93d93a1a06927f2fdc17af2384e-Paper-Conference.pdf)**
> A public leaderboard by HuggingFace that evaluates large language models on a suite of standardized benchmarks.

**[MERGE$^3$: Efficient Evolutionary Merging on Consumer-grade GPUs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/mencattini25a/mencattini25a.pdf) (as "Open LLM leaderboard")**
> A public platform that ranks and evaluates large language models on various benchmarks, used in this paper as a source of model evaluation data for IRT parameter estimation.

**[CABS: Conflict-Aware and Balanced Sparsification for Enhancing Model Merging](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25x/yang25x.pdf) (as "LLM Leaderboard")**
> Benchmark suite assessing large language models on six key tasks: AI2 Reasoning Challenge, HellaSwag, MMLU, TruthfulQA, Winogrande, and GSM8K, using the Eleuther AI Language Model Evaluation Harness.

**[Intuitive Fine-Tuning: Towards Simplifying Alignment into a Single Process](https://aclanthology.org/2025.acl-long.6.pdf) (as "Open-LLM Leaderboard")**
> An evaluation suite that ranks large language models based on their performance across a collection of standardized benchmarks.

**[JI2S: JointInfluence‐Aware Instruction Data Selection for EfficientFine‐Tuning](https://aclanthology.org/2025.emnlp-main.26.pdf) (as "Open LLM Benchmarks")**
> A suite of standardized benchmarks used to evaluate the performance of large language models across a range of tasks.

**[Take the essence and discard the dross: A Rethinking on Data Selection for Fine-Tuning Large Language Models](https://aclanthology.org/2025.naacl-long.336.pdf) (as "OPENLLM")**
> Benchmark suite for evaluating open-source large language models on a range of tasks including reasoning, knowledge, and instruction following.

## Relationships

### → Open LLM Leaderboard
- **Truthfulness** (constructs) — *measured_by*
  > These benchmarks give us a glimpse into model knowledge, reasoning, and truthfulness. (Section 4)
  - [NEFTune: Noisy Embeddings Improve Instruction Finetuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/4bdeeaeb380b35302bbda1823d328c22-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > Additionally, SPPO exhibits strong generalist abilities across different tasks, including MT-Bench, the Open LLM Leaderboard, and the more recent, more challenging benchmark, Arena-Hard.
  - [Self-Play Preference Optimization for Language Model Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/e48fa1c4f08fd1ae35d5df8352c3106d-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > Reasoning ability is measured via the Open LLM Leaderboard (Beeching et al., 2023) using the Language Model Evaluation Harness (Gao et al., 2023). (Section 3.2)
  - [MAIN: Mutual Alignment Is Necessary for instruction tuning](https://aclanthology.org/2025.emnlp-main.644.pdf)
- **Catastrophic forgetting** (behaviors tasks) — *measured_by*
  > In this section, we show that GEM also helps mitigate forgetting and reduce alignment tax. We evaluate the models across six tasks: ARC, GSM8K, HellaSwag, MMLU, TruthfulQA, and WinoGrande, as listed on the OpenLLM leaderboard. (Section 6.2)
  - [Preserving Diversity in Supervised Fine-Tuning of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a548ef984f30bca3abdc09f43743827f-Paper-Conference.pdf)
- **Alignment tax** (constructs) — *measured_by*
  > In this section, we show that GEM also helps mitigate forgetting and reduce alignment tax. We evaluate the models across six tasks: ARC, GSM8K, HellaSwag, MMLU, TruthfulQA, and WinoGrande, as listed on the OpenLLM leaderboard. (Section 6.2)
  - [Preserving Diversity in Supervised Fine-Tuning of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a548ef984f30bca3abdc09f43743827f-Paper-Conference.pdf)
- **Commonsense reasoning** (constructs) — *measured_by*
  > This evaluation suite measures LLM performance across six tasks: commonsense reasoning (Arc (Clark et al., 2018), HellaSwag (Zellers et al., 2019), Winogrande (Sakaguchi et al., 2021)), multi-task language understanding (MMLU (Hendrycks et al., 2020)), mimicking human falsehoods (TruthfulQA (Lin et al., 2021)), and math problem-solving (GSM8K (Cobbe et al., 2021)).
  - [Joint Reward and Policy Learning with Demonstrations and Human Feedback Improves Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/0ad6ebd11593822b8a6d5873ca9c5b0b-Paper-Conference.pdf)
- **Mathematical reasoning** (constructs) — *measured_by*
  > This evaluation suite measures LLM performance across six tasks: ... and math problem-solving (GSM8K (Cobbe et al., 2021)).
  - [Joint Reward and Policy Learning with Demonstrations and Human Feedback Improves Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/0ad6ebd11593822b8a6d5873ca9c5b0b-Paper-Conference.pdf)
- **Language proficiency** (constructs) — *measured_by*
  > The average score across the 6 tasks (Average column) is commonly used as an indicator of overall language proficiency. (Table 2)
  - [TAID: Temporally Adaptive Interpolated Distillation for Efficient Knowledge Transfer in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/e664650506f1cf2b4696df892147c06e-Paper-Conference.pdf)
- **Instruction following** (behaviors tasks) — *measured_by*
  > "we also confirm that our safety-tuned model still preserves general instruction-following capabilities: as shown in Table B.2, the performance on the six tasks in the Open LLM Leaderboard changes insignificantly with safety tuning."
  - [Learning Diverse Attacks on Large Language Models for Robust Red-Teaming and Safety Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/9e128701ceca0ba03658a305faf39deb-Paper-Conference.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > We started from two LLM leaderboards: (1) HuggingFace’s Open LLM Leaderboard 21; and (2) Stanford’s Holistic Evaluation of Language Models (Helm) (Liang et al., 2023). Both use questions from the Massive Multitask Language Understanding (MMLU) question-answering dataset (Hendrycks et al., 2020), with multiple choice questions and labeled correct answers. (Section 3.1).
  - [Correlated Errors in Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/kim25e/kim25e.pdf)
- **Model merging** (behaviors tasks) — *measured_by*
  > “For large-scale model evaluation, we utilized the LLM Leaderboard benchmark”
  - [CABS: Conflict-Aware and Balanced Sparsification for Enhancing Model Merging](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25x/yang25x.pdf)
- **Instruction following ability** (constructs) — *measured_by*
  > To assess the effectiveness of the selected data, we adopt a multifaceted evaluation strategy targeting the instruction-following capabilities of fine-tuned models. First, we measure performance on several widely used benchmarks, including MT-Bench and the Open LLM benchmarks... (Section 5.1)
  - [JI2S: JointInfluence‐Aware Instruction Data Selection for EfficientFine‐Tuning](https://aclanthology.org/2025.emnlp-main.26.pdf)

### Associated with
- **MMLU** (measurements)
  > We tested the benchmarks available on the hugging face open llm leaderboard which includes MMLU, ARC, Hellaswag, TruthfulQA, Winogrande and GSM8k (HuggingFaceH4) and only included open access models for which the scores are available on the leaderboard. (Section 2.6)
  - [PhyloLM: Inferring the Phylogeny of Large Language Models and Predicting their Performances in Benchmarks](https://proceedings.iclr.cc/paper_files/paper/2025/file/a2e28663712d5a3429a98918c3058f7b-Paper-Conference.pdf)
- **GSM8K** (measurements)
  > We evaluate these LLMs using prompts of varying length, ambiguity, and context, sourced from the test set of ARC (Clark et al., 2018), GSM8K (Cobbe et al., 2021), HellaSwag (Zellers et al., 2019), MMLU (Hendrycks et al., 2021), Truthful QA (Lin et al., 2022), and Winogrande (Sakaguchi et al., 2019). These set the performance benchmarks on the HuggingFace Open LLM Leaderboard (Section 4.2)
  - [Transformer Block Coupling and its Correlation with Generalization in LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/3f7f788b479a26348605a9f97c465d22-Paper-Conference.pdf)
- **ARC** (measurements)
  > Table 2: Evaluation results on various tasks from the Huggingface Open Leaderboard v1 and v2. ... MMLU-PRO, BBH, MUSR, MATH, GSM8K, ARC
  - [On a Connection Between Imitation Learning and RLHF](https://proceedings.iclr.cc/paper_files/paper/2025/file/acf4a08f67724e9d2de34099f57a9c25-Paper-Conference.pdf)
- **BIG-Bench Hard** (measurements)
  > Table 2: Evaluation results on various tasks from the Huggingface Open Leaderboard v1 and v2. ... MMLU-PRO, BBH, MUSR, MATH, GSM8K, ARC
  - [On a Connection Between Imitation Learning and RLHF](https://proceedings.iclr.cc/paper_files/paper/2025/file/acf4a08f67724e9d2de34099f57a9c25-Paper-Conference.pdf)
- **TruthfulQA** (measurements)
  > We evaluate these LLMs using prompts of varying length, ambiguity, and context, sourced from the test set of ARC (Clark et al., 2018), GSM8K (Cobbe et al., 2021), HellaSwag (Zellers et al., 2019), MMLU (Hendrycks et al., 2021), Truthful QA (Lin et al., 2022), and Winogrande (Sakaguchi et al., 2019). These set the performance benchmarks on the HuggingFace Open LLM Leaderboard (Section 4.2)
  - [Transformer Block Coupling and its Correlation with Generalization in LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/3f7f788b479a26348605a9f97c465d22-Paper-Conference.pdf)
- **Uncertainty** (constructs)
  > Despite their usefulness, these leaderboards possess a significant limitation: They do not take into account the uncertainty of LLMs.
  - [Benchmarking LLMs via Uncertainty Quantification](https://proceedings.neurips.cc/paper_files/paper/2024/file/1bdcb065d40203a00bd39831153338bb-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MMLU-Pro** (measurements)
  > Table 2: Evaluation results on various tasks from the Huggingface Open Leaderboard v1 and v2. ... MMLU-PRO, BBH, MUSR, MATH, GSM8K, ARC
  - [On a Connection Between Imitation Learning and RLHF](https://proceedings.iclr.cc/paper_files/paper/2025/file/acf4a08f67724e9d2de34099f57a9c25-Paper-Conference.pdf)
- **MuSR** (measurements)
  > Table 2: Evaluation results on various tasks from the Huggingface Open Leaderboard v1 and v2. ... MMLU-PRO, BBH, MUSR, MATH, GSM8K, ARC
  - [On a Connection Between Imitation Learning and RLHF](https://proceedings.iclr.cc/paper_files/paper/2025/file/acf4a08f67724e9d2de34099f57a9c25-Paper-Conference.pdf)
- **lm-evaluation-harness** (measurements)
  > For the Open LLM Leaderboard, we adhere to the recommended Language Model Evaluation Harness (Gao et al., 2021) protocols. (Section 4.1)
  - [Advantage-Guided Distillation for Preference Alignment in Small Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/2f891d026c7ba978168621842bc6fe73-Paper-Conference.pdf)
- **HellaSwag** (measurements)
  > We evaluate these LLMs using prompts of varying length, ambiguity, and context, sourced from the test set of ARC (Clark et al., 2018), GSM8K (Cobbe et al., 2021), HellaSwag (Zellers et al., 2019), MMLU (Hendrycks et al., 2021), Truthful QA (Lin et al., 2022), and Winogrande (Sakaguchi et al., 2019). These set the performance benchmarks on the HuggingFace Open LLM Leaderboard (Section 4.2)
  - [Transformer Block Coupling and its Correlation with Generalization in LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/3f7f788b479a26348605a9f97c465d22-Paper-Conference.pdf)
- **WinoGrande** (measurements)
  > We evaluate these LLMs using prompts of varying length, ambiguity, and context, sourced from the test set of ARC (Clark et al., 2018), GSM8K (Cobbe et al., 2021), HellaSwag (Zellers et al., 2019), MMLU (Hendrycks et al., 2021), Truthful QA (Lin et al., 2022), and Winogrande (Sakaguchi et al., 2019). These set the performance benchmarks on the HuggingFace Open LLM Leaderboard (Section 4.2)
  - [Transformer Block Coupling and its Correlation with Generalization in LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/3f7f788b479a26348605a9f97c465d22-Paper-Conference.pdf)
- **TyDi QA** (measurements)
  > “We adopt ﬁve OpenLLM Leaderboard tasks as our benchmark for evaluation, including MMLU (Hendrycks et al., 2020), TruthfulQA (Lin et al., 2021), GSM (Cobbe et al., 2021), BBH (Suzgun et al., 2022), TydiQA (Clark et al., 2020).”
  - [Improving Data Efficiency via Curating LLM-Driven Rating Systems](https://proceedings.iclr.cc/paper_files/paper/2025/file/faa6144674bce872365874c576b4f56f-Paper-Conference.pdf)
