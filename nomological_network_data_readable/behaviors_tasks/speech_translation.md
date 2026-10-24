# Speech translation
**Type:** Behavior  
**Referenced in:** 17 papers  
**Also known as:** Speech-to-text translation, Cascaded speech translation, End-to-end speech translation, Automatic speech translation  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats speech translation as converting spoken content, spoken audio, or an utterance in a source language into written text in a target language. Most definitions make the text output explicit and often formulate the task as directly predicting target-language text from speech, while a smaller number use broader wording such as translating spoken language into another language without specifying the output form. Some papers also use the label speech-to-text translation and describe it as transcribing spoken audio into written text in a different target language.

**Variants.** Papers use several names for closely related versions of the task, including speech translation, speech-to-text translation, and direct speech translation. The most common distinction is between end-to-end speech translation, which directly converts speech in one language to text in another without intermediate transcription, and cascaded speech translation, which first transcribes speech with ASR and then applies machine translation. Smaller strands examine zero-shot speech translation settings and terminology translation within speech translation.

**Space of elicitation and scores.** Papers measure this behavior with three linked instruments, most often CoVoST 2, and also FLEURS and MuST-C. These instruments are used as dataset-based evaluations of speech translation, and some papers describe scoring with BLEU, including sacreBLEU-computed BLEU scores.

**What it is taken as evidence of.** No construct is linked to speech translation, so papers do not converge on it as evidence of a particular construct. Outside construct links, one paper claims a causal relationship from speech recognition to speech translation, and one paper reports that literal translation correlates with speech translation.

## Sources

**[Dynamic-SUPERB Phase-2: A Collaboratively Expanding Benchmark for Measuring the Capabilities of Spoken Language Models with 180 Tasks](https://proceedings.iclr.cc/paper_files/paper/2025/file/ce1a7774429d5c06cc744ff4260a8e9f-Paper-Conference.pdf)**
> Translating spoken language into another language.

**[SPIRIT: Patching Speech Language Models against Jailbreak Attacks](https://aclanthology.org/2025.emnlp-main.734.pdf) (as "Speech-to-text translation")**
> The task of transcribing spoken audio from a source language into written text in a different target language.

**[MultiMed-ST: Large-scale Many-to-many Multilingual Medical Speech Translation](https://aclanthology.org/2025.emnlp-main.599.pdf) (as "Cascaded speech translation")**
> Translating speech by first transcribing it to text using ASR and then applying machine translation to the transcribed text.

**[MultiMed-ST: Large-scale Many-to-many Multilingual Medical Speech Translation](https://aclanthology.org/2025.emnlp-main.599.pdf) (as "End-to-end speech translation")**
> Directly translating speech in one language to text in another without an intermediate transcription step.

**[VoiceTextBlender: Augmenting Large Language Models with Speech Capabilities via Single-Stage Joint Speech-Text Supervised Fine-Tuning](https://aclanthology.org/2025.naacl-long.298.pdf) (as "Automatic speech translation")**
> The task of translating spoken language from a source language in an audio input into written text in a target language.

## Relationships

### Speech translation →
- **CoVoST 2** (measurements) — *measured_by*
  > “En2Zh CoVoST2-En2Zh ...”
  - [SALMONN: Towards Generic Hearing Abilities for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/476ab8f369e489c04187ba84f68cfa68-Paper-Conference.pdf)
- **MuST-C** (measurements) — *measured_by*
  > MuST-C∗(En-Nl|En-It|En-Ro|En-Es) (Table 5).
  - [Soundwave: Less is More for Speech-Text Alignment in LLMs](https://aclanthology.org/2025.acl-long.917.pdf)
- **FLEURS** (measurements) — *measured_by*
  > We analyze the output probability distributions of Whisper on the ASR and ST tasks of the Fleurs data (Conneau et al., 2023) on 4 language pairs (Section 3)
  - [Are Generative Models Underconfident? Better Quality Estimation with Boosted Model Probability](https://aclanthology.org/2025.emnlp-main.166.pdf)

### → Speech translation
- **Speech recognition** (behaviors tasks) — *causes*
  > In the context of ST, ASR performance influences translation quality; therefore, ASR was additionally assessed using Word Error Rate (WER) and Character Error Rate (CER). (Section 4.2)
  - [MultiMed-ST: Large-scale Many-to-many Multilingual Medical Speech Translation](https://aclanthology.org/2025.emnlp-main.599.pdf)

### Associated with
- **Literal translation** (behaviors tasks)
  > SLT systems experience a pronounced performance drop on idiomatic data, often reverting to literal translations even in higher layers. (Section 1)
  - [It's Not a Walk in the Park! Challenges of Idiom Translation in Speech-to-text Systems](https://aclanthology.org/2025.acl-long.1512.pdf)
