# Alignment
**Type:** Construct  
**Referenced in:** 94 papers  
**Also known as:** Alignment performance, Multimodal alignment  

## State of the Field

**Definition agreement:** Consensus. Most papers define alignment as the degree to which a model's outputs or behavior conform to human values, preferences, intentions, instructions, and safety or ethical norms, often illustrated by being helpful, harmless, truthful, or otherwise meeting desired response properties. A few papers add reasoning-process, internal-state, fine-tuning, or multimodal specifics, but these mostly function as extensions or settings of the same core property rather than a substantial alternative definition.

**Space of definitions.** Across papers, the prevailing usage treats alignment as the degree or latent property by which a model's behavior or outputs conform to human values, preferences, intentions, instructions, or expectations, often spelled out as being helpful, harmless, safe, truthful, accurate, coherent, or non-offensive. Many formulations stay at this broad output or behavior level, while some explicitly add faithfulness to internal states or avoidance of harmful and inconsistent actions. Smaller lines of work define it more narrowly as post-finetuning output quality, as a reasoning-process property in which steps follow human-endorsed processes rather than outcome proxies, as multimodal consistency between vision and language across turns, or by shifting the reference standard from general human preferences to an individual user's subjective values.

**Space of facets.** Papers use the label for both a property and a process: some describe alignment as the end state of model behavior, while others use it for fine-tuning or decoding procedures that steer behavior toward human preferences. Several subtype labels appear, including self-alignment, inference-time alignment, multimodal alignment, and alignment performance. A few papers further divide the construct into superficial stylistic adjustments versus deeper cognitive alignment, or foreground specific facets such as instruction following, source citation, safe refusal, format adherence, consistency across semantically equivalent prompts, and faithfulness of reasoning.

**Space of measurement.** Alignment is linked to 12 measurement instruments and 10 behavioral indicators. Operationalization is mostly benchmark or dataset based, most often AlpacaEval 2.0, Arena-Hard, HH-RLHF, MT-Bench, and Reddit TL;DR, with the remaining 7 instruments covering other benchmarks plus human evaluation and LLM-as-a-judge. In practice, papers usually measure it through benchmark scores, judged win rates, or expert review of outputs, which matches the common output-centered definitions more directly than the narrower formulations about internal states, reasoning steps, or multimodal consistency.

**Links.** Across linked claims, alignment connects to 15 constructs and 10 behavioral indicators. The most recurrent outbound claims are causal relationships from alignment to helpfulness, safety, harmlessness, and trustworthiness, while papers also repeatedly treat it as related to jailbreaking. Other papers connect it to additional refusal, reliability, and capability outcomes, and no correlational links are reported. A smaller line of work reverses the direction and claims that particular data, comparison, interpretability, or robustness interventions have causal relationships to alignment.

## Sources

