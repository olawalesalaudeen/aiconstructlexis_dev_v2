# Short-form question answering
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Short answer generation, Short-answer question answering  

## State of the Field

**Space of definitions.** Most definitions treat this behavior as giving a concise, direct answer to a question, usually factual and without elaborate explanation. Some authors narrow the expected response to a single word or phrase, while a smaller domain-specific formulation uses brief textual answers to semi-open financial questions, described as a few words or phrases or selected from specific options. Another formulation also includes abstention, allowing the model to answer the query or respond with "I don't know".

**Variants.** Papers use several nearby names, including short-form question answering, short answer generation, and short-answer question answering. The main settings are general factual QA and objective short-answer questions in financial industry knowledge; some versions are framed as semi-open questions, and some explicitly require single-word or single-phrase outputs.

**Space of elicitation and scores.** Papers link this behavior to two measurement instruments: TriviaQA and UNCLE. TriviaQA is used as a short-form question answering task, while UNCLE is described as a benchmark designed to evaluate uncertainty expression in both long- and short-form QA.

**What it is taken as evidence of.** The papers do not link this behavior to any construct.

## Sources

**[Calibrating Verbal Uncertainty as a Linear Feature to Reduce Hallucinations](https://aclanthology.org/2025.emnlp-main.187.pdf)**
> The task of generating a concise, direct answer to a factual question, typically without providing elaborate explanations.

**[SEFE: Superficial and Essential Forgetting Eliminator for Multimodal Continual Instruction Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25n/chen25n.pdf) (as "Short answer generation")**
> Generating a concise response to a question using a single word or phrase.

**[FinEval: A Chinese Financial Domain Knowledge Evaluation Benchmark for Large Language Models](https://aclanthology.org/2025.naacl-long.318.pdf) (as "Short-answer question answering")**
> Producing brief textual answers to semi-open financial questions.

## Relationships

### Short-form question answering →
- **TriviaQA** (measurements) — *measured_by*
  > We conduct our experiments with a multiple-choice (MMLU (Hendrycks et al., 2020)) and a short-form (TriviaQA (Joshi et al., 2017)) question answering task, so that we can precisely characterize a model’s output distributions. (Section 4.2)
  - [Unfamiliar Finetuning Examples Control How Language Models Hallucinate](https://aclanthology.org/2025.naacl-long.183.pdf)
- **UNCLE** (measurements) — *measured_by*
  > we first introduce UNCLE, a benchmark designed to evaluate uncertainty expression in both long- and short-form question answering (QA). (Abstract)
  - [UNCLE: Benchmarking Uncertainty Expressions in Long-Form Generation](https://aclanthology.org/2025.emnlp-main.1543.pdf)
