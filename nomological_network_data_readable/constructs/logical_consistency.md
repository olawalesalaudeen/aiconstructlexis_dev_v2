# Logical consistency
**Type:** Construct  
**Referenced in:** 45 papers  
**Also known as:** Logical robustness, Logical coherence, Solution consistency, Logicality, Reasoning coherence, Logical plausibility  

## State of the Field

**Definition agreement:** Complementary. Most papers define logical consistency as a model's or agent's reasoning or output being internally coherent, well structured, and free of contradictions across steps or within a response. A smaller but notable group extends this to consistency across logically related queries, predictions, or belief sets, so the definitions emphasize different scopes of the same property of model outputs and reasoning rather than different constructs, with only a few outliers drifting toward rule compliance or human-like operational patterns.

**Space of definitions.** Across the surveyed work, the dominant framing treats logical consistency as internal coherence and absence of contradiction in a model's output or reasoning, often described as logically structured across steps and free of logical errors. Papers use this framing for responses, explanations, dialogues, summaries, programs, and long-form or spoken reasoning, and one evaluation framework adds general applicability during step-by-step reasoning. A smaller line of work defines it more narrowly as adherence to logical relations across paired or decomposed items, such as a statement and its negation, beliefs over related claims, or atomic sub-problems constrained by an overall NLI prediction, while a few papers tie it to conclusions following from premises, invariant decisions across equivalent representations, adherence to domain rules, or human-like operational logic.

**Space of facets.** Papers use several nearby names for closely related ideas, including logical robustness, logical coherence, solution consistency, logicality, and reasoning coherence, while one paper uses a plausibility label for sub-queries. In one framework, logical robustness is a fine-grained skill under Logical Thinking, alongside Logical Correctness and Logical Efficiency. The same label is also applied to different objects, including whole responses and dialogues, chains of reasoning, alignment between natural-language rationales and code behavior, sub-query fit with prior context, consistency across related beliefs, and similarity between agent and human operational logic.

**Space of measurement.** Operationally, papers link logical consistency to 4 measurement instruments and 5 behavioral indicators overall. The most common instruments are Human evaluation, LLM-as-a-judge, FLASK, and SNLI: human annotators select the most logical rationale or rate outputs on the same dimensions as automatic evaluation, LLM judges score dimensions such as logical coherence, logical consistency, clarity, and lack of ambiguity, FLASK treats it as a fine-grained evaluation skill, and SNLI measures consistency between original instances and atomic sub-problems. Among the linked behavioral indicators, Fact checking is also used directly to assess it through propositional logic queries and logic rules, so the operationalizations mostly follow the dominant non-contradiction framing, though some narrow it to logically related query pairs or overall versus decomposed predictions.

**Links.** No correlational link is reported. Papers relate logical consistency to Factuality, Logical reasoning, Reasoning faithfulness, and Hallucination. For causal claims, one paper reports a relationship from logical consistency to Hallucination and says a logically consistent LLM is less likely to hallucinate, another reports a relationship from logical consistency to Factuality through consistency across beliefs, and papers also record a bidirectional pair with Self-reflection plus two additional causal links involving other behavioral indicators, one bidirectional and one incoming.

## Sources

