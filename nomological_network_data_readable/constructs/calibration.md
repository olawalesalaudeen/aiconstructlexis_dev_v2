# Calibration
**Type:** Construct  
**Referenced in:** 113 papers  
**Also known as:** Miscalibration, Confidence calibration, QA-calibration, Belief calibration, Verbalized calibration, Linguistic calibration, Probability calibration, Disambiguation reliability, Uncertainty calibration, Faithful calibration  

## State of the Field

**Definition agreement:** Consensus. Most papers define calibration as the alignment between a model's expressed confidence or predicted probabilities and the empirical accuracy, correctness, truthfulness, or frequency of those outputs, sometimes specialized to particular tasks, claims, or reasoning steps. A few papers instead describe probability matching to human or target-model distributions, abstention decisions, or the mere ability to express uncertainty, but these are outliers rather than a substantial alternative use, so the overall pattern is consensus.

**Space of definitions.** Across papers, the prevailing usage describes calibration as agreement between a model's predicted probabilities or expressed confidence and its actual correctness or empirical accuracy, often in the form that items assigned confidence p should be correct about p of the time. Most variants keep that reference to observed correctness, but shift the object from class predictions to generated claims, beliefs, relevance judgments, survey option probabilities, or disambiguation accuracy. A smaller line broadens or changes the target: some papers define calibration around contextual or prior-probability bias correction in prompting and in-context learning, one introduces a group-conditional notion in generative QA, and a few focus on verbalized, linguistic, uncertainty, or faithful calibration, where expressed uncertainty is compared with intrinsic uncertainty or with the truthfulness of statements.

**Space of facets.** Papers systematize the construct most clearly by separating standard average-case calibration from QA-calibration, which requires confidence to match accuracy within question-answer groups through a fixed embedding map. Closely related names usually narrow the same basic idea to different targets, such as confidence calibration for predictions, belief calibration for statement truthfulness, and linguistic or faithful calibration for natural-language uncertainty expression. Some papers also mark boundary cases: miscalibration is the inverse case, disambiguation reliability is framed as self-assessed confidence versus actual disambiguation accuracy, and one paper contrasts calibration with distribution alignment because the latter compares probabilities over the full label set rather than only the predicted label probability.

**Space of measurement.** Operationally, papers link calibration to 16 measurement instruments and 10 behavioral indicators. The most frequent named instruments are benchmark datasets, especially MMLU, StrategyQA, AG News, ARC-Challenge, and ARC-Easy, and papers also use other QA, reasoning, classification, and multimodal benchmarks. The usual procedure is to compare confidence scores, logits, token probabilities, verbalized probabilities, or claim-level and step-level confidence estimates against empirical correctness, commonly with expected calibration error and sometimes maximum calibration error, while a smaller line evaluates calibrated confidence intervals or compares expressed uncertainty with intrinsic uncertainty or human annotations. These operationalizations mostly match the dominant confidence-versus-correctness definition, though some extend it to within-group QA calibration, verbalized uncertainty, or probability matching to a target model or survey distribution.

**Links.** Papers relate calibration to 17 constructs overall, and the most recurrent link is to overconfidence: papers describe it as related to overconfidence, report that overconfident predictions co-occur with high expected calibration error, and record causal claims in both directions between overconfidence and calibration. Several papers also claim causal relationships from calibration to reliability, factuality, and hallucination, while other papers claim a causal relationship from confidence estimation to calibration. Beyond these, papers report additional related links and causal links for several other constructs and behaviors.

## Sources

