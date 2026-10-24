# Plausibility
**Type:** Construct  
**Referenced in:** 14 papers  

## State of the Field

**Definition agreement:** Consensus. Most papers define plausibility as how sensible, credible, coherent, and factually or relevantly grounded an explanation or rationale appears to people, often independent of answer correctness or faithfulness, so they target the same core property of explanatory outputs. One paper applies the same credibility and reasonableness idea to a hypothesis judged by experts rather than an explanation, but this looks like an outlying scope shift rather than a substantial competing definition.

**Space of definitions.** Across the surveyed work, the prevailing usage treats plausibility as a human-facing quality of generated explanations or rationales: they should make sense on their own, be relevant to the question, and be logical, common, or factually supported. Several definitions also separate it from answer correctness or internal faithfulness, describing plausible explanations as intuitive, coherent, and convincing even when the focus is not on whether they mirror the model's decision process. A smaller line of work applies the term to hypotheses, where plausibility is the perceived credibility and reasonableness of a hypothesis as judged by human experts and aligned with domain knowledge.

**Space of facets.** The clearest systematization is through neighboring constructs. Several papers pair plausibility with faithfulness, either as a complementary property of explanations that align with human understanding or as part of a trade-off, and another paper uses plausibility and faithfulness as the metrics for explainability. One paper also distinguishes implausibility from hallucination: implausibility refers to explanations that lack informativeness, while hallucination refers to contradiction with visual-grounded facts.

**Space of measurement.** Plausibility is linked to 3 measurement instruments and no behavioral indicators. Human evaluation is the most common linked instrument, used for explanation ratings and for Likert judgments that include plausibility among several criteria; BLiMP is used to examine whether attributions align with human-understood linguistic rationales; and LLM-as-a-judge is used to rate whether action sequences are reasonable, likely, or believable given context and known behavior patterns. These operationalizations keep the focus on judged plausibility, whether through human ratings, alignment with human-understood rationales, or contextual believability, but they are applied to explanations, attributions, and action sequences rather than to a single output type.

**Links.** Beyond measurement, plausibility is most often linked to interpretability and explainability, faithfulness, and reasoning. Papers place it within interpretability and explainability by describing explanations as ideally both faithful and plausible, and one paper explicitly discusses a trade-off between plausibility and faithfulness. One paper also claims a causal relationship from plausibility to reasoning, reporting that improving plausibility scores improves the model's reasoning. No correlation link is reported.

## Sources

**[RAPPER: Reinforced Rationale-Prompted Paradigm for Natural Language Explanation in Visual Question Answering](https://proceedings.iclr.cc/paper_files/paper/2024/file/b364c8cbb3f229f40d5873e877391bd2-Paper-Conference.pdf)**
> The quality of a model's generated explanation being relevant to the input question and supported by established, language-based facts.

## Relationships

### Plausibility →
- **Human evaluation** (measurements) — *measured_by*
  > In addition, we build human evaluation for explanation on plausibility and faithfulness since automatic metric measures not always reflect the correctness and logicality. (Section 4.2)
  - [RAPPER: Reinforced Rationale-Prompted Paradigm for Natural Language Explanation in Visual Question Answering](https://proceedings.iclr.cc/paper_files/paper/2024/file/b364c8cbb3f229f40d5873e877391bd2-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > When evaluating the likelihood of the activity sequences, GPT-4o is instructed to take the following criteria into account: ... Plausibility: How reasonable, likely, or believable a sequence of actions is, given the circumstances, context, and known behavior patterns.
  - [Simulating Human-like Daily Activities with Desire-driven Autonomy](https://proceedings.iclr.cc/paper_files/paper/2025/file/513cb685f67550dbd133b81a7a24249f-Paper-Conference.pdf)
- **Reasoning** (constructs) — *causes*
  > We also observe that guiding models to focus on explanation signals from our dataset during training improves the plausibility Token F1 score by 3-4%, improving the model’s reasoning. (Abstract)
  - [Main Predicate and Their Arguments as Explanation Signals For Intent Classification](https://aclanthology.org/2025.naacl-long.539.pdf)
- **BLiMP** (measurements) — *measured_by*
  > ...to examine its plausibility, i.e., the extent to which its attributions align with human-understood linguistic rationales provided by BLiMP... (Section 5)
  - [NormXLogit: The Head-on-Top Never Lies](https://aclanthology.org/2025.emnlp-main.1769.pdf)

### Associated with
- **Interpretability and explainability** (constructs)
  > Ideally, the explanation should be both faithful (reflecting the model’s actual behavior) and plausible (aligning with human understanding)
  - [Is the MMI Criterion Necessary for Interpretability? Degenerating Non-causal Features to Plain Noise for Self-Rationalization](https://proceedings.neurips.cc/paper_files/paper/2024/file/d53d51e88d92d3723755f6d425bc513b-Paper-Conference.pdf)
- **Faithfulness** (constructs)
  > In terms of interpretability, this paper focuses on the trade-off between plausibility and faithfulness. (Section 4.3)
  - [Judge and Improve: Towards a Better Reasoning of Knowledge Graphs with Large Language Models](https://aclanthology.org/2025.emnlp-main.269.pdf)
