# Calculation error
**Type:** Behavior  
**Referenced in:** 4 papers  

## State of the Field

**Space of definitions.** The available definition treats calculation error as an observable error in which a model gives an incorrect result because of mistakes in numerical or symbolic computation, even when the reasoning process may otherwise be correct. In UGMathBench: A Diverse and Dynamic Benchmark for Undergraduate-Level Mathematical Reasoning with Large Language Models, the accompanying error analysis describes calculation errors as "a major concern" and says they are the "largest category," specifically "including both numerical and expression errors."

**Variants.** Papers describe this behavior in a small set of closely related forms. The named variants are numeric calculation error and expression calculation error, and the broader wording also refers to mistakes in numerical or symbolic computation.

**Space of elicitation and scores.** Papers link calculation error to one measurement instrument, Expert evaluation. In Are Multimodal LLMs Robust Against Adversarial Perturbations? RoMMath: A Systematic Evaluation on Multimodal Math Reasoning, it is measured by expert evaluation through "in-depth human analysis" of error cases, where Calculation Error is identified as one of the common error types.

## Sources

**[UGMathBench: A Diverse and Dynamic Benchmark for Undergraduate-Level Mathematical Reasoning with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c3af3531df85264decc31382cb319781-Paper-Conference.pdf)**
> An observable error where the model produces an incorrect result due to mistakes in numerical or symbolic computation, despite potentially having a correct reasoning process.

## Relationships

### Calculation error →
- **Manual error analysis** (measurements) — *measured_by*
  > we conduct an in-depth human analysis of the error cases... Through in-depth analysis, we have identified the following ﬁve common error types that current MLLMs are likely to make: ... (5) Calculation Error... (Section 4)
  - [Are Multimodal LLMs Robust Against Adversarial Perturbations? RoMMath: A Systematic Evaluation on Multimodal Math Reasoning](https://aclanthology.org/2025.naacl-long.582.pdf)
