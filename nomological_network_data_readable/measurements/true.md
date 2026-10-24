# TRUE
**Type:** Measurement  
**Referenced in:** 5 papers  

## State of the Field

**What it is.** Across the papers, the prevailing description treats TRUE as a fine-tuned T5-11B Natural Language Inference model used as an evaluator inside broader evaluation frameworks. Definitions consistently describe it as judging whether a source passage or premise entails a generated claim or hypothesis, and one paper makes this explicit by using it as an evaluator whose output is 1 for entailment and 0 otherwise; another describes it as fine-tuned on a collection of NLI datasets.

**What it is claimed to measure.** Papers link TRUE to two constructs, most commonly Citation quality and also Faithfulness, and to no behavioral indicators. The measurement claims are concentrated around entailment-based evaluation: papers use it to measure Citation quality by judging entailment in citations or verifying whether a claim is fully supported by cited documents, and they report it as measuring Faithfulness through factual consistency evaluation in context.

**Space of uses.** Papers do not link TRUE to any other measurement instrument. They generally position it as an NLI component or evaluator within larger evaluation pipelines, including citation rewrite and citation quality evaluation, and one paper uses it alongside GPT-4o as another NLI model for factual consistency evaluation.

## Sources

**[PA-RAG: RAG Alignment via Multi-Perspective Preference Optimization](https://aclanthology.org/2025.naacl-long.459.pdf)**
> A fine-tuned T5-11B model used as the Natural Language Inference (NLI) component within evaluation frameworks to judge the entailment between a source passage and a generated claim.

## Relationships

### → TRUE
- **Citation quality** (constructs) — *measured_by*
  > We use TRUE3, a fine-tuned T5-11B (Raffel et al., 2020) model as the NLI model for the judgement of entailment in citation quality. (Section 4)
  - [ALiiCE: Evaluating Positional Fine-grained Citation Generation](https://aclanthology.org/2025.naacl-long.23.pdf)
- **Faithfulness** (constructs) — *measured_by*
  > for the Abstract Writing task, we employ TRUE (Honovich et al., 2022), along with GPT-4o as NLI models for evaluating factual consistency in context
  - [Large Language Models for Automated Literature Review: An Evaluation of Reference Generation, Abstract Writing, and Review Composition](https://aclanthology.org/2025.emnlp-main.83.pdf)
