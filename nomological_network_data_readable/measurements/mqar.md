# MQAR
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** Multi-query associative recall  

## State of the Field

**What it is.** Most papers treat MQAR as Multi-Query Associative Recall, a benchmark or task for assessing whether a model can retrieve values associated with keys from a context. Definitions commonly describe contexts with multiple key-value pairs, query positions, and sometimes distractors; a smaller line of work states the task more operationally as identifying multiple query tokens in a sequence and outputting, for each, the value token that followed the key's first appearance. One description also frames it as a synthetic diagnostic benchmark for retrieving multiple associative key-value pairs from context.

**What it is claimed to measure.** Papers link MQAR to one behavioral indicator and one construct. The prevailing claim is that it measures Key-value retrieval, with the task described as predicting the value associated with the corresponding key at query positions; a smaller use treats it as measuring Long-context understanding, where papers say a model's recall capability is assessed using MQAR. The measurement claims therefore center on one named retrieval indicator and one named construct, rather than a wide set of targets.

**Space of uses.** No measurement instrument is linked to it. Across papers, MQAR is positioned as a standalone benchmark, task, or diagnostic check for associative recall capabilities, including formulations with multiple recalls in a single forward pass at varying sequence positions and descriptions that involve training a small-parameter model from scratch on a specific dataset.

## Sources

**[Rodimus*: Breaking the Accuracy-Efficiency Trade-Off with Efficient Attentions](https://proceedings.iclr.cc/paper_files/paper/2025/file/59c08508131c3a50991f42dae7f69e1c-Paper-Conference.pdf)**
> The Multi-Query Associative Recall task, a benchmark designed to assess a model's ability to retrieve values associated with keys from a context.

**[Zoology: Measuring and Improving  Recall in Efficient Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/448fc91f669c15d10364ee01d512cc10-Paper-Conference.pdf) (as "Multi-query associative recall")**
> The observable task of identifying multiple query tokens within a sequence and, for each, recalling and outputting the value token that followed its first appearance as a key.

## Relationships

### → MQAR
- **Key-value retrieval** (behaviors tasks) — *measured_by*
  > Multi-Query Associative Recall (MQAR) Task. (Figure 1)
  - [Rodimus*: Breaking the Accuracy-Efficiency Trade-Off with Efficient Attentions](https://proceedings.iclr.cc/paper_files/paper/2025/file/59c08508131c3a50991f42dae7f69e1c-Paper-Conference.pdf)
- **Associative recall ability** (constructs) — *measured_by*
  > The model’s recall capability is assessed using the MQAR Task (See Appendix D.7), as described in Arora et al. (2024a). (Figure 1)
  - [Rodimus*: Breaking the Accuracy-Efficiency Trade-Off with Efficient Attentions](https://proceedings.iclr.cc/paper_files/paper/2025/file/59c08508131c3a50991f42dae7f69e1c-Paper-Conference.pdf)
