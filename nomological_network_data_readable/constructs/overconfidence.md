# Overconfidence
**Type:** Construct  
**Referenced in:** 36 papers  
**Also known as:** Over-confidence, Overconfident generation  

## State of the Field

**Definition agreement:** Consensus. Most papers define overconfidence as a model property where stated confidence or predictive probability is too high relative to actual correctness or accuracy, often described as confident wrong predictions, poor calibration, or overly peaked probabilities on OOD or uncertain cases. One paper instead uses overconfidence for a strategic tendency to underestimate risks or an opponent, but that is a clear outlier rather than a substantial alternative usage.

**Space of definitions.** Across the papers, the prevailing usage treats overconfidence as a tendency, latent property, or trait in which a model's stated or predicted confidence exceeds its actual accuracy or correctness. This shared framing appears in work on posterior probabilities, verbalized confidence, assertive answers beyond the model's knowledge, and predictions on incorrect, unfamiliar, ambiguous, or out-of-distribution inputs; several papers also say it is heightened after fine-tuning or instruction-tuning, and one says auto-regressive decoding and exposure bias exacerbate it. A smaller line of work narrows the term to overconfident generation, especially self-consistent hallucinations, and one paper uses the same label for a different game-theoretic behavior, overlooking risks in pursuit of greater rewards.

**Space of facets.** The papers specialize the construct by context and manifestation rather than through a shared taxonomy. Some frame it at the level of confidence estimates or calibration, others at the level of output distributions as overly peaked probabilities, and others at the level of generation, such as self-consistent hallucinations or assertive answers on unfamiliar topics; ambiguous inputs and out-of-distribution inputs are also named settings where it appears. The clearest disagreement is whether the term names a calibration mismatch between confidence and accuracy, which is the prevalent usage, or a strategic risk-taking pattern in game play, which appears as a minority usage.

**Space of measurement.** Operationalization is mostly direct rather than instrument-based: no measurement instrument is linked to overconfidence, while papers link it to three behavioral indicators, Hallucination, Confidence correction, and Confidence estimation, and to five constructs, most often Calibration. Papers operationalize it through confidence-correctness gaps, such as accuracy in confidence bins falling below stated confidence, posterior probabilities concentrated at very high confidence with high ECE, or output distributions kept from becoming overly peaked with a maximum-entropy term; temperature scaling and label smoothing are also described as ways to reduce or penalize it. One paper also uses an overconfidence quantity to measure Knowledge boundary awareness, defined as the fraction of incorrect answers where a method was confident about self-knowledge.

**Links.** Several papers place overconfidence in a network around calibration and hallucination. A few papers claim a causal relationship from Overconfidence to Hallucination, including hallucinated answers to unanswerable questions, and one paper claims a causal relationship from Overconfidence to Context faithfulness; one paper also claims a causal relationship from Overconfidence to Calibration, stating that it often manifests as poor calibration. In the other direction, papers claim causal relationships from Factuality, World knowledge, and Calibration to Overconfidence, report that Calibration correlates with Overconfidence and is related to it, and relate Confidence estimation and Confidence correction to Overconfidence.

## Sources

**[It's Never Too Late: Fusing Acoustic Information into Large Language Models for Automatic Speech Recognition](https://proceedings.iclr.cc/paper_files/paper/2024/file/0231de0eff264c0639a4c43728b8b55b-Paper-Conference.pdf) (as "Over-confidence")**
> A latent property where the model's confidence in its predictions exceeds its actual accuracy, particularly exacerbated during auto-regressive decoding due to exposure bias.

**[Bayesian Low-rank Adaptation for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/07c256a163a7559186ec1c71e95b9ec9-Paper-Conference.pdf)**
> A dispositional trait where a model's predicted confidence is systematically higher than its actual accuracy, particularly after fine-tuning.

**[INSIDE: LLMs' Internal States Retain the Power of Hallucination Detection](https://proceedings.iclr.cc/paper_files/paper/2024/file/0d1986a61e30e5fa408c81216a616e20-Paper-Conference.pdf) (as "Overconfident generation")**
> A latent tendency of a model to produce highly confident but incorrect outputs, particularly in cases where multiple consistent hallucinations are generated, evading standard consistency checks.

## Relationships

### Overconfidence →
- **Calibration** (constructs) — *causes*
  > Fine-tuned large language models (LLMs) often exhibit overconfidence, particularly when trained on small datasets, resulting in poor calibration and inaccurate uncertainty estimates.
  - [Calibrating LLMs with Information-Theoretic Evidential Deep Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/0cbdd1e6613c42fe975337671790f406-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks) — *causes*
  > tuning LLMs on data containing unseen knowledge can encourage models to be overconfident, leading to hallucinations (Section 2).
  - [Aligning Large Language Models to Follow Instructions and Hallucinate Less via Effective Data Filtering](https://aclanthology.org/2025.acl-long.804.pdf)
- **Context faithfulness** (constructs) — *causes*
  > overconfidence, resulting in a substantial setback for the context-faithfulness of LLMs. (Section 1)
  - [Is Factuality Enhancement a Free Lunch For LLMs? Better Factuality Can Lead to Worse Context-Faithfulness](https://proceedings.iclr.cc/paper_files/paper/2025/file/660d0ed5885662219244b6e44aba8fe3-Paper-Conference.pdf)

### → Overconfidence
- **Factuality** (constructs) — *causes*
  > factuality enhancement can lead LLMs to become overly confident in their parametric knowledge (Section 1)
  - [Is Factuality Enhancement a Free Lunch For LLMs? Better Factuality Can Lead to Worse Context-Faithfulness](https://proceedings.iclr.cc/paper_files/paper/2025/file/660d0ed5885662219244b6e44aba8fe3-Paper-Conference.pdf)
- **World knowledge** (constructs) — *causes*
  > Specifically, data aligned with LLMs’ prior knowledge would induce overconfidence, while new knowledge improves calibration. (Abstract)
  - [Towards Objective Fine-tuning: How LLMs' Prior Knowledge Causes Potential Poor Calibration?](https://aclanthology.org/2025.acl-long.722.pdf)

### Associated with
- **Confidence estimation** (behaviors tasks)
  > The performance of Med-LVLMs in uncertainty estimation is unsatisfactory, revealing a poor understanding of their medical knowledge limits. Additionally, these models tend to exhibit overconfidence, thereby increasing the risk of misdiagnoses. (Sec 1)
  - [CARES: A Comprehensive Benchmark of Trustworthiness in Medical Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fde7f40f8ced5735006810534dc66b33-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Confidence correction** (behaviors tasks)
  > This suggests that even after the model has become sufficiently accurate, it undergoes a phase of overconfidence before recalibrating its predictions. We refer to this as a “confidence correction phase” in the final layers.
  - [Calibration Across Layers: Understanding Calibration Evolution in LLMs](https://aclanthology.org/2025.emnlp-main.742.pdf)
- **Knowledge boundary awareness** (constructs)
  > Overconfidence is a fraction of incorrect answers where the method was confident about self-knowledge reflecting how often the method incorrectly assumes that the model possesses the required knowledge when it does not.
  - [Adaptive Retrieval Without Self-Knowledge? Bringing Uncertainty Back Home](https://aclanthology.org/2025.acl-long.319.pdf)
