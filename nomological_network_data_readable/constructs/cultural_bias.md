# Cultural bias
**Type:** Construct  
**Referenced in:** 14 papers  
**Also known as:** Western bias, Culture bias  

## State of the Field

**Definition agreement:** Complementary. Most papers define cultural bias as a model tendency to privilege dominant, often Western, cultural knowledge, perspectives, norms, or representations, sometimes operationalized as uneven performance across cultural domains. A few papers instead foreground stereotyped cultural associations in generated content, but these read as a narrower manifestation of the same model-level cultural favoritism rather than a contradictory construct.

**Space of definitions.** Across papers, the prevailing usage describes cultural bias as a model tendency to favor some cultural perspectives, knowledge, symbols, values, or norms over others, usually with Western or U.S. content treated as the advantaged case and less prevalent or underrepresented cultures described as receiving limited knowledge, templated outputs, or uneven performance. A smaller line of work narrows the construct to a measurable performance disparity, especially in vision-language image understanding, where an unbiased model is expected to perform similarly across groups and Western bias is computed from relative performance on Western versus East Asian examples. Some definitions further stress stereotyped or implicit associations, such as linking cultural groups to particular traits, settings, or other attributes, so the main disagreement is between broad model-level favoritism or stereotyping and task-level error disparity, and between broad cultural imbalance and explicitly Western-dominant cases.

**Space of facets.** Papers organize the label through domain-specific manifestations rather than a single fixed taxonomy: culture-conditioned generations, narrative content, food-related cultural knowledge, measurement systems and factual representations, and visual question answering or image understanding all appear as sites where the same construct is discussed. Nearby names are used for overlapping cases, especially Western bias for Western-over-East-Asian or Western-over-Arab preference, and culture bias for implicit stereotypical associations. In relational use, papers keep it distinct but related to cultural alignment, cultural understanding, visual understanding, and text generation.

**Space of measurement.** Papers link cultural bias to 3 measurement instruments and 1 behavioral indicator. The named instruments are A-OKVQA and CVQA, used to measure Western bias in question answering, and the World Values Survey, used as seed data; one paper also makes the operationalization explicit as error disparity, computing bias from model performance on Western versus East Asian inputs. The only linked behavioral indicator is text generation, and other operationalizations in the snippets also compare preferences between Western and Arab entities in Arabic text infilling or use automatic metrics for food-related cultural knowledge, so the measurements mostly instantiate the disparity and preference versions of the construct, while broader definitions in terms of values, norms, and stereotyped associations are represented more indirectly.

**Links.** The papers here make relatedness claims rather than causal or correlational ones. Cultural bias is related to cultural understanding in work that says tackling it requires acknowledging cultural differences, to visual understanding in work on image understanding, and to text generation in work on open-ended narrative writing or dialogue. One paper also relates cultural alignment to cultural bias through Western bias in the world knowledge and values models encode.

## Sources

**[See It from My Perspective: How Language Affects Cultural Bias in Image Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c0fabe372177d2aded596be2d3b4544-Paper-Conference.pdf) (as "Western bias")**
> A performance disparity where a vision-language model performs better on tasks involving images and annotations from Western cultures compared to those from East Asian cultures.

**[Attributing Culture-Conditioned Generations to Pretraining Corpora](https://proceedings.iclr.cc/paper_files/paper/2025/file/c4546b4f9e1a44ed15c253dd43307dd5-Paper-Conference.pdf)**
> A tendency for model generations to reflect uneven or stereotyped cultural associations, especially favoring some cultures or culturally salient symbols over others.

## Relationships

### Cultural bias →
- **CVQA** (measurements) — *measured_by*
  > “To measure Western bias in question answering, we use A-OKVQA and CVQA (Schwenk et al., 2022; Romero et al., 2024).”
  - [See It from My Perspective: How Language Affects Cultural Bias in Image Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c0fabe372177d2aded596be2d3b4544-Paper-Conference.pdf)
- **A-OKVQA** (measurements) — *measured_by*
  > “To measure Western bias in question answering, we use A-OKVQA and CVQA (Schwenk et al., 2022; Romero et al., 2024).”
  - [See It from My Perspective: How Language Affects Cultural Bias in Image Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c0fabe372177d2aded596be2d3b4544-Paper-Conference.pdf)

### Associated with
- **Cultural understanding** (constructs)
  > Tackling cultural bias necessitates that a large language model (LLM) acknowledges cultural differences. (Section 1)
  - [CultureLLM: Incorporating Cultural Differences into Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/9a16935bf54c4af233e25d998b7f4a2c-Paper-Conference.pdf)
- **Visual understanding** (constructs)
  > In this work, we characterize the Western bias of VLMs in image understanding and investigate the role that language plays in this disparity. (Section 1)
  - [See It from My Perspective: How Language Affects Cultural Bias in Image Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c0fabe372177d2aded596be2d3b4544-Paper-Conference.pdf)
- **Cultural alignment** (constructs)
  > “In the language only setting, prior work has probed models for such cultural alignment, finding that they exhibit a Western bias in the world knowledge (Naous et al., 2023) and values (AlKhamissi et al., 2024) they encode.”
  - [See It from My Perspective: How Language Affects Cultural Bias in Image Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c0fabe372177d2aded596be2d3b4544-Paper-Conference.pdf)
- **Text generation** (behaviors tasks)
  > "In open-ended generative tasks like narrative writing or dialogue, large language models often exhibit cultural biases"
  - [Attributing Culture-Conditioned Generations to Pretraining Corpora](https://proceedings.iclr.cc/paper_files/paper/2025/file/c4546b4f9e1a44ed15c253dd43307dd5-Paper-Conference.pdf)
- **World Values Survey** (measurements)
  > Insights from the WVS can help in understanding the cultural and societal norms that underlie biases
  - [CultureLLM: Incorporating Cultural Differences into Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/9a16935bf54c4af233e25d998b7f4a2c-Paper-Conference.pdf)
