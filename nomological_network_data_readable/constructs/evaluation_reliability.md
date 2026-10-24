# Evaluation reliability
**Type:** Construct  
**Referenced in:** 9 papers  
**Also known as:** Evaluation Reliability, Verifier reliability, Evaluation consistency, Reward model reliability, Scoring reliability  

## State of the Field

Across the provided literature, "Evaluation reliability" is consistently framed as the degree to which an evaluation produces stable, trustworthy, and consistent results. The definitions commonly characterize this stability in terms of resistance to various confounding factors, including data contamination, external manipulation, test set leakage, and prompt format overfitting. The prevailing usage defines reliability in the context of an entire evaluation procedure or method. A more specific framing, from one paper, focuses on the reliability of an LLM-based evaluator, defining it as the production of "consistent and unbiased scores" ("BadJudge: Backdoor Vulnerabilities of LLM-As-A-Judge"). The concept is discussed alongside the development of "fair" and "safe" evaluation methods. One study suggests that a reliable evaluator demonstrates "a significantly stronger alignment with human expert judgments" ("Unbiased Evaluation of Large Language Models from a Causal Perspective"). At least one paper characterizes the understanding of evaluation reliability as an "emergent and open-problem" in the field.

## Sources

**[BadJudge: Backdoor Vulnerabilities of LLM-As-A-Judge](https://proceedings.iclr.cc/paper_files/paper/2025/file/2e48f562a2c8f64c7404a6c3a518af74-Paper-Conference.pdf) (as "Evaluation Reliability")**
> The degree to which an LLM evaluator produces consistent and unbiased scores unaffected by external manipulation or data contamination.

**[xFinder: Large Language Models as Automated Evaluators for Reliable Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/9602d22a8c791f23f8e4d1398e3fb5be-Paper-Conference.pdf)**
> The degree to which an evaluation procedure produces stable and trustworthy results, particularly in the face of challenges like test set leakage or prompt format overfitting.

**[From Passive to Active Reasoning: Can Large Language Models Ask the Right Questions under Incomplete Information?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhou25e/zhou25e.pdf) (as "Verifier reliability")**
> The consistency and accuracy with which a model component evaluates and selects promising reasoning paths during search-based active reasoning, affecting the overall effectiveness of strategies like tree-of-thought.

**[Are Checklists Really Useful for Automatic Evaluation of Generative Tasks?](https://aclanthology.org/2025.emnlp-main.538.pdf) (as "Evaluation consistency")**
> The degree to which an LLM evaluator produces stable judgments across repeated assessments of the same response pair or score.

**[Policy Filtration for RLHF to Mitigate Noise in Reward Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25bq/zhang25bq.pdf) (as "Reward model reliability")**
> The degree to which a reward model's assigned rewards align with the actual performance of model responses, varying across reward ranges.

**[Tool-Augmented Reward Modeling](https://proceedings.iclr.cc/paper_files/paper/2024/file/4eb7f0abf16d08e50ed42beb1e22e782-Paper-Conference.pdf) (as "Scoring reliability")**
> The degree to which a reward model consistently and accurately assigns scores that reflect true human preferences, enhanced by access to external verification tools.

## Relationships

### Evaluation reliability →
- **Human evaluation** (measurements) — *measured_by*
  > We evaluate our approach on multiple classic NLG benchmarks by measuring the correlation between the evaluators/metrics and human annotations in a scoring rating task.
  - [RevisEval: Improving LLM-as-a-Judge via Response-Adapted References](https://proceedings.iclr.cc/paper_files/paper/2025/file/f7ed2318cec3540ca267c3ede12d82fe-Paper-Conference.pdf)
- **LiveBench** (measurements) — *measured_by*
  > Our Unbiased Evaluator demonstrates a significantly stronger alignment with human expert judgments. Since obtaining comprehensive expert evaluations across multiple models is both costly and impractical, we instead benchmark our method against LiveBench (White et al., 2025), a continuously updated and widely recognized evaluation platform. (Section 6.3. Evaluation Reliability)
  - [Unbiased Evaluation of Large Language Models from a Causal Perspective](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25bi/chen25bi.pdf)

### → Evaluation reliability
- **Information extraction** (behaviors tasks) — *causes*
  > optimizing the key answer extraction module improves extraction accuracy and enhances evaluation reliability. (ABSTRACT)
  - [xFinder: Large Language Models as Automated Evaluators for Reliable Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/9602d22a8c791f23f8e4d1398e3fb5be-Paper-Conference.pdf)
