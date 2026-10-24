# RealTimeQA
**Type:** Measurement  
**Referenced in:** 3 papers  
**Also known as:** REALTIME QA  

## State of the Field

**What it is.** Across the papers, the prevailing framing is a time-sensitive question-answering benchmark or dataset about real-time events, developed after LLM knowledge cut-off dates to avoid data contamination. One paper further describes it as multiple-choice, while another emphasizes that it requires periodic manual updates.

**What it is claimed to measure.** Across the papers, no constructs or behavioral indicators are explicitly linked to RealTimeQA. One paper does describe it as being used to evaluate zero-shot knowledge recall in continual learning settings, but that use is not tied to a named construct or behavioral indicator.

**Space of uses.** Papers mainly position it as one testbed among other time-sensitive QA benchmarks. One study discusses it alongside FreshQA and TAQA as benchmarks designed to avoid data contamination, and another uses it as a second testbed of downstream tasks for evaluating zero-shot knowledge recall.

**Concerns raised.** The recurring concern is maintaining its post-cutoff, time-sensitive character. One paper notes that it requires periodic manual updates and that it "stopped its manual updates in January 2024," making it likely that newer LLMs with later knowledge cut-off dates will have been exposed during pre-training to publicly available web sources related to the benchmark.

## Sources

**[UnSeenTimeQA: Time-Sensitive Question-Answering Beyond LLMs' Memorization](https://aclanthology.org/2025.acl-long.94.pdf)**
> A time-sensitive question-answering benchmark developed after LLM knowledge cut-off dates to avoid data contamination, requiring periodic manual updates.

**[Learn to Memorize: Scalable Continual Learning in Semiparametric Models with Mixture-of-Neighbors Induction Memory](https://aclanthology.org/2025.acl-long.1385.pdf) (as "REALTIME QA")**
> A multiple-choice question answering dataset about real-time events used to evaluate zero-shot knowledge recall in continual learning settings.
