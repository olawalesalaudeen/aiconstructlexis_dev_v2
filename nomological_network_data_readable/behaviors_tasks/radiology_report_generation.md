# Radiology report generation
**Type:** Behavior  
**Referenced in:** 7 papers  
**Also known as:** Report generation  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats radiology report generation as producing a descriptive, clinically relevant text report from radiology image data, sometimes from one or more images plus associated clinical context. Most formulations emphasize describing clinical observations or findings from a radiology image, often a chest X-ray. A narrower formulation specifies a typical report structure, requiring the model to generate the two sections "Findings" and "Impression".

**Variants.** Variants center on chest X-ray settings, with papers describing chest X-ray radiology report generation and textual medical reports from chest X-ray images. Some authors use the shorter name "report generation", and one paper frames a retrieval-based version given only radiology images. Input assumptions vary from one or more images with associated clinical context to a single medical image, and the output may be framed generally as clinical observations or more specifically as Findings and Impression sections.

**Space of elicitation and scores.** Papers link this behavior to 3 measurement instruments. The most frequently linked is MIMIC-CXR, used in chest X-ray report generation experiments; IU-Xray also appears as a public dataset, and GREEN appears as an evaluation metric for radiology reports, described as a single-answer reference-guided LLM-as-a-Judge mechanism. Papers therefore assess it with both dataset-based tasks and report-evaluation metrics.

**What it is taken as evidence of.** Only 1 construct is linked to this behavior: Faithfulness. A smaller line of work treats radiology report generation as measuring Faithfulness, with one paper arguing that small textual differences can drastically invert radiology report meaning and downstream prescribed treatments. In the linked claims, the construct framing centers on Faithfulness rather than multiple alternative constructs.

## Sources

**[RADAR: Enhancing Radiology Report Generation with Supplementary Knowledge Injection](https://aclanthology.org/2025.acl-long.1279.pdf)**
> The task of generating a descriptive, clinically relevant text report based on one or more radiology images and associated clinical context.

**[VividMed: Vision Language Model with Versatile Visual Grounding for Medicine](https://aclanthology.org/2025.naacl-long.89.pdf) (as "Report generation")**
> The task of generating a textual radiology report, typically including 'Findings' and 'Impression' sections, based on a medical image.

## Relationships

### Radiology report generation →
- **MIMIC-CXR** (measurements) — *measured_by*
  > In this section, we apply Conformal Alignment to chest X-ray report (CXR) generation. Following the pipeline in Figure 1, we apply our method to (a subset of) the MIMIC-CXR dataset [20]. (Section 5)
  - [Conformal Alignment: Knowing When to Trust Foundation Models with Guarantees](https://proceedings.neurips.cc/paper_files/paper/2024/file/870ccde24673d3970a680bb48496ed63-Paper-Conference.pdf)
- **GREEN** (measurements) — *measured_by*
  > GREEN is a state-of-the-art metric for radiology report evaluation, based on a single-answer reference-guided LLM-as-a-Judge mechanism. (Section 3.2)
  - [CheXalign: Preference fine-tuning in chest X-ray interpretation models without human feedback](https://aclanthology.org/2025.acl-long.1342.pdf)
- **BERTScore** (measurements) — *measured_by*
  > Since we have radiologist-written reference available, it is possible to employ standard, general domain, NLG metrics such as BLEU (Papineni et al., 2002), ROUGE (Lin, 2004), and the BERTScore (Zhang et al., 2019). (Section 3.2)
  - [CheXalign: Preference fine-tuning in chest X-ray interpretation models without human feedback](https://aclanthology.org/2025.acl-long.1342.pdf)

### → Radiology report generation
- **Retrieval-augmented generation** (behaviors tasks) — *causes*
  > “we introduce a fact-aware multimodal retrieval-augmented pipeline in generating accurate radiology reports (FactMM-RAG).”
  - [Fact-Aware Multimodal Retrieval Augmentation for Accurate Medical Radiology Report Generation](https://aclanthology.org/2025.naacl-long.28.pdf)

### Associated with
- **Factuality** (constructs)
  > Factual correctness is especially critical in chest radiology domains, as minute textual differences can drastically invert radiology report meaning and downstream prescribed treatments
  - [Fact-Aware Multimodal Retrieval Augmentation for Accurate Medical Radiology Report Generation](https://aclanthology.org/2025.naacl-long.28.pdf)
