# OpenOrca
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** ORCA, Orca  

## State of the Field

**What it is.** Most papers treat OpenOrca as an instruction or reasoning dataset used for supervised fine-tuning and evaluation, especially around general reasoning, comprehension, and instruction-following. Some authors broaden this into an ORCA family, including OPENORCA and distilled SLIMORCA, described as fine-tuning datasets for instruction-following and as derived from explanations of chain-of-thought reasoning steps from larger models. A smaller line of work describes Orca as an SFT collection that combines prior instruction-tuning data such as FLAN, T0, NIV, and CoT, and one paper also characterizes OpenOrca as augmented FLAN collection data.

**What it is claimed to measure.** Definitions commonly say papers use OpenOrca to evaluate general reasoning, comprehension, and instruction-following capabilities. Across relationship claims, it is linked to 1 construct, General ability, and to no behavioral indicators. That link is a causes claim rather than a measured_by claim: one paper says instruction datasets such as OpenOrca are included to preserve the task solving abilities of LLMs, so the reported linkage is concentrated on a single construct.

**Space of uses.** No measurement instrument is linked to OpenOrca. In practice, papers most often position it as training or fine-tuning data: they report fine-tuning on OpenOrca, pair it with OpenHermes-2.5 in supervised fine-tuning, and use it alongside GSM8K and ChatDoctor in fine-tuning experiments. Some papers also use it for constructing in-domain test sets for perplexity evaluation, as a test dataset for instruction-following, for re-weighting and downstream evaluation, or as one of several sentence sources for validating self-information retention and sequence-level semantic aggregation.

## Sources

**[Keeping LLMs Aligned After Fine-tuning: The Crucial Role of Prompt Templates](https://proceedings.neurips.cc/paper_files/paper/2024/file/d6f034bb216b472fc7d32ec7aff20342-Paper-Conference.pdf)**
> An instruction/reasoning dataset used to fine-tune and evaluate general reasoning and comprehension performance.

**[SEAL: Safety-enhanced Aligned LLM Fine-tuning via Bilevel Data Selection](https://proceedings.iclr.cc/paper_files/paper/2025/file/4d5d91b4525151fc0fee1048332bfb6d-Paper-Conference.pdf) (as "ORCA")**
> A dataset family (including OPENORCA and SLIMORCA) used for evaluating instruction-following capabilities, derived from explanations of chain-of-thought reasoning steps from larger models.

**[Data Mixing Optimization for Supervised Fine-Tuning of Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25bh/li25bh.pdf) (as "Orca")**
> SFT collection that aggregates data from prior instruction-tuning datasets like FLAN, T0, and CoT, used for re-weighting and downstream evaluation.
