# MultiJail
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Across the papers, the prevailing description is a multilingual benchmark for adversarial or harmful prompts across languages. One definition describes it as a red-teaming dataset covering nine languages, used to sample and translate adversarial prompts for non-English safety evaluation, while another describes it as a multilingual harmful-prompt benchmark; one paper further mentions 315 queries when using it as seed data.

**What it is claimed to measure.** Its reported measurement role is narrow rather than spread across many targets. Papers link it to one behavioral indicator, harmful content detection, and to no constructs, using it specifically to evaluate the accuracy of detecting harmful prompts in multilingual benchmarks.

**Space of uses.** Papers position it both as a benchmark in multilingual safety evaluation and as seed data for another dataset. It is related to one other instrument, CSRT, which one paper constructs by leveraging MultiJail's 315 queries as seed data, and another paper evaluates on it alongside other text attack benchmarks such as RTP-LX and AyaRedTeaming.

## Sources

**[Code-Switching Red-Teaming: LLM Evaluation for Safety and Multilingual Understanding](https://aclanthology.org/2025.acl-long.657.pdf)**
> A multilingual red-teaming dataset covering nine languages, used to sample and translate adversarial prompts for evaluating LLM safety in non-English contexts.

## Relationships

### → MultiJail
- **Harmful content detection** (behaviors tasks) — *measured_by*
  > Table 3 compares the accuracy of detecting harmful prompts for text benchmarks. Table 3(A) shows results for multilingual benchmarks, where OMNIGUARD ... achieves new state-of-the-art performance for 3 benchmarks: MultiJail, RTP-LX, and AyaRedTeaming.
  - [MULTIGUARD: An Efficient Approach for AI Safety Moderation Across Languages and Modalities](https://aclanthology.org/2025.emnlp-main.819.pdf)

### Associated with
- **CSRT** (measurements)
  > To construct the CSRT dataset for the following experiments in Section 4, we leverage MultiJail (Deng et al., 2024) of 315 queries as seed data in Step 1... (Section 3)
  - [Code-Switching Red-Teaming: LLM Evaluation for Safety and Multilingual Understanding](https://aclanthology.org/2025.acl-long.657.pdf)
