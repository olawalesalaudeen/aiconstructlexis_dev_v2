# Self-correction
**Type:** Behavior  
**Referenced in:** 203 papers  
**Also known as:** Self-correction and refinement, Noise correction, Error correction, Correcting errors, Fact refinement, Patch refinement, Answer refinement, Natural language refinement, Self-refinement, Assessment refinement, Chain-of-thought correction, Thought refinement, Multi-round self-correction, Invalid SMILES correction, Response refinement, Iterative self-correction, Self-checking, Iterative chart refinement, Response correction, Self-enhancement, Artifact refinement, Iterative response refinement, Iterative revision, Output editing, Rationale refinement, Description revision, Failure correction, Answer correction, Reflection, Self-debugging, Progressive refinement, Refinement, Self-examination, Query regeneration, Reasoning correction  

## State of the Field

**Space of definitions.** Across the surveyed work, the dominant framing is iterative revision of a model's own prior output after checking it against feedback. Most definitions describe identifying an error or deficiency and then producing a corrected or improved version, often over multiple rounds, with feedback coming from execution results, verifier messages, tool or environment errors, solver checks, critiques, or user feedback; some papers also frame it as reviewing a previous generation and answering again with that feedback. A smaller line of work casts it as a latent ability or capacity rather than just an observed task, but the common success criterion is still a revised answer, code artifact, plan, query, or action that is more correct, valid, or aligned than the initial one.

**Variants.** Variants span many artifacts and settings. The most common are code- and reasoning-centered forms, including self-debugging from execution feedback, proof and chain-of-thought correction, and iterative answer or response revision; papers also use names such as error correction, self-refinement, self-checking, and progressive or iterative refinement. Smaller variants target specific artifacts and domains, including SQL noise correction, query regeneration after execution failure, patch refinement, fact revision to add missing context, invalid SMILES correction, chart code revision, description revision against an image, tool-call retry after error messages, and action or plan correction after failed execution.

**Space of elicitation and scores.** Papers measure it with 6 instruments. Linked instruments include FB-Bench, GSM8K, MOLERR2FIX, MR-Ben, and ToolAlpaca, plus 1 other instrument; the linked descriptions are mostly benchmarks or evaluation sets, and MOLERR2FIX is described as a four-stage Error-to-Fix evaluation pipeline, while MR-Ben is described as going beyond accuracy to assess locating reasoning errors, explaining them, and providing corrections. Across these measures, the recorded scoring language centers on handling feedback, revising outputs, and supplying corrections.

**What it is taken as evidence of.** Rather than tying it to one construct, papers link it to 16 constructs. The most frequent linked construct is Reasoning; other prominent links are Chain-of-thought reasoning, Coding ability, Generalization, and Instruction following ability, with 11 other constructs also linked. The relationship language is not uniform: most construct links are causal claims from self-correction to a construct, while Chain-of-thought reasoning is recorded as a related link rather than a causal one.

## Sources

