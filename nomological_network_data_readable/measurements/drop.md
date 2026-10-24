# DROP
**Type:** Measurement  
**Referenced in:** 35 papers  

## State of the Field

**What it is.** Papers most commonly describe DROP as a reading comprehension benchmark or dataset that requires discrete reasoning over paragraphs or passages, with recurring examples such as addition, counting, and sorting over paragraph-level content to answer questions. A smaller set of papers frame it more specifically as grounded or open-book question answering, and one paper describes it as a generation task for phrase or numeric answers. Definitions also mention variant uses, including decontextualized versions of a subset, and one paper says its queries mainly address History, Politics, Sports, Demographics, and Societal Issues.

**What it is claimed to measure.** Across papers, DROP is linked to 7 constructs and 3 behavioral indicators, so its measurement use is spread across several targets rather than centered on one. The prevailing usage is to measure reasoning and machine reading comprehension; recurring secondary uses are discrete reasoning, question answering, and contextual understanding, and other papers report it as measuring further targets as well.

**Space of uses.** Papers often place DROP inside broader evaluation suites alongside MMLU, BBH, SQuAD, NQ, and TriviaQA. In these setups it is used to evaluate model performance on reading comprehension, question answering, or reasoning, and some papers describe answers as needing to be grounded in in-context documents. A smaller line of work uses decontextualized subsets for additional experiments, and one paper reports subsampling 2000 training examples from the original train set.

## Sources

**[AlpaGasus: Training a Better Alpaca with Fewer Data](https://proceedings.iclr.cc/paper_files/paper/2024/file/9543942c237ded1b39b1fd37259ff88e-Paper-Conference.pdf)**
> A reading comprehension benchmark that requires discrete reasoning over paragraphs, such as addition, counting, or sorting.

## Relationships

### → DROP
- **Machine reading comprehension** (behaviors tasks) — *measured_by*
  > DROP [50] Task Reading comprehension with discrete reasoning (Table D.1).
  - [QuanTA: Efficient High-Rank Fine-Tuning of LLMs with Quantum-Informed Tensor Adaptation](https://proceedings.neurips.cc/paper_files/paper/2024/file/a7c17115db36193f6b83b71b0fe1d416-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > Moreover, MINIMA achieves superior performance over baselines with respect to ... reasoning (DROP, BBH, GSM8K)...
  - [Towards the Law of Capacity Gap in Distilling Language Models](https://aclanthology.org/2025.acl-long.1097.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > We also evaluate question answering on SQuAD [70], NQ [46], TriviaQA [40], and Drop [20], where models must ground their answers in in-context documents. (Section 4.1.2)
  - [Gated Slot Attention for Efficient Linear-Time Sequence Modeling](https://proceedings.neurips.cc/paper_files/paper/2024/file/d3f39e51f5f634fb16cc3e658f8512b9-Paper-Conference.pdf)
- **Discrete reasoning** (constructs) — *measured_by*
  > DROP [50] Task Reading comprehension with discrete reasoning (Table D.1).
  - [QuanTA: Efficient High-Rank Fine-Tuning of LLMs with Quantum-Informed Tensor Adaptation](https://proceedings.neurips.cc/paper_files/paper/2024/file/a7c17115db36193f6b83b71b0fe1d416-Paper-Conference.pdf)
- **In-context learning** (constructs) — *measured_by*
  > Please note that, among them, BBH, DROP, GSM8K, and MATH are ICL tasks with several independent in-context examples. (Section 3.1)
  - [Block-Attention for Efficient Prefilling](https://proceedings.iclr.cc/paper_files/paper/2025/file/a03037317560b8c5f2fb4b6466d4c439-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > For the OOD evaluation, we test each approach’s generalization ability on Deepmind Math (Saxton et al., 2019), MMLU-pro (Wang et al., 2024), strategyQA (Geva et al., 2021), and DROP (Dua et al., 2019). (Section 3.1)
  - [DOTS: Learning to Reason Dynamically in LLMs via Optimal Reasoning Trajectories Search](https://proceedings.iclr.cc/paper_files/paper/2025/file/5e5d6f9ac33ba9349ba7b2be9f21bad9-Paper-Conference.pdf)
- **Contextual understanding** (constructs) — *measured_by*
  > For evaluation, we selected eight general-purpose benchmarks to assess context awareness, including MMLU (5-shot) (Hendrycks et al., 2020), MMLU-PRO (5-shot) (Wang et al., 2024), GPQA (0-shot) (Rein et al., 2023), BBH (3-shot) (Srivastava et al., 2023), WinoGrande (5-shot) (Sakaguchi et al., 2019), GSM8k (8-shot) (Cobbe et al., 2021), MATH (4-shot) (Lightman et al., 2023), and DROP (3-shot) (Dua et al., 2019). (Section 6)
  - [HoPE: A Novel Positional Encoding Without Long-Term Decay for Enhanced Context Awareness and Extrapolation](https://aclanthology.org/2025.acl-long.1123.pdf)
- **General reasoning** (constructs) — *measured_by*
  > We compare training the language world model with policy (FTA-P) with the baseline (Llama-3.1-8B SFT on the same dataset) in several benchmarks, including math500 (Hendrycks et al., 2021), gsm8k (Cobbe et al., 2021), AIME and Drop (Dua et al., 2019), where the first three are mathematical reasoning tasks, and the fourth is a general reasoning task. (Section 4.3.1)
  - [Controlling Large Language Model with Latent Action](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jia25e/jia25e.pdf)
