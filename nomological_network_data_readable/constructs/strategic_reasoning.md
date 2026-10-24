# Strategic reasoning
**Type:** Construct  
**Referenced in:** 10 papers  
**Also known as:** Long-term strategic reasoning  

## State of the Field

**Definition agreement:** Complementary. Most papers define strategic reasoning as goal-directed, multi-step planning in an interactive setting, especially anticipating opponents and choosing counter-strategies or longer-term moves. A few papers broaden this to adaptation under uncertainty, policy-exploiting interaction, or negotiation tactics, so the definitions are not identical in scope, but they still describe the same general ability of an agent to select effective strategies over time in changing or multi-party situations.

**Space of definitions.** Across the surveyed work, the prevailing usage frames strategic reasoning as opponent-facing, goal-directed reasoning in competitive or multi-agent settings: analyzing the situation, anticipating an opponent's actions or policies, and choosing plans or counter-strategies to achieve a goal. Some papers narrow this to longer-horizon choice, emphasizing moves that maximize long-term success rather than immediate gains, or multi-step lines that secure guaranteed future wins. A smaller line of work applies the same label to broader or more domain-specific behavior, including navigating dynamic environments under uncertainty, planning multi-step interactions that exploit policy ambiguities or edge cases, and using conflict-resolution strategies such as interests, rights, or power in ways aligned with human negotiation behavior.

**Space of facets.** Papers most clearly organize the construct by time horizon. One named subtype, long-term strategic reasoning, is the latent ability to find and execute multi-step strategies, such as blocking an opponent's win or creating a fork that leads to assured future wins, rather than merely reacting to immediate threats. Elsewhere, strategic reasoning is discussed alongside logical reasoning, spatial reasoning, action selection, data analysis, theory of mind, and emotional sensitivity, and one paper treats strategic behavior in conflict dialogue through Interests-Rights-Power transitions. Across these usages, the same label spans game-theoretic planning, negotiation-like interaction, and red-teaming behavior.

**Space of measurement.** Operationalization is concentrated in 2 linked measurement instruments, SOTOPIA and TTT-Bench, and the construct is also linked to 2 behavioral indicators, Action selection and Data analysis. Both instruments are benchmark-style tasks: SOTOPIA is used as a social interaction or social intelligence task with goals, and TTT-Bench evaluates basic strategic, spatial, and logical reasoning through two-player Tic-Tac-Toe-style games. In practice, the linked measures assess performance in goal-directed social interaction and in move selection against an opponent. The two behavioral indicators are described as related abilities rather than direct measures, and other definitions also place the construct in business negotiations, policy-adherent red-teaming, and interpersonal conflict.

**Links.** One paper claims a causal relationship from strategic reasoning to adaptability, and another claims a causal relationship from strategic reasoning to strategic communication. One paper also reports it is related to theory of mind. In other related links, one game-focused paper groups it with action selection among common decision-making abilities, and another presents data analysis as requiring diverse reasoning skills that include strategic reasoning.

## Sources

**[GTBench: Uncovering the Strategic Reasoning Capabilities of LLMs via Game-Theoretic Evaluations](https://proceedings.neurips.cc/paper_files/paper/2024/file/3191170938b6102e5c203b036b7c16dd-Paper-Conference.pdf)**
> The ability to analyze competitive situations, anticipate opponent actions, and formulate plans to achieve goals within rule-based, multi-agent environments.

**[TTT-Bench: A Benchmark for Evaluating Reasoning Ability with Simple and Novel Tic-Tac-Toe-style Games](https://aclanthology.org/2025.emnlp-main.140.pdf) (as "Long-term strategic reasoning")**
> The latent ability to identify and execute multi-step strategies that lead to guaranteed future wins, such as creating a 'fork' with multiple winning paths, rather than reacting to immediate threats.

## Relationships

### Strategic reasoning →
- **SOTOPIA** (measurements) — *measured_by*
  > We evaluate EPO in three distinct social and physical environments requiring strategic reasoning: (1) SOTOPIA (Zhou et al., 2024a) for social interaction with goals. (Section 4.1)
  - [EPO: Explicit Policy Optimization for Strategic Reasoning in LLMs via Reinforcement Learning](https://aclanthology.org/2025.acl-long.747.pdf)
- **TTT-Bench** (measurements) — *measured_by*
  > In this work, we introduce TTT-Bench, a new benchmark that is designed to evaluate basic strategic, spatial, and logical reasoning abilities in LRMs through a suite of four two-player Tic-Tac-Toe-style games that humans can effortlessly solve from a young age. (Abstract)
  - [TTT-Bench: A Benchmark for Evaluating Reasoning Ability with Simple and Novel Tic-Tac-Toe-style Games](https://aclanthology.org/2025.emnlp-main.140.pdf)

### Associated with
- **Data analysis** (behaviors tasks)
  > the need for data analysis typically arises from specific application scenarios, and requires diverse reasoning skills including mathematical reasoning, logical reasoning, and strategic reasoning. (Abstract)
  - [DACO: Towards Application-Driven and Comprehensive Data Analysis via Code Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/a4cb1444fb05839d0113d2773da88a49-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Decision-making** (constructs)
  > Decision-making is a complex task requiring various abilities. Several common ones are evaluated across all games: ... (4) Strategic Reasoning...
  - [Competing Large Language Models in Multi-Agent Gaming Environments](https://proceedings.iclr.cc/paper_files/paper/2025/file/a46adbe2f0ca0e16ef8857e188991ad7-Paper-Conference.pdf)
