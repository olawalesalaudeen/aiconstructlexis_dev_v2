# Manual error analysis
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** Manual error annotation  

## State of the Field

**What it is.** Across the definitions, the prevailing usage is a human evaluation protocol in which annotators manually inspect model outputs and identify errors with predefined questions, categories, or a taxonomy. The described applications vary in scope: native English speakers assess model-generated rationales for context, word-sense, and pun pair mistakes; human annotators count errors in generated instructions across four categories; other papers annotate generated text for linguistic and non-linguistic errors, or analyze a random sample of incorrect generations.

**What it is claimed to measure.** Papers link this instrument to one construct, Linguistic quality, and no behavioral indicators are linked to it. The recorded measured_by relationship centers on Linguistic quality: manual annotation of outputs is used to investigate inconsistencies and linguistic quality, and no other construct links are recorded.

**Space of uses.** No measurement instrument is linked to it. Papers use it as a manual check on generated text, sometimes positioned beyond standard metrics through fine-grained annotation, and sometimes as a reference point when another metric is reported to correlate with manually annotated error counts. The procedures described include designed questions for specific mistake categories, annotation of selected outputs from test sets, and in-depth review of a random sample of incorrect generations.

## Sources

**[Pun Unintended: LLMs and the Illusion of Humor Understanding](https://aclanthology.org/2025.emnlp-main.1419.pdf)**
> Human evaluation protocol in which native English speakers assess model-generated rationales for specific error types, including context, word-sense, and pun pair errors.

**[Evaluating Spatiotemporal Consistency in Automatically Generated Sewing Instructions](https://aclanthology.org/2025.emnlp-main.934.pdf) (as "Manual error annotation")**
> A procedure where human annotators manually identify and count errors in model-generated text according to a predefined set of categories, such as incorrect assembly operations or order.

## Relationships

### → Manual error analysis
- **Linguistic quality** (constructs) — *measured_by*
  > To investigate the impact of DPSGD and distillation on inconsistencies and linguistic quality, we manually annotated 50 outputs each from the XSum, MRPC, and Pubmed test sets. (Section 5.4)
  - [Differentially Private Learning Needs Better Model Initialization and Self-Distillation](https://aclanthology.org/2025.naacl-long.455.pdf)
- **Reasoning error** (behaviors tasks) — *measured_by*
  > we conduct an in-depth human analysis of the error cases made by GPT-4o, Qwen2-VL-7B, and Llama 3.2-Vision 11B... Through in-depth analysis, we have identified the following ﬁve common error types that current MLLMs are likely to make: (1) Reasoning Error... (Section 4)
  - [Are Multimodal LLMs Robust Against Adversarial Perturbations? RoMMath: A Systematic Evaluation on Multimodal Math Reasoning](https://aclanthology.org/2025.naacl-long.582.pdf)
- **Calculation error** (behaviors tasks) — *measured_by*
  > we conduct an in-depth human analysis of the error cases... Through in-depth analysis, we have identified the following ﬁve common error types that current MLLMs are likely to make: ... (5) Calculation Error... (Section 4)
  - [Are Multimodal LLMs Robust Against Adversarial Perturbations? RoMMath: A Systematic Evaluation on Multimodal Math Reasoning](https://aclanthology.org/2025.naacl-long.582.pdf)
