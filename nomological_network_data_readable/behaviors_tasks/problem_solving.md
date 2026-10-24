# Problem solving
**Type:** Behavior  
**Referenced in:** 20 papers  
**Also known as:** Multi-task problem solving, Reasoning task solving, Real-world problem solving  

## State of the Field

**Space of definitions.** Across the literature, the prevailing usage treats problem solving as producing correct answers or solutions on benchmark problems, especially across commonsense, math, code, and other diverse tasks. Several papers also frame it as devising and executing a sequence of steps, or even a program, under constraints or examples, or as applying task-specific knowledge to reach a solution. Success is usually stated in terms of correctness, though one paper describes settings where multiple candidate responses or reasoning steps may be needed.

**Variants.** Papers name several variants, including multi-task problem solving, reasoning task solving, and real-world problem solving. These cover heterogeneous tasks across domains and question types, structured logical or mathematical derivation, and inductive reasoning embedded in natural-language real-life scenarios such as item trading. A smaller line of work also studies settings where a sequence of steps or a program must be derived from constraints or examples, as well as well-defined technical queries.

**Space of elicitation and scores.** Papers link problem solving to 3 measurement instruments. The most frequently linked instrument is MMLU, used for evaluating multi-task problem solving and described as requiring diverse world knowledge and problem solving abilities; GSM8K is used as a benchmark for reasoning tasks; Omni-MATH is presented as a universal Olympiad-level mathematical benchmark that poses new challenges to problem solving and complex reasoning.

**What it is taken as evidence of.** Rather than tying problem solving to one shared construct, papers relate it to 2 constructs: Mathematical reasoning and Task generalization. One line of work states that mathematical ability serves as a measure of problem-solving and complex reasoning skills, while another examines task generalization including problem solving.

## Sources

**[Progress or Regress? Self-Improvement Reversal in Post-training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1fa0c4e5a7e189729230d018b229abc7-Paper-Conference.pdf)**
> Producing correct answers to benchmark problems across commonsense, math, and code tasks.

**[Automated Design of Agentic Systems](https://proceedings.iclr.cc/paper_files/paper/2025/file/36b7acf6f6010652b3f2a433774a66fe-Paper-Conference.pdf) (as "Multi-task problem solving")**
> Solving a heterogeneous set of tasks spanning multiple domains and question types.

**[Understanding and Enhancing Safety Mechanisms of LLMs via Safety-Specific Neuron](https://proceedings.iclr.cc/paper_files/paper/2025/file/6d2666e2cf44088cc57204fbc5ef7f34-Paper-Conference.pdf) (as "Reasoning task solving")**
> Completing structured problems requiring logical or mathematical derivation as part of general capability evaluation.

**[MIRAGE: Evaluating and Explaining Inductive Reasoning Process in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/b782a3462ee9d566291cff148333ea9b-Paper-Conference.pdf) (as "Real-world problem solving")**
> An inductive reasoning task presented in a natural language format, where abstract rules are embedded within real-life scenarios like item trading.

## Relationships

### Problem solving →
- **MMLU** (measurements) — *measured_by*
  > MMLU (Hendrycks et al., 2021) for evaluating Multi-task Problem Solving (Section 4.2)
  - [Automated Design of Agentic Systems](https://proceedings.iclr.cc/paper_files/paper/2025/file/36b7acf6f6010652b3f2a433774a66fe-Paper-Conference.pdf)
- **Omni-MATH** (measurements) — *measured_by*
  > We introduce Omni-Math, a universal Olympiad-level mathematical benchmark with over 33 sub-domains and diverse difficulty levels, posing new challenges to the problem solving and complex reasoning capability of LLMs. (Section 1)
  - [Omni-MATH: A Universal Olympiad Level Mathematic Benchmark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f9e1e8b56c7e363985ebeb0e9dd1a85c-Paper-Conference.pdf)

### → Problem solving
- **Chain of thought** (behaviors tasks) — *causes*
  > Another line of work has shown that allowing LLMs to generate intermediate “reasoning” steps, or “chain-of-thoughts” (CoTs) can significantly improve their final answer (Wei et al., 2022; Nye et al., 2021; Zhou et al., 2023). (Section 5)
  - [Learning How Hard to Think: Input-Adaptive Allocation of LM Computation](https://proceedings.iclr.cc/paper_files/paper/2025/file/ff414825df833edb8b1839e3d5d495e9-Paper-Conference.pdf)

### Associated with
- **Mathematical reasoning** (constructs)
  > Among these capabilities, mathematical ability serves as a fundamental measure of the problem-solving and complex reasoning skills of LLMs... (Section 1)
  - [Omni-MATH: A Universal Olympiad Level Mathematic Benchmark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f9e1e8b56c7e363985ebeb0e9dd1a85c-Paper-Conference.pdf)
- **Task generalization** (constructs)
  > horizontally, we examine the task generalization including problem solving, answerable judging, outcome judging, and process judging. (Section 1)
  - [Is Your Model Really A Good Math Reasoner? Evaluating Mathematical Reasoning with Checklist](https://proceedings.iclr.cc/paper_files/paper/2025/file/54d2d38a56a74387d5916ee40e462295-Paper-Conference.pdf)
- **Task decomposition** (behaviors tasks)
  > Solving real-world problems with LLM agents can be structured into a multi-stage procedure: • Decomposition of the problem: The procedure begins by breaking down a complex question into an actionable plan characterized by simpler steps. (Section 3).
  - [AvaTaR: Optimizing LLM Agents for Tool Usage via Contrastive Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/2db8ce969b000fe0b3fb172490c33ce8-Paper-Conference.pdf)
