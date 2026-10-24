# SciERC
**Type:** Measurement  
**Referenced in:** 3 papers  

## State of the Field

**What it is.** Papers treat SciERC as a computer science domain evaluation resource, but they frame the task differently. One definition presents it as an evaluation task in SciRIFF-Eval for relation extraction, summarized as "IE(Rel)," with a computer science abstract as input and six entity types as output. Another paper places SCIERC among computer science datasets used for classification tasks and describes it as focused on identifying entities, relations, and coreference in scientific articles.

**What it is claimed to measure.** Reported measurement claims are spread across behavioral indicators rather than linked constructs. Papers use SciERC to measure three behavioral indicators, Information extraction, Knowledge graph construction, and Text classification, and no constructs are linked to it. The task framing is varied: one paper reports it as measuring Information extraction, another uses it in experiments on datasets with golden ground truth KGs for Knowledge graph construction, and another includes it among classification datasets across diverse domains for Text classification.

**Space of uses.** No measurement instrument is linked to it. In the uses that are described, one study places SciERC inside SciRIFF-Eval as an evaluation task, another includes it as one of four datasets for classification tasks across diverse domains, and another uses it alongside REBEL-Sub, GenWiki, and a Windows-centric subset of Re-DocRED as one of two domain-specific datasets with golden ground truth KGs.

## Sources

**[SciRIFF: A Resource to Enhance Language Model Instruction-Following over Scientific Literature](https://aclanthology.org/2025.emnlp-main.310.pdf)**
> An evaluation task in SciRIFF-Eval for relation extraction, requiring the identification of six entity types from a computer science abstract.

## Relationships

### → SciERC
- **Information extraction** (behaviors tasks) — *measured_by*
  > “SciERC | IE(Rel) | CS abstract | 6 entity types”
  - [SciRIFF: A Resource to Enhance Language Model Instruction-Following over Scientific Literature](https://aclanthology.org/2025.emnlp-main.310.pdf)
- **Knowledge graph construction** (behaviors tasks) — *measured_by*
  > In our study, we conduct experiments on two general datasets (REBEL-Sub (Huguet Cabot and Navigli, 2021) and GenWiki (Jin et al., 2020)) and two domain-specific datasets (SCIERC (Luan et al., 2018) and the Windows-centric subset of Re-DocRED (Tan et al., 2022)) with golden ground truth KGs (Section 5.1.1).
  - [Can LLMs be Good Graph Judge for Knowledge Graph Construction?](https://aclanthology.org/2025.emnlp-main.554.pdf)
