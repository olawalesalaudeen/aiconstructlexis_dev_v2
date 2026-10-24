# Privacy preservation
**Type:** Construct  
**Referenced in:** 72 papers  
**Also known as:** Privacy, Secrecy maintenance, Information leakage, Prompt leakage vulnerability, Privacy leakage, Data leakage risk, Privacy risk, Data leakage vulnerability, Information leakage risk, Knowledge file leakage, Privacy protection, Privacy vulnerability  

## State of the Field

**Definition agreement:** Complementary. Most papers define privacy preservation as resistance to unauthorized disclosure or inference of sensitive information, especially via model outputs or access to parameters, covering training data, user data, prompts, system prompts, or retrieved private content, and several express the same idea through differential privacy guarantees or attack-based tests. A few papers shift the locus to prompts, training or compression procedures, federated sharing, refusal behavior, or strategic interaction, so the scope is not uniform enough for consensus, but these mostly describe different facets and settings of the same leakage-prevention phenomenon rather than incompatible constructs.

**Space of definitions.** Across the papers, the prevailing usage treats privacy preservation as limiting the disclosure of sensitive or personal information by the model, its training procedure, or its prompting setup. Many definitions make this concrete as preventing private training examples, prompt exemplars, or user data from being inferred from outputs or parameters, often with formal differential privacy guarantees, for example by requiring similar outputs when in-context exemplars vary or by ensuring no single data point can be identified from the output. A smaller line of work frames it as keeping personally identifiable information away from untrusted components such as remote API models, or as privacy awareness shown by refusing suspicious questions. Other minority formulations shift the construct toward secrecy in social interaction, prompt content that avoids sensitive information, or vulnerability and risk labels such as prompt leakage, datastore leakage, and knowledge file leakage, so the main disagreement is between privacy as a protective property and privacy as an attack surface or observable behavior.

**Space of facets.** Papers most often break the area into protection versus leakage, and one benchmark explicitly evaluates privacy in terms of awareness and leakage. Several papers also separate training-stage and inference-stage privacy, or focus on more specific leakage types such as prompt leakage, privacy leakage, information leakage, data leakage, and knowledge file leakage; one study further identifies five leakage vectors: metadata, GPT initialization, retrieval, sandboxed execution environment, and prompts. In broader evaluations, privacy is treated as one dimension of trustworthiness, but the same label is used for different objects across papers: a model property, a training-process guarantee, a prompt characteristic, a social-interaction norm, or a system vulnerability.

**Space of measurement.** Operationalizations are mixed: papers link privacy preservation to 4 measurement instruments and 3 behavioral indicators. The linked measures named most often are membership inference attack, privacy leakage, human evaluation, LLM-as-a-judge, and MIMIC-III, spanning attack-based probes, leakage checks in conversations, human judgments of private summaries, judge-model ratings, and dataset-based privacy protection evaluations. Other papers operationalize privacy through whether models refuse suspicious questions or through tasks that ask models to identify personally identifiable information in images. These measures mostly track definitions centered on non-disclosure and attack resistance, though some shift toward proxy behaviors such as refusal or whether prompts themselves contain sensitive information.

**Links.** Several papers relate privacy preservation to trustworthiness, and one benchmark discusses privacy through awareness and leakage in that broader framing. One paper claims a causal relationship from in-context learning to privacy preservation, and another reports a related link between in-context learning and privacy risks. Another paper claims a causal relationship from privacy preservation to personalization and generalization, stating that stringent privacy measures can hinder both. Privacy leakage is also used both as a related indicator and as a direct measure during conversations, while several other single-paper claims report causal or related links with additional model or system properties.

## Sources

**[Privacy-Preserving In-Context Learning for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/572cd21bd5dea96b065476b77d21b3c6-Paper-Conference.pdf) (as "Privacy")**
> The degree to which a model's outputs do not reveal sensitive information from its input exemplars, formalized through differential privacy guarantees.

