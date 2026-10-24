# Chatbot Arena
**Type:** Measurement  
**Referenced in:** 80 papers  
**Also known as:** ChatBot Arena, CHATBOT ARENA, ChatArena, Chatarena, LLM Arena, LMsys arena, ChatbotArena, LM Arena, LMSYS Chatbot Arena  

## State of the Field

**What it is.** Across the papers, the dominant framing is a crowdsourced, open or public evaluation platform and leaderboard for anonymous pairwise battles between model responses. Definitions usually describe users comparing two side by side outputs in open-ended conversational tasks, with human preference votes turned into Elo rankings or pairwise win-rates that support system ranking; some papers also describe it as a large human preference dataset or a collection of user prompts and tasks. A few definitions instead cast it as an evaluation framework using LLM judges, as a multimodal arena variant, or as an evaluation set or dataset of real-world user-assistant interactions, including a 5.2k-instance set and multilingual data; one paper uses the name ChatArena for a multi-agent language game framework.

**What it is claimed to measure.** Papers link Chatbot Arena to 7 constructs and 5 behavioral indicators, so the reported measurement target is spread across several concepts rather than only one. The prevailing use is to measure human preference alignment, with conversational ability and general ability also recurring; papers also report it as measuring emotional intelligence and multilingual understanding, and 2 other constructs. At the behavioral level, papers use it to measure code completion, dialogue generation, mathematical problem solving, multi-turn dialogue, and pairwise comparison.

**Space of uses.** Papers commonly position Chatbot Arena as a reference benchmark or leaderboard, sometimes as a ground-truth reference for relative system quality and sometimes as a source of prompts or preference labels for evaluation and training. It is reported to correlate with AlpacaEval 2.0, Arena-Hard, LiveBench, and LiveCodeBench, and one paper records WildBench as measured by Chatbot Arena; papers also use it in combined evaluations, live user interactions, and experiments on Chatbot Arena prompts or datasets. Several definitions frame it as a comparison point for checking whether model rankings agree with human-voted arena rankings.

**Concerns raised.** One paper reports positional bias in some weak LLM judges on Chatbot Arena, where the first response was consistently preferred.

## Sources

