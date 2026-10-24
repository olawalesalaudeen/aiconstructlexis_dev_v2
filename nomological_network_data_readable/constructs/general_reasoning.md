# General reasoning
**Type:** Construct  
**Referenced in:** 13 papers  

## State of the Field

**Definition agreement:** Complementary. Most papers define general reasoning as a model's broad latent capacity to process information, make deductions, and solve problems across diverse or non-specialized domains. A few define it more narrowly as the ability to solve individual reasoning tasks without requiring abstraction over multiple examples, which is a different emphasis and scope within the same model-level phenomenon rather than a different construct.

**Space of definitions.** Across the papers, the prevailing usage treats general reasoning as a latent or unobservable reasoning capacity of the model. A common formulation describes it as the ability to solve individual reasoning tasks or examples, while related definitions describe it more broadly as logically processing information, making deductions, solving problems, and understanding complex relationships across diverse or non-specialized domains. The main variation is whether authors foreground single-example task solving, especially in contrast to generic facts shared across examples, or emphasize broad cross-domain problem solving.

**Space of facets.** Papers mainly systematize the construct by contrast rather than by subtypes. In Meaningful Learning: Enhancing Abstract Reasoning in Large Language Models via Generic Fact Guidance, abstract reasoning is described as taking examples supported by a generic fact as a whole, whereas general reasoning focuses on each single example, and the paper reports a substantial discrepancy between the two performances. Other papers also position general reasoning against specialized tasks requiring proprietary or domain-specific knowledge, and against mathematical reasoning tasks.

**Space of measurement.** Operationalization is almost entirely benchmark-based: general reasoning is linked to 8 measurement instruments and 1 behavioral indicator, and that indicator, logic puzzle solving, appears in a causal claim rather than as a direct measure. The most frequently linked instruments are BIG-Bench Hard, CommonsenseQA, and MMLU, with 5 other benchmarks; one paper operationalizes the construct with 5-shot MMLU and 3-shot Chain-of-Thought BIG-Bench Hard, and other papers state that MMLU and BIG-Bench Hard are used to evaluate general reasoning. The remaining linked benchmarks are used in evaluations that emphasize general reasoning capabilities or that label a task as a general reasoning task, and no linked human evaluation, LLM-as-a-judge, or probe appears.

**Links.** Beyond measurement, one paper claims a causal relationship from logic puzzle solving to general reasoning, describing a warm-up on Knights and Knaves puzzles as a way to acquire general reasoning skills in Warm Up Before You Train: Unlocking General Reasoning in Resource-Constrained Settings. The same paper claims a causal relationship from general reasoning to cross-domain generalization. Another paper reports that general reasoning is related to abstract reasoning, noting a substantial discrepancy between their performances, and no correlational link is recorded.

## Sources

