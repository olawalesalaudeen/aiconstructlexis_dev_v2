# Reliability
**Type:** Construct  
**Referenced in:** 57 papers  
**Also known as:** Model reliability, Reasoning reliability, Clinical reliability, Code reliability, Answer reliability, Internal consistency, Scoring reliability  

## State of the Field

**Definition agreement:** Consensus. Most papers define reliability as the overall trustworthiness, correctness, and consistency or dependability of a model's outputs or judgments, often across inputs and with related concerns such as factual accuracy, safety, hallucination avoidance, or appropriate uncertainty. A few papers use narrower task-specific variants or isolated alternatives such as internal prediction agreement or item-response correlation, but these are outliers rather than a competing definition used by a substantial share of the papers.

**Space of definitions.** Across the papers, reliability is most commonly framed as broad output-level dependability: models or systems should produce trustworthy, consistent, accurate, and often factually correct outputs, sometimes also safely, across situations. Many definitions tie this to avoiding hallucinated, outdated, biased, misleading, or low-quality generations, and some add that reliable systems should express uncertainty or acknowledge missing knowledge. Smaller lines of work narrow the construct to particular settings, such as valid reasoning that leads to correct conclusions, medical reports that are trustworthy for clinical decision-making, consistently executable code, reward models that reliably select or score correct solutions, or edited models returning the target answer on edited inputs. A further minority uses a different angle and defines reliability through internal consistency, either agreement between intermediate-layer and final predictions or correlation among responses to items measuring the same construct.

**Space of facets.** Papers most often systematize the construct by the object being evaluated: model, answer, reasoning, clinical, and code reliability all appear, alongside other task-specific variants. The same label is also used for different scopes, from overall model trustworthiness to narrow task criteria such as edit success on a specific input-question pair, honest tool use when the correct tool is absent, or faithful content that also presents uncertainty. Reliability is sometimes organized together with other editing criteria, especially generalization and locality, and one paper presents adversarial robustness as one aspect of reliability; by contrast, internal consistency is treated in some work as a separate, narrower notion centered on agreement within the model.

**Space of measurement.** Papers link reliability to 4 measurement instruments and 4 behavioral indicators. Operationalization is mainly benchmark-based: CounterFact and ZsRE appear in knowledge-editing evaluations, TruthfulQA is used to assess factualness and common sense, VisEval is reported through pass rates, and Visual question answering is used as an evaluation task, while the other linked behavioral indicators appear outside direct measurement claims. These operationalizations mostly target truthful output, edit success, or task pass rates, which fit the common output-level framing, while definitions centered on safety, uncertainty expression, or internal agreement are less directly captured by the named instruments.

**Links.** Hallucination is the most recurrent linked behavior: several papers claim a causal relationship from Hallucination to Reliability, saying hallucinated content or facts undermine reliability, and several others report Hallucination as related to Reliability. Calibration and Editing locality also recur: papers claim a causal relationship from Calibration to Reliability, describe calibration as related to reliability through expected calibration error, and treat Editing locality as both related to reliability and, when poor, as compromising it. Beyond these recurring links, papers report several one-paper causal relationships from other model or task properties to Reliability, and two papers claim causal relationships from Reliability to Reasoning and to Robustness; a further cluster of one-paper related links ties reliability to other evaluation notions.

## Sources