**[StackEval: Benchmarking LLMs in Coding Assistance](https://proceedings.neurips.cc/paper_files/paper/2024/file/4126a607bbe2836cb6ca0eb45b75618b-Paper-Datasets_and_Benchmarks_Track.pdf) (as "ChatBot Arena")**
> An evaluation framework that uses LLMs to judge model responses, often through pairwise comparisons.

**[Trust or Escalate: LLM Judges with Provable Guarantees for Human Agreement](https://proceedings.iclr.cc/paper_files/paper/2025/file/08dabd5345b37fffcbe335bd578b15a0-Paper-Conference.pdf) (as "ChatArena")**
> An evaluation set of real-world user-assistant interactions used for pairwise preference evaluation.

**[A Statistical Framework for Ranking LLM-based Chatbots](https://proceedings.iclr.cc/paper_files/paper/2025/file/1a4cd257678d986ba545b5d1aa9b5923-Paper-Conference.pdf)**
> A crowdsourced evaluation platform where LLMs are evaluated through millions of pairwise comparisons based on human judgments in open-ended conversational tasks.

**[RocketEval: Efficient automated LLM evaluation via grading checklist](https://proceedings.iclr.cc/paper_files/paper/2025/file/937defc32e8ad2daba66a0e434177ae9-Paper-Conference.pdf) (as "CHATBOT ARENA")**
> A crowdsourcing platform where users compare outputs from two anonymous models side-by-side to vote for the better response, generating a public ELO ranking.

**[TODO: Enhancing LLM Alignment with Ternary Preferences](https://proceedings.iclr.cc/paper_files/paper/2025/file/fef5607a9b826f1845533f923e308435-Paper-Conference.pdf) (as "Chatarena")**
> A diverse, human-labeled dataset encompassing multiple language pairs used for comparative alignment analysis.

**[RMB: Comprehensively benchmarking reward models in LLM alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/427f20d90386fd27804f1831d6a3d48f-Paper-Conference.pdf) (as "LLM Arena")**
> A public evaluation platform where language models compete in anonymous, randomized battles, with user votes determining the rankings.

**[MEGA-Bench: Scaling Multimodal Evaluation to over 500 Real-World Tasks](https://proceedings.iclr.cc/paper_files/paper/2025/file/461f1fd5f92e5ca95764a88304dc39f7-Paper-Conference.pdf) (as "LMsys arena")**
> A benchmark platform that uses user voting and Elo-ranking to evaluate multimodal models.

**[Post-hoc Reward Calibration: A Case Study on Length Bias](https://proceedings.iclr.cc/paper_files/paper/2025/file/5d50c76fdf75c24ece568fc84a7125fb-Paper-Conference.pdf) (as "ChatbotArena")**
> An LLM evaluation platform and leaderboard where models are ranked based on pairwise comparisons from anonymous, crowdsourced human votes.

**[Position: AI Competitions Provide the Gold Standard for Empirical Rigor in GenAI Evaluation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sculley25a/sculley25a.pdf) (as "LM Arena")**
> A community-driven benchmark, also known as LMSYS Chatbot Arena, that collects a fresh source of novel test questions and human preference votes from users in head-to-head matchups between LLMs.

**[BadJudge: Backdoor Vulnerabilities of LLM-As-A-Judge](https://proceedings.iclr.cc/paper_files/paper/2025/file/2e48f562a2c8f64c7404a6c3a518af74-Paper-Conference.pdf) (as "LMSYS Chatbot Arena")**
> A crowdsourced evaluation platform where users chat with two anonymous language models and vote for the one they prefer, creating a large-scale human preference dataset.

## Relationships

### Chatbot Arena →
- **LiveBench** (measurements) — *correlates*
  > LiveBench has a 0.91 and 0.88 correlation with ChatBot Arena and Arena-Hard, respectively.
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
- **LiveCodeBench** (measurements) — *correlates*
  > Even then, our results are well correlated with findings from human evaluations like Chatbot-Arena
  - [LiveCodeBench: Holistic and Contamination Free Evaluation of Large Language Models for Code](https://proceedings.iclr.cc/paper_files/paper/2025/file/94074dd5a072d28ff75a76dabed43767-Paper-Conference.pdf)
- **WildBench** (measurements) — *correlates*
  > “WILD-BENCH results demonstrate a strong correlation with the human-voted Elo ratings from Chatbot Arena on hard tasks.”
  - [WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild](https://proceedings.iclr.cc/paper_files/paper/2025/file/771155abaae744e08576f1f3b4b7ac0d-Paper-Conference.pdf)

### → Chatbot Arena
- **Human preference alignment** (constructs) — *measured_by*
  > The resulting dynamic benchmarks, i.e., MixEval and MixEval-Hard, exhibit significant correlations (0.93 and 0.96) with real-world user preference leaderboard (i.e., Chatbot Arena) and showcase high impartiality and efficiency.
  - [MixEval: Deriving Wisdom of the Crowd from LLM Benchmark Mixtures](https://proceedings.neurips.cc/paper_files/paper/2024/file/b1f34d7b4a03a3d80be8e72eb430dd81-Paper-Conference.pdf)
- **Conversational ability** (constructs) — *measured_by*
  > We then report results from live interactions with users on the Chatbot Arena. (Section 7.3)
  - [Jamba: Hybrid Transformer-Mamba Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a9ed43fa31dc8b4a7d7a673d713dcb5f-Paper-Conference.pdf)
- **Dialogue generation** (behaviors tasks) — *measured_by*
  > Chatbot Arena is a benchmark platform designed for evaluating LLMs through interactive, randomised battles in a crowd-sourced manner. It allows for the assessment of LLMs in real-time dialogues with human participants. (Section 3.3)
  - [Weak-eval-Strong: Evaluating and Eliciting Lateral Thinking of LLMs with Situation Puzzles](https://proceedings.neurips.cc/paper_files/paper/2024/file/914b372356d58d9e9357b29332cb8fdc-Paper-Conference.pdf)
- **Multilingual understanding** (constructs) — *measured_by*
  > The most popular one is the Chatbot Arena (Chiang et al., 2024b), which contains over one million user queries and evaluates models in various tasks such as code, math, and multilingual understanding. (Section 5)
  - [Polyrating: A Cost-Effective and Bias-Aware Rating System for LLM Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/d06537b4b38ccf008a54559d2c56fa23-Paper-Conference.pdf)
- **Multi-turn dialogue** (behaviors tasks) — *measured_by*
  > Chatbot Arena has become a cornerstone in LLM evaluation, offering rich datasets for ranking models in open-ended conversational tasks.
  - [A Statistical Framework for Ranking LLM-based Chatbots](https://proceedings.iclr.cc/paper_files/paper/2025/file/1a4cd257678d986ba545b5d1aa9b5923-Paper-Conference.pdf)
- **Mathematical problem solving** (behaviors tasks) — *measured_by*
  > "The most popular one is the Chatbot Arena ... which contains over one million user queries and evaluates models in various tasks such as code, math, and multilingual understanding"
  - [Polyrating: A Cost-Effective and Bias-Aware Rating System for LLM Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/d06537b4b38ccf008a54559d2c56fa23-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > In contrast, ChatbotArena offers a broader set of real-world LLM use cases spanning diverse topics including language understanding, creative writing, reasoning, logic, and science. (Section 3.1)
  - [SkillVerse : Assessing and Enhancing LLMs with Tree Evaluation](https://aclanthology.org/2025.acl-long.437.pdf)
- **Positional bias** (constructs) — *measured_by*
  > We observed positional bias in some weak LLM judges on Chatbot Arena where the first response was consistently preferred, similar to (Zheng et al., 2023).
  - [SkillAggregation: Reference-free LLM-Dependent Aggregation](https://aclanthology.org/2025.acl-long.756.pdf)
- **Language modeling** (behaviors tasks) — *measured_by*
  > The downstream generative tasks are evaluated by the next-word prediction accuracy, which needs the synthetic data to preserve ﬁne-grained textual information from the private data. (Section 4.1.1)
  - [Synthesizing Privacy-Preserving Text Data via Finetuning *without* Finetuning Billion-Scale LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tan25g/tan25g.pdf)
- **Arena-Hard** (measurements) — *correlates*
  > Arena-Hard-Auto achieves stronger model separability, tighter confidence intervals, and achieve 98.6% correlation with Chatbot Arena rankings, making it a fast, reliable predictor of downstream model performance. (Section 1)
  - [From Crowdsourced Data to High-quality Benchmarks: Arena-Hard and Benchbuilder Pipeline](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25h/li25h.pdf)
- **AlpacaEval 2.0** (measurements) — *correlates*
  > Here, we test on AlpacaEval 2.0 (Dubois et al., 2024), which has a Spearman correlation of 0.98 with Chatbot Arena while being cost-efficient. (Section 3.2)
  - [Improving Instruct Models for Free: A Study on Partial Adaptation](https://aclanthology.org/2025.emnlp-main.581.pdf)
- **Coding** (behaviors tasks) — *measured_by*
  > "The most popular one is the Chatbot Arena ... which contains over one million user queries and evaluates models in various tasks such as code, math, and multilingual understanding"
  - [Polyrating: A Cost-Effective and Bias-Aware Rating System for LLM Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/d06537b4b38ccf008a54559d2c56fa23-Paper-Conference.pdf)

### Associated with
- **Pairwise comparison** (behaviors tasks)
  > LMSYS Chatbot Arena leverages (240,000) crowdsourced questions and (90,000) crowdsourced human votes to construct pair-wise win-rates
  - [BadJudge: Backdoor Vulnerabilities of LLM-As-A-Judge](https://proceedings.iclr.cc/paper_files/paper/2025/file/2e48f562a2c8f64c7404a6c3a518af74-Paper-Conference.pdf)
