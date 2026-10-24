# SciBench
**Type:** Measurement  
**Referenced in:** 9 papers  

## State of the Field

**What it is.** Papers most commonly describe SciBench as a benchmark suite or dataset for scientific reasoning, especially college-level scientific problem solving. The prevailing description is that it contains complex, multi-step scientific questions whose objective is to integrate knowledge, reason over evidence, and apply scientific principles; several papers place it across physics and chemistry, though one line describes the third domain as biology and another as mathematics. Some authors use narrower portions of it, including a math-related subset and chemical reasoning subsets.

**What it is claimed to measure.** Across papers, measurement claims are spread across several targets rather than concentrated on one. SciBench is linked to 5 constructs, Chemical reasoning, Generalization, Problem-solving ability, Reasoning, and Scientific reasoning, and to 3 behavioral indicators, Mathematical problem solving, Scientific problem solving, and Scientific question answering. Papers use it to measure scientific and hard-science reasoning tasks, college-level scientific problem-solving abilities, and, in one case, generalization capability because it is treated as coming from a totally different distribution from training data.

**Space of uses.** No measurement instrument is linked to it. In experiments, papers usually place SciBench inside broader benchmark batteries, for example alongside Game of 24, Mini-Crosswords, WebShop, GPQA, and TheoremQA. Some authors position it by saying its difficulty surpasses the middle school level of the MATH dataset and reaches the Undergraduate Level, or by using it to verify generalization capability, while others use it as a source dataset for synthesis and evaluation or restrict evaluation to math-related or chemical subsets.

## Sources

**[Fleet of Agents: Coordinated Problem Solving with Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/klein25a/klein25a.pdf)**
> A benchmark suite for scientific reasoning that includes complex, multi-step questions across physics, chemistry, and biology.

## Relationships

### → SciBench
- **Scientific reasoning** (constructs) — *measured_by*
  > Tree-Search policy which are compared on college-level scientific reasoning benchmark under three LLMs, such as CoT and ToT, as shown in Table 4. We also evaluated under the same search budget on MATH and SciBench
  - [ReST-MCTS*: LLM Self-Training via Process Reward Guided Tree Search](https://proceedings.neurips.cc/paper_files/paper/2024/file/76ec4dc30e9faaf0e4b6093eaa377218-Paper-Conference.pdf)
- **Mathematical problem solving** (behaviors tasks) — *measured_by*
  > We applied MACM to two datasets, SciBench [16] and TheoremQA [5], which claim their difficulty surpasses the middle school level of the MATH dataset, reaching the Undergraduate Level. (Section 4.3)
  - [MACM: Utilizing a Multi-Agent System for Condition Mining in Solving Complex Mathematical Problems](https://proceedings.neurips.cc/paper_files/paper/2024/file/5fcedec09977357f32e8e0ec8957073b-Paper-Conference.pdf)
- **Chemical reasoning** (constructs) — *measured_by*
  > Our experiments are conducted on four chemical reasoning datasets from SciBench (Wang et al., 2024a) with GPT-3.5, GPT-4 (OpenAI et al., 2024), and open-source models like Llama3 (Llama Team, 2024).
  - [ChemAgent: Self-updating Memories in Large Language Models Improves Chemical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/fa7f64b45970e6a7f8824781e7e01501-Paper-Conference.pdf)
- **Scientific question answering** (behaviors tasks) — *measured_by*
  > SciBench (Wang et al., 2024a) is a benchmark suite of scientific reasoning tasks, where the objective is to answer complex, multi-step scientific questions that require integrating knowledge, reasoning over evidence, and applying scientific principles. (Section 4.4. SciBench)
  - [Fleet of Agents: Coordinated Problem Solving with Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/klein25a/klein25a.pdf)
- **Scientific problem solving** (behaviors tasks) — *measured_by*
  > SciBench (Wang et al., 2024a) assesses college-level scientific problem-solving abilities. (Section 4.2)
  - [Think, Verbalize, then Speak: Bridging Complex Thoughts and Comprehensible Speech](https://aclanthology.org/2025.emnlp-main.726.pdf)
- **Out-of-distribution generalization** (constructs) — *measured_by*
  > Among these, AIME-2024, HumanEval, HumanEval+, GPQA, and SciBench are from a totally different distributions compared to training data, serving to verify the generalization capability of MAS-GPT. (Section 4.1)
  - [MAS-GPT: Training LLMs to Build LLM-based Multi-Agent Systems](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ye25g/ye25g.pdf)
