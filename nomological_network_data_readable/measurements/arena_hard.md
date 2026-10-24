# Arena-Hard
**Type:** Measurement  
**Referenced in:** 81 papers  
**Also known as:** Arena Hard, Arena-hard, ArenaHard, Arena Hard v0.1, Arena-Hard v0.1, arena-hard-v0.1, Arena-Hard-Auto, Arena-Hard-Auto-v0.1  

## State of the Field

**What it is.** Across papers, Arena-Hard is most commonly described as a challenging benchmark of technical problem-solving and open-ended instruction-following prompts, often drawn from challenging user queries or live chatbot data. The prevailing setup uses pairwise comparison against a strong baseline, with GPT evaluators or other LLM judges selecting preferred responses and reporting win rates, and several definitions emphasize close agreement with human preference rankings. Some papers use the name more broadly for versioned releases and automated variants, including LLM-judge forms, while a smaller line of work treats one release as a pool of prompts and system responses for judge-ranking studies.

**What it is claimed to measure.** Papers use Arena-Hard to measure a broad spread of targets, it is linked to 9 constructs and 7 behavioral indicators. The prevailing use is for instruction following ability and instruction following, with recurring claims that it measures human preference alignment, alignment, and technical problem solving rather than only one outcome. Other constructs and indicators appear less often.

**Space of uses.** Most papers use Arena-Hard alongside MT-Bench and AlpacaEval, usually as one of the main open-ended benchmarks in evaluation bundles. Some papers instead position it as a secondary helpfulness measure, a cross-domain validation set, or a source resource for judge-ranking studies, and some pair it with WildBench. Separate work reports that Arena-Hard is correlated with Chatbot Arena and with LiveBench.

**Concerns raised.** Some papers describe the benchmark as skewed toward technical content, noting a pronounced bias toward technical topics and an excessive concentration on coding and debugging tasks.

## Sources

