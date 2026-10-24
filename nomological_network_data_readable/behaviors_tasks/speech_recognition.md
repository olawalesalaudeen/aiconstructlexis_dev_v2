# Speech recognition
**Type:** Behavior  
**Referenced in:** 33 papers  
**Also known as:** Automatic speech recognition, Speech-to-text transcription  

## State of the Field

**Space of definitions.** Across definitions, the prevailing usage treats speech recognition as converting spoken language, an audio signal, or a spoken utterance into written text. Papers use closely related names, especially automatic speech recognition, speech recognition, and speech-to-text transcription; when they specify the target, they describe it as the source-language transcript or text of the same language. Some papers also frame success as accurate speech-to-text conversion, and one paper says ASR requires precise frame-level alignment rather than utterance-level understanding (It's Never Too Late: Fusing Acoustic Information into Large Language Models for Automatic Speech Recognition).

**Variants.** The dominant variant is direct speech-to-text transcription, but several papers study it alongside neighboring tasks, especially speech translation or automatic speech translation. A smaller line treats the transcript as an intermediate representation, describing speech-to-text transcription as converting speech tokens into intermediate text transcripts, while other papers place the task in low-resource, multilingual, conversational, accented, or spectrogram-based settings. One benchmark-oriented definition also says the task includes handling diverse accents, background noise, and variable speech rates (AudioBench: A Universal Benchmark for Audio Large Language Models).

**Space of elicitation and scores.** Papers link speech recognition to 5 measurement instruments overall. It is most often measured by LibriSpeech, then FLEURS, ATIS, and CoVoST 2, and these are described as benchmark datasets or evaluation benchmarks for speech-to-text tasks; the remaining linked instrument, SUPERB, is reported as related to speech recognition rather than as a direct measure. Scoring is usually reported with word error rate, with some papers also using character error rate or reporting 1 minus WER as an accuracy metric.

**What it is taken as evidence of.** Only 1 construct is linked to speech recognition in the papers, speech understanding. Even there, the framing is not uniform: one paper treats speech recognition as related to speech understanding, while another uses speech recognition tasks and benchmarks to measure speech understanding. Papers also link it to 1 other behavioral indicator, speech translation, and one paper claims a causal relationship from speech recognition to speech translation by stating that ASR performance influences translation quality.

## Sources

**[It's Never Too Late: Fusing Acoustic Information into Large Language Models for Automatic Speech Recognition](https://proceedings.iclr.cc/paper_files/paper/2024/file/0231de0eff264c0639a4c43728b8b55b-Paper-Conference.pdf) (as "Automatic speech recognition")**
> The task of converting a spoken language utterance (speech signal) into its corresponding textual transcription.

**[SD-Eval: A  Benchmark Dataset for Spoken Dialogue Understanding Beyond Words](https://proceedings.neurips.cc/paper_files/paper/2024/file/681fe4ec554beabdc9c84a1780cd5a8a-Paper-Datasets_and_Benchmarks_Track.pdf)**
> The observable task of transcribing spoken language from an audio signal into written text.

**[Paralinguistics-Aware Speech-Empowered Large Language Models for Natural Conversation](https://proceedings.neurips.cc/paper_files/paper/2024/file/ecfa5340fd896e5314bc5e132b5dd5ca-Paper-Conference.pdf) (as "Speech-to-text transcription")**
> Converting input speech tokens into intermediate text transcripts.

## Relationships

### Speech recognition →
- **LibriSpeech** (measurements) — *measured_by*
  > ASR | LibriSpeech test-clean/-other, GigaSpeech test | %WER (Table 2)
  - [SALMONN: Towards Generic Hearing Abilities for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/476ab8f369e489c04187ba84f68cfa68-Paper-Conference.pdf)
- **FLEURS** (measurements) — *measured_by*
  > We evaluate the models’ Word Error Rate (WER), memory footprint and latency on an out-of-distribution test dataset: the test split of the English Fleurs dataset (Conneau et al., 2022). (Section 7.2)
  - [Efficient One-shot Compression via Low-Rank Local Feature Distillation](https://aclanthology.org/2025.naacl-long.291.pdf)
- **ATIS** (measurements) — *measured_by*
  > WER (%) and WERR results of early, mid, and late fusion on ATIS and WSJ dataset. (Table 1)
  - [It's Never Too Late: Fusing Acoustic Information into Large Language Models for Automatic Speech Recognition](https://proceedings.iclr.cc/paper_files/paper/2024/file/0231de0eff264c0639a4c43728b8b55b-Paper-Conference.pdf)
- **CoVoST 2** (measurements) — *measured_by*
  > testing speech-to-text recognition (ASR) and translation (ST) on MuST-C v1.0 and CoVoST2 datasets. (Abstract)
  - [Prepending or Cross-Attention for Speech-to-Text? An Empirical Comparison](https://aclanthology.org/2025.naacl-long.153.pdf)
- **Speech translation** (behaviors tasks) — *causes*
  > In the context of ST, ASR performance influences translation quality; therefore, ASR was additionally assessed using Word Error Rate (WER) and Character Error Rate (CER). (Section 4.2)
  - [MultiMed-ST: Large-scale Many-to-many Multilingual Medical Speech Translation](https://aclanthology.org/2025.emnlp-main.599.pdf)

### → Speech recognition
- **Speech understanding** (constructs) — *causes*
  > “ASR and AST are foundational tasks that enable the model to understand speech”
  - [VoiceTextBlender: Augmenting Large Language Models with Speech Capabilities via Single-Stage Joint Speech-Text Supervised Fine-Tuning](https://aclanthology.org/2025.naacl-long.298.pdf)

### Associated with
- **SUPERB** (measurements)
  > We evaluate them on three common speech tasks with corresponding common benchmarks: ASR with TED-LIUMv3 (Hernandez et al., 2018), intent classification, a standard SLU task, with SLURP (Bastianelli et al., 2020), along with speaker ID with VoxCeleb1 (Nagrani et al., 2020), following the SUPERB configuration (Yang et al., 2021) (Section 4.4).
  - [Joint Fine-tuning and Conversion of Pretrained Speech and Language Models towards Linear Complexity](https://proceedings.iclr.cc/paper_files/paper/2025/file/9b79416c0dc4b09feaa169ed5cdd63d4-Paper-Conference.pdf)
