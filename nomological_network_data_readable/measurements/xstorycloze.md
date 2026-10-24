# XStoryCloze
**Type:** Measurement  
**Referenced in:** 11 papers  
**Also known as:** Xstory_cloze, X-StoryCloze  

## State of the Field

**What it is.** Most descriptions present XStoryCloze as a multilingual or cross-lingual story completion benchmark, typically one where the model chooses the correct ending to a four-sentence story, for evaluating story understanding and commonsense reasoning. Some papers broaden that framing to narrative understanding and coherence across multiple languages, and one snippet groups it with "widely used generic reasoning datasets." A smaller line of work describes it differently, as a dataset for multi-turn dialogues and multilingual tasks focused on story completion and coherence across turns, while another paper specifies it as a professionally translated version of the English StoryCloze dataset in 10 non-English languages, including Basque, and describes it as a commonsense reasoning framework for story understanding, story generation, and script learning.

**What it is claimed to measure.** Papers use it to measure Commonsense reasoning, and it is linked to 1 construct and no behavioral indicators. The measurement claims are concentrated on that single construct rather than spread across several: papers say they use XStoryCloze to test commonsense reasoning ability in multilingual contexts, and they also refer to language-specific subsets, such as Chinese subsets, for that purpose.

**Space of uses.** No other measurement instrument is linked to it. In use, papers position it as part of broader multilingual evaluation suites: one paper includes it among five benchmarks for multilingual general and cross-lingual generation capabilities, another uses it with language-specific subsets, and another treats it as one of the generic reasoning datasets used in evaluation.

## Sources

**[ShifCon: Enhancing Non-Dominant Language Capabilities with a Shift-based Multilingual Contrastive Framework](https://aclanthology.org/2025.acl-long.239.pdf)**
> A multilingual benchmark for evaluating story understanding and commonsense reasoning by requiring the model to choose the correct ending to a four-sentence story.

**[PAFT: Prompt-Agnostic Fine-Tuning](https://aclanthology.org/2025.emnlp-main.37.pdf) (as "Xstory_cloze")**
> Dataset for evaluating multi-turn dialogue and multilingual capabilities, focusing on story completion and coherence across turns.

**[Pipeline Analysis for Developing Instruct LLMs in Low-Resource Languages: A Case Study on Basque](https://aclanthology.org/2025.naacl-long.629.pdf) (as "X-StoryCloze")**
> A professionally translated version of the StoryCloze dataset into 10 non-English languages, including Basque, for evaluating story understanding and commonsense reasoning.

## Relationships

### → XStoryCloze
- **Commonsense reasoning** (constructs) — *measured_by*
  > We use XStoryCloze (Lin et al., 2021) and MGSM (Shi et al., 2022) to test the model’s commonsense and mathematical reasoning ability in multilingual contexts respectively. (Section 3.3)
  - [Pangea: A Fully Open Multilingual Multimodal LLM for 39 Languages](https://proceedings.iclr.cc/paper_files/paper/2025/file/770b8cf7ef10b4aa7170d09b36b6bb6f-Paper-Conference.pdf)
