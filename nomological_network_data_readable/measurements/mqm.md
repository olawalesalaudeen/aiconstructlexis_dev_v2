# MQM
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** MQM evaluation framework  

## State of the Field

**What it is.** Most descriptions treat MQM as a framework or guided error annotation scheme for translation evaluation that defines categories, dimensions, and severities for translation errors. Papers describe it as covering dimensions such as accuracy, fluency, and style, and one description specifies six major categories: terminology, accuracy, fluency, style, locale-convention, and non-translation. A smaller use treats the MQM evaluation framework as a source from which manual metrics, in that case fluency and idiom translation, are derived.

**What it is claimed to measure.** Across the surveyed work, MQM is linked to one construct, Translation quality, and one behavioral indicator, Machine translation. Papers use it to measure translation quality, and one paper also treats machine translation as measured by MQM, describing that setting as having substantial amounts of fine-grained MQM data already available. No other construct or behavioral indicator is linked to it.

**Space of uses.** No other measurement instrument is linked to MQM by the surveyed papers. Papers position it as guided human error annotation, where evaluators read a source and candidate translation, identify error spans, and categorize them using annotation guidelines; as the basis for prompting LLM evaluators to produce MQM-defined error spans; and as a framework from which manual fluency and idiom-translation metrics are devised. One paper also reports using WMT MQM human annotations when comparing evaluation models to existing metrics.

**Concerns raised.** A concern appears in literary translation work: MQM is described there as a complex scheme and a de facto standard for non-literary human MT evaluation, but as largely inadequate for literary translation evaluation.

## Sources

**[Same evaluation, more tokens: On the effect of input length for machine translation evaluation using Large Language Models](https://aclanthology.org/2025.emnlp-main.402.pdf)**
> Multidimensional Quality Metrics, a framework that defines categories and severities for translation errors, used as the basis for prompting LLM evaluators.

**[Large Language Models for Persian-English Idiom Translation](https://aclanthology.org/2025.naacl-long.405.pdf) (as "MQM evaluation framework")**
> A framework for human evaluation of machine translation quality, from which the paper derives its manual metrics for fluency and idiom translation.

## Relationships

### → MQM
- **Machine translation** (behaviors tasks) — *measured_by*
  > "we focus on the setting of machine translation, an application where substantial amounts of fine-grained information is already readily available, namely Multidimensional Quality Metrics (MQM) data"
  - [Learning from others’ mistakes: Finetuning machine translation models with span-level error annotations](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25p/zhang25p.pdf)
- **Translation quality** (constructs) — *measured_by*
  > We compare our telephone-supervised evaluation models to existing metrics using WMT MQM human annotations. (Section 5.1)
  - [Evaluating Language Translation Models by Playing Telephone](https://aclanthology.org/2025.emnlp-main.524.pdf)