**[Taming Overconfidence in LLMs: Reward Calibration in RLHF](https://proceedings.iclr.cc/paper_files/paper/2025/file/29fb6e1456b3d8b57ede5c45aa2c6537-Paper-Conference.pdf)**
> A benchmark containing challenging technical problem-solving queries, designed to have strong agreement with human preference rankings for model evaluation.

**[Self-play with Execution Feedback: Improving Instruction-following Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/62203a74e233e933b160711e791e1a02-Paper-Conference.pdf) (as "Arena-hard")**
> A real-world chatbot evaluation set used to validate instruction-following performance in more open-ended settings.

**[HelpSteer2-Preference: Complementing Ratings with Preferences](https://proceedings.iclr.cc/paper_files/paper/2025/file/8e237ec6d3bc86f6d4967e9c7eef37ff-Paper-Conference.pdf) (as "Arena Hard")**
> A benchmark that uses pairwise comparisons and human voting to evaluate the performance of aligned language models on challenging prompts.

**[WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild](https://proceedings.iclr.cc/paper_files/paper/2025/file/771155abaae744e08576f1f3b4b7ac0d-Paper-Conference.pdf) (as "ArenaHard")**
> A benchmark sampling tasks from Chatbot Arena to evaluate LLMs, often concentrating on coding and debugging.

**[JuStRank: Benchmarking LLM Judges for System Ranking](https://aclanthology.org/2025.acl-long.34.pdf) (as "Arena Hard v0.1")**
> Dataset of 500 challenging instructions and responses from 63 systems, used to generate judge scores in the JuStRank benchmark.

**[Iterative Nash Policy Optimization: Aligning LLMs with General Preferences via No-Regret Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/4eef032250ac525903063cd760cb0480-Paper-Conference.pdf) (as "Arena-Hard v0.1")**
> A benchmark of 500 technical problem-solving questions used to compare model answers against GPT-4-0314 reference responses with GPT-4 Turbo judging pairwise outcomes.

**[Re-evaluating Open-ended Evaluation of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/57a009897ab00e2d811a4581ad1f7239-Paper-Conference.pdf) (as "arena-hard-v0.1")**
> A dataset of 500 prompts selected specifically to be difficult and to effectively differentiate the performance of frontier large language models.

**[Style Outweighs Substance: Failure Modes of LLM Judges in Alignment Benchmarking](https://proceedings.iclr.cc/paper_files/paper/2025/file/1eb36d07ebb13be16ddbda679a95018b-Paper-Conference.pdf) (as "Arena-Hard-Auto")**
> A popular LLM-judge benchmark that conducts pairwise comparisons against a baseline model, using a Likert scale and chain-of-thought prompting to score outputs.

**[``Give Me BF16 or Give Me Death''? Accuracy-Performance Trade-Offs in LLM Quantization](https://aclanthology.org/2025.acl-long.1304.pdf) (as "Arena-Hard-Auto-v0.1")**
> Automated evaluation that uses an LLM to judge model responses to 500 complex prompts, replicating LMSYS Chatbot Arena with 89% agreement with human rankings, designed to assess chat and instruction-following capabilities.

## Relationships

### Arena-Hard →
- **LiveBench** (measurements) — *correlates*
  > LiveBench has a 0.91 and 0.88 correlation with ChatBot Arena and Arena-Hard, respectively.
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
- **Chatbot Arena** (measurements) — *correlates*
  > Arena-Hard-Auto achieves stronger model separability, tighter confidence intervals, and achieve 98.6% correlation with Chatbot Arena rankings, making it a fast, reliable predictor of downstream model performance. (Section 1)
  - [From Crowdsourced Data to High-quality Benchmarks: Arena-Hard and Benchbuilder Pipeline](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25h/li25h.pdf)

### → Arena-Hard
- **Instruction following** (behaviors tasks) — *measured_by*
  > We primarily assess our models using three of the most popular open-ended instruction-following benchmarks: MT-Bench [94], AlpacaEval 2 [51], and Arena-Hard v0.1 [50].
  - [SimPO: Simple Preference Optimization with a Reference-Free Reward](https://proceedings.neurips.cc/paper_files/paper/2024/file/e099c1c9699814af0be873a175361713-Paper-Conference.pdf)
- **Instruction following ability** (constructs) — *measured_by*
  > To explore AUTOIF on more natural Instruction-following scenario, we further introduce the complex instruction-following dataset InfoBench(Qin et al., 2024b), the general natural instruction evaluation set MT-Bench (Zheng et al., 2023) and the real-world chatbot evaluation set Arena-hard (Zheng et al., 2023) as cross domain validation. (Section 4).
  - [Self-play with Execution Feedback: Improving Instruction-following Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/62203a74e233e933b160711e791e1a02-Paper-Conference.pdf)
- **Human preference alignment** (constructs) — *measured_by*
  > Arena-Hard is a more challenging benchmark that closely aligns with the human preference ranking from Chatbot Arena
  - [Weighted-Reward Preference Optimization for Implicit Model Fusion](https://proceedings.iclr.cc/paper_files/paper/2025/file/a49ca20266ea2d0d2dc1e3bb49196998-Paper-Conference.pdf)
- **Technical problem solving** (behaviors tasks) — *measured_by*
  > “It spans 250 high-quality topic clusters including 500 well-defined technical problem-solving queries.”
  - [Weighted-Reward Preference Optimization for Implicit Model Fusion](https://proceedings.iclr.cc/paper_files/paper/2025/file/a49ca20266ea2d0d2dc1e3bb49196998-Paper-Conference.pdf)
- **Conversational ability** (constructs) — *measured_by*
  > In this section we evaluate the Jamba-1.5 models on two chatbot scenarios: Arena-Hard (Li et al., 2024b), a set of 500 challenging user queries that uses GPT4-Turbo as a judge, and WildBench (Lin et al., 2024)... (Section 7.3)
  - [Jamba: Hybrid Transformer-Mamba Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a9ed43fa31dc8b4a7d7a673d713dcb5f-Paper-Conference.pdf)
- **Helpfulness** (constructs) — *measured_by*
  > In addition, we also use AlpacaEval 2.0 Length Controlled [37] and Arena Hard [38] as secondary measures of helpfulness, following [33, 39].
  - [HelpSteer 2: Open-source dataset for training top-performing reward models](https://proceedings.neurips.cc/paper_files/paper/2024/file/02fd91a387a6a5a5751e81b58a75af90-Paper-Datasets_and_Benchmarks_Track.pdf)
- **General ability** (constructs) — *measured_by*
  > Additionally, SPPO exhibits strong generalist abilities across different tasks, including MT-Bench, the Open LLM Leaderboard, and the more recent, more challenging benchmark, Arena-Hard.
  - [Self-Play Preference Optimization for Language Model Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/e48fa1c4f08fd1ae35d5df8352c3106d-Paper-Conference.pdf)
- **Alignment** (constructs) — *measured_by*
  > We evaluate alignment effectiveness using three benchmarks: ... (2) Arena-Hard
  - [RMB: Comprehensively benchmarking reward models in LLM alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/427f20d90386fd27804f1831d6a3d48f-Paper-Conference.pdf)
- **Code debugging** (behaviors tasks) — *measured_by*
  > Conversely, ArenaHard, sampling 500 tasks from ChatbotArena, displays an excessive concentration on coding and debugging tasks, accounting for over 57% of its content. (Section 1)
  - [WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild](https://proceedings.iclr.cc/paper_files/paper/2025/file/771155abaae744e08576f1f3b4b7ac0d-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > We primarily evaluate all the models using two recent proposed instruction-following QA benchmarks: Arena-Hard (Li et al., 2024) and Wild-Bench(Lin et al., 2024).
  - [As Simple as Fine-tuning: LLM Alignment via Bidirectional Negative Feedback Loss](https://proceedings.iclr.cc/paper_files/paper/2025/file/4bc4e9ecd5ae4a75048dc216a770cba1-Paper-Conference.pdf)
- **Text generation quality** (constructs) — *measured_by*
  > We conduct comprehensive evaluations using AlpacaEval 2.0, Arena-Hard, MT-Bench, FLASK benchmarks for assessing the response quality across various dimensions.
  - [Mixture-of-Agents Enhances Large Language Model Capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/5434be94e82c54327bb9dcaf7fca52b6-Paper-Conference.pdf)
- **Dialogue generation** (behaviors tasks) — *measured_by*
  > These benchmarks assess the models’ conversational abilities across a diverse range of queries and are extensively used by the research community.
  - [AlphaDPO: Adaptive Reward Margin for Direct Preference Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25af/wu25af.pdf)
- **Open-ended instruction following** (behaviors tasks) — *measured_by*
  > We employed three challenging benchmarks to evaluate the open-ended instruction-following task: MT-Bench (Zheng et al., 2023), AlpacaEval 2 (Li et al., 2023), and Arena-Hard (Li et al., 2024). (Section 5.1)
  - [Weights-Rotated Preference Optimization for Large Language Models](https://aclanthology.org/2025.emnlp-main.1329.pdf)
- **Cross-domain generalization** (constructs) — *measured_by*
  > "we further introduce the complex instruction-following dataset InfoBench(Qin et al., 2024b), the general natural instruction evaluation set MT-Bench (Zheng et al., 2023) and the real-world chatbot evaluation set Arena-hard (Zheng et al., 2023) as cross domain validation."
  - [Self-play with Execution Feedback: Improving Instruction-following Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/62203a74e233e933b160711e791e1a02-Paper-Conference.pdf)

### Associated with
- **Human evaluation** (measurements)
  > “We conducted human evaluations on the AlpacaEval2 and Arena-Hard datasets using the Gemma2-9B model.”
  - [Earlier Tokens Contribute More: Learning Direct Preference Optimization From Temporal Decay Perspective](https://proceedings.iclr.cc/paper_files/paper/2025/file/cd9b4a28fb9eebe0430c3312a4898a41-Paper-Conference.pdf)
