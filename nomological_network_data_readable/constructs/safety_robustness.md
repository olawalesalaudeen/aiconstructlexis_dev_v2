# Safety robustness
**Type:** Construct  
**Referenced in:** 26 papers  
**Also known as:** Jailbreak vulnerability, Jailbreak robustness, Robustness to jailbreaking, Susceptibility to jailbreaking, Jailbreaking resistance, Ethical risk, Jailbreak susceptibility  

## State of the Field

**Definition agreement:** Consensus. Most papers define safety robustness as the same core property: whether a model's safety mechanisms or alignment remain effective under adversarial manipulation, often framed as resistance versus vulnerability to prompts or triggers that try to bypass guardrails and produce harmful or prohibited outputs. A few papers narrow this to particular settings such as multilingual prompts, role prompts, template manipulation, or fine-tuning and inference-time triggers, but these are specific attack contexts rather than different phenomena.

**Space of definitions.** Across the papers, the prevailing usage treats this construct as a model property of resisting, or conversely being susceptible to, jailbreak-style adversarial inputs that bypass safety mechanisms and elicit harmful, prohibited, or unintended outputs. Most definitions describe a latent ability, tendency, or vulnerability under adversarial prompting, while a smaller line narrows the setting to template-region manipulation, non-English or multilingual prompts, manipulative role prompts, or vulnerabilities acquired through fine-tuning or inference-time triggers. Some authors also phrase it as adherence to a model's intended functions and restrictions, and some make the outcome explicit as refusing to generate harmful content even under attack.

**Space of facets.** Papers use several labels around the same jailbreak resistance and vulnerability theme, including jailbreak vulnerability, jailbreak robustness, robustness to jailbreaking, susceptibility to jailbreaking, jailbreaking resistance, ethical risk, and jailbreak susceptibility. The main variation is whether authors frame the construct as an ability to resist attacks or as the inverse tendency to be manipulated, with narrower versions tied to multilingual attacks, role-prompt pressure, template manipulation, or trigger-specific susceptibility. One paper further describes safety functions in two parts, identifying harmful content and using that processed information during generation, and studies robustness when the template region is manipulated.

**Space of measurement.** Operationalization is dominated by benchmark, dataset, and jailbreak attack evaluation. Papers link the construct to 9 measurement instruments and 1 behavioral indicator, harmful content generation; the most frequently linked instruments are AdvBench, AutoDAN, DAN, FigStep, and GCG. In practice, papers assess it with malicious or adversarial prompts and report outcomes such as attack success rate or whether the model produces harmful outputs or refuses unsafe requests, with one benchmark description calling AdvBench a prevailing dataset for measuring LLM security and another defining attack success rate as the percentage of cases where harmful outputs are produced after safety mechanisms are circumvented.

**Links.** Beyond measurement, papers connect the construct to 1 behavioral indicator and 1 other construct. Several papers claim a causal relationship from safety robustness to harmful content generation, with their evidence phrased in terms of jailbreak attacks exploiting vulnerabilities or adversarial prompts to elicit harmful outputs. One paper also reports that safety alignment is related to safety robustness, describing an evasiveness dilemma between evading a defense and circumventing the model's built-in safeguards; papers do not report correlational links.

## Sources

