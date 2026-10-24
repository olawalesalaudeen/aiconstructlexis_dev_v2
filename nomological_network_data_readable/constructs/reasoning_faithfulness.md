# Reasoning faithfulness
**Type:** Construct  
**Referenced in:** 11 papers  
**Also known as:** Reasoning fidelity, Chain-of-thought faithfulness, Reasoning hallucinations  

## State of the Field

**Definition agreement:** Conflicting. Most papers define reasoning faithfulness as whether a model's stated reasoning trace reflects the actual basis or internal process behind its output, but several others use the term for different things: alignment between answer and chain of thought, explanation coherence with the input, grounding in evidence rather than shortcuts, or consistency between natural-language reasoning and generated program logic. Because these definitions attach the property to different objects and different reference points, papers using them would not be studying the same phenomenon.

**Space of definitions.** Across the papers, the prevailing usage treats reasoning faithfulness as agreement between a model's stated reasoning and the basis on which it reaches an answer: generated paths, traces, or chain-of-thought should reflect the actual process, internal decision-making, or true basis of the output, rather than hallucinated or misleading justifications. Smaller lines of work shift the reference point, defining it as the final conclusion adhering to the generated reasoning chain, as reasoning remaining grounded in provided evidence rather than shortcuts or "cheating", or as safety explanations that are coherent, logically sound, and faithful to the input prompt. One paper frames the failure side as "reasoning hallucinations", inconsistencies between natural-language reasoning steps and generated program logic.

**Space of facets.** Papers use several nearby names for overlapping but not identical notions, including reasoning faithfulness, reasoning fidelity, chain-of-thought faithfulness, and reasoning hallucinations. The main point of variation is what the reasoning should be faithful to: the model's internal decision-making or true basis of outputs, the model's own reasoning chain, the input prompt in safety decisions, provided evidence in multimodal settings, or the logic of generated programs. Where papers spell out failure modes, they describe internally inconsistent or unsupported inferences, and one paper breaks reasoning hallucinations into logical errors in code statements, missing or irrelevant steps, and correct steps that are misordered or improperly connected.

**Space of measurement.** Reasoning faithfulness is linked to 1 measurement instrument, CTC, and to no behavioral indicators. In the recorded measurement link, one paper says its evaluation assessed CTC together with BARTScore, BLURT, and human-evaluated faithfulness scores; nearby variants are also operationalized with an LLM judge, GPT-4.1-mini, which scores whether explanations faithfully reflect the input and defines explanation fidelity as the fraction of reasoning sentences judged coherent, and with analyses that compare natural-language reasoning to generated program logic for logical errors, missing steps, or misordered connections. The recorded operationalizations emphasize coherence, grounding, and agreement between explanations, reasoning, and outputs, while some definitions instead describe whether the reasoning trace reflects the model's internal decision-making process.

**Links.** The recorded links are all related links: reasoning faithfulness is related to 4 constructs, alignment, logical reasoning, logical consistency, and reasoning. Individual papers connect it to whether models reason faithfully or are prone to "cheating", to cases where derived conclusions do not adhere to the generated reasoning chain, to lack of rigorous logical coherence, and to the question of whether reasoning tokens are actually used to generate answers. No causal or correlational links are reported.

## Sources

**[Logic-of-Thought: Injecting Logic into Contexts for Full Reasoning in Large Language Models](https://aclanthology.org/2025.naacl-long.510.pdf)**
> The degree to which a model's generated reasoning path accurately reflects the actual process leading to its answer, avoiding hallucinated or misleading justifications.

**[MrGuard: A Multilingual Reasoning Guardrail for Universal LLM Safety](https://aclanthology.org/2025.emnlp-main.1392.pdf) (as "Reasoning fidelity")**
> The degree to which a model's generated explanation for a safety decision is coherent, logically sound, and faithfully reflects the content of the input prompt.

**[On Targeted Manipulation and Deception when Optimizing LLMs for User Feedback](https://proceedings.iclr.cc/paper_files/paper/2025/file/deed907f507e526a8dd20896d2bd7c49-Paper-Conference.pdf) (as "Chain-of-thought faithfulness")**
> The degree to which a model's explicit reasoning trace accurately reflects the true basis of its outputs.

**[Reasoning-as-Logic-Units: Scaling Test-Time Reasoning in Large Language Models Through Logic Unit Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25df/li25df.pdf) (as "Reasoning hallucinations")**
> The latent tendency of LLMs to generate reasoning steps in natural language that are inconsistent with the logic of generated programs, manifesting as logical errors, missing steps, or misordered connections despite seemingly correct justifications.

## Relationships

### Reasoning faithfulness →
- **BARTScore** (measurements) — *measured_by*
  > "The evaluation assessed BARTScore, CTC, BLURT, and human-evaluated faithfulness scores."
  - [Reasoning Aware Self-Consistency: Leveraging Reasoning Paths for Efficient LLM Sampling](https://aclanthology.org/2025.naacl-long.184.pdf)
- **CTC** (measurements) — *measured_by*
  > "The evaluation assessed BARTScore, CTC, BLURT, and human-evaluated faithfulness scores."
  - [Reasoning Aware Self-Consistency: Leveraging Reasoning Paths for Efficient LLM Sampling](https://aclanthology.org/2025.naacl-long.184.pdf)

### → Reasoning faithfulness
- **Hallucination** (behaviors tasks) — *causes*
  > LLMs still struggle with conducting faithful reasoning due to issues of lack of knowledge and hallucination (Section 1).
  - [Graph-constrained Reasoning: Faithful Reasoning on Knowledge Graphs with Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/luo25t/luo25t.pdf)

### Associated with
- **Reasoning** (constructs)
  > This question [Do LRMs actually leverage the reasoning tokens to generate answers?] is closely tied to active research areas including reasoning effectiveness (Ma et al., 2025), reasoning faithfulness (Chen et al., 2025), and model behavior monitoring (Baker et al., 2025). (Section 1)
  - [From Reasoning to Answer: Empirical, Attention-Based and Mechanistic Insights into Distilled DeepSeek R1 Models](https://aclanthology.org/2025.emnlp-main.198.pdf)
