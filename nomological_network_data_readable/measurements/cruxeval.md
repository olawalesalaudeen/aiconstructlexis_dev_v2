# CRUXEval
**Type:** Measurement  
**Referenced in:** 12 papers  
**Also known as:** CRUXEVAL, CRUX, CruxEval  

## State of the Field

**What it is.** Across the surveyed work, CRUXEval is most commonly described as a benchmark for code reasoning, understanding, and execution, often framed through predicting a program's input, output, or execution result. Papers also describe input and output prediction tasks, and one paper names these variants CruxEval-I and CruxEval-O. A smaller line of work uses it to validate deductive and abductive code reasoning, and one definition adds concrete benchmark content by describing 800 Python functions created with a generate-and-filter approach using CodeLlama.

**What it is claimed to measure.** Papers link it to 3 constructs and 3 behavioral indicators. The prevailing usage is as a measure of code reasoning, while smaller lines of work use it to measure abductive code reasoning and reasoning more broadly. On the behavioral side, papers use it to measure code output prediction and code input prediction, and one paper reports it as related to code execution by stating that a code execution scenario is based on CRUXEval's output-prediction setup. Overall, the measurement claims stay concentrated on a small cluster of code reasoning and execution-oriented prediction tasks.

**Space of uses.** No measurement instrument is linked to it. In use, papers often place it alongside LiveCodeBench, sometimes specifically the LCB-Exec code execution task, and some pair it with DS-1000 or with other logical reasoning benchmarks. One study also selects CRUXEval and LiveCodeBench together as representative benchmarks for validating deductive and abductive capabilities.

**Concerns raised.** One survey notes that coverage of CRUXEval, along with several other benchmarks, remains incomplete with respect to real-world repository-scale tasks.

## Sources

**[LiveCodeBench: Holistic and Contamination Free Evaluation of Large Language Models for Code](https://proceedings.iclr.cc/paper_files/paper/2025/file/94074dd5a072d28ff75a76dabed43767-Paper-Conference.pdf) (as "CRUXEVAL")**
> A benchmark that measures reasoning and execution abilities through code output prediction.

**[Unveiling the Magic of Code Reasoning through Hypothesis Decomposition and Amendment](https://proceedings.iclr.cc/paper_files/paper/2025/file/eeffa70bcbbd43f6bd067edebc6595e8-Paper-Conference.pdf)**
> A benchmark designed to evaluate code understanding and execution, used in the paper to test both deductive and abductive code reasoning.

**[As Simple as Fine-tuning: LLM Alignment via Bidirectional Negative Feedback Loss](https://proceedings.iclr.cc/paper_files/paper/2025/file/4bc4e9ecd5ae4a75048dc216a770cba1-Paper-Conference.pdf) (as "CRUX")**
> A benchmark used to evaluate a model's reasoning abilities in the context of code generation and understanding.

**[CodeIO: Condensing Reasoning Patterns via Code Input-Output Prediction](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25t/li25t.pdf) (as "CruxEval")**
> CruxEval is a benchmark for evaluating code understanding and execution-result prediction.

## Relationships

### → CRUXEval
- **Code reasoning** (constructs) — *measured_by*
  > These tasks assess the model’s ability to reason about the execution of simple Python programs by asking it to predict the input given the output of a function and vice-versa (Section 4.1).
  - [Prompt Tuning Strikes Back: Customizing Foundation Models with Low-Rank Prompt Adaptation](https://proceedings.neurips.cc/paper_files/paper/2024/file/548551c07a68c8f0a87d67c6167cedb1-Paper-Conference.pdf)
- **Code output prediction** (behaviors tasks) — *measured_by*
  > two code-understanding tasks—namely, CruxEval-I (input prediction) and CruxEval-O (output prediction) from CruxEval benchmark [6] (Section 4.1).
  - [Prompt Tuning Strikes Back: Customizing Foundation Models with Low-Rank Prompt Adaptation](https://proceedings.neurips.cc/paper_files/paper/2024/file/548551c07a68c8f0a87d67c6167cedb1-Paper-Conference.pdf)
- **Code input prediction** (behaviors tasks) — *measured_by*
  > two code-understanding tasks—namely, CruxEval-I (input prediction) and CruxEval-O (output prediction) from CruxEval benchmark [6] (Section 4.1).
  - [Prompt Tuning Strikes Back: Customizing Foundation Models with Low-Rank Prompt Adaptation](https://proceedings.neurips.cc/paper_files/paper/2024/file/548551c07a68c8f0a87d67c6167cedb1-Paper-Conference.pdf)
- **Abductive code reasoning** (constructs) — *measured_by*
  > Deductive code and abductive code reasoning can be regarded as opposite processes; therefore, we selected two identical and representative datasets, CRUXEval (Gu et al., 2024) and LiveCodeBench (Jain et al., 2024), as benchmarks to validate these two capabilities.
  - [Unveiling the Magic of Code Reasoning through Hypothesis Decomposition and Amendment](https://proceedings.iclr.cc/paper_files/paper/2025/file/eeffa70bcbbd43f6bd067edebc6595e8-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > Furthermore, we also evaluate all the models on four logical reasoning benchmarks to verify the impact of these alignment methods on model’s reasoning abilities, including: ... CRUX (Gu et al., 2024) (Code)...
  - [As Simple as Fine-tuning: LLM Alignment via Bidirectional Negative Feedback Loss](https://proceedings.iclr.cc/paper_files/paper/2025/file/4bc4e9ecd5ae4a75048dc216a770cba1-Paper-Conference.pdf)
