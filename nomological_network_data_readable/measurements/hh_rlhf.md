# HH-RLHF
**Type:** Measurement  
**Referenced in:** 100 papers  
**Also known as:** Anthropic-RLHF-HH, Anthropic/HH-RLHF, HH-RLHF*, hh-rlhf, Anthropic HH, ANTHROPIC HH, Anthropic-HH, HH-rlhf, Anthropic HH dataset, Anthropic harmless data, HH, Anthropic Helpfulness and Harmlessness (HH), Helpful & Harmless, Anthropic Helpfulness-Harmlessness dataset, Helpful-Harmless dataset, Anthropic HH (RLHF), Anthropic HHH, Anthropic Helpful and Harmless, HH dataset, Anthropic-HH dataset  

## State of the Field

**What it is.** Across papers, the prevailing description is an Anthropic human preference dataset or benchmark for helpful and harmless assistant behavior, usually built from human-assistant conversations or prompts paired with two responses and a human preference label. Definitions vary between paired responses, paired conversations, multi-turn dialogues, and single-step human-assistant interactions, and several papers treat helpfulness and harmlessness as separate portions or subsplits. Smaller usages refer to a helpfulness-only portion, a harmlessness-focused setup, an out-of-domain subset called HH-RLHF*, or an Anthropic HHH version described as adding honesty.

**What it is claimed to measure.** Most papers use HH-RLHF to measure helpfulness and harmlessness, and the strongest convergence is around those two constructs. It is linked to 10 constructs and 3 behavioral indicators overall: beyond helpfulness and harmlessness, the most common additional construct links are alignment, humor, and human preference alignment. On the behavioral side, it is used most often for dialogue generation, and more occasionally for multi-turn dialogue and text generation.

**Space of uses.** Papers do not link it to any other measurement instrument. In use, they apply it for both training and evaluation, often presenting it as a popular or commonly adopted benchmark for alignment and dialogue, and sometimes as an in-domain test set, a validation split, or an out-of-domain check. Source snippets also show it being used alongside benchmarks such as SHP, UltraFeedback, TL;DR, SafeRLHF, and AlpacaEval, and some papers separate helpfulness and harmlessness subsets or convert multi-turn dialogues into single-turn format.

**Concerns raised.** A smaller line of work raises concerns about the dataset itself. One paper that examines HH-RLHF as an alignment dataset reports many incorrect answers in a sampled portion and frames this as annotation error that may propagate instruction-following biases into models. Another paper, using Anthropic HH as an out-of-distribution test set, notes that it contains a large amount of toxic content.

## Sources

**[Towards Understanding Sycophancy in Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/0105f7972202c1d4fb817da9f21a9663-Paper-Conference.pdf) (as "hh-rlhf")**
> The helpfulness and harmlessness dataset from Anthropic (Bai et al., 2022a), containing human preference comparisons between model responses, used here to analyze what behaviors are incentivized.

