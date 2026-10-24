# DIPPER
**Type:** Measurement  
**Referenced in:** 7 papers  
**Also known as:** Dipper  

## State of the Field

Across the surveyed literature, DIPPER is most commonly characterized as a paraphrase-based text rewriting procedure or model used to generate adversarial attacks. Its prevailing application is to test the robustness of watermarking algorithms and machine-generated text detectors against semantic-preserving modifications. In this context, it is explicitly used to measure `Adversarial robustness`. Several papers note that its paraphrasing can be controlled through specific settings, such as "lexical diversity" and "order diversity". One source specifies that the model is based on a fine-tuned T5-XXL and has been "widely adopted in recent watermark research" for this evaluation purpose. A less frequent framing, found in a single paper, describes DIPPER as a state-of-the-art 11B parameter model used as a baseline to measure the anonymizing effect of text paraphrasing, an application distinct from adversarial testing.

## Sources

**[A Semantic Invariant Robust Watermark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a2131ebe25bd55e4fc734126ea583ed-Paper-Conference.pdf)**
> A paraphrase-based text rewriting procedure used to test watermark robustness under semantic-preserving modifications.

**[Language Models are Advanced Anonymizers](https://proceedings.iclr.cc/paper_files/paper/2025/file/f478b2e8ad9ff0756bf5b79fb31c330f-Paper-Conference.pdf) (as "Dipper")**
> A state-of-the-art 11B parameter transformer-based model for text paraphrasing, used as a baseline to measure the anonymizing effect of rewriting text without a specific focus on privacy.

## Relationships

### → DIPPER
- **Paraphrasing** (behaviors tasks) — *measured_by*
  > “we paraphrase various evaluation episodes using DIPPER (Krishna et al., 2023)”
  - [Few-Shot Detection of Machine-Generated Text using Style Representations](https://proceedings.iclr.cc/paper_files/paper/2024/file/7e54a2592e3f51b9bed625a780310424-Paper-Conference.pdf)
- **Watermark robustness** (constructs) — *measured_by*
  > Tests involved watermark detection accuracy under no attack, GPT3.5 rewrite attacks, two DIPPER (Krishna et al., 2023) settings, the copy-paste attack as well as the emoj attack (Appendix G). (Table 1)
  - [A Semantic Invariant Robust Watermark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a2131ebe25bd55e4fc734126ea583ed-Paper-Conference.pdf)
