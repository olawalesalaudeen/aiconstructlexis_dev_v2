# ALFWorld
**Type:** Measurement  
**Referenced in:** 47 papers  
**Also known as:** AlfWorld, Alfworld  

## State of the Field

**What it is.** Across papers, the prevailing description is a text-based household or housework benchmark for interactive agents, often framed as an embodied environment aligned with or based on ALFRED and accessed through a text-only or low-level text action interface. Agents are described as following high-level language instructions to complete tasks such as finding hidden objects, moving and manipulating items, and more broadly picking, cleaning, heating, or cooling objects. Some papers specify six task types and either 134 unseen environments or 134 evaluation tasks, while a smaller line of work treats ALFWorld as a text-based world simulator with interaction logs for next action prediction.

**What it is claimed to measure.** Papers use ALFWorld to measure 9 constructs and 3 behavioral indicators, so its reported measurement role spans multiple capabilities rather than a single shared target. Recurring construct-level uses are Generalization and Decision-making, while recurring behavioral uses are Action selection, Task completion, and Embodied planning. Other papers also report it as measuring several additional constructs.

**Space of uses.** No measurement instrument is linked to ALFWorld. In evaluation setups, papers often place it alongside other agent benchmarks, for example WebShop, HotPotQA, ScienceWorld, PDDL, and InterCode, and usually position it as an embodied or decision-making task within a broader benchmark suite. A smaller use treats it as a target for trajectory scoring or next-action prediction on navigation logs.

**Concerns raised.** One paper foregrounds a benchmark property in misalignment studies: tasks such as Clean, Heat, and Cool have irreversible effects, and that work uses ALFWorld to test preemptive detection and correction of misaligned actions.

## Sources

**[Retroformer: Retrospective Large Language Agents with Policy Gradient Optimization](https://proceedings.iclr.cc/paper_files/paper/2024/file/29f421fbdcc82aeb349d784d3aaccdb3-Paper-Conference.pdf) (as "AlfWorld")**
> An embodied task benchmark based on the ALFRED dataset, where an agent must follow high-level language instructions to complete household tasks in a simulated environment using low-level text actions.

**[Lemur: Harmonizing Natural Language and Code for Language Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/41ec0e510c31883f3b50a782651fb5b9-Paper-Conference.pdf)**
> A text-based game suite of interactive housework environments used to evaluate LLM-agent planning and task completion.

**[AgentRefine: Enhancing Agent Generalization through Refinement Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a3cc50126338b175e56bb3cad134db0b-Paper-Conference.pdf) (as "Alfworld")**
> Alfworld is an interactive agent benchmark used to evaluate task completion in household-style environments.

## Relationships

### → ALFWorld
- **Decision-making** (constructs) — *measured_by*
  > We select 5 tasks: SciWorld (Wang et al., 2022), Alfworld (Shridhar et al., 2020), BabyAI (Chevalier-Boisvert et al., 2018), PDDL (Vallati et al., 2015), and Jericho (Hausknecht et al., 2020), all of them are testing models’ decision-making ability. (Section 4.1)
  - [AgentRefine: Enhancing Agent Generalization through Refinement Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a3cc50126338b175e56bb3cad134db0b-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > AlFWorld and ScienceWorld include unseen tasks to evaluate the agent’s generalization ability. (Section 4.1)
  - [Agent Planning with World Knowledge Model](https://proceedings.neurips.cc/paper_files/paper/2024/file/d032263772946dd5026e7f3cd22bce5b-Paper-Conference.pdf)
- **Task completion** (behaviors tasks) — *measured_by*
  > Given only one simple demonstration, AutoManual signiﬁcantly improves task success rates, achieving 97.4% with GPT-4-turbo and 86.2% with GPT-3.5-turbo on ALFWorld benchmark tasks. (Abstract)
  - [AutoManual: Constructing Instruction Manuals by LLM Agents via Interactive Environmental Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/0142921fad7ef9192bd87229cdafa9d4-Paper-Conference.pdf)
- **Sequential decision-making** (constructs) — *measured_by*
  > We use one benchmark to evaluate the performance in sequential decision-making scenarios: ALFWorld (Shridhar et al., 2020) (Section 3.4)
  - [CodePlan: Unlocking Reasoning Potential in Large Language Models by Scaling Code-form Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/c362b360765ed90ae4bd9c6764837e0e-Paper-Conference.pdf)
- **Data efficiency** (constructs) — *measured_by*
  > "We conduct experiments on major benchmarks like ALFWorld and Overcooked, demonstrating that the sample efficiency of traditional RL algorithms... can largely benefit from integrating LLM action priors."
  - [Efficient Reinforcement Learning with Large Language Model Priors](https://proceedings.iclr.cc/paper_files/paper/2025/file/797be96e4481c3fe5d675c1ba5352969-Paper-Conference.pdf)
- **Embodied planning** (behaviors tasks) — *measured_by*
  > “We conduct experiments on three representative agent tasks: Complex Reasoning (HotpotQA (Yang et al., 2018)), Embodied Decision (ALFWorld (Shridhar et al., 2020)), and Interactive Programming (InterCode (Yang et al., 2023))”
  - [Improving Retrospective Language Agents via Joint Policy Gradient Optimization](https://aclanthology.org/2025.naacl-long.6.pdf)
- **Cross-domain generalization** (constructs) — *measured_by*
  > We evaluate our WorMI on the VirtualHome and ALFWorld benchmarks, demonstrating superior zero-shot and few-shot performance compared to several LLM-based approaches across a range of unseen domains. These results highlight the framework’s potential for scalable, real-world deployment in embodied agent scenarios where adaptability and data efficiency are essential. (Abstract).
  - [World Model Implanting for Test-time Adaptation of Embodied Agents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yoo25a/yoo25a.pdf)
- **Commonsense knowledge** (constructs) — *measured_by*
  > "The main challenge of this benchmark is to locate the target object and fulfill household work with commonsense knowledge of LLMs."
  - [Enhancing Decision-Making of Large Language Models via Actor-Critic](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dong25c/dong25c.pdf)
- **Natural language understanding** (constructs) — *measured_by*
  > ALFWorld (Shridhar et al., 2020) provides a text-based household task environment that for natural language understanding and embodied reasoning. (Section 5.1)
  - [SAND: Boosting LLM Agents with Self-Taught Action Deliberation](https://aclanthology.org/2025.emnlp-main.152.pdf)
- **Embodied reasoning** (constructs) — *measured_by*
  > ALFWorld (Shridhar et al., 2020) provides a text-based household task environment that for natural language understanding and embodied reasoning. (Section 5.1)
  - [SAND: Boosting LLM Agents with Self-Taught Action Deliberation](https://aclanthology.org/2025.emnlp-main.152.pdf)
- **Physical world understanding** (constructs) — *measured_by*
  > results from the ALFWorld environment demonstrate the impact of process rewards on physical reasoning (Section 4.2).
  - [AgentPro: Enhancing LLM Agents with Automated Process Supervision](https://aclanthology.org/2025.emnlp-main.506.pdf)
