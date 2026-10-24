# Reusability
**Type:** Construct  
**Referenced in:** 3 papers  
**Also known as:** Circuit reuse  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the papers, the only framing present treats reusability as cross-task reuse of model circuitry. One definition describes it as the extent to which a modular circuit appears across multiple language tasks, enabling transfer of functional understanding without re-interpretation, while the other describes a model repurposing learned subcircuits, including attention heads and algorithmic steps, across tasks that share underlying computational demands. The common emphasis is on recurrence across tasks and on transfer or generalization of insights about the same circuitry.

**Space of facets.** The available usage varies mainly in granularity rather than in concept. One paper states the construct at the level of a modular circuit, and another at the level of learned subcircuits comprising attention heads and algorithmic steps; in practice, both are used for the same broad pattern of shared circuitry across tasks. The labels "Reusability" and "Circuit reuse" therefore function as near-synonyms here, and the accompanying examples focus on a shared process and shared "in-circuit" attention heads between tasks.

**Space of measurement.** No measurement instrument and no behavioral indicator are linked to it. Even so, one paper gives an explicit formalization, "ReusabilityT = 1/|T| ΣT ∈T I(S ⊆CT )", alongside the description that a modular circuit is "applicable across different tasks," and another illustrates the construct by noting that around 78% of the "in-circuit" attention heads are shared between two tasks. In the available papers, operationalization is expressed through cross-task containment or overlap of circuits, not through a separately named instrument.

**Links.** No papers record it as causing, correlating with, or being related to another construct.

## Sources

**[Towards Global-level Mechanistic Interpretability: A Perspective of Modular Circuits of Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/he25x/he25x.pdf)**
> The extent to which a modular circuit appears across multiple different language tasks, enabling transfer of functional understanding without re-interpretation.

**[Circuit Component Reuse Across Tasks in Transformer Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/4ffbfbcf4ad7304d57158b046525e46c-Paper-Conference.pdf) (as "Circuit reuse")**
> The degree to which a language model repurposes learned subcircuits—comprising attention heads and algorithmic steps—across different tasks that share underlying computational demands.
