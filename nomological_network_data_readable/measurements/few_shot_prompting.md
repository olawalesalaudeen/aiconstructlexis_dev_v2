# Few-shot prompting
**Type:** Measurement  
**Referenced in:** 11 papers  

## State of the Field

Across the provided literature, few-shot prompting is predominantly defined as a method for a model to learn a task from a small number of input-output examples provided directly in the prompt, without any updates to the model's weights. This technique is also referred to as "in-context learning (ICL)" in some work. It is most commonly operationalized as an evaluation procedure where task demonstrations, such as "(question, SQL) pairs," are prepended to the input to guide the model's response. The number of examples varies across studies, with papers mentioning the use of one, two, three, five, and up to fifty examples. The method is used to elicit task performance in areas like arithmetic, classification, and reasoning, and to assess a model's in-context learning capability. Few-shot prompting is frequently studied in contrast to zero-shot and chain-of-thought prompting. While most papers frame it as an evaluation method, a less common perspective treats it as an "interactive behavior" where models use in-context analogies to guide reasoning. The provided data also indicates it is related to iterative refinement and is reported to cause both generalization and input regurgitation.

## Sources

**[Amortizing intractable inference in large language models](https://proceedings.iclr.cc/paper_files/paper/2024/file/bc667ac84ef58f2b5022da97a465cbab-Paper-Conference.pdf)**
> Attempting to learn a task from a few input-output examples provided in the prompt, without updating model weights.

## Relationships

### → Few-shot prompting
- **Error detection** (behaviors tasks) — *measured_by*
  > "We provide the model with two examples for each error type to guide its classification decisions."
  - [Are We Done with MMLU?](https://aclanthology.org/2025.naacl-long.262.pdf)
- **Robustness** (constructs) — *measured_by*
  > "We investigate the robustness of several LLMs in zero-shot, few-shot, and chain-of-thought prompting."
  - [FactEval: Evaluating the Robustness of Fact Verification Systems in the Era of Large Language Models](https://aclanthology.org/2025.naacl-long.534.pdf)

### Associated with
- **Self-correction** (behaviors tasks)
  > we propose SELF-DEBUGGING, where we teach the large language model to debug its own predicted code via few-shot prompting.
  - [Teaching Large Language Models to Self-Debug](https://proceedings.iclr.cc/paper_files/paper/2024/file/2460396f2d0d421885997dd1612ac56b-Paper-Conference.pdf)
- **APPS** (measurements)
  > Task: Few-shot prompting, Prompt Dataset: APPS (Table 4).
  - [DeFT: Decoding with Flash Tree-attention for Efficient Tree-structured LLM Inference](https://proceedings.iclr.cc/paper_files/paper/2025/file/a6df53f082619d02b9fad64a022e5de3-Paper-Conference.pdf)
