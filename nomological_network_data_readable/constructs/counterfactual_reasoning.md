# Counterfactual reasoning
**Type:** Construct  
**Referenced in:** 21 papers  
**Also known as:** Counterfactual thinking, Counterfactuality  

## State of the Field

**Definition agreement:** Consensus. Most papers define counterfactual reasoning as reasoning about hypothetical, contrary-to-fact alternatives, namely what would happen or would have happened if conditions, events, or choices were different, often in a causal framing. A few papers narrow this to decision making over time or broaden it to edited premises, and one definition looks like an outlier about rejecting implausible connections, but the dominant usage is still the same core property.

**Space of definitions.** Across the surveyed work, the prevailing usage treats counterfactual reasoning, sometimes also called counterfactual thinking or counterfactuality, as the ability or capacity to reason in hypothetical, contrary-to-fact scenarios: answering what-if questions, considering alternative outcomes under changed conditions, or determining what would have happened if a past event or decision had been different. Several papers tie this directly to causal reasoning, and one definition places it at "the third and highest level of Pearl's causal hierarchy"; a smaller line of work narrows it to settings such as trajectory-level re-evaluation of long-term decisions and credit assignment, or answering under an edited premise or hypothetical knowledge state. Only a minority depart from the latent-ability framing, either describing it as the observable behavior of reasoning about what might have happened differently, or using "counter-factual" language for answer refinement and hallucination avoidance.

**Space of facets.** Papers use several near-synonymous labels, most often counterfactual reasoning, but also counterfactual thinking and counterfactuality, usually for the same broad phenomenon of reasoning about alternatives to reality. The main distinctions are by reference case and task format: some emphasize alternative outcomes under changed conditions, some focus on what would have happened if past events had unfolded differently, and others instantiate it as re-evaluating past choices when given a second opportunity, trajectory-level assessment of the long-term impact of decisions, or reasoning under an imagined edited premise. It is most often nested under or paired with causal reasoning, and one paper contrasts it with other causal tasks by saying that its distinguishing feature is reasoning in hypothetical scenarios.

**Space of measurement.** In the recorded relationships, counterfactual reasoning is linked to one measurement instrument, MQuAKE, and to no behavioral indicators. The only explicit measured_by link is to MQuAKE, which one paper uses to evaluate whether a method can learn "simple reasoning over counterfactuals." Elsewhere, papers instantiate the construct through what-if questions, alternative-scenario analysis, opportunities to revise a choice after seeing its outcome, trajectory-level re-evaluation of long-term decisions, and answering under an imagined edited premise or hypothetical knowledge state.

**Links.** Relationship claims connect the construct most often to causal reasoning: several papers report it as related, describing counterfactual reasoning as a task or feature of causal reasoning and as playing a role in understanding cause and effect. Other related links are narrower, with one paper placing it alongside visual reasoning in a task suite and another relating it to reasoning through consistency on counterfactually framed queries. One paper claims a causal relationship from counterfactual reasoning to robustness, stating that explicitly modeling it enhances model robustness in multimodal contexts.

## Sources

**[Unveiling Causal Reasoning in Large Language Models: Reality or Mirage?](https://proceedings.neurips.cc/paper_files/paper/2024/file/af2bb2b2280d36f8842e440b4e275152-Paper-Conference.pdf)**
> The ability to reason within hypothetical scenarios, which is a distinctive feature of causal reasoning.

**[MMWorld: Towards Multi-discipline Multi-faceted World Model Evaluation in Videos](https://proceedings.iclr.cc/paper_files/paper/2025/file/4364fef031fdf7bfd9d1c9c56b287084-Paper-Conference.pdf) (as "Counterfactual thinking")**
> The ability to consider alternative outcomes by reasoning about what would happen under changed conditions.

**[Gumbel Counterfactual Generation From Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/e15790966a4a9d85d688635c88ee6d8a-Paper-Conference.pdf) (as "Counterfactuality")**
> The capacity to reason about what would have happened if past events had unfolded differently, representing the third and highest level of Pearl's causal hierarchy.

## Relationships

### Counterfactual reasoning →
- **Robustness** (constructs) — *causes*
  > we propose DPCI, a novel Dual-Path Counterfactual Integration framework that enhances model robustness by explicitly modeling counterfactual reasoning in multimodal contexts. (Abstract)
  - [Dual-Path Counterfactual Integration for Multimodal Aspect-Based Sentiment Classification](https://aclanthology.org/2025.emnlp-main.1158.pdf)

### Associated with
- **Causal reasoning** (constructs)
  > Counterfactual reasoning is an essential task of causal reasoning. (Section 2.2)
  - [Unveiling Causal Reasoning in Large Language Models: Reality or Mirage?](https://proceedings.neurips.cc/paper_files/paper/2024/file/af2bb2b2280d36f8842e440b4e275152-Paper-Conference.pdf)
- **Visual reasoning** (constructs)
  > Our task suite encompasses a comprehensive set of perceptual and cognitive tasks, including summarization, perception (recall, tracking), visual reasoning (spatial, temporal, predictive, causal, counterfactual), and navigation (room-to-room, object retrieval) tasks. (Section 2.1)
  - [HourVideo: 1-Hour Video-Language Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/5f2809607f692d79a01c05c43d702883-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Reasoning** (constructs)
  > to evaluate the reasoning abilities of the LLM, it is crucial that this consistency is also observed when the queries are framed in a counterfactual manner.
  - [Does Reasoning Emerge? Examining the Probabilities of Causation in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d5a1f97d2b922da92e880d13b7d2bf02-Paper-Conference.pdf)
