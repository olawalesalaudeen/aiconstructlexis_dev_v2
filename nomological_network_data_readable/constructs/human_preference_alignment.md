# Human preference alignment
**Type:** Construct  
**Referenced in:** 133 papers  
**Also known as:** Alignment with human preferences, General alignment, User Alignment, Preference alignment, Human-predictor alignment, Human value alignment, Human alignment, Human-AI alignment, Value alignment, Alignment with physician preferences, Alignment with human preference, Preference following  

## State of the Field

**Definition agreement:** Consensus. Most papers define human preference alignment as the degree to which a model's outputs or behavior match human preferences, judgments, values, intentions, or desired qualities such as helpfulness, harmlessness, and correctness, often with preference data or RLHF as the means of instilling or measuring it. A few papers narrow this to particular domains or proxies such as reward models, synthetic preferences, or a training process, but these are minor scope shifts around the same core property rather than a substantial competing definition.

**Space of definitions.** Across the literature, the prevailing usage treats human preference alignment as a latent degree to which a model's outputs or behavior conform to human preferences, judgments, values, intentions, or desired objectives. Many definitions cash this out in qualities such as helpfulness, harmlessness, honesty, safety, truthfulness, coherence, and appropriateness, and several descriptions tie it to learning from preference data or human feedback so that models present knowledge in a human-preferred way. Smaller variants narrow the reference point to user intentions and expectations, physician preferences, demographic-group aesthetic preferences, or human expertise and therapeutic goals, while a minority use nearby names for observable preference following, meaning responses that rank better with humans or reward models. Another recurring difference is the standard of alignment: most papers appeal to human preferences directly, though some definitions allow model-derived preferences or specified human values.

**Space of facets.** Papers more often treat this concept as a family of overlapping labels than as sharply distinct constructs: alignment with human preferences, preference alignment, human alignment, value alignment, human value alignment, and general alignment are all used for closely similar ideas about conformity to human intentions or values. The clearest internal breakdown is the HHH or 3H framing, sometimes with an added general criterion to cover a wider range of preferences; a smaller user-alignment framing adds conciseness and readability, and one human-centered framework moves to broader criteria. The same name family also stretches across different levels of analysis, because some papers use it for latent model behavior, while others use nearby terms for ranking alignment, evaluation alignment with human judgments, or preference following.

**Space of measurement.** Operationalization is broad: papers link the construct to 17 measurement instruments and 3 behavioral indicators. The most common measurements are benchmark-style, especially AlpacaEval 2.0, Arena-Hard, MT-Bench, and AlpacaEval; other papers use additional crowd, human-comparison, or judge-based setups. Among the behavioral indicators, instruction following is the most recurrent, with the others covering related response behavior. Papers typically operationalize alignment as wins, rankings, or judged response quality, which matches the dominant definitions of producing human-preferred outputs, though a few measurements also use broader task benchmarks.

**Links.** Outside measurement, papers link it to 13 constructs, most often via the HHH or 3H family and finer-grained user-alignment qualities. Causal claims are more scattered: separate papers claim causal relationships between instruction following and human preference alignment in both directions, and mode-seeking behavior is also placed on both sides of a causal claim; another paper claims a causal relationship from knowledge retention to human preference alignment, and several one-off papers claim causal relationships from human preference alignment to further outcomes. One paper also reports it is related to trustworthiness rather than automatically guaranteeing it, while other papers describe additional non-causal links to nearby response properties.

## Sources

