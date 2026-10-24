# CollegeMath
**Type:** Measurement  
**Referenced in:** 14 papers  
**Also known as:** College Math  

## State of the Field

**What it is.** Most descriptions frame CollegeMath as a college-level mathematical reasoning benchmark, often presented as a more challenging or out-of-domain evaluation set beyond high school material. Papers variously describe it as college-level math problems, advanced topics beyond the high school curriculum, or an out-of-domain benchmark for generalization; one description in DART-Math specifies 2,818 test problems drawn from 9 textbooks across 7 domains such as linear algebra and differential equations. A smaller line of description differs: Logits-Based Finetuning calls it "a mathematical reasoning dataset created using MathScale, containing two million math question-answer pairs."

**What it is claimed to measure.** Papers use CollegeMath mainly to measure mathematical reasoning. Across recorded relationships it measures 2 constructs and 1 behavioral indicator: mathematical reasoning is the prevailing target, while a smaller number of papers use it to measure generalization and mathematical problem solving. The reported measurement claims therefore center on reasoning, with only limited extension to other targets.

**Space of uses.** Papers typically use CollegeMath inside multi-benchmark evaluations, commonly alongside GSM8K, MATH or MATH500, and OlympiadBench, among other math benchmarks. It is usually positioned as a harder, college-level benchmark within suites that range from elementary or competition math up to Olympiad problems, and several papers explicitly use it for out-of-domain or generalization checks. Some papers also present it as one of a small number of especially challenging datasets for testing model performance on advanced or diverse mathematical problems.

## Sources

**[MathFusion: Enhancing Mathematical Problem-solving of LLM through Instruction Fusion](https://aclanthology.org/2025.acl-long.367.pdf)**
> Out-of-domain benchmark assessing mathematical problem-solving at the college level, used to evaluate generalization beyond training data.

**[Unleashing LLM Reasoning Capability via Scalable Question Synthesis from Scratch](https://aclanthology.org/2025.acl-long.658.pdf) (as "College Math")**
> College-level mathematical reasoning benchmark assessing advanced topics beyond high school curriculum, used to evaluate out-of-domain generalization.

## Relationships

### → CollegeMath
- **Mathematical reasoning** (constructs) — *measured_by*
  > For mathematical reasoning, the performance is evaluated on the test set of MATH (Hendrycks et al., 2021b), GSM8K (Cobbe et al., 2021a), and College Math (Tang et al., 2024) by Accuracy. (Section 4.1)
  - [Preference Optimization for Reasoning with Pseudo Feedback](https://proceedings.iclr.cc/paper_files/paper/2025/file/31a57804448363bcab777f818f75f5b4-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > CollegeMath (Tang et al., 2024): This test set contains 2818 college-level mathematical problems extracted from 9 textbooks across 7 domains such as linear algebra and differential equations, testing generalization on complex mathematical reasoning in diverse domains. (Section 4.1)
  - [DART-Math: Difficulty-Aware Rejection Tuning for Mathematical Problem-Solving](https://proceedings.neurips.cc/paper_files/paper/2024/file/0ef1afa0daa888d695dcd5e9513bafa3-Paper-Conference.pdf)
- **Mathematical problem solving** (behaviors tasks) — *measured_by*
  > Performance is evaluated on MATH500 (Lightman et al., 2023), Minerva Math (Lewkowycz et al., 2022), OlympiadBench (He et al., 2024), College Math (Tang et al., 2024) 3, AIME24, and AMC23 (Section 4.1).
  - [R-PRM: Reasoning-Driven Process Reward Modeling](https://aclanthology.org/2025.emnlp-main.679.pdf)
