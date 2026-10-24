# Overrefusal
**Type:** Behavior  
**Referenced in:** 37 papers  
**Also known as:** Over-refusal, Over-rejection, Over-refusal tendency, Over-sensitivity, Over-defense, False refusal, False rejection, Unwarranted refusal, Exaggerated safety behaviors, Oversafety, Benign query refusal  

## State of the Field

**Space of definitions.** Across definitions, the prevailing usage treats this behavior as a model wrongly refusing benign, harmless, legitimate, or otherwise safe and answerable prompts. Most papers describe it as a side effect of overly strict safety mechanisms, overgeneralized safety constraints, poor calibration of safety thresholds, or misclassifying safe inputs as harmful, including cases where prompts only superficially resemble harmful ones or touch sensitive but non-harmful topics. A smaller line of work casts it as a latent tendency or disposition, while others operationalize it as an observable event or rate: a refusal on benign input, sometimes judged by an external evaluator as safe, sometimes formalized as refusal probability above a threshold on benign samples, and sometimes described as refusing while citing ethical or safety concerns or other plausible sounding reasons.

**Variants.** Papers use many near-synonyms for the same pattern, with over-refusal and overrefusal most common, and smaller lines of work calling it over-rejection, over-sensitivity, over-defense, false refusal, false rejection, unwarranted refusal, exaggerated safety behaviors, oversafety, or benign query refusal. The behavior is studied on clearly benign prompts, borderline benign requests, and safe prompts that merely appear toxic or risky, including identity-related queries and prompts like "How to kill a Python program?" that superficially resemble harmful requests. Some work places it in instruction-following settings, while other papers extend it to audio language models, multimodal inputs, and multilingual evaluation.

**Space of elicitation and scores.** Across papers, it is measured by 7 instruments. XSTest is the most frequently linked instrument, followed by OR-Bench, OKTest, OR-Bench-Hard-1K, and WildChat, with 2 other instruments also linked. These are described as test suites, large-scale benchmarks, held-out or out-of-distribution benchmarks, and dataset-based evaluations, and scoring is usually framed as compliance on benign prompts or as refusal, false-refusal, over-refusal, or benign-query rejection rates.

**What it is taken as evidence of.** Papers do not converge on a single construct that this behavior reflects. The most recurrent construct link is Safety alignment: several papers claim a causal relationship from Safety alignment to Overrefusal, often describing safety training or strict alignment as producing unnecessary refusals. Other construct links are less common and mixed in direction: Helpfulness is linked both by a causal relationship from Overrefusal to Helpfulness and by a related link from Helpfulness to Overrefusal, and isolated papers also report that Overrefusal is related to Safety and claim a causal relationship from Overrefusal to Utility preservation.

## Sources

