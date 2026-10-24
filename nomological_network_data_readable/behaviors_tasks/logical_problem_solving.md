# Logical problem solving
**Type:** Behavior  
**Referenced in:** 15 papers  
**Also known as:** Multi-step deduction, Logical step generation, Deductive question answering, Boolean expression evaluation, Conclusion generation, Non-rulebreaker acceptance, Logical reasoning, Logical inference, Logical deduction  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is deduction over stated facts, premises, passages, contexts, or rules to answer a question or solve a problem. Many formulations make the behavior explicitly stepwise, requiring a valid proof, a reasoning path, or logical steps that derive a hypothesis or connect facts to a conclusion, while others score only the final output, such as whether a conclusion is correct or must be true, what answer follows from a passage, or the truth value of a Boolean expression. A smaller line of work treats it as generating a conclusion from premises rather than judging a proposed conclusion, and related work also counts accepting a logically valid, factually consistent conclusion as the target behavior.

**Variants.** Papers study this behavior in several forms, most commonly as multi-step deduction, logical step generation, deductive question answering, Boolean expression evaluation, and conclusion generation from premises. Other settings include acceptance judgments about whether conclusions follow, ontology-derived logical problems, formal fallacies and logical deduction tasks, AR-LSAT, and SAT-style deduction via unit propagation. Some task setups further emphasize unknown facts, diverse reasoning rules, varied linguistic expressions, or distractors.

**Space of elicitation and scores.** Papers link this behavior to 2 measurement instruments, BIG-Bench Hard and PrOntoQA. The recorded BIG-Bench Hard use comes through the Boolean Expression task, described as evaluating a Boolean expression, while PrOntoQA is described as a dataset of logical reasoning problems derived from ontologies. These recorded measurements are benchmark or dataset based.

**What it is taken as evidence of.** Papers link this behavior to 1 construct, Logical reasoning. The recorded relation is that it is related to Logical reasoning, with a paper describing multi-step deductive reasoning in those terms, rather than claiming that this behavior measures or causes the construct. No other construct link is recorded, so there is no competing construct framing in the recorded relations.

## Sources

**[Advancing LLM Reasoning Generalists with Preference Trees](https://proceedings.iclr.cc/paper_files/paper/2025/file/3e2c12c1a41af7c19c5b38e0837a52d1-Paper-Conference.pdf)**
> The observable task of answering a question or solving a problem that requires logical deduction.

**[Enhancing Reasoning Capabilities of LLMs via Principled Synthetic Logic Corpus](https://proceedings.neurips.cc/paper_files/paper/2024/file/8678da90126aa58326b2fc0254b33a8c-Paper-Conference.pdf) (as "Multi-step deduction")**
> The observable task of generating a sequence of logical steps to derive a given hypothesis from a set of provided facts.

**[Enhancing Reasoning Capabilities of LLMs via Principled Synthetic Logic Corpus](https://proceedings.neurips.cc/paper_files/paper/2024/file/8678da90126aa58326b2fc0254b33a8c-Paper-Conference.pdf) (as "Logical step generation")**
> The observable task of producing intermediate reasoning steps that connect facts to a conclusion.

**[Improving Reasoning Performance in Large Language Models via Representation Engineering](https://proceedings.iclr.cc/paper_files/paper/2025/file/6e73c39cc428c7d264d9820319f31e79-Paper-Conference.pdf) (as "Deductive question answering")**
> Answering a question based on a provided passage of text, requiring logical deduction from the given facts.

**[The Surprising Effectiveness of Test-Time Training for Few-Shot Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/akyurek25a/akyurek25a.pdf) (as "Boolean expression evaluation")**
> The task of computing the truth value of a given logical boolean expression.

**[RULEBREAKERS: Challenging LLMs at the Crossroads between Formal Logic and Human-like Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chan25a/chan25a.pdf) (as "Conclusion generation")**
> Producing a conclusion from given premises rather than only deciding whether a proposed conclusion should be accepted.

**[RULEBREAKERS: Challenging LLMs at the Crossroads between Formal Logic and Human-like Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chan25a/chan25a.pdf) (as "Non-rulebreaker acceptance")**
> The observable behavior of accepting a conclusion that is both logically valid and factually consistent with the premises.

**[At Which Training Stage Does Code Data Help LLMs Reasoning?](https://proceedings.iclr.cc/paper_files/paper/2024/file/9c2aa1e456ea543997f6927295196381-Paper-Conference.pdf) (as "Logical reasoning")**
> The observable behavior of solving tasks requiring deduction, inference, or identification of valid argument structures, such as in formal fallacies or logical deduction tasks.

**[Logic-of-Thought: Injecting Logic into Contexts for Full Reasoning in Large Language Models](https://aclanthology.org/2025.naacl-long.510.pdf) (as "Logical inference")**
> The observable task of determining whether a given conclusion is correct or must be true based on a provided context and set of rules.

**[Can Transformers Reason Logically? A Study in SAT Solving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/pan25d/pan25d.pdf) (as "Logical deduction")**
> Producing valid conclusions from a set of premises using formal logic, often involving rule application and inference chains.

## Relationships

### Logical problem solving →
- **PrOntoQA** (measurements) — *measured_by*
  > ProntoQA (Saparov & He, 2022) is a dataset consists of 9000 logical reasoning problems derived from ontologies - formal representations of relationships between concepts. (Section 4.1.1)
  - [Token Assorted: Mixing Latent and Text Tokens for Improved Language Model Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/su25g/su25g.pdf)
