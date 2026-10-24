# Self-correction ability
**Type:** Construct  
**Referenced in:** 20 papers  
**Also known as:** Self-correction capability, Self-refinement capability, Self-revision capability, Self-repair ability, Error correction, Self-repair capability, Self-debugging capability, Refinement capability, Solution refinement  

## State of the Field

**Definition agreement:** Conflicting. Most papers define self-correction ability as a model's latent capacity to detect and fix its own errors through internal, iterative revision, often explicitly without external corrective feedback. But a substantial minority define it as the ability to revise outputs using external feedback or verification signals in settings like code, tools, proofs, or formal specifications, so the papers disagree on whether external feedback is part of the construct or excluded from it.

**Space of definitions.** Across the papers, the prevailing usage treats this as a latent ability to revise the model's own outputs by identifying and fixing errors, usually in reasoning, answers, or generated artifacts during iterative refinement. Most definitions stay close to this error-detection-and-repair framing, though they differ on whether the revision is fully internal and independent, or happens with error feedback, targeted prompts, verification messages, or detailed feedback. A smaller broadening defines it as overall response improvement through internal revision, including not only fixing wrong answers but also preserving correct ones, and several papers cast the same idea in narrower domains such as code, tool use, instruction following, proofs, and formal specifications.

**Space of facets.** Papers use several near-synonymous labels for closely related abilities: self-correction, self-refinement, self-revision, self-repair, self-debugging, error correction, refinement, and solution refinement. One line explicitly frames the construct as covering both keeping correct answers correct and fixing incorrect ones, while the instruction-following version adds the aim of making minimal irrelevant revisions. Some authors also distinguish it from final reasoning ability or original error-free reasoning, and one paper states that error correction can be fundamentally different from beam search or retry.

**Space of measurement.** Operationalization is benchmark-centered: the construct is linked to 7 measurement instruments and 1 behavioral indicator, with no linked constructs. The linked instruments are all benchmarks or task datasets, most often BoolQ, CommonsenseQA, EvalPlus, GSM8K, and HumanEval, plus 2 others. Papers measure it through self-correction performance on classification and generation tasks spanning mathematics, coding, instruction following, common-sense reasoning, and knowledge, and in code settings through iterative debugging or self-refinement, including evaluation on EvalPlus with five iterations. These operationalizations target successful revision across tasks, while the definitions themselves alternate between feedback-free and feedback-assisted versions of the ability.

**Links.** Beyond measurement, one paper claims a causal relationship from Error localization to self-correction ability, stating that locating and correcting specific error thoughts advances a student model's self-correction ability. No papers report correlational links or generic related links for this construct.

## Sources

