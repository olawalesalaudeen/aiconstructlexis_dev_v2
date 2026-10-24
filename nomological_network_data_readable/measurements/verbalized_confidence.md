# Verbalized confidence
**Type:** Measurement  
**Referenced in:** 8 papers  
**Also known as:** Verbal Confidence, Verbalization  

## State of the Field

**What it is.** Across the papers, the prevailing usage treats verbalized confidence as a direct self-report protocol for model confidence: the model or LLM judge is prompted to state how confident it is in its own answer or judgment. Most definitions describe the output as a scalar or numerical confidence value, while one also allows numerical or categorical ratings given alongside the answer; papers also frame it as a baseline confidence measure, a black-box self-evaluation procedure, and an evaluation protocol. A smaller amount of usage names specific variants such as P(true) and Verb. 1S top-1, and one paper reports averaging confidence across samples.

**What it is claimed to measure.** Papers most commonly present verbalized confidence as measuring the model's own confidence, and one definition says the reported rating is used to measure subjective belief strength. Across the surveyed work, its links are concentrated rather than spread across many concepts: it is linked to one behavioral indicator, Hallucination, which one paper measures through a verbalization-based hallucination detection module, and to one construct, Instruction following ability, only as a related factor rather than as something verbalized confidence measures.

**Space of uses.** No other measurement instrument is linked to it. Papers instead position it as an existing confidence measure or baseline, including as a black-box self-evaluation method and, in one hallucination study, as a replacement option for a hallucination detection module alongside trained probes and hybrid consistency; another paper reports using an average confidence across all samples.

**Concerns raised.** One paper raises a practical concern about verbalization-based methods: their use is described as restricted by high computational costs during inference and by the requirement for the language model's instruction-following capability. On that basis, the same paper relates verbalized confidence to Instruction following ability.

## Sources

**[Trust or Escalate: LLM Judges with Provable Guarantees for Human Agreement](https://proceedings.iclr.cc/paper_files/paper/2025/file/08dabd5345b37fffcbe335bd578b15a0-Paper-Conference.pdf)**
> A baseline confidence measure obtained by directly prompting an LLM judge to express its confidence in its own judgment as a scalar value.

**[Latent Space Chain-of-Embedding Enables Output-free LLM Self-Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b0b1cfc8ede53f452cabf8b9cf4eef76-Paper-Conference.pdf) (as "Verbal Confidence")**
> A black-box self-evaluation procedure that asks the model to express confidence in its own answer.

**[HaDeMiF: Hallucination Detection and Mitigation in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c98987c5ec4f30920d7190dc699e3daf-Paper-Conference.pdf) (as "Verbalization")**
> An evaluation protocol that measures a model's confidence by directly prompting it to self-report its confidence level.

## Relationships

### → Verbalized confidence
- **Hallucination** (behaviors tasks) — *measured_by*
  > Furthermore, we replace the hallucination detection module in DSSP-RAG with two existing methods: Trained Probes, Verbalization and Hybrid Consistency (Hyb-Cons). (Section 4.3.3)
  - [Bridging External and Parametric Knowledge: Mitigating Hallucination of LLMs with Shared-Private Semantic Synergy in Dual-Stream Knowledge](https://aclanthology.org/2025.emnlp-main.549.pdf)
- **Confidence** (constructs) — *measured_by*
  > We first consider two types of existing confidence measure—... (2) verbalized confidence
  - [Trust or Escalate: LLM Judges with Provable Guarantees for Human Agreement](https://proceedings.iclr.cc/paper_files/paper/2025/file/08dabd5345b37fffcbe335bd578b15a0-Paper-Conference.pdf)

### Associated with
- **Instruction following ability** (constructs)
  > While consistency-based and verbalization-based methods have demonstrated their effectiveness in recent LMs, their utilization is largely restricted due to their high computational costs during inference and the requirement for LM’s instruction-following capability. (Section 2.2)
  - [LitCab: Lightweight Language Model Calibration over Short- and Long-form Responses](https://proceedings.iclr.cc/paper_files/paper/2024/file/3815d62554efad0878fad6c1c30ffda0-Paper-Conference.pdf)
