# Biography
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** Biography dataset  

## State of the Field

**What it is.** Papers most commonly describe Biography as a fact-seeking long-form generation dataset, or biography-generation task, centered on biographical information. In those descriptions it is used to evaluate factual consistency in narrative generation, factual long-form generation, and factual precision. One paper instead presents it as an out-of-domain test set and uses a subset with 183 questions about biography generation, whereas another definition specifies 181 prompts; a separate paper also describes the Biography dataset as synthetic and constructed for controlled experiments on spurious forgetting.

**What it is claimed to measure.** Papers link Biography to two constructs, Factuality and Knowledge forgetting, and to one behavioral indicator, Biography generation. The prevailing measurement claim is factuality: definitions describe it as evaluating factual consistency in narrative generation or out-of-domain factuality, and one paper reports FactScore on the Biography dataset for this purpose. Smaller uses treat it as measuring knowledge forgetting and biography generation directly.

**Space of uses.** The only named instrument linked to Biography is FActScore. Papers describe that pairing as using FactScore for biography fact verification, and one paper says it is used only as an evaluation strategy when evaluating out-of-domain data. Across these uses, Biography is positioned as a test set or evaluation task for biography generation, including out-of-domain evaluation.

## Sources

**[Improving Factuality with Explicit Working Memory](https://aclanthology.org/2025.acl-long.548.pdf)**
> Fact-seeking long-form generation dataset with 181 prompts centered on biographical information, used to evaluate factual consistency in narrative generation.

**[Mask-DPO: Generalizable Fine-grained Factuality Alignment of LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/6bf82fdcbd92b6a7793b3894422d2437-Paper-Conference.pdf) (as "Biography dataset")**
> A test set containing questions about generating biographies, used for out-of-domain evaluation of factuality.

## Relationships

### → Biography
- **Biography generation** (behaviors tasks) — *measured_by*
  > "Fact verification. We evaluate a biography-generation task (Min et al., 2023)"
  - [Nearest Neighbor Speculative Decoding for LLM Generation and Attribution](https://proceedings.neurips.cc/paper_files/paper/2024/file/93c099bb4cde51b724eaa6d6d4a4b5e4-Paper-Conference.pdf)
- **Factuality** (constructs) — *measured_by*
  > its FactScore on the out-of-domain Biography dataset is also improved from 30.29% to 39.39% (Section 1).
  - [Mask-DPO: Generalizable Fine-grained Factuality Alignment of LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/6bf82fdcbd92b6a7793b3894422d2437-Paper-Conference.pdf)
- **Knowledge forgetting** (constructs) — *measured_by*
  > “we constructed a synthetic dataset, the Biography dataset, and designed controlled experiments to investigate the underlying causes of spurious forgetting”
  - [Spurious Forgetting in Continual Learning of Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a774503daed55eb53c634847ae071ec7-Paper-Conference.pdf)

### Associated with
- **FActScore** (measurements)
  > ANAH and Biography represent the in-domain and out-of-domain test sets, respectively. ANAH-v2 and FactScore represent the corresponding evaluation strategies (Table 1).
  - [Mask-DPO: Generalizable Fine-grained Factuality Alignment of LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/6bf82fdcbd92b6a7793b3894422d2437-Paper-Conference.pdf)
