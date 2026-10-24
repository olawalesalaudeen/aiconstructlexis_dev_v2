# Code efficiency
**Type:** Construct  
**Referenced in:** 3 papers  

## State of the Field

The ability of a model to generate code that is not only correct but also optimized for performance and computational resources.

## Sources

**[SelfCodeAlign: Self-Alignment for Code Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/72da102da91a8042a0b2aa968429a9f9-Paper-Conference.pdf)**
> The ability of a model to generate code that is not only correct but also optimized for performance and computational resources.

## Relationships

### Code efficiency →
- **Mercury** (measurements) — *measured_by*
  > To fill the gap, we present Mercury, the first code efficiency benchmark for Code LLMs. (Abstract)
  - [Mercury: A Code Efficiency Benchmark for Code Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/1df1df43b58845650b8dada00fca9772-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Factuality** (constructs) — *correlates*
  > Extensive experiments demonstrate that fine-tuning LLMs with EFFIINSTRUCT improves both correctness and efficiency. For example, the fine-tuned Qwen2.5-Coder-7B-Instruct increases the pass@1 from 44.8% and 76.2% to 57.7% and 78.0% on EffiBench and HumanEvalPlus, while also reducing the average execution time from 0.31 seconds to 0.16 seconds — representing a 48.4% reduction in execution time overhead on EffiBench. (Section 1)
  - [EffiCoder: Enhancing Code Generation in Large Language Models through Efficiency-Aware Fine-tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25as/huang25as.pdf)
- **EvoEval** (measurements) — *measured_by*
  > Code efficiency and pass@1 of Qwen2.5-Coder-7B-Instruct and deepseek-coder-6.7b-instruct fine-tuned using SFT with the EFFIINSTRUCT for the EvoEval dataset.
  - [EffiCoder: Enhancing Code Generation in Large Language Models through Efficiency-Aware Fine-tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25as/huang25as.pdf)
- **DS-1000** (measurements) — *measured_by*
  > We evaluate the efficiency and pass@1 of LLM-generated code for the DS-1000 tasks using Qwen2.5-Coder-7B-Instruct and deepseek-coder-6.7b-instruct, both in their original form and fine-tuned with .
  - [EffiCoder: Enhancing Code Generation in Large Language Models through Efficiency-Aware Fine-tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25as/huang25as.pdf)

### Associated with
- **Functional correctness** (constructs)
  > existing benchmarks have mainly focused on the functional correctness of generated code, neglecting the importance of their computational efficiency. (Abstract)
  - [Mercury: A Code Efficiency Benchmark for Code Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/1df1df43b58845650b8dada00fca9772-Paper-Datasets_and_Benchmarks_Track.pdf)
