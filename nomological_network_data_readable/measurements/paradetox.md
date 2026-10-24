# ParaDetox
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Across the surveyed work, ParaDetox is most commonly described as a dataset of paraphrased sentence pairs that contrast toxic and non-toxic variants. One definition describes it as containing pairs of toxic and non-toxic paraphrased sentences and being used to identify toxicity-related features in a model's activations, and one paper states that it contains pairwise "non-toxic" and "toxic" sentences generated using paraphrasing. Another paper also treats it as a dataset with especially strong conditional constraints in comparison with RocStories.

**What it is claimed to measure.** Papers link ParaDetox to two constructs, Semantic preservation and Toxicity, and to one behavioral indicator, Conditional text generation. The prevailing use is to measure Toxicity, reflected in descriptions of paired toxic and non-toxic sentences, while another paper reports it as measuring Semantic preservation through a semantic similarity measure of whether generated text preserves the original meaning. A smaller use treats it as measuring Conditional text generation, with one paper reporting that ParaDetox imposes the strongest conditional constraints in that setting.

**Space of uses.** Papers use ParaDetox as a benchmark dataset rather than alongside another named measurement instrument, and no other measurement instrument is directly linked to it. In the summarized work, it is positioned both as a resource for contrasting toxic and non-toxic paraphrases and, in one line of work, as a constrained dataset for conditional generation; one study also uses it to identify toxicity-related features in model activations.

## Sources

**[Breaking Bad Tokens: Detoxification of LLMs Using Sparse Autoencoders](https://aclanthology.org/2025.emnlp-main.641.pdf)**
> A dataset containing pairs of toxic and non-toxic paraphrased sentences, used to identify toxicity-related features in a model's activations.

## Relationships

### → ParaDetox
- **Toxicity** (constructs) — *measured_by*
  > "we use the ParaDetox dataset (Logacheva et al., 2022) containing pairwise “non-toxic” and “toxic” sentences"
  - [Breaking Bad Tokens: Detoxification of LLMs Using Sparse Autoencoders](https://aclanthology.org/2025.emnlp-main.641.pdf)
- **Conditional text generation** (behaviors tasks) — *measured_by*
  > In particular, we focus on two datasets that significantly differ in their level of conditional constraints: RocStories (Mostafazadeh et al., 2016), which is relatively open-ended, and Paradetox (Logacheva et al., 2022), which imposes the strongest conditional constraints (Section 5.1).
  - [Conditional [MASK] Discrete Diffusion Language Model](https://aclanthology.org/2025.emnlp-main.450.pdf)
