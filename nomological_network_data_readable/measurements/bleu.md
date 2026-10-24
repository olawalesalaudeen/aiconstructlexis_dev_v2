# BLEU
**Type:** Measurement  
**Referenced in:** 20 papers  

## State of the Field

Across the provided literature, BLEU is consistently defined as a metric that measures the similarity between a generated text and one or more reference texts based on n-gram overlap. Its most prevalent application is evaluating the quality of machine translation, where it is used to assess "fluency and idiom translation" and overall "translation quality." However, its use extends to other text generation tasks, including text revision, the evaluation of code review comments, and multi-document question answering. Papers operationalize it at different granularities, such as at the "sentence-level and document-level." While widely used as a proxy for "fluency and syntactic similarity," one paper cautions that it can be a "misleading" metric for tasks like analogical reasoning, as it "can assign inflated similarity scores to fallacious answers" due to its insensitivity to deeper meaning. In practice, BLEU is frequently reported alongside other evaluation metrics, such as ROUGE-L, BERTScore, and COMET.

## Sources

**[Anticipating Future with Large Language Model for Simultaneous Machine Translation](https://aclanthology.org/2025.naacl-long.286.pdf)**
> A string similarity metric used to evaluate the overlap between generated and reference solutions in analogy tasks, though noted as potentially misleading due to insensitivity to meaningful analogical reasoning.

## Relationships

### → BLEU
- **Fluency** (constructs) — *measured_by*
  > “We use BLEU (Papineni et al., 2002), BERTScore (Zhang et al., 2020), and COMET (Rei et al., 2020) as standard evaluation metrics for translation tasks.”
  - [Large Language Models for Persian-English Idiom Translation](https://aclanthology.org/2025.naacl-long.405.pdf)
