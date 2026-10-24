# Complex reasoning
**Type:** Construct  
**Referenced in:** 32 papers  
**Also known as:** Multi-step inference, Higher-order reasoning, Deep reasoning, Advanced reasoning, Composite reasoning, Long-chain reasoning, Multi-hop deduction  

## State of the Field

**Definition agreement:** Consensus. Most papers define complex reasoning as the ability to solve problems through multiple sequential inferential steps, often by integrating several facts, pieces of knowledge, or constraints. A few add specific settings such as multimodality, knowledge intensity, or contrast with simple retrieval or pattern matching, but these are variations in emphasis rather than different phenomena.

**Space of definitions.** Across papers, the prevailing usage treats complex reasoning as a model capacity for multi-step or multi-hop inference: producing outputs by deriving intermediate conclusions, integrating multiple pieces of knowledge, or handling long sequential chains where each step depends on the previous one. Several papers state the same core more broadly as higher-order or advanced reasoning, beyond basic information retrieval or simple pattern matching, often in tasks with multiple constraints. A smaller departure defines it at the task level as multi-hop deduction, an observable problem format rather than a latent ability.

**Space of facets.** Papers use several overlapping labels for nearby ideas, especially multi-step inference, higher-order reasoning, deep reasoning, long-chain reasoning, and multi-hop deduction, with two other labels used in isolated definitions. The shared thread is chained reasoning, but papers specialize it by setting or structure: some emphasize reasoning across modalities, some stress integrating multiple facts or knowledge fragments, some describe composite questions that combine up to three reasoning categories, and some focus on tasks with multiple constraints. Several definitions also contrast it with simpler baselines such as basic information retrieval or simple pattern matching.

**Space of measurement.** Operationalization is limited to 3 linked measurement instruments and no linked behavioral indicators. The recurring instruments are PrOntoQA and ProofWriter, used through questions that require a 3-hop deduction or 3 hops of reasoning, and WildBench, used through real-user tasks described as having multiple constraints and requiring higher-order reasoning. These operationalizations line up most directly with the chain-based definitions, because all three instruments are described through multi-step reasoning or multiple constraints.

**Links.** The papers only report related links, not causal or correlational ones. A single paper relates commonsense reasoning and chain-of-thought reasoning to complex reasoning, and also relates complex reasoning to mathematical reasoning, describing long-chain reasoning as including tasks such as commonsense and math reasoning and stating that the step-by-step long-chain reasoning process is used in Chain-of-Thought.

## Sources

**[MMIE: Massive Multimodal Interleaved Comprehension Benchmark for Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4072543747a14bbed76284cf2c04b9e9-Paper-Conference.pdf) (as "Multi-step inference")**
> Producing an output that depends on correctly deriving intermediate conclusions from a chain of premises, where each step relies on the previous one.

