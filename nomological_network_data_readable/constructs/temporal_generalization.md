# Temporal generalization
**Type:** Construct  
**Referenced in:** 5 papers  
**Also known as:** Temporal generalizability  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Most definitions treat temporal generalization, often called temporal generalizability, as a model's ability to maintain performance when applied to future data that may shift over time. The recurring usage is performance-centered: papers describe classification performance varying over time and methods that enhance generalizability over temporal data shifts or model performance over time. A narrower formulation appears in fact-checking work, where the term is defined as accurately verifying claims that arise after a model's knowledge cutoff by relying on external evidence rather than parametric memory, so the main difference is between a broad future-data performance framing and a task-specific post-cutoff verification framing.

**Space of facets.** The term is used at different scopes rather than being broken into named subtypes. In one usage it refers to classification under temporal data shifts, including multilingual settings where performance varies over time across languages; in another it refers to fact-checking on later claims, tied to external evidence and described alongside real-time fact-checking. The available definitions therefore contrast a broader temporal-shift framing with a narrower fact-checking-specific one.

**Space of measurement.** No measurement instrument or behavioral indicator is linked to it. In practice, papers operationalize it through retained task performance on later or temporally shifted data: one asks whether classification performance changes over time across languages and whether a method can enhance model performance over time, while another treats maintained accuracy on claims after the knowledge cutoff, in contrast to baselines that show a drastic drop, as evidence of temporal generalizability. This mostly matches the dominant definition's focus on sustained performance over time, while the fact-checking formulation also builds reliance on external evidence into the definition itself.

## Sources

**[Examining and Adapting Time for Multilingual Classification via Mixture of Temporal Experts](https://aclanthology.org/2025.naacl-long.313.pdf) (as "Temporal generalizability")**
> The ability of a classification model to maintain performance when applied to future data that may exhibit distributional shifts over time.
