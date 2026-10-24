# Hallucination resistance
**Type:** Construct  
**Referenced in:** 33 papers  
**Also known as:** Anti-hallucination, Knowledge hallucination, Factuality hallucination, Molecular hallucination, Hallucination tendency, Hallucination mitigation, Hallucination reduction  

## State of the Field

**Definition agreement:** Conflicting. Many papers define hallucination resistance as a model's ability or tendency to avoid generating false, unsupported, or ungrounded outputs across settings such as knowledge graphs, multimodal generation, citations, and medical advice. But several papers instead define it as the propensity to generate those false or ungrounded outputs, which is the opposite property, and one paper further applies it to chemically valid but practically ineffective molecules, so a substantial share of papers would not be studying the same construct.

**Space of definitions.** Across papers, the prevailing usage treats this construct as a latent model-level tendency or ability concerning whether outputs stay factually grounded rather than unsupported, fabricated, or false. Most definitions describe avoiding unsupported knowledge triples, multimodal content, answers, or medical information, and closely related negative framings describe generating 'semantically plausible but factually ungrounded connections' or content inconsistent with actual facts, sometimes explicitly as a failure of knowledge faithfulness. A smaller line of work narrows the construct to specific output domains, such as fabricated citations, or shifts it to molecular generation, where hallucinations are molecules that 'comply with chemical structural rules, yet fail to exhibit practical utility or the anticipated properties.'

**Space of facets.** Papers mostly organize the idea by output domain and by whether it is named positively or negatively. Positive labels include anti-hallucination, mitigation, and reduction, while negative labels include knowledge hallucination, factuality hallucination, molecular hallucination, and hallucination tendency; most of these still refer to unsupported or false outputs, but one paper recasts the problem around anticipated chemical activity or practical utility rather than factual grounding. Several papers place the construct around structured factual outputs, especially triplets, entity-relation links, and knowledge graph generation or completion, and one paper explicitly ties a version of the construct to knowledge faithfulness.

**Space of measurement.** Operationalization is mostly benchmark-style. Papers link the construct to 6 measurement instruments and 2 behavioral indicators, with POPE, AMBER, HallusionBench, Natural Questions, and TriviaQA among the most frequently linked instruments, plus 1 other instrument. In practice, papers use these to check object hallucination detection, different hallucination types, visual and knowledge hallucination, and performance on knowledge-based question answering, and some papers also operationalize the construct more directly by asking whether generated triples are grounded in the source text or whether outputs contain fabricated citations or unsupported medical information; these operationalizations mostly line up with the prevailing definitions by checking groundedness or factual support in outputs.

**Links.** No correlational claims are reported. Single papers claim causal relationships from multimodal alignment to hallucination resistance, from hallucination resistance to retrieval quality, and between hallucination resistance and information extraction in both directions. One paper also treats it as related to knowledge graph completion, in a framing where knowledge graphs describe facts as triplets and 'allow minimal hallucinations.'

## Sources

