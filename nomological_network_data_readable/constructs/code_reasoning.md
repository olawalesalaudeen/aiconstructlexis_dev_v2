# Code reasoning
**Type:** Construct  
**Referenced in:** 10 papers  
**Also known as:** Long-range sequential reasoning  

## State of the Field

**Definition agreement:** Consensus. Most papers define code reasoning as the ability to reason about program execution, behavior, logic, and properties. The remaining definitions just make that core idea more concrete by focusing on predicting outputs, inferring inputs, or understanding ordered procedural steps, so they still describe the same underlying ability rather than different phenomena.

**Space of definitions.** Across papers, the prevailing usage treats code reasoning as a latent ability to analyze, infer, and draw conclusions about program execution, code behavior, logic, and properties. Several definitions express this in execution-focused terms, especially predicting a program's output from a given input or inferring the input from a known output. A smaller line of work uses a narrower framing, long-range sequential reasoning, where understanding depends on processing procedural steps whose order affects the program's semantic meaning.

**Space of facets.** Papers use the term at different levels of scope. Broader accounts cast it as a multi-task capability spanning code repair, execution reasoning, and fill-in-the-blank challenges, and describe reasoning about code as requiring both syntactic and semantic understanding; a narrower account isolates order-sensitive procedural reasoning as one aspect of semantic understanding. One paper also relates it to logical reasoning by describing code reasoning as a category of tasks that incorporates logical reasoning into code.

**Space of measurement.** Papers link code reasoning to one measurement instrument and no behavioral indicators. The only linked instrument is CRUXEval, used as a benchmark with tasks that assess reasoning about the execution of simple Python programs by asking models to predict inputs from outputs and vice versa; related task descriptions also frame code reasoning as predicting outputs from given inputs or inferring inputs from known outputs. This operationalization matches the prevalent execution-and-behavior framing of the construct.

**Links.** Beyond measurement, one paper reports that code reasoning is related to Logical reasoning, describing it as a category of tasks that incorporates logical reasoning into code. Separately, one paper claims a causal relationship from Planning to Code reasoning, stating that enhanced planning capability gained through HLP boosts model performance on code reasoning. No correlational links are reported.

## Sources

**[Prompt Tuning Strikes Back: Customizing Foundation Models with Low-Rank Prompt Adaptation](https://proceedings.neurips.cc/paper_files/paper/2024/file/548551c07a68c8f0a87d67c6167cedb1-Paper-Conference.pdf)**
> The latent ability to reason about program execution and code behavior.

**[Can Large Language Models Understand Symbolic Graphics Programs?](https://proceedings.iclr.cc/paper_files/paper/2025/file/41bd71e7bf7f9fe68f1c936940fd06bd-Paper-Conference.pdf) (as "Long-range sequential reasoning")**
> The capacity to process and understand the procedural steps in a program where the order of operations significantly affects the final semantic meaning.

## Relationships

### Code reasoning →
- **CRUXEval** (measurements) — *measured_by*
  > These tasks assess the model’s ability to reason about the execution of simple Python programs by asking it to predict the input given the output of a function and vice-versa (Section 4.1).
  - [Prompt Tuning Strikes Back: Customizing Foundation Models with Low-Rank Prompt Adaptation](https://proceedings.neurips.cc/paper_files/paper/2024/file/548551c07a68c8f0a87d67c6167cedb1-Paper-Conference.pdf)
- **Test generation ability** (constructs) — *causes*
  > models struggle to generate high-coverage test suites, with the best model, GPT-4o, achieving an average coverage of only 35.2%. This is primarily due to models struggling to reason about execution
  - [TestGenEval: A Real World Unit Test Generation and Test Completion Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/26ded5c8ee8ec1bc4caced4e1c9b1584-Paper-Conference.pdf)

### → Code reasoning
- **Planning** (constructs) — *causes*
  > Furthermore, the enhanced planning capability gained through HLP boosts model performance on code reasoning. (Abstract)
  - [Planning-Aware Code Infilling via Horizon-Length Prediction](https://aclanthology.org/2025.emnlp-main.1672.pdf)

### Associated with
- **Logical reasoning** (constructs)
  > “Code reasoning is a category of tasks that incorporates logical reasoning into code”
  - [Unveiling the Magic of Code Reasoning through Hypothesis Decomposition and Amendment](https://proceedings.iclr.cc/paper_files/paper/2025/file/eeffa70bcbbd43f6bd067edebc6595e8-Paper-Conference.pdf)
