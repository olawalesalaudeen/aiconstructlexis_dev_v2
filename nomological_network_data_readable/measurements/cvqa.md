# CVQA
**Type:** Measurement  
**Referenced in:** 3 papers  

## State of the Field

**What it is.** Papers most commonly treat CVQA as a culturally diverse, multilingual visual question answering benchmark, sometimes calling it the Cross-lingual Visual Question Answering dataset. Definitions describe it as a large-scale resource for culturally specific images and questions across 31 languages and 30 countries, written in English and local languages. Its questions are usually presented in multiple-choice form, with one correct answer and three plausible distractors, though one paper also says it is convertible to free-text open-ended QA; question types range from simple identification to multi-hop reasoning and local common-sense knowledge.

**What it is claimed to measure.** Across papers, the prevailing measurement claim centers on cultural understanding: CVQA is used to assess a model's ability to "reason about and understand culturally diverse visual content," and one paper says it can probe the cultural capability and bias of multimodal models. More broadly, papers link it to 6 constructs and 3 behavioral indicators. These claims spread across several targets rather than converging on just one, with named links to cultural understanding, visual question answering, cultural bias, generalization, and multilingual understanding, plus 4 other linked constructs or indicators.

**Space of uses.** Papers usually position CVQA as a benchmark or probing evaluation suite. Some evaluation work uses it alongside other datasets, pairing it with MaRVL to assess reasoning about culturally diverse visual content and with A-OKVQA to measure Western bias in question answering. No measurement instrument is linked to it beyond these side-by-side uses.

**Concerns raised.** One paper characterizes CVQA as challenging because high diversity in food and pop culture across cultures "poses a great challenge for the generalization of MLLMs."

## Sources

**[Pangea: A Fully Open Multilingual Multimodal LLM for 39 Languages](https://proceedings.iclr.cc/paper_files/paper/2025/file/770b8cf7ef10b4aa7170d09b36b6bb6f-Paper-Conference.pdf)**
> The Cross-lingual Visual Question Answering (CVQA) dataset, used to assess a model's ability to reason about and understand culturally diverse visual content.

## Relationships

### → CVQA
- **Cultural understanding** (constructs) — *measured_by*
  > This benchmark can serve as a probing evaluation suite for assessing the cultural capability and bias of multimodal models and hopefully encourage more research efforts toward increasing cultural awareness and linguistic diversity in this field. (Abstract)
  - [CVQA: Culturally-diverse Multilingual Visual Question Answering Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/1568882ba1a50316e87852542523739c-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Cultural bias** (constructs) — *measured_by*
  > “To measure Western bias in question answering, we use A-OKVQA and CVQA (Schwenk et al., 2022; Romero et al., 2024).”
  - [See It from My Perspective: How Language Affects Cultural Bias in Image Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c0fabe372177d2aded596be2d3b4544-Paper-Conference.pdf)
- **Visual question answering** (behaviors tasks) — *measured_by*
  > “We propose CVQA, a large-scale multilingual VQA benchmark”
  - [CVQA: Culturally-diverse Multilingual Visual Question Answering Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/1568882ba1a50316e87852542523739c-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > “Each question was accompanied by one correct answer and three distractors that were reasonably plausible, yet incorrect, thus forming a multiple-choice format.”
  - [CVQA: Culturally-diverse Multilingual Visual Question Answering Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/1568882ba1a50316e87852542523739c-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Open-ended question answering** (behaviors tasks) — *measured_by*
  > “we made sure that CVQA is also convertible into free-text open-ended QA”
  - [CVQA: Culturally-diverse Multilingual Visual Question Answering Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/1568882ba1a50316e87852542523739c-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Multilingual understanding** (constructs) — *measured_by*
  > “CVQA is written in both English and local languages, enabling us to benchmark multilingual MLLMs and English-only MLLMs.”
  - [CVQA: Culturally-diverse Multilingual Visual Question Answering Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/1568882ba1a50316e87852542523739c-Paper-Datasets_and_Benchmarks_Track.pdf)
