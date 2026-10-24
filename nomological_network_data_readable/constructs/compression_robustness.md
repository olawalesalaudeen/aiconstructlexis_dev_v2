# Compression robustness
**Type:** Construct  
**Referenced in:** 16 papers  
**Also known as:** Task generalization, Performance recovery  

## State of the Field

**Definition agreement:** Conflicting. Most papers define compression robustness as preserving a model's performance after compression, with one of them explicitly requiring that preservation across in-domain and out-of-domain settings. One paper instead defines it as a pruned model's latent ability to recover the original model's capabilities after compression, so the set mixes performance retention with post-compression recoverability rather than the same phenomenon.

**Space of definitions.** Across the surveyed work, the prevailing usage treats compression robustness as preserving model performance after compression. One definition states it as maintaining performance when parameters are heavily compressed, with wording that stresses retention especially under large compression ratios, and another frames the same general idea as preserving performance across in-domain and out-of-domain evaluation settings. A smaller line of work shifts the focus from preservation to post-pruning performance recovery, defining it as the latent ability of a pruned model to regain the functional capabilities of its dense counterpart after compression.

**Space of facets.** The available definitions do not present a shared subtype taxonomy. Instead, papers use neighboring labels for different facets of the construct: task generalization emphasizes preservation across evaluation settings and datasets, while performance recovery emphasizes regaining information and capabilities lost during pruning, especially at high sparsity ratios. The main axis of variation is therefore preservation under compression versus recovery after pruning.

**Space of measurement.** Papers operationalize the construct with 5 linked measurement instruments and no linked behavioral indicators. The named instruments are all benchmarks or datasets, ARC-Challenge, GSM8K, MMLU, TruthfulQA, and WikiText-2, and the recorded evidence describes evaluating model performance on them after compression. This directly reflects the performance-maintenance and performance-recovery framings; one definition also foregrounds in-domain and out-of-domain evaluation settings, but that distinction is not stated in the linked measurement relations.

**Links.** Papers do not report causal, correlational, or other non-measurement links for this construct. The recorded relationships are measurement links only.

## Sources

**[Basis Sharing: Cross-Layer Parameter Sharing for Large Language Model Compression](https://proceedings.iclr.cc/paper_files/paper/2025/file/238c98450b1d9e8055f94d22f303bb57-Paper-Conference.pdf)**
> The extent to which an LLM maintains performance when its parameters are heavily compressed.

**[Dobi-SVD: Differentiable SVD for LLM Compression and Some New Perspectives](https://proceedings.iclr.cc/paper_files/paper/2025/file/218ca0d92e6ed8f9db00621e103dc70c-Paper-Conference.pdf) (as "Task generalization")**
> The extent to which a compressed model preserves performance across in-domain and out-of-domain evaluation settings.

**[Targeted Low-rank Refinement: Enhancing Sparse Language Models with Precision](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shen25e/shen25e.pdf) (as "Performance recovery")**
> The latent ability of a pruned model to regain the functional capabilities of its original dense counterpart after compression, inferred from improvements in metrics like perplexity across tasks and sparsity levels.
