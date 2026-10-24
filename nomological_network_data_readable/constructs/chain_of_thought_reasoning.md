# Chain-of-thought reasoning
**Type:** Construct  
**Referenced in:** 257 papers  
**Also known as:** Chain-of-Thought reasoning, Chain-of-reasoning, Thought chain reasoning, Chain-of-Thought ability, Chain-of-thought capability, Internal chain-of-thought, Multistep reasoning, Step-by-step thinking, Procedural reasoning, Thinking, Multi-turn reasoning, Multi-step reasoning, Subtask execution, Sequential inference, Step-wise reasoning  

## State of the Field

**Definition agreement:** Complementary. Most papers define chain-of-thought reasoning as multi-step problem solving that decomposes a problem into intermediate inferential steps leading to a final answer, but many differ on whether those steps must be explicitly generated in the output, are a latent internal capability, or occur in interactive or evidence-accumulation settings. These differences mostly describe different aspects or scopes of the same sequential reasoning phenomenon rather than substantially different constructs.

**Space of definitions.** Across the surveyed work, the dominant framing treats chain-of-thought reasoning as a model capability or process for solving complex problems through sequential intermediate steps before a final answer. Most definitions differ mainly on whether those steps are framed as observable text, such as step-numbered traces or intermediate reasoning before the answer, or as a latent ability that can be elicited by prompting. Smaller lines of work broaden it to procedural or question-decomposition styles of stepwise problem solving, recast it as multi-turn reasoning across interaction turns, or define an internal version in which models decompose composite tasks and process them sequentially across network layers even when no steps are verbalized. A further minority frames it as the ability to benefit from CoT prompting rather than the reasoning process itself, and one paper reports no evidence that explicit CoT prompts improve time series analysis.

**Space of facets.** Papers use a broad cluster of near-synonyms for the same family of phenomena, including multistep reasoning, multi-step reasoning, chain-of-reasoning, step-by-step thinking, sequential inference, procedural reasoning, and step-wise reasoning. The same family of labels is used both for latent abilities and for observable behaviors, from subtask execution and explicit reasoning traces to broader thinking or planning in natural language. The clearest subtype distinction is between explicit chain generation in token space and internal chain-of-thought, which is presented as task-level decomposition executed layer by layer rather than overt text. Multi-turn formulations add another distinction by treating the construct as sequential decision making over several turns with an external environment.

**Space of measurement.** Operationalization is dominated by benchmark datasets: papers link the construct to 20 measurement instruments, with GSM8K, 2WikiMultiHopQA, BIG-Bench Hard, and AQuA-RAT among the most frequently linked. These linked instruments are benchmark-style measures rather than human evaluation, LLM-as-a-judge, or probe measures, and many are described as requiring multi-step, multi-hop, or connected reasoning. Papers also link the construct to 13 behavioral indicators, most often chain of thought and several application-oriented behaviors. This benchmark-centered operationalization aligns more directly with the common step-by-step framing than with definitions centered on internal layer-wise or multi-turn reasoning.

**Links.** Several papers claim causal relationships involving chain of thought and reasoning: papers claim a causal relationship from chain of thought to this construct, from this construct to reasoning, and from planning, reasoning, and visual grounding to this construct. Other papers claim causal relationships from this construct to application behaviors in dialogue, verification, navigation, refinement, and mathematical settings. No correlational links are reported. Related links connect it to chain of thought and hallucination, alongside a broader cluster of decomposition-oriented and domain-specific behaviors.

## Sources