**[WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild](https://proceedings.iclr.cc/paper_files/paper/2025/file/771155abaae744e08576f1f3b4b7ac0d-Paper-Conference.pdf) (as "Higher-order reasoning")**
> The capacity to engage in complex cognitive processes that go beyond basic information retrieval, involving multiple steps or constraints.

**[Think-on-Graph 2.0: Deep and Faithful Large Language Model Reasoning with Knowledge-guided Retrieval Augmented Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/830b1abc6d2da85f23d41169fa44d185-Paper-Conference.pdf) (as "Deep reasoning")**
> The ability to solve complex questions by integrating multiple pieces of knowledge through multi-step inference.

**[FinBen: A Holistic Financial Benchmark for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/adb1d9fa8be4576d28703b396b82ba1b-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Advanced reasoning")**
> The ability to perform complex cognitive operations beyond simple pattern matching, which is required for difficult tasks like forecasting and text generation.

**[ActionReasoningBench: Reasoning about Actions with and without Ramification Constraints](https://proceedings.iclr.cc/paper_files/paper/2025/file/cf42f133f355e0e07a8957b508b26a1b-Paper-Conference.pdf) (as "Composite reasoning")**
> The ability to solve complex problems by integrating multiple distinct reasoning steps or categories, such as combining fluent tracking with action executability.

**[TPO: Aligning Large Language Models with Multi-branch & Multi-step Preference Trees](https://proceedings.iclr.cc/paper_files/paper/2025/file/42ac0f53b7ffede90aea8275b11b3bb8-Paper-Conference.pdf) (as "Long-chain reasoning")**
> The capability to perform tasks that require numerous sequential steps, where errors in any single step can lead to an incorrect final outcome.

**[Calibrating Reasoning in Language Models with Internal Consistency](https://proceedings.neurips.cc/paper_files/paper/2024/file/d037fd021c9aace128b8ce25001cdb6c-Paper-Conference.pdf) (as "Multi-hop deduction")**
> The observable task of solving a problem that requires chaining together multiple steps of inference or information retrieval from a given context.

## Relationships

### Complex reasoning →
- **MATH** (measurements) — *measured_by*
  > Experiments are further carried out on the mathematical competition benchmark, MATH (Hendrycks et al., 2021b), achieving a +6.0 improvement with GPT-4, indicating that FUNCODER can also generalize to complex reasoning. (Introduction)
  - [Divide-and-Conquer Meets Consensus: Unleashing the Power of Functions in Code Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/7bc4f74e35bcfe8cfe43b0a860786d6a-Paper-Conference.pdf)
- **BIG-Bench Hard** (measurements) — *measured_by*
  > BBH (Suzgun et al., 2023) encompasses 27 arduous tasks to assess whether the model can handle complex reasoning situations.
  - [Data Pruning by Information Maximization](https://proceedings.iclr.cc/paper_files/paper/2025/file/7d848891e365ca623dc8352db9782585-Paper-Conference.pdf)
- **GSM8K** (measurements) — *measured_by*
  > For complex reasoning, we use the GSM8K dataset (Cobbe et al., 2021), which contains linguistically diverse grade school math world problems with step-by-step solutions.
  - [Generalization v.s. Memorization: Tracing Language Models’ Capabilities Back to Pretraining Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/7cdf000d22c6cda21f3cbd7467aaf26f-Paper-Conference.pdf)
- **WildBench** (measurements) — *measured_by*
  > Complex real-user tasks usually have multiple constraints and require higher-order reasoning skills, which are well represented in WILDBENCH. (Figure 1)
  - [WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild](https://proceedings.iclr.cc/paper_files/paper/2025/file/771155abaae744e08576f1f3b4b7ac0d-Paper-Conference.pdf)
- **Omni-MATH** (measurements) — *measured_by*
  > We introduce Omni-Math, a universal Olympiad-level mathematical benchmark with over 33 sub-domains and diverse difficulty levels, posing new challenges to the problem solving and complex reasoning capability of LLMs. (Section 1)
  - [Omni-MATH: A Universal Olympiad Level Mathematic Benchmark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f9e1e8b56c7e363985ebeb0e9dd1a85c-Paper-Conference.pdf)
- **CLEVR** (measurements) — *measured_by*
  > complex reasoning in CLEVR (Johnson et al., 2017) and Winoground (Thrush et al., 2022) (Section 4.1).
  - [VoCoT: Unleashing Visually Grounded Multi-Step Reasoning in Large Multi-Modal Models](https://aclanthology.org/2025.naacl-long.192.pdf)
- **HotpotQA** (measurements) — *measured_by*
  > “We conduct experiments on three representative agent tasks: Complex Reasoning (HotpotQA (Yang et al., 2018)), Embodied Decision (ALFWorld (Shridhar et al., 2020)), and Interactive Programming (InterCode (Yang et al., 2023))”
  - [Improving Retrospective Language Agents via Joint Policy Gradient Optimization](https://aclanthology.org/2025.naacl-long.6.pdf)

### → Complex reasoning
- **Analogical reasoning** (constructs) — *causes*
  > we advance the traditional analogical reasoning and propose a novel Thought Propagation (TP) framework to amend existing reasoning-from-scratch methods and enhance the complex reasoning ability of LLMs.
  - [THOUGHT PROPAGATION: AN ANALOGICAL APPROACH TO COMPLEX REASONING WITH LARGE LANGUAGE MODELS](https://proceedings.iclr.cc/paper_files/paper/2024/file/2dae7d1ccf1edf76f8ce7c282bdf4730-Paper-Conference.pdf)
- **Self-improvement** (constructs) — *causes*
  > an adaptive self-improvement agentic system that enables LLMs to perform such complex reasoning under limited data by iteratively improving their capability through self-generated experience. (Abstract)
  - [Adaptive Self-improvement LLM Agentic System for ML Library Development](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25at/zhang25at.pdf)
- **Multi-step planning** (constructs) — *causes*
  > Our detailed analysis demonstrates how planning trajectories improves complex reasoning capabilities, showing that PLAN-TUNING is an effective strategy for improving task-specific performance of smaller LLMs. (Abstract)
  - [PLAN-TUNING: Post-Training Language Models to Learn Step-by-Step Planning for Complex Problem Solving](https://aclanthology.org/2025.emnlp-main.1087.pdf)

### Associated with
- **Mathematical reasoning** (constructs)
  > Long-chain reasoning task (Wei et al., 2022; Xiong et al., 2024), such as commonsense reasoning and math reasoning, is one of the critical capabilities in large language models (LLMs) (Lai et al., 2024).
  - [TPO: Aligning Large Language Models with Multi-branch & Multi-step Preference Trees](https://proceedings.iclr.cc/paper_files/paper/2025/file/42ac0f53b7ffede90aea8275b11b3bb8-Paper-Conference.pdf)
- **Commonsense reasoning** (constructs)
  > Long-chain reasoning task (Wei et al., 2022; Xiong et al., 2024), such as commonsense reasoning and math reasoning, is one of the critical capabilities in large language models (LLMs) (Lai et al., 2024).
  - [TPO: Aligning Large Language Models with Multi-branch & Multi-step Preference Trees](https://proceedings.iclr.cc/paper_files/paper/2025/file/42ac0f53b7ffede90aea8275b11b3bb8-Paper-Conference.pdf)
- **Chain-of-thought reasoning** (constructs)
  > The step-by-step long-chain reasoning process is most famously used in Chain-of-Thought (CoT) (Wei et al., 2022).
  - [TPO: Aligning Large Language Models with Multi-branch & Multi-step Preference Trees](https://proceedings.iclr.cc/paper_files/paper/2025/file/42ac0f53b7ffede90aea8275b11b3bb8-Paper-Conference.pdf)
- **Document question answering** (behaviors tasks)
  > HOMER also improves the prediction accuracy on question answering by 3% (32.7% →35.7%), presenting its capability to perform complex reasoning about the content in the extended context length.
  - [Hierarchical Context Merging: Better Long Context Understanding for Pre-trained LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/06694da057cb15fef11542270a592627-Paper-Conference.pdf)
- **Sudoku solving** (behaviors tasks)
  > The Sudoku environment is a highly challenging Constraint Satisfaction Problem (CSP) and determining the value in even a single cell can require highly complex reasoning involving multiple steps. (Section 1)
  - [Causal language modeling can elicit search and reasoning capabilities on logic puzzles](https://proceedings.neurips.cc/paper_files/paper/2024/file/67b31ca159553d5593e62d7b998d63ea-Paper-Conference.pdf)
