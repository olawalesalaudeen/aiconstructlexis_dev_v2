# Reddit TL;DR
**Type:** Measurement  
**Referenced in:** 36 papers  
**Also known as:** TL;DR dataset, Reddit TL;DR dataset, Reddit summarization dataset, TL;DR summarization, TL;DR comparison data, Reddit TL;DR Summarization, TL;DR, TLDR  

## State of the Field

**What it is.** Across the papers, the prevailing description is of a Reddit-based summarization dataset or benchmark that pairs posts with concise, human-written or user-written summaries. Several definitions add that it can include several short summaries for a post, judged for quality and informativeness by human evaluators, and some frame it as carrying preference labels or comparison pairs over generated summaries rather than only reference summaries. A smaller set of papers talks about it as the TL;DR summarization task itself, or as specific slices such as train, test, or comparison data, and one definition atypically refers to articles rather than Reddit posts.

**What it is claimed to measure.** Papers link it to 3 constructs and 2 behavioral indicators. The dominant use is to measure text summarization, and a smaller behavioral-indicator link treats it as a benchmark for abstractive summarization. On the construct side, several papers use it to measure alignment, while more isolated uses report it as measuring generalization, including on out-of-distribution subreddit splits, and summary quality.

**Space of uses.** No measurement instrument is linked to it. Papers usually position it as a main or standard summarization benchmark in RLHF and preference-learning experiments, using it for fine-tuning, reward modeling, RL optimization, and evaluation; some papers use only the test set, train reward models on the train split, fine-tune on human-written summaries, or pre-train reward models on comparison pairs derived from TL;DR data. A smaller usage treats it as an LM-based evaluation setup in which GPT-4 judges win-rate between a model generation and the ground-truth answer.

## Sources

**[Trust or Escalate: LLM Judges with Provable Guarantees for Human Agreement](https://proceedings.iclr.cc/paper_files/paper/2025/file/08dabd5345b37fffcbe335bd578b15a0-Paper-Conference.pdf) (as "TL;DR")**
> A benchmark dataset used for evaluating the quality of text summarization.

**[A Common Pitfall of Margin-based Language Model Alignment: Gradient Entanglement](https://proceedings.iclr.cc/paper_files/paper/2025/file/10272bfd0371ef960ec557ed6c866058-Paper-Conference.pdf) (as "TL;DR dataset")**
> A dataset consisting of Reddit posts and their summaries, used in this paper to evaluate the training dynamics of various preference optimization algorithms. The full name is 'Too Long; Didn't Read'.

**[Your Weak LLM is Secretly a Strong Teacher for Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/332b4fbe322e11a71fa39d91c664d8fa-Paper-Conference.pdf)**
> A summarization dataset consisting of Reddit posts and several corresponding short summaries, which have been judged for quality and informativeness by human evaluators.

**[Variational Best-of-N Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/402542c2341e5d2eadc1dd0891275901-Paper-Conference.pdf) (as "Reddit TL;DR dataset")**
> A dataset consisting of Reddit posts and their human-written summaries (Stiennon et al., 2020), used for training and evaluating summarization models.

**[InfAlign: Inference-aware language model alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/balashankar25a/balashankar25a.pdf) (as "Reddit summarization dataset")**
> A dataset also known as the TL;DR dataset, containing Reddit posts and their corresponding human-written summaries, used for training and evaluating text summarization models.

**[Symmetric Reinforcement Learning Loss for Robust Learning on Diverse Tasks and Model Scales](https://raw.githubusercontent.com/mlresearch/v267/main/assets/byun25a/byun25a.pdf) (as "TL;DR summarization")**
> Summarization task requiring models to generate concise summaries of Reddit posts, used here as an RLHF benchmark with a learned reward model.

**[GRAM: A Generative Foundation Reward Model for Reward Generalization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25ad/wang25ad.pdf) (as "TL;DR comparison data")**
> A dataset composed of summarization response pairs used for domain-specific pre-training of a reward model.

**[RoSTE: An Efficient Quantization-Aware Supervised Fine-Tuning Approach for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wei25n/wei25n.pdf) (as "Reddit TL;DR Summarization")**
> A summarization benchmark based on the Reddit TL;DR dataset used to evaluate fine-tuned LLMs on generating concise summaries of posts.

**[I Don't Know: Explicit Modeling of Uncertainty with an [IDK] Token](https://proceedings.neurips.cc/paper_files/paper/2024/file/14c018d2e72c521605b0567029ef0efb-Paper-Conference.pdf) (as "TLDR")**
> A dataset derived from Reddit for training and evaluating automatic text summarization models.

## Relationships

### → Reddit TL;DR
- **Text summarization** (behaviors tasks) — *measured_by*
  > Summarization Task. SFT dataset: Reddit TL;DR dataset is used, comprising 123, 169 Reddit posts along with human-written summaries. (Section 5)
  - [Improving Generalization of Alignment with Human Preferences through Group Invariant Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/c2d82a425af4c18a35049899fea5ee82-Paper-Conference.pdf)
- **Alignment** (constructs) — *measured_by*
  > In the experiments, we simulate the soft preference labels with AI feedback from LLMs [4, 24] and show that soft preference labels and weighted geometric averaging achieve consistent improvement to the baselines on popular benchmarks for the alignment research literature, such as Reddit TL;DR [49]... (Section 1).
  - [Geometric-Averaged Preference Optimization for Soft Preference Labels](https://proceedings.neurips.cc/paper_files/paper/2024/file/688c7a82e31653e7c256c6c29fd3b438-Paper-Conference.pdf)
- **Summary quality** (constructs) — *measured_by*
  > for the summarization quality task, we use Reddit posts from TL;DR dataset (Stiennon et al., 2020) and train uncalibrated and calibrated reward models on the train split. (Section 5.1)
  - [InfAlign: Inference-aware language model alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/balashankar25a/balashankar25a.pdf)
- **Abstractive summarization** (behaviors tasks) — *measured_by*
  > “It contains user-generated posts paired with concise summaries, providing a challenging benchmark for abstractive summarization tasks.”
  - [Progressively Label Enhancement for Large Language Model Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25cg/liu25cg.pdf)
- **Out-of-distribution generalization** (constructs) — *measured_by*
  > To evaluate the generalization ability of the aligned models on out-of-distribution data, we fine-tune the models using only posts from the relationship and relationship advice subreddits of the Reddit TL;DR (Stiennon et al., 2020) dataset. (Section 6)
  - [Variational Best-of-N Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/402542c2341e5d2eadc1dd0891275901-Paper-Conference.pdf)
