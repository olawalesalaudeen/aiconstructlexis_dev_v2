# ROCStories
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** ROC Stories, RocStories  

## State of the Field

**What it is.** Definitions mostly describe ROCStories as a story-generation dataset built from short stories with exactly 5 sentences, often characterized as coherent narrative or commonsense stories. The prevailing usage is open-ended conditional generation or title-to-story generation, including evaluation of a model's ability to generate a five-sentence story from a title. A smaller framing treats ROC Stories as a story-completion or infilling setup, where a middle sentence is masked and the generated replacement is assessed for coherence.

**What it is claimed to measure.** Papers link ROCStories to 1 behavioral indicator and no constructs. The only recorded measured_by relationship is with Text infilling, so papers use ROCStories to measure text infilling; in that use, one paper describes the corpus as 'a dataset of short stories containing exactly 5 sentences each.' The claims therefore center on a single behavioral indicator rather than multiple constructs.

**Space of uses.** No measurement instrument is linked to ROCStories. Across the papers, it is used in several evaluation setups: for title-to-story generation, for relatively open-ended conditional generation, and for story completion or infilling with a masked middle sentence. As one paper puts it, authors 'randomly sampled 100 stories from the ROC Stories dataset, masked out one of their middle sentences' (MAGNET: Augmenting Generative Decoders with Representation Learning and Infilling Capabilities), while another says it is used 'for title-to-story generation' with longer outputs (Segment-Level Diffusion: A Framework for Controllable Long-Form Generation with Diffusion Language Models).

## Sources

**[Segment-Level Diffusion: A Framework for Controllable Long-Form Generation with Diffusion Language Models](https://aclanthology.org/2025.acl-long.210.pdf)**
> A dataset for title-to-story generation, used to evaluate a model's ability to generate coherent, five-sentence narrative stories from a given title.

**[MAGNET: Augmenting Generative Decoders with Representation Learning and Infilling Capabilities](https://aclanthology.org/2025.acl-long.1325.pdf) (as "ROC Stories")**
> Story completion dataset used to evaluate infilling performance by masking a middle sentence and assessing coherence of generated replacements.

**[Conditional [MASK] Discrete Diffusion Language Model](https://aclanthology.org/2025.emnlp-main.450.pdf) (as "RocStories")**
> A dataset for story generation, consisting of five-sentence commonsense stories, used to evaluate open-ended conditional generation.

## Relationships

### → ROCStories
- **Text infilling** (behaviors tasks) — *measured_by*
  > “We use the ROCStories corpus ... Given the first 3 sentences and the last sentence, the goal is to generate the fourth sentence”
  - [Amortizing intractable inference in large language models](https://proceedings.iclr.cc/paper_files/paper/2024/file/bc667ac84ef58f2b5022da97a465cbab-Paper-Conference.pdf)
