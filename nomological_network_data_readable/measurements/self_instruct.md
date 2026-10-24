# Self-Instruct
**Type:** Measurement  
**Referenced in:** 9 papers  
**Also known as:** Self-Instruct Eval, Self-instruct, SelfInst  

## State of the Field

**What it is.** Across papers, the prevailing usage treats Self-Instruct as an instruction-following evaluation dataset or test set, sometimes written as Self-Instruct Eval or SelfInst. Definitions describe it as based on self-instructed prompts and used to assess responses to self-instruction-style prompts, while one paper describes a test set of human-generated instructions from various tasks and sources. A smaller line of work also presents it as a framework and dataset that uses the model itself to generate new instructions, inputs, and outputs, and one paper characterizes it as generating approximately 82k instances from 175 human-created handwritten instructions.

**What it is claimed to measure.** Papers link Self-Instruct to 1 behavioral indicator, Instruction following, and no constructs. In the recorded relationship, a paper uses it to measure instruction following by evaluating trained student models on Self-Instruct alongside other instruction-following datasets. One definition also describes it as testing model generalization and response quality across a wide range of tasks, but the recorded measurement link centers on instruction following.

**Space of uses.** Papers commonly use Self-Instruct in benchmark suites, listing it with other instruction-following test sets rather than presenting it alone. It appears alongside Vicuna, Dolly Eval, Koala, WizardLM, and Super-Natural Instructions, among other benchmarks. Some papers also cite it as a comparison point for evaluation data quality.

## Sources

**[Self-Instructed Derived Prompt Generation Meets In-Context Learning: Unlocking New Potential of Black-Box LLMs](https://aclanthology.org/2025.acl-long.92.pdf) (as "Self-Instruct Eval")**
> An evaluation dataset based on self-instructed prompts, used to test model generalization and response quality across a wide range of tasks.

**[DavIR: Data Selection via Implicit Reward for Large Language Models](https://aclanthology.org/2025.acl-long.452.pdf)**
> A framework and dataset for improving the instruction-following capabilities of language models by using the model itself to generate new instructions, inputs, and outputs.

**[Add-One-In: Incremental Sample Selection for Large Language Models via a Choice-Based Greedy Paradigm](https://aclanthology.org/2025.emnlp-main.270.pdf) (as "Self-instruct")**
> A test set of human-generated instructions from various tasks and sources used to evaluate the performance of instruction-tuned models.

**[Adversarial Moment-Matching Distillation of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/cbae8efcc23a0cb6d15a20f245514020-Paper-Conference.pdf) (as "SelfInst")**
> An instruction-following evaluation dataset used to assess responses to self-instruction-style prompts.

## Relationships

### → Self-Instruct
- **Instruction following** (behaviors tasks) — *measured_by*
  > Then, we evaluate the trained student models on five instruction-following datasets: Dolly evaluation (Conover et al., 2023), Self-Instruct (Wang et al., 2022a), Super-Natural Instructions (Wang et al., 2022b), Unnatural Instruction(Honovich et al., 2022) and Vicuna evaluation(Chiang et al., 2023). (Section 4.1)
  - [DA-KD: Difficulty-Aware Knowledge Distillation for Efficient Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/he25c/he25c.pdf)