**[Can LLMs be Good Graph Judge for Knowledge Graph Construction?](https://aclanthology.org/2025.emnlp-main.554.pdf)**
> The latent trait of a model to avoid generating or endorsing factually unsupported or fabricated knowledge triples not grounded in the source text.

**[Web2Code: A Large-scale Webpage-to-Code Dataset and Evaluation Framework for Multimodal LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/cb66be286795d71f89367d596bf78ea7-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Anti-hallucination")**
> The latent tendency to avoid generating unsupported or false content in multimodal outputs.

**[KoLA: Carefully Benchmarking World Knowledge of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c26719edf1e6fba8f1ca7d3938e27785-Paper-Conference.pdf) (as "Knowledge hallucination")**
> The tendency of a model to generate content that is inconsistent with actual facts, even when those facts are provided, reflecting a failure in knowledge faithfulness.

**[Non-Existent Relationship: Fact-Aware Multi-Level Machine-Generated Text Detection](https://aclanthology.org/2025.emnlp-main.186.pdf) (as "Factuality hallucination")**
> The latent tendency of a language model to generate semantically plausible but factually ungrounded relationships between entities, reflecting a failure to align with real-world knowledge.

**[Domain-Agnostic Molecular Generation with Chemical Feedback](https://proceedings.iclr.cc/paper_files/paper/2024/file/ed7dd1e32cf9b0abf664bf0e891527e5-Paper-Conference.pdf) (as "Molecular hallucination")**
> The model's latent tendency to generate molecules that are structurally and syntactically correct but fail to exhibit the expected chemical activity or practical utility in real-world applications.

**[From Artificial Needles to Real Haystacks: Improving Retrieval Capabilities in LLMs by Finetuning on Synthetic Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/15a321fbfc19fce9b325ec6e77dfb597-Paper-Conference.pdf) (as "Hallucination tendency")**
> The latent propensity of the model to generate factually incorrect or unsupported content, potentially encouraged by finetuning data.

**[Knowledge Graph-Guided Retrieval Augmented Generation](https://aclanthology.org/2025.naacl-long.449.pdf) (as "Hallucination mitigation")**
> The latent ability of a model to refrain from generating false or unsupported content, particularly in response to ambiguous or unanswerable queries, when guided by appropriate demonstrations.

**[Leveraging Knowledge Graph-Enhanced LLMs for Context-Aware Medical Consultation](https://aclanthology.org/2025.emnlp-main.1549.pdf) (as "Hallucination reduction")**
> The degree to which a model avoids generating factually incorrect or unsupported medical information during consultation.

## Relationships

### Hallucination resistance →
- **POPE** (measurements) — *measured_by*
  > We assess our models’ ability toward anti-hallucination through POPE [29]. (Section 5)
  - [Web2Code: A Large-scale Webpage-to-Code Dataset and Evaluation Framework for Multimodal LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/cb66be286795d71f89367d596bf78ea7-Paper-Datasets_and_Benchmarks_Track.pdf)
- **HallusionBench** (measurements) — *measured_by*
  > HallusionBench focuses on diagnosing both the visual illusion and knowledge hallucination of MLLMs.
  - [EMMA: Empowering Multi-modal Mamba with Structural and Hierarchical Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/3760dbb5835bf0b771c3f83cb27ef2c0-Paper-Conference.pdf)
- **TriviaQA** (measurements) — *measured_by*
  > Gekhman et al. (2024) shows that finetuning on factual information encourages hallucinations, something that we verify observing the significant degradation on TriviaQA and NQ-Open, which are knowledge-based benchmarks.
  - [From Artificial Needles to Real Haystacks: Improving Retrieval Capabilities in LLMs by Finetuning on Synthetic Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/15a321fbfc19fce9b325ec6e77dfb597-Paper-Conference.pdf)
- **Natural Questions** (measurements) — *measured_by*
  > Gekhman et al. (2024) shows that finetuning on factual information encourages hallucinations, something that we verify observing the significant degradation on TriviaQA and NQ-Open, which are knowledge-based benchmarks.
  - [From Artificial Needles to Real Haystacks: Improving Retrieval Capabilities in LLMs by Finetuning on Synthetic Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/15a321fbfc19fce9b325ec6e77dfb597-Paper-Conference.pdf)
- **AMBER** (measurements) — *measured_by*
  > Hallucination: AMBER (Wang et al., 2023) provides a discriminative way to evaluate various types of hallucination
  - [From Introspection to Best Practices: Principled Analysis of Demonstrations in Multimodal In-Context Learning](https://aclanthology.org/2025.naacl-long.170.pdf)

### → Hallucination resistance
- **Multimodal alignment** (constructs) — *causes*
  > Due to better cross-modal alignment, our model exhibits lower degrees of hallucination
  - [EMMA: Empowering Multi-modal Mamba with Structural and Hierarchical Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/3760dbb5835bf0b771c3f83cb27ef2c0-Paper-Conference.pdf)
- **Information extraction** (behaviors tasks) — *causes*
  > Focusing on relevant table cells helps LLMs by providing the right context, thus reducing hallucinations in reasoning. (Section 2)
  - [H-STAR: LLM-driven Hybrid SQL-Text Adaptive Reasoning on Tables](https://aclanthology.org/2025.naacl-long.445.pdf)
