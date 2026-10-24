# Misalignment
**Type:** Construct  
**Referenced in:** 4 papers  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the papers, misalignment is not used in a single way. One framing treats it as a latent unsafe tendency in the model, a safety misalignment that can remain dormant in one setting and become exploitable in another, leading to harmful outputs; this is the usage in Durable Quantization Conditioned Misalignment Attack on Large Language Models. Another framing treats it as the model's failure to follow instructions and produce valid, actionable outputs in a domain, illustrated by broken or incomplete navigation routes and omission of initial directional guidance in TurnBack: A Geospatial Route Cognition Benchmark for Large Language Models through Reverse Route. The disagreement is therefore between a hidden model-level safety tendency and an observable task-level failure of instruction following.

**Space of facets.** The papers do not present a shared facet structure for the term, and instead attach it to different kinds of phenomena. In the safety-focused usage, authors specifically refer to safety misalignment and to Quantization Conditioned Misalignment, described as dormant in a full-precision model but activated post-quantization. In the route-generation usage, misalignment is used as a metric for whether a model outputs valid instructions, with omitted route information treated as evidence of misalignment. Across these papers, the same name is used for different targets rather than a common subtype scheme.

**Space of measurement.** Operationalization is sparse in the recorded links: no measurement instrument is linked to misalignment, and one behavioral indicator is linked, Harmful content generation. Beyond those links, one paper operationalizes misalignment through whether models output valid instructions, describing broken or incomplete routes and omission of initial absolute directional guidance as evidence of misalignment. The recorded operationalizations therefore track either harmful outputs or invalid route instructions, in line with the two distinct definitions in use.

**Links.** One paper claims a causal relationship from Misalignment to Harmful content generation, with evidence that activated misalignments render the model vulnerable to jailbreak attacks. No correlational or other non-causal links are reported.

## Sources

**[Durable Quantization Conditioned Misalignment Attack on Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/376b1b131609e764f687afca832e62b3-Paper-Conference.pdf)**
> A latent unsafe tendency in the model that can be hidden in one setting and activated in another, leading to harmful outputs.

## Relationships

### Misalignment →
- **Jailbreaking** (behaviors tasks) — *causes*
  > “these misalignments activate, rendering the model vulnerable to jailbreak attacks.”
  - [Durable Quantization Conditioned Misalignment Attack on Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/376b1b131609e764f687afca832e62b3-Paper-Conference.pdf)
