# SNLI
**Type:** Measurement  
**Referenced in:** 26 papers  

## State of the Field

**What it is.** Across papers, SNLI is most commonly described as the Stanford Natural Language Inference dataset or benchmark, a large-scale sentence-pair corpus for natural language inference, textual entailment, or sentence-pair inference judgments, usually with the labels entailment, neutral, and contradiction. Several descriptions specify image captions as premises and crowd-sourced hypotheses, while some papers use specific variants such as entailment-only pairs, SNLI-TEST-SAMPLE original examples, or SNLI negation benchmarks.

**What it is claimed to measure.** Papers use SNLI to measure 3 constructs and 2 behavioral indicators. The prevailing use is to measure natural language inference, and a smaller set of papers report it as measuring language understanding task performance, natural language understanding, generalization, and logical consistency. Overall, the claims concentrate on natural language inference and spread more sparsely across the other reported targets.

**Space of uses.** Papers often use SNLI in multi-dataset evaluations alongside MNLI and RTE, and sometimes with QNLI, SST-2, and WNLI. They position it both as a standard benchmark and as an auxiliary evaluation: one paper treats it as an additional fine-tuning task, another as an out-of-domain test for adaptability and generalization, and others adapt it into entailment-only subsets, original-example test samples, or negation-focused evaluations.

## Sources

**[Meaning Representations from Trajectories in Autoregressive Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/ac1887299ee703ba4e54f8c102161213-Paper-Conference.pdf)**
> The Stanford Natural Language Inference dataset, a large-scale corpus for evaluating textual entailment.

## Relationships

### → SNLI
- **Natural language inference** (behaviors tasks) — *measured_by*
  > SNLI (Bowman et al., 2015) is an NLI inference task dataset with 10K samples and 3 labels – entailment, neutral and contradiction. (Section 3)
  - [Beyond correlation: The impact of human uncertainty in measuring the effectiveness of automatic evaluation and LLM-as-a-judge](https://proceedings.iclr.cc/paper_files/paper/2025/file/8798321486948322be2b4d658744ba72-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > We then assessed the performance of the merged LoRA on these in-domain tasks as well as on two additional out-of-domain tasks, SNLI and WNLI, to evaluate its adaptability and generalization capabilities.
  - [Merging LoRAs like Playing LEGO: Pushing the Modularity of LoRA to Extremes Through Rank-Wise Clustering](https://proceedings.iclr.cc/paper_files/paper/2025/file/b54e0146a82945f01e69c2e3309ba925-Paper-Conference.pdf)
- **Logical consistency** (constructs) — *measured_by*
  > we evaluate their logical consistency between each original SNLI instance and its corresponding sub-problems.
  - [NLI under the Microscope: What Atomic Hypothesis Decomposition Reveals](https://aclanthology.org/2025.naacl-long.130.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > For the multiple-choice tasks, we use datasets: COPA (Gordon et al., 2012), StoryCloze (Mostafazadeh et al., 2016), NLI (Bowman et al., 2015), MMLU (Hendrycks et al., 2021), SST2 (Socher et al., 2013), SST5 (Socher et al., 2013), BoolQ (Clark et al., 2019), and Winogrande (Sakaguchi et al., 2020)... (Section 4.1)
  - [Semantics-Adaptive Activation Intervention for LLMs via Dynamic Steering Vectors](https://proceedings.iclr.cc/paper_files/paper/2025/file/c4d26a95fd83f8e590f81c54ae670b5d-Paper-Conference.pdf)
