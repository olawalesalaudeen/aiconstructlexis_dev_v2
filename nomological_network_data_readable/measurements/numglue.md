# NumGLUE
**Type:** Measurement  
**Referenced in:** 7 papers  

## State of the Field

**What it is.** Across the papers, NumGLUE is most commonly described as a suite of mathematical or numerical reasoning tasks. Definitions emphasize understanding numerical concepts and language, or handling numbers in natural language contexts, while one paper describes it more specifically as a benchmark for numerical and quantitative reasoning whose tasks fundamentally involve arithmetic formula evaluation. Another paper refers to NumGLUE1 and NumGLUE2 among math-related tasks.

**What it is claimed to measure.** Most commonly, papers use NumGLUE to measure Mathematical reasoning. Papers link it to one construct, Mathematical reasoning, and one behavioral indicator, Mathematical problem solving. A smaller line of work treats it as a math benchmark for Mathematical problem solving across different domains.

**Space of uses.** Papers typically use NumGLUE alongside other math benchmarks. It appears as an in-domain dataset and as an evaluation benchmark, most often with GSM8K, and also with MATH and SVAMP; one paper also groups NumGLUE1 and NumGLUE2 within 'math-related tasks.' Papers do not link it to any other measurement instrument.

## Sources

**[SmallToLarge (S2L): Scalable Data Selection for Fine-tuning Large Language Models by Summarizing Training Trajectories of Small Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/97fe251c25b6f99a2a23b330a75b11d4-Paper-Conference.pdf)**
> A suite of mathematical reasoning tasks that require understanding of numerical concepts and language.

## Relationships

### → NumGLUE
- **Mathematical reasoning** (constructs) — *measured_by*
  > Specialized Domain 1: Mathematical Reasoning... Evaluation Datasets. We follow the framework established in [64] for a comprehensive assessment using several well-regarded datasets, including in-domain and out-of-domain datasets. For the in-domain datasets, we consider GSM8K [11], MATH [19], and NumGLUE [36].
  - [SmallToLarge (S2L): Scalable Data Selection for Fine-tuning Large Language Models by Summarizing Training Trajectories of Small Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/97fe251c25b6f99a2a23b330a75b11d4-Paper-Conference.pdf)
- **Instruction fine-tuning** (behaviors tasks) — *measured_by*
  > For LLM fine-tuning, we conduct experiments in math corpus, and evaluate on Mathmeticas (Davies et al., 2021), SVAMP (Patel et al., 2021), NumGLUE (Mishra et al., 2022), and GSM8K (Cobbe et al., 2021). (Section 6.1)
  - [COAT: Compressing Optimizer states and Activations for Memory-Efficient FP8 Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/6ac807c9b296964409b277369e55621a-Paper-Conference.pdf)
