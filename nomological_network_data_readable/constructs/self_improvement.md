# Self-improvement
**Type:** Construct  
**Referenced in:** 34 papers  
**Also known as:** Self-evolution, Continuous improvement, Self-improvement capability, Policy improvement, Learning from mistakes, Iterative self-improvement, In-context improvement, Test-time learning, Self-transfer learning, Recursive self-improvement, Self-modification  

## State of the Field

**Definition agreement:** Conflicting. Most papers use Self-improvement for autonomous performance gains from a model or agent's own outputs, feedback, or interaction history, but a substantial set define it as self-training or fine-tuning across learning cycles with updates, while another substantial set define it as test-time or in-context refinement explicitly without retraining or parameter updates. Because these versions apply the construct to different processes and disagree on what counts as Self-improvement, papers using them would often not be studying the same thing.

**Space of definitions.** Across the surveyed work, the prevailing usage treats self-improvement as a latent ability or capacity of a model or agent to improve its own performance, outputs, behavior, or reasoning over time through iterative, self-directed updates. Most definitions tie this to mechanisms such as generating outputs or training data, verifying or filtering them, reflecting on mistakes, critiquing responses, or learning from past experience and feedback, and several explicitly describe the process as autonomous or without direct human intervention. A smaller line of work narrows the term to recursive output refinement at inference, in-context improvement without parameter updates, continuous improvement over input-feedback streams, policy improvement for higher cumulative reward, or recursive improvement through code and algorithm modification; one paper further distinguishes the latent capability from iterative self-improvement as the observable generate, verify, and fine-tune process.

**Space of facets.** Papers use several overlapping labels for nearby ideas, from self-evolution and continuous improvement to test-time learning and recursive self-improvement. Across these labels, the recurring facets are the improvement signal, critique, reflection on negative solutions, reward or feedback, verified self-generated data, or past trajectories, the update locus, context-window refinement, fine-tuning or other parameter updates, or direct code changes, and the target of change, responses and reasoning, policy, learning algorithm, or knowledge utilization. The same label, self-improvement, is used both for a broad umbrella capability and for specific procedures, while some papers separate recursive self-improvement from self-modification and separate the latent capability from the multi-round process that expresses it.

**Space of measurement.** Operationalization is heterogeneous: papers link self-improvement to 2 instruments and 6 behavioral indicators. AIME 2025 is the clearest measured_by instrument, presented as a mathematics benchmark for examining test-time learning ability, while STAR is linked only as a related iterative fine-tuning approach. Papers also assess self-improvement with analysis metrics such as stability and plasticity, and the behavioral side is represented by action selection plus 5 other indicators. These choices mostly mirror definitions that emphasize iterative improvement from feedback, reflection, or experience, though some measurements narrow the construct to mathematical problem solving or to preserving old knowledge while acquiring new knowledge.

**Links.** Link patterns span 14 constructs and 6 behavioral indicators. Several papers claim a causal relationship from self-improvement to generalization, and single papers claim causal relationships from self-improvement to reasoning and generation diversity; one paper also says generalization is related to self-improvement. In the other direction, papers claim causal relationships from critique ability and instruction following ability to self-improvement, alongside 9 other constructs and 6 behavioral indicators that are linked either as causes of self-improvement or as its outcomes. A smaller number of related links connect self-improvement with other methods and behaviors.

## Sources

