# Cultural alignment
**Type:** Construct  
**Referenced in:** 15 papers  
**Also known as:** Pluralistic culture alignment, Cultural value adaptation  

## State of the Field

**Definition agreement:** Consensus. Most papers define cultural alignment as the extent to which a model's outputs, judgments, values, or behavior match the norms, values, beliefs, and sensitivities of a target cultural context or of human cultures more broadly. A few papers narrow this to specific regions, tasks, or treat it as a latent ability rather than observed responses, but these are scope and framing differences within the same core property.

**Space of definitions.** Across papers, cultural alignment is most commonly described as correspondence between a model's outputs, responses, judgments, or expressed values and the norms, values, beliefs, or expressions of a particular culture, often with an explicit contrast to defaulting to dominant or Western perspectives. Several definitions instantiate this around specific cultural contexts, including Arab social and political sensitivities, culture-specific image captioning, or culture-specific hate speech judgments, while a smaller line of work broadens the target to pluralistic alignment with diverse human cultures. A minority framing uses the label cultural value adaptation for a latent ability to align behavior with a culture's norms, attitudes, and values, beyond mere language use.

**Space of facets.** Papers do not present a shared subtype taxonomy, but they do separate a specific-culture framing from a pluralistic one aimed at diverse human cultures. Some authors describe the construct through model values, beliefs, and preferences inferred from responses to culturally sensitive questions, whereas others speak more broadly about outputs or responses reflecting cultural norms and expressions. A smaller usage narrows the construct to judgments on subjective content such as hate speech, and one related label, cultural value adaptation, shifts emphasis from output correspondence to latent behavioral ability.

**Space of measurement.** Papers link cultural alignment to 1 measurement instrument, the World Values Survey, and to no behavioral indicators. The prevailing operationalization is survey-style: models are prompted with culturally sensitive questions, sometimes by simulating sociological surveys, and alignment is scored by comparing model answers with real-world survey responses from a target culture, including a cultural alignment score based on output similarity; some papers also discuss evaluation with Hofstede's cultural dimensions or cultural distance. This operationalization matches definitions centered on expressed values and preferences, and is narrower than definitions that describe broader output behavior or adaptation beyond language use.

**Links.** Papers link cultural alignment to 1 construct, cultural bias, through a related relation. One paper describes prior probing for cultural alignment as connected to findings of Western bias in the world knowledge and values models encode. No causal or correlational links are reported.

## Sources

**[Arabic Dataset for LLM Safeguard Evaluation](https://aclanthology.org/2025.naacl-long.285.pdf)**
> The extent to which a model's outputs reflect the values, norms, and expressions of a specific cultural context rather than defaulting to dominant (e.g., Western) perspectives.

**[Self-Pluralising Culture Alignment for Large Language Models](https://aclanthology.org/2025.naacl-long.350.pdf) (as "Pluralistic culture alignment")**
> The degree to which a model's values and preferences align with the shared beliefs, norms, and values of diverse human cultures.

**[From Surveys to Narratives: Rethinking Cultural Value Adaptation in LLMs](https://aclanthology.org/2025.emnlp-main.912.pdf) (as "Cultural value adaptation")**
> The latent ability of a model to align its behavior with the norms, attitudes, and values of a specific cultural context, beyond mere language use.

## Relationships

### Cultural alignment →
- **World Values Survey** (measurements) — *measured_by*
  > We utilize the World Values Survey (WVS) (Haerpfer et al., 2022) for our assessment. (Section 3.3)
  - [Self-Pluralising Culture Alignment for Large Language Models](https://aclanthology.org/2025.naacl-long.350.pdf)

### Associated with
- **Cultural bias** (constructs)
  > “In the language only setting, prior work has probed models for such cultural alignment, finding that they exhibit a Western bias in the world knowledge (Naous et al., 2023) and values (AlKhamissi et al., 2024) they encode.”
  - [See It from My Perspective: How Language Affects Cultural Bias in Image Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c0fabe372177d2aded596be2d3b4544-Paper-Conference.pdf)
- **Social bias** (constructs)
  > AlKhamissi et al. (2024) demonstrate how cultural misalignment can increase bias. (Section 4.2)
  - [Position: LLMs Can be Good Tutors in English Education](https://aclanthology.org/2025.emnlp-main.885.pdf)
