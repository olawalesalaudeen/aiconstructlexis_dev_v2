# Cultural understanding
**Type:** Construct  
**Referenced in:** 32 papers  
**Also known as:** Cultural awareness, Local cultural reasoning  

## State of the Field

**Definition agreement:** Consensus. Most papers define cultural understanding as a model's ability to recognize, comprehend, reason about, and sometimes respond to culturally specific knowledge, norms, meanings, and contexts tied to a particular culture, region, language, or audience. A few papers narrow this to specific manifestations such as social interaction, proverbs, narratives, food, or avoiding culturally generic outputs, but these read as examples or settings of the same core property rather than different phenomena.

**Space of definitions.** Across papers, the prevailing usage treats cultural understanding as a latent ability to comprehend, reason about, interpret, or reference culturally specific knowledge, norms, meanings, and contexts tied to a particular audience, language community, or national or regional setting. Many definitions emphasize shared cultural references or context-rich meanings in items such as proverbs, narratives, cuisines, history, and civic norms. A smaller line of work uses nearby labels such as cultural awareness for understanding and navigating social interactions in line with cultural norms, or for recognizing and incorporating culturally specific information in outputs rather than producing Western-centric or generic responses, and one paper narrows the construct to local cultural reasoning as causal reasoning within a specific cultural context.

**Space of facets.** Papers organize the construct through locale- and task-specific content, including Japanese, Italian, Indian, Persian, and Arabic contexts, as well as domains such as shared cultural references, regional cuisines, figurative language, and region-specific socio-political structures. Some papers separate it from linguistic competence, and one multimodal formulation describes assessment in terms of perception, inference, and cultural alignment. Nearby labels overlap with it but shift emphasis: cultural awareness highlights social interaction or output-level incorporation, while local cultural reasoning highlights causal reasoning within a local cultural sphere.

**Space of measurement.** Operationalization is linked to 4 measurement instruments and no behavioral indicators. The named instruments are mostly benchmarks: CVQA is used to assess a model's ability to reason about and understand culturally diverse visual content, COPAL-ID assesses ability to reason within the Indonesian cultural sphere, and DRISHTIKON is introduced to evaluate the cultural understanding of generative AI systems on Indian culture; LITRANSPROQA is an LLM-based literary translation evaluation metric with humans in the loop that treats cultural understanding as one element alongside literary devices and authorial voice. These measurements mostly match the dominant definitions by testing understanding or reasoning in culture-specific contexts, though LITRANSPROQA operationalizes it inside literary quality assessment rather than as a standalone culture benchmark.

**Links.** Beyond measurement, papers link it to 3 other constructs. One paper treats cultural bias as related to cultural understanding, saying that tackling cultural bias requires an LLM to acknowledge cultural differences; another claims a causal relationship from cultural knowledge to cultural understanding, describing cultural awareness as leveraging cultural knowledge to detect inappropriate interactions. A further paper claims a causal relationship from cultural understanding to social bias in a discussion where difficulty answering culture-specific image questions also amplifies cultural bias, and no correlational links are reported.

## Sources

**[Humor in AI: Massive Scale Crowd-Sourced Preferences and Benchmarks for Cartoon Captioning](https://proceedings.neurips.cc/paper_files/paper/2024/file/e297fb6cd1690ee5b39c5bb4c58ad801-Paper-Datasets_and_Benchmarks_Track.pdf)**
> The ability to comprehend and reference shared cultural knowledge, norms, or contexts relevant to a specific audience.

**[LLM-Human Pipeline for Cultural Grounding of Conversations](https://aclanthology.org/2025.naacl-long.48.pdf) (as "Cultural awareness")**
> The latent ability to understand and navigate social interactions in a manner that is consistent with the social norms of a specific culture.

**[Multilingual Language Model Pretraining using Machine-translated Data](https://aclanthology.org/2025.emnlp-main.1426.pdf) (as "Local cultural reasoning")**
> The ability to perform causal reasoning within specific cultural contexts, including understanding local dialects and social norms.

## Relationships

### Cultural understanding →
- **CVQA** (measurements) — *measured_by*
  > This benchmark can serve as a probing evaluation suite for assessing the cultural capability and bias of multimodal models and hopefully encourage more research efforts toward increasing cultural awareness and linguistic diversity in this field. (Abstract)
  - [CVQA: Culturally-diverse Multilingual Visual Question Answering Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/1568882ba1a50316e87852542523739c-Paper-Datasets_and_Benchmarks_Track.pdf)
- **LITRANSPROQA** (measurements) — *measured_by*
  > LITRANSPROQA integrates humans in the loop to incorporate insights from professional literary translators and researchers, focusing on critical elements in literary quality assessment such as literary devices, cultural understanding, and authorial voice. (Abstract)
  - [LiTransProQA: An LLM-based Literary Translation Evaluation Metric with Professional Question Answering](https://aclanthology.org/2025.emnlp-main.1482.pdf)
- **DRISHTIKON** (measurements) — *measured_by*
  > We introduce DRISHTIKON, a first-of-its-kind multimodal and multilingual benchmark centered exclusively on Indian culture, designed to evaluate the cultural understanding of generative AI systems. (Abstract)
  - [DRISHTIKON: A Multimodal Multilingual Benchmark for Testing Language Models' Understanding on Indian Culture](https://aclanthology.org/2025.emnlp-main.68.pdf)
- **COPAL-ID** (measurements) — *measured_by*
  > We evaluate both TransWebLLM and TransWebLLM-web on this benchmark in a 5-shot setting to assess their ability to reason within the Indonesian cultural sphere. (Section 5.2.1)
  - [Multilingual Language Model Pretraining using Machine-translated Data](https://aclanthology.org/2025.emnlp-main.1426.pdf)

### Associated with
- **Cultural bias** (constructs)
  > Tackling cultural bias necessitates that a large language model (LLM) acknowledges cultural differences. (Section 1)
  - [CultureLLM: Incorporating Cultural Differences into Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/9a16935bf54c4af233e25d998b7f4a2c-Paper-Conference.pdf)
- **Cultural knowledge** (constructs)
  > Cultural Awareness, which leverages cultural knowledge to detect inappropriate interactions.
  - [SocialCC: Interactive Evaluation for Cultural Competence in Language Agents](https://aclanthology.org/2025.acl-long.1594.pdf)
