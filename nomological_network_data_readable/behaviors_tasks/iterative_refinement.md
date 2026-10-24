# Iterative refinement
**Type:** Behavior  
**Referenced in:** 62 papers  
**Also known as:** Self-debugging, Stepwise revision, Self-refinement, Self-revision, Response refinement, Error refinement, Iterative self-calibration, Answer revision, Argument revision, Code revision, Program refinement, Refinement during generation, Solution optimization, Multi-step rectification, Action refinement, Solution revision, Iterative critique-revision, Iterative hypothesis refinement, Critique and refinement, Hypothesis refinement, Cross-refinement, Refinement, Solution refinement, Refinement capability, Progressive refinement, Program revision, Knowledge refinement, Iterative reflection capability, Solution rewriting, Multi-turn revision  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is an iterative process in which a model produces an initial answer, code artifact, rationale, plan, or action, then generates later attempts that incorporate feedback from earlier ones. Most definitions make success task-specific, for example correcting errors, improving correctness or efficiency, preserving earlier correct reasoning steps while revising later wrong ones, or aligning output with a reference, textual description, verifier, safety reflection, or uncertainty signal; one paper states the goal as enabling a model to learn from previous attempts to improve subsequent ones. A smaller line of work uses the same label for a latent capacity to improve outputs through repeated feedback and revision, rather than only the observable revision behavior.

**Variants.** Papers study many variants, most commonly under labels such as self-refinement, self-revision, response refinement, stepwise revision, and solution refinement. These variants appear in code and program debugging or verification, mathematical reasoning and solution rewriting, scientific hypothesis or research idea refinement, multi-agent response or argument revision, and generation-time correction where the model revises earlier text before continuing. Some papers further distinguish the behavior by feedback source, including execution results, critic feedback, peer input, visual comparison with a reference, and uncertainty scores.

**Space of elicitation and scores.** Only 2 measurement instruments are linked to this behavior, GPQA and MMLU, both through measured_by relations. In the linked work, they are used as benchmarks for assessing solution optimization tasks that operationalize iterative refinement.

**What it is taken as evidence of.** Papers link it to 7 constructs, with mixed directions across the reported relations. The most frequent link is a causal relationship from iterative refinement to text generation quality; papers also claim causal relationships from abstract reasoning and chain-of-thought reasoning to iterative refinement, report that inductive reasoning is related to iterative refinement, and one paper records causal links in both directions between iterative refinement and semantic alignment. Two other constructs appear in additional causal claims.

## Sources

