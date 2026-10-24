# ToxiGen
**Type:** Measurement  
**Referenced in:** 27 papers  
**Also known as:** Toxigen, TOXIGEN  

## State of the Field

**What it is.** Across papers, ToxiGen is most commonly described as a toxicity benchmark or dataset for evaluating toxic versus neutral generation behavior. Definitions vary in emphasis: some frame it as a benchmark for toxic language generation or safety, while others describe a synthetic or machine-generated dataset for adversarial and implicit hate speech detection. Several papers specify content such as benign or neutral and toxic statements or questions about 13 demographic or minority groups, and one description says it comprises approximately 274k statements evenly split between toxic and non-toxic language. A smaller line of work highlights subset use, for example taking only prompts designed to elicit toxic language.

**What it is claimed to measure.** Across the surveyed work, claims concentrate on safety and toxicity: papers link ToxiGen to 3 constructs in total, most often Safety and Toxicity, with a smaller line using it to measure Harmlessness. Papers also link it to 4 behavioral indicators, most often Harmful content generation, and additionally Harmful content detection, Hate speech detection, and Text generation. The recorded links consistently describe ToxiGen as measuring these targets, and some papers specifically say it evaluates a model's ability to avoid generating toxic content or use it for toxicity detection.

**Space of uses.** Papers often use ToxiGen alongside other safety or toxicity benchmarks, especially RealToxicityPrompts and TruthfulQA, and also with Hendrycks Ethics, MMLU, and XSTest, usually as part of broader evaluation suites. It appears both in dedicated safety evaluations and in broader setups that also assess coding, reasoning, or general capability. Operationalizations differ across papers: some use zero-shot or default evaluation-harness protocols, some report two-way classification accuracy, and others generate continuations and then score the outputs with an external toxicity classifier.

## Sources

**[Monet: Mixture of Monosemantic Experts for Transformers](https://proceedings.iclr.cc/paper_files/paper/2025/file/382c35d1a57c07055dfcba58dd39e012-Paper-Conference.pdf)**
> A toxicity benchmark for evaluating toxic versus neutral generation behavior.

**[Self-Boosting Large Language Models with  Synthetic Preference Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/a4352e2c9d93582898a2a20e1f514e8f-Paper-Conference.pdf) (as "Toxigen")**
> Toxigen, a benchmark used in LLM Harness for toxicity evaluation.

**[CultureInstruct: Curating Multi-Cultural Instructions at Scale](https://aclanthology.org/2025.naacl-long.465.pdf) (as "TOXIGEN")**
> Benchmark for detecting toxic language generation, used to assess whether fine-tuning increases harmful output tendencies.

## Relationships

### → ToxiGen
- **Safety** (constructs) — *measured_by*
  > Results of MOD ... achieving precise control over general capabilities, including safety (Toxigen), coding (Codex), and reasoning (∗ COT).
  - [Decoding-Time Language Model Alignment with Multiple Objectives](https://proceedings.neurips.cc/paper_files/paper/2024/file/57c89126d60c209f48d0e6395c766bb3-Paper-Conference.pdf)
- **Toxicity** (constructs) — *measured_by*
  > We rely on ToxiGen [13] for assessing the model’s toxicity.
  - [Spectral Editing of Activations for Large Language Model Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/684c59d614fe6ae74a3be8c3ef07e061-Paper-Conference.pdf)
- **Harmful content generation** (behaviors tasks) — *measured_by*
  > We take only the prompts designed to produce toxic language (‘hateful’ prompts) and use 500 prompts per group to reduce evaluation costs. (Appendix D).
  - [Unpacking DPO and PPO: Disentangling Best Practices for Learning from Preference Feedback](https://proceedings.neurips.cc/paper_files/paper/2024/file/404df2480b6eef0486a1679e371894b0-Paper-Conference.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > For the open-ended generation tasks, we apply SADI on TriviaQA (Joshi et al., 2017), TruthfulQA (Lin et al., 2022), ToxiGen (Hartvigsen et al., 2022) datasets. (Section 4.1)
  - [Semantics-Adaptive Activation Intervention for LLMs via Dynamic Steering Vectors](https://proceedings.iclr.cc/paper_files/paper/2025/file/c4d26a95fd83f8e590f81c54ae670b5d-Paper-Conference.pdf)
- **Hate speech detection** (behaviors tasks) — *measured_by*
  > ToxiGen (Hartvigsen et al., 2022): A large-scale machine-generated dataset for hate speech detection. (Section 7.1)
  - [ImpScore: A Learnable Metric For Quantifying The Implicitness Level of Sentences](https://proceedings.iclr.cc/paper_files/paper/2025/file/bd6bb13e78da078d8adcabbe6d9ca737-Paper-Conference.pdf)
- **Harmlessness** (constructs) — *measured_by*
  > Our experiments focus on Helpfulness (Alpaca Eval 2.0 (Dubois et al., 2024) and IFEval (Zhou et al., 2023)), Harmlessness (Toxigen (Hartvigsen et al., 2022)), and Coding (MBPP (Austin et al., 2021), HumanEval (Chen et al., 2021)). (Section 4)
  - [AutoMixAlign: Adaptive Data Mixing for Multi-Task Preference Optimization in LLMs](https://aclanthology.org/2025.acl-long.990.pdf)
- **Harmful content detection** (behaviors tasks) — *measured_by*
  > we evaluate general capability using MMLU... and toxicity detection using ToxiGen (Section 3).
  - [When Bad Data Leads to Good Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25d/li25d.pdf)
