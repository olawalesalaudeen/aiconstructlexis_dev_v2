# WikiText-2
**Type:** Measurement  
**Referenced in:** 139 papers  
**Also known as:** Wikitext-2, wikitext-2, WikiText2, Wikitext2, WikiText-V2, WikiText2-v1, WT-2  

## State of the Field

**What it is.** Across papers, the prevailing usage treats WikiText-2 as a language modeling benchmark or dataset built from high-quality, cleaned Wikipedia articles, usually used to evaluate text prediction or text continuation with perplexity on validation, test, or dev splits. Several definitions frame it as a standard benchmark for compressed, pruned, or quantized models, and one paper specifies evaluation on "166 test windows of 2048 tokens each"; a smaller line of work instead uses the training data for training from scratch, supervised fine-tuning, hypernetwork training, slicing, or hidden-state analysis. Papers also mention variants and subsets such as raw-WikiText2 (WT-2), WikiText2-v1, WikiText-V2, and the training, validation, dev, or test splits.

**What it is claimed to measure.** Papers link WikiText-2 to eight constructs and one behavioral indicator. The dominant claim is that it measures text generation and language modeling ability through perplexity or LM loss, with some papers explicitly stating that lower perplexity on WikiText-2 reflects stronger language modeling ability; smaller lines of work use it to measure general ability, long-context understanding, and compression robustness, with four other constructs also reported. In these uses, papers describe it as evaluating generative capabilities, general language quality, or model capabilities that are "not impacted by editing" through perplexity on WikiText-2.

**Space of uses.** Most papers position WikiText-2 as a standard perplexity benchmark, commonly alongside C4 and PTB, and some also pair it with WikiText-103 or LAMBADA. Beyond headline evaluation, several papers use it as calibration data or a generic text corpus, and a few use it for zero-shot checks, training from scratch, or monitoring convergence during distillation. The only linked instrument is lm-evaluation-harness, which one paper reports using to report results on Wikitext2.

**Concerns raised.** One paper describes WikiText-2 as a domain-specific calibration dataset and states that perplexity measured on C4 more accurately reflects the performance of different methods.

## Sources

**[A Multi-Level Framework for Accelerating Training Transformer Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/33f2c200b71ce947d356d171022458ec-Paper-Conference.pdf)**
> Language modeling benchmark that evaluates perplexity on a standard validation set to assess generative performance of pruned LLMs.

