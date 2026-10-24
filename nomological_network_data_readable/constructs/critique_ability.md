# Critique ability
**Type:** Construct  
**Referenced in:** 19 papers  
**Also known as:** Self-critique, Self-critique ability, Critiquing ability, Discrimination, Critique capability, Peer review capability, Critical judgment  

## State of the Field

**Definition agreement:** Consensus. Most papers define critique ability as a model's capacity to evaluate or critique its own outputs or reasoning, identify flaws or errors, and often use that feedback to refine the response without external supervision. A few papers broaden the setting to execution outcomes or task errors, and one paper uses the term for writing academic peer reviews, but the dominant definition is the same core self-critique behavior.

**Space of definitions.** Across the papers, the prevailing usage treats critique ability as a model's capacity, or sometimes prompted behavior, of evaluating outputs or reasoning, identifying flaws or errors, and often using that feedback to revise or improve the response. Most definitions center on self-critique, where the model critiques its own output or reasoning, though some broaden the construct to critiquing generic responses or other models' reasoning and emphasize "detailed analysis, constructive suggestions, and refinement feedback." A smaller line of work narrows the label to forms such as academic peer review or critical judgment, and some authors frame it as an observable iterative critique-and-revise procedure rather than a latent capability.

**Space of facets.** Papers split the construct in several ways. One recurring decomposition distinguishes discrimination, the ability to identify or rank mistakes, from critiquing, the ability to provide actionable feedback for improvement, and one paper says discrimination tends to be easier than generation. Another benchmark breaks critique ability into feedback, comparison, correction, and meta-feedback, while other definitions separate self-critique from critique of others' reasoning or use narrower labels such as peer review capability and critical judgment for high-quality reviews and constructive evaluative feedback.

**Space of measurement.** Papers link the construct to 3 measurement instruments and no behavioral indicators. The only explicit measured_by link is to CRITICTOOL, described as a self-critique evaluation benchmark for tool utilization that evaluates error handling across multiple dimensions; the other linked instruments, Auto-J test set and UltraFeedback, appear in causal claims about critique datasets rather than as direct measures. Elsewhere, papers operationalize the construct through iterative critique-and-revise prompting, having the model produce a textual critique plus a numerical process reward, and testing whether models can identify erroneous reasoning steps and provide explanations.

**Links.** Papers connect critique ability to several other constructs. One paper claims a causal relationship from critique ability to self-improvement, and another claims a causal relationship from critique ability to reasoning, stating that self-critique mechanisms improve performance in complex reasoning tasks; a separate paper claims causal relationships from the Auto-J test set and UltraFeedback to critique ability by presenting critique-tuned models as evidence for the effectiveness of critique datasets. Another paper reports that critique ability correlates with self-correction confidence, with a trade-off when self-correction behavior is manipulated by prompts or in-context learning, and other papers relate critique ability to multi-hop reasoning and to weak-to-strong generalization.

## Sources

**[Scaling LLM Test-Time Compute Optimally Can be More Effective than Scaling Parameters for Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/1b623663fd9b874366f3ce019fdfdd44-Paper-Conference.pdf) (as "Self-critique")**
> The observable behavior where a model is instructed to critique its own output as a step towards improving it.

**[Can Large Language Models Detect Errors in Long Chain-of-Thought Reasoning?](https://aclanthology.org/2025.acl-long.905.pdf) (as "Self-critique ability")**
> The latent capacity of a model to accurately evaluate and identify errors in its own reasoning process, as opposed to evaluating others' reasoning.

**[Teaching Language Models to Critique via Reinforcement Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xie25a/xie25a.pdf) (as "Critiquing ability")**
> The capacity to generate feedback that both accurately assesses a solution and helps improve it in subsequent revisions.

**[Gaining Wisdom from Setbacks: Aligning Large Language Models via Mistake Analysis](https://proceedings.iclr.cc/paper_files/paper/2024/file/fe24df54d5ccd95cdf830a309f2bf5c0-Paper-Conference.pdf) (as "Discrimination")**
> The latent ability of a model to identify and analyze potential mistakes, errors, or harmful elements within a given response.

**[CriticEval: Evaluating Large-scale Language Model as Critic](https://proceedings.neurips.cc/paper_files/paper/2024/file/7b7d7985f62284060d65f532ed2ea5fa-Paper-Conference.pdf)**
> The latent capability of Large Language Models to identify and rectify flaws in responses, encompassing feedback, comparison, correction, and meta-feedback dimensions.

**[ProcessBench: Identifying Process Errors in Mathematical Reasoning](https://aclanthology.org/2025.acl-long.50.pdf) (as "Critique capability")**
> The latent ability of a general language model to analyze, evaluate, and provide feedback on the correctness of reasoning steps in a solution, including identifying errors and explaining them.

**[Benchmarking LLMs' Judgments with No Gold Standard](https://proceedings.iclr.cc/paper_files/paper/2025/file/a9b0e4e205bdf232da9f74bfb9469539-Paper-Conference.pdf) (as "Peer review capability")**
> The ability of an LLM to generate useful, high-quality academic peer reviews for research papers.

**[Benchmarking LLMs' Judgments with No Gold Standard](https://proceedings.iclr.cc/paper_files/paper/2025/file/a9b0e4e205bdf232da9f74bfb9469539-Paper-Conference.pdf) (as "Critical judgment")**
> The ability to provide substantive evaluative feedback that identifies strengths, weaknesses, and constructive critique beyond merely restating surface content.

## Relationships

### Critique ability →
- **Self-improvement** (constructs) — *causes*
  > Critique ability is crucial for the self-improvement [1, 2] of LLMs, as it enables the effective analysis and correction of flaws in responses [3, 4]. (Introduction)
  - [CriticEval: Evaluating Large-scale Language Model as Critic](https://proceedings.neurips.cc/paper_files/paper/2024/file/7b7d7985f62284060d65f532ed2ea5fa-Paper-Conference.pdf)
- **Reasoning** (constructs) — *causes*
  > Self-critique mechanisms significantly improve the performance of language models in complex reasoning tasks by giving them the ability to correct errors, conduct induction and deduction, and switch thinking insights. (Abstract)
  - [Fixing Distribution Shifts of LLM Self-Critique via On-Policy Self-Play Training](https://aclanthology.org/2025.acl-long.865.pdf)
- **CRITICTOOL** (measurements) — *measured_by*
  > we introduce CRITICTOOL, the first self-critique evaluation benchmark for tool utilization of LLMs. (Section 1)
  - [CRITICTOOL: Evaluating Self-Critique Capabilities of Large Language Models in Tool-Calling Error Scenarios](https://aclanthology.org/2025.emnlp-main.1355.pdf)

### Associated with
- **Multi-hop reasoning** (constructs)
  > “To answer multi-hop reasoning questions, self-critique involves prompting the LLM to generate subquestions and answer them using retrieved passages in a step-by-step manner.”
  - [Graph Neural Network Enhanced Retrieval for Question Answering of Large Language Models](https://aclanthology.org/2025.naacl-long.337.pdf)
- **Weak-to-strong generalization** (constructs)
  > Our experiments demonstrate that relatively weaker critic models can effectively guide stronger task-performing models such as GPT-4o (Table 3), exhibiting a similar phenomenon to weak-to-strong generalization (Christiano et al., 2018; Burns et al., 2023), where weaker models can be trained to effectively supervise more capable ones. (Section 1)
  - [Teaching Language Models to Critique via Reinforcement Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xie25a/xie25a.pdf)
