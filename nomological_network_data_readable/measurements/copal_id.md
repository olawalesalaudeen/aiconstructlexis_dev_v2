# COPAL-ID
**Type:** Measurement  
**Referenced in:** 3 papers  

## State of the Field

**What it is.** Across the surveyed work, COPAL-ID is treated as an Indonesian evaluation resource. One definition describes it broadly as a benchmark used to assess downstream model performance after safety fine-tuning, while another paper describes it more specifically as an Indonesian causal reasoning dataset written from scratch by native speakers in both standard and Jakartan Indonesian. Papers therefore describe it both as a benchmark and as a task-specific dataset.

**What it is claimed to measure.** Papers link COPAL-ID to 2 constructs and 1 behavioral indicator. The construct links are divided between causal reasoning and cultural understanding: one paper reports that COPAL-ID measures causal reasoning, and the same line of work uses it to assess models' ability to reason within the Indonesian cultural sphere, treating it as a measure of cultural understanding. Another paper uses COPAL-ID as one of the benchmarks that measure downstream task performance after safety fine-tuning.

**Space of uses.** In use, papers position COPAL-ID as part of broader model evaluation. One study includes it in a suite of Indonesian benchmarks alongside IndoMMLU, IndoCareer, IndoCulture, MAPS, and IndoCloze when evaluating the broader impact of safety fine-tuning on downstream performance. Another evaluates models on COPAL-ID in a 5-shot setting to assess reasoning within the Indonesian cultural sphere.

## Sources

**[IndoSafety: Culturally Grounded Safety for LLMs in Indonesian Languages](https://aclanthology.org/2025.emnlp-main.465.pdf)**
> An Indonesian benchmark used to assess downstream model performance after safety fine-tuning.

## Relationships

### → COPAL-ID
- **Downstream task performance** (behaviors tasks) — *measured_by*
  > To assess the broader impact of safety fine-tuning on downstream performance, we also evaluated the fine-tuned models on a range of Indonesian benchmarks, including IndoMMLU (Koto et al., 2023), IndoCareer (Koto, 2025), IndoCulture (Koto et al., 2024), MAPS (Liu et al., 2024), COPAL-ID (Wibowo et al., 2024), and IndoCloze (Koto et al., 2022).
  - [IndoSafety: Culturally Grounded Safety for LLMs in Indonesian Languages](https://aclanthology.org/2025.emnlp-main.465.pdf)
- **Causal reasoning** (constructs) — *measured_by*
  > COPAL-ID (Wibowo et al., 2023) is an Indonesian causal reasoning dataset written from scratch by native speakers in both standard and Jakartan Indonesian, a widely spoken dialect. (Section 5.2.1)
  - [Multilingual Language Model Pretraining using Machine-translated Data](https://aclanthology.org/2025.emnlp-main.1426.pdf)
- **Cultural understanding** (constructs) — *measured_by*
  > We evaluate both TransWebLLM and TransWebLLM-web on this benchmark in a 5-shot setting to assess their ability to reason within the Indonesian cultural sphere. (Section 5.2.1)
  - [Multilingual Language Model Pretraining using Machine-translated Data](https://aclanthology.org/2025.emnlp-main.1426.pdf)
