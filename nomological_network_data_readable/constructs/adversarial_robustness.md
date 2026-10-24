# Adversarial robustness
**Type:** Construct  
**Referenced in:** 46 papers  
**Also known as:** Adversarial Vulnerability, Attack resistance, Adversarial susceptibility, Adversarial vulnerability, Robustness to phonetic attacks, Distraction susceptibility, Vulnerability, Safety vulnerability  

## State of the Field

**Definition agreement:** Complementary. Most papers define adversarial robustness as a model's ability, or inverse susceptibility, to keep its outputs, performance, or intended behavior stable under adversarially crafted or perturbed inputs. A smaller but substantial group extends this from small input perturbations to jailbreaks, prompt injection, misinformation, or latent exploitable weaknesses, so the definitions describe the same general phenomenon from different angles rather than using the term for incompatible constructs.

**Space of definitions.** Across the papers, the prevailing usage treats adversarial robustness as a latent model property, or degree of stability, in maintaining performance, correct predictions, or intended behavior when inputs are intentionally perturbed by adversarial attacks, often small or subtle ones. A smaller line of work flips the framing to adversarial vulnerability or susceptibility, defining the construct as how easily outputs can be manipulated or performance degrades, sometimes inferred from attack success rate. Other papers narrow the phenomenon to factual accuracy under adversarial examples, resistance to human-crafted misinformation, offensive-language detection under homophonic substitutions, LLM judges' susceptibility to prompt injection or adversarial phrases, or distraction from complex role-play context; one paper instead defines attack resistance as the number of input bits an attacker must control for one bit of output control.

**Space of facets.** The papers use several neighboring labels rather than a single taxonomy. Many use adversarial robustness, while others use adversarial vulnerability, adversarial susceptibility, attack resistance, distraction susceptibility, robustness to phonetic attacks, or safety vulnerability, so the phenomenon is alternately framed as resistance to perturbation, exposure to manipulation, or a domain-specific subtype. In related use, one paper treats it as an aspect of reliability, another explicitly separates out-of-distribution and adversarial robustness, and another relates multimodal attack susceptibility to safety alignment.

**Space of measurement.** Papers operationalize the construct with 14 measurement instruments and link it to 1 behavioral indicator. The most frequently linked instruments are HarmBench, AdvBench, GCG, SST-2, and AG News; papers use them as harmful instruction benchmarks, an attack method, and task datasets under character-level typos, confidence-elicitation attacks, or other adversarial prompts, often reporting robustness under attack or attack success rate. These measurements mostly track the dominant definition of performance under adversarial perturbation, though some instruments narrow the target to factuality, agent prompt injection, or safety-guardrail failure.

**Links.** Across relationships, papers link adversarial robustness to 4 constructs and 1 behavioral indicator. One paper claims a causal relationship from General ability to adversarial robustness, using the language that increased model capabilities give rise to emergent vulnerabilities, and one paper claims a causal relationship from adversarial robustness to Jailbreaking, describing models as fragile and easily distracted under complex role-play instructions, which enhances attack performance. Papers also report that adversarial robustness is related to Reliability, to Robustness in work that separates out-of-distribution and adversarial robustness, and to Safety alignment in discussions of multimodal attacks; no correlational link is reported.

## Sources

**[An Image Is Worth 1000 Lies: Transferability of Adversarial Images across Prompts on Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/674ad201bc8fa74b3c9979230aa0c63b-Paper-Conference.pdf)**
> The latent property of a model to maintain its performance and make correct predictions when faced with small, intentionally crafted perturbations to its input.

