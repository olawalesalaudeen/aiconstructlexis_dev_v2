# System 2 thinking
**Type:** Construct  
**Referenced in:** 12 papers  
**Also known as:** System-2 thinking, System 2 reasoning, Deliberate reasoning, Deep thinking, Slow thinking  

## State of the Field

**Definition agreement:** Consensus. Most papers define System 2 thinking as a slow, deliberate, reflective, step-by-step mode of reasoning used for complex problem solving, often involving checking assumptions, logic, or errors. A few papers emphasize particular facets such as revising an initial output, exploring multiple paths, rule-based processing, or search-based implementation, but these are variations in emphasis rather than different phenomena.

**Space of definitions.** Across the surveyed papers, the prevailing usage frames System 2 thinking as slow, deliberate, reflective, logical, or analytical reasoning, often described as step-by-step and effortful for complex problem solving and reasoning. Most definitions stay within this core, though some narrow it to methodically examining assumptions, conditions, calculations, and logic to identify mistakes, and others emphasize revising an initial output, exploring multiple reasoning paths, or conscious evaluation rather than single-path answering. A smaller line of work broadens the term to deliberate, consistent, rule-based processing that is not swayed by incidental or superficial features.

**Space of facets.** Papers use several near-synonymous labels for closely related ideas, including System-2 thinking, System 2 reasoning, slow thinking, deep thinking, and deliberate reasoning. Within that family, some authors treat self-reflection as a manifestation of the construct, while others foreground planning, exploration of alternatives, self-correction, intermediate search traces, predictive rollout search, or MCTS-style iterative search. It is also repeatedly set against fast or System 1 thinking, with some papers describing models as moving between slow and fast modes.

**Space of measurement.** No measurement instrument is linked to it. The recorded observables are 3 behavioral indicators, Chain of thought, Self-reflection, and Self-correction, and papers describe these through intermediate reasoning steps, detailed reasoning paths, or multiple steps of thinking and reflection. These observables match the dominant definitions centered on deliberate, step-by-step, and reflective reasoning, while the consistency and robustness-oriented framing is not paired with a linked instrument.

**Links.** Across linked constructs, Meta-reasoning, Robustness, and System 1 thinking are related to System 2 thinking, and Chain of thought, Self-correction, and Self-reflection are also related to it in different papers. Self-reflection appears in both link types: one paper relates Self-reflection to System 2 thinking, while another claims a causal relationship from System 2 thinking to Self-reflection. Separate papers also claim causal relationships from System 2 thinking to Hierarchical reasoning and to Mathematical reasoning, and no correlational relationship is reported.

## Sources

