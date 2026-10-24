# ONION
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

Across the provided sources, ONION is consistently characterized as a black-box, inference-time defense method designed to detect and mitigate backdoor attacks. The method operates by identifying and removing individual words from an input that cause an abnormal increase in perplexity (PPL). One paper notes that this approach is based on the premise that adding "context-independent trigger words compromises textual fluency." This detection is operationalized by using the maximum PPL increase as an anomaly score to pinpoint these word-level triggers. The ultimate goal of this perplexity-based filtering is to "purify" backdoor samples. In the context of evaluating new defenses, ONION is presented as a "commonly used inference-time backdoor defense" method.

## Sources

**[Probe before You Talk: Towards Black-box Defense against Backdoor Unalignment for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c2de4155634a20d903c2ab0b1784886-Paper-Conference.pdf)**
> A black-box backdoor sample detection method that purifies inputs by removing words that cause an abnormal increase in perplexity (PPL), using the maximum PPL increase as an anomaly score.
