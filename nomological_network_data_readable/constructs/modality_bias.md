# Modality bias
**Type:** Construct  
**Referenced in:** 4 papers  
**Also known as:** Multimodal bias, Modality reliance  

## State of the Field

**Definition agreement:** Complementary. Most papers define modality bias as disproportionate reliance or dependence on one input modality in multimodal inference, while a single paper frames it as stronger performance on one modality than others. These definitions all describe a model-level tendency to favor one modality, but they foreground different facets of that same broad phenomenon, reliance versus observed capability imbalance.

**Space of definitions.** Across the surveyed work, the prevailing usage is a reliance framing: most definitions describe modality bias as disproportionate dependence on one modality in multimodal inference, with models, and in one case datasets, leaning too heavily on text, vision, or another input while underusing others. A smaller line frames it through uneven capability across modalities, treating better performance on text than on figure or table questions as evidence of bias. The main disagreement is therefore whether the construct is defined by direct reliance on an input modality or by comparative performance differences across modalities.

**Space of facets.** Papers organize the construct around which modality dominates, with contrasts such as text versus figures and tables, vision versus text, and text versus audio or video. The naming is not fully uniform: 'multimodal bias', 'modality bias', and 'modality reliance' are used for closely overlapping usages. Some authors also extend the construct from models to datasets, describing a dataset as textually biased when many samples can be correctly classified from text alone, and no linked construct is used to nest or equate it with another construct.

**Space of measurement.** Papers link it to 2 measurement instruments and 1 behavioral indicator, with no linked constructs. The linked instruments are Human evaluation and M-LongDoc, and the linked behavioral indicator is Cross-modal retrieval: human evaluation is used to confirm modality bias in multimodal intent datasets, while M-LongDoc functions as a benchmark where weaker performance on figure and table questions than on text questions is taken as evidence of bias. Some authors also analyze modality reliance with Gemini as an external judge to identify which input type a model mainly uses, and these operationalizations track the two main definitions by either assessing which modality a model mainly uses or comparing performance across modalities.

**Links.** The only non-measurement link reported is a related link from Cross-modal retrieval to modality bias. A paper relates weaker cross-modal retrieval performance to modality bias, stating that a multimodal LLM retriever underperforms a smaller CLIP retriever in such tasks because of the modality bias exhibited by MLLMs. No causal or correlational links are reported.

## Sources

**[M-LongDoc: A Benchmark For Multimodal Super-Long Document Understanding And A Retrieval-Aware Tuning Framework](https://aclanthology.org/2025.emnlp-main.469.pdf) (as "Multimodal bias")**
> A model's tendency to perform better on one modality (e.g., text) than others (e.g., figures, tables), indicating an imbalanced capability.

**[AI Knows Where You Are: Exposure, Bias, and Inference in Multimodal Geolocation with KoreaGEO](https://aclanthology.org/2025.emnlp-main.501.pdf) (as "Modality reliance")**
> The degree to which a model depends on a specific input modality, such as vision versus text, when making multimodal inferences.

**[Text Takes Over: A Study of Modality Bias in Multimodal Intent Detection](https://aclanthology.org/2025.emnlp-main.1226.pdf)**
> The tendency of a model or dataset to rely disproportionately on one input modality (e.g., text) over others (e.g., audio, video), limiting the effectiveness of multimodal integration.

## Relationships

### Modality bias →
- **M-LongDoc** (measurements) — *measured_by*
  > With the proposed M-LongDoc and evaluation framework, our preliminary study on existing models show that they struggle with figure and table-based questions compared to text-based questions, revealing their multimodal bias and weaknesses
  - [M-LongDoc: A Benchmark For Multimodal Super-Long Document Understanding And A Retrieval-Aware Tuning Framework](https://aclanthology.org/2025.emnlp-main.469.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > We confirm the modality bias of these datasets via human evaluation, too.
  - [Text Takes Over: A Study of Modality Bias in Multimodal Intent Detection](https://aclanthology.org/2025.emnlp-main.1226.pdf)

### Associated with
- **Cross-modal retrieval** (behaviors tasks)
  > it underperforms compared to a smaller CLIP retriever in cross-modal retrieval tasks due to the modality bias exhibited by MLLMs. (Section 1)
  - [MM-EMBED: UNIVERSAL MULTIMODAL RETRIEVAL WITH MULTIMODAL LLMS](https://proceedings.iclr.cc/paper_files/paper/2025/file/6d5d6afa9957cfc9142ba60e78a467e9-Paper-Conference.pdf)
