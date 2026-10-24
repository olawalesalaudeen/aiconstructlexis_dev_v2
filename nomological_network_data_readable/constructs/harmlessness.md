# Harmlessness
**Type:** Construct  
**Referenced in:** 164 papers  
**Also known as:** Harmfulness, Harm  

## State of the Field

**Definition agreement:** Consensus. Most papers define harmlessness as a model or response-level tendency to avoid producing harmful, unsafe, unethical, toxic, or dangerous content, often including refusal under adversarial or malicious prompts. A few papers narrow this to particular harms or phrase it as the inverse risk of generating harmful content, but they still target the same core property rather than a different phenomenon.

**Space of definitions.** Across the surveyed work, the dominant framing treats harmlessness as a latent model tendency or response quality defined by not generating harmful, unsafe, unethical, offensive, or toxic content, often even under harmful or adversarial prompts. Many papers make this concrete with examples such as illegal advice, discrimination, misinformation, self-harm, violence, or other socially damaging outputs, and some connect it to refusing harmful requests. A smaller line narrows the setting to particular contexts, including malicious multimodal inputs, advice-seeking, hallucinations in critical applications, or eating-disorder-related content, so definitions differ mainly on model-level disposition versus output-level quality, and on broad safety harms versus task-specific harms.

**Space of facets.** Most papers place harmlessness beside helpfulness and honesty as one of the recurring 3H or HHH alignment objectives, and some extend this multi-objective framing with humor. Several evaluation setups split data into helpful and harmless subsets, while one advice-focused line treats harmlessness as an evaluation axis independent of helpfulness. A smaller line uses neighboring labels such as harmfulness or safety, and an auditing paper explicitly says harmlessness "encompasses a range of considerations" and is interpreted and operationalized by crowdworkers.

**Space of measurement.** Papers link harmlessness to 33 measurement instruments and 5 behavioral indicators. The most common operationalizations use HH-RLHF, LLM-as-a-judge, PKU-SafeRLHF, Human evaluation, and AdvBench: preference datasets ask which response is more helpful and harmless or mark whether a preferred response meets safety standards, LLM judges often score pairs on harmlessness together with helpfulness, relevance, accuracy, and insightfulness, human raters compare outputs for harmlessness, and adversarial benchmarks test behavior on harmful or jailbreak prompts. Many other instruments also appear, including other harmful-query benchmarks, safety classifiers, moderation or toxicity APIs, and agent-focused evaluations, so most measures match the dominant safety framing, though a smaller set operationalizes it through toxicity tools or other task benchmarks.

**Links.** The most recurring link is to Helpfulness: many papers say harmlessness is related to helpfulness, often as a tension, trade-off, or competing objective, and several report that it correlates negatively with helpfulness. Harmlessness is also related to Human preference alignment, papers claim a causal relationship from Safety alignment to harmlessness, other papers separately report that harmlessness correlates with or is related to Safety alignment, papers claim a causal relationship from Alignment to harmlessness, and some papers relate it to or report correlations with Humor. Overall, harmlessness is linked to 9 constructs and 5 behavioral indicators, with the remaining links mostly connecting it to refusal-oriented or harmful-output behaviors, including single-paper causal claims from other traits to harmlessness and from harmlessness to one output behavior.

## Sources

