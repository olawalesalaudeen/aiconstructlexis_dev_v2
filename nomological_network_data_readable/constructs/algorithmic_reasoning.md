# Algorithmic reasoning
**Type:** Construct  
**Referenced in:** 24 papers  
**Also known as:** Algorithmic capability, Algorithmic processing, Algorithmic comprehension  

## State of the Field

**Definition agreement:** Complementary. Most papers define algorithmic reasoning as a model's ability or latent capacity to use generalizable, step-by-step procedures or formal rules to solve problems, often contrasting this with memorization or pattern matching. A few papers foreground different facets of that same capacity, such as devising algorithms, implementing structured computations, or understanding and correcting high-level program logic, so the definitions differ in scope and emphasis but do not contradict each other.

**Space of definitions.** Across the surveyed work, the dominant framing treats this construct as a capacity to infer, devise, follow, or apply multi-step, generalizable procedures to solve problems, often programming problems stated in natural language. Several definitions make the same contrast explicitly: the construct is about structured or step-by-step computation rather than memorized instances, pattern matching, or memorization. A smaller line of work broadens the scope to latent structured computations across tasks such as arithmetic, recall, balancing, or sequence generation, while other papers use narrower formulations tied to graph procedures, competitive-programming tasks, or detecting and correcting deeper algorithmic design issues in code.

**Space of facets.** Papers organize the construct by both task family and role in the solution process. It appears in graph problems such as reachability and maximum sum path, in word sorting and multi-step arithmetic, in competitive-programming and code-generation tasks, and in debugging deeper algorithmic errors; one paper also treats arithmetic, recall, balancing, and sequence generation as examples of the same broader capability. Nearby labels, algorithmic capability, algorithmic processing, and algorithmic comprehension, are used for closely related notions, and several papers contrast the high-level procedural component with low-level coding or with memorization and pattern matching. It is also placed alongside graph reasoning and mathematical reasoning, and one paper explicitly describes it as tied to problem-solving ability.

**Space of measurement.** Papers link the construct to 5 measurement instruments and 3 behavioral indicators overall. The named instruments are BIG-Bench Hard, CodeContests, HumanEval, MBPP, and MR-Ben, and the direct task-level operationalizations in the evidence include Word Sorting, Multi-step Arithmetic, reachability, maximum sum path, and simple integer addition. Several of these are explicitly presented as benchmarks, including the competitive-programming benchmark CodeContests and the meta-reasoning benchmark MR-Ben. These operationalizations mostly follow the prevailing procedural definition by testing stepwise procedure use, though some focus narrowly on arithmetic while others target code-generation or competitive-programming tasks.

**Links.** No correlation link is reported. One paper claims a causal relationship from inductive bias to algorithmic reasoning, pointing to a transformer-specific inductive bias in embedding-only training, and one paper claims a causal relationship from chain of thought to algorithmic reasoning, stating that CoT helps mainly on problems requiring mathematical, logical, or algorithmic reasoning. Separate papers report that algorithmic reasoning is related to graph reasoning, problem-solving ability, mathematical reasoning, and code generation.

## Sources

