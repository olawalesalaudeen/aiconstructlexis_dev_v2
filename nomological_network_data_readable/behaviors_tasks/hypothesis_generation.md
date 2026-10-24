# Hypothesis generation
**Type:** Behavior  
**Referenced in:** 21 papers  
**Also known as:** Scientific hypothesis generation, Zero-shot hypothesis generation, Hypothesis formulation  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is to elicit one or more candidate hypotheses, rules, or explanations from observations, evidence, or task context, usually in natural language. Much of this usage appears in inductive reasoning, where models are prompted to produce multiple abstract hypotheses, a set of valid hypotheses, or free-form and constrained candidate rules that explain input-output examples. A smaller line of work uses the same label for inferring another agent's latent strategy from past observations, generating testable scientific hypotheses from evidence, constraints, anomalies, or data patterns, proposing out-of-domain explanations or predictions under incomplete information, proposing potential actions before execution, or making reasonable hypotheses in an optimization loop. Where success is described, hypotheses are those that best explain the observations, are accurate or valid, or are testable.

**Variants.** Papers study several variants and neighboring formulations. Common named variants include scientific hypothesis generation and hypothesis formulation, which center on literature-grounded or otherwise testable hypotheses, and zero-shot hypothesis generation, which is explicitly defined as generating hypotheses without in-context demonstrations and relying on model prior. Other settings include natural-language hypotheses paired with Python implementations, chemistry and social-science tasks, multi-agent settings that infer other agents' strategies, and causal-modelling settings where the generated hypothesis is a causal graph. Several papers also report that hypothesis generation is related to iterative refinement, described as proposing, selecting, and refining textual rules with feedback, and one paper claims a causal relationship from hypothesis generation to causal discovery.

**Space of elicitation and scores.** Only one measurement instrument is linked to it, DiscoveryBench. In that benchmark, systems are asked to generate Python code to analyze a described data schema and scientific query, and then generate scientific hypotheses. Outside that benchmarked use, papers often elicit the behavior directly with prompts that ask for multiple abstract hypotheses, a set of valid hypotheses, hypotheses about another agent's strategy, or a natural-language hypothesis followed by Python code.

**What it is taken as evidence of.** Papers link it to three constructs, and they do not use one shared construct framing. Commonsense reasoning and theory of mind are recorded as causes of hypothesis generation, with papers saying an LLM leverages commonsense reasoning to generate hypotheses and that a Theory of Mind module generates hypotheses about latent variables in natural language. Inductive reasoning is recorded as related rather than causal, in work that frames automatic inductive reasoning as prompting on observations, sampling multiple hypotheses about the rule, and selecting the one that best explains the observations.

## Sources

**[Hypothetical Minds: Scaffolding Theory of Mind for Multi-Agent Tasks with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/12f483f624b378f9f3058d8ecd3c7ff5-Paper-Conference.pdf)**
> The observable act of producing natural language statements that propose explanations for another agent's latent strategies or goals.

**[Position: LLMs Need a Bayesian Meta-Reasoning Framework for More Robust and Generalizable Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yan25g/yan25g.pdf) (as "Scientific hypothesis generation")**
> Generating candidate scientific hypotheses from evidence, constraints, and anomalies.

**[On the Role of Model Prior in Real-World Inductive Reasoning](https://aclanthology.org/2025.emnlp-main.534.pdf) (as "Zero-shot hypothesis generation")**
> The observable behavior of generating hypotheses without any in-context demonstrations, relying solely on the model's internal knowledge.

**[From Automation to Autonomy: A Survey on Large Language Models in Scientific Discovery](https://aclanthology.org/2025.emnlp-main.895.pdf) (as "Hypothesis formulation")**
> Designing testable scientific hypotheses based on identified research ideas or data patterns.

## Relationships

### Hypothesis generation →
- **DiscoveryBench** (measurements) — *measured_by*
  > In DiscoveryBench, given the description of input data schema and a scientific query, a method is supposed to first generate Python code to analyze the data based on the query and then generate scientific hypotheses. (Section 4.1)
  - [AutoSDT: Scaling Data-Driven Discovery Tasks Toward Open Co-Scientists](https://aclanthology.org/2025.emnlp-main.1546.pdf)

### → Hypothesis generation
- **Theory of mind** (constructs) — *causes*
  > The ToM module generates hypotheses about these latent variables in natural language. (Section 3.2)
  - [Hypothetical Minds: Scaffolding Theory of Mind for Multi-Agent Tasks with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/12f483f624b378f9f3058d8ecd3c7ff5-Paper-Conference.pdf)
- **Commonsense reasoning** (constructs) — *causes*
  > An LLM leverages common-sense reasoning to generate hypotheses, while a symbolic tool ensures their logical consistency through systematic validation. (Section 3.1)
  - [NeSyC: A Neuro-symbolic Continual Learner For Complex Embodied Tasks in Open Domains](https://proceedings.iclr.cc/paper_files/paper/2025/file/d569e4655e2835e3d38310b67c5ad646-Paper-Conference.pdf)

### Associated with
- **Iterative refinement** (behaviors tasks)
  > Iterative hypothesis refinement employs a three-step process: proposing, selecting, and refining hypotheses in the form of textual rules. (Abstract).
  - [Phenomenal Yet Puzzling: Testing Inductive Reasoning Capabilities of Language Models with Hypothesis Refinement](https://proceedings.iclr.cc/paper_files/paper/2024/file/05d2175de7ee637588d1b5ced8b15b32-Paper-Conference.pdf)
- **Inductive reasoning** (constructs)
  > a new paradigm in automatic inductive reasoning has emerged: feeding observations (often referred to as train examples) as prompts into the LLM, sampling multiple hypotheses about the rule, and selecting the one that best explains the observations
  - [Generating Diverse Hypotheses for Inductive Reasoning](https://aclanthology.org/2025.naacl-long.429.pdf)
- **Causal discovery** (behaviors tasks)
  > In hypothesis generation, we produce a causal graph by use of an LLM.
  - [Causal Modelling Agents: Causal Graph Discovery through Synergising Metadata- and Data-driven Reasoning](https://proceedings.iclr.cc/paper_files/paper/2024/file/fe90657b12193c7b52a3418bdc351807-Paper-Conference.pdf)
