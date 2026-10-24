# MiniCheck
**Type:** Measurement  
**Referenced in:** 9 papers  
**Also known as:** Minicheck  

## State of the Field

Across the provided literature, MiniCheck is most commonly characterized as an automatic metric used to evaluate the faithfulness of generated text. It is frequently defined as a trained, distilled Natural Language Inference (NLI) model that assesses summary-document entailment. Papers operationalize this by using MiniCheck to generate an entailment score between a claim and its evidence or to score the consistency of individual statements against source documents. The primary construct it is used to measure is Faithfulness, with some papers also describing it as a "hallucination detector" that classifies whether content is supported by context ("Does Context Matter? ContextualJudgeBench for Evaluating LLM-based Judges in Contextual Settings"). The evaluation process is noted to sometimes involve internal document chunking, comparing generated summary sentences against these chunks. A less common framing describes it simply as a "verifier" model, used alongside other verifiers like AlignScore. Its application is noted in summarization tasks and long-context settings, where one study reports its efficacy is "comparable to GPT-4 performance" ("On Positional Bias of Faithfulness for Long-form Summarization").

## Sources

**[Decomposition Dilemmas: Does Claim Decomposition Boost or Burden Fact-Checking Performance?](https://aclanthology.org/2025.naacl-long.320.pdf) (as "Minicheck")**
> A model used as a verifier to generate an entailment score between 0 and 1 for a claim and its corresponding evidence.

**[MAMM-Refine: A Recipe for Improving Faithfulness in Generation with Multi-Agent Collaboration](https://aclanthology.org/2025.naacl-long.498.pdf)**
> An automatic faithfulness metric based on a distilled NLI model that evaluates summary-document entailment, used here in long-context settings with document-level aggregation.

## Relationships

### → MiniCheck
- **Faithfulness** (constructs) — *measured_by*
  > To do so, we calculate the Minicheck faithfulness score with respect to all documents individually.
  - [On Positional Bias of Faithfulness for Long-form Summarization](https://aclanthology.org/2025.naacl-long.442.pdf)
