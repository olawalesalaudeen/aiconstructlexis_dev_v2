# BBQ
**Type:** Measurement  
**Referenced in:** 30 papers  

## State of the Field

**What it is.** Across papers, the dominant framing is of BBQ as a question-answering benchmark or dataset for evaluating social bias, societal bias, or stereotype reliance. Most definitions describe ambiguous and disambiguated, or ambiguous and unambiguous, contexts with closed-ended answer choices, often multiple choice; one paper specifies three labels, Stereotyped, Unknown, and Unstereotyped. Papers also differ on scope and size, describing nine social dimensions or protected groups in several places, but also 11 bias categories in one account, and giving totals of 31,372 question-answer pairs or 58,492 unique questions in others.

**What it is claimed to measure.** Papers connect BBQ to three constructs and one behavioral indicator. The prevailing use is to measure social bias: several papers describe it as evaluating biases against protected classes or groups, sometimes across nine social dimensions. Smaller lines of work use it to measure stereotyping and, in one case, social reasoning, while papers also report it as measuring question answering when bias is operationalized through QA tasks.

**Space of uses.** Papers usually position BBQ as a direct evaluation benchmark for bias, for example by stating that they use BBQ for bias evaluation or that they employ it to evaluate fine-tuned models. They also pair it with other bias instruments, including BOLD, WinoGender, and UNQOVER, and papers relate it directly to one other instrument, PakBBQ, described as a culturally and regionally adapted extension of the original. Some applications also refer to Ambiguated and Disambiguated variants, or reuse unambiguous contexts as a knowledge base while predicting target groups as classes.

**Concerns raised.** Concerns appear in a smaller line of work. One paper groups BBQ's gender-identity split with datasets that either have limited size or are based on templates that limit the diversity of sentence syntax and context, and another says benchmarks such as BBQ were developed with Western, primarily English-speaking contexts in mind. In Safetywashing: Do AI Safety Benchmarks Actually Measure Safety Progress?, the authors report that on BBQ Disambiguated, bias reduction is highly correlated with general capabilities; another paper similarly attributes lower BBQ bias scores to enhanced general capabilities.

## Sources

**[CEB: Compositional Evaluation Benchmark for Fairness in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/38e491559eb9e4cf31b8cd3a4e222436-Paper-Conference.pdf)**
> A dataset focusing on identifying biases within question-answering contexts, often involving ambiguous contexts and stereotypical questions.

## Relationships

### → BBQ
- **Social bias** (constructs) — *measured_by*
  > we study the use of self-correction to alleviate societal biases in LLMs on the BBQ (Bias Benchmark for QA) benchmark [55], which evaluates societal biases against individuals belonging to protected classes across nine social dimensions.
  - [A Theoretical Understanding of Self-Correction through In-context Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/a399456a191ca36c7c78dff367887f0a-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > For question answering, we use the BBQ dataset (Parrish et al., 2021), where unambiguous contexts serve as the knowledge base, and target groups are the classes to be predicted. (Section 5.1)
  - [Your RAG is Unfair: Exposing Fairness Vulnerabilities in Retrieval-Augmented Generation via Backdoor Attacks](https://aclanthology.org/2025.emnlp-main.804.pdf)
- **Stereotyping** (constructs) — *measured_by*
  > CrowS-Pairs (Nangia et al., 2020) and BBQ (Parrish et al., 2022) target nine categories of stereotypes, including gender, in paired sentences. (Section 2)
  - [GenderAlign: An Alignment Dataset for Mitigating Gender Bias in Large Language Models](https://aclanthology.org/2025.acl-long.553.pdf)
- **Social reasoning** (constructs) — *measured_by*
  > For social reasoning tasks, we use the BBQ dataset [75] which evaluates biases against nine protected groups through multiple-choice QA. (Section 3.2)
  - [DARG: Dynamic Evaluation of Large Language Models via Adaptive Reasoning Graph](https://proceedings.neurips.cc/paper_files/paper/2024/file/f5198bc255e1d5f959edd6d1d1a86fab-Paper-Conference.pdf)

### Associated with
- **PakBBQ** (measurements)
  > To address this gap, we introduce PakBBQ, a culturally and regionally adapted extension of the original Bias Benchmark for Question Answering (BBQ) dataset. (Abstract)
  - [PakBBQ: A Culturally Adapted Bias Benchmark for QA](https://aclanthology.org/2025.emnlp-main.818.pdf)
