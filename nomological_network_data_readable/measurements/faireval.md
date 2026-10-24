# FairEval
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Papers most commonly treat FairEval as a benchmark dataset for open-ended question answering: definitions describe 80 open-ended questions drawn from a wide array of categories, including common-sense, counterfactual, and coding, with corresponding human annotations. Some papers describe it differently, casting it as a meta-evaluation benchmark for assessing the performance and biases of LLM evaluators, while another paper uses it as a fairness-oriented evaluation procedure adopted to eliminate positional bias.

**What it is claimed to measure.** Across the surveyed work, the recorded measurement claim concentrates on one behavioral indicator: papers use FairEval to measure Open-ended question answering. No construct is linked to it, so the reported use converges on that single behavioral indicator rather than spreading across multiple constructs or behaviors.

**Space of uses.** Papers use FairEval both as a benchmark in model evaluation and as a reference point in evaluator meta-evaluation. One paper evaluates a system on FairEval alongside Topical-Chat, where FairEval represents the open-ended question answer category, another compares evaluator accuracies on FairEval against other meta-evaluation benchmarks, and another adopts it to eliminate positional bias during benchmark assessment; no measurement instrument is formally linked to it.

**Concerns raised.** Positional bias is the only named evaluation issue in the available descriptions: one paper adopts FairEval to eliminate it during benchmark assessment. Another paper cites an average human annotation accuracy of 71.7% as a reference when comparing evaluator performance on FairEval.

## Sources

**[ChatEval: Towards Better LLM-based Evaluators through Multi-Agent Debate](https://proceedings.iclr.cc/paper_files/paper/2024/file/25cc3adf8c85f7c70989cb8a97a691a7-Paper-Conference.pdf)**
> A benchmark dataset for evaluating open-ended question answering, consisting of 80 questions from a wide array of categories and corresponding human annotations.

## Relationships

### → FairEval
- **Open-ended question answering** (behaviors tasks) — *measured_by*
  > We evaluate ChatEval on two benchmarks, FairEval and Topical-Chat which represent the categories of open-ended question answer and dialogue response generation, respectively. (Section 3)
  - [ChatEval: Towards Better LLM-based Evaluators through Multi-Agent Debate](https://proceedings.iclr.cc/paper_files/paper/2024/file/25cc3adf8c85f7c70989cb8a97a691a7-Paper-Conference.pdf)
