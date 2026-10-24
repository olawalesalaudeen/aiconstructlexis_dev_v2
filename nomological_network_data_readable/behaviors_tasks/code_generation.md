# Code generation
**Type:** Behavior  
**Referenced in:** 524 papers  
**Also known as:** Code problem solving, Interactive coding, Function completion, Chart-to-code generation, Action execution program generation, Evaluation program generation, Visual program generation, Whole-function generation, Text-to-ES query generation, Feature function generation, Stub file generation, Backend application generation, Multi-agent system generation, Program generation, Standalone function implementation, Python code generation, Verilog code generation, Program synthesis, Code synthesis, Sequential edit generation, Policy-to-code translation, EDA code generation, LaTeX code generation, Cone code generation, Code comprehension and generation, Data visualization code generation, Mockup-to-code generation, Game code generation, Heuristic function generation, Text-to-Python generation, ORM code generation, Chart code generation, Reference image to slide generation, Slide code generation, Prolog program generation, Text-to-visualization generation, Visualization code generation, Repo-level code generation, Multilingual code generation, Function-level code generation, Class-level code generation, Data science programming, Text-to-code generation, Continuation writing, Code generation ability, Code generation capability, Verilog generation, Program synthesis capability, Dependency invocation, API invocation generation, Requirement fulfillment, Code implementation, Programming language generation  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats code generation as producing executable, functional, or functionally correct source code from a natural language description, prompt, docstring, or other specification. Success is usually framed by syntactic validity plus whether the generated code works, often by passing unit, visible, or hidden tests, though some papers instead emphasize complete, compilable solutions or code that reproduces a target artifact. A smaller line of work broadens the input beyond plain text to multimodal prompts, chart images, code skeletons, input-output examples, or repository context. One paper explicitly describes it as the task of synthesizing code from natural language (SWE-bench Multimodal: Do AI Systems Generalize to Visual Software Domains?).

