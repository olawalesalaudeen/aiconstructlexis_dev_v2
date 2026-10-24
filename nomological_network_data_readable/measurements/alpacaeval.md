# AlpacaEval
**Type:** Measurement  
**Referenced in:** 122 papers  
**Also known as:** Alpaca Eval, Alpaca-Eval, Alpaca-Eval v1.0, alpaca-eval, AlpacaEval v1.0, AlpacaEval 1.0  

## State of the Field

**What it is.** Across papers, AlpacaEval is most commonly described as an automatic benchmark or evaluation framework for instruction-following and open-ended generation, typically using a strong LLM, most often GPT-4, to make pairwise judgments between a model output and a reference response or reference model and to report a win rate. Many definitions mention 805 prompts, instructions, or questions from diverse domains, and v1.0 or 1.0 is described as comparing against text-davinci-003 with GPT-4 as annotator; papers also mention AlpacaEval 2.0, length-controlled AlpacaEval 2, and the 129-prompt helpful_base subset. Some papers instead emphasize it as a dataset, an out-of-distribution test set curated from open-source instruction-following and dialogue data, or a leaderboard with archived outputs, and one paper describes it as a human preference evaluation with crowdworker judgments rather than an LLM judge.

**What it is claimed to measure.** Across papers, the dominant measurement claim is instruction following, variously phrased as instruction following or instruction-following ability. Papers link AlpacaEval to 14 constructs and 7 behavioral indicators overall, with the most frequent reported uses being instruction following, human preference alignment, helpfulness, text generation quality, and utility preservation. These measurement claims spread across many targets rather than converging on a single construct, although papers still most often position it as an instruction-following evaluation.

**Space of uses.** Papers often use AlpacaEval alongside MT-Bench, and also with Vicuna-bench, the Open LLM Leaderboard, TruthfulQA, and Arena-Hard-Auto. The prevailing positioning is as a popular automatic benchmark or leaderboard for system-level or model comparison, sometimes as a proxy for human evaluation; some papers reuse its archived outputs, its prompts or instructions, or subsets such as helpful_base, while others pair it with separate human preference evaluation.

## Sources

