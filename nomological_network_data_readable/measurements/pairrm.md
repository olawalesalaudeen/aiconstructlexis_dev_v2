# PairRM
**Type:** Measurement  
**Referenced in:** 8 papers  

## State of the Field

Across the provided literature, PairRM is consistently characterized as an external, pre-trained reward model used for evaluation. Its prevailing function is to serve as an automated judge or baseline instrument for assessing preferences between different model-generated responses. Papers operationalize this by using PairRM to rank multiple text generations, a process that can inform alignment training and evaluation. The source material describes it as a "strong" and "powerful" model, with one study noting its "state-of-art performance in AlpacaEval2.0 benchmark." In line with its definition as an adjudicator, PairRM is explicitly used as a tool for `Evaluation`.

## Sources

**[Spread Preference Annotation: Direct Preference Judgment for Efficient LLM Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/342e5fc02b86dec9b24e41b22968e539-Paper-Conference.pdf)**
> An external, pre-trained reward model used as a baseline instrument for judging preferences between model-generated responses.

## Relationships

### → PairRM
- **Preference prediction** (behaviors tasks) — *measured_by*
  > "using an external reward model (PairRM (Jiang et al., 2023b)) for the preference judgment"
  - [Spread Preference Annotation: Direct Preference Judgment for Efficient LLM Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/342e5fc02b86dec9b24e41b22968e539-Paper-Conference.pdf)
