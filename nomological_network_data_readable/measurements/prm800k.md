# PRM800K
**Type:** Measurement  
**Referenced in:** 7 papers  

## State of the Field

**What it is.** Across the surveyed work, PRM800K is most commonly described as a dataset of mathematical or MATH reasoning problems with step-by-step solutions annotated by humans at the process level, often for training process-supervised reward models. Definitions vary in emphasis: some describe manually annotated step-by-step feedback or correctness labels, one paper narrows it to 80,000 incorrect stepwise student solutions with 2,077 test examples marked at the first error step, and another frames each reasoning step as positive, negative, or neutral. Papers also mention an easy, level 1-3 portion of the dataset.

**What it is claimed to measure.** Its recorded measurement use is concentrated rather than broad: papers link it to 1 construct, Mathematical reasoning, and to no behavioral indicators. A paper treats it as measuring Mathematical reasoning, describing PRM800K as derived from the MATH dataset, which contains challenging competition-level math problems.

**Space of uses.** Papers mainly use PRM800K as training data for step-level or token-level reward models, and also for training policy and reward models on a subset of the data. Usage descriptions repeatedly place it alongside MATH: papers say its questions or solutions come from MATH problems, and one study trains a step-level PRM on PRM800K and evaluates on MATH. No formal links to other measurement instruments are recorded.

## Sources

**[Discriminative Policy Optimization for Token-Level Reward Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25ca/chen25ca.pdf)**
> A dataset containing manually annotated step-by-step feedback on mathematical reasoning problems, used for training process-supervised reward models.
