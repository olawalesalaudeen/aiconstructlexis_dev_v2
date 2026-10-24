# Uncertainty awareness
**Type:** Construct  
**Referenced in:** 3 papers  
**Also known as:** Self-aware uncertainty, Multimodal Uncertainty Awareness  

## State of the Field

**Definition agreement:** Consensus. All papers define uncertainty awareness as a model's ability to recognize or be sensitive to its own uncertainty, lack of knowledge, or inability to give a definitive answer. The differences are mainly in operationalization or setting, such as using internal state inconsistency, self-calibration, or vision-language tasks, rather than in the core property itself.

**Space of definitions.** Across the papers, the prevailing usage treats uncertainty awareness as a model's own awareness or sensitivity to uncertainty in what it generates. Most definitions describe a latent property tied to recognizing lack of knowledge or confidence in generated answers, and one of them also extends this to document relevance for self-calibration. A smaller line of work frames it in vision-language terms as recognizing when no definitive answer can be provided because of information limitations or inherent unpredictability, so the main variation is between confidence-centered self-awareness and recognition of cases where a definitive answer cannot be provided under multimodal uncertainty.

**Space of facets.** Papers also name the construct self-aware uncertainty and multimodal uncertainty awareness. One paper places it in a taxonomy that distinguishes epistemic uncertainty awareness and aleatoric uncertainty awareness, and both are related constructs.

**Space of measurement.** No measurement instrument is linked to it, and papers link it to one behavioral indicator, iterative refinement, through a causal rather than measurement relation. In the descriptions, one paper operationalizes it by extracting self-aware uncertainty from FFN internal states at the last generated token and inferring it from inconsistencies across multiple generations, while another uses uncertainty scores during inference and in a self-calibration training set to iteratively rephrase prompts and fine-tune the model. These operationalizations use the same terms that appear in the definitions, especially internal states, confidence, and uncertainty scores.

**Links.** Papers connect the construct to two other constructs and one behavioral indicator. One paper relates it to epistemic uncertainty awareness and aleatoric uncertainty awareness through a taxonomy that distinguishes those forms of uncertainty, and one paper claims a causal relationship from uncertainty awareness to iterative refinement. No correlational links are reported.

## Sources

**[SeaKR: Self-aware Knowledge Retrieval for Adaptive Retrieval Augmented Generation](https://aclanthology.org/2025.acl-long.1312.pdf) (as "Self-aware uncertainty")**
> The latent degree to which an LLM recognizes its own lack of knowledge or confidence in generating correct content, inferred from inconsistencies in its internal states across multiple generations.

**[SGIC: A Self-Guided Iterative Calibration Framework for RAG](https://aclanthology.org/2025.acl-long.1376.pdf)**
> The model's sensitivity to its own confidence levels in generated answers and document relevance, allowing it to guide self-calibration processes.

**[CertainlyUncertain: A Benchmark and Metric for Multimodal Epistemic and Aleatoric Awareness](https://proceedings.iclr.cc/paper_files/paper/2025/file/21b5788d81f886ff81671379b4ff9453-Paper-Conference.pdf) (as "Multimodal Uncertainty Awareness")**
> The latent ability of a model to recognize situations where a definitive answer cannot be provided due to information limitations or inherent unpredictability in vision-language tasks.

## Relationships

### Associated with
- **Epistemic uncertainty awareness** (constructs)
  > “we present a taxonomy of uncertainty specific to vision-language AI systems, distinguishing between epistemic uncertainty ... and aleatoric uncertainty ...”
  - [CertainlyUncertain: A Benchmark and Metric for Multimodal Epistemic and Aleatoric Awareness](https://proceedings.iclr.cc/paper_files/paper/2025/file/21b5788d81f886ff81671379b4ff9453-Paper-Conference.pdf)
- **Aleatoric uncertainty awareness** (constructs)
  > “we present a taxonomy of uncertainty specific to vision-language AI systems, distinguishing between epistemic uncertainty ... and aleatoric uncertainty ...”
  - [CertainlyUncertain: A Benchmark and Metric for Multimodal Epistemic and Aleatoric Awareness](https://proceedings.iclr.cc/paper_files/paper/2025/file/21b5788d81f886ff81671379b4ff9453-Paper-Conference.pdf)
