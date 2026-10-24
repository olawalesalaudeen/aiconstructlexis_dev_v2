# Chain of thought
**Type:** Behavior  
**Referenced in:** 345 papers  
**Also known as:** Explicit reasoning, Chain-of-thought generation, Chain-of-thought reasoning, Step-by-step reasoning, Step-by-step solution generation, Reasoning path generation, Rationale generation, Thought generation, Reasoning generation, Reasoning trace generation, Step-by-step reasoning generation, Multi-step reasoning generation, Intermediate reasoning generation, Reasoning chain generation, Stepwise reasoning, Intermediate step generation, Chain-of-thought computation, Hierarchical thought generation, Multi-branch reasoning, Search trajectory verbalization, Chain-of-thought inference, Reasoning chain construction, Inner monologue generation, Reasoning context generation, Silent chain-of-thought generation, Explicit Chain-of-Thought generation, Intermediate instruction generation, Reasoning step generation, Logic generation, Step-by-step execution, Structured response generation, Continuous thought generation, Structured chain-of-thought generation, Natural language chain-of-thought generation, Program chain-of-thought generation, Chain-of-Thought Reasoning, Intermediate token generation, Reasoned explanation generation, Multi-step reasoning, Step-wise reasoning  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats chain of thought as an observable output in which a model produces intermediate reasoning before the final output. Most definitions describe a visible, step-by-step chain, path, trace, rationale, or scratchpad that decomposes a problem into smaller steps; the trace may be sentences, tokens, a paragraph, or a structured sequence, and it often ends with an answer but sometimes with a score, ranking, label, plan, or action. A smaller line of work broadens this to intermediate computation or latent thought, including unobserved sequences that connect a question to an answer, but the dominant framing remains explicit intermediate-step generation.

**Variants.** Most papers study natural-language, step-by-step explanations, but they use many names for the same behavior, including chain-of-thought generation, step-by-step reasoning, reasoning path or trace generation, rationale generation, thought generation, and structured response generation. The behavior appears in math, logical, commonsense, retrieval and multi-document QA, reranking, LLM-as-a-judge scoring, healthcare prediction, tool use and planning, and multimodal settings with images, tables, audio, video, and GUI interaction. Smaller variants make the intermediate process program code, knowledge-triple chains, search trajectories, multiple branches from one prompt, hierarchical thought templates, continuous latent thoughts, or silent <THINK> tokens.

**Space of elicitation and scores.** Elicitation is usually prompt-based: papers ask models to think step by step, to produce the result step by step, or provide CoT exemplars, while some setups require fixed formats that expose the intermediate trace. Papers link chain of thought to 17 measurement instruments, with GSM8K, LLM-as-a-judge, StrategyQA, LASER, and AIME appearing most often; these are mainly reasoning benchmarks together with judge-based or rubric-based evaluation setups. Scoring ranges from benchmark accuracy to direct assessment of the trace itself, including pairwise judging, error checks on intermediate steps, and in other linked work alignment-style or human evaluation of reasoning chains.

**What it is taken as evidence of.** When papers connect this behavior to broader constructs, the most frequent target is Reasoning: several claim a causal relationship from Chain of thought to Reasoning, others report it as related to Reasoning, and a smaller line claims a causal relationship from Reasoning to Chain of thought. Papers link it to 19 constructs overall, most often Reasoning, Mathematical reasoning, Chain-of-thought reasoning, Interpretability and explainability, and In-context learning, with other constructs appearing less often. The recorded links do not settle on a single direction, since the literature here includes both causal and related links across these constructs.

## Sources

