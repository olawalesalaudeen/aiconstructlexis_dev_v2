# OR-Bench
**Type:** Measurement  
**Referenced in:** 6 papers  

## State of the Field

**What it is.** Across definitions, OR-Bench is most commonly described as a large-scale benchmark for over-refusal in LLMs: papers describe it as the first large-scale over-refusal benchmark, with 80,000 prompts across 10 common rejection categories, framed as safe prompts that are likely to be incorrectly rejected. Some papers refer specifically to OR-Bench-80K, while later uses also mention a 1k-prompt subset and a moderated prompt pool following the canonical OR-Bench methodology. A smaller use treats it as a source of complied benign inputs contrasted with complied harmful inputs.

**What it is claimed to measure.** Papers link OR-Bench to 1 behavioral indicator, Overrefusal, and to no constructs. The measure claim converges on that single indicator: papers say they evaluate over-refusal using OR-Bench, introduce it as an over-refusal benchmark, and use 1k prompts from it to represent overrefusal behaviors. Some descriptions also frame this use as evaluating false-positive refusal rates in LLMs.

**Space of uses.** No other measurement instrument is linked to OR-Bench. Papers position it both as the released benchmark itself and as a comparison or baseline resource: some use OR-Bench-80K as the benchmark release, some use a 1k-prompt subset to represent overrefusal behaviors, and some use the moderated prompt pool following its canonical methodology as a baseline. A smaller line of use draws on it as benign inputs contrasted with harmful inputs to identify a harmfulness direction.

**Concerns raised.** One paper's analysis of the representation space reports that "a significant portion of OR-Bench-80k actually cluster closely with benign prompts."

## Sources

**[OR-Bench: An Over-Refusal Benchmark for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cui25a/cui25a.pdf)**
> A large-scale benchmark for over-refusal in LLMs, consisting of 80,000 safe prompts across 10 categories that are likely to be incorrectly rejected, designed to measure the over-refusal tendency of models.

## Relationships

### → OR-Bench
- **Overrefusal** (behaviors tasks) — *measured_by*
  > Our experiments show that Safe Delta avoids over-defense issues. We evaluate over-refusal using the OR Bench (Cui et al., 2024). (Section 5.7)
  - [Safe Delta: Consistently Preserving Safety when Fine-Tuning LLMs on Diverse Datasets](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lu25g/lu25g.pdf)
