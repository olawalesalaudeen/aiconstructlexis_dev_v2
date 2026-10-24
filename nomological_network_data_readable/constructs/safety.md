# Safety
**Type:** Construct  
**Referenced in:** 123 papers  
**Also known as:** Security alignment, LLM security, Safety capability, Safety performance, Trust and safety  

## State of the Field

**Definition agreement:** Consensus. Most papers define safety as a model's latent disposition or ability to avoid producing harmful, unsafe, toxic, offensive, or unethical outputs, often framed as refusing malicious or adversarial prompts and staying aligned with human or societal values. A few papers broaden this to tool-using agents, harmful actions, or general user protection, but these are minority extensions around the same central idea rather than a substantial competing definition.

**Space of definitions.** Across papers, the prevailing usage treats safety as a latent model or agent property, disposition, or capability to avoid generating harmful, unsafe, toxic, offensive, unethical, illegal, or dangerous outputs, especially when facing malicious, adversarial, or otherwise unsafe prompts. Many definitions also tie this avoidance to alignment with human values, norms, or safety guidelines, and several make refusal central, describing safety as stopping models from following malicious instructions or producing benign responses to unsafe prompts. Smaller lines of work narrow the construct to security, meaning distinguishing malicious from normal inputs and refusing malicious questions, extend it to tool-using agents that should avoid harmful actions or environmental risks, or broaden it into a system-level trust-and-safety framing that includes protection from misinformation and abuse and user confidence.

**Space of facets.** Papers organize the construct through recurring facets: harmful or toxic content generation, refusal versus compliance on unsafe requests, jailbreak or adversarial resistance, and in some cases risky tool use or cross-lingual variation in refusal patterns. Some papers relabel the same general trait, for example as safety capability, while security alignment and LLM security use a narrower framing centered on detecting malicious inputs and keeping behavior within safe boundaries; a broader trust and safety framing adds user protection from misinformation, abuse, and unsafe content. Safety is also positioned alongside other alignment or evaluation dimensions rather than collapsed into them, and some work explicitly treats harmlessness as interchangeable with safety.

**Space of measurement.** Papers link safety to 30 measurement instruments and 9 behavioral indicators, with AdvBench, RewardBench, ToxiGen, TruthfulQA, and HarmBench appearing most often. The dominant operationalization is benchmark-based, using harmful instruction sets, refusal-versus-compliance tasks, toxicity or harmfulness classification, and adversarial or jailbreak evaluations; other papers use human pairwise judgments, LLM-as-a-judge comparisons, guard or moderation systems, and multimodal or spoken safety suites. In practice, this turns a latent disposition or capability into observable measures such as refusal rate, attack success rate, preference for refusal over compliance, toxicity scores, safe versus unsafe labels, or judgments of how benign a response is to unsafe prompts.

**Links.** Alignment is both claimed to have a causal relationship to safety and to be related to it. Safety is also related to harmlessness, sometimes interchangeably, and to helpfulness and robustness, and one paper places it within broader trustworthiness concerns. Additional single-paper claims describe causal relationships from intervention-style mechanisms to safety, and from safety to reduced helpfulness and over-rejection behavior; no correlational link is reported.

## Sources

