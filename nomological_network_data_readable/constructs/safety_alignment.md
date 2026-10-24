# Safety alignment
**Type:** Construct  
**Referenced in:** 101 papers  
**Also known as:** Safety policy compliance, Safety control  

## State of the Field

**Definition agreement:** Consensus. Most papers define safety alignment as a model or system's behavior, outputs, or actions conforming to human values, ethical principles, or safety policies, especially by avoiding harmful or undesirable content or outcomes. A few papers emphasize particular manifestations such as refusal behavior, helpfulness without oversafety, dynamic action sequences, or one internal-process proxy, but these do not outweigh the dominant shared core definition.

**Space of definitions.** Across the papers, the prevailing usage treats safety alignment as a model's adherence to human values, ethics, safety guidelines, or usage policies, usually expressed as avoiding harmful, undesirable, or unsafe outputs and often refusing harmful instructions. Most definitions state this at the level of behavior or outputs, while a smaller line calls it a latent property or ability of the model or agent. The main differences are the reference standard, broad human values versus explicit external safety policies, and, in one minority framing, whether alignment is read from internal consistency with safety training objectives through stable gradient patterns; a further minority explicitly adds helpfulness and the avoidance of unnecessary refusals or oversafety.

**Space of facets.** Papers use the label both broadly and in narrower variants. Most work keeps it at the level of outputs, but some rename closely related notions as safety policy compliance, for adherence to explicit rules across action trajectories, or safety control, for restricting unsafe actions under predefined policies. Several papers equate aligned behavior with being harmless and helpful, and some multimodal work asks whether text-side safeguards transfer consistently to image or audio inputs, while other papers explicitly contrast stronger alignment with oversafety or over-refusal.

**Space of measurement.** Operationalization is benchmark-heavy: papers link safety alignment to 15 measurement instruments and 8 behavioral indicators. The most common instruments are AdvBench, FigStep, HEx-PHI, HH-RLHF, and AIAH, with several other instruments used as well; these are mostly harmful-prompt or safety benchmarks and datasets, with the remainder including an LLM-based harmfulness scorer and a cipher-based evaluation framework. Across these measures, papers usually test whether models answer harmful queries, get jailbroken, or refuse unsafe requests, which mostly follows the prevailing behavior-based definitions, while the explicit-policy and internal-gradient framings appear less directly in the named instruments.

**Links.** Several papers claim a causal relationship from safety alignment to harmful content generation, harmlessness, overrefusal, and refusal behavior, and other papers extend this to additional response-level outcomes. Other papers report correlations or looser relations with attack outcomes and with broader capability or robustness themes. In the reverse direction, individual papers claim causal relationships from compositional generalization and from logical reasoning to safety alignment.

## Sources

