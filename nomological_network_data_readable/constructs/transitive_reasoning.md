# Transitive reasoning
**Type:** Construct  
**Referenced in:** 5 papers  
**Also known as:** Transitive inference, Inductive generalization  

## State of the Field

**Definition agreement:** Consensus. Most papers define transitive reasoning as inferring a new relation such as A→C from observed links like A→B and B→C, with variations only in setting such as reachability, class inclusion, or causality. One paper instead describes generalization to unseen agentic operators at inference time, but that appears to be an outlier rather than a competing definition used by a substantial share of the papers.

**Space of definitions.** Most papers describe transitive reasoning as inferring an unobserved relation from intermediate relations, whether by deducing reachability from concatenated path segments, inferring a new relation via a common intermediary, or reasoning from X→Y and Y→Z to X→Z. The shared core is transitivity or multi-hop inference, sometimes explicitly about relations not directly observed in training; for example, ALPINE: Unveiling The Planning Capability of Autoregressive Learning in Language Models describes failures to identify reachability relationships through transitivity when concatenation is required. A smaller usage departs from this and uses related "inductive generalization" language for the ability to use previously unseen agentic operators during inference, rather than for deducing a transitive relation.

**Space of facets.** For the dominant framing, papers alternate between the labels transitive reasoning, transitive inference, and, in one causal formulation, inductive generalization. They instantiate the construct in different relation types, including reachability, hierarchical or subsumption relations described as transitive, that is multi-hop, subsumptions, and causal chains such as X→Y→Z. The clearest naming ambiguity is that inductive generalization is also used in another paper for activating and using unseen agentic operators during inference, rather than for inferring a transitive relation.

**Space of measurement.** Papers do not link transitive reasoning to any measurement instrument or behavioral indicator. Instead, they describe it through tasks framed as identifying reachability through transitivity, inferring multi-hop subsumptions, or inferring X→Z after seeing X→Y and Y→Z. These task descriptions follow the dominant definitions, while the divergent inductive generalization usage is instead described as activating and using unseen operators during inference.

**Links.** One paper reports that Generalization is related to Transitive reasoning, describing transitive inference as a kind of domain-general reasoning tied to logical capacities. No causal or correlational links are recorded.

## Sources

**[ALPINE: Unveiling The Planning Capability of Autoregressive Learning in Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d848cb2c84f0bba7f1f73cf232734c40-Paper-Conference.pdf)**
> The ability to deduce reachability relationships through the concatenation of path segments that were not directly observed in the training data.

**[Language Models as Hierarchy Encoders](https://proceedings.neurips.cc/paper_files/paper/2024/file/1a970a3e62ac31c76ec3cea3a9f68fdf-Paper-Conference.pdf) (as "Transitive inference")**
> The ability to deduce a new relationship between two entities based on their relationships with a common intermediate entity (e.g., if A is a B, and B is a C, then A is a C).

**[Reasoning Elicitation in Language Models via Counterfactual Feedback](https://proceedings.iclr.cc/paper_files/paper/2025/file/bf145010b30dc5f14fa87dc152074e4d-Paper-Conference.pdf) (as "Inductive generalization")**
> The ability to reason about a transitive causal relationship (A → C) after being shown examples of its constituent parts (A → B and B → C).

## Relationships

### Associated with
- **Reasoning** (constructs)
  > TI is a fundamental form of reasoning in which, given some premises, a relational conclusion between stimuli can be inferred. For example, if A is greater than B and B is greater than C, then A must, transitively, be greater than C. TI has historically been used to evaluate the reasoning ability of young pre-verbal children (Burt et al., 1911), but has also been well studied throughout the animal kingdom, from rats (Roberts & Phelps, 1994) to wasps (Tibbetts et al., 2019).
  - [Position: Principles of Animal Cognition to Improve LLM Evaluations](https://raw.githubusercontent.com/mlresearch/v267/main/assets/rane25a/rane25a.pdf)