**[Reimagining Safety Alignment with An Image](https://aclanthology.org/2025.emnlp-main.485.pdf) (as "Over-refusal")**
> A latent tendency of a model to inappropriately reject benign or borderline queries due to overly strict safety mechanisms, reflecting poor calibration of safety thresholds.

**[Reshaping Representation Space to Balance the Safety and Over-rejection in Large Audio Language Models](https://aclanthology.org/2025.emnlp-main.510.pdf) (as "Over-rejection")**
> The tendency of a model to inappropriately refuse benign queries, often as a side effect of safety training, reflecting a failure to distinguish between harmful and semantically similar but safe inputs.

**[Governance in Motion: Co-evolution of Constitutions and AI models for Scalable Safety](https://aclanthology.org/2025.emnlp-main.869.pdf) (as "Over-refusal tendency")**
> The propensity of a model to inappropriately refuse to answer harmless or benign queries, reflecting an imbalance between safety and helpfulness.

**[Understanding and Mitigating Overrefusal in LLMs from an Unveiling Perspective of Safety Decision Boundary](https://aclanthology.org/2025.emnlp-main.1065.pdf)**
> The latent tendency of a model to incorrectly refuse to answer legitimate, benign queries by misclassifying them as harmful.

**[Refuse Whenever You Feel Unsafe: Improving Safety in LLMs via Decoupled Refusal Training](https://aclanthology.org/2025.acl-long.158.pdf) (as "Over-sensitivity")**
> A safety-related disposition where the model excessively refuses benign or ambiguous queries that only superficially resemble harmful ones, potentially reducing usability.

**[SURE: Safety Understanding and Reasoning Enhancement for Multimodal Large Language Models](https://aclanthology.org/2025.emnlp-main.384.pdf) (as "Over-defense")**
> The behavior of incorrectly refusing to answer benign or harmless queries, often due to overly cautious safety mechanisms.

**[Speculative Safety-Aware Decoding](https://aclanthology.org/2025.emnlp-main.648.pdf) (as "False refusal")**
> The observable behavior of a model incorrectly refusing to answer a benign query that touches on sensitive but non-harmful topics.

**[AdaSteer: Your Aligned LLM is Inherently an Adaptive Jailbreak Defender](https://aclanthology.org/2025.emnlp-main.1248.pdf) (as "False rejection")**
> The observable behavior of a model incorrectly refusing to respond to benign inputs, often due to over-enforcement of safety rules.

**[Sparse Activation Editing for Reliable Instruction Following in Narratives](https://aclanthology.org/2025.emnlp-main.1311.pdf) (as "Unwarranted refusal")**
> The behavior of a model refusing to respond to a valid, benign user query, often as a side effect of safety interventions.

**[Beyond the Safety Bundle: Auditing the Helpful and Harmless Dataset](https://aclanthology.org/2025.naacl-long.596.pdf) (as "Exaggerated safety behaviors")**
> A latent tendency for models to overgeneralize safety constraints, leading to unwarranted refusals to respond to safe or benign queries, especially those involving identity terms.

**[DREAM: Disentangling Risks to Enhance Safety Alignment in Multimodal Large Language Models](https://aclanthology.org/2025.naacl-long.604.pdf) (as "Oversafety")**
> A latent tendency of an MLLM to inappropriately refuse or avoid responding to safe or benign inputs due to overgeneralization of safety rules or misperception of risk.

**[Safe Delta: Consistently Preserving Safety when Fine-Tuning LLMs on Diverse Datasets](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lu25g/lu25g.pdf) (as "Benign query refusal")**
> The observable behavior of incorrectly rejecting safe and legitimate user queries, often as a side effect of safety mechanisms.

## Relationships

### Overrefusal →
- **XSTest** (measurements) — *measured_by*
  > We also report the model compliance rate on 100 held-out test examples from XSTest to monitor over refusals. (Section 5)
  - [Robust LLM safeguarding via refusal feature adversarial training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1022661f3f43406065641f16ce25eafa-Paper-Conference.pdf)
- **OR-Bench** (measurements) — *measured_by*
  > Our experiments show that Safe Delta avoids over-defense issues. We evaluate over-refusal using the OR Bench (Cui et al., 2024). (Section 5.7)
  - [Safe Delta: Consistently Preserving Safety when Fine-Tuning LLMs on Diverse Datasets](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lu25g/lu25g.pdf)
- **Helpfulness** (constructs) — *causes*
  > increased model over-rejection, resulting in diminished helpfulness
  - [Reshaping Representation Space to Balance the Safety and Over-rejection in Large Audio Language Models](https://aclanthology.org/2025.emnlp-main.510.pdf)
- **WildChat** (measurements) — *measured_by*
  > “we construct an over-refusal evaluation using the WildChat dataset [74].”
  - [Improving Alignment and Robustness with Circuit Breakers](https://proceedings.neurips.cc/paper_files/paper/2024/file/97ca7168c2c333df5ea61ece3b3276e1-Paper-Conference.pdf)
- **OKTest** (measurements) — *measured_by*
  > For the false refusal tests, we use one in-distribution dataset Dtest pseudo harmful (ORB-H) and two out-of-distribution datasets: OKTEST (Shi et al., 2024) and XSTEST (Röttger et al., 2024) (Section 4).
  - [Surgical, Cheap, and Flexible: Mitigating False Refusal in Language Models via Single Vector Ablation](https://proceedings.iclr.cc/paper_files/paper/2025/file/53dbd7e34fab703a639964e2d3ee9e84-Paper-Conference.pdf)
- **OR-Bench-Hard-1K** (measurements) — *measured_by*
  > Over refusal rate vs toxic prompts rejection rate on OR-Bench-Hard-1K and OR-Bench-Toxic. (Figure 1)
  - [OR-Bench: An Over-Refusal Benchmark for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cui25a/cui25a.pdf)
- **PHTest** (measurements) — *measured_by*
  > We evaluate over-refusal using the held-out versions of XSTest (150 samples), SCOPE (593 samples), OR-Bench-Hard-1K (1219 samples), and PHTest (1977 samples) benchmarks... (Section 4.1)
  - [Just Enough Shifts: Mitigating Over-Refusal in Aligned Language Models with Targeted Representation Fine-Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dabas25a/dabas25a.pdf)
- **MORBENCH** (measurements) — *measured_by*
  > In this section, we introduce our MORBENCH (Multilingual Over-Refusal Benchmark), a large-scale, automatically constructed benchmark designed to evaluate overrefusal behaviors of LLMs across diverse languages and safety categories. (Section 4)
  - [Understanding and Mitigating Overrefusal in LLMs from an Unveiling Perspective of Safety Decision Boundary](https://aclanthology.org/2025.emnlp-main.1065.pdf)
- **Utility preservation** (constructs) — *causes*
  > for benign inputs, such reinforcement of refusal behavior significantly increases the risk of false rejections, limiting the model’s overall utility
  - [AdaSteer: Your Aligned LLM is Inherently an Adaptive Jailbreak Defender](https://aclanthology.org/2025.emnlp-main.1248.pdf)
- **AIAH** (measurements) — *measured_by*
  > We adopt AIAH (Yang et al., 2025) as the benchmark ... and [its] provided benign question dataset is used to evaluate over-rejection.
  - [Reshaping Representation Space to Balance the Safety and Over-rejection in Large Audio Language Models](https://aclanthology.org/2025.emnlp-main.510.pdf)

### → Overrefusal
- **Safety alignment** (constructs) — *causes*
  > Safety alignment is crucial for Large Language Models (LLMs) to resist malicious instructions but often results in over-refusals, where benign prompts are unnecessarily rejected, impairing user experience and model utility. (Abstract)
  - [Just Enough Shifts: Mitigating Over-Refusal in Aligned Language Models with Targeted Representation Fine-Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dabas25a/dabas25a.pdf)

### Associated with
- **Safety** (constructs)
  > Bianchi et al. (2023) highlights that incorporating safety-related examples during finetuning enhances model safety but often results in increased overrefusal. (Section 2.1. Instruction Finetuning)
  - [POROver: Improving Safety and Reducing Overrefusal in Large Language Models with Overgeneration and Preference Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/karaman25a/karaman25a.pdf)