**[#InsTag: Instruction Tagging for Analyzing Supervised Fine-tuning of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/9dae2a90bae49dc874ce1ca8fcc20879-Paper-Conference.pdf)**
> The degree to which a model's behavior adheres to intended rules, instructions, and ethical constraints, including faithfulness to internal states and avoidance of harmful or inconsistent actions.

**[Learning Dynamics of LLM Finetuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/afe1aa79e5eea7955f553c61a307273e-Paper-Conference.pdf) (as "Alignment performance")**
> The overall quality of an LLM's outputs with respect to human-preferred behavior after finetuning.

**[AlignMMBench: Evaluating Chinese Multimodal Alignment in Large Vision-Language Models](https://aclanthology.org/2025.acl-long.327.pdf) (as "Multimodal alignment")**
> The latent ability of a vision-language model to consistently and appropriately integrate visual and linguistic information in a manner aligned with human expectations across diverse inputs and dialogue turns.

## Relationships

### Alignment →
- **Helpfulness** (constructs) — *causes*
  > Extensive efforts have been made before model release to align their behavior with human values, with the primary goal of ensuring their helpfulness and harmlessness. (ABSTRACT)
  - [Catastrophic Jailbreak of Open-source LLMs via Exploiting Generation](https://proceedings.iclr.cc/paper_files/paper/2024/file/3af25aa3de8b7b02ddbd1b6be5031be8-Paper-Conference.pdf)
- **AlpacaEval 2.0** (measurements) — *measured_by*
  > "POWER-DL consistently outperforms state-of-the-art methods in alignment benchmarks, achieving improvements of up to 13.0 points on AlpacaEval 2.0"
  - [Sail into the Headwind: Alignment via Robust Rewards and Dynamic Labels against Reward Hacking](https://proceedings.iclr.cc/paper_files/paper/2025/file/c78f81a878a72566422f37279bca0fd0-Paper-Conference.pdf)
- **Reddit TL;DR** (measurements) — *measured_by*
  > In the experiments, we simulate the soft preference labels with AI feedback from LLMs [4, 24] and show that soft preference labels and weighted geometric averaging achieve consistent improvement to the baselines on popular benchmarks for the alignment research literature, such as Reddit TL;DR [49]... (Section 1).
  - [Geometric-Averaged Preference Optimization for Soft Preference Labels](https://proceedings.neurips.cc/paper_files/paper/2024/file/688c7a82e31653e7c256c6c29fd3b438-Paper-Conference.pdf)
- **HH-RLHF** (measurements) — *measured_by*
  > To evaluate the performance, we use the Anthropic HH-RLHF (Helpful and Harmless) dataset (Bai et al., 2022a), which is the most commonly used dataset for alignment. (Section 3.2)
  - [Your Weak LLM is Secretly a Strong Teacher for Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/332b4fbe322e11a71fa39d91c664d8fa-Paper-Conference.pdf)
- **Safety** (constructs) — *causes*
  > “Alignment methods are designed to reduce such undesirable outputs”
  - [PaCE: Parsimonious Concept Engineering for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b3cca813dcd78fe75e4d4df2e6a0b1a7-Paper-Conference.pdf)
- **Arena-Hard** (measurements) — *measured_by*
  > We evaluate alignment effectiveness using three benchmarks: ... (2) Arena-Hard
  - [RMB: Comprehensively benchmarking reward models in LLM alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/427f20d90386fd27804f1831d6a3d48f-Paper-Conference.pdf)
- **MT-Bench** (measurements) — *measured_by*
  > To evaluation the generalization capability of MEGALODON on instruction following and alignment, We finetune the base model... Table 3 summarizes the performance of chat models in 7B scale on MT-Bench4. (Section 4.4).
  - [Megalodon: Efficient LLM Pretraining and Inference with Unlimited Context Length](https://proceedings.neurips.cc/paper_files/paper/2024/file/840abfadd04c967feaa2a49aba94a32d-Paper-Conference.pdf)
- **Harmlessness** (constructs) — *causes*
  > Extensive efforts have been made before model release to align their behavior with human values, with the primary goal of ensuring their helpfulness and harmlessness. (ABSTRACT)
  - [Catastrophic Jailbreak of Open-source LLMs via Exploiting Generation](https://proceedings.iclr.cc/paper_files/paper/2024/file/3af25aa3de8b7b02ddbd1b6be5031be8-Paper-Conference.pdf)
- **Truthfulness** (constructs) — *causes*
  > Reinforcement Learning from Human Feedback (RLHF) is a technique that can be used to align an agent — such as a Large Language Model (LLM) — to human preferences and lead to more truthful, more helpful, less harmful and more preferred outputs [29]. (Introduction)
  - [Would I Lie To You? Inference Time Alignment of Language Models using Direct Preference Heads](https://proceedings.neurips.cc/paper_files/paper/2024/file/ad3d0ac42b4b5cc3b5f0ca10107d5c84-Paper-Conference.pdf)
- **Training data regurgitation** (behaviors tasks) — *causes*
  > Model alignment is a guardrail to prevent unwarranted behaviors, including “inadvertent memorization and [...] regurgitation in model outputs.” (Section 2)
  - [Scalable Extraction of Training Data from Aligned, Production Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/cce0e917b050208170151f77b497fc71-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks) — *causes*
  > ...they still face reliability issues such as hallucinations, stemming from misalignment with human instructions... (Section 1)
  - [Anyprefer: An Agentic Framework for Preference Data Synthesis](https://proceedings.iclr.cc/paper_files/paper/2025/file/56fbf5a2109a6c17372209c9fa698857-Paper-Conference.pdf)
- **Harmful request refusal** (behaviors tasks) — *causes*
  > Alignment involves calibrating these models... such that they adhere to human values and safely follow human intents. The resultant aligned LLMs should not engage with user requests on certain unsafe or inappropriate topics... Instead, they provide a refusal response (Section 1)
  - [SORRY-Bench: Systematically Evaluating Large Language Model Safety Refusal](https://proceedings.iclr.cc/paper_files/paper/2025/file/9622163c87b67fd5a4a0ec3247cf356e-Paper-Conference.pdf)
- **MixEval** (measurements) — *measured_by*
  > "We evaluate alignment effectiveness using three benchmarks: (1) MixEval ..."
  - [RMB: Comprehensively benchmarking reward models in LLM alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/427f20d90386fd27804f1831d6a3d48f-Paper-Conference.pdf)
- **AdvBench** (measurements) — *measured_by*
  > We evaluate alignment effectiveness using three benchmarks: ... and (3) AdvBench
  - [RMB: Comprehensively benchmarking reward models in LLM alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/427f20d90386fd27804f1831d6a3d48f-Paper-Conference.pdf)
- **AlpacaEval** (measurements) — *measured_by*
  > improves alignment performance of Zephyr-7B-SFT model by 8% (relative) on AlpacaEval, compared against training on vanilla DPO objective. (Abstract)
  - [DavIR: Data Selection via Implicit Reward for Large Language Models](https://aclanthology.org/2025.acl-long.452.pdf)
- **Instruction following** (behaviors tasks) — *causes*
  > Large language models (LLMs) require alignment to effectively and safely follow user instructions. (Abstract)
  - [Nudging: Inference-time Alignment of LLMs via Guided Decoding](https://aclanthology.org/2025.acl-long.623.pdf)
- **Refusal** (behaviors tasks) — *causes*
  > aligned LLMs readily refuse to answer many inappropriate prompts where the factual answer, e.g., could cause harm. (Section 1)
  - [REINFORCE Adversarial Attacks on Large Language Models: An Adaptive, Distributional, and Semantic Objective](https://raw.githubusercontent.com/mlresearch/v267/main/assets/geisler25a/geisler25a.pdf)
- **Factuality** (constructs) — *causes*
  > Existing alignment or post-training strategies usually decrease the factuality of language models (Section 1).
  - [Chinese SimpleQA: A Chinese Factuality Evaluation for Large Language Models](https://aclanthology.org/2025.acl-long.941.pdf)

### → Alignment
- **Pairwise comparison** (behaviors tasks) — *causes*
  > A key recipe to achieve alignment involves presenting pairs of responses and collecting binary feedback (e.g., preferred, less preferred) based on the comparative quality of these responses. (Section 1)
  - [Your Weak LLM is Secretly a Strong Teacher for Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/332b4fbe322e11a71fa39d91c664d8fa-Paper-Conference.pdf)
- **Interpretability and explainability** (constructs) — *causes*
  > As a result, developing interpretability methods for MLLMs is crucial for improving alignment quality and efficiency. (Abstract)
  - [SAE-V: Interpreting Multimodal Models for Enhanced Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lou25b/lou25b.pdf)
- **Question difficulty** (constructs) — *causes*
  > Preference data vary in difficulty, and overly difficult examples hinder alignment, by exceeding the model’s capacity. (Abstract)
  - [Principled Data Selection for Alignment: The Hidden Risks of Difficult Examples](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gao25f/gao25f.pdf)
- **Robustness** (constructs) — *causes*
  > we compare the plain BT model and BSR on RLHF training and empirically show that robust RMs better align the policy to the gold preference model. (Abstract).
  - [On the Robustness of Reward Models for Language Model Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hong25d/hong25d.pdf)

### Associated with
- **Jailbreaking** (behaviors tasks)
  > One way to understand the limitations of these [alignment] methods is to explore their susceptibility to jailbreaking attacks; which are attempts to bypass the target LLM’s safety filters and circumvent its alignment [52].
  - [Tree of Attacks: Jailbreaking Black-Box LLMs Automatically](https://proceedings.neurips.cc/paper_files/paper/2024/file/70702e8cbb4890b4a467b984ae59828a-Paper-Conference.pdf)
- **Trustworthiness** (constructs)
  > identifying units whose outputs meet a user-specified alignment criterion... certifying their corresponding outputs as trustworthy.
  - [Conformal Alignment: Knowing When to Trust Foundation Models with Guarantees](https://proceedings.neurips.cc/paper_files/paper/2024/file/870ccde24673d3970a680bb48496ed63-Paper-Conference.pdf)
- **Instruction following ability** (constructs)
  > methods for effectively ‘aligning’ these models; i.e., steering them to follow user instructions effectively and safely, has garnered increasing attention.
  - [A Critical Evaluation of AI Feedback for Aligning Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/33870b3e099880cd8e705cd07173ac27-Paper-Conference.pdf)
- **Reward hacking** (behaviors tasks)
  > Aligning AI systems with human preferences typically suffers from the infamous reward hacking problem, where optimization of an imperfect reward model leads to undesired behaviors. (ABSTRACT)
  - [Sail into the Headwind: Alignment via Robust Rewards and Dynamic Labels against Reward Hacking](https://proceedings.iclr.cc/paper_files/paper/2025/file/c78f81a878a72566422f37279bca0fd0-Paper-Conference.pdf)
- **Text generation** (behaviors tasks)
  > They did not investigate the more challenging task of language generation, which is closely tied to alignment and involves a significantly more complex output space. (Section 5)
  - [Your Weak LLM is Secretly a Strong Teacher for Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/332b4fbe322e11a71fa39d91c664d8fa-Paper-Conference.pdf)
- **Deception** (constructs)
  > Loosely speaking, alignment refers to the performance guarantee that the AI system will generate outcomes that are intended or preferred by the human user without undesirable side effects or behaviors such as deception (Park et al., 2023) or manipulation (Perez et al., 2022).
  - [Joint Reward and Policy Learning with Demonstrations and Human Feedback Improves Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/0ad6ebd11593822b8a6d5873ca9c5b0b-Paper-Conference.pdf)
- **Manipulation** (constructs)
  > Loosely speaking, alignment refers to the performance guarantee that the AI system will generate outcomes that are intended or preferred by the human user without undesirable side effects or behaviors such as deception (Park et al., 2023) or manipulation (Perez et al., 2022).
  - [Joint Reward and Policy Learning with Demonstrations and Human Feedback Improves Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/0ad6ebd11593822b8a6d5873ca9c5b0b-Paper-Conference.pdf)
- **Best-of-n sampling** (measurements)
  > A simple and effective method for the inference-time alignment and scaling test-time compute of generative models is best-of-n sampling, where n samples are drawn from a reference policy, ranked based on a reward function, and the highest ranking one is selected. (Abstract)
  - [Theoretical guarantees on the best-of-n alignment policy](https://raw.githubusercontent.com/mlresearch/v267/main/assets/beirami25a/beirami25a.pdf)
- **Value orientation** (constructs)
  > To what degree are LLMs’ distributions of implicit values aligned with humans’ distributions? (Section 1)
  - [Implicit Values Embedded in How Humans and LLMs Complete Subjective Everyday Tasks](https://aclanthology.org/2025.emnlp-main.847.pdf)
- **PLLuM-Align** (measurements)
  > By introducing PLLuM-Align, a carefully designed Polish preference dataset explicitly built with alignment in mind, we provided a diverse and nuanced foundation for model training compared to traditional instruction-tuned datasets.
  - [PLLuM-Align: Polish Preference Dataset for Large Language Model Alignment](https://aclanthology.org/2025.emnlp-main.1219.pdf)
