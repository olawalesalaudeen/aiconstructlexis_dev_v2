# Translation ability
**Type:** Construct  
**Referenced in:** 7 papers  
**Also known as:** Translation capability, Machine translation capability, Translation performance  

## State of the Field

**Definition agreement:** Consensus. All papers define translation ability as a model's latent or underlying capacity to translate text from a source language to a target language accurately, often also fluently. A few papers add context such as inferring it from performance across directions or tasks, low-resource settings, non-parallel data, or transfer to speech translation, but these are settings or evidence for the same core property rather than different phenomena.

**Space of definitions.** Across papers, the prevailing usage treats translation ability as a latent or underlying model capacity to translate from a source language to a target language accurately and fluently. Many definitions add that this capacity is inferred from performance across multiple translation tasks or directions, while a smaller line of work narrows the framing to low-resource settings or describes machine translation capability as something that can be transferred to speech translation. Some papers also describe the capability as demonstrated even without explicit parallel data.

**Space of facets.** Papers use translation ability, translation capability, machine translation capability, and translation performance in largely overlapping ways for the same underlying phenomenon. The main distinctions are scope based: some definitions emphasize performance across diverse translation directions, some focus on low-resource language translation, and some frame it as a text-based capability that can be adapted to speech-to-text translation.

**Space of measurement.** Operationalization is limited: translation ability is linked to 1 measurement instrument and no behavioral indicators. The only linked instrument is Super-NaturalInstructions, used through English-Spanish and English-French translation tasks. This task-based operationalization matches definitions that infer the construct from translation performance across directions, although some papers discuss the same construct in low-resource settings or in transfer to speech translation.

**Links.** Beyond measurement, no causal or correlational claims are recorded. One paper reports that translation ability is related to cross-lingual generalization, framing the connection through linguistic proximity and interdependence among closely related languages, including a case where excluding Talysh lowers performance on Gilaki and Mazandarani.

## Sources

**[A Paradigm Shift in Machine Translation: Boosting Translation Performance of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/0b9536e186a77feff516893a5f393f7a-Paper-Conference.pdf) (as "Translation capability")**
> The underlying capacity of a model to accurately and fluently translate between languages, inferred from performance across diverse translation directions.

**[Making LLMs Better Many-to-Many Speech-to-Text Translators with Curriculum Learning](https://aclanthology.org/2025.acl-long.610.pdf) (as "Machine translation capability")**
> The latent ability of a large language model to translate text between different languages, which can be transferred to improve performance on speech translation tasks.

**[Can LLMs Really Learn to Translate a Low-Resource Language from One Grammar Book?](https://proceedings.iclr.cc/paper_files/paper/2025/file/20f44da80080d76bbc35bca0027f14e6-Paper-Conference.pdf)**
> The latent capacity to produce correct target-language translations from source-language input across low-resource settings.

**[An Auditing Test to Detect Behavioral Shift in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7af140f516c9f57050f7359bf53bc8f0-Paper-Conference.pdf) (as "Translation performance")**
> The capability of a language model to accurately and fluently translate text from a source language to a target language.

## Relationships

### Translation ability →
- **Super-NaturalInstructions** (measurements) — *measured_by*
  > We evaluate Llama3 (8B-Instruct) on English-Spanish and English-French translations from SuperNI.
  - [An Auditing Test to Detect Behavioral Shift in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7af140f516c9f57050f7359bf53bc8f0-Paper-Conference.pdf)
