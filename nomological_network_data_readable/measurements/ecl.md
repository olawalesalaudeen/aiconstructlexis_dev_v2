# ECL
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** Electricity dataset, ECL dataset, Electricity  

## State of the Field

**What it is.** Across definitions, the prevailing usage treats ECL, often called Electricity, as a benchmark electricity-consumption time series dataset. Most descriptions say it contains hourly data for 321 clients or customers, sometimes specifying 2012 to 2014 and a 1-hour recording frequency, and papers place it in real-world or benchmark suites for long-term forecasting. A smaller line of work describes ECL as a subset of the Electricity dataset with hourly kilowatt-hour consumption from 19 clients, and one paper describes Electricity as a dataset for evaluating self-healing adaptation strategies across different data distributions.

**What it is claimed to measure.** Most papers report ECL as a benchmark for evaluating long-term time series forecasting, forecasting models, or forecasting accuracy. One paper instead describes Electricity as being used to evaluate the performance of self-healing adaptation strategies across different data distributions. No construct is linked to it, and no behavioral indicator is linked to it.

**Space of uses.** Papers usually use ECL as one member of a broader benchmark suite rather than as a standalone instrument. It appears alongside ETTh1, Weather, Traffic, Solar, and ETTh2 in evaluation lists, with other benchmark datasets also used in the same suites. In one paper, Electricity is also part of a five-dataset set for testing self-healing adaptation strategies across different data distributions.

## Sources

**[Self-Healing Machine Learning: A Framework for Autonomous Adaptation in Real-World Environments](https://proceedings.neurips.cc/paper_files/paper/2024/file/4a86ec12e94ef1fe306362e7bdcd5894-Paper-Conference.pdf) (as "Electricity dataset")**
> Electricity [55] is a dataset used to evaluate the performance of self-healing adaptation strategies across different data distributions.

**[AutoTimes: Autoregressive Time Series Forecasters via Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/dcf88cbc8d01ce7309b83d0ebaeb9d29-Paper-Conference.pdf)**
> A real-world benchmark dataset for long-term time series forecasting that captures hourly electricity consumption data from 321 clients.

**[FSTLLM: Spatio-Temporal LLM for Few Shot Time Series Forecasting](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jiang25a/jiang25a.pdf) (as "ECL dataset")**
> Subset of the Electricity dataset comprising hourly electricity consumption from 19 clients, used for evaluating forecasting accuracy in a different domain.

**[Are Language Models Actually Useful for Time Series Forecasting?](https://proceedings.neurips.cc/paper_files/paper/2024/file/6ed5bf446f59e2c6646d23058c86424b-Paper-Conference.pdf) (as "Electricity")**
> A benchmark dataset containing the hourly electricity consumption of 321 customers from 2012 to 2014.
