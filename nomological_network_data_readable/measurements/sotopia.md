# SOTOPIA
**Type:** Measurement  
**Referenced in:** 5 papers  

## State of the Field

**What it is.** Across papers, the prevailing description is of an open-ended, interactive benchmark environment for simulating complex social interactions between artificial or LLM agents and assessing social intelligence. Definitions consistently refer to scenarios in which agents have character or role profiles and private goals, and one paper specifies simulated social tasks defined by a scenario, two role profiles, and private goals. A more detailed usage description says it includes 90 scenarios with 5 role pairs, yielding 450 self-chat tasks and 900 non-self-chat tasks, while another paper describes it more broadly as a platform or framework for simulation and evaluation.

**What it is claimed to measure.** Papers link SOTOPIA to 2 constructs and no behavioral indicators. The most common linkage is that it measures Strategic reasoning: papers report evaluating strategic reasoning in SOTOPIA, including social interaction with goals and as one of the social intelligence tasks in a broader strategic-reasoning evaluation. A smaller line of work presents it as measuring Social intelligence directly, matching descriptions of the benchmark as evaluating agents' social intelligence.

**Space of uses.** Papers use SOTOPIA both as a benchmark or testbed and as a simulation framework. It is used for testing in work on social agents, as the foundation for the AI-LIEDAR framework, and as one of several environments in evaluations of strategic reasoning; one paper also states that the simulation is conducted using the Sotopia framework with constructed scenarios. No other measurement instrument is linked to it.

## Sources

**[AI-LieDar : Examine the Trade-off Between Utility and Truthfulness in LLM Agents](https://aclanthology.org/2025.naacl-long.595.pdf)**
> An open-ended benchmark environment for evaluating social intelligence by simulating complex social interactions where agents with specific character profiles and private goals interact in various scenarios.

## Relationships

### → SOTOPIA
- **Social intelligence** (constructs) — *measured_by*
  > We present SOTOPIA, an open-ended environment to simulate complex social interactions between artificial agents and evaluate their social intelligence.
  - [SOTOPIA: Interactive Evaluation for Social Intelligence in Language Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/b3075b88e583a0e98d8b24338a613060-Paper-Conference.pdf)
- **Strategic reasoning** (constructs) — *measured_by*
  > We evaluate EPO in three distinct social and physical environments requiring strategic reasoning: (1) SOTOPIA (Zhou et al., 2024a) for social interaction with goals. (Section 4.1)
  - [EPO: Explicit Policy Optimization for Strategic Reasoning in LLMs via Reinforcement Learning](https://aclanthology.org/2025.acl-long.747.pdf)
