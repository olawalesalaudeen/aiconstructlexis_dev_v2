# AlpacaEval 2.0
**Type:** Measurement  
**Referenced in:** 123 papers  
**Also known as:** AlpacaEval2, AlpacaEval2.0, AlpacaEval-2, Alpaca Eval V2, Alpaca Eval 2.0, Alpaca Eval 2, Alpaca-Eval-2, AlpacaEval-V2, AlpacaEvalv2, Alpaca-Eval V2, AlpacaEval v2.0, AlpacaEval 2, Length-controlled AlpacaEval 2.0, AlpacaEval 2.0 Length Controlled, Length-Controlled AlpacaEval, AlpacaEval Leaderboard  

## State of the Field

**What it is.** Across papers, the prevailing usage treats AlpacaEval 2.0 as an automatic, LLM-as-a-judge benchmark for open-ended instruction following and chat evaluation, often described as a simulated human preference evaluation. Most definitions describe pairwise comparisons in which a strong judge model such as GPT-4 compares a model response against a reference or baseline response, although one paper instead calls it a reference-free instruction-following benchmark. Several descriptions say it contains 805 questions or instructions from five datasets, while another describes 805 representative instructions from real user interactions; recurring variants include length-controlled AlpacaEval 2.0 or Alpaca-Eval V2, and smaller lines of work describe it as an updated conversation-quality version, a text-only human preference alignment benchmark, or a leaderboard.

**What it is claimed to measure.** Papers use AlpacaEval 2.0 to measure 9 constructs and 6 behavioral indicators. The dominant framing centers on instruction following, especially instruction following ability, and recurring uses extend to human preference alignment, helpfulness, and alignment; one paper also says it approximately evaluates human preference for instruction following. Beyond that core, papers use it for other linked qualities and tasks rather than converging on a single additional target.

**Space of uses.** Across evaluation suites, papers commonly position AlpacaEval 2.0 as one of the main benchmarks, most often alongside MT-Bench and Arena-Hard, and sometimes as an in-domain evaluation or as a secondary helpfulness check in its length-controlled form. Reported usage usually involves win rate or length-controlled win rate from pairwise head-to-head judging against a baseline or reference response. Papers also link it to 3 other instruments, and one paper reports that AlpacaEval 2.0 correlates with Chatbot Arena.

**Concerns raised.** The recurring concern is response length. Several papers describe length-controlled win rates, length-controlled regression, or a generalized linear model as ways to calibrate win rates and reduce length bias, verbosity bias, or stylistic bias, and papers say these changes are meant to provide a fairer comparison. One paper further relates AlpacaEval 2.0 to verbosity bias and says the benchmark is not robust to length cheat, noting that length-controlled win rates can exceed raw win rates for short responses.

## Sources

