# Pairwise comparison
**Type:** Behavior  
**Referenced in:** 61 papers  
**Also known as:** Pairwise rating, Preference judgment, LLM judging, Pairwise preference judgment, Pairwise preference selection, Pair-wise preference, Preference feedback generation, Binary response comparison, Arena-style comparison, Response pair judgment, LM-as-a-judge, Pairwise response evaluation, Response comparison, Plan verification, Binary preference selection, Correction verification, Pairwise ranking, Pairwise response comparison, Preference comparison, Pairwise preference classification, Pairwise evaluation  

## State of the Field

**Space of definitions.** Across the surveyed work, the dominant framing is a head-to-head judgment over two candidate outputs for the same prompt or instruction, where an evaluator selects the better response. Most papers describe a winner or loser choice, often with an explicit tie option, a preference score between the two, or a comparison restricted to a specified dimension. Definitions vary mainly in the criterion used for winning, including better, more correct, more helpful, less wrong, more harmless, or better aligned with a user's information need, and the evaluator may be human or an LLM.

**Variants.** Papers use several near-synonymous names for the same behavior, including response ranking, preference judgment, pairwise evaluation, pairwise rating, and pairwise response comparison, with other labels used less often. The most common setting compares assistant responses, though smaller lines of work apply the same format to multi-turn conversations, long-form question answering, analyses, plans, corrections, captions, ideas, documents, and score-based item ranking. Almost all work uses two candidates, but one paper describes pairwise matchups among two or more responses when verification scores are close, and some comparisons are framed around a specific dimension such as helpfulness, harmlessness, completeness, safety, or funniness.

**Space of elicitation and scores.** Papers link this behavior to 9 instruments. Most commonly, they say it is measured by MT-Bench, AlpacaEval, AlpacaFarm, Arena-Hard, and Chatbot Arena, with 4 other linked instruments mentioned less often. These are mostly benchmark or framework-style evaluations for LLM judging and open-ended instruction following, and papers score the judgments in forms such as human-label accuracy, win-tie-loss rates, pair-wise win-rates, or a preference score between the two candidates.

**What it is taken as evidence of.** Papers link it to 4 constructs, and they do not treat it as evidence of a single construct. One line uses pairwise comparison to measure helpfulness, while another relates it to positional bias, describing evaluators who favor one side in a comparison and even a primacy bias toward the first response. Separate papers also claim causal relationships from pairwise comparison to alignment and to uncertainty: one says presenting response pairs and collecting binary feedback is used to achieve alignment, and another says pairwise comparison mitigates evaluation uncertainty relative to single-answer grading.

## Sources

**[SaMer: A Scenario-aware Multi-dimensional Evaluator for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/646ca7b994bc46afe33d680dbe7ed67a-Paper-Conference.pdf)**
> Comparing two model-generated responses and selecting a winner, loser, or tie.

