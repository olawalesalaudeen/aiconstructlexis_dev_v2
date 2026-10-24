# e-SNLI
**Type:** Measurement  
**Referenced in:** 11 papers  

## State of the Field

**What it is.** Across these papers, e-SNLI is most commonly described as an extension of the SNLI corpus or dataset that adds human or human-annotated explanations to premise-hypothesis pairs. The prevailing description emphasizes entailment-style natural language inference, including labels such as contradiction, neutral, and entailment, while another recurring framing treats it as a multi-premise setting because the premise and explanation are described as jointly entailing the hypothesis. A smaller usage highlights it as a held-out test for generalization.

**What it is claimed to measure.** Papers link e-SNLI to 2 constructs and 1 behavioral indicator. The most common claim is that it measures natural language inference, with papers describing its task as determining the logical relationship between a premise and a hypothesis; papers also report it as measuring logical reasoning ability and interpretability and explainability, including through human explanations that support explicit reasoning and interpretability benchmarks. Taken together, the reported uses are spread across this small set rather than tied to only one target.

**Space of uses.** No other measurement instrument is linked to it in the recorded relationships. In use, papers place it alongside ANLI for natural language inference, and some descriptions group it with EntailmentBank and eQASC as a representative multi-premise RTE dataset; one paper also uses it as a held-out generalization test after training on ANLI. Another definition presents it as an evaluation dataset for both prediction and explanation generation on premise-hypothesis pairs.

## Sources

**[Entailment-Preserving First-order Logic Representations in Natural Language Entailment](https://aclanthology.org/2025.acl-long.286.pdf)**
> An extension of the SNLI dataset that adds explanations to premise-hypothesis pairs, enabling evaluation of multi-premise entailment where the premise and explanation jointly entail the hypothesis.

## Relationships

### → e-SNLI
- **Natural language inference** (behaviors tasks) — *measured_by*
  > The task of e-SNLI is to determine the logical relationship (contradiction, neutral or entailment) between the premise and hypothesis. (Section 4.1)
  - [Self-Critique and Refinement for Faithful Natural Language Explanations](https://aclanthology.org/2025.emnlp-main.427.pdf)
- **Logical reasoning** (constructs) — *measured_by*
  > e-SNLI (Camburu et al., 2018) for logical reasoning ability (Section 3.1)
  - [Weak to Strong Generalization for Large Language Models with Multi-capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/1ebcb8f051d0c178474619bbfb32b340-Paper-Conference.pdf)
- **Interpretability and explainability** (constructs) — *measured_by*
  > Datasets such as e-SNLI (Camburu et al., 2018) provide human explanations, supporting explicit reasoning and interpretability benchmarks. (Section 2.1)
  - [Cross-Document Cross-Lingual NLI via RST-Enhanced Graph Fusion and Interpretability Prediction](https://aclanthology.org/2025.emnlp-main.1611.pdf)