**[Enabling Lanuguage Models to Implicitly Learn Self-Improvement](https://proceedings.iclr.cc/paper_files/paper/2024/file/194fa4536bf36f35a4505d20cd5dd6fc-Paper-Conference.pdf) (as "Anthropic/HH-RLHF")**
> Dataset of human-AI conversation pairs used to train and evaluate helpful and harmless behavior in language models, containing preference-labeled responses for alignment evaluation.

**[ARGS: Alignment as Reward-Guided Search](https://proceedings.iclr.cc/paper_files/paper/2024/file/4d1344317478ad99ff5f4e414aeab689-Paper-Conference.pdf)**
> The Helpful and Harmless dataset from Anthropic, a benchmark for alignment that consists of prompts each with two responses, where one is preferred by human annotators based on helpfulness and harmlessness.

**[Tool-Augmented Reward Modeling](https://proceedings.iclr.cc/paper_files/paper/2024/file/4eb7f0abf16d08e50ed42beb1e22e782-Paper-Conference.pdf) (as "HH-RLHF*")**
> A 150-instance subset of the HH-RLHF dataset used for out-of-domain evaluation to test the model's ability to generalize its preference scoring to unseen prompts.

**[Improving Generalization of Alignment with Human Preferences through Group Invariant Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/c2d82a425af4c18a35049899fea5ee82-Paper-Conference.pdf) (as "Anthropic-RLHF-HH")**
> A large-scale dataset of human feedback on AI assistant responses, containing preference data for both helpful and harmless conversations.

**[Joint Reward and Policy Learning with Demonstrations and Human Feedback Improves Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/0ad6ebd11593822b8a6d5873ca9c5b0b-Paper-Conference.pdf) (as "Anthropic-HH")**
> A preference dataset for evaluating helpfulness and harmlessness, consisting of prompts with two model-generated continuations ranked by human labelers.

**[Regressing the Relative Future: Efficient Policy Optimization for Multi-turn RLHF](https://proceedings.iclr.cc/paper_files/paper/2025/file/186094ef879dcbd5ef6879782916c309-Paper-Conference.pdf) (as "Anthropic HH")**
> The Anthropic Helpful and Harmless dataset, a collection of multi-turn dialogues used to train and evaluate models on their ability to be helpful while avoiding harmful responses.

**[SEAL: Safety-enhanced Aligned LLM Fine-tuning via Bilevel Data Selection](https://proceedings.iclr.cc/paper_files/paper/2025/file/4d5d91b4525151fc0fee1048332bfb6d-Paper-Conference.pdf) (as "ANTHROPIC HH")**
> The Anthropic Helpful and Harmless dataset, which contains pairs of multi-turn dialogues designed to evaluate a model's ability to be both helpful and safe.

**[3D-Properties: Identifying Challenges in DPO and Charting a Path Forward](https://proceedings.iclr.cc/paper_files/paper/2025/file/c080f9fb3658511bc4f063c5794ef706-Paper-Conference.pdf) (as "HH-rlhf")**
> A preference dataset used for training and evaluation in the comparison between DPO and reward-model training.

**[Weak-to-Strong Preference Optimization: Stealing Reward from Weak Aligned Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/5beb3a846137dd6524f2da17c97d9426-Paper-Conference.pdf) (as "Anthropic HH dataset")**
> The test split of the Anthropic Helpful and Harmless (HH) dataset, used to evaluate model alignment by assessing responses in single-step human-assistant interactions.

**[Failures to Find Transferable Image Jailbreaks Between Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/6e3daaeca6be8579573f69082b2dd58b-Paper-Conference.pdf) (as "Anthropic HHH")**
> A dataset of human preference comparisons over helpful, harmless, and honest AI responses, used here as a source of harmful prompts and responses.

**[MAP: Multi-Human-Value Alignment Palette](https://proceedings.iclr.cc/paper_files/paper/2025/file/ca549a1547bc8e8ca2df968aeaf57715-Paper-Conference.pdf) (as "Anthropic harmless data")**
> A dataset of human-AI conversations used as a source of prompts for evaluating alignment on conversational tasks.

**[Entropy-based Activation Function Optimization: A Method on Searching Better Activation Functions](https://proceedings.iclr.cc/paper_files/paper/2025/file/d5cbee19280e1fd9d9dba8c1febf48bd-Paper-Conference.pdf) (as "HH")**
> The Anthropic Helpful and Harmless dataset, a collection of human preference data comparing model responses to evaluate and align language models.

**[Preference learning made easy: Everything should be understood through win rate](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25bm/zhang25bm.pdf) (as "Anthropic Helpfulness and Harmlessness (HH)")**
> A dataset of human preference comparisons between model responses, focused on the criteria of being helpful and harmless.

**[Right Now, Wrong Then: Non-Stationary Direct Preference Optimization under Preference Drift](https://raw.githubusercontent.com/mlresearch/v267/main/assets/son25a/son25a.pdf) (as "Helpful & Harmless")**
> A preference dataset used to construct non-stationary preference data for LLM fine-tuning experiments.

**[Scaling Laws for Reward Model Overoptimization in Direct Alignment Algorithms](https://proceedings.neurips.cc/paper_files/paper/2024/file/e45caa3d5273d105b8d045e748636957-Paper-Conference.pdf) (as "Anthropic Helpfulness-Harmlessness dataset")**
> A dataset containing conversations where human labelers compare two model responses based on helpfulness and harmlessness criteria.

**[Learning Goal-Conditioned Representations for Language Reward Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d46f127a80dc58cbc0732a717285c43a-Paper-Conference.pdf) (as "Helpful-Harmless dataset")**
> A large-scale dataset of human preference labels used for training and evaluating models on helpfulness and harmlessness.

**[Geometric-Averaged Preference Optimization for Soft Preference Labels](https://proceedings.neurips.cc/paper_files/paper/2024/file/688c7a82e31653e7c256c6c29fd3b438-Paper-Conference.pdf) (as "Anthropic Helpful and Harmless")**
> A benchmark dataset for evaluating the helpfulness and harmlessness of conversational agents, containing dialogues designed to elicit these qualities.

**[Beyond the Safety Bundle: Auditing the Helpful and Harmless Dataset](https://aclanthology.org/2025.naacl-long.596.pdf) (as "HH dataset")**
> Human preference dataset by Anthropic containing paired model responses annotated for helpfulness and harmlessness, used to train models via learning from human feedback.

**[Decoding-Time Language Model Alignment with Multiple Objectives](https://proceedings.neurips.cc/paper_files/paper/2024/file/57c89126d60c209f48d0e6395c766bb3-Paper-Conference.pdf) (as "Anthropic-HH dataset")**
> The Anthropic Helpful and Harmless dataset, containing human preference data for training models to be helpful and harmless in dialogue.

## Relationships

### → HH-RLHF
- **Helpfulness** (constructs) — *measured_by*
  > Human preference data: Anthropic-RLHF-HH dataset is used, which is a large-scale collection of human feedback on AI assistant responses, including both helpful and harmless data (Bai et al., 2022b). (Section 5)
  - [Improving Generalization of Alignment with Human Preferences through Group Invariant Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/c2d82a425af4c18a35049899fea5ee82-Paper-Conference.pdf)
- **Harmlessness** (constructs) — *measured_by*
  > The HH contains several subsplits, broadly for measuring ‘helpfulness’ and ‘harmlessness’ of a chatbot. (Section 4, Datasets)
  - [An Emulator for Fine-tuning Large Language Models using Small Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/389e161125965c0f0ba50420fee45774-Paper-Conference.pdf)
- **Dialogue generation** (behaviors tasks) — *measured_by*
  > We also evaluate on the validation split of the Anthropic’s Helpful and Harmless (HH) dataset (Ganguli et al., 2022; Bai et al., 2022a), where where each example comprises a pair of conversations between a human and a large language model, with one of the two conversations preferred by a human.
  - [Chain of Hindsight aligns Language Models with Feedback](https://proceedings.iclr.cc/paper_files/paper/2024/file/b4ccb915933443c86a588e45d77a5748-Paper-Conference.pdf)
- **Alignment** (constructs) — *measured_by*
  > To evaluate the performance, we use the Anthropic HH-RLHF (Helpful and Harmless) dataset (Bai et al., 2022a), which is the most commonly used dataset for alignment. (Section 3.2)
  - [Your Weak LLM is Secretly a Strong Teacher for Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/332b4fbe322e11a71fa39d91c664d8fa-Paper-Conference.pdf)
- **Humor** (constructs) — *measured_by*
  > HH-RLHF [3]: a large-scale dataset ... We follow Yang et al. [35] and use open-sourced reward models on three objectives: "Harmless", "Helpful", and "Humor" to score the responses (Section 4.1).
  - [MetaAligner: Towards Generalizable Multi-Objective Alignment of Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/3d03800841fa1bb2f43ef1750aafcce4-Paper-Conference.pdf)
- **Safety alignment** (constructs) — *measured_by*
  > To further evaluate the effectiveness of SimPER in safety alignment on Pythia-2.8B following (Rafailov et al., 2024), we use the Anthropic-HH dataset.
  - [SimPER: A Minimalist Approach to Preference  Alignment without Hyperparameters](https://proceedings.iclr.cc/paper_files/paper/2025/file/278fb93d93a1a06927f2fdc17af2384e-Paper-Conference.pdf)
- **Human preference alignment** (constructs) — *measured_by*
  > Comparison in terms of the trade-off between Alignment (accuracy) and Diversity (entropy) on the Anthropic HH dataset. (Table 1)
  - [Language Models as Implicit Tree Search](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25ag/chen25ag.pdf)
- **Safety** (constructs) — *measured_by*
  > we applied our approach to HH-RLHF (Anthropic, 2022), a commonly used preference dataset for safety alignment. (Section 5.2)
  - [RuleAdapter: Dynamic Rules for training Safety Reward Models in RLHF](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25o/li25o.pdf)
- **Reward overoptimization** (constructs) — *measured_by*
  > Additional plots illustrating similar over-optimization trends for Direct Alignment Algorithms on the Gemma2-2b model [61] and the Anthropic Helpfulness-Harmlessness dataset [5] are provided in Appendix F (Section 3)
  - [Scaling Laws for Reward Model Overoptimization in Direct Alignment Algorithms](https://proceedings.neurips.cc/paper_files/paper/2024/file/e45caa3d5273d105b8d045e748636957-Paper-Conference.pdf)
- **Reward modeling ability** (constructs) — *measured_by*
  > The results of reward modeling on the HH-RLHF, Ultrafeedback, Summarize, and Stack-overflow. (Table 1 caption)
  - [SELF-EVOLVED REWARD LEARNING FOR LLMS](https://proceedings.iclr.cc/paper_files/paper/2025/file/26f5a4e26c13d1e0a47f46790c999361-Paper-Conference.pdf)
- **Memorization** (constructs) — *measured_by*
  > Finally, we explore RLHF memorization on different task domains by studying memorization on natural language datasets, LIMA (Zhou et al., 2024) and Anthropic HH (Bai et al., 2022). (Section 5.5)
  - [Measuring memorization in RLHF for code completion](https://proceedings.iclr.cc/paper_files/paper/2025/file/22811d2089d4aa0ba66e52a5e47efb65-Paper-Conference.pdf)
