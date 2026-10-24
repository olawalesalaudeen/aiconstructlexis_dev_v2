# Long chain-of-thought generation
**Type:** Behavior  
**Referenced in:** 9 papers  
**Also known as:** Long Chain-of-Thought reasoning, Long chain-of-thought reasoning  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats this behavior as producing extended reasoning traces or token sequences before the final answer, with more steps and longer outputs than standard chain-of-thought. Most definitions emphasize step-by-step structure, and several add planning, validation, backtracking, reflection, verification, or subproblem decomposition; as one study puts it, long CoT is "an extended sequence of reasoning tokens." One paper frames it more specifically as deep, structured natural language reasoning before formal outputs, and another as extended, coherent reasoning used to solve complex problems.

**Variants.** Papers use closely related names such as long CoT, long CoT reasoning, and long trace reasoning ability. The main variants differ by setting: some focus on substantially longer sequences that explicitly include reflection, verification, and subproblem decomposition, sometimes with responses approaching 10k tokens, while one paper studies natural language to formal language reasoning before formal outputs, including interaction with Lean code and formal theorem proving. Another paper places it in math problem solving through extended, coherent step-by-step reasoning.

**Space of elicitation and scores.** Papers link this behavior to 3 measurement instruments: AIME 2024, GPQA-Diamond, and MATH-500, with no one instrument appearing more often than the others. In the linked measurement evidence, all three are described as benchmarks used "to assess the long trace reasoning ability of LLMs."

**What it is taken as evidence of.** Only 2 constructs are linked in the papers, and they point to different constructs rather than a single shared one. One paper claims a causal relationship from long chain-of-thought generation to Generalization, and another claims a causal relationship from it to Formal reasoning. Separately, one paper claims causal relationships from it to the behavioral indicators Backtracking and Self-correction, describing long CoT as enabling those structured reasoning strategies.

## Sources

**[Unlocking General Long Chain-of-Thought Reasoning Capabilities of Large Language Models via Representation Engineering](https://aclanthology.org/2025.acl-long.339.pdf)**
> The observable production of extended reasoning traces that include planning, validation, and backtracking, resulting in longer and more detailed outputs compared to standard chain-of-thought.

**[MA-LoT: Model-Collaboration Lean-based Long Chain-of-Thought Reasoning enhances Formal Theorem Proving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25cb/wang25cb.pdf) (as "Long Chain-of-Thought reasoning")**
> The emergent capability of a model to perform deep, structured natural language reasoning before generating formal outputs, enabling high-level planning and self-reflection in problem solving.

**[Let's Reason Formally: Natural-Formal Hybrid Reasoning Enhances LLM's Math Capability](https://aclanthology.org/2025.emnlp-main.850.pdf) (as "Long chain-of-thought reasoning")**
> The ability to generate extended, coherent, and step-by-step reasoning processes to solve complex problems.

## Relationships

### Long chain-of-thought generation →
- **Backtracking** (behaviors tasks) — *causes*
  > A proven approach for scaling inference compute is to generate long chains-of-thought (CoTs), enabling models to engage in structured reasoning strategies such as backtracking and error correction. (Abstract)
  - [Demystifying Long Chain-of-Thought Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25ae/yang25ae.pdf)
- **Self-correction** (behaviors tasks) — *causes*
  > A proven approach for scaling inference compute is to generate long chains-of-thought (CoTs), enabling models to engage in structured reasoning strategies such as backtracking and error correction. (Abstract)
  - [Demystifying Long Chain-of-Thought Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25ae/yang25ae.pdf)
- **Generalization** (constructs) — *causes*
  > SFT initialization matters: high-quality, emergent long CoT pattern leads to significantly better generalization and RL gains. (Takeaway 3.3)
  - [Demystifying Long Chain-of-Thought Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25ae/yang25ae.pdf)
- **Formal reasoning** (constructs) — *causes*
  > Extensive experiments demonstrate that MA-LoT framework effectively enhances the model’s formal reasoning ability through model-collaboration design and emergent formal reasoning in Long CoT. (Section 1)
  - [MA-LoT: Model-Collaboration Lean-based Long Chain-of-Thought Reasoning enhances Formal Theorem Proving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25cb/wang25cb.pdf)
- **Theorem proving** (behaviors tasks) — *causes*
  > The emergent Lean reasoning ability in the Long CoT enables the model to write a better-structured proof based on its high-level plan than direct proof generation. (Section 2.3.1)
  - [MA-LoT: Model-Collaboration Lean-based Long Chain-of-Thought Reasoning enhances Formal Theorem Proving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25cb/wang25cb.pdf)
