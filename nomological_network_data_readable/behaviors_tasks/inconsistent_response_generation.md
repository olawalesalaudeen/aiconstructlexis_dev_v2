# Inconsistent response generation
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Contradictory response generation, Logical contradiction  

## State of the Field

**Space of definitions.** Across the available definitions, the shared framing is output-level inconsistency about the same case. Papers describe it as giving different answers to the same problem across repeated attempts under identical conditions, producing logically inconsistent outputs for semantically opposite instructions about one user-item pair, or including mutually inconsistent statements within a single report. One study further notes that, in some number-puzzle cases, "all five responses were distinct and incorrect" (Investigating the interaction of linguistic and mathematical reasoning in language models using multilingual number puzzles).

**Variants.** The papers study this behavior in several settings and under several names. One line uses inconsistent response generation for repeated-trial variation on multilingual number puzzles, another uses contradictory response generation for paired like or dislike judgments in recommender prompts, and another treats internal contradiction or logical contradiction as contradictions inside medical reports, for example combining "clear lungs" with "left lung infiltrate".

**Space of elicitation and scores.** No paper links this behavior to a named measurement instrument. The available operationalizations are embedded in the task examples themselves: comparing answers across five trials of the same problem, checking responses to semantically opposite prompts about the same user-item pair, or identifying contradictory statements within one report.

**What it is taken as evidence of.** No paper links this behavior to a named construct.

## Sources

**[Investigating the interaction of linguistic and mathematical reasoning in language models using multilingual number puzzles](https://aclanthology.org/2025.emnlp-main.1438.pdf)**
> The phenomenon of producing different, often incorrect, answers across multiple attempts at solving the same problem under identical conditions.

**[Logit Space Constrained Fine-Tuning for Mitigating Hallucinations in LLM-Based Recommender Systems](https://aclanthology.org/2025.emnlp-main.1491.pdf) (as "Contradictory response generation")**
> Producing logically inconsistent outputs (e.g., both 'No' to liking and 'No' to disliking) for semantically opposite instructions about the same user-item pair.

**[ReEvalMed: Rethinking Medical Report Evaluation by Aligning Metrics with Real-World Clinical Judgment](https://aclanthology.org/2025.emnlp-main.598.pdf) (as "Logical contradiction")**
> Including mutually inconsistent statements within the same report, such as asserting both the presence and absence of a finding.
