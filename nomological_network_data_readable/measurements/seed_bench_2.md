# SEED-Bench-2
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** Seed-Bench-2, SeedBench-2, Seed-bench-2  

## State of the Field

**What it is.** Across the papers, SEED-Bench-2 is most commonly described as a multimodal benchmark for evaluating models on multimodal inputs, especially cases with multiple images. Definitions variously say it evaluates the ability to comprehend and reason about multimodal inputs containing multiple images, serves as a benchmark for general performance of Vision-Language Assistants after debiasing methods, and is used as a non-synthetic comparison point for LVLM evaluation rankings. Descriptions also differ on context length: one survey places it in long-context tasks that require identifying relevant information from image sequences, while another paper groups it with multi-image benchmarks that consist of short contexts.

**What it is claimed to measure.** Papers link SEED-Bench-2 to 2 constructs and no behavioral indicators. The only direct measurement claim is for Multi-image reasoning: one paper says it measures this by evaluating the ability to comprehend multimodal inputs containing multiple images. Long-context understanding appears only as a related construct, with one paper discussing SEED-Bench-2 in connection with that capability by arguing that it does not evaluate long-context document comprehension.

**Space of uses.** No measurement instrument is linked to it through recorded relationships. In the papers, it is nevertheless used alongside MMBench-en-dev, MME, MMMU-dev, BLINK, and Dysca, either as one of several multimodal benchmarks for evaluating debiasing methods, as a non-synthetic reference for comparing LVLM evaluation rankings, or as an existing multi-image benchmark contrasted with longer-context evaluations.

**Concerns raised.** The concern that appears in the papers is about scope: one paper states that benchmarks such as SEED-Bench-2 "consist of short contexts" and therefore "fail to evaluate the capability for long-context document comprehension." This caution sits next to a different description that places Seed-bench-2 in long-context tasks, so papers do not describe its context regime in the same way.

## Sources

**[Revealing and Reducing Gender Biases in Vision and Language Assistants (VLAs)](https://proceedings.iclr.cc/paper_files/paper/2025/file/189b0101331a7a87bf7686d8bb20e12d-Paper-Conference.pdf) (as "Seed-Bench-2")**
> Seed-Bench-2 (Li et al., 2023a; 2024a) is a multimodal benchmark used to evaluate the general performance of Vision-Language Assistants after applying debiasing methods.

**[Dysca: A Dynamic and Scalable Benchmark for Evaluating Perception Ability of LVLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/a2372bb107ef0ba85e47c6a2dc7dafda-Paper-Conference.pdf) (as "SeedBench-2")**
> SeedBench-2, a benchmark used in the paper as a non-synthetic comparison point for LVLM evaluation rankings.

**[From Introspection to Best Practices: Principled Analysis of Demonstrations in Multimodal In-Context Learning](https://aclanthology.org/2025.naacl-long.170.pdf)**
> A benchmark that evaluates a model's ability to comprehend and reason about multimodal inputs containing multiple images.

**[Towards Rationality in Language and Multimodal Agents: A Survey](https://aclanthology.org/2025.naacl-long.186.pdf) (as "Seed-bench-2")**
> Seed-bench-2 is a benchmark for evaluating multimodal agents in long-context tasks that require identifying relevant information from image sequences.

## Relationships

### → SEED-Bench-2
- **Multi-image reasoning** (constructs) — *measured_by*
  > Multi-image Tasks: Seed-Bench-2 (Li et al., 2024) evaluates the ability to comprehend multimodal inputs containing multiple images.
  - [From Introspection to Best Practices: Principled Analysis of Demonstrations in Multimodal In-Context Learning](https://aclanthology.org/2025.naacl-long.170.pdf)

### Associated with
- **Long-context understanding** (constructs)
  > existing benchmarks for multi-image comprehensions, such as SEED-Bench-2 [25] and BLINK [26], consist of short contexts, which fail to evaluate the capability for long-context document comprehension. (Introduction)
  - [Needle In A Multimodal Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/24a8968affe71ffe4067d022b9d16566-Paper-Datasets_and_Benchmarks_Track.pdf)
