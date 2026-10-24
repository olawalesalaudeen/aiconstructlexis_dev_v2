# DecodingTrust
**Type:** Measurement  
**Referenced in:** 8 papers  
**Also known as:** Decoding Trust  

## State of the Field

**What it is.** Across the surveyed papers, DecodingTrust is most commonly described as a benchmark dataset for evaluating LLM trustworthiness or related properties. Definitions and snippets emphasize both broad coverage, described as assessing models from several perspectives, and specific components, especially a privacy dataset with the Enron email extraction task and a stereotypes partition about demographic groups. A smaller line of work describes it differently, as a public leaderboard that integrates massive amounts of new test data, or as a benchmark that collects red-teaming instructions for safety and trustworthiness evaluation.

**What it is claimed to measure.** Papers link DecodingTrust to 2 constructs and 1 behavioral indicator. The most frequently linked constructs are Aesthetic bias and Trustworthiness, and the linked behavioral indicator is Privacy leakage. The uses are spread across these targets rather than centered on one alone: papers report that it measures Aesthetic bias through a stereotypes-focused use, measures Trustworthiness through a comprehensive assessment framing, and measures Privacy leakage through the privacy dataset, especially the Enron email extraction task.

**Space of uses.** No measurement instrument is linked to it. Papers use it both as a broad benchmark and through specific subsets, and they mention it alongside CrowS-Pairs for stereotypes, TrustLLM in discussions of trustworthiness benchmarks, and AdvBench and SafetyPrompt as collections of red-teaming instructions; another paper also groups it with Enkrypt AI as a leaderboard integrating new test data.

**Concerns raised.** One paper raises a clear concern about its evaluation format, saying that DecodingTrust employs static templates for testing and that such templates do not account for the dynamic nature of red-teaming algorithms, which that paper says limits effectiveness.

## Sources

**[Certifying Counterfactual Bias in LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/1c6decac1477fbcc2cbf12d314ce0133-Paper-Conference.pdf) (as "Decoding Trust")**
> A benchmark dataset used to evaluate LLM properties, including stereotype bias against demographic groups, here using the stereotypes partition.

**[IterGen: Iterative Semantic-aware Structured LLM Generation with Backtracking](https://proceedings.iclr.cc/paper_files/paper/2025/file/3d3a9e085540c65dd3e5731361f9320e-Paper-Conference.pdf)**
> A benchmark dataset designed to evaluate the trustworthiness of LLMs, including tasks related to privacy, such as the Enron email extraction task used to assess data leakage.

## Relationships

### → DecodingTrust
- **Trustworthiness** (constructs) — *measured_by*
  > DecodingTrust (Wang et al. [2023]) was among the first to aim for a comprehensive assessment of trustworthiness in GPT models from several perspectives. (Section 2.1)
  - [Enhancing Multiple Dimensions of Trustworthiness in LLMs via Sparse Activation Control](https://proceedings.neurips.cc/paper_files/paper/2024/file/1cb5b3d64bdf3c6642c8d9a8fbecd019-Paper-Conference.pdf)
- **Privacy leakage** (behaviors tasks) — *measured_by*
  > We use the DecodingTrust (Wang et al., 2024) privacy dataset, focusing on the Enron email extraction task. (Section 4.2)
  - [IterGen: Iterative Semantic-aware Structured LLM Generation with Backtracking](https://proceedings.iclr.cc/paper_files/paper/2025/file/3d3a9e085540c65dd3e5731361f9320e-Paper-Conference.pdf)
- **Stereotyping** (constructs) — *measured_by*
  > To verify ALI-Agent’s effectiveness as a general evaluation framework, we conduct experiments on six datasets from three distinct aspects of human values: stereotypes (DecodingTrust [11], CrowS-Pairs [2])...
  - [ALI-Agent: Assessing LLMs'  Alignment with Human Values via Agent-based Evaluation](https://proceedings.neurips.cc/paper_files/paper/2024/file/b35c38f70065ac6c694089ca93a015bb-Paper-Conference.pdf)