**[ETA: Evaluating Then Aligning Safety of Vision Language Models at Inference Time](https://proceedings.iclr.cc/paper_files/paper/2025/file/06f9fe2915857be2b1e369419a531ad3-Paper-Conference.pdf)**
> The degree to which a model avoids producing unsafe or harmful responses when given potentially malicious multimodal inputs.

**[SoftMatcha: A Soft and Fast Pattern Matcher for Billion-Scale Corpus Searches](https://proceedings.iclr.cc/paper_files/paper/2025/file/159511050630689045bf5593e74b13cc-Paper-Conference.pdf) (as "Harmfulness")**
> The latent disposition of a model to generate ethically problematic content, such as private information or information that could facilitate dangerous activities.

**[Improving and Assessing the Fidelity of Large Language Models Alignment to Online Communities](https://aclanthology.org/2025.naacl-long.5.pdf) (as "Harm")**
> The extent to which language promotes or glorifies unhealthy dieting, body objectification, or other harmful eating-disorder-related content.

## Relationships

### Harmlessness →
- **HH-RLHF** (measurements) — *measured_by*
  > The HH contains several subsplits, broadly for measuring ‘helpfulness’ and ‘harmlessness’ of a chatbot. (Section 4, Datasets)
  - [An Emulator for Fine-tuning Large Language Models using Small Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/389e161125965c0f0ba50420fee45774-Paper-Conference.pdf)
- **Helpfulness** (constructs) — *correlates*
  > We find that the performance on the two alignment objectives is negatively correlated, with the Spearman’s correlation coefficient being ρ = −0.51 for HH-RLHF (Bai et al., 2022) and ρ = −0.61 for SafeRLHF (Ji et al., 2023) (p < 0.01). (Section 1)
  - [Unlocking Decoding-time Controllability: Gradient-Free Multi-Objective Alignment with Contrastive Prompts](https://aclanthology.org/2025.naacl-long.18.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > the three rounds of Safe RLHF significantly improved the Elo scores in both helpfulness and harmlessness, as evaluated by both GPT-4 and human evaluators.
  - [Safe RLHF: Safe Reinforcement Learning from Human Feedback](https://proceedings.iclr.cc/paper_files/paper/2024/file/dd1577afd396928ed64216f3f1fd5556-Paper-Conference.pdf)
- **PKU-SafeRLHF** (measurements) — *measured_by*
  > Harmful evaluation on PKU-SafeRLHF. (Figure 3a)
  - [Improving Generalization of Alignment with Human Preferences through Group Invariant Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/c2d82a425af4c18a35049899fea5ee82-Paper-Conference.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > We ask human evaluators to determine which response is more useful, harmless, and of higher quality. (Section 5)
  - [Improving Generalization of Alignment with Human Preferences through Group Invariant Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/c2d82a425af4c18a35049899fea5ee82-Paper-Conference.pdf)
- **AdvBench** (measurements) — *measured_by*
  > "we red-team LLaMA2-7B-chat using three attack levels and evaluated on Advbench [10]."
  - [TAIA: Large Language Models are Out-of-Distribution Data Learners](https://proceedings.neurips.cc/paper_files/paper/2024/file/be0a8ecf8b2743a4117557c5eca0fb79-Paper-Conference.pdf)
- **BeaverTails** (measurements) — *measured_by*
  > BeaverTails dataset... assessing the harmlessness and helpfulness of the models.
  - [Alignment at Pre-training! Towards Native Alignment for Arabic LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/195c4e2910bedabd813f9fe4e70c642c-Paper-Conference.pdf)
- **PKU-SafeRLHF-10K** (measurements) — *measured_by*
  > the PKU-SafeRLHF-10K dataset (Ji et al., 2023; Dai et al., 2024), which contains human-labeled preference data on the helpfulness and harmlessness of prompt-response pairs (Section 6.4)
  - [A Distributional Approach to Uncertainty-Aware Preference Alignment Using Offline Demonstrations](https://proceedings.iclr.cc/paper_files/paper/2025/file/084cf2b3d73abafa1705336a0e9ebb1c-Paper-Conference.pdf)
- **StrongREJECT** (measurements) — *measured_by*
  > while quantifying response harmfulness using STRONG REJECT scores (Souly et al., 2024).
  - [The Hidden Dimensions of LLM Alignment: A Multi-Dimensional Analysis of Orthogonal Safety Directions](https://raw.githubusercontent.com/mlresearch/v267/main/assets/pan25f/pan25f.pdf)
- **HarmBench** (measurements) — *measured_by*
  > We evaluate the harmfulness of the model using HarmBench [40], a standardized framework that includes harmful behaviors and a wide range of both black box and white box attacks. (Section 4.1)
  - [Improving Alignment and Robustness with Circuit Breakers](https://proceedings.neurips.cc/paper_files/paper/2024/file/97ca7168c2c333df5ea61ece3b3276e1-Paper-Conference.pdf)
- **BeaverTails-Evaluation** (measurements) — *measured_by*
  > To further explore how increased honesty impacts harmlessness, we utilize the 700 test prompts from BeaverTails-Evaluation10 (Ji et al., 2023b) that can potentially elicit harmful responses... (Appendix D.8)
  - [Alignment for Honesty](https://proceedings.neurips.cc/paper_files/paper/2024/file/7428e6db752171d6b832c53b2ed297ab-Paper-Conference.pdf)
- **JailbreakBench** (measurements) — *measured_by*
  > For harmlessness evaluation, we generated responses from the aligned LLM on a mixed dataset of AdvBench (Zou et al., 2023) and JailbreakBench (Chao et al., 2024)...
  - [TIS-DPO: Token-level Importance Sampling for Direct Preference Optimization With Estimated Weights](https://proceedings.iclr.cc/paper_files/paper/2025/file/7fb9f39075a5202472676a7531568212-Paper-Conference.pdf)
- **Llama Guard** (measurements) — *measured_by*
  > For harmlessness evaluation, we ... used Llama-Guard (Inan et al., 2023) to determine the safety of the responses...
  - [TIS-DPO: Token-level Importance Sampling for Direct Preference Optimization With Estimated Weights](https://proceedings.iclr.cc/paper_files/paper/2025/file/7fb9f39075a5202472676a7531568212-Paper-Conference.pdf)
- **HEx-PHI** (measurements) — *measured_by*
  > To assess the defense performance when a naive attacker directly inputs harmful queries to the language model, we utilize two harmful query benchmark datasets: Advbench (Zou et al., 2023) and HEx-PHI (Qi et al., 2024). (Section 4.1)
  - [Layer-Level Self-Exposure and Patch: Affirmative Token Mitigation for Jailbreak Attack Defense](https://aclanthology.org/2025.naacl-long.623.pdf)
- **HarmBench classifier** (measurements) — *measured_by*
  > We report percentage of harmless responses based on the safety classifier HarmBench-Llama2-13B-Chat (Mazeika et al., 2024).
  - [Bi-Factorial Preference Optimization: Balancing Safety-Helpfulness in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ad77a15531fbccefa8be5e434b4b7908-Paper-Conference.pdf)
- **OpenAI Moderation API** (measurements) — *measured_by*
  > To evaluate the toxicity and harmfulness of the fine-tuning examples by prompting strategy we use OpenAI’s Moderation API. (Section 3.1)
  - [Do as I do (Safely): Mitigating Task-Specific Fine-tuning Risks in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/70de9e3948645a1be2de657f14d85c6d-Paper-Conference.pdf)
- **Perspective API** (measurements) — *measured_by*
  > For harmlessness, we follow (Li et al., 2024b) and utilize metrics Expected Maximum Toxicity (EMT) and Toxicity Probability (TP) from the Perspective API to examine the harmful content (Section 4.1).
  - [Token-Aware Editing of Internal Activations for Large Language Model Alignment](https://aclanthology.org/2025.emnlp-main.480.pdf)
- **Anthropic Red Team** (measurements) — *measured_by*
  > The Anthropic Red-Team (Ganguli et al., 2022) dataset contains ∼40k instances. Each instance has a multi-round conversation between humans and the AI assistant, and a 5-level score showing the harmfulness of the conversation (Section 5.1).
  - [Unmasking and Improving Data Credibility: A Study with Datasets for Training Harmless Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c3837ae3d17a91b08bf5cc19280e7fd2-Paper-Conference.pdf)
- **GPT-4 Head-to-head Comparison** (measurements) — *measured_by*
  > we measure both harmlessness (Harm) and helpfulness (Help) for the harmlessness task... We additionally query GPT-4 for binary judgments on 1000 examples. (Sec. 4)
  - [RLCD: Reinforcement Learning from Contrastive Distillation for LM Alignment](https://proceedings.iclr.cc/paper_files/paper/2024/file/5bd09a559a8c8e230697107b0f353d39-Paper-Conference.pdf)
- **Honesty** (constructs) — *correlates*
  > MiniGPT-v2 exhibits strong safety across several dimensions but underperforms on Truthfulness, suggesting a potential trade-off between honesty and harmlessness.
  - [MLLMGuard: A Multi-dimensional Safety Evaluation Suite for Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/0d9dcd4ebef57f1839d871fe7d891e91-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Harmful instructions** (measurements) — *measured_by*
  > To evaluate the safety of the fine-tuned models, we follow previous work by analyzing their performance on two evaluation datasets of harmful queries: Harmful Instructions (HarmI) (Zou et al., 2023) and Harmful Questions (HarmQ) (Bai et al., 2022a). (Section 3.1)
  - [Do as I do (Safely): Mitigating Task-Specific Fine-tuning Risks in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/70de9e3948645a1be2de657f14d85c6d-Paper-Conference.pdf)
- **Llama Guard 3** (measurements) — *measured_by*
  > For evaluating if a generated response is harmless, we use an off-the-shelf LLM, Llama-Guard-3-8B (Llama Team, 2024), which is fine-tuned for content safety classification task to assess the safety of the generated text (Section 4.3).
  - [Constrained Decoding with Speculative Lookaheads](https://aclanthology.org/2025.naacl-long.239.pdf)
- **GCG** (measurements) — *measured_by*
  > Table 1 presents a benchmark comparison, displaying harmfulness scores and ASR (attack success rates, shown in brackets) for various defense methods... under several benchmark attacks, including GCG (Section 4.2).
  - [Layer-Level Self-Exposure and Patch: Affirmative Token Mitigation for Jailbreak Attack Defense](https://aclanthology.org/2025.naacl-long.623.pdf)
- **PAIR** (measurements) — *measured_by*
  > Table 1 presents a benchmark comparison, displaying harmfulness scores and ASR (attack success rates, shown in brackets) for various defense methods... under several benchmark attacks, including PAIR (Section 4.2).
  - [Layer-Level Self-Exposure and Patch: Affirmative Token Mitigation for Jailbreak Attack Defense](https://aclanthology.org/2025.naacl-long.623.pdf)
- **DeepInception** (measurements) — *measured_by*
  > Table 1 presents a benchmark comparison, displaying harmfulness scores and ASR (attack success rates, shown in brackets) for various defense methods... under several benchmark attacks, including DeepInception (Section 4.2).
  - [Layer-Level Self-Exposure and Patch: Affirmative Token Mitigation for Jailbreak Attack Defense](https://aclanthology.org/2025.naacl-long.623.pdf)
- **Harmful content generation** (behaviors tasks) — *causes*
  > Taking the concept of harmfulness as an example, L-Cross Modulation effectively steer LLMs to generate harmful content in 90% of outputs on test set, compared with 0% harmful content in the original responses;
  - [Cross-model Transferability among Large Language Models on the Platonic Representations of Concepts](https://aclanthology.org/2025.acl-long.185.pdf)
- **RepE** (measurements) — *measured_by*
  > Four additional concepts—Fairness (FAIR), Harmfulness (HARM), Happiness (HAPPY), and FEAR—are included based on RepE dataset (Zou et al., 2023a).
  - [Cross-model Transferability among Large Language Models on the Platonic Representations of Concepts](https://aclanthology.org/2025.acl-long.185.pdf)
- **ToxiGen** (measurements) — *measured_by*
  > Our experiments focus on Helpfulness (Alpaca Eval 2.0 (Dubois et al., 2024) and IFEval (Zhou et al., 2023)), Harmlessness (Toxigen (Hartvigsen et al., 2022)), and Coding (MBPP (Austin et al., 2021), HumanEval (Chen et al., 2021)). (Section 4)
  - [AutoMixAlign: Adaptive Data Mixing for Multi-Task Preference Optimization in LLMs](https://aclanthology.org/2025.acl-long.990.pdf)
- **AgentHarm** (measurements) — *measured_by*
  > AgentHarm (Andriushchenko et al., 2024b) is a benchmark proposed for measuring such harmfulness in LLM agents based on Inspect AI (UK AI Safety Institute, 2024).
  - [UDora: A Unified Red Teaming Framework against LLM Agents by Dynamically Hijacking Their Own Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cl/zhang25cl.pdf)
- **XSTest** (measurements) — *measured_by*
  > For harmlessness, models are required to provide clear refusals to harmful queries... We test the models on StrongReject (Souly et al., 2024), XsTest (Röttger et al., 2024)... (Section 3.1)
  - [STAIR: Improving Safety Alignment with Introspective Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cx/zhang25cx.pdf)
- **WildChat** (measurements) — *measured_by*
  > For harmlessness, models are required to provide clear refusals to harmful queries... We test the models on ... highly toxic prompts from WildChat (Zhao et al., 2024)... (Section 3.1)
  - [STAIR: Improving Safety Alignment with Introspective Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cx/zhang25cx.pdf)
- **RealToxicityPrompts** (measurements) — *measured_by*
  > For harmlessness, we follow (Li et al., 2024b) and utilize metrics ... to examine the harmful content generated on RealToxicityPrompts (Gehman et al., 2020). (Section 4.1).
  - [Token-Aware Editing of Internal Activations for Large Language Model Alignment](https://aclanthology.org/2025.emnlp-main.480.pdf)

### → Harmlessness
- **Safety alignment** (constructs) — *causes*
  > Specifically, harmless is achieved by safety alignment that empowers the LLM with safety guardrails so that the model can refuse harmful instructions.
  - [Navigating the Safety Landscape: Measuring Risks in Finetuning Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/ada93fa6643735f294be51dc31eebbd4-Paper-Conference.pdf)
- **Alignment** (constructs) — *causes*
  > Extensive efforts have been made before model release to align their behavior with human values, with the primary goal of ensuring their helpfulness and harmlessness. (ABSTRACT)
  - [Catastrophic Jailbreak of Open-source LLMs via Exploiting Generation](https://proceedings.iclr.cc/paper_files/paper/2024/file/3af25aa3de8b7b02ddbd1b6be5031be8-Paper-Conference.pdf)
- **Actionability** (constructs) — *causes*
  > Through human evaluation, we determine actionability and informativeness as key attributes in inducing harm when the jailbroken response is followed by individuals without specialized knowledge. (Section 1)
  - [Speak Easy: Eliciting Harmful Jailbreaks from LLMs with Simple Interactions](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chan25b/chan25b.pdf)
- **Informativeness** (constructs) — *causes*
  > Through human evaluation, we determine actionability and informativeness as key attributes in inducing harm when the jailbroken response is followed by individuals without specialized knowledge. (Section 1)
  - [Speak Easy: Eliciting Harmful Jailbreaks from LLMs with Simple Interactions](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chan25b/chan25b.pdf)

### Associated with
- **Human preference alignment** (constructs)
  > Alignment is critical for a helpful and harmless language model (Ouyang et al., 2022; Bai et al., 2022).
  - [Enabling Lanuguage Models to Implicitly Learn Self-Improvement](https://proceedings.iclr.cc/paper_files/paper/2024/file/194fa4536bf36f35a4505d20cd5dd6fc-Paper-Conference.pdf)
- **Safety** (constructs)
  > safety assesses harmlessness (Section 4.1).
  - [Style Outweighs Substance: Failure Modes of LLM Judges in Alignment Benchmarking](https://proceedings.iclr.cc/paper_files/paper/2025/file/1eb36d07ebb13be16ddbda679a95018b-Paper-Conference.pdf)
- **Humor** (constructs)
  > In practice, human preferences are multi-dimensional and we often need to align LLMs to balance multiple, sometimes conflicting, preference dimensions such as helpfulness, harmlessness, and humor (Section 2. Related Work)
  - [PARM: Multi-Objective Test-Time Alignment via Preference-Aware Autoregressive Reward Model](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lin25h/lin25h.pdf)
- **Safe response generation** (behaviors tasks)
  > “We evaluate RLCD through both human and automatic evaluations on three tasks, aiming to improve the ability of LLaMA-7B ... to generate harmless outputs” (Introduction).
  - [RLCD: Reinforcement Learning from Contrastive Distillation for LM Alignment](https://proceedings.iclr.cc/paper_files/paper/2024/file/5bd09a559a8c8e230697107b0f353d39-Paper-Conference.pdf)
- **Refusal** (behaviors tasks)
  > ...a model that refuses to answer, while technically considered harmless, renders the response quite unhelpful [16].
  - [Stepwise Alignment for Constrained Language Model Policy Optimization](https://proceedings.neurips.cc/paper_files/paper/2024/file/bcfcf7232cb74e1ef82d751880ff835b-Paper-Conference.pdf)
- **Harmful request refusal** (behaviors tasks)
  > The first two responses demonstrate the model’s ability to avoid providing assistance on unethical actions... (Figure 4).
  - [Progressively Label Enhancement for Large Language Model Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25cg/liu25cg.pdf)
