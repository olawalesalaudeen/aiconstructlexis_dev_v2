# Inductive reasoning
**Type:** Construct  
**Referenced in:** 39 papers  
**Also known as:** Induction, Rule induction, Inductive inference, Compositional rule inference, Concept inference, Interpretable learning  

## State of the Field

**Definition agreement:** Consensus. Most papers define inductive reasoning as inferring abstract rules, principles, patterns, or functions from specific examples or limited observations and then using them to generalize or predict in new cases. A few papers give narrower task-specific operationalizations, such as transformation rules or structural pattern extrapolation, but the dominant definition is the same core ability rather than a substantively different construct.

**Space of definitions.** Across the surveyed work, the prevailing usage treats inductive reasoning as inferring general rules, patterns, mechanisms, or high-level abstractions from a small or limited set of specific observations or examples and then applying them to novel situations. Most definitions vary only in scope, for example from general principles or abstract rules to compositional rules or in-context concepts that connect data to labels, but keep the same example-to-rule-to-generalization structure. A smaller line of work makes the procedure more explicit by defining induction as first finding a function or hypothesis that explains the training data before predicting new outputs, or as synthesizing information from multiple reasoning paths into a final answer; another places it within logical inference and associates it with fast, intuitive reasoning, and one paper uses "induction" for detecting and continuing repeated subsequences in context.

**Space of facets.** Papers often place inductive reasoning inside broader reasoning taxonomies, most commonly alongside deductive and abductive reasoning, and one paper also includes analogical reasoning. Other papers organize it as rule-based reasoning, where a rule is first derived from examples and then used on new questions, as a hypothesis-centered process that samples candidate rules and selects the one that best explains the observations, or as situated rule induction that derives possible mechanisms from trajectory history and environmental interaction. Naming is not fully standardized: papers use labels such as induction, rule induction, inductive inference, concept inference, and interpretable learning for overlapping versions, and another paper narrows the construct to compositional rule inference; one paper also explicitly contrasts induction with transduction.

**Space of measurement.** Operationally, papers link this construct to 8 measurement instruments, all of them benchmark or dataset style measures, and to 4 behavioral indicators. The most frequently linked instruments are List Functions, ACRE, ARC, BABILong, and CLUTRR: the papers use them to test inferring list transformation functions, abstract causal reasoning, visual inductive reasoning, simple induction in long contexts, and inductive reasoning as one reasoning type. These operationalizations mostly follow the dominant example-to-rule framing, while the linked behavioral indicators focus on generating or refining hypotheses, synthesizing programs, or recreating repeated patterns in context.

**Links.** Several papers relate inductive reasoning to logical reasoning, treating it as one reasoning type alongside deductive and abductive inference, and in one case analogical reasoning. A few papers claim a causal relationship from inductive reasoning to generalization, describing it as enhancing generalizability or enabling hypotheses that could generalize to new instances. Separate papers also report that rule-based reasoning is related to inductive reasoning and that graph reasoning is related to inductive reasoning; other accounts connect it to composing multiple concepts, synthesizing programs, and generating or refining hypotheses, while one paper claims a causal relationship from inductive reasoning to indirect object identification. No correlational links are reported.

## Sources

**[Hypothesis Search: Inductive Reasoning with Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/a934282496e7b907f5d48d49bb4c9d7d-Paper-Conference.pdf)**
> The ability to derive underlying principles or high-level abstractions from a limited set of observations and then generalize them to novel situations.