**[REARANK: Reasoning Re-ranking Agent via Reinforcement Learning](https://aclanthology.org/2025.emnlp-main.125.pdf) (as "Explicit reasoning")**
> The model generates a visible, step-by-step justification for its decisions, such as relevance assessments during reranking, before producing a final output.

**[Chain-of-Thought Reasoning Without Prompting](https://proceedings.neurips.cc/paper_files/paper/2024/file/7a8e7fd295aa04eac4b470ae27f8785c-Paper-Conference.pdf) (as "Chain-of-thought generation")**
> The observable model output of generating a sequence of intermediate steps that lead to a final answer.

**[What Factors Affect Multi-Modal In-Context Learning? An In-Depth Exploration](https://proceedings.neurips.cc/paper_files/paper/2024/file/deeb4d6bdb5860fd7faf321dd5486d25-Paper-Conference.pdf) (as "Chain-of-thought reasoning")**
> The task of generating a step-by-step explanation (a 'chain of thought') that leads to the final answer for a complex reasoning problem, often involving both text and images.

**[UDA: A Benchmark Suite for Retrieval Augmented Generation in Real-World Document Analysis](https://proceedings.neurips.cc/paper_files/paper/2024/file/7c06759d1a8567f087b02e8589454917-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Step-by-step reasoning")**
> The observable behavior of generating a sequence of intermediate steps or a rationale that leads to the final answer, typically prompted by a Chain-of-Thought strategy.

**[SciInstruct: a Self-Reflective Instruction Annotated Dataset for Training Scientific Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/02ee6b7295f720407b56c457b34c54d5-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Step-by-step solution generation")**
> The behavior of producing a detailed, sequential reasoning process (chain-of-thought) leading to a final answer for a given problem.

**[Neuro-Symbolic Data Generation for Math Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/29d319f7c1513c9ecd81d3a6e9632a6e-Paper-Conference.pdf) (as "Reasoning path generation")**
> The behavior of generating a step-by-step explanation or sequence of intermediate thoughts (Chain-of-Thought) that leads from a problem statement to its solution.

**[MediQ: Question-Asking LLMs and a Benchmark for Reliable Interactive Clinical Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/32b80425554e081204e5988ab1c97e9a-Paper-Conference.pdf) (as "Rationale generation")**
> The behavior of producing a chain of reasoning or explanation for a decision or confidence level when prompted.

**[Chain of Preference Optimization: Improving Chain-of-Thought Reasoning in LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/00d80722b756de0166523a87805dd00f-Paper-Conference.pdf) (as "Thought generation")**
> The specific action of producing one or more candidate intermediate reasoning steps (thoughts) from a given state in a problem-solving process.

**[Large Language Models' Expert-level Global History Knowledge Benchmark (HiST-LLM)](https://proceedings.neurips.cc/paper_files/paper/2024/file/38cc5cba8e513547b96bc326e25610dc-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Reasoning generation")**
> Producing a short explanation of evidence and reasoning before giving the final answer.

**[ReST-MCTS*: LLM Self-Training via Process Reward Guided Tree Search](https://proceedings.neurips.cc/paper_files/paper/2024/file/76ec4dc30e9faaf0e4b6093eaa377218-Paper-Conference.pdf) (as "Reasoning trace generation")**
> The observable act of autoregressively producing a sequence of reasoning steps from a given problem or prompt.

**[Unlocking the Capabilities of Thought: A Reasoning Boundary Framework to Quantify and Optimize Chain-of-Thought](https://proceedings.neurips.cc/paper_files/paper/2024/file/62ab1c2cb4b03e717005479efb211841-Paper-Conference.pdf) (as "Step-by-step reasoning generation")**
> The action of verbalizing a sequence of intermediate steps that lead to a final answer for a given problem.

**[Mutual Reasoning Makes Smaller LLMs Stronger Problem-Solver](https://proceedings.iclr.cc/paper_files/paper/2025/file/35514d533cdc278a7780daf0dbe7d0b7-Paper-Conference.pdf) (as "Multi-step reasoning generation")**
> The observable process of generating a sequence of intermediate steps, or a reasoning trajectory, to solve a problem.

**[Long-Context LLMs Meet RAG: Overcoming Challenges for Long Inputs in RAG](https://proceedings.iclr.cc/paper_files/paper/2025/file/5df5b1f121c915d8bdd00db6aac20827-Paper-Conference.pdf) (as "Intermediate reasoning generation")**
> The behavior of generating an explicit reasoning paragraph that identifies relevant passages and explains the rationale before producing the final answer.

**[Reasoning-Enhanced Healthcare Predictions with Knowledge Graph Community Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/cb5a3b4589c1a16f14740396625cbfc8-Paper-Conference.pdf) (as "Reasoning chain generation")**
> The observable behavior of producing a step-by-step textual explanation that details the logic leading to a specific prediction.

**[Training Large Language Models for Retrieval-Augmented Question Answering through Backtracking Correction](https://proceedings.iclr.cc/paper_files/paper/2025/file/80790082a3b0e4fa9061730ee876f5ba-Paper-Conference.pdf) (as "Stepwise reasoning")**
> The behavior of generating a sequence of intermediate analytical steps or reasoning chains before producing a final answer, particularly when processing multiple documents.

**[How Far Can Transformers Reason? The Globality Barrier and Inductive Scratchpad](https://proceedings.neurips.cc/paper_files/paper/2024/file/3107e4bdb658c79053d7ef59cbc804dd-Paper-Conference.pdf) (as "Intermediate step generation")**
> The observable behavior of a model generating a sequence of intermediate computations or reasoning steps (a scratchpad) before producing a final answer.

**[On the Power of Decision Trees in Auto-Regressive Language Modeling](https://proceedings.neurips.cc/paper_files/paper/2024/file/72176f95680c3fb27a0966f36d5d0c53-Paper-Conference.pdf) (as "Chain-of-thought computation")**
> The observable behavior of generating a series of intermediate reasoning steps before producing a final answer.

**[SuperCorrect: Advancing Small LLM Reasoning with Thought Template Distillation and Self-Correction](https://proceedings.iclr.cc/paper_files/paper/2025/file/0967d7c8b171dd81b77c43067c02bebf-Paper-Conference.pdf) (as "Hierarchical thought generation")**
> The generation of a structured reasoning process that includes both a high-level, generalized solution template and a detailed, step-by-step explanation of critical steps.

**[TPO: Aligning Large Language Models with Multi-branch & Multi-step Preference Trees](https://proceedings.iclr.cc/paper_files/paper/2025/file/42ac0f53b7ffede90aea8275b11b3bb8-Paper-Conference.pdf) (as "Multi-branch reasoning")**
> The process of generating multiple, distinct reasoning trajectories from a single prompt or intermediate state.

**[System 1.x: Learning to Balance Fast and Slow Planning with Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/605e59e78284907aa4fce5280838def3-Paper-Conference.pdf) (as "Search trajectory verbalization")**
> Outputting a step-by-step textual representation of explored states and actions during search.

**[Training Nonlinear Transformers for Chain-of-Thought Inference:  A Theoretical Generalization Analysis](https://proceedings.iclr.cc/paper_files/paper/2025/file/b295b3a940706f431076c86b78907757-Paper-Conference.pdf) (as "Chain-of-thought inference")**
> Generating stepwise reasoning outputs for a query when the prompt includes examples with intermediate steps.

**[KiRAG: Knowledge-Driven Iterative Retriever for Enhancing Retrieval-Augmented Generation](https://aclanthology.org/2025.acl-long.929.pdf) (as "Reasoning chain construction")**
> Iteratively building a sequence of logically connected knowledge triples that support answering a given question.

**[Aguvis: Unified Pure Vision Agents for Autonomous GUI Interaction](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25ae/xu25ae.pdf) (as "Inner monologue generation")**
> Producing explicit, intermediate reasoning steps in natural language that reflect the agent’s thought process before taking actions.

**[Re-ranking Reasoning Context with Tree Search Makes Large Vision-Language Models Stronger](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25at/yang25at.pdf) (as "Reasoning context generation")**
> Producing step-by-step logical justifications or intermediate reasoning steps for question-answer pairs, enriching the knowledge base with explainable inference patterns.

**[On the Power of Context-Enhanced Learning in LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhu25p/zhu25p.pdf) (as "Silent chain-of-thought generation")**
> The model's production of a fixed number of <THINK> tokens during output, simulating internal reasoning without explicit intermediate steps in the final answer.

**[CODI: Compressing Chain-of-Thought into Continuous Space via Self-Distillation](https://aclanthology.org/2025.emnlp-main.36.pdf) (as "Explicit Chain-of-Thought generation")**
> The observable behavior of generating intermediate reasoning steps in natural language before providing a final answer.

**[Large Language Models as Realistic Microservice Trace Generators](https://aclanthology.org/2025.emnlp-main.4.pdf) (as "Intermediate instruction generation")**
> The observable behavior of explicitly generating natural language reasoning steps, such as arithmetic and logical checks, between generation stages to ensure constraint adherence.

**[NOVER: Incentive Training for Language Models via Verifier-Free Reinforcement Learning](https://aclanthology.org/2025.emnlp-main.378.pdf) (as "Reasoning step generation")**
> Producing intermediate reasoning tokens (e.g., justifications, decompositions) before arriving at a final answer, often enclosed in specific tags.

**[AQuilt: Weaving Logic and Self-Inspection into Low-Cost, High-Relevance Data Synthesis for Specialist LLMs](https://aclanthology.org/2025.emnlp-main.293.pdf) (as "Logic generation")**
> Producing intermediate reasoning steps that justify the answer to a question, based on unlabeled input and task type.

**[Metric Calculating Benchmark: Code-Verifiable Complicate Instruction Following Benchmark for Large Language Models](https://aclanthology.org/2025.emnlp-main.1051.pdf) (as "Step-by-step execution")**
> The observable behavior of generating a sequence of intermediate outputs that follow a prescribed procedural rubric, including tokenization, n-gram generation, and numerical computation.

**[Large Language Models Have Intrinsic Meta-Cognition, but Need a Good Lens](https://aclanthology.org/2025.emnlp-main.171.pdf) (as "Structured response generation")**
> The behavior of generating a response that is segmented into logically discrete reasoning steps, often marked by transitional phrases like "Step 1:", "Step 2:", etc.

**[CODI: Compressing Chain-of-Thought into Continuous Space via Self-Distillation](https://aclanthology.org/2025.emnlp-main.36.pdf) (as "Continuous thought generation")**
> Autoregressively generating a sequence of continuous latent representations as intermediate reasoning steps before producing an answer.

**[Audio-Reasoner: Improving Reasoning Capability in Large Audio Language Models](https://aclanthology.org/2025.emnlp-main.1216.pdf) (as "Structured chain-of-thought generation")**
> Producing explicit multi-step reasoning traces before the final answer, often with labeled planning, captioning, reasoning, and summary sections.

**[Parrot: A Training Pipeline Enhances Both Program CoT and Natural Language CoT for Reasoning](https://aclanthology.org/2025.emnlp-main.1366.pdf) (as "Natural language chain-of-thought generation")**
> The observable behavior of producing a step-by-step reasoning rationale in natural language to solve a problem.

**[Parrot: A Training Pipeline Enhances Both Program CoT and Natural Language CoT for Reasoning](https://aclanthology.org/2025.emnlp-main.1366.pdf) (as "Program chain-of-thought generation")**
> Generating executable code snippets that represent the reasoning steps for solving a mathematical problem, which can be verified by an interpreter.

**[Predicting Emergent Abilities with Infinite Resolution Evaluation](https://proceedings.iclr.cc/paper_files/paper/2024/file/4e6d14709eae0cbc49a1d19d87fb8b21-Paper-Conference.pdf) (as "Chain-of-Thought Reasoning")**
> Generating intermediate reasoning steps before producing a final answer, often used to improve performance on complex reasoning tasks.

**[The Expressive Power of Transformers with Chain of Thought](https://proceedings.iclr.cc/paper_files/paper/2024/file/1f59721c106ea80f613299039112f651-Paper-Conference.pdf) (as "Intermediate token generation")**
> The observable action of a model producing a sequence of intermediate computational steps or "thoughts" before outputting a final answer.

**[Language Models are Crossword Solvers](https://aclanthology.org/2025.naacl-long.104.pdf) (as "Reasoned explanation generation")**
> Producing step-by-step justifications for answers to cryptic clues, particularly using chain-of-thought prompting.

**[CER: Confidence Enhanced Reasoning in LLMs](https://aclanthology.org/2025.acl-long.390.pdf) (as "Multi-step reasoning")**
> A reasoning process that breaks down a problem into a sequence of explicit intermediate steps or thoughts to reach a final solution.

**[Progressive Multimodal Reasoning via Active Retrieval](https://aclanthology.org/2025.acl-long.180.pdf) (as "Step-wise reasoning")**
> Generating a sequence of intermediate logical steps leading to a final answer, often in the form of structured explanations or derivations.

## Relationships

### Chain of thought →
- **Reasoning** (constructs) — *causes*
  > This suggests that reasoning improvements from PPO may be due to increased chain-of-thought abilities. (Section 3.2).
  - [Unpacking DPO and PPO: Disentangling Best Practices for Learning from Preference Feedback](https://proceedings.neurips.cc/paper_files/paper/2024/file/404df2480b6eef0486a1679e371894b0-Paper-Conference.pdf)
- **GSM8K** (measurements) — *measured_by*
  > "tasks involving chain-of-thought (Wei et al., 2022b) reasoning: StrategyQA (Geva et al., 2021) and GSM8K Cobbe et al. (2021)"
  - [DoLa: Decoding by Contrasting Layers Improves Factuality in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/edc36117f795ca52a0cbf6a7b3882859-Paper-Conference.pdf)
- **Mathematical reasoning** (constructs) — *causes*
  > Finding 1: CoT only helps substantially on problems requiring mathematical, logical, or algorithmic reasoning. (Section 1)
  - [To CoT or not to CoT? Chain-of-thought helps mainly on math and symbolic reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/ead542f13a38179d1b55b88610f959a1-Paper-Conference.pdf)
- **Interpretability and explainability** (constructs) — *causes*
  > We leverage the augmented patient context to enable LLMs to generate step-by-step reasoning chains, enhancing both interpretability and prediction accuracy in clinical tasks. (Section 1)
  - [Reasoning-Enhanced Healthcare Predictions with Knowledge Graph Community Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/cb5a3b4589c1a16f14740396625cbfc8-Paper-Conference.pdf)
- **Mathematical problem solving** (behaviors tasks) — *causes*
  > The seminal work of chain-of-thought (CoT) (Wei et al., 2022) is an excellent example of how enriching reasoning details, by decomposing reasoning traces into steps, improves its problem-solving capability (Section 1).
  - [Think Smarter not Harder: Adaptive Reasoning with Inference Aware Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yu25s/yu25s.pdf)
- **Chain-of-thought reasoning** (constructs) — *causes*
  > Large language models are capable of solving tasks that require complex multi-step reasoning by generating solutions in a step-by-step chain-of-thought format (Section 1).
  - [Let's Verify Step by Step](https://proceedings.iclr.cc/paper_files/paper/2024/file/aca97732e30bcf1303bc22ac3924fd16-Paper-Conference.pdf)
- **StrategyQA** (measurements) — *measured_by*
  > "tasks involving chain-of-thought (Wei et al., 2022b) reasoning: StrategyQA (Geva et al., 2021) and GSM8K Cobbe et al. (2021)"
  - [DoLa: Decoding by Contrasting Layers Improves Factuality in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/edc36117f795ca52a0cbf6a7b3882859-Paper-Conference.pdf)
- **Answer generation** (behaviors tasks) — *causes*
  > Extracting reasoning chains from multi-document artefacts can help contextualize curated evidence for final answer generation.
  - [VisDoM: Multi-Document QA with Visually Rich Elements Using Multimodal Retrieval-Augmented Generation](https://aclanthology.org/2025.naacl-long.310.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > For evaluating intermediate reasoning steps, we randomly select 200 samples and use a strong reasoning model, OpenAI-o3, to identify any errors within the reasoning process (Section 3.3).
  - [Code Execution as Grounded Supervision for LLM Reasoning](https://aclanthology.org/2025.emnlp-main.1260.pdf)
- **Expressive power** (constructs) — *causes*
  > we demonstrate that functions computed by Automata, Turing machines, or sparse circuits can be emulated by an ARDT using these intermediate “chain-of-thought” computations. (Section 3)
  - [On the Power of Decision Trees in Auto-Regressive Language Modeling](https://proceedings.neurips.cc/paper_files/paper/2024/file/72176f95680c3fb27a0966f36d5d0c53-Paper-Conference.pdf)
- **Symbolic reasoning** (constructs) — *causes*
  > The three categories which benefited the most from CoT are symbolic reasoning, math, and logical reasoning, with average improvements of 14.2, 12.3, 6.9, respectively. (Section 3)
  - [To CoT or not to CoT? Chain-of-thought helps mainly on math and symbolic reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/ead542f13a38179d1b55b88610f959a1-Paper-Conference.pdf)
- **In-context learning** (constructs) — *causes*
  > The foundational method for inducing in-context learning is the chain of thought approach
  - [Chain of Thoughtlessness? An Analysis of CoT in Planning](https://proceedings.neurips.cc/paper_files/paper/2024/file/3365d974ce309623bd8151082d78206c-Paper-Conference.pdf)
- **Logical reasoning** (constructs) — *causes*
  > Finding 1: CoT only helps substantially on problems requiring mathematical, logical, or algorithmic reasoning. (Section 1)
  - [To CoT or not to CoT? Chain-of-thought helps mainly on math and symbolic reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/ead542f13a38179d1b55b88610f959a1-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks) — *causes*
  > Asking the Constructor to complete the whole chain reduces hallucination, and avoids a sub-optimal greedy approach. (Section 3.2)
  - [KiRAG: Knowledge-Driven Iterative Retriever for Enhancing Retrieval-Augmented Generation](https://aclanthology.org/2025.acl-long.929.pdf)
- **Exploration** (behaviors tasks) — *causes*
  > The single configuration that succeeds in our experiments involves a combination of GPT-4 and an “enhanced” prompt that (a) provides a suggestive hint to explore, (b) externally summarizes the history of interaction into per-arm averages, and (c) asks the LLM to use zero-shot chain-of-thought reasoning [74, 41]. (Introduction)
  - [Can large language models explore in-context?](https://proceedings.neurips.cc/paper_files/paper/2024/file/d951f73c521d069fefbb73396df01424-Paper-Conference.pdf)
- **Algorithmic reasoning** (constructs) — *causes*
  > Finding 1: CoT only helps substantially on problems requiring mathematical, logical, or algorithmic reasoning. (Section 1)
  - [To CoT or not to CoT? Chain-of-thought helps mainly on math and symbolic reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/ead542f13a38179d1b55b88610f959a1-Paper-Conference.pdf)
- **MathVerse** (measurements) — *measured_by*
  > As shown in Table 1 for the MathVerse benchmark, MAVIS-7B achieves the best overall scores in both CoT evaluation and accuracy among open-source MLLMs... (Section 4.2)
  - [MAVIS: Mathematical Visual Instruction Tuning with an Automatic Data Engine](https://proceedings.iclr.cc/paper_files/paper/2025/file/db36dcad6baee298a34ffca324b84b09-Paper-Conference.pdf)
- **MMLU** (measurements) — *measured_by*
  > To examine how retrieval heads effect reasoning tasks, we test Mistrial-7B-Instruct-v0.2 on MMLU (Hendrycks et al., 2020), MuSiQue and GSM8K (Cobbe et al., 2021), with and without chain-of-thought (CoT) reasoning. (Section 4.3)
  - [Retrieval Head Mechanistically Explains Long-Context Factuality](https://proceedings.iclr.cc/paper_files/paper/2025/file/9b77f07301b1ef1fe810aae96c12cb7b-Paper-Conference.pdf)
- **MuSiQue** (measurements) — *measured_by*
  > To examine how retrieval heads effect reasoning tasks, we test Mistrial-7B-Instruct-v0.2 on MMLU (Hendrycks et al., 2020), MuSiQue and GSM8K (Cobbe et al., 2021), with and without chain-of-thought (CoT) reasoning. (Section 4.3)
  - [Retrieval Head Mechanistically Explains Long-Context Factuality](https://proceedings.iclr.cc/paper_files/paper/2025/file/9b77f07301b1ef1fe810aae96c12cb7b-Paper-Conference.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > “Human evaluation of KARE-generated reasoning chains is presented in Appendix H.”
  - [Reasoning-Enhanced Healthcare Predictions with Knowledge Graph Community Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/cb5a3b4589c1a16f14740396625cbfc8-Paper-Conference.pdf)
- **Reward hacking** (behaviors tasks) — *causes*
  > Our analysis shows that CoT reasoning is crucial for unlocking DPO’s potential, as it mitigates reward hacking... (Abstract)
  - [Uncovering the Impact of Chain-of-Thought Reasoning for Direct Preference Optimization: Lessons from Text-to-SQL](https://aclanthology.org/2025.acl-long.1031.pdf)
- **Scalability** (constructs) — *causes*
  > Our analysis shows that CoT reasoning is crucial for unlocking DPO’s potential, as it ... improves scalability. (Abstract)
  - [Uncovering the Impact of Chain-of-Thought Reasoning for Direct Preference Optimization: Lessons from Text-to-SQL](https://aclanthology.org/2025.acl-long.1031.pdf)
- **AIME** (measurements) — *measured_by*
  > We assess both models on the challenging American Invitational Mathematics Examination (AIME 24) benchmark. (Section 3.3, Chain-of-Thought Reasoning Evaluation).
  - [Native Sparse Attention: Hardware-Aligned and Natively Trainable Sparse Attention](https://aclanthology.org/2025.acl-long.1126.pdf)
- **Molecular property prediction** (behaviors tasks) — *causes*
  > Chain-of-Thought (CoT) improves the reasoning ability of LLMs in molecular property prediction by decomposing complex SMILES data processing into stepwise sub-tasks, overcoming the limitations of direct question-answering approaches. (Section 3.3)
  - [MolRAG: Unlocking the Power of Large Language Models for Molecular Property Prediction](https://aclanthology.org/2025.acl-long.755.pdf)
- **Groundedness** (constructs) — *causes*
  > ...we instruct the LLM to generate a chain-of-knowledge (CoK) (Wang et al., 2024a), where free-form thoughts are replaced with document-grounded knowledge triples to ensure factual reliability. (Section 3.2)
  - [KiRAG: Knowledge-Driven Iterative Retriever for Enhancing Retrieval-Augmented Generation](https://aclanthology.org/2025.acl-long.929.pdf)
- **Backtracking** (behaviors tasks) — *causes*
  > we prove by construction that decoder-only Transformers can decide 3-SAT, in a non-uniform model of computation, using backtracking and deduction via Chain-of-Thought (CoT). (Section 1)
  - [Can Transformers Reason Logically? A Study in SAT Solving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/pan25d/pan25d.pdf)
- **Task generalization** (constructs) — *causes*
  > In contrast, we found that incorporating Chain-of-Thought (CoT) reasoning — adding intermediate reasoning steps to the prompt — allows Transformers to easily generalize to unseen tasks. (Section 1)
  - [Task Generalization with Autoregressive Compositional Structure: Can Learning from $D$ Tasks Generalize to $D^T$ Tasks?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/abedsoltan25a/abedsoltan25a.pdf)
- **Parity checking** (behaviors tasks) — *causes*
  > Transformers empirically struggle to learn it on longer inputs (e.g. Bhattamishra et al., 2020a; Del´etang et al., 2023; Butoi et al., 2024; Hahn & Rofin, 2024), and this difficulty is resolved by a CoT consisting of the parities of increasing prefixes, as in Figure 1 (e.g. Anil et al., 2022). (Section 1)
  - [Lower Bounds for Chain-of-Thought Reasoning in Hard-Attention Transformers](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bavandpour25a/bavandpour25a.pdf)
- **Overthinking** (behaviors tasks) — *causes*
  > However, this approach [chain-of-thought (CoT) reasoning] often leads to unnecessarily long and verbose reasoning traces, resulting in high inference cost and latency. This overthinking phenomenon has become a practical bottleneck... (Introduction)
  - [Answer Convergence as a Signal for Early Stopping in Reasoning](https://aclanthology.org/2025.emnlp-main.904.pdf)
- **Dialogue state tracking** (behaviors tasks) — *causes*
  > The results in Table 4 show that incorporating the CoT from Step 1 provides an approximately 10% improvement in zero-shot accuracy by offering a more robust representation for each turn. (Section 4.6)
  - [From Schema to State: Zero-Shot Scheme-Only Dialogue State Tracking via Diverse Synthetic Dialogue and Step-by-Step Distillation](https://aclanthology.org/2025.emnlp-main.85.pdf)
- **Machine translation** (behaviors tasks) — *causes*
  > both models approach 0% accuracy on multi-hop translations when CoT is disabled, indicating the necessity of CoT on SYNC.
  - [SYNC: A Synthetic Long-Context Understanding Benchmark for Controlled Comparisons of Model Capabilities](https://aclanthology.org/2025.emnlp-main.1707.pdf)
- **Problem solving** (behaviors tasks) — *causes*
  > Another line of work has shown that allowing LLMs to generate intermediate “reasoning” steps, or “chain-of-thoughts” (CoTs) can significantly improve their final answer (Wei et al., 2022; Nye et al., 2021; Zhou et al., 2023). (Section 5)
  - [Learning How Hard to Think: Input-Adaptive Allocation of LM Computation](https://proceedings.iclr.cc/paper_files/paper/2025/file/ff414825df833edb8b1839e3d5d495e9-Paper-Conference.pdf)

### → Chain of thought
- **Prompt engineering** (behaviors tasks) — *causes*
  > We proceed further by introducing Chain-of-Thought (CoT) prompting... request for the model to perform the task step-by-step
  - [Limits of Transformer Language Models on Learning to Compose Algorithms](https://proceedings.neurips.cc/paper_files/paper/2024/file/0e797d5139ad94fc2dc2080c09119f29-Paper-Conference.pdf)
- **Instruction following ability** (constructs) — *causes*
  > When a model struggles to follow instructions accurately, generating CoT explanations becomes more difficult. (Section 3.3)
  - [MMMU-Pro: A More Robust Multi-discipline Multimodal Understanding Benchmark](https://aclanthology.org/2025.acl-long.736.pdf)
- **Mathematical problem solving** (behaviors tasks) — *causes*
  > we task the LIMS method with enabling a model to behave with chain-of-thought generation when a math problem is sensed, following “math(x) →chain of thought(x)”. (Section 4.1)
  - [The Logical Implication Steering Method for Conditional Interventions on Transformer Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/kalajdzievski25a/kalajdzievski25a.pdf)
- **Context retrieval** (behaviors tasks) — *causes*
  > CoT reasoning, which involves decomposing complex tasks into smaller steps, heavily depends on accurately retrieving detailed information from the input. (Section 4.3)
  - [Retrieval Head Mechanistically Explains Long-Context Factuality](https://proceedings.iclr.cc/paper_files/paper/2025/file/9b77f07301b1ef1fe810aae96c12cb7b-Paper-Conference.pdf)

### Associated with
- **System 2 thinking** (constructs)
  > In fast mode, a Transformer will output a final solution without any reasoning steps, whereas the intermediate steps of thinking, such as a search trace for finding a short path, will be generated along with the plan in slow mode. (Section 1)
  - [Dualformer: Controllable Fast and Slow Thinking by Learning with Randomized Reasoning Traces](https://proceedings.iclr.cc/paper_files/paper/2025/file/ed45d6a03de84cc650cae0655f699356-Paper-Conference.pdf)
- **Explanation generation** (behaviors tasks)
  > Zelikman et al. (2022) introduced the the Self-Taught Reasoners method, used rationalization to generate chain-of-thought (CoT) reasoning (Sec. 5.2).
  - [Video-STaR: Self-Training Enables Video Instruction Tuning with Any Supervision](https://proceedings.iclr.cc/paper_files/paper/2025/file/e789cfc9389048df4a0a44d4086e0dc2-Paper-Conference.pdf)
- **Tool use** (behaviors tasks)
  > we opt for the framework of the ReAct agent that performs step-by-step reasoning for tool usage... In each step, the agent generates thought and corresponding code to execute tools.
  - [Multi-modal Agent Tuning: Building a VLM-Driven Agent for Efficient Tool Usage](https://proceedings.iclr.cc/paper_files/paper/2025/file/238747e153a84f50b43fd50fa8504f33-Paper-Conference.pdf)
- **Compositional reasoning** (constructs)
  > “This format includes step-by-step operations and intermediate results, allowing the model to learn the individual components of compositional tasks.”
  - [Teaching Arithmetic to Small Transformers](https://proceedings.iclr.cc/paper_files/paper/2024/file/6bf82fdcbd92b6a7793b3894422d2437-Paper-Conference.pdf)
- **Pattern matching** (constructs)
  > hint that basic pattern matching rather than in context learning of general algorithmic procedures may better explain the improvements seen from chain of thought.
  - [Chain of Thoughtlessness? An Analysis of CoT in Planning](https://proceedings.neurips.cc/paper_files/paper/2024/file/3365d974ce309623bd8151082d78206c-Paper-Conference.pdf)
- **Self-consistency** (measurements)
  > self-consistency: first samples a diverse set of reasoning paths instead of only taking the greedy one, and then selects the most consistent answer by majority voting (Wang et al., 2022). (Section 6)
  - [LLM The Genius Paradox: A Linguistic and Math Expert's Struggle with Simple Word-based Counting Problems](https://aclanthology.org/2025.naacl-long.172.pdf)
- **G-Eval** (measurements)
  > Furthermore, we report G-EVAL (Liu et al., 2023a), an auto-CoT prompting framework, and the current state-of-the-art in NLG evaluation. (Section 5.1)
  - [CSEval: Towards Automated, Multi-Dimensional, and Reference-Free Counterspeech Evaluation using Auto-Calibrated LLMs](https://aclanthology.org/2025.naacl-long.279.pdf)
- **Majority voting** (measurements)
  > In general, majority voting is applicable if the generation y = (c, a) can be decomposed into a chain-of-thought c and a final answer a. (Section 2)
  - [Optimizing Language Models for Inference Time Objectives using Reinforcement Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tang25o/tang25o.pdf)
- **Safety reasoning** (constructs)
  > “We enable LLMs to identify safety risks through step-by-step analysis by self-improving chain-of-thought (CoT) reasoning with safety awareness.”
  - [STAIR: Improving Safety Alignment with Introspective Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cx/zhang25cx.pdf)
- **lm-evaluation-harness** (measurements)
  > We use a fork of EleutherAI's LM Evaluation Harness with minor modiﬁcations. We use the default settings for evaluation, except for increasing the maximum number of allowed generated tokens from 256 to 1000, as we notice that the default setting did not allow some models to complete their full chain-of-thought reasoning before being truncated.
  - [A Careful Examination of Large Language Model Performance on Grade School Arithmetic](https://proceedings.neurips.cc/paper_files/paper/2024/file/53384f2090c6a5cac952c598fd67992f-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MathGAP** (measurements)
  > "MathGAP generates problem statements and chain-of-thought reasoning traces according to specifications about their arithmetic proof structure"
  - [MathGAP: Out-of-Distribution Evaluation on Problems with Arbitrarily Complex Proofs](https://proceedings.iclr.cc/paper_files/paper/2025/file/f9c2ab8d429044e0c35bcece2ff6d123-Paper-Conference.pdf)
- **Zero-shot inference** (behaviors tasks)
  > “Zero-shot with Chain-of-Thought (CoT) incorporates CoT reasoning prompts to generate intermediate reasoning steps before the final answer”
  - [Large (Vision) Language Models are Unsupervised In-Context Learners](https://proceedings.iclr.cc/paper_files/paper/2025/file/3e887bf77d0ba6db38802e552a0d81d2-Paper-Conference.pdf)
- **Code generation** (behaviors tasks)
  > training LLMs to generate code first and then output the CoT to explain reasoning steps for code generation is more effective. (Abstract)
  - [Revisiting Chain-of-Thought in Code Generation: Do Language Models Need to Learn Reasoning before Coding?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25ah/liu25ah.pdf)
- **Latent reasoning** (constructs)
  > DART (Distilling Autoregressive Reasoning to Silent Thought), a novel framework that enables the LLMs to internalize the autoregressive CoT into non-autoregressive Silent Thought (ST) with an excellent efficiency-efficacy trade-off. (Section 1)
  - [DART: Distilling Autoregressive Reasoning to Silent Thought](https://aclanthology.org/2025.emnlp-main.256.pdf)
- **Privacy leakage** (behaviors tasks)
  > it has been shown in (Jiang et al., 2025; Wu et al., 2025) that reasoning traces can carry more sensitive information than final answers (Section 2)
  - [Reasoning Model Unlearning: Forgetting Traces, Not Just Answers, While Preserving Reasoning Skills](https://aclanthology.org/2025.emnlp-main.220.pdf)
- **LASER** (measurements)
  > "Promote step-by-step reasoning: We promoted chain-of-thought reasoning by asking the LLM to return its response in the format: (Word count of original sentence; list of non-penalizable errors; list of major penalizable errors; list of minor penalizable errors; total penalty; score)."
  - [LASER: An LLM-based ASR Scoring and Evaluation Rubric](https://aclanthology.org/2025.emnlp-main.1257.pdf)
