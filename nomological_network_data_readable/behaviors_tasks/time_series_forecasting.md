# Time series forecasting
**Type:** Behavior  
**Referenced in:** 19 papers  
**Also known as:** Time-series forecasting, Context-aided forecasting, Few-shot forecasting, Zero-shot forecasting  

## State of the Field

**Space of definitions.** Across the definitions, the prevailing usage is predicting future values or data points in a sequence from historical observations. Papers differ mainly in horizon and input form: some frame it as forecasting the next value, others the next n values or the next H timestamps, and some explicitly state the series may be univariate or multivariate or that past observations are provided in context. A smaller line of work narrows the task to forecasts that change when relevant text is added to the numerical history, and one prompt formulation asks the model to "continue the following sequence without producing any additional text."

**Variants.** Variants are commonly framed by horizon, data regime, and available context. Papers mention long-term and short-term forecasting, multivariate and univariate forecasting, few-shot forecasting with only a small fraction of training data, including 5% or 10% training data, and zero-shot forecasting where training is done on source datasets or domains and testing is done on a different target dataset with none of its training data. Another variant is context-aided forecasting, where textual context accompanies the numerical history and papers report improved forecasts with access to that context, including better constraint satisfaction and gains in regions of interest.

**Space of elicitation and scores.** Papers link this behavior to 4 measurement instruments, all through measured_by relations: Weather, ETTh1, ETTm1, and M4. Weather is the most recurrent linked instrument. The evidence describes Weather, ETTh1, and ETTm1 as benchmark or real-world datasets used to evaluate forecasting performance, while M4 appears as a competition setting used in transfer learning.

**What it is taken as evidence of.** Across 6 linked constructs, in-context learning is the only one directly treated as measured by this behavior, and it is also claimed to have a causal relationship to forecasting. The remaining linked constructs are presented through claimed causal relationships, including contextual understanding, HTML understanding, knowledge transfer, and multimodal alignment, plus 1 other construct. Papers therefore do not converge on a single construct that the behavior reflects.

## Sources

**[TEMPO: Prompt-based Generative Pre-trained Transformer for Time Series Forecasting](https://proceedings.iclr.cc/paper_files/paper/2024/file/5132940b1bced8a7b28e9695d49d435a-Paper-Conference.pdf)**
> The observable task of predicting future data points in a sequence based on historical observations.

**[Density estimation with LLMs: a geometric investigation of in-context learning trajectories](https://proceedings.iclr.cc/paper_files/paper/2025/file/380afe1a245a3b2134010620eae88865-Paper-Conference.pdf) (as "Time-series forecasting")**
> The task of predicting future values in a sequence of numerical data points based on past observations provided in context.

**[Context is Key: A Benchmark for Forecasting with Essential Textual Information](https://raw.githubusercontent.com/mlresearch/v267/main/assets/williams25a/williams25a.pdf) (as "Context-aided forecasting")**
> Generating forecasts that change when relevant textual context is provided in addition to the numerical history.

**[Context-Alignment: Activating and Enhancing LLMs Capabilities in Time Series](https://proceedings.iclr.cc/paper_files/paper/2025/file/e1de63ec74f40d3234c4e053f3528e18-Paper-Conference.pdf) (as "Few-shot forecasting")**
> The task of performing time series forecasting using only a small fraction of the available training data.

**[Context-Alignment: Activating and Enhancing LLMs Capabilities in Time Series](https://proceedings.iclr.cc/paper_files/paper/2025/file/e1de63ec74f40d3234c4e053f3528e18-Paper-Conference.pdf) (as "Zero-shot forecasting")**
> The task of performing time series forecasting on a target dataset without having been trained on any of its data, typically by training on a different source dataset.

## Relationships

### Time series forecasting →
- **Weather** (measurements) — *measured_by*
  > We evaluate on 8 benchmark datasets from various domains: ETTh1, ETTh2, ETTm1, ETTm2, Electricity, Weather, Exchange, and ILI, which have been widely adopted for evaluating time series forecasting performance. (Section 4)
  - [Time-FFM: Towards LM-Empowered Federated Foundation Model for Time Series Forecasting](https://proceedings.neurips.cc/paper_files/paper/2024/file/abc1943857a42935ceacff03c524bb44-Paper-Conference.pdf)
- **ETTh1** (measurements) — *measured_by*
  > We evaluate on 8 benchmark datasets from various domains: ETTh1, ETTh2, ETTm1, ETTm2, Electricity, Weather, Exchange, and ILI, which have been widely adopted for evaluating time series forecasting performance. (Section 4)
  - [Time-FFM: Towards LM-Empowered Federated Foundation Model for Time Series Forecasting](https://proceedings.neurips.cc/paper_files/paper/2024/file/abc1943857a42935ceacff03c524bb44-Paper-Conference.pdf)
- **ETTm1** (measurements) — *measured_by*
  > We evaluate on 8 benchmark datasets from various domains: ETTh1, ETTh2, ETTm1, ETTm2, Electricity, Weather, Exchange, and ILI, which have been widely adopted for evaluating time series forecasting performance. (Section 4)
  - [Time-FFM: Towards LM-Empowered Federated Foundation Model for Time Series Forecasting](https://proceedings.neurips.cc/paper_files/paper/2024/file/abc1943857a42935ceacff03c524bb44-Paper-Conference.pdf)
- **M4** (measurements) — *measured_by*
  > We conduct the transfer learning between the M3 and M4 competitions, both of which encompass abundant temporal variation patterns but follow different data distributions. (Section 4.2)
  - [AutoTimes: Autoregressive Time Series Forecasters via Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/dcf88cbc8d01ce7309b83d0ebaeb9d29-Paper-Conference.pdf)

### → Time series forecasting
- **In-context learning** (constructs) — *causes*
  > DICL projects trajectories into a disentangled feature space before performing zero-shot forecasting using a pre-trained LLM and in-context learning.
  - [Zero-shot Model-based Reinforcement Learning using Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5fc1e662bd63c4a70b95088ba5d08cb8-Paper-Conference.pdf)
- **Knowledge transfer** (constructs) — *causes*
  > We attribute the performance gains of TIME-FFM to the valid knowledge transferability across domains. (Section 4.3)
  - [Time-FFM: Towards LM-Empowered Federated Foundation Model for Time Series Forecasting](https://proceedings.neurips.cc/paper_files/paper/2024/file/abc1943857a42935ceacff03c524bb44-Paper-Conference.pdf)
- **Contextual understanding** (constructs) — *causes*
  > In these scenarios, Context-Alignment paradigm provides a robust contextual prior, enabling accurate logical and structural understanding that enhances the potential of LLMs for cross-domain TS processing. (Section 4.5)
  - [Context-Alignment: Activating and Enhancing LLMs Capabilities in Time Series](https://proceedings.iclr.cc/paper_files/paper/2025/file/e1de63ec74f40d3234c4e053f3528e18-Paper-Conference.pdf)

### Associated with
- **Few-shot task performance** (behaviors tasks)
  > Based on the settings in Zhou et al. (2023), we present few-shot forecasting for 10% time steps in training datasets. (Section 4.2)
  - [TEST: Text Prototype Aligned Embedding to Activate LLM's Ability for Time Series](https://proceedings.iclr.cc/paper_files/paper/2024/file/a4352e2c9d93582898a2a20e1f514e8f-Paper-Conference.pdf)
