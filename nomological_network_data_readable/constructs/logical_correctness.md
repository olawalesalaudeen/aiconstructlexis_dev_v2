# Logical correctness
**Type:** Construct  
**Referenced in:** 4 papers  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the papers, logical correctness is treated mainly as a property of steps within a reasoning process. The clearest formulation, in MiCEval: Unveiling Multimodal Chain of Thought's Quality via Image Description and Reasoning Steps, defines it as whether a reasoning step is logically deduced from the facts and previous steps, without contradiction, and describes correctness as each step being generated from previously valid information. Another paper uses a broader framing, applying logical correctness to candidate actions, steps, or solutions and describing it in terms of logical feasibility and appropriateness within a reasoning or agentic process.

**Space of facets.** The papers keep the construct close to step-level or candidate-level evaluation rather than breaking it into named subtypes. In MiCEval, "correctness" is one of the labels collected for reasoning steps. In From Generation to Judgment: Opportunities and Challenges of LLM-as-a-judge, the related activity is described as "logical assessment" of candidate actions or steps, including settings such as API selection, tool using, and LLM routing.

**Space of measurement.** It is linked to no measurement instrument and no behavioral indicator. Even so, one paper operationalizes it by collecting labels for reasoning-step correctness, where a step is marked "Correct" if it is logically deduced from facts and previous steps. Another paper mentions LLM judges performing logical assessment in API selection, tool using, and LLM routing, but no named linked instrument is specified.

## Sources

**[MiCEval: Unveiling Multimodal Chain of Thought's Quality via Image Description and Reasoning Steps](https://aclanthology.org/2025.naacl-long.504.pdf)**
> The degree to which a reasoning step is logically deduced from the facts and previous steps without contradiction.
