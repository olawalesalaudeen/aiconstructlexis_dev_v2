# PandaLM
**Type:** Measurement  
**Referenced in:** 6 papers  

## State of the Field

**What it is.** Across the definitions, PandaLM is most commonly treated as a fine-tuned Llama-7b judge model for preference judgment tasks over other LLMs. Some papers describe it more broadly as an automated evaluator that scores or selects outputs, and one source explicitly refers to a PandaLM-7B variant. Another description frames it as a fine-tuned LLM judge benchmark used for comparison and trained on human preference data.

**What it is claimed to measure.** Papers link PandaLM to one behavioral indicator and two constructs. It is reported as measuring Instruction following and Helpfulness: one description says it addresses "relative conciseness, clarity, adherence to instructions, comprehensiveness, and formality" (PandaLM: An Automatic Evaluation Benchmark for LLM Instruction Tuning Optimization), and another says it is used "to evaluate the helpfulness of various models." Generalization appears as a related construct rather than a direct measurement claim.

**Space of uses.** Papers do not link it to any other measurement instrument. In use, they position PandaLM as a comparison judge alongside JudgeLM and GPT-4, and as a comparison benchmark for tuned judges; one source states that its tuned judges "all outperforms strongly PandaLM."

**Concerns raised.** A reported concern is generalization. In xFinder: Large Language Models as Automated Evaluators for Reliable Evaluation, judge models such as PandaLM are said to "demonstrate poor generalization when evaluating different LLMs and benchmarks."

## Sources

**[PiCO: Peer Review in LLMs based on Consistency Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/39e9c5913c970e3e49c2df629daff636-Paper-Conference.pdf)**
> A fine-tuned language model (based on Llama-7b) designed specifically to act as a judge for preference-based evaluation of other LLMs.

## Relationships

### → PandaLM
- **Instruction following** (behaviors tasks) — *measured_by*
  > It addresses vital subjective factors such as relative conciseness, clarity, adherence to instructions, comprehensiveness, and formality.
  - [PandaLM: An Automatic Evaluation Benchmark for LLM Instruction Tuning Optimization](https://proceedings.iclr.cc/paper_files/paper/2024/file/be3b0d51a2b86cb4ffe50f13480217e0-Paper-Conference.pdf)
- **Helpfulness** (constructs) — *measured_by*
  > Specifically, we use PandaLM (Wang et al., 2023b, 2024) to evaluate the helpfulness of various models. (Section 4.1)
  - [Threshold Filtering Packing for Supervised Fine-Tuning: Training Related Samples within Packs](https://aclanthology.org/2025.naacl-long.226.pdf)
