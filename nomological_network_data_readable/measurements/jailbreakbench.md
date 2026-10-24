# JailbreakBench
**Type:** Measurement  
**Referenced in:** 31 papers  
**Also known as:** Jailbreakbench, JBB-Behavior, JBB-Behaviors, JBB  

## State of the Field

**What it is.** Most papers treat JailbreakBench as a standardized or open benchmark for evaluating a model's safety, robustness, or vulnerability under jailbreak attacks. The prevailing description is a dataset of harmful queries, instructions, or unsafe behavior prompts, often described as 100 selected prompts or instances, and one paper describes it as adversarial prompts collected from multiple sources, including GCG and PAIR attacks. A smaller line of work emphasizes the procedure around the dataset, describing an LLM-as-judge protocol, a classifier-based setup with a pretrained Llama-3-70B-Instruct model, or a leaderboard of submitted attacks, and one paper distinguishes template and direct forms.

**What it is claimed to measure.** Across recorded relationships, papers use it to measure 4 constructs and 2 behavioral indicators. The construct links cover Harmlessness, Adversarial robustness, Safety, and Safety robustness, while the behavioral links include Jailbreaking and 1 other indicator, so the reported measurement claims are spread across several safety-oriented targets rather than a single named construct.

**Space of uses.** Papers commonly use it alongside HarmBench and AdvBench, and also alongside Malicious Instruct, StrongReject, and WildChat. Most papers position it as an evaluation benchmark for jailbreak or defense performance, often reporting attack success rate on sampled prompts or instances; some instead use its LLM-judge protocol, use JBB to collect prior jailbreak results for experience initialization, or refer to attacks submitted to its leaderboard.

## Sources

**[Jailbreak Antidote: Runtime Safety-Utility Balance via Sparse Representation Adjustment in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/36e3f9e6162d597adada4e0e4fce6861-Paper-Conference.pdf)**
> A standardized benchmark designed to evaluate a large language model's safety and robustness against a variety of jailbreak attacks.

**[On the Role of Attention Heads in Large Language Model Safety](https://proceedings.iclr.cc/paper_files/paper/2025/file/d0bcff6425bbf850ec87d5327a965db9-Paper-Conference.pdf) (as "Jailbreakbench")**
> A harmful-query benchmark used to test jailbreak resistance and safety degradation after head ablation.

**[Reasoning Model Unlearning: Forgetting Traces, Not Just Answers, While Preserving Reasoning Skills](https://aclanthology.org/2025.emnlp-main.220.pdf) (as "JBB-Behavior")**
> JBB-Behavior, a safety benchmark used to assess harmful or unsafe behavior generation.

**[SafeKey: Amplifying Aha-Moment Insights for Safety Reasoning](https://aclanthology.org/2025.emnlp-main.1291.pdf) (as "JBB-Behaviors")**
> Safety benchmark dataset containing harmful behaviors used to evaluate model responses to malicious queries.

**[Stand on The Shoulders of Giants: Building JailExpert from Previous Attack Experience](https://aclanthology.org/2025.emnlp-main.190.pdf) (as "JBB")**
> Jailbreak Benchmark (JBB), a dataset used here to collect jailbreak results for experience initialization and evaluation of jailbreak attacks.

## Relationships

### → JailbreakBench
- **Harmlessness** (constructs) — *measured_by*
  > For harmlessness evaluation, we generated responses from the aligned LLM on a mixed dataset of AdvBench (Zou et al., 2023) and JailbreakBench (Chao et al., 2024)...
  - [TIS-DPO: Token-level Importance Sampling for Direct Preference Optimization With Estimated Weights](https://proceedings.iclr.cc/paper_files/paper/2025/file/7fb9f39075a5202472676a7531568212-Paper-Conference.pdf)
- **Jailbreaking** (behaviors tasks) — *measured_by*
  > We adopt Attack Success Rate (ASR) as an evaluation metric for successful jailbreaks following the default framework employed in HarmBench and JbBench. (Section 5.4)
  - [SABER: Uncovering Vulnerabilities in Safety Alignment via Cross-Layer Residual Connection](https://aclanthology.org/2025.emnlp-main.825.pdf)
- **Safety** (constructs) — *measured_by*
  > We evaluated Jailbreak Antidote using JailbreakBench (Chao et al., 2024) for assessing safety, focusing on 100 harmful prompts. (Section 5.1)
  - [Jailbreak Antidote: Runtime Safety-Utility Balance via Sparse Representation Adjustment in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/36e3f9e6162d597adada4e0e4fce6861-Paper-Conference.pdf)
- **Adversarial robustness** (constructs) — *measured_by*
  > To assess how robust our models are to adversarial prompt injection, we evaluate them on the JailBreakBench dataset. (Section 3.3.4. ADVERSARIAL ROBUSTNESS EVALUATION)
  - [POROver: Improving Safety and Reducing Overrefusal in Large Language Models with Overgeneration and Preference Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/karaman25a/karaman25a.pdf)