**[DyVal: Dynamic Evaluation of Large Language Models for Reasoning Tasks](https://proceedings.iclr.cc/paper_files/paper/2024/file/4ea4a1ea4d9ff273688c8e92bd087112-Paper-Conference.pdf)**
> The ability to infer and apply multi-step algorithms needed to solve programming problems from natural-language specifications.

**[Algorithmic Capabilities of Random Transformers](https://proceedings.neurips.cc/paper_files/paper/2024/file/bccdd196d798a51a4961989984a9ed4a-Paper-Conference.pdf) (as "Algorithmic capability")**
> The latent capacity of a transformer to implement structured computations such as arithmetic, recall, balancing, or sequence generation across different tasks.

**[Differentiation and Specialization of Attention Heads via the Refined Local Learning Coefficient](https://proceedings.iclr.cc/paper_files/paper/2025/file/fad7c708dda11f3e72cc1629bb130379-Paper-Conference.pdf) (as "Algorithmic processing")**
> The model's ability to apply simple, generalizable rules or procedures to solve tasks, as opposed to relying on memorized instances.

**[Arithmetic Without Algorithms: Language Models Solve Math with a Bag of Heuristics](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c5f30296296d2ae402ebbd09aaa9c12-Paper-Conference.pdf) (as "Algorithmic comprehension")**
> The ability to learn and apply robust, generalizable, step-by-step procedures to solve problems, as opposed to relying on pattern matching or memorization.

## Relationships

### Algorithmic reasoning →
- **BIG-Bench Hard** (measurements) — *measured_by*
  > algorithmic reasoning [BBH, 55] (Introduction).
  - [Many-Shot In-Context Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/8cb564df771e9eacbfe9d72bd46a24a9-Paper-Conference.pdf)
- **CodeContests** (measurements) — *measured_by*
  > complex algorithmic reasoning tasks, such as those found in competitive programming benchmarks like CodeContests
  - [What Makes Large Language Models Reason in (Multi-Turn) Code Generation?](https://proceedings.iclr.cc/paper_files/paper/2025/file/63fef0802863f47775c3563e18cbba17-Paper-Conference.pdf)
- **MBPP** (measurements) — *measured_by*
  > Our experiments demonstrate that RaLU significantly outperforms existing baselines in mathematical reasoning (GSM8K, MATH) and algorithmic reasoning (HumanEval+, MBPP+), underscoring its potential to advance LLM reasoning and programming by offering enhanced accuracy and interpretability. (Abstract)
  - [Reasoning-as-Logic-Units: Scaling Test-Time Reasoning in Large Language Models Through Logic Unit Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25df/li25df.pdf)
- **HumanEval+** (measurements) — *measured_by*
  > Our experiments demonstrate that RaLU significantly outperforms existing baselines in mathematical reasoning (GSM8K, MATH) and algorithmic reasoning (HumanEval+, MBPP+), underscoring its potential to advance LLM reasoning and programming by offering enhanced accuracy and interpretability. (Abstract)
  - [Reasoning-as-Logic-Units: Scaling Test-Time Reasoning in Large Language Models Through Logic Unit Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25df/li25df.pdf)

### → Algorithmic reasoning
- **Chain of thought** (behaviors tasks) — *causes*
  > Finding 1: CoT only helps substantially on problems requiring mathematical, logical, or algorithmic reasoning. (Section 1)
  - [To CoT or not to CoT? Chain-of-thought helps mainly on math and symbolic reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/ead542f13a38179d1b55b88610f959a1-Paper-Conference.pdf)

### Associated with
- **Graph reasoning** (constructs)
  > In this work, we focus on classes of transformers solving algorithmic reasoning problems on graphs. (Section 1)
  - [Understanding Transformer Reasoning Capabilities via Graph Algorithms](https://proceedings.neurips.cc/paper_files/paper/2024/file/8f395480c04ac6dfb2c2326a639df88e-Paper-Conference.pdf)
- **Problem-solving ability** (constructs)
  > Algorithmic reasoning is a fundamental cognitive ability that plays a pivotal role in problem-solving and decision-making processes. (Abstract)
  - [PUZZLES: A Benchmark for Neural Algorithmic Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/e5d1eaadeed651ba1021c09149db4b92-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Mathematical reasoning** (constructs)
  > Arithmetic reasoning provides a lens for this investigation, as it can be solved using various methods: learning known algorithms, developing novel approaches, or by memorizing vast quantities of input-output pairs. (Section 1)
  - [Arithmetic Without Algorithms: Language Models Solve Math with a Bag of Heuristics](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c5f30296296d2ae402ebbd09aaa9c12-Paper-Conference.pdf)
- **Code generation** (behaviors tasks)
  > However, complex programming tasks requiring multi-step algorithmic reasoning—such as implementing dynamic programming solutions or optimizing parallel computation patterns—remain challenging (Section 1)
  - [Reasoning Through Execution: Unifying Process and Outcome Rewards for Code Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yu25f/yu25f.pdf)
- **Integer addition** (behaviors tasks)
  > “To study algorithmic reasoning in a sterile laboratory setting, the academic community focuses on simple arithmetic test problems like addition.”
  - [Transformers Can Do Arithmetic with the Right Embeddings](https://proceedings.neurips.cc/paper_files/paper/2024/file/c35986bc1ee29b31c1011481b77fe540-Paper-Conference.pdf)
