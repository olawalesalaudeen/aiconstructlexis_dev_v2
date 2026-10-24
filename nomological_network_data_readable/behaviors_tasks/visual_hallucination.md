# Visual hallucination
**Type:** Behavior  
**Referenced in:** 9 papers  
**Also known as:** Multimodal hallucination  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats visual hallucination as output that is not grounded in the image or other provided inputs: papers define it as producing incorrect visual claims, unsupported descriptions, or text about objects, attributes, or relationships that are not present in the input image. A smaller formulation uses the name multimodal hallucination for generated information that is inconsistent with or absent from provided multimodal inputs. Success in the associated task is usually framed as keeping the response consistent with image content, and one paper notes that failures can appear when models identify "small and occluded objects" (Feast Your Eyes:  Mixture-of-Resolution Adaptation for Multimodal Large Language Models).

**Variants.** Papers study both a narrower image-grounded version and a broader multimodal-input version. In the narrower version, hallucinated content is described at the level of nonexistent objects, attributes, and relationships; one snippet also highlights settings involving granular recognition of small and occluded objects. The names used are mainly visual hallucination, with multimodal hallucination appearing for the broader input setting.

**Space of elicitation and scores.** Papers operationalize this behavior with 8 linked instruments. POPE is the most frequently linked instrument, followed by CHAIR, HallusionBench, MM-Vet, and MMBench, with 3 other instruments also linked. The measurement language is mostly benchmark-based: papers say POPE aims to evaluate visual hallucinations, define a visual hallucination task by whether the response is consistent with image content, and use HallusionBench to quantify the extent of hallucinations.

**What it is taken as evidence of.** Rather than linking this behavior to several constructs, papers connect it only to Visual perception. That connection is not expressed in one way: one paper treats visual hallucination as related to visual perception, while another claims a causal relationship from Visual perception to Visual hallucination, stating that a deficiency in visual perception may lead to visual hallucinations.

## Sources

**[Feast Your Eyes:  Mixture-of-Resolution Adaptation for Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d2781f7df8825bbde6cef55adfbcd283-Paper-Conference.pdf)**
> Producing incorrect visual claims or unsupported descriptions when interpreting an image.

**[Mitigating Modality Prior-Induced Hallucinations in Multimodal Large Language Models via Deciphering Attention Causality](https://proceedings.iclr.cc/paper_files/paper/2025/file/86fe62e3b315d2578721562d9fd1a433-Paper-Conference.pdf) (as "Multimodal hallucination")**
> A failure mode in Multimodal Large Language Models where the generated output contains information that is inconsistent with or absent from the provided multimodal inputs.

## Relationships

### Visual hallucination →
- **POPE** (measurements) — *measured_by*
  > We conducted extensive evaluations of DEEM on RobustVQA and two widely recognized benchmarks, POPE and MMVP, for visual hallucination and perception respectively (Section 1).
  - [DEEM: Diffusion models serve as the eyes of large language models for image perception](https://proceedings.iclr.cc/paper_files/paper/2025/file/a8399aace3dfa6dfb8b635117748c561-Paper-Conference.pdf)
- **CHAIR** (measurements) — *measured_by*
  > Visual hallucination task evaluates whether the response of the model is consistent with the image content to ensure the trustworthiness and reliability of the model. We use CHAIR (Rohrbach et al., 2018), POPE (Li et al., 2023c), and MMHal-Bench (Sun et al., 2023).
  - [See What You Are Told: Visual Attention Sink in Large Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/da8a39bc39ae1c89dd6ebb1e3bcbb3f3-Paper-Conference.pdf)
- **MMHal-Bench** (measurements) — *measured_by*
  > Visual hallucination task evaluates whether the response of the model is consistent with the image content to ensure the trustworthiness and reliability of the model. We use CHAIR (Rohrbach et al., 2018), POPE (Li et al., 2023c), and MMHal-Bench (Sun et al., 2023).
  - [See What You Are Told: Visual Attention Sink in Large Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/da8a39bc39ae1c89dd6ebb1e3bcbb3f3-Paper-Conference.pdf)
- **HallusionBench** (measurements) — *measured_by*
  > Furthermore, we use HallBench (Guan et al., 2024) to quantify the extent of visual hallucinations in VLMs or VRMs. (Section 4.1)
  - [Look Again, Think Slowly: Enhancing Visual Reflection in Vision-Language Models](https://aclanthology.org/2025.emnlp-main.470.pdf)

### → Visual hallucination
- **Visual perception** (constructs) — *causes*
  > “Neglecting to fine-tune the projector can significantly impair the model’s visual perception capabilities. This deficiency may lead to visual hallucinations”
  - [REMEDY: Recipe Merging Dynamics in Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4065a881baab1744bfba208a4361bbb1-Paper-Conference.pdf)