**[Batch Calibration: Rethinking Calibration for In-Context Learning and Prompt Engineering](https://proceedings.iclr.cc/paper_files/paper/2024/file/003e438cf04e3caf0a5c908495e484fe-Paper-Conference.pdf)**
> The degree to which a model's predicted probabilities reflect true likelihoods of correctness, particularly in the presence of contextual biases from prompts or in-context examples.

**[Gen-Z: Generative Zero-Shot Text Classification with Contextualized Label Descriptions](https://proceedings.iclr.cc/paper_files/paper/2024/file/af7cc9e2366b8f8837a6ef339810277a-Paper-Conference.pdf) (as "Miscalibration")**
> The degree to which a model's output probabilities are poorly aligned with the true likelihood of correctness, leading to unreliable confidence scores.

**[Selective Generation for Controllable Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/5a6815122f533193a022cbc41786c1cc-Paper-Conference.pdf) (as "Confidence calibration")**
> The degree to which a model's expressed confidence in its predictions aligns with its actual correctness.

**[QA-Calibration of Language Model Confidence Scores](https://proceedings.iclr.cc/paper_files/paper/2025/file/cd96cb9a239c37b39dbf34f3f5a4c56f-Paper-Conference.pdf) (as "QA-calibration")**
> A latent property where a model's confidence scores match its actual accuracy conditional on specific groups of question-and-answer pairs, ensuring reliability across different topics or user contexts.

**[A Probabilistic Framework for LLM Hallucination Detection via Belief Tree Propagation](https://aclanthology.org/2025.naacl-long.158.pdf) (as "Belief calibration")**
> The extent to which the model's expressed confidence in a statement matches the statement's actual truthfulness.

**[UNCLE: Benchmarking Uncertainty Expressions in Long-Form Generation](https://aclanthology.org/2025.emnlp-main.1543.pdf) (as "Linguistic calibration")**
> The ability of a model to express graded levels of confidence in its statements, often through numerical scores embedded in natural language.

**[Not Your Typical Government Tipline: LLM-Assisted Routing of Environmental Protection Agency Citizen Tips](https://aclanthology.org/2025.emnlp-main.1788.pdf) (as "Probability calibration")**
> The degree to which the model's confidence scores align with actual classification accuracy, enabling reliable threshold-based decision-making in operational settings.

**[RoDEval: A Robust Word Sense Disambiguation Evaluation Framework for Large Language Models](https://aclanthology.org/2025.emnlp-main.864.pdf) (as "Disambiguation reliability")**
> The alignment between a model’s self-assessed confidence in its disambiguation ability and its actual accuracy, reflecting cognitive awareness and trustworthiness of outputs.

**[Alleviating Hallucinations from Knowledge Misalignment in Large Language Models via Selective Abstention Learning](https://aclanthology.org/2025.acl-long.1199.pdf) (as "Uncertainty calibration")**
> The model's ability to accurately represent its own uncertainty, particularly in distinguishing between known and unknown information, to guide generation.

**[MetaFaith: Faithful Natural Language Uncertainty Expression in LLMs](https://aclanthology.org/2025.emnlp-main.1505.pdf) (as "Faithful calibration")**
> The degree to which a model's linguistically expressed uncertainty aligns with its intrinsic uncertainty, reflecting a trustworthy and accurate communication of confidence.

## Relationships

### Calibration →
- **MMLU** (measurements) — *measured_by*
  > Table 2 shows the performance of the posthoc calibrators on MMLU and BigBench datasets.
  - [QA-Calibration of Language Model Confidence Scores](https://proceedings.iclr.cc/paper_files/paper/2025/file/cd96cb9a239c37b39dbf34f3f5a4c56f-Paper-Conference.pdf)
- **Reliability diagrams** (measurements) — *measured_by*
  > The reliability diagram displays the curve (s, ˆr(s)) for s ∈[0, 1]. If g is perfectly calibrated, then ˆr(s) = s for s ∈[0, 1] (Section 3.1).
  - [Calibrating Expressions of Certainty](https://proceedings.iclr.cc/paper_files/paper/2025/file/66b35d2e8d524706f39cc21f5337b002-Paper-Conference.pdf)
- **Expected calibration error** (measurements) — *measured_by*
  > "Table 6 shows that the expected calibration error (He et al., 2022) is reduced when NASA is applied to Mistral."
  - [Correcting Negative Bias in Large Language Models through Negative Attention Score Alignment](https://aclanthology.org/2025.naacl-long.503.pdf)
- **Hallucination** (behaviors tasks) — *causes*
  > Calibrating language models (LMs) is crucial, as it plays a vital role in detecting and mitigating hallucinations of LMs as well as building more trustworthy models. (ABSTRACT)
  - [LitCab: Lightweight Language Model Calibration over Short- and Long-form Responses](https://proceedings.iclr.cc/paper_files/paper/2024/file/3815d62554efad0878fad6c1c30ffda0-Paper-Conference.pdf)
- **StrategyQA** (measurements) — *measured_by*
  > "We evaluate the quality of confidence estimates across five types of reasoning tasks: 1) Commonsense Reasoning on two benchmarks, Sports Understanding (SportUND) ... StrategyQA (Geva et al., 2021)"
  - [Can LLMs Express Their Uncertainty? An Empirical Evaluation of Confidence Elicitation in LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/6733cf15e10e2cd1d59af033c3bb8507-Paper-Conference.pdf)
- **Reliability** (constructs) — *causes*
  > Confidence calibration is a critical aspect in developing reliable and trustworthy language models (Nguyen & O’Connor, 2015; Guo et al., 2017; Minderer et al., 2021).
  - [On Calibration of LLM-based Guard Models for Reliable Content Moderation](https://proceedings.iclr.cc/paper_files/paper/2025/file/a99f732df9b668284b449da0214a3286-Paper-Conference.pdf)
- **Hedging** (behaviors tasks) — *causes*
  > Qualitatively, we find that a LACIE-trained model hedges more when uncertain and adopts implicit cues to signal certainty when it is correct, such as using an authoritative tone or including details. (Abstract)
  - [LACIE: Listener-Aware Finetuning for Calibration in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/4b8eaf3bcdc105423a972ed90eb07217-Paper-Conference.pdf)
- **Abstention** (behaviors tasks) — *causes*
  > Finally, finetuning with our listener-aware method leads to an emergent increase in model abstention (e.g. saying “I don’t know”) for answers that are likely to be wrong, trading recall for precision. (Abstract)
  - [LACIE: Listener-Aware Finetuning for Calibration in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/4b8eaf3bcdc105423a972ed90eb07217-Paper-Conference.pdf)
- **TriviaQA** (measurements) — *measured_by*
  > We then finetune three different LLMs (Mistral-7B, Llama3-8B, Llama3-70B) with LACIE, and show that the models resulting from this multi-agent optimization are better calibrated on TriviaQA with respect to a simulated listener. (Abstract)
  - [LACIE: Listener-Aware Finetuning for Calibration in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/4b8eaf3bcdc105423a972ed90eb07217-Paper-Conference.pdf)
- **Decision-making under uncertainty** (constructs) — *causes*
  > LLMs, without proper calibration, can be overly confident in their responses... Such pitfalls make them unlikely to make reliable decisions under uncertainty.
  - [DeLLMa: Decision Making Under Uncertainty with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/6cd3ac24cdb789beeaa9f7145670fcae-Paper-Conference.pdf)
- **BIG-bench** (measurements) — *measured_by*
  > Table 2 shows the performance of the posthoc calibrators on MMLU and BigBench datasets.
  - [QA-Calibration of Language Model Confidence Scores](https://proceedings.iclr.cc/paper_files/paper/2025/file/cd96cb9a239c37b39dbf34f3f5a4c56f-Paper-Conference.pdf)
- **SST-2** (measurements) — *measured_by*
  > We first demonstrate that LLama3 is well-calibrated for the SST2, AG-News, and StrategyQA tasks, as illustrated in Table 1 and Figure 3. (Section 5.1)
  - [Confidence Elicitation: A New Attack Vector for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/04bb76a98d9f32226b3beba7bd26a51f-Paper-Conference.pdf)
- **AG News** (measurements) — *measured_by*
  > We first demonstrate that LLama3 is well-calibrated for the SST2, AG-News, and StrategyQA tasks, as illustrated in Table 1 and Figure 3. (Section 5.1)
  - [Confidence Elicitation: A New Attack Vector for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/04bb76a98d9f32226b3beba7bd26a51f-Paper-Conference.pdf)
- **Factuality** (constructs) — *causes*
  > Numerous studies have explored ways to improve factuality at various stages, such as continual pre-training (Chang et al., 2024), uncertainty calibration (Cohen et al., 2024), factuality alignment (Tian et al., 2024), and contrastive decoding (Section 2).
  - [Alleviating Hallucinations from Knowledge Misalignment in Large Language Models via Selective Abstention Learning](https://aclanthology.org/2025.acl-long.1199.pdf)
- **MedMCQA** (measurements) — *measured_by*
  > We evaluate the ECE and Accuracy using four diverse datasets: MMLU, MedMCQA, OpenBookQA, Arc-Challenge... (Section 6.1)
  - [Restoring Calibration for Aligned Large Language Models: A Calibration-Aware Fine-Tuning Approach](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xiao25b/xiao25b.pdf)
- **OpenBookQA** (measurements) — *measured_by*
  > We evaluate the ECE and Accuracy using four diverse datasets: MMLU, MedMCQA, OpenBookQA, Arc-Challenge... (Section 6.1)
  - [Restoring Calibration for Aligned Large Language Models: A Calibration-Aware Fine-Tuning Approach](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xiao25b/xiao25b.pdf)
- **ARC-Challenge** (measurements) — *measured_by*
  > We evaluate the ECE and Accuracy using four diverse datasets: MMLU, MedMCQA, OpenBookQA, Arc-Challenge... (Section 6.1)
  - [Restoring Calibration for Aligned Large Language Models: A Calibration-Aware Fine-Tuning Approach](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xiao25b/xiao25b.pdf)
- **PPI++** (measurements) — *measured_by*
  > When uncertainty quantification does matter, PPI and PPI++ provided calibrated confidence intervals across all labeled set sizes, and produced tighter confidence intervals than the baseline (Figure 6).
  - [AutoEval Done Right: Using Synthetic Data for Model Evaluation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/boyeau25a/boyeau25a.pdf)
- **Temperature scaling** (measurements) — *measured_by*
  > We use Temperature Scaling (TS) (Guo et al., 2017): Introduces a temperature parameter T to scale the logits, minimizing ECE on a validation set to achieve better calibration.
  - [Restoring Calibration for Aligned Large Language Models: A Calibration-Aware Fine-Tuning Approach](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xiao25b/xiao25b.pdf)
- **Logit lens** (measurements) — *measured_by*
  > To understand how calibration varies across layers, we take inspiration from the approach by Logit Lens (nostalgebraist, 2020), computing accuracy at different layers of the transformer.
  - [Calibration Across Layers: Understanding Calibration Evolution in LLMs](https://aclanthology.org/2025.emnlp-main.742.pdf)
- **MMMU-Pro** (measurements) — *measured_by*
  > We adopt the MMMU-Pro benchmark (Yue et al., 2024) to measure calibration on complex, multidisciplinary image understanding and reasoning problems. (Section 3.1.1)
  - [Seeing is Believing, but How Much? A Comprehensive Analysis of Verbalized Calibration in Vision-Language Models](https://aclanthology.org/2025.emnlp-main.74.pdf)
- **MathVista** (measurements) — *measured_by*
  > To evaluate calibration under visual mathematical reasoning, we employ MathVista (Lu et al., 2024) and MathVision (Wang et al., 2024). (Section 3.1.1)
  - [Seeing is Believing, but How Much? A Comprehensive Analysis of Verbalized Calibration in Vision-Language Models](https://aclanthology.org/2025.emnlp-main.74.pdf)
- **MathVision** (measurements) — *measured_by*
  > To evaluate calibration under visual mathematical reasoning, we employ MathVista (Lu et al., 2024) and MathVision (Wang et al., 2024). (Section 3.1.1)
  - [Seeing is Believing, but How Much? A Comprehensive Analysis of Verbalized Calibration in Vision-Language Models](https://aclanthology.org/2025.emnlp-main.74.pdf)
- **Verbal uncertainty** (constructs) — *causes*
  > "Band et al. (2024) introduce linguistic calibration, enabling models to express uncertainty at different levels (e.g., I am 70% sure)."
  - [UNCLE: Benchmarking Uncertainty Expressions in Long-Form Generation](https://aclanthology.org/2025.emnlp-main.1543.pdf)
- **Visual reasoning** (constructs) — *correlates*
  > "visual reasoning models (i.e., thinking with images) consistently exhibit better calibration"
  - [Seeing is Believing, but How Much? A Comprehensive Analysis of Verbalized Calibration in Vision-Language Models](https://aclanthology.org/2025.emnlp-main.74.pdf)

### → Calibration
- **Overconfidence** (constructs) — *causes*
  > Fine-tuned large language models (LLMs) often exhibit overconfidence, particularly when trained on small datasets, resulting in poor calibration and inaccurate uncertainty estimates.
  - [Calibrating LLMs with Information-Theoretic Evidential Deep Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/0cbdd1e6613c42fe975337671790f406-Paper-Conference.pdf)
- **Confidence estimation** (behaviors tasks) — *causes*
  > Bayesian methods, with their inherent ability to estimate uncertainty, serve as potent tools to mitigate overconfidence and enhance calibration. (Section ABSTRACT)
  - [Bayesian Low-rank Adaptation for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/07c256a163a7559186ec1c71e95b9ec9-Paper-Conference.pdf)
- **In-context learning** (constructs) — *causes*
  > current exemplar selection strategies, by largely ignoring calibration, risk scenarios where gains in accuracy are achieved at the expense of degradation in calibration (Zhang et al., 2024b).
  - [COM-BOM: Bayesian Exemplar Search for Efficiently Exploring the Accuracy-Calibration Pareto Frontier](https://aclanthology.org/2025.emnlp-main.1027.pdf)
- **World knowledge** (constructs) — *causes*
  > Our research reveals that LLMs’ prior knowledge causes potential poor calibration due to the ubiquitous presence of known data in real-world fine-tuning, which appears harmful for calibration. (Abstract)
  - [Towards Objective Fine-tuning: How LLMs' Prior Knowledge Causes Potential Poor Calibration?](https://aclanthology.org/2025.acl-long.722.pdf)

### Associated with
- **Conformal Prediction** (measurements)
  > “This coverage guarantee requirement can be achieved with the aid of a small amount of held-out calibration data Dcal”
  - [Benchmarking LLMs via Uncertainty Quantification](https://proceedings.neurips.cc/paper_files/paper/2024/file/1bdcb065d40203a00bd39831153338bb-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Honesty** (constructs)
  > At its most basic level, the AI should provide accurate information, be well-calibrated, and express appropriate levels of uncertainty rather than misleading users. (Section 2)
  - [HonestLLM: Toward an Honest and Helpful Large Language Model](https://proceedings.neurips.cc/paper_files/paper/2024/file/0d99a8c048befb6dd6e17d7684adacac-Paper-Conference.pdf)
- **Uncertainty** (constructs)
  > Recent work (Ren et al., 2023) shows that sequence-level confidence scores remain poorly calibrated with output quality, even after applying length normalization. (Section 2)
  - [UNCERTAINTY-LINE: Length-Invariant Estimation of Uncertainty for Large Language Models](https://aclanthology.org/2025.emnlp-main.400.pdf)
- **Claim decomposition** (behaviors tasks)
  > This approach involves extracting distinct claims from the generated content, estimating the confidence associated with each claim, and then analyzing the calibration at the claim level. (Section 1)
  - [LitCab: Lightweight Language Model Calibration over Short- and Long-form Responses](https://proceedings.iclr.cc/paper_files/paper/2024/file/3815d62554efad0878fad6c1c30ffda0-Paper-Conference.pdf)
- **Explanation generation** (behaviors tasks)
  > We observe that RG leads to more conservative confidence estimates and lower expected calibration error (2.1 with RG vs. 2.9 without RG), which indicate that it enables more accurate identification of knowledge gaps via reasoning (Section 5.2).
  - [MediQ: Question-Asking LLMs and a Benchmark for Reliable Interactive Clinical Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/32b80425554e081204e5988ab1c97e9a-Paper-Conference.pdf)
- **Self-verification** (behaviors tasks)
  > "prior works have shown self-verification is not particularly effective for reasoning tasks and is often noisy and ill-calibrated"
  - [AutoMix: Automatically Mixing Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/ecda225cb187b40ea8edc1f46b03ffda-Paper-Conference.pdf)
- **Future prediction** (behaviors tasks)
  > We evaluate components of DeLLMa, including the calibration of its state forecasting approach and a human agreement study to assess its utility elicitation method. (Section 1).
  - [DeLLMa: Decision Making Under Uncertainty with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/6cd3ac24cdb789beeaa9f7145670fcae-Paper-Conference.pdf)
- **Metacognition** (constructs)
  > If a model’s self-predictions are calibrated with respect to its ground-truth behavior, this suggests the model takes into account information about itself that was not in its training data. This would provide further evidence of introspection. (Section 3.3)
  - [Looking Inward: Language Models Can Learn About Themselves by Introspection](https://proceedings.iclr.cc/paper_files/paper/2025/file/0a6059857ae5c82ea9726ee9282a7145-Paper-Conference.pdf)
- **Distribution alignment** (constructs)
  > Our proposed distribution alignment setting differs from calibration in that it compares the probabilities over the entire label set whereas calibration only compares the predicted label probability to the ground truth. (Section 2.3)
  - [Large Language Models Do Multi-Label Classification Differently](https://aclanthology.org/2025.emnlp-main.126.pdf)
- **Trustworthiness** (constructs)
  > By improving the trustworthiness of LLMs, IB-EDL facilitates their broader adoption in domains requiring high levels of confidence calibration.
  - [Calibrating LLMs with Information-Theoretic Evidential Deep Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/0cbdd1e6613c42fe975337671790f406-Paper-Conference.pdf)
- **Internal consistency** (constructs)
  > This measure offers a straightforward method to gauge the level of internal consistency, serving as a useful indicator of the output’s correctness (i.e., calibration), without requiring additional training. (Section 3.2)
  - [Calibrating Reasoning in Language Models with Internal Consistency](https://proceedings.neurips.cc/paper_files/paper/2024/file/d037fd021c9aace128b8ce25001cdb6c-Paper-Conference.pdf)
- **Visual robustness** (constructs)
  > By explicitly linking confidence calibration to visual robustness, this method reduces over-reliance on language priors. (Section 1)
  - [Be Confident: Uncovering Overfitting in MLLM Multi-Task Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25r/huang25r.pdf)
- **Multiple-choice question answering** (behaviors tasks)
  > The calibration error of an LLM is typically evaluated on a multiple-choice question and its corresponding correct answer, which can be formalized as an input-label pair (x, y)... (Section 3)
  - [Restoring Calibration for Aligned Large Language Models: A Calibration-Aware Fine-Tuning Approach](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xiao25b/xiao25b.pdf)
- **Reasoning** (constructs)
  > “program-aided reasoning approaches, where LLMs utilize code representation, generally exhibit superior calibration compared to standard text-based reasoning methods that rely on CoT”
  - [Code to Think, Think to Code: A Survey on Code-Enhanced Reasoning and Reasoning-Driven Code Intelligence in LLMs](https://aclanthology.org/2025.emnlp-main.130.pdf)
