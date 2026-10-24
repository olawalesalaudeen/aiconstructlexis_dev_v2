# SHP
**Type:** Measurement  
**Referenced in:** 8 papers  
**Also known as:** Stanford SHP  

## State of the Field

**What it is.** Most commonly, papers describe SHP, usually expanded as Stanford Human Preferences, as a human-preference dataset used in alignment or reward-model evaluation, though one definition calls it Shared Human Preferences. The prevailing format is prompts, questions, or posts paired with responses or comments plus a preference label, sometimes described as human annotation and sometimes as preference inferred from likes or from Reddit users rating one comment as more helpful. Descriptions differ on the source material: several papers present Reddit posts, prompts, or comments, while another describes pairs of responses to StackExchange questions; some papers also frame SHP as an out-of-distribution benchmark for reward models.

**What it is claimed to measure.** In the linked claims, papers use SHP to measure 1 construct and 1 behavioral indicator. The construct link is out-of-distribution generalization, where SHP is included among datasets for testing reward models' out-of-distribution generalization, and the behavioral-indicator link is question answering, where a paper reconstructs SHP from Reddit questions and user answers for a QA task. These measurement claims are concentrated on those targets, with no other linked constructs or behavioral indicators.

**Space of uses.** Across papers, SHP is commonly used as an evaluation dataset, and some authors also fine-tune base and reward models on it. It is most often used alongside HH-RLHF, and some papers also place it next to WebGPT, RewardBench, CrossEval, and QA Feedback, either as a general alignment benchmark, with one paper calling SHP and HH-RLHF popular for LLM alignment, or as an out-of-distribution check for reward models. No measurement instrument is linked to SHP through the recorded relationships.

## Sources

**[ARGS: Alignment as Reward-Guided Search](https://proceedings.iclr.cc/paper_files/paper/2024/file/4d1344317478ad99ff5f4e414aeab689-Paper-Conference.pdf)**
> Stanford Human Preferences dataset, consisting of prompts paired with two responses annotated for preference, used to evaluate alignment across diverse tasks.

**[Aligning Large Language Models with Representation Editing: A Control Perspective](https://proceedings.neurips.cc/paper_files/paper/2024/file/41bba7b0f5c81e789a20bb16a370aeeb-Paper-Conference.pdf) (as "Stanford SHP")**
> A human-preference dataset of Reddit prompts and paired comments used to evaluate alignment toward helpful responses.

## Relationships

### → SHP
- **Question answering** (behaviors tasks) — *measured_by*
  > “Question-Answering (QA). We reconstruct the public dataset SHP, which comprises numerous questions from Reddit posts and their corresponding user answers.”
  - [Towards Federated RLHF with Aggregated Client Preference for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/124dde499d62b58e97e42a45b26d7369-Paper-Conference.pdf)
- **Out-of-distribution generalization** (constructs) — *measured_by*
  > Beyond RewardBench, we also aim to test the out-of-distribution generalization ability of reward models including CrossEval (Zhong et al., 2024), QA Feedback (Wu et al., 2023) and SHP (Ethayarajh et al., 2022).
  - [Self-Generated Critiques Boost Reward Modeling for Language Models](https://aclanthology.org/2025.naacl-long.573.pdf)
