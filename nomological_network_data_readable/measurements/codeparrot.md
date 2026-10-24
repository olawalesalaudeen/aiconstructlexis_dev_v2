# CodeParrot
**Type:** Measurement  
**Referenced in:** 5 papers  

## State of the Field

**What it is.** Across the available definitions, CodeParrot is treated as a code-focused evaluation resource. One paper describes it as a "code-oriented long-context benchmark" used in length extrapolation evaluation, while another describes it as a code modeling dataset for assessing language modeling performance on programming language sequences.

**What it is claimed to measure.** Papers link it to one construct, Length generalization, and to no behavioral indicators. The measurement claim is concentrated on that single construct: one paper places CodeParrot within "length extrapolation on six long benchmarks," so it is reported as measuring Length generalization.

**Space of uses.** The available papers position it in two ways: as part of a long-benchmark suite for length extrapolation, and as a dataset on which perplexity is evaluated. In the latter use, one paper evaluates perplexity on it alongside PG19 and Proof-Pile, and beyond that co-usage papers do not report links to other measurement instruments.

## Sources

**[Gated Delta Networks: Improving Mamba2 with Delta Rule](https://proceedings.iclr.cc/paper_files/paper/2025/file/4904fad153f6434a7bcf04465d4be2cc-Paper-Conference.pdf)**
> A code-oriented long-context benchmark used in the length extrapolation evaluation.

## Relationships

### → CodeParrot
- **Length generalization** (constructs) — *measured_by*
  > Figure 2: Length extrapolation on six long benchmarks.
  - [Gated Delta Networks: Improving Mamba2 with Delta Rule](https://proceedings.iclr.cc/paper_files/paper/2025/file/4904fad153f6434a7bcf04465d4be2cc-Paper-Conference.pdf)
- **Language modeling** (behaviors tasks) — *measured_by*
  > Language modeling, for which we evaluate perplexity on PG19 (Rae et al., 2020), Proof-Pile (Zhangir Azerbayev), and CodeParrot (CodeParrot) (Section 3.1)
  - [A Silver Bullet or a Compromise for Full Attention? A Comprehensive Study of Gist Token-based Context Compression](https://aclanthology.org/2025.acl-long.241.pdf)
