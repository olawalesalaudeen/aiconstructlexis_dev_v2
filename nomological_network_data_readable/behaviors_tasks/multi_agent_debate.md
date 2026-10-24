# Multi-agent debate
**Type:** Behavior  
**Referenced in:** 17 papers  
**Also known as:** Multi-round discussion, Multi-turn debate, Multi-Agent Debate, Natural Language Debate  

## State of the Field

Across the provided literature, multi-agent debate is consistently described as an interactive, multi-turn process involving multiple agents collaborating to refine an outcome. The terms 'multi-round discussion' and 'multi-turn debate' are also used to refer to this behavior. The common goal is for agents to exchange information, reasoning steps, or critiques to reach a consensus, refine conclusions, or improve system designs. One definition specifies that agents may begin with "differing initial viewpoints" and engage in "reflective discourse, critically revising their stances through mutual exchange" (MultiAgentESC: A LLM-based Multi-Agent Collaboration Framework for Emotional Support Conversation). As a research task, this behavior is operationalized in the context of logical reasoning. For example, one paper notes the practice of building "multi-agent debate tasks on several mathematical or logical reasoning datasets" (Augmenting Multi-Agent Communication with State Delta Trajectory). Multi-agent debate is also studied in relation to self-consistency.

## Sources

**[MultiAgentESC: A LLM-based Multi-Agent Collaboration Framework for Emotional Support Conversation](https://aclanthology.org/2025.emnlp-main.232.pdf)**
> A collaborative process where multiple agents with differing initial viewpoints discuss and revise their positions to reach consensus on the best response.

**[Knowledge-Aware Co-Reasoning for Multidisciplinary Collaboration](https://aclanthology.org/2025.emnlp-main.687.pdf) (as "Multi-round discussion")**
> An interactive process where multiple agents engage in several rounds of dialogue to exchange information and refine their conclusions.

**[Compound AI Systems Optimization: A Survey of Methods, Challenges, and Future Directions](https://aclanthology.org/2025.emnlp-main.1463.pdf) (as "Multi-turn debate")**
> An interactive behavior where multiple LLM agents exchange reasoning steps or critiques over several turns to refine outputs or system designs.

**[LLM-Based Explicit Models of Opponents for Multi-Agent Games](https://aclanthology.org/2025.naacl-long.41.pdf) (as "Multi-Agent Debate")**
> Framework where multiple agents debate a problem, presenting arguments and counterarguments, with a judge determining the final solution.

**[Communicating Activations Between Language Model Agents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ramesh25a/ramesh25a.pdf) (as "Natural Language Debate")**
> Baseline protocol where multiple LLMs iteratively refine responses by considering peers' outputs in natural language, serving as a state-of-the-art comparison for activation communication.

## Relationships

### Multi-agent debate →
- **GSM8K** (measurements) — *measured_by*
  > we build multi-agent debate tasks on several mathematical or logical reasoning datasets. ... We evaluate our approach on four datasets. (i) GSM8K (Cobbe et al., 2021) contains high quality grade school math problems. (Section 4.2.1)
  - [Augmenting Multi-Agent Communication with State Delta Trajectory](https://aclanthology.org/2025.emnlp-main.518.pdf)
- **MMLU** (measurements) — *measured_by*
  > we build multi-agent debate tasks on several mathematical or logical reasoning datasets. ... We evaluate our approach on four datasets. ... (ii) MMLU (Hendrycks et al., 2021) is a multiple choice benchmark... (Section 4.2.1)
  - [Augmenting Multi-Agent Communication with State Delta Trajectory](https://aclanthology.org/2025.emnlp-main.518.pdf)
- **Collaborative reasoning** (constructs) — *causes*
  > The framework includes a SWE-Agent for adaptive exploration, a Value Agent for iterative feedback, and a Discriminator Agent that facilitates multi-agent debate for collaborative decision-making.
  - [SWE-Search: Enhancing Software Agents with Monte Carlo Tree Search and Iterative Refinement](https://proceedings.iclr.cc/paper_files/paper/2025/file/a1e6783e4d739196cad3336f12d402bf-Paper-Conference.pdf)
- **Reasoning** (constructs) — *causes*
  > Various multi-agent debate strategies (Du et al., 2024; Chan et al., 2024; Liang et al., 2023; Chen et al., 2023; Smit et al., 2024; Zhang et al., 2023a; Pham et al., 2023; Li et al., 2023) have been developed to strengthen the reasoning ability of LLMs. (Section 5)
  - [From Debate to Equilibrium: Belief-Driven Multi-Agent LLM Reasoning via Bayesian Nash Equilibrium](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yi25c/yi25c.pdf)

### Associated with
- **Self-consistency** (measurements)
  > for self-consistency with an equivalent number of responses, multi-agent debate signiﬁcantly underperforms simple self-consistency using majority voting. (Section 4)
  - [Large Language Models Cannot Self-Correct Reasoning Yet](https://proceedings.iclr.cc/paper_files/paper/2024/file/8b4add8b0aa8749d80a34ca5d941c355-Paper-Conference.pdf)
- **Logical reasoning** (constructs)
  > Inspired by Du et al., we build multi-agent debate tasks on several mathematical or logical reasoning datasets. (Section 4.2.1)
  - [Augmenting Multi-Agent Communication with State Delta Trajectory](https://aclanthology.org/2025.emnlp-main.518.pdf)