**[BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Induction")**
> The cognitive ability to infer general principles or patterns from specific instances or facts.

**[VL-ICL Bench: The Devil in the Details of Multimodal In-Context Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/f8a2070082ad05b4deeff4ffb4312a6f-Paper-Conference.pdf) (as "Rule induction")**
> The ability to infer an underlying abstract rule, operation, or concept from a set of examples rather than being given an explicit instruction.

**[LogiDynamics: Unraveling the Dynamics of Inductive, Abductive and Deductive Logical Inferences in LLM Reasoning](https://aclanthology.org/2025.emnlp-main.1045.pdf) (as "Inductive inference")**
> A form of logical reasoning where general rules or conclusions are derived from specific instances or observations, often associated with fast, intuitive System 1 thinking.

**[Investigating the interaction of linguistic and mathematical reasoning in language models using multilingual number puzzles](https://aclanthology.org/2025.emnlp-main.1438.pdf) (as "Compositional rule inference")**
> The ability to infer underlying compositional rules from implicit patterns presented in limited data, as humans do when learning language.

**[Plausible Token Amplification for Improving Accuracy of Differentially Private In-Context Learning Based on Implicit Bayesian Inference](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yamasaki25a/yamasaki25a.pdf) (as "Concept inference")**
> The latent ability of a model to infer an unstated rule or concept that connects data to labels based on the demonstrations provided in-context.

**[Large Language Models are Interpretable Learners](https://proceedings.iclr.cc/paper_files/paper/2025/file/887932131fddf943e8fe3310b62c0147-Paper-Conference.pdf) (as "Interpretable learning")**
> The ability to extract compact, human-understandable predictive rules from labeled data and apply them consistently across examples.

## Relationships

### Inductive reasoning →
- **List Functions** (measurements) — *measured_by*
  > We conduct experiments on four inductive reasoning datasets: the Abstraction and Reasoning Corpus (ARC), the one-dimensional variant of ARC (1D-ARC), the Syntax-Guided Synthesis (SyGuS) dataset, and the List Functions dataset. (Section 1)
  - [Hypothesis Search: Inductive Reasoning with Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/a934282496e7b907f5d48d49bb4c9d7d-Paper-Conference.pdf)
- **Generalization** (constructs) — *causes*
  > The inductive reasoning process enhances generalizability by formulating general problem-solving strategies (Introduction).
  - [StrategyLLM: Large Language Models as Strategy Generators, Executors, Optimizers, and Evaluators for Problem Solving](https://proceedings.neurips.cc/paper_files/paper/2024/file/af7cc9e2366b8f8837a6ef339810277a-Paper-Conference.pdf)
- **ACRE** (measurements) — *measured_by*
  > We directly verify our analysis above using an inductive reasoning task called Abstract Causal REasoning (Chi Zhang et al. 2021, ACRE), where all LLM agents update their knowledge via ICL. (Section 5)
  - [Bias Amplification in Language Model Evolution: An Iterated Learning Perspective](https://proceedings.neurips.cc/paper_files/paper/2024/file/4418f6a54f4314202688d77956e731ce-Paper-Conference.pdf)
- **SyGuS** (measurements) — *measured_by*
  > We conduct experiments on four inductive reasoning datasets: the Abstraction and Reasoning Corpus (ARC), the one-dimensional variant of ARC (1D-ARC), the Syntax-Guided Synthesis (SyGuS) dataset, and the List Functions dataset. (Section 1)
  - [Hypothesis Search: Inductive Reasoning with Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/a934282496e7b907f5d48d49bb4c9d7d-Paper-Conference.pdf)
- **BABILong** (measurements) — *measured_by*
  > "BABILong includes a diverse set of 20 reasoning tasks, including fact chaining, simple induction, deduction, counting, and handling lists/sets"
  - [BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf)
- **EvalPlus** (measurements) — *measured_by*
  > The abundance of test cases avails utilizing MBPP+ as an inductive reasoning dataset.
  - [Generating Diverse Hypotheses for Inductive Reasoning](https://aclanthology.org/2025.naacl-long.429.pdf)
- **CLUTRR** (measurements) — *measured_by*
  > Other datasets like bAbI (Weston et al., 2015), CLUTRR (Sinha et al., 2019)... target specific reasoning types such as deductive, inductive, abductive, temporal, spatial, and mathematical reasoning.
  - [Do Large Language Models excel in Complex Logical Reasoning with Formal Language?](https://aclanthology.org/2025.emnlp-main.855.pdf)
- **CommonsenseQA** (measurements) — *measured_by*
  > “CommonsenseQA, a 5-choice multiple-choice benchmark, peaks in Inductive Reasoning”
  - [Benchmark Profiling: Mechanistic Diagnosis of LLM Benchmarks](https://aclanthology.org/2025.emnlp-main.789.pdf)
- **ARC-AGI** (measurements) — *measured_by*
  > "We verify our pipeline’s effectiveness on the ARC visual inductive reasoning benchmark"
  - [Hypothesis Search: Inductive Reasoning with Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/a934282496e7b907f5d48d49bb4c9d7d-Paper-Conference.pdf)

### Associated with
- **Logical reasoning** (constructs)
  > In this paper, we focus on four logical reasoning types: deductive, inductive, abductive, and analogical reasoning defined in (Nunes, 2012). (Section 3)
  - [TypedThinker: Diversify Large Language Model Reasoning with Typed Thinking](https://proceedings.iclr.cc/paper_files/paper/2025/file/494ad6d9b36d9a1528dbf3baeb4e8a72-Paper-Conference.pdf)
- **Iterative refinement** (behaviors tasks)
  > This work investigates LMs’ inductive reasoning capabilities through the lens of iterative hypothesis refinement (Section 1).
  - [Phenomenal Yet Puzzling: Testing Inductive Reasoning Capabilities of Language Models with Hypothesis Refinement](https://proceedings.iclr.cc/paper_files/paper/2024/file/05d2175de7ee637588d1b5ced8b15b32-Paper-Conference.pdf)
- **Code generation** (behaviors tasks)
  > We represent functions f as Python code, meaning that induction synthesizes programs (Section 1).
  - [Combining Induction and Transduction for Abstract Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/35ee921eb17e9b4c3e73b6e2ae0d55ba-Paper-Conference.pdf)
- **Compositionality** (constructs)
  > Inductive program synthesis excels at precise computations, and at composing multiple concepts (Abstract).
  - [Combining Induction and Transduction for Abstract Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/35ee921eb17e9b4c3e73b6e2ae0d55ba-Paper-Conference.pdf)
- **Rule-based reasoning** (constructs)
  > in the rule-based reasoning paradigm, inductive reasoning involves first deriving the correct rule through the observation of examples and then using the inductive rule to answer new questions (like what humans do). (Section 1)
  - [MIRAGE: Evaluating and Explaining Inductive Reasoning Process in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/b782a3462ee9d566291cff148333ea9b-Paper-Conference.pdf)
- **Hypothesis generation** (behaviors tasks)
  > a new paradigm in automatic inductive reasoning has emerged: feeding observations (often referred to as train examples) as prompts into the LLM, sampling multiple hypotheses about the rule, and selecting the one that best explains the observations
  - [Generating Diverse Hypotheses for Inductive Reasoning](https://aclanthology.org/2025.naacl-long.429.pdf)
