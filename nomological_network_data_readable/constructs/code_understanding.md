# Code understanding
**Type:** Construct  
**Referenced in:** 31 papers  
**Also known as:** Code comprehension, Verilog understanding, Cross-file understanding, Program semantics understanding, Program comprehension, Code-level understanding, Cross-file dependency understanding, Long-range sequential reasoning, Cross-language understanding  

## State of the Field

**Definition agreement:** Consensus. Most papers define code understanding as a model's latent ability to comprehend the semantics, logic, structure, behavior, or functionality of existing code. A few papers narrow this to particular settings or manifestations such as predicting execution, debugging, summarization, multi-file dependencies, or cross-language equivalence, but these are presented as applications or scope restrictions of the same core capability rather than different phenomena.

**Space of definitions.** Across papers, the prevailing usage frames code understanding as a latent model ability to grasp the syntax, semantics, logic, structure, and functionality of code, often extending to reasoning about behavior or execution. Several definitions make this concrete through explicit and implicit semantics, data types, execution effects, outcome prediction, or natural-language explanation, and one paper glosses it as 'knowledge of the syntax and semantics of code' while treating code-to-text generation as an evaluation of it. A smaller line of work uses narrower, task-bound versions, emphasizing multi-file dependencies, cross-language equivalence, Verilog summarization, neural-architecture-search code, or procedural order, so the main disagreement is between a broad semantic understanding of programs and specialized forms tied to particular settings.

**Space of facets.** Papers frequently use neighboring labels such as code comprehension and program comprehension for closely similar abilities centered on semantic properties, behavior, structure, and relationships within code. More specific variants carve out cross-file understanding, cross-file dependency understanding, cross-language understanding, Verilog understanding, and a code-level form tied to reasoning through executable code for neural architecture search. One paper further characterizes weak code understanding through data types, implicit code semantics, and code execution, and another says semantic understanding also requires long-range sequential reasoning.

**Space of measurement.** Operationalization is relatively compact: papers link code understanding to 3 measurement instruments and 4 behavioral indicators. The named instruments are Human evaluation, LLM-as-a-judge, and LiveCodeBench, with evidence pointing respectively to human judgments, GPT score plus embedding similarity for semantic similarity, and code execution scenarios; among behavioral indicators, Clone detection is the only direct measured_by indicator, while the other linked behaviors enter through causal or related claims instead. Elsewhere, papers explicitly treat code-to-text generation as evaluating code understanding, and Verilog-focused work evaluates natural-language summaries of high-level functionality, so the measures mostly track the dominant definitions' focus on semantics, behavior, execution, and functionality, though some narrow the construct to specific code forms or tasks.

**Links.** Relational claims are sparse and mostly one-off. One paper claims a causal relationship from code understanding to code explanation, asking whether code-understanding capability can be composed with language generation to enable code-to-text generation, and another claims a causal relationship from code understanding to abstract reasoning in program verification. Separate papers describe code understanding as related to type inference, and position code navigation as related to it by presenting navigation as a challenge within code understanding; one additional paper uses code understanding tasks that require reasoning across multiple files to measure long-context understanding.

## Sources

