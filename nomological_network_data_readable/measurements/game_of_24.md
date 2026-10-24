# Game of 24
**Type:** Measurement  
**Referenced in:** 18 papers  
**Also known as:** Game 24, Game24  

## State of the Field

**What it is.** Across papers, the dominant framing is a mathematical reasoning benchmark, also called Game 24 or Game24, in which a model or agent must combine four given numbers with basic arithmetic operations to produce an expression equal to 24. Several definitions add search or planning language, describing it as a mathematical reasoning and search benchmark or a planning and reasoning benchmark, and multiple snippets specify that each of the four numbers is used exactly once. A few descriptions vary the starting items, speaking of a given set of integers, poker cards, or the 4nums.com task, but they consistently describe the goal as reaching 24 from four values with arithmetic operations.

**What it is claimed to measure.** Its reported uses spread across several targets rather than converging on one: papers link it to 6 constructs and 2 behavioral indicators overall. The most common measured_by claims treat it as measuring Mathematical reasoning, followed by Reasoning and Planning, with smaller lines of work using it to measure 3 other constructs. Among behavioral indicators, papers use it to measure Mathematical problem solving, while one paper reports it as related to Self-verification rather than measuring it.

**Space of uses.** No other measurement instrument is linked to it, but papers often place it in broader benchmark suites, for example alongside GSM8K and MATH, and also with Mini-Crosswords, WebShop, and SciBench. In those settings it is positioned as a standard reasoning benchmark, sometimes specifically as a mathematical reasoning and search problem; some papers also emphasize that its rules are well-defined with formal notions of correctness, or treat it as a planning problem with depth 3 and maximum breadth 48.

## Sources

**[Intelligent Go-Explore: Standing on the Shoulders of Giant Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/369a30aac2765950865efd318cef7f76-Paper-Conference.pdf)**
> A mathematical reasoning and search benchmark in which an agent must combine four numbers with arithmetic operations to obtain 24.

**[Steering Large Language Models between Code Execution and Textual Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/f763f7c9a6599e14b07add5937d8189c-Paper-Conference.pdf) (as "Game 24")**
> A mathematical reasoning benchmark where the goal is to form an equation that evaluates to 24 using a given set of integers.

**[Language Models as Implicit Tree Search](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25ag/chen25ag.pdf) (as "Game24")**
> Planning and reasoning benchmark where models must use four numbers and basic arithmetic operations to reach 24, evaluating combinatorial search and planning ability.

## Relationships

### → Game of 24
- **Mathematical reasoning** (constructs) — *measured_by*
  > Besides, we include a challenging mathematical reasoning task, Game of 24 Yao et al. (2024), where the goal is to use four numbers and basic arithmetic operations (addition, subtraction, multiplication, and division) to obtain 24 in 1 equation. (Section 4)
  - [Boosting of Thoughts: Trial-and-Error Problem Solving with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/b6f6bfbd260fbf2f5acb0a1d6439ca0e-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > We study Game of 24 (Yao et al., 2023), a reasoning problem where the transition dynamics and rules are well-defined and readily available.
  - [Learning to Search from Demonstration Sequences](https://proceedings.iclr.cc/paper_files/paper/2025/file/cdf80d651420b47da80f789f2631b1b5-Paper-Conference.pdf)
- **Mathematical problem solving** (behaviors tasks) — *measured_by*
  > The task is that given four cards drawn from a deck of poker, use basic arithmetic operations to combine the card values to reach 24.
  - [Learning to Search from Demonstration Sequences](https://proceedings.iclr.cc/paper_files/paper/2025/file/cdf80d651420b47da80f789f2631b1b5-Paper-Conference.pdf)
- **Planning** (constructs) — *measured_by*
  > To illustrate these limitations, we conducted experiments using the Game of 24, a simple yet illustrative planning problem with a depth of 3 and a maximum breadth of 48. (Section 3.2)
  - [LLMs Can Plan Only If We Tell Them](https://proceedings.iclr.cc/paper_files/paper/2025/file/c1e67cde895c3c91edb43569ad0df260-Paper-Conference.pdf)
- **Decision-making** (constructs) — *measured_by*
  > We use 100, 500, and 500 instances for Game of 24, WebShop, and ToolBench to evaluate the decision-making ability respectively.
  - [Rational Decision-Making Agent with Learning Internal Utility Judgment](https://proceedings.iclr.cc/paper_files/paper/2025/file/45994782a61bb51cad5c2bae36834265-Paper-Conference.pdf)
- **Logical reasoning** (constructs) — *measured_by*
  > the performance comparison on the Game of 24 validates the effectiveness of the FoT in the mathematical and logical reasoning task. (Section 4.6)
  - [Forest-of-Thought: Scaling Test-Time Compute for Enhancing LLM Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bi25a/bi25a.pdf)

### Associated with
- **Self-verification** (behaviors tasks)
  > It is particularly useful for problems where verification is significantly easier than solving the problem itself, e.g., the Game of 24 (Yao et al., 2024). (Section 2.2)
  - [DOTS: Learning to Reason Dynamically in LLMs via Optimal Reasoning Trajectories Search](https://proceedings.iclr.cc/paper_files/paper/2025/file/5e5d6f9ac33ba9349ba7b2be9f21bad9-Paper-Conference.pdf)
