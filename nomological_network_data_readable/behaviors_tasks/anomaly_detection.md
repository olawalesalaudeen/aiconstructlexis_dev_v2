# Anomaly detection
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Anomaly Detection, Anomaly discrimination  

## State of the Field

**Space of definitions.** Across papers, anomaly detection is treated as deciding whether something is abnormal or out of place, but the task formulation varies rather than converging on one standard. One line of work defines it as predicting whether a sequence of log events indicates abnormal system behavior, another as identifying the out-of-place event after one event type in a series is replaced, and another as judging whether an industrial image contains a defect. Success is correspondingly described as predicting abnormal behavior, finding the incorrect event, or answering whether there is any defect in the object.

**Variants.** The variants studied span different domains and modalities. Papers describe log-based anomaly detection as a time-series prediction task, study sequence anomaly detection where one event type is randomly replaced and the model must identify the altered element, and use an industrial image setting framed as anomaly discrimination or detection by asking whether a sample has defects.

**Space of elicitation and scores.** Anomaly detection is measured by one linked instrument, Human evaluation, which is a human-judgment measure. In the linked paper, human evaluation appears in the context of anomaly and defect-related tasks, with the paper stating that humans excel in those tasks; no other measurement instrument is linked.

**What it is taken as evidence of.** The papers do not link anomaly detection to any construct, so they do not state what construct it is evidence of.

## Sources

**[RuAG: Learned-rule-augmented Generation for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5d7e8991f75f3e5af14edf7aebb5be5e-Paper-Conference.pdf) (as "Anomaly Detection")**
> Predicting whether a sequence of log events indicates abnormal system behavior.

**[LAST SToP for Modeling Asynchronous Time Series](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gupta25a/gupta25a.pdf)**
> Identifying an out-of-place event in a sequence when one event type has been replaced.

**[MMAD: A Comprehensive Benchmark for Multimodal Large Language Models in Industrial Anomaly Detection](https://proceedings.iclr.cc/paper_files/paper/2025/file/d91ffbe9c126765755ff52d36b715683-Paper-Conference.pdf) (as "Anomaly discrimination")**
> Judging whether an industrial image contains a defect or anomaly.
