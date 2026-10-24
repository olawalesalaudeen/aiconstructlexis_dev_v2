# PrOntoQA
**Type:** Measurement  
**Referenced in:** 14 papers  
**Also known as:** ProntoQA  

## State of the Field

**What it is.** Papers refer to it as PrOntoQA or ProntoQA and most commonly treat it as a synthetic logical reasoning dataset or benchmark. Definitions typically describe question-answering examples built from ontologies, hierarchical relationships, or axioms, where the model must decide whether a multi-step reasoning chain or proposition is correct; some papers further specify chains of thought and 3-hop deductions. A smaller line of work frames it more specifically as a synthetic first-order logic benchmark and as an out-of-distribution evaluation set.

**What it is claimed to measure.** Papers link it to 3 constructs and 2 behavioral indicators. The prevailing measurement claim is logical reasoning, with smaller framings as reasoning more broadly and complex reasoning; some evidence also describes its use in logical deduction or deductive reasoning evaluations. Among behavioral indicators, papers use it for logical problem solving and question answering, so the reported measurement claims cluster around reasoning tasks rather than spreading widely across unrelated targets.

**Space of uses.** Its linked-instrument profile is small, with 2 other instruments named: ProofWriter most often, then BIG-Bench Logical Deduction. In practice, papers often place it among selected logical reasoning benchmarks and also use it for comparison, out-of-distribution evaluation, or a 5-shot logical deduction setting. The clearest explicit cross-benchmark claim is that PrOntoQA is related to ProofWriter, with one paper attributing an anomalous result to the two benchmarks' shared template-based generation of logic and natural language.

**Concerns raised.** A few papers note practical concerns around its use. One paper excludes ProntoQA from an experiment because there is no publicly available training set, and another points to high similarity with ProofWriter because both datasets use predefined templates for generating logic and corresponding natural language.

## Sources

**[Initialization is Critical to Whether Transformers Fit Composite Functions by Reasoning or Memorizing](https://proceedings.neurips.cc/paper_files/paper/2024/file/19c145aaad40927c51f4d10eaa339c20-Paper-Conference.pdf)**
> A synthetic multi-step reasoning dataset where models must determine the correctness of a reasoning chain based on provided hierarchical relationships.

**[Large Language Models Meet Symbolic Provers for Logical Reasoning Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/862819c227b16f9af64dd6ad6cfdf275-Paper-Conference.pdf) (as "ProntoQA")**
> A synthetic first-order logic reasoning benchmark used for comparison and out-of-distribution evaluation.

## Relationships

### → PrOntoQA
- **Logical reasoning** (constructs) — *measured_by*
  > PrOntoQA (Saparov and He, 2023): A dataset designed for logical reasoning. (Section 4.1)
  - [Calibrating Reasoning in Language Models with Internal Consistency](https://proceedings.neurips.cc/paper_files/paper/2024/file/d037fd021c9aace128b8ce25001cdb6c-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > Reasoning tasks: PrOntoQA. PrOntoQA (Saparov and He, 2023) is a synthetic multi-step reasoning dataset where each data point assigns hierarchical relationships among objects and requires the model to determine whether a multi-step reasoning chain is correct. (Section 6)
  - [Initialization is Critical to Whether Transformers Fit Composite Functions by Reasoning or Memorizing](https://proceedings.neurips.cc/paper_files/paper/2024/file/19c145aaad40927c51f4d10eaa339c20-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > "The first dataset, PrOntoQA ... consists of question-answering examples"
  - [An Analysis for Reasoning Bias of Language Models with Small Initialization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yao25g/yao25g.pdf)
- **Logical problem solving** (behaviors tasks) — *measured_by*
  > ProntoQA (Saparov & He, 2022) is a dataset consists of 9000 logical reasoning problems derived from ontologies - formal representations of relationships between concepts. (Section 4.1.1)
  - [Token Assorted: Mixing Latent and Text Tokens for Improved Language Model Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/su25g/su25g.pdf)

### Associated with
- **ProofWriter** (measurements)
  > “The model finetuned on ProofWriter achieves the highest performance on ProntoQA. This anomaly could be attributed to the high similarity between ProntoQA and ProofWriter: Both datasets utilize predefined templates for generating logic and corresponding natural language.”
  - [Large Language Models Meet Symbolic Provers for Logical Reasoning Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/862819c227b16f9af64dd6ad6cfdf275-Paper-Conference.pdf)
