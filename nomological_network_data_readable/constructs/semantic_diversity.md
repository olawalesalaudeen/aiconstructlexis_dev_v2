# Semantic diversity
**Type:** Construct  
**Referenced in:** 6 papers  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the surveyed work, the prevailing framing treats semantic diversity as variation in the meaning of generated text, often alongside variation in expression. One formulation adds that this variation should remain contextually appropriate and reflect a broader exploration of the response space, while another describes it as variation in semantic content across sentences or documents that signals richness and unpredictability in conceptual expression. The papers therefore align on semantic variation in outputs, with minor differences in scope and in whether contextual appropriateness is stated explicitly.

**Space of facets.** The papers organize the construct through nearby notions. One paper connects greater semantic diversity to a broader exploration of the response space, while another sets it against semantic consistency: semantic similarity is described as capturing consistency, and lower mean similarity is taken as evidence of greater semantic diversity.

**Space of measurement.** No measurement instrument or behavioral indicator is linked to it. In the papers' own operational language, one paper evaluates the semantic diversity of latent action-controlled generation and reports larger semantic diversity under latent action control, while another describes semantic similarity as capturing consistency and interprets lower mean similarity as indicating greater semantic diversity.

**Links.** The recorded links are causal. One paper claims a causal relationship from semantic understanding to semantic diversity, hypothesizing that leveraging the semantic knowledge of large language models can improve the semantic diversity of resulting behaviors. Another paper claims a causal relationship from controllability to semantic diversity, reporting that latent actions enable greater semantic diversity than RL with token-level actions.

## Sources

**[Controlling Large Language Model with Latent Action](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jia25e/jia25e.pdf)**
> The extent to which generated outputs vary in meaning and expression while remaining contextually appropriate, reflecting a broader exploration of the response space.

## Relationships

### Semantic diversity →
- **ConflictingQA** (measurements) — *measured_by*
  > To measure the semantic diversity of LLMs’ outputs before and after alignment, we chose two datasets containing open-ended questions where a range of valid answers from multiple perspectives exists. CONFLICTINGQA (Wan et al., 2024) consists of short questions on controversial topics. (Section 2.2)
  - [From Distributional to Overton Pluralism: Investigating Large Language Model Alignment](https://aclanthology.org/2025.naacl-long.346.pdf)

### → Semantic diversity
- **Semantic understanding** (constructs) — *causes*
  > We hypothesize that leveraging the semantic knowledge of large language models (LLM) can lead us to improve semantic diversity of resulting behaviors. (Abstract)
  - [Language Guided Skill Discovery](https://proceedings.iclr.cc/paper_files/paper/2025/file/dae30ba63ca043588cdf804bbba295ed-Paper-Conference.pdf)
