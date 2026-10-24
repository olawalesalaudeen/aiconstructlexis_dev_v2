# Political bias
**Type:** Construct  
**Referenced in:** 11 papers  
**Also known as:** Partisan bias  

## State of the Field

**Definition agreement:** Consensus. All papers define political bias as a model's systematic tendency to generate or favor outputs aligned with particular political ideologies, parties, or viewpoints over others. The differences are minor shifts in emphasis, such as independence from input persona, possible links to toxicity, or possible sources in training and design, rather than different phenomena.

**Space of definitions.** Across the surveyed work, the prevailing usage treats political bias as a systematic, inherent, or latent tendency of a model, or its generated outputs, to favor certain political ideologies, parties, leanings, or viewpoints over others. Several definitions place the bias directly in generated text or outputs, and one makes this favoritism explicit as occurring independently of the input persona; source snippets illustrate the construct with outputs showing "favorable alignment for left-leaning parties over right parties." A smaller line of work uses the neighboring label partisan bias and defines it in terms of information processing and judgments that favor one's own party, rather than only output alignment.

**Space of facets.** Papers organize the construct mostly by what is being favored: some formulations emphasize political parties, while others emphasize broader ideologies, viewpoints, or left versus right perspectives. They also vary in where they locate the tendency, with most descriptions focusing on model outputs or generated text and one describing it as a bias in processing information and making judgments; the labels political bias and partisan bias are used for these nearby framings.

**Space of measurement.** The visible operationalization is output-based. Papers study whether generated text in settings such as synthetic public-opinion generation, news article generation, citation generation, or detoxifying text analysis reflects a political leaning or party alignment, including cases where outputs were described as aligned more favorably with left-leaning than right-leaning parties. At the same time, no measurement instrument is linked to the construct, and its only linked behavioral indicator is Citation generation, marked as related rather than measured_by, so no benchmark, human evaluation, LLM-as-a-judge setup, or probe appears as a linked measurement instrument.

**Links.** In the relationships claimed by papers, political bias is related to one construct, Toxicity: one paper cites the claim that politically biased language models can "propagate social biases into hate speech predictions," and presents this as suggesting a link to toxicity. A separate paper treats Citation generation as related to political bias, describing its goal as quantifying and analyzing political leaning in LLM citation generation.

## Sources

**[Algorithmic Fidelity of Large Language Models in Generating Synthetic German Public Opinions: A Case Study](https://aclanthology.org/2025.acl-long.90.pdf)**
> A systematic tendency for a model to generate outputs that align more closely with certain political ideologies or parties over others, independent of the input persona.

**[Biased LLMs can Influence Political Decision-Making](https://aclanthology.org/2025.acl-long.328.pdf) (as "Partisan bias")**
> The tendency of a model to process information and generate text in a way that systematically favors a particular political party or ideology.

## Relationships

### Associated with
- **Toxicity** (constructs)
  > Feng et al. (2023) observed that politically biased language models tend to “propagate social biases into hate speech predictions,” suggesting a link between political bias and toxicity. (Section 3.6)
  - [UniDetox: Universal Detoxification of Large Language Models via Dataset Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/c4800e97411c7f199b2895425f2933a5-Paper-Conference.pdf)
- **Citation generation** (behaviors tasks)
  > this paper focuses on empirically quantifying and analyzing the political leaning of LLM in citation generation. (Section 2)
  - [Media Source Matters More Than Content: Unveiling Political Bias in LLM-Generated Citations](https://aclanthology.org/2025.emnlp-main.872.pdf)