**[ARGS: Alignment as Reward-Guided Search](https://proceedings.iclr.cc/paper_files/paper/2024/file/4d1344317478ad99ff5f4e414aeab689-Paper-Conference.pdf) (as "Alignment with human preferences")**
> The degree to which a model's outputs reflect the qualities preferred by humans, such as being helpful and harmless, learned implicitly through training on preference data rather than explicit instruction.

**[Beyond Imitation: Leveraging Fine-grained Quality Signals for Alignment](https://proceedings.iclr.cc/paper_files/paper/2024/file/5c8236f62e33b5224634069e64cb271a-Paper-Conference.pdf)**
> The degree to which a large language model's behaviors and outputs conform to human values and intentions.

**[SALMON: Self-Alignment with Instructable Reward Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/dda5cac5272a9bcd4bc73d90bc725ef1-Paper-Conference.pdf) (as "General alignment")**
> The extent to which an LLM's outputs conform to human intentions and broadly desirable assistant behavior across tasks.

**[FLASK: Fine-grained Language Model Evaluation based on Alignment Skill Sets](https://proceedings.iclr.cc/paper_files/paper/2024/file/f41b4a6b202adcd8e150a9d4f124d8f6-Paper-Conference.pdf) (as "User Alignment")**
> The ability to empathize with the user and align responses to their intentions, preferences, and expectations in terms of conciseness, readability, and safety.

**[SaulLM-54B & SaulLM-141B: Scaling Up Domain Adaptation for the Legal Domain](https://proceedings.neurips.cc/paper_files/paper/2024/file/ea3f85a33f9ba072058e3df233cf6cca-Paper-Conference.pdf) (as "Preference alignment")**
> The degree to which model outputs conform to human or model-derived preferences for desirable responses.

**[Eliciting Human Preferences with Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c9867d5a22653ce98b02595061e40f12-Paper-Conference.pdf) (as "Human-predictor alignment")**
> The degree to which a model's behavior and predictions correspond to a human user's desired behavior and true preferences.

**[MAP: Multi-Human-Value Alignment Palette](https://proceedings.iclr.cc/paper_files/paper/2025/file/ca549a1547bc8e8ca2df968aeaf57715-Paper-Conference.pdf) (as "Human value alignment")**
> The process of adjusting an AI system's behavior to be consistent with specified human values and preferences.

**[Seeing Eye to AI: Human Alignment via Gaze-Based Response Rewards for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4165875c8140617b8c165e18c342ccbb-Paper-Conference.pdf) (as "Human alignment")**
> The degree to which a large language model's outputs and behaviors conform to human expectations, values, and intentions.

**[Position: Beyond Assistance – Reimagining LLMs as Ethical and Adaptive Co-Creators in Mental Health Care](https://raw.githubusercontent.com/mlresearch/v267/main/assets/badawi25a/badawi25a.pdf) (as "Human-AI alignment")**
> The degree to which an LLM's outputs and behavior remain aligned with human expertise, therapeutic goals, and human-centered care norms.

**[Large Language Models as Automated Aligners for  benchmarking  Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d591ef4c631b33ac4e08dd88f1ee1dff-Paper-Conference.pdf) (as "Value alignment")**
> The tendency of a model's responses to conform to high-level human quality guidelines such as being helpful, honest, and harmless.

**[Process-Supervised Reward Models for Verifying Clinical Note Generation: A Scalable Approach Guided by Domain Expertise](https://aclanthology.org/2025.emnlp-main.967.pdf) (as "Alignment with physician preferences")**
> The degree to which a model's outputs match the subjective preferences of physicians regarding clinical note quality, beyond mere factual correctness.

**[Energy-Based Preference Model Offers Better Offline Alignment than the Bradley-Terry Preference Model](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hong25i/hong25i.pdf) (as "Alignment with human preference")**
> The degree to which a language model's outputs conform to human judgments of quality, desirability, or correctness, as inferred from preference data.

**[Beyond Imitation: Leveraging Fine-grained Quality Signals for Alignment](https://proceedings.iclr.cc/paper_files/paper/2024/file/5c8236f62e33b5224634069e64cb271a-Paper-Conference.pdf) (as "Preference following")**
> The observable tendency of a model to produce responses that are rated higher by a reward model or human evaluators, reflecting alignment with desired behaviors.

## Relationships

### Human preference alignment →
- **AlpacaEval 2.0** (measurements) — *measured_by*
  > AlpacaEval 2.0 approximately evaluates human preference for instruction following. (Section 5.1)
  - [Spread Preference Annotation: Direct Preference Judgment for Efficient LLM Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/342e5fc02b86dec9b24e41b22968e539-Paper-Conference.pdf)
- **Arena-Hard** (measurements) — *measured_by*
  > Arena-Hard is a more challenging benchmark that closely aligns with the human preference ranking from Chatbot Arena
  - [Weighted-Reward Preference Optimization for Implicit Model Fusion](https://proceedings.iclr.cc/paper_files/paper/2025/file/a49ca20266ea2d0d2dc1e3bb49196998-Paper-Conference.pdf)
- **Chatbot Arena** (measurements) — *measured_by*
  > The resulting dynamic benchmarks, i.e., MixEval and MixEval-Hard, exhibit significant correlations (0.93 and 0.96) with real-world user preference leaderboard (i.e., Chatbot Arena) and showcase high impartiality and efficiency.
  - [MixEval: Deriving Wisdom of the Crowd from LLM Benchmark Mixtures](https://proceedings.neurips.cc/paper_files/paper/2024/file/b1f34d7b4a03a3d80be8e72eb430dd81-Paper-Conference.pdf)
- **MT-Bench** (measurements) — *measured_by*
  > For assessing human preferences, recent studies have focused on building crowdsourced battle platforms with human ratings as the primary evaluation metric. Typical platforms include Chatbot Arena (Zheng et al., 2023), MT-Bench (Zheng et al., 2023), and AlpacaEval (Li et al., 2023b). (Section 1)
  - [PiCO: Peer Review in LLMs based on Consistency Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/39e9c5913c970e3e49c2df629daff636-Paper-Conference.pdf)
- **AlpacaEval** (measurements) — *measured_by*
  > For assessing human preferences, recent studies have focused on building crowdsourced battle platforms with human ratings as the primary evaluation metric. Typical platforms include Chatbot Arena (Zheng et al., 2023), MT-Bench (Zheng et al., 2023), and AlpacaEval (Li et al., 2023b). (Section 1)
  - [PiCO: Peer Review in LLMs based on Consistency Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/39e9c5913c970e3e49c2df629daff636-Paper-Conference.pdf)
- **Human preference evaluation** (measurements) — *measured_by*
  > “Then, we conduct a human preference study.”
  - [Multimodal Large Language Models Make Text-to-Image Generative Models Align Better](https://proceedings.neurips.cc/paper_files/paper/2024/file/9421261e06f1a63a352b068f1ac90609-Paper-Conference.pdf)
- **HH-RLHF** (measurements) — *measured_by*
  > Comparison in terms of the trade-off between Alignment (accuracy) and Diversity (entropy) on the Anthropic HH dataset. (Table 1)
  - [Language Models as Implicit Tree Search](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25ag/chen25ag.pdf)
- **Truthfulness** (constructs) — *causes*
  > the effects on other trustworthiness aspects are negative: ... truthfulness decreases by 25%... (Section 1)
  - [More RLHF, More Trust? On The Impact of Preference Alignment On Trustworthiness](https://proceedings.iclr.cc/paper_files/paper/2025/file/732c5757aa5577de9b103332cf7ac0bf-Paper-Conference.pdf)
- **Readability** (constructs) — *causes*
  > By aligning the LLM with the aggregated client preference, we can improve the professionalism and readability of LLM’s generated content. (Section 1)
  - [Towards Federated RLHF with Aggregated Client Preference for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/124dde499d62b58e97e42a45b26d7369-Paper-Conference.pdf)
- **MMLU** (measurements) — *measured_by*
  > for the VA task, we evaluate using MT-bench (Zheng et al., 2023) and MMLU (Hendrycks et al., 2020) (Section 4.1)
  - [EcoLoRA: Communication-Efficient Federated Fine-Tuning of Large Language Models](https://aclanthology.org/2025.emnlp-main.1046.pdf)
- **Instruction following** (behaviors tasks) — *causes*
  > their magical ability to follow myriad user instructions – the driving force behind their mass adoption – has been attributed to instruction fine-tuning and learning from human feedback. (Section 1)
  - [Privately Aligning Language Models with Reinforcement Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/477b39bfb9db99f60914dbfed5f23eb2-Paper-Conference.pdf)
- **Moral reasoning** (constructs) — *causes*
  > RLHF applied to a general-purpose preference dataset leads to a substantial average improvement of 31% on the machine ethics benchmark. (Section 1)
  - [More RLHF, More Trust? On The Impact of Preference Alignment On Trustworthiness](https://proceedings.iclr.cc/paper_files/paper/2025/file/732c5757aa5577de9b103332cf7ac0bf-Paper-Conference.pdf)
- **Stereotyping** (constructs) — *causes*
  > the effects on other trustworthiness aspects are negative: stereotypical bias increases by 150%... (Section 1)
  - [More RLHF, More Trust? On The Impact of Preference Alignment On Trustworthiness](https://proceedings.iclr.cc/paper_files/paper/2025/file/732c5757aa5577de9b103332cf7ac0bf-Paper-Conference.pdf)
- **Professionalism** (constructs) — *causes*
  > By aligning the LLM with the aggregated client preference, we can improve the professionalism and readability of LLM’s generated content. (Section 1)
  - [Towards Federated RLHF with Aggregated Client Preference for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/124dde499d62b58e97e42a45b26d7369-Paper-Conference.pdf)
- **OASST1** (measurements) — *measured_by*
  > OASST1 is a human-generated, human-annotated, assistant-style conversation, created through global crowdsourcing and widely used for human alignment tasks (K¨opf et al., 2023; Dettmers et al., 2023; Wu et al., 2024b).
  - [Seeing Eye to AI: Human Alignment via Gaze-Based Response Rewards for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4165875c8140617b8c165e18c342ccbb-Paper-Conference.pdf)
- **WildVision** (measurements) — *measured_by*
  > human-preference alignment benchmarks: MM-AlignBench, WildVision (Lu et al., 2024), and MIA-Bench (Qian et al., 2024). (Section 6.1)
  - [OmniAlign-V: Towards Enhanced Alignment of MLLMs with Human Preference](https://aclanthology.org/2025.acl-long.906.pdf)
- **Reward model** (measurements) — *measured_by*
  > The evaluation metric is the reward model (OpenAssistant, 2023) trained on human feedback, measuring the the quality of summaries and alignment with human preference.
  - [NICE Data Selection for Instruction Tuning in LLMs with Non-differentiable Evaluation Metric](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25bm/wang25bm.pdf)

### → Human preference alignment
- **Instruction following** (behaviors tasks) — *causes*
  > the model's ability to follow instructions inherently leads to better alignment with general preferences such as helpfulness and safety
  - [On-the-fly Preference Alignment via Principle-Guided Decoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/bcd1d7a599f33c06f06615429793c69b-Paper-Conference.pdf)
- **Mode-seeking behavior** (constructs) — *causes*
  > SimPER implicitly exhibits mode-seeking behavior, leading to strong alignment performance.
  - [SimPER: A Minimalist Approach to Preference  Alignment without Hyperparameters](https://proceedings.iclr.cc/paper_files/paper/2025/file/278fb93d93a1a06927f2fdc17af2384e-Paper-Conference.pdf)
- **Reward modeling ability** (constructs) — *causes*
  > By leveraging the evolved reward model’s nuanced signals, the LLM’s policy updates align better with subtle distinctions in response quality. (Section 3, STEP 4)
  - [SELF-EVOLVED REWARD LEARNING FOR LLMS](https://proceedings.iclr.cc/paper_files/paper/2025/file/26f5a4e26c13d1e0a47f46790c999361-Paper-Conference.pdf)

### Associated with
- **Harmlessness** (constructs)
  > Alignment is critical for a helpful and harmless language model (Ouyang et al., 2022; Bai et al., 2022).
  - [Enabling Lanuguage Models to Implicitly Learn Self-Improvement](https://proceedings.iclr.cc/paper_files/paper/2024/file/194fa4536bf36f35a4505d20cd5dd6fc-Paper-Conference.pdf)
- **Helpfulness** (constructs)
  > Alignment is critical for a helpful and harmless language model (Ouyang et al., 2022; Bai et al., 2022).
  - [Enabling Lanuguage Models to Implicitly Learn Self-Improvement](https://proceedings.iclr.cc/paper_files/paper/2024/file/194fa4536bf36f35a4505d20cd5dd6fc-Paper-Conference.pdf)
- **Honesty** (constructs)
  > Additionally, we found SALMON capable to emphasize the distinct aspects of the alignment with respect to being Helpful, Honest, and Harmless) (HHH) (Askell et al., 2021) by customizing its preference principles.
  - [SALMON: Self-Alignment with Instructable Reward Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/dda5cac5272a9bcd4bc73d90bc725ef1-Paper-Conference.pdf)
- **Conciseness** (constructs)
  > We define 4 primary abilities which are divided into 12 fine-grained skills for comprehensive language model evaluation: ... and User Alignment (Conciseness, Readability, Harmlessness). (Section 1)
  - [FLASK: Fine-grained Language Model Evaluation based on Alignment Skill Sets](https://proceedings.iclr.cc/paper_files/paper/2024/file/f41b4a6b202adcd8e150a9d4f124d8f6-Paper-Conference.pdf)
- **Refusal** (behaviors tasks)
  > “The ideal models are supposed to refuse to answer questions that violate human values and meanwhile provide appropriate justifications for rejection.”
  - [Large Language Models as Automated Aligners for  benchmarking  Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d591ef4c631b33ac4e08dd88f1ee1dff-Paper-Conference.pdf)
- **Verbosity bias** (constructs)
  > Despite its advantages, DPO suffers from a length bias problem, which is caused by the unbalanced length preference due to the non-uniform length distribution of chosen and rejected responses. (Section 1)
  - [Earlier Tokens Contribute More: Learning Direct Preference Optimization From Temporal Decay Perspective](https://proceedings.iclr.cc/paper_files/paper/2025/file/cd9b4a28fb9eebe0430c3312a4898a41-Paper-Conference.pdf)
- **Trustworthiness** (constructs)
  > Our results demonstrate that RLHF on human preferences doesn’t automatically guarantee trustworthiness, and reverse effects are often observed. (Section 1)
  - [More RLHF, More Trust? On The Impact of Preference Alignment On Trustworthiness](https://proceedings.iclr.cc/paper_files/paper/2025/file/732c5757aa5577de9b103332cf7ac0bf-Paper-Conference.pdf)
- **Reasoning** (constructs)
  > With the bidirectional negative feedback, our proposed BNF can naturally prevent the model from over-fitting to preference data, striking a better balance between human values and reasoning ability while minimizing the alignment tax.
  - [As Simple as Fine-tuning: LLM Alignment via Bidirectional Negative Feedback Loss](https://proceedings.iclr.cc/paper_files/paper/2025/file/4bc4e9ecd5ae4a75048dc216a770cba1-Paper-Conference.pdf)
- **Knowledge retention** (constructs)
  > This seeks a good trade-off between policy learning and knowledge retention. Our experimental results show that CPPO outperforms strong Continuous learning (CL) baselines when it comes to consistently aligning with human preferences. (Abstract)
  - [CPPO: Continual Learning for Reinforcement Learning with Human Feedback](https://proceedings.iclr.cc/paper_files/paper/2024/file/6246f93ebf4f2d76ad2bcb3158220d34-Paper-Conference.pdf)
- **Text generation** (behaviors tasks)
  > given π∗aligned with human preference, it can both empower response generation, as well as work with its reference model (amateur) to enhance the scoring of HPA for candidate responses. (Section 1)
  - [Instantly Learning Preference Alignment via In-context DPO](https://aclanthology.org/2025.naacl-long.8.pdf)
