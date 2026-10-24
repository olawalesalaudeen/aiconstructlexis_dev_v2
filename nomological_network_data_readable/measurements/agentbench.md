# AgentBench
**Type:** Measurement  
**Referenced in:** 10 papers  

## State of the Field

**What it is.** Across the papers, AgentBench is most commonly treated as a benchmark or evaluation suite for LLMs acting as agents. Papers describe it as comprehensive or multi-dimensional, and one description characterizes it as having 8 distinct environments for assessing reasoning and decision-making abilities. The content is described broadly rather than uniformly: some definitions stress tasks such as OS interaction, web browsing, and web shopping, while others emphasize intrinsic reasoning and adaptation to environment feedback or broader coverage across code and web environments. Papers also describe task-specific reporting with success rate, F1 score, and reward score.

**What it is claimed to measure.** Papers use AgentBench to measure 7 constructs and 4 behavioral indicators, so its measurement claims are spread across multiple targets rather than converging on one. The construct links include agency, reasoning, and planning, with 4 other constructs also reported, and the behavioral-indicator links include action selection and instruction following, with 2 other behavioral indicators also reported. Papers also describe it as assessing reasoning and decision-making abilities and as systematically evaluating several core abilities.

**Space of uses.** Papers often position AgentBench as a main benchmark for evaluating agent capabilities, and some use it as a comparison point for multi-round, task-diverse evaluation or as an evaluation setup that another benchmark follows. It appears alongside AgentBoard and ToolBench in broader benchmark groupings, and papers link it to 1 other instrument, WebShop, through a related relationship because one study follows the AgentBench setup for evaluation there. Some papers also use only particular tasks or environments within the suite and report task-specific metrics such as success rate, F1 score, and reward score; one comparison describes AGENTBOARD as more planning-heavy than AgentBench.

## Sources

**[AgentBoard: An Analytical Evaluation Board of Multi-turn LLM Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/877b40688e330a0e2a3fc24084208dfa-Paper-Datasets_and_Benchmarks_Track.pdf)**
> A benchmark for evaluating LLMs as agents, referenced as a comparison point for multi-round and task-diverse agent evaluation.

## Relationships

### → AgentBench
- **Reasoning** (constructs) — *measured_by*
  > We present AGENTBENCH, a multi-dimensional benchmark that consists of 8 distinct environments to assess LLM-as-Agent’s reasoning and decision-making abilities.
  - [AgentBench: Evaluating LLMs as Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/e9df36b21ff4ee211a8b71ee8b7e9f57-Paper-Conference.pdf)
- **Instruction following** (behaviors tasks) — *measured_by*
  > AGENTBENCH thus systematically evaluate an LLM’s core abilities, including following instructions (Ouyang et al., 2022), coding (Chen et al., 2021), knowledge acquisition (Joshi et al., 2017; Talmor et al., 2019), logical reasoning (Srivastava et al., 2023), and commonsense grounding (Shridhar et al., 2020a).
  - [AgentBench: Evaluating LLMs as Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/e9df36b21ff4ee211a8b71ee8b7e9f57-Paper-Conference.pdf)
- **Knowledge acquisition** (constructs) — *measured_by*
  > AGENTBENCH thus systematically evaluate an LLM’s core abilities, including following instructions (Ouyang et al., 2022), coding (Chen et al., 2021), knowledge acquisition (Joshi et al., 2017; Talmor et al., 2019), logical reasoning (Srivastava et al., 2023), and commonsense grounding (Shridhar et al., 2020a).
  - [AgentBench: Evaluating LLMs as Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/e9df36b21ff4ee211a8b71ee8b7e9f57-Paper-Conference.pdf)
- **Logical reasoning** (constructs) — *measured_by*
  > AGENTBENCH thus systematically evaluate an LLM’s core abilities, including following instructions (Ouyang et al., 2022), coding (Chen et al., 2021), knowledge acquisition (Joshi et al., 2017; Talmor et al., 2019), logical reasoning (Srivastava et al., 2023), and commonsense grounding (Shridhar et al., 2020a).
  - [AgentBench: Evaluating LLMs as Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/e9df36b21ff4ee211a8b71ee8b7e9f57-Paper-Conference.pdf)
- **Commonsense reasoning** (constructs) — *measured_by*
  > AGENTBENCH thus systematically evaluate an LLM’s core abilities, including following instructions (Ouyang et al., 2022), coding (Chen et al., 2021), knowledge acquisition (Joshi et al., 2017; Talmor et al., 2019), logical reasoning (Srivastava et al., 2023), and commonsense grounding (Shridhar et al., 2020a).
  - [AgentBench: Evaluating LLMs as Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/e9df36b21ff4ee211a8b71ee8b7e9f57-Paper-Conference.pdf)
- **Agency** (constructs) — *measured_by*
  > We tested on two standardized agent evaluation benchmarks, AgentBench [57] and Agent-Board [61], each is a collection of diverse tasks for evaluating LMs’ agentic capabilities. (Sec. 4.2)
  - [Observational Scaling Laws and the Predictability of Langauge Model Performance](https://proceedings.neurips.cc/paper_files/paper/2024/file/1cded4f97cf5f01a284c574110b7e3b9-Paper-Conference.pdf)
- **Text-to-SQL** (behaviors tasks) — *measured_by*
  > Empirical results from AgentBench indicate that applying CycleQD to LLAMA3-8B-INSTRUCT based models not only enables them to surpass traditional fine-tuning methods in coding, operating systems, and database tasks, but also achieves performance on par with GPT-3.5-TURBO (Section 1).
  - [Agent Skill Acquisition for Large Language Models via CycleQD](https://proceedings.iclr.cc/paper_files/paper/2025/file/755acd0c7c07180d78959b6d89768207-Paper-Conference.pdf)
- **Planning** (constructs) — *measured_by*
  > Concurrently, comprehensive benchmarks like AgentBench (Liu et al., 2023a), ToolBench (Qin et al., 2024), and AgentBoard (Ma et al., 2024) have been established to rigorously assess agent performance in reasoning, planning, and multi-turn interactions.
  - [xLAM: A Family of Large Action Models to Empower AI Agent Systems](https://aclanthology.org/2025.naacl-long.578.pdf)
- **Collaboration** (behaviors tasks) — *measured_by*
  > AgentBench (Liu et al., 2023) and AgentGym (Xi et al., 2024) comprise multiple tasks requiring different LLMs within the system to cooperate and discuss
  - [Compound AI Systems Optimization: A Survey of Methods, Challenges, and Future Directions](https://aclanthology.org/2025.emnlp-main.1463.pdf)
- **Decision-making** (constructs) — *measured_by*
  > We present AGENTBENCH, a multi-dimensional benchmark that consists of 8 distinct environments to assess LLM-as-Agent’s reasoning and decision-making abilities.
  - [AgentBench: Evaluating LLMs as Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/e9df36b21ff4ee211a8b71ee8b7e9f57-Paper-Conference.pdf)