**[#InsTag: Instruction Tagging for Analyzing Supervised Fine-tuning of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/9dae2a90bae49dc874ce1ca8fcc20879-Paper-Conference.pdf)**
> An automatic evaluation framework that uses GPT-4 to judge the quality of model outputs and compute a pairwise win rate against a reference model.

**[Style Outweighs Substance: Failure Modes of LLM Judges in Alignment Benchmarking](https://proceedings.iclr.cc/paper_files/paper/2025/file/1eb36d07ebb13be16ddbda679a95018b-Paper-Conference.pdf) (as "Alpaca Eval")**
> A benchmark that uses LLMs as judges to evaluate model performance, particularly for instruction-following capabilities.

**[Intuitive Fine-Tuning: Towards Simplifying Alignment into a Single Process](https://aclanthology.org/2025.acl-long.6.pdf) (as "Alpaca-Eval")**
> An LLM-based evaluation framework that uses GPT-4 to judge the quality of model outputs in open-ended conversation tasks by comparing them to reference responses.

**[Learning Distribution-wise Control in Representation Space for Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/deng25a/deng25a.pdf) (as "Alpaca-Eval v1.0")**
> An evaluation suite for assessing instruction-following capabilities, which uses GPT-4 as a judge to calculate a win rate against a baseline model.

**[Learning to Reason via Program Generation, Emulation, and Search](https://proceedings.neurips.cc/paper_files/paper/2024/file/401ece9f5d1cfa8600c22049ef43930e-Paper-Conference.pdf) (as "alpaca-eval")**
> An evaluation suite used to compare the instruction-following capabilities of models.

**[Instruction Tuning With Loss Over Instructions](https://proceedings.neurips.cc/paper_files/paper/2024/file/7ffb43adf37b3eeaba559098bc084cc6-Paper-Conference.pdf) (as "AlpacaEval 1.0")**
> Open-ended generation benchmark where model outputs are evaluated against text_davinci_003 by GPT-4.

## Relationships

### → AlpacaEval
- **Instruction following** (behaviors tasks) — *measured_by*
  > To evaluate the instruction-following ability, we employ the three most widely recognized benchmarks, including AlpacaEval (Li et al., 2023), MT-bench (Zheng et al., 2023) and Vicuna-bench (Chiang et al., 2023).
  - [OpenChat: Advancing Open-source Language Models with Mixed-Quality Data](https://proceedings.iclr.cc/paper_files/paper/2024/file/fc8781fb328fb1fd069584a4519a2709-Paper-Conference.pdf)
- **Instruction following ability** (constructs) — *measured_by*
  > We reproduce the experiment of fine-tuning Llama-2-7B-chat on Alpaca [Qi et al., 2024] and find that the instruction-following ability, measured by AlpacaEval [Li et al., 2023a], does not improve after fine-tuning (Table 8). (Section 5)
  - [Keeping LLMs Aligned After Fine-tuning: The Crucial Role of Prompt Templates](https://proceedings.neurips.cc/paper_files/paper/2024/file/d6f034bb216b472fc7d32ec7aff20342-Paper-Conference.pdf)
- **Text generation quality** (constructs) — *measured_by*
  > The AlpacaEval dataset released by Dubois et al. (2023) is used to evaluate the overall quality of generations. (Section 3.3)
  - [NEFTune: Noisy Embeddings Improve Instruction Finetuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/4bdeeaeb380b35302bbda1823d328c22-Paper-Conference.pdf)
- **Human preference alignment** (constructs) — *measured_by*
  > For assessing human preferences, recent studies have focused on building crowdsourced battle platforms with human ratings as the primary evaluation metric. Typical platforms include Chatbot Arena (Zheng et al., 2023), MT-Bench (Zheng et al., 2023), and AlpacaEval (Li et al., 2023b). (Section 1)
  - [PiCO: Peer Review in LLMs based on Consistency Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/39e9c5913c970e3e49c2df629daff636-Paper-Conference.pdf)
- **Helpfulness** (constructs) — *measured_by*
  > For models tuned on benign data, we also tested helpfulness on AlpacaEval [29]. (Section 5, Response to RQ2)
  - [TAIA: Large Language Models are Out-of-Distribution Data Learners](https://proceedings.neurips.cc/paper_files/paper/2024/file/be0a8ecf8b2743a4117557c5eca0fb79-Paper-Conference.pdf)
- **Utility preservation** (constructs) — *measured_by*
  > To measure model utility on benign tasks, we used AlpacaEval (Dubois et al., 2024). (Section 5.1)
  - [Jailbreak Antidote: Runtime Safety-Utility Balance via Sparse Representation Adjustment in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/36e3f9e6162d597adada4e0e4fce6861-Paper-Conference.pdf)
- **Fluency** (constructs) — *measured_by*
  > Fluency (Flu): To measure the generation quality of models, we adopt the instructions in AlpacaEval [31], and report the weighted average of bi- and tri-gram entropies [71; 42]. (Section 3.3.2)
  - [RWKU: Benchmarking Real-World Knowledge Unlearning for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b1f78dfc9ca0156498241012aec4efa0-Paper-Datasets_and_Benchmarks_Track.pdf)
- **General ability** (constructs) — *measured_by*
  > To evaluate the LLM’s general performance in short-text tasks, we measure its WinRate against the text-davinci-003 model using 100 queries from AlpacaEval and 80 queries from VicunaEval. (Section 5.1)
  - [RobustKV: Defending Large Language Models against Jailbreak Attacks via KV Eviction](https://proceedings.iclr.cc/paper_files/paper/2025/file/38bbae17d60940f3ee14dfd1035d7542-Paper-Conference.pdf)
- **Downstream task performance** (behaviors tasks) — *measured_by*
  > “For fine-tuning task, we consider SST2(Socher et al., 2013), AGNEWS(Zhang et al., 2015), GSM8K(Cobbe et al., 2021) and AlpacaEval (Li et al., 2023a) as the user fine-tuning task.”
  - [Booster: Tackling Harmful Fine-tuning for Large Language Models via Attenuating Harmful Perturbation](https://proceedings.iclr.cc/paper_files/paper/2025/file/a7ac8a21e5a27e7ab31a5f42a0117bdb-Paper-Conference.pdf)
- **Out-of-distribution generalization** (constructs) — *measured_by*
  > To evaluate out-of-distribution (OOD) generalisation, we specify ... one or more out-of-distribution (OOD) test sets for each task... For instruction following, the ID test set is a new test set ... For the first OOD test sets, we use the AlpacaEval evaluation test set (Section 5.1).
  - [Understanding the Effects of RLHF on LLM Generalisation and Diversity](https://proceedings.iclr.cc/paper_files/paper/2024/file/5a68d05006d5b05dd9463dd9c0219db0-Paper-Conference.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > “We prompt the trained models to answer 805 questions from the AlpacaEval dataset”
  - [Preserving Diversity in Supervised Fine-Tuning of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a548ef984f30bca3abdc09f43743827f-Paper-Conference.pdf)
- **Alignment** (constructs) — *measured_by*
  > improves alignment performance of Zephyr-7B-SFT model by 8% (relative) on AlpacaEval, compared against training on vanilla DPO objective. (Abstract)
  - [DavIR: Data Selection via Implicit Reward for Large Language Models](https://aclanthology.org/2025.acl-long.452.pdf)
- **Controllability** (constructs) — *measured_by*
  > For evaluating steering, we use the instructions from the Alpaca-Eval dataset (Li et al., 2023).
  - [AxBench: Steering LLMs? Even Simple Baselines Outperform Sparse Autoencoders](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25a/wu25a.pdf)
- **Conversational ability** (constructs) — *measured_by*
  > In the General Benchmark pipeline, we evaluate our models using two widely recognized benchmarks: AlpacaEval (Li et al., 2023) and MT-Bench (Zheng et al., 2023), which assess the model’s comprehensive conversational abilities across various questions. (Section 6)
  - [Permutative Preference Alignment from Listwise Ranking of Human Judgments](https://aclanthology.org/2025.emnlp-main.17.pdf)
- **Textual reasoning** (behaviors tasks) — *measured_by*
  > To assess the model’s pure text reasoning ability, we use AlpacaEval (Li et al., 2023a). (Section 4.2)
  - [UnifiedVisual: A Framework for Constructing Unified Vision-Language Datasets](https://aclanthology.org/2025.emnlp-main.1572.pdf)
- **Coherence** (constructs) — *measured_by*
  > “We collect a random subset of 50 tasks ... from the Alpaca-Eval dataset ... An LLM-as-a-Judge then scores the output on how well it followed the instructions and how coherent it was.”
  - [Precise In-Parameter Concept Erasure in Large Language Models](https://aclanthology.org/2025.emnlp-main.960.pdf)
- **Factuality** (constructs) — *measured_by*
  > We further report AlpacaEval (Li et al., 2023b) win-rate, the fraction of pairwise comparisons a system wins against the ALL-SFT baseline, providing a human-preference proxy for factual quality. (Section 4.2)
  - [CYCLE-INSTRUCT: Fully Seed-Free Instruction Tuning via Dual Self-Training and Cycle Consistency](https://aclanthology.org/2025.emnlp-main.258.pdf)

### Associated with
- **Pairwise comparison** (behaviors tasks)
  > AlpacaEval is a popular pairwise comparison framework that employs GPT-4-Turbo as the fixed baseline model. (Section 1)
  - [Investigating Non-Transitivity in LLM-as-a-Judge](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25w/xu25w.pdf)
- **AlpacaEval 2.0** (measurements)
  > “AlpacaEval is done with the AlpacaEval2 library”
  - [Ladder-Residual: Parallelism-Aware Architecture for Accelerating Large Model Inference with Communication Overlapping](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25bg/zhang25bg.pdf)