**[Fine-tuning Aligned Language Models Compromises Safety, Even When Users Do Not Intend To!](https://proceedings.iclr.cc/paper_files/paper/2024/file/83b7da3ed13f06c13ce82235c8eedf35-Paper-Conference.pdf)**
> The degree to which a model's behavior conforms to safety guidelines, preventing it from generating harmful or undesirable outputs.

**[ShieldAgent: Shielding Agents via Verifiable Safety Policy Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25ae/chen25ae.pdf) (as "Safety policy compliance")**
> The latent ability of an agent to adhere to explicit safety rules derived from regulatory or organizational policies across dynamic action sequences.

**[GuardAgent: Safeguard LLM Agents via Knowledge-Enabled Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xiang25a/xiang25a.pdf) (as "Safety control")**
> The latent property of a system to ensure its actions align with predefined safety policies and do not lead to harmful outcomes.

## Relationships

### Safety alignment →
- **Harmful content generation** (behaviors tasks) — *causes*
  > “Safety alignment is essential to prevent unintended model behaviors and mitigate risks in downstream applications.”
  - [Durable Quantization Conditioned Misalignment Attack on Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/376b1b131609e764f687afca832e62b3-Paper-Conference.pdf)
- **AdvBench** (measurements) — *measured_by*
  > we test safety on the “harmful behaviors” subset of the AdvBench benchmark curated by Zou et al. [2023] (Section 2)
  - [Keeping LLMs Aligned After Fine-tuning: The Crucial Role of Prompt Templates](https://proceedings.neurips.cc/paper_files/paper/2024/file/d6f034bb216b472fc7d32ec7aff20342-Paper-Conference.pdf)
- **Overrefusal** (behaviors tasks) — *causes*
  > Safety alignment is crucial for Large Language Models (LLMs) to resist malicious instructions but often results in over-refusals, where benign prompts are unnecessarily rejected, impairing user experience and model utility. (Abstract)
  - [Just Enough Shifts: Mitigating Over-Refusal in Aligned Language Models with Targeted Representation Fine-Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dabas25a/dabas25a.pdf)
- **Harmlessness** (constructs) — *causes*
  > Specifically, harmless is achieved by safety alignment that empowers the LLM with safety guardrails so that the model can refuse harmful instructions.
  - [Navigating the Safety Landscape: Measuring Risks in Finetuning Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/ada93fa6643735f294be51dc31eebbd4-Paper-Conference.pdf)
- **Helpfulness** (constructs) — *causes*
  > Via this channel, an LLM learns how to react to human instruction in a harmless and helpful way, as demonstrated in the alignment dataset. (Section 1)
  - [Vaccine: Perturbation-aware Alignment for Large Language Models against Harmful Fine-tuning Attack](https://proceedings.neurips.cc/paper_files/paper/2024/file/873c86d9a979ab80d8e2919510d4446b-Paper-Conference.pdf)
- **HEx-PHI** (measurements) — *measured_by*
  > “To assess the harmfulness of the compromised LLMs, we select the Policy-Oriented Safety Evaluation Benchmarks”
  - [BackdoorAlign: Mitigating Fine-tuning based Jailbreak Attack with Backdoor Enhanced Safety Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/094324f386c836c75d4a26f3499d2ede-Paper-Conference.pdf)
- **HH-RLHF** (measurements) — *measured_by*
  > To further evaluate the effectiveness of SimPER in safety alignment on Pythia-2.8B following (Rafailov et al., 2024), we use the Anthropic-HH dataset.
  - [SimPER: A Minimalist Approach to Preference  Alignment without Hyperparameters](https://proceedings.iclr.cc/paper_files/paper/2025/file/278fb93d93a1a06927f2fdc17af2384e-Paper-Conference.pdf)
- **Refusal** (behaviors tasks) — *causes*
  > In response, researchers have developed several methods to enhance LLM safety, known as safety alignment, including supervised fine-tuning (SFT) (Ouyang et al., 2022) and reinforcement learning from human feedback (RLHF) (Bai et al., 2022; Dai et al., 2024). As a result of these advancements, pre-trained LLMs like GPT-4 (OpenAI, 2023) and Llama (Touvron et al., 2023b) have become more adept at rejecting unsafe prompts.
  - [SaLoRA: Safety-Alignment Preserved Low-Rank Adaptation](https://proceedings.iclr.cc/paper_files/paper/2025/file/e24d9d028e3c7f6f13e6032919ee021e-Paper-Conference.pdf)
- **Harmful request refusal** (behaviors tasks) — *causes*
  > During this alignment stage, LLMs learn to reject harmful queries, ensuring their behavior remains well within a defined safety scope. (Section 3.1)
  - [Benign Samples Matter! Fine-tuning On Outlier Benign Samples Severely Breaks Safety](https://raw.githubusercontent.com/mlresearch/v267/main/assets/guan25c/guan25c.pdf)
- **FigStep** (measurements) — *measured_by*
  > we conduct experiments on FigStep (Gong et al., 2023), VL-Guard (Zong et al., 2024), MOSSBench (Li et al., 2024d) and SIUO (Wang et al., 2024c) to evaluate the safe alignment of our approach. (Section 5.1)
  - [DREAM: Disentangling Risks to Enhance Safety Alignment in Multimodal Large Language Models](https://aclanthology.org/2025.naacl-long.604.pdf)
- **CipherChat** (measurements) — *measured_by*
  > We propose a novel framework CipherChat to systematically examine the generalizability of safety alignment to non-natural languages – ciphers. (ABSTRACT)
  - [GPT-4 Is Too Smart To Be Safe: Stealthy Chat with LLMs via Cipher](https://proceedings.iclr.cc/paper_files/paper/2024/file/ed4c38fe7899d3653acf39b2102af8ba-Paper-Conference.pdf)
- **Linear probing** (measurements) — *measured_by*
  > Motivated by this observation, we adopt the widely used interpretability tool, linear probing, to analyze the changes in LLMs’ safety features in this section. (Section 3.2).
  - [SaLoRA: Safety-Alignment Preserved Low-Rank Adaptation](https://proceedings.iclr.cc/paper_files/paper/2025/file/e24d9d028e3c7f6f13e6032919ee021e-Paper-Conference.pdf)
- **Safe response generation** (behaviors tasks) — *causes*
  > A perfectly aligned LLM is expected to generate harmless response given a harmful instruction x
  - [Emerging Safety Attack and Defense in Federated Instruction Tuning of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/8a3cb72448f9b914bf888db4f5f268d3-Paper-Conference.pdf)
- **Llama Guard 3** (measurements) — *measured_by*
  > “Then evaluate the harmfulness score on its responses with the Llama-Guard-3-8B (Llama Team, 2024).”
  - [SaLoRA: Safety-Alignment Preserved Low-Rank Adaptation](https://proceedings.iclr.cc/paper_files/paper/2025/file/e24d9d028e3c7f6f13e6032919ee021e-Paper-Conference.pdf)
- **VLGuard** (measurements) — *measured_by*
  > we conduct experiments on FigStep (Gong et al., 2023), VL-Guard (Zong et al., 2024), MOSSBench (Li et al., 2024d) and SIUO (Wang et al., 2024c) to evaluate the safe alignment of our approach. (Section 5.1)
  - [DREAM: Disentangling Risks to Enhance Safety Alignment in Multimodal Large Language Models](https://aclanthology.org/2025.naacl-long.604.pdf)
- **SIUO** (measurements) — *measured_by*
  > we conduct experiments on FigStep (Gong et al., 2023), VL-Guard (Zong et al., 2024), MOSSBench (Li et al., 2024d) and SIUO (Wang et al., 2024c) to evaluate the safe alignment of our approach. (Section 5.1)
  - [DREAM: Disentangling Risks to Enhance Safety Alignment in Multimodal Large Language Models](https://aclanthology.org/2025.naacl-long.604.pdf)
- **AIAH** (measurements) — *measured_by*
  > We adopt AIAH (Yang et al., 2025) as the benchmark to evaluate the safety-alignment of LALMs to harmful questions
  - [Reshaping Representation Space to Balance the Safety and Over-rejection in Large Audio Language Models](https://aclanthology.org/2025.emnlp-main.510.pdf)
- **Ti-SafetyBench** (measurements) — *measured_by*
  > TLUE consists of 22,963 evaluation questions, divided into Ti-MMLU for knowledge assessment and Ti-SafetyBench for safety evaluation. (Section 3.2)
  - [TLUE: A Tibetan Language Understanding Evaluation Benchmark](https://aclanthology.org/2025.emnlp-main.1777.pdf)

### → Safety alignment
- **Compositional generalization** (constructs) — *causes*
  > The success of PTST suggests that LLMs have certain abilities of compositional generalization, which enable them to generalize from one template to another while being aware of safety constraints in the new template.
  - [Keeping LLMs Aligned After Fine-tuning: The Crucial Role of Prompt Templates](https://proceedings.neurips.cc/paper_files/paper/2024/file/d6f034bb216b472fc7d32ec7aff20342-Paper-Conference.pdf)
- **Logical reasoning** (constructs) — *causes*
  > To tackle these challenges, we propose SHIELDAGENT, the first guardrail agent designed to enforce explicit safety policy compliance for the action trajectory of other protected agents through logical reasoning. (Section 1)
  - [ShieldAgent: Shielding Agents via Verifiable Safety Policy Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25ae/chen25ae.pdf)

### Associated with
- **Jailbreaking** (behaviors tasks)
  > Although aligned with human preference data before release, LLMs remain vulnerable to various malicious attacks. In this paper, we adopt a red-teaming strategy to enhance LLM safety and introduce SEQAR, a simple yet effective framework to design jailbreak prompts automatically. (Section 1)
  - [SeqAR: Jailbreak LLMs with Sequential Auto-Generated Characters](https://aclanthology.org/2025.naacl-long.42.pdf)
- **General ability** (constructs)
  > The shape of the LLM capability landscape is drastically different from the one in the LLM safety landscape; these landscapes do not exhibit the same trend, further confirming that the basin shape is indeed unique to the safety of LLM.
  - [Navigating the Safety Landscape: Measuring Risks in Finetuning Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/ada93fa6643735f294be51dc31eebbd4-Paper-Conference.pdf)
- **Adversarial robustness** (constructs)
  > larger models are more susceptible to multimodal attacks, revealing the lack of safety alignment in the additional modalities. (Section 4.2, Finding A3)
  - [Con Instruction: Universal Jailbreaking of Multimodal Large Language Models via Non-Textual Modalities](https://aclanthology.org/2025.acl-long.146.pdf)
- **Visual reasoning** (constructs)
  > This observation highlights a fundamental trade-off: as visual reasoning capabilities increase, safety alignment tends to degrade. (Section 1)
  - [VisCRA: A Visual Chain Reasoning Attack for Jailbreaking Multimodal Large Language Models](https://aclanthology.org/2025.emnlp-main.312.pdf)
- **BeaverTails** (measurements)
  > “For the alignment task, we use the safe samples from the alignment dataset of BeaverTails (Ji et al., 2023).”
  - [Vaccine: Perturbation-aware Alignment for Large Language Models against Harmful Fine-tuning Attack](https://proceedings.neurips.cc/paper_files/paper/2024/file/873c86d9a979ab80d8e2919510d4446b-Paper-Conference.pdf)
- **PKU-SafeRLHF** (measurements)
  > Using the large-scale annotation data, we further train severity-sensitive moderation for the risk control of LLMs and safety-centric RLHF algorithms for the safety alignment of LLMs. (Abstract)
  - [PKU-SafeRLHF: Towards Multi-Level Safety Alignment for LLMs with Human Preference](https://aclanthology.org/2025.acl-long.1544.pdf)
