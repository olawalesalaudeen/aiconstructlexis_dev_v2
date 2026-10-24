# Candidate generation
**Type:** Behavior  
**Referenced in:** 3 papers  

## State of the Field

**Space of definitions.** Across the surveyed work, candidate generation is treated as producing a set of alternatives for a given input, though papers differ on what those alternatives are. One line of work defines it as generating potential target attributes for each source attribute in schema matching, described as generating "a set of potential matches" or a subset of candidate attributes that are "likely matches." Another defines it as generating multiple alternative reasoning steps or solution paths, including "multiple potential continuations for each active hypothesis."

**Variants.** The clearest variants appear in the schema-matching formulation, which separates semantic retrieval candidates from reasoning-based candidates. A different setting studies candidate steps sourced from multiple LLMs, with the generated objects described as candidate steps or continuations. One paper also relates candidate generation to schema matching, describing a schema matching program as being comprised of candidate generation, refinement and confidence scoring.

**Space of elicitation and scores.** No measurement instrument is linked to candidate generation in these papers.

**What it is taken as evidence of.** No construct is linked to candidate generation, so the papers do not specify a construct that this behavior indicates.

## Sources

**[Bootstrapping Self-Improvement of Language Model Programs for Zero-Shot Schema Matching](https://raw.githubusercontent.com/mlresearch/v267/main/assets/seedat25a/seedat25a.pdf)**
> Producing a set of potential target attributes that may correspond to a given source attribute, using either semantic retrieval or reasoning-based methods.

## Relationships

### Associated with
- **Schema matching** (behaviors tasks)
  > we propose Matchmaker - a compositional language model program for schema matching, comprised of candidate generation, refinement and confidence scoring. (Abstract)
  - [Bootstrapping Self-Improvement of Language Model Programs for Zero-Shot Schema Matching](https://raw.githubusercontent.com/mlresearch/v267/main/assets/seedat25a/seedat25a.pdf)
