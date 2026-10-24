# Error analysis
**Type:** Behavior  
**Referenced in:** 8 papers  
**Also known as:** Granular error diagnosis  

## State of the Field

**Space of definitions.** Across the surveyed work, the dominant usage treats error analysis as examining failures by comparing expected and actual outputs or by identifying flaws in intermediate reasoning. In code-focused work, this includes analyzing failed test cases, comparing execution results and logic differences between two pieces of code, and using those discrepancies to identify bugs or inefficiencies; in reasoning tasks, it includes step-level reports of incorrect operations, rule violations, or steps that do not move toward the target solution. A smaller line of work uses the term for systematically uncovering and categorizing learners' missteps, such as syntactic or pronunciation errors, and for generating corrective guidance, while another paper frames it as a qualitative categorization of failure modes such as hallucination, misunderstanding, and locating errors.

**Variants.** Papers study this behavior in several settings, including code generation, English education, table reasoning, and stepwise problem solving. The main variants are qualitative failure-mode categorization, step-level reasoning diagnosis, and a more specific form called granular error diagnosis, which examines reasoning errors across the dimensions of Simplicity, Soundness, and Sensitivity. Another variant focuses on writing and speaking errors and includes outputs such as revised sentences, clarifications of grammatical rules, or remediation exercises.

**Space of elicitation and scores.** Papers link it to only one measurement instrument, PRMBench. That instrument is described as a benchmark with particular emphasis on granular error diagnosis, and in that usage it assesses evaluation capability across three error dimensions: Simplicity, Soundness, and Sensitivity.

**What it is taken as evidence of.** Papers do not link error analysis to any construct, so they do not explicitly specify what construct this behavior is taken to indicate.

## Sources

**[DebateCoder: Towards Collective Intelligence of LLMs via Test Case Driven LLM Debate for Code Generation](https://aclanthology.org/2025.acl-long.589.pdf)**
> Examining discrepancies between expected and actual execution results to identify bugs or inefficiencies in code, often through comparison with alternative implementations.

**[R-PRM: Reasoning-Driven Process Reward Modeling](https://aclanthology.org/2025.emnlp-main.679.pdf) (as "Granular error diagnosis")**
> Diagnosing specific kinds of reasoning errors at the step level across multiple error dimensions.

## Relationships

### Error analysis →
- **PRMBench** (measurements) — *measured_by*
  > PRMBench (Song et al., 2025) constitutes a comprehensive benchmark for evaluating PRMs, with particular emphasis on granular error diagnosis (Section 4.1).
  - [R-PRM: Reasoning-Driven Process Reward Modeling](https://aclanthology.org/2025.emnlp-main.679.pdf)
