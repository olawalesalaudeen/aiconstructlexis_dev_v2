# HANS
**Type:** Measurement  
**Referenced in:** 5 papers  

## State of the Field

**What it is.** Across papers, HANS is most commonly described as an adversarial or stress-test natural language inference dataset. Definitions converge that it probes sensitivity to lexical overlap and related artifacts or heuristics: one description says it is generated so that examples cannot be solved through simple heuristics like lexical overlap, and another says it manipulates lexical overlap, subsequence, and negation to expose reliance on syntactic heuristics rather than semantic understanding. A smaller framing presents it as part of binary classification experiments, and one paper specifies that it contains 30K examples.

**What it is claimed to measure.** Papers link HANS to one behavioral indicator, natural language inference, and one construct, robustness. In one paper it is explicitly employed "for NLI," and the same line of work describes the evaluation data as reflecting adversarial distribution shifts relative to the training data, which it reports as making HANS suitable for evaluating OOD robustness. The measurement claims are concentrated on these two targets rather than spread across many constructs or indicators.

**Space of uses.** Papers typically use HANS as an evaluation benchmark alongside other adversarial or stress-test sets rather than as a standalone protocol. One paper employs it with NAN, PISP, ST, and ANLIR1-R3 for NLI, another reports results on HANS with PAWS-XEN under finetuning and in-context learning, and another places it in OOD and stress-test evaluation for minority generalization. Across these uses, it is positioned as a benchmark for adversarial distribution shifts and stress testing.

## Sources

**[Lost in Inference: Rediscovering the Role of Natural Language Inference for Large Language Models](https://aclanthology.org/2025.naacl-long.466.pdf)**
> Natural Language Inference dataset designed to evaluate models' sensitivity to lexical overlap and other artifacts, used here to assess length bias in binary classification.

## Relationships

### → HANS
- **Natural language inference** (behaviors tasks) — *measured_by*
  > In particular, for NLI, we employed HANS (McCoy et al., 2019), NAN (Truong et al., 2022), PISP (Liu et al., 2020a,b), ST (Naik et al., 2018), and ANLIR1–R3 (Nie et al., 2020a)... (Section 4.1)
  - [Exploring Explanations Improves the Robustness of In-Context Learning](https://aclanthology.org/2025.acl-long.1155.pdf)
- **Out-of-distribution generalization** (constructs) — *measured_by*
  > We used OOD evaluation datasets for NLI and paraphrase identification... for NLI, we employed HANS (McCoy et al., 2019)... making them suitable benchmarks for evaluating the OOD robustness of ICL. (Section 4.1)
  - [Exploring Explanations Improves the Robustness of In-Context Learning](https://aclanthology.org/2025.acl-long.1155.pdf)