**[Beyond the Surface: Measuring Self-Preference in LLM Judgments](https://aclanthology.org/2025.emnlp-main.86.pdf) (as "Response ranking")**
> Selecting which of two candidate responses is better in a comparative judgment setting.

**[DataMan: Data Manager for Pre-training Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/1abed6ee581b9ceb4e2ddf37822c7fcb-Paper-Conference.pdf) (as "Pairwise rating")**
> A comparison procedure in which documents are judged relative to one another rather than rated independently.

**[Learning LLM-as-a-Judge for Preference Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/09fd990b19b2e69cc4d20e9969e43f09-Paper-Conference.pdf) (as "Preference judgment")**
> The observable task of comparing two candidate answers to a prompt and selecting the preferred one.

**[Improving Data Efficiency via Curating LLM-Driven Rating Systems](https://proceedings.iclr.cc/paper_files/paper/2025/file/faa6144674bce872365874c576b4f56f-Paper-Conference.pdf) (as "LLM judging")**
> Using an LLM as a judge to compare model responses and produce win-tie-loss style judgments.

**[Style Outweighs Substance: Failure Modes of LLM Judges in Alignment Benchmarking](https://proceedings.iclr.cc/paper_files/paper/2025/file/1eb36d07ebb13be16ddbda679a95018b-Paper-Conference.pdf) (as "Pairwise preference judgment")**
> Selecting one of two model outputs as better according to explicit or implicit criteria.

**[How to Evaluate Reward Models for RLHF](https://proceedings.iclr.cc/paper_files/paper/2025/file/2e01083b381b4865919b4915ef32e3d2-Paper-Conference.pdf) (as "Pairwise preference selection")**
> Choosing one of two responses as preferred in a head-to-head comparison.

**[BadJudge: Backdoor Vulnerabilities of LLM-As-A-Judge](https://proceedings.iclr.cc/paper_files/paper/2025/file/2e48f562a2c8f64c7404a6c3a518af74-Paper-Conference.pdf) (as "Pair-wise preference")**
> Choosing a winner between two candidate responses or models.

**[Your Weak LLM is Secretly a Strong Teacher for Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/332b4fbe322e11a71fa39d91c664d8fa-Paper-Conference.pdf) (as "Preference feedback generation")**
> The observable task of providing a comparative judgment between two responses to a given prompt, indicating which one is preferred.

**[Interpreting Language Reward Models via Contrastive Explanations](https://proceedings.iclr.cc/paper_files/paper/2025/file/3538a22cd3ceb8f009cc62b9e535c29f-Paper-Conference.pdf) (as "Binary response comparison")**
> Choosing one of two candidate responses to the same prompt as the preferred response.

**[Limits to scalable evaluation at the frontier: LLM as judge won’t beat twice the data](https://proceedings.iclr.cc/paper_files/paper/2025/file/4264ee4376776907c0b87ed70b959585-Paper-Conference.pdf) (as "Arena-style comparison")**
> Comparing two model responses to the same prompt and selecting which response is better.

**[JudgeBench: A Benchmark for Evaluating LLM-Based Judges](https://proceedings.iclr.cc/paper_files/paper/2025/file/9e720fce64f91114c49cfd640d821da3-Paper-Conference.pdf) (as "Response pair judgment")**
> Selecting which of two candidate responses is better or more correct, optionally with a tie option.

**[Eliminating Position Bias of Language Models: A Mechanistic Approach](https://proceedings.iclr.cc/paper_files/paper/2025/file/e389b15166cf98966ba058965a8c17e3-Paper-Conference.pdf) (as "LM-as-a-judge")**
> The task of using a language model to evaluate and select the better of two candidate responses for a given prompt or question.

**[Learning to Plan & Reason for Evaluation with Thinking-LLM-as-a-Judge](https://raw.githubusercontent.com/mlresearch/v267/main/assets/saha25b/saha25b.pdf) (as "Pairwise response evaluation")**
> The task of taking an instruction and a pair of model-generated responses as input and producing a judgment indicating which response is better.

**[Sample, Scrutinize and Scale: Effective Inference-Time Search by Scaling Verification](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhao25a/zhao25a.pdf) (as "Response comparison")**
> The behavior of directly comparing two or more candidate responses to determine which is correct, particularly when verification scores are close.

**[Making VLMs More Robot-Friendly: Self-Critical Distillation of Low-Level Procedural Reasoning](https://aclanthology.org/2025.emnlp-main.1658.pdf) (as "Plan verification")**
> Comparing two versions of a plan and selecting the one judged to be superior in terms of correctness, completeness, or safety.

**[Great Models Think Alike and this Undermines AI Oversight](https://raw.githubusercontent.com/mlresearch/v267/main/assets/goel25b/goel25b.pdf) (as "Binary preference selection")**
> The task of comparing a pair of model-generated responses and choosing the one that is better according to some criteria.

**[Evolving Chinese Spelling Correction with Corrector-Verifier Collaboration](https://aclanthology.org/2025.emnlp-main.1477.pdf) (as "Correction verification")**
> Judging whether a proposed correction is better than the original sentence or whether both versions are incorrect.

**[Loss Functions and Operators Generated by f-Divergences](https://raw.githubusercontent.com/mlresearch/v267/main/assets/roulet25a/roulet25a.pdf) (as "Pairwise ranking")**
> The task of determining the relative order of two items based on their assigned scores.

**[Generative Judge for Evaluating Alignment](https://proceedings.iclr.cc/paper_files/paper/2024/file/747dc7c6566c74eb9a663bcd8d057c78-Paper-Conference.pdf) (as "Pairwise response comparison")**
> The task of evaluating two model-generated responses to the same query and determining which one is better, or if they are of equal quality.

**[Distributional Preference Learning: Understanding and Accounting for Hidden Context in RLHF](https://proceedings.iclr.cc/paper_files/paper/2024/file/7423902b5534e2b267438c85444a54b1-Paper-Conference.pdf) (as "Preference comparison")**
> The observable act of selecting one of two model outputs as more preferred, based on criteria such as helpfulness or harmlessness, used to train reward models.

**[Unmasking and Improving Data Credibility: A Study with Datasets for Training Harmless Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c3837ae3d17a91b08bf5cc19280e7fd2-Paper-Conference.pdf) (as "Pairwise preference classification")**
> The task of classifying which of two text samples (e.g., conversational responses) is preferable according to a specific criterion, such as harmlessness.

**[CAMIEval: Enhancing NLG Evaluation through Multidimensional Comparative Instruction-Following Analysis](https://aclanthology.org/2025.naacl-long.438.pdf) (as "Pairwise evaluation")**
> The task where an evaluator model is presented with two candidate outputs for a given instruction and must choose the better one.

## Relationships

### Pairwise comparison →
- **MT-Bench** (measurements) — *measured_by*
  > “open-ended instruction-following benchmarks (MT-Bench, Alpacafarm, and LLMBar), which primarily rely on pairwise comparison task.”
  - [RevisEval: Improving LLM-as-a-Judge via Response-Adapted References](https://proceedings.iclr.cc/paper_files/paper/2025/file/f7ed2318cec3540ca267c3ede12d82fe-Paper-Conference.pdf)
- **Uncertainty** (constructs) — *causes*
  > Compared to single-answer grading, pairwise comparison reduces the influence of subjective bias by directly comparing the relative merits of model outputs, thereby mitigating the uncertainty in evaluation to some extent. (Section 4.5)
  - [An Empirical Analysis of Uncertainty in Large Language Model Evaluations](https://proceedings.iclr.cc/paper_files/paper/2025/file/82d3258eb58ceac31744a88005b7ddef-Paper-Conference.pdf)
- **Alignment** (constructs) — *causes*
  > A key recipe to achieve alignment involves presenting pairs of responses and collecting binary feedback (e.g., preferred, less preferred) based on the comparative quality of these responses. (Section 1)
  - [Your Weak LLM is Secretly a Strong Teacher for Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/332b4fbe322e11a71fa39d91c664d8fa-Paper-Conference.pdf)
- **RewardBench** (measurements) — *measured_by*
  > LM-as-a-judge. We benchmark our method on 23 datasets in the RewardBench4 (Lambert et al., 2024b) that can be categorized into four types: Chat, Chat-Hard, Safety, and Reasoning.
  - [Eliminating Position Bias of Language Models: A Mechanistic Approach](https://proceedings.iclr.cc/paper_files/paper/2025/file/e389b15166cf98966ba058965a8c17e3-Paper-Conference.pdf)
- **AlpacaFarm** (measurements) — *measured_by*
  > “open-ended instruction-following benchmarks (MT-Bench, Alpacafarm, and LLMBar), which primarily rely on pairwise comparison task.”
  - [RevisEval: Improving LLM-as-a-Judge via Response-Adapted References](https://proceedings.iclr.cc/paper_files/paper/2025/file/f7ed2318cec3540ca267c3ede12d82fe-Paper-Conference.pdf)
- **LLMBar** (measurements) — *measured_by*
  > “open-ended instruction-following benchmarks (MT-Bench, Alpacafarm, and LLMBar), which primarily rely on pairwise comparison task.”
  - [RevisEval: Improving LLM-as-a-Judge via Response-Adapted References](https://proceedings.iclr.cc/paper_files/paper/2025/file/f7ed2318cec3540ca267c3ede12d82fe-Paper-Conference.pdf)

### Associated with
- **Positional bias** (constructs)
  > Positional bias (Wang et al., 2024a; Zheng et al., 2023; Wu & Aji, 2023; Chen et al., 2024) occurs when human or LLM evaluators tend to favor one side in a pairwise comparison, regardless of answer quality. (Section 4.5)
  - [RevisEval: Improving LLM-as-a-Judge via Response-Adapted References](https://proceedings.iclr.cc/paper_files/paper/2025/file/f7ed2318cec3540ca267c3ede12d82fe-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements)
  > We explore two typical LLM-as-a-judge methods: Pairwise comparison (Section 2.1)
  - [Varying Shades of Wrong: Aligning LLMs with Wrong Answers Only](https://proceedings.iclr.cc/paper_files/paper/2025/file/1aa1fde3661b23ba9b043082069fd144-Paper-Conference.pdf)
- **Chatbot Arena** (measurements)
  > LMSYS Chatbot Arena leverages (240,000) crowdsourced questions and (90,000) crowdsourced human votes to construct pair-wise win-rates
  - [BadJudge: Backdoor Vulnerabilities of LLM-As-A-Judge](https://proceedings.iclr.cc/paper_files/paper/2025/file/2e48f562a2c8f64c7404a6c3a518af74-Paper-Conference.pdf)
- **AlpacaEval** (measurements)
  > AlpacaEval is a popular pairwise comparison framework that employs GPT-4-Turbo as the fixed baseline model. (Section 1)
  - [Investigating Non-Transitivity in LLM-as-a-Judge](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25w/xu25w.pdf)
- **Error localization** (behaviors tasks)
  > "Disagreements between candidate solutions strongly signal the potential locations of their errors."
  - [Sample, Scrutinize and Scale: Effective Inference-Time Search by Scaling Verification](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhao25a/zhao25a.pdf)
