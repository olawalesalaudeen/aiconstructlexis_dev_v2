# Feedback Bench
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** FeedbackBench  

## State of the Field

**What it is.** Across the definitions, papers treat Feedback Bench as a benchmark for evaluating judge models or LLM-as-a-judge. The fuller description presents it as the official test set of Feedback Collection, with 1K responses to evaluate and instructions and scoring rubrics that do not overlap with the training set, while a briefer description frames it as a benchmark for single-instance rating tasks.

**What it is claimed to measure.** In the reported relationships, papers use it to measure one construct, Evaluation ability, and no behavioral indicators are linked to it. The claims therefore converge on a single construct rather than spreading across many: one paper reports measuring evaluation ability by checking correlation with GPT-4 across customized score rubrics on Feedback Bench.

**Space of uses.** Papers use it as an evaluation benchmark for judging tasks, including single-rating evaluation. One study places it alongside MT Bench, Vicuna Bench, and Flask Eval when measuring correlation with GPT-4 across multiple benchmarks, which positions it as one component of a broader evaluation setup.

## Sources

**[TRACT: Regression-Aware Fine-tuning Meets Chain-of-Thought Reasoning for LLM-as-a-Judge](https://aclanthology.org/2025.acl-long.147.pdf)**
> A fine-grained evaluation benchmark for LLM-as-a-judge with 1K test responses, designed to assess scoring accuracy under non-overlapping rubrics from training data.

**[Direct Judgement Preference Optimization](https://aclanthology.org/2025.emnlp-main.103.pdf) (as "FeedbackBench")**
> A benchmark for evaluating judge models on single-instance rating tasks.

## Relationships

### → Feedback Bench
- **Evaluation ability** (constructs) — *measured_by*
  > Furthermore, measuring correlation with GPT-4 with 1222 customized score rubrics across four benchmarks (MT Bench, Vicuna Bench, Feedback Bench, Flask Eval) shows similar trends, bolstering PROMETHEUS’s capability as an evaluator LLM. (Abstract)
  - [Prometheus: Inducing Fine-Grained Evaluation Capability in Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/803485352e61e3ebf41221e4776c9fd4-Paper-Conference.pdf)
