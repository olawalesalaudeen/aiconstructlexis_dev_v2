# Prompt optimization
**Type:** Behavior  
**Referenced in:** 6 papers  

## State of the Field

Across the provided literature, prompt optimization is most commonly defined as the process of selecting or constructing prompts to improve a model's performance on question answering. However, the specific goals and methods of this behavior vary. One line of work operationalizes it as an iterative refinement of prompts for system components using an optimizer like MIPRO v2, which evaluates prompts against quality and privacy metrics on training data. A different application frames it as an adversarial process, where an attacker model refines prompts through a feedback loop to maximize the chance a victim model will reproduce its training data. The methods for this optimization include using gauges like pointwise mutual information or question likelihood, as noted in one study, or employing dedicated optimizers and reward functions. The effectiveness of prompt optimization is evaluated using benchmarks such as GSM8k and BBH. Additionally, prompt optimization is reported to cause task decomposition.

## Sources

**[ALPACA AGAINST VICUNA: Using LLMs to Uncover Memorization of LLMs](https://aclanthology.org/2025.naacl-long.421.pdf)**
> Selecting or constructing prompts to improve model performance on question answering.

## Relationships

### Prompt optimization →
- **BIG-Bench Hard** (measurements) — *measured_by*
  > Our primary evaluation benchmarks for prompt optimization are GSM8K (Cobbe et al., 2021) and Big-Bench Hard (BBH) (Suzgun et al., 2022). (Section 5.1)
  - [Large Language Models as Optimizers](https://proceedings.iclr.cc/paper_files/paper/2024/file/3339f19c5fcee3ad74502947a32be9e6-Paper-Conference.pdf)
- **GSM8K** (measurements) — *measured_by*
  > Our primary evaluation benchmarks for prompt optimization are GSM8K (Cobbe et al., 2021) and Big-Bench Hard (BBH) (Suzgun et al., 2022). (Section 5.1)
  - [Large Language Models as Optimizers](https://proceedings.iclr.cc/paper_files/paper/2024/file/3339f19c5fcee3ad74502947a32be9e6-Paper-Conference.pdf)
- **Knowledge transfer** (constructs) — *causes*
  > Additionally, GREATER-optimized prompts frequently exhibit better transferability
  - [GReaTer: Gradients Over Reasoning Makes Smaller Language Models Strong Prompt Optimizers](https://proceedings.iclr.cc/paper_files/paper/2025/file/18a42aad2fa8aa871e2ee20d425c208d-Paper-Conference.pdf)
- **Training data regurgitation** (behaviors tasks) — *causes*
  > We propose a black-box prompt optimization method where an attacker LLM agent uncovers higher levels of memorization in a victim agent, surpassing traditional approaches that prompt the model directly with training data.
  - [ALPACA AGAINST VICUNA: Using LLMs to Uncover Memorization of LLMs](https://aclanthology.org/2025.naacl-long.421.pdf)
- **Question decomposition** (behaviors tasks) — *causes*
  > “we propose to adopt an LLM-based optimizer (referred to as the Prompt Optimizer) to generate p and iteratively refine it for optimizing the downstream performance”
  - [POQD: Performance-Oriented Query Decomposer for Multi-vector retrieval](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25ag/liu25ag.pdf)

### → Prompt optimization
- **Prompt sensitivity** (constructs) — *causes*
  > However, these models are known to exhibit prompt sensitivity... Consequently, prompt design has emerged as a critical factor... prompting researchers to explore more efficient alternatives.
  - [GReaTer: Gradients Over Reasoning Makes Smaller Language Models Strong Prompt Optimizers](https://proceedings.iclr.cc/paper_files/paper/2025/file/18a42aad2fa8aa871e2ee20d425c208d-Paper-Conference.pdf)
- **Training data regurgitation** (behaviors tasks) — *causes*
  > "We propose a black-box prompt optimization method where an attacker LLM agent uncovers higher levels of memorization in a victim agent"
  - [ALPACA AGAINST VICUNA: Using LLMs to Uncover Memorization of LLMs](https://aclanthology.org/2025.naacl-long.421.pdf)
