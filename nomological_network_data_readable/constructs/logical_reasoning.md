# Logical reasoning
**Type:** Construct  
**Referenced in:** 231 papers  
**Also known as:** Logical Thinking, Logical deduction, Logic inference, Logical capabilities, Logic reasoning, Logic, Syllogistic reasoning, Deduction, Deductive reasoning, Deductive generalization, Coherence & reasoning, First-order logic reasoning, Logical inference, Propositional inference, Multi-domain deductive reasoning, Disjunctive reasoning, Deductive inference, Formal inference  

## State of the Field

**Definition agreement:** Consensus. Most papers define logical reasoning as the ability to derive valid conclusions from given premises, facts, or rules through formal or structured inference, often emphasizing deduction, multi-step reasoning, and validity or contradiction judgments in natural language or formal systems. A few papers broaden this to related abilities such as inductive or abductive inference, consistency maintenance, rule abstraction, or pattern-based problem solving, but these are minority extensions around the same core phenomenon rather than a substantial alternative definition.

**Space of definitions.** Across the surveyed work, the prevailing usage treats logical reasoning as a latent model ability to derive valid conclusions from premises, rules, facts, or constraints by applying formal logic, often through multi-step deduction. Many definitions stay close to this premise-to-conclusion framing, including deduction from rulebases, first-order logic formulas, or natural-language premises, and some papers make the operation explicit with examples such as inferring an equivalent statement like "B is A" from "A is B". A smaller line of work broadens the construct to include inductive or abductive inference, critical thinking and robustness, contradiction detection and internal consistency, or recognition of abstract token patterns, so the main disagreement is between a narrow formal-deductive ability and a broader family of reasoning or coherence abilities, and between latent capacity and observable task performance.

**Space of facets.** Papers most often systematize the construct into reasoning subtypes rather than a single undifferentiated skill. Several explicitly place deductive, inductive, abductive, and analogical reasoning under logical reasoning, while others carve out narrower forms such as syllogistic reasoning, propositional inference, first-order logic reasoning, disjunctive reasoning, formal inference, and multi-domain deductive reasoning. Related labels including logical deduction, deductive reasoning, logic inference, logical inference, and simply logic are used for closely overlapping capabilities, and some evaluation frameworks further package it with dimensions such as logical correctness, robustness, efficiency, or coherence.

**Space of measurement.** Operationalization is overwhelmingly benchmark-based: papers link logical reasoning to 42 measurement instruments and 12 behavioral indicators. The most frequently linked instruments are FOLIO, LogiQA, PrOntoQA, ProofWriter, and ReClor, alongside many other instruments; these are described as benchmarks for deductive questions, conclusion-from-premises tasks, ontology-derived logic problems, small rulebases of facts and rules, and standardized exam-style logical reasoning. Other linked instruments extend the construct into multimodal, long-context, agent, and broader reasoning evaluations, so measurement sometimes tracks the dominant formal-deduction definition closely and sometimes bundles it with wider reasoning or task performance. Among behavioral indicators, chain of thought is the most recurrent, alongside action selection, argument generation, code generation, and constrained text generation, and several papers operationalize the construct through intermediate reasoning steps, explanations plus conclusions, or consistency-checked rationales.

**Links.** Beyond measurement, papers link logical reasoning to 22 constructs. The most recurrent links say it is related to abductive reasoning, inductive reasoning, in-context learning, legal reasoning, and logical consistency, with many other constructs also appearing; several papers explicitly treat deductive, inductive, abductive, and analogical reasoning as types within the same family. Causal claims are more scattered and usually appear in single papers: some papers claim causal relationships from prompting or perception-related behaviors to logical reasoning, including from in-context demonstrations, chain-of-thought prompting, and fine-grained perception, while one paper reports a causal relationship from code generation to logical reasoning in which performance is degraded on Date Understanding. Other single papers claim causal relationships from logical reasoning to downstream outcomes such as consistency, safety-oriented performance, and task-level decision or prediction behaviors.

## Sources

**[AgentBench: Evaluating LLMs as Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/e9df36b21ff4ee211a8b71ee8b7e9f57-Paper-Conference.pdf)**
> The ability to deduce conclusions from a set of premises using formal rules of logic.