**Variants.** Papers use the label for many variants. Common ones stay close to function- or program-level synthesis, including function completion, whole-function and repo-level generation, class-level generation, standalone function implementation, and sequential edit generation. Another cluster covers multimodal or structured targets, such as chart-to-code generation, visual program generation, mockup-to-code, slide code generation, and text-to-ES or ORM query generation. Other papers narrow it to particular languages or domains, including Python and multilingual coding, Verilog or other HDL tasks, interactive Bash coding, backend application generation, EDA and visualization code, game code, Prolog programs, and policy-to-code translation. In repository settings, one paper defines the task as generating the target function that passes all relevant test cases (Can Language Models Replace Programmers for Coding? REPOCOD Says `Not Yet').

**Space of elicitation and scores.** Code generation is measured by 32 instruments. The most recurrent are HumanEval, MBPP, APPS, LiveCodeBench, and EvalPlus, which papers use for function-level Python tasks, broader programming problems, and test-augmented evaluation. Most linked instruments are benchmark datasets, though papers also mention execution-based evaluation and an LLM-as-a-judge setup.

**What it is taken as evidence of.** Across 17 linked constructs, a direct measurement-style use treats code generation as evidence of coding ability, and papers also frequently tie it to reasoning. On reasoning, papers do not use a single direction: some report code generation is related to reasoning, others claim reasoning causes code generation, and another line claims code generation causes reasoning. Smaller lines of work connect it to planning, algorithmic reasoning, and expressive power. Overall, papers do not converge on one construct that code generation reflects.

## Sources

**[The Rise and Down of Babel Tower: Investigating the Evolution Process of Multilingual Code Large Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/9aa4e5caaf6d62767787500ee487c7fb-Paper-Conference.pdf) (as "Code problem solving")**
> The task of generating functionally correct code that solves a given programming problem, typically described in natural language.

**[Copyright-Protected Language Generation via Adaptive Model Fusion](https://proceedings.iclr.cc/paper_files/paper/2025/file/01953220e4becc6ac1078c24c1f8d3a7-Paper-Conference.pdf)**
> The task of producing functional source code in a programming language based on a natural language description or other specifications.

**[Better than Your Teacher: LLM Agents that learn from Privileged AI Feedback](https://proceedings.iclr.cc/paper_files/paper/2025/file/1c60ed2b01120d383eebf12dc7a0e138-Paper-Conference.pdf) (as "Interactive coding")**
> The task of solving filesystem manipulation problems by issuing a sequence of Bash commands in an interactive terminal.

**[To Code or Not To Code? Exploring Impact of Code in Pre-training](https://proceedings.iclr.cc/paper_files/paper/2025/file/c513d1786f85531fac7050947736265f-Paper-Conference.pdf) (as "Function completion")**
> A specific code generation task where the model must complete the body of a function given its signature and docstring.

**[ChartMimic: Evaluating LMM's Cross-Modal Reasoning Capability via Chart-to-Code Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/42806406dd99e30c3796bc98b2670fa2-Paper-Conference.pdf) (as "Chart-to-code generation")**
> Generating executable code from a chart image and textual instruction so that the code reproduces or modifies the chart.

**[Retrieval-Augmented Fine-Tuning With Preference Optimization For Visual Program Generation](https://aclanthology.org/2025.acl-long.1106.pdf) (as "Visual program generation")**
> The task of generating code for a visual programming language, typically in a text-based format like XML, JSON, or a metaprogram, based on a user's natural language instruction.

**[Can Language Models Replace Programmers for Coding? REPOCOD Says `Not Yet'](https://aclanthology.org/2025.acl-long.1204.pdf) (as "Whole-function generation")**
> Generating complete function bodies from natural language descriptions and repository context, as opposed to single-line or partial code completions.

**[ASPERA: A Simulated Environment to Evaluate Planning for Complex Action Execution](https://aclanthology.org/2025.acl-long.1234.pdf) (as "Action execution program generation")**
> Producing a Python program that satisfies a user's natural language request by composing primitives from an assistant library, including proper use of control flow and function calls.

**[ASPERA: A Simulated Environment to Evaluate Planning for Complex Action Execution](https://aclanthology.org/2025.acl-long.1234.pdf) (as "Evaluation program generation")**
> Generating a program that executes an action execution program and verifies its correctness through assertions that check goal completion and absence of side effects.

**[Text-to-ES Bench: A Comprehensive Benchmark for Converting Natural Language to Elasticsearch Query](https://aclanthology.org/2025.acl-long.971.pdf) (as "Text-to-ES query generation")**
> The specific task of converting a natural language question into an executable Elasticsearch (ES) query, which may include both a DSL query body and post-processing code.

**[ELEMENTAL: Interactive Learning from Demonstrations and Vision-Language Models for Reward Design in Robotics](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25at/chen25at.pdf) (as "Feature function generation")**
> The observable action of generating structured, executable code, specifically Python functions, that represents task-relevant features based on multimodal inputs.

**[TypyBench: Evaluating LLM Type Inference for Untyped Python Repositories](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dong25l/dong25l.pdf) (as "Stub file generation")**
> Producing a .pyi file containing only type annotations for functions and variables in a corresponding untyped Python file, preserving the original function signatures without implementation.

**[GRAIL: Graph Edit Distance and Node Alignment using LLM-Generated Code](https://raw.githubusercontent.com/mlresearch/v267/main/assets/verma25a/verma25a.pdf) (as "Program generation")**
> The process by which the LLM produces executable code that computes or approximates Graph Edit Distance based on input graph pairs.

**[BaxBench: Can LLMs Generate Correct and Secure Backends?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/vero25a/vero25a.pdf) (as "Backend application generation")**
> Producing a complete, self-contained backend application with multiple files and functions that implements specified API endpoints and handles requests correctly.

**[MAS-GPT: Training LLMs to Build LLM-based Multi-Agent Systems](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ye25g/ye25g.pdf) (as "Multi-agent system generation")**
> The task of generating an executable code representation of a multi-agent system based on a natural language user query.

**[Synthesizing Software Engineering Data in a Test-Driven Manner](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cn/zhang25cn.pdf) (as "Standalone function implementation")**
> The task of writing a single, self-contained function based on a given specification, without dependencies on a larger codebase.

**[Syntactic and Semantic Control of Large Language Models via Sequential Monte Carlo](https://proceedings.iclr.cc/paper_files/paper/2025/file/a2d537e69a6c6638a3630eef835f07de-Paper-Conference.pdf) (as "Python code generation")**
> The task of generating Python code, particularly for data science applications, to solve a problem specified in natural language and via test cases.

**[CraftRTL: High-quality Synthetic Data Generation for Verilog Code Models with Correct-by-Construction Non-Textual Representations and Targeted Code Repair](https://proceedings.iclr.cc/paper_files/paper/2025/file/e112a4671e8779aa9f640a0e3f81bd26-Paper-Conference.pdf) (as "Verilog code generation")**
> The task of producing functionally correct Verilog code from a natural language or non-textual problem description.

**[Generating Code World Models with Large Language Models Guided by Monte Carlo Tree Search](https://proceedings.neurips.cc/paper_files/paper/2024/file/6f479ea488e0908ac8b1b37b27fd134c-Paper-Conference.pdf) (as "Program synthesis")**
> Generating executable programs that implement environment dynamics or solve coding problems from specifications and examples.

**[LLMDFA: Analyzing Dataflow in Code with Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed9dcde1eb9c597f68c1d375bbecf3fc-Paper-Conference.pdf) (as "Code synthesis")**
> Generating scripts that implement source/sink extraction or path-condition solving using external libraries and solvers.

**[Training Language Models on Synthetic Edit Sequences Improves Code Synthesis](https://proceedings.iclr.cc/paper_files/paper/2025/file/e43f900f571de6c96a70d5724a0fb565-Paper-Conference.pdf) (as "Sequential edit generation")**
> The observable process of generating a program as a sequence of incremental insertion edits, rather than producing the entire program in a single pass.

**[PricingLogic: Evaluating LLMs Reasoning on Complex Tourism Pricing Tasks](https://aclanthology.org/2025.emnlp-main.393.pdf) (as "Policy-to-code translation")**
> The specific task of converting natural language policy documents into executable functions in a programming language.

**[Do Slides Help? Multi-modal Context for Automatic Transcription of Conference Talks](https://aclanthology.org/2025.emnlp-main.814.pdf) (as "LaTeX code generation")**
> The task of generating compilable LaTeX source code from a textual description or prompt.

**[Reliable and Cost-Effective Exploratory Data Analysis via Graph-Guided RAG](https://aclanthology.org/2025.emnlp-main.836.pdf) (as "EDA code generation")**
> The task of automatically producing executable Python code to perform Exploratory Data Analysis (EDA) on a given dataset.

**[SynC-LLM: Generation of Large-Scale Synthetic Circuit Code with Hierarchical Language Models](https://aclanthology.org/2025.emnlp-main.877.pdf) (as "Cone code generation")**
> Generating HDL code for combinational logic cones that determine the next state of a register, based on functional descriptions and I/O constraints.

**[Priority on High-Quality: Selecting Instruction Data via Consistency Verification of Noise Injection](https://aclanthology.org/2025.emnlp-main.1048.pdf) (as "Code comprehension and generation")**
> The observable task of understanding and producing computer code based on a natural language prompt.

**[Reinforcement Learning for Large Language Models via Group Preference Reward Shaping](https://aclanthology.org/2025.emnlp-main.1085.pdf) (as "Coding")**
> The task of generating executable source code in a programming language based on a natural language description.

**[WebMMU: A Benchmark for Multimodal Multilingual Website Understanding and Code Generation](https://aclanthology.org/2025.emnlp-main.1276.pdf) (as "Mockup-to-code generation")**
> The task of generating structured HTML and CSS code from a visual representation of a webpage, such as a hand-drawn sketch or a digital mockup.

**[Identifying & Interactively Refining Ambiguous User Goals for Data Visualization Code Generation](https://aclanthology.org/2025.emnlp-main.1283.pdf) (as "Data visualization code generation")**
> The observable task of producing executable code that creates a data plot or visualization based on a natural language prompt.

**[Cardiverse: Harnessing LLMs for Novel Card Game Prototyping](https://aclanthology.org/2025.emnlp-main.1511.pdf) (as "Game code generation")**
> Producing executable game code from a natural-language description of game mechanics.

**[Cardiverse: Harnessing LLMs for Novel Card Game Prototyping](https://aclanthology.org/2025.emnlp-main.1511.pdf) (as "Heuristic function generation")**
> Converting natural language strategies into executable Python functions that score candidate actions based on game state.

**[STARQA: A Question Answering Dataset for Complex Analytical Reasoning over Structured Databases](https://aclanthology.org/2025.emnlp-main.1749.pdf) (as "Text-to-Python generation")**
> Generating Python code from natural language instructions to perform data processing, computation, or reasoning tasks not easily expressible in SQL.

**[Dialect-SQL: An Adaptive Framework for Bridging the Dialect Gap in Text-to-SQL](https://aclanthology.org/2025.emnlp-main.178.pdf) (as "ORM code generation")**
> The task of generating Object Relational Mapping (ORM) code from a natural language question, which serves as a dialect-agnostic intermediate representation.

**[AMACE: Automatic Multi-Agent Chart Evolution for Iteratively Tailored Chart Generation](https://aclanthology.org/2025.emnlp-main.1089.pdf) (as "Chart code generation")**
> Producing executable code (e.g., Python with matplotlib) that renders a data table into a visual chart according to specified conditions.

**[SlideCoder: Layout-aware RAG-enhanced Hierarchical Slide Generation from Design](https://aclanthology.org/2025.emnlp-main.458.pdf) (as "Reference image to slide generation")**
> The task of automatically generating executable code to create an editable slide that is visually and structurally consistent with a given reference image.

**[SlideCoder: Layout-aware RAG-enhanced Hierarchical Slide Generation from Design](https://aclanthology.org/2025.emnlp-main.458.pdf) (as "Slide code generation")**
> Producing Python code using the python-pptx library that, when executed, generates a slide matching a reference image in layout and visual appearance.

**[Predicate-Guided Generation for Mathematical Reasoning](https://aclanthology.org/2025.emnlp-main.462.pdf) (as "Prolog program generation")**
> The production of an executable Prolog program that encodes logical constraints from a math problem and yields a symbolic answer upon execution.

**[Text2Vis: A Challenging and Diverse Benchmark for Generating Multimodal Visualizations from Text](https://aclanthology.org/2025.emnlp-main.1622.pdf) (as "Text-to-visualization generation")**
> Producing visualization code and a chart from a natural-language query and data table.

**[Text2Vis: A Challenging and Diverse Benchmark for Generating Multimodal Visualizations from Text](https://aclanthology.org/2025.emnlp-main.1622.pdf) (as "Visualization code generation")**
> Producing executable Python code using libraries like Matplotlib or Seaborn to generate a chart from a data table and natural language query.

**[EvoCodeBench: An Evolving Code Generation Benchmark with Domain-Specific Evaluations](https://proceedings.neurips.cc/paper_files/paper/2024/file/6a059625a6027aca18302803743abaa2-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Repo-level code generation")**
> Generating code for a target function given a natural language requirement and repository context, simulating real-world developer coding processes.

**[AlchemistCoder: Harmonizing and Eliciting Code Capability by Hindsight Tuning on Multi-source Data](https://proceedings.neurips.cc/paper_files/paper/2024/file/040c816286b3844fd78f2124eec75f2e-Paper-Conference.pdf) (as "Multilingual code generation")**
> The task of generating functionally correct code in various programming languages, such as Python, C++, Java, JavaScript, and Go.

**[SelfCodeAlign: Self-Alignment for Code Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/72da102da91a8042a0b2aa968429a9f9-Paper-Conference.pdf) (as "Function-level code generation")**
> The task of generating a complete, self-contained function based on a natural language description of its purpose and behavior.

**[SelfCodeAlign: Self-Alignment for Code Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/72da102da91a8042a0b2aa968429a9f9-Paper-Conference.pdf) (as "Class-level code generation")**
> The task of generating the implementation of a class and its methods, given a code skeleton containing class- and method-level information.

**[SelfCodeAlign: Self-Alignment for Code Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/72da102da91a8042a0b2aa968429a9f9-Paper-Conference.pdf) (as "Data science programming")**
> The task of completing a partial code snippet to solve a data science problem, often involving specific libraries and data manipulation techniques.

**[Reranking Laws for Language Generation: A Communication-Theoretic Perspective](https://proceedings.neurips.cc/paper_files/paper/2024/file/c8b2f897e45770595656a79a9ad91e89-Paper-Conference.pdf) (as "Text-to-code generation")**
> The task of generating executable source code from a natural language description or prompt.

**[ROUTE: Robust Multitask Tuning and Collaboration for Text-to-SQL](https://proceedings.iclr.cc/paper_files/paper/2025/file/212b143b5a5d6b88feb0fb1441b9756e-Paper-Conference.pdf) (as "Continuation writing")**
> The behavior of completing a partial, incomplete SQL query to form a complete and valid query that answers a given question.

**[Is Self-Repair a Silver Bullet for Code Generation?](https://proceedings.iclr.cc/paper_files/paper/2024/file/9ddc141bdbf9d1db510cefff56c586ad-Paper-Conference.pdf) (as "Code generation ability")**
> The latent aptitude of a large language model to generate correct and functional code snippets from natural language specifications.

**[Can Large Language Models Analyze Graphs like Professionals? A Benchmark, Datasets and Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/ff417c3993894694e88ffc4d3f53d28b-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Code generation capability")**
> The latent ability of a model to produce syntactically correct and functional programming code to solve specified problems.

**[DeepRTL: Bridging Verilog Understanding and Generation with a Unified Representation Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/e9750610639c3e7a849cff746bf60dbd-Paper-Conference.pdf) (as "Verilog generation")**
> The latent ability of a model to produce syntactically correct and functionally accurate Verilog code from natural language specifications.

**[LLMDFA: Analyzing Dataflow in Code with Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed9dcde1eb9c597f68c1d375bbecf3fc-Paper-Conference.pdf) (as "Program synthesis capability")**
> The latent ability to generate executable code or scripts that implement analysis logic or invoke external tools.

**[EvoCodeBench: An Evolving Code Generation Benchmark with Domain-Specific Evaluations](https://proceedings.neurips.cc/paper_files/paper/2024/file/6a059625a6027aca18302803743abaa2-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Dependency invocation")**
> The observable behavior of a model generating code that calls or uses other functions, classes, or modules defined within the provided context.

**[CodeSync: Synchronizing Large Language Models with Dynamic Code Evolution at Scale](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25t/wang25t.pdf) (as "API invocation generation")**
> The observable behavior of generating a specific line or block of code that calls a function, method, or class initializer from an external library.

**[Self-Evolving Multi-Agent Collaboration Networks for Software Development](https://proceedings.iclr.cc/paper_files/paper/2025/file/39af4f2f9399122a14ccf95e2d2e7122-Paper-Conference.pdf) (as "Requirement fulfillment")**
> Producing code that satisfies itemized software requirements and passes corresponding verification tests.

**[FLASK: Fine-grained Language Model Evaluation based on Alignment Skill Sets](https://proceedings.iclr.cc/paper_files/paper/2024/file/f41b4a6b202adcd8e150a9d4f124d8f6-Paper-Conference.pdf) (as "Code implementation")**
> The task of generating functional source code based on a natural language description or problem statement.

**[Prototype Conditioned Generative Replay for Continual Learning in NLP](https://aclanthology.org/2025.naacl-long.636.pdf) (as "Programming language generation")**
> The task of generating source code in a specific programming language.

## Relationships

### Code generation →
- **HumanEval** (measurements) — *measured_by*
  > We evaluate SEC in the following tasks and datasets (details in Appendix A.1): ... Code Generation: HumanEval (Chen et al., 2021). (Section 3.1)
  - [Are Human-generated Demonstrations Necessary for In-context Learning?](https://proceedings.iclr.cc/paper_files/paper/2024/file/19914b5bf19ab2b245d2e6ff7299e8f0-Paper-Conference.pdf)
- **MBPP** (measurements) — *measured_by*
  > Text-to-Code (T2C): Given a textual context, the model is prompted to generate the corresponding code snippet. ... We perform 3-shot inference on the MBPP dataset (Austin et al., 2021) and report P@1. (Section 4.3)
  - [LLM Augmented LLMs: Expanding Capabilities through Composition](https://proceedings.iclr.cc/paper_files/paper/2024/file/008a16ead32f932b711788c276890456-Paper-Conference.pdf)
- **APPS** (measurements) — *measured_by*
  > In line with prior RL-based works (Le et al., 2022; Shojaee et al., 2023; Liu et al., 2023), we evaluate B-Coder on the challenging code contests benchmark APPS (Hendrycks et al., 2021). (Section 5)
  - [$\mathcal{B}$-Coder: Value-Based Deep Reinforcement Learning for Program Synthesis](https://proceedings.iclr.cc/paper_files/paper/2024/file/7e9c2053258b1bdd32ff2654802cd594-Paper-Conference.pdf)
- **LiveCodeBench** (measurements) — *measured_by*
  > LiveCodeBench [21] is a benchmark for contamination-free evaluation. ... we focus on the code generation task for assessing LLM function generation. (Section 3.1)
  - [SelfCodeAlign: Self-Alignment for Code Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/72da102da91a8042a0b2aa968429a9f9-Paper-Conference.pdf)
- **EvalPlus** (measurements) — *measured_by*
  > HumanEval [8] and MBPP [3] are the two most widely-used benchmarks for function-level code generation. We use their test augmented versions, i.e., HumanEval+ and MBPP+, with 80×/35× more test cases for rigorous evaluation [38]. (Section 3.1)
  - [SelfCodeAlign: Self-Alignment for Code Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/72da102da91a8042a0b2aa968429a9f9-Paper-Conference.pdf)
- **HumanEval+** (measurements) — *measured_by*
  > HumanEval [8] and MBPP [3] are the two most widely-used benchmarks for function-level code generation. We use their test augmented versions, i.e., HumanEval+ and MBPP+, with 80×/35× more test cases for rigorous evaluation [38]. (Section 3.1)
  - [SelfCodeAlign: Self-Alignment for Code Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/72da102da91a8042a0b2aa968429a9f9-Paper-Conference.pdf)
- **DS-1000** (measurements) — *measured_by*
  > Through comprehensive experiments on five prominent code generation benchmarks, namely HumanEval, HumanEval+, MBPP, DS-1000, and MultiPL-E, our models showcase outstanding performance. (ABSTRACT)
  - [WizardCoder: Empowering Code Large Language Models with Evol-Instruct](https://proceedings.iclr.cc/paper_files/paper/2024/file/72eba29737f9c3a5a4ce8cdb7b667145-Paper-Conference.pdf)
- **BigCodeBench** (measurements) — *measured_by*
  > Our BigCodeBench focuses on evaluating the fundamental code generation capability of LLMs, which is also an essential path toward strong code agents. (Section 5)
  - [BigCodeBench: Benchmarking Code Generation with Diverse Function Calls and Complex Instructions](https://proceedings.iclr.cc/paper_files/paper/2025/file/a6a90bcc2aa470c3871b2d39a67d26e8-Paper-Conference.pdf)
- **CodeContests** (measurements) — *measured_by*
  > “For Dsrc, we chose the CodeContests dataset (Li et al., 2022), a competitive programming problem dataset where each problem comes with multiple correct and incorrect solutions.”
  - [Generative Monoculture in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5178b2f2d7c44aa390c0777dc77b3f0c-Paper-Conference.pdf)
- **MultiPL-E** (measurements) — *measured_by*
  > The evaluation of FLORA, LORA, and IA3 was conducted on the MultiPL-E benchmark (Cassano et al., 2023), which contains the translation of two unit-test driven Python benchmarks (HumanEval and MBPP) to 18 other programming languages. (Section 4.2)
  - [Batched Low-Rank Adaptation of Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/66247b78cb1aa7259dcf856a18c9e294-Paper-Conference.pdf)
- **HumanEvalPack** (measurements) — *measured_by*
  > HUMANEVALSYNTHESIZE (NL!C) Given a natural language docstring or comment describing the desired code, the model is tasked to synthesize the correct code. (Section 3)
  - [OctoPack: Instruction Tuning Code Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1ec299a5229034141e58aeded0d0b9de-Paper-Conference.pdf)
- **Codeforces** (measurements) — *measured_by*
  > we analyze Codeforces and Project Euler, two longitudinal code generation/problem solving websites. (Section 1)
  - [To the Cutoff... and Beyond? A Longitudinal Perspective on LLM Data Contamination](https://proceedings.iclr.cc/paper_files/paper/2024/file/2d04d97593c8c33d415337f408ed0e1b-Paper-Conference.pdf)
- **ClassEval** (measurements) — *measured_by*
  > We evaluate code LLMs on class-level code generation using ClassEval [13], a collection of 100 class-level Python code generation tasks, covering 100 classes and 410 methods, with an average of 33 tests per class and 8 tests per method. (Section 3.2)
  - [SelfCodeAlign: Self-Alignment for Code Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/72da102da91a8042a0b2aa968429a9f9-Paper-Conference.pdf)
- **HumanEval-X** (measurements) — *measured_by*
  > We compare the pass@1 accuracy of the base models and the corresponding fine-tuned AlchemistCoder models on Humaneval-X [49]. (Section 3.2, under heading 'Results on multilingual code generation.')
  - [AlchemistCoder: Harmonizing and Eliciting Code Capability by Hindsight Tuning on Multi-source Data](https://proceedings.neurips.cc/paper_files/paper/2024/file/040c816286b3844fd78f2124eec75f2e-Paper-Conference.pdf)
- **TACO** (measurements) — *measured_by*
  > For the coding experiments, we adopt a subset of TACO, a dataset focused on algorithmic code generation with problems sourced from various programming contest platforms (Li et al., 2023). (Section 4.1)
  - [Learning How Hard to Think: Input-Adaptive Allocation of LM Computation](https://proceedings.iclr.cc/paper_files/paper/2025/file/ff414825df833edb8b1839e3d5d495e9-Paper-Conference.pdf)
- **bigcode-evaluation-harness** (measurements) — *measured_by*
  > We used the Bigcode Evaluation Harness (Ben Allal et al., 2022) as the evaluation tool, sampling 50 solutions per problem with a temperature of 0.2, and report both Pass@1 and Pass@10.
  - [RaSA: Rank-Sharing Low-Rank Adaptation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b4fd162d3e2d015233486a2e313828a7-Paper-Conference.pdf)
- **LeetCode Contest** (measurements) — *measured_by*
  > To evaluate code LLMs on more challenging problems, we construct the LeetCode Contest benchmark.
  - [Policy Filtration for RLHF to Mitigate Noise in Reward Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25bq/zhang25bq.pdf)
- **LongBench** (measurements) — *measured_by*
  > LongBench This benchmark contains a variety of zero-shot long context tasks, such as: Single/Multi Document QA, Summarization, Coding, etc. (Section 5)
  - [DeciMamba: Exploring the Length Extrapolation Potential of Mamba](https://proceedings.iclr.cc/paper_files/paper/2025/file/fae0a4535196bf7715c1aef2ccfe283f-Paper-Conference.pdf)
- **MT-Bench** (measurements) — *measured_by*
  > MT-bench (Zheng et al., 2023), which evaluates chatbot responses across various dimensions such as writing, roleplay, coding, mathematics, reasoning, STEM, and humanities, using GPT-4 for grading (Section 5).
  - [WildChat: 1M ChatGPT Interaction Logs in the Wild](https://proceedings.iclr.cc/paper_files/paper/2024/file/9421261e06f1a63a352b068f1ac90609-Paper-Conference.pdf)
- **EvoEval** (measurements) — *measured_by*
  > We evaluated the models on benchmarks corresponding to their respective training levels. In Section 3.2, we evaluate the model’s ability using five function-level code generation benchmarks. Specifically, HumanEval (Chen et al., 2021), MBPP (Austin et al., 2021), BigCodeBench (Zhuo et al., 2025), EvoEval (Xia et al., 2024) and FullStackBench (Liu et al., 2024). (Section 3.2)
  - [EpiCoder: Encompassing Diversity and Complexity in Code Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25bi/wang25bi.pdf)
- **BIG-Bench Hard** (measurements) — *measured_by*
  > In this experiment, we test Trace’s ability in joint prompt optimization and code generation. ... We use the Big-Bench Hard dataset [21] (15 examples for training, 5 for validation, and the rest for testing). (Section 5.3)
  - [Trace is the Next AutoDiff: Generative Optimization with Rich Feedback, Execution Traces, and LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/83ba7056bce2c3c3c27e17397cf3e1f0-Paper-Conference.pdf)
- **LeetCode** (measurements) — *measured_by*
  > ...HumanEval [4] and LeetCode [12] for coding... (Section 5.2)
  - [Noise Contrastive Alignment of Language Models with Explicit Rewards](https://proceedings.neurips.cc/paper_files/paper/2024/file/d5a58d198afa370a3dff0e1ca4fe1802-Paper-Conference.pdf)
- **Data analysis** (behaviors tasks) — *causes*
  > we use large language models (LLMs) enhanced by code generation to automatically generate high-quality data analysis, which will later be refined by human annotators. (Abstract)
  - [DACO: Towards Application-Driven and Comprehensive Data Analysis via Code Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/a4cb1444fb05839d0113d2773da88a49-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Hallucination** (behaviors tasks) — *causes*
  > Results in Table 2 show that this code-writing approach effectively reduced hallucination rates, particularly on large graphs.
  - [GraphArena: Evaluating and Exploring Large Language Models on Graph Computation](https://proceedings.iclr.cc/paper_files/paper/2025/file/77fa8253adfc8b33209639f3e9985741-Paper-Conference.pdf)
- **BigCodeBench-Complete** (measurements) — *measured_by*
  > We assess two common programming scenarios: (1) Code Completion (BigCodeBench-Complete), which evaluates the capability of code generation based on the structured docstrings; and (2) Instruction to Code (BigCodeBench-Instruct), which evaluates the ability to complete programming tasks based on natural-language-oriented (NL-oriented) instructions. (Introduction)
  - [BigCodeBench: Benchmarking Code Generation with Diverse Function Calls and Complex Instructions](https://proceedings.iclr.cc/paper_files/paper/2025/file/a6a90bcc2aa470c3871b2d39a67d26e8-Paper-Conference.pdf)
- **CodeSearchNet** (measurements) — *measured_by*
  > For an additional dataset on the code generation task. We choose the CodeSearchNet dataset (Husain et al., 2019) for evaluation. (Section 5.3)
  - [Selective Aggregation for Low-Rank Adaptation in Federated Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/f53a37f820d5be5930415d964f4a0187-Paper-Conference.pdf)
- **Logical reasoning** (constructs) — *causes*
  > In logical reasoning tasks like Date Understanding, LLM’s reasoning ability is degraded when using code, as shown in Appendix Section G. (Section 3.3)
  - [Steering Large Language Models between Code Execution and Textual Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/f763f7c9a6599e14b07add5937d8189c-Paper-Conference.pdf)
- **GUI automation** (behaviors tasks) — *causes*
  > OSCAR generates executable Python code to directly interface with the OS, enabling semantically clear and precise actions, ensuring broad applicability across diverse tasks. (Section 2)
  - [OSCAR: Operating System Control via State-Aware Reasoning and Re-Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/b2077e6d66da612fcb701589efa9ce88-Paper-Conference.pdf)
- **ChartMimic** (measurements) — *measured_by*
  > ChartMimic places emphasis on evaluating LMMs’ capacity to harmonize a blend of cognitive capabilities, encompassing visual understanding, code generation, and cross-modal reasoning. (Abstract)
  - [ChartMimic: Evaluating LMM's Cross-Modal Reasoning Capability via Chart-to-Code Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/42806406dd99e30c3796bc98b2670fa2-Paper-Conference.pdf)
- **Execution-based evaluation** (measurements) — *measured_by*
  > The execution-based method executes generated code against test cases to measure the success rate.
  - [McEval: Massively Multilingual Code Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/dad66bb085bab14fbca07cfa4271f00b-Paper-Conference.pdf)
- **Direct prompting** (measurements) — *measured_by*
  > "Direct prompting is a simple framework that does not interact with any programming environment. Given the task inputs, it prompts an LLM to generate a corresponding program in one pass. We use this framework to show the basic code generation capability of each LLM."
  - [ScienceAgentBench: Toward Rigorous Assessment of Language Agents for Data-Driven Scientific Discovery](https://proceedings.iclr.cc/paper_files/paper/2025/file/f12b4df26344f3be803c06b555252efe-Paper-Conference.pdf)
- **ChartX** (measurements) — *measured_by*
  > Similarly, Plot2Code (Wu et al., 2024) and ChartX (Xia et al., 2024) also evaluate MLLMs code generation ability, especially for text and data reproducibility (Section 2.2).
  - [ChartCoder: Advancing Multimodal Large Language Model for Chart-to-Code Generation](https://aclanthology.org/2025.acl-long.363.pdf)
- **AlpacaEval 2.0** (measurements) — *measured_by*
  > To test our hypothesis, we break down the prompts in Alpaca Eval 2.0 (Li et al., 2023) into different categories. ... We select four representative tasks: two are objective tasks that can be verified: mathematical reasoning or calculation (Math) and Coding...
  - [SIMPLEMIX: Frustratingly Simple Mixing of Off- and On-policy Data in Language Model Preference Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25au/li25au.pdf)
- **Reasoning** (constructs) — *causes*
  > mixing code-generation data has been suggested to enhance a model’s reasoning and logical abilities (Dong et al., 2024). (Section 2)
  - [Massive Supervised Fine-tuning Experiments Reveal How Data, Layer, and Training Factors Shape LLM Alignment Quality](https://aclanthology.org/2025.emnlp-main.1138.pdf)
- **WebMMU** (measurements) — *measured_by*
  > We present WebMMU, a multilingual benchmark that evaluates three core web tasks: (1) website visual question answering, (2) code editing involving HTML/CSS/JavaScript, and (3) mockup-to-code generation.
  - [WebMMU: A Benchmark for Multimodal Multilingual Website Understanding and Code Generation](https://aclanthology.org/2025.emnlp-main.1276.pdf)

### → Code generation
- **Reasoning** (constructs) — *causes*
  > A host of prompting techniques have shown how to leverage the In-Context Learning (ICL) abilities of LLMs to enhance a model's reasoning skills, and, as a result, the quality of generated programs.
  - [Generating Code World Models with Large Language Models Guided by Monte Carlo Tree Search](https://proceedings.neurips.cc/paper_files/paper/2024/file/6f479ea488e0908ac8b1b37b27fd134c-Paper-Conference.pdf)
- **Instruction following** (behaviors tasks) — *causes*
  > math and code problems are formatted as instructions, enhancing instruction following capabilities enables LLMs to better address these tasks. (Section 4)
  - [Data Mixing Optimization for Supervised Fine-Tuning of Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25bh/li25bh.pdf)
- **Self-correction** (behaviors tasks) — *causes*
  > Self-Debugging (SD) is both complementary to and beneficial for M1... Applying SD on TAs can provide S-score benefits... M1 achieves consistent improvements.
  - [Can LLMs Learn by Teaching for Better Reasoning? A Preliminary Study](https://proceedings.neurips.cc/paper_files/paper/2024/file/8340b085045cf13f1f0b6c2c4cc0a89c-Paper-Conference.pdf)
- **Planning** (constructs) — *causes*
  > The AEP examples contain planning steps, that outline a possible decomposition of the task (lines 7, 14, 17) to encourage step-by-step thinking and to improve generation quality. (Section 2.3.1)
  - [ASPERA: A Simulated Environment to Evaluate Planning for Complex Action Execution](https://aclanthology.org/2025.acl-long.1234.pdf)
- **Semantic parsing** (behaviors tasks) — *causes*
  > we integrate structure-based prompt parsing and multi-stage verification to ensure the quality of resulting solutions and instructions prior to actual code implementation, thereby improving overall performance.
  - [AutoML-Agent: A Multi-Agent LLM Framework for Full-Pipeline AutoML](https://raw.githubusercontent.com/mlresearch/v267/main/assets/trirat25a/trirat25a.pdf)
- **GUI understanding** (constructs) — *causes*
  > To further demonstrate how GUI understanding capability enhances mainstream GUI-related tasks, including generating operational code (Cheng et al., 2024) and providing chat assistance (Hong et al., 2024), we conduct experiments as follows... (Section 4.2)
  - [GUI-World: A Video Benchmark and Dataset for Multimodal GUI-oriented Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/3926df1a00c9abf056df7bcf253d026a-Paper-Conference.pdf)
- **Expressive power** (constructs) — *causes*
  > the limited expressive capacity of LoRA, stemming from the low-rank constraint, has been recognized as a bottleneck, particularly in rigorous tasks like code generation and mathematical reasoning.
  - [RaSA: Rank-Sharing Low-Rank Adaptation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b4fd162d3e2d015233486a2e313828a7-Paper-Conference.pdf)
- **Synthetic data generation** (behaviors tasks) — *causes*
  > synthetic data plays a crucial role in boosting the performance of LLMs across a variety of downstream tasks, including... code generation... (Section 2.2)
  - [Towards a Theoretical Understanding of Synthetic Data in LLM Post-Training: A Reverse-Bottleneck Perspective](https://proceedings.iclr.cc/paper_files/paper/2025/file/1e0bfe8bbaa0e70809f0a8ccd9c2ff3e-Paper-Conference.pdf)

### Associated with
- **Coding ability** (constructs)
  > For code generation, Luo et al. (2023b) adapt the evol-instruct method to the coding domain, resulting in the WIZARDCODER model, which demonstrates superior coding abilities compared to generally trained LLMs. (Section 1)
  - [Delta-CoMe: Training-Free Delta-Compression with Mixed-Precision for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/37664246a1e07e212ddacea6e5a523f2-Paper-Conference.pdf)
- **Chart generation** (behaviors tasks)
  > the LLM is prompted to provide fine-grained feedback considering the downstream application, i.e., chart generation via code generation.
  - [C2: Scalable Auto-Feedback forLLM-based Chart Generation](https://aclanthology.org/2025.naacl-long.232.pdf)
- **Tool use** (behaviors tasks)
  > The actor then generates revised actions, which could include a combination of tool usage through programming language (code generation) along with natural language explanations of how the tools are employed. (Section 4.1).
  - [AvaTaR: Optimizing LLM Agents for Tool Usage via Contrastive Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/2db8ce969b000fe0b3fb172490c33ce8-Paper-Conference.pdf)
- **Language modeling** (behaviors tasks)
  > When it comes to some tasks, especially code generation as in the pile github task, the bits per byte metric goes down by more than 60% during test-time training. (Section 1.1)
  - [Test-Time Training on Nearest Neighbors for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/f02f1185b97518ab5bd7ebde466992d3-Paper-Conference.pdf)
- **Data transformation** (behaviors tasks)
  > Beyond grid puzzles, PBE is a general paradigm for structured reasoning and data transformation tasks
  - [HYSYNTH: Context-Free LLM Approximation for Guiding Program Synthesis](https://proceedings.neurips.cc/paper_files/paper/2024/file/1c9c85bae6161d52182d0fe2f3640512-Paper-Conference.pdf)
- **Symbolic regression** (behaviors tasks)
  > We formulate symbolic regression (SR) as a program synthesis [6] problem. (Section 2)
  - [Symbolic Regression with a Learned Concept Library](https://proceedings.neurips.cc/paper_files/paper/2024/file/4ec3ddc465c6d650c9c419fb91f1c00a-Paper-Conference.pdf)
- **Code infilling** (behaviors tasks)
  > “The local file denotes the code file where the reference code is in. This setting simulates the scenario where developers infill code in the middle of a file.”
  - [EvoCodeBench: An Evolving Code Generation Benchmark with Domain-Specific Evaluations](https://proceedings.neurips.cc/paper_files/paper/2024/file/6a059625a6027aca18302803743abaa2-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Coding** (behaviors tasks)
  > Coding: The ability to write, synthesize, document, debug, and review code across various programming languages. (Section 2.1)
  - [Law of the Weakest Link: Cross Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/63ea6a7d01a34a2c7334dcf1a2c3b03d-Paper-Conference.pdf)
- **Inductive reasoning** (constructs)
  > We represent functions f as Python code, meaning that induction synthesizes programs (Section 1).
  - [Combining Induction and Transduction for Abstract Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/35ee921eb17e9b4c3e73b6e2ae0d55ba-Paper-Conference.pdf)
- **State tracking** (behaviors tasks)
  > In recurrent models, Gated DeltaNet shows consistent advantages, especially in ... Code tasks, demonstrating its superior capabilities in ... state tracking, respectively.
  - [Gated Delta Networks: Improving Mamba2 with Delta Rule](https://proceedings.iclr.cc/paper_files/paper/2025/file/4904fad153f6434a7bcf04465d4be2cc-Paper-Conference.pdf)
- **Joint prediction** (behaviors tasks)
  > "joint estimation via LLM code generation"
  - [Real2Code: Reconstruct Articulated Objects via Code Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/028fcbcf85435d39a40c4d61b42c99a4-Paper-Conference.pdf)
- **Self-improvement** (constructs)
  > Zelikman et al. (2023) applied recursive self-improvement to code generation, where the target of improvement was the optimizer itself.
  - [Gödel Agent: A Self-Referential Agent Framework for Recursively Self-Improvement](https://aclanthology.org/2025.acl-long.1354.pdf)
- **Long-context understanding** (constructs)
  > The research community increasingly recognizes long-context modeling as a crucial capability for next-generation large language models, driven by diverse real-world applications ranging from... repository-level code generation (Zhang et al., 2023a; Zhang et al.)... (Introduction).
  - [Native Sparse Attention: Hardware-Aligned and Natively Trainable Sparse Attention](https://aclanthology.org/2025.acl-long.1126.pdf)
- **Algorithmic reasoning** (constructs)
  > However, complex programming tasks requiring multi-step algorithmic reasoning—such as implementing dynamic programming solutions or optimizing parallel computation patterns—remain challenging (Section 1)
  - [Reasoning Through Execution: Unifying Process and Outcome Rewards for Code Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yu25f/yu25f.pdf)
- **Long-form text generation** (behaviors tasks)
  > In contrast, long-response tasks, such as essay writing and code generation, generate a substantial number of output tokens during the decode phase, requiring sustained attention over growing sequences of self-generated tokens. (Section 1)
  - [Dialogue Without Limits: Constant-Sized KV Caches for Extended Response in LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ghadia25a/ghadia25a.pdf)
- **Robustness** (constructs)
  > We... demonstrate robustness by showing retention of code generation and general problem-solving abilities post adaptation. (Section 1)
  - [NextCoder: Robust Adaptation of Code LMs to Diverse Code Edits](https://raw.githubusercontent.com/mlresearch/v267/main/assets/aggarwal25b/aggarwal25b.pdf)
- **Conjecture generation** (behaviors tasks)
  > Conjecture generation is a crucial component in current evolutionary approaches to mathematical discovery... The basic idea is that because computer code is more interpretable than raw ML predictions, one can use an LLM to generate (human-interpretable) code that solves a mathematical task. This is often known as program synthesis. (Section 5).
  - [Machine Learning meets Algebraic Combinatorics: A Suite of Datasets Capturing Research-level Conjecturing Ability in Pure Mathematics](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chau25a/chau25a.pdf)
- **Code debugging** (behaviors tasks)
  > we model self-repair as consisting of four stages: code generation, code execution, feedback generation, and code repair.
  - [Is Self-Repair a Silver Bullet for Code Generation?](https://proceedings.iclr.cc/paper_files/paper/2024/file/9ddc141bdbf9d1db510cefff56c586ad-Paper-Conference.pdf)
- **Mathematical reasoning** (constructs)
  > mathematical reasoning with code (Section 4.1), where LMs must use reasoning and coding to answer mathematical questions. (Section 4)
  - [Learning Goal-Conditioned Representations for Language Reward Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d46f127a80dc58cbc0732a717285c43a-Paper-Conference.pdf)
- **Task decomposition** (behaviors tasks)
  > RL-GPT decomposes the task into “find a tree" and “cut a log", solving the former with code generation and the latter with RL.
  - [RL-GPT: Integrating Reinforcement Learning and Code-as-policy](https://proceedings.neurips.cc/paper_files/paper/2024/file/31f119089f702e48ecfd138c1bc82c4a-Paper-Conference.pdf)
- **Logical consistency** (constructs)
  > By iterative preference alignment, the code generator learns to improve the logic consistency with the domain knowledge. (Abstract)
  - [Learning to Solve Domain-Specific Calculation Problems with Knowledge-Intensive Programs Generator](https://aclanthology.org/2025.naacl-long.245.pdf)
- **Chain of thought** (behaviors tasks)
  > training LLMs to generate code first and then output the CoT to explain reasoning steps for code generation is more effective. (Abstract)
  - [Revisiting Chain-of-Thought in Code Generation: Do Language Models Need to Learn Reasoning before Coding?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25ah/liu25ah.pdf)
- **Utility preservation** (constructs)
  > As a foundation model, f ′ is expected to retain abilities such as text and code generation, question answering, instruction-following, and basic mathematical reasoning.
  - [Tool Unlearning for Tool-Augmented LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cheng25a/cheng25a.pdf)
- **Visual editing** (behaviors tasks)
  > simple visual editing actions generated as Python code from multimodal LLMs (Section 1. Introduction)
  - [ReFocus: Visual Editing as a Chain of Thought for Structured Image Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/fu25d/fu25d.pdf)
- **Symbolic reasoning** (constructs)
  > “symbolic computing via code generation is adept at handling rigorous operations”
  - [CodeSteer: Symbolic-Augmented Language Models via Code/Text Guidance](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25x/chen25x.pdf)
- **Plan generation** (behaviors tasks)
  > In the second step, a complete code is generated based on the outlined plan by Agent B. (Section 4.1.1)
  - [Code-Generated Graph Representations Using Multiple LLM Agents for Material Properties Prediction](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25an/huang25an.pdf)
