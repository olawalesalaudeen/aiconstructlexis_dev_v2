# Helpfulness
**Type:** Construct  
**Referenced in:** 188 papers  
**Also known as:** Perceived helpfulness, Usefulness  

## State of the Field

**Definition agreement:** Consensus. Most papers define helpfulness as the usefulness, relevance, or effectiveness of a model's output in addressing a user's query, instruction, needs, or goals. A few papers narrow this to particular settings such as tutoring, advice, accessibility, safety-limited compliance, or advertised task performance, but these are still scoped versions of the same core property of user-directed utility rather than different phenomena.

**Space of definitions.** Across the surveyed work, the prevailing usage treats helpfulness as a latent quality of model responses: being useful, relevant, informative, supportive, and satisfying relative to a user's query, instruction, or intent. Many papers state this in near-equivalent terms, sometimes adding directness, comprehensiveness, factual accuracy, or alignment with stated or implied goals. Smaller lines of work narrow it to basic task completion or instruction adherence, cast it as perceived helpfulness grounded in a user's own experience and satisfaction during collaboration, or define it through domain criteria such as culturally aware support, subjective advice quality shaped by personal or majority preferences, or tutor guidance that is constructive without giving the full answer. Some authors also use the neighboring term usefulness, either for direct answers to instructions or for retained task performance and compliant responses to benign requests, often alongside safety trade-offs.

**Space of facets.** Papers most often position helpfulness as one objective in multi-objective or human-preference alignment, commonly alongside harmlessness and sometimes honesty, humor, or a broader general standard. Within that umbrella, some papers spell out constituent criteria such as relevance, accuracy, insightfulness, quality, and comprehensiveness, while advice-focused work emphasizes empathy, actionability, creativity, practicality, and collective preferences, and culturally focused work describes 'culturally aware helpfulness' as support that respects cultural norms. The term also overlaps with instruction following in several places: one benchmark defines helpfulness as completing the basic task in the instruction, and another rates 'helpfulness & instruction-following' together, so papers do not always reserve the name for the same level of abstraction.

**Space of measurement.** Papers link helpfulness to 37 measurement instruments and 7 behavioral indicators, using a mix of preference datasets, general benchmarks, human evaluation, and judge models. The most common operationalizations are HH-RLHF, LLM-as-a-judge, MT-Bench, Human evaluation, and PKU-SafeRLHF: in practice, helpfulness is read off pairwise preference labels and win rates, GPT-4 style ratings on fixed scales or binary judgments, and benchmark aggregates for dialogue or general capability. These choices often mirror the dominant definition of useful and relevant assistance, but some papers operationalize helpfulness differently, for example as accuracy on GSM8K or XNLI/X-CSQA, Not-Overrefusal Rate, zero-shot task performance, or multimodal benchmark performance.

**Links.** Across 17 linked constructs, harmlessness is the recurring counterpart: many papers say it is related to helpfulness, usually as a trade-off, tension, or competing objective, and some report negative correlation, including on HH-RLHF and SafeRLHF. Several papers claim a causal relationship from alignment and safety alignment to helpfulness, while one paper on safety tuning states that the causal relationship runs in a negative direction for helpfulness. At the behavioral level, papers claim causal relationships from refusal and overrefusal to helpfulness, with refusal described as rendering a response unhelpful.

## Sources

