# SIUO
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Across the surveyed work, the prevailing framing is of a multimodal safety benchmark. Definitions most commonly describe it as a safety-awareness benchmark that assesses a model's ability to infer user intent and identify safety risks in multimodal inputs through visual and textual reasoning, while another paper describes it more broadly as assessing safe and effective responses under different risk combinations. One study also notes that higher scores denote better safety performance.

**What it is claimed to measure.** Its measurement claims are spread across 3 constructs rather than concentrated on one: papers use SIUO to measure Safety, Safety alignment, and Safety awareness, and no behavioral indicators are linked to it. The phrasing varies by paper, with one using it for multimodal safety, another to evaluate safe alignment, and another for assessment of safety-awareness.

**Space of uses.** Papers typically use SIUO within broader benchmark suites, alongside FigStep, VLGuard, MOSSBench, MSS-Bench, and MM-Safetybench. In these studies it is used as an evaluation dataset with reported SIUO scores, including a "safe&effective score"; another paper states that higher SIUO scores denote better safety performance.

## Sources

**[Think in Safety: Unveiling and Mitigating Safety Alignment Collapse in Multimodal Large Reasoning Model](https://aclanthology.org/2025.emnlp-main.261.pdf)**
> Safety-awareness benchmark assessing a model's ability to infer user intent and identify safety risks in multimodal inputs, using visual and textual reasoning.

## Relationships

### → SIUO
- **Safety** (constructs) — *measured_by*
  > for multimodal safety, we utilize MM-Safetybench (Liu et al., 2023c), SIUO (Wang et al., 2024), and Figstep (Gong et al., 2023a). (Section 3.3)
  - [How Does Vision-Language Adaptation Impact the Safety of Vision Language Models?](https://proceedings.iclr.cc/paper_files/paper/2025/file/84d286e32bbee8fa3a86ee9c50e00081-Paper-Conference.pdf)
- **Safety alignment** (constructs) — *measured_by*
  > we conduct experiments on FigStep (Gong et al., 2023), VL-Guard (Zong et al., 2024), MOSSBench (Li et al., 2024d) and SIUO (Wang et al., 2024c) to evaluate the safe alignment of our approach. (Section 5.1)
  - [DREAM: Disentangling Risks to Enhance Safety Alignment in Multimodal Large Language Models](https://aclanthology.org/2025.naacl-long.604.pdf)
- **Safety awareness** (constructs) — *measured_by*
  > For assessment of safety-awareness, we employ SIUO (Wang et al., 2025) and MSS-Bench (Zhou et al., 2024) datasets... (Section 2.1).
  - [Think in Safety: Unveiling and Mitigating Safety Alignment Collapse in Multimodal Large Reasoning Model](https://aclanthology.org/2025.emnlp-main.261.pdf)
