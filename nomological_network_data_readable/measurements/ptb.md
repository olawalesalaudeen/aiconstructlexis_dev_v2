# PTB
**Type:** Measurement  
**Referenced in:** 35 papers  
**Also known as:** Penn Treebank, Penn Treebank (PTB), Penn Tree Bank  

## State of the Field

**What it is.** Most papers treat PTB, usually expanded as Penn Treebank, as a language modeling benchmark, corpus, or dataset. The prevailing description is as an evaluation set for perplexity or next-token prediction, especially in pruning, quantization, and compression studies, though some papers instead use it in zero-shot evaluation or as a source of PropBank-annotated sentences for grammatical analysis. Definitions occasionally refer to particular versions or slices, such as a test split or a version "preprocessed by Dyer et al. (2016)."

**What it is claimed to measure.** Papers link PTB to two constructs and one behavioral indicator. The prevailing usage is to measure Text generation: several papers report perplexity on PTB for language generation tasks, and relationship evidence explicitly groups PTB with datasets used "for text generation tasks." Smaller lines of work use PTB to measure Language modeling ability and Zero-shot generalization.

**Space of uses.** No other measurement instrument is linked to PTB in the recorded relationships. In practice, papers usually report it together with WikiText2 and C4, and sometimes with WikiText103 or LAMBADA; several snippets use the trio "WikiText2, PTB and C4" for perplexity reporting. Papers position PTB as among the popular benchmarks in LLM compression literature, and some also use it in zero-shot settings without fine-tuning.

## Sources

**[A Multi-Level Framework for Accelerating Training Transformer Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/33f2c200b71ce947d356d171022458ec-Paper-Conference.pdf)**
> PTB (Penn Treebank) is a language-modeling benchmark used to evaluate pruned models via perplexity.

**[Language Models over Canonical Byte-Pair Encodings](https://raw.githubusercontent.com/mlresearch/v267/main/assets/vieira25b/vieira25b.pdf) (as "Penn Treebank")**
> Corpus used for evaluating language models, specifically its test split containing 3761 strings, used here to measure log-loss improvements under canonicality enforcement.

**[Learning from Teaching Regularization: Generalizable Correlations Should be Easy to Imitate](https://proceedings.neurips.cc/paper_files/paper/2024/file/01ce1ae7f94d139e4917f9e4425a4f38-Paper-Conference.pdf) (as "Penn Tree Bank")**
> A language modeling benchmark used to evaluate next-token prediction performance in unsupervised pretraining experiments.

## Relationships

### → PTB
- **Language modeling** (behaviors tasks) — *measured_by*
  > Perplexity of C4, wikitext2 and PTB on LLaMA-7b quantized with PTQ methods. (Table 3)
  - [PB-LLM: Partially Binarized Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/3ab228c4703c4459b1a600ebadc5732c-Paper-Conference.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > we evaluate quantized models by reporting the perplexity of language generation experiments, specifically on WikiText2 (Merity et al., 2016), PTB (Marcus et al., 1994)), C4 (Raffel et al., 2020). (Section 4.1)
  - [OmniQuant: Omnidirectionally Calibrated Quantization for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c6483c8a68083af3383f91ee0dc6db95-Paper-Conference.pdf)
- **Language modeling ability** (constructs) — *measured_by*
  > We evaluate quantized model performance by two metrics. Firstly, we measure perplexity, measured on the WikiText2 (Merity et al., 2016), Penn Treebank (Marcus et al., 1994) and C4 (Raffel et al., 2020) datasets. (Section 5)
  - [SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression](https://proceedings.iclr.cc/paper_files/paper/2024/file/1787533e171dcc8549cc2eb5a4840eec-Paper-Conference.pdf)

### Associated with
- **Perplexity** (measurements)
  > “We consider the test sets of raw-WikiText2 (Merity et al., 2016) (WT-2) and PTB ... as well as a subset of the C4 validation data”
  - [FedSpaLLM: Federated Pruning of Large Language Models](https://aclanthology.org/2025.naacl-long.424.pdf)
