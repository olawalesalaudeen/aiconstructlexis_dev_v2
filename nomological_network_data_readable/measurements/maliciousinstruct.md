# MaliciousInstruct
**Type:** Measurement  
**Referenced in:** 9 papers  

## State of the Field

**What it is.** Most commonly, papers treat MaliciousInstruct as a harmful benchmark or dataset of malicious instructions for testing LLM safety defenses on out-of-domain or out-of-distribution inputs. Definitions converge on that role, while varying in wording between a dataset, a benchmark, and an out-of-domain test set. Another definition states that it contains 100 broader harmful instructions and is used to assess transferability.

**What it is claimed to measure.** Across the papers, MaliciousInstruct is linked to one construct, Safety, and to no behavioral indicators. The reported measurement claim converges on that single construct: papers use it to measure Safety, including as an out-of-domain test set for evaluating safety defenses and in evaluations that check whether responses lacked keywords indicating instruction rejection.

**Space of uses.** Papers use MaliciousInstruct alongside AdvBench, and also with HEx-PHI and AdvExtent. It is typically positioned as one of several harmful benchmarks for evaluating defense strategies, or as an OOD check for transferability. A paper also uses jailbreak attacks on MaliciousInstruct and then applies string matching to identify whether responses lacked keywords indicating instruction rejection.

## Sources

**[Forewarned is Forearmed:  Harnessing LLMs for Data Synthesis via Failure-induced Exploration](https://proceedings.iclr.cc/paper_files/paper/2025/file/1cded4f97cf5f01a284c574110b7e3b9-Paper-Conference.pdf)**
> A dataset of malicious instructions used as an out-of-domain test set to evaluate a model's safety defenses.

## Relationships

### → MaliciousInstruct
- **Safety** (constructs) — *measured_by*
  > We attack LLM using jailbreak methods on the AdvExtent (Lu et al., 2024) and MaliciousInstruct (Huang et al., 2024), collect responses, and use the string matching method... to identify whether responses lacked keywords indicating instruction rejection. (Section 6.1)
  - [Safety Alignment via Constrained Knowledge Unlearning](https://aclanthology.org/2025.acl-long.1240.pdf)
