# Activation sparsity
**Type:** Construct  
**Referenced in:** 4 papers  

## State of the Field

Across the provided sources, activation sparsity is consistently defined as the phenomenon where a considerable portion of a model's hidden state activations are zero-valued. The construct is operationalized through its reported effects on model performance and characteristics. The most prevalent application discussed is its role in improving computational efficiency, a causal link supported by multiple papers in this set. As one study notes, "Activation sparsity can reduce the computational overhead and memory transfers during the forward pass" ("La RoSA: Enhancing LLM Efficiency via Layerwise Rotated Sparse Activation"). A less frequently mentioned claim, from a single paper, is that activation sparsity also causes improved interpretability and explainability. This paper suggests that making layers sparser "should encourage more disentangled internal representations" ("Mixture of Experts Made Intrinsically Interpretable").

## Sources

**[La RoSA: Enhancing LLM Efficiency via Layerwise Rotated Sparse Activation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25cj/liu25cj.pdf)**
> The phenomenon where a significant portion of a model's hidden state activations are zero-valued, which can be exploited to improve computational efficiency.

## Relationships

### Activation sparsity →
- **Computational efficiency** (constructs) — *causes*
  > achieving activation sparsity offers a compelling advantage by providing a favorable balance between accuracy and speedup, especially on modern hardware like GPUs (Liu et al., 2023b). (Sec. 1)
  - [ReLU Strikes Back: Exploiting Activation Sparsity in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/6cf669c222ad13f60d503736fb2bd15b-Paper-Conference.pdf)
- **WikiText** (measurements) — *measured_by*
  > We also use the validation split of WikiText (Merity et al., 2017) for measuring the sparsity and recording preactivation distributions of various pretrained models. (Sec. 3.1)
  - [ReLU Strikes Back: Exploiting Activation Sparsity in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/6cf669c222ad13f60d503736fb2bd15b-Paper-Conference.pdf)
- **Interpretability and explainability** (constructs) — *causes*
  > Sparsity of Hidden Activations: Lower numbers of non-zero neurons lead to more interpretable representations.
  - [Mixture of Experts Made Intrinsically Interpretable](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25ag/yang25ag.pdf)
- **Monosemanticity** (constructs) — *causes*
  > These designs ensure that only the most salient features are routed and processed by the experts
  - [Mixture of Experts Made Intrinsically Interpretable](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25ag/yang25ag.pdf)

### Associated with
- **Machine reading comprehension** (behaviors tasks)
  > "we introduce a tiny validation dataset and two groups of benchmarks for evaluation, including commonsense reasoning (C.R.) and reading comprehension (R.C.)"
  - [Sparsing Law: Towards Large Language Models with Greater Activation Sparsity](https://raw.githubusercontent.com/mlresearch/v267/main/assets/luo25i/luo25i.pdf)