**[Aligning Large Language Models with Representation Editing: A Control Perspective](https://proceedings.neurips.cc/paper_files/paper/2024/file/41bba7b0f5c81e789a20bb16a370aeeb-Paper-Conference.pdf)**
> The quality of an AI assistant's responses in being useful, relevant, and satisfying to a user's query or instruction.

**[Personality Matters: User Traits Predict LLM Preferences in Multi-Turn Collaborative Tasks](https://aclanthology.org/2025.emnlp-main.71.pdf) (as "Perceived helpfulness")**
> The extent to which a user feels an LLM effectively supports their specific needs and goals during a collaborative interaction.

**[Multilingual Jailbreak Challenges in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/6b396f766a50e0853a5164e68048540c-Paper-Conference.pdf) (as "Usefulness")**
> The degree to which a model's output effectively meets a user's requirements and performs well on general language processing tasks, often considered in a trade-off with safety.

## Relationships

### Helpfulness →
- **HH-RLHF** (measurements) — *measured_by*
  > Human preference data: Anthropic-RLHF-HH dataset is used, which is a large-scale collection of human feedback on AI assistant responses, including both helpful and harmless data (Bai et al., 2022b). (Section 5)
  - [Improving Generalization of Alignment with Human Preferences through Group Invariant Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/c2d82a425af4c18a35049899fea5ee82-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > the three rounds of Safe RLHF significantly improved the Elo scores in both helpfulness and harmlessness, as evaluated by both GPT-4 and human evaluators.
  - [Safe RLHF: Safe Reinforcement Learning from Human Feedback](https://proceedings.iclr.cc/paper_files/paper/2024/file/dd1577afd396928ed64216f3f1fd5556-Paper-Conference.pdf)
- **MT-Bench** (measurements) — *measured_by*
  > Following HelpSteer [12], we use MT Bench [31] to measure helpfulness, TruthfulQA MC2 [36] to measure correctness, and the mean number of characters in MT Bench responses to measure verbosity.
  - [HelpSteer 2: Open-source dataset for training top-performing reward models](https://proceedings.neurips.cc/paper_files/paper/2024/file/02fd91a387a6a5a5751e81b58a75af90-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > We ask human evaluators to determine which response is more useful, harmless, and of higher quality. (Section 5)
  - [Improving Generalization of Alignment with Human Preferences through Group Invariant Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/c2d82a425af4c18a35049899fea5ee82-Paper-Conference.pdf)
- **AlpacaEval 2.0** (measurements) — *measured_by*
  > In addition, we also use AlpacaEval 2.0 Length Controlled [37] and Arena Hard [38] as secondary measures of helpfulness, following [33, 39].
  - [HelpSteer 2: Open-source dataset for training top-performing reward models](https://proceedings.neurips.cc/paper_files/paper/2024/file/02fd91a387a6a5a5751e81b58a75af90-Paper-Datasets_and_Benchmarks_Track.pdf)
- **PKU-SafeRLHF** (measurements) — *measured_by*
  > PKU-SafeRLHF provides both paired helpfulness preference rankings and binary safety labels.
  - [Bi-Factorial Preference Optimization: Balancing Safety-Helpfulness in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ad77a15531fbccefa8be5e434b4b7908-Paper-Conference.pdf)
- **UltraFeedback** (measurements) — *measured_by*
  > UltraFeedback [7]: a multi-aspect alignment dataset with 64K prompts with preferences obtained from GPT-4, including "Instruction following", "Honest", "Truthful", and "Helpful" objectives (Section 4.1).
  - [MetaAligner: Towards Generalizable Multi-Objective Alignment of Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/3d03800841fa1bb2f43ef1750aafcce4-Paper-Conference.pdf)
- **GSM8K** (measurements) — *measured_by*
  > training set is GSM8K (grade school math) and helpfulness is test accuracy on GSM8K. (Section 2)
  - [Keeping LLMs Aligned After Fine-tuning: The Crucial Role of Prompt Templates](https://proceedings.neurips.cc/paper_files/paper/2024/file/d6f034bb216b472fc7d32ec7aff20342-Paper-Conference.pdf)
- **AlpacaEval** (measurements) — *measured_by*
  > For models tuned on benign data, we also tested helpfulness on AlpacaEval [29]. (Section 5, Response to RQ2)
  - [TAIA: Large Language Models are Out-of-Distribution Data Learners](https://proceedings.neurips.cc/paper_files/paper/2024/file/be0a8ecf8b2743a4117557c5eca0fb79-Paper-Conference.pdf)
- **Arena-Hard** (measurements) — *measured_by*
  > In addition, we also use AlpacaEval 2.0 Length Controlled [37] and Arena Hard [38] as secondary measures of helpfulness, following [33, 39].
  - [HelpSteer 2: Open-source dataset for training top-performing reward models](https://proceedings.neurips.cc/paper_files/paper/2024/file/02fd91a387a6a5a5751e81b58a75af90-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Alpaca instruction dataset** (measurements) — *measured_by*
  > To evaluate helpfulness, we assessed the quality of responses generated on the Alpaca dataset (Taori et al., 2023)...
  - [TIS-DPO: Token-level Importance Sampling for Direct Preference Optimization With Estimated Weights](https://proceedings.iclr.cc/paper_files/paper/2025/file/7fb9f39075a5202472676a7531568212-Paper-Conference.pdf)
- **HelpSteer** (measurements) — *measured_by*
  > For HelpSteer, we use https://huggingface.co/Haoxiang-Wang/ RewardModel-Mistral-7B-for-DPA-v1 for all attributes of rewards, including helpfulness, correctness, coherence, complexity and verbosity.
  - [Decoding-Time Language Model Alignment with Multiple Objectives](https://proceedings.neurips.cc/paper_files/paper/2024/file/57c89126d60c209f48d0e6395c766bb3-Paper-Conference.pdf)
- **BeaverTails** (measurements) — *measured_by*
  > BeaverTails dataset... assessing the harmlessness and helpfulness of the models.
  - [Alignment at Pre-training! Towards Native Alignment for Arabic LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/195c4e2910bedabd813f9fe4e70c642c-Paper-Conference.pdf)
- **PKU-SafeRLHF-10K** (measurements) — *measured_by*
  > the PKU-SafeRLHF-10K dataset (Ji et al., 2023; Dai et al., 2024), which contains human-labeled preference data on the helpfulness and harmlessness of prompt-response pairs (Section 6.4)
  - [A Distributional Approach to Uncertainty-Aware Preference Alignment Using Offline Demonstrations](https://proceedings.iclr.cc/paper_files/paper/2025/file/084cf2b3d73abafa1705336a0e9ebb1c-Paper-Conference.pdf)
- **LLaVA-Bench-in-the-Wild** (measurements) — *measured_by*
  > we also leverage MMMU (Yue et al., 2024) and LLaVA-Bench (Liu et al., 2024b) to assess the model’s reasoning ability and helpfulness level. (Section 3.3.1)
  - [Protecting Privacy in Multimodal Large Language Models with MLLMU-Bench](https://aclanthology.org/2025.naacl-long.207.pdf)
- **Just-Eval** (measurements) — *measured_by*
  > Just-Eval evaluates LLMs’ outputs based on helpfulness, clarity, factuality, depth, and engagement.
  - [AGD: Adversarial Game Defense Against Jailbreak Attacks in Large Language Models](https://aclanthology.org/2025.acl-long.851.pdf)
- **ArmoRM** (measurements) — *measured_by*
  > Since ArmoRM is a multi-objective model that not only gives a scalar reward value but also predicts human-interpretable fine-grained attributes, we first select 5 attributes (namely complexity, instruction following, honesty, helpfulness, and intelligence depth) that have the highest average coefficients on the UltraFeedback data. (Section 6.2)
  - [Reward-Augmented Data Enhances Direct Preference Alignment of LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25az/zhang25az.pdf)
- **MMLU** (measurements) — *measured_by*
  > We also assess the helpfulness of the targeted LLMs... To do this, we select 500 examples from three sources: ...MMLU (knowledge tests)... (Section 4.1)
  - [Refuse Whenever You Feel Unsafe: Improving Safety in LLMs via Decoupled Refusal Training](https://aclanthology.org/2025.acl-long.158.pdf)
- **GPT-4 Head-to-head Comparison** (measurements) — *measured_by*
  > For the helpfulness and outlining tasks we collect just one set of labels for overall helpfulness (Help) and outline quality (Qual) respectively... We additionally query GPT-4 for binary judgments on 1000 examples. (Sec. 4)
  - [RLCD: Reinforcement Learning from Contrastive Distillation for LM Alignment](https://proceedings.iclr.cc/paper_files/paper/2024/file/5bd09a559a8c8e230697107b0f353d39-Paper-Conference.pdf)
- **XNLI** (measurements) — *measured_by*
  > For the assessment of usefulness, we sample 30 examples in English and each language overlapping with MultiJail from XNLI (Conneau et al., 2018) and X-CSQA (Lin et al., 2021)... We calculate the average accuracy on both datasets to represent usefulness. (Section 4.3)
  - [Multilingual Jailbreak Challenges in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/6b396f766a50e0853a5164e68048540c-Paper-Conference.pdf)
- **X-CSQA** (measurements) — *measured_by*
  > For the assessment of usefulness, we sample 30 examples in English and each language overlapping with MultiJail from XNLI (Conneau et al., 2018) and X-CSQA (Lin et al., 2021)... We calculate the average accuracy on both datasets to represent usefulness. (Section 4.3)
  - [Multilingual Jailbreak Challenges in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/6b396f766a50e0853a5164e68048540c-Paper-Conference.pdf)
- **AlpacaFarm** (measurements) — *measured_by*
  > The first is the test set from AlpacaFarm (Dubois et al., 2023), which contains 805 instructions for assessing helpfulness. (Sec. 5.1)
  - [Gaining Wisdom from Setbacks: Aligning Large Language Models via Mistake Analysis](https://proceedings.iclr.cc/paper_files/paper/2024/file/fe24df54d5ccd95cdf830a309f2bf5c0-Paper-Conference.pdf)
- **TruthfulQA** (measurements) — *measured_by*
  > ...we select TruthfulQA (Lin et al., 2022) and SafetyBench (Zhang et al., 2023) as the evaluation datasets, which measure helpfulness and safety, respectively. (Section 4.1)
  - [Delta-CoMe: Training-Free Delta-Compression with Mixed-Precision for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/37664246a1e07e212ddacea6e5a523f2-Paper-Conference.pdf)
- **Verbosity** (constructs) — *correlates*
  > Finally, response length is slightly positively correlated with helpfulness (Pearson’s R=0.0845), consistent with the correlation between verbosity and helpfulness (Pearson’s R=0.0600).
  - [HelpSteer 2: Open-source dataset for training top-performing reward models](https://proceedings.neurips.cc/paper_files/paper/2024/file/02fd91a387a6a5a5751e81b58a75af90-Paper-Datasets_and_Benchmarks_Track.pdf)
- **lm-evaluation-harness** (measurements) — *measured_by*
  > we evaluate the impact of safety heads ablation on helpfulness. We use lm-eval (Gao et al., 2024) to assess model performance after ablating safety heads of Llama-2-7b-chat on zero-shot tasks... (Section 5.3)
  - [On the Role of Attention Heads in Large Language Model Safety](https://proceedings.iclr.cc/paper_files/paper/2025/file/d0bcff6425bbf850ec87d5327a965db9-Paper-Conference.pdf)
- **MME** (measurements) — *measured_by*
  > “For multimodal helpfulness benchmarks, we use MMBench (Liu et al., 2023d), MME (Fu et al., 2024), and SEEDBench (Li et al., 2023a).”
  - [How Does Vision-Language Adaptation Impact the Safety of Vision Language Models?](https://proceedings.iclr.cc/paper_files/paper/2025/file/84d286e32bbee8fa3a86ee9c50e00081-Paper-Conference.pdf)
- **Unlearning efficacy** (constructs) — *correlates*
  > as unlearning performance improves, it can negatively impact the model’s reasoning ability and helpfulness. (Section 5.2)
  - [Protecting Privacy in Multimodal Large Language Models with MLLMU-Bench](https://aclanthology.org/2025.naacl-long.207.pdf)
- **PandaLM** (measurements) — *measured_by*
  > Specifically, we use PandaLM (Wang et al., 2023b, 2024) to evaluate the helpfulness of various models. (Section 4.1)
  - [Threshold Filtering Packing for Supervised Fine-Tuning: Training Related Samples within Packs](https://aclanthology.org/2025.naacl-long.226.pdf)
- **TriviaQA** (measurements) — *measured_by*
  > TRIVIAQA (Joshi et al., 2017): Assesses the model’s question-answering capability. ... Helpfulness: evaluated as the averaged normalized scores across all general performance benchmarks we considered. (Section 5.1)
  - [Goal-Conditioned DPO: Prioritizing Safety in Misaligned Instructions](https://aclanthology.org/2025.naacl-long.369.pdf)
- **HellaSwag** (measurements) — *measured_by*
  > HELLASWAG (Zellers et al., 2019): Measures how well the model can generate the most natural continuation from four candidate sentences following a given sentence fragment. ... Helpfulness: evaluated as the averaged normalized scores across all general performance benchmarks we considered. (Section 5.1)
  - [Goal-Conditioned DPO: Prioritizing Safety in Misaligned Instructions](https://aclanthology.org/2025.naacl-long.369.pdf)
- **IFEval** (measurements) — *measured_by*
  > Our experiments focus on Helpfulness (Alpaca Eval 2.0 (Dubois et al., 2024) and IFEval (Zhou et al., 2023)), Harmlessness (Toxigen (Hartvigsen et al., 2022)), and Coding (MBPP (Austin et al., 2021), HumanEval (Chen et al., 2021)). (Section 4)
  - [AutoMixAlign: Adaptive Data Mixing for Multi-Task Preference Optimization in LLMs](https://aclanthology.org/2025.acl-long.990.pdf)
- **Databricks Dolly-15k** (measurements) — *measured_by*
  > to assess whether LLMs retain usefulness after fine-tuning, we select 15k general-domain samples equally from Alpaca (Taori et al., 2023), BeaverTails, and Dolly (Conover et al., 2023). (Section 5.1)
  - [Data to Defense: The Role of Curation in Aligning Large Language Models Against Safety Compromise](https://aclanthology.org/2025.emnlp-main.647.pdf)
- **MORBENCH** (measurements) — *measured_by*
  > We have explored the safety decision boundaries of various LLMs and construct the MORBENCH evaluation set to facilitate robust assessment of model safety and helpfulness across multiple languages. (Abstract)
  - [Understanding and Mitigating Overrefusal in LLMs from an Unveiling Perspective of Safety Decision Boundary](https://aclanthology.org/2025.emnlp-main.1065.pdf)
- **PLLuM-Align** (measurements) — *measured_by*
  > For scalar multi-attribute rating, annotators evaluated each response on a 5-point Likert scale across seven criteria: i) truthfulness, (ii) linguistic correctness, (iii) safety, (iv) fairness, (v) conciseness, (vi) coherence & reasoning, as well as vii) helpfulness & instruction-following.
  - [PLLuM-Align: Polish Preference Dataset for Large Language Model Alignment](https://aclanthology.org/2025.emnlp-main.1219.pdf)
- **AUTO-J** (measurements) — *measured_by*
  > To evaluate the model’s responses, we enlist the assistance of both AUTO-J (Li et al., 2023a) and GPT-4 (i.e., gpt-4-0613; OpenAI (2023a)), which provide ratings on a scale of 1 to 10. (Section 4.6)
  - [Alignment for Honesty](https://proceedings.neurips.cc/paper_files/paper/2024/file/7428e6db752171d6b832c53b2ed297ab-Paper-Conference.pdf)
- **Safety reasoning** (constructs) — *causes*
  > Moreover, benefiting from the decomposed problem-solving in reasoning, STAIR mitigates safety-performance trade-offs and gets improvements in multiple dimensions, including helpfulness, truthfulness, robustness, and privacy awareness. (Section 1)
  - [STAIR: Improving Safety Alignment with Introspective Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cx/zhang25cx.pdf)

### → Helpfulness
- **Harmlessness** (constructs) — *correlates*
  > We find that the performance on the two alignment objectives is negatively correlated, with the Spearman’s correlation coefficient being ρ = −0.51 for HH-RLHF (Bai et al., 2022) and ρ = −0.61 for SafeRLHF (Ji et al., 2023) (p < 0.01). (Section 1)
  - [Unlocking Decoding-time Controllability: Gradient-Free Multi-Objective Alignment with Contrastive Prompts](https://aclanthology.org/2025.naacl-long.18.pdf)
- **Alignment** (constructs) — *causes*
  > Extensive efforts have been made before model release to align their behavior with human values, with the primary goal of ensuring their helpfulness and harmlessness. (ABSTRACT)
  - [Catastrophic Jailbreak of Open-source LLMs via Exploiting Generation](https://proceedings.iclr.cc/paper_files/paper/2024/file/3af25aa3de8b7b02ddbd1b6be5031be8-Paper-Conference.pdf)
- **Safety alignment** (constructs) — *causes*
  > Via this channel, an LLM learns how to react to human instruction in a harmless and helpful way, as demonstrated in the alignment dataset. (Section 1)
  - [Vaccine: Perturbation-aware Alignment for Large Language Models against Harmful Fine-tuning Attack](https://proceedings.neurips.cc/paper_files/paper/2024/file/873c86d9a979ab80d8e2919510d4446b-Paper-Conference.pdf)
- **Refusal** (behaviors tasks) — *causes*
  > ...a model that refuses to answer, while technically considered harmless, renders the response quite unhelpful [16].
  - [Stepwise Alignment for Constrained Language Model Policy Optimization](https://proceedings.neurips.cc/paper_files/paper/2024/file/bcfcf7232cb74e1ef82d751880ff835b-Paper-Conference.pdf)
- **Overrefusal** (behaviors tasks) — *causes*
  > increased model over-rejection, resulting in diminished helpfulness
  - [Reshaping Representation Space to Balance the Safety and Over-rejection in Large Audio Language Models](https://aclanthology.org/2025.emnlp-main.510.pdf)
- **Coherence** (constructs) — *correlates*
  > In Table 2, we observe that coherence is a much weaker predictor of helpfulness in HelpSteer2 (Pearson’s R=0.4979) compared to HelpSteer (Pearson’s R=0.6348).
  - [HelpSteer 2: Open-source dataset for training top-performing reward models](https://proceedings.neurips.cc/paper_files/paper/2024/file/02fd91a387a6a5a5751e81b58a75af90-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Factuality** (constructs) — *correlates*
  > Conversely, correctness has become a stronger predictor of helpfulness in HelpSteer2 (Pearson’s R=0.9430) than in HelpSteer (Pearson’s R=0.8525).
  - [HelpSteer 2: Open-source dataset for training top-performing reward models](https://proceedings.neurips.cc/paper_files/paper/2024/file/02fd91a387a6a5a5751e81b58a75af90-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Complexity** (constructs) — *correlates*
  > Additionally, the Pearson’s R values for both complexity (0.2361 to 0.1805) and verbosity (0.2555 to 0.0600) have decreased, indicating that annotators are less influenced by the complexity and verbosity of responses when assessing overall helpfulness in HelpSteer2.
  - [HelpSteer 2: Open-source dataset for training top-performing reward models](https://proceedings.neurips.cc/paper_files/paper/2024/file/02fd91a387a6a5a5751e81b58a75af90-Paper-Datasets_and_Benchmarks_Track.pdf)

### Associated with
- **Human preference alignment** (constructs)
  > Alignment is critical for a helpful and harmless language model (Ouyang et al., 2022; Bai et al., 2022).
  - [Enabling Lanuguage Models to Implicitly Learn Self-Improvement](https://proceedings.iclr.cc/paper_files/paper/2024/file/194fa4536bf36f35a4505d20cd5dd6fc-Paper-Conference.pdf)
- **Instruction following** (behaviors tasks)
  > LMMs must be helpful (e.g., ... follow user instructions)
  - [Beyond task performance: evaluating and reducing the flaws of large multimodal models with in-context-learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/5df817c5dd95293ebf6d1583303a8c73-Paper-Conference.pdf)
- **Helpful response generation** (behaviors tasks)
  > “We evaluate RLCD through both human and automatic evaluations on three tasks, aiming to improve the ability of LLaMA-7B ... to generate ... helpful outputs” (Introduction).
  - [RLCD: Reinforcement Learning from Contrastive Distillation for LM Alignment](https://proceedings.iclr.cc/paper_files/paper/2024/file/5bd09a559a8c8e230697107b0f353d39-Paper-Conference.pdf)
- **Safety** (constructs)
  > α is a hyperparameter to adjust the balance between safety and usefulness.
  - [Adaptive Deployment of Untrusted LLMs Reduces Distributed Threats](https://proceedings.iclr.cc/paper_files/paper/2025/file/699c5a2bb87a8aa32c4ad541d9997361-Paper-Conference.pdf)
- **Humor** (constructs)
  > In practice, human preferences are multi-dimensional and we often need to align LLMs to balance multiple, sometimes conflicting, preference dimensions such as helpfulness, harmlessness, and humor (Section 2. Related Work)
  - [PARM: Multi-Objective Test-Time Alignment via Preference-Aware Autoregressive Reward Model](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lin25h/lin25h.pdf)
- **Empathy** (constructs)
  > Wang and Torres (2022) collected helpful and unhelpful advice from Reddit and analyzed that the main factor is ‘empathy’, consistent with our findings in Figure 4. (Section 2)
  - [AdvisorQA: Towards Helpful and Harmless Advice-seeking Question Answering with Collective Intelligence](https://aclanthology.org/2025.naacl-long.333.pdf)
