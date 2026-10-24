# Linear regression
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** Linear Regression  

## State of the Field

Across the provided literature, 'Linear regression' refers to several distinct applications rather than a single, unified concept. The most prevalent usage frames it as an observable behavior or task for studying in-context learning (ICL), where a model must infer a linear function from a series of prompt examples and apply it to a new input. One paper notes a line of research that specifically studies ICL by pretraining models on this task with a Gaussian prior. A different application treats linear regression as a similarity index for comparing the weight matrices of different transformer layers, though one study notes that as an index it can fail to "exhibit clear structural patterns" and its heatmaps may appear "noisy." A third use is as a regression procedure within a model, specifically to predict target values from data-mixture weights using a linear model with L2 regularization, also known as ridge regression.

## Sources

**[RegMix: Data Mixture as Regression for Language Model Pre-training](https://proceedings.iclr.cc/paper_files/paper/2025/file/5f67d864aae6115374fed7beddd119e0-Paper-Conference.pdf)**
> A regression procedure used to predict target values from data-mixture weights using a linear model with regularization.

**[DOCS: Quantifying Weight Similarity for Deeper Insights into Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a39a9aceda771cded859ae7560530e09-Paper-Conference.pdf) (as "Linear Regression")**
> A similarity index based on linear regression, used as a baseline method to compare the relationship between weight matrices of different transformer layers.

## Relationships

### → Linear regression
- **In-context learning** (constructs) — *measured_by*
  > “we investigate the convergence properties of ICL for both prefixLM and causalLM multi-layer LSA-transformers in a linear regression setting”
  - [CausalLM is not optimal for in-context learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/364071531ff2398e0fb8bae31f615b69-Paper-Conference.pdf)
