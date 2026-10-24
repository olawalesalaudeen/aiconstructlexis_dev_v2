# Component self-repair
**Type:** Behavior  
**Referenced in:** 7 papers  
**Also known as:** Self-repair  

## State of the Field

**Space of definitions.** In the available definition, component self-repair is treated as a latent mechanism in which a model compensates for changes or losses in individual functional components so that task performance remains stable. The accompanying snippets use the term for compensation after ablation, and give a concrete example: "Negative heads (*) perform self-repair by reducing their negativity upon ablation of NMHs" (LLM Circuit Analyses Are Consistent Across Training and Scale).

**Variants.** Evidence on variants is narrow. The only explicit setting is ablation-based self-repair, especially the case where negative heads reduce their negativity after NMH ablation; the same paper also says the exact "load-balancing" mechanism is left to future work rather than distinguishing further subtypes or settings.

**Space of elicitation and scores.** No measurement instrument is linked to it in the papers.

**What it is taken as evidence of.** No construct is linked to it as evidence of a broader attribute in the papers.

## Sources

**[LLM Circuit Analyses Are Consistent Across Training and Scale](https://proceedings.neurips.cc/paper_files/paper/2024/file/47c7edadfee365b394b2a3bd416048da-Paper-Conference.pdf) (as "Self-repair")**
> A latent mechanism by which a model compensates for changes or losses in individual functional components to maintain stable task performance.