**[Training Large Language Models for Retrieval-Augmented Question Answering through Backtracking Correction](https://proceedings.iclr.cc/paper_files/paper/2025/file/80790082a3b0e4fa9061730ee876f5ba-Paper-Conference.pdf) (as "Self-correction capability")**
> The latent ability of a model to identify and rectify its own errors in reasoning or generation without external corrective feedback.

**[SemCoder: Training Code Language Models with Comprehensive Semantics Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/6efcc7fd8efeee29a050a79c843c90e0-Paper-Conference.pdf) (as "Self-refinement capability")**
> The ability to iteratively improve generated code by identifying and fixing its own errors based on internal analysis or feedback.

**[SuperCorrect: Advancing Small LLM Reasoning with Thought Template Distillation and Self-Correction](https://proceedings.iclr.cc/paper_files/paper/2025/file/0967d7c8b171dd81b77c43067c02bebf-Paper-Conference.pdf)**
> The latent capacity of a model to independently identify and rectify errors within its own generated reasoning process.

**[Revisiting the Test-Time Scaling of o1-like Models: Do they Truly Possess Test-Time Scaling Capabilities?](https://aclanthology.org/2025.acl-long.232.pdf) (as "Self-revision capability")**
> The latent ability of a model to effectively correct its own incorrect reasoning or answers during iterative refinement, without external feedback.

**[Can LLMs Reason About Program Semantics? A Comprehensive Evaluation of LLMs on Formal Specification Inference](https://aclanthology.org/2025.acl-long.1068.pdf) (as "Self-repair ability")**
> The capacity of LLMs to detect and correct their own errors in formal specification generation when provided with feedback or targeted prompts, indicating metacognitive reasoning and adaptability.

**[ToolHop: A Query-Driven Benchmark for Evaluating Large Language Models in Multi-Hop Tool Use](https://aclanthology.org/2025.acl-long.150.pdf) (as "Error correction")**
> The latent ability of a model to recognize and recover from tool invocation errors when provided with detailed feedback.

**[LiveCodeBench: Holistic and Contamination Free Evaluation of Large Language Models for Code](https://proceedings.iclr.cc/paper_files/paper/2025/file/94074dd5a072d28ff75a76dabed43767-Paper-Conference.pdf) (as "Self-repair capability")**
> The latent ability to use error feedback to revise an initially flawed program into a correct solution.

**[Automated Proof Generation for Rust Code via Self-Evolution](https://proceedings.iclr.cc/paper_files/paper/2025/file/b2e20d7402c9985eae4ba924c65370a8-Paper-Conference.pdf) (as "Self-debugging capability")**
> The latent ability of a model to repair incorrect proofs or outputs based on feedback from a verification system.

**[SPaR: Self-Play with Tree-Search Refinement to Improve Instruction-Following in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/abe1eb21ceb046209c96a0f5e7544ccc-Paper-Conference.pdf) (as "Refinement capability")**
> The latent ability of a model to correct or improve a response that fails to follow an instruction, ideally with minimal irrelevant revisions.

**[Revolve: Optimizing AI Systems by Tracking Response Evolution in Textual Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25aj/zhang25aj.pdf) (as "Solution refinement")**
> The latent ability of an LLM to dynamically improve its answers to complex scientific or technical questions through iterative self-evaluation and critique.

## Relationships

### Self-correction ability →
- **EvalPlus** (measurements) — *measured_by*
  > We evaluate their static debug and self-refine capabilities on EvalPlus with five iterations.
  - [SemCoder: Training Code Language Models with Comprehensive Semantics Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/6efcc7fd8efeee29a050a79c843c90e0-Paper-Conference.pdf)
- **GSM8K** (measurements) — *measured_by*
  > We evaluate self-correction capability on both classification and generation tasks, including domains in mathematics, coding, instruction following, common-sense reasoning, and knowledge. To be specific, the dataset we utilized include GSM8k (Cobbe et al., 2021)... (Section 4.1)
  - [Confidence v.s. Critique: A Decomposition of Self-Correction Capability for LLMs](https://aclanthology.org/2025.acl-long.203.pdf)
- **HumanEval** (measurements) — *measured_by*
  > We evaluate self-correction capability on both classification and generation tasks, including domains in mathematics, coding, instruction following, common-sense reasoning, and knowledge. To be specific, the dataset we utilized include ... Humaneval (Chen et al., 2021)... (Section 4.1)
  - [Confidence v.s. Critique: A Decomposition of Self-Correction Capability for LLMs](https://aclanthology.org/2025.acl-long.203.pdf)
- **IFEval** (measurements) — *measured_by*
  > We evaluate self-correction capability on both classification and generation tasks, including domains in mathematics, coding, instruction following, common-sense reasoning, and knowledge. To be specific, the dataset we utilized include ... IFEval (Zhou et al., 2023)... (Section 4.1)
  - [Confidence v.s. Critique: A Decomposition of Self-Correction Capability for LLMs](https://aclanthology.org/2025.acl-long.203.pdf)
- **MMLU** (measurements) — *measured_by*
  > We evaluate self-correction capability on both classification and generation tasks, including domains in mathematics, coding, instruction following, common-sense reasoning, and knowledge. To be specific, the dataset we utilized include ... MMLU (Hendrycks et al., 2021)... (Section 4.1)
  - [Confidence v.s. Critique: A Decomposition of Self-Correction Capability for LLMs](https://aclanthology.org/2025.acl-long.203.pdf)
- **BoolQ** (measurements) — *measured_by*
  > We evaluate self-correction capability on both classification and generation tasks, including domains in mathematics, coding, instruction following, common-sense reasoning, and knowledge. To be specific, the dataset we utilized include ... BoolQ (Clark et al., 2019)... (Section 4.1)
  - [Confidence v.s. Critique: A Decomposition of Self-Correction Capability for LLMs](https://aclanthology.org/2025.acl-long.203.pdf)
- **CommonsenseQA** (measurements) — *measured_by*
  > We evaluate self-correction capability on both classification and generation tasks, including domains in mathematics, coding, instruction following, common-sense reasoning, and knowledge. To be specific, the dataset we utilized include ... CommonsenseQA (Talmor et al., 2019). (Section 4.1)
  - [Confidence v.s. Critique: A Decomposition of Self-Correction Capability for LLMs](https://aclanthology.org/2025.acl-long.203.pdf)

### → Self-correction ability
- **Error localization** (behaviors tasks) — *causes*
  > We propose cross-model collaborative DPO, which innovatively leverage SOTA LLMs to locate and correct the specific error thoughts in the reasoning process of smaller student LLMs, thus advancing their self-correction ability and breaking their thought bottleneck. (Section 1)
  - [SuperCorrect: Advancing Small LLM Reasoning with Thought Template Distillation and Self-Correction](https://proceedings.iclr.cc/paper_files/paper/2025/file/0967d7c8b171dd81b77c43067c02bebf-Paper-Conference.pdf)