**[Why Safeguarded Ships Run Aground? Aligned Large Language Models' Safety Mechanisms Tend to Be Anchored in The Template Region](https://aclanthology.org/2025.acl-long.738.pdf)**
> The degree to which a model's safety mechanisms remain effective under adversarial conditions or interventions, particularly when the template region is manipulated.

**[Distributional Preference Learning: Understanding and Accounting for Hidden Context in RLHF](https://proceedings.iclr.cc/paper_files/paper/2024/file/7423902b5534e2b267438c85444a54b1-Paper-Conference.pdf) (as "Jailbreak vulnerability")**
> The susceptibility of an LLM to adversarial inputs that bypass its safety mechanisms and elicit harmful content generation, particularly when non-English or multilingual prompts are used.

**[RobustKV: Defending Large Language Models against Jailbreak Attacks via KV Eviction](https://proceedings.iclr.cc/paper_files/paper/2025/file/38bbae17d60940f3ee14dfd1035d7542-Paper-Conference.pdf) (as "Jailbreak robustness")**
> The model's latent ability to resist attacks that use specially crafted prompts to circumvent its safety mechanisms and elicit harmful responses.

**[Concept-ROT: Poisoning Concepts in Large Language Models with Model Editing](https://proceedings.iclr.cc/paper_files/paper/2025/file/cb7baa005c239c1c7c4098c2a9e00450-Paper-Conference.pdf) (as "Robustness to jailbreaking")**
> The model's ability to resist attempts to bypass its safety mechanisms and refuse to generate harmful content, even when subjected to adversarial attacks.

**[Tree of Attacks: Jailbreaking Black-Box LLMs Automatically](https://proceedings.neurips.cc/paper_files/paper/2024/file/70702e8cbb4890b4a467b984ae59828a-Paper-Conference.pdf) (as "Susceptibility to jailbreaking")**
> The model's vulnerability to adversarial prompts designed to bypass its safety mechanisms and elicit prohibited information.

**[CARES: A Comprehensive Benchmark of Trustworthiness in Medical Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fde7f40f8ced5735006810534dc66b33-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Jailbreaking resistance")**
> The model's ability to adhere to its intended functions and restrictions when prompted with inputs designed to manipulate or exploit it.

**[EMNLP: Educator-role Moral and Normative Large Language Models Profiling](https://aclanthology.org/2025.emnlp-main.42.pdf) (as "Ethical risk")**
> The latent tendency of a model to produce harmful content when exposed to manipulative or adversarial role prompts, reflecting vulnerability in safety alignment.

**[Jailbreak-Tuning: Models Efficiently Learn Jailbreak Susceptibility](https://aclanthology.org/2025.emnlp-main.669.pdf) (as "Jailbreak susceptibility")**
> The latent tendency of a model to bypass its safety guardrails when exposed to specific fine-tuning or inference-time triggers, reflecting an acquired vulnerability to compliance with harmful requests.

## Relationships

### Safety robustness →
- **AdvBench** (measurements) — *measured_by*
  > We performed experiments on the Advbench dataset [70] which is one of the most prevailing benchmark datasets to measure the security of LLMs. (Section 4)
  - [Fight Back Against Jailbreaking via Prompt Adversarial Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/759ca99a82e2a9137c6bef4811c8d378-Paper-Conference.pdf)
- **Harmful content generation** (behaviors tasks) — *causes*
  > jailbreak attacks, which exploit vulnerabilities to elicit unintended or harmful outputs, threaten LLMs safety significantly. (Abstract)
  - [Layer-Level Self-Exposure and Patch: Affirmative Token Mitigation for Jailbreak Attack Defense](https://aclanthology.org/2025.naacl-long.623.pdf)
- **DAN** (measurements) — *measured_by*
  > use the AdvBench and DoAnythingNow (Shen et al., 2024) datasets to assess the safety of the LLMs. (Section 4.2.2)
  - [LSSF: Safety Alignment for Large Language Models through Low-Rank Safety Subspace Fusion](https://aclanthology.org/2025.acl-long.1479.pdf)
- **MM-SafetyBench** (measurements) — *measured_by*
  > ...for evaluating jailbreak robustness, we employ MM-SafetyBench (Liu et al., 2024b), FigStep (Gong et al., 2025) and JailBreaKV (Luo et al., 2024) (Section 2.1).
  - [Think in Safety: Unveiling and Mitigating Safety Alignment Collapse in Multimodal Large Reasoning Model](https://aclanthology.org/2025.emnlp-main.261.pdf)
- **FigStep** (measurements) — *measured_by*
  > ...for evaluating jailbreak robustness, we employ MM-SafetyBench (Liu et al., 2024b), FigStep (Gong et al., 2025) and JailBreaKV (Luo et al., 2024) (Section 2.1).
  - [Think in Safety: Unveiling and Mitigating Safety Alignment Collapse in Multimodal Large Reasoning Model](https://aclanthology.org/2025.emnlp-main.261.pdf)
- **JailbreakV** (measurements) — *measured_by*
  > ...for evaluating jailbreak robustness, we employ MM-SafetyBench (Liu et al., 2024b), FigStep (Gong et al., 2025) and JailBreaKV (Luo et al., 2024) (Section 2.1).
  - [Think in Safety: Unveiling and Mitigating Safety Alignment Collapse in Multimodal Large Reasoning Model](https://aclanthology.org/2025.emnlp-main.261.pdf)

### Associated with
- **Safety mechanism** (constructs)
  > “we propose another technique called Robust Safety Neuron Tuning method (RSN-Tune). It separates safety neurons from foundation neurons ... Experimental results demonstrate the effectiveness of RSN-Tune in enhancing models’ safety robustness during downstream tuning.”
  - [Understanding and Enhancing Safety Mechanisms of LLMs via Safety-Specific Neuron](https://proceedings.iclr.cc/paper_files/paper/2025/file/6d2666e2cf44088cc57204fbc5ef7f34-Paper-Conference.pdf)
