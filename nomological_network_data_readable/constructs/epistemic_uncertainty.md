# Epistemic uncertainty
**Type:** Construct  
**Referenced in:** 6 papers  
**Also known as:** Epistemic Uncertainty, Weight uncertainty  

## State of the Field

**Definition agreement:** Complementary. Most papers define epistemic uncertainty as model-specific uncertainty caused by lack of knowledge, often emphasizing that it is reducible with more data and formalized as uncertainty in the model’s parameters or weight posterior. A few frame it instead as uncertainty in the model’s predictions or add ambiguity, so the definitions foreground different aspects and levels of the same phenomenon rather than using incompatible meanings.

**Space of definitions.** Across the papers, the prevailing usage treats epistemic uncertainty as reducible, model-specific uncertainty about a model's own prediction, arising from ambiguity or lack of knowledge rather than token-level likelihood alone. Definitions in this vein describe it as the model not knowing something, or as lack of model knowledge within the model's parameters. A smaller line of work instead uses a parameter-focused definition, describing epistemic uncertainty, or weight uncertainty, as uncertainty in model parameters or parameter estimates, represented by a posterior over weights and diminishing with more data.

**Space of facets.** Papers systematize the concept mainly through contrasts and alternate labels. One recurring contrast separates epistemic uncertainty from token-level or lexical confidence, with next-token likelihood described as lexical confidence rather than epistemic uncertainty. Some authors use parameter uncertainty and weight uncertainty for the parameter-focused version of the construct, and one paper relates it to Parametric Knowledge Boundary by treating it as model-specific lack of knowledge.

**Space of measurement.** No measurement instrument is linked to this construct. Operationalization is instead described in text: one paper treats differences among kpred and kconf quantities as a form of epistemic uncertainty, while parameter-focused papers model it through uncertainty over parameters or weights, using a posterior or predictive posterior over weights or parameters. It is linked to 2 behavioral indicators, Hallucination and Out-of-distribution detection, and 3 constructs, Calibration, Generation diversity, and Robustness, but papers connect these as outcomes or related properties rather than as direct measures.

**Links.** Papers mainly connect epistemic uncertainty to downstream generation and uncertainty-estimation outcomes. One paper claims a causal relationship from it, in the form of accounting for weight uncertainty, to Hallucination, Calibration, and Robustness, reporting reduced hallucinations, improved calibration, and more robust language generation when weight uncertainty is accounted for. Another paper claims a causal relationship from it to Out-of-distribution detection, describing epistemic uncertainty as an improved indicator, and one paper relates it to Generation diversity through a report that uncertainty-aware MBR performance is highly correlated with prediction diversity across combined models.

## Sources

**[Confidence Elicitation: A New Attack Vector for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/04bb76a98d9f32226b3beba7bd26a51f-Paper-Conference.pdf)**
> The model's uncertainty about its own prediction that reflects ambiguity or lack of knowledge rather than token-level likelihood alone.

**[Scalable Bayesian Learning with posteriors](https://proceedings.iclr.cc/paper_files/paper/2025/file/1f9f4ff2ebebb298d88e3fe0e10162db-Paper-Conference.pdf) (as "Epistemic Uncertainty")**
> Uncertainty in the model parameters that diminishes with more data, serving as an indicator of model uncertainty in predictions.

**[Uncertainty-Aware Decoding with Minimum Bayes Risk](https://proceedings.iclr.cc/paper_files/paper/2025/file/1588dc2b2ef339d6e4c47d212e36f991-Paper-Conference.pdf) (as "Weight uncertainty")**
> The uncertainty associated with the model's parameter estimates, modeled as a posterior distribution over the weights.

## Relationships

### Epistemic uncertainty →
- **Hallucination** (behaviors tasks) — *causes*
  > Overall, we find strong evidence that accounting for weight uncertainty can improve decoding and reduce hallucinations when finetuning and pretraining from scratch, even without computational overhead. (Introduction)
  - [Uncertainty-Aware Decoding with Minimum Bayes Risk](https://proceedings.iclr.cc/paper_files/paper/2025/file/1588dc2b2ef339d6e4c47d212e36f991-Paper-Conference.pdf)
- **Robustness** (constructs) — *causes*
  > Overall, we find that the uncertainty-aware variant of MBR proposed in this paper leads to better and more robust language generation. (Section 5)
  - [Uncertainty-Aware Decoding with Minimum Bayes Risk](https://proceedings.iclr.cc/paper_files/paper/2025/file/1588dc2b2ef339d6e4c47d212e36f991-Paper-Conference.pdf)

### Associated with
- **Generation diversity** (constructs)
  > The performance of uncertainty-aware MBR is highly correlated with the prediction diversity across the combined models. (Introduction)
  - [Uncertainty-Aware Decoding with Minimum Bayes Risk](https://proceedings.iclr.cc/paper_files/paper/2025/file/1588dc2b2ef339d6e4c47d212e36f991-Paper-Conference.pdf)
- **Out-of-distribution detection** (behaviors tasks)
  > “epistemic uncertainty providing an improved indicator for out-of-distribution detection.”
  - [Scalable Bayesian Learning with posteriors](https://proceedings.iclr.cc/paper_files/paper/2025/file/1f9f4ff2ebebb298d88e3fe0e10162db-Paper-Conference.pdf)
