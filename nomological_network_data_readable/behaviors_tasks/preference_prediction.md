# Preference prediction
**Type:** Behavior  
**Referenced in:** 20 papers  
**Also known as:** Recipe preference prediction, Preference score prediction, Reward model scoring, Preference label classification, Preference classification, Preferred response prediction, Preference judgment  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is a pairwise preference task: a model predicts which of two responses, answers, or solutions is preferred, better, or more highly upvoted for a given prompt or context. The preference source varies across papers, including humans, an LLM-as-a-judge, reward models, AI ratings, and community reactions, and success is usually whether the preferred option receives the higher label, probability, or score. A smaller line of work treats the behavior as scalar preference estimation, either by learning a numerical reward function for a user-response pair, predicting a user's preference level for an item, or mapping a recipe to average consumer satisfaction within a target population.

**Variants.** Papers study this behavior in several settings: personalized response selection on unseen contexts, multi-turn conversational judging, community-specific upvote prediction, item-level preference rating, and recipe satisfaction prediction. Another variant compares the relative quality of candidate mathematical solutions through a pairwise question, framed in one paper as asking, "For Question Q, is solution a1 better than solution a2?" The naming also varies, with papers using labels such as preference label classification, preference classification, preferred response prediction, preference score prediction, and preference judgment.

**Space of elicitation and scores.** Papers link preference prediction to three measurement instruments: LLM-as-a-judge, MT-Bench, and RewardBench. These cover, respectively, using an LLM's predictions to approximate human preferences, a preference dataset for multi-turn open-ended outputs, and a test benchmark for reward model scoring. Across task setups, elicitation and scoring are most often operationalized through classification accuracy, average accuracy against preference labels, judge or jury accuracy at picking the chosen response, or the fraction of cases where the preferred response gets the higher score.

**What it is taken as evidence of.** Papers do not present a single shared construct that this behavior reflects. Instead, objective mismatch is related to preference label classification, with one paper saying task performance reveals struggle with mismatch between text generation and preference modeling, and preference prediction is reported to correlate with social bias when lower accuracy on vegetarian versus non-vegetarian meal comparisons reflects an omnivore bias relative to human preferences.

## Sources

**[What can large language models do for sustainable food?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/thomas25a/thomas25a.pdf) (as "Recipe preference prediction")**
> Predicting which recipe a target population will prefer or rate more highly.

**[CoPL: Collaborative Preference Learning for Personalizing LLMs](https://aclanthology.org/2025.emnlp-main.650.pdf) (as "Preference score prediction")**
> The model's output of a scalar score indicating the degree to which a given response aligns with a specific user's preferences.

**[Multi-Domain Explainability of Preferences](https://aclanthology.org/2025.emnlp-main.736.pdf)**
> The task of predicting which of two responses is preferred by a mechanism (human, LLM-as-a-judge, or reward model) based on concept-based representations.

**[MetaMetrics: Calibrating Metrics for Generation Tasks Using Human Preferences](https://proceedings.iclr.cc/paper_files/paper/2025/file/e1b248453bca182b6138b8c14a75340d-Paper-Conference.pdf) (as "Reward model scoring")**
> The observable task of a model acting as an evaluator to assign a score to a generated text, predicting its alignment with human preferences.

**[Geometric-Averaged Preference Optimization for Soft Preference Labels](https://proceedings.neurips.cc/paper_files/paper/2024/file/688c7a82e31653e7c256c6c29fd3b438-Paper-Conference.pdf) (as "Preference label classification")**
> The task of predicting which of two given responses is more preferable for a given prompt.

**[Scaling Laws for Reward Model Overoptimization in Direct Alignment Algorithms](https://proceedings.neurips.cc/paper_files/paper/2024/file/e45caa3d5273d105b8d045e748636957-Paper-Conference.pdf) (as "Preference classification")**
> Predicting the preferred answer between a pair of responses based on human feedback rankings.

**[FaST: Feature-aware Sampling and Tuning for Personalized Preference Alignment with Limited Data](https://aclanthology.org/2025.emnlp-main.475.pdf) (as "Preferred response prediction")**
> Selecting the most likely user-preferred response from a set of candidates for a given context, based on a learned reward model.

**[Amulet: Putting Complex Multi-Turn Conversations on the Stand with LLM Juries](https://aclanthology.org/2025.emnlp-main.1300.pdf) (as "Preference judgment")**
> The observable act of selecting one of two candidate responses as the better response in a multi-turn conversational context.

## Relationships

### Preference prediction →
- **PairRM** (measurements) — *measured_by*
  > "using an external reward model (PairRM (Jiang et al., 2023b)) for the preference judgment"
  - [Spread Preference Annotation: Direct Preference Judgment for Efficient LLM Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/342e5fc02b86dec9b24e41b22968e539-Paper-Conference.pdf)
- **RewardBench** (measurements) — *measured_by*
  > We use RewardBench (Lambert et al., 2024) as the test benchmark. (Section 4)
  - [MetaMetrics: Calibrating Metrics for Generation Tasks Using Human Preferences](https://proceedings.iclr.cc/paper_files/paper/2025/file/e1b248453bca182b6138b8c14a75340d-Paper-Conference.pdf)
- **MT-Bench** (measurements) — *measured_by*
  > MT-Bench (Zheng et al., 2023) is a preference dataset which compares human preferences of several model outputs on open-ended questions using multi-turn conversations. (Section 3)
  - [Beyond correlation: The impact of human uncertainty in measuring the effectiveness of automatic evaluation and LLM-as-a-judge](https://proceedings.iclr.cc/paper_files/paper/2025/file/8798321486948322be2b4d658744ba72-Paper-Conference.pdf)
- **Social bias** (constructs) — *correlates*
  > Within the vegetarian vs. non-vegetarian meal comparisons, accuracy is lower when vegetarian options are rated higher, reflecting LLMs’ omnivore bias, as LLMs more frequently prefer non-vegetarian options compared to ground truth human preferences.
  - [What can large language models do for sustainable food?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/thomas25a/thomas25a.pdf)

### Associated with
- **Objective mismatch** (constructs)
  > The performance on preference label classiﬁcation also reveals that cDPO struggles with objective mismatch between the text generation and preference modeling... (Section 1).
  - [Geometric-Averaged Preference Optimization for Soft Preference Labels](https://proceedings.neurips.cc/paper_files/paper/2024/file/688c7a82e31653e7c256c6c29fd3b438-Paper-Conference.pdf)
- **Bradley-Terry model** (measurements)
  > "Given a prompt x and two responses yi and yj, the probability that yi is preferred to yj is computed by"
  - [Rethinking Reward Model Evaluation: Are We Barking up the Wrong Tree?](https://proceedings.iclr.cc/paper_files/paper/2025/file/93f250215e4889119807b6fac3a57aec-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements)
  > "using an LLM’s predictions to approximate human preferences between them, a technique often referred to as LLM-as-judge"
  - [Spread Preference Annotation: Direct Preference Judgment for Efficient LLM Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/342e5fc02b86dec9b24e41b22968e539-Paper-Conference.pdf)
