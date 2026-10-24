# AlpacaFarm
**Type:** Measurement  
**Referenced in:** 11 papers  
**Also known as:** Alpacafarm  

## State of the Field

**What it is.** Papers most commonly treat AlpacaFarm as an evaluation framework or benchmark for open-ended conversation and instruction-following models, though some describe it as a dataset, codebase, or software framework. Across definitions and snippets, it contains instructions, output pairs or model responses, and human preference annotations for pairwise comparisons, and papers say it uses human or model-based comparisons to assess response quality and instructability. Several papers refer to a test set of 805 instructions, training or validation splits, and a full collection of 9.69k instructions; one paper also uses a variant with separate splits for different RLHF stages.

**What it is claimed to measure.** Papers link AlpacaFarm to two constructs and one behavioral indicator. They use it to measure Helpfulness and Instruction following ability, and one paper also reports it as measuring Pairwise comparison by placing it among benchmarks that primarily rely on that task. Definitions in the same literature also describe it as assessing response quality and instructability.

**Space of uses.** In use, papers apply AlpacaFarm both as an evaluation benchmark and as a dataset with training and validation splits for reward-model or RLHF workflows. Authors sample instructions or instruction-output pairs from it, use a variant with separate RLHF-stage splits or a 200-instruction validation set, and in some settings use the codebase with GPT-4o or GPT4-32K to judge responses or compute win rates against Davinci-003 outputs. Papers also place it alongside MT-Bench, LLMBar, and Anthropic's hh-rlhf dataset in evaluations of open-ended instruction following, preference learning, or alignment methods.

**Concerns raised.** A concern raised in one paper is the low agreement between human annotators reported for AlpacaFarm, given as 66%.

## Sources

**[Evaluating Large Language Models at Evaluating Instruction Following](https://proceedings.iclr.cc/paper_files/paper/2024/file/afc8b034823271816d14f7c1aefe1dff-Paper-Conference.pdf)**
> Evaluation framework for open-ended conversation models, using human or model-based comparisons to assess response quality and instructability.

**[RevisEval: Improving LLM-as-a-Judge via Response-Adapted References](https://proceedings.iclr.cc/paper_files/paper/2025/file/f7ed2318cec3540ca267c3ede12d82fe-Paper-Conference.pdf) (as "Alpacafarm")**
> A benchmark for evaluating instruction-following models, which includes human preference annotations for pairwise comparisons.

## Relationships

### → AlpacaFarm
- **Helpfulness** (constructs) — *measured_by*
  > The first is the test set from AlpacaFarm (Dubois et al., 2023), which contains 805 instructions for assessing helpfulness. (Sec. 5.1)
  - [Gaining Wisdom from Setbacks: Aligning Large Language Models via Mistake Analysis](https://proceedings.iclr.cc/paper_files/paper/2024/file/fe24df54d5ccd95cdf830a309f2bf5c0-Paper-Conference.pdf)
- **Instruction following ability** (constructs) — *measured_by*
  > We evaluate another 1,000 instructions and use the AlpacaFarm codebase (Dubois et al., 2024) to judge the responses from two models with GPT-4o. (Section 5.1)
  - [DataMan: Data Manager for Pre-training Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/1abed6ee581b9ceb4e2ddf37822c7fcb-Paper-Conference.pdf)
- **Pairwise comparison** (behaviors tasks) — *measured_by*
  > “open-ended instruction-following benchmarks (MT-Bench, Alpacafarm, and LLMBar), which primarily rely on pairwise comparison task.”
  - [RevisEval: Improving LLM-as-a-Judge via Response-Adapted References](https://proceedings.iclr.cc/paper_files/paper/2025/file/f7ed2318cec3540ca267c3ede12d82fe-Paper-Conference.pdf)
