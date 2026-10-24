# LEMON
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Across the papers here, LEMON is described as a large-scale, multi-domain Chinese Spelling Correction dataset built from real-world spelling errors. Definitions emphasize seven sub-domains, with examples including game, encyclopedia, contract, medical care, and car, plus two others, and one paper says it typically tests domain correction capabilities in a zero-shot setting. Another paper characterizes it as having test sets from seven domains without in-domain training sets.

**What it is claimed to measure.** Papers use it to measure two constructs and one behavioral indicator. The construct links are both generalization-oriented, Cross-domain generalization and Generalization: one paper describes LEMON as an ideal benchmark for evaluating a model’s cross-domain generalization capability, and another says it serves as a cross-domain dataset for evaluating generalization capabilities. A separate paper also uses it as a benchmark for Chinese spelling correction.

**Space of uses.** No measurement instrument is linked to it. In use, papers position it as an evaluation benchmark centered on cross-domain testing: one definition says it typically assesses domain correction capabilities in a zero-shot setting, and another paper highlights its domain-specific test sets and lack of in-domain training sets. One study also uses it alongside CSCD-NS as one of two Chinese spelling correction benchmarks.

## Sources

**[Enhancing Character-Level Understanding in LLMs through Token Internal Structure Learning](https://aclanthology.org/2025.acl-long.194.pdf)**
> A large-scale, multi-domain Chinese Spelling Correction dataset featuring real-world spelling errors across seven sub-domains including game, encyclopedia, contract, medical care, car, novel, and news.

## Relationships

### → LEMON
- **Cross-domain generalization** (constructs) — *measured_by*
  > Notably, LEMON includes test sets from seven different domains but does not provide in-domain training sets, making it an ideal benchmark for evaluating a model’s cross-domain generalization capability. (Section 4.1)
  - [Mixture of Small and Large Models for Chinese Spelling Check](https://aclanthology.org/2025.acl-long.1372.pdf)
- **Generalization** (constructs) — *measured_by*
  > the Lemon dataset serves as a cross-domain dataset for evaluating the generalization capabilities. (Section 5.3)
  - [A Training-free LLM-based Approach to General Chinese Character Error Correction](https://aclanthology.org/2025.acl-long.678.pdf)
- **Chinese spelling correction** (behaviors tasks) — *measured_by*
  > Following recent works, we use two CSC benchmarks, LEMON (Wu et al., 2023) and CSCD-NS (Hu et al., 2024). (Section 3.1)
  - [Evolving Chinese Spelling Correction with Corrector-Verifier Collaboration](https://aclanthology.org/2025.emnlp-main.1477.pdf)
