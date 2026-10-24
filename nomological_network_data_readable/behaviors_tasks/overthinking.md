# Overthinking
**Type:** Behavior  
**Referenced in:** 10 papers  

## State of the Field

**Space of definitions.** Most papers describe overthinking as an observable pattern of excessive, verbose, or redundant reasoning, usually on simple tasks, where the model generates more steps or tokens than needed and incurs high computational overhead. A common formulation adds that these extra steps contribute little to accuracy or reasoning diversity, and one paper further treats it as a failure mode in which additional reasoning episodes can reduce final answer accuracy. A smaller line of work applies the label to conversational search, where overthinking means asking overly detailed or redundant clarification questions that drift from the user's original intent.

**Variants.** Papers study overthinking in several settings. The most common settings are long reasoning or chain-of-thought outputs on simple reasoning problems, including analyses on mathematical benchmarks, where papers describe redundant solutions, excessive reasoning steps, and inefficient token use. A smaller line of work constructs overthinking in iterative conversational search as redundant clarification turns; elsewhere, chain of thought is claimed to cause overthinking by producing unnecessarily long and verbose reasoning traces, and overthinking is related to repetitive generation through meaningless repetition and overthinking.

**Space of elicitation and scores.** No measurement instrument is linked to it. Across papers, it is identified through observable symptoms rather than a named tool: excessive reasoning steps, verbose or redundant traces, redundant clarification steps, inefficient token use, or cases where added episodes do not improve and sometimes degrade answer accuracy.

**What it is taken as evidence of.** Only one construct is linked. One paper reports that overthinking is related to Reasoning diversity, describing overthinking patterns as lacking diversity in reasoning strategies while contributing minimally to accuracy. Papers do not offer other construct links for it.

## Sources

**[MuTIS: Enhancing Reasoning Efficiency through Multi Turn Intervention Sampling in Reinforcement Learning](https://aclanthology.org/2025.emnlp-main.690.pdf)**
> An observable tendency for a model to generate excessively verbose and redundant thinking processes, especially for simple tasks, leading to high computational cost.

## Relationships

### → Overthinking
- **Chain of thought** (behaviors tasks) — *causes*
  > However, this approach [chain-of-thought (CoT) reasoning] often leads to unnecessarily long and verbose reasoning traces, resulting in high inference cost and latency. This overthinking phenomenon has become a practical bottleneck... (Introduction)
  - [Answer Convergence as a Signal for Early Stopping in Reasoning](https://aclanthology.org/2025.emnlp-main.904.pdf)

### Associated with
- **Reasoning diversity** (constructs)
  > Across extensive analyses of mathematical benchmarks, we found these overthinking patterns: (1) contribute minimally to improving accuracy, (2) lack diversity in reasoning strategies, and (3) occur more frequently with simple problems.
  - [Do NOT Think That Much for 2+3=? On the Overthinking of Long Reasoning Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25bx/chen25bx.pdf)
