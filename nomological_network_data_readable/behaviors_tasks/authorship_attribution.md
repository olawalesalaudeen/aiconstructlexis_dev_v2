# Authorship attribution
**Type:** Behavior  
**Referenced in:** 7 papers  
**Also known as:** Authorship verification, Text origin detection  

## State of the Field

**Space of definitions.** Across papers, the concept is used for several closely related authorship tasks rather than a single fixed formulation. A prevalent framing is a pairwise judgment over two texts, documents, or text collections, asking whether they were written by the same author and returning either a likelihood score or a binary same/different decision. Other papers formulate it as determining whether a text was written by a particular known author from linguistic cues or stylistic fingerprints, or as identifying which human or machine generator produced a text.

**Variants.** Papers use several names for neighboring variants, including authorship attribution, authorship verification, and text origin detection. The settings range from recognizing whether two input documents have the same author, to multi-class classification where humans and LLMs are the labels, to identifying the specific LLM that generated an AI-generated text from its statistical or representational patterns. A related paper also places it alongside AI-generated text detection, describing that area as including neural authorship attribution and multi-author classification.

**Space of elicitation and scores.** No paper links it to a measurement instrument. In the task descriptions themselves, papers score it with outputs such as a same-author likelihood score, a binary same/different classification, or a multi-class author label, but no named instrument is used in the linked relationships to elicit or measure the behavior.

**What it is taken as evidence of.** Construct links are narrow in the surveyed papers. The only construct relation is a correlational one with Reasoning: a paper reports that models with stronger reasoning abilities excel at verification and concealing authorial traits, so this behavior is reported to correlate with Reasoning rather than being tied to multiple construct framings.

## Sources

**[Layered Insights: Generalizable Analysis of Human Authorial Style by Leveraging All Transformer Layers](https://aclanthology.org/2025.emnlp-main.521.pdf)**
> The observable task of taking two collections of text and producing a score indicating the likelihood they were written by the same author.

**[Unraveling Interwoven Roles of Large Language Models in Authorship Privacy: Obfuscation, Mimicking, and Verification](https://aclanthology.org/2025.emnlp-main.753.pdf) (as "Authorship verification")**
> The observable task of determining whether a given piece of text was written by a specific, known author based on stylistic evidence.

**[Profiler: Black-box AI-generated Text Origin Detection via Context-aware Inference Pattern Analysis](https://aclanthology.org/2025.emnlp-main.1265.pdf) (as "Text origin detection")**
> The observable task of determining which specific LLM generated a given piece of text, based on analysis of its statistical or representational patterns.

## Relationships

### Authorship attribution →
- **Ablation study** (measurements) — *measured_by*
  > our ablation study evaluates the impact of different layers in the LIGHT-LUAR model by systematically removing each layer from the aggregation and measuring its effect on attribution performance across three datasets (Section 6.2.1)
  - [Layered Insights: Generalizable Analysis of Human Authorial Style by Leveraging All Transformer Layers](https://aclanthology.org/2025.emnlp-main.521.pdf)
- **Reasoning** (constructs) — *correlates*
  > models with stronger reasoning abilities (e.g., o3-mini, Deepseek) according to the benchmark 1, excel at verification and concealing authorial traits
  - [Unraveling Interwoven Roles of Large Language Models in Authorship Privacy: Obfuscation, Mimicking, and Verification](https://aclanthology.org/2025.emnlp-main.753.pdf)

### Associated with
- **AI-generated text detection** (behaviors tasks)
  > MGT detection features various task formulations and labelling schemes: binary classification, neural authorship attribution, boundary-detection, and multi-author classification. (Section 2.1)
  - [Beemo: Benchmark of Expert-edited Machine-generated Outputs](https://aclanthology.org/2025.naacl-long.357.pdf)
