# Last letter concatenation
**Type:** Measurement  
**Referenced in:** 8 papers  
**Also known as:** LLC, LastLetter, Last Letter Concatenation, LastLetterConcatenation, LastLetterConcat  

## State of the Field

**What it is.** Across papers, the prevailing description is of a symbolic or reasoning benchmark in which a model concatenates the last letters of words or names in an input sequence. Definitions vary between a reasoning task, dataset, benchmark test set, string-manipulation benchmark, and text-processing benchmark, but they converge on the same format: taking the last letters from a series of words, sometimes specified as a 4-word sequence or a set of names, for example 'Amy Brown' to 'yn'. A smaller line of work describes it as a string-manipulation benchmark used to evaluate algorithmic reasoning and length generalization in verification settings.

**What it is claimed to measure.** Papers link it to two constructs and no behavioral indicators. The prevailing usage is to measure symbolic reasoning, with papers explicitly grouping it under symbolic reasoning benchmarks or datasets; a smaller usage treats it as measuring more general reasoning, as in one paper's reference to 'standard reasoning datasets (GSM8K, CSQA, and LLC)'. The reported measurement claims are concentrated on those two constructs rather than spread across many.

**Space of uses.** Papers commonly use it inside broader evaluation bundles, most often alongside Coin Flip within symbolic reasoning suites, and in one study alongside GSM8K and CSQA among standard reasoning datasets. They position it as a benchmark test set for reporting accuracies, as a frequently used task for examining symbolic reasoning performance, and in one paper as part of algorithmic-task evaluation. No measurement instrument is linked to it.

## Sources

**[Efficient Contextual LLM Cascades through Budget-Constrained Policy Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/a6deba3b2408af45b3f9994c2152b862-Paper-Conference.pdf) (as "LLC")**
> Last Letter Concatenation, a reasoning task and dataset where the model must concatenate the last letters of words in a given name.

**[Self-Guiding Exploration for Combinatorial Problems](https://proceedings.neurips.cc/paper_files/paper/2024/file/eb9120be0dcaac0aec66d2e75deb69dd-Paper-Conference.pdf) (as "LastLetter")**
> A benchmark test set used to evaluate symbolic reasoning performance.

**[Generative Verifiers: Reward Modeling as Next-Token Prediction](https://proceedings.iclr.cc/paper_files/paper/2025/file/214308a2d5e3f83ef9ad2739e1cbc46d-Paper-Conference.pdf) (as "Last Letter Concatenation")**
> A string-manipulation benchmark used to evaluate algorithmic reasoning and length generalization in verification settings.

**[Don't Take Things Out of Context: Attention Intervention for Enhancing Chain-of-Thought Reasoning in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/9eaeccb40e16ba5ae4e25e9fdb2fea19-Paper-Conference.pdf)**
> A symbolic reasoning task used to test whether a model can follow letter-based transformation rules across inputs.

**[Chain of Thoughtlessness? An Analysis of CoT in Planning](https://proceedings.neurips.cc/paper_files/paper/2024/file/3365d974ce309623bd8151082d78206c-Paper-Conference.pdf) (as "LastLetterConcatenation")**
> A text-processing benchmark where the model concatenates the last letters of a sequence of words.

**[PORT: Preference Optimization on Reasoning Traces](https://aclanthology.org/2025.naacl-long.549.pdf) (as "LastLetterConcat")**
> A dataset for evaluating symbolic reasoning where the task is to concatenate the last letters of a sequence of words.

## Relationships

### → Last letter concatenation
- **Symbolic reasoning** (constructs) — *measured_by*
  > For symbolic reasoning, we use Last Letter Concatenation and Coin Flip from Wei et al. (2022).
  - [Escape Sky-high Cost: Early-stopping Self-Consistency for Multi-step Reasoning](https://proceedings.iclr.cc/paper_files/paper/2024/file/3fe2a777282299ecb4f9e7ebb531f0ab-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > Our evaluations on standard reasoning datasets (GSM8K, CSQA, and LLC) with various LLMs and prompts show that TREACLE enables cost savings of up to 85% compared to baselines, while maintaining high accuracy. (Abstract)
  - [Efficient Contextual LLM Cascades through Budget-Constrained Policy Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/a6deba3b2408af45b3f9994c2152b862-Paper-Conference.pdf)
