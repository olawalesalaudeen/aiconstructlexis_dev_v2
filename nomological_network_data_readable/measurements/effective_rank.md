# Effective rank
**Type:** Measurement  
**Referenced in:** 3 papers  
**Also known as:** Entropy-ESS, Tolerance-ESS, Effective state-size  

## State of the Field

Across the provided literature, 'Effective rank' is a computational metric with two distinct applications for analyzing model internals. One line of work presents it as a specific variant of 'Effective state-size' (ESS), a metric used to measure `Context utilization`. In this framing, 'Effective rank' is synonymous with 'Entropy-ESS' and is computed from the spectral entropy of a linear operator's singular values. The broader ESS metric is explicitly proposed as a 'proxy for memory utilization' in causal sequence models. A separate application uses 'Effective rank' to assess `Reward overoptimization` by measuring the diversity of hidden state representations in reward models. This approach operationalizes the detection of overfitting by comparing the metric's value on training versus evaluation data. As one study notes, a 'large discrepancy between the erank of the train and evaluation sets indicates that the model... [has] overfitted.' Thus, the metric is used to operationalize both `Context utilization` and `Reward overoptimization` through related but distinct computational procedures.

## Sources

**[On the Robustness of Reward Models for Language Model Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hong25d/hong25d.pdf)**
> Parametric analysis measuring the diversity of hidden state representations in reward models, used to detect overfitting by comparing train and evaluation set representation spaces.

**[Quantifying Memory Utilization with Effective State-Size](https://raw.githubusercontent.com/mlresearch/v267/main/assets/parnichkun25a/parnichkun25a.pdf) (as "Tolerance-ESS")**
> A variant of the Effective State-Size (ESS) calculation where the rank is determined by counting the number of singular values of the operator submatrix that are above a specified tolerance threshold.

**[Quantifying Memory Utilization with Effective State-Size](https://raw.githubusercontent.com/mlresearch/v267/main/assets/parnichkun25a/parnichkun25a.pdf) (as "Entropy-ESS")**
> A variant of the Effective State-Size (ESS) calculation, also known as effective rank, computed by exponentiating the normalized spectral entropy of the operator submatrix's singular values.

**[Quantifying Memory Utilization with Effective State-Size](https://raw.githubusercontent.com/mlresearch/v267/main/assets/parnichkun25a/parnichkun25a.pdf) (as "Effective state-size")**
> A metric computed as the rank of submatrices of the linear operator T in causal sequence models, used to quantify memory utilization; includes variants like tolerance-ESS and entropy-ESS.

## Relationships

### → Effective rank
- **Context utilization** (constructs) — *measured_by*
  > "we develop a quantitative measure of memory utilization... This metric, which we call effective state-size (ESS)"
  - [Quantifying Memory Utilization with Effective State-Size](https://raw.githubusercontent.com/mlresearch/v267/main/assets/parnichkun25a/parnichkun25a.pdf)
