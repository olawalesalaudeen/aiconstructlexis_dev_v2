# Open LLM Leaderboard V1
**Type:** Measurement  
**Referenced in:** 3 papers  
**Also known as:** Hugging Face Open LLM Leaderboard v1  

## State of the Field

**What it is.** Across the cited definitions, the prevailing description is of a benchmark suite, or public leaderboard, for evaluating and ranking open-source large language models. Papers describe it as covering question-answering and reasoning tasks and, more specifically, as including MMLU, ARC-Challenge, GSM8K, HellaSwag, Winogrande, and a factual-correctness task, with both log-likelihood and text-generation evaluations.

**What it is claimed to measure.** In the available links, papers do not connect the leaderboard to any constructs or behavioral indicators. Instead, they link it to two other measurement instruments, MMLU and GSM8K, and report these benchmarks as being included in the Hugging Face Open LLM Leaderboard v1.

**Space of uses.** Papers use it as a composite evaluation setting built from multiple benchmarks, most explicitly alongside MMLU and GSM8K, while the definitions also place ARC-Challenge, HellaSwag, Winogrande, and other tasks within the same suite. In Training on the Test Task Confounds Evaluation and Emergence, it is described as "a popular leaderboard that evaluates and ranks models with publicly available weights," framing it as a public ranking venue rather than a single-task test.

## Sources

**[``Give Me BF16 or Give Me Death''? Accuracy-Performance Trade-Offs in LLM Quantization](https://aclanthology.org/2025.acl-long.1304.pdf)**
> Benchmark suite assessing question-answering and reasoning tasks including MMLU, ARC-Challenge, GSM8k, HellaSwag, Winogrande, and TruthfulQA, using both log-likelihood and text-generation evaluations.

**[Training on the Test Task Confounds Evaluation and Emergence](https://proceedings.iclr.cc/paper_files/paper/2025/file/ab8c971c2ccd12bac0ab249f75e2c16d-Paper-Conference.pdf) (as "Hugging Face Open LLM Leaderboard v1")**
> A public leaderboard that evaluates and ranks open-source large language models on a suite of benchmarks.

## Relationships

### Associated with
- **MMLU** (measurements)
  > “These two benchmarks are arguably the most influential of the 2022-2024 period under study. They are also included in the Hugging-Face (HF) Open LLM Leaderboard v1”
  - [Training on the Test Task Confounds Evaluation and Emergence](https://proceedings.iclr.cc/paper_files/paper/2025/file/ab8c971c2ccd12bac0ab249f75e2c16d-Paper-Conference.pdf)
- **GSM8K** (measurements)
  > “These two benchmarks are arguably the most influential of the 2022-2024 period under study. They are also included in the Hugging-Face (HF) Open LLM Leaderboard v1”
  - [Training on the Test Task Confounds Evaluation and Emergence](https://proceedings.iclr.cc/paper_files/paper/2025/file/ab8c971c2ccd12bac0ab249f75e2c16d-Paper-Conference.pdf)
