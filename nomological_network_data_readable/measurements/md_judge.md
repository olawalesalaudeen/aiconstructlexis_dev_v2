# MD-Judge
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** MD-judge  

## State of the Field

**What it is.** Across the available papers, MD-Judge is treated as an automated, LLM-based evaluation procedure for safety judgments. The descriptions converge on its role as an evaluator or classifier, but differ in scope: one paper describes it as assessing whether generated responses appropriately handle fairness and privacy concerns in terms of safety and appropriateness, while another describes it more generally as evaluating the safety of instruction-response pairs.

**What it is claimed to measure.** Papers link MD-Judge to one construct and to no behavioral indicators. The only recorded measurement claim is that it measures Privacy awareness: one paper reports using it to assess generated responses regarding Qf and Qp, so the measurement claims here are concentrated on that single construct rather than spread across multiple linked outcomes.

**Space of uses.** No other measurement instrument is linked to it here. Papers instead position MD-Judge as the evaluator itself, either by directly employing it to assess model outputs, as in The Tug of War Within: Mitigating the Fairness-Privacy Conflicts in Large Language Models, or by describing it as an evaluation procedure built around an LLM-based classifier for instruction-response pairs.

## Sources

**[The Tug of War Within: Mitigating the Fairness-Privacy Conflicts in Large Language Models](https://aclanthology.org/2025.acl-long.590.pdf) (as "MD-judge")**
> Automated evaluator used to assess whether LLM-generated responses appropriately handle fairness and privacy concerns in terms of safety and appropriateness.

**[Emerging Safety Attack and Defense in Federated Instruction Tuning of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/8a3cb72448f9b914bf888db4f5f268d3-Paper-Conference.pdf)**
> An evaluation procedure that uses a large language model-based classifier to assess the safety of instruction-response pairs.

## Relationships

### → MD-Judge
- **Privacy awareness** (constructs) — *measured_by*
  > We then employ MD-judge (Li et al., 2024b) as the evaluator to assess the LLM’s generated responses regarding Qf and Qp. (Section 4.1)
  - [The Tug of War Within: Mitigating the Fairness-Privacy Conflicts in Large Language Models](https://aclanthology.org/2025.acl-long.590.pdf)
