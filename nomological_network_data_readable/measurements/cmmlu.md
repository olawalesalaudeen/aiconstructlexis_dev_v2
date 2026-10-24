# CMMLU
**Type:** Measurement  
**Referenced in:** 24 papers  

## State of the Field

**What it is.** Most papers treat CMMLU as a comprehensive benchmark for evaluating knowledge and reasoning in Chinese, often under the name Chinese Massive Multitask Language Understanding. Several descriptions add that it covers 67 subjects from basic to advanced or professional levels, and one definition says it uses multiple-choice questions across diverse academic disciplines. A smaller set of papers frames it more specifically as Chinese language understanding or proficiency, while a few describe it differently, including as multilingual or multimodal, and one snippet mentions a 5-shot setting.

**What it is claimed to measure.** Across papers, its measurement claims are spread across 4 constructs and no behavioral indicators, rather than concentrating on a single target. The most frequently linked constructs are Chinese language understanding, general ability, reasoning, and generalization. Papers use it to assess "Chinese language understanding," to check that general capabilities are not compromised, and in one out-of-domain evaluation to test generalization.

**Space of uses.** CMMLU is usually used as one component of a broader evaluation suite, commonly alongside MMLU and also with C-Eval, GSM8K, Xiezhi, and ICLEval. Papers position it as the Chinese benchmark within larger benchmark mixes, and one study says it is used "to ensure that their general capabilities are not compromised after naturalness alignment" (Do Large Language Models have an English Accent? Evaluating and Improving the Naturalness of Multilingual LLMs). A smaller line of work uses it as a high-resource Chinese baseline for comparison with Ti-MMLU, and one paper uses it in 5-shot form.

## Sources

**[Do Large Language Models have an English Accent? Evaluating and Improving the Naturalness of Multilingual LLMs](https://aclanthology.org/2025.acl-long.193.pdf)**
> The Chinese Massive Multitask Language Understanding benchmark, used to evaluate a model's general capabilities in Chinese to ensure they are not compromised after alignment.

## Relationships

### → CMMLU
- **General ability** (constructs) — *measured_by*
  > our approach can largely improve the performance of Llama-3 (8B), including both the general abilities (+8.81 on C-Eval and +6.31 on CMMLU)
  - [Towards Effective and Efficient Continual Pre-training of Large Language Models](https://aclanthology.org/2025.acl-long.289.pdf)
- **Chinese language understanding** (constructs) — *measured_by*
  > Each model’s performance was assessed using domain-specific benchmarks: CMMLU (Li et al., 2023) for Chinese language understanding
  - [Superpose Task-specific Features for Model Merging](https://aclanthology.org/2025.emnlp-main.210.pdf)
- **Reasoning** (constructs) — *measured_by*
  > We use zero-shot or few-shot learning to test the reasoning ability across five benchmarks, including MMLU (Hendrycks et al., 2021), CMMLU (Li et al., 2024a), Truthful-QA (Lin et al., 2021), GSM-PLUS (Li et al., 2024b), and GSM8K (Cobbe et al., 2021). (Section 4.3.1)
  - [Weak-to-Strong Preference Optimization: Stealing Reward from Weak Aligned Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/5beb3a846137dd6524f2da17c97d9426-Paper-Conference.pdf)
- **Language modeling** (behaviors tasks) — *measured_by*
  > To validate the performance of different models, we used some benchmarks for the 3B and 19B models that were trained more tokens, including Lambada(Paperno et al., 2016), Winogrande(Sakaguchi et al., 2021), Hellaswag(Zellers et al., 2019), ARC(Clark et al., 2018), CMMLU(Li et al., 2023a), MMLU(Hendrycks et al.), Math(Hendrycks et al., 2021). (Section 4.1)
  - [KV Shifting Attention Enhances Language Modeling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25ac/xu25ac.pdf)
- **Generalization** (constructs) — *measured_by*
  > To rigorously assess the generalization capabilities of merged checkpoints to unseen domains, we evaluated the out-of-domain (OOD) performance of various merging methods. Although merging weights were determined using the C-Eval dataset (in-domain, IND), we tested the merged models on three diverse OOD datasets: CMMLU, MMLU, and GSM8K. (Section 4.2)
  - [Maximizing Intermediate Checkpoint Value in LLM Pretraining with Bayesian Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25bv/liu25bv.pdf)
