# Clinical accuracy
**Type:** Construct  
**Referenced in:** 5 papers  
**Also known as:** Clinical factual accuracy, Medical factuality  

## State of the Field

**Definition agreement:** Consensus. All papers define clinical accuracy as the factual correctness of a model's clinical output, especially whether reports or other outputs state the right findings and avoid clinically meaningful errors. One paper emphasizes consistency with the source image, another specifies details like location and severity, and another frames it as alignment with medical knowledge, but these are all the same core property of clinically correct content.

**Space of definitions.** Across the surveyed definitions, the prevailing usage treats clinical accuracy as the factual correctness of clinical content in model outputs, especially generated reports. Most definitions anchor this to whether a report matches the clinical findings it should express, either as consistency with findings present in the source medical image or as correct statements of findings, location, severity, and comparison information without clinically meaningful mistakes. A smaller framing broadens the target from reports to model outputs more generally and defines it as medical factuality, meaning alignment with established medical knowledge and avoidance of factual errors in clinical content.

**Space of facets.** Papers do not offer a shared higher-level taxonomy, but one recurring way of breaking the construct down is by the kinds of content that must be correct: findings, locations, severity, and comparison information, with emphasis on avoiding clinically meaningful mistakes. The literature also uses adjacent labels, clinical accuracy, clinical factual accuracy, and medical factuality, for closely overlapping factual-correctness notions, with one paper additionally framing evaluation in terms of clinically meaningful error categories.

**Space of measurement.** Papers link clinical accuracy to one measurement instrument and no behavioral indicators. The only named instrument is GREEN, which one paper says it uses because it provides a comprehensive assessment of clinical accuracy.

## Sources

**[RADAR: Enhancing Radiology Report Generation with Supplementary Knowledge Injection](https://aclanthology.org/2025.acl-long.1279.pdf)**
> The degree to which a model's generated reports are factually correct and consistent with the clinical findings present in the source medical image.

**[CREPE: Rapid Chest X-ray Report Evaluation by Predicting Multi-category Error Counts](https://aclanthology.org/2025.emnlp-main.1102.pdf) (as "Clinical factual accuracy")**
> The degree to which a report correctly states findings, locations, severity, and comparison information without clinically meaningful mistakes.

**[ReasonMed: A 370K Multi-Agent Generated Dataset for Advancing Medical Reasoning](https://aclanthology.org/2025.emnlp-main.1344.pdf) (as "Medical factuality")**
> The extent to which a model's outputs align with established medical knowledge and avoid factual errors in clinical content.

## Relationships

### Clinical accuracy →
- **GREEN** (measurements) — *measured_by*
  > We primarily report results using GREEN and F1-SRR-BERT Score, as they provide the most comprehensive assessments of clinical accuracy and structural consistency. (Section 4)
  - [Structuring Radiology Reports: Challenging LLMs with Lightweight Models](https://aclanthology.org/2025.emnlp-main.392.pdf)
