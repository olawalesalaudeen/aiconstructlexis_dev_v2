# LogicNLI
**Type:** Measurement  
**Referenced in:** 5 papers  

## State of the Field

**What it is.** Papers most commonly treat LogicNLI as a logical reasoning benchmark, and some describe it more specifically as an NLI-style or natural language inference dataset. Across definitions, the recurring framing is that it assesses hypothesis verification from facts and rules and isolates first-order logic reasoning from commonsense inference; as one study notes, "LogicNLI effectively separates the targeted FOL reasoning from common-sense inference" (Few-Shot Natural Language to First-Order Logic Translation via Code Generation).

**What it is claimed to measure.** Its reported measurement targets are concentrated: papers link it to 1 construct and 1 behavioral indicator. The prevailing usage is to measure Logical reasoning, with several papers evaluating models on LogicNLI as a logical reasoning dataset, while a smaller usage treats it as measuring Natural language inference, including a paper that selects LogicNLI "for natural language inference."

**Space of uses.** Most uses here position LogicNLI as one member of a broader evaluation suite rather than a standalone protocol. Papers use it alongside RobustLR, PrOntoQA-OOD, ProofWriter, ParaRules, and ProntoQA in logical reasoning evaluations, and one paper also presents it as the representative dataset used for natural language inference.

## Sources

**[LogicTree: Structured Proof Exploration for Coherent and Rigorous Logical Reasoning with Large Language Models](https://aclanthology.org/2025.emnlp-main.1054.pdf)**
> A logical reasoning benchmark used to assess hypothesis verification from facts and rules.

## Relationships

### → LogicNLI
- **Logical reasoning** (constructs) — *measured_by*
  > We evaluated both the baselines and our method on three carefully selected logical reasoning datasets: ProntoQA (Saparov and He, 2023), ProofWriter (Tafjord et al., 2021) and LogicNLI (Tian et al., 2021). (Section 4.1)
  - [Aristotle: Mastering Logical Reasoning with A Logic-Complete Decompose-Search-Resolve Framework](https://aclanthology.org/2025.acl-long.153.pdf)
- **Natural language inference** (behaviors tasks) — *measured_by*
  > We chose three representative datasets: LogicNLI (Tian et al., 2021) for natural language inference... (Section 5.2.1)
  - [Few-Shot Natural Language to First-Order Logic Translation via Code Generation](https://aclanthology.org/2025.naacl-long.547.pdf)
