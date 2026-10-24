# AlignBench
**Type:** Measurement  
**Referenced in:** 5 papers  

## State of the Field

**What it is.** Across papers, the prevailing description is a Chinese benchmark of 683 samples for evaluating LLM alignment. It is commonly presented as multidimensional, with a rule-calibrated LLM-as-judge procedure and Chain-of-Thought reasoning for evaluation, and some descriptions add that different question types have manually set evaluation dimensions. One paper also treats it as a benchmark from which Clarity, Completeness, and Factuality are drawn.

**What it is claimed to measure.** Papers use it to evaluate alignment, variously phrased as LLM alignment, alignment capabilities of LLMs in Chinese, or model alignment across multiple dimensions. One paper further reports using Clarity, Completeness, and Factuality from AlignBench for quality assessment. No constructs and no behavioral indicators are linked to it in the reported relationships.

**Space of uses.** Most papers position it as an evaluation benchmark rather than alongside other named instruments. A smaller use treats it as a source of metrics, where a model predicts instruction and instruction-response scores based on Clarity, Completeness, and Factuality from AlignBench. No other measurement instruments are linked to it.

## Sources

**[CAMIEval: Enhancing NLG Evaluation through Multidimensional Comparative Instruction-Following Analysis](https://aclanthology.org/2025.naacl-long.438.pdf)**
> A Chinese benchmark of 683 samples that evaluates LLM alignment using a rule-calibrated, multidimensional LLM-as-judge procedure with Chain-of-Thought reasoning.
