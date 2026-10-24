# Wilcoxon signed-rank test
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

The Wilcoxon signed-rank test is presented in the provided literature as a non-parametric statistical test. Its documented application is to determine whether performance differences between systems, such as a proposed model and its baselines, are significant across multiple tasks. One paper explicitly states its use for this purpose, noting it is a "non-parametric test" ("ACING: Actor-Critic for Instruction Learning in Black-Box LLMs"). Another study applies this test in the context of the Tabular classification task. Across the available data, this test is consistently framed as a tool for statistical significance testing of model performance.

## Sources

**[ACING: Actor-Critic for Instruction Learning in Black-Box LLMs](https://aclanthology.org/2025.emnlp-main.965.pdf)**
> Non-parametric statistical test used to determine whether performance differences between ACING and baselines are significant across tasks.

## Relationships

### → Wilcoxon signed-rank test
- **Tabular classification** (behaviors tasks) — *measured_by*
  > we evaluate MIXTUREPFN and baselines using ... (2) Wilcoxon-Signed Rank Test to check for statistical significance... (4.0.1 EVALUATION PROTOCOL)
  - [Mixture of In-Context Prompters for Tabular PFNs](https://proceedings.iclr.cc/paper_files/paper/2025/file/3de60dc2ff7ac8866e805bbf457e2291-Paper-Conference.pdf)