**[SOTOPIA: Interactive Evaluation for Social Intelligence in Language Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/b3075b88e583a0e98d8b24338a613060-Paper-Conference.pdf) (as "Secrecy maintenance")**
> The ability to protect private information or intentions from being revealed during social interaction, especially when disclosure would reduce strategic advantage.

**[EmojiPrompt: Generative Prompt Obfuscation for Privacy-Preserving Communication with Cloud-based LLMs](https://aclanthology.org/2025.naacl-long.614.pdf)**
> The ability of a system to fulfill user requests without revealing personally identifiable information to untrusted components, such as remote API-based models.

**[Exploiting Presentative Feature Distributions for Parameter-Efficient Continual Learning of Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cheng25j/cheng25j.pdf) (as "Information leakage")**
> The unintended access or reuse of task-specific information (e.g., training data, task identifiers) from previously learned tasks during continual learning, posing privacy risks and enabling unfair performance advantages.

**[``I've Decided to Leak'': Probing Internals Behind Prompt Leakage Intents](https://aclanthology.org/2025.emnlp-main.1082.pdf) (as "Prompt leakage vulnerability")**
> The susceptibility of a large language model to being manipulated by adversarial queries into revealing its confidential system prompt.

**[MultiTrust: A Comprehensive Benchmark Towards Trustworthy Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/586640cda3db2dc77349013dcefee456-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Privacy leakage")**
> The tendency to reveal personal or sensitive information when prompted directly or indirectly.

**[DocMIA: Document-Level Membership Inference Attacks against DocVQA Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/231a8daf4f64935d0c7c6586f290b24f-Paper-Conference.pdf) (as "Privacy vulnerability")**
> The susceptibility of a model to attacks that can reveal sensitive information about its training data.

**[Uncovering Latent Memories in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/442443dbe8c4c7e1df7eda140921de36-Paper-Conference.pdf) (as "Data leakage risk")**
> The tendency for a model to reveal sensitive or proprietary training information in its outputs, creating privacy and misuse concerns.

**[TDDBench: A Benchmark for Training data detection](https://proceedings.iclr.cc/paper_files/paper/2025/file/4db8a681ae1e58376dc6227978829063-Paper-Conference.pdf) (as "Privacy risk")**
> The potential for a model to reveal sensitive information about its training data, which can be assessed through training data detection.

**[Follow My Instruction and Spill the Beans: Scalable Data Extraction from Retrieval-Augmented Generation Systems](https://proceedings.iclr.cc/paper_files/paper/2025/file/79cafa874121a3435d8a54f454b646b4-Paper-Conference.pdf) (as "Data leakage vulnerability")**
> The tendency of a RAG system to expose private datastore content through model outputs.

**[Mimicking the Familiar: Dynamic Command Generation for Information Theft Attacks in LLM Tool-Learning System](https://aclanthology.org/2025.acl-long.672.pdf) (as "Information leakage risk")**
> The latent potential for a tool-learning system to unintentionally disclose sensitive user or tool information to unauthorized parties as a result of its design and behavior.

**[When GPT Spills the Tea: Comprehensive Assessment of Knowledge File Leakage in GPTs](https://aclanthology.org/2025.acl-long.936.pdf) (as "Knowledge file leakage")**
> The latent propensity of an LLM agent to expose protected knowledge file data—such as titles, content, or original files—through various system vectors, even without direct adversarial prompting.

**[GradOT: Training-free Gradient-preserving Offsite-tuning for Large Language Models](https://aclanthology.org/2025.acl-long.255.pdf) (as "Privacy protection")**
> The degree to which the compressed emulator prevents leakage of sensitive information from either the model or data owner, ensuring that the fine-tuned emulator cannot be used to reconstruct the original model or compromise data confidentiality.

## Relationships

### Privacy preservation →
- **Membership inference attack** (measurements) — *measured_by*
  > These fully trained prompts, if not properly protected with privacy mechanism, are vulnerable to MIA which aims to infer if an image sample was used for training or not (Section 3.3).
  - [Privacy-Preserving Personalized Federated Prompt Learning for Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4431224d3762aa655f0aee4eaf04ff16-Paper-Conference.pdf)
- **Personalization** (constructs) — *causes*
  > stringent privacy measures, such as differential privacy, can hinder both personalization and generalization (Abstract).
  - [Privacy-Preserving Personalized Federated Prompt Learning for Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4431224d3762aa655f0aee4eaf04ff16-Paper-Conference.pdf)
- **Generalization** (constructs) — *causes*
  > stringent privacy measures, such as differential privacy, can hinder both personalization and generalization (Abstract).
  - [Privacy-Preserving Personalized Federated Prompt Learning for Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4431224d3762aa655f0aee4eaf04ff16-Paper-Conference.pdf)
- **MIMIC-III** (measurements) — *measured_by*
  > Table 3: Privacy protection performance under the private entity known setting on the MIMIC-III dataset.
  - [Controlled Generation for Private Synthetic Text](https://aclanthology.org/2025.emnlp-main.1663.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > We further evaluate the LMs capability in generating private summaries by conducting a human evaluation. (Section 4.5)
  - [How Private are Language Models in Abstractive Summarization?](https://aclanthology.org/2025.emnlp-main.1531.pdf)

### → Privacy preservation
- **In-context learning** (constructs) — *causes*
  > We study the problem of in-context learning (ICL) with large language models (LLMs) on private datasets. This scenario poses privacy risks, as LLMs may leak or regurgitate the private examples demonstrated in the prompt. (Section 1)
  - [Privacy-Preserving In-Context Learning with Differentially Private Few-Shot Generation](https://proceedings.iclr.cc/paper_files/paper/2024/file/8cb564df771e9eacbfe9d72bd46a24a9-Paper-Conference.pdf)
- **Memorization** (constructs) — *causes*
  > This repeated exposure enhances the likelihood of the model memorizing specific details, thereby increasing the potential for data leakage during privacy attacks. (Section 1)
  - [DocMIA: Document-Level Membership Inference Attacks against DocVQA Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/231a8daf4f64935d0c7c6586f290b24f-Paper-Conference.pdf)

### Associated with
- **Trustworthiness** (constructs)
  > We assess the trustworthiness of Med-LVLMs across five dimensions, including trustfulness, fairness, safety, privacy, and robustness. (Abstract)
  - [CARES: A Comprehensive Benchmark of Trustworthiness in Medical Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fde7f40f8ced5735006810534dc66b33-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Privacy awareness** (constructs)
  > From the perspectives of consciousness and behaviors [132], we evaluate privacy in terms of awareness and leakage. (Sec. 2.2.5)
  - [MultiTrust: A Comprehensive Benchmark Towards Trustworthy Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/586640cda3db2dc77349013dcefee456-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Privacy leakage** (behaviors tasks)
  > "we evaluate privacy in terms of awareness and leakage"
  - [MultiTrust: A Comprehensive Benchmark Towards Trustworthy Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/586640cda3db2dc77349013dcefee456-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Pre-training data detection** (behaviors tasks)
  > Training data detection (TDD) is commonly employed to assess privacy risks in machine learning models (Murakonda & Shokri, 2020).
  - [TDDBench: A Benchmark for Training data detection](https://proceedings.iclr.cc/paper_files/paper/2025/file/4db8a681ae1e58376dc6227978829063-Paper-Conference.pdf)
- **Utility preservation** (constructs)
  > For DP-based solutions, although they yield better efficiency but faces the trade-off between privacy and utility. (Section 2)
  - [Cape: Context-Aware Prompt Perturbation Mechanism with Differential Privacy](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25g/wu25g.pdf)
- **De-identification** (behaviors tasks)
  > “the goal of any text anonymization method is to remove all information that could lead to the inference of a set of pre-specified author attributes while maintaining the utility of the original text.”
  - [Language Models are Advanced Anonymizers](https://proceedings.iclr.cc/paper_files/paper/2025/file/f478b2e8ad9ff0756bf5b79fb31c330f-Paper-Conference.pdf)