**[AlphaMath Almost Zero: Process Supervision without Process](https://proceedings.neurips.cc/paper_files/paper/2024/file/30dfe47a3ccbee68cffa0c19ccb1bc00-Paper-Conference.pdf) (as "Self-evolution")**
> The ability of a model to autonomously improve its capabilities and reinforce its knowledge utilization through iterative self-generated training, without external process supervision.

**[CriticEval: Evaluating Large-scale Language Model as Critic](https://proceedings.neurips.cc/paper_files/paper/2024/file/7b7d7985f62284060d65f532ed2ea5fa-Paper-Conference.pdf)**
> The latent capacity of a model to effectively analyze and correct flaws in its own or others' responses, facilitated by critique ability.

**[StreamBench: Towards Benchmarking Continuous Improvement of Language Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/c189915371c4474fe9789be3728113fc-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Continuous improvement")**
> The ability of an LLM agent to enhance its performance on a task over time by learning from a continuous sequence of inputs and feedback.

**[Mind the Gap: Examining the Self-Improvement Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/63943ee9fe347f3d95892cf87d9a42e6-Paper-Conference.pdf) (as "Self-improvement capability")**
> The latent ability of a large language model to improve its performance by generating outputs, verifying them, and then updating itself based on the verified data.

**[Distilling Reinforcement Learning Algorithms for In-Context Model-Based Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/5c4a7643ab90cd62320df95c873a1c6f-Paper-Conference.pdf) (as "Policy improvement")**
> The latent process of refining a strategy or policy in-context to maximize cumulative rewards based on new information discovered through interaction.

**[Vision-Language Models Can Self-Improve Reasoning via Reflection](https://aclanthology.org/2025.naacl-long.447.pdf) (as "Learning from mistakes")**
> The model's capacity to improve its reasoning by analyzing and correcting flawed rationales, treating errors as opportunities for self-improvement.

**[Mind the Gap: Examining the Self-Improvement Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/63943ee9fe347f3d95892cf87d9a42e6-Paper-Conference.pdf) (as "Iterative self-improvement")**
> The observable, multi-round process where a model repeatedly generates data, verifies it, and fine-tunes on the filtered results, leading to changes in its performance and output distribution over time.

**[Eureka: Human-Level Reward Design via Coding Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/70c26937fbf3d4600b69a129031b66ec-Paper-Conference.pdf) (as "In-context improvement")**
> The ability of the LLM to refine and enhance previously generated outputs based on feedback or reflection provided within the context window, enabling iterative optimization without parameter updates.

**[How Far Can LLMs Improve from Experience? Measuring Test-Time Learning Ability in LLMs with Human Comparison](https://aclanthology.org/2025.emnlp-main.1304.pdf) (as "Test-time learning")**
> The latent ability of a model to improve its performance through interaction, feedback, and reflection during test time by discovering and applying generalizable strategies beyond memorization.

**[Can RLHF be More Efficient with Imperfect Reward Models? A Policy Coverage Perspective](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25o/huang25o.pdf) (as "Self-transfer learning")**
> The latent ability of a learning system to improve future policy updates by distilling knowledge from its own past online interactions, forming a self-improving loop.

**[Gödel Agent: A Self-Referential Agent Framework for Recursively Self-Improvement](https://aclanthology.org/2025.acl-long.1354.pdf) (as "Recursive self-improvement")**
> The latent ability of an agent to iteratively enhance its own policy and learning algorithm by modifying its code, leading to progressively better performance over time.

**[Gödel Agent: A Self-Referential Agent Framework for Recursively Self-Improvement](https://aclanthology.org/2025.acl-long.1354.pdf) (as "Self-modification")**
> The agent's ability to dynamically alter its own code and operational logic during execution based on its reasoning and environmental feedback.

## Relationships

### Self-improvement →
- **Generalization** (constructs) — *causes*
  > efﬁcient exploration to discover better strategies and solutions autonomously, i.e., self-improving, which can allow agents to generalize across the various tasks in the digital world.
  - [Cradle: Empowering Foundation Agents towards General Computer Control](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tan25h/tan25h.pdf)
- **Reasoning** (constructs) — *causes*
  > These results consistently demonstrate RISE’s effectiveness in enhancing reasoning capabilities for different models. (Section 1)
  - [Recursive Introspection: Teaching Language Model Agents How to Self-Improve](https://proceedings.neurips.cc/paper_files/paper/2024/file/639d992f819c2b40387d4d5170b8ffd7-Paper-Conference.pdf)
- **Self-correction** (behaviors tasks) — *causes*
  > imbue an LLM with the capability to recursively detect and correct its previous mistakes in subsequent iterations.
  - [Recursive Introspection: Teaching Language Model Agents How to Self-Improve](https://proceedings.neurips.cc/paper_files/paper/2024/file/639d992f819c2b40387d4d5170b8ffd7-Paper-Conference.pdf)
- **Mathematical reasoning** (constructs) — *causes*
  > our AlphaMath enhances Llama3’s mathematical reasoning capabilities without any annotations, yielding an average improvement of +20 points. (Section 4.6)
  - [AlphaMath Almost Zero: Process Supervision without Process](https://proceedings.neurips.cc/paper_files/paper/2024/file/30dfe47a3ccbee68cffa0c19ccb1bc00-Paper-Conference.pdf)
- **Problem-solving ability** (constructs) — *causes*
  > Self-improvement through post-training methods such as iterative preference learning has been acclaimed for enhancing the problem-solving capabilities (e.g., mathematical reasoning) of Large Language Models (LLMs) without human intervention. (ABSTRACT)
  - [Progress or Regress? Self-Improvement Reversal in Post-training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1fa0c4e5a7e189729230d018b229abc7-Paper-Conference.pdf)
- **Generation diversity** (constructs) — *causes*
  > The evaluation results highlight a critical trade-off in iterative self-improvement: while aiming for higher accuracy, the diversity of outputs, which can be crucial for creativity and robustness in problem-solving, is compromised. (Section 5.2)
  - [Progress or Regress? Self-Improvement Reversal in Post-training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1fa0c4e5a7e189729230d018b229abc7-Paper-Conference.pdf)
- **Data efficiency** (constructs) — *causes*
  > "This suggests the offline policy computed with the data from the online learning process is a promising candidate to transfer from, which we term as “self-transfer learning”."
  - [Can RLHF be More Efficient with Imperfect Reward Models? A Policy Coverage Perspective](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25o/huang25o.pdf)
- **Prompt engineering** (behaviors tasks) — *causes*
  > We design eva, the first method that enables LLMs to prioritize and adaptively create useful prompts, for continual RL training and self-improving. (Introduction)
  - [Reward-Guided Prompt Evolving in Reinforcement Learning for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ye25a/ye25a.pdf)
- **AIME 2025** (measurements) — *measured_by*
  > We leverage this most recent mathematics benchmark to examine the test-time learning capabilities of large language models in solving high-level mathematical problems. (Section 3.1)
  - [How Far Can LLMs Improve from Experience? Measuring Test-Time Learning Ability in LLMs with Human Comparison](https://aclanthology.org/2025.emnlp-main.1304.pdf)
- **Complex reasoning** (constructs) — *causes*
  > an adaptive self-improvement agentic system that enables LLMs to perform such complex reasoning under limited data by iteratively improving their capability through self-generated experience. (Abstract)
  - [Adaptive Self-improvement LLM Agentic System for ML Library Development](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25at/zhang25at.pdf)

### → Self-improvement
- **Critique ability** (constructs) — *causes*
  > Critique ability is crucial for the self-improvement [1, 2] of LLMs, as it enables the effective analysis and correction of flaws in responses [3, 4]. (Introduction)
  - [CriticEval: Evaluating Large-scale Language Model as Critic](https://proceedings.neurips.cc/paper_files/paper/2024/file/7b7d7985f62284060d65f532ed2ea5fa-Paper-Conference.pdf)
- **Memory management** (constructs) — *causes*
  > A robust memory system is a critical component of learning and improvement. The AI agent must be able to recall and integrate information from past negotiations and actions to inform its current and future decision-making processes. This endows the agent with the ability to evolve. (Section 1).
  - [Richelieu: Self-Evolving LLM-Based Agents for AI Diplomacy](https://proceedings.neurips.cc/paper_files/paper/2024/file/df2d62b96a4003203450cf89cd338bb7-Paper-Conference.pdf)
- **Reasoning** (constructs) — *causes*
  > We believe this result indicates that self-improvement requires a minimal level of instruction following and reasoning capabilities, which is not present in these small models. (Section 4.1)
  - [Mind the Gap: Examining the Self-Improvement Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/63943ee9fe347f3d95892cf87d9a42e6-Paper-Conference.pdf)
- **Planning** (constructs) — *causes*
  > These findings suggest that the model’s inherent reasoning and planning capabilities developed during pre-training are crucial for general self-improvement. (Section 4.4)
  - [Mind the Gap: Examining the Self-Improvement Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/63943ee9fe347f3d95892cf87d9a42e6-Paper-Conference.pdf)
- **Instruction following** (behaviors tasks) — *causes*
  > We believe this result indicates that self-improvement requires a minimal level of instruction following and reasoning capabilities, which is not present in these small models. (Section 4.1)
  - [Mind the Gap: Examining the Self-Improvement Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/63943ee9fe347f3d95892cf87d9a42e6-Paper-Conference.pdf)
- **Instruction following ability** (constructs) — *causes*
  > for SLMs, their weaker instruction-following ability and unreliable self-rewarding can mislead self-improvement.
  - [Mutual Reasoning Makes Smaller LLMs Stronger Problem-Solver](https://proceedings.iclr.cc/paper_files/paper/2025/file/35514d533cdc278a7780daf0dbe7d0b7-Paper-Conference.pdf)
- **Self-reflection** (behaviors tasks) — *causes*
  > Reflection on self-generated CoT facilitates learning from mistakes. (Section 5.1)
  - [Vision-Language Models Can Self-Improve Reasoning via Reflection](https://aclanthology.org/2025.naacl-long.447.pdf)
- **Self-awareness** (constructs) — *causes*
  > By introspecting these elements, the agent gains an understanding of its own operational state and can adapt accordingly.
  - [Gödel Agent: A Self-Referential Agent Framework for Recursively Self-Improvement](https://aclanthology.org/2025.acl-long.1354.pdf)
- **In-context reinforcement learning** (constructs) — *causes*
  > In particular, the assigned weights are constructed from the advantage functions of the behavior policies such that actions with high advantage values receive more weights during pretraining, leading to guaranteed policy improvements over the behavior policies. (Section 1).
  - [In-Context Reinforcement Learning From Suboptimal Historical Data](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dong25d/dong25d.pdf)
- **Metacognition** (constructs) — *causes*
  > We argue that sustainable, generalized self-improvement requires agents to develop intrinsic metacognitive learning abilities. (Section 1)
  - [Position: Truly Self-Improving Agents Require Intrinsic Metacognitive Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25cw/liu25cw.pdf)
- **Prompt engineering** (behaviors tasks) — *causes*
  > “enables LLMs to prioritize and adaptively create useful prompts, for continual RL training and self-improving.”
  - [Reward-Guided Prompt Evolving in Reinforcement Learning for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ye25a/ye25a.pdf)

### Associated with
- **Code generation** (behaviors tasks)
  > Zelikman et al. (2023) applied recursive self-improvement to code generation, where the target of improvement was the optimizer itself.
  - [Gödel Agent: A Self-Referential Agent Framework for Recursively Self-Improvement](https://aclanthology.org/2025.acl-long.1354.pdf)
- **Stability** (constructs)
  > We conducted further analysis to investigate the improvements of CER with various metrics, such as cross-template success rate, stability (preservation of old knowledge), and plasticity (acquisition of new knowledge) (Grossberg, 1982; Rolnick et al., 2019) (§5.2, §5.3), demonstrating its generalizability and effectiveness as a self-improvement system.
  - [Contextual Experience Replay for Self-Improvement of Language Agents](https://aclanthology.org/2025.acl-long.694.pdf)
- **Plasticity** (constructs)
  > We conducted further analysis to investigate the improvements of CER with various metrics, such as cross-template success rate, stability (preservation of old knowledge), and plasticity (acquisition of new knowledge) (Grossberg, 1982; Rolnick et al., 2019) (§5.2, §5.3), demonstrating its generalizability and effectiveness as a self-improvement system.
  - [Contextual Experience Replay for Self-Improvement of Language Agents](https://aclanthology.org/2025.acl-long.694.pdf)
