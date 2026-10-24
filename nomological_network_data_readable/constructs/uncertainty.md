# Uncertainty
**Type:** Construct  
**Referenced in:** 19 papers  

## State of the Field

**Definition agreement:** Consensus. Most papers define uncertainty as a model's lack of confidence, ambiguity, or unreliability about its own prediction, judgment, or generated output, often operationalized with output probabilities, entropy, or consistency across generations. One paper instead frames it as unpredictability or information content in internal representations, but that looks like an outlier rather than a substantial alternative usage.

**Space of definitions.** Across the papers, the prevailing usage treats uncertainty as lack of confidence, unreliability, ambiguity, or indecision in a model's prediction or output. Variants of this dominant framing define it over a video sample, a prompt, an answer's correctness, or an evaluator's judgment, and some papers make the operational form explicit by saying it is "typically defined over the different answers of the LLM given the same prompt" or by tying higher uncertainty to a score near 0.5 and many "MAYBE" labels. A smaller line of work shifts the locus from outputs to internals, describing uncertainty as information carried by internal states or as representation-level unpredictability and information content across layers and heads.

**Space of facets.** Papers do not use a single subtype scheme, but they apply the same name at several levels: sample-level prediction ambiguity, prompt-level variability across stochastic generations, token-level confidence signals, evaluator-side judgment uncertainty, and layer- or head-level entropy in representations. Some papers frame it through output patterns such as answer variation or ambiguous score and label distributions, while others frame it through internal confidence or representation entropy, creating a recurring split between uncertainty as an output property and as something inferred from model internals. In adjacent usage, uncertainty appears alongside learnability and diversity in active learning, and it is also related to consistency and calibration in other papers.

**Space of measurement.** Only one measurement instrument is linked to uncertainty, the benchmark Open LLM Leaderboard, and two linked behavioral indicators appear most often: Hallucination and Pairwise comparison. Beyond that single benchmark link, papers operationalize uncertainty with entropy of output probability distributions, disagreement across multiple stochastic generations, token probabilities for evaluator outputs, ambiguous final scores near 0.5 with many "MAYBE" labels, density-based signals from internal states, and truncated matrix entropy across layers and heads; one paper also says uncertainty is used as a metric for token-wise hallucinations. These operationalizations mostly match the dominant definition as low confidence or ambiguity in predictions, though the matrix-entropy formulation extends it to representation-level information content and component importance.

**Links.** Several papers relate uncertainty to calibration, while a few other single-paper links connect it to one benchmark and one additional construct. Across a few papers, hallucination is linked to uncertainty in three recorded ways: it is reported to correlate with uncertainty, to be related to it, and to be measured by uncertainty as a token-wise hallucination metric. One paper claims a causal relationship from pairwise comparison to uncertainty in evaluation, another reports that conformity correlates with uncertainty, and another claims a causal relationship from uncertainty to truthfulness through uncertainty quantification as an approach for eliciting truthful answers.

## Sources

**[Learnability Matters: Active Learning for Video Captioning](https://proceedings.neurips.cc/paper_files/paper/2024/file/43069caa6776eac8bca4bfd74d4a476d-Paper-Conference.pdf)**
> The degree to which the model's predictions are unreliable or ambiguous for a given video sample.

## Relationships

### Uncertainty →
- **Conformal Prediction** (measurements) — *measured_by*
  > “we propose the utilization of conformal prediction [64, 5] as the method to quantify uncertainty in LLMs”
  - [Benchmarking LLMs via Uncertainty Quantification](https://proceedings.neurips.cc/paper_files/paper/2024/file/1bdcb065d40203a00bd39831153338bb-Paper-Datasets_and_Benchmarks_Track.pdf)

### → Uncertainty
- **Hallucination** (behaviors tasks) — *correlates*
  > we go beyond merely understanding knowledge refusal, and find SAE latents, seemingly representing uncertainty, that are predictive of incorrect answers.
  - [Do I Know This Entity? Knowledge Awareness and Hallucinations in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c1c44e46358e0fb94dc94ec495a7fb1a-Paper-Conference.pdf)
- **Pairwise comparison** (behaviors tasks) — *causes*
  > Compared to single-answer grading, pairwise comparison reduces the influence of subjective bias by directly comparing the relative merits of model outputs, thereby mitigating the uncertainty in evaluation to some extent. (Section 4.5)
  - [An Empirical Analysis of Uncertainty in Large Language Model Evaluations](https://proceedings.iclr.cc/paper_files/paper/2025/file/82d3258eb58ceac31744a88005b7ddef-Paper-Conference.pdf)
- **Conformity** (constructs) — *correlates*
  > Notably, we are the first to show that LLMs are more likely to conform when they are more uncertain in their own prediction. (Abstract)
  - [Conformity in Large Language Models](https://aclanthology.org/2025.acl-long.195.pdf)

### Associated with
- **Calibration** (constructs)
  > Recent work (Ren et al., 2023) shows that sequence-level confidence scores remain poorly calibrated with output quality, even after applying length normalization. (Section 2)
  - [UNCERTAINTY-LINE: Length-Invariant Estimation of Uncertainty for Large Language Models](https://aclanthology.org/2025.emnlp-main.400.pdf)
- **Open LLM Leaderboard** (measurements)
  > Despite their usefulness, these leaderboards possess a significant limitation: They do not take into account the uncertainty of LLMs.
  - [Benchmarking LLMs via Uncertainty Quantification](https://proceedings.neurips.cc/paper_files/paper/2024/file/1bdcb065d40203a00bd39831153338bb-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Sparsity** (constructs)
  > In this work, we explore the role of uncertainty as a potential indicator of sparsity within LLMs. (Abstract)
  - [UNComp: Can Matrix Entropy Uncover Sparsity? --- A Compressor Design from an Uncertainty-Aware Perspective](https://aclanthology.org/2025.emnlp-main.209.pdf)
