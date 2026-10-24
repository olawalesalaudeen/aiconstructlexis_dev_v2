# Brain alignment
**Type:** Construct  
**Referenced in:** 5 papers  
**Also known as:** Brain-relevant semantics  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the papers, the construct is used for model-to-brain alignment during language processing, but the aligned object varies. One definition frames it as the degree to which a model's internal activity patterns match human neural activity in the language system, while another uses the nearby label "brain-relevant semantics" for the degree to which semantic representations align with, or are structured similarly to, those found in the human brain during language processing. The disagreement is mainly about scope: broad internal-activity matching versus a narrower semantic-representation version of the same general idea.

**Space of facets.** Papers do not lay out a detailed subtype taxonomy. The clearest internal distinction is between overall brain alignment and a semantic sub-framing, "brain-relevant semantics," which treats the semantic component of model representations as the target of alignment. Some work also treats alignment as region-specific rather than as a single undifferentiated quantity, discussing stronger alignment in visual areas and in semantic language regions.

**Space of measurement.** Papers do not link it to any measurement instrument, and they link it to two behavioral indicators, image captioning and visual question answering. Those behavioral indicators are not recorded as measures but as causes of stronger brain alignment, while one paper also mentions performance on brain alignment benchmarks using the Brain-Score platform. Overall, the operationalization is phrased in broad brain-matching terms, with region-specific alignment differences under different instructions, whereas the narrower semantic-representation framing appears in only one definition.

**Links.** In multimodal work, two instruction types are claimed to lead to stronger brain alignment, with region-specific effects. Other papers claim causal relationships into brain alignment from context utilization, semantic understanding, and one formal linguistic competence, and one paper also claims a causal relationship from brain alignment to semantic understanding. It is further reported to correlate with behavioral alignment and visual understanding, while functional linguistic competence is described as having a weaker relationship, and the behavioral-alignment association is limited to early training.

## Sources

**[TopoLM: brain-like spatio-functional organization in a topographic language model](https://proceedings.iclr.cc/paper_files/paper/2025/file/4f7f521c08b5e0cd9931e74fa353b59b-Paper-Conference.pdf)**
> The degree to which the model's internal activity patterns match human neural activity measured in the language system.

**[Improving Semantic Understanding in Speech Language Models via Brain-tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/95b7a93e60fdfd10cc202f44fd6adf5f-Paper-Conference.pdf) (as "Brain-relevant semantics")**
> The degree to which a model's semantic representations align with or are structured similarly to those found in the human brain during language processing.

## Relationships

### Brain alignment →
- **Visual understanding** (constructs) — *correlates*
  > Instructions related to image understanding (e.g., “describe the most dominant color”) result in higher brain alignment in early visual regions for both the InstructBLIP and mPLUG-OWL models...
  - [Correlating instruction-tuning (in multimodal models) with vision-language processing (in the brain)](https://proceedings.iclr.cc/paper_files/paper/2025/file/e52e4de8689a9955b6d3ff421d019387-Paper-Conference.pdf)
- **Semantic understanding** (constructs) — *causes*
  > “incorporating brain signals into the training of language models improves the models’ semantic understanding”
  - [Improving Semantic Understanding in Speech Language Models via Brain-tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/95b7a93e60fdfd10cc202f44fd6adf5f-Paper-Conference.pdf)
- **Functional linguistic competence** (constructs) — *correlates*
  > While functional competence, which involves world knowledge and reasoning, continues to develop throughout training, its relationship with brain alignment is weaker (Abstract)
  - [From Language to Cognition: How LLMs Outgrow the Human Language Network](https://aclanthology.org/2025.emnlp-main.1237.pdf)
- **Linear Predictivity** (measurements) — *measured_by*
  > Following standard practice in measuring brain alignment, we train a ridge regression model to predict brain activity from model representations... We refer to this metric as Linear Predictivity. (Section 3.1)
  - [From Language to Cognition: How LLMs Outgrow the Human Language Network](https://aclanthology.org/2025.emnlp-main.1237.pdf)

### → Brain alignment
- **Image captioning** (behaviors tasks) — *causes*
  > Specifically, the image captioning instruction leads to stronger brain alignment in regions like the EBA (extrastriate body area), PPA (parahippocampal place area), and FFA (fusiform face area)
  - [Correlating instruction-tuning (in multimodal models) with vision-language processing (in the brain)](https://proceedings.iclr.cc/paper_files/paper/2025/file/e52e4de8689a9955b6d3ff421d019387-Paper-Conference.pdf)
- **Visual question answering** (behaviors tasks) — *causes*
  > Visual question-answering instructions, such as 'are there people in this image?' and 'foreground and background of the image,' contribute significantly to brain alignment in higher visual regions
  - [Correlating instruction-tuning (in multimodal models) with vision-language processing (in the brain)](https://proceedings.iclr.cc/paper_files/paper/2025/file/e52e4de8689a9955b6d3ff421d019387-Paper-Conference.pdf)
- **Semantic understanding** (constructs) — *causes*
  > If brain-tuning successfully improves semantic understanding in speech models, we expect that brain-tuned models will align better with semantic language regions in new brain recordings (Section 3.4)
  - [Improving Semantic Understanding in Speech Language Models via Brain-tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/95b7a93e60fdfd10cc202f44fd6adf5f-Paper-Conference.pdf)
- **Context utilization** (constructs) — *causes*
  > Our findings reveal that the initial brain alignment of models with untrained parameters is driven by context integration. (Section 1.1)
  - [From Language to Cognition: How LLMs Outgrow the Human Language Network](https://aclanthology.org/2025.emnlp-main.1237.pdf)
- **Formal linguistic competence** (constructs) — *causes*
  > we show that formal linguistic competence actively drives brain alignment during the early phases of training. (Section 6)
  - [From Language to Cognition: How LLMs Outgrow the Human Language Network](https://aclanthology.org/2025.emnlp-main.1237.pdf)
- **Behavioral alignment** (constructs) — *correlates*
  > Figure 5 shows that brain alignment initially correlates with perplexity and behavioral alignment, but only during the early stages of training (up to ~2B tokens). (Section 5.3)
  - [From Language to Cognition: How LLMs Outgrow the Human Language Network](https://aclanthology.org/2025.emnlp-main.1237.pdf)
