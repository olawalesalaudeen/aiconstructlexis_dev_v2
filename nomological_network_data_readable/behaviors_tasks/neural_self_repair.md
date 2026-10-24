# Neural self-repair
**Type:** Behavior  
**Referenced in:** 7 papers  
**Also known as:** Self-repair  

## State of the Field

**Space of definitions.** Across the papers, the clearest explicit use treats self-repair as a latent mechanism by which a model compensates for changes or losses in individual functional components so that task performance stays stable. The accompanying description frames it through behavioral stability under intervention, suggesting that self-repair may contribute to that stability and noting a case where negative heads perform self-repair by reducing their negativity when NMHs are ablated. A smaller, related usage in code work describes self-repair as the model debugging and repairing its own code.

**Variants.** Papers study it in two main settings: internal ablation settings, where functional components are changed or lost, and code-focused settings. In the code framing, self-repair is modeled as four stages, code generation, code execution, feedback generation, and code repair, and it is related to code debugging and code generation. Within that same line of work, one paper claims a causal relationship from feedback generation to neural self-repair, reporting that artificially boosting feedback quality improves self-repair efficacy.

**Space of elicitation and scores.** Papers link neural self-repair to two measurement instruments, APPS and HumanEval. These instruments are used through problems taken from them to analyze models' ability to perform self-repair.

**What it is taken as evidence of.** Papers do not link neural self-repair to any construct, so they do not specify a broader construct that it is taken to indicate.

## Sources

**[LLM Circuit Analyses Are Consistent Across Training and Scale](https://proceedings.neurips.cc/paper_files/paper/2024/file/47c7edadfee365b394b2a3bd416048da-Paper-Conference.pdf) (as "Self-repair")**
> A latent mechanism by which a model compensates for changes or losses in individual functional components to maintain stable task performance.
