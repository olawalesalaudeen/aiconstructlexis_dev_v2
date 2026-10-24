# Accuracy
**Type:** Construct  
**Referenced in:** 40 papers  
**Also known as:** Correctness, Task correctness, Prediction correctness, Proof correctness, Response correctness, Formal correctness, Formulation correctness, Response accuracy, Code correctness, Chart correctness, Proof accuracy, Truth alignment, Code reliability  

## State of the Field

**Definition agreement:** Consensus. Most papers define accuracy as the correctness of a model output or generated artifact relative to a target such as factual truth, logical validity, ground truth, reference answers, or task requirements, with domain-specific instances like code passing tests, valid proofs, or charts matching data. A few papers add latent ability, reasoning quality, or syntax and format constraints, but these are minor extensions of the same core idea rather than a different phenomenon.

**Space of definitions.** Across papers, the prevailing usage treats accuracy, often under the name correctness, as whether a model output matches the right answer, ground truth, or task requirements, usually in factual or logical terms. Most definitions stay at this response- or output-level notion, while a smaller line of work narrows it to functional success under explicit validators, such as code that produces expected outputs on test cases, proofs accepted by a proof assistant, plans satisfying formal preconditions and postconditions, or formulations that faithfully reflect problem requirements. Some authors describe it as a latent ability or property of the model or its responses rather than only an observed outcome, and a few extend it from final answers to rationales or proof steps.

**Space of facets.** Papers break the construct into task-specific variants, including task correctness, prediction correctness, response correctness, proof correctness or proof accuracy, code correctness or code reliability, formulation correctness, formal correctness, chart correctness, and truth alignment. Accuracy and correctness are used largely interchangeably across these variants, while truth alignment is a nearby label for generating the correct result in the desired format. A few variants add adjacent conditions, such as executability, syntactic correctness, formatting constraints, or relevance of each proof step.

**Space of measurement.** Operationalization is varied: papers link accuracy to 7 measurement instruments and 2 behavioral indicators. The most common linked instrument is LLM-as-a-judge, where GPT-4 rates responses for accuracy on 1 to 10 scales alongside criteria such as relevance, helpfulness, or insightfulness; other linked instruments include ComplexOR, Expert evaluation, GEMBA-MQM, and Human evaluation, plus 2 other instruments. Beyond these links, papers also check accuracy with private or unit test cases for code, proof assistant acceptance, exact or direct comparison with ground truth, claim-level truth values averaged across an insight, and one study defines an accuracy score as average ROUGE-F1, so most operationalizations directly test task-specific correctness even though some adopt narrower scoring rules.

**Links.** Outside measurement, papers relate accuracy to nearby evaluation properties rather than reporting causal or correlational claims. One paper treats helpfulness and accuracy as user-preferred properties, another relates it to instruction following through truth alignment, defined as generating the correct result in the desired format, and another relates it to hallucination by judging whether responses contain hallucinations and present correct attributes. The papers do not report a causal relationship or correlation involving accuracy.

## Sources