**[Online Iterative Reinforcement Learning from Human Feedback with General Preference Model](https://proceedings.neurips.cc/paper_files/paper/2024/file/94d13c2401fe119e57ba325b6fe526e0-Paper-Conference.pdf) (as "AlpacaEval2")**
> AlpacaEval2 is an evaluation framework that uses strong LLMs like GPT-4 as judges to assess model performance on a set of prompts, providing a simulated human preference evaluation.

**[SimPO: Simple Preference Optimization with a Reference-Free Reward](https://proceedings.neurips.cc/paper_files/paper/2024/file/e099c1c9699814af0be873a175361713-Paper-Conference.pdf) (as "AlpacaEval 2")**
> An automatic evaluator of instruction-following models that uses pairwise comparisons to assess chat response quality against a baseline model.

**[3-in-1: 2D Rotary Adaptation for Efficient Finetuning, Efficient Batching and Composability](https://proceedings.neurips.cc/paper_files/paper/2024/file/3dbcadb7beedc2afe32bb23f75dd30ec-Paper-Conference.pdf) (as "AlpacaEval2.0")**
> An evaluation framework that uses GPT-4 to judge instruction-following responses against a reference model.

**[RRM:  Robust Reward Model Training Mitigates Reward Hacking](https://proceedings.iclr.cc/paper_files/paper/2025/file/9d46574e5baae5121180228223a11836-Paper-Conference.pdf) (as "AlpacaEval-2")**
> An automatic evaluation suite for assessing the performance of instruction-following language models, which includes a length-controlled win-rate metric.

**[Towards Federated RLHF with Aggregated Client Preference for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/124dde499d62b58e97e42a45b26d7369-Paper-Conference.pdf)**
> An evaluation benchmark that assesses a model's question-answering performance by comparing its responses on a set of instructions against a reference model like GPT-4.

**[MallowsPO: Fine-Tune Your LLM with Preference Dispersions](https://proceedings.iclr.cc/paper_files/paper/2025/file/4ddab70bf41ffe5d423840644d3357f4-Paper-Conference.pdf) (as "Alpaca Eval V2")**
> An evaluation set used to compare fine-tuned instruction-following models on response quality via GPT-4 judgments.

**[Montessori-Instruct: Generate Influential Training Data Tailored for Student Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/ba1d33849b963efc6b5d3082ad68f480-Paper-Conference.pdf) (as "Alpaca Eval 2.0")**
> A benchmark used here as an in-domain evaluation of instruction-following, with pairwise head-to-head judgments by GPT-4-turbo.

**[OpenPRM: Building Open-domain Process-based Reward Models with Preference Trees](https://proceedings.iclr.cc/paper_files/paper/2025/file/c919a2b5ec1de69f2629f9119676e336-Paper-Conference.pdf) (as "Alpaca Eval 2")**
> A benchmark for evaluating a model's ability to follow instructions.

**[Intuitive Fine-Tuning: Towards Simplifying Alignment into a Single Process](https://aclanthology.org/2025.acl-long.6.pdf) (as "Alpaca-Eval-2")**
> An updated version of Alpaca-Eval that evaluates model responses using GPT-4 with improved criteria and task coverage, focusing on conversation quality.

**[OmniAlign-V: Towards Enhanced Alignment of MLLMs with Human Preference](https://aclanthology.org/2025.acl-long.906.pdf) (as "AlpacaEval-V2")**
> A text-only human preference alignment benchmark used to evaluate language alignment in LLMs and MLLMs.

**[Condor: Enhance LLM Alignment with Knowledge-Driven Data Synthesis and Refinement](https://aclanthology.org/2025.acl-long.1091.pdf) (as "AlpacaEvalv2")**
> Human-preference benchmark that evaluates model responses through pairwise comparisons, measuring overall helpfulness and coherence in open-ended dialogue.

**[NILE: Internal Consistency Alignment in Large Language Models](https://aclanthology.org/2025.emnlp-main.412.pdf) (as "Alpaca-Eval V2")**
> An automatic evaluation system for instruction-following language models that uses GPT-4-Turbo to judge responses and introduces Length-Controlled Win Rates to reduce length-based biases.

**[Massive Supervised Fine-tuning Experiments Reveal How Data, Layer, and Training Factors Shape LLM Alignment Quality](https://aclanthology.org/2025.emnlp-main.1138.pdf) (as "AlpacaEval v2.0")**
> An automatic, LLM-based evaluator for assessing the quality of a model's responses to a set of instructions, comparing them against a reference model's outputs.

**[Unnatural Languages Are Not Bugs but Features for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/duan25c/duan25c.pdf) (as "Length-controlled AlpacaEval 2.0")**
> A benchmark for evaluating chat model instruction-following capabilities where response length is controlled to provide a fair comparison.

**[From Crowdsourced Data to High-quality Benchmarks: Arena-Hard and Benchbuilder Pipeline](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25h/li25h.pdf) (as "AlpacaEval 2.0 Length Controlled")**
> Human preference-based evaluation benchmark that uses LLM-as-a-judge with length control to reduce stylistic bias, used for comparing alignment and separability.

**[Investigating Non-Transitivity in LLM-as-a-Judge](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25w/xu25w.pdf) (as "Length-Controlled AlpacaEval")**
> A modified version of the AlpacaEval framework that applies a generalized linear model to control for the influence of response length on evaluation scores.

**[Time-Reversal Provides Unsupervised Feedback to LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/34aec5ab2f99a8f592e0cca4974013f2-Paper-Conference.pdf) (as "AlpacaEval Leaderboard")**
> A widely used benchmark for evaluating the instruction-following capabilities of language models by comparing their outputs against a reference model like GPT-4.

## Relationships

### AlpacaEval 2.0 →
- **Chatbot Arena** (measurements) — *correlates*
  > Here, we test on AlpacaEval 2.0 (Dubois et al., 2024), which has a Spearman correlation of 0.98 with Chatbot Arena while being cost-efficient. (Section 3.2)
  - [Improving Instruct Models for Free: A Study on Partial Adaptation](https://aclanthology.org/2025.emnlp-main.581.pdf)

### → AlpacaEval 2.0
- **Instruction following** (behaviors tasks) — *measured_by*
  > We primarily assess our models using three of the most popular open-ended instruction-following benchmarks: MT-Bench [94], AlpacaEval 2 [51], and Arena-Hard v0.1 [50].
  - [SimPO: Simple Preference Optimization with a Reference-Free Reward](https://proceedings.neurips.cc/paper_files/paper/2024/file/e099c1c9699814af0be873a175361713-Paper-Conference.pdf)
- **Instruction following ability** (constructs) — *measured_by*
  > Instruction-following ability. We further benchmark RoAd using AlpacaEval2.0 [9]. (Section 4.1)
  - [3-in-1: 2D Rotary Adaptation for Efficient Finetuning, Efficient Batching and Composability](https://proceedings.neurips.cc/paper_files/paper/2024/file/3dbcadb7beedc2afe32bb23f75dd30ec-Paper-Conference.pdf)
- **Human preference alignment** (constructs) — *measured_by*
  > AlpacaEval 2.0 approximately evaluates human preference for instruction following. (Section 5.1)
  - [Spread Preference Annotation: Direct Preference Judgment for Efficient LLM Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/342e5fc02b86dec9b24e41b22968e539-Paper-Conference.pdf)
- **Helpfulness** (constructs) — *measured_by*
  > In addition, we also use AlpacaEval 2.0 Length Controlled [37] and Arena Hard [38] as secondary measures of helpfulness, following [33, 39].
  - [HelpSteer 2: Open-source dataset for training top-performing reward models](https://proceedings.neurips.cc/paper_files/paper/2024/file/02fd91a387a6a5a5751e81b58a75af90-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Alignment** (constructs) — *measured_by*
  > "POWER-DL consistently outperforms state-of-the-art methods in alignment benchmarks, achieving improvements of up to 13.0 points on AlpacaEval 2.0"
  - [Sail into the Headwind: Alignment via Robust Rewards and Dynamic Labels against Reward Hacking](https://proceedings.iclr.cc/paper_files/paper/2025/file/c78f81a878a72566422f37279bca0fd0-Paper-Conference.pdf)
- **Conversational ability** (constructs) — *measured_by*
  > We conduct GPT-4-based automatic evaluation on AlpacaEval 2.0 (Li et al., 2023b), MT-Bench (Zheng et al., 2023), and Arena-Hard (Li et al., 2024) to measure the chatbot capability of our model.
  - [Self-Play Preference Optimization for Language Model Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/e48fa1c4f08fd1ae35d5df8352c3106d-Paper-Conference.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > Our models are also tested for their open-ended text generation capabilities using model-based evaluations, specifically through MT-Bench [77], AlpacaEval 1.0 and 2.0 [37] (Section 4.1)
  - [Instruction Tuning With Loss Over Instructions](https://proceedings.neurips.cc/paper_files/paper/2024/file/7ffb43adf37b3eeaba559098bc084cc6-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > For question answering, we use AlpacaEval 2.0 (Li et al., 2023b; Dubois et al., 2024a;b) to assess model performance on 805 instructions. (Section 7.1)
  - [Towards Federated RLHF with Aggregated Client Preference for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/124dde499d62b58e97e42a45b26d7369-Paper-Conference.pdf)
- **Text generation quality** (constructs) — *measured_by*
  > We conduct comprehensive evaluations using AlpacaEval 2.0, Arena-Hard, MT-Bench, FLASK benchmarks for assessing the response quality across various dimensions.
  - [Mixture-of-Agents Enhances Large Language Model Capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/5434be94e82c54327bb9dcaf7fca52b6-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > Remarkably, on AlpacaEval 2 (Li et al., 2023c) and Arena-Hard (Li et al., 2024b), two LLM general problem-solving ability benchmarks, the model trained on 20K our synthetic instruction-response pairs, consistently outperforms models trained on significantly larger datasets... (Section 1)
  - [Synthesizing Post-Training Data for LLMs through Multi-Agent Simulation](https://aclanthology.org/2025.acl-long.1136.pdf)
- **Generalization** (constructs) — *measured_by*
  > To understand the effect of α on model generalization, we measure the AE2 performance of various models with changing α. (Section 4.2. Results)
  - [AlphaPO: Reward Shape Matters for LLM Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gupta25d/gupta25d.pdf)
- **Code generation** (behaviors tasks) — *measured_by*
  > To test our hypothesis, we break down the prompts in Alpaca Eval 2.0 (Li et al., 2023) into different categories. ... We select four representative tasks: two are objective tasks that can be verified: mathematical reasoning or calculation (Math) and Coding...
  - [SIMPLEMIX: Frustratingly Simple Mixing of Off- and On-policy Data in Language Model Preference Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25au/li25au.pdf)
- **Creative writing** (behaviors tasks) — *measured_by*
  > To test our hypothesis, we break down the prompts in Alpaca Eval 2.0 (Li et al., 2023) into different categories. ... and the other two tasks are tasks that require modeling human open-ended preference: Creative writing and making personal recommendations (Recommendation).
  - [SIMPLEMIX: Frustratingly Simple Mixing of Off- and On-policy Data in Language Model Preference Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25au/li25au.pdf)
- **Open-ended instruction following** (behaviors tasks) — *measured_by*
  > We employed three challenging benchmarks to evaluate the open-ended instruction-following task: MT-Bench (Zheng et al., 2023), AlpacaEval 2 (Li et al., 2023), and Arena-Hard (Li et al., 2024). (Section 5.1)
  - [Weights-Rotated Preference Optimization for Large Language Models](https://aclanthology.org/2025.emnlp-main.1329.pdf)

### Associated with
- **Verbosity bias** (constructs)
  > Additionally, the LC win rates of our cheats are generally higher than the raw win rates because of their short length, which highlights that AlpacaEval 2.0 is also not robust to length cheat.
  - [Cheating Automatic LLM Benchmarks: Null Models Achieve High Win Rates](https://proceedings.iclr.cc/paper_files/paper/2025/file/9adc8ada9183f4b9a007a02773fd8114-Paper-Conference.pdf)
- **Human evaluation** (measurements)
  > “We conducted human evaluations on the AlpacaEval2 and Arena-Hard datasets using the Gemma2-9B model.”
  - [Earlier Tokens Contribute More: Learning Direct Preference Optimization From Temporal Decay Perspective](https://proceedings.iclr.cc/paper_files/paper/2025/file/cd9b4a28fb9eebe0430c3312a4898a41-Paper-Conference.pdf)
- **AlpacaEval** (measurements)
  > “AlpacaEval is done with the AlpacaEval2 library”
  - [Ladder-Residual: Parallelism-Aware Architecture for Accelerating Large Model Inference with Communication Overlapping](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25bg/zhang25bg.pdf)
