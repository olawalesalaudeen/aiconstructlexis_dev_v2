# SALAD-Bench
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** SALAD-BENCH, SaladBench  

## State of the Field

**What it is.** Across papers, SALAD-Bench is most commonly treated as a safety benchmark for LLMs, though some definitions foreground it as a dataset. Definitions describe it as providing prompts and safety scores for evaluating LLM safety and its relationship to value systems, as a source of harmful prompts for training and evaluating refusal mechanisms, and as a hierarchical benchmark covering different task types and jailbreak attack methods.

**What it is claimed to measure.** Papers use SALAD-Bench to measure two constructs, Privacy awareness and Safety alignment, and one behavioral indicator, Jailbreaking. The recorded uses span these three targets rather than a single recurring one: papers report using it as part of a safety alignment benchmark, extracting its "privacy infringement" category for privacy awareness queries, and including it in jailbreaking evaluations.

**Space of uses.** No measurement instrument is linked to it. In practice, papers position it both as a benchmark used alongside Anthropic Hh-rlhf red-teaming prompts, Do-Not-Answer, and SORRY-Bench, and as a component resource: one paper constructs harmful prompts from SALAD-BENCH with ALPACA, while another extracts the "unfair representation" and "privacy infringement" subsets to build fairness and privacy query sets.

## Sources

**[Generative Psycho-Lexical Approach for Constructing Value Systems in Large Language Models](https://aclanthology.org/2025.acl-long.585.pdf)**
> Established safety benchmark providing prompts and safety scores for evaluating LLM safety and its relationship to value systems.

**[The Geometry of Refusal in Large Language Models: Concept Cones and Representational Independence](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wollschlager25a/wollschlager25a.pdf) (as "SALAD-BENCH")**
> A dataset used as a source of harmful prompts for training and evaluating refusal mechanisms.

**[SG-Bench: Evaluating LLM Safety Generalization Across Diverse Tasks and Prompt Types](https://proceedings.neurips.cc/paper_files/paper/2024/file/de7b99107c53e60257c727dc73daf1d1-Paper-Datasets_and_Benchmarks_Track.pdf) (as "SaladBench")**
> A hierarchical safety benchmark for LLMs that covers different task types and jailbreak attack methods.

## Relationships

### → SALAD-Bench
- **Privacy awareness** (constructs) — *measured_by*
  > From Salad-bench, we extract query subsets under the predefined categories of “unfair representation” and “privacy infringement” to construct fairness awareness query set Qf and privacy awareness query set Qp, respectively. (Section 4.1)
  - [The Tug of War Within: Mitigating the Fairness-Privacy Conflicts in Large Language Models](https://aclanthology.org/2025.acl-long.590.pdf)
- **Jailbreaking** (behaviors tasks) — *measured_by*
  > To assess the generalizability of the weak-to-strong attack, we expanded our evaluation to include two new safety benchmarks: SALAD-Bench (Li et al., 2024) and SORRY-Bench (Xie et al., 2024). (Section 5.1)
  - [Weak-to-Strong Jailbreaking on Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhao25aa/zhao25aa.pdf)
