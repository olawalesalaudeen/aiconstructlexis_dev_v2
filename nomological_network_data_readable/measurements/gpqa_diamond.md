# GPQA-Diamond
**Type:** Measurement  
**Referenced in:** 17 papers  
**Also known as:** GPQADiamond, GPQA Diamond  

## State of the Field

**What it is.** Across the papers, the prevailing usage is as a challenging, expert-level science or STEM question answering benchmark for deep reasoning. Definitions commonly describe graduate-level multiple-choice questions across biology, physics, and chemistry, with one description specifying 198 questions, and papers refer to it as GPQA-Diamond, GPQADiamond, or GPQA Diamond. A smaller descriptive variant treats GPQADiamond as a challenging subset of GPQA used for zero-shot generalization on unseen expert-level reasoning tasks, and some authors additionally specify pass@1 accuracy.

**What it is claimed to measure.** Papers link it to five constructs and one behavioral indicator. The dominant claim is that GPQA-Diamond measures reasoning, often when authors describe it within broader reasoning benchmarks or reasoning ability evaluations; smaller lines of work use it to measure chain-of-thought reasoning, generalization, mathematical reasoning, and problem-solving ability. One paper also uses it to measure the behavioral indicator long chain-of-thought generation, describing it as part of a benchmark set for long trace reasoning ability.

**Space of uses.** In practice, papers usually include it in broader evaluation suites rather than as a standalone check. It is often used alongside AIME 2024 and MATH-500, and sometimes with LiveCodeBench, GSM8K, or MMLU-Pro, in settings described as challenging reasoning benchmarks, multi-step reasoning datasets, or complex tasks. Reported use commonly centers on accuracy, and one definition explicitly notes pass@1 accuracy.

## Sources

**[Thinking Out Loud: Do Reasoning Models Know When They're Right?](https://aclanthology.org/2025.emnlp-main.73.pdf)**
> Scientific reasoning benchmark containing 198 graduate-level multiple-choice questions across biology, physics, and chemistry.

**[Efficient Model Development through Fine-tuning Transfer](https://aclanthology.org/2025.emnlp-main.131.pdf) (as "GPQADiamond")**
> Challenging subset of GPQA used to assess zero-shot generalization on unseen, expert-level reasoning tasks.

**[Synthesizing Post-Training Data for LLMs through Multi-Agent Simulation](https://aclanthology.org/2025.acl-long.1136.pdf) (as "GPQA Diamond")**
> Expert-level question answering benchmark in STEM fields requiring deep reasoning, evaluated using pass@1 accuracy.

## Relationships

### → GPQA-Diamond
- **Reasoning** (constructs) — *measured_by*
  > Reasoning Models, in which we perform SFT with Qwen-2.5 on s1K dataset (Muennighoff et al., 2025) and evaluated on GPQA Diamond (Rein et al., 2023) (Section 5.1).
  - [LIFT the Veil for the Truth: Principal Weights Emerge after Rank Reduction for Reasoning-Focused Supervised Fine-Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25ba/liu25ba.pdf)
- **Generalization** (constructs) — *measured_by*
  > we use GSM8K and MATH500, along with an additional dataset to assess how well our transferring-then-finetuning approach generalizes to the unseen task GPQADiamond (Rein et al., 2024). (Section 5.1).
  - [Efficient Model Development through Fine-tuning Transfer](https://aclanthology.org/2025.emnlp-main.131.pdf)
