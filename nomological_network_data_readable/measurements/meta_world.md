# Meta-World
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** Meta-world, MetaWorld  

## State of the Field

**What it is.** Across definitions, the prevailing usage treats Meta-World as a MuJoCo-based robotic manipulation benchmark, often also framed as a multi-task and meta-reinforcement-learning benchmark. Papers describe an agent controlling a Sawyer robot to manipulate objects such as doors, drawers, and windows, or more generally manipulating an object to achieve a given goal, and they use the benchmark to evaluate generalization across robot manipulation tasks. Some papers refer to specific subsets or settings, including ML10, ML45, MT10, MT50, the ML-45 version with 45 tasks, and a setup with 10 different robot manipulation goals.

**What it is claimed to measure.** Where papers make explicit measurement claims, they use Meta-World to measure one behavioral indicator, Robotic manipulation, and they do not connect it to any constructs. The reported use is concentrated rather than spread across many targets: relationship evidence describes Meta-World as a robotic manipulation benchmark suite and as a tabletop manipulation benchmark, so the measurement claim converges on robotic manipulation.

**Space of uses.** Papers position Meta-World mainly as an evaluation or verification benchmark for robot manipulation and for generalization across robot manipulation tasks. Snippets describe it being used alongside CLEVR-Robot and MuJoCo, and some papers instantiate it through benchmark subsets such as ML10, ML45, MT10, and MT50 or through 10 robot manipulation goals. No papers explicitly relate it to other measurement instruments.

## Sources

**[KALM: Knowledgeable Agents by Offline Reinforcement Learning from Large Language Model Rollouts](https://proceedings.neurips.cc/paper_files/paper/2024/file/e4cdb4090e04816422afcbb08d4badcf-Paper-Conference.pdf) (as "Meta-world")**
> A benchmark robotics manipulation environment built on the MuJoCo physics engine where an agent controls a Sawyer robot to manipulate various objects like doors, drawers, and windows.

**[Decomposed Prompt Decision Transformer for Efficient Unseen Task Generalization](https://proceedings.neurips.cc/paper_files/paper/2024/file/de18052eb17cce56554a9637dd5aadba-Paper-Conference.pdf) (as "MetaWorld")**
> A multi-task and meta-reinforcement-learning benchmark used here to evaluate generalization across robot manipulation tasks.

## Relationships

### → Meta-World
- **Robotic manipulation** (behaviors tasks) — *measured_by*
  > we verify the efficacy of KALM on two robotics manipulation environments: CLEVR-Robot [14] and Meta-world [15] (Section 1).
  - [KALM: Knowledgeable Agents by Offline Reinforcement Learning from Large Language Model Rollouts](https://proceedings.neurips.cc/paper_files/paper/2024/file/e4cdb4090e04816422afcbb08d4badcf-Paper-Conference.pdf)
- **In-context reinforcement learning** (constructs) — *measured_by*
  > We evaluate DICP across a range of discrete and continuous environments, including Darkroom variants and Meta-World. (ABSTRACT)
  - [Distilling Reinforcement Learning Algorithms for In-Context Model-Based Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/5c4a7643ab90cd62320df95c873a1c6f-Paper-Conference.pdf)
