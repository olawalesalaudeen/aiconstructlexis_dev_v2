# BOLD
**Type:** Measurement  
**Referenced in:** 7 papers  

## State of the Field

**What it is.** Across these papers, the prevailing description is an open-ended language generation benchmark, or bias evaluation dataset, for fairness and bias assessment in model outputs. Definitions describe English prompts for bias benchmarking, sometimes specified as Wikipedia-derived prompts spanning five domains, race, gender, profession, religion, and politics; some authors say it assesses sentiment or the affective properties of generated text, and another describes a large-scale setup that prompts models with diverse demographic terms. A smaller line of work also frames it as a fairness and toxicity benchmark, particularly for analyzing gender bias.

**What it is claimed to measure.** Papers link BOLD to 2 constructs and 2 behavioral indicators. The most prevalent claim is that it measures social bias, and a smaller line of work treats it as measuring stereotyping, including analyses of LM gender bias; individual papers also report it as measuring biased content generation and text generation. Across these links, the reported uses stay centered on bias in open-ended generation.

**Space of uses.** No other measurement instrument is linked directly to it, but papers also deploy it alongside RealToxicityPrompts, AttaQ, BBQ, Holistic Bias, and TREC-Fair. They position it differently across evaluations: as a primary dataset for text generation in one study, as a general-domain bias assessment framework in another, and as an additional benchmark used to test consistency of detoxification ability in another. Another paper reports improved bias mitigation on both the BBQ and BOLD benchmarks, which places it in comparative benchmark use.

**Concerns raised.** One paper mentions BOLD together with several other fairness datasets as benchmarks that either suffer from limited size or are based on templates that limit the diversity of sentence syntax and context. That paper does not isolate which of those issues it attributes to BOLD specifically.

## Sources

**[Large Language Models can Become Strong Self-Detoxifiers](https://proceedings.iclr.cc/paper_files/paper/2025/file/10df3b90b7caf44bf96b5a542a6935fe-Paper-Conference.pdf)**
> A benchmark dataset used to evaluate fairness and toxicity in language models, particularly for analyzing biases like gender bias.

## Relationships

### → BOLD
- **Social bias** (constructs) — *measured_by*
  > BOLD is an open-ended language generation dataset that provides English text generation prompts for bias benchmarking across five domains. (Section 3.2)
  - [Exploring the Impact of Personality Traits on LLM Bias and Toxicity](https://aclanthology.org/2025.emnlp-main.206.pdf)
- **Biased content generation** (behaviors tasks) — *measured_by*
  > For text generation, we primarily use the BOLD dataset (Dhamala et al., 2021), and other fairness benchmark datasets Holistic Bias (Smith et al., 2022) and TREC-Fair (Ekstrand et al., 2023). (Section 5.1)
  - [Your RAG is Unfair: Exposing Fairness Vulnerabilities in Retrieval-Augmented Generation via Backdoor Attacks](https://aclanthology.org/2025.emnlp-main.804.pdf)
- **Gender bias** (constructs) — *measured_by*
  > Additionally, we further conducted an experiment where we use the BOLD dataset to analyze LM gender bias, results are shown in appendix Table 13. (Section 4.4)
  - [Large Language Models can Become Strong Self-Detoxifiers](https://proceedings.iclr.cc/paper_files/paper/2025/file/10df3b90b7caf44bf96b5a542a6935fe-Paper-Conference.pdf)
