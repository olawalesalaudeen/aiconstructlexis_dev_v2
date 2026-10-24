# SORRY-Bench
**Type:** Measurement  
**Referenced in:** 11 papers  
**Also known as:** SORRY-bench, Sorry-Bench, SorryBench  

## State of the Field

**What it is.** Across these papers, the prevailing usage treats SORRY-Bench as a benchmark or dataset of unsafe, harmful prompts or instructions for testing model safety behavior. Definitions vary in emphasis: some describe it as evaluating safety alignment and refusal capabilities, some as a harmfulness benchmark in the HarmfulQA context, and others as assessing whether an LLM rejects questions with harmful intent. Reported contents include 450 harmful instructions and harmful prompts across 45 categories, and one paper also uses it as a source of unsafe prompts to build a preference dataset.

**What it is claimed to measure.** Papers link it to 1 construct and 4 behavioral indicators. The linked measurement claims cover several targets: papers use it to measure Safety, and also use it to measure Refusal, Harmful request refusal, Harmful content generation, and Jailbreaking. The framing is most often about harmfulness and refusal, including use on 450 unseen harmful test sets and as a dedicated benchmark for evaluating harmfulness in the HarmfulQA context.

**Space of uses.** No measurement instrument is linked to it. In practice, papers use it alongside HEx-PHI, WildJailbreak, and SALAD-Bench in broader safety evaluations, and alongside Alpaca to form harmful and harmless sets. Some papers use it only for evaluation, while others also draw unsafe prompts from it to create training or preference data.

**Concerns raised.** A smaller critical note appears in work proposing SORRY-Bench2, which says existing evaluations have deficiencies and presents SORRY-Bench2 as a systematic benchmark for LLM safety refusal.

## Sources

**[Unintentional Unalignment: Likelihood Displacement in Direct Preference Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/3df38ca67befaed9c03b95ffee07d9f8-Paper-Conference.pdf)**
> A dataset of unsafe prompts used to evaluate and train models for safety alignment and refusal capabilities.

**[On Evaluating the Durability of Safeguards for Open-Weight LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/9d3a4cdf6f70559e8c6fe02170fba568-Paper-Conference.pdf) (as "SORRY-bench")**
> A benchmark for evaluating harmfulness in the HarmfulQA context using harmful instructions and model compliance.

**[Programming Refusal with Conditional Activation Steering](https://proceedings.iclr.cc/paper_files/paper/2025/file/e2dd53601de57c773343a7cdf09fae1c-Paper-Conference.pdf) (as "Sorry-Bench")**
> A benchmark dataset containing harmful prompts across 45 categories, used to evaluate a model's refusal capabilities for unsafe content.

**[OR-Bench: An Over-Refusal Benchmark for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cui25a/cui25a.pdf) (as "SorryBench")**
> A benchmark dataset used to assess an LLM's ability to reject questions with harmful intent.

## Relationships

### → SORRY-Bench
- **Safety** (constructs) — *measured_by*
  > For text-only safety, we use SorryBench (Xie et al., 2024) and WildJailbreak (Jiang et al., 2024) (Section 3.3)
  - [How Does Vision-Language Adaptation Impact the Safety of Vision Language Models?](https://proceedings.iclr.cc/paper_files/paper/2025/file/84d286e32bbee8fa3a86ee9c50e00081-Paper-Conference.pdf)
- **Harmful request refusal** (behaviors tasks) — *measured_by*
  > we identify three deficiencies underlying these existing evaluations, and address them with SORRY-Bench2, our proposed systematic benchmark to evaluate LLM safety refusal. (Section 1)
  - [SORRY-Bench: Systematically Evaluating Large Language Model Safety Refusal](https://proceedings.iclr.cc/paper_files/paper/2025/file/9622163c87b67fd5a4a0ec3247cf356e-Paper-Conference.pdf)
- **Harmful content generation** (behaviors tasks) — *measured_by*
  > HEx-PHI and SORRY-bench are two dedicated benchmarks for evaluating harmfulness in the HarmfulQA context. (Section 2.2)
  - [On Evaluating the Durability of Safeguards for Open-Weight LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/9d3a4cdf6f70559e8c6fe02170fba568-Paper-Conference.pdf)
- **Jailbreaking** (behaviors tasks) — *measured_by*
  > To assess the generalizability of the weak-to-strong attack, we expanded our evaluation to include two new safety benchmarks: SALAD-Bench (Li et al., 2024) and SORRY-Bench (Xie et al., 2024). (Section 5.1)
  - [Weak-to-Strong Jailbreaking on Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhao25aa/zhao25aa.pdf)
