# Proof-pile
**Type:** Measurement  
**Referenced in:** 7 papers  
**Also known as:** Proof-Pile  

## State of the Field

**What it is.** Across the surveyed papers, Proof-pile is most commonly described as a long-context language modeling dataset centered on mathematical material, either as a cleaned Arxiv Math dataset or, more specifically, as a 13GB collection of long mathematical documents. The descriptions converge on long-form technical or scientific content with many long sequence samples, though some authors describe it more broadly as scientific and technical texts rather than emphasizing Arxiv Math.

**What it is claimed to measure.** Papers use Proof-pile to evaluate language modeling performance on long sequences, most often through perplexity, including long-sequence or long-context performance in technical, scientific, or mathematical domains. No paper links it to a named construct or behavioral indicator, so the recorded descriptions stay at the level of language modeling performance and perplexity rather than a broader measurement claim.

**Space of uses.** Papers most often use Proof-pile alongside GovReport for long-context evaluation, and another study places it beside PG19 and CodeParrot in a perplexity comparison. It is typically used in evaluation settings, with papers reporting perplexity on the test set or selecting random samples with at least 128k tokens each for evaluation.

## Sources

**[LongLoRA: Efficient Fine-tuning of Long-Context Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/211ab571cc9f3802afa6ffff52ae3e5b-Paper-Conference.pdf)**
> Cleaned Arxiv Math dataset used for evaluating long-sequence language modeling performance in scientific domains via perplexity.

**[A Silver Bullet or a Compromise for Full Attention? A Comprehensive Study of Gist Token-based Context Compression](https://aclanthology.org/2025.acl-long.241.pdf) (as "Proof-Pile")**
> A dataset of scientific and technical texts used for evaluating language modeling performance on domain-specific long-form content.

## Relationships

### → Proof-pile
- **Language modeling** (behaviors tasks) — *measured_by*
  > we perform the classic language modeling evaluation, i.e., perplexity evaluation, on GovReport [Huang et al., 2021] and Proof-pile [Zhangir Azerbayev, 2022]. (Section 3.5).
  - [An Efficient Recipe for Long Context Extension via Middle-Focused Positional Encoding](https://proceedings.neurips.cc/paper_files/paper/2024/file/66944d3a3e77ebe366793f6a6126f3a4-Paper-Conference.pdf)
