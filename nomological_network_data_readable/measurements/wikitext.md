# WikiText
**Type:** Measurement  
**Referenced in:** 52 papers  
**Also known as:** Wikitext  

## State of the Field

**What it is.** Across papers, WikiText is most commonly treated as a language-modeling benchmark or corpus built from Wikipedia text, usually evaluated through perplexity on a held-out or validation split. Some authors further describe it as high-quality encyclopedic text, including only articles marked "Good" or "Featured" by human editors, while a smaller line frames Wikitext as a long-context benchmark in the LM evaluation harness or names the Wikitext-2 subset specifically. Definitions also vary between using it as an evaluation benchmark and as a corpus for pre-training or auxiliary language modeling.

**What it is claimed to measure.** Across papers, it is linked to 7 constructs and 2 behavioral indicators, so the measurement claims are spread across several targets rather than converging on one. The prevailing usage is to measure general ability, often via perplexity, with additional papers using it to measure generalization and zero-shot generalization; smaller lines of work report it as measuring commonsense reasoning, confidence, fluency, and language modeling ability, and as evaluating long-form text generation and zero-shot task performance. Separately, one paper reports that WikiText is related to general ability by using encyclopedic data such as WikiText to maintain general factual knowledge.

**Space of uses.** No measurement instrument is linked to it. Papers most commonly position it as a language-modeling check, reporting perplexity or cross-entropy on held-out validation data, sometimes formatted as a single token sequence; other uses are more auxiliary, such as measuring activation sparsity and preactivation distributions on the validation split, using 200 segments as a proxy for model utility, or drawing 64 random 2048-token segments for calibration and expert-parallelism profiling. A smaller line uses it as training data, for example as the pre-training corpus, an auxiliary language-modeling corpus during RL fine-tuning, or encoder training before evaluation on another dataset.

## Sources

**[A Simple and Effective Pruning Approach for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/14c856c7a41297804de4c4890e846b25-Paper-Conference.pdf)**
> A benchmark dataset used to evaluate language modeling performance by measuring perplexity on a held-out validation set of natural text.

**[Scaling Stick-Breaking Attention: An Efficient Implementation and In-depth Study](https://proceedings.iclr.cc/paper_files/paper/2025/file/0b9a261b9aca858b7e6ee44d8b2055be-Paper-Conference.pdf) (as "Wikitext")**
> A language-model evaluation benchmark used here to assess long-context language modeling across different context lengths.

## Relationships

### → WikiText
- **Language modeling** (behaviors tasks) — *measured_by*
  > Following previous works on LLM compression (Xiao et al., 2023; Frantar & Alistarh, 2023), we evaluate the perplexity on the held-out WikiText (Merity et al., 2016) validation set.
  - [A Simple and Effective Pruning Approach for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/14c856c7a41297804de4c4890e846b25-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > We adopt the Evaluation Harness framework (Gao et al., 2023) for general capability evaluation, including MMLU (5-shot, Hendrycks et al., 2020), ARC-C (Clark et al., 2018) and WIKITEXT (Merity et al., 2016) (Section 4).
  - [Surgical, Cheap, and Flexible: Mitigating False Refusal in Language Models via Single Vector Ablation](https://proceedings.iclr.cc/paper_files/paper/2025/file/53dbd7e34fab703a639964e2d3ee9e84-Paper-Conference.pdf)
- **Language modeling ability** (constructs) — *measured_by*
  > “we examine the impact of these intervention strategies on both task performance and language modeling capability, with the latter measured using cross-entropy loss on the pre-training dataset (i.e, WikiText).”
  - [ELICIT: LLM Augmentation Via External In-context Capability](https://proceedings.iclr.cc/paper_files/paper/2025/file/3ffd6024f02b92a52abe8e79a78e9064-Paper-Conference.pdf)
- **Zero-shot generalization** (constructs) — *measured_by*
  > We also evaluate the ability of BD3-LMs to generalize to unseen datasets in a zero-shot setting... We evaluate the likelihood of models trained with OWT on datasets... Wikitext... (Section 6.1)
  - [Block Diffusion: Interpolating Between Autoregressive and Diffusion Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7ede97c3e082c6df10a8d6103a2eebd2-Paper-Conference.pdf)
- **Activation sparsity** (constructs) — *measured_by*
  > We also use the validation split of WikiText (Merity et al., 2017) for measuring the sparsity and recording preactivation distributions of various pretrained models. (Sec. 3.1)
  - [ReLU Strikes Back: Exploiting Activation Sparsity in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/6cf669c222ad13f60d503736fb2bd15b-Paper-Conference.pdf)
- **Long-form text generation** (behaviors tasks) — *measured_by*
  > Long-text Generation: WikiText (Merity et al., 2016), and HelloBench (Que et al., 2024).
  - [Harnessing Diversity for Important Data Selection in Pretraining Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/b588d9b67932b459ea66ff6e2804c6b3-Paper-Conference.pdf)
- **Confidence** (constructs) — *measured_by*
  > "WikiText (Merity et al., 2022) to assess the model’s prediction confidence" (Section 5.1, Datasets)
  - [SageAttention: Accurate 8-Bit Attention for Plug-and-play Inference Acceleration](https://proceedings.iclr.cc/paper_files/paper/2025/file/b286c344d38e10d2466c0514b78e2f36-Paper-Conference.pdf)
- **Zero-shot task performance** (behaviors tasks) — *measured_by*
  > We measure the zero-evaluation performance of trained GPT models on LAMBADA and WikiText using perplexity scores. (Section 5.2)
  - [MERIT: Maximum-normalized Element-wise Ratio for Language Model Large-batch Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/luo25u/luo25u.pdf)

### Associated with
- **Factual knowledge** (constructs)
  > The world fact loss uses encyclopedic data (e.g., WikiText (Merity et al., 2017)) to maintain general factual knowledge. (Section 1).
  - [OBLIVIATE: Robust and Practical Machine Unlearning for Large Language Models](https://aclanthology.org/2025.emnlp-main.183.pdf)
