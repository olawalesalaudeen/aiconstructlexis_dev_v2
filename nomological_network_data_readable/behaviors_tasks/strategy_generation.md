# Strategy generation
**Type:** Behavior  
**Referenced in:** 6 papers  
**Also known as:** Anticipatory plan generation, Code-form plan generation, Strategy formulation  

## State of the Field

**Space of definitions.** Most papers treat this behavior as generating a high-level plan or strategy before a downstream answer, code solution, or action. The prevailing usage is natural-language planning for problem solving, often for coding, including generating a set of strategies or "multiple strategies in English" before solving; some papers instead ask for an anticipatory plan before answering, a pseudocode-style or code-form plan, or an abstract strategy that identifies relevant concepts and principles without detailed calculations or specific operations. A smaller line of work uses the same label for generating natural-language criteria that define scenarios for different levels of user satisfaction, so what counts as the output varies between solution-path planning and classification criteria.

**Variants.** Papers use several nearby names for this behavior, including anticipatory plan generation, code-form plan generation, and strategy formulation. The settings vary across coding problems, general problem solving before answering, dialogue user-satisfaction classification, and open-ended action settings where the model combines a goal, interaction history, prior strategies, and the latest observation to propose a strategy. Some variants emphasize multiple strategies in English, while others emphasize pseudocode-style plans or a "rehearsal or plan of the whole reasoning path."

**Space of elicitation and scores.** No measurement instrument is linked to it. In the papers, elicitation is usually described through direct instructions to produce high-level strategies or plans before the main response, for example asking for a set of strategies, multiple strategies in English, or a high-level or code-form plan; no named scoring instrument is linked to this behavior.

**What it is taken as evidence of.** Among linked constructs, papers most often connect strategy generation to Reasoning. The recorded links are causal rather than measurement claims: some papers claim a causal relationship from Reasoning to Strategy generation, while others claim a causal relationship from Strategy generation to Reasoning, including language that new strategies can "enhanc[e] reasoning ability"; a smaller line of work claims a causal relationship from Strategy generation to Sequential decision-making. Taken together, papers link the behavior to more than one construct, and the connection to Reasoning is described in both directions.

## Sources

**[LLM-guided Plan and Retrieval: A Strategic Alignment for Interpretable User Satisfaction Estimation in Dialogue](https://aclanthology.org/2025.naacl-long.523.pdf)**
> Producing high-level natural language plans or approaches for solving a coding problem before generating code.

**[Learning to Plan Before Answering: Self-Teaching LLMs to Learn Abstract Plans for Problem Solving](https://proceedings.iclr.cc/paper_files/paper/2025/file/821a6e5681b072351fd3c21fac44739a-Paper-Conference.pdf) (as "Anticipatory plan generation")**
> Producing a high-level plan before answering that outlines the intended solution path without detailed calculations.

**[CodePlan: Unlocking Reasoning Potential in Large Language Models by Scaling Code-form Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/c362b360765ed90ae4bd9c6764837e0e-Paper-Conference.pdf) (as "Code-form plan generation")**
> Producing pseudocode-style plans that summarize the high-level reasoning structure for solving a prompt.

**[Forest for the Trees: Overarching Prompting Evokes High-Level Reasoning in Large Language Models](https://aclanthology.org/2025.naacl-long.66.pdf) (as "Strategy formulation")**
> The observable behavior of generating high-level plans or abstract ideas for solving a problem, including identification of relevant concepts and principles without detailing specific operations.

## Relationships

### Strategy generation →
- **Reasoning** (constructs) — *causes*
  > These S+ and S−guide the generation of new strategies to optimize overall performance, enhancing reasoning ability and avoiding redundancy. (Section 3.1.1)
  - [LLM-guided Plan and Retrieval: A Strategic Alignment for Interpretable User Satisfaction Estimation in Dialogue](https://aclanthology.org/2025.naacl-long.523.pdf)
- **Sequential decision-making** (constructs) — *causes*
  > CODEPLAN consistently and significantly outperforms directly generating responses without planning, yielding a relative 25.1% performance gain averaged across 13 challenging reasoning benchmarks spanning mathematical reasoning, symbolic reasoning, instruction-following, multi-hop question answering, and decision-making tasks.
  - [CodePlan: Unlocking Reasoning Potential in Large Language Models by Scaling Code-form Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/c362b360765ed90ae4bd9c6764837e0e-Paper-Conference.pdf)
