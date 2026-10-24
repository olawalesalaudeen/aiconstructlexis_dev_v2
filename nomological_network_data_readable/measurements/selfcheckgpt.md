# SelfCheckGPT
**Type:** Measurement  
**Referenced in:** 10 papers  
**Also known as:** Self-CKGPT  

## State of the Field

**What it is.** Across the surveyed papers, the prevailing usage treats SelfCheckGPT as a suite of hallucination detection methods that analyzes multiple stochastically sampled responses from a model to assess the veracity of a response, often in a zero-resource gray-box or black-box setting. Several papers restate this as self-consistency checking, either by looking for contradictions in the model's own generated text or by verifying whether additional sampled responses support the original answer, and one paper refers to a consistency-based baseline under the name Self-CKGPT. A smaller line of work instead describes SelfCheckGPT as a hallucination correction benchmark or dataset for assessing whether models correct hallucinations or rectify factual inconsistencies.

**What it is claimed to measure.** Papers use it to measure 3 behavioral indicators, with no linked constructs and no linked measurement instruments. The most common claims are that it measures Knowledge editing, where papers evaluate a model's ability to correct hallucination or rectify factual inconsistencies, and Hallucination, where it is used to assess the veracity of LLM responses. It is also reported as measuring Hallucination detection in zero-shot evaluation, and one paper additionally relates it to Hallucination detection by describing it as sampling additional responses and using inconsistency with a target statement for hallucination detection.

**Space of uses.** Papers commonly position SelfCheckGPT as a baseline, comparison method, or hallucination metric rather than linking it to another instrument. In comparative use, it appears alongside SBERT, INSIDE, InterrogateLLM, Lexical Similarity, and EigenScore, and papers also describe evaluating models with SelfCheckGPT for self-consistency. In lifelong model editing work, papers use it as a benchmark for hallucination correction.

## Sources

**[LLM-Check: Investigating Detection of Hallucinations in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/3c1e1fdf305195cd620c118aaa9717ad-Paper-Conference.pdf)**
> A suite of hallucination detection methods that analyzes multiple stochastically sampled responses from a model to assess the veracity of a given response, often in a black-box or gray-box setting.

**[Steer LLM Latents for Hallucination Detection](https://raw.githubusercontent.com/mlresearch/v267/main/assets/park25a/park25a.pdf) (as "Self-CKGPT")**
> A consistency-based baseline method for hallucination detection that assesses the consistency of a model's own generated responses.

## Relationships

### → SelfCheckGPT
- **Knowledge editing** (behaviors tasks) — *measured_by*
  > “we also evaluate its ability to correct Hallucination in SelfCheckGPT [48].”
  - [WISE: Rethinking the Knowledge Memory for Lifelong Model Editing of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/60960ad78868fce5c165295fbd895060-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks) — *measured_by*
  > and also evaluate its ability to correct Hallucination in SelfCheckGPT [48]. (Section 3.1)
  - [WISE: Rethinking the Knowledge Memory for Lifelong Model Editing of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/60960ad78868fce5c165295fbd895060-Paper-Conference.pdf)
- **Hallucination detection** (behaviors tasks) — *measured_by*
  > We compare the proposed AGSER approach with SBERT (Reimers and Gurevych, 2019), SelfCheckGPT (Manakul et al., 2023), INSIDE (Chen et al., 2024) and InterrogateLLM (Yehuda et al., 2024) in zero-shot hallucination detection.
  - [Attention-guided Self-reflection for Zero-shot Hallucination Detection in Large Language Models](https://aclanthology.org/2025.emnlp-main.1063.pdf)