**[CRITIC: Large Language Models Can Self-Correct with Tool-Interactive Critiquing](https://proceedings.iclr.cc/paper_files/paper/2024/file/fef126561bbf9d4467dbb8d27334b8fe-Paper-Conference.pdf) (as "Correctness")**
> The degree to which a generated program is functionally accurate, meaning it produces the expected output for all given inputs as defined by a set of test cases.

**[AlpaGasus: Training a Better Alpaca with Fewer Data](https://proceedings.iclr.cc/paper_files/paper/2024/file/9543942c237ded1b39b1fd37259ff88e-Paper-Conference.pdf)**
> The degree to which a model's response correctly aligns with factual or logically valid outcomes for a given instruction and input.

**[Tailoring Self-Rationalizers with Multi-Reward Distillation](https://proceedings.iclr.cc/paper_files/paper/2024/file/b5e5753b0a0e440a6d8dc7e143617cec-Paper-Conference.pdf) (as "Task correctness")**
> The extent to which the model's predicted answer is right for the question after generating a rationale.

**[Beyond Accuracy: Ensuring Correct Predictions With Correct Rationales](https://proceedings.neurips.cc/paper_files/paper/2024/file/4bbeef01d9753fd5a29e9fd02d275698-Paper-Conference.pdf) (as "Prediction correctness")**
> The latent ability of a model to produce accurate predictions, typically measured by task-specific accuracy metrics.

**[ImProver: Agent-Based Automated Proof Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/4864005cfdea7ebd07086ed1b9846825-Paper-Conference.pdf) (as "Proof correctness")**
> The property that a generated proof is valid and accepted by the proof assistant as establishing the theorem statement.

**[Latent Space Chain-of-Embedding Enables Output-free LLM Self-Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b0b1cfc8ede53f452cabf8b9cf4eef76-Paper-Conference.pdf) (as "Response correctness")**
> The latent property of a model's generated response being factually or logically correct for a given input, which can be inferred from internal model states.

**[Autoformulation of Mathematical Optimization Models Using LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/astorga25a/astorga25a.pdf) (as "Formulation correctness")**
> The degree to which a generated mathematical optimization model accurately and faithfully represents the requirements and constraints of a real-world problem described in natural language.

**[Hierarchical Planning for Complex Tasks with Knowledge Graph-RAG and Symbolic Verification](https://raw.githubusercontent.com/mlresearch/v267/main/assets/petruzzellis25a/petruzzellis25a.pdf) (as "Formal correctness")**
> The extent to which a generated plan satisfies the formal preconditions and postconditions required for execution.

**[Video2Roleplay: A Multimodal Dataset and Framework for Video-Guided Role-playing Agents](https://aclanthology.org/2025.emnlp-main.1209.pdf) (as "Response accuracy")**
> The ability of the model to correctly understand and address user questions or conversational prompts based on the provided context.

**[UnitCoder: Scalable Code Synthesis from Pre-training Corpora](https://aclanthology.org/2025.emnlp-main.286.pdf) (as "Code correctness")**
> The latent property of a model to generate functionally accurate code that passes defined test cases without logical or syntactic errors.

**[Text2Vis: A Challenging and Diverse Benchmark for Generating Multimodal Visualizations from Text](https://aclanthology.org/2025.emnlp-main.1622.pdf) (as "Chart correctness")**
> The extent to which a generated chart accurately reflects the query intent and the underlying data.

**[SymBa: Symbolic Backward Chaining for Structured Natural Language Reasoning](https://aclanthology.org/2025.naacl-long.124.pdf) (as "Proof accuracy")**
> The degree to which a model's generated reasoning steps are both logically correct and relevant to the final conclusion, reflecting faithful internal reasoning.

**[CoIN: A Benchmark of Continual Instruction Tuning for Multimodel Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/6a45500d9eda640deed90d8a62742be5-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Truth alignment")**
> The extent to which a model's outputs match the ground truth in the required answer form for a task.

**[Reliable and Cost-Effective Exploratory Data Analysis via Graph-Guided RAG](https://aclanthology.org/2025.emnlp-main.836.pdf) (as "Code reliability")**
> The latent property of a model to consistently generate code that is syntactically correct and executable without errors.

## Relationships

### Accuracy →
- **LLM-as-a-judge** (measurements) — *measured_by*
  > We prompt GPT-4 to rate responses from various decoding strategies on relevance, accuracy, and insightfulness, scoring them from 1 to 10. (Table 2)
  - [Transfer Q-star : Principled Decoding for LLM Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/b8700a8a005032fe869c741b0a75274b-Paper-Conference.pdf)
- **GEMBA-MQM** (measurements) — *measured_by*
  > our analysis reveals that GEMBA-MQM’s performance is primarily driven by Accuracy aspects, with less reliability in evaluating Fluency, Style, and Terminology (Section 5).
  - [How Good Are LLMs for Literary Translation, Really? Literary Translation Evaluation with Humans and LLMs](https://aclanthology.org/2025.naacl-long.548.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > Human evaluation focuses on three aspects: 1) Accuracy: the aspect evaluates whether the generated answers are correct and free from factual errors.
  - [Elevating Legal LLM Responses: Harnessing Trainable Logical Structures and Semantic Knowledge with Legal Reasoning](https://aclanthology.org/2025.naacl-long.290.pdf)
- **Expert evaluation** (measurements) — *measured_by*
  > An optimization expert manually reviewed each model and assessed the correctness of four key components: decision variables, objective function, equality constraints, and inequality constraints.
  - [Autoformulation of Mathematical Optimization Models Using LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/astorga25a/astorga25a.pdf)

### Associated with
- **Instruction following** (behaviors tasks)
  > “Truth Alignment = Reasoning Capability + Instruction Following”
  - [CoIN: A Benchmark of Continual Instruction Tuning for Multimodel Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/6a45500d9eda640deed90d8a62742be5-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Hallucination** (behaviors tasks)
  > accuracy: whether the responses contains any hallucination, and present correct attributes; (Section 4)
  - [MR. Judge: Multimodal Reasoner as a Judge](https://aclanthology.org/2025.emnlp-main.1021.pdf)
