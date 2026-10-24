# Chinese language understanding
**Type:** Construct  
**Referenced in:** 4 papers  
**Also known as:** Chinese comprehension, Semantic analysis  

## State of the Field

**Definition agreement:** Consensus. Most papers define Chinese language understanding as the ability to understand, comprehend, or process Chinese language or Chinese text. One paper narrows this to classical Chinese and specifies word-sense selection, translation, and contextual reasoning, but it is still describing the same core capability in a more specific setting rather than a different phenomenon.

**Space of definitions.** Across the surveyed work, the prevailing usage treats this construct as general Chinese-language comprehension: papers define it as the ability to comprehend and process information in Chinese, or to understand and process text written in Chinese. A smaller line of work narrows it to classical Chinese semantic analysis, describing a latent capacity to interpret meaning by combining word-level sense selection, sentence-level translation, and contextual reasoning. The main difference across definitions is scope, broad Chinese text understanding versus a more specific classical Chinese, meaning-focused capability.

**Space of facets.** Papers use closely related labels for the broader framing, including Chinese language understanding and Chinese comprehension, and one measurement description refers to Chinese language proficiency. One paper further breaks the narrower classical Chinese version into word-level sense selection, sentence-level translation, and contextual reasoning, and describes it in terms of contextual and semantic analysis. No papers here relate the construct to other constructs through nesting, equivalence, or contrast.

**Space of measurement.** Papers operationalize it with 2 linked measurement instruments and no behavioral indicators. The most common instrument is CMMLU, which is explicitly described as a domain-specific benchmark for Chinese language understanding and as assessing Chinese language proficiency; C3 is also used as the instrument for Chinese comprehension. These operationalizations align with the broader comprehension framing, while no linked instrument appears here for the narrower classical Chinese semantic-analysis formulation.

**Links.** The reported relationships are only measurement links, from the construct to CMMLU and C3. Beyond measurement, papers do not report causal, correlational, or generic related links for this construct.

## Sources

**[Superpose Task-specific Features for Model Merging](https://aclanthology.org/2025.emnlp-main.210.pdf)**
> The ability to comprehend and process information in the Chinese language.

**[DDK: Distilling Domain Knowledge for Efficient Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b206d54ffbb803b5c51d85f405d422e4-Paper-Conference.pdf) (as "Chinese comprehension")**
> The ability to understand and process text written in the Chinese language.

**[TEACH: A Contrastive Knowledge Adaptive Distillation Framework for Classical Chinese Understanding](https://aclanthology.org/2025.acl-long.178.pdf) (as "Semantic analysis")**
> The latent capacity to interpret the meaning of classical Chinese texts by combining word-level sense selection with sentence-level translation and contextual reasoning.

## Relationships

### Chinese language understanding →
- **CMMLU** (measurements) — *measured_by*
  > Each model’s performance was assessed using domain-specific benchmarks: CMMLU (Li et al., 2023) for Chinese language understanding
  - [Superpose Task-specific Features for Model Merging](https://aclanthology.org/2025.emnlp-main.210.pdf)
- **C3** (measurements) — *measured_by*
  > We see that the absence of knowledge transfer from the teacher model significantly impedes the student model’s capabilities in intricate tasks such as coding (e.g., HumanEval) and Chinese comprehension (e.g., C3). (Section 4.2)
  - [DDK: Distilling Domain Knowledge for Efficient Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b206d54ffbb803b5c51d85f405d422e4-Paper-Conference.pdf)
