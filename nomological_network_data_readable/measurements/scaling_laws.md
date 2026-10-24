# Scaling laws
**Type:** Measurement  
**Referenced in:** 8 papers  
**Also known as:** Chinchilla scaling law, Scaling law estimation, Distillation Scaling Law, Supervised Scaling Law, Capybara scaling law, OpenAI scaling law, D-CPT law, Kaplan scaling law, P2 law  

## State of the Field

Across the provided literature, scaling laws are predominantly characterized as a family of parametric, often power-law, models used to predict language model performance—typically cross-entropy loss—by extrapolating from smaller-scale experiments. The most common formulation, seen in widely referenced baselines like the Chinchilla, OpenAI, and Kaplan scaling laws, models loss as a function of model size (parameter count) and data size (training tokens). The primary application is to forecast the performance of larger models, as one paper frames the task as predicting the "optimal tradeoff...for a large model...by extrapolating from smaller-scale experiments" ("RE-Bench..."). Beyond this general usage, a number of papers propose specialized laws for specific contexts: the "Distillation Scaling Law" incorporates teacher model performance, the "Capybara scaling law" adds parameters for floating-point quantization, and the "P2 law" predicts loss after model pruning. Other work extends the concept to data composition, with the "D-CPT law" providing a framework to find optimal data mixture ratios for domain adaptation. These laws are frequently used as baselines for comparison, as one study notes it "used [the Chinchilla scaling law] as the basis for exploring our proposed float precision scaling law" ("Scaling Laws for Floating–Point Quantization Training"). A less common usage frames the concept not as a model but as a benchmark task, the "Scaling Law Experiment," which evaluates an agent's ability to apply these principles. The concept is also studied in relation to scalability.

## Sources

**[The Journey Matters: Average Parameter Count over Pre-training Unifies Sparse and Dense Scaling Laws](https://proceedings.iclr.cc/paper_files/paper/2025/file/4b96695d9885f038110b8b16ef50e882-Paper-Conference.pdf) (as "Chinchilla scaling law")**
> A scaling-law procedure relating language-model loss to parameter count and training tokens, used here as the dense-model baseline.

**[Data Mixing Laws: Optimizing Data Mixtures by Predicting Language Modeling Performance](https://proceedings.iclr.cc/paper_files/paper/2025/file/cc84bfabe6389d8883fc2071c848f62a-Paper-Conference.pdf)**
> A family of power-law fitting procedures used to extrapolate language-model loss from small models, fewer steps, or less data to larger scales.

**[A Hitchhiker’s Guide to Scaling Law Estimation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/choshen25a/choshen25a.pdf) (as "Scaling law estimation")**
> A parametric modeling procedure that predicts a target model's loss based on the performance of smaller or earlier-trained models using a functional form involving model size and training tokens.

**[Distillation Scaling Laws](https://raw.githubusercontent.com/mlresearch/v267/main/assets/busbridge25a/busbridge25a.pdf) (as "Distillation Scaling Law")**
> A mathematical model (Equation 8) that predicts student cross-entropy based on student size, distillation tokens, and teacher cross-entropy, derived from large-scale distillation experiments.

**[Distillation Scaling Laws](https://raw.githubusercontent.com/mlresearch/v267/main/assets/busbridge25a/busbridge25a.pdf) (as "Supervised Scaling Law")**
> A power-law model (Equation 1) that predicts model cross-entropy based on parameters and training data, used as a baseline for comparing distillation performance.

**[Scaling Laws for Floating–Point Quantization Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sun25j/sun25j.pdf) (as "Capybara scaling law")**
> A unified scaling law for floating-point quantization training that models LLM loss as a function of data size (D), model size (N), exponent bits (E), mantissa bits (M), and scaling factor block size (B).

**[Scaling Laws for Floating–Point Quantization Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sun25j/sun25j.pdf) (as "OpenAI scaling law")**
> A parametric scaling-law baseline relating LLM loss to model size and data size, referenced as a classical comparison point.

**[Position: Enough of Scaling LLMs! Lets Focus on Downscaling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/goel25c/goel25c.pdf) (as "Kaplan scaling law")**
> A power law relationship between model performance and model size, dataset size, and compute, used to predict LLM performance during scaling.

**[Position: Enough of Scaling LLMs! Lets Focus on Downscaling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/goel25c/goel25c.pdf) (as "D-CPT law")**
> A systematic framework to determine optimal mixture ratios between general and domain-specific data for domain adaptation while preventing catastrophic forgetting.

**[Position: Enough of Scaling LLMs! Lets Focus on Downscaling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/goel25c/goel25c.pdf) (as "P2 law")**
> A predictive framework for post-training loss after pruning, considering pruning rate, model size, pre-pruning loss, and post-training tokens.

## Relationships

### Associated with
- **Scalability** (constructs)
  > Studies into the success of these large AR models have highlighted their scalability and generalizabilty: the former, as exemplified by scaling laws
  - [Visual Autoregressive Modeling: Scalable Image Generation via Next-Scale Prediction](https://proceedings.neurips.cc/paper_files/paper/2024/file/9a24e284b187f662681440ba15c416fb-Paper-Conference.pdf)