**[ROUTE: Robust Multitask Tuning and Collaboration for Text-to-SQL](https://proceedings.iclr.cc/paper_files/paper/2025/file/212b143b5a5d6b88feb0fb1441b9756e-Paper-Conference.pdf) (as "Noise correction")**
> The task of evaluating a given SQL query against a question and database, determining if it is correct, and providing a revised query if it is not.

**[ImProver: Agent-Based Automated Proof Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/4864005cfdea7ebd07086ed1b9846825-Paper-Conference.pdf) (as "Error correction")**
> The process of identifying and fixing errors in a generated proof, often through an iterative refinement process that uses feedback from a verifier.

**[A Mathematical Framework for AI-Human Integration in Work](https://raw.githubusercontent.com/mlresearch/v267/main/assets/celis25a/celis25a.pdf) (as "Correcting errors")**
> The observable task of identifying and rectifying mistakes in a given artifact, such as code or text.

**[VeriFact: Enhancing Long-Form Factuality Evaluation with Refined Fact Extraction and Reference Facts](https://aclanthology.org/2025.emnlp-main.905.pdf) (as "Fact refinement")**
> The process of revising incomplete or missing facts by incorporating omitted conditions, comparanda, or relational context to make them self-contained and verifiable.

**[UniDebugger: Hierarchical Multi-Agent Framework for Unified Software Debugging](https://aclanthology.org/2025.emnlp-main.921.pdf) (as "Patch refinement")**
> Evaluating a generated patch for correctness, performance, or maintainability and producing an improved version or detailed analysis report.

**[Spontaneous Giving and Calculated Greed in Language Models](https://aclanthology.org/2025.emnlp-main.267.pdf) (as "Response revision")**
> The observable act of reviewing an initial response and generating an updated one.

**[NL-Debugging: Exploiting Natural Language as an Intermediate Representation for Code Debugging](https://aclanthology.org/2025.emnlp-main.80.pdf) (as "Natural language refinement")**
> The observable act of modifying a natural language description of code logic to correct errors, based on execution feedback and analysis.

**[Code to Think, Think to Code: A Survey on Code-Enhanced Reasoning and Reasoning-Driven Code Intelligence in LLMs](https://aclanthology.org/2025.emnlp-main.130.pdf)**
> Iteratively improving generated code or reasoning by analyzing execution feedback and revising outputs accordingly.

**[User Feedback in Human-LLM Dialogues: A Lens to Understand Users But Noisy as a Learning Signal](https://aclanthology.org/2025.emnlp-main.133.pdf) (as "Self-refinement")**
> The observable behavior of a model updating its own response in a subsequent turn based on user feedback, even if the improvement is limited.

**[Two Heads Are Better Than One: Dual-Model Verbal Reflection at Inference-Time](https://aclanthology.org/2025.emnlp-main.155.pdf) (as "Assessment refinement")**
> The observable act of revising an initial assessment and its rationale in response to critical feedback.

**[DICE: Structured Reasoning in LLMs through SLM-Guided Chain-of-Thought Correction](https://aclanthology.org/2025.emnlp-main.355.pdf) (as "Chain-of-thought correction")**
> The process of analyzing an initial reasoning trace (chain-of-thought) and refining it to improve accuracy or format compliance.

**[RethinkMCTS: Refining Erroneous Thoughts in Monte Carlo Tree Search for Code Generation](https://aclanthology.org/2025.emnlp-main.410.pdf) (as "Thought refinement")**
> Regenerating or revising a prior reasoning step based on execution feedback to correct logical errors and improve the reasoning trajectory.

**[A Probabilistic Inference Scaling Theory for LLM Self-Correction](https://aclanthology.org/2025.emnlp-main.685.pdf) (as "Multi-round self-correction")**
> The observable process where a model iteratively refines a sequence of answers for a given question, with each new answer being a correction of the previous one.

**[How to Make Large Language Models Generate 100% Valid Molecules?](https://aclanthology.org/2025.emnlp-main.1350.pdf) (as "Invalid SMILES correction")**
> Modifying a syntactically or semantically invalid SMILES string to produce a valid one, either through iterative refinement or structural transformation.

**[MultiAgentESC: A LLM-based Multi-Agent Collaboration Framework for Emotional Support Conversation](https://aclanthology.org/2025.emnlp-main.232.pdf) (as "Response refinement")**
> Improving a selected response by evaluating its consistency with the conversation, alignment with the chosen strategy, and effectiveness in alleviating emotional stress.

**[ConstraintLLM: A Neuro-Symbolic Framework for Industrial-Level Constraint Programming](https://aclanthology.org/2025.emnlp-main.809.pdf) (as "Iterative self-correction")**
> Revising generated constraint model code over multiple rounds using feedback from a symbolic solver and retrieved correction exemplars.

**[MA-GTS: A Multi-Agent Framework for Solving Complex Graph Problems in Real-World Applications](https://aclanthology.org/2025.emnlp-main.973.pdf) (as "Self-checking")**
> An iterative process where the model refines its solution over multiple rounds to improve correctness and verify results.

**[AMACE: Automatic Multi-Agent Chart Evolution for Iteratively Tailored Chart Generation](https://aclanthology.org/2025.emnlp-main.1089.pdf) (as "Iterative chart refinement")**
> The observable process of modifying chart code and visual output across multiple steps based on feedback from evaluation agents.

**[Scaling Large Language Model-based Multi-Agent Collaboration](https://proceedings.iclr.cc/paper_files/paper/2025/file/66a026c0d17040889b50f0dfa650e5e0-Paper-Conference.pdf) (as "Artifact refinement")**
> The observable action of an agent modifying and improving a piece of work (an artifact) based on instructions or feedback from another agent.

**[Think Thrice Before You Act: Progressive Thought Refinement in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/6882dbdc34bcd094e6f858c06ce30edb-Paper-Conference.pdf) (as "Iterative response refinement")**
> Producing a revised answer over multiple attempts that improves on earlier outputs.

**[Unified Parameter-Efficient Unlearning for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/8d537430e55a283a97e9b6e682e994a3-Paper-Conference.pdf) (as "Response correction")**
> The observable action of rectifying the model's output response, including updating outdated answers or incorrect classifications.

**[DataGen: Unified Synthetic Dataset Generation via Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a01e69aa9c3c61fcb40ea378e71fc780-Paper-Conference.pdf) (as "Self-enhancement")**
> The observable behavior of a model re-generating a data item to produce an improved version, using its own prior self-reflection as guidance.

**[Scaling LLM Test-Time Compute Optimally Can be More Effective than Scaling Parameters for Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/1b623663fd9b874366f3ce019fdfdd44-Paper-Conference.pdf) (as "Iterative revision")**
> The observable behavior of generating a sequence of answers, where each new answer is conditioned on the model's previous attempts.

**[It Helps to Take a Second Opinion: Teaching Smaller LLMs To Deliberate Mutually via Selective Rationale Optimisation](https://proceedings.iclr.cc/paper_files/paper/2025/file/bc12914d66b41b6bfc2d3a5decdb498b-Paper-Conference.pdf) (as "Rationale refinement")**
> The observable act of modifying a previously generated rationale to improve its quality, which can be done by the same model (self-refinement) or a different model (cross-refinement).

**[Uncovering Gaps in How Humans and LLMs Interpret Subjective Language](https://proceedings.iclr.cc/paper_files/paper/2025/file/c362fbc0d182c6b4b8dadb90177239e4-Paper-Conference.pdf) (as "Output editing")**
> The observable task where an LLM revises its own previously generated text to better align with a specified subjective quality or constitutional principle.

**[PathGen-1.6M: 1.6 Million Pathology Image-text Pairs Generation through Multi-agent Collaboration](https://proceedings.iclr.cc/paper_files/paper/2025/file/ebf8764ecf0688cdd9fe1e5a9c525d0d-Paper-Conference.pdf) (as "Description revision")**
> The observable task of editing a given textual description to improve its accuracy or quality with respect to an associated image.

**[Long-Horizon Planning for Multi-Agent Robots in Partially Observable Environments](https://proceedings.neurips.cc/paper_files/paper/2024/file/7d6e85e88495104442af94c98e899659-Paper-Conference.pdf) (as "Failure correction")**
> Revising an action choice after a failed execution by proposing a more suitable next action.

**[Aligner: Efficient Alignment by Learning to Correct](https://proceedings.neurips.cc/paper_files/paper/2024/file/a51a74b2d71387dc71cc29181b5519bb-Paper-Conference.pdf) (as "Answer correction")**
> Editing or rewriting an initial model answer into a revised answer that better satisfies the desired criteria.

**[Lemur: Harmonizing Natural Language and Code for Language Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/41ec0e510c31883f3b50a782651fb5b9-Paper-Conference.pdf) (as "Self-debugging")**
> The model's capacity to identify and correct errors in its own generated code based on feedback from code execution.

**[DiLu: A Knowledge-Driven Approach to Autonomous Driving with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/93c936b9e492def9c00782cab79dbc6d-Paper-Conference.pdf) (as "Reflection")**
> The ability of the model to evaluate past decision sequences, identify errors, and generate corrected reasoning to improve future performance.

**[Think Thrice Before You Act: Progressive Thought Refinement in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/6882dbdc34bcd094e6f858c06ce30edb-Paper-Conference.pdf) (as "Progressive refinement")**
> The ability of a model to iteratively improve the accuracy, depth, and quality of its responses starting from an initial thought or approximate solution.

**[SPRI: Aligning Large Language Models with Context-Situated Principles](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhan25a/zhan25a.pdf) (as "Refinement")**
> The ability of a model to iteratively improve its output based on feedback or further instructions.

**[Empowering LLM Agents with Zero-Shot Optimal Decision-Making through Q-learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/c25de6a9da675464ebb925e430c58325-Paper-Conference.pdf) (as "Self-examination")**
> An observable process where a model uses its own capabilities to check, validate, and correct its generated outputs, such as actions or state predictions.

**[Dialect-SQL: An Adaptive Framework for Bridging the Dialect Gap in Text-to-SQL](https://aclanthology.org/2025.emnlp-main.178.pdf) (as "Query regeneration")**
> An iterative process where the model attempts to generate a new query if the previous one fails execution or contains syntax errors.

**[ReVISE: Learning to Refine at Test-Time via Intrinsic Self-Verification](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lee25ab/lee25ab.pdf) (as "Reasoning correction")**
> The observable action of modifying a previously generated reasoning trajectory to fix an identified error.

## Relationships

### Self-correction →
- **Code debugging** (behaviors tasks) — *causes*
  > “SELF-DEBUGGING can teach the LLM to perform rubber duck debugging”
  - [Teaching Large Language Models to Self-Debug](https://proceedings.iclr.cc/paper_files/paper/2024/file/2460396f2d0d421885997dd1612ac56b-Paper-Conference.pdf)
- **Reasoning** (constructs) — *causes*
  > To the best of our knowledge, we are the first to incorporate a reflection mechanism for self-correction and adaptive KG exploration into KG-augmented LLMs, effectively augmenting the LLM’s reasoning ability. (Section 1)
  - [Plan-on-Graph: Self-Correcting Adaptive Planning of Large Language Model on Knowledge Graphs](https://proceedings.neurips.cc/paper_files/paper/2024/file/4254e856d01a5e7b7ea050477c3ef9b9-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *causes*
  > PoG (Chen et al., 2024a) integrates reflection and self-correction mechanisms to adaptively explore the reasoning paths over KG via an LLM agent, and then augments the LLM in complex reasoning and question answering based on the retrieved knowledge paths. (Section 3.2.3)
  - [Large Language Models Meet Knowledge Graphs for Question Answering: Synthesis and Opportunities](https://aclanthology.org/2025.emnlp-main.1249.pdf)
- **Code generation** (behaviors tasks) — *causes*
  > Self-Debugging (SD) is both complementary to and beneficial for M1... Applying SD on TAs can provide S-score benefits... M1 achieves consistent improvements.
  - [Can LLMs Learn by Teaching for Better Reasoning? A Preliminary Study](https://proceedings.neurips.cc/paper_files/paper/2024/file/8340b085045cf13f1f0b6c2c4cc0a89c-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks) — *causes*
  > to prevent hallucinations in LLMs, such as sacrificing solving accuracy to avoid execution errors, the model alignment and self-correction mechanism are adopted in LLMOPT. (Abstract)
  - [LLMOPT: Learning to Define and Solve General Optimization Problems from Scratch](https://proceedings.iclr.cc/paper_files/paper/2025/file/fbe6dd68b0cf2b1d43b458d2b8ca31b0-Paper-Conference.pdf)
- **Mathematical problem solving** (behaviors tasks) — *causes*
  > GPT4-Code’s robust performance in solving math problems derives not only from its ability to generate accurate step-by-step code, but also from its self-debugging mechanism.
  - [Solving Challenging Math Word Problems Using GPT-4 Code Interpreter with Code-based Self-Verification](https://proceedings.iclr.cc/paper_files/paper/2024/file/12c45a68e8433b21b91cd47731387fa4-Paper-Conference.pdf)
- **Coding ability** (constructs) — *causes*
  > teaching large language models to perform SELF-DEBUGGING without human guidance is another promising path to enhance coding capability and reduce the sampling cost required to accomplish challenging tasks.
  - [Teaching Large Language Models to Self-Debug](https://proceedings.iclr.cc/paper_files/paper/2024/file/2460396f2d0d421885997dd1612ac56b-Paper-Conference.pdf)
- **Data efficiency** (constructs) — *causes*
  > by leveraging feedback messages and reusing failed predictions, SELF-DEBUGGING notably improves sample efﬁciency, and can match or outperform baseline approaches that generate more than 10× candidate programs.
  - [Teaching Large Language Models to Self-Debug](https://proceedings.iclr.cc/paper_files/paper/2024/file/2460396f2d0d421885997dd1612ac56b-Paper-Conference.pdf)
- **MR-Ben** (measurements) — *measured_by*
  > Unlike prior efforts, MR-Ben goes beyond accuracy by assessing the ability to locate potential errors in the reasoning process and provide explanations and corrections. (Section 2).
  - [MR-Ben: A Meta-Reasoning Benchmark for Evaluating System-2 Thinking in LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/d81cb1f4dc6e13aeb45553f80b3d6837-Paper-Conference.pdf)
- **Winoground** (measurements) — *measured_by*
  > In this section, we evaluate on WinoGround (Thrush et al., 2022) dataset to show whether given extra token-level annotation cues, the vision language model is able to self-correct its own hallucinations. (Section 5.3)
  - [TLDR: Token-Level Detective Reward Model for Large Vision Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/70217f4d06e57a2395f03b4bc136361a-Paper-Conference.pdf)
- **Robustness** (constructs) — *causes*
  > Our analysis shows that self-refinement enables the robustness of agent capability and the diversity of agent environments and thoughts further enhances the performance. (Section 11)
  - [AgentRefine: Enhancing Agent Generalization through Refinement Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a3cc50126338b175e56bb3cad134db0b-Paper-Conference.pdf)
- **Instruction following ability** (constructs) — *causes*
  > Refinement preference pairs enhance instruction-following capability more effectively. (Section 3.5)
  - [SPaR: Self-Play with Tree-Search Refinement to Improve Instruction-Following in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/abe1eb21ceb046209c96a0f5e7544ccc-Paper-Conference.pdf)
- **Problem-solving ability** (constructs) — *causes*
  > ...post-prompting strategies are limited by the model’s intrinsic self-correction capabilities, thereby failing to significantly enhance problem-solving capabilities. (Section 2)
  - [Progress or Regress? Self-Improvement Reversal in Post-training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1fa0c4e5a7e189729230d018b229abc7-Paper-Conference.pdf)
- **Question difficulty** (constructs) — *causes*
  > In terms of difficulty, MCQG-SRefine generates more challenging questions. Specifically, when provided with expert-identified topics and test points, there is an 80% reduction in easy questions, a 2.25-fold increase in medium questions, and a 4-fold increase in hard questions. (Section 1)
  - [MCQG-SRefine: Multiple Choice Question Generation and Evaluation with Iterative Self-Critique, Correction, and Comparison Feedback](https://aclanthology.org/2025.naacl-long.538.pdf)
- **Long-horizon planning** (constructs) — *causes*
  > “self-refinement ... iteratively improves a previously generated plan” and “bidirectional dependency ... thus improving its ability to plan ahead”
  - [Closed-Loop Long-Horizon Robotic Planning via Equilibrium Sequence Modeling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25cd/li25cd.pdf)
- **GSM8K** (measurements) — *measured_by*
  > GSM8K evaluates the model’s self-correction capabilities... (Section 4.2)
  - [CopySpec: Accelerating LLMs with Speculative Copy-and-Paste](https://aclanthology.org/2025.emnlp-main.1337.pdf)
- **MOLERR2FIX** (measurements) — *measured_by*
  > MOLERR2FIX introduces a structured chain-like, four-stage Error-to-Fix evaluation pipeline—detection, localization, explanation, and revision—offering a fine-grained and progressive framework for assessing LLMs in chemical reasoning. (Section 1)
  - [MolErr2Fix: Benchmarking LLM Trustworthiness in Chemistry via Modular Error Detection, Localization, Explanation, and Correction](https://aclanthology.org/2025.emnlp-main.977.pdf)
- **Toxicity** (constructs) — *causes*
  > The results in Table 3 demonstrate that 1) CRITIC substantially lowers the occurrence of toxic generations, while preserving fluency and diversity as the vanilla LLMs. (Section 4.3 Results)
  - [CRITIC: Large Language Models Can Self-Correct with Tool-Interactive Critiquing](https://proceedings.iclr.cc/paper_files/paper/2024/file/fef126561bbf9d4467dbb8d27334b8fe-Paper-Conference.pdf)

### → Self-correction
- **Self-reflection** (behaviors tasks) — *causes*
  > without the reflection mechanism, the system is prone to mistakes in logical reasoning and lacks the ability for self correction. (Section 4.5)
  - [Chain-of-Experts: When LLMs Meet Complex Operations Research Problems](https://proceedings.iclr.cc/paper_files/paper/2024/file/d45ee77826332c100a1e15f7765b99ff-Paper-Conference.pdf)
- **Code execution** (behaviors tasks) — *causes*
  > The analysis reveals that GPT4-Code’s strong performance is not solely due to its code generation and execution abilities but also its capacity to adjust its problem-solving strategies based on feedback from code execution—a process we term self-debugging
  - [Solving Challenging Math Word Problems Using GPT-4 Code Interpreter with Code-based Self-Verification](https://proceedings.iclr.cc/paper_files/paper/2024/file/12c45a68e8433b21b91cd47731387fa4-Paper-Conference.pdf)
- **Data efficiency** (constructs) — *causes*
  > “SELF-DEBUGGING notably improves sample efﬁciency”
  - [Teaching Large Language Models to Self-Debug](https://proceedings.iclr.cc/paper_files/paper/2024/file/2460396f2d0d421885997dd1612ac56b-Paper-Conference.pdf)
- **Self-improvement** (constructs) — *causes*
  > imbue an LLM with the capability to recursively detect and correct its previous mistakes in subsequent iterations.
  - [Recursive Introspection: Teaching Language Model Agents How to Self-Improve](https://proceedings.neurips.cc/paper_files/paper/2024/file/639d992f819c2b40387d4d5170b8ffd7-Paper-Conference.pdf)
- **Critique generation** (behaviors tasks) — *causes*
  > Additional studies confirm the utility of generated critiques for Critic-RM in identifying and correcting mistakes made by LLMs.
  - [Self-Generated Critiques Boost Reward Modeling for Language Models](https://aclanthology.org/2025.naacl-long.573.pdf)
- **Question difficulty** (constructs) — *causes*
  > “Through iterative critique and correction, MCQG-SRefine significantly enhances the quality and difficulty of generated USMLE-style MCQs.”
  - [MCQG-SRefine: Multiple Choice Question Generation and Evaluation with Iterative Self-Critique, Correction, and Comparison Feedback](https://aclanthology.org/2025.naacl-long.538.pdf)
- **Self-evaluation** (behaviors tasks) — *causes*
  > Since the model possesses self-evaluation and exploration capabilities, it can abandon erroneous paths and select the correct one (Figure 1).
  - [GRAT: Guiding Retrieval-Augmented Reasoning through Process Rewards Tree Search](https://aclanthology.org/2025.acl-long.1352.pdf)
- **Long chain-of-thought generation** (behaviors tasks) — *causes*
  > A proven approach for scaling inference compute is to generate long chains-of-thought (CoTs), enabling models to engage in structured reasoning strategies such as backtracking and error correction. (Abstract)
  - [Demystifying Long Chain-of-Thought Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25ae/yang25ae.pdf)
- **Self-verification** (behaviors tasks) — *causes*
  > ...enables LLMs to self-correct their outputs through self-verification.
  - [ReVISE: Learning to Refine at Test-Time via Intrinsic Self-Verification](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lee25ab/lee25ab.pdf)
- **Error detection** (behaviors tasks) — *causes*
  > Without accurate error identifications, self-correction becomes more challenging. (Section 1)
  - [SuperCorrect: Advancing Small LLM Reasoning with Thought Template Distillation and Self-Correction](https://proceedings.iclr.cc/paper_files/paper/2025/file/0967d7c8b171dd81b77c43067c02bebf-Paper-Conference.pdf)

### Associated with
- **Few-shot prompting** (measurements)
  > we propose SELF-DEBUGGING, where we teach the large language model to debug its own predicted code via few-shot prompting.
  - [Teaching Large Language Models to Self-Debug](https://proceedings.iclr.cc/paper_files/paper/2024/file/2460396f2d0d421885997dd1612ac56b-Paper-Conference.pdf)
- **Self-debug** (measurements)
  > Self-debug (Chen et al., 2024a) is a code generation framework for LLMs to execute their generated programs, access execution results, and then reflect on the results to improve each program iteratively. (Section 3)
  - [ScienceAgentBench: Toward Rigorous Assessment of Language Agents for Data-Driven Scientific Discovery](https://proceedings.iclr.cc/paper_files/paper/2025/file/f12b4df26344f3be803c06b555252efe-Paper-Conference.pdf)
- **System 2 thinking** (constructs)
  > state-of-the-art LLMs (OpenAI, 2024, 2025) are capable of self-correction—often referred to as “system 2” reasoning (Xiang et al., 2025)—without explicit external verification. (Introduction)
  - [Linguistic Generalizability of Test-Time Scaling in Mathematical Reasoning](https://aclanthology.org/2025.acl-long.699.pdf)
- **Self-awareness** (constructs)
  > Self-awareness, i.e., the ability to assess and correct one’s generation, is a fundamental aspect of human intelligence...
  - [ReVISE: Learning to Refine at Test-Time via Intrinsic Self-Verification](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lee25ab/lee25ab.pdf)
- **Self-reflection ability** (constructs)
  > “Reflection Quality ... analyzes whether each reflection step drives the question towards correctness.”
  - [MME-CoT: Benchmarking Chain-of-Thought in Large Multimodal Models for Reasoning Quality, Robustness, and Efficiency](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jiang25n/jiang25n.pdf)
- **Iterative refinement** (behaviors tasks)
  > Visually grounded inputs enable closed-loop iterative refinement: We highlight the critical role of grounded visual inputs in articulating ambiguous and complex objects, leveraging such inputs in a closed-loop system that self-evaluates and self-improves its articulations. (Section 1)
  - [Articulate-Anything:  Automatic Modeling of Articulated Objects via a Vision-Language Foundation Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/2c8047bf3ed8ef6905351608d641f02f-Paper-Conference.pdf)
- **Multi-agent collaboration** (behaviors tasks)
  > “we propose DPSDP: Direct Policy Search by Dynamic Programming, an RL algorithm designed to train a multi-agent LLM system to iteratively improve its responses for reasoning tasks with self-generated data”
  - [Reinforce LLM Reasoning through Multi-Agent Reflection](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yuan25l/yuan25l.pdf)
