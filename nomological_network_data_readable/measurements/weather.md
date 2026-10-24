# Weather
**Type:** Measurement  
**Referenced in:** 7 papers  

## State of the Field

**What it is.** Across papers, the prevailing usage treats Weather as a benchmark dataset for time series forecasting based on weather or climate data. Definitions differ on its contents and granularity: some describe meteorological variables such as temperature, humidity, and wind speed, some describe local climate data from 1,600 U.S. locations between 2010 and 2013 with 11 climate features, and others describe 21 meteorological factors collected every 10 minutes or, more generally, a Weather Forecasting dataset recorded at a 10-minute frequency. One study describes it as "local climate data from 1,600 U.S. locations, between 2010 and 2013" (Are Language Models Actually Useful for Time Series Forecasting?).

**What it is claimed to measure.** Its reported measurement role is narrow rather than spread across many targets. Papers link Weather to 1 behavioral indicator, Time series forecasting, and to no constructs or other measurement instruments. In that recorded relationship, papers use it to measure Time series forecasting, describing it as one of the datasets "widely adopted for evaluating time series forecasting performance" and "extensively used to evaluate time-series forecasting ability of LLM-based and other neural models".

**Space of uses.** Across papers, Weather is usually used in evaluation lists of forecasting datasets rather than on its own, commonly alongside ETTh1, ETTh2, ETTm1, ETTm2, and Electricity or ECL. Papers position it as part of broader real-world or benchmark evaluations, and one study lists it in the suite "ETTh1, ETTh2, ETTm1, ETTm2, Weather, Electricity (ECL), Traffic, and ILI" (Time-LLM: Time Series Forecasting by Reprogramming Large Language Models). Some definitions also place it in long-term forecasting evaluation, including a zero-shot setting in one paper.

## Sources

**[TEMPO: Prompt-based Generative Pre-trained Transformer for Time Series Forecasting](https://proceedings.iclr.cc/paper_files/paper/2024/file/5132940b1bced8a7b28e9695d49d435a-Paper-Conference.pdf)**
> A climate time series dataset used for evaluating long-term forecasting performance in zero-shot settings.

## Relationships

### → Weather
- **Time series forecasting** (behaviors tasks) — *measured_by*
  > We evaluate on 8 benchmark datasets from various domains: ETTh1, ETTh2, ETTm1, ETTm2, Electricity, Weather, Exchange, and ILI, which have been widely adopted for evaluating time series forecasting performance. (Section 4)
  - [Time-FFM: Towards LM-Empowered Federated Foundation Model for Time Series Forecasting](https://proceedings.neurips.cc/paper_files/paper/2024/file/abc1943857a42935ceacff03c524bb44-Paper-Conference.pdf)