**[Visual Agents as Fast and Slow Thinkers](https://proceedings.iclr.cc/paper_files/paper/2025/file/14fb70b97c70d5cc5445cd2d5bf818db-Paper-Conference.pdf)**
> A cognitive mode characterized by slow, deliberate, logical, and analytical thought processes required for complex problem-solving and reasoning.

**[MR-GSM8K: A Meta-Reasoning Benchmark for Large Language Model Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/fc0b0e6ac2da44d5839b13f90625b357-Paper-Conference.pdf) (as "System-2 thinking")**
> The cognitive ability to engage in slow, deliberate, and methodical reasoning to thoroughly examine assumptions, conditions, and logic for deep error detection.

**[ChartMimic: Evaluating LMM's Cross-Modal Reasoning Capability via Chart-to-Code Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/42806406dd99e30c3796bc98b2670fa2-Paper-Conference.pdf) (as "System 2 reasoning")**
> The latent tendency to engage in deliberate, reflective reasoning that can revise and improve an initial output.

**[Dualformer: Controllable Fast and Slow Thinking by Learning with Randomized Reasoning Traces](https://proceedings.iclr.cc/paper_files/paper/2025/file/ed45d6a03de84cc650cae0655f699356-Paper-Conference.pdf) (as "Slow thinking")**
> The model's ability to engage in a deliberate, step-by-step reasoning process to arrive at a solution, analogous to human System 2 cognition.

**[Chain of Preference Optimization: Improving Chain-of-Thought Reasoning in LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/00d80722b756de0166523a87805dd00f-Paper-Conference.pdf) (as "Deliberate reasoning")**
> A reasoning style characterized by exploring multiple paths and conscious evaluation rather than single-path focus.

**[rStar-Math: Small LLMs Can Master Math Reasoning with Self-Evolved Deep Thinking](https://raw.githubusercontent.com/mlresearch/v267/main/assets/guan25f/guan25f.pdf) (as "Deep thinking")**
> A mode of reasoning analogous to human System 2 cognition, characterized by a slower, more deliberate, and iterative thought process, often implemented via search algorithms like MCTS.

## Relationships

### System 2 thinking →
- **Self-reflection** (behaviors tasks) — *causes*
  > This indicates that only LMMs with substantial reasoning capabilities can effectively engage in self-reflection and result optimization, underscoring the critical role of System 2 reasoning in addressing ChartMimic’s challenges. (Section 4.2)
  - [ChartMimic: Evaluating LMM's Cross-Modal Reasoning Capability via Chart-to-Code Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/42806406dd99e30c3796bc98b2670fa2-Paper-Conference.pdf)
- **Training stability** (constructs) — *causes*
  > fast thinking without CoT leads to larger gradients and larger differences of gradients across layers than slow thinking (Detailed CoT), indicating the learning stability brought by the latter. (Abstract)
  - [What Happened in LLMs Layers when Trained for Fast vs. Slow Thinking: A Gradient Perspective](https://aclanthology.org/2025.acl-long.1545.pdf)
- **Mathematical reasoning** (constructs) — *causes*
  > The continuously improved math reasoning capabilities via rStar-Math self-evolved deep thinking. (Table 4)
  - [rStar-Math: Small LLMs Can Master Math Reasoning with Self-Evolved Deep Thinking](https://raw.githubusercontent.com/mlresearch/v267/main/assets/guan25f/guan25f.pdf)

### Associated with
- **Meta-reasoning** (constructs)
  > Our meta-reasoning paradigm is especially suited for system-2 slow thinking, mirroring the human cognitive process of carefully examining assumptions, conditions, calculations, and logic to identify mistakes. (Abstract).
  - [MR-Ben: A Meta-Reasoning Benchmark for Evaluating System-2 Thinking in LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/d81cb1f4dc6e13aeb45553f80b3d6837-Paper-Conference.pdf)
- **Chain of thought** (behaviors tasks)
  > In fast mode, a Transformer will output a final solution without any reasoning steps, whereas the intermediate steps of thinking, such as a search trace for finding a short path, will be generated along with the plan in slow mode. (Section 1)
  - [Dualformer: Controllable Fast and Slow Thinking by Learning with Randomized Reasoning Traces](https://proceedings.iclr.cc/paper_files/paper/2025/file/ed45d6a03de84cc650cae0655f699356-Paper-Conference.pdf)
- **Robustness** (constructs)
  > A truly intelligent system should exhibit System 2 thinking [Kahneman, 2011], which implies performing tasks consistently regardless of incidental features. (Section 1)
  - [SETLEXSEM CHALLENGE: Using Set Operations to Evaluate the Lexical and Semantic Robustness of Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/5a12909ffd7145c41139ad66ecf20fc0-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Self-correction** (behaviors tasks)
  > state-of-the-art LLMs (OpenAI, 2024, 2025) are capable of self-correction—often referred to as “system 2” reasoning (Xiang et al., 2025)—without explicit external verification. (Introduction)
  - [Linguistic Generalizability of Test-Time Scaling in Mathematical Reasoning](https://aclanthology.org/2025.acl-long.699.pdf)
- **System 1 thinking** (constructs)
  > During the thinking process, LRMs automatically transit between slow thinking and fast thinking, utilizing self-reflection as chain of thoughts (Wei et al., 2022). (Section 2)
  - [AlphaOne: Reasoning Models Thinking Slow and Fast at Test Time](https://aclanthology.org/2025.emnlp-main.570.pdf)
- **Hierarchical reasoning** (constructs)
  > In System 2, FaST uses many visual agents to accomplish hierarchical reasoning.
  - [Visual Agents as Fast and Slow Thinkers](https://proceedings.iclr.cc/paper_files/paper/2025/file/14fb70b97c70d5cc5445cd2d5bf818db-Paper-Conference.pdf)
