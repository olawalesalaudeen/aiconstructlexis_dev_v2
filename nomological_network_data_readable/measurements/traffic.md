# Traffic
**Type:** Measurement  
**Referenced in:** 7 papers  
**Also known as:** Traffic dataset  

## State of the Field

**What it is.** Across the surveyed work, the prevailing usage treats Traffic as a time series benchmark dataset for evaluating forecasting models. Most definitions describe road traffic data, often as hourly traffic volume in California, while some instead describe hourly road occupancy rates from the California transportation department on San Francisco Bay area freeways; one definition further specifies 862 sensors. Papers also frame it as a standard or real-world benchmark, and some definitions place it in broader cross-domain forecasting evaluation.

**What it is claimed to measure.** Measurement claims are concentrated rather than spread across many targets: Traffic is linked to 1 construct and no behavioral indicators. The only recorded measurement claim is that papers use it to measure Zero-shot generalization, with the evidence describing a comparison of zero-shot performance of pre-trained models on the Traffic dataset.

**Space of uses.** Papers most commonly use Traffic alongside other forecasting benchmarks, especially ETTh1, ETTh2, ETTm1, ETTm2, and Electricity or ECL. It is typically presented as one dataset within larger evaluation suites for forecasting, including long-term forecasting, and some work also includes it in broader pre-training collections rather than only downstream evaluation.

## Sources

**[TEMPO: Prompt-based Generative Pre-trained Transformer for Time Series Forecasting](https://proceedings.iclr.cc/paper_files/paper/2024/file/5132940b1bced8a7b28e9695d49d435a-Paper-Conference.pdf)**
> A time series dataset containing road traffic volume records, used for evaluating forecasting performance across domains.

**[From News to Forecast: Integrating Event Analysis in LLM-Based Time Series Forecasting with Reflection](https://proceedings.neurips.cc/paper_files/paper/2024/file/6aef8bffb372096ee73d98da30119f89-Paper-Conference.pdf) (as "Traffic dataset")**
> A time series dataset of hourly traffic volume in California, used to evaluate forecasting models.

## Relationships

### → Traffic
- **Zero-shot generalization** (constructs) — *measured_by*
  > Comparison of zero-shot performance of pre-trained models. The input sequence length is set to 96 for the Traffic dataset
  - [LangTime: A Language-Guided Unified Model for Time Series Forecasting with Proximal Policy Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/niu25e/niu25e.pdf)
