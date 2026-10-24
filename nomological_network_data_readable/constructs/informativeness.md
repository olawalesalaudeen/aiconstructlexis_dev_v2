# Informativeness
**Type:** Construct  
**Referenced in:** 28 papers  

## State of the Field

**Definition agreement:** Consensus. Most papers use informativeness for the amount of relevant, useful, complete, and non-redundant information a generated textual artifact conveys or preserves, such as responses, summaries, timelines, commentary, or reasoning steps. A few papers apply the term to latent factors or synthetic training samples instead, but these are minor outliers relative to the dominant shared definition.

**Space of definitions.** Across the surveyed work, the prevailing usage treats informativeness as a quality criterion for model outputs: how much relevant, useful, complete, or adequately detailed information generated text, responses, commentary, or summaries provide. Many definitions add a coverage standard, saying the output should capture the main information without omission, and several also add a non-redundancy standard, describing informative content as new rather than repeated. A smaller line of work uses the same term for preserving useful non-conflicting content during revision, for the usefulness of individual reasoning steps or discovered latent factors, or for the information density of condensed training samples.

**Space of facets.** Papers most often unpack informativeness into facets such as relevance, completeness, useful detail, and coverage of main information. Some make those facets explicit: chess commentary work defines it through relevance and completeness, multimodal chain-of-thought work treats an informative step as one that adds new information and avoids redundancy, and timeline summarization describes it as the effective volume of information that captures main events without being overly verbose. The label is therefore applied at different levels, from whole responses and summaries to single reasoning steps, latent factors, and synthetic samples.

**Space of measurement.** Operationalization is concentrated in four measurement instruments and one linked behavioral indicator. The most common recorded instruments are Human evaluation and LLM-as-a-judge, followed by TruthfulQA and FreshWiki: papers mention manual ratings of responses or explanations, judge models and GPT-4 scores for informativeness, TruthfulQA's INFO metric, and evaluation on FreshWiki for Wikipedia generation. These recorded measures focus on judged response quality, while some definitions in papers apply the term to reasoning steps, latent factors, or condensed samples.

**Links.** Beyond measurement, papers most often connect informativeness to Truthfulness. They describe the link as related rather than identical: one line of work warns that not assessing informativeness can yield misleadingly high truthfulness scores, while another notes that a truthful answer can still be uninformative, for example "I have no comment." One paper also claims a causal relationship from informativeness to Harmlessness in jailbreak settings, citing human evaluation that actionability and informativeness are attributes in inducing harm, and another paper relates Bias mitigation to informativeness by presenting them as separate objectives; no correlational claim is recorded.

## Sources

**[Language Model Decoding as Direct Metrics Optimization](https://proceedings.iclr.cc/paper_files/paper/2024/file/7416573f05b50beac6d0aef3abc805c0-Paper-Conference.pdf)**
> The extent to which generated text provides adequate, engaging detail in a coherent plot according to human judgment.

## Relationships

### Informativeness →
- **TruthfulQA** (measurements) — *measured_by*
  > TruthfulQA (Lin et al., 2022) is perhaps the most popular benchmark to evaluate truthfulness in LLMs, a benchmark to assess the truthfulness and informativeness of LLMs by focusing on imitative falsehoods. (Section 1)
  - [Truth Knows No Language: Evaluating Truthfulness Beyond English](https://aclanthology.org/2025.acl-long.1507.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > We perform a manual evaluation of 400 responses for truthfulness and informativeness... (Section 3.2.1)
  - [Truth Knows No Language: Evaluating Truthfulness Beyond English](https://aclanthology.org/2025.acl-long.1507.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > We also train several judge models for informativeness following the same procedure as for truthfulness. (Section 3.2.4)
  - [Truth Knows No Language: Evaluating Truthfulness Beyond English](https://aclanthology.org/2025.acl-long.1507.pdf)
- **FreshWiki** (measurements) — *measured_by*
  > We conduct extensive experiments on the FreshWiki dataset and our newly constructed WikiStart dataset, demonstrating that MOG achieves state-of-the-art performance in both informativeness and verifiability. (Section 1)
  - [Hierarchical Memory Organization for Wikipedia Generation](https://aclanthology.org/2025.acl-long.1423.pdf)
- **QuestEval** (measurements) — *measured_by*
  > three reference-free metrics, SummaC (Laban et al., 2022), QuestEval (Scialom et al., 2021), and Entailment Scores (Liu et al., 2024) which evaluate factual consistency, informativeness, and entailment relative to the source document for purposes of our evaluation.
  - [uMedSum: A Unified Framework for Clinical Abstractive Summarization](https://aclanthology.org/2025.acl-long.134.pdf)
- **Harmlessness** (constructs) — *causes*
  > Through human evaluation, we determine actionability and informativeness as key attributes in inducing harm when the jailbroken response is followed by individuals without specialized knowledge. (Section 1)
  - [Speak Easy: Eliciting Harmful Jailbreaks from LLMs with Simple Interactions](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chan25b/chan25b.pdf)

### Associated with
- **Truthfulness** (constructs)
  > This finding highlights the critical importance of assessing informativeness metrics specifically for non-instruction-tuned models, as failing to do so may result in misleadingly high truthfulness scores. (Section 5)
  - [Truth Knows No Language: Evaluating Truthfulness Beyond English](https://aclanthology.org/2025.acl-long.1507.pdf)
