# Error localization
**Type:** Behavior  
**Referenced in:** 11 papers  
**Also known as:** Invalid node identification, Process judging, First error step identification, Mistake location  

## State of the Field

**Space of definitions.** Across the surveyed work, the dominant framing is fine-grained identification of where an error occurs in an already given solution, reasoning chain, or description. Most papers define success as pinpointing the exact wrong step, line, component, or contiguous text span, often the first place where the reasoning becomes wrong; several formulations also require the model or tutor to explain the error once the location is found. A smaller line of work applies the same idea to invalid literature-grounded chains by identifying the breakpoint paper nodes where coherence breaks down.

**Variants.** Papers study this behavior under names such as process judging, first error step identification, invalid node identification, and mistake location. The most common settings are mathematical reasoning, including wrong step-by-step solutions and handwritten math where the model must identify the specific line with the error; other settings localize chemical errors as erroneous spans in molecular descriptions, locate incorrect papers in invalid reasoning chains, or ask a tutor response to point to the mistake's location and outline what the error is.

**Space of elicitation and scores.** Papers link error localization to 2 measurement instruments, MOLERR2FIX and MR-GSM8K. MOLERR2FIX operationalizes it as one stage in a four-stage detection, localization, explanation, and revision pipeline for flawed molecular descriptions, while MR-GSM8K scores the accuracy of identifying the first-error-step as a sub-metric. Outside instrument links, one paper also claims causal links in both directions between pairwise comparison and error localization, with evidence that disagreements between candidate solutions signal potential error locations.

**What it is taken as evidence of.** The linked papers connect error localization to 3 constructs rather than converging on one. One paper reports that it is weakly correlated with problem-solving ability, another claims a causal relationship from error localization to self-correction ability, and another relates it to task generalization by including process judging among the tasks examined.

## Sources

**[Recursive Introspection: Teaching Language Model Agents How to Self-Improve](https://proceedings.neurips.cc/paper_files/paper/2024/file/639d992f819c2b40387d4d5170b8ffd7-Paper-Conference.pdf)**
> The observable behavior of a model identifying specific incorrect steps or components within a previously generated solution.

**[HypER: Literature-grounded Hypothesis Generation and Distillation with Provenance](https://aclanthology.org/2025.emnlp-main.1292.pdf) (as "Invalid node identification")**
> The task of identifying the specific papers within an invalid reasoning chain where the logical progression or coherence breaks down.

**[Is Your Model Really A Good Math Reasoner? Evaluating Mathematical Reasoning with Checklist](https://proceedings.iclr.cc/paper_files/paper/2025/file/54d2d38a56a74387d5916ee40e462295-Paper-Conference.pdf) (as "Process judging")**
> The observable behavior of identifying the specific step in a provided incorrect solution where the first error occurs.

**[MR-GSM8K: A Meta-Reasoning Benchmark for Large Language Model Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/fc0b0e6ac2da44d5839b13f90625b357-Paper-Conference.pdf) (as "First error step identification")**
> The observable sub-task of identifying the specific initial step in a flawed reasoning process where the logic first deviates from a correct path.

**[Unifying AI Tutor Evaluation: An Evaluation Taxonomy for Pedagogical Ability Assessment of LLM-Powered AI Tutors](https://aclanthology.org/2025.naacl-long.57.pdf) (as "Mistake location")**
> The observable behavior of a tutor specifying where in the student's reasoning or calculation the error occurred and explaining the nature of the mistake.

## Relationships

### Error localization →
- **Self-correction ability** (constructs) — *causes*
  > We propose cross-model collaborative DPO, which innovatively leverage SOTA LLMs to locate and correct the specific error thoughts in the reasoning process of smaller student LLMs, thus advancing their self-correction ability and breaking their thought bottleneck. (Section 1)
  - [SuperCorrect: Advancing Small LLM Reasoning with Thought Template Distillation and Self-Correction](https://proceedings.iclr.cc/paper_files/paper/2025/file/0967d7c8b171dd81b77c43067c02bebf-Paper-Conference.pdf)
- **Problem-solving ability** (constructs) — *correlates*
  > A chi-squared test for independence confirms that error localization and problem-solving accuracy are weakly correlated (p > 0.01; ϕ < 0.2) across models and prompts (Section 4.2)
  - [LLMs cannot spot math errors, even when allowed to peek into the solution](https://aclanthology.org/2025.emnlp-main.553.pdf)
- **MOLERR2FIX** (measurements) — *measured_by*
  > MOLERR2FIX introduces a structured chain-like, four-stage Error-to-Fix evaluation pipeline—detection, localization, explanation, and revision—offering a fine-grained and progressive framework for assessing LLMs in chemical reasoning. (Section 1)
  - [MolErr2Fix: Benchmarking LLM Trustworthiness in Chemistry via Modular Error Detection, Localization, Explanation, and Correction](https://aclanthology.org/2025.emnlp-main.977.pdf)

### Associated with
- **Pairwise comparison** (behaviors tasks)
  > "Disagreements between candidate solutions strongly signal the potential locations of their errors."
  - [Sample, Scrutinize and Scale: Effective Inference-Time Search by Scaling Verification](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhao25a/zhao25a.pdf)