**[ExploraCoder: Advancing Code Generation for Multiple Unseen APIs via Planning and Chained Exploration](https://aclanthology.org/2025.acl-long.887.pdf) (as "Self-debugging")**
> The observable process where a model identifies errors in its own generated code based on execution feedback and attempts to correct them.

**[Enhancing Mathematical Reasoning in LLMs by Stepwise Correction](https://aclanthology.org/2025.acl-long.1048.pdf) (as "Stepwise revision")**
> The observable behavior of modifying specific reasoning steps identified as incorrect while preserving earlier correct steps in an iterative manner.

**[Revisiting the Test-Time Scaling of o1-like Models: Do they Truly Possess Test-Time Scaling Capabilities?](https://aclanthology.org/2025.acl-long.232.pdf) (as "Self-revision")**
> The observable act of a model extending its reasoning process to re-evaluate and modify its previous statements, often indicated by explicit markers like "Wait" or "Alternatively".

**[Knowledge Boundary of Large Language Models: A Survey](https://aclanthology.org/2025.acl-long.256.pdf) (as "Self-refinement")**
> Iteratively improving an initial response through self-evaluation and regeneration, either within a single model or via multi-agent debate.

**[PopAlign: Diversifying Contrasting Patterns for a More Comprehensive Alignment](https://aclanthology.org/2025.acl-long.1403.pdf) (as "Response refinement")**
> Generating an initial response and then improving it in a subsequent turn through explicit refinement instructions, creating a contrast between raw and polished outputs.

**[Learning to Reason from Feedback at Test-Time](https://aclanthology.org/2025.acl-long.262.pdf)**
> Generating multiple attempts at solving a problem, where later outputs are influenced by feedback on earlier ones, either through context or parameter updates.

**[LLM Meets Scene Graph: Can Large Language Models Understand and Generate Scene Graphs? A Benchmark and Empirical Study](https://aclanthology.org/2025.acl-long.1036.pdf) (as "Error refinement")**
> The task of correcting an erroneous scene graph to align with a given textual description and context.

**[SGIC: A Self-Guided Iterative Calibration Framework for RAG](https://aclanthology.org/2025.acl-long.1376.pdf) (as "Iterative self-calibration")**
> An observable process where a model repeatedly refines its generated answer over multiple rounds, using its previous outputs and associated uncertainty scores as input for the next iteration.

**[Tree-of-Debate: Multi-Persona Debate Trees Elicit Critical Thinking for Scientific Comparative Analysis](https://aclanthology.org/2025.acl-long.1422.pdf) (as "Argument revision")**
> The observable process by which a model updates its claims in response to counterarguments, incorporating new reasoning or evidence to refine its position.

**[METAL: A Multi-Agent Framework for Chart Generation with Test-Time Scaling](https://aclanthology.org/2025.acl-long.1452.pdf) (as "Code revision")**
> Modifying existing code based on feedback from critique agents to correct visual or structural mismatches with a reference chart.

**[MAPoRL: Multi-Agent Post-Co-Training for Collaborative Large Language Models with Reinforcement Learning](https://aclanthology.org/2025.acl-long.1459.pdf) (as "Answer revision")**
> The observable change in an agent's response from one turn to the next, reflecting updates based on peer input.

**[AlphaVerus: Bootstrapping Formally Verified Code Generation through Self-Improving Translation and Treefinement](https://raw.githubusercontent.com/mlresearch/v267/main/assets/aggarwal25a/aggarwal25a.pdf) (as "Program refinement")**
> Iteratively modifying an incorrect or partially verified program using feedback from a verifier to produce a fully verified version.

**[Reflection-Window Decoding: Text Generation with Selective Refinement](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tang25a/tang25a.pdf) (as "Refinement during generation")**
> The observable act of revising or correcting a segment of previously generated text before continuing with new content, triggered by a pausing criterion.

**[Think Twice, Act Once: A Co-Evolution Framework of LLM and RL for Large-Scale Decision Making](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wan25g/wan25g.pdf) (as "Action refinement")**
> The process by which an LLM generates improved actions for suboptimal decisions identified in RL trajectories, validated through environment simulation.

**[Teaching Language Models to Critique via Reinforcement Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xie25a/xie25a.pdf) (as "Solution revision")**
> Modifying an existing code solution based on feedback to improve correctness or efficiency.

**[Revolve: Optimizing AI Systems by Tracking Response Evolution in Textual Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25aj/zhang25aj.pdf) (as "Solution optimization")**
> The iterative refinement of answers to complex scientific or technical questions through self-evaluation and critique, aiming to improve accuracy over multiple steps.

**[Evaluating LLMs Across Multi-Cognitive Levels: From Medical Knowledge Mastery to Scenario-Based Problem Solving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhou25n/zhou25n.pdf) (as "Multi-step rectification")**
> Correcting an incorrect answer to a medical question by first identifying its inaccuracy and then providing the correct response from remaining options, simulating sequential clinical reasoning.

**[Teaching Language Models to Critique via Reinforcement Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xie25a/xie25a.pdf) (as "Iterative critique-revision")**
> An observable multi-step process where a critic model provides feedback on a solution, which a generator model then uses to produce a revised solution.

**[From Automation to Autonomy: A Survey on Large Language Models in Scientific Discovery](https://aclanthology.org/2025.emnlp-main.895.pdf) (as "Iterative hypothesis refinement")**
> The observable process of progressively improving a scientific hypothesis through repeated cycles of evaluation and modification.

**[Multiagent Finetuning: Self Improvement with Diverse Reasoning Chains](https://proceedings.iclr.cc/paper_files/paper/2025/file/1d50221b03ced7152d8750c9d1e66cba-Paper-Conference.pdf) (as "Critique and refinement")**
> The observable behavior of a critic agent evaluating responses from other agents and then generating an updated, improved response based on that evaluation.

**[MOOSE-Chem: Large Language Models for Rediscovering Unseen Chemistry Scientific Hypotheses](https://proceedings.iclr.cc/paper_files/paper/2025/file/51fd9a7d1706023cb9f8210cc6ac357c-Paper-Conference.pdf) (as "Hypothesis refinement")**
> Improving generated hypotheses based on feedback regarding validness, novelty, clarity, and significance.

**[It Helps to Take a Second Opinion: Teaching Smaller LLMs To Deliberate Mutually via Selective Rationale Optimisation](https://proceedings.iclr.cc/paper_files/paper/2025/file/bc12914d66b41b6bfc2d3a5decdb498b-Paper-Conference.pdf) (as "Cross-refinement")**
> Improving a rationale using a different model variant than the one that generated it.

**[SPRI: Aligning Large Language Models with Context-Situated Principles](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhan25a/zhan25a.pdf) (as "Refinement")**
> The ability of a model to iteratively improve its output based on feedback or further instructions.

**[Revolve: Optimizing AI Systems by Tracking Response Evolution in Textual Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25aj/zhang25aj.pdf) (as "Solution refinement")**
> The latent ability of an LLM to dynamically improve its answers to complex scientific or technical questions through iterative self-evaluation and critique.

**[SPaR: Self-Play with Tree-Search Refinement to Improve Instruction-Following in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/abe1eb21ceb046209c96a0f5e7544ccc-Paper-Conference.pdf) (as "Refinement capability")**
> The latent ability of a model to correct or improve a response that fails to follow an instruction, ideally with minimal irrelevant revisions.

**[Think Thrice Before You Act: Progressive Thought Refinement in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/6882dbdc34bcd094e6f858c06ce30edb-Paper-Conference.pdf) (as "Progressive refinement")**
> The ability of a model to iteratively improve the accuracy, depth, and quality of its responses starting from an initial thought or approximate solution.

**[Synthesizing Programmatic Reinforcement Learning Policies with Large Language Model Guided Search](https://proceedings.iclr.cc/paper_files/paper/2025/file/dcf887f2bfe2776584e3bce80ed206ef-Paper-Conference.pdf) (as "Program revision")**
> Updating previously generated programs using feedback such as rewards or execution traces.

**[NeSyC: A Neuro-symbolic Continual Learner For Complex Embodied Tasks in Open Domains](https://proceedings.iclr.cc/paper_files/paper/2025/file/d569e4655e2835e3d38310b67c5ad646-Paper-Conference.pdf) (as "Knowledge refinement")**
> Re-entering the reformulation phase to update generalized knowledge after failures or detected inconsistencies.

**[Instruct-of-Reflection: Enhancing Large Language Models Iterative Reflection Capabilities via Dynamic-Meta Instruction](https://aclanthology.org/2025.naacl-long.502.pdf) (as "Iterative reflection capability")**
> The latent ability of a model to effectively refine its responses over multiple cycles of self-evaluation and revision, avoiding degradation due to redundancy, drift, or stubbornness.

**[LLaMA-Berry: Pairwise Optimization for Olympiad-level Mathematical Reasoning via O1-like Monte Carlo Tree Search](https://aclanthology.org/2025.naacl-long.375.pdf) (as "Solution rewriting")**
> Producing an improved version of a mathematical solution based on critique, using the model's rewriting capabilities.

**[CodeIO: Condensing Reasoning Patterns via Code Input-Output Prediction](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25t/li25t.pdf) (as "Multi-turn revision")**
> Iteratively refining reasoning outputs based on execution feedback, where incorrect predictions are revised in subsequent turns using feedback from code execution.

## Relationships

### Iterative refinement →
- **Text generation quality** (constructs) — *causes*
  > "This iterative refinement process continues for several cycles until obtaining a more robust and comprehensive response."
  - [Mixture-of-Agents Enhances Large Language Model Capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/5434be94e82c54327bb9dcaf7fca52b6-Paper-Conference.pdf)
- **Semantic alignment** (constructs) — *causes*
  > This optimization process plays a crucial role in enhancing the semantic consistency and visual quality of the generated WordArt. (Section 4.3)
  - [MetaDesigner: Advancing Artistic Typography through AI-Driven, User-Centric, and Multilingual WordArt Synthesis](https://proceedings.iclr.cc/paper_files/paper/2025/file/a10c3d85879c29331ba4d73ede56c7d3-Paper-Conference.pdf)
- **GPQA** (measurements) — *measured_by*
  > In solution optimization, we assess performance on the Google-proof Question Answering (GPQA) benchmark (Rein et al., 2023)... (Section 4)
  - [Revolve: Optimizing AI Systems by Tracking Response Evolution in Textual Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25aj/zhang25aj.pdf)
- **MMLU** (measurements) — *measured_by*
  > In solution optimization, we assess performance on ... the Machine Learning and College Physics subsets of MMLU (Hendrycks et al., 2020)... (Section 4)
  - [Revolve: Optimizing AI Systems by Tracking Response Evolution in Textual Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25aj/zhang25aj.pdf)

### → Iterative refinement
- **Self-verification** (behaviors tasks) — *causes*
  > Incorporated with CSV, the model becomes capable of using code to verify answers, then reviewing and adjusting how it arrived at the solution if the verification result is False, aiming at obtaining the correct answer.
  - [Solving Challenging Math Word Problems Using GPT-4 Code Interpreter with Code-based Self-Verification](https://proceedings.iclr.cc/paper_files/paper/2024/file/12c45a68e8433b21b91cd47731387fa4-Paper-Conference.pdf)
- **Self-reflection** (behaviors tasks) — *causes*
  > Self-reflection plays a pivotal role, allowing autonomous agents to iteratively refine past actions, make improvements, and prevent repetitive errors. (Section 2)
  - [Retroformer: Retrospective Large Language Agents with Policy Gradient Optimization](https://proceedings.iclr.cc/paper_files/paper/2024/file/29f421fbdcc82aeb349d784d3aaccdb3-Paper-Conference.pdf)
- **Abstract reasoning** (constructs) — *causes*
  > We propose Instruct-of-Reflection (IoRT), a dynamic iterative reflection framework that integrates abstract reasoning into the reflection process, generating adaptive instruction to regulate the iterative reflection. (§ 7)
  - [Instruct-of-Reflection: Enhancing Large Language Models Iterative Reflection Capabilities via Dynamic-Meta Instruction](https://aclanthology.org/2025.naacl-long.502.pdf)
- **Chain-of-thought reasoning** (constructs) — *causes*
  > the Actor refines suboptimal actions via multi-step reasoning and environment validation (Abstract).
  - [Think Twice, Act Once: A Co-Evolution Framework of LLM and RL for Large-Scale Decision Making](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wan25g/wan25g.pdf)

### Associated with
- **Hypothesis generation** (behaviors tasks)
  > Iterative hypothesis refinement employs a three-step process: proposing, selecting, and refining hypotheses in the form of textual rules. (Abstract).
  - [Phenomenal Yet Puzzling: Testing Inductive Reasoning Capabilities of Language Models with Hypothesis Refinement](https://proceedings.iclr.cc/paper_files/paper/2024/file/05d2175de7ee637588d1b5ced8b15b32-Paper-Conference.pdf)
- **Inductive reasoning** (constructs)
  > This work investigates LMs’ inductive reasoning capabilities through the lens of iterative hypothesis refinement (Section 1).
  - [Phenomenal Yet Puzzling: Testing Inductive Reasoning Capabilities of Language Models with Hypothesis Refinement](https://proceedings.iclr.cc/paper_files/paper/2024/file/05d2175de7ee637588d1b5ced8b15b32-Paper-Conference.pdf)
- **Self-correction** (behaviors tasks)
  > Visually grounded inputs enable closed-loop iterative refinement: We highlight the critical role of grounded visual inputs in articulating ambiguous and complex objects, leveraging such inputs in a closed-loop system that self-evaluates and self-improves its articulations. (Section 1)
  - [Articulate-Anything:  Automatic Modeling of Articulated Objects via a Vision-Language Foundation Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/2c8047bf3ed8ef6905351608d641f02f-Paper-Conference.pdf)
