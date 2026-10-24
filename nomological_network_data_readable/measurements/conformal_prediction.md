# Conformal Prediction
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** Conformal prediction  

## State of the Field

Across the provided literature, Conformal Prediction is consistently framed as a method for uncertainty quantification. It is described as a technique that constructs a set of outputs or a prediction interval with a statistically guaranteed probability of containing the correct answer. Several sources characterize it as a model-agnostic, distribution-free, and post-hoc method, making it applicable to black-box LLMs. As a measurement instrument, Conformal Prediction is used to operationalize both `Uncertainty estimation` and `Evaluation`. This usage is supported by one study which notes it is "a promising way to quantify the uncertainty of an LLM judge" (Analyzing Uncertainty of LLM-as-a-Judge: Interval Evaluations with Conformal Prediction). The method is also reported to be used to improve reliability in generation and is studied in relation to `Faithfulness`.

## Sources

**[Knowledge Boundary of Large Language Models: A Survey](https://aclanthology.org/2025.acl-long.256.pdf)**
> A method that quantifies uncertainty by identifying a set of outputs with a guaranteed probability of containing the correct answer, applicable to black-box LLMs and used to improve reliability in generation.

**[Analyzing Uncertainty of LLM-as-a-Judge: Interval Evaluations with Conformal Prediction](https://aclanthology.org/2025.emnlp-main.569.pdf) (as "Conformal prediction")**
> A distribution-free, post-hoc uncertainty quantification method that constructs prediction intervals with statistically guaranteed coverage for LLM-based evaluations.

## Relationships

### → Conformal Prediction
- **Uncertainty** (constructs) — *measured_by*
  > “we propose the utilization of conformal prediction [64, 5] as the method to quantify uncertainty in LLMs”
  - [Benchmarking LLMs via Uncertainty Quantification](https://proceedings.neurips.cc/paper_files/paper/2024/file/1bdcb065d40203a00bd39831153338bb-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Confidence estimation** (behaviors tasks) — *measured_by*
  > "we quantify the uncertainty in the predictions using Conformal Prediction with a dynamic sliding window"
  - [Can Transformers Do Enumerative Geometry?](https://proceedings.iclr.cc/paper_files/paper/2025/file/aee2f03ecb2b2c1ea55a43946b651cfd-Paper-Conference.pdf)

### Associated with
- **Calibration** (constructs)
  > “This coverage guarantee requirement can be achieved with the aid of a small amount of held-out calibration data Dcal”
  - [Benchmarking LLMs via Uncertainty Quantification](https://proceedings.neurips.cc/paper_files/paper/2024/file/1bdcb065d40203a00bd39831153338bb-Paper-Datasets_and_Benchmarks_Track.pdf)
