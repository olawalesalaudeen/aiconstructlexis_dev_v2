# Plasticity
**Type:** Construct  
**Referenced in:** 9 papers  

## State of the Field

**Definition agreement:** Complementary. Most papers define plasticity as a model or system's ability to learn and adapt when exposed to something new. They differ in scope, with some emphasizing adaptation to new data distributions or corpora and another emphasizing acquiring new knowledge or skills to solve new task types, but these are compatible facets of the same general adaptation phenomenon.

**Space of definitions.** Across the surveyed work, the dominant framing treats plasticity as an adaptation capacity: the model's ability to quickly and effectively adapt to a new data distribution, domain, language, corpus, information, or task. One recurring formulation makes this explicit in terms of reaching target performance with minimal steps or achieving the highest possible performance on a new domain. A smaller line of work treats plasticity as acquisition of new knowledge and skills in a self-improving system, defined there by solving new types of tasks that a baseline could not, so the main difference is between model adaptation to new distributions and system-level knowledge acquisition relative to baseline.

**Space of facets.** The clearest organizing pattern treats plasticity as one side of a stability-plasticity pairing. In that usage, plasticity is glossed as acquisition of new knowledge and contrasted with stability as preservation of old knowledge, and other papers describe a balance or trade-off between the two. One paper also places plasticity within a broader evaluation of self-improvement, where it functions as one of the reported metrics.

**Space of measurement.** No measurement instrument or behavioral indicator is linked to plasticity. Papers nonetheless operationalize it through outcomes on new data: quick adaptation to new languages or domains, reaching target performance with minimal steps or the highest possible performance on new distributions, improvement on new cases and the number of additional tasks solved beyond a baseline, and, in one paper, poor AP4 and FWT4 as signs of lacking plasticity. The adaptation-oriented operationalizations align with the dominant definitions, while the self-improvement usage defines and measures it as new knowledge acquisition relative to a baseline.

**Links.** Multiple papers report that plasticity is related to stability, describing either a well-maintained balance between the two or an out-of-balance state when datasets keep changing. Separately, one paper treats self-improvement as measured by plasticity, using plasticity alongside cross-template success rate and stability in evaluating a self-improvement system.

## Sources

**[DEPT: Decoupled Embeddings for Pre-training Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/20ceffa1fcec0f882868e5b891e3e7fa-Paper-Conference.pdf)**
> The model's ability to quickly and effectively adapt to a new data distribution, such as a different domain or language.

## Relationships

### Associated with
- **Stability** (constructs)
  > This technique demonstrates a negligible reduction in the FP metric, signifying a well-maintained balance between plasticity and stability. (Section 6)
  - [Unlocking the Power of Function Vectors for Characterizing and Mitigating Catastrophic Forgetting in Continual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/74fc5575632191d96881d8015f79dde3-Paper-Conference.pdf)
- **Self-improvement** (constructs)
  > We conducted further analysis to investigate the improvements of CER with various metrics, such as cross-template success rate, stability (preservation of old knowledge), and plasticity (acquisition of new knowledge) (Grossberg, 1982; Rolnick et al., 2019) (§5.2, §5.3), demonstrating its generalizability and effectiveness as a self-improvement system.
  - [Contextual Experience Replay for Self-Improvement of Language Agents](https://aclanthology.org/2025.acl-long.694.pdf)