**[FLASK: Fine-grained Language Model Evaluation based on Alignment Skill Sets](https://proceedings.iclr.cc/paper_files/paper/2024/file/f41b4a6b202adcd8e150a9d4f124d8f6-Paper-Conference.pdf) (as "Logical robustness")**
> The degree to which a response remains logically consistent and generally applicable throughout its reasoning process without contradictions.

**[BooookScore: A systematic exploration of book-length summarization in the era of LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/f7b77476d89d5fb58aeb77691d2f40f5-Paper-Conference.pdf)**
> The absence of internal contradictions or discrepancies within the plot, character development, or themes of a generated summary.

**[MMDU: A Multi-Turn Multi-Image Dialog Understanding Benchmark and Instruction-Tuning Dataset for LVLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/1057053100de064a44286239724f7865-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Logical coherence")**
> The quality of a model's generated output being logically structured, consistent, and free from contradictions.

**[Step-by-Step Reasoning for Math Problems  via Twisted Sequential Monte Carlo](https://proceedings.iclr.cc/paper_files/paper/2025/file/a4d92f656cc99f60fe1bfc98386aee34-Paper-Conference.pdf) (as "Solution consistency")**
> The degree to which the model maintains logical coherence and correctness throughout the entire reasoning process.

**[LongReward: Improving Long-context Large Language Models with AI Feedback](https://aclanthology.org/2025.acl-long.187.pdf) (as "Logicality")**
> The extent to which a model's response is internally consistent and free from logical errors or contradictions.

**[SoundMind: RL-Incentivized Logic Reasoning for Audio-Language Models](https://aclanthology.org/2025.emnlp-main.27.pdf) (as "Reasoning coherence")**
> The degree to which a model's reasoning process maintains logical consistency and structural integrity across long-form outputs, especially when generating spoken responses.

**[RAG-Star: Enhancing Deliberative Reasoning with Retrieval Augmented Verification and Refinement](https://aclanthology.org/2025.naacl-long.361.pdf) (as "Logical plausibility")**
> The degree to which intermediate sub-queries or reasoning steps are logically consistent with the prior reasoning context.

## Relationships

### Logical consistency →
- **Hallucination** (behaviors tasks) — *causes*
  > A logically consistent LLM is less likely to hallucinate since its response is unlikely to change due to the logical manipulation of the prompt.
  - [Logical Consistency of Large Language Models in Fact-Checking](https://proceedings.iclr.cc/paper_files/paper/2025/file/3209cf3312b2cbb68e33644362ddc2bd-Paper-Conference.pdf)
- **Factuality** (constructs) — *causes*
  > A growing body of research explores improving LLMs’ factuality using the logical consistency across their beliefs (Dalvi et al., 2021; Tafjord et al., 2022; Mitchell et al., 2022; Jung et al., 2022; Hase et al., 2023; Kassner et al., 2023; Akyürek et al., 2024).
  - [A Probabilistic Framework for LLM Hallucination Detection via Belief Tree Propagation](https://aclanthology.org/2025.naacl-long.158.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > "For human evaluation, 100 questions were sampled from each dataset, with annotators selecting the most logical rationale among those generated by ToT, GoT, and our method"
  - [Decompose, Analyze and Rethink: Solving Intricate Problems with Human-like Reasoning Cycle](https://proceedings.neurips.cc/paper_files/paper/2024/file/01025a4e79355bb37a10ba39605944b5-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > We use DeepSeek R1 and ERNIE Bot 4.0 to quantitatively evaluate model outputs before and after training, focusing on logical consistency, clarity, and lack of ambiguity (Section 5)
  - [Theorem-Validated Reverse Chain-of-Thought Problem Generation for Geometric Reasoning](https://aclanthology.org/2025.emnlp-main.38.pdf)
- **SNLI** (measurements) — *measured_by*
  > we evaluate their logical consistency between each original SNLI instance and its corresponding sub-problems.
  - [NLI under the Microscope: What Atomic Hypothesis Decomposition Reveals](https://aclanthology.org/2025.naacl-long.130.pdf)
- **FLASK** (measurements) — *measured_by*
  > we employ FLASK (Ye et al., 2024), a fine-grained evaluation protocol for model-based evaluation, which exhibits a high correlation with human-based evaluation. Specifically, we focus on the ‘logical thinking’ category in FLASK, which encompasses three aspects: logical correctness, logical robustness, and logical efficiency.
  - [Self-Training Meets Consistency: Improving LLMs' Reasoning with Consistency-Driven Rationale Evaluation](https://aclanthology.org/2025.naacl-long.528.pdf)

### → Logical consistency
- **Self-reflection** (behaviors tasks) — *causes*
  > Multi-round self-reflection that encourages a single LLM to critically evaluate its previous responses has demonstrated the effectiveness of deliberation in improving logical coherence and qualities (Section 4.2.1)
  - [Towards Rationality in Language and Multimodal Agents: A Survey](https://aclanthology.org/2025.naacl-long.186.pdf)

### Associated with
- **Logical reasoning** (constructs)
  > We define 4 primary abilities which are divided into 12 fine-grained skills for comprehensive language model evaluation: Logical Thinking (Logical Correctness, Logical Robustness, Logical Efficiency)... (Section 1)
  - [FLASK: Fine-grained Language Model Evaluation based on Alignment Skill Sets](https://proceedings.iclr.cc/paper_files/paper/2024/file/f41b4a6b202adcd8e150a9d4f124d8f6-Paper-Conference.pdf)
- **Self-consistency** (measurements)
  > This implies that evaluating the logical consistency of NLI models should be based on the labels assigned by the model itself, disregarding the actual correctness of the labels in the real world. (Section 1)
  - [Transitive self-consistency evaluation of NLI models without gold labels](https://aclanthology.org/2025.emnlp-main.1152.pdf)
- **Fact checking** (behaviors tasks)
  > "We assess and improve the logical consistency of LLMs in propositional logic queries and logic rules, particularly in the context of fact-checking."
  - [Logical Consistency of Large Language Models in Fact-Checking](https://proceedings.iclr.cc/paper_files/paper/2025/file/3209cf3312b2cbb68e33644362ddc2bd-Paper-Conference.pdf)
- **Code generation** (behaviors tasks)
  > By iterative preference alignment, the code generator learns to improve the logic consistency with the domain knowledge. (Abstract)
  - [Learning to Solve Domain-Specific Calculation Problems with Knowledge-Intensive Programs Generator](https://aclanthology.org/2025.naacl-long.245.pdf)