**[Achieving Domain-Independent Certified Robustness via Knowledge Continuity](https://proceedings.neurips.cc/paper_files/paper/2024/file/58cc11cda2a2679e8af5c6317aed0af8-Paper-Conference.pdf) (as "Adversarial Vulnerability")**
> The latent susceptibility of a model to adversarial perturbations, inferred from attack success rates.

**[Scaling Laws for Adversarial Attacks on Language Model Activations and Tokens](https://proceedings.iclr.cc/paper_files/paper/2025/file/5434a6b40f8f65488e722bc33d796c8b-Paper-Conference.pdf) (as "Adversarial susceptibility")**
> The degree to which a model's outputs can be manipulated by small, targeted perturbations to its inputs or internal states.

**[Scaling Laws for Adversarial Attacks on Language Model Activations and Tokens](https://proceedings.iclr.cc/paper_files/paper/2025/file/5434a6b40f8f65488e722bc33d796c8b-Paper-Conference.pdf) (as "Attack resistance")**
> A model property representing the number of bits the attacker must control on the input to exert a single bit of control on the output.

**[X-Transfer Attacks: Towards Super Transferable Adversarial Attacks on CLIP](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25h/huang25h.pdf) (as "Adversarial vulnerability")**
> The degree to which a model's performance degrades or its outputs can be manipulated by small, maliciously crafted input perturbations.

**[Enhancing Chinese Offensive Language Detection with Homophonic Perturbation](https://aclanthology.org/2025.emnlp-main.1154.pdf) (as "Robustness to phonetic attacks")**
> The model's ability to maintain performance in detecting offensive language when faced with inputs that have been intentionally altered with homophonic substitutions to evade detection.

**[SeqAR: Jailbreak LLMs with Sequential Auto-Generated Characters](https://aclanthology.org/2025.naacl-long.42.pdf) (as "Distraction susceptibility")**
> The tendency of LLMs to fail in recognizing malicious intent due to cognitive overload or contextual interference caused by complex role-playing instructions.

**[From Generation to Judgment: Opportunities and Challenges of LLM-as-a-judge](https://aclanthology.org/2025.emnlp-main.138.pdf) (as "Vulnerability")**
> The susceptibility of LLM judges to adversarial manipulations such as prompt injection or adversarial phrases that distort judgment outcomes.

**[Visual Contextual Attack: Jailbreaking MLLMs with Image-Driven Context Injection](https://aclanthology.org/2025.emnlp-main.487.pdf) (as "Safety vulnerability")**
> A latent weakness in a model's architecture or alignment that can be exploited to bypass its safety mechanisms.

## Relationships

### Adversarial robustness →
- **AdvBench** (measurements) — *measured_by*
  > For robustness evaluations, we take harmful requests from two harmful instruction datasets: HarmBench (Mazeika et al., 2024) and AdvBench (Zou et al., 2023b). (Section 5)
  - [Robust LLM safeguarding via refusal feature adversarial training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1022661f3f43406065641f16ce25eafa-Paper-Conference.pdf)
- **HarmBench** (measurements) — *measured_by*
  > We compute the correlation between the capability score and safety scores on the following benchmarks: AdvGLUE [91], AdvGLUE++ [34], AdvDemonstration [34], and HarmBench [51]. (Section 4.2)
  - [Safetywashing: Do AI Safety Benchmarks Actually Measure Safety Progress?](https://proceedings.neurips.cc/paper_files/paper/2024/file/7ebcdd0de471c027e67a11959c666d74-Paper-Datasets_and_Benchmarks_Track.pdf)
- **GCG** (measurements) — *measured_by*
  > Table 1: General model capability metrics and adversarial robustness (measured as ASR) of three LLMs trained using various safety fine-tuning methods. ... GCG ... PAIR ... AutoDAN ... HumanJailbreaks
  - [Robust LLM safeguarding via refusal feature adversarial training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1022661f3f43406065641f16ce25eafa-Paper-Conference.pdf)
- **SST-2** (measurements) — *measured_by*
  > We conducted our confidence elicitation attacks on Meta-Llama-3-8B-Instruct (Touvron et al., 2023) and Mistral-7B-Instruct-v0.2 (Jiang et al., 2023) while performing classification on two common datasets to evaluate adversarial robustness: SST-2, AG-News and one modern dataset: StrategyQA (Geva et al., 2021). (Section 4)
  - [Confidence Elicitation: A New Attack Vector for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/04bb76a98d9f32226b3beba7bd26a51f-Paper-Conference.pdf)
- **GLUE** (measurements) — *measured_by*
  > Existing research evaluates adversarial robustness of LLMs on the GLUE dataset (Wang et al., 2018)
  - [An LLM can Fool Itself: A Prompt-Based Adversarial Attack](https://proceedings.iclr.cc/paper_files/paper/2024/file/0c72285e193ec90dca93258128698cfb-Paper-Conference.pdf)
- **FM2** (measurements) — *measured_by*
  > To investigate this [whether LLMs can withstand adversarial examples], we utilize two datasets, namely Symmetric (Schuster et al., 2019) and FM2 (Eisenschlos et al., 2021). (Section 2.1)
  - [Towards Understanding Factual Knowledge of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/7b7d7985f62284060d65f532ed2ea5fa-Paper-Conference.pdf)
- **AgentDojo** (measurements) — *measured_by*
  > To measure the adversarial robustness of AI agents, we introduce AgentDojo, an evaluation framework for agents that execute tools over untrusted data.
  - [AgentDojo: A Dynamic Environment to Evaluate Prompt Injection Attacks and Defenses for LLM Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/97091a5177d8dc64b1da8bf3e1f6fb54-Paper-Datasets_and_Benchmarks_Track.pdf)
- **AG News** (measurements) — *measured_by*
  > We conducted our confidence elicitation attacks on Meta-Llama-3-8B-Instruct (Touvron et al., 2023) and Mistral-7B-Instruct-v0.2 (Jiang et al., 2023) while performing classification on two common datasets to evaluate adversarial robustness: SST-2, AG-News and one modern dataset: StrategyQA (Geva et al., 2021). (Section 4)
  - [Confidence Elicitation: A New Attack Vector for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/04bb76a98d9f32226b3beba7bd26a51f-Paper-Conference.pdf)
- **StrategyQA** (measurements) — *measured_by*
  > We conducted our confidence elicitation attacks on Meta-Llama-3-8B-Instruct (Touvron et al., 2023) and Mistral-7B-Instruct-v0.2 (Jiang et al., 2023) while performing classification on two common datasets to evaluate adversarial robustness: SST-2, AG-News and one modern dataset: StrategyQA (Geva et al., 2021). (Section 4)
  - [Confidence Elicitation: A New Attack Vector for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/04bb76a98d9f32226b3beba7bd26a51f-Paper-Conference.pdf)
- **AutoDAN** (measurements) — *measured_by*
  > Table 1: General model capability metrics and adversarial robustness (measured as ASR) of three LLMs trained using various safety fine-tuning methods. ... GCG ... PAIR ... AutoDAN ... HumanJailbreaks
  - [Robust LLM safeguarding via refusal feature adversarial training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1022661f3f43406065641f16ce25eafa-Paper-Conference.pdf)
- **Jailbreaking** (behaviors tasks) — *causes*
  > "LLMs are notably fragile and easily distracted by our complex role-play instructions, thereby enhancing the attack performance of each individual jailbreak character."
  - [SeqAR: Jailbreak LLMs with Sequential Auto-Generated Characters](https://aclanthology.org/2025.naacl-long.42.pdf)
- **JailbreakBench** (measurements) — *measured_by*
  > To assess how robust our models are to adversarial prompt injection, we evaluate them on the JailBreakBench dataset. (Section 3.3.4. ADVERSARIAL ROBUSTNESS EVALUATION)
  - [POROver: Improving Safety and Reducing Overrefusal in Large Language Models with Overgeneration and Preference Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/karaman25a/karaman25a.pdf)

### → Adversarial robustness
- **General ability** (constructs) — *causes*
  > increased model capabilities give rise to distinct emergent model vulnerabilities. (Section 1)
  - [Endless Jailbreaks with Bijection Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/b05c1fb3345743dea59f500ec5a0bba0-Paper-Conference.pdf)

### Associated with
- **Reliability** (constructs)
  > This paper studies one key aspect of LLM’s reliability—adversarial robustness.
  - [An LLM can Fool Itself: A Prompt-Based Adversarial Attack](https://proceedings.iclr.cc/paper_files/paper/2024/file/0c72285e193ec90dca93258128698cfb-Paper-Conference.pdf)
- **Robustness** (constructs)
  > Following the common practice in the field [132, 147], we consider the out-of-distribution (OOD) and adversarial robustness respectively. (Sec. 2.2.3)
  - [MultiTrust: A Comprehensive Benchmark Towards Trustworthy Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/586640cda3db2dc77349013dcefee456-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Safety alignment** (constructs)
  > larger models are more susceptible to multimodal attacks, revealing the lack of safety alignment in the additional modalities. (Section 4.2, Finding A3)
  - [Con Instruction: Universal Jailbreaking of Multimodal Large Language Models via Non-Textual Modalities](https://aclanthology.org/2025.acl-long.146.pdf)
- **Unlearning** (constructs)
  > Existing unlearning strategies, ranging from gradient-based fine-tuning and model editing to sparse autoencoder (SAE) steering, either lack interpretability or fail to provide a robust defense against adversarial prompts. (Abstract)
  - [Model Unlearning via Sparse Autoencoder Subspace Guided Projections](https://aclanthology.org/2025.emnlp-main.1348.pdf)
