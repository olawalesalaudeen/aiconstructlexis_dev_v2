# Watermark robustness
**Type:** Construct  
**Referenced in:** 5 papers  
**Also known as:** Robustness to corruption, Attack robustness  

## State of the Field

The ability of an embedded watermark to remain detectable after the text has been altered by various corruptions, such as word substitution or being mixed with human-written text.

## Sources

**[On the Reliability of Watermarks for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d78e9e4316e1714fbb0f20be66f8044c-Paper-Conference.pdf)**
> The ability of an embedded watermark to remain detectable after the text has been altered by various corruptions, such as word substitution or being mixed with human-written text.

**[GaussMark: A Practical Approach for Structural Watermarking of Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/block25a/block25a.pdf) (as "Robustness to corruption")**
> The degree to which a watermark remains detectable after the generated text undergoes token-level or sequence-level modifications such as insertions, deletions, substitutions, or roundtrip translation.

**[A Semantic Invariant Robust Watermark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a2131ebe25bd55e4fc734126ea583ed-Paper-Conference.pdf) (as "Attack robustness")**
> The degree to which a watermark remains detectable after semantically invariant modifications to the generated text, such as paraphrasing or synonym substitution.

## Relationships

### Watermark robustness →
- **Copy-paste attack** (measurements) — *measured_by*
  > Tests involved watermark detection accuracy under no attack, GPT3.5 rewrite attacks, two DIPPER (Krishna et al., 2023) settings, the copy-paste attack as well as the emoj attack (Appendix G). (Table 1)
  - [A Semantic Invariant Robust Watermark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a2131ebe25bd55e4fc734126ea583ed-Paper-Conference.pdf)
- **DIPPER** (measurements) — *measured_by*
  > Tests involved watermark detection accuracy under no attack, GPT3.5 rewrite attacks, two DIPPER (Krishna et al., 2023) settings, the copy-paste attack as well as the emoj attack (Appendix G). (Table 1)
  - [A Semantic Invariant Robust Watermark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a2131ebe25bd55e4fc734126ea583ed-Paper-Conference.pdf)

### Associated with
- **Watermark detectability** (constructs)
  > watermarks should remain detectable after common token- and sequence-level corruptions are applied.
  - [GaussMark: A Practical Approach for Structural Watermarking of Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/block25a/block25a.pdf)
- **Watermark removal** (behaviors tasks)
  > “One critical vulnerability lies in watermark stealing & removal, a method that seeks to reverse-engineer the watermarking process. With this method, adversaries can effectively strip or alter the embedded watermark, undermining its intended protection.”
  - [De-mark: Watermark Removal in Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25bq/chen25bq.pdf)
