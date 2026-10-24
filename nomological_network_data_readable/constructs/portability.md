# Portability
**Type:** Construct  
**Referenced in:** 7 papers  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the papers, portability is most commonly framed as the generalization of an edit beyond its original query: edited knowledge should be successfully applied to related but distinct content or contexts. A common elaboration extends this beyond direct queries to downstream tasks and multi-hop reasoning, and one definition also includes transfer across different model variants as evidence of deeper integration into the model's knowledge structure. The main variation is only in emphasis, because some authors phrase portability as an ability of the model, while others describe the extent to which a knowledge edit supports transfer.

**Space of facets.** Papers usually position portability as one of the criteria attached to knowledge editing, and describe it through the range of settings to which an edit should transfer. The recurring facets are related content, downstream tasks, multi-hop reasoning chains, and, in one account, different model variants. Measurement-oriented descriptions also restate it as reasoning about the downstream effects of edited knowledge or as the robustness of edit generalization, alongside the same transfer-focused usage.

**Space of measurement.** Operationally, papers link portability to 1 measurement instrument and 2 behavioral indicators overall. The named instrument is MQuAKE, a multi-hop benchmark, and the direct measurement-oriented indicator is multi-hop question answering: one paper uses N-hop efficacy evaluation questions as portability evaluation questions, while another uses MQuAKE to test whether modified knowledge applies to related content such as multi-hop reasoning. Knowledge editing is the other linked behavioral indicator, but as a related setting rather than a direct measure, and another paper links portability to reasoning-oriented evaluation; overall, these measures match the dominant emphasis on transfer beyond direct queries.

**Links.** Beyond measurement, one paper reports that multi-hop reasoning correlates with portability, noting that portability metrics decline as the number of hops increases. One paper claims a causal relationship from instruction following ability to portability, attributing stronger portability results to better instruction-following capability. Portability is also related to knowledge editing, where it appears as an additional criterion of successful editing, and to multi-hop reasoning in accounts that include transfer along multi-hop reasoning chains.

## Sources

**[MMKE-Bench: A Multimodal Editing Benchmark for Diverse Visual Knowledge](https://proceedings.iclr.cc/paper_files/paper/2025/file/01fb6de3360f9e32862665580e2c5853-Paper-Conference.pdf)**
> The ability of a model to successfully apply newly edited knowledge to related but distinct content or contexts.

## Relationships

### Portability →
- **MQuAKE** (measurements) — *measured_by*
  > MQuAKE (Zhong et al., 2023) is a multi-hop benchmark... Portability evaluates the robustness of the generalization of the edit, evaluating whether the modified knowledge can be applied effectively to related content (e.g. Multi-Hop Reasoning).
  - [REACT: Representation Extraction And Controllable Tuning to Overcome Overfitting in LLM Knowledge Editing](https://aclanthology.org/2025.emnlp-main.860.pdf)

### → Portability
- **Multi-hop reasoning** (constructs) — *correlates*
  > Portability Metrics Decline with Increasing Number of Hops... This phenomenon can be attributed to the escalating complexity of reasoning required to accurately apply the edited knowledge across multiple interconnected facts.
  - [VLKEB: A Large Vision-Language Model Knowledge Editing Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/1198b53fa686831d5f0c0860d7ec4f34-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Instruction following ability** (constructs) — *causes*
  > For reliability, generalization, and portability evaluations, LLaVA-1.5 outperforms BLIP-2 and MiniGPT-4. This improved performance can be attributed to its larger model size and better instruction-following capability... (Section 5.2.1)
  - [MMKE-Bench: A Multimodal Editing Benchmark for Diverse Visual Knowledge](https://proceedings.iclr.cc/paper_files/paper/2025/file/01fb6de3360f9e32862665580e2c5853-Paper-Conference.pdf)

### Associated with
- **Knowledge editing** (behaviors tasks)
  > Knowledge editing seeks to maximize the chance of an LLM responding with y given x, while satisfying the following additional criteria at the same time...: (2) Portability: relevant knowledge such as the first lady of United States should be updated as well. (Section 2.1)
  - [Unlocking Efficient, Scalable, and Continual Knowledge Editing with Basis-Level Representation Fine-Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/2f89a23a19d1617e7fb16d4f7a049ce2-Paper-Conference.pdf)
- **Multi-hop question answering** (behaviors tasks)
  > The Portability Scores intend to measure the ability of LLMs to reason about the downstream effects of edited knowledge. Thus, we design the Efficacy Evaluation Questions with N hops (N = 1 ∼6) as Portability Evaluation Questions. (Section 2.2, Facet 3)
  - [Can Knowledge Editing Really Correct Hallucinations?](https://proceedings.iclr.cc/paper_files/paper/2025/file/db93ccb6cf392f352570dd5af0a223d3-Paper-Conference.pdf)