**[Kernel Language Entropy: Fine-grained Uncertainty Quantification for LLMs from Semantic Similarities](https://proceedings.neurips.cc/paper_files/paper/2024/file/10c456d2160517581a234dfde15a7505-Paper-Conference.pdf)**
> The latent property of a model consistently performing correctly and safely, which uncertainty quantification aims to improve.

**[CODE: Contrasting Self-generated Description to Combat Hallucination in Large Multi-modal Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/f1592b0d4ab737e18bb1899484d28d96-Paper-Conference.pdf) (as "Model reliability")**
> The overall dependability and consistency of a model's performance and outputs across different situations.

**[BRiTE: Bootstrapping Reinforced Thinking Process to Enhance Language Model Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhong25e/zhong25e.pdf) (as "Reasoning reliability")**
> The consistency and trustworthiness of a model's reasoning outputs, such that generated rationales are valid and lead to correct conclusions across diverse problems.

**[ReEvalMed: Rethinking Medical Report Evaluation by Aligning Metrics with Real-World Clinical Judgment](https://aclanthology.org/2025.emnlp-main.598.pdf) (as "Clinical reliability")**
> The extent to which a generated medical report is trustworthy and valid for use in real-world clinical decision-making.

**[Reliable and Cost-Effective Exploratory Data Analysis via Graph-Guided RAG](https://aclanthology.org/2025.emnlp-main.836.pdf) (as "Code reliability")**
> The latent property of a model to consistently generate code that is syntactically correct and executable without errors.

**[DocAgent: An Agentic Framework for Multi-Modal Long-Context Document Understanding](https://aclanthology.org/2025.emnlp-main.893.pdf) (as "Answer reliability")**
> The degree to which the model's generated answers are accurate, complete, and trustworthy, often enhanced through verification processes.

**[Calibrating Reasoning in Language Models with Internal Consistency](https://proceedings.neurips.cc/paper_files/paper/2024/file/d037fd021c9aace128b8ce25001cdb6c-Paper-Conference.pdf) (as "Internal consistency")**
> The degree of agreement between latent predictions decoded from intermediate layers and the final prediction, reflecting the stability of the model's internal reasoning process.

**[Tool-Augmented Reward Modeling](https://proceedings.iclr.cc/paper_files/paper/2024/file/4eb7f0abf16d08e50ed42beb1e22e782-Paper-Conference.pdf) (as "Scoring reliability")**
> The degree to which a reward model consistently and accurately assigns scores that reflect true human preferences, enhanced by access to external verification tools.

## Relationships

### Reliability →
- **TruthfulQA** (measurements) — *measured_by*
  > we use TruthfulQA [27] to measure the reliability of the outputs generated by Aligner in terms of factualness and common sense. (Section 3.2)
  - [Aligner: Efficient Alignment by Learning to Correct](https://proceedings.neurips.cc/paper_files/paper/2024/file/a51a74b2d71387dc71cc29181b5519bb-Paper-Conference.pdf)
- **CounterFact** (measurements) — *measured_by*
  > experiments on COUNTERFACT and MQuAKE shows that our method preserves balanced basic editing performance (reliability, locality, and generality) under diverse editing scenarios.
  - [REACT: Representation Extraction And Controllable Tuning to Overcome Overfitting in LLM Knowledge Editing](https://aclanthology.org/2025.emnlp-main.860.pdf)

### → Reliability
- **Hallucination** (behaviors tasks) — *causes*
  > Long CoT suffers from high cost for training and exhibits low reliability due to table content hallucinations. (Abstract)
  - [RoT: Enhancing Table Reasoning with Iterative Row-Wise Traversals](https://aclanthology.org/2025.emnlp-main.29.pdf)
- **Calibration** (constructs) — *causes*
  > Confidence calibration is a critical aspect in developing reliable and trustworthy language models (Nguyen & O’Connor, 2015; Guo et al., 2017; Minderer et al., 2021).
  - [On Calibration of LLM-based Guard Models for Reliable Content Moderation](https://proceedings.iclr.cc/paper_files/paper/2025/file/a99f732df9b668284b449da0214a3286-Paper-Conference.pdf)
- **Editing locality** (constructs) — *causes*
  > "This limitation results in poor editing locality, which can lead to the persistence of irrelevant or inaccurate facts, ultimately compromising the reliability of LLMs."
  - [Precise Localization of Memories: A Fine-grained Neuron-level Knowledge Editing Technique for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/01db36a646c07c64dd39a92b4eceb417-Paper-Conference.pdf)
- **Instruction following ability** (constructs) — *causes*
  > For reliability, generalization, and portability evaluations, LLaVA-1.5 outperforms BLIP-2 and MiniGPT-4. This improved performance can be attributed to its larger model size and better instruction-following capability... (Section 5.2.1)
  - [MMKE-Bench: A Multimodal Editing Benchmark for Diverse Visual Knowledge](https://proceedings.iclr.cc/paper_files/paper/2025/file/01fb6de3360f9e32862665580e2c5853-Paper-Conference.pdf)
- **Positional bias** (constructs) — *causes*
  > "This bias often leads to unexpected model failures and hurts performance, robustness, and reliability across various applications."
  - [Eliminating Position Bias of Language Models: A Mechanistic Approach](https://proceedings.iclr.cc/paper_files/paper/2025/file/e389b15166cf98966ba058965a8c17e3-Paper-Conference.pdf)
- **Factuality** (constructs) — *causes*
  > Both aspects [factuality and instruction-following] significantly impact reliability and user experience in real-world applications and are challenging to evaluate effectively with existing reward models (Section 3).
  - [Agentic Reward Modeling: Integrating Human Preferences with Verifiable Correctness Signals for Reliable Reward Systems](https://aclanthology.org/2025.acl-long.775.pdf)
- **Self-verification** (behaviors tasks) — *causes*
  > Reviewer agent – Verifies and refines the initial answer to improve accuracy and reliability (Section 3)
  - [DocAgent: An Agentic Framework for Multi-Modal Long-Context Document Understanding](https://aclanthology.org/2025.emnlp-main.893.pdf)

### Associated with
- **Adversarial robustness** (constructs)
  > This paper studies one key aspect of LLM’s reliability—adversarial robustness.
  - [An LLM can Fool Itself: A Prompt-Based Adversarial Attack](https://proceedings.iclr.cc/paper_files/paper/2024/file/0c72285e193ec90dca93258128698cfb-Paper-Conference.pdf)
- **Generalization** (constructs)
  > we find that it seems to be an impossible triangle—reliability, generalization, and locality can not be realized at the same time in the continual editing settings. (Section 1)
  - [WISE: Rethinking the Knowledge Memory for Lifelong Model Editing of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/60960ad78868fce5c165295fbd895060-Paper-Conference.pdf)
- **Knowledge editing** (behaviors tasks)
  > i) reliability, the model can remember both current and previous edits after sequential editing
  - [WISE: Rethinking the Knowledge Memory for Lifelong Model Editing of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/60960ad78868fce5c165295fbd895060-Paper-Conference.pdf)
- **Self-consistency** (measurements)
  > we aggregate the answer of generated response paths in a way that reflects the reliability of each generated content (as opposed to self-consistency in which each generated chain contributes equally to majority voting).
  - [CER: Confidence Enhanced Reasoning in LLMs](https://aclanthology.org/2025.acl-long.390.pdf)
- **Preference consistency** (constructs)
  > logical preference consistency serves as a useful proxy for preference reliability. (Section 1)
  - [Aligning with Logic: Measuring, Evaluating and Improving Logical Preference Consistency in Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25u/liu25u.pdf)
- **Instance-level stability** (constructs)
  > Low DR and NDR values signify that an accelerated VLM maintains behavioral fidelity and reliability. (Section 1)
  - [Does Acceleration Cause Hidden Instability in Vision Language Models? Uncovering Instance-Level Divergence Through a Large-Scale Empirical Study](https://aclanthology.org/2025.emnlp-main.425.pdf)