**[Iteration Head: A Mechanistic Study of Chain-of-Thought](https://proceedings.neurips.cc/paper_files/paper/2024/file/c50f8180ef34060ec59b75d6e1220f7a-Paper-Conference.pdf) (as "Chain-of-Thought reasoning")**
> The ability of a language model to solve complex problems by generating a sequence of intermediate, logical steps before providing a final answer.

**[Paralinguistics-Aware Speech-Empowered Large Language Models for Natural Conversation](https://proceedings.neurips.cc/paper_files/paper/2024/file/ecfa5340fd896e5314bc5e132b5dd5ca-Paper-Conference.pdf) (as "Chain-of-reasoning")**
> The model's ability to break down a problem into intermediate, sequential steps to arrive at a final solution, often by generating explicit intermediate text.

**[Large Language Models Meet Symbolic Provers for Logical Reasoning Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/862819c227b16f9af64dd6ad6cfdf275-Paper-Conference.pdf) (as "Chain-of-thought capability")**
> The model's ability to benefit from or perform step-by-step reasoning when prompted to explain intermediate inference steps.

**[Training Nonlinear Transformers for Chain-of-Thought Inference:  A Theoretical Generalization Analysis](https://proceedings.iclr.cc/paper_files/paper/2025/file/b295b3a940706f431076c86b78907757-Paper-Conference.pdf) (as "Chain-of-Thought ability")**
> The latent capability of a model to perform multi-step reasoning by generating intermediate steps when prompted with examples.

**[ThinkBot: Embodied Instruction Following with Thought Chain Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/ffa8551239448e07ced48311bf88f6f3-Paper-Conference.pdf) (as "Thought chain reasoning")**
> The latent ability of a model to infer and articulate a series of intermediate, unstated steps that connect an initial problem to a final solution, particularly for recovering missing actions from sparse instructions.

**[Internal Chain-of-Thought: Empirical Evidence for Layer-wise Subtask Scheduling in LLMs](https://aclanthology.org/2025.emnlp-main.1147.pdf) (as "Internal chain-of-thought")**
> The latent capacity of LLMs to internally decompose composite tasks into subtasks and process them sequentially across network layers, even when intermediate steps are not expressed in output.

**[Iteration Head: A Mechanistic Study of Chain-of-Thought](https://proceedings.neurips.cc/paper_files/paper/2024/file/c50f8180ef34060ec59b75d6e1220f7a-Paper-Conference.pdf) (as "Multistep reasoning")**
> A general cognitive capability to solve problems by breaking them down into a sequence of intermediate steps or operations.

**[SELF-DISCOVER: Large Language Models Self-Compose Reasoning Structures](https://proceedings.neurips.cc/paper_files/paper/2024/file/e41efb03e20ca3c231940a3c6917ef6f-Paper-Conference.pdf) (as "Step-by-step thinking")**
> The ability to break down a problem into a sequence of smaller, manageable steps and solve them sequentially.

**[RAG+: Enhancing Retrieval-Augmented Generation with Application-Aware Reasoning](https://aclanthology.org/2025.emnlp-main.1630.pdf) (as "Procedural reasoning")**
> The capacity to carry out step-by-step problem solving using methods, inference rules, or solution procedures rather than only retrieving facts.

**[Thinking LLMs: General Instruction Following with Thought Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25o/wu25o.pdf) (as "Thinking")**
> The latent ability of an LLM to generate internal reasoning or planning processes in natural language before producing a final response, enabling improved performance on complex tasks through implicit computation and self-reflection.

**[Building Math Agents with Multi-Turn Iterative Preference Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/40eff1670d6b08bb1bda48b0c5f30110-Paper-Conference.pdf) (as "Multi-turn reasoning")**
> The capacity to maintain context and make a sequence of coherent decisions or inferences over multiple interaction turns with an external environment.

**[TPO: Aligning Large Language Models with Multi-branch & Multi-step Preference Trees](https://proceedings.iclr.cc/paper_files/paper/2025/file/42ac0f53b7ffede90aea8275b11b3bb8-Paper-Conference.pdf) (as "Multi-step reasoning")**
> The process of generating a sequence of intermediate reasoning steps to reach a final answer.

**[seqBench: A Tunable Benchmark to Quantify Sequential Reasoning Limits of LLMs](https://aclanthology.org/2025.emnlp-main.1714.pdf) (as "Sequential inference")**
> The observable process of generating a sequence of conclusions or actions based on a set of facts to solve a problem.

**[Digest the Knowledge: Large Language Models empowered Message Passing for Knowledge Graph Question Answering](https://aclanthology.org/2025.acl-long.750.pdf) (as "Step-wise reasoning")**
> The capacity to decompose complex questions into a sequence of sub-questions or inference steps, solving them progressively from shallow to deep levels of knowledge.

## Relationships

### Chain-of-thought reasoning →
- **GSM8K** (measurements) — *measured_by*
  > Two mathematical datasets are considered: (4) GSM8k (Cobbe et al., 2021) and (5) AQuA (Ling et al., 2017), since they require comprehensive understanding of complex problems and powerful abilities like bottom-up composition and multi-step reasoning. (Section 4.1)
  - [Forest for the Trees: Overarching Prompting Evokes High-Level Reasoning in Large Language Models](https://aclanthology.org/2025.naacl-long.66.pdf)
- **BIG-Bench Hard** (measurements) — *measured_by*
  > To validate our methods on diverse tasks, we apply BBH (Suzgun et al., 2022) including a suite of 23 challenging BIG-Bench tasks requiring multi-step reasoning. (Section 4.4)
  - [Connecting Large Language Models with Evolutionary Algorithms Yields Powerful Prompt Optimizers](https://proceedings.iclr.cc/paper_files/paper/2024/file/9156b0f6dfa9bbd18c79cc459ef5d61c-Paper-Conference.pdf)
- **Reasoning** (constructs) — *causes*
  > Chain-of-Thought (CoT) is an efficient prompting method that enables the reasoning ability of large language models by augmenting the query using multiple examples with multiple intermediate steps. (Abstract)
  - [Training Nonlinear Transformers for Chain-of-Thought Inference:  A Theoretical Generalization Analysis](https://proceedings.iclr.cc/paper_files/paper/2025/file/b295b3a940706f431076c86b78907757-Paper-Conference.pdf)
- **GPQA** (measurements) — *measured_by*
  > For instance, models frequently demonstrate high performance on standardized test-style questions yet struggle when faced with complex planning or multi-step reasoning challenges, a limitation highlighted by specialized benchmarks like PlanBench (Valmeekam et al., 2022), GPQA (Rein et al., 2023), and HLE (Phan et al., 2025). (Section 2.4)
  - [In Benchmarks We Trust ... Or Not?](https://aclanthology.org/2025.emnlp-main.1208.pdf)
- **2WikiMultiHopQA** (measurements) — *measured_by*
  > To assess OmniKV’s performance in multi-step reasoning, we utilized 2WikiMQA (Ho et al., 2020) and HotpotQA (Yang et al., 2018) from LongBench. (Section 5)
  - [OmniKV: Dynamic Context Selection for Efficient Long-Context LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/da1131a86ac3c70e0b7cae89c3d4df22-Paper-Conference.pdf)
- **Spoken dialogue generation** (behaviors tasks) — *causes*
  > "the insertion of the text-related tasks between speech inputs and outputs allows the model to benefit from the pretraining LLM and chained reasoning over the intermediary modality"
  - [Paralinguistics-Aware Speech-Empowered Large Language Models for Natural Conversation](https://proceedings.neurips.cc/paper_files/paper/2024/file/ecfa5340fd896e5314bc5e132b5dd5ca-Paper-Conference.pdf)
- **HotpotQA** (measurements) — *measured_by*
  > To assess OmniKV’s performance in multi-step reasoning, we utilized 2WikiMQA (Ho et al., 2020) and HotpotQA (Yang et al., 2018) from LongBench. (Section 5)
  - [OmniKV: Dynamic Context Selection for Efficient Long-Context LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/da1131a86ac3c70e0b7cae89c3d4df22-Paper-Conference.pdf)
- **OpenBookQA** (measurements) — *measured_by*
  > OBQA (Mihaylov et al., 2018) (multi-step reasoning). (Section 5.1)
  - [HiRA: Parameter-Efficient Hadamard High-Rank Adaptation for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/48c368f105e8145b945227b73255635a-Paper-Conference.pdf)
- **Chain-of-thought prompting** (measurements) — *measured_by*
  > “CoT prompting employs 2-shot examples to instruct the model to solve questions step by step.”
  - [Large Language Models Meet Symbolic Provers for Logical Reasoning Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/862819c227b16f9af64dd6ad6cfdf275-Paper-Conference.pdf)
- **AQuA-RAT** (measurements) — *measured_by*
  > Two mathematical datasets are considered: (4) GSM8k (Cobbe et al., 2021) and (5) AQuA (Ling et al., 2017), since they require comprehensive understanding of complex problems and powerful abilities like bottom-up composition and multi-step reasoning. (Section 4.1)
  - [Forest for the Trees: Overarching Prompting Evokes High-Level Reasoning in Large Language Models](https://aclanthology.org/2025.naacl-long.66.pdf)
- **Fact checking** (behaviors tasks) — *causes*
  > we extend this by incorporating agent-based LLM, enabling iterative interactions with the knowledge base to resolve ambiguous entities and execute multi-step reasoning for more robust and in-depth claim verification. (Section 2)
  - [Verify-in-the-Graph: Entity Disambiguation Enhancement for Complex Claim Verification with Interactive Graph Representation](https://aclanthology.org/2025.naacl-long.268.pdf)
- **Mathematical reasoning** (constructs) — *causes*
  > Chain of Thought (CoT) of multi-step benefits from the logical structure of the reasoning steps and task-specific actions, significantly enhancing the mathematical reasoning capabilities of large language models.
  - [Markov Chain of Thought for Efficient Mathematical Reasoning](https://aclanthology.org/2025.naacl-long.365.pdf)
- **Reasoning efficiency** (constructs) — *causes*
  > "Furthermore, multi-step reasoning involving processing long CoT demands greater computational resources, which renders the inference process practically inefficient."
  - [Markov Chain of Thought for Efficient Mathematical Reasoning](https://aclanthology.org/2025.naacl-long.365.pdf)
- **StrategyQA** (measurements) — *measured_by*
  > These datasets test a range of commonsense reasoning skills, with StrategyQA requiring more multi-step reasoning.
  - [RARE: Retrieval-Augmented Reasoning Enhancement for Large Language Models](https://aclanthology.org/2025.acl-long.896.pdf)
- **Code navigation** (behaviors tasks) — *causes*
  > we equip the localization agent with programming tools based on Abstract Syntax Tree (AST) and Language Server Protocol (LSP) that enable compact code navigation by taking advantage of multi-step reasoning. (Section 1)
  - [Nemotron-CORTEXA: Enhancing LLM Agents for Software Engineering Tasks via Improved Localization and Solution Diversity](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sohrabizadeh25a/sohrabizadeh25a.pdf)
- **Iterative refinement** (behaviors tasks) — *causes*
  > the Actor refines suboptimal actions via multi-step reasoning and environment validation (Abstract).
  - [Think Twice, Act Once: A Co-Evolution Framework of LLM and RL for Large-Scale Decision Making](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wan25g/wan25g.pdf)
- **FOLIO** (measurements) — *measured_by*
  > We evaluate our framework on four multi-step reasoning datasets: FOLIO (Han et al., 2022), ProofWriter (Tafjord et al., 2020), MMLU-Pro (Wang et al., 2024c) and GPQA (Rein et al., 2023) (Section 4.1).
  - [Stepwise Informativeness Search for Improving LLM Reasoning](https://aclanthology.org/2025.emnlp-main.1285.pdf)
- **ProofWriter** (measurements) — *measured_by*
  > We evaluate our framework on four multi-step reasoning datasets: FOLIO (Han et al., 2022), ProofWriter (Tafjord et al., 2020), MMLU-Pro (Wang et al., 2024c) and GPQA (Rein et al., 2023) (Section 4.1).
  - [Stepwise Informativeness Search for Improving LLM Reasoning](https://aclanthology.org/2025.emnlp-main.1285.pdf)
- **MMLU-Pro** (measurements) — *measured_by*
  > We evaluate our framework on four multi-step reasoning datasets: FOLIO (Han et al., 2022), ProofWriter (Tafjord et al., 2020), MMLU-Pro (Wang et al., 2024c) and GPQA (Rein et al., 2023) (Section 4.1).
  - [Stepwise Informativeness Search for Improving LLM Reasoning](https://aclanthology.org/2025.emnlp-main.1285.pdf)
- **AndroidWorld** (measurements) — *measured_by*
  > We evaluate RAG-GUI on AndroidWorld, an online environment requiring multi-step reasoning that mirrors real-world scenarios. (Section 4.2)
  - [Retrieval-augmented GUI Agents with Generative Guidelines](https://aclanthology.org/2025.emnlp-main.902.pdf)
- **MATH** (measurements) — *measured_by*
  > challenging multi-step reasoning tasks such as MATH (Hendrycks et al., 2021) (Section 1)
  - [QSpec: Speculative Decoding with Complementary Quantization Schemes](https://aclanthology.org/2025.emnlp-main.240.pdf)
- **MBPP** (measurements) — *measured_by*
  > GSM8K and MBPP involve multi-step reasoning, which remains underexplored in the quantization context despite its great importance. (Section 2.1)
  - [QSpec: Speculative Decoding with Complementary Quantization Schemes](https://aclanthology.org/2025.emnlp-main.240.pdf)
- **HumanEval** (measurements) — *measured_by*
  > challenging multi-step reasoning tasks such as ... HumanEval (All, 0-shot) (Chen et al., 2021). (Section 4.1)
  - [QSpec: Speculative Decoding with Complementary Quantization Schemes](https://aclanthology.org/2025.emnlp-main.240.pdf)
- **MuSR** (measurements) — *measured_by*
  > Given that MUSR is designed to assess multistep reasoning, this suggests that models excelling in structured reasoning tasks also tend to perform well in frame-semantic parsing. (Section 4.7)
  - [Can LLMs Extract Frame-Semantic Arguments?](https://aclanthology.org/2025.emnlp-main.1557.pdf)
- **ARC** (measurements) — *measured_by*
  > ARC (AI2 Reasoning Challenge) is a dataset created by the Allen Institute for Artiﬁcial Intelligence (AI2) to evaluate question answering systems’ ability to perform multi-step reasoning.
  - [EncryptedLLM: Privacy-Preserving Large Language Model Inference via GPU-Accelerated Fully Homomorphic Encryption](https://raw.githubusercontent.com/mlresearch/v267/main/assets/de-castro25a/de-castro25a.pdf)
- **Memory** (constructs) — *causes*
  > Mamba can effectively identify key information from long texts through CoT thinking, thus significantly improving its ability to recall long-context memory. (Section 1)
  - [Recall with Reasoning: Chain-of-Thought Distillation for Mamba's Long-Context Memory and Extrapolation](https://aclanthology.org/2025.emnlp-main.235.pdf)

### → Chain-of-thought reasoning
- **Chain of thought** (behaviors tasks) — *causes*
  > Large language models are capable of solving tasks that require complex multi-step reasoning by generating solutions in a step-by-step chain-of-thought format (Section 1).
  - [Let's Verify Step by Step](https://proceedings.iclr.cc/paper_files/paper/2024/file/aca97732e30bcf1303bc22ac3924fd16-Paper-Conference.pdf)
- **Planning** (constructs) — *causes*
  > their planning ability remains a critical bottleneck in tackling complex multi-step reasoning tasks. (ABSTRACT)
  - [CodePlan: Unlocking Reasoning Potential in Large Language Models by Scaling Code-form Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/c362b360765ed90ae4bd9c6764837e0e-Paper-Conference.pdf)
- **Prompt engineering** (behaviors tasks) — *causes*
  > CoT prompting aims to mitigate issues like hallucinations and enhance multi-step reasoning by encouraging models to generate intermediate reasoning steps.
  - [Limits of Deep Learning: Sequence Modeling through the Lens of Complexity Theory](https://proceedings.iclr.cc/paper_files/paper/2025/file/62868cc2fc1eb5cdf321d05b4b88510c-Paper-Conference.pdf)

### Associated with
- **Hallucination** (behaviors tasks)
  > These hallucinations (Maynez et al., 2020) are particularly problematic in domains that require multi-step reasoning, since a single logical error is enough to derail a much larger solution. (Section 1).
  - [Let's Verify Step by Step](https://proceedings.iclr.cc/paper_files/paper/2024/file/aca97732e30bcf1303bc22ac3924fd16-Paper-Conference.pdf)
- **Integer addition** (behaviors tasks)
  > what architectural design choices, dataset characteristics, and training pipeline variants are required to learn a many-step reasoning process like multi-digit addition? (Section 1)
  - [Transformers Can Do Arithmetic with the Right Embeddings](https://proceedings.neurips.cc/paper_files/paper/2024/file/c35986bc1ee29b31c1011481b77fe540-Paper-Conference.pdf)
- **Textual reasoning** (behaviors tasks)
  > Natural Language Reasoning: we prompt LLMs to perform multi-step reasoning via natural language, and select the following publicly avaibable datasets: GSM8k [34] contains grade school math problems to test the basic arithmetic and reasoning ability. (Appendix C)
  - [JiuZhang3.0: Efficiently Improving Mathematical Reasoning by Training Small Data Synthesis Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/0356216f73660e15670510f5e42b5fa6-Paper-Conference.pdf)
- **Mathematical problem solving** (behaviors tasks)
  > However, their performance in multi-step reasoning tasks, such as solving complex mathematical or coding problems, remains notably constrained (Section 1).
  - [Step-by-Step Reasoning for Math Problems  via Twisted Sequential Monte Carlo](https://proceedings.iclr.cc/paper_files/paper/2025/file/a4d92f656cc99f60fe1bfc98386aee34-Paper-Conference.pdf)
- **Complex reasoning** (constructs)
  > The step-by-step long-chain reasoning process is most famously used in Chain-of-Thought (CoT) (Wei et al., 2022).
  - [TPO: Aligning Large Language Models with Multi-branch & Multi-step Preference Trees](https://proceedings.iclr.cc/paper_files/paper/2025/file/42ac0f53b7ffede90aea8275b11b3bb8-Paper-Conference.pdf)
- **Entity disambiguation** (behaviors tasks)
  > This challenge is amplified in multi-step reasoning, where entity disambiguation must span the entire verification process. (Section 1)
  - [Verify-in-the-Graph: Entity Disambiguation Enhancement for Complex Claim Verification with Interactive Graph Representation](https://aclanthology.org/2025.naacl-long.268.pdf)
- **Table reasoning** (constructs)
  > Table reasoning presents distinct challenges compared to text-only tasks: it requires interpreting diverse cell contents, aligning data across the table, and performing multi-step reasoning with aggregation and numerical operations (Deng et al., 2024; Wu et al., 2025). (Section 1)
  - [Table-R1: Inference-Time Scaling for Table Reasoning Tasks](https://aclanthology.org/2025.emnlp-main.1040.pdf)
- **Question decomposition** (behaviors tasks)
  > multi-step reasoning methods (Uehara et al., 2022; Wang et al., 2022b; Khan et al., 2023; Yao et al., 2023; Besta et al., 2024) have been proposed that decompose the main question into several sub-question-answer pairs (sub-QAs) and subsequently utilize them to derive the final answer. (Section 1)
  - [Confidence-guided Refinement Reasoning for Zero-shot Question Answering](https://aclanthology.org/2025.emnlp-main.354.pdf)
- **Visual grounding** (constructs)
  > it is crucial to ground the reasoning process to the visual information and VoCoT is the most suitable format (Section 4.3).
  - [VoCoT: Unleashing Visually Grounded Multi-Step Reasoning in Large Multi-Modal Models](https://aclanthology.org/2025.naacl-long.192.pdf)
