# Trustworthiness
**Type:** Construct  
**Referenced in:** 70 papers  
**Also known as:** Trustfulness, Clinical trustworthiness, Clinical reliability  

## State of the Field

**Definition agreement:** Consensus. Most papers define trustworthiness as the reliability, safety, dependability, or credibility of a model, agent, or its outputs, often framed as whether users can appropriately rely on them in high stakes settings. A few papers use the term for narrower component-level prediction or evaluation accuracy, such as scaling laws or reward and search modules, but these are outliers relative to the dominant shared definition.

**Space of definitions.** Across the papers, the prevailing usage treats trustworthiness as the reliability or dependability of a model or its outputs, often with added emphasis on safety, accuracy, consistency, honesty, or dependable confidence expression. Many definitions cast it as a latent property that lets users, clinicians, or other end-users appropriately rely on outputs in critical or high-stakes settings. Smaller lines of work narrow it to particular manifestations, such as self-consistency across generation steps, resistance to hallucinated or unsupported content, or outputs that are not maliciously manipulated, while others broaden it into a bundle that also includes fairness, robustness, and misuse-related concerns. A further minority frames it more subjectively, as the degree to which users trust outputs depending on factors like performance or explainability.

**Space of facets.** Papers use the term both as a broad umbrella and as a narrower output-oriented property. Some explicitly divide model trustworthiness into robustness and truthfulness, while others treat it as a multi-dimensional evaluation target rather than a single trait. Alongside the canonical term, papers introduce near-neighbor variants such as trustfulness, clinical trustworthiness, and clinical reliability, each focusing more specifically on credible, safe, or decision-usable outputs in a domain. The main axis of variation is therefore between umbrella uses that collect several model qualities and narrower uses centered on the dependability of particular outputs.

**Space of measurement.** Operationally, papers link trustworthiness to 6 measurement instruments and 3 behavioral indicators. The most frequently named instruments are ASQA, DecodingTrust, ELI5, FINTRUST, and Human evaluation, plus 1 other instrument; together they cover dataset-based TRUST-SCORE evaluations, explicit trustworthiness benchmarks or frameworks, a finance-specific benchmark, and user studies. Among linked behavioral indicators, hallucination is mentioned most often, followed by biased content generation and confidence estimation, although direct measurement evidence is clearest for confidence estimation and for factuality or uncertainty assessments used under a trustfulness facet. These operationalizations mostly track definitions centered on dependable outputs, while broader definitions are reflected more in multi-dimensional benchmark setups than in one single direct measure.

**Links.** Several papers claim a causal relationship from interpretability and explainability to trustworthiness, and some also record a noncausal relation between them, often tying explanations to user confidence or questioning trustworthiness when internal computations are not human-comprehensible. Hallucination is the most recurring failure-side link: papers claim a causal relationship from hallucination to trustworthiness and also treat it as related, with wording that hallucinations undermine trustworthiness or serve as an indicator of it. Other recurring causal claims run from alignment and calibration to trustworthiness, while many additional papers connect trustworthiness to other evaluative dimensions through causal or related links. One paper reports that linguistic similarity correlates with trustworthiness.

## Sources

