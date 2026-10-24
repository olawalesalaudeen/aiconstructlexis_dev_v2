# GREEN
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Papers most commonly describe GREEN as an evaluation procedure, Grounded-factual-correctness Evaluation for radioloGy reports, for radiology report evaluation. The available definition says it uses a finetuned LLM to assess the factual correctness of generated radiology reports, and one paper further characterizes it as a metric based on a "single-answer reference-guided LLM-as-a-Judge mechanism."

**What it is claimed to measure.** Across the surveyed work, GREEN is linked to one construct and one behavioral indicator. Papers use it to measure Clinical accuracy, and they also report Radiology report generation as measured by GREEN; the accompanying language emphasizes factual correctness in generated radiology reports and describes it as a metric for radiology report evaluation.

**Space of uses.** The papers here position GREEN as a primary evaluation metric. One paper calls it a "state-of-the-art metric for radiology report evaluation," and another says results are "primarily" reported with GREEN and F1-SRR-BERT Score to assess clinical accuracy and structural consistency; no other measurement instrument is linked to it.

## Sources

**[Structuring Radiology Reports: Challenging LLMs with Lightweight Models](https://aclanthology.org/2025.emnlp-main.392.pdf)**
> An evaluation procedure (Grounded-factual-correctness Evaluation for radioloGy reports) that uses a finetuned LLM to assess the factual correctness of generated radiology reports.

## Relationships

### → GREEN
- **Radiology report generation** (behaviors tasks) — *measured_by*
  > GREEN is a state-of-the-art metric for radiology report evaluation, based on a single-answer reference-guided LLM-as-a-Judge mechanism. (Section 3.2)
  - [CheXalign: Preference fine-tuning in chest X-ray interpretation models without human feedback](https://aclanthology.org/2025.acl-long.1342.pdf)
- **Clinical accuracy** (constructs) — *measured_by*
  > We primarily report results using GREEN and F1-SRR-BERT Score, as they provide the most comprehensive assessments of clinical accuracy and structural consistency. (Section 4)
  - [Structuring Radiology Reports: Challenging LLMs with Lightweight Models](https://aclanthology.org/2025.emnlp-main.392.pdf)
