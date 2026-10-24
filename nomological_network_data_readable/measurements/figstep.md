# FigStep
**Type:** Measurement  
**Referenced in:** 7 papers  
**Also known as:** Figstep  

## State of the Field

**What it is.** Across the papers, FigStep is most commonly treated as a multimodal safety benchmark, sometimes described as a harmful-question dataset, for testing vision-language or multimodal models on unsafe prompts. Definitions vary in what they foreground: attacks involving figures and text, harmful-response behavior from image-based prompts, typography that transfers unsafe text into images, and adversarial step-by-step harmful task instructions, with one definition also noting unsafe and benign variants. One paper adapts it by excluding legal, medical, and financial advice categories and converting the questions to speech.

**What it is claimed to measure.** Papers use FigStep to measure three constructs: Safety alignment, Safety, and Safety robustness. The recorded links are all measured_by relations from those constructs to FigStep, and it is not linked to any behavioral indicator. In the papers' own terms, it is used to evaluate safe alignment, multimodal safety, or jailbreak robustness.

**Space of uses.** FigStep is usually deployed alongside other safety benchmarks, most often MM-SafetyBench and SIUO, and also JailBreaKV, VL-Guard, and MOSSBench. Papers generally position it as one component of a broader suite of multimodal safety datasets or safety benchmarks, and they report outcomes on it with measures such as ASR scores and higher USR under text suffix attacks.

## Sources

**[ETA: Evaluating Then Aligning Safety of Vision Language Models at Inference Time](https://proceedings.iclr.cc/paper_files/paper/2025/file/06f9fe2915857be2b1e369419a531ad3-Paper-Conference.pdf)**
> A benchmark designed to test VLM safety, particularly against attacks involving figures and text.

**[How Does Vision-Language Adaptation Impact the Safety of Vision Language Models?](https://proceedings.iclr.cc/paper_files/paper/2025/file/84d286e32bbee8fa3a86ee9c50e00081-Paper-Conference.pdf) (as "Figstep")**
> A multimodal safety benchmark used to assess harmful-response behavior from image-based prompts.

## Relationships

### → FigStep
- **Safety alignment** (constructs) — *measured_by*
  > we conduct experiments on FigStep (Gong et al., 2023), VL-Guard (Zong et al., 2024), MOSSBench (Li et al., 2024d) and SIUO (Wang et al., 2024c) to evaluate the safe alignment of our approach. (Section 5.1)
  - [DREAM: Disentangling Risks to Enhance Safety Alignment in Multimodal Large Language Models](https://aclanthology.org/2025.naacl-long.604.pdf)
- **Safety** (constructs) — *measured_by*
  > for multimodal safety, we utilize MM-Safetybench (Liu et al., 2023c), SIUO (Wang et al., 2024), and Figstep (Gong et al., 2023a). (Section 3.3)
  - [How Does Vision-Language Adaptation Impact the Safety of Vision Language Models?](https://proceedings.iclr.cc/paper_files/paper/2025/file/84d286e32bbee8fa3a86ee9c50e00081-Paper-Conference.pdf)
- **Safety robustness** (constructs) — *measured_by*
  > ...for evaluating jailbreak robustness, we employ MM-SafetyBench (Liu et al., 2024b), FigStep (Gong et al., 2025) and JailBreaKV (Luo et al., 2024) (Section 2.1).
  - [Think in Safety: Unveiling and Mitigating Safety Alignment Collapse in Multimodal Large Reasoning Model](https://aclanthology.org/2025.emnlp-main.261.pdf)
