# Translation quality
**Type:** Construct  
**Referenced in:** 13 papers  
**Also known as:** Terminology accuracy  

## State of the Field

**Definition agreement:** Consensus. Most papers define translation quality as the overall quality of a translation or a model's translation ability in terms of accuracy or adequacy, fluency, fidelity, and preservation of source meaning. A single paper narrows this to correct translation of financial terms, but this is an outlier rather than a competing phenomenon, so the construct is used mostly the same way across the set.

**Space of definitions.** Across papers, the prevailing usage treats translation quality as a broad property of translated output or model ability: how accurately, fluently, adequately, and faithfully the target text conveys the source meaning. Definitions repeatedly mention fluency, adequacy, correctness, fidelity, meaning preservation, and sometimes understanding or contextual appropriateness; some describe an overall degree of excellence of the translation, while others cast it as a latent ability of the model to produce such outputs. A smaller line of work uses a narrower terminology-centered framing, defining the relevant quality in terms of correctly translating domain-specific financial terms, so the main disagreement is between broad overall output quality and specialized term accuracy.

**Space of facets.** Papers usually break the concept into recurring facets rather than formal subtypes: fluency, adequacy, correctness, fidelity, meaning preservation, understanding, and, in one multimodal setting, contextual appropriateness. Some also package it as a combined evaluation target, for example a trade-off between translatability and meaning preservation, while others discuss it alongside translation consistency, latency, and hallucination avoidance rather than collapsing these together. One decoding paper contrasts it with estimated probability, arguing that high estimated probability does not always lead to high translation quality, and one finance-focused paper uses a terminology-accuracy notion where most others use a broader quality label.

**Space of measurement.** The construct is linked to 4 measurement instruments and 3 behavioral indicators. The linked instruments named most often are FLORES, Human evaluation, MQM, and WMT: WMT and FLORES are described as benchmarks, MQM appears as human annotations, and human evaluation is used directly. Beyond those links, papers also assess quality with neural metrics for document translation, a ground-truth comparison metric Q(y, y*), XCOMET as a combined metric, and BLEU, CHRF++, and AfriCOMET, while human assessments target fluency, adequacy, understanding, and meaning preservation, so these measurements mostly track the dominant definitions, though the narrower terminology-based framing is operationalized by term-matching accuracy.

**Links.** One paper claims a causal relationship from text simplification to translation quality, stating that simplification most reliably improves it, and another claims a causal relationship from constraint adherence to translation quality, with increases in BLEU, CHRF, and AfriCOMET presented as gains in overall quality as well. A separate paper reports that machine translation is correlated with translation quality, illustrated by encoder-decoder models outperforming decoder-only models, and one paper says semantic drift is related to translation quality through multi-cycle translation analysis.

## Sources

**[DelTA: An Online Document-Level Translation Agent Based on Multi-Level Memory](https://proceedings.iclr.cc/paper_files/paper/2025/file/285149554f6fbed6e2f9ec72d131bd23-Paper-Conference.pdf)**
> The overall degree of excellence of a translated text, encompassing aspects like fluency, adequacy, and correctness, as judged by automated or human evaluation.

**[The Impact of Domain-Specific Terminology on Machine Translation for Finance in European Languages](https://aclanthology.org/2025.naacl-long.140.pdf) (as "Terminology accuracy")**
> The latent ability of a model to correctly translate domain-specific financial terms, reflecting its grasp of specialized vocabulary and conceptual consistency across languages.

## Relationships

### Translation quality →
- **COMETKIWI** (measurements) — *measured_by*
  > "We use two versions of COMETKIWI: wmt22-cometkiwi-da ... and wmt23-cometkiwi-da-xxl"
  - [Translate Smart, not Hard: Cascaded Translation Systems with Quality-Aware Deferral](https://aclanthology.org/2025.emnlp-main.1358.pdf)
- **XCOMET** (measurements) — *measured_by*
  > We additionally report the combined evaluation metric, XCOMET(s′, t′, r) to take into account of the trade-off between the two above metrics... (Section 3.2)
  - [Automatic Input Rewriting Improves Translation with Large Language Models](https://aclanthology.org/2025.naacl-long.542.pdf)
- **AfriCOMET** (measurements) — *measured_by*
  > “We also use AfriCOMET (Pu et al., 2021), a learned COMET metric for MT covering 13 African languages.”
  - [Bayelemabaga: Creating Resources for Bambara NLP](https://aclanthology.org/2025.naacl-long.602.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > “We also conducted machine and human evaluations of translations from studied models to compare the machine translation quality of encoder-decoder and decoder-only models.”
  - [Bayelemabaga: Creating Resources for Bambara NLP](https://aclanthology.org/2025.naacl-long.602.pdf)
- **BLEURT** (measurements) — *measured_by*
  > For evaluation, we use MetricX-23 (Juraska et al., 2023), COMET-20 (Rei et al., 2020), and BLEURT (Sellam et al., 2020) as quality metrics.
  - [Learning from others’ mistakes: Finetuning machine translation models with span-level error annotations](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25p/zhang25p.pdf)
- **WMT** (measurements) — *measured_by*
  > Benchmarks like WMT (Freitag et al., 2021b), MLQE-PE (Fomicheva et al., 2020), and FLORES (Team et al., 2022) have become central to evaluating translation quality. (Section 2)
  - [Evaluating Language Translation Models by Playing Telephone](https://aclanthology.org/2025.emnlp-main.524.pdf)
- **FLORES** (measurements) — *measured_by*
  > Benchmarks like WMT (Freitag et al., 2021b), MLQE-PE (Fomicheva et al., 2020), and FLORES (Team et al., 2022) have become central to evaluating translation quality. (Section 2)
  - [Evaluating Language Translation Models by Playing Telephone](https://aclanthology.org/2025.emnlp-main.524.pdf)
- **MQM** (measurements) — *measured_by*
  > We compare our telephone-supervised evaluation models to existing metrics using WMT MQM human annotations. (Section 5.1)
  - [Evaluating Language Translation Models by Playing Telephone](https://aclanthology.org/2025.emnlp-main.524.pdf)
- **MetricX** (measurements) — *measured_by*
  > Table 1: Translation quality measured with METRICX (M) and COMET (C) on the WMT24 test set. (Table 1)
  - [Translate Smart, not Hard: Cascaded Translation Systems with Quality-Aware Deferral](https://aclanthology.org/2025.emnlp-main.1358.pdf)

### → Translation quality
- **Text simplification** (behaviors tasks) — *causes*
  > simplification most reliably improves translation quality. (Section 1)
  - [Automatic Input Rewriting Improves Translation with Large Language Models](https://aclanthology.org/2025.naacl-long.542.pdf)
