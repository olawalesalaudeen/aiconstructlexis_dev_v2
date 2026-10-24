# Probabilistic forecasting
**Type:** Behavior  
**Referenced in:** 4 papers  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage is to treat probabilistic forecasting as generating a full distribution over future numerical values in a time series rather than a single point estimate. The formulations are closely aligned: one paper defines the goal as estimating “the joint distribution of future observations given the historical ones, P(XF | XH)” (Context is Key: A Benchmark for Forecasting with Essential Textual Information), while another asks models to “output a probabilistic forecast of length 64” (Fourier Head: Helping Large Language Models Learn Complex Probability Distributions).

**Variants.** The papers differ mainly in the setting and representation of that distribution. One formulation targets future time steps from historical observations, including tasks where accurate predictions require integrating numerical data with natural language contextual information, while another describes fixed-length forecasts and next-value prediction through quantized values and a learned categorical distribution over the next value.

**Space of elicitation and scores.** No measurement instrument is linked to this behavior.

**What it is taken as evidence of.** No construct is linked to this behavior as something it indicates.

## Sources

**[Fourier Head: Helping Large Language Models Learn Complex Probability Distributions](https://proceedings.iclr.cc/paper_files/paper/2025/file/d3e38662377dcce6203f4bb91b2a9b03-Paper-Conference.pdf)**
> Producing a distribution over future numerical values in a time series rather than a single point estimate.
