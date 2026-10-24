# vLLM
**Type:** Measurement  
**Referenced in:** 6 papers  

## State of the Field

Across the provided literature, vLLM is consistently characterized as a system for large language model inference, primarily used for evaluation purposes. The prevailing usage is as a standardized baseline to ensure "fair comparison" in GPU-based inference evaluations. A more specific application described is its use as an "inference engine" to measure performance metrics, particularly inference latencies such as time-to-first-token (TTFT) and time-per-output-token (TPOT). The operational context for these measurements is sometimes specified, for instance, using "FP16 precision on an NVIDIA H100 GPU". One source also notes that vLLM is "popularly used to deploy small to medium sized commercial LLMs," which contextualizes its selection as a standard for measurement.

## Sources

**[DS-LLM: Leveraging Dynamical Systems to Enhance Both Training and Inference of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/8e016430ec3b2f02222ac8f9f93db2eb-Paper-Conference.pdf)**
> A GPU inference serving system used as the baseline for fair comparison in inference evaluation.
