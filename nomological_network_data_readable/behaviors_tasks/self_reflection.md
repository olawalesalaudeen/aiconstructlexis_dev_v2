# Self-reflection
**Type:** Behavior  
**Referenced in:** 93 papers  
**Also known as:** Self-feedback, Reflection on failure cases, Short-term reflection, Long-term reflection, Reflection, Reflection generation, Reflection step generation, Self-QA reflection, Error reflection, Self-reflection generation, Verbal reflection  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is an iterative review of the model's own prior outputs, actions, or reasoning to diagnose errors and produce feedback for a next attempt. Most definitions center on incorrect predictions, failed trajectories, past decisions, or prior code, and treat success as yielding a revised answer, plan, decision, or retrieval action after reflection. A smaller line of work describes it more broadly as a latent ability or cognitive process for critically evaluating earlier responses, selecting a more plausible solution, or learning from self-generated data, and some papers narrow the reflective act itself to explicit judgments such as GOOD or BAD labels or safety scores with <reflection> tags.

**Variants.** Variants mainly differ in what is reflected on and in the form of the reflection. Several papers use names such as self-feedback, reflection on failure cases, error reflection, and self-reflection generation for diagnosing incorrect outputs or failed attempts and verbalizing reasons or future fixes. Others separate short-term reflection, a comparison of two parent heuristics, from long-term reflection, a summary of lessons accumulated across those comparisons. Additional variants include reflection generation as short natural-language judgments about actions, reflection step generation as verification moves like "Let's verify," self-QA reflection during planning, and verbal reflection after failed task trajectories; these variants appear in code, heuristic search, retrieval routing, safety reasoning, driving, multimodal alignment, games, and agent planning.

**Space of elicitation and scores.** No measurement instrument is linked to it. Instead, papers operationalize it through prompts or workflow modules, sometimes using the same model and sometimes a separate reflector or critic module, to elicit error analysis before correction, analysis of failed trajectories, critique of prior steps in reverse order, or feedback on plans and decisions. Some schemes require structured reflective outputs, including explicit <reflection> tags, safety scores in [0.0, 1.0], Satisfied or Unsatisfied or Unsure outcomes for plans, or short GOOD or BAD judgments about whether an action was appropriate.

**What it is taken as evidence of.** Papers connect it to 15 constructs, most often by claiming a causal relationship from self-reflection to Reasoning. Planning and System 2 thinking are less uniform: some papers claim a causal relationship from self-reflection to Planning, others report Planning as related to self-reflection, one paper reports self-reflection as related to System 2 thinking, and another claims a causal relationship from System 2 thinking to self-reflection. Action planning is only reported as related to self-reflection, Agency appears as the target of a causal relationship from self-reflection, and papers also link it to 10 other constructs. Overall, papers do not converge on a single construct, and the recorded links mix causal and related framings.

## Sources