**[The LLM Surgeon](https://proceedings.iclr.cc/paper_files/paper/2024/file/38a1671ab0747b6ffe4d1c6ef117a3a9-Paper-Conference.pdf) (as "wikitext-2")**
> A standard benchmark dataset derived from Wikipedia articles, used to evaluate the language modeling capabilities of models after compression.

**[JoMA: Demystifying Multilayer Transformers via Joint Dynamics of MLP and Attention](https://proceedings.iclr.cc/paper_files/paper/2024/file/9c93b3cd3bc60c0fe7b0c2d74a2da966-Paper-Conference.pdf) (as "Wikitext-2")**
> A language modeling dataset (Wikitext2) used to train models from scratch and observe their training dynamics.

**[CBQ: Cross-Block Quantization for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/15212bd2265c4a3ab0dbc1b1982c1b69-Paper-Conference.pdf) (as "WikiText2")**
> A language modeling dataset used here as a generation evaluation dataset for measuring quantized model performance.

**[Dobi-SVD: Differentiable SVD for LLM Compression and Some New Perspectives](https://proceedings.iclr.cc/paper_files/paper/2025/file/218ca0d92e6ed8f9db00621e103dc70c-Paper-Conference.pdf) (as "Wikitext2")**
> A language modeling benchmark dataset (also known as WikiText-2) used to evaluate model performance via perplexity.

**[PICASO: Permutation-Invariant Context Composition with State Space Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/0730b81dbc16cce7e85b519cb7fe5a8d-Paper-Conference.pdf) (as "WikiText-V2")**
> A large-scale language modeling benchmark dataset derived from high-quality Wikipedia articles, used to evaluate a model's ability to predict text continuations.

**[Demystifying Singular Defects in Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25es/wang25es.pdf) (as "WikiText2-v1")**
> A dataset of over 100 million tokens from high-quality Wikipedia articles, used in this paper for analyzing hidden states and evaluating model perplexity after quantization.

**[FedSpaLLM: Federated Pruning of Large Language Models](https://aclanthology.org/2025.naacl-long.424.pdf) (as "WT-2")**
> Short for WikiText-2, a language modeling benchmark dataset derived from Wikipedia articles, used to evaluate model perplexity.

## Relationships

### → WikiText-2
- **Language modeling** (behaviors tasks) — *measured_by*
  > To evaluate models trained on C4, we use three metrics: perplexity on C4 validation, perplexity on WikiText-2 (Merity et al., 2016), and 5-shot MMLU accuracy (Hendrycks et al., 2021).
  - [LQ-LoRA: Low-rank plus Quantized Matrix Decomposition for Efficient Language Model Finetuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/d97a16cb83d74195b76e0bf1e85bf072-Paper-Conference.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > we evaluate quantized models by reporting the perplexity of language generation experiments, specifically on WikiText2 (Merity et al., 2016), PTB (Marcus et al., 1994)), C4 (Raffel et al., 2020). (Section 4.1)
  - [OmniQuant: Omnidirectionally Calibrated Quantization for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c6483c8a68083af3383f91ee0dc6db95-Paper-Conference.pdf)
- **Language modeling ability** (constructs) — *measured_by*
  > WikiText-2 and WikiText-103 (Merity et al., 2016) are two commonly used language modeling benchmarks consisting of high-quality Wikipedia articles. (Section 4.1.1)
  - [EMO: EARTH MOVER DISTANCE OPTIMIZATION FOR AUTO-REGRESSIVE LANGUAGE MODELING](https://proceedings.iclr.cc/paper_files/paper/2024/file/1626be0ab7f3d7b3c639fbfd5951bc40-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > "To ensure the desired model capabilities are not impacted by editing, we measure the perplexity of the model on the dev split of WikiText-2"
  - [Model Editing as a Robust and Denoised variant of DPO: A Case Study on Toxicity](https://proceedings.iclr.cc/paper_files/paper/2025/file/acb7ce5aab6e134300a2361dd90a501f-Paper-Conference.pdf)
- **Long-context understanding** (constructs) — *measured_by*
  > “for long-context modeling, we use Wikitext-2 (Merity, 2016) and PG19 (Rae et al., 2019) datasets for evaluation.”
  - [LaCache: Ladder-Shaped KV Caching for Efficient Long-Context Modeling of Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shi25b/shi25b.pdf)
- **Reasoning** (constructs) — *measured_by*
  > For inference ability, we choose six datasets including Hellaswag [48], PIQA [1], WinoGrande [32], QNLI [31], MNLI [44], and WikiText2 [28] for evaluation.
  - [LLMCBench: Benchmarking Large Language Model Compression for Efficient Deployment](https://proceedings.neurips.cc/paper_files/paper/2024/file/9f4cc62d0632911c63163ea3d9ec19bd-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Causal language modeling** (behaviors tasks) — *measured_by*
  > Zero-shot performance of Llama 2 on common sense reasoning tasks (BoolQ, PIQA, HellaSwag, WinoGrande, ARC easy and challenge, and OpenBookQA) and the causal language modeling task on WikiText2 with per-channel asymmetric weight-only quantization. (Table 7)
  - [LRQ: Optimizing Post-Training Quantization for Large Language Models by Learning Low-Rank Weight-Scaling Matrices](https://aclanthology.org/2025.naacl-long.393.pdf)
- **Generative ability** (constructs) — *measured_by*
  > We assess the generative capabilities of the sparsified models on the WikiText2 (Merity et al., 2016) and C4 (Raffel et al., 2020b) datasets. (Section 4.1)
  - [Weight-Aware Activation Sparsity with Constrained Bayesian Optimization Scheduling for Large Language Models](https://aclanthology.org/2025.emnlp-main.57.pdf)
- **Linguistic quality** (constructs) — *measured_by*
  > log perplexity, the average negative log-likelihood of generated tokens on the Wikitext-2 dataset (Merity et al., 2016); ... The latter two metrics measure general language quality (Section 3.1)
  - [How Does DPO Reduce Toxicity? A Mechanistic Neuron-Level Analysis](https://aclanthology.org/2025.emnlp-main.1501.pdf)
- **Text generation quality** (constructs) — *measured_by*
  > “For the base model, we evaluate the quality of text generation using the WikiText2 (Merity et al., 2016), PTB (Marcus et al., 1994), and C4 (Raffel et al., 2020) datasets.”
  - [QoS-Efficient Serving of Multiple Mixture-of-Expert LLMs Using Partial Runtime Reconfiguration](https://raw.githubusercontent.com/mlresearch/v267/main/assets/imani25a/imani25a.pdf)

### Associated with
- **lm-evaluation-harness** (measurements)
  > We use lm-evaluation-harness to report results on Wikitext2
  - [QERA: an Analytical Framework for Quantization Error Reconstruction](https://proceedings.iclr.cc/paper_files/paper/2025/file/21718991f6acf19a42376b5c7a8668c5-Paper-Conference.pdf)
- **SmoothQuant** (measurements)
  > PPL is the perplexity on the validation set of WikiText2-v1. (Table 1)
  - [Demystifying Singular Defects in Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25es/wang25es.pdf)
