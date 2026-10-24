# FLASK
**Type:** Measurement  
**Referenced in:** 7 papers  

## State of the Field

**What it is.** Most papers treat FLASK as a fine-grained benchmark or evaluation protocol for particular LLM skill sets. Definitions vary in emphasis: some describe it as a benchmark for single-instance rating or for assessing LLM-as-a-judge performance, while another describes it as a protocol for both human-based and model-based evaluation. One definition specifies 200 test prompts and 2000 responses from Alpaca-7B, Vicuna-13B, Bard, and GPT-3.5-Turbo-0613, and another highlights a logical thinking category with logical correctness, logical robustness, and logical efficiency.

**What it is claimed to measure.** Papers use FLASK to measure 7 constructs and no behavioral indicators, so its reported measurement role is spread across several targets rather than centered on one. The prevailing framing is granular evaluation: one paper says it offers 12 skill-specific scores, and papers report that it measures Factuality, Completeness, Insightfulness, Logical consistency, and Metacognition, plus 2 other constructs. One paper further narrows this use to the logical thinking category when using FLASK to measure Logical consistency.

**Space of uses.** Papers link FLASK to 3 other measurement instruments: GSM8K, LLM-as-a-judge, and MMLU. MMLU and GSM8K are reported as related datasets used when collecting instruction and reference-answer pairs, while LLM-as-a-judge is connected through measured_by claims in both directions: one paper claims FLASK is measured by LLM-as-a-judge, and another claims LLM-as-a-judge is measured by FLASK. Separate definitions also position FLASK as a benchmark for assessing LLM-as-a-judge performance across diverse model outputs, as a single-rating benchmark, and as a model-based protocol for generated rationales, with one paper noting high correlation with human-based evaluation.

## Sources

**[Style Outweighs Substance: Failure Modes of LLM Judges in Alignment Benchmarking](https://proceedings.iclr.cc/paper_files/paper/2025/file/1eb36d07ebb13be16ddbda679a95018b-Paper-Conference.pdf)**
> A benchmark designed for fine-grained evaluation of particular LLM skill sets.

## Relationships

### → FLASK
- **Insightfulness** (constructs) — *measured_by*
  > FLASK, on the other hand, offers a more granular evaluation with 12 skill-specific scores... Specifically, our methodology shows improvement in robustness, correctness, insightfulness
  - [Mixture-of-Agents Enhances Large Language Model Capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/5434be94e82c54327bb9dcaf7fca52b6-Paper-Conference.pdf)
- **Text generation quality** (constructs) — *measured_by*
  > We conduct comprehensive evaluations using AlpacaEval 2.0, Arena-Hard, MT-Bench, FLASK benchmarks for assessing the response quality across various dimensions.
  - [Mixture-of-Agents Enhances Large Language Model Capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/5434be94e82c54327bb9dcaf7fca52b6-Paper-Conference.pdf)
- **Logical consistency** (constructs) — *measured_by*
  > we employ FLASK (Ye et al., 2024), a fine-grained evaluation protocol for model-based evaluation, which exhibits a high correlation with human-based evaluation. Specifically, we focus on the ‘logical thinking’ category in FLASK, which encompasses three aspects: logical correctness, logical robustness, and logical efficiency.
  - [Self-Training Meets Consistency: Improving LLMs' Reasoning with Consistency-Driven Rationale Evaluation](https://aclanthology.org/2025.naacl-long.528.pdf)
- **Logical reasoning** (constructs) — *measured_by*
  > Specifically, we focus on the ‘logical thinking’ category in FLASK, which encompasses three aspects: logical correctness, logical robustness, and logical efficiency. (Section 5.4)
  - [Self-Training Meets Consistency: Improving LLMs' Reasoning with Consistency-Driven Rationale Evaluation](https://aclanthology.org/2025.naacl-long.528.pdf)

### Associated with
- **MMLU** (measurements)
  > We first collect input (instruction) and output (reference answer) pairs from various English NLP datasets, both multi-task datasets (e.g. MMLU (Hendrycks et al., 2020))... (Section 3.2)
  - [FLASK: Fine-grained Language Model Evaluation based on Alignment Skill Sets](https://proceedings.iclr.cc/paper_files/paper/2024/file/f41b4a6b202adcd8e150a9d4f124d8f6-Paper-Conference.pdf)
- **GSM8K** (measurements)
  > We first collect input (instruction) and output (reference answer) pairs from various English NLP datasets, ... and single-task datasets (e.g. GSM8K (Cobbe et al., 2021)). (Section 3.2)
  - [FLASK: Fine-grained Language Model Evaluation based on Alignment Skill Sets](https://proceedings.iclr.cc/paper_files/paper/2024/file/f41b4a6b202adcd8e150a9d4f124d8f6-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements)
  > “FLASK (Fine-grained Language Model Evaluation based on Alignment SKill Sets), a fine-grained evaluation protocol for both human-based and model-based evaluation”
  - [FLASK: Fine-grained Language Model Evaluation based on Alignment Skill Sets](https://proceedings.iclr.cc/paper_files/paper/2024/file/f41b4a6b202adcd8e150a9d4f124d8f6-Paper-Conference.pdf)