**[The Reversal Curse: LLMs trained on “A is B” fail to learn “B is A”](https://proceedings.iclr.cc/paper_files/paper/2024/file/5178b2f2d7c44aa390c0777dc77b3f0c-Paper-Conference.pdf) (as "Logical deduction")**
> The latent ability to infer logically equivalent statements from given premises, such as deriving 'B is A' from 'A is B' based on the symmetry of identity.

**[FLASK: Fine-grained Language Model Evaluation based on Alignment Skill Sets](https://proceedings.iclr.cc/paper_files/paper/2024/file/f41b4a6b202adcd8e150a9d4f124d8f6-Paper-Conference.pdf) (as "Logical Thinking")**
> The latent ability to apply reasoning, critical thinking, and deductive skills to process and respond to instructions in a logically sound, robust, and efficient manner.

**[LexEval: A Comprehensive Chinese Legal Benchmark for Evaluating Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cb40fc022ca7bdc1a9a78b793661284-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Logic inference")**
> The ability to reason from legal facts and rules to derive correct conclusions through deductive or multi-step inference.

**[Fight Back Against Jailbreaking via Prompt Adversarial Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/759ca99a82e2a9137c6bef4811c8d378-Paper-Conference.pdf) (as "Logical capabilities")**
> The model's capacity for logical reasoning and related problem-solving reflected in benchmark performance.

**[From Unstructured Data to In-Context Learning: Exploring What Tasks Can Be Learned and When](https://proceedings.neurips.cc/paper_files/paper/2024/file/1da38b872e19f1f4a3c2846720e8f64a-Paper-Conference.pdf) (as "Logic reasoning")**
> The capacity to recognize abstract token patterns that do not rely on simple co-occurrence and to generalize them to novel tokens or sequences.

**[SaMer: A Scenario-aware Multi-dimensional Evaluator for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/646ca7b994bc46afe33d680dbe7ed67a-Paper-Conference.pdf) (as "Logic")**
> The ability of a model to reason soundly and produce text that is internally consistent and follows logical principles.

**[ReCogLab: a framework testing relational reasoning & cognitive hypotheses on LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/6fc46679a7ba2ec82183cf01b80e5133-Paper-Conference.pdf) (as "Syllogistic reasoning")**
> A form of logical reasoning that joins two or more premises to arrive at a conclusion.

**[ADIFF: Explaining audio difference using natural language](https://proceedings.iclr.cc/paper_files/paper/2025/file/1e337afbbb9fc2de993b88df0db6161e-Paper-Conference.pdf) (as "Deductive reasoning")**
> The ability to draw logical conclusions by interpreting and comparing features from provided inputs.

**[Strategist: Self-improvement of LLM Decision Making via Bi-Level Tree Search](https://proceedings.iclr.cc/paper_files/paper/2025/file/439dbffb7a044ee4b636babff57d4994-Paper-Conference.pdf) (as "Deduction")**
> The ability to infer hidden information, such as other players' identities or roles, from observable actions and communication.

**[Reasoning Elicitation in Language Models via Counterfactual Feedback](https://proceedings.iclr.cc/paper_files/paper/2025/file/bf145010b30dc5f14fa87dc152074e4d-Paper-Conference.pdf) (as "Deductive generalization")**
> The tendency for reasoning learned from broader causal relations to transfer to a more specific relation that was not directly demonstrated.

**[PLLuM-Align: Polish Preference Dataset for Large Language Model Alignment](https://aclanthology.org/2025.emnlp-main.1219.pdf) (as "Coherence & reasoning")**
> The latent ability of a model to generate logically consistent, well-structured responses that demonstrate sound reasoning across multiple steps or ideas.

**[Towards Advanced Mathematical Reasoning for LLMs via First-Order Logic Theorem Proving](https://aclanthology.org/2025.emnlp-main.628.pdf) (as "First-order logic reasoning")**
> The ability to perform logical deductions and manipulations within the formal system of first-order logic, involving quantifiers, predicates, and logical connectives.

**[LogiDynamics: Unraveling the Dynamics of Inductive, Abductive and Deductive Logical Inferences in LLM Reasoning](https://aclanthology.org/2025.emnlp-main.1045.pdf) (as "Logical inference")**
> The latent ability of LLMs to derive conclusions from premises through inductive, abductive, or deductive reasoning processes, reflecting underlying cognitive-style reasoning mechanisms.

**[Logicbreaks: A Framework for Understanding Subversion of Rule-based Inference](https://proceedings.iclr.cc/paper_files/paper/2025/file/4e2dd37e10bb18ed9d6d488f63094631-Paper-Conference.pdf) (as "Propositional inference")**
> Deriving all propositions that follow from a set of rules and known facts.

**[LLM-based Typed Hyperresolution for Commonsense Reasoning with Knowledge Bases](https://proceedings.iclr.cc/paper_files/paper/2025/file/67496dfa96afddab795530cc7c69b57a-Paper-Conference.pdf) (as "Multi-domain deductive reasoning")**
> Deriving conclusions from axioms and facts across multiple domains such as biological entities, foods, and vehicles.

**[Probing Logical Reasoning of MLLMs in Scientific Diagrams](https://aclanthology.org/2025.emnlp-main.542.pdf) (as "Disjunctive reasoning")**
> Handling questions where the correct answer depends on an 'or' relation, including cases where only one of multiple clauses needs to be true.

**[LogiDynamics: Unraveling the Dynamics of Inductive, Abductive and Deductive Logical Inferences in LLM Reasoning](https://aclanthology.org/2025.emnlp-main.1045.pdf) (as "Deductive inference")**
> The ability to apply a rule or hypothesis to premises so that conclusions follow with logical necessity.

**[SylloBio-NLI: Evaluating Large Language Models on Biomedical Syllogistic Reasoning](https://aclanthology.org/2025.naacl-long.371.pdf) (as "Formal inference")**
> The capacity to abstract and apply logical inference rules independent of the semantic content of the premises, focusing on structural validity rather than factual correctness.

## Relationships

### Logical reasoning →
- **PrOntoQA** (measurements) — *measured_by*
  > PrOntoQA (Saparov and He, 2023): A dataset designed for logical reasoning. (Section 4.1)
  - [Calibrating Reasoning in Language Models with Internal Consistency](https://proceedings.neurips.cc/paper_files/paper/2024/file/d037fd021c9aace128b8ce25001cdb6c-Paper-Conference.pdf)
- **LogiQA** (measurements) — *measured_by*
  > "LogiQA [31] collects questions about natural language inference (NLI) and requires models to infer the conclusion based on provided premises."
  - [TAIA: Large Language Models are Out-of-Distribution Data Learners](https://proceedings.neurips.cc/paper_files/paper/2024/file/be0a8ecf8b2743a4117557c5eca0fb79-Paper-Conference.pdf)
- **FOLIO** (measurements) — *measured_by*
  > We compare the performance of each setting on math (GSM8K) and logical reasoning (ContextHub and FOLIO) datasets. (Section 5.1)
  - [To CoT or not to CoT? Chain-of-thought helps mainly on math and symbolic reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/ead542f13a38179d1b55b88610f959a1-Paper-Conference.pdf)
- **ProofWriter** (measurements) — *measured_by*
  > ProofWriter (Tafjord et al., 2020): A logical reasoning dataset that, in contrast to PrOntoQA, uses real concepts for all assumptions. (Section 4.1)
  - [Calibrating Reasoning in Language Models with Internal Consistency](https://proceedings.neurips.cc/paper_files/paper/2024/file/d037fd021c9aace128b8ce25001cdb6c-Paper-Conference.pdf)
- **ReClor** (measurements) — *measured_by*
  > "we applied it to the Reclor logic reasoning dataset [21]."
  - [MACM: Utilizing a Multi-Agent System for Condition Mining in Solving Complex Mathematical Problems](https://proceedings.neurips.cc/paper_files/paper/2024/file/5fcedec09977357f32e8e0ec8957073b-Paper-Conference.pdf)
- **BIG-Bench Hard** (measurements) — *measured_by*
  > BBH contains 21 tasks covering both semantic understanding and logical reasoning tasks. (Section 5.2)
  - [CultureLLM: Incorporating Cultural Differences into Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/9a16935bf54c4af233e25d998b7f4a2c-Paper-Conference.pdf)
- **RuleTaker** (measurements) — *measured_by*
  > In the experiment, we employ five logical reasoning datasets: ... (3) RuleTaker (Clark et al., 2021), which is automatically generated via programming, utilizing connectives including ∧, ¬, and → (Section 4.1).
  - [Logic-of-Thought: Injecting Logic into Contexts for Full Reasoning in Large Language Models](https://aclanthology.org/2025.naacl-long.510.pdf)
- **ZebraLogic** (measurements) — *measured_by*
  > We select one logical reasoning benchmark, ZebraLogic... for analysis. (Section 3.5)
  - [Subtle Errors in Reasoning: Preference Learning via Error-injected Self-editing](https://aclanthology.org/2025.acl-long.1506.pdf)
- **MMStar** (measurements) — *measured_by*
  > We further analyze the detailed scores on MM-Star (Chen et al., 2024a), including coarse perception (CP), fine-grained perception (FP), instance reasoning (IR), logical reasoning (LR)... (Table 4)
  - [HaploVL: A Single-Transformer Baseline for Multi-Modal Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25ab/yang25ab.pdf)
- **LogicNLI** (measurements) — *measured_by*
  > We evaluated both the baselines and our method on three carefully selected logical reasoning datasets: ProntoQA (Saparov and He, 2023), ProofWriter (Tafjord et al., 2021) and LogicNLI (Tian et al., 2021). (Section 4.1)
  - [Aristotle: Mastering Logical Reasoning with A Logic-Complete Decompose-Search-Resolve Framework](https://aclanthology.org/2025.acl-long.153.pdf)
- **LogiQA 2.0** (measurements) — *measured_by*
  > LogiQA2 [Liu et al., 2023] is a revision and re-annotation of LogiQA [Liu et al., 2021], a logical reasoning reading comprehension dataset. (Appendix C.1)
  - [Self-playing Adversarial Language Game Enhances LLM Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/e4be7e9867ef163563f4a5e90cec478f-Paper-Conference.pdf)
- **bAbI** (measurements) — *measured_by*
  > "the reasoning skills they assess, including spatial and temporal reasoning, deduction, and coreference resolution"
  - [BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf)
- **LogicBench** (measurements) — *measured_by*
  > Logic LogicBench (Parmar et al., 2024) comprises various logic questions in both binary classification and multiple-choice formats. (Section 2.1)
  - [Assessing Dialect Fairness and Robustness of Large Language Models in Reasoning Tasks](https://aclanthology.org/2025.acl-long.317.pdf)
- **ARC** (measurements) — *measured_by*
  > Reasoning: The model’s capacity for commonsense and logical reasoning is measured using Winogrande (Sakaguchi et al., 2021) and ARC (easy and challenge subsets) (Clark et al., 2018). (Section 4.1)
  - [Mixture-of-Clustered-Experts: Advancing Expert Specialization and Generalization in Instruction Tuning](https://aclanthology.org/2025.emnlp-main.718.pdf)
- **MMLU** (measurements) — *measured_by*
  > MMLU (Hendrycks et al., 2021) provides a comprehensive set of logical reasoning assessments across diverse subjects and difficulties, utilizing multiple-option questions to measure general world knowledge and logical inference capabilities.
  - [Scaling Large Language Model-based Multi-Agent Collaboration](https://proceedings.iclr.cc/paper_files/paper/2025/file/66a026c0d17040889b50f0dfa650e5e0-Paper-Conference.pdf)
- **WinoGrande** (measurements) — *measured_by*
  > Reasoning: The model’s capacity for commonsense and logical reasoning is measured using Winogrande (Sakaguchi et al., 2021) and ARC (easy and challenge subsets) (Clark et al., 2018). (Section 4.1)
  - [Mixture-of-Clustered-Experts: Advancing Expert Specialization and Generalization in Instruction Tuning](https://aclanthology.org/2025.emnlp-main.718.pdf)
- **AgentBench** (measurements) — *measured_by*
  > AGENTBENCH thus systematically evaluate an LLM’s core abilities, including following instructions (Ouyang et al., 2022), coding (Chen et al., 2021), knowledge acquisition (Joshi et al., 2017; Talmor et al., 2019), logical reasoning (Srivastava et al., 2023), and commonsense grounding (Shridhar et al., 2020a).
  - [AgentBench: Evaluating LLMs as Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/e9df36b21ff4ee211a8b71ee8b7e9f57-Paper-Conference.pdf)
- **BIG-bench** (measurements) — *measured_by*
  > "We further evaluate on various reasoning tasks in BIG-Bench (Srivastava et al., 2022; Suzgun et al., 2022): word sorting, logical deduction five objects, temporal sequences, reasoning about colored objects, and formal fallacies."
  - [Large Language Models as Analogical Reasoners](https://proceedings.iclr.cc/paper_files/paper/2024/file/4990dad2c1696224de42573d0222554a-Paper-Conference.pdf)
- **Consistency** (constructs) — *causes*
  > the deductive reasoning process improves consistency by producing consistent solutions using a given strategy (Introduction).
  - [StrategyLLM: Large Language Models as Strategy Generators, Executors, Optimizers, and Evaluators for Problem Solving](https://proceedings.neurips.cc/paper_files/paper/2024/file/af7cc9e2366b8f8837a6ef339810277a-Paper-Conference.pdf)
- **Time-series feature extraction ability** (constructs) — *causes*
  > analyzing the precision and recall of finding relevant features through the usage of world knowledge and logical reasoning (Section 4.5).
  - [A Decision-Language Model (DLM) for Dynamic Restless Multi-Armed Bandit Tasks in Public Health](https://proceedings.neurips.cc/paper_files/paper/2024/file/074f42212be2c8ee651db00f17965ec4-Paper-Conference.pdf)
- **MMBench** (measurements) — *measured_by*
  > LR: Logic Reasoning, AR: Attribute Reasoning, RR: Relation Reasoning, FP-S: Fine-grained Perception (Single-instance), FP-C: Fine-grained Perception (Cross-instance), CP: Coarse Perception. (Table A4)
  - [Accelerating Pre-training of Multimodal LLMs via Chain-of-Sight](https://proceedings.neurips.cc/paper_files/paper/2024/file/8a54a80ffc2834689ffdd0920202018e-Paper-Conference.pdf)
- **LexEval** (measurements) — *measured_by*
  > to systematically organize various evaluation tasks, we propose a Legal Cognitive Ability Taxonomy (LexAbility Taxonomy), which includes six aspects: Memorization, Understanding, Logic Inference, Discrimination, Generation, and Ethic. (Section 3.1)
  - [LexEval: A Comprehensive Chinese Legal Benchmark for Evaluating Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cb40fc022ca7bdc1a9a78b793661284-Paper-Datasets_and_Benchmarks_Track.pdf)
- **CLUTRR** (measurements) — *measured_by*
  > CLUTRR [41] is a deductive reasoning dataset requiring multi-hop reasoning over family relationships. (Section 4).
  - [LoFiT: Localized Fine-tuning on LLM Representations](https://proceedings.neurips.cc/paper_files/paper/2024/file/122ea6470232ee5e79a2649243348005-Paper-Conference.pdf)
- **Action selection** (behaviors tasks) — *causes*
  > The Analytic Process relies on logical reasoning, employing rational thinking to analyze complex situations and make safe driving decisions. (Section 3.3)
  - [Continuously Learning, Adapting, and Improving: A Dual-Process Approach to Autonomous Driving](https://proceedings.neurips.cc/paper_files/paper/2024/file/df04a35d907e894d59d4eab1f92bc87b-Paper-Conference.pdf)
- **StrategyQA** (measurements) — *measured_by*
  > And we use StrategyQA [12] for logical reasoning that requires multiple reasoning steps (Section 5.1.1).
  - [Decompose, Analyze and Rethink: Solving Intricate Problems with Human-like Reasoning Cycle](https://proceedings.neurips.cc/paper_files/paper/2024/file/01025a4e79355bb37a10ba39605944b5-Paper-Conference.pdf)
- **BABILong** (measurements) — *measured_by*
  > BABILong includes a diverse set of 20 reasoning tasks, including fact chaining, simple induction, deduction, counting, and handling lists/sets.
  - [BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MT-Bench** (measurements) — *measured_by*
  > PAT can enhance the logical capabilities of the LLMs. We see the scores increase in related aspects of MT-bench such as coding and reasoning.
  - [Fight Back Against Jailbreaking via Prompt Adversarial Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/759ca99a82e2a9137c6bef4811c8d378-Paper-Conference.pdf)
- **Flexibility** (constructs) — *causes*
  > The grounding knowledge and principled reasoning procedure enable R2-Guard to be effective, robust against jailbreak attacks, and flexible given new safety categories. (Abstract)
  - [$R^2$-Guard: Robust Reasoning Enabled LLM Guardrail via Knowledge-Enhanced Logical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a07e87ecfa8a651d62257571669b0150-Paper-Conference.pdf)
- **ContextHub** (measurements) — *measured_by*
  > We compare the performance of each setting on math (GSM8K) and logical reasoning (ContextHub and FOLIO) datasets. (Section 5.1)
  - [To CoT or not to CoT? Chain-of-thought helps mainly on math and symbolic reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/ead542f13a38179d1b55b88610f959a1-Paper-Conference.pdf)
- **MBPP** (measurements) — *measured_by*
  > Notably, Figure 8 shows significant gains in categories like MBPP (programming) and PIQA (physical commonsense reasoning), reflecting enhanced logical reasoning and problem-solving skills. (Section 4.2)
  - [Magnetic Preference Optimization: Achieving Last-iterate Convergence for Language Model Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/5833b4daf5b076dd1cdb362b163dff0c-Paper-Conference.pdf)
- **PIQA** (measurements) — *measured_by*
  > Notably, Figure 8 shows significant gains in categories like MBPP (programming) and PIQA (physical commonsense reasoning), reflecting enhanced logical reasoning and problem-solving skills. (Section 4.2)
  - [Magnetic Preference Optimization: Achieving Last-iterate Convergence for Language Model Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/5833b4daf5b076dd1cdb362b163dff0c-Paper-Conference.pdf)
- **BIG-Bench Logical Deduction** (measurements) — *measured_by*
  > We evaluate CLOVER on seven logical reasoning tasks: AR-LSAT (Zhong et al., 2022), ZebraLogic (Lin et al., 2025), Logic grid puzzle (Puzzle), Symbol interpretation (Symbol), and Logical deduction (Deduction) from the BigBench collaborative benchmark (Srivastava et al., 2022), FOLIO (Han et al., 2022), and ProofWriter (Tafjord et al., 2021). (Section 4.1)
  - [Divide and Translate: Compositional First-Order Logic Translation and Verification for Complex Logical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/3e592c571de69a43d7a870ea89c7e33a-Paper-Conference.pdf)
- **e-SNLI** (measurements) — *measured_by*
  > e-SNLI (Camburu et al., 2018) for logical reasoning ability (Section 3.1)
  - [Weak to Strong Generalization for Large Language Models with Multi-capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/1ebcb8f051d0c178474619bbfb32b340-Paper-Conference.pdf)
- **MuSR** (measurements) — *measured_by*
  > “On datasets that require math (MATH, GSM8K) or formal logic (ContextHub, MuSR to a lesser degree)”
  - [To CoT or not to CoT? Chain-of-thought helps mainly on math and symbolic reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/ead542f13a38179d1b55b88610f959a1-Paper-Conference.pdf)
- **Relation extraction** (behaviors tasks) — *causes*
  > We use these logical rules to elicit the deductive reasoning ability of the LLM, enabling more precise relation prediction. (Section 1)
  - [Improving Data Annotation for Low-Resource Relation Extraction with Logical Rule-Augmented Collaborative Language Models](https://aclanthology.org/2025.naacl-long.70.pdf)
- **Argument generation** (behaviors tasks) — *causes*
  > generating logically coherent arguments is a challenging task and requires an appropriate combination of reliable evidence and effective logical reasoning (Section 1)
  - [A Logical Fallacy-Informed Framework for Argument Generation](https://aclanthology.org/2025.naacl-long.374.pdf)
- **Date Understanding** (measurements) — *measured_by*
  > Logical Reasoning: Date Understanding (bench authors, 2023). (Section 4)
  - [Reverse Thinking Makes LLMs Stronger Reasoners](https://aclanthology.org/2025.naacl-long.434.pdf)
- **Game of 24** (measurements) — *measured_by*
  > the performance comparison on the Game of 24 validates the effectiveness of the FoT in the mathematical and logical reasoning task. (Section 4.6)
  - [Forest-of-Thought: Scaling Test-Time Compute for Enhancing LLM Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bi25a/bi25a.pdf)
- **Safety alignment** (constructs) — *causes*
  > To tackle these challenges, we propose SHIELDAGENT, the first guardrail agent designed to enforce explicit safety policy compliance for the action trajectory of other protected agents through logical reasoning. (Section 1)
  - [ShieldAgent: Shielding Agents via Verifiable Safety Policy Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25ae/chen25ae.pdf)
- **GPQA** (measurements) — *measured_by*
  > For logical reasoning, we evaluate the PrOntoQA (Saparov & He, 2022) dataset for logical deduction in a 5-shot setting and the GPQA (Rein et al., 2023) dataset for graduate-level multiple-choice questions in a 0-shot setting (Section 4).
  - [Policy Guided Tree Search for Enhanced LLM Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25bv/li25bv.pdf)
- **TTT-Bench** (measurements) — *measured_by*
  > In this work, we introduce TTT-Bench, a new benchmark that is designed to evaluate basic strategic, spatial, and logical reasoning abilities in LRMs through a suite of four two-player Tic-Tac-Toe-style games that humans can effortlessly solve from a young age. (Abstract)
  - [TTT-Bench: A Benchmark for Evaluating Reasoning Ability with Simple and Novel Tic-Tac-Toe-style Games](https://aclanthology.org/2025.emnlp-main.140.pdf)
- **MLogiQA** (measurements) — *measured_by*
  > MLOGIQA (logical reasoning) is almost always at the lowest performance level across all models and sizes, indicating that this type of logical reasoning capability is the most challenging for cross-lingual transfer. (Section 5.2)
  - [P-MMEval: A Parallel Multilingual Multitask Benchmark for Consistent Evaluation of LLMs](https://aclanthology.org/2025.emnlp-main.242.pdf)
- **SATBench** (measurements) — *measured_by*
  > We introduce SATBench, a benchmark for evaluating the logical reasoning capabilities of large language models (LLMs) through logical puzzles derived from Boolean satisfiability (SAT) problems.
  - [SATBench: Benchmarking LLMs' Logical Reasoning via Automated Puzzle Generation from SAT Formulas](https://aclanthology.org/2025.emnlp-main.1716.pdf)
- **FLASK** (measurements) — *measured_by*
  > Specifically, we focus on the ‘logical thinking’ category in FLASK, which encompasses three aspects: logical correctness, logical robustness, and logical efficiency. (Section 5.4)
  - [Self-Training Meets Consistency: Improving LLMs' Reasoning with Consistency-Driven Rationale Evaluation](https://aclanthology.org/2025.naacl-long.528.pdf)
- **Jailbreak resistance** (behaviors tasks) — *causes*
  > The grounding knowledge and principled reasoning procedure enable R2-Guard to be effective, robust against jailbreak attacks, and flexible given new safety categories. (Abstract)
  - [$R^2$-Guard: Robust Reasoning Enabled LLM Guardrail via Knowledge-Enhanced Logical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a07e87ecfa8a651d62257571669b0150-Paper-Conference.pdf)

### → Logical reasoning
- **In-context learning** (constructs) — *causes*
  > It has been shown that including task demonstrations in the prompt can enhance the capability of language models to apply common sense and logical reasoning [65, 72] and learn patterns from the supplied demonstrations [14], significantly enhancing the flexibility and generality of language models. (Introduction)
  - [DETAIL: Task DEmonsTration Attribution for Interpretable In-context Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/2ceda49041816da6d5a34eb3b612607f-Paper-Conference.pdf)
- **Chain of thought** (behaviors tasks) — *causes*
  > Finding 1: CoT only helps substantially on problems requiring mathematical, logical, or algorithmic reasoning. (Section 1)
  - [To CoT or not to CoT? Chain-of-thought helps mainly on math and symbolic reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/ead542f13a38179d1b55b88610f959a1-Paper-Conference.pdf)
- **Code generation** (behaviors tasks) — *causes*
  > In logical reasoning tasks like Date Understanding, LLM’s reasoning ability is degraded when using code, as shown in Appendix Section G. (Section 3.3)
  - [Steering Large Language Models between Code Execution and Textual Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/f763f7c9a6599e14b07add5937d8189c-Paper-Conference.pdf)
- **Fine-grained perception** (constructs) — *causes*
  > This suggests that fusing raw image and text embeddings in a single transformer is beneficial for fine-grained perception and subsequently enhances image-based logical reasoning. (Section 4.3)
  - [HaploVL: A Single-Transformer Baseline for Multi-Modal Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25ab/yang25ab.pdf)

### Associated with
- **Inductive reasoning** (constructs)
  > In this paper, we focus on four logical reasoning types: deductive, inductive, abductive, and analogical reasoning defined in (Nunes, 2012). (Section 3)
  - [TypedThinker: Diversify Large Language Model Reasoning with Typed Thinking](https://proceedings.iclr.cc/paper_files/paper/2025/file/494ad6d9b36d9a1528dbf3baeb4e8a72-Paper-Conference.pdf)
- **Abductive reasoning** (constructs)
  > In this paper, we focus on four logical reasoning types: deductive, inductive, abductive, and analogical reasoning defined in (Nunes, 2012). (Section 3)
  - [TypedThinker: Diversify Large Language Model Reasoning with Typed Thinking](https://proceedings.iclr.cc/paper_files/paper/2025/file/494ad6d9b36d9a1528dbf3baeb4e8a72-Paper-Conference.pdf)
- **Logical consistency** (constructs)
  > We define 4 primary abilities which are divided into 12 fine-grained skills for comprehensive language model evaluation: Logical Thinking (Logical Correctness, Logical Robustness, Logical Efficiency)... (Section 1)
  - [FLASK: Fine-grained Language Model Evaluation based on Alignment Skill Sets](https://proceedings.iclr.cc/paper_files/paper/2024/file/f41b4a6b202adcd8e150a9d4f124d8f6-Paper-Conference.pdf)
- **Reasoning** (constructs)
  > they discuss reasoning tasks including commonsense reasoning, mathematical reasoning, logical reasoning, and causal reasoning. (Section 2.1)
  - [Unveiling Causal Reasoning in Large Language Models: Reality or Mirage?](https://proceedings.neurips.cc/paper_files/paper/2024/file/af2bb2b2280d36f8842e440b4e275152-Paper-Conference.pdf)
- **Legal reasoning** (constructs)
  > We also rewrite samples to align with the syllogistic reasoning framework common in legal analysis. (Section 3.2)
  - [Unilaw-R1: A Large Language Model for Legal Reasoning with Reinforcement Learning and Iterative Inference](https://aclanthology.org/2025.emnlp-main.915.pdf)
- **Logical soundness** (constructs)
  > We define 4 primary abilities which are divided into 12 fine-grained skills for comprehensive language model evaluation: Logical Thinking (Logical Correctness, Logical Robustness, Logical Efficiency)... (Section 1)
  - [FLASK: Fine-grained Language Model Evaluation based on Alignment Skill Sets](https://proceedings.iclr.cc/paper_files/paper/2024/file/f41b4a6b202adcd8e150a9d4f124d8f6-Paper-Conference.pdf)
- **Constrained text generation** (behaviors tasks)
  > We posit that one direction is incorporating logical and compositional challenges via constrained text generation.
  - [COLLIE: Systematic Construction of Constrained Text Generation Tasks](https://proceedings.iclr.cc/paper_files/paper/2024/file/a77eadda332b6d4a9ae1e0e4024555f2-Paper-Conference.pdf)
- **Data analysis** (behaviors tasks)
  > the need for data analysis typically arises from specific application scenarios, and requires diverse reasoning skills including mathematical reasoning, logical reasoning, and strategic reasoning. (Abstract)
  - [DACO: Towards Application-Driven and Comprehensive Data Analysis via Code Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/a4cb1444fb05839d0113d2773da88a49-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Text generation** (behaviors tasks)
  > When evaluating the Writing Legal Document scenario, logic is identified as the most critical dimension, followed by considerations of harmlessness and clarity, reflecting the distinct requirements of legal writing.
  - [SaMer: A Scenario-aware Multi-dimensional Evaluator for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/646ca7b994bc46afe33d680dbe7ed67a-Paper-Conference.pdf)
- **Pattern matching** (constructs)
  > ...distinguish genuine reasoning from mere memorization of solutions or responses, or mimicking the logical steps previously encountered (Gignac & Szodorai, 2024). This distinction aligns with ideas akin to the Chinese Room Argument (Cole, 2024), underscoring the difference between true comprehension and pattern-matching. (Section 2)
  - [GSM-Symbolic: Understanding the Limitations of Mathematical Reasoning in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ec2e7a896f8250986b3907f57621ce94-Paper-Conference.pdf)
- **Knowledge manipulation** (constructs)
  > Knowledge manipulation is arguably a simplest form of logical reasoning. (Section 1)
  - [Physics of Language Models: Part 3.2, Knowledge Manipulation](https://proceedings.iclr.cc/paper_files/paper/2025/file/d5494c8747276d3cdb2598e5617de89d-Paper-Conference.pdf)
- **Analogical reasoning** (constructs)
  > In this paper, we focus on four logical reasoning types: deductive, inductive, abductive, and analogical reasoning defined in (Nunes, 2012). (Section 3)
  - [TypedThinker: Diversify Large Language Model Reasoning with Typed Thinking](https://proceedings.iclr.cc/paper_files/paper/2025/file/494ad6d9b36d9a1528dbf3baeb4e8a72-Paper-Conference.pdf)
- **Code reasoning** (constructs)
  > “Code reasoning is a category of tasks that incorporates logical reasoning into code”
  - [Unveiling the Magic of Code Reasoning through Hypothesis Decomposition and Amendment](https://proceedings.iclr.cc/paper_files/paper/2025/file/eeffa70bcbbd43f6bd067edebc6595e8-Paper-Conference.pdf)
- **Table reasoning** (constructs)
  > Tabular reasoning presents an inherently challenging problem, requiring logical, mathematical, and textual reasoning over unstructured queries and structured tables
  - [H-STAR: LLM-driven Hybrid SQL-Text Adaptive Reasoning on Tables](https://aclanthology.org/2025.naacl-long.445.pdf)
- **Mathematical problem solving** (behaviors tasks)
  > math tasks challenge logical reasoning;
  - [GuideBench: Benchmarking Domain-Oriented Guideline Following for LLM Agents](https://aclanthology.org/2025.acl-long.557.pdf)
- **Pragmatic understanding** (constructs)
  > it thus appears that QwQ32b’s high performance in logical reasoning is achieved at some cost to its capability of pragmatic inference. (Section 4.1)
  - [Pragmatic Inference Chain (PIC) Improving LLMs' Reasoning of Authentic Implicit Toxic Language](https://aclanthology.org/2025.emnlp-main.296.pdf)
- **Multi-agent debate** (behaviors tasks)
  > Inspired by Du et al., we build multi-agent debate tasks on several mathematical or logical reasoning datasets. (Section 4.2.1)
  - [Augmenting Multi-Agent Communication with State Delta Trajectory](https://aclanthology.org/2025.emnlp-main.518.pdf)
- **Reasoning rigor** (constructs)
  > Current LLM-based methods for logical reasoning still struggle to perform structured exploration while ensuring logical coherence and rigor in complex, multi-step reasoning tasks (Section 2.2).
  - [LogicTree: Structured Proof Exploration for Coherent and Rigorous Logical Reasoning with Large Language Models](https://aclanthology.org/2025.emnlp-main.1054.pdf)
- **Reversal curse** (constructs)
  > One perspective is that it demonstrates a basic failure of logical deduction in the LLM’s training process.
  - [The Reversal Curse: LLMs trained on “A is B” fail to learn “B is A”](https://proceedings.iclr.cc/paper_files/paper/2024/file/5178b2f2d7c44aa390c0777dc77b3f0c-Paper-Conference.pdf)
- **Natural language inference** (behaviors tasks)
  > NLI is similar to deductive reasoning in assessing whether a premise supports or contradicts a hypothesis. (Section 6.3)
  - [Enhancing Reasoning Capabilities of LLMs via Principled Synthetic Logic Corpus](https://proceedings.neurips.cc/paper_files/paper/2024/file/8678da90126aa58326b2fc0254b33a8c-Paper-Conference.pdf)
- **Word unscrambling** (behaviors tasks)
  > Logical reasoning tasks include Word Unscrambling (bench authors, 2023), which requires unscrambling given letters to form an English word for implicit reasoning, and the binary Analytic Entailment task (bench authors, 2023) for linguistic entailment. (Section 4.1)
  - [Beyond Surface Structure: A Causal Assessment of LLMs' Comprehension ability](https://proceedings.iclr.cc/paper_files/paper/2025/file/88139fdcc82fc597090620d77b023282-Paper-Conference.pdf)
- **Mathematical reasoning** (constructs)
  > Mathematical reasoning tasks pose significant challenges for large language models (LLMs) because they require precise logical deduction and sequence analysis. (Abstract)
  - [Critical Tokens Matter: Token-Level Contrastive Estimation Enhances LLM’s Reasoning Capability](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lin25j/lin25j.pdf)