**[Beyond Accuracy: Evaluating Self-Consistency of Code Large Language Models with IdentityChain](https://proceedings.iclr.cc/paper_files/paper/2024/file/16371a9d5fed65d6d78ca3a7fa6e598c-Paper-Conference.pdf)**
> The quality of a model being reliable and consistent in its understanding and generation, as evidenced by properties like self-consistency.

**[Large Language Models-guided Dynamic Adaptation for Temporal Knowledge Graph Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/0fd17409385ab9304e5019c6a6eb327a-Paper-Conference.pdf) (as "Trustfulness")**
> The reliability and credibility of the model's output results, often compromised by the generation of false or unsupported content.

**[From Scores to Steps: Diagnosing and Improving LLM Performance in Evidence-Based Medical Calculations](https://aclanthology.org/2025.emnlp-main.548.pdf) (as "Clinical trustworthiness")**
> The degree to which model outputs are reliable and safe for clinical use, especially when intermediate reasoning errors could lead to misjudgments.

**[ReEvalMed: Rethinking Medical Report Evaluation by Aligning Metrics with Real-World Clinical Judgment](https://aclanthology.org/2025.emnlp-main.598.pdf) (as "Clinical reliability")**
> The extent to which a generated medical report is trustworthy and valid for use in real-world clinical decision-making.

## Relationships

### Trustworthiness →
- **DecodingTrust** (measurements) — *measured_by*
  > DecodingTrust (Wang et al. [2023]) was among the first to aim for a comprehensive assessment of trustworthiness in GPT models from several perspectives. (Section 2.1)
  - [Enhancing Multiple Dimensions of Trustworthiness in LLMs via Sparse Activation Control](https://proceedings.neurips.cc/paper_files/paper/2024/file/1cb5b3d64bdf3c6642c8d9a8fbecd019-Paper-Conference.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > Besides the metrics mentioned above, we provide user studies in Appendix H to provide additional insights into the model’s trustworthiness improvements. (Section 4.1.2)
  - [Enhancing Multiple Dimensions of Trustworthiness in LLMs via Sparse Activation Control](https://proceedings.neurips.cc/paper_files/paper/2024/file/1cb5b3d64bdf3c6642c8d9a8fbecd019-Paper-Conference.pdf)
- **ASQA** (measurements) — *measured_by*
  > Table 2: LLaMA family evaluated on the ASQA, QAMPARI, and ELI5 datasets. ... TRUST := TRUST-SCORE (Table 2)
  - [Measuring and Enhancing Trustworthiness of LLMs in RAG through Grounded Attributions and Learning to Refuse](https://proceedings.iclr.cc/paper_files/paper/2025/file/4c88827decab6c046b881a2c3a99c76f-Paper-Conference.pdf)
- **QAMPARI** (measurements) — *measured_by*
  > Table 2: LLaMA family evaluated on the ASQA, QAMPARI, and ELI5 datasets. ... TRUST := TRUST-SCORE (Table 2)
  - [Measuring and Enhancing Trustworthiness of LLMs in RAG through Grounded Attributions and Learning to Refuse](https://proceedings.iclr.cc/paper_files/paper/2025/file/4c88827decab6c046b881a2c3a99c76f-Paper-Conference.pdf)
- **ELI5** (measurements) — *measured_by*
  > Table 2: LLaMA family evaluated on the ASQA, QAMPARI, and ELI5 datasets. ... TRUST := TRUST-SCORE (Table 2)
  - [Measuring and Enhancing Trustworthiness of LLMs in RAG through Grounded Attributions and Learning to Refuse](https://proceedings.iclr.cc/paper_files/paper/2025/file/4c88827decab6c046b881a2c3a99c76f-Paper-Conference.pdf)
- **FINTRUST** (measurements) — *measured_by*
  > This paper introduces FINTRUST, a comprehensive benchmark specifically designed for evaluating the trustworthiness of LLMs in finance applications. (Abstract)
  - [FinTrust: A Comprehensive Benchmark of Trustworthiness Evaluation in Finance Domain](https://aclanthology.org/2025.emnlp-main.512.pdf)

### → Trustworthiness
- **Hallucination** (behaviors tasks) — *causes*
  > hallucinations — non-factual or non-sensical information generated by the model — have become challenging barriers to trustworthy and reliable artificial intelligence
  - [Stealth edits to large language models](https://proceedings.neurips.cc/paper_files/paper/2024/file/5c8168a8eca2eb23f6b1f5019371043e-Paper-Conference.pdf)
- **Interpretability and explainability** (constructs) — *causes*
  > one aspect that hinders their deployment is the lack of human-comprehensible understanding of their internal computations. This directly calls into question their reliability and trustworthiness (Introduction).
  - [A Concept-Based Explainability Framework for Large Multimodal Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/f4fba41b554f9aaa013c4062a1c40518-Paper-Conference.pdf)
- **Confidence estimation** (behaviors tasks) — *causes*
  > In this work, we introduce model-internal confidence estimators (MICE), which improve the trustworthiness and safety of language models as tool-calling agents. (Section 8)
  - [MICE for CATs: Model-Internal Confidence Estimation for Calibrating Agents with Tools](https://aclanthology.org/2025.naacl-long.615.pdf)
- **Attribution ability** (constructs) — *causes*
  > Improving the ability of LLMs to both generate relevant summaries and provide accurate attributions has the potential to help improve their usefulness, transparency, and trustworthiness. (Section 2.1)
  - [Unstructured Evidence Attribution for Long Context Query Focused Summarization](https://aclanthology.org/2025.emnlp-main.95.pdf)
- **Honesty** (constructs) — *causes*
  > honesty—defined as consistently delivering accurate information and refraining from deceiving users—plays a crucial role in ensuring the trustworthy deployment of LLMs in real-world applications. (Section 1)
  - [HonestLLM: Toward an Honest and Helpful Large Language Model](https://proceedings.neurips.cc/paper_files/paper/2024/file/0d99a8c048befb6dd6e17d7684adacac-Paper-Conference.pdf)
- **Semantic uncertainty** (constructs) — *causes*
  > "uncertainty can be used to improve the trustworthiness of LLMs"
  - [Kernel Language Entropy: Fine-grained Uncertainty Quantification for LLMs from Semantic Similarities](https://proceedings.neurips.cc/paper_files/paper/2024/file/10c456d2160517581a234dfde15a7505-Paper-Conference.pdf)
- **Reasoning** (constructs) — *causes*
  > our framework leverages the reasoning capabilities of LLMs, enhancing the trustworthiness of clinical predictions. (Abstract)
  - [Reasoning-Enhanced Healthcare Predictions with Knowledge Graph Community Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/cb5a3b4589c1a16f14740396625cbfc8-Paper-Conference.pdf)
- **Multimodal alignment** (constructs) — *causes*
  > This misalignment undermines trustworthiness, posing challenges for reliable applications of these models in high-stakes medical scenarios (Section 1).
  - [HSCR: Hierarchical Self-Contrastive Rewarding for Aligning Medical Vision Language Models](https://aclanthology.org/2025.acl-long.679.pdf)
- **Formal reasoning** (constructs) — *causes*
  > Since our answers are formally provable, it conveys a more solid foundation and trustworthiness than direct NL reasoning. (Section 2)
  - [FANS: Formal Answer Selection for LLM Natural Language Math Reasoning Using Lean4](https://aclanthology.org/2025.emnlp-main.158.pdf)
- **Verbal uncertainty** (constructs) — *causes*
  > Enabling models to either refuse to answer or explicitly express uncertainty has emerged as a promising direction to reduce hallucinations and enhance trustworthiness (Section 1).
  - [UNCLE: Benchmarking Uncertainty Expressions in Long-Form Generation](https://aclanthology.org/2025.emnlp-main.1543.pdf)

### Associated with
- **Privacy preservation** (constructs)
  > We assess the trustworthiness of Med-LVLMs across five dimensions, including trustfulness, fairness, safety, privacy, and robustness. (Abstract)
  - [CARES: A Comprehensive Benchmark of Trustworthiness in Medical Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fde7f40f8ced5735006810534dc66b33-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Robustness** (constructs)
  > We assess the trustworthiness of Med-LVLMs across five dimensions, including trustfulness, fairness, safety, privacy, and robustness. (Abstract)
  - [CARES: A Comprehensive Benchmark of Trustworthiness in Medical Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fde7f40f8ced5735006810534dc66b33-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Truthfulness** (constructs)
  > Specifically, we divide model trustworthiness into robustness and truthfulness.
  - [LLMCBench: Benchmarking Large Language Model Compression for Efficient Deployment](https://proceedings.neurips.cc/paper_files/paper/2024/file/9f4cc62d0632911c63163ea3d9ec19bd-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Alignment** (constructs)
  > identifying units whose outputs meet a user-specified alignment criterion... certifying their corresponding outputs as trustworthy.
  - [Conformal Alignment: Knowing When to Trust Foundation Models with Guarantees](https://proceedings.neurips.cc/paper_files/paper/2024/file/870ccde24673d3970a680bb48496ed63-Paper-Conference.pdf)
- **Safety** (constructs)
  > We assess the trustworthiness of Med-LVLMs across five dimensions, including trustfulness, fairness, safety, privacy, and robustness. (Abstract)
  - [CARES: A Comprehensive Benchmark of Trustworthiness in Medical Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fde7f40f8ced5735006810534dc66b33-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Self-consistency** (measurements)
  > Failure to preserve self-consistency reveals a lack of understanding of the shared semantics underlying natural language and programming language, and therefore undermines the trustworthiness of a model. (ABSTRACT)
  - [Beyond Accuracy: Evaluating Self-Consistency of Code Large Language Models with IdentityChain](https://proceedings.iclr.cc/paper_files/paper/2024/file/16371a9d5fed65d6d78ca3a7fa6e598c-Paper-Conference.pdf)
- **Fairness** (constructs)
  > We assess the trustworthiness of Med-LVLMs across five dimensions, including trustfulness, fairness, safety, privacy, and robustness. (Abstract)
  - [CARES: A Comprehensive Benchmark of Trustworthiness in Medical Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fde7f40f8ced5735006810534dc66b33-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Toxicity** (constructs)
  > These components [truthfulness, toxicity, fairness, robustness, privacy, and machine ethics] collectively contribute to a comprehensive framework for assessing and improving LLM trustworthiness. (Section 2)
  - [More RLHF, More Trust? On The Impact of Preference Alignment On Trustworthiness](https://proceedings.iclr.cc/paper_files/paper/2025/file/732c5757aa5577de9b103332cf7ac0bf-Paper-Conference.pdf)
- **Stereotyping** (constructs)
  > this study investigates how models aligned with general-purpose preference data perform across five trustworthiness verticals: toxicity, stereotypical bias, machine ethics, truthfulness, and privacy.
  - [More RLHF, More Trust? On The Impact of Preference Alignment On Trustworthiness](https://proceedings.iclr.cc/paper_files/paper/2025/file/732c5757aa5577de9b103332cf7ac0bf-Paper-Conference.pdf)
- **Moral reasoning** (constructs)
  > These components [truthfulness, toxicity, fairness, robustness, privacy, and machine ethics] collectively contribute to a comprehensive framework for assessing and improving LLM trustworthiness. (Section 2)
  - [More RLHF, More Trust? On The Impact of Preference Alignment On Trustworthiness](https://proceedings.iclr.cc/paper_files/paper/2025/file/732c5757aa5577de9b103332cf7ac0bf-Paper-Conference.pdf)
- **Human preference alignment** (constructs)
  > Our results demonstrate that RLHF on human preferences doesn’t automatically guarantee trustworthiness, and reverse effects are often observed. (Section 1)
  - [More RLHF, More Trust? On The Impact of Preference Alignment On Trustworthiness](https://proceedings.iclr.cc/paper_files/paper/2025/file/732c5757aa5577de9b103332cf7ac0bf-Paper-Conference.pdf)
- **Biased content generation** (behaviors tasks)
  > However, MLLMs are proven to exhibit significant drawbacks in trustworthiness, such as hallucination (Rawte et al., 2023; Zhang et al., 2024; Wang et al., 2024a), which results in non-factual information (Ji et al., 2023) and biased generations (Zou et al., 2023). (Section 1)
  - [Sample then Identify: A General Framework for Risk Control and Assessment in Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a1722a6bd1023c026a3d6a570fb3af75-Paper-Conference.pdf)
- **Calibration** (constructs)
  > By improving the trustworthiness of LLMs, IB-EDL facilitates their broader adoption in domains requiring high levels of confidence calibration.
  - [Calibrating LLMs with Information-Theoretic Evidential Deep Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/0cbdd1e6613c42fe975337671790f406-Paper-Conference.pdf)
- **Factuality** (constructs)
  > “The evaluation of trustfulness includes assessments of factuality and uncertainty.”
  - [CARES: A Comprehensive Benchmark of Trustworthiness in Medical Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fde7f40f8ced5735006810534dc66b33-Paper-Datasets_and_Benchmarks_Track.pdf)
