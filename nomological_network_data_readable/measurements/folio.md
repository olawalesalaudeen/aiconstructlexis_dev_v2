# FOLIO
**Type:** Measurement  
**Referenced in:** 20 papers  

## State of the Field

**What it is.** Most commonly, papers treat FOLIO as a benchmark dataset for natural language reasoning with first-order logic, where models infer or assess conclusions from given premises. Several definitions emphasize that it is human or expert annotated and includes first-order logic annotations, while a smaller translation-oriented use describes it as English statements paired with logical forms for NL-FOL generation. Papers describe it at different granularities, from around 1,000 human-annotated deductive reasoning questions overall to a validation split of 203 expert-written natural language reasoning instances with corresponding first-order logic annotations, and some mention evaluation on the validation set or an original and perturbed version.

**What it is claimed to measure.** Across papers, the prevailing usage is that FOLIO measures Logical reasoning. It is linked to 3 constructs and no behavioral indicators, and the other reported measurement claims are less common: some papers use it to measure Chain-of-thought reasoning or Reasoning more broadly. Overall, the measurement claims converge mainly on logical reasoning rather than being spread evenly across many constructs.

**Space of uses.** Papers usually use FOLIO as one benchmark within broader evaluation suites, for example alongside GSM8K, Big-Bench-Hard, ProofWriter, and GPQA, and one translation study pairs it with MALLS. It is commonly positioned as the logical reasoning component of cross-domain, multi-step, or diverse reasoning evaluations, and some papers restrict evaluation to its validation set or validation split. No measurement instrument is linked to it.

## Sources

**[GReaTer: Gradients Over Reasoning Makes Smaller Language Models Strong Prompt Optimizers](https://proceedings.iclr.cc/paper_files/paper/2025/file/18a42aad2fa8aa871e2ee20d425c208d-Paper-Conference.pdf)**
> A benchmark dataset for evaluating natural language reasoning with first-order logic, requiring models to infer conclusions from given premises.

## Relationships

### → FOLIO
- **Logical reasoning** (constructs) — *measured_by*
  > We compare the performance of each setting on math (GSM8K) and logical reasoning (ContextHub and FOLIO) datasets. (Section 5.1)
  - [To CoT or not to CoT? Chain-of-thought helps mainly on math and symbolic reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/ead542f13a38179d1b55b88610f959a1-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > we use GSM8K (Cobbe et al., 2021), Big-Bench-Hard (BBH) (Suzgun et al., 2022), and FOLIO (Han et al., 2022) benchmark datasets for diverse reasoning tasks (Section 5.1)
  - [GReaTer: Gradients Over Reasoning Makes Smaller Language Models Strong Prompt Optimizers](https://proceedings.iclr.cc/paper_files/paper/2025/file/18a42aad2fa8aa871e2ee20d425c208d-Paper-Conference.pdf)
- **Chain-of-thought reasoning** (constructs) — *measured_by*
  > We evaluate our framework on four multi-step reasoning datasets: FOLIO (Han et al., 2022), ProofWriter (Tafjord et al., 2020), MMLU-Pro (Wang et al., 2024c) and GPQA (Rein et al., 2023) (Section 4.1).
  - [Stepwise Informativeness Search for Improving LLM Reasoning](https://aclanthology.org/2025.emnlp-main.1285.pdf)
