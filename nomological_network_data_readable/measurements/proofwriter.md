# ProofWriter
**Type:** Measurement  
**Referenced in:** 14 papers  

## State of the Field

**What it is.** Most papers treat ProofWriter as a deductive or logical reasoning benchmark built from facts and rules. Definitions variously describe it as a dataset based on first-order logic rules, a collection of natural language facts and rules used to decide whether a query can be proved, or small rule-bases that require multi-step deduction and proof construction under a closed-world assumption. Some papers also frame it as involving natural language proof generation, note moderately complex structures such as conjunctions and disjunctions, and mention a broader ProofWriter family that includes Birds-Electricity and ParaRules.

**What it is claimed to measure.** Papers link ProofWriter to three constructs and no behavioral indicators. The prevailing use is to measure Logical reasoning, often described as deductive or logical inference, while smaller lines of work use it to measure Chain-of-thought reasoning and Complex reasoning; one paper characterizes that latter use by noting that each question requires three hops of reasoning.

**Space of uses.** Papers explicitly relate ProofWriter only to PrOntoQA, and they often place the two together as logical reasoning benchmarks. More broadly, papers position ProofWriter as a representative or carefully selected dataset within broader evaluations, including multi-step reasoning settings alongside FOLIO, MMLU-Pro, GPQA, and LogicNLI, and one paper also uses it to further validate conclusions across arithmetic, symbolic, and logical reasoning.

**Concerns raised.** One paper reports that a model finetuned on ProofWriter achieves the highest performance on PrOntoQA, and, in Large Language Models Meet Symbolic Provers for Logical Reasoning Evaluation, attributes this anomaly to the datasets' high similarity because both use predefined templates for generating logic and corresponding natural language.

## Sources

**[Divide and Translate: Compositional First-Order Logic Translation and Verification for Complex Logical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/3e592c571de69a43d7a870ea89c7e33a-Paper-Conference.pdf)**
> A deductive reasoning benchmark used to evaluate logical inference over written rules and facts.

## Relationships

### → ProofWriter
- **Logical reasoning** (constructs) — *measured_by*
  > ProofWriter (Tafjord et al., 2020): A logical reasoning dataset that, in contrast to PrOntoQA, uses real concepts for all assumptions. (Section 4.1)
  - [Calibrating Reasoning in Language Models with Internal Consistency](https://proceedings.neurips.cc/paper_files/paper/2024/file/d037fd021c9aace128b8ce25001cdb6c-Paper-Conference.pdf)
- **Chain-of-thought reasoning** (constructs) — *measured_by*
  > We evaluate our framework on four multi-step reasoning datasets: FOLIO (Han et al., 2022), ProofWriter (Tafjord et al., 2020), MMLU-Pro (Wang et al., 2024c) and GPQA (Rein et al., 2023) (Section 4.1).
  - [Stepwise Informativeness Search for Improving LLM Reasoning](https://aclanthology.org/2025.emnlp-main.1285.pdf)

### Associated with
- **PrOntoQA** (measurements)
  > “The model finetuned on ProofWriter achieves the highest performance on ProntoQA. This anomaly could be attributed to the high similarity between ProntoQA and ProofWriter: Both datasets utilize predefined templates for generating logic and corresponding natural language.”
  - [Large Language Models Meet Symbolic Provers for Logical Reasoning Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/862819c227b16f9af64dd6ad6cfdf275-Paper-Conference.pdf)
