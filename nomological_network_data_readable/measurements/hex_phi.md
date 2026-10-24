# HEx-PHI
**Type:** Measurement  
**Referenced in:** 14 papers  
**Also known as:** HEX-PHI, Policy-Oriented Safety Evaluation Benchmarks, POSE benchmark, POSE  

## State of the Field

**What it is.** Across the surveyed papers, HEx-PHI is most commonly described as a harmful query or safety benchmark: a dataset of 330 harmful instructions or queries spanning 11 harmful categories or use cases. Definitions converge on its use for testing whether models comply with harmful requests, produce unsafe outputs, or generate harmful or privacy-invasive responses, though one description narrows this to privacy-harming and personally harmful instructions. A smaller line of work refers to it as the Policy-Oriented Safety Evaluation Benchmarks or the POSE benchmark, describing its categories as derived from Meta's and OpenAI's usage policies or prohibited use cases.

**What it is claimed to measure.** Papers link it to three constructs and one behavioral indicator. Most often, it is used to measure Harmlessness, followed by Safety and Safety alignment, and the only linked behavioral indicator is Harmful content generation. The recorded relationships keep these claims within safety evaluation, with papers describing the benchmark as assessing harmfulness or evaluating whether a model complies with harmful requests, so its use is spread across three constructs rather than centered on a single one.

**Space of uses.** In use, papers usually place HEx-PHI inside multi-benchmark safety evaluations rather than as a standalone test. It is most commonly paired with AdvBench, and also appears alongside HarmBench, DirectHarm4, BeaverTails, and MaliciousInstruct. Across these setups, authors describe it as a harmful query benchmark, or as one of several harmful datasets used to evaluate defense strategies, fine-tuned models, or safety.

## Sources

**[SEAL: Safety-enhanced Aligned LLM Fine-tuning via Bilevel Data Selection](https://proceedings.iclr.cc/paper_files/paper/2025/file/4d5d91b4525151fc0fee1048332bfb6d-Paper-Conference.pdf) (as "HEX-PHI")**
> A dataset containing 11 categories of harmfulness-inducing instructions, specifically designed to evaluate the safety alignment of a language model.

**[Safety Alignment Should be Made More Than Just a Few Tokens Deep](https://proceedings.iclr.cc/paper_files/paper/2025/file/88be023075a5a3ff3dc3b5d26623fa22-Paper-Conference.pdf)**
> HEx-PHI safety benchmark consisting of harmful instructions used to evaluate whether models comply with harmful requests and produce unsafe outputs.

**[BackdoorAlign: Mitigating Fine-tuning based Jailbreak Attack with Backdoor Enhanced Safety Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/094324f386c836c75d4a26f3499d2ede-Paper-Conference.pdf) (as "Policy-Oriented Safety Evaluation Benchmarks")**
> A benchmark dataset used to assess the harmfulness of LLMs, containing questions across 11 harmful categories derived from Meta's and OpenAI's usage policies.

**[Navigating the Safety Landscape: Measuring Risks in Finetuning Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/ada93fa6643735f294be51dc31eebbd4-Paper-Conference.pdf) (as "POSE benchmark")**
> A policy-oriented safety evaluation benchmark built from prohibited use cases in model usage policies.

## Relationships

### → HEx-PHI
- **Safety alignment** (constructs) — *measured_by*
  > “To assess the harmfulness of the compromised LLMs, we select the Policy-Oriented Safety Evaluation Benchmarks”
  - [BackdoorAlign: Mitigating Fine-tuning based Jailbreak Attack with Backdoor Enhanced Safety Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/094324f386c836c75d4a26f3499d2ede-Paper-Conference.pdf)
- **Harmlessness** (constructs) — *measured_by*
  > To assess the defense performance when a naive attacker directly inputs harmful queries to the language model, we utilize two harmful query benchmark datasets: Advbench (Zou et al., 2023) and HEx-PHI (Qi et al., 2024). (Section 4.1)
  - [Layer-Level Self-Exposure and Patch: Affirmative Token Mitigation for Jailbreak Attack Defense](https://aclanthology.org/2025.naacl-long.623.pdf)
- **Safety** (constructs) — *measured_by*
  > For the former, we use three widely recognized safety benchmarks. Specifically, we include all 520 harmful samples from AdvBench (Zou et al., 2023), all 330 samples from HEx-PHI (Qi et al., 2024b), and a randomly selected subset of 1,000 samples from BeaverTails (Ji et al., 2024).
  - [Beware of Your Po! Measuring and Mitigating AI Safety Risks in Role-Play Fine-Tuning of LLMs](https://aclanthology.org/2025.acl-long.544.pdf)
- **Harmful content generation** (behaviors tasks) — *measured_by*
  > HEx-PHI and SORRY-bench are two dedicated benchmarks for evaluating harmfulness in the HarmfulQA context. (Section 2.2)
  - [On Evaluating the Durability of Safeguards for Open-Weight LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/9d3a4cdf6f70559e8c6fe02170fba568-Paper-Conference.pdf)