**[Meaningful Learning: Enhancing Abstract Reasoning in Large Language Models via Generic Fact Guidance](https://proceedings.neurips.cc/paper_files/paper/2024/file/da5498f88193ff61f0daea1940b819da-Paper-Conference.pdf)**
> The latent ability to solve individual reasoning tasks or examples without necessarily capturing the common patterns or generic facts underlying multiple examples.

## Relationships

### General reasoning →
- **MMLU** (measurements) — *measured_by*
  > Finally, to evaluate general reasoning, we test the model on two benchmarks: an easy task, 5-shot MMLU (Hendrycks et al., 2020)... (Section 2.3)
  - [Wasserstein Distances, Neuronal Entanglement, and Sparsity](https://proceedings.iclr.cc/paper_files/paper/2025/file/e1c1624dd7d9fa75adacd7e93c40e6b2-Paper-Conference.pdf)
- **BIG-Bench Hard** (measurements) — *measured_by*
  > Finally, to evaluate general reasoning, we test the model on two benchmarks: ...and a more challenging task, 3-shot Chain-of-Thought (CoT) Big Bench Hard (BBH) (Suzgun et al., 2022). (Section 2.3)
  - [Wasserstein Distances, Neuronal Entanglement, and Sparsity](https://proceedings.iclr.cc/paper_files/paper/2025/file/e1c1624dd7d9fa75adacd7e93c40e6b2-Paper-Conference.pdf)
- **CommonsenseQA** (measurements) — *measured_by*
  > To evaluate the generalization ability of our method and mitigate the risk of catastrophic forgetting, we conduct experiments on commonsense and reasoning datasets, including CSQA (Talmor et al., 2018), Hellaswag (Zellers et al., 2019), and MMLU-pro (Wang et al., 2024). (Section 5.6)
  - [CulFiT: A Fine-grained Cultural-aware LLM Training Paradigm via Multilingual Critique Data Synthesis](https://aclanthology.org/2025.acl-long.1092.pdf)
- **HellaSwag** (measurements) — *measured_by*
  > To evaluate the generalization ability of our method and mitigate the risk of catastrophic forgetting, we conduct experiments on commonsense and reasoning datasets, including CSQA (Talmor et al., 2018), Hellaswag (Zellers et al., 2019), and MMLU-pro (Wang et al., 2024). (Section 5.6)
  - [CulFiT: A Fine-grained Cultural-aware LLM Training Paradigm via Multilingual Critique Data Synthesis](https://aclanthology.org/2025.acl-long.1092.pdf)
- **MMLU-Pro** (measurements) — *measured_by*
  > To evaluate the generalization ability of our method and mitigate the risk of catastrophic forgetting, we conduct experiments on commonsense and reasoning datasets, including CSQA (Talmor et al., 2018), Hellaswag (Zellers et al., 2019), and MMLU-pro (Wang et al., 2024). (Section 5.6)
  - [CulFiT: A Fine-grained Cultural-aware LLM Training Paradigm via Multilingual Critique Data Synthesis](https://aclanthology.org/2025.acl-long.1092.pdf)
- **DROP** (measurements) — *measured_by*
  > We compare training the language world model with policy (FTA-P) with the baseline (Llama-3.1-8B SFT on the same dataset) in several benchmarks, including math500 (Hendrycks et al., 2021), gsm8k (Cobbe et al., 2021), AIME and Drop (Dua et al., 2019), where the first three are mathematical reasoning tasks, and the fourth is a general reasoning task. (Section 4.3.1)
  - [Controlling Large Language Model with Latent Action](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jia25e/jia25e.pdf)
- **Data efficiency** (constructs) — *causes*
  > Introducing warmup in the pipeline improves not only accuracy but also overall sample efficiency during RLVR training. (Abstract)
  - [Warm Up Before You Train: Unlocking General Reasoning in Resource-Constrained Settings](https://aclanthology.org/2025.emnlp-main.727.pdf)
- **MMMU** (measurements) — *measured_by*
  > It evaluates VLMs on both breadth and depth of subject knowledge, as well as on their expert-level reasoning and understanding. (Section 5.1)
  - [Cache-of-Thought: Master-Apprentice Framework for Cost-Effective Vision Language Model Reasoning](https://aclanthology.org/2025.emnlp-main.97.pdf)
- **StrategyQA** (measurements) — *measured_by*
  > To demonstrate our method’s generalizability beyond mathematical reasoning, we conduct additional evaluations on the CommonsenseQA and StrategyQA benchmarks, which emphasize general reasoning capabilities.
  - [Enhancing Chain-of-Thought Reasoning via Neuron Activation Differential Analysis](https://aclanthology.org/2025.emnlp-main.817.pdf)

### → General reasoning
- **Logic puzzle solving** (behaviors tasks) — *causes*
  > In the first stage, we "warm up" the model by distilling Long CoTs from a toy domain, namely, Knights & Knaves (K&K) logic puzzles to acquire general reasoning skills. (Abstract)
  - [Warm Up Before You Train: Unlocking General Reasoning in Resource-Constrained Settings](https://aclanthology.org/2025.emnlp-main.727.pdf)

### Associated with
- **Abstract reasoning** (constructs)
  > Our findings reveal a substantial discrepancy between their general reasoning and abstract reasoning performances. (Abstract)
  - [Meaningful Learning: Enhancing Abstract Reasoning in Large Language Models via Generic Fact Guidance](https://proceedings.neurips.cc/paper_files/paper/2024/file/da5498f88193ff61f0daea1940b819da-Paper-Conference.pdf)
