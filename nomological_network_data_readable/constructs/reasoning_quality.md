# Reasoning quality
**Type:** Construct  
**Referenced in:** 10 papers  
**Also known as:** Proof accuracy, Reasoning logic, Reasoning comprehensiveness, Intermediate reasoning  

## State of the Field

**Definition agreement:** Consensus. Most papers define reasoning quality as the quality of the model's reasoning process itself, especially whether intermediate or chain of thought steps are logically correct, coherent, faithful, and sufficiently complete. A few papers emphasize particular aspects such as incorporating all relevant information from a document or correct task solutions, but these are isolated extensions or outliers rather than a substantial competing definition.

**Space of definitions.** Most papers treat reasoning quality as a property of the reasoning process itself: the chain of thought or intermediate steps should be logically valid, accurate, coherent, and sometimes comprehensive. Within that broad process-oriented usage, papers emphasize different facets, including logically correct and relevant proof steps, reliable and logically structured reasoning, inclusion of all relevant and potentially contradictory information, or correct intermediate steps rather than only the final answer. A smaller line of work uses the term more outcome-orientedly, as correct solutions on reasoning tasks discussed alongside efficiency, so the main disagreement is between process quality and task-level correctness, and between narrower facets and broader step quality.

**Space of facets.** Papers use several named facets rather than a single settled taxonomy. One decomposition treats chain-of-thought quality through recall and precision: recall measures reasoning informativeness by how many ground-truth solution steps appear, and precision measures faithfulness by how many generated steps are accurate. Other papers use nearby names for partly overlapping aspects, including proof accuracy, reasoning logic, reasoning comprehensiveness, and intermediate reasoning, and one framing explicitly contrasts these process properties with merely arriving at the final answer.

**Space of measurement.** Reasoning quality is linked to 2 measurement instruments, LLM-as-a-judge and MR-GSM8K, and no behavioral indicator is linked to it. In the judge-based operationalization, GPT-4o is prompted to match annotated solution steps for recall and to split a response into steps and judge the correctness of image-caption and logical-inference steps for precision; the other operationalization uses the MR-GSM8K benchmark as an evaluation of intermediate reasoning ability. The linked instruments make step-level validity, faithfulness, and intermediate-step ability explicit, while the provided links do not tie separate instruments to the broader comprehensiveness or efficiency framings.

**Links.** Beyond measurement, one paper claims a causal relationship from Self-reflection ability to Reasoning quality, reporting that models with a reflection mechanism demonstrate superior CoT quality. No correlational or undirected related links are reported.

## Sources

**[MME-CoT: Benchmarking Chain-of-Thought in Large Multimodal Models for Reasoning Quality, Robustness, and Efficiency](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jiang25n/jiang25n.pdf)**
> The degree to which a model's chain-of-thought process is logically valid, accurate, and comprehensive in its steps.

**[SymBa: Symbolic Backward Chaining for Structured Natural Language Reasoning](https://aclanthology.org/2025.naacl-long.124.pdf) (as "Proof accuracy")**
> The degree to which a model's generated reasoning steps are both logically correct and relevant to the final conclusion, reflecting faithful internal reasoning.

**[Unilaw-R1: A Large Language Model for Legal Reasoning with Reinforcement Learning and Iterative Inference](https://aclanthology.org/2025.emnlp-main.915.pdf) (as "Reasoning logic")**
> The degree to which the model produces reliable, coherent, and logically structured reasoning rather than inconsistent or incoherent chains.

**[Think Wider, Detect Sharper: Reinforced Reference Coverage for Document-Level Self-Contradiction Detection](https://aclanthology.org/2025.emnlp-main.67.pdf) (as "Reasoning comprehensiveness")**
> The latent ability of a model to include all relevant, potentially contradictory information from a document in its reasoning process, reflecting the breadth and thoroughness of its analysis.

**[ThinkSLM: Towards Reasoning in Small Language Models](https://aclanthology.org/2025.emnlp-main.1659.pdf) (as "Intermediate reasoning")**
> The ability to correctly perform the intermediate steps within a larger reasoning process, as opposed to only arriving at the final answer.

## Relationships

### Reasoning quality →
- **Sampling efficiency** (constructs) — *causes*
  > "RASC enhances sampling efficiency and reasoning faithfulness by dynamically evaluating both outputs and rationales."
  - [Reasoning Aware Self-Consistency: Leveraging Reasoning Paths for Efficient LLM Sampling](https://aclanthology.org/2025.naacl-long.184.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > For recall, we prompt GPT-4o to match each key step annotation in the prediction. For precision, GPT-4o is instructed to split the prediction into steps and determine the correctness of all the image caption and logical inference steps. (Figure 4)
  - [MME-CoT: Benchmarking Chain-of-Thought in Large Multimodal Models for Reasoning Quality, Robustness, and Efficiency](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jiang25n/jiang25n.pdf)
- **Math-Shepherd** (measurements) — *measured_by*
  > To evaluate the generalization of SpecSearch across thought evaluators, we test it with two PRMs—Math-Shepherd (Wang et al., 2024c) and MATH-psa (Wang et al., 2024a)—on beam search. (Section 5)
  - [Accelerating Large Language Model Reasoning via Speculative Search](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25di/wang25di.pdf)
- **Reward model** (measurements) — *measured_by*
  > “For example, a process reward model (PRM) can be employed to assign a reward score to each thought, offering an accurate evaluation of its quality.”
  - [Accelerating Large Language Model Reasoning via Speculative Search](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25di/wang25di.pdf)
- **MR-GSM8K** (measurements) — *measured_by*
  > MR-GSM8K, which evaluates intermediate reasoning ability (Zeng et al., 2024a)
  - [ThinkSLM: Towards Reasoning in Small Language Models](https://aclanthology.org/2025.emnlp-main.1659.pdf)

### → Reasoning quality
- **Self-reflection ability** (constructs) — *causes*
  > “Models with reflection mechanism demonstrate a superior CoT quality”
  - [MME-CoT: Benchmarking Chain-of-Thought in Large Multimodal Models for Reasoning Quality, Robustness, and Efficiency](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jiang25n/jiang25n.pdf)
