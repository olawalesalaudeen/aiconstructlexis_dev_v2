# Reasoning consistency
**Type:** Construct  
**Referenced in:** 7 papers  

## State of the Field

**Definition agreement:** Complementary. Most papers define reasoning consistency as a property of a model's reasoning staying aligned or stable when something varies, such as the problem, modality or source, language, or inference budget. They differ in which aspect they foreground, with some emphasizing coherence of reasoning patterns or chains and another emphasizing stable and correct outcomes, but these are compatible facets of the same phenomenon rather than different constructs.

**Space of definitions.** Across papers, reasoning consistency does not have a single settled meaning. A recurring framing treats it as coherence or alignment in reasoning patterns or chains, either as uniform reasoning across diverse problems, sometimes tied to reducing cognitive load through structural harmony, or as consistency between reasoning derived from different modalities or sources. Other papers define it as correct and stable reasoning outcomes across languages, or as alignment between an intermediate reasoning attempt and the model's eventual maximum-budget outcome, so the main disagreement is over what is being held consistent.

**Space of facets.** The papers use the term along different comparison axes under the same name. They discuss consistency across problems, between textual and visual reasoning chains, across languages as overlap in reasoning capabilities, and between an attempt after t steps and the eventual attempt at the maximum reasoning budget.

**Space of measurement.** Papers do not link this construct to any measurement instrument or behavioral indicator. Instead, operationalization appears inside paper-specific procedures: one line harmonizes demonstrations to create a more coherent set of examples, another prompts an LLM to evaluate consistency between textual and visual reasoning chains, multilingual work describes it through overlap in reasoning capabilities and more consistent results across languages, and test-time scaling work compares z_t after t steps with z_T at the maximum reasoning budget when calibrating termination.

## Sources

**[Multilingual Reasoning via Self-training](https://aclanthology.org/2025.naacl-long.577.pdf)**
> The degree to which a model produces coherent and uniform reasoning patterns across diverse problems, reducing cognitive load through structural harmony.
