# ParaRel
**Type:** Measurement  
**Referenced in:** 6 papers  

## State of the Field

**What it is.** Across the surveyed papers, ParaRel is treated as a factual knowledge dataset for studying relational knowledge in language models. The prevailing description is a collection of paraphrased relational facts, formatted as ⟨subject, relation, object⟩ triples with multiple query variations; another definition also describes it as being used in an independent multi-problem question answering setting.

**What it is claimed to measure.** Papers link ParaRel to 2 behavioral indicators and no constructs. Its reported measurement use is concentrated on question-answering behavior: papers use it to measure Question answering and Open-domain question answering, including one formulation where "Given a question, the model directly predicts its answer" and another where it provides "factual information from open-domain question answering (OQA)".

**Space of uses.** No measurement instrument is linked to ParaRel. In the available papers, it is used as a named evaluation dataset that authors "employ," and one paper places it alongside HotpotQA within a question-answering evaluation.

## Sources

**[The Knowledge Microscope: Features as Better Analytical Lenses than Neurons](https://aclanthology.org/2025.acl-long.516.pdf)**
> Factual knowledge dataset used to study relational knowledge in language models, formatted as ⟨subject, relation, object⟩ triples with multiple query variations.

## Relationships

### → ParaRel
- **Question answering** (behaviors tasks) — *measured_by*
  > Question-Answering: Given a question, the model directly predicts its answer. We include ParaRel (Elazar et al., 2021) and HotpotQA (Yang et al., 2018). (Section 5.1)
  - [FactTest: Factuality Testing in Large Language Models with Finite-Sample and Distribution-Free Guarantees](https://raw.githubusercontent.com/mlresearch/v267/main/assets/nie25a/nie25a.pdf)
- **Open-domain question answering** (behaviors tasks) — *measured_by*
  > ...and factual information from open-domain question answering (OQA) with the PARAREL (Elazar et al., 2021) dataset. (Section 4)
  - [Sheaf Discovery with Joint Computation Graph Pruning and Flexible Granularity](https://aclanthology.org/2025.emnlp-main.446.pdf)
