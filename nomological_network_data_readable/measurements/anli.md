# ANLI
**Type:** Measurement  
**Referenced in:** 14 papers  

## State of the Field

**What it is.** Across papers, ANLI is most commonly described as Adversarial Natural Language Inference, a benchmark or dataset for natural language inference. Several definitions add that it was collected iteratively through an adversarial human-and-model-in-the-loop, or human-in-the-loop, process and designed to challenge contemporary or state-of-the-art models; other descriptions place it in a classification benchmark set or describe it as a textual entailment task for natural language understanding and reasoning. Some work uses the challenging subsets ANLI-A2 and ANLI-A3, and one paper describes the data as open-domain questions enhanced via an iterative adversarial procedure.

**What it is claimed to measure.** Papers link ANLI to two constructs and one behavioral indicator. The prevailing measurement claim is natural language inference: papers use ANLI, sometimes alongside MNLI or e-SNLI, to benchmark understanding of entailment, contradiction, and neutrality or simply for natural language inference. A smaller line of work reports ANLI as measuring natural language understanding and commonsense reasoning, so the linked uses extend beyond one target to those two additional constructs.

**Space of uses.** No paper links ANLI to another measurement instrument. In practice, papers often include it within broader evaluation suites, for example alongside GLUE, SQuADv1.1, SuperGLUE, MNLI, and e-SNLI. Papers also position it differently across settings, including as part of an expanded classification benchmark set, as an open-domain evaluation using ANLI-A2 and ANLI-A3, and as a natural language understanding or reasoning check.

## Sources

**[Language Model Cascades: Token-Level Uncertainty And Beyond](https://proceedings.iclr.cc/paper_files/paper/2024/file/11f5520daf9132775e8604e89f53925a-Paper-Conference.pdf)**
> Adversarial Natural Language Inference, included as a classification benchmark in the expanded evaluation set.

## Relationships

### → ANLI
- **Natural language inference** (behaviors tasks) — *measured_by*
  > MNLI (Multi-Genre Natural Language Inference) and ANLI (Adversarial Natural Language Inference) benchmark a models understanding of entailment, contradiction, and neutrality across genres and adversarially selected examples.
  - [EncryptedLLM: Privacy-Preserving Large Language Model Inference via GPU-Accelerated Fully Homomorphic Encryption](https://raw.githubusercontent.com/mlresearch/v267/main/assets/de-castro25a/de-castro25a.pdf)
- **Commonsense reasoning** (constructs) — *measured_by*
  > For commonsense reasoning, we use ... ANLI [39], a dataset for natural language understanding and reasoning. (Section 5.1)
  - [AutoPSV: Automated Process-Supervised Verifier](https://proceedings.neurips.cc/paper_files/paper/2024/file/9246aa822579d9b29a140ecdac36ad60-Paper-Conference.pdf)
