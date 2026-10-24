# MMLU-STEM
**Type:** Measurement  
**Referenced in:** 13 papers  
**Also known as:** MMLU STEM  

## State of the Field

**What it is.** Across papers, the prevailing description is a STEM-focused subset of the MMLU benchmark, covering science, technology, engineering, and mathematics subjects. Most definitions present it as evaluating broad STEM knowledge and reasoning, while some narrow this to mathematical and scientific reasoning or to knowledge and problem-solving skills. Format details are only occasionally made explicit: papers describe it as a multiple-choice dataset or as multiple-choice questions for human exams across math and other STEM disciplines; Llemma: An Open Language Model for Mathematics specifies a subset of 18 out of 57 MMLU subjects, and another paper reports a STEM subset with 3.13K problems.

**What it is claimed to measure.** Papers link it to 3 constructs and no behavioral indicators. The prevailing usage is to measure Mathematical reasoning and Reasoning, while a smaller line of work reports it as measuring Domain knowledge. Correspondingly, relationship evidence places it in evaluation suites for reasoning abilities across domains and for mathematical reasoning, and one paper treats performance on it as evidence about specialized knowledge.

**Space of uses.** Although no measurement instrument is directly linked to it, papers usually use MMLU-STEM as one component of broader evaluation suites, most often alongside GSM8K, MATH, GPQA, TheoremQA, and ARC-C. In those papers it is typically one benchmark among several for reasoning or mathematical reasoning rather than a standalone protocol. Step Guided Reasoning: Improving Mathematical Reasoning using Guidance Generation and Step Reasoning also describes it as a multiple-choice test dataset used to assess the generalisability of a method.

## Sources

**[Llemma: An Open Language Model for Mathematics](https://proceedings.iclr.cc/paper_files/paper/2024/file/b225f5c7cd13615e9558c3931fa4e66f-Paper-Conference.pdf)**
> Subset of the MMLU benchmark focusing on science, technology, engineering, and mathematics subjects, used to evaluate broad STEM knowledge and reasoning in language models.

**[Harnessing Diversity for Important Data Selection in Pretraining Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/b588d9b67932b459ea66ff6e2804c6b3-Paper-Conference.pdf) (as "MMLU STEM")**
> The STEM (Science, Technology, Engineering, and Mathematics) subset of the MMLU benchmark, used to evaluate mathematical and scientific reasoning.

## Relationships

### → MMLU-STEM
- **Reasoning** (constructs) — *measured_by*
  > To rigorously assess the capabilities of models in reasoning abilities across different domains, we utilize several widely used datasets, GSM8K [Cobbe et al., 2021], MATH [Hendrycks et al., 2021b], TheoremQA [Chen et al., 2023b], BIG-Bench Hard (BBH) [Suzgun et al., 2022], ARC-C [Clark et al., 2018], GPQA [Rein et al., 2023], MMLU-STEM [Hendrycks et al., 2021a]. (Section 3.2)
  - [MAmmoTH2: Scaling Instructions from the Web](https://proceedings.neurips.cc/paper_files/paper/2024/file/a4ca07aa108036f80cbb5b82285fd4b1-Paper-Conference.pdf)
- **Mathematical reasoning** (constructs) — *measured_by*
  > To evaluate performance, we assess the model on 9 mathematical reasoning benchmarks covering diverse domains, question formats (multiple-choice and open-ended), and difficulty levels (elementary to university): GSM8k (Cobbe et al., 2021), MATH (Hendrycks et al., 2021b), GSM-Hard (Gao et al., 2022), SVAMP (Patel et al., 2021), ASDiv (Miao et al., 2020), MAWPS (Koncel-Kedziorski et al., 2016), TabMWP (TAB) (Lu et al., 2023), MathQA (MQA) (Amini et al., 2019), MMLU-STEM (Hendrycks et al., 2021a), and SAT (Azerbayev et al., 2024). (Section 4.1)
  - [Overcoming Vocabulary Mismatch: Vocabulary-agnostic Teacher Guided Language Modeling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shin25a/shin25a.pdf)
- **Domain knowledge** (constructs) — *measured_by*
  > Compared to pretraining just on raw data, a model pretrained on MIND-OWM shows significant boost in mathematical reasoning (GSM8K: +13.42%, MATH: +2.30%), including superior performance in specialized knowledge (MMLU: +4.55%, MMLU-STEM: +4.28%)
  - [MIND: Math Informed syNthetic Dialogues for Pretraining LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/abbbb25cddb2c2cd08714e6bfa2f0634-Paper-Conference.pdf)