**[Beyond Accuracy: Evaluating Self-Consistency of Code Large Language Models with IdentityChain](https://proceedings.iclr.cc/paper_files/paper/2024/file/16371a9d5fed65d6d78ca3a7fa6e598c-Paper-Conference.pdf)**
> The latent ability to interpret the syntax, semantics, and functionality of programming code, enabling explanation and reasoning about code behavior.

**[LiveCodeBench: Holistic and Contamination Free Evaluation of Large Language Models for Code](https://proceedings.iclr.cc/paper_files/paper/2025/file/94074dd5a072d28ff75a76dabed43767-Paper-Conference.pdf) (as "Code comprehension")**
> The model's underlying ability to understand the semantics and predict the outcome of a given piece of code.

**[DeepRTL: Bridging Verilog Understanding and Generation with a Unified Representation Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/e9750610639c3e7a849cff746bf60dbd-Paper-Conference.pdf) (as "Verilog understanding")**
> The latent ability of a model to comprehend Verilog code and summarize its high-level functionality in natural language.

**[LMR-BENCH: Evaluating LLM Agent's Ability on Reproducing Language Modeling Research](https://aclanthology.org/2025.emnlp-main.314.pdf) (as "Cross-file understanding")**
> The ability to track and integrate information distributed across multiple files in a code repository when implementing a target function.

**[SemCoder: Training Code Language Models with Comprehensive Semantics Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/6efcc7fd8efeee29a050a79c843c90e0-Paper-Conference.pdf) (as "Program semantics understanding")**
> The latent ability of a model to grasp the meaning, behavior, and execution effects of code beyond static text patterns.

**[LLMDFA: Analyzing Dataflow in Code with Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed9dcde1eb9c597f68c1d375bbecf3fc-Paper-Conference.pdf) (as "Program comprehension")**
> The latent ability of a model to understand the semantic properties, structures, and relationships within source code.

**[RZ-NAS: Enhancing LLM-guided Neural Architecture Search via Reflective Zero-Cost Strategy](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ji25a/ji25a.pdf) (as "Code-level understanding")**
> The latent ability of the LLM to comprehend and reason about neural architecture search tasks through executable code representations of network construction and zero-cost proxy computation.

**[EpiCoder: Encompassing Diversity and Complexity in Code Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25bi/wang25bi.pdf) (as "Cross-file dependency understanding")**
> The latent ability to comprehend and correctly manage dependencies, references, and interactions between multiple code files within a single project.

**[Can Large Language Models Understand Symbolic Graphics Programs?](https://proceedings.iclr.cc/paper_files/paper/2025/file/41bd71e7bf7f9fe68f1c936940fd06bd-Paper-Conference.pdf) (as "Long-range sequential reasoning")**
> The capacity to process and understand the procedural steps in a program where the order of operations significantly affects the final semantic meaning.

**[ExeCoder: Empowering Large Language Models with Executability Representation for Code Translation](https://aclanthology.org/2025.emnlp-main.362.pdf) (as "Cross-language understanding")**
> The model's ability to comprehend and map semantic and structural equivalences between different programming languages.

## Relationships

### Code understanding →
- **Code explanation** (behaviors tasks) — *causes*
  > can we compose an augmenting model’s code understanding capability with an anchor LLM’s language generation capability to enable code-to-text generation capability? (Section 1)
  - [LLM Augmented LLMs: Expanding Capabilities through Composition](https://proceedings.iclr.cc/paper_files/paper/2024/file/008a16ead32f932b711788c276890456-Paper-Conference.pdf)
- **Abstract reasoning** (constructs) — *causes*
  > This decomposition requires high-level reasoning that is difficult to automate using conventional formal methods, but plausibly could be performed by LLMs, with their documented code-understanding capability. (Section 2)
  - [Lemur: Integrating Large Language Models in Automated Program Verification](https://proceedings.iclr.cc/paper_files/paper/2024/file/0c86142265c5e2c900613dd1d031cb90-Paper-Conference.pdf)
- **LeetCode** (measurements) — *measured_by*
  > "Fill in the Blank evaluates a model’s code comprehension ability... We collected approximately 2,000 coding problems from LeetCode"
  - [CodeMMLU: A Multi-Task Benchmark for Assessing Code Understanding & Reasoning Capabilities of CodeLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/078b4435f5b61a092025fec713084008-Paper-Conference.pdf)

### Associated with
- **Code navigation** (behaviors tasks)
  > One important challenge in code understanding is code navigation: finding where relevant functionality is implemented. (Section 2.4)
  - [Position: Future Research and Challenges Remain Towards AI for Software Engineering](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gu25e/gu25e.pdf)
- **Long-context understanding** (constructs)
  > We evaluate our DSLA model on tasks requiring careful long-range interactions (Bai et al., 2024), including: ... (ii) Code Understanding, which require reasoning across multiple code files to answer complex questions
  - [On-the-Fly Adaptive Distillation of Transformer to Dual-State Linear Attention for Long-Context LLM Serving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ro25a/ro25a.pdf)
- **Clone detection** (behaviors tasks)
  > This paper explores State Space Models (SSMs) as a promising alternative for code understanding tasks such as retrieval, classification, and clone detection. (Abstract)
  - [CodeSSM: Towards State Space Models for Code Understanding](https://aclanthology.org/2025.emnlp-main.1735.pdf)
