# Expert routing recency bias
**Type:** Construct  
**Referenced in:** 9 papers  
**Also known as:** Recency bias  

## State of the Field

**Definition agreement:** Consensus. Most papers define this as a recency bias in sequence processing, where attention or retrieval overweights the most recent or final tokens and underweights earlier context, with differences only in architecture or setting. A single paper instead applies recency bias to Mixture-of-Experts routing toward recently added components or knowledge, but that appears to be an outlier rather than a competing definition used by a substantial share of papers.

**Space of definitions.** Across the definitions here, the most specific usage treats it as a routing tendency in Mixture-of-Experts systems: the router preferentially uses newly added experts or knowledge and neglects older ones. Papers using the broader label recency bias also define it more generally as attention or retrieval favoring more recent, near, or final tokens over earlier context. The main disagreement is therefore about where the bias is located, expert routing over components versus temporal preference over input positions or context.

**Space of facets.** The papers do not present a shared subtype scheme. Instead, they use the same label across different mechanisms: MoE routing, recent-corpus overfitting, stick-breaking attention or retrieval, single-state linear attention, and long-context attention that is "more strongly concentrated at the tail." In that sense, the term is used for different targets, newly added experts in one usage and recent or near tokens in others.

**Space of measurement.** No measurement instrument or behavioral indicator is linked to this construct. In the papers' descriptions, it is identified through observable patterns such as tokens being "predominantly routed to newly added experts while ignoring older ones," attention giving greater weight to nearer than farther tokens when other conditions are matched, and attention focusing on near or tail positions with less balanced coverage of earlier context. These descriptions follow the same recent-over-older contrast as the definitions, but they operationalize it at different levels, routing in some papers and token-position attention in others.

**Links.** No papers claim causal, correlational, or other related links for this construct.

## Sources

**[MixLoRA-DSI: Dynamically Expandable Mixture-of-LoRA Experts for Rehearsal-Free Generative Retrieval over Dynamic Corpora](https://aclanthology.org/2025.emnlp-main.20.pdf) (as "Recency bias")**
> The tendency of a model, particularly its routing mechanism in a Mixture-of-Experts architecture, to preferentially use its most recently added components or knowledge while neglecting older ones.