**[Generating Code World Models with Large Language Models Guided by Monte Carlo Tree Search](https://proceedings.neurips.cc/paper_files/paper/2024/file/6f479ea488e0908ac8b1b37b27fd134c-Paper-Conference.pdf)**
> The observable behavior of generating an analysis or explanation of errors in code before attempting to correct them, often integrated into the generation prompt.

**[AutoGuide: Automated Generation and Selection of Context-Aware Guidelines for Large Language Model Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/d8efbb5dd415974eb095c3f06bff1f48-Paper-Conference.pdf) (as "Self-feedback")**
> An observable process where a model analyzes its own incorrect outputs, reflects on the errors, and attempts to generate an improved response.

**[Can LLMs Learn by Teaching for Better Reasoning? A Preliminary Study](https://proceedings.neurips.cc/paper_files/paper/2024/file/8340b085045cf13f1f0b6c2c4cc0a89c-Paper-Conference.pdf) (as "Reflection on failure cases")**
> The behavior of analyzing incorrect outputs to understand the cause of the error and verbalize reasons for the failure.

**[ReEvo: Large Language Models as Hyper-Heuristics with Reflective Evolution](https://proceedings.neurips.cc/paper_files/paper/2024/file/4ced59d480e07d290b6f29fc8798f195-Paper-Conference.pdf) (as "Short-term reflection")**
> The observable behavior of an LLM generating a comparative analysis of two parent heuristics to provide guidance for creating an improved offspring.

**[ReEvo: Large Language Models as Hyper-Heuristics with Reflective Evolution](https://proceedings.neurips.cc/paper_files/paper/2024/file/4ced59d480e07d290b6f29fc8798f195-Paper-Conference.pdf) (as "Long-term reflection")**
> The observable behavior of an LLM summarizing and distilling insights from multiple short-term reflections to guide future heuristic improvements.

**[Re-Aligning Language to Visual Objects with an Agentic Workflow](https://proceedings.iclr.cc/paper_files/paper/2025/file/0d9057d84a9fc37523bf826232ea6820-Paper-Conference.pdf) (as "Reflection")**
> Analyzing generated outputs to provide feedback for refining expressions in subsequent workflow cycles.

**[Enhancing Decision-Making of Large Language Models via Actor-Critic](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dong25c/dong25c.pdf) (as "Reflection generation")**
> The production of short natural language judgments (e.g., 'This step is GOOD') about the appropriateness of past or candidate actions, used to enhance evaluation accuracy.

**[ConCISE: Confidence-guided Compression in Step-by-step Efficient Reasoning](https://aclanthology.org/2025.emnlp-main.405.pdf) (as "Reflection step generation")**
> The observable act of a model generating a reasoning step that questions or verifies a prior step, often indicated by phrases like 'Let’s verify' or 'Wait, we can also check'.

**[Coarse-to-Fine Grounded Memory for LLM Agent Planning](https://aclanthology.org/2025.emnlp-main.659.pdf) (as "Self-QA reflection")**
> Answering self-generated questions about the current trajectory to support reflective correction during planning.

**[CRITICTOOL: Evaluating Self-Critique Capabilities of Large Language Models in Tool-Calling Error Scenarios](https://aclanthology.org/2025.emnlp-main.1355.pdf) (as "Error reflection")**
> The observable process where a model identifies that an error occurred in a previous step and analyzes its specific category.

**[Retroformer: Retrospective Large Language Agents with Policy Gradient Optimization](https://proceedings.iclr.cc/paper_files/paper/2024/file/29f421fbdcc82aeb349d784d3aaccdb3-Paper-Conference.pdf) (as "Self-reflection generation")**
> Producing a verbal summary of past failures that includes diagnostic reasoning and proposed improvements for future attempts.

**[Improving Retrospective Language Agents via Joint Policy Gradient Optimization](https://aclanthology.org/2025.naacl-long.6.pdf) (as "Verbal reflection")**
> The observable generation of natural language feedback by a reflector model in response to a failed task trajectory, used to guide subsequent planning attempts.

## Relationships

### Self-reflection →
- **Self-correction** (behaviors tasks) — *causes*
  > without the reflection mechanism, the system is prone to mistakes in logical reasoning and lacks the ability for self correction. (Section 4.5)
  - [Chain-of-Experts: When LLMs Meet Complex Operations Research Problems](https://proceedings.iclr.cc/paper_files/paper/2024/file/d45ee77826332c100a1e15f7765b99ff-Paper-Conference.pdf)
- **Reasoning** (constructs) — *causes*
  > ReEvo couples evolutionary search for efficiently exploring heuristic spaces, with self-reflections to boost the reasoning capabilities of LLMs.
  - [ReEvo: Large Language Models as Hyper-Heuristics with Reflective Evolution](https://proceedings.neurips.cc/paper_files/paper/2024/file/4ced59d480e07d290b6f29fc8798f195-Paper-Conference.pdf)
- **Factuality** (constructs) — *causes*
  > We introduce a new framework called Self-Reflective Retrieval-Augmented Generation (SELF-RAG) that enhances an LM’s quality and factuality through retrieval and self-reflection. (ABSTRACT)
  - [Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection](https://proceedings.iclr.cc/paper_files/paper/2024/file/25f7be9694d7b32d5cc670927b8091e1-Paper-Conference.pdf)
- **Controllability** (constructs) — *causes*
  > Generating reflection tokens makes the LM controllable during the inference phase, enabling it to tailor its behavior to diverse task requirements. (ABSTRACT)
  - [Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection](https://proceedings.iclr.cc/paper_files/paper/2024/file/25f7be9694d7b32d5cc670927b8091e1-Paper-Conference.pdf)
- **Iterative refinement** (behaviors tasks) — *causes*
  > Self-reflection plays a pivotal role, allowing autonomous agents to iteratively refine past actions, make improvements, and prevent repetitive errors. (Section 2)
  - [Retroformer: Retrospective Large Language Agents with Policy Gradient Optimization](https://proceedings.iclr.cc/paper_files/paper/2024/file/29f421fbdcc82aeb349d784d3aaccdb3-Paper-Conference.pdf)
- **Data efficiency** (constructs) — *causes*
  > Fig. 4 compares EoH and ReEvo, and shows that ReEvo demonstrates superior sample efficiency. Besides the better neighborhood structure (§ 6.1), reflections facilitate explicit verbal inference of underlying black-box COP structures
  - [ReEvo: Large Language Models as Hyper-Heuristics with Reflective Evolution](https://proceedings.neurips.cc/paper_files/paper/2024/file/4ced59d480e07d290b6f29fc8798f195-Paper-Conference.pdf)
- **Ablation study** (measurements) — *measured_by*
  > We evaluate sampling LLM generations without evolution (LLM) and ReEvo without long-term reflections, short-term reflections, crossover, or mutation on generating ACO heuristics for TSP100.
  - [ReEvo: Large Language Models as Hyper-Heuristics with Reflective Evolution](https://proceedings.neurips.cc/paper_files/paper/2024/file/4ced59d480e07d290b6f29fc8798f195-Paper-Conference.pdf)
- **Multimodal alignment** (constructs) — *causes*
  > The tool use, planning, and reflection steps operate cyclically to become an agentic workflow where audio signals are gradually aligned to visual content.
  - [Aligning Audio-Visual Joint Representations with an Agentic Workflow](https://proceedings.neurips.cc/paper_files/paper/2024/file/6c0ff499edc529c7d8c9f05c7c0ccb82-Paper-Conference.pdf)
- **Long-horizon task completion** (behaviors tasks) — *causes*
  > The failure of any sub-goal halts the execution of subsequent ones, leading to overall task failure. Therefore, a reflection module is essential to identify and rectify errors promptly. (Section 2.2)
  - [Optimus-1: Hybrid Multimodal Memory Empowered Agents Excel in Long-Horizon Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/5949a8750a110ce1f0631b1776c500a2-Paper-Conference.pdf)
- **Agency** (constructs) — *causes*
  > Emergent agentic abilities are strongly dependent on basic abilities like grounding, world modeling, and self-reflection.
  - [AgentBoard: An Analytical Evaluation Board of Multi-turn LLM Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/877b40688e330a0e2a3fc24084208dfa-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Planning** (constructs) — *causes*
  > LEPA refines the plan through self-reflection, aiming to acquire plans that are instrumental in yielding correct solutions.
  - [Learning to Plan Before Answering: Self-Teaching LLMs to Learn Abstract Plans for Problem Solving](https://proceedings.iclr.cc/paper_files/paper/2025/file/821a6e5681b072351fd3c21fac44739a-Paper-Conference.pdf)
- **Logical consistency** (constructs) — *causes*
  > Multi-round self-reflection that encourages a single LLM to critically evaluate its previous responses has demonstrated the effectiveness of deliberation in improving logical coherence and qualities (Section 4.2.1)
  - [Towards Rationality in Language and Multimodal Agents: A Survey](https://aclanthology.org/2025.naacl-long.186.pdf)
- **Self-improvement** (constructs) — *causes*
  > Reflection on self-generated CoT facilitates learning from mistakes. (Section 5.1)
  - [Vision-Language Models Can Self-Improve Reasoning via Reflection](https://aclanthology.org/2025.naacl-long.447.pdf)
- **Error recovery** (constructs) — *causes*
  > SCRIBE combines domain-specific tools with a self-reflective inference pipeline that supports iterative reasoning, tool use, and error recovery. (Abstract)
  - [SCRIBE: Structured Chain Reasoning for Interactive Behaviour Explanations using Tool Calling](https://aclanthology.org/2025.emnlp-main.1490.pdf)

### → Self-reflection
- **System 2 thinking** (constructs) — *causes*
  > This indicates that only LMMs with substantial reasoning capabilities can effectively engage in self-reflection and result optimization, underscoring the critical role of System 2 reasoning in addressing ChartMimic’s challenges. (Section 4.2)
  - [ChartMimic: Evaluating LMM's Cross-Modal Reasoning Capability via Chart-to-Code Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/42806406dd99e30c3796bc98b2670fa2-Paper-Conference.pdf)
- **Code execution** (behaviors tasks) — *causes*
  > After the LLM generates a response containing code, we execute the code and return the results for further self-reflection and refinement.
  - [Steering Large Language Models between Code Execution and Textual Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/f763f7c9a6599e14b07add5937d8189c-Paper-Conference.pdf)
- **Error detection** (behaviors tasks) — *causes*
  > The results show that CDG training significantly improves error detection in reasoning, particularly on the more challenging MATH500 dataset, enhancing the model’s self-reflection ability. (Section 4.2)
  - [Improving Rationality in the Reasoning Process of Language Models through Self-playing Game](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25bb/wang25bb.pdf)

### Associated with
- **Action planning** (constructs)
  > Otter contains a novel self-reflective action planner for deciding which code to read and which tests to write. (Abstract)
  - [Otter: Generating Tests from Issues to Validate SWE Patches](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ahmed25b/ahmed25b.pdf)
- **Tool use** (behaviors tasks)
  > After the tool use step, the refined expression is sent to an LLM-based reflector for feedback (i.e., reflection). (Section 1)
  - [Re-Aligning Language to Visual Objects with an Agentic Workflow](https://proceedings.iclr.cc/paper_files/paper/2025/file/0d9057d84a9fc37523bf826232ea6820-Paper-Conference.pdf)