**[CRITIC: Large Language Models Can Self-Correct with Tool-Interactive Critiquing](https://proceedings.iclr.cc/paper_files/paper/2024/file/fef126561bbf9d4467dbb8d27334b8fe-Paper-Conference.pdf)**
> The model's disposition to avoid generating harmful, unethical, or dangerous content, particularly in response to adversarial prompts.

**[Safety Layers in Aligned Large Language Models: The Key to LLM Security](https://proceedings.iclr.cc/paper_files/paper/2025/file/f3bfbd65743e60c685a3845bd61ce15f-Paper-Conference.pdf) (as "Security alignment")**
> The extent to which an LLM has been aligned to distinguish malicious from normal inputs and keep its behavior within safe boundaries.

**[Safety Layers in Aligned Large Language Models: The Key to LLM Security](https://proceedings.iclr.cc/paper_files/paper/2025/file/f3bfbd65743e60c685a3845bd61ce15f-Paper-Conference.pdf) (as "LLM security")**
> The model-level property of resisting harmful or malicious prompts by refusing unsafe requests and avoiding harmful outputs.

**[On the Role of Attention Heads in Large Language Model Safety](https://proceedings.iclr.cc/paper_files/paper/2025/file/d0bcff6425bbf850ec87d5327a965db9-Paper-Conference.pdf) (as "Safety capability")**
> The latent property of a large language model that enables it to align with human values by avoiding the generation of unsafe, toxic, or harmful content in response to queries.

**[MPO: Multilingual Safety Alignment via Reward Gap Optimization](https://aclanthology.org/2025.acl-long.1149.pdf) (as "Safety performance")**
> The underlying trait reflecting how effectively a model resists generating unsafe content, inferred from patterns of refusal across diverse linguistic and cultural contexts.

**[Position: Generative AI Regulation Can Learn from Social Media Regulation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/appel25a/appel25a.pdf) (as "Trust and safety")**
> The latent property of a system that ensures user protection from harm, including misinformation, abuse, and unsafe content, while fostering user confidence in the technology.

## Relationships

### Safety →
- **AdvBench** (measurements) — *measured_by*
  > Also, we wonder if weakening model’s exaggerated safety will also lead to a drop in its overall safety, hence we conducted another experiment on AdvBench (Zou et al. [2023b]), which contains 500 harmful instructions. (Section 4.2)
  - [Enhancing Multiple Dimensions of Trustworthiness in LLMs via Sparse Activation Control](https://proceedings.neurips.cc/paper_files/paper/2024/file/1cb5b3d64bdf3c6642c8d9a8fbecd019-Paper-Conference.pdf)
- **ToxiGen** (measurements) — *measured_by*
  > Results of MOD ... achieving precise control over general capabilities, including safety (Toxigen), coding (Codex), and reasoning (∗ COT).
  - [Decoding-Time Language Model Alignment with Multiple Objectives](https://proceedings.neurips.cc/paper_files/paper/2024/file/57c89126d60c209f48d0e6395c766bb3-Paper-Conference.pdf)
- **RewardBench** (measurements) — *measured_by*
  > RewardBench is a new benchmark designed to evaluate the capabilities and safety of reward models (Section 4).
  - [Regularizing Hidden States Enables Learning Generalizable Reward Model for LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/71f7154547c748c8041505521ca433ab-Paper-Conference.pdf)
- **TruthfulQA** (measurements) — *measured_by*
  > Safety and Helpfulness comprises TruthfulQA [38], ToxiGen [21], and Hendrycks Ethics [23]. (Section 4.1)
  - [Instruction Tuning With Loss Over Instructions](https://proceedings.neurips.cc/paper_files/paper/2024/file/7ffb43adf37b3eeaba559098bc084cc6-Paper-Conference.pdf)
- **XSTest** (measurements) — *measured_by*
  > We evaluate models on 11 different benchmarks, covering skills such as ... safety (ToxiGen [19], XSTest [42]) (Section 2.2).
  - [Unpacking DPO and PPO: Disentangling Best Practices for Learning from Preference Feedback](https://proceedings.neurips.cc/paper_files/paper/2024/file/404df2480b6eef0486a1679e371894b0-Paper-Conference.pdf)
- **Llama Guard 2** (measurements) — *measured_by*
  > In our experiments, we use Llama Guard 2 (Meta, 2024) to measure how safe (conversely, how harmful) a conversation is. (Section 6.1)
  - [Broaden your SCOPE! Efficient Multi-turn Conversation Planning for LLMs with Semantic Space](https://proceedings.iclr.cc/paper_files/paper/2025/file/32e41d6b0a51a63a9a90697da19d235d-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > We use GPT-4 [1] to measure the helpfulness and harmlessness (i.e., safety) of the responses generated by the LM policies.
  - [Stepwise Alignment for Constrained Language Model Policy Optimization](https://proceedings.neurips.cc/paper_files/paper/2024/file/bcfcf7232cb74e1ef82d751880ff835b-Paper-Conference.pdf)
- **HarmBench** (measurements) — *measured_by*
  > We evaluate the safety performance of the models on the standard version of HarmBench(Mazeika et al., 2024), which consists of 200 harmful instructions. (Section 4.2).
  - [Improve Safety Training of Large Language Models with Safety-Critical Singular Vectors Localization](https://aclanthology.org/2025.acl-long.245.pdf)
- **MM-SafetyBench** (measurements) — *measured_by*
  > We evaluate the VLMs with MM-Safety-Bench [28] to judge the resiliency of VLMs when they are prompted with harm-inducing instructions. (Section 3.1)
  - [VHELM: A Holistic Evaluation of Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe2fc7dc60b55ccd8886220b40fb1f74-Paper-Datasets_and_Benchmarks_Track.pdf)
- **RealToxicityPrompts** (measurements) — *measured_by*
  > Finally, we report safety evaluations on RealToxicity (Gehman et al., 2020) and TruthfulQA (Lin et al., 2022). (Section 7.2)
  - [Jamba: Hybrid Transformer-Mamba Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a9ed43fa31dc8b4a7d7a673d713dcb5f-Paper-Conference.pdf)
- **StrongREJECT** (measurements) — *measured_by*
  > For evaluating safety, we use do-not-answer (DNA) (Wang et al., 2023) and StrongReject (Souly et al., 2024) datasets. (Section 3)
  - [Exploring Safety-Utility Trade-Offs in Personalized Language Models](https://aclanthology.org/2025.naacl-long.565.pdf)
- **HEx-PHI** (measurements) — *measured_by*
  > For the former, we use three widely recognized safety benchmarks. Specifically, we include all 520 harmful samples from AdvBench (Zou et al., 2023), all 330 samples from HEx-PHI (Qi et al., 2024b), and a randomly selected subset of 1,000 samples from BeaverTails (Ji et al., 2024).
  - [Beware of Your Po! Measuring and Mitigating AI Safety Risks in Role-Play Fine-Tuning of LLMs](https://aclanthology.org/2025.acl-long.544.pdf)
- **HH-RLHF** (measurements) — *measured_by*
  > we applied our approach to HH-RLHF (Anthropic, 2022), a commonly used preference dataset for safety alignment. (Section 5.2)
  - [RuleAdapter: Dynamic Rules for training Safety Reward Models in RLHF](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25o/li25o.pdf)
- **MaliciousInstruct** (measurements) — *measured_by*
  > We attack LLM using jailbreak methods on the AdvExtent (Lu et al., 2024) and MaliciousInstruct (Huang et al., 2024), collect responses, and use the string matching method... to identify whether responses lacked keywords indicating instruction rejection. (Section 6.1)
  - [Safety Alignment via Constrained Knowledge Unlearning](https://aclanthology.org/2025.acl-long.1240.pdf)
- **SORRY-Bench** (measurements) — *measured_by*
  > For text-only safety, we use SorryBench (Xie et al., 2024) and WildJailbreak (Jiang et al., 2024) (Section 3.3)
  - [How Does Vision-Language Adaptation Impact the Safety of Vision Language Models?](https://proceedings.iclr.cc/paper_files/paper/2025/file/84d286e32bbee8fa3a86ee9c50e00081-Paper-Conference.pdf)
- **SIUO** (measurements) — *measured_by*
  > for multimodal safety, we utilize MM-Safetybench (Liu et al., 2023c), SIUO (Wang et al., 2024), and Figstep (Gong et al., 2023a). (Section 3.3)
  - [How Does Vision-Language Adaptation Impact the Safety of Vision Language Models?](https://proceedings.iclr.cc/paper_files/paper/2025/file/84d286e32bbee8fa3a86ee9c50e00081-Paper-Conference.pdf)
- **FigStep** (measurements) — *measured_by*
  > for multimodal safety, we utilize MM-Safetybench (Liu et al., 2023c), SIUO (Wang et al., 2024), and Figstep (Gong et al., 2023a). (Section 3.3)
  - [How Does Vision-Language Adaptation Impact the Safety of Vision Language Models?](https://proceedings.iclr.cc/paper_files/paper/2025/file/84d286e32bbee8fa3a86ee9c50e00081-Paper-Conference.pdf)
- **Llama Guard 3** (measurements) — *measured_by*
  > To measure ASR, we utilize LLaMA-Guard 3 8B (Inan et al., 2023), a LLM trained for content safety classification. (Section 3.4)
  - [How Does Vision-Language Adaptation Impact the Safety of Vision Language Models?](https://proceedings.iclr.cc/paper_files/paper/2025/file/84d286e32bbee8fa3a86ee9c50e00081-Paper-Conference.pdf)
- **JailbreakBench** (measurements) — *measured_by*
  > We evaluated Jailbreak Antidote using JailbreakBench (Chao et al., 2024) for assessing safety, focusing on 100 harmful prompts. (Section 5.1)
  - [Jailbreak Antidote: Runtime Safety-Utility Balance via Sparse Representation Adjustment in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/36e3f9e6162d597adada4e0e4fce6861-Paper-Conference.pdf)
- **OpenAI Moderation API** (measurements) — *measured_by*
  > To address this limitation, we used the OpenAI Moderation API as a secondary evaluation method. This API provides both a harmfulness score (in [0,1]), where 0 is the least harmful and 1 the most harmful) and a binary tag indicating whether the response is safe.
  - [Semantic Loss Guided Data Efficient Supervised Fine Tuning for Safe Responses in LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/598ec93b6d2ed4fed4927b957b80f18c-Paper-Conference.pdf)
- **BeaverTails** (measurements) — *measured_by*
  > Conversely, further introducing unsafe guidelines into the system prompt reduces the safety performance on BeaverTails (Ji et al., 2024) (91.40 vs. 63.30). (Section 2.2)
  - [Beware of Your Po! Measuring and Mitigating AI Safety Risks in Role-Play Fine-Tuning of LLMs](https://aclanthology.org/2025.acl-long.544.pdf)
- **DAN** (measurements) — *measured_by*
  > Notably, SIMoE obtains excellent safety evaluation metrics, outperforming Tülu-v3-8B-SFT by 1.7% on Safety (Tab. 2), and a remarkable 10% on the DoAnythingNow (Shen et al., 2024) benchmark in particular (Tab. A9, detailed safety results across sub-datasets). (Section 4.2)
  - [Automatic Expert Discovery in LLM Upcycling via Sparse Interpolated Mixture-of-Experts](https://aclanthology.org/2025.acl-long.816.pdf)
- **TRACE** (measurements) — *measured_by*
  > TRACE, another continual instruction tuning benchmark, is designed to evaluate the general ability, instruction following, and safety for LLMs (Wang et al., 2023). (Section 2. Related Work)
  - [Large Continual Instruction Assistant](https://raw.githubusercontent.com/mlresearch/v267/main/assets/qiao25e/qiao25e.pdf)
- **BeaverTails-Evaluation** (measurements) — *measured_by*
  > We evaluate our models using a comprehensive set of benchmarks that address various aspects, including... safety (BeaverTails-Evaluation Ji et al., 2023 and XSTest R¨ottger et al., 2024) (Section 5).
  - [Test-Time Preference Optimization: On-the-Fly Alignment via Iterative Textual Feedback](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25ac/li25ac.pdf)
- **FINTRUST** (measurements) — *measured_by*
  > we curate 15, 680 instances to evaluate LLM trustworthiness in the financial domain. We ... incorporate seven core dimensions: Truthfulness, Safety, Fairness, Robustness, Privacy, Transparency, and Knowledge Discovery. (Section 2)
  - [FinTrust: A Comprehensive Benchmark of Trustworthiness Evaluation in Finance Domain](https://aclanthology.org/2025.emnlp-main.512.pdf)
- **VoiceBench** (measurements) — *measured_by*
  > For example, VoiceBench (Chen et al., 2024c) and Roh et al. (2025) synthesize datasets like AdvBench (Zou et al., 2023) into spoken queries, evaluating LALMs on their ability to reject them.
  - [Towards Holistic Evaluation of Large Audio-Language Models: A Comprehensive Survey](https://aclanthology.org/2025.emnlp-main.514.pdf)
- **PKU-SafeRLHF** (measurements) — *measured_by*
  > We evaluate model safety on the PKU-SafeRLHF and BigBench-HHH datasets. (Section 4.1)
  - [Governance in Motion: Co-evolution of Constitutions and AI models for Scalable Safety](https://aclanthology.org/2025.emnlp-main.869.pdf)
- **PLLuM-Align** (measurements) — *measured_by*
  > For scalar multi-attribute rating, annotators evaluated each response on a 5-point Likert scale across seven criteria: i) truthfulness, (ii) linguistic correctness, (iii) safety, (iv) fairness, (v) conciseness, (vi) coherence & reasoning, as well as vii) helpfulness & instruction-following.
  - [PLLuM-Align: Polish Preference Dataset for Large Language Model Alignment](https://aclanthology.org/2025.emnlp-main.1219.pdf)
- **AgentHarm** (measurements) — *measured_by*
  > AgentHarm (Andriushchenko et al., 2024) measures the potential harm from agents executing malicious tasks.
  - [OS Agents: A Survey on MLLM-based Agents for Computer, Phone and Browser Use](https://aclanthology.org/2025.acl-long.369.pdf)

### → Safety
- **Alignment** (constructs) — *causes*
  > “Alignment methods are designed to reduce such undesirable outputs”
  - [PaCE: Parsimonious Concept Engineering for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b3cca813dcd78fe75e4d4df2e6a0b1a7-Paper-Conference.pdf)
- **Safe response generation** (behaviors tasks) — *causes*
  > Improving Safety by Response Detoxification (Section 4.1).
  - [PaCE: Parsimonious Concept Engineering for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b3cca813dcd78fe75e4d4df2e6a0b1a7-Paper-Conference.pdf)
- **Interpretability and explainability** (constructs) — *causes*
  > The embedded interpretability empowers users to transparently identify harmful content, steer model behavior, and unlearn undesired concepts – significantly enhancing the safety, reliability, and trustworthiness of LLMs, which are critical capabilities notably absent in existing language models.
  - [Concept Bottleneck Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/de4ce91dfe56b919ee1c228d6a78f866-Paper-Conference.pdf)

### Associated with
- **Harmlessness** (constructs)
  > safety assesses harmlessness (Section 4.1).
  - [Style Outweighs Substance: Failure Modes of LLM Judges in Alignment Benchmarking](https://proceedings.iclr.cc/paper_files/paper/2025/file/1eb36d07ebb13be16ddbda679a95018b-Paper-Conference.pdf)
- **Toxicity** (constructs)
  > Two most significant topics in the literature of large model safety [124, 132] are the toxicity of AI-generated content [47], which could greatly impact user interactions, and model jailbreaking (Sec. 2.2.2)
  - [MultiTrust: A Comprehensive Benchmark Towards Trustworthy Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/586640cda3db2dc77349013dcefee456-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Helpfulness** (constructs)
  > α is a hyperparameter to adjust the balance between safety and usefulness.
  - [Adaptive Deployment of Untrusted LLMs Reduces Distributed Threats](https://proceedings.iclr.cc/paper_files/paper/2025/file/699c5a2bb87a8aa32c4ad541d9997361-Paper-Conference.pdf)
- **Trustworthiness** (constructs)
  > We assess the trustworthiness of Med-LVLMs across five dimensions, including trustfulness, fairness, safety, privacy, and robustness. (Abstract)
  - [CARES: A Comprehensive Benchmark of Trustworthiness in Medical Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fde7f40f8ced5735006810534dc66b33-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Robustness** (constructs)
  > We assert that robustness is fundamentally insufficient for ensuring safety goals due to inferential threats from dual-intent queries, with current defenses and evaluations failing to account for these risks. (Section 1)
  - [Breach By A Thousand Leaks: Unsafe Information Leakage in 'Safe' AI Responses](https://proceedings.iclr.cc/paper_files/paper/2025/file/801a6708014185e951a95108b8cc8349-Paper-Conference.pdf)
- **Backdoor vulnerability** (constructs)
  > In this work, we take the first step to investigate one of the typical safety threats, backdoor attack, to LLM-based agents. (Abstract)
  - [Watch Out for Your Agents! Investigating Backdoor Threats to LLM-Based Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/b6e9d6f4f3428cd5f3f9e9bbae2cab10-Paper-Conference.pdf)
- **Text generation quality** (constructs)
  > In such applications, the quality (e.g., user engagement, safety) of a conversation is important and can only be exactly known at the end of the conversation. (ABSTRACT)
  - [Broaden your SCOPE! Efficient Multi-turn Conversation Planning for LLMs with Semantic Space](https://proceedings.iclr.cc/paper_files/paper/2025/file/32e41d6b0a51a63a9a90697da19d235d-Paper-Conference.pdf)
- **Refusal** (behaviors tasks)
  > These insights highlight that LLM safety relies on maximizing the probability of generating rejection tokens in response to harmful queries. (Section 2)
  - [On the Role of Attention Heads in Large Language Model Safety](https://proceedings.iclr.cc/paper_files/paper/2025/file/d0bcff6425bbf850ec87d5327a965db9-Paper-Conference.pdf)
- **Instruction following** (behaviors tasks)
  > this balance creates vulnerabilities when the model’s instruction-following objective from u conflicts with the safety goals defined in g.
  - [Goal-Conditioned DPO: Prioritizing Safety in Misaligned Instructions](https://aclanthology.org/2025.naacl-long.369.pdf)
- **Ethical alignment** (constructs)
  > Ethical Considerations assess adherence to ethical principles, including safety, privacy, fairness, and harm avoidance, ensuring responses are free from harmful or biased content. (Section 2.3)
  - [MM-RLHF: The Next Step Forward in Multimodal LLM Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cs/zhang25cs.pdf)
- **Overrefusal** (behaviors tasks)
  > Bianchi et al. (2023) highlights that incorporating safety-related examples during finetuning enhances model safety but often results in increased overrefusal. (Section 2.1. Instruction Finetuning)
  - [POROver: Improving Safety and Reducing Overrefusal in Large Language Models with Overgeneration and Preference Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/karaman25a/karaman25a.pdf)
- **Harmful content generation** (behaviors tasks)
  > Here, safety is defined as stopping models from following malicious instructions and generating toxic content. (Section 3)
  - [Safety-Tuned LLaMAs: Lessons From Improving the Safety of Large Language Models that Follow Instructions](https://proceedings.iclr.cc/paper_files/paper/2024/file/9178ece87f0a5d6558f49f43ec1e8a1a-Paper-Conference.pdf)
- **Harmful content detection** (behaviors tasks)
  > Considering the potential harm that these memes may cause, this task can be used to evaluate the safety of LLMs. (Section 6)
  - [Towards Comprehensive Detection of Chinese Harmful Memes](https://proceedings.neurips.cc/paper_files/paper/2024/file/17fc467c11997914127c001fdc801bea-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Impermissible information leakage** (constructs)
  > Thus, we propose to evaluate safety risk through Impermissible Information Leakage (IIL). (Section 3.1)
  - [Breach By A Thousand Leaks: Unsafe Information Leakage in 'Safe' AI Responses](https://proceedings.iclr.cc/paper_files/paper/2025/file/801a6708014185e951a95108b8cc8349-Paper-Conference.pdf)
