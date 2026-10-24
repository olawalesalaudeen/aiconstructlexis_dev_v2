# VLGuard
**Type:** Measurement  
**Referenced in:** 3 papers  

## State of the Field

**What it is.** Across these papers, VLGuard is most commonly treated as a multimodal safety alignment resource, alternately described as a dataset and as a safety benchmark for vision-language models. Definitions present it as an original data source and as a baseline for comparison, while another description says it evaluates the ability to detect and respond to multimodal risks across harmful categories, including combinations of safe and unsafe image-text inputs. Some descriptions also frame it as using safe and unsafe training instructions organized by harmful categories.

**What it is claimed to measure.** Across these papers, the measurement claim converges on one construct: papers link VLGuard to one construct, Safety alignment, and to no behavioral indicators. In DREAM: Disentangling Risks to Enhance Safety Alignment in Multimodal Large Language Models, it is used to evaluate the safe alignment of an approach, so the recorded use is that papers use it to measure Safety alignment rather than a broader spread of constructs.

**Space of uses.** Papers position VLGuard both as source material and as an evaluation benchmark. In Think in Safety: Unveiling and Mitigating Safety Alignment Collapse in Multimodal Large Reasoning Model, it is selected alongside SPA-VL as an original data source and alongside MIS and SPA-VL as a considered baseline, while another paper includes it in an extensive set of safety benchmarks. It is also used alongside FigStep, MOSSBench, and SIUO when evaluating safe alignment.

## Sources

**[Think in Safety: Unveiling and Mitigating Safety Alignment Collapse in Multimodal Large Reasoning Model](https://aclanthology.org/2025.emnlp-main.261.pdf)**
> A multimodal safety alignment dataset used as an original data source and baseline for comparison.

## Relationships

### → VLGuard
- **Safety alignment** (constructs) — *measured_by*
  > we conduct experiments on FigStep (Gong et al., 2023), VL-Guard (Zong et al., 2024), MOSSBench (Li et al., 2024d) and SIUO (Wang et al., 2024c) to evaluate the safe alignment of our approach. (Section 5.1)
  - [DREAM: Disentangling Risks to Enhance Safety Alignment in Multimodal Large Language Models](https://aclanthology.org/2025.naacl-long.604.pdf)
