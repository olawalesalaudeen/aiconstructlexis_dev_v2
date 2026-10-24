# Domain specialization
**Type:** Construct  
**Referenced in:** 3 papers  
**Also known as:** Domain Specialization  

## State of the Field

**Definition agreement:** Conflicting. Most papers define domain specialization as an expert-level routing or activation pattern, where particular experts preferentially receive or activate on tokens from certain domains or modalities. One paper instead uses the term for adapting a general-purpose LLM to a specific field using domain-specific data and objectives, which is a different process and applies to the whole model rather than expert behavior, so they are not studying the same thing.

**Space of definitions.** Most commonly, papers use domain specialization for expert-level selectivity across domains: specific experts preferentially activate for, or are preferentially routed, tokens from particular domains, and in one formulation from distinct modalities as well. Within that prevailing framing, some authors describe it as a latent tendency of experts, while others make it explicitly degree-based, as the proportion of tokens from a domain routed to a given expert. A minority usage applies the same term more broadly to adapting a general-purpose LLM to domain-specific contextual data and domain objectives for a specific field and task.

**Space of facets.** The papers organize the concept at different levels. In the expert-routing usage, it is defined for a particular expert and domain pair, and one paper makes the scale explicit by stating that a value of 100% means all data from that domain is routed to that expert; another broadens the relevant categories from domains to modalities. By contrast, the broader usage treats domain specialization as a process applied to a general-purpose LLM for a domain and task, rather than as a property of an individual expert.

**Space of measurement.** No measurement instrument is linked to it, and no behavioral indicator is linked to it. The explicit operationalization that does appear is direct quantification of routing or activation patterns: one paper defines specialization as the proportion of tokens from a domain routed to a particular expert, with 100% meaning all data from that domain is routed there, and another describes experts as being activated with varying frequencies across domains. These operationalizations line up with the expert-routing definitions, while the broader adaptation-process usage is described without a measurement instrument.

## Sources

**[ReMoE: Fully Differentiable Mixture-of-Experts with ReLU Routing](https://proceedings.iclr.cc/paper_files/paper/2025/file/94dc604e115237a7f4a758b3146cd976-Paper-Conference.pdf) (as "Domain Specialization")**
> The latent tendency of specific experts to activate preferentially for tokens from distinct data domains or modalities.

**[OLMoE: Open Mixture-of-Experts Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/9b224ace8963c9385ad5e2b5c9039b97-Paper-Conference.pdf)**
> The degree to which an expert is preferentially routed tokens from a particular domain.
