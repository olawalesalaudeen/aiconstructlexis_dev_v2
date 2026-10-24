# Conciseness
**Type:** Construct  
**Referenced in:** 21 papers  
**Also known as:** Brevity, Succinctness  

## State of the Field

**Definition agreement:** Consensus. Most papers define conciseness as an output property of being brief, to the point, and free of unnecessary, redundant, or overly verbose content while still conveying the needed information efficiently. The definitions mainly differ only by the type of output discussed, such as responses, summaries, explanations, code reviews, or conversations, and a few add minor qualifiers like user needs or factual accuracy without changing the core phenomenon.

**Space of definitions.** Most commonly, papers treat conciseness, and nearby labels such as brevity and succinctness, as a quality of outputs being brief, to the point, and free of unnecessary repetition, verbosity, or extraneous content. This framing is reused across responses, summaries, code reviews, conversations, explanations, and descriptions, sometimes with the added requirement that the output communicate only the necessary information or fit the reader's needs. A smaller line of work, especially in summarization-oriented formulations, casts conciseness less as shortness alone and more as how much of the generated content aligns with salient, accurate content, while some authors explicitly describe verbosity as its low end.

**Space of facets.** One organizational move places conciseness under User Alignment, alongside Readability and Harmlessness. Across papers, it is also contrasted with verbosity, described as low conciseness or as being too verbose, and nearby labels such as brevity and succinctness are used for much the same idea in explanations and descriptions. Some summarization papers also use the same term for a content-selection notion, describing conciseness as the share of generated material that aligns with salient facts or is both accurate and salient.

**Space of measurement.** In the linked measurement literature, conciseness is measured by 1 instrument, Human evaluation, and no behavioral indicators are linked to it. The prevailing operationalization asks annotators to rate outputs on Likert-style scales for whether they are too verbose, or whether they are clear, complete, and show minimal redundancy, sometimes alongside criteria such as fluency, naturalness, understandability, comprehensiveness, or meaning preservation. These judgments line up closely with the dominant definition of brevity and low redundancy, though some papers elsewhere describe conciseness with ratio-like formulations about on-topic, accurate, or salient content rather than length alone.

**Links.** Beyond measurement, one paper relates conciseness to Human preference alignment by placing it within User Alignment. No causal or correlational claim is recorded.

## Sources

**[FLASK: Fine-grained Language Model Evaluation based on Alignment Skill Sets](https://proceedings.iclr.cc/paper_files/paper/2024/file/f41b4a6b202adcd8e150a9d4f124d8f6-Paper-Conference.pdf)**
> The ability of a model to produce responses that are brief and to the point, avoiding unnecessary repetition or verbosity.

**[GraphNarrator: Generating Textual Explanations for Graph Neural Networks](https://aclanthology.org/2025.acl-long.2.pdf) (as "Brevity")**
> The degree to which the explanation is concise and avoids redundancy, improving human interpretability by minimizing unnecessary content.

**[Sightation Counts: Leveraging Sighted User Feedback in Building a BLV-aligned Dataset of Diagram Descriptions](https://aclanthology.org/2025.acl-long.1338.pdf) (as "Succinctness")**
> The quality of a description being brief and to the point without including extraneous or overly long text.

## Relationships

### Conciseness →
- **Human evaluation** (measurements) — *measured_by*
  > Using a 1-5 Likert scale, the judges are asked to rate the model output based on five criteria: comprehensiveness, layness, meaning preservation, conciseness, and fluency. (Section 5.3.3).
  - [VTechAGP: An Academic-to-General-Audience Text Paraphrase Dataset and Benchmark Models](https://aclanthology.org/2025.naacl-long.311.pdf)

### Associated with
- **Human preference alignment** (constructs)
  > We define 4 primary abilities which are divided into 12 fine-grained skills for comprehensive language model evaluation: ... and User Alignment (Conciseness, Readability, Harmlessness). (Section 1)
  - [FLASK: Fine-grained Language Model Evaluation based on Alignment Skill Sets](https://proceedings.iclr.cc/paper_files/paper/2024/file/f41b4a6b202adcd8e150a9d4f124d8f6-Paper-Conference.pdf)
